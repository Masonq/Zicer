import io
import os
from functools import lru_cache
from fastapi import APIRouter, Depends, HTTPException
from fastapi.responses import Response, HTMLResponse
from PIL import Image, ImageDraw, ImageFont, ImageFilter
from sqlalchemy.orm import Session

from . import config
from .db import get_db
from .models import Ticket

router = APIRouter()
FD = os.path.join(os.path.dirname(__file__), "fonts")
BG, SURF, LINE, CHALK, MUTED, GOLD, WIN, LOSS = "#0F2A22", "#16382D", "#2A5244", "#EEF3EE", "#93AFA3", "#F2C230", "#4CC38A", "#E5544B"


@lru_cache(maxsize=32)
def font(name: str, size: int, weight: str = "Regular"):
    f = ImageFont.truetype(os.path.join(FD, name), size)
    try:
        f.set_variation_by_name(weight)
    except Exception:  # noqa
        pass
    return f


def fit(draw, text, f, maxw):
    if draw.textlength(text, font=f) <= maxw:
        return text
    while text and draw.textlength(text + "…", font=f) > maxw:
        text = text[:-1]
    return text + "…"


TXT = {
    "sr": {"ticket": "Tiket", "won": "PROŠAO", "lost": "PAO", "void": "VRAĆEN", "open": "U IGRI", "odds": "Ukupna kvota",
           "win": "Dobitak", "pot": "Mogući dobitak", "stake": "Ulog", "more": "+ još {n}", "cta": "Napravi svoj tiket", "events": "{n} događaja"},
    "cyr": {"ticket": "Тикет", "won": "ПРОШАО", "lost": "ПАО", "void": "ВРАЋЕН", "open": "У ИГРИ", "odds": "Укупна квота",
            "win": "Добитак", "pot": "Могући добитак", "stake": "Улог", "more": "+ још {n}", "cta": "Направи свој тикет", "events": "{n} догађаја"},
    "ru": {"ticket": "Тикет", "won": "ЗАШЁЛ", "lost": "НЕ ЗАШЁЛ", "void": "ВОЗВРАТ", "open": "В ИГРЕ", "odds": "Общий коэффициент",
           "win": "Выигрыш", "pot": "Возможный выигрыш", "stake": "Ставка", "more": "+ ещё {n}", "cta": "Собери свой тикет", "events": "{n} событий"},
}


def team_name(team, lang):
    if lang == "ru":
        return team.name_ru or team.short_name or team.name
    if lang == "cyr":
        return team.name_cyr or team.name_sr or team.short_name or team.name
    return team.name_sr or team.short_name or team.name


def league_name(lg, lang):
    if lang == "ru":
        return getattr(lg, "name_ru", "") or lg.name
    return getattr(lg, "name_sr", "") or lg.name


def pick_text(key: str, lang: str) -> str:
    ru, sr = lang == "ru", lang != "ru"
    k = key or ""
    if k in ("1", "X", "2", "1X", "12", "X2"):
        return k
    simple = {"GG": ("Обе забьют", "GG"), "NG": ("Обе не забьют", "NG"), "DNB1": ("Победа 1 (без ничьей)", "1 bez nerešenog"), "DNB2": ("Победа 2 (без ничьей)", "2 bez nerešenog")}
    if k in simple:
        return simple[k][0] if ru else simple[k][1]
    parts = k.split(":")
    if parts[0] in ("O", "U") and len(parts) == 2:
        return (("Больше " if parts[0] == "O" else "Меньше ") if ru else ("Više " if parts[0] == "O" else "Manje ")) + parts[1]
    if parts[0] == "CS" and len(parts) == 3:
        return ("Счёт " if ru else "Tačan rezultat ") + f"{parts[1]}:{parts[2]}"
    if parts[0] in ("AH1", "AH2", "EH1", "EH2", "EHX") and len(parts) == 2:
        side = {"AH1": "1", "AH2": "2", "EH1": "1", "EH2": "2", "EHX": "X"}[parts[0]]
        return (f"Фора {side} ({parts[1]})" if ru else f"Hendikep {side} ({parts[1]})")
    if k.startswith("G") and len(k) > 1:
        return (("Голы " if ru else "Golovi ") + k[1:])
    return k


