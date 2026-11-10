"""Match centre: live events, statistics and momentum."""
import time
import httpx
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from .config import UA
from .db import get_db
from .models import Match

router = APIRouter(prefix="/api")
_cache: dict = {}
STAT_KEYS = [  # key -> (sr, ru)
    ("BallPossesion", "Posed lopte", "Владение мячом", True),
    ("expected_goals", "Očekivani golovi (xG)", "Ожидаемые голы (xG)", False),
    ("total_shots", "Šutevi", "Удары", False),
    ("ShotsOnTarget", "Šutevi u okvir", "Удары в створ", False),
    ("big_chance", "Velike šanse", "Голевые моменты", False),
    ("corners", "Korneri", "Угловые", False),
    ("fouls", "Faulovi", "Фолы", False),
    ("Offsides", "Ofsajdi", "Офсайды", False),
    ("yellow_cards", "Žuti kartoni", "Жёлтые карточки", False),
    ("red_cards", "Crveni kartoni", "Красные карточки", False),
    ("keeper_saves", "Odbrane golmana", "Сейвы вратаря", False),
]


def _fotmob(match_id: str, live: bool):
    key = f"fm:{match_id}"
    hit = _cache.get(key)
    ttl = 25 if live else 600
    if hit and time.time() - hit[0] < ttl:
        return hit[1]
    r = httpx.get(f"https://www.fotmob.com/api/data/matchDetails?matchId={match_id}", headers={"User-Agent": UA}, timeout=15)
    r.raise_for_status()
    d = r.json()
    c = d.get("content") or {}
    events = []
    for e in ((c.get("matchFacts") or {}).get("events") or {}).get("events") or []:
        t = e.get("type")
        if t not in ("Goal", "Card", "Substitution", "Half", "MissedPenalty", "Var"):
            continue
        ev = {"type": t, "min": e.get("time"), "add": e.get("overloadTime"), "home": e.get("isHome"),
              "player": e.get("nameStr") or (e.get("player") or {}).get("name") or "", "card": e.get("card"),
              "score": e.get("newScore"), "assist": (e.get("assistStr") or "").replace("assist by ", "")}
        if t == "Substitution":
            sw = e.get("swap") or []
            ev["player"] = (sw[0] or {}).get("name", "") if sw else ""
            ev["out"] = (sw[1] or {}).get("name", "") if len(sw) > 1 else ""
        if t == "Goal" and e.get("ownGoal"):
            ev["own"] = True
        if t == "Goal" and e.get("isPenaltyShootoutEvent"):
            continue
        events.append(ev)
    stats = []
    try:
        groups = c["stats"]["Periods"]["All"]["stats"]
        flat = {s["key"]: s["stats"] for g in groups for s in g.get("stats", []) if s.get("key")}
        for key, sr, ru, pct in STAT_KEYS:
            v = flat.get(key)
            if v and len(v) == 2 and v[0] is not None:
                stats.append({"key": key, "sr": sr, "ru": ru, "pct": pct, "v": v})
    except (KeyError, TypeError):
        pass
    mom = []
    try:
        mom = [[p["minute"], p["value"]] for p in c["momentum"]["main"]["data"]]
    except (KeyError, TypeError):
        pass
    colors = (((d.get("general") or {}).get("teamColors") or {}).get("darkMode") or {})
    out = {"events": events, "stats": stats, "momentum": mom, "colors": {"home": colors.get("home"), "away": colors.get("away")}}
    _cache[key] = (time.time(), out)
    if len(_cache) > 500:
        for k in sorted(_cache, key=lambda k: _cache[k][0])[:200]:
            _cache.pop(k, None)
    return out


@router.get("/matches/{mid}/center")
def center(mid: int, db: Session = Depends(get_db)):
    m = db.get(Match, mid)
    if not m:
        raise HTTPException(404)
    base = {"status": m.status, "minute": m.minute, "score": [m.score_home, m.score_away] if m.score_home is not None else None,
            "sport": m.sport, "live": m.live or {}}
    if m.ext.startswith("fm:") and m.status in ("live", "finished"):
        try:
            base.update(_fotmob(m.ext.split(":")[1], m.status == "live"))
        except Exception:  # noqa
            pass
    return base
