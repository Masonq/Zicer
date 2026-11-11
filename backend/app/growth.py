"""Growth: own analytics, referrals, SEO pages for robots, sitemap/robots, embeddable widget, social posting."""
import html
import json
import re
import secrets
from datetime import datetime, timedelta

import httpx
from fastapi import APIRouter, Depends, HTTPException, Request
from fastapi.responses import HTMLResponse, PlainTextResponse, RedirectResponse, Response
from pydantic import BaseModel
from sqlalchemy import select, func
from sqlalchemy.orm import Session

from . import config
from .auth import admin_user, current_user_opt
from .db import get_db
from .models import Match, Team, League, User, Prediction, Meta, PageView, BotHit, SocialPost, FbGroup
from .serial import best

router = APIRouter()
E = html.escape
BOTS = [("Googlebot", "google"), ("bingbot", "bing"), ("YandexBot", "yandex"), ("DuckDuckBot", "duckduckgo"), ("Applebot", "apple"),
        ("facebookexternalhit", "facebook"), ("Twitterbot", "x"), ("TelegramBot", "telegram"), ("Viber", "viber"), ("WhatsApp", "whatsapp"),
        ("LinkedInBot", "linkedin"), ("Discordbot", "discord"), ("Slurp", "yahoo"), ("Baiduspider", "baidu")]


def now():
    return datetime.utcnow()


def slugify(s: str) -> str:
    tr = str.maketrans({"č": "c", "ć": "c", "š": "s", "ž": "z", "đ": "dj", "Č": "c", "Ć": "c", "Š": "s", "Ž": "z", "Đ": "dj"})
    s = (s or "").translate(tr).lower()
    return re.sub(r"[^a-z0-9]+", "-", s).strip("-")[:60]


def tname(t, lang="sr"):
    if not t:
        return ""
    if lang == "ru":
        return t.name_ru or t.short_name or t.name
    return t.name_sr or t.short_name or t.name


def match_path(m) -> str:
    return f"/mec/{m.id}-{slugify(tname(m.home))}-{slugify(tname(m.away))}"


def league_path(lg) -> str:
    return f"/liga/{lg.id}-{slugify(lg.name_sr or lg.name)}"


def setting(db, key, default=None):
    r = db.get(Meta, key)
    if not r or not r.value:
        return default
    try:
        return json.loads(r.value)
    except Exception:  # noqa
        return r.value


def set_setting(db, key, value):
    db.merge(Meta(key=key, value=json.dumps(value)))
    db.commit()


# ---------------- analytics ----------------
class Hit(BaseModel):
    path: str
    sid: str
    ref: str = ""
    utm_source: str = ""
    utm_campaign: str = ""
    first: bool = False


def _source(ref: str, utm: str) -> str:
    if utm:
        return utm[:80]
    h = re.sub(r"^https?://", "", ref or "").split("/")[0].lower()
    if not h or "sslip.io" in h or (config.PUBLIC_URL and h in config.PUBLIC_URL):
        return "direct"
    for k, v in (("google", "google"), ("bing", "bing"), ("facebook", "facebook"), ("fb.", "facebook"), ("instagram", "instagram"), ("t.me", "telegram"),
                 ("telegram", "telegram"), ("viber", "viber"), ("youtube", "youtube"), ("tiktok", "tiktok"), ("threads", "threads"), ("bsky", "bluesky"),
                 ("reddit", "reddit"), ("duckduckgo", "duckduckgo"), ("yandex", "yandex")):
        if k in h:
            return v
    return h[:80]


@router.post("/api/t")
def track(body: Hit, u: User | None = Depends(current_user_opt), db: Session = Depends(get_db)):
    if len(body.sid) < 8 or body.path.startswith("/admin"):
        return {"ok": True}
    db.add(PageView(sid=body.sid[:40], path=body.path[:300], source=_source(body.ref, body.utm_source), campaign=body.utm_campaign[:120],
                    user_id=u.id if u else None, first=body.first))
    db.commit()
    return {"ok": True}


# ---------------- referrals ----------------
@router.get("/r/{username}")
def referral(username: str):
    return RedirectResponse(f"/?ref={username[:32]}&utm_source=invite", status_code=302)


def apply_referral(db, new_user: User, ref: str):
    if not ref:
        return
    inv = db.scalar(select(User).where(func.lower(User.username) == ref.lower()))
    if not inv or inv.id == new_user.id:
        return
    bonus = float(setting(db, "ref_bonus", 1000) or 1000)
    new_user.ref_by = inv.id
    new_user.bank += bonus
    inv.bank += bonus
    db.commit()


@router.get("/api/me/invites")
def my_invites(u: User | None = Depends(current_user_opt), db: Session = Depends(get_db)):
    if not u:
        raise HTTPException(401)
    n = db.scalar(select(func.count()).select_from(User).where(User.ref_by == u.id)) or 0
    return {"link": f"{config.PUBLIC_URL}/r/{u.username}", "count": n, "bonus": setting(db, "ref_bonus", 1000)}


