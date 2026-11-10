from datetime import datetime, timezone
from sqlalchemy import (String, Integer, Float, Boolean, DateTime, ForeignKey, Text, JSON,
                        UniqueConstraint, Index)
from sqlalchemy.orm import Mapped, mapped_column, relationship
from .db import Base


def now():
    return datetime.now(timezone.utc).replace(tzinfo=None)


class Team(Base):
    __tablename__ = "teams"
    id: Mapped[int] = mapped_column(primary_key=True)
    sport: Mapped[str] = mapped_column(String(16), index=True)
    ext: Mapped[str] = mapped_column(String(64), unique=True)
    name: Mapped[str] = mapped_column(String(128))
    short_name: Mapped[str] = mapped_column(String(64), default="")
    logo: Mapped[str] = mapped_column(String(512), default="")
    country: Mapped[str] = mapped_column(String(8), default="")
    is_serbian: Mapped[bool] = mapped_column(Boolean, default=False, index=True)


class League(Base):
    __tablename__ = "leagues"
    id: Mapped[int] = mapped_column(primary_key=True)
    sport: Mapped[str] = mapped_column(String(16))
    ext: Mapped[str] = mapped_column(String(64), unique=True)
    name: Mapped[str] = mapped_column(String(128))
    country: Mapped[str] = mapped_column(String(8), default="")
    priority: Mapped[int] = mapped_column(Integer, default=50)


class Match(Base):
    __tablename__ = "matches"
    id: Mapped[int] = mapped_column(primary_key=True)
    sport: Mapped[str] = mapped_column(String(16), index=True)
    ext: Mapped[str] = mapped_column(String(64), unique=True)
    league_id: Mapped[int] = mapped_column(ForeignKey("leagues.id"))
    home_id: Mapped[int] = mapped_column(ForeignKey("teams.id"))
    away_id: Mapped[int] = mapped_column(ForeignKey("teams.id"))
    start: Mapped[datetime] = mapped_column(DateTime, index=True)
    status: Mapped[str] = mapped_column(String(16), default="scheduled", index=True)
    minute: Mapped[str] = mapped_column(String(16), default="")
    score_home: Mapped[int | None] = mapped_column(Integer, nullable=True)
    score_away: Mapped[int | None] = mapped_column(Integer, nullable=True)
    reg_home: Mapped[int | None] = mapped_column(Integer, nullable=True)
    reg_away: Mapped[int | None] = mapped_column(Integer, nullable=True)
    odds: Mapped[dict] = mapped_column(JSON, default=dict)
    odds_updated: Mapped[datetime | None] = mapped_column(DateTime, nullable=True)
    featured: Mapped[bool] = mapped_column(Boolean, default=False)
    is_derby: Mapped[bool] = mapped_column(Boolean, default=False, index=True)
    analysis_sr: Mapped[str] = mapped_column(Text, default="")
    analysis_ru: Mapped[str] = mapped_column(Text, default="")
    analysis_at: Mapped[datetime | None] = mapped_column(DateTime, nullable=True)
    settled: Mapped[bool] = mapped_column(Boolean, default=False, index=True)
    updated_at: Mapped[datetime] = mapped_column(DateTime, default=now, onupdate=now)

    league = relationship("League", lazy="joined")
    home = relationship("Team", foreign_keys=[home_id], lazy="joined")
    away = relationship("Team", foreign_keys=[away_id], lazy="joined")


class User(Base):
    __tablename__ = "users"
    id: Mapped[int] = mapped_column(primary_key=True)
    username: Mapped[str] = mapped_column(String(32), unique=True)
    email: Mapped[str] = mapped_column(String(160), unique=True)
    pw_hash: Mapped[str] = mapped_column(String(256))
    created_at: Mapped[datetime] = mapped_column(DateTime, default=now)
    lang: Mapped[str] = mapped_column(String(8), default="sr")
    fav_football_id: Mapped[int | None] = mapped_column(ForeignKey("teams.id"), nullable=True)
    fav_basket_id: Mapped[int | None] = mapped_column(ForeignKey("teams.id"), nullable=True)
    bank: Mapped[float] = mapped_column(Float, default=10000.0)
    is_admin: Mapped[bool] = mapped_column(Boolean, default=False)
    is_banned: Mapped[bool] = mapped_column(Boolean, default=False)
    tg_chat_id: Mapped[str] = mapped_column(String(32), default="")
    tg_code: Mapped[str] = mapped_column(String(32), default="")
    color: Mapped[str] = mapped_column(String(16), default="#2E7D5B")

    fav_football = relationship("Team", foreign_keys=[fav_football_id], lazy="joined")
    fav_basket = relationship("Team", foreign_keys=[fav_basket_id], lazy="joined")


