"""Football fixtures, live scores and results from FotMob public JSON."""
from datetime import datetime, date
import httpx
from ..config import UA

URL = "https://www.fotmob.com/api/data/matches?date={d}"
# primaryId -> priority (lower = more important)
TOP = {182: 1, 42: 2, 73: 3, 10216: 4, 50: 3, 77: 3, 47: 5, 87: 6, 55: 7, 54: 8, 53: 9,
       9806: 6, 9807: 10, 61: 13, 57: 14, 71: 15, 135: 16, 252: 17, 267: 18, 232: 19,
       132: 20, 133: 21, 138: 20, 141: 20, 209: 20, 134: 21, 186: 22,
       48: 23, 140: 24, 86: 24, 146: 24, 110: 25, 40: 26, 64: 26, 38: 27, 69: 27, 46: 28, 63: 28,
       441: 29, 196: 29, 122: 30, 189: 30, 270: 31, 212: 31, 173: 32, 249: 32, 268: 33, 112: 33, 130: 34, 536: 34, 114: 35}
SERBIA_WORDS = ("serbia", "srbija")


SHORT_FIX = {"crvena zvezda": "Crvena zvezda", "partizan beograd": "Partizan", "partizan": "Partizan",
             "tsc backa topola": "TSC", "radnicki 1923": "Radnički 1923"}


NATIONS_SR = {
    "Serbia": "Srbija", "Germany": "Nemačka", "Greece": "Grčka", "Netherlands": "Holandija", "Italy": "Italija",
    "France": "Francuska", "Spain": "Španija", "England": "Engleska", "Croatia": "Hrvatska", "Turkiye": "Turska",
    "Turkey": "Turska", "Belgium": "Belgija", "Czechia": "Češka", "Portugal": "Portugalija", "Denmark": "Danska",
    "Norway": "Norveška", "Wales": "Vels", "Scotland": "Škotska", "Northern Ireland": "Severna Irska",
    "Ireland": "Irska", "Republic of Ireland": "Irska", "Austria": "Austrija", "Switzerland": "Švajcarska",
    "Slovenia": "Slovenija", "North Macedonia": "Severna Makedonija", "Montenegro": "Crna Gora",
    "Bosnia and Herzegovina": "Bosna i Hercegovina", "Hungary": "Mađarska", "Romania": "Rumunija",
    "Bulgaria": "Bugarska", "Poland": "Poljska", "Ukraine": "Ukrajina", "Sweden": "Švedska", "Finland": "Finska",
    "Georgia": "Gruzija", "Israel": "Izrael", "Kosovo": "Kosovo", "Albania": "Albanija", "Slovakia": "Slovačka",
    "Iceland": "Island", "Russia": "Rusija", "Brazil": "Brazil", "Argentina": "Argentina", "USA": "SAD",
    "Japan": "Japan", "Morocco": "Maroko", "Cyprus": "Kipar", "Latvia": "Letonija", "Lithuania": "Litvanija",
    "Estonia": "Estonija", "Armenia": "Jermenija", "Azerbaijan": "Azerbejdžan", "Kazakhstan": "Kazahstan",
    "Belarus": "Belorusija", "Moldova": "Moldavija", "Luxembourg": "Luksemburg", "Malta": "Malta",
    "Faroe Islands": "Farska Ostrva", "Gibraltar": "Gibraltar", "Andorra": "Andora", "San Marino": "San Marino",
    "Liechtenstein": "Lihtenštajn",
}


def short(name: str, given: str | None) -> str:
    if name in NATIONS_SR:
        return NATIONS_SR[name]
    n = (given or name).strip()
    for pre in ("FK ", "FC ", "SK ", "NK "):
        if n.startswith(pre) and len(n) > len(pre) + 2:
            n = n[len(pre):]
    low = n.lower().replace("č", "c").replace("ć", "c").replace("š", "s").replace("ž", "z").replace("đ", "dj")
    return SHORT_FIX.get(low, n)


def logo(team_id: int) -> str:
    return f"https://images.fotmob.com/image_resources/logo/teamlogo/{team_id}_small.png"


def fetch_day(d: date, client: httpx.Client) -> list[dict]:
    r = client.get(URL.format(d=d.strftime("%Y%m%d")), headers={"User-Agent": UA, "Accept": "application/json"}, timeout=20)
    r.raise_for_status()
    out = []
    for lg in r.json().get("leagues", []):
        pid = lg.get("primaryId") or lg.get("id")
        cc = lg.get("ccode", "")
        is_srb = cc == "SRB"
        for m in lg.get("matches", []):
            names = (m["home"]["name"] + " " + m["away"]["name"]).lower()
            serbia_nt = any(w in names for w in SERBIA_WORDS)
            if not (is_srb or pid in TOP or serbia_nt):
                continue
            st = m.get("status", {})
            if st.get("cancelled"):
                status = "cancelled"
            elif st.get("finished"):
                status = "finished"
            elif st.get("started"):
                status = "live"
            else:
                status = "scheduled"
            minute = ""
            lt = st.get("liveTime") or {}
            if status == "live":
                minute = lt.get("short") or ""
                if (st.get("reason") or {}).get("short") == "HT":
                    minute = "HT"
            utc = st.get("utcTime")
            start = datetime.fromisoformat(utc.replace("Z", "+00:00")).replace(tzinfo=None) if utc else None
            if not start:
                continue
            prio = 1 if is_srb and pid == 182 else (TOP.get(pid, 20) if not is_srb else 10)
            if serbia_nt:
                prio = 1
            out.append({
                "ext": f"fm:{m['id']}",
                "sport": "football",
                "league": {"ext": f"fm:{pid}:{lg.get('name')}",
                           "name": lg.get("name", ""), "country": cc, "priority": prio},
                "home": {"ext": f"fm:{m['home']['id']}", "name": m["home"]["name"],
                         "short": short(m["home"]["name"], m["home"].get("shortName")),
                         "logo": logo(m["home"]["id"]), "country": cc if is_srb else "", "serbian": is_srb},
                "away": {"ext": f"fm:{m['away']['id']}", "name": m["away"]["name"],
                         "short": short(m["away"]["name"], m["away"].get("shortName")),
                         "logo": logo(m["away"]["id"]), "country": cc if is_srb else "", "serbian": is_srb},
                "start": start,
                "status": status,
                "minute": minute,
                "score_home": m["home"].get("score") if status in ("live", "finished") else None,
                "score_away": m["away"].get("score") if status in ("live", "finished") else None,
            })
    return out
