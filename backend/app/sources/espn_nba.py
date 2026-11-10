"""NBA schedule, live scores and results from ESPN public API."""
from datetime import date, datetime
import httpx
from ..config import UA

URL = "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates={d}"


def fetch_day(d: date, client: httpx.Client) -> list[dict]:
    r = client.get(URL.format(d=d.strftime("%Y%m%d")), headers={"User-Agent": UA}, timeout=20)
    r.raise_for_status()
    out = []
    for e in r.json().get("events", []):
        comp = e["competitions"][0]
        st = e["status"]["type"]
        state = st.get("state")
        status = "finished" if st.get("completed") else ("live" if state == "in" else ("cancelled" if "POSTPONED" in st.get("name", "") or "CANCELED" in st.get("name", "") else "scheduled"))
        sides = {c["homeAway"]: c for c in comp["competitors"]}
        if "home" not in sides or "away" not in sides:
            continue

        def team(c):
            t = c["team"]
            return {"ext": f"nba:{t.get('abbreviation')}", "name": t.get("displayName", ""), "short": t.get("shortDisplayName") or t.get("name") or t.get("displayName"),
                    "logo": t.get("logo", ""), "serbian": False}

        def reg(c):
            ls = c.get("linescores") or []
            return sum(int(float(x.get("value", 0))) for x in ls[:4]) if len(ls) >= 4 else None
        h, a = sides["home"], sides["away"]
        minute = ""
        if status == "live":
            minute = f"Q{e['status'].get('period', '')}" if e["status"].get("period") else ""
        sh = int(float(h.get("score", 0) or 0)) if status in ("live", "finished") else None
        sa = int(float(a.get("score", 0) or 0)) if status in ("live", "finished") else None
        out.append({
            "ext": f"nba:{e['id']}", "sport": "basketball",
            "league": {"ext": "nba", "name": "NBA", "country": "USA", "priority": 4},
            "home": team(h), "away": team(a),
            "start": datetime.fromisoformat(e["date"].replace("Z", "+00:00")).replace(tzinfo=None),
            "status": status, "minute": minute, "score_home": sh, "score_away": sa,
            "reg_home": reg(h) if status == "finished" else None, "reg_away": reg(a) if status == "finished" else None,
        })
    return out
