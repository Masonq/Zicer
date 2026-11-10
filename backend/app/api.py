import io
import os
import random
import re
import secrets
from datetime import datetime, timedelta

from fastapi import APIRouter, Depends, HTTPException, Query, UploadFile, File
from PIL import Image, ImageOps
from pydantic import BaseModel, Field
from sqlalchemy import select, func, or_, case, and_
from sqlalchemy.orm import Session

from . import config, ingest
from .auth import hash_pw, check_pw, make_token, current_user, current_user_opt
from .db import get_db
from .models import (User, Team, Match, Prediction, Ticket, TicketItem, ScorePick, Trend, Bookmaker, League)
from .serial import match_out, user_short, user_me, team_out, iso

router = APIRouter(prefix="/api")
COLORS = ["#2E7D5B", "#C8553D", "#3D6FC8", "#8E5CC8", "#C8A23D", "#3DA9C8", "#C83D7B", "#5C8E3D"]


def utcnow():
    return datetime.utcnow()


# ---------------- auth ----------------
class RegisterIn(BaseModel):
    username: str = Field(min_length=3, max_length=24)
    email: str = Field(min_length=5, max_length=160)
    password: str = Field(min_length=6, max_length=128)
    lang: str = "sr"


class LoginIn(BaseModel):
    login: str
    password: str


@router.post("/auth/register")
def register(body: RegisterIn, db: Session = Depends(get_db)):
    uname = body.username.strip()
    if not re.fullmatch(r"[A-Za-z0-9_.]{3,24}", uname):
        raise HTTPException(400, "username_invalid")
    email = body.email.strip().lower()
    if not re.fullmatch(r"[^@\s]+@[^@\s]+\.[^@\s]+", email):
        raise HTTPException(400, "email_invalid")
    if db.scalar(select(User).where(func.lower(User.username) == uname.lower())):
        raise HTTPException(400, "username_taken")
    if db.scalar(select(User).where(User.email == email)):
        raise HTTPException(400, "email_taken")
    u = User(username=uname, email=email, pw_hash=hash_pw(body.password), lang=body.lang if body.lang in ("sr", "sr-cyr", "ru") else "sr",
             bank=config.START_BANK, color=random.choice(COLORS), tg_code=secrets.token_hex(8))
    db.add(u)
    db.commit()
    return {"token": make_token(u.id), "user": user_me(u)}


@router.post("/auth/login")
def login(body: LoginIn, db: Session = Depends(get_db)):
    lg = body.login.strip()
    u = db.scalar(select(User).where(or_(func.lower(User.username) == lg.lower(), User.email == lg.lower())))
    if not u or not check_pw(body.password, u.pw_hash):
        raise HTTPException(400, "bad_login")
    if u.is_banned:
        raise HTTPException(403, "banned")
    return {"token": make_token(u.id), "user": user_me(u)}


@router.get("/me")
def me(u: User = Depends(current_user)):
    return user_me(u)


class MePatch(BaseModel):
    lang: str | None = None
    display_name: str | None = None
    username: str | None = None
    bio: str | None = None
    fav_football_id: int | None = None
    fav_basket_id: int | None = None
    clear_basket: bool = False
    clear_football: bool = False


@router.patch("/me")
def patch_me(body: MePatch, u: User = Depends(current_user), db: Session = Depends(get_db)):
    u = db.merge(u)
    if body.lang in ("sr", "sr-cyr", "ru"):
        u.lang = body.lang
    if body.display_name is not None:
        dn = re.sub(r"\s+", " ", body.display_name).strip()[:48]
        u.display_name = dn
    if body.bio is not None:
        u.bio = body.bio.strip()[:160]
    if body.username is not None and body.username.strip().lstrip("@") != u.username:
        un = body.username.strip().lstrip("@")
        if not re.fullmatch(r"[A-Za-z0-9_.]{3,24}", un):
            raise HTTPException(400, "username_invalid")
        other = db.scalar(select(User).where(func.lower(User.username) == un.lower(), User.id != u.id))
        if other:
            raise HTTPException(400, "username_taken")
        u.username = un
    if body.fav_football_id:
        t = db.get(Team, body.fav_football_id)
        if not t or t.sport != "football":
            raise HTTPException(400, "team")
        u.fav_football_id = t.id
    if body.fav_basket_id:
        t = db.get(Team, body.fav_basket_id)
        if not t or t.sport != "basketball":
            raise HTTPException(400, "team")
        u.fav_basket_id = t.id
    if body.clear_basket:
        u.fav_basket_id = None
    if body.clear_football:
        u.fav_football_id = None
    db.commit()
    db.refresh(u)
    return user_me(u)


