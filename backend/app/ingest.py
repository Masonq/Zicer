import re
"""Data jobs: fixtures, odds, settlement, trends, analysis, translation, telegram."""
import hashlib
import json
import logging
import traceback
from datetime import datetime, timedelta, date

import httpx
from sqlalchemy import select, or_, and_, func
from sqlalchemy.orm import Session

from . import config
from .models import (Team, League, Match, Prediction, Ticket, TicketItem, ScorePick, Trend, User,
                     JobStatus, Translation, TgSent, Meta, now)
from .sources import fotmob, euroleague, maxbet, espn_nba, xfeed
from .textutil import similarity, to_cyr, to_lat

log = logging.getLogger("zicer")
MATCH_THRESHOLD = 0.85


# ---------- helpers ----------
def job(db: Session, name: str, fn, *a):
    js = db.get(JobStatus, name) or JobStatus(name=name)
    db.add(js)
    try:
        info = fn(db, *a)
        js.last_ok = now()
        js.info = str(info)[:500]
        db.commit()
        return info
    except Exception as e:  # noqa
        db.rollback()
        js = db.get(JobStatus, name) or JobStatus(name=name)
        js.last_error = (f"{type(e).__name__}: {e}\n" + traceback.format_exc())[-2000:]
        js.last_error_at = now()
        db.add(js)
        db.commit()
        log.exception("job %s failed", name)


def _team(db: Session, sport: str, t: dict) -> Team:
    obj = db.scalar(select(Team).where(Team.ext == t["ext"]))
    if not obj:
        obj = Team(ext=t["ext"], sport=sport, name=t["name"])
        db.add(obj)
    obj.name = t["name"]
    obj.short_name = t.get("short") or t["name"]
    if t.get("logo"):
        obj.logo = t["logo"]
    if t.get("serbian"):
        obj.is_serbian = True
        obj.country = "SRB"
    return obj


def _league(db: Session, sport: str, lg: dict) -> League:
    obj = db.scalar(select(League).where(League.ext == lg["ext"]))
    if not obj:
        obj = League(ext=lg["ext"], sport=sport, name=lg["name"])
        db.add(obj)
    obj.name = lg["name"]
    obj.country = lg.get("country", "")
    obj.priority = lg.get("priority", 50)
    return obj


def _is_derby(h: Team, a: Team) -> bool:
    n = (h.name + " " + a.name).lower()
    return "partizan" in n and "zvezda" in n


def upsert_matches(db: Session, items: list[dict]) -> int:
    n = 0
    for it in items:
        lg = _league(db, it["sport"], it["league"])
        h = _team(db, it["sport"], it["home"])
        a = _team(db, it["sport"], it["away"])
        db.flush()
        m = db.scalar(select(Match).where(Match.ext == it["ext"]))
        if not m:
            m = Match(ext=it["ext"], sport=it["sport"], odds={})
            db.add(m)
        if m.settled and m.status == "finished":
            continue
        m.league_id, m.home_id, m.away_id = lg.id, h.id, a.id
        m.start = it["start"]
        m.status = it["status"]
        if it.get("minute") or not m.live:
            m.minute = it.get("minute", "")
        if it.get("score_home") is not None or it["status"] != "live":
            m.score_home, m.score_away = it.get("score_home"), it.get("score_away")
        if it.get("reg_home") is not None:
            m.reg_home, m.reg_away = it["reg_home"], it["reg_away"]
        m.is_derby = _is_derby(h, a)
        n += 1
    db.flush()
    return n


# ---------- jobs ----------
def sync_football(db: Session, days_back: int = 1, days_fwd: int = 7) -> str:
    total = 0
    with httpx.Client() as c:
        for i in range(-days_back, days_fwd + 1):
            d = date.today() + timedelta(days=i)
            total += upsert_matches(db, fotmob.fetch_day(d, c))
            db.commit()
    return f"football upserted {total}"


def sync_football_live(db: Session) -> str:
    with httpx.Client() as c:
        n = upsert_matches(db, fotmob.fetch_day(date.today(), c))
        if datetime.utcnow().hour < 3:
            n += upsert_matches(db, fotmob.fetch_day(date.today() - timedelta(days=1), c))
    return f"live upserted {n}"


def backfill_football(db: Session, days: int = 60) -> str:
    done = db.get(Meta, "backfill_football")
    if done:
        return "already"
    import time
    total = 0
    with httpx.Client() as c:
        for i in range(days, 1, -1):
            try:
                total += upsert_matches(db, fotmob.fetch_day(date.today() - timedelta(days=i), c))
                db.commit()
            except Exception:  # noqa
                db.rollback()
            time.sleep(0.4)
    db.add(Meta(key="backfill_football", value=str(datetime.utcnow())))
    return f"backfilled {total}"


def sync_basketball(db: Session) -> str:
    n = 0
    with httpx.Client() as c:
        for comp in ("E", "U"):
            try:
                n += upsert_matches(db, euroleague.fetch(c, comp))
                db.commit()
            except Exception:  # noqa
                db.rollback()
                log.exception("euroleague %s", comp)
        for i in (-1, 0, 1):
            n += upsert_matches(db, espn_nba.fetch_day(date.today() + timedelta(days=i), c))
            db.commit()
    return f"basketball upserted {n}"


def sync_basketball_week(db: Session) -> str:
    n = 0
    with httpx.Client() as c:
        for i in range(2, 8):
            n += upsert_matches(db, espn_nba.fetch_day(date.today() + timedelta(days=i), c))
            db.commit()
    return f"nba week upserted {n}"


SERBIAN_BASKET = ("partizan", "zvezda", "mega", "fmp", "borac", "spartak", "zlatibor", "vojvodina", "dynamic",
                  "sloga", "metalac", "okk beograd", "mladost", "radnički", "radnicki", "tamiš", "tamis", "split")


def _resolve_bteam(db: Session, mb_id, name: str, cache: list, serbian_league: bool) -> Team:
    ext = f"mbt:{mb_id}"
    t = db.scalar(select(Team).where(Team.ext == ext))
    if t:
        return t
    best, bs = None, 0.0
    for cand in cache:
        sc = max(similarity(name, cand.name), similarity(name, cand.short_name or cand.name))
        if sc > bs:
            best, bs = cand, sc
    if best and bs >= 0.9:
        return best
    low = name.lower()
    ser = serbian_league or any(w in low for w in SERBIAN_BASKET[:2])
    t = Team(ext=ext, sport="basketball", name=name, short_name=name.replace("C.Zvezda", "Crvena zvezda"),
             is_serbian=ser, country="SRB" if ser else "")
    db.add(t)
    db.flush()
    cache.append(t)
    return t


def create_maxbet_basket(db: Session, offers: list[dict]) -> int:
    n = 0
    cache = None
    for o in offers:
        lg = maxbet.basket_league(o["league"])
        if not lg or not o.get("id"):
            continue
        ext = f"mbb:{o['id']}"
        m = db.scalar(select(Match).where(Match.ext == ext))
        if m and m.status == "finished":
            continue
        if not m:
            if cache is None:
                cache = db.scalars(select(Team).where(Team.sport == "basketball")).all()
            lname, cc, prio = lg
            league = _league(db, "basketball", {"ext": f"mbl:{lname}", "name": lname, "country": cc, "priority": prio})
            h = _resolve_bteam(db, o.get("home_id"), o["home"], cache, cc == "SRB")
            a = _resolve_bteam(db, o.get("away_id"), o["away"], cache, cc == "SRB")
            db.flush()
            m = Match(ext=ext, sport="basketball", league_id=league.id, home_id=h.id, away_id=a.id, odds={}, start=o["start"], mb_id=o["id"])
            db.add(m)
            n += 1
        m.start = o["start"]
        if m.status == "live" and m.start > datetime.utcnow() + timedelta(minutes=5):
            m.status = "scheduled"
        m.odds = {"maxbet": {k: v for k, v in o["odds"].items() if v and v > 1.0}}
        m.odds_updated = now()
        m.is_derby = _is_derby(m.home, m.away) if m.home and m.away else False
    db.commit()
    return n


