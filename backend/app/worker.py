"""Background loop: python -m app.worker"""
import logging
import time
from datetime import datetime
from .db import SessionLocal, engine, Base
from . import ingest

logging.basicConfig(level=logging.INFO, format="%(asctime)s %(levelname)s %(message)s")
log = logging.getLogger("zicer.worker")

SCHEDULE = [  # (name, fn, every_seconds)
    ("football_live", ingest.sync_football_live, 60),
    ("football", ingest.sync_football, 900),
    ("basketball", ingest.sync_basketball, 180),
    ("odds", ingest.sync_odds, 180),
    ("settle", ingest.settle, 60),
    ("trends", ingest.build_trends, 1800),
    ("analysis", ingest.build_analysis, 1800),
    ("tg_poll", ingest.tg_poll, 20),
    ("tg_reminders", ingest.tg_reminders, 300),
]


def main():
    Base.metadata.create_all(engine)
    last = {}
    with SessionLocal() as db:
        ingest.job(db, "football", ingest.sync_football)
        ingest.job(db, "basketball", ingest.sync_basketball)
        ingest.job(db, "backfill", ingest.backfill_football)
        for n in ("odds", "settle", "trends", "analysis"):
            ingest.job(db, n, dict((a, b) for a, b, _ in SCHEDULE)[n])
    t0 = time.time()
    for n, _, _ in SCHEDULE:
        last[n] = t0
    while True:
        for name, fn, every in SCHEDULE:
            if time.time() - last[name] >= every:
                last[name] = time.time()
                with SessionLocal() as db:
                    ingest.job(db, name, fn)
        time.sleep(5)


if __name__ == "__main__":
    main()