def _paste_logo(im, x, cap_top, cap_h):
    try:
        lg = Image.open(os.path.join(FD, "logo-tight.png")).convert("RGBA")
        h = int(round(cap_h))
        w = int(round(lg.width * h / lg.height))
        lg = lg.resize((w, h), Image.LANCZOS)
        im.paste(lg, (int(round(x)), int(round(cap_top))), lg)
        return w
    except Exception:  # noqa
        return 0


def ink(d, text, f):
    """Real ink box of a text (left, top, right, bottom) relative to the draw origin."""
    return d.textbbox((0, 0), text, font=f)


def text_at(d, text, f, fill, *, left=None, cx=None, right=None, top=None, cy=None):
    """Place text by its visible ink: exact left/centre/right and top/vertical centre."""
    l, t, r, b = ink(d, text, f)
    w, h = r - l, b - t
    x = left - l if left is not None else (cx - w / 2 - l if cx is not None else right - w - l)
    y = top - t if top is not None else cy - h / 2 - t
    d.text((x, y), text, font=f, fill=fill)
    return w, h


def _wordmark(im, d, x, cap_top, size):
    """Logo + 'Winly': the logo exactly as tall as the capital letters, on the same line."""
    f = font("Oswald.ttf", size, "Bold")
    l, t, r, b = ink(d, "W", f)
    cap_h = b - t
    w = _paste_logo(im, x, cap_top, cap_h)
    text_at(d, "Winly", f, GOLD, left=x + w + size * 0.26, top=cap_top)
    return cap_h


def _status(t, L):
    return {"won": (L["won"], WIN), "lost": (L["lost"], LOSS), "void": (L["void"], MUTED)}.get(t.status, (L["open"], CHALK))


def _rows(d, items, lang, x0, x1, top, bottom, story, L, center=True):
    maxn = 8 if story else 5
    show = items[:maxn]
    gap = 20 if story else 12
    row_h = min(104 if story else 76, int((bottom - top - gap * (len(show) - 1)) / max(1, len(show))))
    used = row_h * len(show) + gap * (len(show) - 1)
    y = top + ((bottom - top - used) / 2 if center else 0)
    tf = font("Manrope.ttf", 34 if story else 25, "Bold")
    sf = font("Manrope.ttf", 24 if story else 17, "SemiBold")
    pf = font("Oswald.ttf", 40 if story else 29, "SemiBold")
    pad = 30 if story else 24
    for it in show:
        m = it.match
        col = {"won": WIN, "lost": LOSS, "void": MUTED}.get(it.status, LINE)
        d.rounded_rectangle([x0, y, x1, y + row_h], radius=16, fill=SURF)
        d.rounded_rectangle([x0, y, x0 + 7, y + row_h], radius=3, fill=col)
        cy = y + row_h / 2
        odds = f"{it.odds:.2f}"
        pk = pick_text(it.pick, lang)
        ow = ink(d, odds, pf)[2] - ink(d, odds, pf)[0]
        pw = ink(d, pk, pf)[2] - ink(d, pk, pf)[0]
        text_at(d, odds, pf, CHALK, right=x1 - pad, cy=cy)
        text_at(d, pk, pf, GOLD, right=x1 - pad - ow - 22, cy=cy)
        name_w = x1 - x0 - pad * 2 - ow - pw - 50
        name = fit(d, f"{team_name(m.home, lang)} – {team_name(m.away, lang)}", tf, name_w)
        lg = league_name(m.league, lang) if m.league else ""
        if m.score_home is not None and m.status != "scheduled":
            lg = f"{lg}  {m.score_home}:{m.score_away}"
        lg = fit(d, lg, sf, name_w)
        # name + league as one block, centred in the row by their ink
        nh = ink(d, "Ag", tf)[3] - ink(d, "Ag", tf)[1]
        lh = ink(d, "Ag", sf)[3] - ink(d, "Ag", sf)[1]
        inner = 8 if story else 6
        block = nh + inner + lh
        bt = cy - block / 2
        n_top = bt - (ink(d, "Ag", tf)[1] - ink(d, name, tf)[1]) if False else bt
        text_at(d, name, tf, CHALK, left=x0 + pad, top=n_top + (ink(d, name, tf)[1] - ink(d, "Ag", tf)[1]))
        text_at(d, lg, sf, MUTED, left=x0 + pad, top=bt + nh + inner + (ink(d, lg, sf)[1] - ink(d, "Ag", sf)[1]))
        y += row_h + gap
    if len(items) > maxn:
        text_at(d, L["more"].format(n=len(items) - maxn), sf, MUTED, left=x0 + pad, top=y)


