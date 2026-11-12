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
    name_sr: Mapped[str] = mapped_column(String(128), default="")
    name_cyr: Mapped[str] = mapped_column(String(128), default="")
    name_ru: Mapped[str] = mapped_column(String(128), default="")


class League(Base):
    __tablename__ = "leagues"
    id: Mapped[int] = mapped_column(primary_key=True)
    sport: Mapped[str] = mapped_column(String(16))
    ext: Mapped[str] = mapped_column(String(64), unique=True)
    name: Mapped[str] = mapped_column(String(128))
    country: Mapped[str] = mapped_column(String(8), default="")
    priority: Mapped[int] = mapped_column(Integer, default=50)
    name_sr: Mapped[str] = mapped_column(String(128), default="")
    name_ru: Mapped[str] = mapped_column(String(128), default="")


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
    mb_id: Mapped[int | None] = mapped_column(Integer, nullable=True, index=True)
    x_id: Mapped[int | None] = mapped_column(Integer, nullable=True, index=True)
    live: Mapped[dict] = mapped_column(JSON, default=dict)
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
    display_name: Mapped[str] = mapped_column(String(48), default="")
    bio: Mapped[str] = mapped_column(Text, default="")
    avatar: Mapped[str] = mapped_column(String(256), default="")
    ref_by: Mapped[int | None] = mapped_column(Integer, nullable=True)
    email_verified: Mapped[bool] = mapped_column(Boolean, default=False)
    daily_last: Mapped[str] = mapped_column(String(10), default="")  # Belgrade date of the last daily bonus
    daily_streak: Mapped[int] = mapped_column(Integer, default=0)

    fav_football = relationship("Team", foreign_keys=[fav_football_id], lazy="joined")
    fav_basket = relationship("Team", foreign_keys=[fav_basket_id], lazy="joined")


class Prediction(Base):
    __tablename__ = "predictions"
    __table_args__ = (UniqueConstraint("user_id", "match_id"),)
    id: Mapped[int] = mapped_column(primary_key=True)
    user_id: Mapped[int] = mapped_column(ForeignKey("users.id"), index=True)
    match_id: Mapped[int] = mapped_column(ForeignKey("matches.id"), index=True)
    pick: Mapped[str] = mapped_column(String(32))
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
    pick: Mapped[str] = mapped_column(String(32))
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
    pick: Mapped[str] = mapped_column(String(32))
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



class Banner(Base):
    """Promo / raffle banners shown in the home carousel between the matches of the day."""
    __tablename__ = "banners"
    id: Mapped[int] = mapped_column(primary_key=True)
    kind: Mapped[str] = mapped_column(String(16), default="promo")  # promo | raffle | news
    title_sr: Mapped[str] = mapped_column(String(120), default="")
    title_ru: Mapped[str] = mapped_column(String(120), default="")
    text_sr: Mapped[str] = mapped_column(String(300), default="")
    text_ru: Mapped[str] = mapped_column(String(300), default="")
    cta_sr: Mapped[str] = mapped_column(String(40), default="")
    cta_ru: Mapped[str] = mapped_column(String(40), default="")
    link: Mapped[str] = mapped_column(String(500), default="")
    image: Mapped[str] = mapped_column(String(200), default="")
    starts_at: Mapped[datetime | None] = mapped_column(DateTime, nullable=True)
    ends_at: Mapped[datetime | None] = mapped_column(DateTime, nullable=True)
    position: Mapped[int] = mapped_column(Integer, default=0)
    active: Mapped[bool] = mapped_column(Boolean, default=True)
    created_at: Mapped[datetime] = mapped_column(DateTime, default=now)



class Highlight(Base):
    """Official highlight videos (league YouTube channels) matched to finished matches."""
    __tablename__ = "highlights"
    id: Mapped[int] = mapped_column(primary_key=True)
    match_id: Mapped[int] = mapped_column(ForeignKey("matches.id", ondelete="CASCADE"), index=True)
    video_id: Mapped[str] = mapped_column(String(32), unique=True)
    title: Mapped[str] = mapped_column(String(300), default="")
    channel: Mapped[str] = mapped_column(String(80), default="")
    published: Mapped[datetime] = mapped_column(DateTime, default=now)
    status: Mapped[str] = mapped_column(String(8), default="")  # "" not checked yet, "ok" plays in Serbia, "blocked"



