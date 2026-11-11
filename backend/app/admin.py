from datetime import datetime, timedelta
from fastapi import APIRouter, Depends, HTTPException, BackgroundTasks
from pydantic import BaseModel
from sqlalchemy import select, func, or_
from sqlalchemy.orm import Session

from . import ingest
from .auth import admin_user
from .db import get_db, SessionLocal
from .models import User, Match, Prediction, Ticket, Bookmaker, JobStatus, Team, Banner
from .serial import match_out, iso, user_short
from .api import bm_out

router = APIRouter(prefix="/api/admin", dependencies=[Depends(admin_user)])


@router.get("/stats")
def stats(db: Session = Depends(get_db)):
    n = datetime.utcnow()
    c = lambda q: db.scalar(q) or 0  # noqa
    return {
        "users": c(select(func.count()).select_from(User)),
        "users_24h": c(select(func.count()).select_from(User).where(User.created_at > n - timedelta(days=1))),
        "users_7d": c(select(func.count()).select_from(User).where(User.created_at > n - timedelta(days=7))),
        "predictions": c(select(func.count()).select_from(Prediction)),
        "predictions_24h": c(select(func.count()).select_from(Prediction).where(Prediction.created_at > n - timedelta(days=1))),
        "tickets": c(select(func.count()).select_from(Ticket)),
        "matches_total": c(select(func.count()).select_from(Match)),
        "matches_with_odds_48h": sum(1 for m in db.scalars(select(Match).where(Match.start > n, Match.start < n + timedelta(days=2))).all() if m.odds),
        "matches_48h": c(select(func.count()).select_from(Match).where(Match.start > n, Match.start < n + timedelta(days=2))),
        "live": c(select(func.count()).select_from(Match).where(Match.status == "live")),
        "jobs": [{"name": j.name, "last_ok": iso(j.last_ok), "info": j.info, "last_error": j.last_error[:600],
                  "last_error_at": iso(j.last_error_at)} for j in db.scalars(select(JobStatus).order_by(JobStatus.name)).all()],
    }


@router.get("/users")
def users(q: str = "", db: Session = Depends(get_db)):
    s = select(User).order_by(User.created_at.desc()).limit(100)
    if q:
        s = s.where(or_(User.username.ilike(f"%{q}%"), User.email.ilike(f"%{q}%")))
    out = []
    for u in db.scalars(s).all():
        cnt = db.scalar(select(func.count()).select_from(Prediction).where(Prediction.user_id == u.id))
        out.append({**user_short(u), "email": u.email, "created": iso(u.created_at), "bank": round(u.bank, 2),
                    "banned": u.is_banned, "admin": u.is_admin, "predictions": cnt, "tg": bool(u.tg_chat_id)})
    return out


class BanIn(BaseModel):
    banned: bool


@router.post("/users/{uid}/ban")
def ban(uid: int, body: BanIn, db: Session = Depends(get_db)):
    u = db.get(User, uid)
    if not u or u.is_admin:
        raise HTTPException(400)
    u.is_banned = body.banned
    db.commit()
    return {"ok": True}


@router.get("/predictions")
def predictions(only_comments: bool = True, db: Session = Depends(get_db)):
    s = select(Prediction).order_by(Prediction.created_at.desc()).limit(100)
    if only_comments:
        s = s.where(Prediction.comment != "")
    return [{"id": p.id, "user": user_short(p.user), "match": match_out(p.match), "pick": p.pick, "odds": p.odds,
             "stake": p.stake, "comment": p.comment, "status": p.status, "created": iso(p.created_at)} for p in db.scalars(s).all()]


@router.delete("/predictions/{pid}/comment")
def del_comment(pid: int, db: Session = Depends(get_db)):
    p = db.get(Prediction, pid)
    if not p:
        raise HTTPException(404)
    p.comment = ""
    db.commit()
    return {"ok": True}


