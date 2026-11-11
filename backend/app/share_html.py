"""Ticket share images rendered from HTML/CSS in headless Chromium (crisp type, real anti-aliasing,
shadows and gradients), cached on disk. Falls back to the Pillow renderer if Chromium is unavailable."""
import asyncio
import base64
import hashlib
import html
import os
from datetime import timedelta
from functools import lru_cache

from . import config
from .models import Ticket

FD = os.path.join(os.path.dirname(__file__), "fonts")
CACHE = os.path.join(config.MEDIA_DIR, "share")
VERSION = "v4"

T = {
    "sr": {"won": "Prošao", "lost": "Pao", "void": "Vraćen", "open": "U igri", "odds": "Ukupna kvota", "win": "Dobitak", "pot": "Mogući dobitak",
           "stake": "Ulog", "draw": "Nerešeno", "or_draw": "ili nerešeno", "draw_or": "Nerešeno ili", "no_draw": "Bez nerešenog", "winp": "Pobeda",
           "over": "Više", "under": "Manje", "btts": "Oba tima daju gol", "nbtts": "Ne daju oba", "hcap": "Hendikep", "cs": "Tačan rezultat",
           "goals": "Golovi", "events": "događaja", "more": "još {n}", "ticket": "Tiket"},
    "cyr": {"won": "Прошао", "lost": "Пао", "void": "Враћен", "open": "У игри", "odds": "Укупна квота", "win": "Добитак", "pot": "Могући добитак",
            "stake": "Улог", "draw": "Нерешено", "or_draw": "или нерешено", "draw_or": "Нерешено или", "no_draw": "Без нерешеног", "winp": "Победа",
            "over": "Више", "under": "Мање", "btts": "Оба тима дају гол", "nbtts": "Не дају оба", "hcap": "Хендикеп", "cs": "Тачан резултат",
            "goals": "Голови", "events": "догађаја", "more": "још {n}", "ticket": "Тикет"},
    "ru": {"won": "Зашёл", "lost": "Не зашёл", "void": "Возврат", "open": "В игре", "odds": "Общий коэффициент", "win": "Выигрыш", "pot": "Возможный выигрыш",
           "stake": "Ставка", "draw": "Ничья", "or_draw": "или ничья", "draw_or": "Ничья или", "no_draw": "Без ничьей", "winp": "Победа",
           "over": "Больше", "under": "Меньше", "btts": "Обе забьют", "nbtts": "Обе не забьют", "hcap": "Фора", "cs": "Точный счёт",
           "goals": "Голы", "events": "событий", "more": "ещё {n}", "ticket": "Тикет"},
}


def _b64(path):
    with open(path, "rb") as f:
        return base64.b64encode(f.read()).decode()


@lru_cache(maxsize=1)
def _assets():
    return {"oswald": _b64(os.path.join(FD, "Oswald.ttf")), "manrope": _b64(os.path.join(FD, "Manrope.ttf")), "logo": _b64(os.path.join(FD, "logo-tight.png"))}


def _team(team, lang):
    if lang == "ru":
        return team.name_ru or team.short_name or team.name
    if lang == "cyr":
        return team.name_cyr or team.name_sr or team.short_name or team.name
    return team.name_sr or team.short_name or team.name


def _league(lg, lang):
    if not lg:
        return ""
    return (getattr(lg, "name_ru", "") if lang == "ru" else getattr(lg, "name_sr", "")) or lg.name


def pick_label(key: str, m, lang: str) -> str:
    """Readable pick with team names: '2' -> 'Победа: Германия', 'X2' -> 'Ничья или Германия' ..."""
    L = T[lang]
    h, a = _team(m.home, lang), _team(m.away, lang)
    k = key or ""
    if k == "1":
        return f"{L['winp']}: {h}"
    if k == "2":
        return f"{L['winp']}: {a}"
    if k == "X":
        return L["draw"]
    if k == "1X":
        return f"{h} {L['or_draw']}"
    if k == "X2":
        return f"{L['draw_or']} {a}"
    if k == "12":
        return L["no_draw"]
    if k == "GG":
        return L["btts"]
    if k == "NG":
        return L["nbtts"]
    if k in ("DNB1", "DNB2"):
        return f"{h if k == 'DNB1' else a}, {L['no_draw'].lower()}"
    p = k.split(":")
    if p[0] in ("O", "U") and len(p) == 2:
        return f"{L['over'] if p[0] == 'O' else L['under']} {p[1]}"
    if p[0] == "CS" and len(p) == 3:
        return f"{L['cs']} {p[1]}:{p[2]}"
    if p[0] in ("AH1", "AH2", "EH1", "EH2") and len(p) == 2:
        v = p[1] if p[1].startswith(("-", "+")) else f"+{p[1]}"
        return f"{L['hcap']} {h if p[0].endswith('1') else a} ({v})"
    if p[0] == "EHX" and len(p) == 2:
        return f"{L['hcap']} {L['draw'].lower()} ({p[1]})"
    if k.startswith("G") and len(k) > 1:
        return f"{L['goals']} {k[1:]}"
    return k


