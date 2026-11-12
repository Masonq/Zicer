"""Quick check before every commit: the main API pages answer 200 (a broken route must never reach the server)."""
import sys
from fastapi.testclient import TestClient
from sqlalchemy import select
from app.main import app
from app.db import SessionLocal
from app.models import Match

c = TestClient(app)
with SessionLocal() as db:
    ids = [m.id for m in db.scalars(select(Match).order_by(Match.id.desc()).limit(3)).all()]
paths = ["/api/health", "/api/home?tz=0&sport=all", "/api/matches?day=today&tz=0", "/api/ranking", "/api/sports?tz=0"] + [f"/api/matches/{i}" for i in ids]
bad = []
for p in paths:
    r = c.get(p)
    if r.status_code != 200:
        bad.append(f"{p} -> {r.status_code} {r.text[:120]}")
print("\n".join(bad) or f"smoke ok ({len(paths)} routes)")
sys.exit(1 if bad else 0)