def create_maxbet_other(db: Session, sport: str, offers: list[dict]) -> int:
    n = 0
    cache = None
    for o in offers:
        lg = maxbet.other_league(sport, o["league"])
        if not lg or not o.get("id"):
            continue
        ext = f"mbo:{o['id']}"
        m = db.scalar(select(Match).where(Match.ext == ext))
        if m and m.status == "finished":
            continue
        if not m:
            if cache is None:
                cache = db.scalars(select(Team).where(Team.sport == sport)).all()
            lname, cc, prio = lg
            league = _league(db, sport, {"ext": f"mbo:{sport}:{lname}", "name": lname, "country": cc, "priority": prio})
            teams = []
            for tid, nm in ((o.get("home_id"), o["home"]), (o.get("away_id"), o["away"])):
                ext_t = f"mbo:{sport}:{tid}"
                t = db.scalar(select(Team).where(Team.ext == ext_t))
                if not t:
                    t = Team(ext=ext_t, sport=sport, name=nm, short_name=nm, is_serbian=(cc == "SRB"), country=cc if cc == "SRB" else "")
                    db.add(t)
                    db.flush()
                teams.append(t)
            m = Match(ext=ext, sport=sport, league_id=league.id, home_id=teams[0].id, away_id=teams[1].id, odds={}, start=o["start"], mb_id=o["id"])
            db.add(m)
            n += 1
        m.start = o["start"]
        if m.status == "live" and m.start > datetime.utcnow() + timedelta(minutes=5):
            m.status = "scheduled"
        m.odds = {"maxbet": {k: v for k, v in o["odds"].items() if v and v > 1.0}}
        m.odds_updated = now()
    db.commit()
    return n


def sync_other_sports(db: Session) -> str:
    total = 0
    with httpx.Client() as c:
        for sport in maxbet.OTHER:
            try:
                total += create_maxbet_other(db, sport, maxbet.fetch(sport, c))
            except Exception:  # noqa
                db.rollback()
                log.exception("other sport %s", sport)
    return f"other sports new {total}"


X22_LINE = {"futsal": 14}  # esports come from PandaScore
X22_URL = "https://22bet.com/LineFeed/Get1x2_VZip?sports={s}&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true"


def sync_x22_line(db: Session) -> str:
    """Futsal and esports: fixtures and 1-X-2 prices from the 22Bet line (MaxBet doesn't offer them)."""
    n = 0
    fetched = {}
    with httpx.Client(headers={"User-Agent": "Mozilla/5.0", "Accept": "application/json"}, timeout=25) as c:
        for sport, sid in X22_LINE.items():
            games = []
            # the prematch feed answers only with the brand's partner/group ids on some mirrors: try the known variants
            for extra in ("&partner=151", "&partner=151&gr=151", "", "&gr=151"):
                try:
                    games = xfeed._get(c, X22_URL.replace("https://22bet.com", "").format(s=sid) + extra).json().get("Value") or []
                except Exception:  # noqa
                    games = []
                if games:
                    break
            live_mode = False
            if not games:  # the prematch line isn't served to us: take the matches that are being played now
                try:
                    games = xfeed._get(c, f"/LiveFeed/Get1x2_VZip?sports={sid}&count=100&lng=en&mode=4&country=1&getEmpty=true").json().get("Value") or []
                    live_mode = True
                except Exception:  # noqa
                    games = []
            fetched[sport] = f"{len(games)}{' live' if live_mode else ''}"
            for g in games:
                gid, h, a, lname, st = g.get("I"), g.get("O1"), g.get("O2"), (g.get("L") or "").strip(), g.get("S")
                if not (gid and h and a and lname and st):
                    continue
                if sport == "esports" and not any(k in lname for k in ("Counter-Strike", "CS2", "Dota", "League of Legends", "Valorant")):
                    continue
                ext = f"x22:{gid}"
                m = db.scalar(select(Match).where(Match.ext == ext))
                if m and m.status == "finished":
                    continue
                if not m:
                    prio = 6 if sport == "futsal" and ("Champions" in lname or "Serbia" in lname) else 9
                    league = _league(db, sport, {"ext": f"x22:{sport}:{lname}", "name": lname, "country": "SRB" if "Serbia" in lname else "INT", "priority": prio})
                    teams = []
                    for nm in (h, a):
                        ext_t = f"x22:{sport}:{nm.lower()}"
                        t = db.scalar(select(Team).where(Team.ext == ext_t))
                        if not t:
                            t = Team(ext=ext_t, sport=sport, name=nm, short_name=nm, is_serbian=False, country="")
                            db.add(t)
                            db.flush()
                        teams.append(t)
                    m = Match(ext=ext, sport=sport, league_id=league.id, home_id=teams[0].id, away_id=teams[1].id, odds={}, start=datetime.utcfromtimestamp(st), x_id=gid)
                    db.add(m)
                    n += 1
                m.start = datetime.utcfromtimestamp(st)
                if live_mode:
                    fs = (g.get("SC") or {}).get("FS") or {}
                    m.status = "live"
                    m.score_home, m.score_away = fs.get("S1", 0) or 0, fs.get("S2", 0) or 0
                    lv = dict(m.live or {})
                    lv["x_seen"] = int(datetime.utcnow().timestamp())
                    m.live = lv
                odds = {}
                for e in g.get("E") or []:
                    k = {1: "1", 2: "X", 3: "2"}.get(e.get("T"))
                    if k and e.get("C"):
                        odds[k] = float(e["C"])
                if odds:
                    m.odds = {**(m.odds or {}), "22bet": odds}
            db.commit()
    return f"x22 line new {n}, fetched {fetched}"


def sync_other_results(db: Session) -> str:
    pending = db.scalars(select(Match).where(Match.ext.like("mbo:%"), Match.start < datetime.utcnow(),
                                             or_(Match.status.in_(["scheduled", "live"]), and_(Match.status == "finished", Match.settled == False)))).all()  # noqa
    if not pending:
        return "no pending"
    n = 0
    with httpx.Client() as c:
        for sport in {m.sport for m in pending}:
            res = {}
            for i in (0, -1):
                try:
                    res.update(maxbet.fetch_results_sport(date.today() + timedelta(days=i), c, sport))
                except Exception:  # noqa
                    log.exception("results %s", sport)
            for m in [x for x in pending if x.sport == sport]:
                r = res.get(int(m.ext.split(":")[1]))
                if not r:
                    if m.status != "finished" and m.start < datetime.utcnow() - timedelta(hours=8):
                        m.status = "cancelled"
                    continue
                m.score_home, m.score_away, m.reg_home, m.reg_away = r["h"], r["a"], r["rh"], r["ra"]
                if r["end"]:
                    m.status = "finished"
                    lv = dict(m.live or {}); lv.pop("fin_by", None); m.live = lv
                elif m.status != "finished":
                    m.status = "live"
                n += 1
    db.commit()
    return f"other results {n}"


