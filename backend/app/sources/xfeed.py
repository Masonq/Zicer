"""Live match statistics from the public 22Bet live feed (1xBet platform)."""
import time
import httpx

URL = "https://22bet.com/LiveFeed/Get1x2_VZip?sports={s}&count=300&lng=en&mode=4&country=1&getEmpty=true"
UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36"
SPORTS = {"football": 1, "hockey": 2, "basketball": 3, "tennis": 4, "volleyball": 6, "waterpolo": 17, "handball": 8, "tabletennis": 10, "futsal": 14, "esports": 40}

STAT_NAMES = {  # en -> (sr, ru, is_pct)
    "Attacks": ("Napadi", "Атаки", False), "Dangerous attacks": ("Opasni napadi", "Опасные атаки", False),
    "Possession %": ("Posed lopte", "Владение мячом", True), "Shots on target": ("Šutevi u okvir", "Удары в створ", False),
    "Shots off target": ("Šutevi pored gola", "Удары мимо", False), "Yellow cards": ("Žuti kartoni", "Жёлтые карточки", False),
    "Corner": ("Korneri", "Угловые", False), "Red card": ("Crveni kartoni", "Красные карточки", False),
    "Penalty": ("Penali", "Пенальти", False), "Substitutions": ("Izmene", "Замены", False),
    "Fouls": ("Lične greške", "Фолы", False), "Timeouts remaining": ("Preostali tajm-auti", "Оставшиеся тайм-ауты", False),
    "2-pointers": ("Pogođene dvojke", "Двухочковые", False), "3-pointers": ("Pogođene trojke", "Трёхочковые", False),
    "Free throws": ("Slobodna bacanja", "Штрафные", False), "Free throws scored %": ("Uspeh slobodnih bacanja", "Реализация штрафных", True),
    "Penalties": ("Isključenja", "Удаления", False), "Goals during powerplay": ("Golovi s igračem više", "Голы в большинстве", False),
    "2-min penalties": ("Isključenja 2 min", "Удаления на 2 мин", False), "Aces": ("Asovi", "Эйсы", False),
    "Win % 1st Serve": ("Poeni na 1. servis", "Выигрыш на 1-й подаче", True), "Break point %": ("Iskorišćene brejk lopte", "Реализация брейк-пойнтов", True),
    "Double faults": ("Duple greške", "Двойные ошибки", False), "Win % 2nd Serve": ("Poeni na 2. servis", "Выигрыш на 2-й подаче", True),
    "1st Serve %": ("Prvi servis u polju", "Попадание 1-й подачи", True), "Points on own serve": ("Poeni na svoj servis", "Очки на своей подаче", False),
    "Breaks": ("Brejkovi", "Брейки", False),
    "Max pts in a row": ("Najduži niz poena", "Макс. серия очков", False), "Points on opponent's serve": ("Poeni na servis protivnika", "Очки на подаче соперника", False),
    "Timeouts": ("Tajm-auti", "Тайм-ауты", False), "Points on own serve ": ("Poeni na svoj servis", "Очки на своей подаче", False),
}
EVENT_KEYS = {  # stat that grew -> event type
    "Dangerous attacks": "danger", "Attacks": "attack", "Shots on target": "shot_on", "Shots off target": "shot_off",
    "Corner": "corner", "Yellow cards": "yellow", "Red card": "red", "Penalty": "penalty", "Substitutions": "sub",
    "2-min penalties": "pen2", "2-pointers": "p2", "3-pointers": "p3", "Free throws": "ft", "Fouls": "foul",
    "Aces": "ace", "Double faults": "df", "Breaks": "break", "Timeouts": "timeout",
}


def _num(v):
    try:
        return float(str(v).replace(",", "."))
    except (TypeError, ValueError):
        return 0.0


_ROUND = {"n": 0}
# the same feed is served by the brand's mirror domains; if one refuses us (rate limit, block), use the next
HOSTS = ["https://22bet.com", "https://22bet.co.ke", "https://22bet.ng", "https://22bets.me", "https://22bet.ug"]
STATE = {"host": 0, "last": ""}


def _get(client: httpx.Client, path: str):
    err = None
    for k in range(len(HOSTS)):
        host = HOSTS[(STATE["host"] + k) % len(HOSTS)]
        try:
            r = client.get(host + path, headers={"User-Agent": UA, "Accept": "application/json"}, timeout=15)
            if r.status_code == 200 and r.headers.get("content-type", "").startswith("application/json"):
                STATE["host"] = (STATE["host"] + k) % len(HOSTS)
                STATE["last"] = f"{host.split('//')[1]} ok"
                return r
            err = f"{host.split('//')[1]} http {r.status_code}"
        except Exception as e:  # noqa
            err = f"{host.split('//')[1]} {type(e).__name__}"
    STATE["last"] = err or "no host"
    raise RuntimeError(STATE["last"])
EXTRA = {"handball", "tabletennis", "futsal", "esports"}


def fetch_all(client: httpx.Client) -> list[dict]:
    """Main sports every run; the newer ones every third run (keeps the request rate the feed tolerates)."""
    out = []
    _ROUND["n"] += 1
    for sport, sid in SPORTS.items():
        if sport in EXTRA and _ROUND["n"] % 3:
            continue
        try:
            r = _get(client, URL.replace("https://22bet.com", "").format(s=sid))
            for g in r.json().get("Value") or []:
                sc = g.get("SC") or {}
                fs = sc.get("FS") or {}
                stats = {}
                for block in sc.get("ST") or []:
                    for x in block.get("Value") or []:
                        stats[x.get("N")] = [x.get("S1") or "0", x.get("S2") or "0"]
                periods = [[(p.get("Value") or {}).get("S1", 0), (p.get("Value") or {}).get("S2", 0)] for p in sc.get("PS") or []]
                ss = sc.get("SS") or {}
                out.append({"ss": [str(ss.get("S1", "0")), str(ss.get("S2", "0"))] if ss else None, "server": sc.get("P"),
                            "id": g.get("I"), "sport": sport, "home": g.get("O1") or "", "away": g.get("O2") or "",
                            "start": g.get("S"), "score": [fs.get("S1", 0), fs.get("S2", 0)], "ts": sc.get("TS"),
                            "period": sc.get("CPS") or "", "stats": stats, "periods": periods})
        except Exception:  # noqa
            pass
        time.sleep(0.6)
    return out
