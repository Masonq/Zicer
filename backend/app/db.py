from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, DeclarativeBase
from .config import DATABASE_URL

kw = {"pool_pre_ping": True}
if DATABASE_URL.startswith("sqlite"):
    kw["connect_args"] = {"check_same_thread": False}
else:
    kw.update(pool_size=10, max_overflow=20)
engine = create_engine(DATABASE_URL, **kw)
SessionLocal = sessionmaker(bind=engine, autoflush=False, expire_on_commit=False)


class Base(DeclarativeBase):
    pass


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