def render_ticket(t: Ticket, lang: str = "sr", fmt: str = "wide") -> bytes:
    L = TXT.get(lang, TXT["sr"])
    story = fmt == "story"
    W, H = (1080, 1920) if story else (1200, 630)
    im = Image.new("RGB", (W, H), BG)
    glow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    ImageDraw.Draw(glow).ellipse([-W * 0.5, -H * 0.6, W * 0.7, H * 0.5], fill=(242, 194, 48, 22))
    glow = glow.filter(ImageFilter.GaussianBlur(160))
    im.paste(glow, (0, 0), glow)
    d = ImageDraw.Draw(im)
    st_txt, st_col = _status(t, L)
    items = list(t.items)
    total = f"{t.total_odds:.2f}"
    win_val = f"{t.stake * t.total_odds:,.0f}".replace(",", ".")
    win_lab = L["win"] if t.status == "won" else L["pot"]
    host = config.PUBLIC_URL.replace("https://", "").replace("http://", "")
    M = 48
    if not story:
        # right panel
        px0, px1 = W - 372, W - M
        d.rounded_rectangle([px0, M, px1, H - M], radius=28, fill=SURF)
        pcx = (px0 + px1) / 2
        # header line: logo cap top == status pill top, both 32 px below the panel top
        head_top = M + 32
        TX = M + 24  # text column = the text inside the rows
        cap = _wordmark(im, d, TX, head_top, 50)
        sf = font("Oswald.ttf", 56, "Bold")
        sw, sh = ink(d, st_txt, sf)[2] - ink(d, st_txt, sf)[0], ink(d, st_txt, sf)[3] - ink(d, st_txt, sf)[1]
        pill_h = sh + 34
        d.rounded_rectangle([pcx - sw / 2 - 28, head_top, pcx + sw / 2 + 28, head_top + pill_h], radius=18, outline=st_col, width=3)
        text_at(d, st_txt, sf, st_col, cx=pcx, cy=head_top + pill_h / 2)
        user_f = font("Manrope.ttf", 23, "SemiBold")
        text_at(d, f"{L['ticket']} @{t.user.username}", user_f, MUTED, left=TX, top=head_top + cap + 16)
        # odds / win: two equal blocks under the pill, label and value centred by ink
        lab = font("Manrope.ttf", 21, "SemiBold")
        big = font("Oswald.ttf", 66, "SemiBold")
        area_top, area_bot = head_top + pill_h + 34, H - M - 30
        blk = (area_bot - area_top) / 2
        for i, (label, val, colr) in enumerate(((L["odds"], total, GOLD), (win_lab, win_val, CHALK))):
            b0 = area_top + blk * i
            lh = ink(d, label, lab)[3] - ink(d, label, lab)[1]
            vh = ink(d, "0", big)[3] - ink(d, "0", big)[1]
            gap = 16
            top = b0 + (blk - (lh + gap + vh)) / 2
            text_at(d, label, lab, MUTED, cx=pcx, top=top)
            text_at(d, val, big, colr, cx=pcx, top=top + lh + gap + (ink(d, val, big)[1] - ink(d, "0", big)[1]))
        if blk:
            d.line([px0 + 40, area_top + blk, px1 - 40, area_top + blk], fill=LINE, width=2)
        # footer, its last line on the panel's inner bottom
        ff, uf = font("Manrope.ttf", 22, "SemiBold"), font("Manrope.ttf", 18, "Regular")
        url = f"{host}/t/{t.id}"
        uh = ink(d, url, uf)[3] - ink(d, url, uf)[1]
        fh = ink(d, L["cta"], ff)[3] - ink(d, L["cta"], ff)[1]
        url_top = H - M - 32 - uh
        text_at(d, url, uf, MUTED, left=TX, top=url_top)
        text_at(d, L["cta"], ff, CHALK, left=TX, top=url_top - 10 - fh)
        _rows(d, items, lang, M, px0 - 28, head_top + cap + 64, url_top - fh - 34, False, L)
    else:
        X0, X1 = 80, W - 80
        TX = X0 + 30
        cap = _wordmark(im, d, TX, 110, 74)
        text_at(d, f"{L['ticket']} @{t.user.username}", font("Manrope.ttf", 34, "SemiBold"), MUTED, left=TX, top=110 + cap + 22)
        sf = font("Oswald.ttf", 120, "Bold")
        text_at(d, st_txt, sf, st_col, left=TX, top=300)
        box_top, box_h = 470, 230
        d.rounded_rectangle([X0, box_top, X1, box_top + box_h], radius=34, fill=SURF)
        half = (X1 - X0) / 2
        lab = font("Manrope.ttf", 30, "SemiBold")
        big = font("Oswald.ttf", 100, "SemiBold")
        for i, (label, val, colr) in enumerate(((L["odds"], total, GOLD), (win_lab, win_val, CHALK))):
            cx = X0 + half * i + half / 2
            lh = ink(d, label, lab)[3] - ink(d, label, lab)[1]
            vh = ink(d, "0", big)[3] - ink(d, "0", big)[1]
            top = box_top + (box_h - (lh + 22 + vh)) / 2
            text_at(d, label, lab, MUTED, cx=cx, top=top)
            text_at(d, val, big, colr, cx=cx, top=top + lh + 22 + (ink(d, val, big)[1] - ink(d, "0", big)[1]))
        d.line([X0 + half, box_top + 36, X0 + half, box_top + box_h - 36], fill=LINE, width=3)
        _rows(d, items, lang, X0, X1, box_top + box_h + 60, H - 300, True, L, center=False)
        ff, uf = font("Manrope.ttf", 40, "Bold"), font("Manrope.ttf", 28, "Regular")
        text_at(d, L["cta"], ff, CHALK, left=TX, top=H - 200)
        text_at(d, f"{host}/t/{t.id}", uf, MUTED, left=TX, top=H - 140)
    buf = io.BytesIO()
    im.save(buf, "PNG", optimize=True)
    return buf.getvalue()