# ---------------- SEO: pages for robots (same content people see, as plain HTML) ----------------
def _page(title, desc, path, body, og_image=None, jsonld=None):
    url = f"{config.PUBLIC_URL}{path}"
    img = og_image or f"{config.PUBLIC_URL}/icon-512.png?v=3"
    alts = "".join(f'<link rel="alternate" hreflang="{h}" href="{url}{"&" if "?" in url else "?"}lang={q}">' for h, q in (("sr-Latn", "sr"), ("sr-Cyrl", "cyr"), ("ru", "ru")))
    ld = f'<script type="application/ld+json">{json.dumps(jsonld, ensure_ascii=False)}</script>' if jsonld else ""
    return f'''<!doctype html><html lang="sr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>{E(title)}</title><meta name="description" content="{E(desc)}"><link rel="canonical" href="{url}">{alts}
<meta property="og:type" content="website"><meta property="og:site_name" content="Winly"><meta property="og:title" content="{E(title)}">
<meta property="og:description" content="{E(desc)}"><meta property="og:url" content="{url}"><meta property="og:image" content="{img}">
<meta name="twitter:card" content="summary_large_image">{ld}</head><body>
<header><a href="/">Winly — liga prognoza</a> · <a href="/mecevi">Mečevi</a> · <a href="/rang">Rang</a> · <a href="/derbi">Derbi</a></header>
<main>{body}</main><footer><p>18+. Winly ne prima opklade i ne organizuje igre na sreću — besplatna liga prognoza za navijače.</p></footer></body></html>'''


def _odds_txt(m):
    b = best(m)
    return ", ".join(f"{k}: {v['odds']:.2f}" for k, v in b.items()) or "—"


def seo_match(db, m):
    h, a = tname(m.home), tname(m.away)
    lg = m.league.name_sr or m.league.name
    when = (m.start + timedelta(hours=1)).strftime("%d.%m.%Y %H:%M")
    if m.status == "finished" and m.score_home is not None:
        title = f"{h} – {a} {m.score_home}:{m.score_away} | {lg} | Winly"
        desc = f"Rezultat: {h} {m.score_home}:{m.score_away} {a} ({lg}, {when}). Prognoze navijača, kvote i pregled meča na Winly."
    else:
        title = f"{h} – {a} prognoza, kvote | {lg} | Winly"
        desc = f"{h} protiv {a}, {lg}, {when}. Kvote {_odds_txt(m)}. Šta prognoziraju navijači — besplatna liga prognoza Winly."
    n = db.scalar(select(func.count()).select_from(Prediction).where(Prediction.match_id == m.id)) or 0
    body = f'''<h1>{E(h)} – {E(a)}</h1><p>{E(lg)} · {E(when)} · status: {E(m.status)}</p>
<p>Kvote (1X2): {E(_odds_txt(m))}</p><p>Prognoza navijača: {n}</p>
<p><a href="{league_path(m.league)}">{E(lg)} — svi mečevi i prognoze</a></p>'''
    ld = {"@context": "https://schema.org", "@type": "SportsEvent", "name": f"{h} – {a}", "startDate": m.start.isoformat() + "Z",
          "sport": m.sport, "eventStatus": "https://schema.org/EventScheduled",
          "homeTeam": {"@type": "SportsTeam", "name": h}, "awayTeam": {"@type": "SportsTeam", "name": a},
          "location": {"@type": "Place", "name": lg}, "url": f"{config.PUBLIC_URL}{match_path(m)}"}
    return _page(title, desc, match_path(m), body, jsonld=ld)


def seo_league(db, lg):
    n = now()
    ms = db.scalars(select(Match).where(Match.league_id == lg.id, Match.start > n - timedelta(days=3), Match.start < n + timedelta(days=10)).order_by(Match.start)).all()
    name = lg.name_sr or lg.name
    items = "".join(f'<li><a href="{match_path(m)}">{E(tname(m.home))} – {E(tname(m.away))}</a> {(m.start + timedelta(hours=1)).strftime("%d.%m %H:%M")}</li>' for m in ms[:60])
    return _page(f"{name} prognoze i kvote | Winly", f"{name}: raspored, kvote i prognoze navijača za naredne mečeve. Besplatna liga prognoza Winly.",
                 league_path(lg), f"<h1>{E(name)} — prognoze</h1><ul>{items}</ul>")


def seo_home(db):
    n = now()
    ms = db.scalars(select(Match).where(Match.start > n, Match.start < n + timedelta(days=2)).order_by(Match.start).limit(40)).all()
    items = "".join(f'<li><a href="{match_path(m)}">{E(tname(m.home))} – {E(tname(m.away))}</a> ({E(m.league.name_sr or m.league.name)})</li>' for m in ms)
    return _page("Winly — besplatna liga prognoza za navijače", "Prognoziraj mečeve fudbala, košarke, tenisa i hokeja, sastavi tiket i dokaži da su navijači tvog kluba najbolji. Besplatno.",
                 "/", f"<h1>Winly — liga prognoza</h1><h2>Mečevi danas i sutra</h2><ul>{items}</ul>")


def _bot_name(ua: str) -> str:
    ua = ua or ""
    for k, v in BOTS:
        if k.lower() in ua.lower():
            return v
    return "other"


@router.get("/seo-render{path:path}", include_in_schema=False)
def seo_render(path: str, request: Request, db: Session = Depends(get_db)):
    """nginx sends robots here (same URL path); people get the normal app."""
    path = "/" + path.lstrip("/") if path else "/"
    db.add(BotHit(bot=_bot_name(request.headers.get("user-agent", "")), path=path[:300]))
    db.commit()
    vm = setting(db, "verify_meta", {}) or {}
    tags = (f'<meta name="google-site-verification" content="{E(vm["google"])}">' if vm.get("google") else "") + \
           (f'<meta name="msvalidate.01" content="{E(vm["bing"])}">' if vm.get("bing") else "")
    doc = None
    mm = re.match(r"^/mec/(\d+)", path)
    if mm:
        m = db.get(Match, int(mm.group(1)))
        if m:
            doc = seo_match(db, m)
    lm = re.match(r"^/liga/(\d+)", path)
    if lm and not doc:
        lg = db.get(League, int(lm.group(1)))
        if lg:
            doc = seo_league(db, lg)
    doc = doc or seo_home(db)
    return HTMLResponse(doc.replace("</head>", tags + "</head>", 1))


