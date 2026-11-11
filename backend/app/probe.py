"""One-off: which sports MaxBet and 22Bet offer from the server (results go to reports/probe.md)."""
import json
import httpx

MB = "https://www.maxbet.rs/restapi/offer/sr/sport/{s}/mob?annex=3&desktopVersion=2.36.3.9&locale=sr"
H = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/130 Safari/537.36"}


def main():
    out = ["# Probe: sports in the feeds", ""]
    with httpx.Client(headers=H, timeout=20) as c:
        out.append("## MaxBet codes")
        for code in ["S", "B", "H", "T", "V", "W", "R", "RU", "HB", "TT", "ST", "F", "FS", "FU", "E", "ES", "SP", "MMA", "MM", "UFC", "BOX", "BX", "BO", "D", "DA", "SN", "A", "AF", "BB", "BE", "K", "KS"]:
            try:
                r = c.get(MB.format(s=code))
                d = r.json() if r.status_code == 200 else {}
                evs = d.get("esMatches") or d.get("matches") or []
                sample = [f"{e.get('home')} - {e.get('away')} | {e.get('leagueName')}" for e in evs[:3]]
                out.append(f"- {code}: http {r.status_code}, matches {len(evs)}; {sample}")
            except Exception as e:  # noqa
                out.append(f"- {code}: error {str(e)[:80]}")
        out.append("")
        out.append("## 22Bet live sports (id: name, games, sample)")
        for sid in list(range(1, 70)) + [80, 85, 92, 95, 117, 128, 141, 146, 189, 194]:
            for kind in ("LiveFeed/Get1x2_VZip", "LineFeed/Get1x2_VZip"):
                try:
                    r = c.get(f"https://22bet.com/{kind}?sports={sid}&count=50&lng=en&mode=4&country=1&getEmpty=true")
                    v = (r.json() or {}).get("Value") or []
                    if v:
                        out.append(f"- {sid} [{kind.split('/')[0]}]: {v[0].get('SN') or v[0].get('SE')}, games {len(v)}; {[ (x.get('O1'), x.get('O2'), x.get('L')) for x in v[:2]]}")
                        break
                except Exception:  # noqa
                    pass
        out.append("")
        out.append("## 22Bet line (prematch) with tf: MMA / boxing search")
        for sid in range(1, 200):
            try:
                r = c.get(f"https://22bet.com/LineFeed/Get1x2_VZip?sports={sid}&count=20&lng=en&tf=2200000&mode=4&country=1&getEmpty=true")
                v = (r.json() or {}).get("Value") or []
                if v:
                    out.append(f"- {sid}: {v[0].get('SN') or v[0].get('SE')}, games {len(v)}; {v[0].get('L')}")
            except Exception:  # noqa
                pass
    print("\n".join(out))


if __name__ == "__main__":
    main()
