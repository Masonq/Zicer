"""Background loop: python -m app.worker"""
import logging
import time
from datetime import datetime
from .db import SessionLocal, engine, Base
from . import ingest, logos, highlights, growth, pandascore

logging.basicConfig(level=logging.INFO, format="%(asctime)s %(levelname)s %(message)s")
log = logging.getLogger("zicer.worker")

SCHEDULE = [  # (name, fn, every_seconds)
    ("football_live", ingest.sync_football_live, 40),
    ("live", ingest.sync_live, 20),
    ("xfeed", ingest.sync_xfeed, 9),
    ("finish_stale", ingest.finish_stale, 60),
    ("logos", logos.sync_logos, 600),
    ("highlights", highlights.sync_highlights, 900),
    ("social", growth.social_job, 120),
    ("x22_line", ingest.sync_x22_line, 300),
    ("pandascore", pandascore.sync_pandascore, 900),
    ("football", ingest.sync_football, 900),
    ("basketball", ingest.sync_basketball, 180),
    ("basketball_week", ingest.sync_basketball_week, 1800),
    ("maxbet_results", ingest.sync_maxbet_results, 180),
    ("names", ingest.translate_names, 300),
    ("other_sports", ingest.sync_other_sports, 300),
    ("other_results", ingest.sync_other_results, 180),
    ("odds", ingest.sync_odds, 180),
    ("settle", ingest.settle, 60),
    ("tg_poll", ingest.tg_poll, 20),
    ("tg_reminders", ingest.tg_reminders, 300),
]


SLOW = {"names", "basketball_week", "football", "logos", "highlights", "x22_line", "pandascore"}
_running: set = set()


def _run_bg(name, fn):
    import threading

    def go():
        try:
            with SessionLocal() as db:
                ingest.job(db, name, fn)
        finally:
            _running.discard(name)
    _running.add(name)
    threading.Thread(target=go, daemon=True).start()


def main():
    from .main import migrate
    migrate()
    last = {}
    with SessionLocal() as db:
        ingest.job(db, "football", ingest.sync_football)
        ingest.job(db, "basketball", ingest.sync_basketball)
        ingest.job(db, "basketball_week", ingest.sync_basketball_week)
        ingest.job(db, "other_sports", ingest.sync_other_sports)
        ingest.job(db, "backfill", ingest.backfill_football)
        ingest.job(db, "logos", logos.sync_logos)
        ingest.job(db, "highlights", highlights.sync_highlights)
        ingest.job(db, "x22_line", ingest.sync_x22_line)
        for n in ("odds", "settle"):
            ingest.job(db, n, dict((a, b) for a, b, _ in SCHEDULE)[n])
    t0 = time.time()
    for n, _, _ in SCHEDULE:
        last[n] = t0
    while True:
        for name, fn, every in SCHEDULE:
            if time.time() - last[name] >= every:
                last[name] = time.time()
                if name in SLOW:
                    if name not in _running:
                        _run_bg(name, fn)
                    continue
                with SessionLocal() as db:
                    ingest.job(db, name, fn)
        time.sleep(5)


if __name__ == "__main__":
    main()
