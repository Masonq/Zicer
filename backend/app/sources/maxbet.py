"""Odds from MaxBet (Serbian bookmaker) public offer API, normalized to Zicer market keys."""
import time
from datetime import datetime
import httpx
from ..config import UA

URL = "https://www.maxbet.rs/restapi/offer/sr/sport/{s}/mob?annex=3&desktopVersion=2.36.3.9&locale=sr"
TTG = "https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr"
SPORTS = {"football": "S", "basketball": "B", "hockey": "H", "tennis": "T", "volleyball": "V", "waterpolo": "W"}

FOOT_FIXED = {
    "1": "1", "2": "X", "3": "2",
    "7": "1X", "8": "12", "9": "X2",
    "264": "DNB1", "265": "DNB2",
    "272": "GG", "273": "NG",
    "21": "G0-1", "22": "G0-2", "23": "G2-3", "242": "G2+", "24": "G3+", "25": "G4+", "27": "G5+",
}
BASKET_FIXED = {"1": "1", "2": "X", "3": "2"}
# basketball handicap / totals incl. overtime: (home_code, away_code, param)
BASKET_AH = [("50430", "50431", "handicapOvertime"), ("50432", "50433", "handicapOvertime2"),
             ("50434", "50435", "handicapOvertime3"), ("50436", "50437", "handicapOvertime4"),
             ("50438", "50439", "handicapOvertime5")]
BASKET_TOT = [("50444", "50445", "overUnderOvertime"), ("50446", "50447", "overUnderOvertime2"),
              ("50448", "50449", "overUnderOvertime3")]

_cs_cache = {"t": 0, "map": {}}


def exact_score_codes(client: httpx.Client) -> dict:
    if time.time() - _cs_cache["t"] < 6 * 3600 and _cs_cache["map"]:
        return _cs_cache["map"]
    r = client.get(TTG, headers={"User-Agent": UA}, timeout=30)
    r.raise_for_status()
    out = {}
    for k, v in r.json().get("betPickMap", {}).items():
        code, _, sport = k.partition("_")
        cap = (v.get("caption") or "").strip()
        if sport == "S" and v.get("betCode") == 7 and ":" in cap:
            h, _, a = cap.partition(":")
            if h.isdigit() and a.isdigit():
                out[code] = f"CS:{int(h)}:{int(a)}"
    _cs_cache.update(t=time.time(), map=out)
    return out


def _num(v):
    try:
        return float(str(v).replace(",", "."))
    except (TypeError, ValueError):
        return None


def _fmt(v: float) -> str:
    return f"{v:g}"


def markets(sport: str, odds: dict, params: dict, cs: dict) -> dict:
    out = {}
    if sport not in ("football", "basketball"):
        for code, key in (("1", "1"), ("2", "X"), ("3", "2")):
            if odds.get(code):
                out[key] = odds[code]
        return out
    fixed = FOOT_FIXED if sport == "football" else BASKET_FIXED
    for code, key in fixed.items():
        if odds.get(code):
            out[key] = odds[code]
    if sport == "football":
        for code, key in cs.items():
            if odds.get(code):
                out[key] = odds[code]
        hv = _num(params.get("hd2"))
        if hv is not None and hv != 0:
            for code, k in (("201", "EH1"), ("202", "EHX"), ("203", "EH2")):
                if odds.get(code):
                    out[f"{k}:{_fmt(hv)}"] = odds[code]
    else:
        for hc, ac, p in BASKET_AH:
            v = _num(params.get(p))
            if v is None:
                continue
            if odds.get(hc):
                out[f"AH1:{_fmt(v)}"] = odds[hc]
            if odds.get(ac):
                out[f"AH2:{_fmt(v)}"] = odds[ac]
        for uc, oc, p in BASKET_TOT:
            v = _num(params.get(p))
            if v is None:
                continue
            if odds.get(uc):
                out[f"U:{_fmt(v)}"] = odds[uc]
            if odds.get(oc):
                out[f"O:{_fmt(v)}"] = odds[oc]
    return out


