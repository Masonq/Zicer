import logging
from fastapi import FastAPI
from sqlalchemy import select
from .db import engine, Base, SessionLocal
from .models import Bookmaker
from . import api, admin, share

logging.basicConfig(level=logging.INFO)
app = FastAPI(title="Zicer", docs_url=None, redoc_url=None)

SEED_BMS = [
    ("Mozzart", "https://www.mozzartbet.com/sr", "#F2C230"),
    ("MaxBet", "https://www.maxbet.rs", "#E5544B"),
    ("Meridian", "https://meridianbet.rs", "#4CC38A"),
    ("Soccerbet", "https://www.soccerbet.rs", "#3D8EF0"),
    ("Admiral", "https://www.admiralbet.rs", "#5B6CF0"),
    ("Oktagon", "https://www.oktagonbet.com", "#F08A3D"),
]


@app.on_event("startup")
def startup():
    Base.metadata.create_all(engine)
    with SessionLocal() as db:
        if not db.scalar(select(Bookmaker)):
            for i, (n, url, col) in enumerate(SEED_BMS):
                db.add(Bookmaker(name=n, url=url, color=col, sort=i, rating=round(4.8 - i * 0.1, 1),
                                 bonus_sr="Bonus dobrodošlice za nove igrače. Uslove proveri na sajtu priređivača.",
                                 bonus_ru="Приветственный бонус для новых игроков. Условия — на сайте букмекера."))
            db.commit()


@app.get("/api/health")
def health():
    return {"ok": True, "app": "zicer"}


app.include_router(api.router)
app.include_router(admin.router)
app.include_router(share.router)