@router.get("/sitemap.xml", include_in_schema=False)
def sitemap(db: Session = Depends(get_db)):
    n = now()
    urls = [("/", "hourly"), ("/mecevi", "hourly"), ("/rang", "daily"), ("/derbi", "daily")]
    ms = db.scalars(select(Match).where(Match.start > n - timedelta(days=7), Match.start < n + timedelta(days=10))).all()
    urls += [(match_path(m), "hourly" if m.status != "finished" else "weekly") for m in ms]
    lgs = {m.league.id: m.league for m in ms}
    urls += [(league_path(lg), "daily") for lg in lgs.values()]
    body = "".join(f"<url><loc>{config.PUBLIC_URL}{E(u)}</loc><changefreq>{f}</changefreq></url>" for u, f in urls)
    return Response(f'<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">{body}</urlset>', media_type="application/xml")


@router.get("/robots.txt", include_in_schema=False)
def robots():
    return PlainTextResponse(f"User-agent: *\nAllow: /\nAllow: /api/social/\nAllow: /api/share/\nDisallow: /admin\nDisallow: /api/\nDisallow: /profil\nSitemap: {config.PUBLIC_URL}/sitemap.xml\n")


@router.get("/{fname}.html", include_in_schema=False)
def verify_file(fname: str, db: Session = Depends(get_db)):
    files = setting(db, "verify_files", {}) or {}
    if f"{fname}.html" in files:
        return PlainTextResponse(files[f"{fname}.html"], media_type="text/html")
    raise HTTPException(404)


@router.get("/api/seo/meta")
def seo_meta(db: Session = Depends(get_db)):
    return {"verify": setting(db, "verify_meta", {}) or {}}


# ---------------- embeddable widget for fan sites ----------------
@router.get("/w/{mid}", response_class=HTMLResponse, include_in_schema=False)
def widget(mid: int, db: Session = Depends(get_db)):
    m = db.get(Match, mid)
    if not m:
        raise HTTPException(404)
    from .ingest import community_split
    sp = community_split(db, mid)
    b = best(m)
    url = f"{config.PUBLIC_URL}{match_path(m)}?utm_source=widget"
    bars = "".join(f'<div class="b"><span>{k}</span><i style="width:{sp.get(k, 0)}%"></i><em>{sp.get(k, 0)}%</em></div>' for k in ("1", "X", "2") if k in b or sp.get(k))
    odds = "".join(f'<a class="o" href="{url}" target="_blank"><small>{k}</small>{v["odds"]:.2f}</a>' for k, v in b.items())
    return f'''<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><style>
body{{margin:0;font:14px/1.35 system-ui,sans-serif;background:#0F2A22;color:#EEF3EE}}.w{{padding:14px;border-radius:14px;background:linear-gradient(160deg,#17372d,#0f2a22)}}
h3{{margin:0 0 4px;font-size:16px}}p{{margin:0 0 10px;color:#93AFA3;font-size:12px}}.b{{display:grid;grid-template-columns:18px 1fr 36px;gap:8px;align-items:center;margin:5px 0}}
.b i{{display:block;height:8px;border-radius:4px;background:#F2C230}}.b em{{font-style:normal;text-align:right;font-weight:700}}.os{{display:flex;gap:6px;margin:10px 0}}
.o{{flex:1;text-align:center;padding:8px;border-radius:10px;background:rgba(255,255,255,.07);color:#fff;text-decoration:none;font-weight:800}}.o small{{display:block;color:#93AFA3;font-size:10px}}
.cta{{display:block;text-align:center;padding:10px;border-radius:10px;background:#F2C230;color:#1a1406;font-weight:800;text-decoration:none}}</style></head><body><div class="w">
<h3>{E(tname(m.home))} – {E(tname(m.away))}</h3><p>{E(m.league.name_sr or m.league.name)} · prognoze navijača ({sp.get('total', 0)})</p>{bars}<div class="os">{odds}</div>
<a class="cta" href="{url}" target="_blank">Daj svoju prognozu na Winly</a></div></body></html>'''


# ---------------- social posts ----------------
DEFAULT_CFG = {"mode": "test", "auto": False, "times": {"motd": "10:00", "hot": "16:00", "results": "09:00", "weekly": "Mon 12:00"},
               "channels": {"telegram": {"token": "", "chat": "", "test_chat": ""}, "facebook": {"page_id": "", "token": ""},
                            "instagram": {"ig_id": "", "token": ""}, "threads": {"user_id": "", "token": ""},
                            "bluesky": {"handle": "", "app_password": ""}, "viber": {"token": "", "from": ""}}}


def social_cfg(db):
    cfg = setting(db, "social_cfg", None) or {}
    out = json.loads(json.dumps(DEFAULT_CFG))
    for k, v in cfg.items():
        if isinstance(v, dict) and isinstance(out.get(k), dict):
            for kk, vv in v.items():
                if isinstance(vv, dict) and isinstance(out[k].get(kk), dict):
                    out[k][kk].update(vv)
                else:
                    out[k][kk] = vv
        else:
            out[k] = v
    return out


