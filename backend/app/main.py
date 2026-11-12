import logging
import os
from fastapi.staticfiles import StaticFiles
from .config import MEDIA_DIR
from fastapi import FastAPI
from sqlalchemy import select
from .db import engine, Base, SessionLocal
from .models import Bookmaker
from . import api, admin, share, center, growth, emailauth, social_login

logging.basicConfig(level=logging.INFO)
app = FastAPI(title="Winly", docs_url=None, redoc_url=None)

SEED_BMS = [
    ("Mozzart", "https://www.mozzartbet.com/sr", "#F2C230"),
    ("MaxBet", "https://www.maxbet.rs", "#E5544B"),
    ("Meridian", "https://meridianbet.rs", "#4CC38A"),
    ("Soccerbet", "https://www.soccerbet.rs", "#3D8EF0"),
    ("Admiral", "https://www.admiralbet.rs", "#5B6CF0"),
    ("Oktagon", "https://www.oktagonbet.com", "#F08A3D"),
]


MIGRATIONS = [
    "ALTER TABLE predictions ALTER COLUMN pick TYPE VARCHAR(32)",
    "ALTER TABLE ticket_items ALTER COLUMN pick TYPE VARCHAR(32)",
    "ALTER TABLE trends ALTER COLUMN pick TYPE VARCHAR(32)",
    "ALTER TABLE users ADD COLUMN IF NOT EXISTS display_name VARCHAR(48) DEFAULT ''",
    "ALTER TABLE users ADD COLUMN IF NOT EXISTS bio TEXT DEFAULT ''",
    "ALTER TABLE users ADD COLUMN IF NOT EXISTS avatar VARCHAR(256) DEFAULT ''",
    "ALTER TABLE teams ADD COLUMN IF NOT EXISTS name_sr VARCHAR(128) DEFAULT ''",
    "ALTER TABLE teams ADD COLUMN IF NOT EXISTS name_cyr VARCHAR(128) DEFAULT ''",
    "ALTER TABLE teams ADD COLUMN IF NOT EXISTS name_ru VARCHAR(128) DEFAULT ''",
    "ALTER TABLE leagues ADD COLUMN IF NOT EXISTS name_sr VARCHAR(128) DEFAULT ''",
    "ALTER TABLE leagues ADD COLUMN IF NOT EXISTS name_ru VARCHAR(128) DEFAULT ''",
    "ALTER TABLE matches ADD COLUMN IF NOT EXISTS mb_id INTEGER",
    "ALTER TABLE matches ADD COLUMN IF NOT EXISTS live JSON",
    "CREATE INDEX IF NOT EXISTS ix_matches_mb_id ON matches (mb_id)",
    "ALTER TABLE matches ADD COLUMN IF NOT EXISTS x_id INTEGER",
    "CREATE INDEX IF NOT EXISTS ix_matches_x_id ON matches (x_id)",
    "ALTER TABLE highlights ADD COLUMN IF NOT EXISTS status VARCHAR(8) DEFAULT ''",
    "ALTER TABLE users ADD COLUMN IF NOT EXISTS ref_by INTEGER",
    "ALTER TABLE users ADD COLUMN IF NOT EXISTS email_verified BOOLEAN DEFAULT TRUE",
    "ALTER TABLE users ADD COLUMN IF NOT EXISTS daily_last VARCHAR(10) DEFAULT ''",
    "ALTER TABLE users ADD COLUMN IF NOT EXISTS daily_streak INTEGER DEFAULT 0",
    "ALTER TABLE users ADD COLUMN IF NOT EXISTS google_id VARCHAR(64)",
    "ALTER TABLE users ADD COLUMN IF NOT EXISTS fb_id VARCHAR(64)",  # accounts made before email codes count as verified
]


def migrate():
    Base.metadata.create_all(engine)
    if engine.dialect.name != "postgresql":
        return
    from sqlalchemy import text
    with engine.begin() as c:
        for q in MIGRATIONS:
            c.execute(text(q))


def _founders_backfill():
    from .db import SessionLocal
    from .models import User, Meta
    from sqlalchemy import select
    with SessionLocal() as db:
        if db.get(Meta, "founders_backfill"):
            return
        for u in db.scalars(select(User).where(User.is_admin == False).order_by(User.id).limit(100)).all():  # noqa
            u.bank += 2000
        db.add(Meta(key="founders_backfill", value="1"))
        db.commit()


@app.on_event("startup")
def startup():
    migrate()
    try:
        _seed_bookmakers()
    except Exception:  # noqa — two API workers start at once; the second one just skips
        pass
    try:
        _founders_backfill()
    except Exception:  # noqa — the other worker already did it
        pass


def _seed_bookmakers():
    with SessionLocal() as db:
        # seed the default bookmakers only once in the site's life: what the admin deletes stays deleted
        from .models import Meta
        seeded = db.get(Meta, "bm_seeded")
        if not seeded and db.scalar(select(Bookmaker)):
            db.add(Meta(key="bm_seeded", value="1"))
            db.commit()
        elif not seeded:
            db.add(Meta(key="bm_seeded", value="1"))
            for i, (n, url, col) in enumerate(SEED_BMS):
                db.add(Bookmaker(name=n, url=url, color=col, sort=i, rating=round(4.8 - i * 0.1, 1),
                                 bonus_sr="Bonus dobrodošlice za nove igrače. Uslove proveri na sajtu priređivača.",
                                 bonus_ru="Приветственный бонус для новых игроков. Условия — на сайте букмекера."))
            db.commit()


@app.get("/api/health")
def health():
    return {"ok": True, "app": "zicer"}


os.makedirs(MEDIA_DIR, exist_ok=True)
app.mount("/media", StaticFiles(directory=MEDIA_DIR), name="media")
app.include_router(api.router)
app.include_router(admin.router)
app.include_router(share.router)
app.include_router(center.router)
app.include_router(growth.router)
app.include_router(growth.adm)
app.include_router(emailauth.router)
app.include_router(emailauth.adm)
app.include_router(social_login.router)
app.include_router(social_login.adm)