class BmIn(BaseModel):
    name: str
    url: str = ""
    bonus_sr: str = ""
    bonus_ru: str = ""
    rating: float = 4.5
    color: str = "#F5C518"
    sort: int = 0
    active: bool = True


@router.get("/bookmakers")
def bms(db: Session = Depends(get_db)):
    return [{**bm_out(b), "sort": b.sort, "active": b.active} for b in db.scalars(select(Bookmaker).order_by(Bookmaker.sort)).all()]


@router.post("/bookmakers")
def bm_create(body: BmIn, db: Session = Depends(get_db)):
    b = Bookmaker(**body.model_dump())
    db.add(b)
    db.commit()
    return bm_out(b)


@router.put("/bookmakers/{bid}")
def bm_update(bid: int, body: BmIn, db: Session = Depends(get_db)):
    b = db.get(Bookmaker, bid)
    if not b:
        raise HTTPException(404)
    for k, v in body.model_dump().items():
        setattr(b, k, v)
    db.commit()
    return bm_out(b)


@router.delete("/bookmakers/{bid}")
def bm_delete(bid: int, db: Session = Depends(get_db)):
    b = db.get(Bookmaker, bid)
    if b:
        db.delete(b)
        db.commit()
    return {"ok": True}


@router.get("/matches")
def admin_matches(q: str = "", db: Session = Depends(get_db)):
    n = datetime.utcnow()
    s = select(Match).where(Match.start > n - timedelta(hours=6), Match.start < n + timedelta(days=7)).order_by(Match.start).limit(300)
    ms = db.scalars(s).all()
    if q:
        ql = q.lower()
        ms = [m for m in ms if ql in m.home.name.lower() or ql in m.away.name.lower() or ql in m.league.name.lower()]
    return [match_out(m) for m in ms[:150]]


@router.post("/matches/{mid}/feature")
def feature(mid: int, db: Session = Depends(get_db)):
    m = db.get(Match, mid)
    if not m:
        raise HTTPException(404)
    m.featured = True  # several matches of the day can be pinned for the carousel
    db.commit()
    return {"ok": True}


JOBS = {"football": ingest.sync_football, "basketball": ingest.sync_basketball, "odds": ingest.sync_odds,
        "settle": ingest.settle, "trends": ingest.build_trends, "analysis": ingest.build_analysis, "logos": __import__("app.logos", fromlist=["x"]).sync_logos, "highlights": __import__("app.highlights", fromlist=["x"]).sync_highlights, "other_sports": ingest.sync_other_sports, "x22_line": ingest.sync_x22_line}


def _run(name):
    db = SessionLocal()
    try:
        ingest.job(db, name, JOBS[name])
    finally:
        db.close()


@router.post("/jobs/{name}")
def run_job(name: str, bg: BackgroundTasks):
    if name not in JOBS:
        raise HTTPException(404)
    bg.add_task(_run, name)
    return {"started": name}



# ---------------- banners (home carousel) ----------------
from datetime import datetime as _dt  # noqa: E402
import io as _io, os as _os, secrets as _secrets  # noqa: E402,E401
from fastapi import UploadFile, File  # noqa: E402
from PIL import Image as _Image, ImageOps as _ImageOps  # noqa: E402
from pydantic import BaseModel as _BM  # noqa: E402
from . import config as _config  # noqa: E402


class BannerIn(_BM):
    kind: str = "promo"
    title_sr: str = ""
    title_ru: str = ""
    text_sr: str = ""
    text_ru: str = ""
    cta_sr: str = ""
    cta_ru: str = ""
    link: str = ""
    starts_at: str | None = None
    ends_at: str | None = None
    position: int = 0
    active: bool = True