def _utm(path, src, camp):
    return f"{config.PUBLIC_URL}{path}{'&' if '?' in path else '?'}utm_source={src}&utm_campaign={camp}"


def build_post(db, kind: str):
    """Returns (text, image_path_for_card, link_path) or None if there is nothing to say."""
    n = now()
    if kind == "motd":
        from .api import home
        # pick the match of the day the same way the home page does
        ms = db.scalars(select(Match).where(Match.start > n, Match.start < n + timedelta(hours=30)).order_by(Match.start)).all()
        ms = [m for m in ms if m.odds] or ms
        if not ms:
            return None
        m = sorted(ms, key=lambda x: (x.featured, x.is_derby, x.home.is_serbian or x.away.is_serbian, -x.league.priority), reverse=True)[0]
        b = best(m)
        t = (f"Meč dana: {tname(m.home)} – {tname(m.away)}\n{m.league.name_sr or m.league.name}, {(m.start + timedelta(hours=1)).strftime('%d.%m u %H:%M')}\n"
             f"Kvote: {_odds_txt(m)}\nKo pobeđuje po tvom mišljenju? Daj prognozu besplatno i uđi u rang navijača.")
        return t, f"/api/social/card/match/{m.id}.png", match_path(m)
    if kind == "hot":
        ms = db.scalars(select(Match).where(Match.start > n, Match.start < n + timedelta(hours=12)).order_by(Match.start)).all()
        ms = sorted([m for m in ms if m.odds], key=lambda x: (x.is_derby, x.home.is_serbian or x.away.is_serbian, -x.league.priority), reverse=True)[:5]
        if not ms:
            return None
        lines = "\n".join(f"• {tname(m.home)} – {tname(m.away)} ({(m.start + timedelta(hours=1)).strftime('%H:%M')})" for m in sorted(ms, key=lambda x: x.start))
        return f"Večeras na Winly:\n{lines}\nSastavi tiket i proveri koliko znaš.", f"/api/social/card/match/{ms[0].id}.png", "/mecevi"
    if kind == "results":
        from .api import ranking_rows
        rows = ranking_rows(db, "week", limit=3, min_preds=1)
        if not rows:
            return ("Juče su se igrali sjajni mečevi, a ti još nisi u rangu prognozera? Pridruži se besplatno — prognoziraj i takmiči se sa navijačima.",
                    "/api/social/card/brand.png", "/rang")
        top = "\n".join(f"{i + 1}. @{r['user']['username']} {'+' if r['profit'] > 0 else ''}{round(r['profit'])}" for i, r in enumerate(rows))
        return f"Najbolji prognozeri nedelje:\n{top}\nMožeš li bolje?", "/api/social/card/brand.png", "/rang"
    if kind == "weekly":
        from .api import fan_battle
        rows = fan_battle(db, "football", "week")[:3]
        if not rows:
            return None
        top = "\n".join(f"{i + 1}. {(r['team'].get('names') or {}).get('sr') or r['team'].get('short', '')} — {r['fans']} navijača" for i, r in enumerate(rows))
        return f"Bitka navijača — čiji navijači najbolje prognoziraju?\n{top}\nPodrži svoj klub na Winly.", "/api/social/card/brand.png", "/rang?tab=klubovi"
    return None


def make_post(db, kind: str, test: bool) -> SocialPost | None:
    r = build_post(db, kind)
    if not r:
        return None
    text, img, path = r
    p = SocialPost(kind=kind, day=now().strftime("%Y-%m-%d"), text_sr=text, image=img, link=_utm(path, "winly_social", kind), test=test)
    db.add(p)
    db.commit()
    return p


def _abs(img):
    return f"{config.PUBLIC_URL}{img}"


