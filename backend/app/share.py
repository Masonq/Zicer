import io
import os
from functools import lru_cache
from fastapi import APIRouter, Depends, HTTPException
from fastapi.responses import Response, HTMLResponse
from PIL import Image, ImageDraw, ImageFont
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


def render_ticket(t: Ticket) -> bytes:
    W, H = 1200, 630
    im = Image.new("RGB", (W, H), BG)
    d = ImageDraw.Draw(im)
    # pitch lines
    d.rectangle([40, 40, W - 40, H - 40], outline=LINE, width=3)
    d.line([W - 330, 40, W - 330, H - 40], fill=LINE, width=3)
    d.text((80, 66), "ZICER", font=font("Oswald.ttf", 54, "Bold"), fill=GOLD)
    d.text((80, 132), f"tiket @{t.user.username}", font=font("Manrope.ttf", 26, "SemiBold"), fill=MUTED)
    status = {"won": ("PROŠAO", WIN), "lost": ("PAO", LOSS), "void": ("VRAĆEN", MUTED)}.get(t.status, ("U IGRI", CHALK))
    sf = font("Oswald.ttf", 92, "Bold")
    sw = d.textlength(status[0], font=sf)
    cx = W - 185
    d.text((cx - sw / 2, 150), status[0], font=sf, fill=status[1])
    lab = font("Manrope.ttf", 24, "SemiBold")
    big = font("Oswald.ttf", 64, "SemiBold")
    win_label = "Dobitak" if t.status == "won" else "Mogući dobitak"
    for i, (label, val) in enumerate((("Ukupna kvota", f"{t.total_odds:.2f}"), (win_label, f"{t.stake * t.total_odds:,.0f}".replace(",", ".")))):
        y = 300 + i * 120
        lw = d.textlength(label, font=lab)
        d.text((cx - lw / 2, y), label, font=lab, fill=MUTED)
        vw = d.textlength(val, font=big)
        d.text((cx - vw / 2, y + 30), val, font=big, fill=GOLD if i == 0 else CHALK)
    row_f = font("Manrope.ttf", 28, "Bold")
    pick_f = font("Oswald.ttf", 30, "SemiBold")
    items = t.items[:6]
    step = min(64, int(360 / max(1, len(items))))
    y = int(200 + (330 - step * len(items)) / 2)
    for it in items:
        m = it.match
        col = {"won": WIN, "lost": LOSS}.get(it.status, LINE)
        d.rounded_rectangle([80, y, 820, y + step - 12], radius=12, fill=SURF)
        d.rectangle([80, y, 88, y + step - 12], fill=col)
        name = fit(d, f"{m.home.short_name} – {m.away.short_name}", row_f, 520)
        ty = y + (step - 12 - 34) / 2
        d.text((108, ty), name, font=row_f, fill=CHALK)
        pk = {"1": "1", "X": "X", "2": "2"}[it.pick]
        d.text((660, ty - 2), pk, font=pick_f, fill=GOLD)
        ot = f"{it.odds:.2f}"
        d.text((800 - d.textlength(ot, font=pick_f), ty - 2), ot, font=pick_f, fill=CHALK)
        y += step
    if len(t.items) > 6:
        d.text((108, y), f"+ još {len(t.items) - 6}", font=lab, fill=MUTED)
    foot = font("Manrope.ttf", 24, "SemiBold")
    d.text((80, H - 92), "Napravi svoj tiket na Zicer", font=foot, fill=MUTED)
    buf = io.BytesIO()
    im.save(buf, "PNG", optimize=True)
    return buf.getvalue()


@router.get("/api/share/ticket/{tid}.png")
def ticket_png(tid: int, db: Session = Depends(get_db)):
    t = db.get(Ticket, tid)
    if not t:
        raise HTTPException(404)
    return Response(render_ticket(t), media_type="image/png", headers={"Cache-Control": "public, max-age=120"})


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
<meta property="og:title" content="{title}"><meta property="og:description" content="Zicer — liga prognoza. Napravi svoj tiket.">
<meta property="og:image" content="{img}"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">
<meta property="og:url" content="{url}"><meta name="twitter:card" content="summary_large_image">
<meta http-equiv="refresh" content="0;url={url}"></head><body><a href="{url}">{title}</a></body></html>"""