@router.get("/api/share/ticket/{tid}.png")
def ticket_png(tid: int, lang: str = "sr", f: str = "wide", db: Session = Depends(get_db)):
    t = db.get(Ticket, tid)
    if not t:
        raise HTTPException(404)
    lang = lang if lang in TXT else "sr"
    return Response(render_ticket(t, lang, "story" if f == "story" else "wide"), media_type="image/png", headers={"Cache-Control": "public, max-age=120"})


@router.get("/t/{tid}", response_class=HTMLResponse)
def ticket_share_page(tid: int, db: Session = Depends(get_db)):
    t = db.get(Ticket, tid)
    if not t:
        raise HTTPException(404)
    st = {"won": "Prošao", "lost": "Pao", "void": "Vraćen"}.get(t.status, "U igri")
    title = f"Tiket @{t.user.username}: kvota {t.total_odds:.2f} ({st})"
    img = f"{config.PUBLIC_URL}/api/share/ticket/{tid}.png?s={t.status}"
    url = f"{config.PUBLIC_URL}/tiket/{tid}"
    return f"""<!doctype html><html lang="sr"><head><meta charset="utf-8"><title>{title}</title>
<meta property="og:title" content="{title}"><meta property="og:description" content="Winly — liga prognoza. Napravi svoj tiket.">
<meta property="og:image" content="{img}"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">
<meta property="og:url" content="{url}"><meta name="twitter:card" content="summary_large_image">
<meta http-equiv="refresh" content="0;url={url}"></head><body><a href="{url}">{title}</a></body></html>"""