def send_post(db, p: SocialPost, cfg) -> dict:
    ch = cfg["channels"]
    res = dict(p.sent or {})
    text = f"{p.text_sr}\n{p.link}"
    with httpx.Client(timeout=30) as c:
        tg = ch["telegram"]
        chat = tg.get("test_chat") if p.test else tg.get("chat")
        if tg.get("token") and chat:
            try:
                r = c.post(f"https://api.telegram.org/bot{tg['token']}/sendPhoto", data={"chat_id": chat, "photo": _abs(p.image), "caption": text[:1000]})
                res["telegram"] = "ok" if r.json().get("ok") else r.text[:200]
            except Exception as e:  # noqa
                res["telegram"] = str(e)[:200]
        if p.test:
            p.sent = res
            db.commit()
            return res  # test mode: only the test Telegram chat
        fb = ch["facebook"]
        if fb.get("page_id") and fb.get("token"):
            try:
                r = c.post(f"https://graph.facebook.com/v21.0/{fb['page_id']}/photos", data={"url": _abs(p.image), "caption": text, "access_token": fb["token"]})
                res["facebook"] = "ok" if r.status_code == 200 else r.text[:200]
            except Exception as e:  # noqa
                res["facebook"] = str(e)[:200]
        ig = ch["instagram"]
        if ig.get("ig_id") and ig.get("token"):
            try:
                r = c.post(f"https://graph.facebook.com/v21.0/{ig['ig_id']}/media", data={"image_url": _abs(p.image), "caption": text, "access_token": ig["token"]})
                cid = r.json().get("id")
                r2 = c.post(f"https://graph.facebook.com/v21.0/{ig['ig_id']}/media_publish", data={"creation_id": cid, "access_token": ig["token"]}) if cid else r
                res["instagram"] = "ok" if r2.status_code == 200 and cid else r2.text[:200]
            except Exception as e:  # noqa
                res["instagram"] = str(e)[:200]
        th = ch["threads"]
        if th.get("user_id") and th.get("token"):
            try:
                r = c.post(f"https://graph.threads.net/v1.0/{th['user_id']}/threads", data={"media_type": "IMAGE", "image_url": _abs(p.image), "text": text[:490], "access_token": th["token"]})
                cid = r.json().get("id")
                r2 = c.post(f"https://graph.threads.net/v1.0/{th['user_id']}/threads_publish", data={"creation_id": cid, "access_token": th["token"]}) if cid else r
                res["threads"] = "ok" if r2.status_code == 200 and cid else r2.text[:200]
            except Exception as e:  # noqa
                res["threads"] = str(e)[:200]
        bs = ch["bluesky"]
        if bs.get("handle") and bs.get("app_password"):
            try:
                s = c.post("https://bsky.social/xrpc/com.atproto.server.createSession", json={"identifier": bs["handle"], "password": bs["app_password"]}).json()
                hdr = {"Authorization": f"Bearer {s['accessJwt']}"}
                img = c.get(_abs(p.image)).content
                blob = c.post("https://bsky.social/xrpc/com.atproto.repo.uploadBlob", content=img, headers={**hdr, "Content-Type": "image/png"}).json()["blob"]
                rec = {"$type": "app.bsky.feed.post", "text": text[:290], "createdAt": now().isoformat() + "Z",
                       "embed": {"$type": "app.bsky.embed.images", "images": [{"alt": "Winly", "image": blob}]}}
                r = c.post("https://bsky.social/xrpc/com.atproto.repo.createRecord", json={"repo": s["did"], "collection": "app.bsky.feed.post", "record": rec}, headers=hdr)
                res["bluesky"] = "ok" if r.status_code == 200 else r.text[:200]
            except Exception as e:  # noqa
                res["bluesky"] = str(e)[:200]
        vb = ch["viber"]
        if vb.get("token") and vb.get("from"):
            try:
                r = c.post("https://chatapi.viber.com/pa/post", json={"from": vb["from"], "type": "picture", "text": text[:700], "media": _abs(p.image)},
                           headers={"X-Viber-Auth-Token": vb["token"]})
                res["viber"] = "ok" if r.json().get("status") == 0 else r.text[:200]
            except Exception as e:  # noqa
                res["viber"] = str(e)[:200]
    p.sent = res
    db.commit()
    return res


def social_job(db) -> str:
    """Creates the day's posts at their times; sends them when automatic posting is on."""
    cfg = social_cfg(db)
    loc = now() + timedelta(hours=1)  # Belgrade
    today = now().strftime("%Y-%m-%d")
    made = []
    for kind, at in cfg["times"].items():
        if kind == "weekly":
            d, hm = at.split(" ")
            if loc.strftime("%a") != d:
                continue
        else:
            hm = at
        hh, mm = (int(x) for x in hm.split(":"))
        if (loc.hour, loc.minute) < (hh, mm):
            continue
        if db.scalar(select(SocialPost).where(SocialPost.kind == kind, SocialPost.day == today)):
            continue
        p = make_post(db, kind, cfg["mode"] != "live")
        if p:
            made.append(kind)
            if cfg.get("auto"):
                send_post(db, p, cfg)
    return f"social {','.join(made) or 'nothing due'} ({cfg['mode']})"


GROUP_INTRO = {
    "partizan": "Grobari, koliko znate o svom timu? 🖤🤍".replace("🖤🤍", ""),
    "zvezda": "Delije, ko najbolje prognozira utakmice Zvezde?",
    "basketball": "Za ljubitelje košarke: Evroliga, ABA i NBA — prognoze navijača.",
    "football": "Za ljubitelje fudbala: domaća liga i Evropa — ko zna bolje?",
    "betting": "Besplatna liga prognoza — bez uloga i bez novca, samo znanje.",
    "general": "Besplatna liga prognoza za navijače iz Srbije.",
}


def group_text(db, g: FbGroup):
    base = build_post(db, "motd")
    link = _utm("/", "fb_group", slugify(g.name) or f"g{g.id}")
    core = base[0] if base else "Prognoziraj mečeve i takmiči se sa navijačima."
    return f"{GROUP_INTRO.get(g.topic, GROUP_INTRO['general'])}\n\n{core}\n\n{link}", (base[1] if base else "/api/social/card/brand.png")