def fetch(sport: str, client: httpx.Client) -> list[dict]:
    r = client.get(URL.format(s=SPORTS[sport]), headers={"User-Agent": UA, "Accept": "application/json"}, timeout=25)
    r.raise_for_status()
    cs = {}
    if sport == "football":
        try:
            cs = exact_score_codes(client)
        except Exception:  # noqa
            cs = {}
    out = []
    for m in r.json().get("esMatches", []):
        o = m.get("odds") or {}
        if not all(k in o for k in ("1", "3")) or "Doubles" in (m.get("leagueName") or ""):
            continue
        out.append({
            "id": m.get("id"), "home_id": m.get("homeId"), "away_id": m.get("awayId"),
            "home": m.get("home", ""), "away": m.get("away", ""),
            "start": datetime.utcfromtimestamp(m["kickOffTime"] / 1000),
            "league": m.get("leagueName", ""),
            "odds": markets(sport, o, m.get("params") or {}, cs),
            "live": bool(m.get("live")),
        })
    return out


RESULTS = "https://www.maxbet.rs/restapi/results/sr/day/{d}?annex=3&desktopVersion=2.36.3.9&locale=sr"
# MaxBet basketball leagues we take fixtures from (not covered by official feeds)
BASKET_LEAGUES = {
    "aba liga": ("ABA liga", "ABA", 3),
    "serbia": ("KLS Srbija", "SRB", 5),
    "ch. league": ("Liga šampiona FIBA", "EU", 9),
    "fiba europe cup": ("FIBA Evropski kup", "EU", 12),
}


def basket_league(name: str):
    n = name.lower().replace("košarka", "").replace("коšarka", "").strip()
    return BASKET_LEAGUES.get(n)


def fetch_results(d, client: httpx.Client, sport: str = "B") -> dict:
    """Return {maxbet_match_id: {"h":..,"a":..,"rh":..,"ra":..,"end":bool}}."""
    r = client.get(RESULTS.format(d=d.strftime("%d.%m.%Y.")), headers={"User-Agent": UA}, timeout=25)
    r.raise_for_status()
    out = {}
    for m in (r.json().get("resultsMap") or {}).get(sport, []):
        mr = m.get("matchResult") or {}
        hs, as_ = mr.get("hs") or {}, mr.get("as") or {}
        ft_h = hs.get("OVERTIME") if (hs.get("OVERTIME") or -1) >= 0 else hs.get("FULLTIME")
        ft_a = as_.get("OVERTIME") if (as_.get("OVERTIME") or -1) >= 0 else as_.get("FULLTIME")
        if ft_h is None or ft_a is None or ft_h < 0 or ft_a < 0:
            continue
        rh = (hs.get("FIRST_HALF", -1) + hs.get("SECOND_HALF", -1)) if hs.get("FIRST_HALF", -1) >= 0 and hs.get("SECOND_HALF", -1) >= 0 else None
        ra = (as_.get("FIRST_HALF", -1) + as_.get("SECOND_HALF", -1)) if as_.get("FIRST_HALF", -1) >= 0 and as_.get("SECOND_HALF", -1) >= 0 else None
        out[m["id"]] = {"h": ft_h, "a": ft_a, "rh": rh, "ra": ra, "end": mr.get("p") == "END"}
    return out


# Other sports: taken entirely from MaxBet (fixtures, odds, results)
OTHER = {
    "hockey": {"code": "H", "leagues": {"nhl": ("NHL", "USA", 3), "khl": ("KHL", "RUS", 6), "ch. league": ("Liga šampiona", "EU", 4),
                                         "sweden": ("Švedska SHL", "SWE", 8), "finland": ("Finska Liiga", "FIN", 9), "switzerland": ("Švajcarska NL", "SUI", 9),
                                         "germany": ("Nemačka DEL", "GER", 9), "czech rep.": ("Češka Ekstraliga", "CZE", 10), "slovakia": ("Slovačka Ekstraliga", "SVK", 11),
                                         "austria": ("ICE liga", "AUT", 11), "serbia": ("Srbija", "SRB", 5)}},
    "tennis": {"code": "T", "leagues": None},
    "volleyball": {"code": "V", "leagues": None},
    "waterpolo": {"code": "W", "leagues": None},
}
SPORT_WORDS = ("hokej", "odbojka", "vaterpolo", "tenis", "rukomet")