def _key(t: Ticket, lang: str, fmt: str) -> str:
    parts = [VERSION, lang, fmt, t.status, f"{t.total_odds:.2f}", f"{t.stake:.0f}", t.user.username, getattr(t.user, "avatar", "") or ""]
    for it in t.items:
        m = it.match
        parts += [it.status, it.pick, f"{it.odds:.2f}", str(m.score_home), str(m.score_away), m.status, m.home.logo or "", m.away.logo or "",
                  _team(m.home, lang), _team(m.away, lang)]
    return hashlib.sha1("|".join(parts).encode()).hexdigest()[:20]


def build_html(t: Ticket, lang: str, fmt: str) -> str:
    L = T.get(lang, T["sr"])
    A = _assets()
    story = fmt == "story"
    W, H = (1080, 1920) if story else (1200, 630)
    status = {"won": ("won", L["won"]), "lost": ("lost", L["lost"]), "void": ("void", L["void"])}.get(t.status, ("open", L["open"]))
    e = html.escape
    rows = []
    items = list(t.items)
    maxn = 7 if story else 4
    for it in items[:maxn]:
        m = it.match
        when = ""
        if m.score_home is not None and m.status != "scheduled":
            when = f"{m.score_home}:{m.score_away}"
        elif m.start:
            when = (m.start + timedelta(hours=1)).strftime("%d.%m %H:%M")
        def crest(team):
            if team.logo:
                return f'<span class="crest"><img src="{e(team.logo)}" onerror="this.remove()"></span>'
            return f'<span class="crest ph">{e((team.short_name or "?")[:1])}</span>'
        rows.append(f'''<div class="sel {it.status}">
  <div class="crests">{crest(m.home)}{crest(m.away)}</div>
  <div class="info"><div class="teams">{e(_team(m.home, lang))} <i>–</i> {e(_team(m.away, lang))}</div>
    <div class="meta">{e(_league(m.league, lang))}{(' <b>' + e(when) + '</b>') if when else ''}</div></div>
  <div class="pick"><span>{e(pick_label(it.pick, m, lang))}</span><b>{it.odds:.2f}</b></div>
</div>''')
    if len(items) > maxn:
        rows.append(f'<div class="more">+ {e(L["more"].format(n=len(items) - maxn))}</div>')
    av = getattr(t.user, "avatar", "") or ""
    av_html = f'<img src="file://{os.path.join(config.MEDIA_DIR, "avatars", av)}">' if av else e((t.user.username or "?")[:1].upper())
    total = f"{t.total_odds:.2f}"
    win = f"{t.stake * t.total_odds:,.0f}".replace(",", ".")
    stake = f"{t.stake:,.0f}".replace(",", ".")
    win_lab = L["win"] if t.status == "won" else L["pot"]
    css = f'''
@font-face {{ font-family: Oswald; src: url(data:font/ttf;base64,{A["oswald"]}); font-weight: 200 700; }}
@font-face {{ font-family: Manrope; src: url(data:font/ttf;base64,{A["manrope"]}); font-weight: 200 800; }}
* {{ box-sizing: border-box; margin: 0; padding: 0; }}
html, body {{ width: {W}px; height: {H}px; }}
body {{ font-family: Manrope, sans-serif; color: #EEF3EE; -webkit-font-smoothing: antialiased; overflow: hidden;
  background: radial-gradient(1100px 700px at -10% -20%, rgba(242,194,48,.20), transparent 60%),
              radial-gradient(900px 600px at 120% 120%, rgba(76,195,138,.14), transparent 60%),
              linear-gradient(160deg, #143A2E 0%, #0E271F 55%, #0B2019 100%); }}
.wm {{ position: absolute; right: -60px; bottom: -40px; width: {700 if story else 520}px; opacity: .05; }}
.card {{ position: relative; width: 100%; height: 100%; padding: {72 if story else 48}px; display: flex; {'flex-direction: column;' if story else ''} gap: {40 if story else 36}px; }}
.smain {{ flex: 1; display: flex; flex-direction: column; justify-content: center; gap: 44px; padding-bottom: 60px; }}
.left {{ flex: 1; min-width: 0; display: flex; flex-direction: column; }}
.brand {{ display: flex; align-items: center; justify-content: space-between; }}
.logo {{ display: flex; align-items: center; gap: {16 if story else 12}px; }}
.logo img {{ height: {58 if story else 40}px; }}
.logo span {{ font-family: Oswald; font-weight: 700; font-size: {80 if story else 54}px; line-height: 1; color: #F2C230; letter-spacing: .01em; }}
.user {{ display: flex; align-items: center; gap: 12px; padding: 8px 16px 8px 8px; border-radius: 999px; background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.08); }}
.user .av {{ width: {52 if story else 36}px; height: {52 if story else 36}px; border-radius: 50%; overflow: hidden; background: #4CC38A; color: #0F2A22; font-weight: 800;
  display: grid; place-items: center; font-size: {24 if story else 17}px; }}
.user .av img {{ width: 100%; height: 100%; object-fit: cover; }}
.user span {{ font-size: {30 if story else 20}px; font-weight: 700; color: #DCE6E0; }}
.list {{ margin-top: {0 if story else 22}px; display: flex; flex-direction: column; gap: {18 if story else 10}px; {'' if story else 'flex: 1; justify-content: center;'} }}
.sel {{ position: relative; display: flex; align-items: center; gap: {22 if story else 16}px; padding: {22 if story else 12}px {26 if story else 18}px {22 if story else 12}px {30 if story else 22}px;
  border-radius: {22 if story else 16}px; background: linear-gradient(180deg, rgba(255,255,255,.065), rgba(255,255,255,.035)); border: 1px solid rgba(255,255,255,.07);
  box-shadow: 0 10px 24px rgba(0,0,0,.18); overflow: hidden; }}
.sel::before {{ content: ""; position: absolute; left: 0; top: 0; bottom: 0; width: 6px; background: rgba(255,255,255,.14); }}
.sel.won::before {{ background: #4CC38A; }} .sel.lost::before {{ background: #E5544B; }} .sel.void::before {{ background: #93AFA3; }}
.crests {{ display: flex; flex: none; }}
.crest {{ width: {64 if story else 42}px; height: {64 if story else 42}px; border-radius: 50%; background: #F4F6F2; display: grid; place-items: center; overflow: hidden;
  box-shadow: 0 0 0 3px #17382D, 0 4px 10px rgba(0,0,0,.25); }}
.crest + .crest {{ margin-left: -{16 if story else 12}px; }}
.crest img {{ width: 72%; height: 72%; object-fit: contain; }}
.crest.ph {{ background: #2A5244; color: #EEF3EE; font-family: Oswald; font-weight: 600; font-size: {28 if story else 20}px; }}
.info {{ flex: 1; min-width: 0; }}
.teams {{ font-size: {36 if story else 24}px; font-weight: 800; letter-spacing: -.01em; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }}
.teams i {{ font-style: normal; color: #93AFA3; font-weight: 500; }}
.meta {{ margin-top: {6 if story else 3}px; font-size: {24 if story else 16}px; color: #93AFA3; font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }}
.meta b {{ color: #C9D6CF; font-weight: 700; margin-left: 8px; }}
.pick {{ flex: none; display: flex; align-items: center; gap: {16 if story else 12}px; max-width: {330 if story else 250}px; }}
.pick span {{ font-size: {26 if story else 17}px; font-weight: 800; color: #F2C230; text-align: right; line-height: 1.2; }}
.pick b {{ flex: none; min-width: {110 if story else 76}px; height: {64 if story else 44}px; padding: 0 14px; border-radius: {16 if story else 12}px; display: grid; place-items: center;
  font-family: Oswald; font-weight: 600; font-size: {38 if story else 26}px; background: rgba(0,0,0,.28); border: 1px solid rgba(255,255,255,.08); }}
.more {{ font-size: {26 if story else 17}px; color: #93AFA3; font-weight: 700; padding-left: 8px; }}
.panel {{ flex: none; {'' if story else 'width: 336px;'} border-radius: 28px; padding: {44 if story else 30}px {44 if story else 28}px;
  background: linear-gradient(180deg, rgba(255,255,255,.08), rgba(255,255,255,.04)); border: 1px solid rgba(255,255,255,.09); box-shadow: 0 20px 40px rgba(0,0,0,.25);
  display: flex; flex-direction: column; justify-content: center; gap: {34 if story else 30}px; }}
.status {{ align-self: {'flex-start' if story else 'center'}; display: inline-flex; align-items: center; gap: 12px; padding: {14 if story else 10}px {28 if story else 22}px; border-radius: 999px;
  font-family: Oswald; font-weight: 600; font-size: {44 if story else 30}px; letter-spacing: .04em; text-transform: uppercase; border: 2px solid currentColor; }}
.status::before {{ content: ""; width: {16 if story else 12}px; height: {16 if story else 12}px; border-radius: 50%; background: currentColor; box-shadow: 0 0 0 6px rgba(255,255,255,.06); }}
.status.open {{ color: #EEF3EE; }} .status.won {{ color: #4CC38A; background: rgba(76,195,138,.12); }} .status.lost {{ color: #E5544B; background: rgba(229,84,75,.12); }} .status.void {{ color: #93AFA3; }}
.nums {{ display: grid; {'grid-template-columns: 1.1fr 1.2fr .8fr; gap: 24px; align-items: end;' if story else 'gap: 22px;'} }}
.num {{ display: flex; flex-direction: column; gap: 6px; {'' if story else 'align-items: center; text-align: center;'} }}
.num span {{ font-size: {24 if story else 16}px; color: #93AFA3; font-weight: 700; }}
.num b {{ font-family: Oswald; font-weight: 600; font-size: {84 if story else 60}px; line-height: 1; }}
.num.gold b {{ color: #F2C230; }}
.num.small b {{ font-size: {56 if story else 34}px; color: #C9D6CF; }}
.hr {{ height: 1px; background: rgba(255,255,255,.1); {'display:none;' if story else ''} }}
'''
    brand = f'''<div class="brand"><div class="logo"><img src="data:image/png;base64,{A["logo"]}"><span>Winly</span></div>
  <div class="user"><span class="av">{av_html}</span><span>@{e(t.user.username)}</span></div></div>'''
    nums = f'''<div class="nums">
  <div class="num gold"><span>{e(L["odds"])}</span><b>{total}</b></div>
  {'' if story else '<div class="hr"></div>'}
  <div class="num"><span>{e(win_lab)}</span><b>{win}</b></div>
  {'' if not story else f'<div class="num small"><span>{e(L["stake"])}</span><b>{stake}</b></div>'}
</div>'''
    panel = f'<div class="panel"><div class="status {status[0]}">{e(status[1])}</div>{nums}</div>'
    body = (f'<div class="left">{brand}<div class="list">{"".join(rows)}</div></div>{panel}' if not story
            else f'{brand}<div class="smain">{panel}<div class="list">{"".join(rows)}</div></div>')
    return f'''<!doctype html><html><head><meta charset="utf-8"><style>{css}</style></head>
<body><img class="wm" src="data:image/png;base64,{A["logo"]}"><div class="card">{body}</div></body></html>'''