# ---------------- social cards (HTML -> PNG in Chromium) and short videos ----------------
def _card_html(db, kind, mid=None, w=1080, h=1080, anim=False):
    from .share_html import _assets
    A = _assets()
    m = db.get(Match, mid) if mid else None
    css = f'''@font-face {{ font-family: Oswald; src: url(data:font/ttf;base64,{A["oswald"]}); }} @font-face {{ font-family: Manrope; src: url(data:font/ttf;base64,{A["manrope"]}); font-weight: 200 800; }}
*{{box-sizing:border-box;margin:0}} body{{width:{w}px;height:{h}px;overflow:hidden;font-family:Manrope;color:#EEF3EE;
background:radial-gradient(900px 700px at 100% 0%,rgba(242,194,48,.22),transparent 60%),radial-gradient(800px 600px at 0% 100%,rgba(76,195,138,.16),transparent 60%),linear-gradient(160deg,#16392E,#0B2019)}}
.wrap{{position:absolute;inset:0;padding:{int(w * .07)}px;display:flex;flex-direction:column;justify-content:space-between}}
.logo{{display:flex;align-items:center;gap:16px}} .logo img{{height:{int(w * .05)}px}} .logo b{{font-family:Oswald;font-size:{int(w * .065)}px;color:#F2C230;line-height:1}}
.tag{{display:inline-block;padding:10px 22px;border-radius:999px;background:rgba(242,194,48,.15);border:2px solid rgba(242,194,48,.5);color:#F2C230;font-weight:800;font-size:{int(w * .03)}px}}
.teams{{display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:{int(w * .03)}px;text-align:center}}
.t{{display:flex;flex-direction:column;align-items:center;gap:22px;font-weight:800;font-size:{int(w * .045)}px}}
.cr{{width:{int(w * .22)}px;height:{int(w * .22)}px;border-radius:50%;background:#F4F6F2;display:grid;place-items:center;box-shadow:0 20px 40px rgba(0,0,0,.35)}}
.cr img{{width:72%;height:72%;object-fit:contain}} .vs{{font-family:Oswald;font-size:{int(w * .09)}px;color:#F2C230}}
.meta{{text-align:center;color:#C9D6CF;font-size:{int(w * .032)}px;font-weight:700}}
.odds{{display:flex;gap:{int(w * .017)}px;justify-content:center}} .o{{min-width:{int(w * .2)}px;padding:{int(w * .017)}px;border-radius:{int(w * .022)}px;background:rgba(255,255,255,.08);border:2px solid rgba(255,255,255,.1);text-align:center}}
.o small{{display:block;color:#93AFA3;font-weight:800;font-size:{int(w * .025)}px}} .o b{{font-family:Oswald;font-size:{int(w * .06)}px}}
.cta{{text-align:center;font-size:{int(w * .034)}px;font-weight:800}} .cta span{{color:#F2C230}}
{"@keyframes up{from{opacity:0;transform:translateY(60px)}} .a1{animation:up .8s .2s both} .a2{animation:up .8s .9s both} .a3{animation:up .8s 1.6s both} .a4{animation:up .8s 2.3s both} @keyframes pop{0%{transform:scale(.6);opacity:0}70%{transform:scale(1.08)}} .cr{animation:pop .9s .9s both}" if anim else ""}'''
    if m:
        def crest(t):
            return f'<div class="cr">{"<img src=" + json.dumps(t.logo) + ">" if t.logo else f"<span style=font-family:Oswald;font-size:{int(w * .085)}px;color:#0F2A22>" + E((t.short_name or "?")[:1]) + "</span>"}</div>'
        b = best(m)
        odds = "".join(f'<div class="o"><small>{k}</small><b>{v["odds"]:.2f}</b></div>' for k, v in b.items())
        body = f'''<div class="logo a1"><img src="data:image/png;base64,{A["logo"]}"><b>Winly</b></div>
<div class="a1"><span class="tag">{"Meč dana" if kind == "match" else "Vrući meč"}</span></div>
<div class="teams a2"><div class="t">{crest(m.home)}{E(tname(m.home))}</div><div class="vs">VS</div><div class="t">{crest(m.away)}{E(tname(m.away))}</div></div>
<div class="meta a3">{E(m.league.name_sr or m.league.name)} · {(m.start + timedelta(hours=1)).strftime("%d.%m · %H:%M")}</div>
<div class="odds a3">{odds}</div><div class="cta a4">Ko pobeđuje? Daj prognozu besplatno — <span>Winly</span></div>'''
    else:
        body = f'''<div class="logo a1"><img src="data:image/png;base64,{A["logo"]}"><b>Winly</b></div>
<div class="a2" style="font-family:Oswald;font-size:{int(w * .1)}px;line-height:1.05">Liga prognoza<br><span style="color:#F2C230">za navijače</span></div>
<div class="meta a3" style="text-align:left">Fudbal · Košarka · Tenis · Hokej — besplatno, bez novca, samo znanje.</div>
<div class="cta a4" style="text-align:left">Prognoziraj, sastavi tiket i pokaži da su <span>tvoji navijači najbolji</span>.</div>'''
    return f'<!doctype html><html><head><meta charset="utf-8"><style>{css}</style></head><body><div class="wrap">{body}</div></body></html>'


async def _render_card(doc, w, h):
    import os
    from .share_html import _get_browser, _lock, CACHE
    os.makedirs(CACHE, exist_ok=True)
    tmp = os.path.join(CACHE, f"_card_{secrets.token_hex(4)}.html")
    with open(tmp, "w", encoding="utf-8") as f:
        f.write(doc)
    async with _lock:
        b = await _get_browser()
        page = await b.new_page(viewport={"width": w, "height": h})
        try:
            await page.goto(f"file://{tmp}", wait_until="load", timeout=10000)
            try:
                await page.wait_for_load_state("networkidle", timeout=3000)
            except Exception:  # noqa
                pass
            return await page.screenshot(type="png")
        finally:
            await page.close()
            os.remove(tmp)


@router.get("/api/social/card/match/{mid}.png", include_in_schema=False)
async def card_match(mid: int, db: Session = Depends(get_db)):
    png = await _render_card(_card_html(db, "match", mid), 1080, 1080)
    return Response(png, media_type="image/png", headers={"Cache-Control": "public, max-age=600"})


@router.get("/api/social/card/brand.png", include_in_schema=False)
async def card_brand(db: Session = Depends(get_db)):
    png = await _render_card(_card_html(db, "brand"), 1080, 1080)
    return Response(png, media_type="image/png", headers={"Cache-Control": "public, max-age=3600"})


