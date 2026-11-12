from .models import Match, Team, User
from .sources.fotmob import NATIONS_SR


def iso(dt):
    return dt.isoformat() + "Z" if dt else None


def team_out(t: Team | None):
    if not t:
        return None
    if t.sport == "esports":  # team brands are written the same in every language (no transliteration, full name)
        return {"id": t.id, "name": t.name, "short": t.name, "logo": t.logo, "serbian": False, "sport": t.sport, "national": False,
                "names": {"sr": t.name, "cyr": t.name, "ru": t.name}}
    return {"id": t.id, "name": t.name, "short": t.short_name or t.name, "logo": t.logo, "serbian": t.is_serbian, "sport": t.sport,
            "national": t.name in NATIONS_SR,
            "names": {"sr": t.name_sr or "", "cyr": t.name_cyr or "", "ru": t.name_ru or ""}}


MAIN = ("1", "X", "2")


def best(m: Match, full: bool = False) -> dict:
    out = {}
    for bk, o in (m.odds or {}).items():
        if not isinstance(o, dict):
            continue
        for k, v in o.items():
            if not full and k not in MAIN:
                continue
            if v and v > out.get(k, (0, ""))[0]:
                out[k] = (v, bk)
    return {k: {"odds": v[0]} for k, v in out.items()}


def match_out(m: Match, extra: dict | None = None, full: bool = False) -> dict:
    d = {"id": m.id, "sport": m.sport, "league": {"id": m.league.id, "name": m.league.name, "country": m.league.country, "priority": m.league.priority,
                                              "names": ({"sr": m.league.name, "ru": m.league.name} if m.sport == "esports" else {"sr": m.league.name_sr or "", "ru": m.league.name_ru or ""})},
         "home": team_out(m.home), "away": team_out(m.away), "start": iso(m.start), "status": m.status,
         "minute": m.minute, "score": [m.score_home, m.score_away] if m.score_home is not None else None,
         "best": best(m, full), "derby": m.is_derby, "featured": m.featured}
    if extra:
        d.update(extra)
    return d


def avatar_url(u: User) -> str:
    return f"/media/avatars/{u.avatar}" if u.avatar else ""


def user_short(u: User) -> dict:
    return {"id": u.id, "username": u.username, "color": u.color, "name": u.display_name or u.username,
            "avatar": avatar_url(u),
            "club": team_out(u.fav_football) if u.fav_football else team_out(u.fav_basket)}


def user_me(u: User) -> dict:
    return {**user_short(u), "email": u.email, "lang": u.lang, "bank": round(u.bank, 2), "is_admin": u.is_admin,
            "fav_football": team_out(u.fav_football), "fav_basket": team_out(u.fav_basket),
            "tg_linked": bool(u.tg_chat_id), "bio": u.bio or "", "display_name": u.display_name or "",
            "email_verified": bool(getattr(u, "email_verified", True))}
