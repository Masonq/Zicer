"""Official match highlights from the leagues' own YouTube channels (public RSS, embeddable, legal)."""
import re
import xml.etree.ElementTree as ET
from datetime import datetime, timedelta

import httpx
from sqlalchemy import select
from sqlalchemy.orm import Session

from .models import Match, Highlight
from .textutil import strip_accents

CHANNELS = [  # (channel id, name shown, sport)
    ("UCpFqOv5z4WKps64GlQS4ytw", "EuroLeague", "basketball"),
    ("UC-2Cj6KlR9rCfR28zNLmOTA", "EuroCup", "basketball"),
    ("UCWJ2lWNubArHWmf3FIHbfcQ", "NBA", "basketball"),
    ("UCqFMzb-4AUf6WAIbl132QKA", "NHL", "hockey"),
    ("UCwJ3S2Ix7aI1BhHexDJlmEg", "KHL", "hockey"),
    ("UCTv-XvfzLX3i4IGWAm4sbmA", "LALIGA", "football"),
    ("UCxfPjORdISQSn2fV8tcVmgA", "Serie A", "football"),
    ("UCQsH5XtIc9hONE1BQjucM0g", "Ligue 1", "football"),
    ("UC6UL29enLNe4mqwTfAyeNuw", "Bundesliga", "football"),
    ("UCpryVRk_VDudG8SHXgWcG0w", "Premier League", "football"),
    ("UCyGa1YEx9ST66rYrJTGIKOw", "UEFA", "football"),
]
NS = {"a": "http://www.w3.org/2005/Atom", "yt": "http://www.youtube.com/xml/schemas/2015", "media": "http://search.yahoo.com/mrss/"}
SKIP = re.compile(r"refcam|ref cam|var review|behind the scenes|#shorts|\bshorts?\b|press conference|presser|interview|reaction|top 10|top10|every goal|best of|podcast|live stream|trailer|magazin", re.I)
WANT = re.compile(r"highlight|обзор|сжатый|resumen|sintesi|highlights|all goals|extended|recap| - | vs\.? | v ", re.I)


def norm(s: str) -> str:
    s = strip_accents(s or "").lower()
    return re.sub(r"[^a-zа-яё0-9 ]+", " ", s)


def _variants(team) -> list[str]:
    out = set()
    for n in (team.name, team.short_name, getattr(team, "name_sr", ""), getattr(team, "name_ru", ""), getattr(team, "name_cyr", "")):
        n = norm(n)
        if len(n) >= 3:
            out.add(n.strip())
            words = [w for w in n.split() if len(w) >= 4 and w not in ("club", "football", "basket", "basketball", "hockey", "united", "city")]
            out.update(words)  # "real madrid" -> "madrid", "crvena zvezda" -> "zvezda"
    return [v for v in out if v]


def _hit(title: str, team) -> bool:
    t = f" {title} "
    return any(f" {v} " in t or (len(v) >= 6 and v in t) for v in _variants(team))


def sync_highlights(db: Session) -> str:
    since = datetime.utcnow() - timedelta(days=4)
    recent = db.scalars(select(Match).where(Match.status == "finished", Match.start > since)).all()
    by_sport = {}
    for m in recent:
        by_sport.setdefault(m.sport, []).append(m)
    have = set(db.scalars(select(Highlight.video_id)).all())
    added = 0
    with httpx.Client() as c:
        for cid, cname, sport in CHANNELS:
            if sport not in by_sport:
                continue
            try:
                root = ET.fromstring(c.get(f"https://www.youtube.com/feeds/videos.xml?channel_id={cid}", timeout=15).content)
            except Exception:  # noqa
                continue
            for e in root.findall("a:entry", NS):
                vid = (e.findtext("yt:videoId", default="", namespaces=NS) or "").strip()
                title = e.findtext("a:title", default="", namespaces=NS) or ""
                pub = e.findtext("a:published", default="", namespaces=NS) or ""
                if not vid or vid in have or SKIP.search(title):
                    continue
                try:
                    pdt = datetime.fromisoformat(pub.replace("Z", "+00:00")).replace(tzinfo=None)
                except Exception:  # noqa
                    pdt = datetime.utcnow()
                nt = norm(title)
                for m in by_sport[sport]:
                    # the video comes out after the match started, within two days
                    if not (m.start - timedelta(hours=1) <= pdt <= m.start + timedelta(days=2)):
                        continue
                    if _hit(nt, m.home) and _hit(nt, m.away):
                        db.add(Highlight(match_id=m.id, video_id=vid, title=title[:300], channel=cname, published=pdt))
                        have.add(vid)
                        added += 1
                        break
    db.commit()
    return f"highlights +{added}"


MAIN = re.compile(r"highlight|resumen|обзор|sintesi|recap|résumé|resume|all goals", re.I)


def out(h: Highlight) -> dict:
    return {"video_id": h.video_id, "title": h.title, "channel": h.channel, "main": bool(MAIN.search(h.title or "")), "status": h.status or ""}


def for_match(db: Session, match_id: int) -> list[dict]:
    hs = db.scalars(select(Highlight).where(Highlight.match_id == match_id, Highlight.status != "blocked")).all()
    return sorted((out(h) for h in hs), key=lambda x: not x["main"])