async def make_video(db, mid: int) -> str:
    """10-second vertical clip (1080x1920) of the match card with entrance animation, for Reels / TikTok / Shorts."""
    import os
    import subprocess
    from .share_html import _get_browser, _lock, CACHE
    out_dir = os.path.join(config.MEDIA_DIR, "video")
    os.makedirs(out_dir, exist_ok=True)
    doc = _card_html(db, "match", mid, 1080, 1920, anim=True)
    tmp = os.path.join(CACHE, f"_vid_{mid}.html")
    with open(tmp, "w", encoding="utf-8") as f:
        f.write(doc)
    async with _lock:
        b = await _get_browser()
        ctx = await b.new_context(viewport={"width": 1080, "height": 1920}, device_scale_factor=1, record_video_dir=out_dir, record_video_size={"width": 1080, "height": 1920})
        page = await ctx.new_page()
        await page.goto(f"file://{tmp}", wait_until="load")
        await page.wait_for_timeout(9000)
        webm = await page.video.path()
        await ctx.close()
    mp4 = os.path.join(out_dir, f"winly_mec_{mid}.mp4")
    subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-i", webm, "-c:v", "libx264", "-pix_fmt", "yuv420p", "-r", "30", "-movflags", "+faststart", mp4], check=False, timeout=120)
    try:
        os.remove(webm)
        os.remove(tmp)
    except Exception:  # noqa
        pass
    return f"/media/video/winly_mec_{mid}.mp4"


# ---------------- admin: traffic, SEO, publications, groups ----------------
adm = APIRouter(prefix="/api/admin", dependencies=[Depends(admin_user)])


@adm.get("/traffic")
def traffic(days: int = 14, db: Session = Depends(get_db)):
    since = now() - timedelta(days=days)
    rows = db.execute(select(PageView.ts, PageView.sid, PageView.source, PageView.path, PageView.first).where(PageView.ts > since)).all()
    d0 = (now() - timedelta(days=days - 1)).replace(hour=0, minute=0, second=0, microsecond=0)
    visitors = [set() for _ in range(days)]
    views = [0] * days
    src, pages, landing = {}, {}, {}
    for ts, sid, so, path, first in rows:
        i = (ts - d0).days
        if 0 <= i < days:
            visitors[i].add(sid)
            views[i] += 1
        if first:
            src[so] = src.get(so, 0) + 1
            landing[path] = landing.get(path, 0) + 1
        pages[path] = pages.get(path, 0) + 1
    regs = db.scalar(select(func.count()).select_from(User).where(User.created_at > since)) or 0
    sessions = sum(src.values())
    labels = [(d0 + timedelta(days=i)).strftime("%d.%m") for i in range(days)]
    camp = db.execute(select(PageView.campaign, func.count(func.distinct(PageView.sid))).where(PageView.ts > since, PageView.campaign != "").group_by(PageView.campaign)
                      .order_by(func.count(func.distinct(PageView.sid)).desc()).limit(15)).all()
    return {"labels": labels, "visitors": [len(v) for v in visitors], "views": views, "sessions": sessions, "registrations": regs,
            "conversion": round(regs * 100 / sessions, 1) if sessions else 0,
            "sources": sorted(src.items(), key=lambda x: -x[1])[:12], "pages": sorted(pages.items(), key=lambda x: -x[1])[:12],
            "landing": sorted(landing.items(), key=lambda x: -x[1])[:12], "campaigns": [list(r) for r in camp]}


@adm.get("/seo")
def seo_stats(db: Session = Depends(get_db)):
    n = now()
    ms = db.scalars(select(Match).where(Match.start > n - timedelta(days=7), Match.start < n + timedelta(days=10))).all()
    leagues = {m.league_id for m in ms}
    since = n - timedelta(days=14)
    hits = db.execute(select(BotHit.ts, BotHit.bot).where(BotHit.ts > since)).all()
    d0 = (n - timedelta(days=13)).replace(hour=0, minute=0, second=0, microsecond=0)
    by_day, by_bot = [0] * 14, {}
    for ts, bot in hits:
        i = (ts - d0).days
        if 0 <= i < 14:
            by_day[i] += 1
        by_bot[bot] = by_bot.get(bot, 0) + 1
    top_paths = db.execute(select(BotHit.path, func.count()).where(BotHit.ts > since).group_by(BotHit.path).order_by(func.count().desc()).limit(10)).all()
    search_landing = db.execute(select(PageView.path, func.count()).where(PageView.ts > since, PageView.first == True, PageView.source.in_(["google", "bing", "duckduckgo", "yandex"]))  # noqa
                                .group_by(PageView.path).order_by(func.count().desc()).limit(10)).all()
    no_desc = sum(1 for m in ms if not (m.league.name_sr or m.league.name))
    domain = not ("sslip.io" in config.PUBLIC_URL or "localhost" in config.PUBLIC_URL)
    return {"sitemap": {"matches": len(ms), "leagues": len(leagues), "total": len(ms) + len(leagues) + 4}, "no_desc": no_desc,
            "labels": [(d0 + timedelta(days=i)).strftime("%d.%m") for i in range(14)], "bot_hits": by_day, "bots": sorted(by_bot.items(), key=lambda x: -x[1]),
            "bot_paths": [list(r) for r in top_paths], "search_landing": [list(r) for r in search_landing], "domain": domain, "public_url": config.PUBLIC_URL,
            "verify_meta": setting(db, "verify_meta", {}) or {}, "verify_files": list((setting(db, "verify_files", {}) or {}).keys())}


