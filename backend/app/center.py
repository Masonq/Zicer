"""Match centre: live events, statistics and momentum."""
import re
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


EL_PLAY = {  # playtype -> (sr, ru, points)
    "2FGM": ("Dvojka", "Двухочковый", 2), "3FGM": ("Trojka", "Трёхочковый", 3), "FTM": ("Slobodno bacanje", "Штрафной", 1),
    "2FGA": ("Promašaj za 2", "Промах с игры", 0), "3FGA": ("Promašaj za 3", "Промах трёхочкового", 0), "FTA": ("Promašeno bacanje", "Промах штрафного", 0),
    "D": ("Skok u odbrani", "Подбор в защите", 0), "O": ("Skok u napadu", "Подбор в нападении", 0), "AS": ("Asistencija", "Передача", 0),
    "TO": ("Izgubljena lopta", "Потеря", 0), "ST": ("Ukradena lopta", "Перехват", 0), "FV": ("Blokada", "Блок-шот", 0),
    "CM": ("Faul", "Фол", 0), "CMU": ("Nesportska greška", "Неспортивный фол", 0), "CMT": ("Tehnička greška", "Технический фол", 0),
    "TOUT": ("Tajm-aut", "Тайм-аут", 0), "IN": ("Ulazak", "Замена", 0),
}
EL_STATS = [  # (key in totr, sr, ru, pct)
    ("Points", "Poeni", "Очки", False), ("FG2", "Šut za 2", "Двухочковые", False), ("FG3", "Šut za 3", "Трёхочковые", False),
    ("FT", "Slobodna bacanja", "Штрафные", False), ("TotalRebounds", "Skokovi", "Подборы", False), ("OffensiveRebounds", "Skokovi u napadu", "Подборы в нападении", False),
    ("Assistances", "Asistencije", "Передачи", False), ("Steals", "Ukradene lopte", "Перехваты", False), ("Turnovers", "Izgubljene lopte", "Потери", False),
    ("BlocksFavour", "Blokade", "Блок-шоты", False), ("FoulsCommited", "Lične greške", "Фолы", False), ("Valuation", "Indeks korisnosti", "Эффективность", False),
]


def _el(m: Match):
    # ext: el:E2026_379 / el:U2026_123
    ident = m.ext.split(":", 1)[1]
    season, _, code = ident.partition("_")
    key = f"el:{ident}"
    hit = _cache.get(key)
    ttl = 15 if m.status == "live" else 900
    if hit and time.time() - hit[0] < ttl:
        return hit[1]
    params = {"gamecode": code, "seasoncode": season}
    out = {"events": [], "stats": []}
    try:
        b = httpx.get("https://live.euroleague.net/api/Boxscore", params=params, headers={"User-Agent": UA}, timeout=12).json()
        tt = [x.get("totr") or {} for x in b.get("Stats", [])]
        if len(tt) == 2:
            def pair(k):
                if k in ("FG2", "FG3", "FT"):
                    mk = {"FG2": ("FieldGoalsMade2", "FieldGoalsAttempted2"), "FG3": ("FieldGoalsMade3", "FieldGoalsAttempted3"), "FT": ("FreeThrowsMade", "FreeThrowsAttempted")}[k]
                    return [f"{t.get(mk[0], 0)}/{t.get(mk[1], 0)}" for t in tt], [t.get(mk[0], 0) for t in tt]
                return [t.get(k, 0) for t in tt], [t.get(k, 0) for t in tt]
            for k, sr, ru, pct in EL_STATS:
                v, w = pair(k)
                out["stats"].append({"key": k, "sr": sr, "ru": ru, "pct": pct, "v": v, "w": w})
    except Exception:  # noqa
        pass
    try:
        p = httpx.get("https://live.euroleague.net/api/PlayByPlay", params=params, headers={"User-Agent": UA}, timeout=12).json()
        home_code = (p.get("CodeTeamA") or "").strip()
        plays = []
        for qi, qk in enumerate(["FirstQuarter", "SecondQuarter", "ThirdQuarter", "ForthQuarter", "ExtraTime"], 1):
            for x in p.get(qk) or []:
                pt = (x.get("PLAYTYPE") or "").strip()
                if pt not in EL_PLAY:
                    continue
                sr, ru, pts = EL_PLAY[pt]
                name = (x.get("PLAYER") or "").strip()
                if "," in name:
                    last, first = [y.strip() for y in name.split(",", 1)]
                    name = f"{first.title()} {last.title()}"
                plays.append({"pt": pt, "q": qi, "clock": x.get("MARKERTIME") or "", "home": (x.get("CODETEAM") or "").strip() == home_code,
                              "player": name, "sr": sr, "ru": ru, "pts": pts,
                              "score": [x.get("POINTS_A"), x.get("POINTS_B")] if x.get("POINTS_A") is not None else None})
        out["plays"] = plays[-60:]
        # game clock, quarter and team fouls in the current quarter (bonus dots)
        if plays:
            lastp = plays[-1]
            out["clock"] = {"q": lastp["q"], "t": lastp["clock"]}
            cq = lastp["q"]
            fouls = [0, 0]
            for qi, qk in enumerate(["FirstQuarter", "SecondQuarter", "ThirdQuarter", "ForthQuarter", "ExtraTime"], 1):
                if qi != cq:
                    continue
                for x in p.get(qk) or []:
                    if (x.get("PLAYTYPE") or "").strip() in ("CM", "CMU", "CMT", "CMD"):
                        fouls[0 if (x.get("CODETEAM") or "").strip() == home_code else 1] += 1
            out["fouls"] = fouls
    except Exception:  # noqa
        pass
    _cache[key] = (time.time(), out)
    return out


