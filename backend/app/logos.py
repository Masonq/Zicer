"""Team logos (and tennis player photos) from free public sources: ESPN team lists and TheSportsDB."""
import time
import httpx
from datetime import datetime, timedelta
from sqlalchemy import select, or_
from sqlalchemy.orm import Session

from .models import Team, Meta
from .ingest import similarity

UA = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Winly/1.0"}
ESPN = {"hockey": ["hockey/nhl"], "basketball": ["basketball/nba", "basketball/wnba"]}
TSDB_SPORT = {"hockey": "Ice Hockey", "basketball": "Basketball", "volleyball": "Volleyball", "waterpolo": "Water Polo", "football": "Soccer"}
TSDB = "https://www.thesportsdb.com/api/v1/json/123"


def _espn_teams(c: httpx.Client, sport: str) -> list[tuple[list[str], str]]:
    out = []
    for path in ESPN.get(sport, []):
        try:
            d = c.get(f"https://site.api.espn.com/apis/site/v2/sports/{path}/teams", headers=UA, timeout=15).json()
            for t in d["sports"][0]["leagues"][0]["teams"]:
                t = t["team"]
                names = [t.get("displayName", ""), t.get("shortDisplayName", ""), t.get("location", ""), t.get("name", ""), t.get("nickname", "")]
                if t.get("logos"):
                    out.append(([n for n in names if n], t["logos"][0]["href"]))
        except Exception:  # noqa
            pass
    return out


def _tsdb_team(c: httpx.Client, name: str, sport: str) -> str:
    try:
        d = c.get(f"{TSDB}/searchteams.php", params={"t": name}, headers=UA, timeout=15).json()
    except Exception:  # noqa
        return ""
    best, bs = "", 0.0
    for t in d.get("teams") or []:
        if t.get("strSport") != TSDB_SPORT.get(sport):
            continue
        sc = max(similarity(name, t.get("strTeam") or ""), similarity(name, t.get("strTeamAlternate") or "") if t.get("strTeamAlternate") else 0)
        if sc > bs and (t.get("strBadge") or t.get("strLogo")):
            best, bs = t.get("strBadge") or t.get("strLogo"), sc
    return best if bs >= 0.72 else ""


def _tsdb_player(c: httpx.Client, name: str) -> str:
    # "Samson L." / "Rune H." -> surname + first initial
    parts = name.replace(".", " ").split()
    if not parts:
        return ""
    surname = max(parts, key=len)
    initial = next((p[0] for p in parts if p != surname), "")
    try:
        d = c.get(f"{TSDB}/searchplayers.php", params={"p": surname}, headers=UA, timeout=15).json()
    except Exception:  # noqa
        return ""
    for p in d.get("player") or []:
        if p.get("strSport") != "Tennis":
            continue
        full = p.get("strPlayer") or ""
        if surname.lower() not in full.lower():
            continue
        if initial and not any(w[:1].lower() == initial.lower() for w in full.split() if w.lower() != surname.lower()):
            continue
        return p.get("strCutout") or p.get("strThumb") or p.get("strRender") or ""
    return ""


def sync_logos(db: Session, limit: int = 25) -> str:
    now = datetime.utcnow()
    teams = db.scalars(select(Team).where(or_(Team.logo == None, Team.logo == ""), Team.sport.in_(  # noqa
        ["hockey", "basketball", "volleyball", "waterpolo", "tennis", "football"]))).all()
    todo = []
    for t in teams:
        mk = db.get(Meta, f"logo_try_{t.id}")
        if mk and mk.value and datetime.fromisoformat(mk.value) > now - timedelta(days=7):
            continue
        todo.append(t)
        if len(todo) >= limit:
            break
    if not todo:
        return "logos: nothing to do"
    found = 0
    with httpx.Client() as c:
        espn = {sp: _espn_teams(c, sp) for sp in {t.sport for t in todo} if sp in ESPN}
        for t in todo:
            logo = ""
            names = [t.name, t.short_name]
            best, bs = "", 0.0
            for cand_names, href in espn.get(t.sport, []):
                sc = max(similarity(n, cn) for n in names if n for cn in cand_names)
                if sc > bs:
                    best, bs = href, sc
            if bs >= 0.85:
                logo = best
            if not logo and t.sport == "tennis":
                logo = _tsdb_player(c, t.short_name or t.name)
                time.sleep(0.6)
            elif not logo:
                logo = _tsdb_team(c, t.name, t.sport)
                time.sleep(0.6)
            if logo:
                t.logo = logo
                found += 1
            db.merge(Meta(key=f"logo_try_{t.id}", value=now.isoformat()))
    db.commit()
    return f"logos: checked {len(todo)}, found {found}"