class Prediction(Base):
    __tablename__ = "predictions"
    __table_args__ = (UniqueConstraint("user_id", "match_id"),)
    id: Mapped[int] = mapped_column(primary_key=True)
    user_id: Mapped[int] = mapped_column(ForeignKey("users.id"), index=True)
    match_id: Mapped[int] = mapped_column(ForeignKey("matches.id"), index=True)
    pick: Mapped[str] = mapped_column(String(4))
    odds: Mapped[float] = mapped_column(Float)
    stake: Mapped[float] = mapped_column(Float)
    comment: Mapped[str] = mapped_column(Text, default="")
    status: Mapped[str] = mapped_column(String(8), default="open", index=True)
    profit: Mapped[float] = mapped_column(Float, default=0.0)
    created_at: Mapped[datetime] = mapped_column(DateTime, default=now)
    settled_at: Mapped[datetime | None] = mapped_column(DateTime, nullable=True)

    user = relationship("User", lazy="joined")
    match = relationship("Match", lazy="joined")


class Ticket(Base):
    __tablename__ = "tickets"
    id: Mapped[int] = mapped_column(primary_key=True)
    user_id: Mapped[int] = mapped_column(ForeignKey("users.id"), index=True)
    stake: Mapped[float] = mapped_column(Float)
    total_odds: Mapped[float] = mapped_column(Float)
    status: Mapped[str] = mapped_column(String(8), default="open", index=True)
    profit: Mapped[float] = mapped_column(Float, default=0.0)
    created_at: Mapped[datetime] = mapped_column(DateTime, default=now)
    settled_at: Mapped[datetime | None] = mapped_column(DateTime, nullable=True)
    user = relationship("User", lazy="joined")
    items = relationship("TicketItem", lazy="selectin", cascade="all, delete-orphan")


class TicketItem(Base):
    __tablename__ = "ticket_items"
    id: Mapped[int] = mapped_column(primary_key=True)
    ticket_id: Mapped[int] = mapped_column(ForeignKey("tickets.id"), index=True)
    match_id: Mapped[int] = mapped_column(ForeignKey("matches.id"), index=True)
    pick: Mapped[str] = mapped_column(String(4))
    odds: Mapped[float] = mapped_column(Float)
    status: Mapped[str] = mapped_column(String(8), default="open")
    match = relationship("Match", lazy="joined")


class ScorePick(Base):
    __tablename__ = "score_picks"
    __table_args__ = (UniqueConstraint("user_id", "match_id"),)
    id: Mapped[int] = mapped_column(primary_key=True)
    user_id: Mapped[int] = mapped_column(ForeignKey("users.id"), index=True)
    match_id: Mapped[int] = mapped_column(ForeignKey("matches.id"), index=True)
    home: Mapped[int] = mapped_column(Integer)
    away: Mapped[int] = mapped_column(Integer)
    points: Mapped[int] = mapped_column(Integer, default=0)
    created_at: Mapped[datetime] = mapped_column(DateTime, default=now)
    user = relationship("User", lazy="joined")


class Trend(Base):
    __tablename__ = "trends"
    id: Mapped[int] = mapped_column(primary_key=True)
    match_id: Mapped[int] = mapped_column(ForeignKey("matches.id"), index=True)
    pick: Mapped[str] = mapped_column(String(4))
    odds: Mapped[float] = mapped_column(Float, default=0)
    strength: Mapped[float] = mapped_column(Float, default=0)
    text_sr: Mapped[str] = mapped_column(Text)
    text_ru: Mapped[str] = mapped_column(Text)
    created_at: Mapped[datetime] = mapped_column(DateTime, default=now)
    match = relationship("Match", lazy="joined")


class Bookmaker(Base):
    __tablename__ = "bookmakers"
    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str] = mapped_column(String(64))
    url: Mapped[str] = mapped_column(String(512), default="")
    bonus_sr: Mapped[str] = mapped_column(Text, default="")
    bonus_ru: Mapped[str] = mapped_column(Text, default="")
    rating: Mapped[float] = mapped_column(Float, default=4.5)
    color: Mapped[str] = mapped_column(String(16), default="#F5C518")
    sort: Mapped[int] = mapped_column(Integer, default=0)
    active: Mapped[bool] = mapped_column(Boolean, default=True)


class Translation(Base):
    __tablename__ = "translations"
    id: Mapped[int] = mapped_column(primary_key=True)
    key: Mapped[str] = mapped_column(String(64), unique=True)
    text: Mapped[str] = mapped_column(Text)


class JobStatus(Base):
    __tablename__ = "job_status"
    name: Mapped[str] = mapped_column(String(32), primary_key=True)
    last_ok: Mapped[datetime | None] = mapped_column(DateTime, nullable=True)
    last_error: Mapped[str] = mapped_column(Text, default="")
    last_error_at: Mapped[datetime | None] = mapped_column(DateTime, nullable=True)
    info: Mapped[str] = mapped_column(Text, default="")


class TgSent(Base):
    __tablename__ = "tg_sent"
    key: Mapped[str] = mapped_column(String(96), primary_key=True)
    created_at: Mapped[datetime] = mapped_column(DateTime, default=now)


class Meta(Base):
    __tablename__ = "meta"
    key: Mapped[str] = mapped_column(String(64), primary_key=True)
    value: Mapped[str] = mapped_column(Text, default="")


Index("ix_pred_user_status", Prediction.user_id, Prediction.status)