def _b_out(b: Banner):
    return {"id": b.id, "kind": b.kind, "title_sr": b.title_sr, "title_ru": b.title_ru, "text_sr": b.text_sr, "text_ru": b.text_ru,
            "cta_sr": b.cta_sr, "cta_ru": b.cta_ru, "link": b.link, "image": f"/media/banners/{b.image}" if b.image else "",
            "starts_at": b.starts_at.isoformat() if b.starts_at else None, "ends_at": b.ends_at.isoformat() if b.ends_at else None,
            "position": b.position, "active": b.active}


def _apply(b: Banner, body: BannerIn):
    for k in ("kind", "title_sr", "title_ru", "text_sr", "text_ru", "cta_sr", "cta_ru", "link", "position", "active"):
        setattr(b, k, getattr(body, k))
    for k in ("starts_at", "ends_at"):
        v = getattr(body, k)
        setattr(b, k, _dt.fromisoformat(v.replace("Z", "")) if v else None)


@router.get("/banners")
def banners_list(db: Session = Depends(get_db)):
    return [_b_out(b) for b in db.scalars(select(Banner).order_by(Banner.position, Banner.id)).all()]


@router.post("/banners")
def banners_create(body: BannerIn, db: Session = Depends(get_db)):
    b = Banner()
    _apply(b, body)
    db.add(b)
    db.commit()
    return _b_out(b)


@router.put("/banners/{bid}")
def banners_update(bid: int, body: BannerIn, db: Session = Depends(get_db)):
    b = db.get(Banner, bid)
    if not b:
        raise HTTPException(404)
    _apply(b, body)
    db.commit()
    return _b_out(b)


@router.delete("/banners/{bid}")
def banners_delete(bid: int, db: Session = Depends(get_db)):
    b = db.get(Banner, bid)
    if b:
        db.delete(b)
        db.commit()
    return {"ok": True}


@router.post("/banners/{bid}/image")
async def banners_image(bid: int, file: UploadFile = File(...), db: Session = Depends(get_db)):
    b = db.get(Banner, bid)
    if not b:
        raise HTTPException(404)
    data = await file.read()
    if len(data) > 12 * 1024 * 1024:
        raise HTTPException(400, "file_big")
    try:
        im = _ImageOps.exif_transpose(_Image.open(_io.BytesIO(data))).convert("RGB")
    except Exception:  # noqa
        raise HTTPException(400, "file_bad")
    im.thumbnail((1600, 900), _Image.LANCZOS)
    folder = _os.path.join(_config.MEDIA_DIR, "banners")
    _os.makedirs(folder, exist_ok=True)
    name = f"{bid}_{_secrets.token_hex(5)}.webp"
    im.save(_os.path.join(folder, name), "WEBP", quality=84)
    b.image = name
    db.commit()
    return _b_out(b)


@router.post("/matches/{mid}/unfeature")
def unfeature(mid: int, db: Session = Depends(get_db)):
    m = db.get(Match, mid)
    if m:
        m.featured = False
        db.commit()
    return {"ok": True}


# ---------------- dashboard (bento overview) ----------------
JOB_EVERY = {"live": 20, "xfeed": 9, "football_live": 40, "odds": 180, "settle": 60, "maxbet_results": 180, "other_results": 180,
             "football": 900, "basketball": 180, "basketball_week": 1800, "other_sports": 300, "names": 300, "logos": 600, "highlights": 900,
             "finish_stale": 60}