def sync_live(db: Session) -> str:
    with httpx.Client() as c:
        data = maxbet.fetch_live(c)
    if not data:
        return "no live"
    # link our live matches that have no MaxBet id yet (live games are absent from the prematch offer)
    code2sport = {v: k for k, v in maxbet.SPORTS.items()}
    lo = datetime.utcnow() - timedelta(hours=4)
    unlinked = db.scalars(select(Match).where(Match.mb_id.is_(None), Match.start > lo, Match.start < datetime.utcnow() + timedelta(minutes=20))).all()
    taken = set(db.scalars(select(Match.mb_id).where(Match.mb_id.in_(list(data.keys())))).all())
    for m in unlinked:
        best, bs = None, 0
        for mid, d in data.items():
            if mid in taken or code2sport.get(d.get("s")) != m.sport or not d.get("kot"):
                continue
            if abs(datetime.utcfromtimestamp(d["kot"] / 1000) - m.start).total_seconds() > 3 * 3600:
                continue
            sh, sa = similarity(d["h"], m.home.name), similarity(d["a"], m.away.name)
            if sh >= MATCH_THRESHOLD and sa >= MATCH_THRESHOLD and sh + sa > bs:
                best, bs = mid, sh + sa
        if best:
            m.mb_id = best
            taken.add(best)
    db.flush()
    ms = db.scalars(select(Match).where(Match.mb_id.in_(list(data.keys())))).all()
    n = 0
    for m in ms:
        d = data[m.mb_id]
        keep = {k: v for k, v in (m.live or {}).items() if k in ("x", "xev", "x_seen", "fin_by", "fin_at", "brk")}
        if m.sport == "volleyball" and not (keep.get("x_seen") and int(datetime.utcnow().timestamp()) - keep["x_seen"] < 60):
            old_per = (m.live or {}).get("per") or []
            new_per = d.get("per") or []
            if old_per and new_per and len(old_per) == len(new_per):
                a, b = old_per[-1], new_per[-1]
                evs = list(keep.get("xev") or [])
                for side in (0, 1):
                    dd = int(b[side] or 0) - int(a[side] or 0)
                    if 0 < dd <= 3:
                        evs.append({"t": "point", "side": side, "at": int(datetime.utcnow().timestamp()), "ts": None, "n": dd, "ps": [int(b[0] or 0), int(b[1] or 0)]})
                keep["xev"] = evs[-40:]
        m.live = {**keep, **{k: d.get(k) for k in ("p", "cm", "per", "game", "stats", "spl")}, "mb_seen": int(datetime.utcnow().timestamp())}
        if m.status == "finished" or m.settled:
            continue
        own_feed = m.ext.startswith("fm:") or m.ext.startswith("nba:")
        if not own_feed and d["score"] is not None and m.start <= datetime.utcnow() + timedelta(minutes=5):
            if m.sport in ("tennis", "volleyball", "tabletennis") and d.get("per"):
                m.score_home, m.score_away = sets_won_from_periods(d["per"], m.sport)
            else:
                m.score_home, m.score_away = d["score"]
            m.status = "live"
        if not own_feed:
            m.minute = (f"{d['cm']}'" if d.get("cm") and m.sport == "football" else d["p"])[:16]
        close_if_decided(m)
        _mark_break(m, d.get("p") or "")
        n += 1
    db.commit()
    return f"live updated {n}"


BREAK_RE = re.compile(r"PAUSE|BREAK|HALF_TIME|INTERVAL|^HT$")


def _mark_break(m: Match, code: str) -> None:
    lv = dict(m.live or {})
    code = code or (m.minute or "")
    if m.status == "live" and BREAK_RE.search(code) or (m.minute or "") == "HT":
        key = code if BREAK_RE.search(code) else "HALF_TIME"
        if (lv.get("brk") or {}).get("k") != key:
            lv["brk"] = {"k": key, "at": int(datetime.utcnow().timestamp())}
            m.live = lv
    elif lv.get("brk"):
        lv.pop("brk", None)
        m.live = lv


def sync_maxbet_results(db: Session) -> str:
    pending = db.scalars(select(Match).where(Match.ext.like("mbb:%"), Match.start < datetime.utcnow(),
                                             or_(Match.status.in_(["scheduled", "live"]), and_(Match.status == "finished", Match.settled == False)))).all()  # noqa
    if not pending:
        return "no pending"
    res = {}
    with httpx.Client() as c:
        for i in (0, -1):
            try:
                res.update(maxbet.fetch_results(date.today() + timedelta(days=i), c))
            except Exception:  # noqa
                log.exception("maxbet results")
    n = 0
    for m in pending:
        r = res.get(int(m.ext.split(":")[1]))
        if not r:
            continue
        m.score_home, m.score_away = r["h"], r["a"]
        m.reg_home, m.reg_away = r["rh"], r["ra"]
        if r["end"]:
            m.status = "finished"
            lv = dict(m.live or {}); lv.pop("fin_by", None); m.live = lv
        elif m.status != "finished":
            m.status = "live"
        n += 1
    db.commit()
    return f"maxbet results {n}"


def sync_odds(db: Session) -> str:
    matched = 0
    with httpx.Client() as c:
        for sport in ("football", "basketball"):
            offers = maxbet.fetch(sport, c)
            if sport == "basketball":
                matched += create_maxbet_basket(db, offers)
            lo = datetime.utcnow() - timedelta(hours=3)
            hi = datetime.utcnow() + timedelta(days=8)
            ms = db.scalars(select(Match).where(Match.sport == sport, Match.start >= lo, Match.start <= hi,
                                                Match.status.in_(["scheduled", "live"]), ~Match.ext.like("mbb:%"))).all()
            for m in ms:
                best, best_s = None, 0.0
                for o in offers:
                    if abs((o["start"] - m.start).total_seconds()) > 3 * 3600 and not (o["live"] and m.status == "live"):
                        continue
                    sh = similarity(o["home"], m.home.name)
                    sa = similarity(o["away"], m.away.name)
                    if sh < MATCH_THRESHOLD or sa < MATCH_THRESHOLD:
                        continue
                    if sh + sa > best_s:
                        best, best_s = o, sh + sa
                if best:
                    if best.get("id"):
                        m.mb_id = best["id"]
                    odds = dict(m.odds or {})
                    odds["maxbet"] = {k: v for k, v in best["odds"].items() if v and v > 1.0}
                    m.odds = odds
                    m.odds_updated = now()
                    matched += 1
            db.commit()
    return f"odds matched {matched}"


def snap_odds(db: Session):
    """Store the 1-X-2 line of upcoming matches when it changed since the last snapshot."""
    from .models import OddsSnap
    from .serial import best as _best
    n = now()
    ms = db.scalars(select(Match).where(Match.start > n, Match.start < n + timedelta(days=2))).all()
    if not ms:
        return
    last = {}
    for s_ in db.scalars(select(OddsSnap).where(OddsSnap.match_id.in_([m.id for m in ms])).order_by(OddsSnap.ts)).all():
        last[s_.match_id] = s_
    for m in ms:
        b = _best(m)
        o = tuple((b.get(k) or {}).get("odds") for k in ("1", "X", "2"))
        if not any(o):
            continue
        p = last.get(m.id)
        if p and (p.o1, p.ox, p.o2) == o:
            continue
        db.add(OddsSnap(match_id=m.id, ts=n, o1=o[0], ox=o[1], o2=o[2]))
    db.commit()


def outcome(m: Match) -> str | None:
    h = m.reg_home if m.sport != "football" and m.reg_home is not None else m.score_home
    a = m.reg_away if m.sport != "football" and m.reg_away is not None else m.score_away
    if h is None or a is None:
        return None
    return "1" if h > a else ("2" if a > h else "X")


def final_outcome(m: Match) -> str | None:
    if m.score_home is None or m.score_away is None:
        return None
    return "1" if m.score_home > m.score_away else ("2" if m.score_away > m.score_home else "X")


def plural_sr(n: int, one: str, few: str, many: str) -> str:
    if n % 10 == 1 and n % 100 != 11:
        return one
    if 2 <= n % 10 <= 4 and not 12 <= n % 100 <= 14:
        return few
    return many


plural_ru = plural_sr


def best_odds(m: Match, pick: str) -> float | None:
    vals = [bk.get(pick) for bk in (m.odds or {}).values() if isinstance(bk, dict) and bk.get(pick)]
    return max(vals) if vals else None


def _f(x: str) -> float:
    return float(x)