NBA_PATTERNS = [  # (regex on the ESPN text, serbian, russian)
    (r"defensive rebound", "skok u odbrani", "подбор в защите"),
    (r"offensive rebound", "skok u napadu", "подбор в нападении"),
    (r"makes free throw (\d) of (\d)", "pogođeno slobodno bacanje {0}/{1}", "реализован штрафной {0} из {1}"),
    (r"misses free throw (\d) of (\d)", "promašeno slobodno bacanje {0}/{1}", "промах штрафного {0} из {1}"),
    (r"makes .*three point", "pogođena trojka", "трёхочковый"),
    (r"misses .*three point", "promašena trojka", "промах трёхочкового"),
    (r"makes .*dunk", "zakucavanje", "данк"),
    (r"makes .*layup", "polaganje", "проход под кольцо"),
    (r"makes", "pogođena dvojka", "двухочковый"),
    (r"misses", "promašaj za 2", "промах двухочкового"),
    (r"blocks", "blokada", "блок-шот"),
    (r"turnover|traveling|bad pass|lost ball|offensive foul", "izgubljena lopta", "потеря"),
    (r"steals", "ukradena lopta", "перехват"),
    (r"shooting foul", "lična greška u šutu", "фол на броске"),
    (r"foul", "lična greška", "фол"),
    (r"timeout", "tajm-aut", "тайм-аут"),
    (r"enters the game", "izmena", "замена"),
]


def _nba_player(text: str) -> str:
    m = re.match(r"^([A-Z][\w'.-]+(?: [A-Z][\w'.-]+){0,2}) (makes|misses|defensive|offensive|blocks|steals|shooting|personal|bad|lost|traveling|turnover|enters)", text or "")
    return m.group(1) if m else ""


def _nba_text(text: str, lang: str) -> str:
    low = (text or "").lower()
    for rx, sr, ru in NBA_PATTERNS:
        mm = re.search(rx, low)
        if mm:
            return (sr if lang == "sr" else ru).format(*mm.groups())
    return text or ""