@router.get("/dashboard")
def dashboard(period: str = "week", db: Session = Depends(get_db)):
    from .models import Highlight
    n = datetime.utcnow()
    if period == "day":
        span, step, buckets = timedelta(days=1), timedelta(hours=1), 24
    elif period == "month":
        span, step, buckets = timedelta(days=30), timedelta(days=1), 30
    else:
        period, span, step, buckets = "week", timedelta(days=7), timedelta(days=1), 7
    start = n - span
    c = lambda q: db.scalar(q) or 0  # noqa

    def series(model, col):
        rows = db.scalars(select(col).where(col > start)).all()
        out = [0] * buckets
        for t in rows:
            i = int((t - start) / step)
            if 0 <= i < buckets:
                out[i] += 1
        return out

    def count(model, col, a, b):
        return c(select(func.count()).select_from(model).where(col > a, col <= b))

    def kpi(model, col):
        cur, prev = count(model, col, start, n), count(model, col, start - span, start)
        return {"value": cur, "prev": prev, "delta": (round((cur - prev) / prev * 100) if prev else (100 if cur else 0)), "series": series(model, col)}

    labels = [(start + step * (i + 1)).strftime("%H:00" if period == "day" else "%d.%m") for i in range(buckets)]
    soon = db.scalars(select(Match).where(Match.start > n, Match.start < n + timedelta(days=2))).all()
    jobs = db.scalars(select(JobStatus).order_by(JobStatus.name)).all()
    health = []
    for j in jobs:
        every = JOB_EVERY.get(j.name)
        late = bool(every and j.last_ok and (n - j.last_ok).total_seconds() > every * 4 + 120)
        err = bool(j.last_error_at and (not j.last_ok or j.last_error_at > j.last_ok))
        health.append({"name": j.name, "ok": not late and not err, "late": late, "err": err, "last_ok": iso(j.last_ok), "info": j.info[:120]})
    top = db.execute(select(Prediction.user_id, func.count()).where(Prediction.created_at > start).group_by(Prediction.user_id)
                     .order_by(func.count().desc()).limit(6)).all()
    top_users = []
    for uid, cnt in top:
        u = db.get(User, uid)
        if u:
            won = c(select(func.count()).select_from(Prediction).where(Prediction.user_id == uid, Prediction.created_at > start, Prediction.status == "won"))
            settled = c(select(func.count()).select_from(Prediction).where(Prediction.user_id == uid, Prediction.created_at > start, Prediction.status.in_(["won", "lost"])))
            top_users.append({**user_short(u), "count": cnt, "hit": round(won / settled * 100) if settled else None})
    tickets = [{"id": t.id, "user": user_short(t.user), "odds": round(t.total_odds, 2), "items": len(t.items), "status": t.status, "created": iso(t.created_at)}
               for t in db.scalars(select(Ticket).order_by(Ticket.created_at.desc()).limit(6)).all()]
    live = [match_out(m) for m in db.scalars(select(Match).where(Match.status == "live").order_by(Match.start).limit(6)).all()]
    teams_total = c(select(func.count()).select_from(Team))
    teams_logo = c(select(func.count()).select_from(Team).where(Team.logo != ""))
    hl_total = c(select(func.count()).select_from(Highlight))
    hl_blocked = c(select(func.count()).select_from(Highlight).where(Highlight.status == "blocked"))
    return {
        "period": period, "labels": labels,
        "users_total": c(select(func.count()).select_from(User)),
        "users": kpi(User, User.created_at), "predictions": kpi(Prediction, Prediction.created_at), "tickets": kpi(Ticket, Ticket.created_at),
        "live_count": c(select(func.count()).select_from(Match).where(Match.status == "live")),
        "odds_cover": {"with": sum(1 for m in soon if m.odds), "total": len(soon)},
        "health": health, "top_users": top_users, "tickets_recent": tickets, "live": live,
        "new_users": [{**user_short(u), "created": iso(u.created_at), "club": (u.club.short_name if getattr(u, "club", None) else "")}
                      for u in db.scalars(select(User).order_by(User.created_at.desc()).limit(6)).all()],
        "content": {"banners": c(select(func.count()).select_from(Banner).where(Banner.active == True)),  # noqa
                    "pinned": c(select(func.count()).select_from(Match).where(Match.featured == True, Match.start > n - timedelta(hours=3)))  # noqa
                    , "highlights": hl_total - hl_blocked, "highlights_blocked": hl_blocked,
                    "logos": round(teams_logo / teams_total * 100) if teams_total else 0, "matches": c(select(func.count()).select_from(Match))},
    }
