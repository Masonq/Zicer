"""Esports (CS2, Dota 2, League of Legends, Valorant) from PandaScore: schedule, logos, live state and official results.
The free plan has no odds, so prices before the start come from the teams' recent form (last 15 maps-series)."""
import json
import time
from datetime import datetime, timedelta

import httpx
from sqlalchemy import select
from sqlalchemy.orm import Session

from .models import Match, Team, Meta

GAMES = {"csgo": "CS2", "dota2": "Dota 2", "lol": "League of Legends", "valorant": "Valorant"}
API = "https://api.pandascore.co"


def _token(db):
    r = db.get(Meta, "pandascore_token")
    if not r or not r.value:
        return ""
    try:
        return json.loads(r.value)
    except Exception:  # noqa
        return r.value


def _dt(s):
    return datetime.fromisoformat(s.replace("Z", "+00:00")).replace(tzinfo=None) if s else None


def _winrate(c, db, game, tid):
    """Share of won series over the last 15 (cached for a day); 0.5 when unknown."""
    key = f"ps_wr_{tid}"
    m = db.get(Meta, key)
    if m and m.value:
        v = json.loads(m.value)
        if v.get("t", 0) > time.time() - 86400 and "hist" in v:
            return v["wr"]
    wr, hist = 0.5, []
    try:
        past = c.get(f"{API}/{game}/matches/past", params={"filter[opponent_id]": tid, "per_page": 15}).json()
        done = [x for x in past if x.get("winner_id")]
        if done:
            wr = (sum(1 for x in done if x["winner_id"] == tid) + 1) / (len(done) + 2)  # smoothed
        for x in done:  # newest first: who it was against, the series score, the date
            opp = next((o["opponent"] for o in x.get("opponents") or [] if o.get("opponent") and o["opponent"].get("id") != tid), None)
            res = {r_["team_id"]: r_["score"] for r_ in x.get("results") or [] if "team_id" in r_}
            if opp:
                hist.append({"opp": opp.get("id"), "name": opp.get("name"), "logo": opp.get("image_url"), "w": x["winner_id"] == tid,
                             "s": f"{res.get(tid, 0)}:{res.get(opp.get('id'), 0)}", "at": (x.get("begin_at") or "")[:10]})
    except Exception:  # noqa
        pass
    db.merge(Meta(key=key, value=json.dumps({"wr": wr, "t": time.time(), "hist": hist[:15]})))
    return wr


def _has_hist(db, tid) -> bool:
    r = db.get(Meta, f"ps_wr_{tid}")
    try:
        return bool(r and r.value and "hist" in json.loads(r.value) and json.loads(r.value).get("t", 0) > time.time() - 86400)
    except Exception:  # noqa
        return False


def _team(db, game, op):
    ext = f"ps:{op['id']}"
    db.flush()
    t = db.scalar(select(Team).where(Team.ext == ext))
    if not t:
        t = Team(ext=ext, sport="esports", name=op.get("name") or "?", short_name=op.get("acronym") or op.get("name") or "?", is_serbian=False,
                 country=(op.get("location") or "")[:3])
        db.add(t)
        db.flush()
    if op.get("image_url") and t.logo != op["image_url"]:
        t.logo = op["image_url"]
    if (op.get("location") or "").upper() in ("RS", "SRB"):
        t.is_serbian = True
    return t