def _nba(m: Match):
    eid = m.ext.split(":", 1)[1]
    key = f"nba:{eid}"
    hit = _cache.get(key)
    ttl = 15 if m.status == "live" else 900
    if hit and time.time() - hit[0] < ttl:
        return hit[1]
    out = {"stats": [], "plays": []}
    try:
        d = httpx.get(f"https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event={eid}", headers={"User-Agent": UA}, timeout=12).json()
        teams = (d.get("boxscore") or {}).get("teams") or []
        hid = None
        comp = ((d.get("header") or {}).get("competitions") or [{}])[0]
        for c in comp.get("competitors", []):
            if c.get("homeAway") == "home":
                hid = (c.get("team") or {}).get("id")
        if len(teams) == 2 and m.status != "scheduled":
            byhome = sorted(teams, key=lambda t: 0 if (t.get("team") or {}).get("id") == hid else 1)
            labels = {"fieldGoalsMade-fieldGoalsAttempted": ("Šut iz igre", "Броски с игры"), "threePointFieldGoalsMade-threePointFieldGoalsAttempted": ("Šut za 3", "Трёхочковые"),
                      "freeThrowsMade-freeThrowsAttempted": ("Slobodna bacanja", "Штрафные"), "totalRebounds": ("Skokovi", "Подборы"),
                      "assists": ("Asistencije", "Передачи"), "steals": ("Ukradene lopte", "Перехваты"), "blocks": ("Blokade", "Блок-шоты"),
                      "turnovers": ("Izgubljene lopte", "Потери"), "fouls": ("Lične greške", "Фолы")}
            maps = [{s.get("name"): s.get("displayValue") for s in t.get("statistics", [])} for t in byhome]
            for k, (sr, ru) in labels.items():
                if k in maps[0] and k in maps[1]:
                    v = [maps[0][k], maps[1][k]]
                    w = [float(str(x).split("-")[0] or 0) for x in v]
                    out["stats"].append({"key": k, "sr": sr, "ru": ru, "pct": False, "v": v, "w": w})
        for pl in (d.get("plays") or [])[-60:]:
            if not pl.get("scoringPlay") and pl.get("type", {}).get("text") not in ("Defensive Rebound", "Offensive Rebound", "Steal", "Block", "Turnover"):
                continue
            out["plays"].append({"q": (pl.get("period") or {}).get("number"), "clock": (pl.get("clock") or {}).get("displayValue", ""),
                                 "home": (pl.get("team") or {}).get("id") == hid, "player": _nba_player(pl.get("text", "")), "sr": _nba_text(pl.get("text", ""), "sr"), "ru": _nba_text(pl.get("text", ""), "ru"),
                                 "pts": pl.get("scoreValue") or 0, "score": [pl.get("homeScore"), pl.get("awayScore")]})
    except Exception:  # noqa
        pass
    _cache[key] = (time.time(), out)
    return out


def _x_stats(m: Match):
    from .sources.xfeed import STAT_NAMES
    st = ((m.live or {}).get("x") or {}).get("st") or {}
    out = []
    for name, v in st.items():
        if name == "Timeouts remaining":
            continue
        sr, ru, pct = STAT_NAMES.get(name, (name, name, False))
        out.append({"key": "x:" + name, "sr": sr, "ru": ru, "pct": pct, "v": [str(v[0]).rstrip("%"), str(v[1]).rstrip("%")]})
    return out


def _mb_stats(m: Match):
    st = (m.live or {}).get("stats") or {}
    names = {"corners": ("Korneri", "Угловые"), "yc": ("Žuti kartoni", "Жёлтые карточки"), "rc": ("Crveni kartoni", "Красные карточки")}
    return [{"key": k, "sr": names[k][0], "ru": names[k][1], "pct": False, "v": v} for k, v in st.items() if k in names]


@router.get("/matches/{mid}/center")
def center(mid: int, db: Session = Depends(get_db)):
    m = db.get(Match, mid)
    if not m:
        raise HTTPException(404)
    base = {"now": int(time.time()), "xev": (m.live or {}).get("xev") or [], "status": m.status, "minute": m.minute, "score": [m.score_home, m.score_away] if m.score_home is not None else None,
            "sport": m.sport, "live": m.live or {}}
    if m.status not in ("live", "finished"):
        return base
    try:
        xs = _x_stats(m)
        if m.ext.startswith("fm:"):
            base.update(_fotmob(m.ext.split(":")[1], m.status == "live"))
            if not base.get("stats"):
                base["stats"] = xs or _mb_stats(m)
            elif xs:
                have = {s["ru"] for s in base["stats"]}
                base["stats"] = [s for s in xs if s["key"] in ("x:Attacks", "x:Dangerous attacks") and s["ru"] not in have] + base["stats"]
        elif m.ext.startswith("el:"):
            base.update(_el(m))
            if not base.get("stats"):
                base["stats"] = xs
        elif m.ext.startswith("nba:"):
            base.update(_nba(m))
            if not base.get("stats"):
                base["stats"] = xs
        else:
            base["stats"] = xs or _mb_stats(m)
    except Exception:  # noqa
        pass
    return base