def settle_key(m: Match, key: str) -> str | None:
    """Return 'won' / 'lost' / 'void' for a market key, or None if not resolvable."""
    if m.score_home is None or m.score_away is None:
        return None
    h, a = m.score_home, m.score_away
    rh = m.reg_home if m.sport != "football" and m.reg_home is not None else h
    ra = m.reg_away if m.sport != "football" and m.reg_away is not None else a
    res = "1" if rh > ra else ("2" if ra > rh else "X")
    W = lambda c: "won" if c else "lost"  # noqa
    tot = h + a
    if key in ("1", "X", "2"):
        return W(key == res)
    if key in ("1X", "12", "X2"):
        return W(res in key)
    if key in ("DNB1", "DNB2"):
        if res == "X":
            return "void"
        return W(res == key[-1])
    if key == "GG":
        return W(h > 0 and a > 0)
    if key == "NG":
        return W(h == 0 or a == 0)
    if key.startswith("G") and key[1:2].isdigit():
        body = key[1:]
        if body.endswith("+"):
            return W(tot >= int(body[:-1]))
        lo, _, hi = body.partition("-")
        return W(int(lo) <= tot <= int(hi))
    if key.startswith("CS:"):
        _, sh, sa = key.split(":")
        return W(h == int(sh) and a == int(sa))
    if key.startswith(("EH1:", "EHX:", "EH2:")):
        k, v = key.split(":")
        adj = h - _f(v)
        r2 = "1" if adj > a else ("2" if a > adj else "X")
        return W(r2 == k[-1])
    if key.startswith(("AH1:", "AH2:")):
        k, v = key.split(":")
        adj = h - _f(v)
        if adj == a:
            return "void"
        return W((adj > a) if k == "AH1" else (adj < a))
    if key.startswith(("O:", "U:")):
        k, v = key.split(":")
        line = _f(v)
        if tot == line:
            return "void"
        return W(tot > line if k == "O" else tot < line)
    return None


def settle(db: Session) -> str:
    cnt = 0
    ms = db.scalars(select(Match).where(Match.settled == False, Match.status.in_(["finished", "cancelled"]))).all()  # noqa
    events = []
    now_ts = int(datetime.utcnow().timestamp())
    for m in ms:
        lv = m.live or {}
        # closed from live data (score decided / gone from feeds): bets wait for the official result;
        # only if no official result ever comes, settle on the last score after 6 hours
        if lv.get("fin_by") and now_ts - (lv.get("fin_at") or 0) < 6 * 3600:
            continue
        res = outcome(m) if m.status == "finished" else None
        void = m.status == "cancelled"
        if not void and res is None:
            continue
        for p in db.scalars(select(Prediction).where(Prediction.match_id == m.id, Prediction.status == "open")).all():
            u = p.user
            st = "void" if void else (settle_key(m, p.pick) or "void")
            if st == "void":
                p.status, p.profit = "void", 0.0
                u.bank += p.stake
            elif st == "won":
                p.status, p.profit = "won", round(p.stake * (p.odds - 1), 2)
                u.bank += p.stake * p.odds
            else:
                p.status, p.profit = "lost", -p.stake
            p.settled_at = now()
            events.append(("pred", p.id, u.id, p.status))
            cnt += 1
        for it in db.scalars(select(TicketItem).where(TicketItem.match_id == m.id, TicketItem.status == "open")).all():
            it.status = "void" if void else (settle_key(m, it.pick) or "void")
        for sp in db.scalars(select(ScorePick).where(ScorePick.match_id == m.id)).all():
            if void:
                sp.points = 0
                continue
            h = m.reg_home if m.sport == "basketball" and m.reg_home is not None else m.score_home
            a = m.reg_away if m.sport == "basketball" and m.reg_away is not None else m.score_away
            if sp.home == h and sp.away == a:
                sp.points = 3
            elif (sp.home > sp.away and h > a) or (sp.home < sp.away and h < a) or (sp.home == sp.away and h == a):
                sp.points = 1
            else:
                sp.points = 0
        m.settled = True
    db.flush()
    for t in db.scalars(select(Ticket).where(Ticket.status == "open")).all():
        st = [i.status for i in t.items]
        if "lost" in st:
            t.status, t.profit, t.settled_at = "lost", -t.stake, now()
        elif all(s in ("won", "void") for s in st):
            odds = 1.0
            for i in t.items:
                if i.status == "won":
                    odds *= i.odds
            if all(s == "void" for s in st):
                t.status, t.profit = "void", 0.0
                t.user.bank += t.stake
            else:
                t.status, t.profit = "won", round(t.stake * (odds - 1), 2)
                t.user.bank += t.stake * odds
            t.total_odds = round(odds, 2) if t.status == "won" else t.total_odds
            t.settled_at = now()
        else:
            continue
        events.append(("ticket", t.id, t.user_id, t.status))
        cnt += 1
    db.commit()
    if config.TG_BOT_TOKEN:
        for ev in events:
            _tg_notify_settle(db, *ev)
    return f"settled {cnt}"


# ---------- form / trends / analysis ----------
def team_form(db: Session, team_id: int, before: datetime, n: int = 5) -> list[str]:
    ms = db.scalars(select(Match).where(or_(Match.home_id == team_id, Match.away_id == team_id),
                                        Match.status == "finished", Match.start < before)
                    .order_by(Match.start.desc()).limit(n)).all()
    out = []
    for m in ms:
        r = final_outcome(m)
        if r is None:
            continue
        if r == "X":
            out.append("D")
        elif (r == "1") == (m.home_id == team_id):
            out.append("W")
        else:
            out.append("L")
    return out


def h2h(db: Session, a: int, b: int, before: datetime, n: int = 6) -> list[Match]:
    return db.scalars(select(Match).where(or_(and_(Match.home_id == a, Match.away_id == b),
                                              and_(Match.home_id == b, Match.away_id == a)),
                                          Match.status == "finished", Match.start < before)
                      .order_by(Match.start.desc()).limit(n)).all()


RU_TEAM_WORD = {"W": "побед", "L": "поражений", "D": "ничьих"}


def build_trends(db: Session) -> str:
    lo, hi = datetime.utcnow(), datetime.utcnow() + timedelta(days=2)
    ms = db.scalars(select(Match).where(Match.status == "scheduled", Match.start >= lo, Match.start <= hi)).all()
    made = 0
    for m in ms:
        if not (m.odds or {}).get("maxbet"):
            continue
        db.query(Trend).filter(Trend.match_id == m.id).delete()
        cands = []
        for side, team, pick in (("home", m.home, "1"), ("away", m.away, "2")):
            f = team_form(db, team.id, m.start, 6)
            if len(f) >= 5:
                w, l = f.count("W"), f.count("L")
                if w >= 4:
                    cands.append((w / len(f), pick,
                                  f"{team.short_name}: {w} {plural_sr(w, 'pobeda', 'pobede', 'pobeda')} u poslednjih {len(f)} utakmica.",
                                  f"«{team.short_name}»: {w} {plural_ru(w, 'победа', 'победы', 'побед')} в последних {len(f)} матчах."))
                if l >= 4:
                    opp = "2" if pick == "1" else "1"
                    cands.append((l / len(f) - 0.05, opp,
                                  f"{team.short_name}: {l} {plural_sr(l, 'poraz', 'poraza', 'poraza')} u poslednjih {len(f)} utakmica.",
                                  f"«{team.short_name}»: {l} {plural_ru(l, 'поражение', 'поражения', 'поражений')} в последних {len(f)} матчах."))
                streak = 0
                for r in f:
                    if r == "W":
                        streak += 1
                    else:
                        break
                if streak >= 5:
                    cands.append((0.95, pick, f"{team.short_name}: {streak} pobeda zaredom.",
                                  f"«{team.short_name}»: {streak} побед подряд."))
        hh = h2h(db, m.home_id, m.away_id, m.start)
        if len(hh) >= 3:
            hw = sum(1 for x in hh if final_outcome(x) not in ("X", None) and (final_outcome(x) == "1") == (x.home_id == m.home_id))
            aw = sum(1 for x in hh if final_outcome(x) not in ("X", None)) - hw
            if hw >= max(3, len(hh) - 1):
                cands.append((hw / len(hh), "1", f"Međusobni dueli: {m.home.short_name} {hw} {plural_sr(hw, 'pobeda', 'pobede', 'pobeda')} u poslednjih {len(hh)}.",
                              f"Личные встречи: у «{m.home.short_name}» {hw} {plural_ru(hw, 'победа', 'победы', 'побед')} в последних {len(hh)}."))
            if aw >= max(3, len(hh) - 1):
                cands.append((aw / len(hh), "2", f"Međusobni dueli: {m.away.short_name} {aw} {plural_sr(aw, 'pobeda', 'pobede', 'pobeda')} u poslednjih {len(hh)}.",
                              f"Личные встречи: у «{m.away.short_name}» {aw} {plural_ru(aw, 'победа', 'победы', 'побед')} в последних {len(hh)}."))
        cands.sort(key=lambda c: -c[0])
        top_pick = cands[0][1] if cands else None
        for strength, pick, sr, ru in [c for c in cands if c[1] == top_pick][:2]:
            odds = best_odds(m, pick) or 0
            if odds < 1.15:
                continue
            db.add(Trend(match_id=m.id, pick=pick, odds=odds, strength=strength, text_sr=sr, text_ru=ru))
            made += 1
    db.commit()
    return f"trends {made}"