class OddsSnap(Base):
    """1-X-2 line history, written when the line moves (for line-movement trends)."""
    __tablename__ = "odds_snaps"
    id: Mapped[int] = mapped_column(primary_key=True)
    match_id: Mapped[int] = mapped_column(ForeignKey("matches.id", ondelete="CASCADE"), index=True)
    ts: Mapped[datetime] = mapped_column(DateTime, default=now, index=True)
    o1: Mapped[float | None] = mapped_column(Float, nullable=True)
    ox: Mapped[float | None] = mapped_column(Float, nullable=True)
    o2: Mapped[float | None] = mapped_column(Float, nullable=True)



class PageView(Base):
    """Own privacy-friendly analytics: one row per page opened in the app."""
    __tablename__ = "page_views"
    id: Mapped[int] = mapped_column(primary_key=True)
    ts: Mapped[datetime] = mapped_column(DateTime, default=now, index=True)
    sid: Mapped[str] = mapped_column(String(40), default="", index=True)
    path: Mapped[str] = mapped_column(String(300), default="")
    source: Mapped[str] = mapped_column(String(80), default="direct", index=True)
    campaign: Mapped[str] = mapped_column(String(120), default="")
    user_id: Mapped[int | None] = mapped_column(Integer, nullable=True)
    first: Mapped[bool] = mapped_column(Boolean, default=False)


class BotHit(Base):
    """Search engine / link preview robots that fetched a page."""
    __tablename__ = "bot_hits"
    id: Mapped[int] = mapped_column(primary_key=True)
    ts: Mapped[datetime] = mapped_column(DateTime, default=now, index=True)
    bot: Mapped[str] = mapped_column(String(40), default="")
    path: Mapped[str] = mapped_column(String(300), default="")


class SocialPost(Base):
    """Generated posts for the Winly page/channels; sent automatically or copied by hand into groups."""
    __tablename__ = "social_posts"
    id: Mapped[int] = mapped_column(primary_key=True)
    created_at: Mapped[datetime] = mapped_column(DateTime, default=now, index=True)
    kind: Mapped[str] = mapped_column(String(24), default="")
    day: Mapped[str] = mapped_column(String(10), default="", index=True)
    text_sr: Mapped[str] = mapped_column(Text, default="")
    image: Mapped[str] = mapped_column(String(200), default="")
    link: Mapped[str] = mapped_column(String(400), default="")
    sent: Mapped[dict] = mapped_column(JSON, default=dict)  # channel -> "ok" / error text
    test: Mapped[bool] = mapped_column(Boolean, default=True)


class FbGroup(Base):
    __tablename__ = "fb_groups"
    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str] = mapped_column(String(160), default="")
    url: Mapped[str] = mapped_column(String(400), default="")
    topic: Mapped[str] = mapped_column(String(24), default="general")  # general|football|basketball|partizan|zvezda|betting
    every_days: Mapped[int] = mapped_column(Integer, default=3)
    last_posted: Mapped[datetime | None] = mapped_column(DateTime, nullable=True)
    posts: Mapped[int] = mapped_column(Integer, default=0)
    note: Mapped[str] = mapped_column(String(300), default="")



class EmailCode(Base):
    """One-time 6-digit codes sent by email (verify the address, reset the password)."""
    __tablename__ = "email_codes"
    id: Mapped[int] = mapped_column(primary_key=True)
    email: Mapped[str] = mapped_column(String(160), index=True)
    purpose: Mapped[str] = mapped_column(String(12), default="verify")
    code_hash: Mapped[str] = mapped_column(String(64))
    created_at: Mapped[datetime] = mapped_column(DateTime, default=now, index=True)
    expires_at: Mapped[datetime] = mapped_column(DateTime)
    attempts: Mapped[int] = mapped_column(Integer, default=0)
    used: Mapped[bool] = mapped_column(Boolean, default=False)