class VerifyIn(BaseModel):
    google: str = ""
    bing: str = ""
    file_name: str = ""
    file_body: str = ""


@adm.post("/seo/verify")
def seo_verify(body: VerifyIn, db: Session = Depends(get_db)):
    set_setting(db, "verify_meta", {k: v.strip() for k, v in (("google", body.google), ("bing", body.bing)) if v.strip()})
    if body.file_name.strip().endswith(".html"):
        files = setting(db, "verify_files", {}) or {}
        files[body.file_name.strip()] = body.file_body
        set_setting(db, "verify_files", files)
    return {"ok": True}


@adm.get("/social")
def social_get(db: Session = Depends(get_db)):
    cfg = social_cfg(db)
    posts = db.scalars(select(SocialPost).order_by(SocialPost.id.desc()).limit(30)).all()
    masked = json.loads(json.dumps(cfg))
    for ch in masked["channels"].values():
        for k in list(ch.keys()):
            if k in ("token", "app_password") and ch[k]:
                ch[k] = "••••" + ch[k][-4:]
    return {"cfg": masked, "ref_bonus": setting(db, "ref_bonus", 1000), "contest": setting(db, "contest", {}) or {},
            "posts": [{"id": p.id, "kind": p.kind, "created": p.created_at.isoformat(), "text": p.text_sr, "image": p.image, "link": p.link,
                       "sent": p.sent or {}, "test": p.test} for p in posts]}


class SocialIn(BaseModel):
    cfg: dict
    ref_bonus: int | None = None
    contest: dict | None = None


@adm.post("/social")
def social_save(body: SocialIn, db: Session = Depends(get_db)):
    cur = social_cfg(db)
    new = body.cfg
    for name, ch in (new.get("channels") or {}).items():
        for k, v in ch.items():
            if isinstance(v, str) and v.startswith("••••"):
                ch[k] = cur["channels"].get(name, {}).get(k, "")  # keep the stored secret
    set_setting(db, "social_cfg", new)
    if body.ref_bonus is not None:
        set_setting(db, "ref_bonus", max(0, min(100000, body.ref_bonus)))
    if body.contest is not None:
        set_setting(db, "contest", body.contest)
    return {"ok": True}


@adm.post("/social/generate/{kind}")
def social_generate(kind: str, db: Session = Depends(get_db)):
    cfg = social_cfg(db)
    p = make_post(db, kind, cfg["mode"] != "live")
    if not p:
        raise HTTPException(400, "nothing")
    return {"id": p.id}


@adm.post("/social/send/{pid}")
def social_send(pid: int, db: Session = Depends(get_db)):
    p = db.get(SocialPost, pid)
    if not p:
        raise HTTPException(404)
    return send_post(db, p, social_cfg(db))


@adm.delete("/social/{pid}")
def social_delete(pid: int, db: Session = Depends(get_db)):
    p = db.get(SocialPost, pid)
    if p:
        db.delete(p)
        db.commit()
    return {"ok": True}


@adm.post("/social/video/{mid}")
async def social_video(mid: int, db: Session = Depends(get_db)):
    return {"url": await make_video(db, mid)}


class GroupIn(BaseModel):
    name: str
    url: str = ""
    topic: str = "general"
    every_days: int = 3
    note: str = ""


def _g_out(db, g):
    txt, img = group_text(db, g)
    due = not g.last_posted or g.last_posted < now() - timedelta(days=g.every_days)
    nxt = None if due else (g.last_posted + timedelta(days=g.every_days)).isoformat()
    camp = slugify(g.name) or f"g{g.id}"
    visits = db.scalar(select(func.count(func.distinct(PageView.sid))).where(PageView.campaign == camp)) or 0
    return {"id": g.id, "name": g.name, "url": g.url, "topic": g.topic, "every_days": g.every_days, "note": g.note, "posts": g.posts,
            "last_posted": g.last_posted.isoformat() if g.last_posted else None, "due": due, "next": nxt, "text": txt, "image": img, "visits": visits}


@adm.get("/groups")
def groups_list(db: Session = Depends(get_db)):
    return [_g_out(db, g) for g in db.scalars(select(FbGroup).order_by(FbGroup.id)).all()]


@adm.post("/groups")
def groups_add(body: GroupIn, db: Session = Depends(get_db)):
    g = FbGroup(**body.model_dump())
    db.add(g)
    db.commit()
    return _g_out(db, g)


@adm.put("/groups/{gid}")
def groups_edit(gid: int, body: GroupIn, db: Session = Depends(get_db)):
    g = db.get(FbGroup, gid)
    if not g:
        raise HTTPException(404)
    for k, v in body.model_dump().items():
        setattr(g, k, v)
    db.commit()
    return _g_out(db, g)


@adm.post("/groups/{gid}/posted")
def groups_posted(gid: int, db: Session = Depends(get_db)):
    g = db.get(FbGroup, gid)
    if g:
        g.last_posted = now()
        g.posts += 1
        db.commit()
    return _g_out(db, g)


@adm.delete("/groups/{gid}")
def groups_del(gid: int, db: Session = Depends(get_db)):
    g = db.get(FbGroup, gid)
    if g:
        db.delete(g)
        db.commit()
    return {"ok": True}


@router.get("/api/contest")
def contest(db: Session = Depends(get_db)):
    c = setting(db, "contest", {}) or {}
    return c if c.get("active") else {}
