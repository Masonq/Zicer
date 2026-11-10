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
from .sources import fotmob, euroleague, maxbet
from .textutil import similarity

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
        m.minute = it.get("minute", "")
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
    with httpx.Client() as c:
        n = upsert_matches(db, euroleague.fetch(c))
    return f"basketball upserted {n}"


def sync_odds(db: Session) -> str:
    matched = 0
    with httpx.Client() as c:
        for sport in ("football", "basketball"):
            offers = maxbet.fetch(sport, c)
            lo = datetime.utcnow() - timedelta(hours=3)
            hi = datetime.utcnow() + timedelta(days=8)
            ms = db.scalars(select(Match).where(Match.sport == sport, Match.start >= lo, Match.start <= hi,
                                                Match.status.in_(["scheduled", "live"]))).all()
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
                    odds = dict(m.odds or {})
                    odds["maxbet"] = {k: v for k, v in best["odds"].items() if v}
                    m.odds = odds
                    m.odds_updated = now()
                    matched += 1
            db.commit()
    return f"odds matched {matched}"


def outcome(m: Match) -> str | None:
    h = m.reg_home if m.sport == "basketball" and m.reg_home is not None else m.score_home
    a = m.reg_away if m.sport == "basketball" and m.reg_away is not None else m.score_away
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
    vals = [bk.get(pick) for bk in (m.odds or {}).values() if bk.get(pick)]
    return max(vals) if vals else None


def settle(db: Session) -> str:
    cnt = 0
    ms = db.scalars(select(Match).where(Match.settled == False, Match.status.in_(["finished", "cancelled"]))).all()  # noqa
    events = []
    for m in ms:
        res = outcome(m) if m.status == "finished" else None
        void = m.status == "cancelled"
        if not void and res is None:
            continue
        for p in db.scalars(select(Prediction).where(Prediction.match_id == m.id, Prediction.status == "open")).all():
            u = p.user
            if void:
                p.status, p.profit = "void", 0.0
                u.bank += p.stake
            elif p.pick == res:
                p.status, p.profit = "won", round(p.stake * (p.odds - 1), 2)
                u.bank += p.stake * p.odds
            else:
                p.status, p.profit = "lost", -p.stake
            p.settled_at = now()
            events.append(("pred", p.id, u.id, p.status))
            cnt += 1
        for it in db.scalars(select(TicketItem).where(TicketItem.match_id == m.id, TicketItem.status == "open")).all():
            it.status = "void" if void else ("won" if it.pick == res else "lost")
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
    rows = db.execute(select(Prediction.pick, func.count()).where(Prediction.match_id == match_id)
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
        sr.append(f"Zicer zajednica: {cs[top]}% prognoza je na {lab}.")
        ru.append(f"Сообщество Zicer: {cs[top]}% прогнозов — на {lab_ru}.")
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
    prompt = ("Ti si sportski analitičar sajta Zicer. Na osnovu podataka napiši kratku analizu meča (3-4 rečenice), "
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
    r = httpx.get("https://translate.googleapis.com/translate_a/single",
                  params={"client": "gtx", "sl": "auto", "tl": target, "dt": "t", "q": text},
                  headers={"User-Agent": config.UA}, timeout=15)
    r.raise_for_status()
    out = "".join(part[0] for part in r.json()[0] if part and part[0])
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
                _tg("sendMessage", chat_id=chat, text=f"Zicer — lige prognoza. Poveži nalog na {config.PUBLIC_URL}/profil")
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