def _implied(m: Match) -> dict:
    o = (m.odds or {}).get("maxbet") or {}
    inv = {k: 1 / v for k, v in o.items() if v}
    s = sum(inv.values())
    return {k: round(100 * v / s) for k, v in inv.items()} if s else {}


def _form_txt(f: list[str], lang: str) -> str:
    if not f:
        return ""
    m = {"sr": {"W": "P", "D": "N", "L": "I"}, "ru": {"W": "В", "D": "Н", "L": "П"}}[lang]
    return "-".join(m[x] for x in f)


def community_split(db: Session, match_id: int) -> dict:
    rows = db.execute(select(Prediction.pick, func.count()).where(Prediction.match_id == match_id, Prediction.pick.in_(["1", "X", "2"]))
                      .group_by(Prediction.pick)).all()
    total = sum(c for _, c in rows)
    return {"total": total, **{p: round(100 * c / total) for p, c in rows}} if total else {"total": 0}


def template_analysis(db: Session, m: Match) -> tuple[str, str]:
    p = _implied(m)
    fh, fa = team_form(db, m.home_id, m.start), team_form(db, m.away_id, m.start)
    hh = h2h(db, m.home_id, m.away_id, m.start)
    H, A = m.home.short_name, m.away.short_name
    sr, ru = [], []
    if p:
        fav = max(("1", "2"), key=lambda k: p.get(k, 0))
        ft = H if fav == "1" else A
        sr.append(f"Kladionice vide {ft} kao favorita: šansa za pobedu oko {p.get(fav)}%, nerešeno {p.get('X', 0)}%." if m.sport == "football"
                  else f"Kladionice vide {ft} kao favorita sa oko {p.get(fav)}% šanse za pobedu.")
        ru.append(f"Букмекеры считают фаворитом «{ft}»: шанс на победу около {p.get(fav)}%, ничья {p.get('X', 0)}%." if m.sport == "football"
                  else f"Букмекеры считают фаворитом «{ft}» — около {p.get(fav)}% на победу.")
    if fh or fa:
        sr.append(f"Forma u poslednjim mečevima: {H} {_form_txt(fh, 'sr') or '—'}, {A} {_form_txt(fa, 'sr') or '—'} (P pobeda, N nerešeno, I poraz)." if m.sport == "football" else
                  f"Forma u poslednjim mečevima: {H} {_form_txt(fh, 'sr') or '—'}, {A} {_form_txt(fa, 'sr') or '—'} (P pobeda, I poraz).")
        ru.append(f"Форма в последних матчах: «{H}» {_form_txt(fh, 'ru') or '—'}, «{A}» {_form_txt(fa, 'ru') or '—'} (В — победа, Н — ничья, П — поражение)." if m.sport == "football" else
                  f"Форма в последних матчах: «{H}» {_form_txt(fh, 'ru') or '—'}, «{A}» {_form_txt(fa, 'ru') or '—'} (В — победа, П — поражение).")
        if fh.count("W") - fa.count("W") >= 3:
            sr.append(f"{H} ulazi u meč u znatno boljoj formi.")
            ru.append(f"«{H}» подходит к матчу в заметно лучшей форме.")
        elif fa.count("W") - fh.count("W") >= 3:
            sr.append(f"{A} dolazi u znatno boljoj formi, iako igra u gostima.")
            ru.append(f"«{A}» в заметно лучшей форме, хотя играет в гостях.")
    if hh:
        hw = sum(1 for x in hh if final_outcome(x) not in ("X", None) and (final_outcome(x) == "1") == (x.home_id == m.home_id))
        dr = sum(1 for x in hh if final_outcome(x) == "X")
        aw = len(hh) - hw - dr
        sr.append(f"Međusobni dueli (poslednjih {len(hh)}): {H} {hw}, nerešeno {dr}, {A} {aw}.")
        ru.append(f"Личные встречи (последние {len(hh)}): «{H}» {hw}, ничьи {dr}, «{A}» {aw}.")
    cs = community_split(db, m.id)
    if cs["total"] >= 5:
        top = max((k for k in ("1", "X", "2") if k in cs), key=lambda k: cs[k])
        lab = {"1": H, "X": "nerešeno", "2": A}[top]
        lab_ru = {"1": f"«{H}»", "X": "ничью", "2": f"«{A}»"}[top]
        sr.append(f"Winly zajednica: {cs[top]}% prognoza je na {lab}.")
        ru.append(f"Сообщество Winly: {cs[top]}% прогнозов — на {lab_ru}.")
    if not sr:
        sr.append("Još nema dovoljno podataka za analizu ovog meča.")
        ru.append("Пока недостаточно данных для разбора этого матча.")
    return " ".join(sr), " ".join(ru)


def llm_analysis(db: Session, m: Match) -> tuple[str, str] | None:
    if not config.LLM_API_KEY:
        return None
    data = {"sport": m.sport, "league": m.league.name, "home": m.home.name, "away": m.away.name,
            "kickoff_utc": m.start.isoformat(), "odds_maxbet": (m.odds or {}).get("maxbet"),
            "implied_pct": _implied(m), "home_form_last": team_form(db, m.home_id, m.start, 6),
            "away_form_last": team_form(db, m.away_id, m.start, 6),
            "h2h": [{"home": x.home.short_name, "away": x.away.short_name, "score": f"{x.score_home}:{x.score_away}"}
                    for x in h2h(db, m.home_id, m.away_id, m.start)],
            "community": community_split(db, m.id)}
    prompt = ("Ti si sportski analitičar sajta Winly. Na osnovu podataka napiši kratku analizu meča (3-4 rečenice), "
              "bez izmišljanja povreda i vesti, samo iz podataka. Završi jednom rečenicom 'Naš izbor: ...'. "
              "Vrati ISKLJUČIVO JSON {\"sr\": \"tekst na srpskoj latinici\", \"ru\": \"isti tekst na ruskom\"}.\n"
              + json.dumps(data, ensure_ascii=False))
    r = httpx.post(f"{config.LLM_BASE_URL}/chat/completions", timeout=60,
                   headers={"Authorization": f"Bearer {config.LLM_API_KEY}"},
                   json={"model": config.LLM_MODEL, "messages": [{"role": "user", "content": prompt}],
                         "temperature": 0.4})
    r.raise_for_status()
    txt = r.json()["choices"][0]["message"]["content"].strip().strip("`")
    if txt.startswith("json"):
        txt = txt[4:]
    j = json.loads(txt)
    return j["sr"], j["ru"]


def build_analysis(db: Session) -> str:
    lo, hi = datetime.utcnow(), datetime.utcnow() + timedelta(days=2)
    ms = db.scalars(select(Match).where(Match.status == "scheduled", Match.start >= lo, Match.start <= hi)).all()
    n = 0
    for m in ms:
        if not (m.odds or {}).get("maxbet"):
            continue
        if m.analysis_at and m.analysis_at > datetime.utcnow() - timedelta(hours=6):
            continue
        res = None
        try:
            res = llm_analysis(db, m)
        except Exception:  # noqa
            log.exception("llm failed")
        sr, ru = res or template_analysis(db, m)
        m.analysis_sr, m.analysis_ru, m.analysis_at = sr, ru, now()
        n += 1
    db.commit()
    return f"analysis {n}"


# ---------- translation ----------
def translate(db: Session, text: str, target: str) -> str:
    key = hashlib.sha1(f"{target}:{text}".encode()).hexdigest()
    t = db.scalar(select(Translation).where(Translation.key == key))
    if t:
        return t.text
    from .translator import translate as _tr
    out = _tr(text, target)
    db.add(Translation(key=key, text=out))
    db.commit()
    return out


# ---------- telegram ----------
def _tg(method: str, **params):
    return httpx.post(f"https://api.telegram.org/bot{config.TG_BOT_TOKEN}/{method}", json=params, timeout=40).json()