def other_league(sport: str, name: str):
    n = name.lower()
    for w in SPORT_WORDS:
        n = n.replace(w, "")
    n = n.strip()
    if sport == "tennis":
        if n.startswith("itf") or "challenger" in n or "utr" in n:
            return None
        clean = name.strip()
        prio = 3 if n.startswith(("atp", "wta")) else 12
        return (clean, "INT", prio)
    if sport in ("volleyball", "waterpolo"):
        clean = name
        for w in ("Odbojka", "Vaterpolo"):
            clean = clean.replace(w, "")
        clean = clean.strip().replace("Ch. League", "Liga šampiona")
        if clean.isupper():
            clean = clean.title()
        return (clean, "SRB" if "serbia" in n or "srbija" in n else "INT", 5)
    lg = OTHER[sport]["leagues"]
    return lg.get(n) if lg else None


def score_from_result(sport: str, hs: dict, as_: dict):
    def v(d, k):
        x = d.get(k)
        return x if isinstance(x, int) and x >= 0 else None
    if sport in ("tennis", "volleyball"):
        h, a = v(hs, "FULLTIME_SETS"), v(as_, "FULLTIME_SETS")
        if h is None:
            h, a = v(hs, "FULLTIME"), v(as_, "FULLTIME")
        return h, a, h, a
    ft_h, ft_a = v(hs, "FULLTIME"), v(as_, "FULLTIME")
    ot_h, ot_a = v(hs, "OVERTIME"), v(as_, "OVERTIME")
    fh, fa = (ot_h, ot_a) if ot_h is not None and ot_a is not None else (ft_h, ft_a)
    return fh, fa, ft_h, ft_a


def fetch_results_sport(d, client: httpx.Client, sport: str) -> dict:
    code = OTHER[sport]["code"]
    r = client.get(RESULTS.format(d=d.strftime("%d.%m.%Y.")), headers={"User-Agent": UA}, timeout=25)
    r.raise_for_status()
    out = {}
    for m in (r.json().get("resultsMap") or {}).get(code, []):
        mr = m.get("matchResult") or {}
        h, a, rh, ra = score_from_result(sport, mr.get("hs") or {}, mr.get("as") or {})
        if h is None or a is None:
            continue
        out[m["id"]] = {"h": h, "a": a, "rh": rh, "ra": ra, "end": mr.get("p") == "END"}
    return out


LIVE = "https://www.maxbet.rs/live/init/sr"


def _v(d, k):
    x = d.get(k)
    return x if isinstance(x, int) and x >= 0 else None


PERIOD_KEYS = ["FIRST_PERIOD", "SECOND_PERIOD", "THIRD_PERIOD", "FOURTH_PERIOD", "FIFTH_PERIOD"]


def fetch_live(client: httpx.Client) -> dict:
    """{maxbet_match_id: {"score": [h,a], "p": period_code, "cm": minute, "per": [[h,a]...], "game": [h,a], "stats": {...}}}"""
    r = client.get(LIVE, headers={"User-Agent": UA}, timeout=25)
    r.raise_for_status()
    j = r.json()
    heads = {h["id"]: h for h in j.get("liveHeaders", [])}
    out = {}
    for res in j.get("liveResults", []):
        h = heads.get(res.get("mi"))
        if not h:
            continue
        hs, as_ = res.get("hs") or {}, res.get("as") or {}
        sh, sa = _v(hs, "CURRENT_SCORE"), _v(as_, "CURRENT_SCORE")
        per = []
        for k in PERIOD_KEYS:
            a, b = _v(hs, k), _v(as_, k)
            if a is None or b is None:
                break
            per.append([a, b])
        stats = {}
        for key, name in (("CURRENT_CORNERS", "corners"), ("FULLTIME_YC", "yc"), ("FULLTIME_RC", "rc")):
            a, b = _v(hs, key), _v(as_, key)
            if a is not None and b is not None:
                stats[name] = [a, b]
        game = [_v(hs, "GAME_SCORE"), _v(as_, "GAME_SCORE")] if h.get("s") == "T" else None
        out[res["mi"]] = {"h": h.get("h", ""), "a": h.get("a", ""), "s": h.get("s"), "kot": h.get("kot"), "score": [sh, sa] if sh is not None and sa is not None else None, "p": res.get("p") or "",
                          "cm": res.get("cm"), "per": per, "game": game if game and None not in game else None,
                          "stats": stats, "state": h.get("ls", "")}
    return out
