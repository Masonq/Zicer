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
        im.paste(lg, (int(x), int(round(cap_top))), lg)
        return w
    except Exception:  # noqa
        return 0


def _wordmark(im, d, x, y, size):
    """Logo + 'Winly', the logo exactly as tall as the capital letters and on the same line."""
    f = font("Oswald.ttf", size, "Bold")
    l, top, r, bottom = d.textbbox((0, 0), "W", font=f)  # cap box of the letter W
    cap_top, cap_h = y + top, bottom - top
    w = _paste_logo(im, x, cap_top, cap_h)
    d.text((x + w + size * 0.28, y), "Winly", font=f, fill=GOLD)


def _status(t, L):
    return {"won": (L["won"], WIN), "lost": (L["lost"], LOSS), "void": (L["void"], MUTED)}.get(t.status, (L["open"], CHALK))


def render_ticket(t: Ticket, lang: str = "sr", fmt: str = "wide") -> bytes:
    L = TXT.get(lang, TXT["sr"])
    story = fmt == "story"
    W, H = (1080, 1920) if story else (1200, 630)
    im = Image.new("RGB", (W, H), BG)
    d = ImageDraw.Draw(im)
    # very soft light from the top-left corner (blurred, no visible edge)
    glow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    ImageDraw.Draw(glow).ellipse([-W * 0.5, -H * 0.6, W * 0.7, H * 0.5], fill=(242, 194, 48, 22))
    glow = glow.filter(ImageFilter.GaussianBlur(160))
    im.paste(glow, (0, 0), glow)
    d = ImageDraw.Draw(im)
    st_txt, st_col = _status(t, L)
    who = (t.user.display_name or t.user.username) if hasattr(t.user, "display_name") else t.user.username
    items = list(t.items)
    total = f"{t.total_odds:.2f}"
    win_val = f"{t.stake * t.total_odds:,.0f}".replace(",", ".")
    win_lab = L["win"] if t.status == "won" else L["pot"]
    if not story:
        _wordmark(im, d, 64, 52, 50)
        d.text((64, 124), f"{L['ticket']} @{t.user.username}", font=font("Manrope.ttf", 24, "SemiBold"), fill=MUTED)
        # right panel
        px = W - 360
        d.rounded_rectangle([px, 48, W - 48, H - 48], radius=28, fill=SURF)
        sf = font("Oswald.ttf", 64, "Bold")
        sw = d.textlength(st_txt, font=sf)
        cx = (px + W - 48) / 2
        d.rounded_rectangle([cx - sw / 2 - 26, 86, cx + sw / 2 + 26, 176], radius=20, outline=st_col, width=3)
        d.text((cx - sw / 2, 94), st_txt, font=sf, fill=st_col)
        lab = font("Manrope.ttf", 22, "SemiBold")
        big = font("Oswald.ttf", 70, "SemiBold")
        for i, (label, val, col) in enumerate(((L["odds"], total, GOLD), (win_lab, win_val, CHALK))):
            y = 230 + i * 150
            lw = d.textlength(label, font=lab)
            d.text((cx - lw / 2, y), label, font=lab, fill=MUTED)
            vw = d.textlength(val, font=big)
            d.text((cx - vw / 2, y + 32), val, font=big, fill=col)
        rows_x0, rows_x1, rows_top, rows_bottom, maxn = 64, px - 32, 180, H - 110, 5
    else:
        _wordmark(im, d, 80, 110, 74)
        d.text((80, 220), f"{L['ticket']} @{t.user.username}", font=font("Manrope.ttf", 34, "SemiBold"), fill=MUTED)
        sf = font("Oswald.ttf", 120, "Bold")
        d.text((80, 300), st_txt, font=sf, fill=st_col)
        lab = font("Manrope.ttf", 32, "SemiBold")
        big = font("Oswald.ttf", 110, "SemiBold")
        d.rounded_rectangle([80, 480, W - 80, 720], radius=34, fill=SURF)
        half = (W - 160) / 2
        for i, (label, val, col) in enumerate(((L["odds"], total, GOLD), (win_lab, win_val, CHALK))):
            cx = 80 + half * i + half / 2
            lw = d.textlength(label, font=lab)
            d.text((cx - lw / 2, 520), label, font=lab, fill=MUTED)
            vw = d.textlength(val, font=big)
            d.text((cx - vw / 2, 565), val, font=big, fill=col)
        d.line([80 + half, 510, 80 + half, 690], fill=LINE, width=3)
        rows_x0, rows_x1, rows_top, rows_bottom, maxn = 80, W - 80, 780, H - 220, 8
    # selections
    show = items[:maxn]
    gap = 14 if not story else 22
    row_h = min(96 if story else 74, int((rows_bottom - rows_top - gap * (len(show) - 1)) / max(1, len(show))))
    y = rows_top if story else rows_top + max(0, ((rows_bottom - rows_top) - (row_h * len(show) + gap * (len(show) - 1))) / 2)
    tf = font("Manrope.ttf", 34 if story else 26, "Bold")
    sub_f = font("Manrope.ttf", 24 if story else 18, "SemiBold")
    pf = font("Oswald.ttf", 40 if story else 30, "SemiBold")
    for it in show:
        m = it.match
        col = {"won": WIN, "lost": LOSS, "void": MUTED}.get(it.status, LINE)
        d.rounded_rectangle([rows_x0, y, rows_x1, y + row_h], radius=16, fill=SURF)
        d.rounded_rectangle([rows_x0, y, rows_x0 + 8, y + row_h], radius=4, fill=col)
        odds = f"{it.odds:.2f}"
        ow = d.textlength(odds, font=pf)
        pk = pick_text(it.pick, lang)
        pw = d.textlength(pk, font=pf)
        name_w = rows_x1 - rows_x0 - 48 - ow - pw - 60
        name = fit(d, f"{team_name(m.home, lang)} – {team_name(m.away, lang)}", tf, name_w)
        lg = m.league.name if m.league else ""
        if m.score_home is not None and m.status != "scheduled":
            lg = f"{lg}   {m.score_home}:{m.score_away}"
        has_sub = row_h >= (80 if story else 64)
        ty = y + (row_h - (34 if story else 26) - ((30 if story else 22) if has_sub else 0)) / 2 - 4
        d.text((rows_x0 + 30, ty), name, font=tf, fill=CHALK)
        if has_sub:
            d.text((rows_x0 + 30, ty + (44 if story else 34)), fit(d, lg, sub_f, name_w), font=sub_f, fill=MUTED)
        py = y + (row_h - (44 if story else 34)) / 2 - 4
        d.text((rows_x1 - 24 - ow - 24 - pw, py), pk, font=pf, fill=GOLD)
        d.text((rows_x1 - 24 - ow, py), odds, font=pf, fill=CHALK)
        y += row_h + gap
    if len(items) > maxn:
        d.text((rows_x0 + 30, y), L["more"].format(n=len(items) - maxn), font=sub_f, fill=MUTED)
    # footer
    host = config.PUBLIC_URL.replace("https://", "").replace("http://", "")
    ff = font("Manrope.ttf", 32 if story else 22, "SemiBold")
    fy = H - (120 if story else 80)
    d.text((rows_x0, fy), L["cta"], font=ff, fill=CHALK)
    d.text((rows_x0, fy + (44 if story else 30)), f"{host}/t/{t.id}", font=font("Manrope.ttf", 26 if story else 18, "Regular"), fill=MUTED)
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