def _sent_once(db: Session, key: str) -> bool:
    if db.get(TgSent, key):
        return False
    db.add(TgSent(key=key))
    db.commit()
    return True


def _tg_notify_settle(db: Session, kind, obj_id, user_id, status):
    u = db.get(User, user_id)
    if not u or not u.tg_chat_id or status not in ("won", "lost"):
        return
    if not _sent_once(db, f"{kind}:{obj_id}:{status}"):
        return
    ru = u.lang == "ru"
    if kind == "ticket":
        txt = ("Твой тикет прошёл! " if status == "won" else "Тикет не прошёл. ") if ru else \
              ("Tvoj tiket je prošao! " if status == "won" else "Tiket je pao. ")
        txt += f"{config.PUBLIC_URL}/t/{obj_id}"
    else:
        p = db.get(Prediction, obj_id)
        name = f"{p.match.home.short_name} – {p.match.away.short_name}"
        txt = (f"Прогноз на {name}: " + ("зашёл" if status == "won" else "не зашёл")) if ru else \
              (f"Prognoza za {name}: " + ("pogođena" if status == "won" else "promašena"))
    try:
        _tg("sendMessage", chat_id=u.tg_chat_id, text=txt)
    except Exception:  # noqa
        pass


def tg_poll(db: Session) -> str:
    if not config.TG_BOT_TOKEN:
        return "no token"
    off = db.get(Meta, "tg_offset") or Meta(key="tg_offset", value="0")
    db.add(off)
    res = _tg("getUpdates", offset=int(off.value or 0), timeout=0)
    n = 0
    for upd in res.get("result", []):
        off.value = str(upd["update_id"] + 1)
        msg = upd.get("message") or {}
        text = msg.get("text", "")
        if text.startswith("/start"):
            code = text.split(" ", 1)[1].strip() if " " in text else ""
            u = db.scalar(select(User).where(User.tg_code == code)) if code else None
            chat = str(msg["chat"]["id"])
            if u:
                u.tg_chat_id = chat
                _tg("sendMessage", chat_id=chat, text="Готово! Буду присылать напоминания о матчах твоего клуба и итоги тикетов." if u.lang == "ru"
                    else "Povezano! Javljaćemo ti pred meč tvog kluba i kad tiket prođe.")
                n += 1
            else:
                _tg("sendMessage", chat_id=chat, text=f"Winly — liga prognoza. Poveži nalog na {config.PUBLIC_URL}/profil")
    db.commit()
    return f"tg linked {n}"


def tg_reminders(db: Session) -> str:
    if not config.TG_BOT_TOKEN:
        return "no token"
    lo, hi = datetime.utcnow() + timedelta(minutes=50), datetime.utcnow() + timedelta(minutes=70)
    ms = db.scalars(select(Match).where(Match.status == "scheduled", Match.start >= lo, Match.start <= hi)).all()
    n = 0
    for m in ms:
        users = db.scalars(select(User).where(User.tg_chat_id != "", or_(
            User.fav_football_id.in_([m.home_id, m.away_id]), User.fav_basket_id.in_([m.home_id, m.away_id])))).all()
        for u in users:
            if not _sent_once(db, f"rem:{m.id}:{u.id}"):
                continue
            name = f"{m.home.short_name} – {m.away.short_name}"
            txt = (f"Через час: {name}. Успей сделать прогноз: {config.PUBLIC_URL}/mec/{m.id}" if u.lang == "ru"
                   else f"Za sat vremena: {name}. Ubaci prognozu: {config.PUBLIC_URL}/mec/{m.id}")
            try:
                _tg("sendMessage", chat_id=u.tg_chat_id, text=txt)
                n += 1
            except Exception:  # noqa
                pass
    return f"reminders {n}"


# ---------- names in SR / CYR / RU ----------
LEAGUE_NAMES = {  # ext prefix "fm:{pid}" -> (sr, ru)
    182: ("Superliga Srbije", "Суперлига Сербии"), 42: ("Liga šampiona", "Лига чемпионов"), 73: ("Liga Evrope", "Лига Европы"),
    10216: ("Liga konferencija", "Лига конференций"), 47: ("Premijer liga", "Премьер-лига"), 87: ("La Liga", "Ла Лига"),
    55: ("Serija A", "Серия A"), 54: ("Bundesliga", "Бундеслига"), 53: ("Liga 1", "Лига 1"), 61: ("Liga Portugal", "Чемпионат Португалии"),
    57: ("Eredivizi", "Эредивизи"), 71: ("Super liga Turske", "Суперлига Турции"), 135: ("Super liga Grčke", "Суперлига Греции"),
    252: ("HNL", "Чемпионат Хорватии"), 267: ("Premijer liga BiH", "Премьер-лига Боснии"), 232: ("Prva liga Crne Gore", "Чемпионат Черногории"),
    132: ("FA kup", "Кубок Англии"), 133: ("Liga kup Engleske", "Кубок английской лиги"), 138: ("Kup kralja", "Кубок Испании"),
    141: ("Kup Italije", "Кубок Италии"), 209: ("Kup Nemačke", "Кубок Германии"), 134: ("Kup Francuske", "Кубок Франции"),
    186: ("Kup Portugala", "Кубок Португалии"), 48: ("Čempionšip", "Чемпионшип"), 140: ("La Liga 2", "Сегунда"),
    86: ("Serija B", "Серия B"), 146: ("2. Bundesliga", "2-я Бундеслига"), 110: ("Liga 2", "Лига 2"), 40: ("Prva liga Belgije", "Чемпионат Бельгии"),
    64: ("Premijeršip Škotske", "Чемпионат Шотландии"), 38: ("Bundesliga Austrije", "Чемпионат Австрии"), 69: ("Super liga Švajcarske", "Чемпионат Швейцарии"),
    46: ("Superliga Danske", "Чемпионат Дании"), 63: ("Premijer liga Rusije", "РПЛ"), 441: ("Premijer liga Ukrajine", "Чемпионат Украины"),
    196: ("Ekstraklasa", "Экстракласа"), 122: ("Prva liga Češke", "Чемпионат Чехии"), 189: ("Superliga Rumunije", "Чемпионат Румынии"),
    270: ("Prva liga Bugarske", "Чемпионат Болгарии"), 212: ("NB I Mađarske", "Чемпионат Венгрии"), 173: ("Prva liga Slovenije", "Чемпионат Словении"),
    249: ("Prva liga Makedonije", "Чемпионат Северной Македонии"), 268: ("Serija A Brazila", "Серия A Бразилии"), 112: ("Liga Argentine", "Чемпионат Аргентины"),
    130: ("MLS", "MLS"), 536: ("Saudijska Pro liga", "Про-лига Саудовской Аравии"), 114: ("Prijateljske utakmice", "Товарищеские матчи"),
    50: ("Evropsko prvenstvo", "Чемпионат Европы"), 77: ("Svetsko prvenstvo", "Чемпионат мира"),
    9806: ("Liga nacija A", "Лига наций A"), 9807: ("Liga nacija B", "Лига наций B"),
}
LEAGUE_EXT = {"el:E": ("Evroliga", "Евролига"), "el:U": ("Evrokup", "Еврокубок"), "nba": ("NBA", "НБА"),
              "mbl:ABA liga": ("ABA liga", "Лига ABA"), "mbl:KLS Srbija": ("KLS Srbija", "Чемпионат Сербии"),
              "mbl:Liga šampiona FIBA": ("Liga šampiona FIBA", "Лига чемпионов FIBA"), "mbl:FIBA Evropski kup": ("FIBA Evropski kup", "Кубок Европы FIBA")}


def _gtx(text: str, tl: str) -> str:
    from .translator import translate as _tr
    return _tr(text, tl)


CTX_WORDS = ("теннисистка", "теннисист", "тенисерка", "тенисер", "tenisač", "футбольный клуб", "баскетбольный клуб", "хоккейный клуб",
             "волейбольный клуб", "ватерпольный клуб", "фудбалски клуб", "кошаркашки клуб", "хокејашки клуб", "спортивный клуб")