_browser = None
_lock = asyncio.Lock()


async def _get_browser():
    global _browser
    if _browser is None or not _browser.is_connected():
        from playwright.async_api import async_playwright
        pw = await async_playwright().start()
        _browser = await pw.chromium.launch(args=["--no-sandbox", "--disable-dev-shm-usage", "--allow-file-access-from-files"])
    return _browser


async def render_png(t: Ticket, lang: str, fmt: str) -> bytes | None:
    os.makedirs(CACHE, exist_ok=True)
    path = os.path.join(CACHE, f"t{t.id}_{_key(t, lang, fmt)}.png")
    if os.path.exists(path):
        with open(path, "rb") as f:
            return f.read()
    W, H = (1080, 1920) if fmt == "story" else (1200, 630)
    doc = build_html(t, lang, fmt)
    async with _lock:
        try:
            b = await _get_browser()
            page = await b.new_page(viewport={"width": W, "height": H}, device_scale_factor=1)
            try:
                tmp = os.path.join(CACHE, f"_t{t.id}_{fmt}_{lang}.html")
                with open(tmp, "w", encoding="utf-8") as f:
                    f.write(doc)
                await page.goto(f"file://{tmp}", wait_until="load", timeout=8000)
                try:
                    await page.wait_for_load_state("networkidle", timeout=3000)
                except Exception:  # noqa
                    pass
                png = await page.screenshot(type="png", clip={"x": 0, "y": 0, "width": W, "height": H})
            finally:
                await page.close()
        except Exception:  # noqa
            return None
    with open(path, "wb") as f:
        f.write(png)
    return png