def sync_pandascore(db: Session) -> str:
    from .ingest import _league
    tok = _token(db)
    if not tok:
        return "pandascore: no token"
    new = upd = fin = 0
    lookups = n_streams = 0
    with httpx.Client(headers={"Authorization": f"Bearer {tok}", "Accept": "application/json"}, timeout=25) as c:
        for game, gname in GAMES.items():
            batches = []
            for kind in ("upcoming", "running", "past"):
                try:
                    r = c.get(f"{API}/{game}/matches/{kind}", params={"per_page": 50 if kind != "upcoming" else 100, "sort": "begin_at" if kind == "upcoming" else "-begin_at"})
                    if r.status_code == 401:
                        return "pandascore: token rejected"
                    batches += [(kind, x) for x in r.json() if isinstance(x, dict)]
                except Exception:  # noqa
                    continue
            # a match can be in several lists at once (upcoming and running): keep one, newest state wins
            seen = {}
            for kind, x in batches:
                if x.get("id") and (x["id"] not in seen or kind in ("running", "past")):
                    seen[x["id"]] = (kind, x)
            made = {}
            for kind, x in seen.values():
                ops = [o.get("opponent") for o in x.get("opponents") or [] if o.get("opponent")]
                if len(ops) != 2 or not x.get("begin_at") and not x.get("scheduled_at"):
                    continue
                ext = f"ps:{x['id']}"
                m = made.get(ext) or db.scalar(select(Match).where(Match.ext == ext))
                start = _dt(x.get("begin_at") or x.get("scheduled_at"))
                if not m:
                    if kind == "past":
                        continue
                    tier = (x.get("tournament") or {}).get("tier") or (x.get("serie") or {}).get("tier") or ""
                    lname = f"{gname} · {(x.get('league') or {}).get('name', '')}".strip(" ·")
                    prio = 7 if str(tier).lower() in ("s", "a") else 10
                    league = _league(db, "esports", {"ext": f"ps:{game}:{(x.get('league') or {}).get('id')}", "name": lname, "country": "INT", "priority": prio})
                    h, a = _team(db, game, ops[0]), _team(db, game, ops[1])
                    m = Match(ext=ext, sport="esports", league_id=league.id, home_id=h.id, away_id=a.id, odds={}, start=start)
                    db.add(m)
                    db.flush()
                    made[ext] = m
                    new += 1
                m.start = start or m.start
                res = {r_["team_id"]: r_["score"] for r_ in x.get("results") or [] if "team_id" in r_}
                hid, aid = ops[0]["id"], ops[1]["id"]
                n_streams += 1 if x.get("streams_list") else 0
                streams = [st for st in x.get("streams_list") or [] if st.get("raw_url") or st.get("embed_url")]
                if streams:  # official main stream first, then English, then any
                    st = sorted(streams, key=lambda v: (not v.get("main"), not v.get("official"), v.get("language") != "en"))[0]
                    lv = dict(m.live or {})
                    lv["stream"] = {"embed": st.get("embed_url") or "", "url": st.get("raw_url") or "", "lang": st.get("language") or ""}
                    m.live = lv
                if x.get("status") == "running":
                    m.status = "live"
                    m.score_home, m.score_away = res.get(hid, 0), res.get(aid, 0)
                    m.minute = f"BO{x.get('number_of_games') or ''}"
                elif x.get("status") == "finished" and m.status != "finished":
                    m.status = "finished"
                    m.score_home, m.score_away = res.get(hid, 0), res.get(aid, 0)
                    m.minute = ""
                    fin += 1
                elif x.get("status") in ("canceled", "postponed") and m.status == "scheduled":
                    m.status = "cancelled"
                # team history (recent series, head-to-head): for upcoming and live matches, a limited number of new lookups per run
                need_hist = m.status in ("scheduled", "live") and (not _has_hist(db, hid) or not _has_hist(db, aid))
                if need_hist and lookups < 40:
                    lookups += 2
                    _winrate(c, db, game, hid), _winrate(c, db, game, aid)
                if m.status == "scheduled" and start and start > datetime.utcnow() and not (m.odds or {}).get("form"):
                    ph, pa = _winrate(c, db, game, hid), _winrate(c, db, game, aid)
                    p = ph / (ph + pa) if ph + pa else 0.5
                    p = min(0.85, max(0.15, p))
                    m.odds = {**(m.odds or {}), "form": {"1": round(max(1.12, 0.94 / p), 2), "2": round(max(1.12, 0.94 / (1 - p)), 2)}}
                upd += 1
            try:
                db.commit()
            except Exception:  # noqa — one bad game list must not stop the others
                db.rollback()
    return f"pandascore new {new}, updated {upd}, finished {fin}, with streams {n_streams}, history lookups {lookups}"