class PwIn(BaseModel):
    old: str
    new: str = Field(min_length=6, max_length=128)


@router.post("/me/password")
def change_pw(body: PwIn, u: User = Depends(current_user), db: Session = Depends(get_db)):
    u = db.merge(u)
    if not check_pw(body.old, u.pw_hash):
        raise HTTPException(400, "bad_password")
    u.pw_hash = hash_pw(body.new)
    db.commit()
    return {"ok": True}


@router.post("/me/avatar")
async def upload_avatar(file: UploadFile = File(...), u: User = Depends(current_user), db: Session = Depends(get_db)):
    data = await file.read()
    if len(data) > 8 * 1024 * 1024:
        raise HTTPException(400, "file_big")
    try:
        im = Image.open(io.BytesIO(data))
        im = ImageOps.exif_transpose(im).convert("RGB")
    except Exception:  # noqa
        raise HTTPException(400, "file_bad")
    w, h = im.size
    side = min(w, h)
    im = im.crop(((w - side) // 2, (h - side) // 2, (w - side) // 2 + side, (h - side) // 2 + side)).resize((320, 320), Image.LANCZOS)
    os.makedirs(os.path.join(config.MEDIA_DIR, "avatars"), exist_ok=True)
    name = f"{u.id}_{secrets.token_hex(6)}.webp"
    im.save(os.path.join(config.MEDIA_DIR, "avatars", name), "WEBP", quality=86)
    u = db.merge(u)
    old = u.avatar
    u.avatar = name
    db.commit()
    if old:
        try:
            os.remove(os.path.join(config.MEDIA_DIR, "avatars", old))
        except OSError:
            pass
    return user_me(u)


@router.delete("/me/avatar")
def delete_avatar(u: User = Depends(current_user), db: Session = Depends(get_db)):
    u = db.merge(u)
    if u.avatar:
        try:
            os.remove(os.path.join(config.MEDIA_DIR, "avatars", u.avatar))
        except OSError:
            pass
    u.avatar = ""
    db.commit()
    return user_me(u)


@router.get("/me/telegram")
def tg_link(u: User = Depends(current_user), db: Session = Depends(get_db)):
    u = db.merge(u)
    if not u.tg_code:
        u.tg_code = secrets.token_hex(8)
        db.commit()
    if not config.TG_BOT_NAME:
        return {"enabled": False}
    return {"enabled": True, "url": f"https://t.me/{config.TG_BOT_NAME}?start={u.tg_code}", "linked": bool(u.tg_chat_id)}


# ---------------- teams ----------------
@router.get("/teams/serbian")
def serbian_teams(sport: str = "football", db: Session = Depends(get_db)):
    ts = db.scalars(select(Team).where(Team.sport == sport, Team.is_serbian == True)).all()  # noqa
    ts = [t for t in ts if "serbia" not in t.name.lower() and "srbija" not in t.name.lower()]
    big = ["zvezda", "partizan", "vojvodina", "tsc", "cukaricki", "čukarički", "radnicki", "radnički", "novi pazar"]

    def rank(t):
        n = t.name.lower()
        for i, b in enumerate(big):
            if b in n:
                return (i, n)
        return (99, n)
    return [team_out(t) for t in sorted(ts, key=rank)]


@router.get("/teams/{tid}")
def team_page(tid: int, db: Session = Depends(get_db)):
    t = db.get(Team, tid)
    if not t:
        raise HTTPException(404)
    q = select(Match).where(or_(Match.home_id == tid, Match.away_id == tid))
    nxt = db.scalars(q.where(Match.status.in_(["scheduled", "live"])).order_by(Match.start).limit(8)).all()
    last = db.scalars(q.where(Match.status == "finished").order_by(Match.start.desc()).limit(8)).all()
    fans = db.scalar(select(func.count()).select_from(User).where(or_(User.fav_football_id == tid, User.fav_basket_id == tid)))
    return {"team": team_out(t), "next": [match_out(m) for m in nxt], "last": [match_out(m) for m in last],
            "form": ingest.team_form(db, tid, utcnow() + timedelta(days=1), 6), "fans": fans}


# ---------------- matches ----------------
def _pred_counts(db: Session, ids: list[int]) -> dict:
    if not ids:
        return {}
    rows = db.execute(select(Prediction.match_id, func.count()).where(Prediction.match_id.in_(ids)).group_by(Prediction.match_id)).all()
    return dict(rows)


def _list(db: Session, ms: list[Match]) -> list[dict]:
    pc = _pred_counts(db, [m.id for m in ms])
    return [match_out(m, {"predictions": pc.get(m.id, 0)}) for m in ms]


def _day_bounds(day: str, tz_offset: int):
    # tz_offset in minutes (client local = UTC + offset)
    local_now = utcnow() + timedelta(minutes=tz_offset)
    base = local_now.replace(hour=0, minute=0, second=0, microsecond=0)
    shift = {"yesterday": -1, "today": 0, "tomorrow": 1}.get(day, 0)
    lo = base + timedelta(days=shift) - timedelta(minutes=tz_offset)
    return lo, lo + timedelta(days=1)


@router.get("/matches")
def matches(sport: str = "all", day: str = "today", serbian: bool = False, tz: int = 60, db: Session = Depends(get_db)):
    q = select(Match).join(League, Match.league_id == League.id)
    if sport != "all":
        q = q.where(Match.sport == sport)
    if day == "live":
        q = q.where(Match.status == "live")
    else:
        lo, hi = _day_bounds(day, tz)
        q = q.where(Match.start >= lo, Match.start < hi)
    ms = db.scalars(q.order_by(League.priority, Match.start)).unique().all()
    if serbian:
        ms = [m for m in ms if m.home.is_serbian or m.away.is_serbian or m.league.country == "SRB"]
    return _list(db, ms)


@router.get("/matches/{mid}")
def match_detail(mid: int, u: User | None = Depends(current_user_opt), db: Session = Depends(get_db)):
    m = db.get(Match, mid)
    if not m:
        raise HTTPException(404)
    preds = db.scalars(select(Prediction).where(Prediction.match_id == mid).order_by(Prediction.created_at.desc()).limit(60)).all()
    trends = db.scalars(select(Trend).where(Trend.match_id == mid).order_by(Trend.strength.desc())).all()
    hh = ingest.h2h(db, m.home_id, m.away_id, m.start + timedelta(minutes=1) if m.status != "finished" else m.start)
    mine = db.scalar(select(Prediction).where(Prediction.match_id == mid, Prediction.user_id == u.id)) if u else None
    out = match_out(m, {
        "split": ingest.community_split(db, mid),
        "ext_fm": m.ext.startswith("fm:"),
        "analysis": {"sr": m.analysis_sr, "ru": m.analysis_ru},
        "form": {"home": ingest.team_form(db, m.home_id, m.start), "away": ingest.team_form(db, m.away_id, m.start)},
        "h2h": [match_out(x) for x in hh],
        "trends": [{"pick": t.pick, "odds": t.odds, "sr": t.text_sr, "ru": t.text_ru} for t in trends],
        "predictions": [{"id": p.id, "user": user_short(p.user), "pick": p.pick, "odds": p.odds, "stake": p.stake,
                         "comment": p.comment, "status": p.status, "profit": p.profit, "created": iso(p.created_at),
                         "user_stats": None} for p in preds],
        "mine": {"pick": mine.pick, "odds": mine.odds, "stake": mine.stake, "status": mine.status, "profit": mine.profit} if mine else None,
        "open": m.status == "scheduled" and m.start > utcnow() and bool(m.odds),
    }, full=True)
    if m.is_derby:
        out["score_picks"] = _score_summary(db, m, u)
    return out


def _score_summary(db: Session, m: Match, u: User | None):
    rows = db.execute(select(ScorePick.home, ScorePick.away, func.count()).where(ScorePick.match_id == m.id)
                      .group_by(ScorePick.home, ScorePick.away).order_by(func.count().desc()).limit(6)).all()
    total = db.scalar(select(func.count()).select_from(ScorePick).where(ScorePick.match_id == m.id)) or 0
    mine = db.scalar(select(ScorePick).where(ScorePick.match_id == m.id, ScorePick.user_id == u.id)) if u else None
    return {"total": total, "top": [{"score": [h, a], "count": c} for h, a, c in rows],
            "mine": [mine.home, mine.away] if mine else None}


class PredictIn(BaseModel):
    pick: str
    stake: float
    comment: str = ""


@router.post("/matches/{mid}/predict")
def predict(mid: int, body: PredictIn, u: User = Depends(current_user), db: Session = Depends(get_db)):
    u = db.merge(u)
    m = db.get(Match, mid)
    if not m or m.status != "scheduled" or m.start <= utcnow():
        raise HTTPException(400, "closed")
    if not body.pick or len(body.pick) > 32:
        raise HTTPException(400, "pick")
    odds = ingest.best_odds(m, body.pick)
    if not odds:
        raise HTTPException(400, "no_odds")
    stake = round(float(body.stake), 0)
    if stake < 10 or stake > config.MAX_STAKE:
        raise HTTPException(400, "stake_range")
    if u.bank < stake:
        raise HTTPException(400, "bank")
    if db.scalar(select(Prediction).where(Prediction.match_id == mid, Prediction.user_id == u.id)):
        raise HTTPException(400, "exists")
    u.bank -= stake
    p = Prediction(user_id=u.id, match_id=mid, pick=body.pick, odds=odds, stake=stake, comment=body.comment.strip()[:1200])
    db.add(p)
    db.commit()
    return {"ok": True, "bank": round(u.bank, 2), "odds": odds}


class ScoreIn(BaseModel):
    home: int = Field(ge=0, le=200)
    away: int = Field(ge=0, le=200)


@router.post("/matches/{mid}/score")
def score_pick(mid: int, body: ScoreIn, u: User = Depends(current_user), db: Session = Depends(get_db)):
    m = db.get(Match, mid)
    if not m or not m.is_derby or m.status != "scheduled" or m.start <= utcnow():
        raise HTTPException(400, "closed")
    sp = db.scalar(select(ScorePick).where(ScorePick.match_id == mid, ScorePick.user_id == u.id))
    if not sp:
        sp = ScorePick(match_id=mid, user_id=u.id, home=body.home, away=body.away)
        db.add(sp)
    sp.home, sp.away = body.home, body.away
    db.commit()
    return _score_summary(db, m, u)


# ---------------- tickets ----------------
class TicketItemIn(BaseModel):
    match_id: int
    pick: str


class TicketIn(BaseModel):
    items: list[TicketItemIn]
    stake: float


def ticket_out(t: Ticket) -> dict:
    return {"id": t.id, "user": user_short(t.user), "stake": t.stake, "total_odds": t.total_odds, "status": t.status,
            "profit": t.profit, "created": iso(t.created_at), "potential": round(t.stake * t.total_odds, 2),
            "items": [{"match": match_out(i.match), "pick": i.pick, "odds": i.odds, "status": i.status} for i in t.items]}


@router.post("/tickets")
def create_ticket(body: TicketIn, u: User = Depends(current_user), db: Session = Depends(get_db)):
    u = db.merge(u)
    ids = [i.match_id for i in body.items]
    if len(ids) < 2 or len(ids) > 12 or len(set(ids)) != len(ids):
        raise HTTPException(400, "ticket_size")
    stake = round(float(body.stake), 0)
    if stake < 10 or stake > config.MAX_STAKE:
        raise HTTPException(400, "stake_range")
    if u.bank < stake:
        raise HTTPException(400, "bank")
    t = Ticket(user_id=u.id, stake=stake, total_odds=1.0)
    total = 1.0
    for it in body.items:
        m = db.get(Match, it.match_id)
        if not m or m.status != "scheduled" or m.start <= utcnow() or not it.pick or len(it.pick) > 32:
            raise HTTPException(400, "closed")
        o = ingest.best_odds(m, it.pick)
        if not o:
            raise HTTPException(400, "no_odds")
        total *= o
        t.items.append(TicketItem(match_id=m.id, pick=it.pick, odds=o))
    t.total_odds = round(total, 2)
    u.bank -= stake
    db.add(t)
    db.commit()
    db.refresh(t)
    return ticket_out(t)


@router.get("/tickets/{tid}")
def get_ticket(tid: int, db: Session = Depends(get_db)):
    t = db.get(Ticket, tid)
    if not t:
        raise HTTPException(404)
    return ticket_out(t)


@router.get("/tickets")
def ticket_feed(scope: str = "recent", db: Session = Depends(get_db)):
    q = select(Ticket)
    if scope == "won":
        q = q.where(Ticket.status == "won").order_by(Ticket.total_odds.desc(), Ticket.settled_at.desc())
    else:
        q = q.order_by(Ticket.created_at.desc())
    return [ticket_out(t) for t in db.scalars(q.limit(20)).all()]


# ---------------- ranking ----------------
def _period_start(period: str):
    n = utcnow()
    if period == "week":
        return n - timedelta(days=7)
    if period == "month":
        return n.replace(day=1, hour=0, minute=0, second=0, microsecond=0)
    return datetime(2000, 1, 1)


def ranking_rows(db: Session, period: str, limit: int = 50, min_preds: int = 3):
    since = _period_start(period)
    won = func.sum(case((Prediction.status == "won", 1), else_=0))
    rows = db.execute(select(Prediction.user_id, func.count(), won, func.sum(Prediction.profit), func.sum(Prediction.stake))
                      .where(Prediction.status.in_(["won", "lost"]), Prediction.settled_at >= since)
                      .group_by(Prediction.user_id)).all()
    tick = dict(db.execute(select(Ticket.user_id, func.sum(Ticket.profit)).where(Ticket.status.in_(["won", "lost"]), Ticket.settled_at >= since)
                           .group_by(Ticket.user_id)).all())
    out = []
    for uid, cnt, w, profit, staked in rows:
        if cnt < min_preds:
            continue
        p = (profit or 0) + (tick.get(uid) or 0)
        out.append({"user_id": uid, "count": cnt, "won": int(w or 0), "profit": round(p, 2),
                    "roi": round(100 * (profit or 0) / staked, 1) if staked else 0, "winrate": round(100 * (w or 0) / cnt)})
    out.sort(key=lambda r: -r["profit"])
    out = out[:limit]
    users = {u.id: u for u in db.scalars(select(User).where(User.id.in_([r["user_id"] for r in out]))).all()}
    for r in out:
        r["user"] = user_short(users[r["user_id"]])
    return out


@router.get("/ranking")
def ranking(period: str = "month", db: Session = Depends(get_db)):
    return ranking_rows(db, period)


def fan_battle(db: Session, sport: str = "football", period: str = "month"):
    since = _period_start(period)
    col = User.fav_football_id if sport == "football" else User.fav_basket_id
    rows = db.execute(select(col, func.count(func.distinct(User.id)), func.sum(Prediction.profit), func.count(Prediction.id),
                             func.sum(case((Prediction.status == "won", 1), else_=0)))
                      .select_from(User).join(Prediction, and_(Prediction.user_id == User.id, Prediction.status.in_(["won", "lost"]),
                                                               Prediction.settled_at >= since), isouter=True)
                      .where(col.is_not(None)).group_by(col)).all()
    fans_total = dict(db.execute(select(col, func.count()).where(col.is_not(None)).group_by(col)).all())
    teams = {t.id: t for t in db.scalars(select(Team).where(Team.id.in_([r[0] for r in rows]))).all()}
    out = []
    for tid, _, profit, cnt, won in rows:
        fans = fans_total.get(tid, 0)
        out.append({"team": team_out(teams[tid]), "fans": fans, "profit": round(profit or 0, 2),
                    "avg": round((profit or 0) / fans, 1) if fans else 0, "predictions": cnt or 0,
                    "winrate": round(100 * (won or 0) / cnt) if cnt else 0})
    out.sort(key=lambda r: (-r["avg"], -r["fans"]))
    return out


@router.get("/clubs/battle")
def clubs_battle(sport: str = "football", period: str = "month", db: Session = Depends(get_db)):
    return fan_battle(db, sport, period)


# ---------------- users ----------------
@router.get("/users/{username}")
def profile(username: str, db: Session = Depends(get_db)):
    u = db.scalar(select(User).where(func.lower(User.username) == username.lower()))
    if not u:
        raise HTTPException(404)
    preds = db.scalars(select(Prediction).where(Prediction.user_id == u.id).order_by(Prediction.created_at.desc()).limit(40)).all()
    st = db.execute(select(func.count(), func.sum(case((Prediction.status == "won", 1), else_=0)), func.sum(Prediction.profit),
                           func.sum(Prediction.stake)).where(Prediction.user_id == u.id, Prediction.status.in_(["won", "lost"]))).one()
    cnt, won, profit, staked = st
    tickets = db.scalars(select(Ticket).where(Ticket.user_id == u.id).order_by(Ticket.created_at.desc()).limit(10)).all()
    return {"user": {**user_short(u), "created": iso(u.created_at), "bank": round(u.bank, 2), "bio": u.bio or "",
                     "fav_football": team_out(u.fav_football), "fav_basket": team_out(u.fav_basket)},
            "stats": {"count": cnt or 0, "won": int(won or 0), "profit": round(profit or 0, 2),
                      "roi": round(100 * (profit or 0) / staked, 1) if staked else 0,
                      "winrate": round(100 * (won or 0) / cnt) if cnt else 0},
            "predictions": [{"id": p.id, "match": match_out(p.match), "pick": p.pick, "odds": p.odds, "stake": p.stake,
                             "status": p.status, "profit": p.profit, "comment": p.comment} for p in preds],
            "tickets": [ticket_out(t) for t in tickets]}


# ---------------- home / derby / trends / bookmakers ----------------
SPORTS = ["football", "basketball", "tennis", "hockey", "volleyball", "waterpolo"]


@router.get("/sports")
def sports(tz: int = 60, db: Session = Depends(get_db)):
    lo, hi = _day_bounds("today", tz)
    live = dict(db.execute(select(Match.sport, func.count()).where(Match.status == "live").group_by(Match.sport)).all())
    today = dict(db.execute(select(Match.sport, func.count()).where(Match.start >= lo, Match.start < hi).group_by(Match.sport)).all())
    soon = dict(db.execute(select(Match.sport, func.count()).where(Match.status == "scheduled", Match.start > utcnow(),
                                                                   Match.start < utcnow() + timedelta(days=4)).group_by(Match.sport)).all())
    return [{"sport": s, "live": live.get(s, 0), "today": today.get(s, 0), "soon": soon.get(s, 0)} for s in SPORTS
            if s in ("football", "basketball") or soon.get(s) or live.get(s)]


@router.get("/home")
def home(tz: int = 60, sport: str = "all", u: User | None = Depends(current_user_opt), db: Session = Depends(get_db)):
    n = utcnow()
    sq = (lambda q: q.where(Match.sport == sport)) if sport != "all" else (lambda q: q)
    live = db.scalars(sq(select(Match).join(League, Match.league_id == League.id).where(Match.status == "live"))
                      .order_by(League.priority, Match.start).limit(20)).unique().all()
    upcoming = db.scalars(sq(select(Match).join(League, Match.league_id == League.id)
                          .where(Match.status == "scheduled", Match.start > n, Match.start < n + timedelta(days=4)))
                          .order_by(League.priority, Match.start).limit(60)).unique().all()
    pool = db.scalars(select(Match).join(League, Match.league_id == League.id)
                      .where(Match.status == "scheduled", Match.start > n, Match.start < n + timedelta(days=4))
                      .order_by(League.priority, Match.start).limit(80)).unique().all()
    pc = _pred_counts(db, [m.id for m in pool + upcoming])
    feat = next((m for m in pool if m.featured), None)
    if not feat:
        cands = [m for m in pool if m.odds] or pool
        if cands:
            feat = max(cands, key=lambda m: (m.is_derby, m.home.is_serbian or m.away.is_serbian, pc.get(m.id, 0), -m.league.priority))
    my = []
    if u:
        fav = [x for x in (u.fav_football_id, u.fav_basket_id) if x]
        if fav:
            my = db.scalars(select(Match).where(or_(Match.home_id.in_(fav), Match.away_id.in_(fav)),
                                                Match.start > n - timedelta(hours=3)).order_by(Match.start).limit(4)).all()
    trends = db.scalars(sq(select(Trend).join(Match, Trend.match_id == Match.id).where(Match.status == "scheduled", Match.start > n))
                        .order_by(Trend.strength.desc()).limit(6)).all()
    derby = db.scalar(select(Match).where(Match.is_derby == True, Match.start > n - timedelta(hours=3)).order_by(Match.start))  # noqa
    bms = db.scalars(select(Bookmaker).where(Bookmaker.active == True).order_by(Bookmaker.sort)).all()  # noqa
    return {
        "featured": match_detail(feat.id, u, db) if feat else None,
        "live": _list(db, live),
        "upcoming": _list(db, upcoming[:24]),
        "my_club": _list(db, my),
        "trends": [{"match": match_out(t.match), "pick": t.pick, "odds": t.odds, "sr": t.text_sr, "ru": t.text_ru} for t in trends],
        "top": ranking_rows(db, "month", 8),
        "battle": fan_battle(db, "basketball" if sport == "basketball" else "football")[:6],
        "derby": match_out(derby) if derby else None,
        "tickets": [ticket_out(t) for t in db.scalars(select(Ticket).where(Ticket.status == "won").order_by(Ticket.settled_at.desc()).limit(4)).all()],
        "bookmakers": [bm_out(b) for b in bms[:4]],
        "stats": {"users": db.scalar(select(func.count()).select_from(User)),
                  "predictions_today": db.scalar(select(func.count()).select_from(Prediction).where(Prediction.created_at > n - timedelta(hours=24)))},
    }


@router.get("/derby")
def derby(u: User | None = Depends(current_user_opt), db: Session = Depends(get_db)):
    n = utcnow()
    nxt = db.scalars(select(Match).where(Match.is_derby == True, Match.start > n - timedelta(hours=3)).order_by(Match.start).limit(3)).all()  # noqa
    past = db.scalars(select(Match).where(Match.is_derby == True, Match.status == "finished").order_by(Match.start.desc()).limit(10)).all()  # noqa
    board = []
    if past:
        last = past[0]
        rows = db.scalars(select(ScorePick).where(ScorePick.match_id == last.id).order_by(ScorePick.points.desc(), ScorePick.created_at).limit(20)).all()
        board = [{"user": user_short(r.user), "score": [r.home, r.away], "points": r.points} for r in rows]
    total = {}
    for m in past:
        r = ingest.final_outcome(m)
        if r == "X":
            total["draw"] = total.get("draw", 0) + 1
        elif r:
            w = m.home if r == "1" else m.away
            key = "zvezda" if "zvezda" in w.name.lower() else "partizan"
            total[key] = total.get(key, 0) + 1
    return {"next": [match_detail(m.id, u, db) for m in nxt], "past": [match_out(m) for m in past], "board": board, "record": total}


@router.get("/trends")
def trends(db: Session = Depends(get_db)):
    n = utcnow()
    ts = db.scalars(select(Trend).join(Match, Trend.match_id == Match.id).where(Match.status == "scheduled", Match.start > n)
                    .order_by(Match.start, Trend.strength.desc()).limit(80)).all()
    return [{"match": match_out(t.match), "pick": t.pick, "odds": t.odds, "sr": t.text_sr, "ru": t.text_ru, "strength": t.strength} for t in ts]


def bm_out(b: Bookmaker):
    return {"id": b.id, "name": b.name, "url": b.url, "bonus_sr": b.bonus_sr, "bonus_ru": b.bonus_ru, "rating": b.rating, "color": b.color}


@router.get("/bookmakers")
def bookmakers(db: Session = Depends(get_db)):
    return [bm_out(b) for b in db.scalars(select(Bookmaker).where(Bookmaker.active == True).order_by(Bookmaker.sort)).all()]  # noqa


class TrIn(BaseModel):
    text: str = Field(max_length=3000)
    target: str = "ru"


@router.post("/translate")
def translate(body: TrIn, db: Session = Depends(get_db)):
    if body.target not in ("ru", "sr"):
        raise HTTPException(400)
    try:
        return {"text": ingest.translate(db, body.text, body.target)}
    except Exception:  # noqa
        raise HTTPException(502, "translate")
