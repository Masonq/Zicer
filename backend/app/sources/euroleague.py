"""EuroLeague basketball schedule and results (official public API)."""
from datetime import datetime, timedelta
import httpx
from ..config import UA

URL = "https://api-live.euroleague.net/v2/competitions/E/seasons/{s}/games"
SERBIAN_CODES = {"PAR", "RED", "CZV", "MER"}


def season_code(today: datetime) -> str:
    y = today.year if today.month >= 8 else today.year - 1
    return f"E{y}"


def _team(c: dict) -> dict:
    name = c.get("name", "")
    serbian = c.get("code") in SERBIAN_CODES or "belgrade" in name.lower()
    sh = c.get("abbreviatedName") or c.get("editorialName") or name
    sh = {"Crvena Zvezda": "Crvena zvezda", "FC Barcelona": "Barcelona", "LDLC ASVEL": "ASVEL", "Hapoel TLV": "Hapoel Tel Aviv"}.get(sh, sh)
    return {"ext": f"el:{c.get('code')}", "name": name, "short": sh,
            "logo": (c.get("images") or {}).get("crest", ""), "country": "SRB" if serbian else "",
            "serbian": serbian}


def fetch(client: httpx.Client) -> list[dict]:
    now = datetime.utcnow()
    r = client.get(URL.format(s=season_code(now)), headers={"User-Agent": UA}, timeout=25)
    r.raise_for_status()
    out = []
    for g in r.json().get("data", []):
        start = datetime.fromisoformat(g["utcDate"].replace("Z", "+00:00")).replace(tzinfo=None)
        loc, road = g["local"], g["road"]
        played = g.get("played")
        if played:
            status = "finished"
        elif start <= now <= start + timedelta(hours=2, minutes=30):
            status = "live"
        else:
            status = "scheduled"

        def reg(side):
            p = side.get("partials") or {}
            vals = [p.get(f"partials{i}") for i in range(1, 5)]
            return sum(v for v in vals if isinstance(v, int)) if any(isinstance(v, int) for v in vals) else None

        sh, sa = loc.get("score"), road.get("score")
        out.append({
            "ext": f"el:{g['identifier']}",
            "sport": "basketball",
            "league": {"ext": "el:E", "name": "EuroLeague", "country": "EU", "priority": 2},
            "home": _team(loc["club"]), "away": _team(road["club"]),
            "start": start, "status": status, "minute": "",
            "score_home": sh if status != "scheduled" and (sh or sa) else None,
            "score_away": sa if status != "scheduled" and (sh or sa) else None,
            "reg_home": reg(loc) if played else None, "reg_away": reg(road) if played else None,
        })
    return out
