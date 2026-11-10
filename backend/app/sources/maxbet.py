"""Odds from MaxBet (Serbian bookmaker) public offer API."""
from datetime import datetime
import httpx
from ..config import UA

URL = "https://www.maxbet.rs/restapi/offer/sr/sport/{s}/mob?annex=3&desktopVersion=2.36.3.9&locale=sr"
SPORTS = {"football": "S", "basketball": "B"}


def fetch(sport: str, client: httpx.Client) -> list[dict]:
    r = client.get(URL.format(s=SPORTS[sport]), headers={"User-Agent": UA, "Accept": "application/json"}, timeout=25)
    r.raise_for_status()
    out = []
    for m in r.json().get("esMatches", []):
        o = m.get("odds") or {}
        if not all(k in o for k in ("1", "3")):
            continue
        out.append({
            "home": m.get("home", ""), "away": m.get("away", ""),
            "start": datetime.utcfromtimestamp(m["kickOffTime"] / 1000),
            "league": m.get("leagueName", ""),
            "odds": {"1": o.get("1"), "X": o.get("2"), "2": o.get("3")},
            "live": bool(m.get("live")),
        })
    return out