def _strip_ctx(s: str) -> str:
    s = s.split("(")[0] if "(" in s else s
    low = s.lower()
    for w in CTX_WORDS:
        i = low.find(w)
        if i >= 0:
            s = s[:i] + s[i + len(w):]
            low = s.lower()
    return " ".join(s.split()).strip(" .,-")


def _league_names(lg: League) -> tuple[str, str]:
    if lg.ext in LEAGUE_EXT:
        return LEAGUE_EXT[lg.ext]
    parts = lg.ext.split(":")
    if parts[0] == "fm" and len(parts) > 1 and parts[1].isdigit():
        pid = int(parts[1])
        grp = ""
        if " Grp. " in lg.name:
            grp = lg.name.split(" Grp. ")[1].strip()
        if pid in LEAGUE_NAMES:
            sr, ru = LEAGUE_NAMES[pid]
            if grp:
                sr, ru = f"{sr}, grupa {grp}", f"{ru}, группа {grp}"
            return sr, ru
    base = lg.name
    if lg.ext.startswith("mbo:"):
        if lg.sport == "tennis":
            return base, base
        return base, _strip_ctx(_gtx(f"{base} ({lg.sport} league)", "ru")) or base
    cyr = _strip_ctx(_gtx(f"{base} (football league)" if lg.sport == "football" else f"{base} (basketball league)", "sr"))
    ru = _strip_ctx(_gtx(f"{base} (football league)" if lg.sport == "football" else f"{base} (basketball league)", "ru"))
    return to_lat(cyr), ru


_RU2LAT = dict(zip("абвгдеёжзийклмнопрстуфхцчшщъыьэюя", ["a", "b", "v", "g", "d", "e", "e", "zh", "z", "i", "y", "k", "l", "m", "n", "o", "p", "r", "s", "t", "u", "f", "h", "ts", "ch", "sh", "sch", "", "y", "", "e", "yu", "ya"]))


def _back_lat(s: str) -> str:
    from .textutil import strip_accents
    s = to_lat(s).lower()
    s = "".join(_RU2LAT.get(ch, ch) for ch in s)
    return strip_accents(s)


def _close(orig: str, translated: str) -> bool:
    from difflib import SequenceMatcher
    from .textutil import strip_accents
    a = strip_accents(orig).lower()
    b = _back_lat(translated)
    return SequenceMatcher(None, a, b).ratio() >= 0.65


def _top_team_ids(db: Session) -> set:
    rows = db.execute(select(Match.home_id, Match.away_id).join(League, Match.league_id == League.id).where(League.priority <= 16)).all()
    return {x for r in rows for x in r}


def translate_names(db: Session, limit: int = 120) -> str:
    import time
    done = 0
    # NBA / NHL: full official names (feeds give only nicknames or cities) and proper Russian names
    try:
        from .teamnames import apply_full_names
        apply_full_names(db)
    except Exception:  # noqa
        pass
    # tennis players keep their own names (no "translation" of a person's name)
    for t in db.scalars(select(Team).where(Team.sport.in_(["tennis", "tabletennis"]), or_(Team.name_ru != Team.short_name, Team.name_ru == ""))).all():
        t.name_sr = t.name_cyr = t.name_ru = t.short_name or t.name
    db.commit()
    for lg in db.scalars(select(League).where(League.name_ru == "").limit(40)).all():
        try:
            lg.name_sr, lg.name_ru = _league_names(lg)
            db.commit()
            done += 1
        except Exception:  # noqa
            db.rollback()
        time.sleep(0.15)
    from sqlalchemy import case
    soon = select(Match.home_id).where(Match.start > datetime.utcnow() - timedelta(days=1)).union(
        select(Match.away_id).where(Match.start > datetime.utcnow() - timedelta(days=1)))
    teams = db.scalars(select(Team).where(Team.name_ru == "")
                       .order_by(case((Team.id.in_(soon), 0), else_=1), Team.is_serbian.desc(), Team.id).limit(limit)).all()
    top = _top_team_ids(db) if teams else set()
    for t in teams:
        short = t.short_name or t.name
        try:
            nation = t.name in fotmob.NATIONS_SR
            if t.is_serbian or nation:
                t.name_sr = short
                t.name_cyr = to_cyr(short)
                ctx = "national football team" if nation else ("football club" if t.sport == "football" else "basketball club")
                src = t.name if nation else short
                t.name_ru = _strip_ctx(_gtx(f"{src} ({ctx})", "ru")) or short
            else:
                ctx = {"football": "football club", "basketball": "basketball club", "hockey": "hockey club",
                       "tennis": "tennis player", "volleyball": "volleyball club", "waterpolo": "water polo club"}.get(t.sport, "sports club")
                trusted = t.id in top or t.ext.startswith(("nba:", "el:"))
                cyr = _strip_ctx(_gtx(f"{short} ({ctx})", "sr")) or short
                ru = _strip_ctx(_gtx(f"{short} ({ctx})", "ru")) or short
                if trusted or _close(short, cyr):
                    t.name_cyr, t.name_sr = cyr, to_lat(cyr)
                else:
                    t.name_cyr, t.name_sr = short, short
                t.name_ru = ru if (trusted or _close(short, ru)) else short
            db.commit()
            done += 1
        except Exception:  # noqa
            db.rollback()
        time.sleep(0.15)
    from .translator import last_error
    return f"names {done}" + (f" | last error: {last_error['msg']}" if last_error["msg"] else "")



def _shared_token(a: str, b: str) -> bool:
    from .textutil import strip_accents
    ta = {x for x in strip_accents(a).lower().replace(".", " ").replace("-", " ").split() if len(x) >= 4}
    tb = {x for x in strip_accents(b).lower().replace(".", " ").replace("-", " ").split() if len(x) >= 4}
    return bool(ta & tb)


def _tennis_same(a: str, b: str) -> bool:
    """MaxBet 'Rune H.' vs 22Bet 'Holger Vitus Nodskov Rune'."""
    from .textutil import strip_accents
    ta = [x for x in strip_accents(a).lower().replace(".", " ").replace("-", " ").split() if len(x) > 2]
    tb = set(strip_accents(b).lower().replace(".", " ").replace("-", " ").split())
    return bool(ta) and any(x in tb for x in ta)


def sync_xfeed(db: Session) -> str:
    """Live stats + derived live events (dangerous attack, shot, corner...) from 22Bet."""
    import time as _t
    with httpx.Client() as c:
        games = xfeed.fetch_all(c)
    if not games:
        return f"xfeed empty ({xfeed.STATE.get('last', '')})"
    by_id = {g["id"]: g for g in games}
    lo = datetime.utcnow() - timedelta(hours=4)
    cand = db.scalars(select(Match).where(Match.start > lo, Match.start < datetime.utcnow() + timedelta(minutes=15),
                                          Match.status.in_(["live", "scheduled"]))).all()
    taken = {m.x_id for m in cand if m.x_id}
    linked = 0
    for m in cand:
        if m.x_id and m.x_id in by_id:
            continue
        best, bs = None, 0.0
        for g in games:
            if g["sport"] != m.sport or g["id"] in taken:
                continue
            if g.get("start") and abs(datetime.utcfromtimestamp(g["start"]) - m.start).total_seconds() > 3 * 3600:
                continue
            if m.sport in ("tennis", "tabletennis"):
                ok = _tennis_same(m.home.name, g["home"]) and _tennis_same(m.away.name, g["away"])
                sc = 2.0 if ok else 0
            else:
                sh, sa = similarity(g["home"], m.home.name), similarity(g["away"], m.away.name)
                sc = sh + sa if sh >= 0.8 and sa >= 0.8 else 0
                if not sc and max(sh, sa) >= 0.9:
                    # one team matches exactly, the other is written differently ("Viapol Sao Jose" / "Sao Jose dos C.")
                    weak = (g["home"], m.home.name) if sh < sa else (g["away"], m.away.name)
                    if _shared_token(*weak):
                        sc = 1.7
            if sc > bs:
                best, bs = g, sc
        if best:
            m.x_id = best["id"]
            taken.add(best["id"])
            linked += 1
    db.flush()
    now_ts = int(_t.time())
    upd = 0
    for m in db.scalars(select(Match).where(Match.x_id.in_(list(by_id.keys())))).all():
        g = by_id[m.x_id]
        live = dict(m.live or {})
        prev = (live.get("x") or {}).get("st") or {}
        prev_score = (live.get("x") or {}).get("score")
        evs = list(live.get("xev") or [])
        new = []
        for name, val in g["stats"].items():
            et = xfeed.EVENT_KEYS.get(name) or ("timeout" if name == "Timeouts remaining" else None)
            if not et or name not in prev:
                continue
            for side in (0, 1):
                d = xfeed._num(val[side]) - xfeed._num(prev[name][side])
                if name == "Timeouts remaining" and -2 <= d < 0:  # basketball: a team used a timeout
                    new.append({"t": "timeout", "side": side, "at": now_ts, "ts": g.get("ts"), "n": 1})
                    continue
                if 0 < d <= 3:
                    new.append({"t": et, "side": side, "at": now_ts, "ts": g.get("ts"), "n": int(d)})
        if prev_score and g["score"] != prev_score:
            for side in (0, 1):
                d = (g["score"][side] or 0) - (prev_score[side] or 0)
                if d > 0:
                    new.append({"t": "score", "side": side, "at": now_ts, "ts": g.get("ts"), "n": int(d)})
        # volleyball: every rally point from the current set score (FS holds sets, PS the points per set)
        if m.sport == "volleyball" and g["periods"]:
            pper = (live.get("x") or {}).get("periods") or []
            cur = g["periods"][-1]
            if pper and len(pper) == len(g["periods"]):
                prev = pper[-1]
                for side in (0, 1):
                    d = int(cur[side] or 0) - int(prev[side] or 0)
                    if 0 < d <= 3:
                        new.append({"t": "point", "side": side, "at": now_ts, "ts": g.get("ts"), "n": d, "ps": [int(cur[0] or 0), int(cur[1] or 0)]})
        # tennis: point-by-point events from game score (SS) and games per set
        if m.sport == "tennis" and g.get("ss"):
            px = live.get("x") or {}
            pss, pper = px.get("ss"), px.get("periods") or []
            PV = {"0": 0, "15": 1, "30": 2, "40": 3, "A": 4}
            games_now = [sum(int(p[i] or 0) for p in g["periods"]) for i in (0, 1)]
            games_prev = [sum(int(p[i] or 0) for p in pper) for i in (0, 1)] if pper else None
            if pss and pss != g["ss"]:
                if games_prev and games_now != games_prev:
                    gw = 0 if games_now[0] > games_prev[0] else 1
                    srv = (px.get("server") or 1) - 1
                    new.append({"t": "game", "side": gw, "at": now_ts, "ts": g.get("ts"), "n": 1, "brk": gw != srv, "ss": pss})
                else:
                    a, b = PV.get(g["ss"][0], 0) - PV.get(pss[0], 0), PV.get(g["ss"][1], 0) - PV.get(pss[1], 0)
                    side = 0 if (a > 0 or b < 0) and not (b > 0) else 1
                    new.append({"t": "point", "side": side, "at": now_ts, "ts": g.get("ts"), "n": 1, "ss": g["ss"]})
                srv = (g.get("server") or 1) - 1
                rcv = 1 - srv
                vr, vs = PV.get(g["ss"][rcv], 0), PV.get(g["ss"][srv], 0)
                if vr >= 3 and vr > vs and not (vr == 3 and vs == 3):
                    new.append({"t": "bp", "side": rcv, "at": now_ts, "ts": g.get("ts"), "n": 1})
        prio = {"point": 5, "game": 8, "bp": 6, "attack": 1, "sub": 1, "foul": 1, "danger": 2, "ft": 2, "p2": 3, "corner": 3, "yellow": 3, "pen2": 3, "df": 3,
                "shot_off": 4, "p3": 4, "ace": 4, "shot_on": 5, "break": 5, "penalty": 6, "red": 6, "score": 9}
        evs += sorted(new, key=lambda e: prio.get(e["t"], 0))
        live["x"] = {"st": g["stats"], "score": g["score"], "ts": g.get("ts"), "period": g["period"], "periods": g["periods"],
                     "ss": g.get("ss"), "server": g.get("server")}
        live["xev"] = evs[-40:]
        live["x_seen"] = now_ts
        m.live = live
        if m.status == "scheduled" and g.get("ts"):
            m.status = "live"
        if m.status == "live" and not m.settled and g.get("score") and None not in g["score"]:
            if m.sport in ("tennis", "volleyball", "tabletennis") and g.get("periods"):
                # sets won = finished sets in the set scores (the bare counter can glitch)
                m.score_home, m.score_away = sets_won_from_periods(g["periods"], m.sport)
            else:
                m.score_home, m.score_away = int(g["score"][0] or 0), int(g["score"][1] or 0)
        if m.status == "live" and m.sport == "football" and g.get("ts"):
            m.minute = f"{g['ts'] // 60 + 1}'"
        close_if_decided(m)
        upd += 1
    db.commit()
    return f"xfeed games {len(games)}, linked {linked}, updated {upd}"



def finish_stale(db: Session) -> str:
    """MaxBet-only matches (ABA, hockey, tennis, volleyball...) have no 'final' signal in the live feed:
    when a live match disappears from both live feeds, it is over. Settlement waits for official results."""
    now_ts = int(datetime.utcnow().timestamp())
    n = 0
    for m in db.scalars(select(Match).where(Match.status == "live", or_(Match.ext.like("mbb:%"), Match.ext.like("mbo:%"), Match.ext.like("x22:%")))).all():
        lv = dict(m.live or {})
        seen = max(lv.get("mb_seen") or 0, lv.get("x_seen") or 0)
        if m.start > datetime.utcnow() - timedelta(minutes=25):
            continue
        gone = seen and now_ts - seen > 180
        never = not seen and m.start < datetime.utcnow() - timedelta(hours=3)
        if (gone or never) and m.score_home is not None:
            m.status = "finished"
            m.minute = ""
            lv["fin_by"], lv["fin_at"] = "absence", now_ts
            m.live = lv
            n += 1
    db.commit()
    return f"finished {n}"



GRAND_SLAMS = ("australian open", "roland garros", "french open", "wimbledon", "us open")


def sets_to_win(m: Match) -> int:
    if m.sport == "volleyball":
        return 3
    lg = ((m.league.name if m.league else "") or "").lower()
    if m.sport == "tennis" and any(g in lg for g in GRAND_SLAMS) and "wta" not in lg and "women" not in lg and "žene" not in lg:
        return 3
    return 2


def sets_won_from_periods(per, sport: str) -> list[int]:
    """Count only sets that are really finished (6-x with 2 games lead or 7-x in tennis; 25/15 with 2 points in volleyball)."""
    won = [0, 0]
    for i, p in enumerate(per or []):
        a, b = int(p[0] or 0), int(p[1] or 0)
        hi, lo = max(a, b), min(a, b)
        if sport in ("tennis", "tabletennis"):
            done = (hi >= 6 and hi - lo >= 2) or hi == 7
        else:
            target = 15 if i == 4 else 25
            done = hi >= target and hi - lo >= 2
        if done:
            won[0 if a > b else 1] += 1
    return won


def close_if_decided(m: Match) -> bool:
    """Tennis / volleyball: the match is over the moment a side has won the needed sets.
    The match is closed for the live view right away; bets are settled only after the official result."""
    if m.status != "live" or m.sport not in ("tennis", "volleyball", "tabletennis") or m.score_home is None:
        return False
    if max(m.score_home or 0, m.score_away or 0) < sets_to_win(m):
        return False
    lv = dict(m.live or {})
    # a single feed can glitch: the finished sets in the set scores must confirm it
    per = ((lv.get("x") or {}).get("periods")) or lv.get("per") or []
    if max(sets_won_from_periods(per, m.sport)) < sets_to_win(m):
        return False
    m.status = "finished"
    m.minute = ""
    lv["fin_by"], lv["fin_at"] = "score", int(datetime.utcnow().timestamp())
    m.live = lv
    return True
