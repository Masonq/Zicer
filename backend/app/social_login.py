"""Sign up / sign in with Google (ID token from Google Identity Services) and Facebook (OAuth redirect — works inside the Facebook/Instagram in-app browser)."""
import hashlib
import hmac
import json
import random
import secrets
import time
import urllib.parse

import httpx
from fastapi import APIRouter, Depends, HTTPException
from fastapi.responses import RedirectResponse
from pydantic import BaseModel
from sqlalchemy import select, func
from sqlalchemy.orm import Session

from . import config
from .auth import admin_user, hash_pw, make_token
from .db import get_db
from .models import User, Meta
from .serial import user_me

router = APIRouter(prefix="/api")
adm = APIRouter(prefix="/api/admin", dependencies=[Depends(admin_user)])
G = "https://graph.facebook.com/v21.0"


def _get(db, key, default=""):
    r = db.get(Meta, key)
    if not r or not r.value:
        return default
    try:
        return json.loads(r.value)
    except Exception:  # noqa
        return r.value


def _base():
    return (config.PUBLIC_URL or "https://winly.rs").rstrip("/")


def _sign(data: dict) -> str:
    raw = json.dumps(data, separators=(",", ":")).encode()
    sig = hmac.new(config.SECRET.encode(), raw, hashlib.sha256).hexdigest()[:24]
    return urllib.parse.quote(raw.decode()) + "." + sig


def _unsign(s: str) -> dict:
    try:
        raw, sig = s.rsplit(".", 1)
        raw = urllib.parse.unquote(raw)
        if hmac.new(config.SECRET.encode(), raw.encode(), hashlib.sha256).hexdigest()[:24] != sig:
            return {}
        d = json.loads(raw)
        return d if d.get("t", 0) > time.time() - 900 else {}
    except Exception:  # noqa
        return {}


def _login_or_create(db, *, provider: str, pid: str, email: str, name: str, lang: str, ref: str):
    """Existing account by provider id, then by email (links it); otherwise a new player with the same welcome as e-mail sign-up."""
    col = User.google_id if provider == "google" else User.fb_id
    u = db.scalar(select(User).where(col == pid))
    if not u and email:
        u = db.scalar(select(User).where(User.email == email))
        if u:
            setattr(u, f"{provider if provider == 'google' else 'fb'}_id", pid)
            u.email_verified = True
            db.commit()
    if u:
        if u.is_banned:
            raise HTTPException(403, "banned")
        return u, False
    from .api import _make_username, COLORS
    uname = _make_username(db, name or (email.split("@")[0] if email else "prognozer"), email or "prognozer@x")
    u = User(username=uname, email=email or f"{provider}_{pid}@users.winly.rs", pw_hash=hash_pw(secrets.token_hex(16)),
             lang=lang if lang in ("sr", "sr-cyr", "ru") else "sr", display_name=(name or None) if name and name != uname else None,
             bank=config.START_BANK, color=random.choice(COLORS), tg_code=secrets.token_hex(8), email_verified=True)
    if provider == "google":
        u.google_id = pid
    else:
        u.fb_id = pid
    db.add(u)
    db.commit()
    # founders bonus and referral, exactly like the e-mail sign-up
    from .serial import FOUNDERS, _founders
    taken = db.scalar(select(func.count()).select_from(User).where(User.is_admin == False, User.id < u.id)) or 0  # noqa
    if taken < FOUNDERS:
        u.bank += float(_get(db, "founder_bonus", 2000) or 0)
        db.commit()
        _founders["at"] = 0
    if ref:
        try:
            from .growth import apply_referral
            apply_referral(db, u, ref)
        except Exception:  # noqa
            db.rollback()
    return u, True


@router.get("/auth/oauth/config")
def oauth_config(db: Session = Depends(get_db)):
    return {"google": _get(db, "google_client_id", ""), "facebook": bool(_get(db, "fb_login_app_id", "") and _get(db, "fb_login_secret", ""))}


class GoogleIn(BaseModel):
    credential: str
    lang: str = "sr"
    ref: str = ""


@router.post("/auth/google")
def google_login(body: GoogleIn, db: Session = Depends(get_db)):
    cid = _get(db, "google_client_id", "")
    if not cid:
        raise HTTPException(400, "google_off")
    r = httpx.get("https://oauth2.googleapis.com/tokeninfo", params={"id_token": body.credential}, timeout=15)
    if r.status_code != 200:
        raise HTTPException(400, "google_bad")
    info = r.json()
    if info.get("aud") != cid or info.get("iss") not in ("accounts.google.com", "https://accounts.google.com"):
        raise HTTPException(400, "google_bad")
    email = (info.get("email") or "").lower() if str(info.get("email_verified")).lower() == "true" else ""
    u, new = _login_or_create(db, provider="google", pid=info["sub"], email=email, name=info.get("name") or info.get("given_name") or "",
                              lang=body.lang, ref=body.ref.strip())
    return {"token": make_token(u.id), "user": user_me(u), "new": new}


@router.get("/auth/fb/start")
def fb_start(next: str = "/", ref: str = "", lang: str = "sr", db: Session = Depends(get_db)):
    app_id = _get(db, "fb_login_app_id", "")
    if not app_id:
        raise HTTPException(400, "fb_off")
    state = _sign({"n": next if next.startswith("/") else "/", "r": ref[:40], "l": lang[:6], "t": int(time.time())})
    q = urllib.parse.urlencode({"client_id": app_id, "redirect_uri": f"{_base()}/api/auth/fb/callback", "state": state, "scope": "public_profile,email", "response_type": "code"})
    return RedirectResponse(f"https://www.facebook.com/v21.0/dialog/oauth?{q}", status_code=302)


@router.get("/auth/fb/callback")
def fb_callback(code: str = "", state: str = "", error: str = "", db: Session = Depends(get_db)):
    st = _unsign(state)
    back = f"{_base()}/prijava"
    if error or not code or not st:
        return RedirectResponse(f"{back}?oauth=cancel", status_code=302)
    try:
        with httpx.Client(timeout=20) as c:
            tok = c.get(f"{G}/oauth/access_token", params={"client_id": _get(db, "fb_login_app_id", ""), "client_secret": _get(db, "fb_login_secret", ""),
                                                          "redirect_uri": f"{_base()}/api/auth/fb/callback", "code": code}).json()
            me = c.get(f"{G}/me", params={"fields": "id,name,email", "access_token": tok["access_token"]}).json()
        u, new = _login_or_create(db, provider="fb", pid=me["id"], email=(me.get("email") or "").lower(), name=me.get("name") or "",
                                  lang=st.get("l", "sr"), ref=st.get("r", ""))
    except HTTPException:
        return RedirectResponse(f"{back}?oauth=banned", status_code=302)
    except Exception:  # noqa
        return RedirectResponse(f"{back}?oauth=error", status_code=302)
    # the token travels in the fragment (never reaches server logs)
    return RedirectResponse(f"{_base()}/oauth#token={make_token(u.id)}&new={1 if new else 0}&next={urllib.parse.quote(st.get('n', '/'))}", status_code=302)


class OAuthCfg(BaseModel):
    google_client_id: str = ""
    fb_app_id: str = ""
    fb_secret: str = ""


@adm.get("/oauth")
def oauth_get(db: Session = Depends(get_db)):
    s = _get(db, "fb_login_secret", "")
    return {"google_client_id": _get(db, "google_client_id", ""), "fb_app_id": _get(db, "fb_login_app_id", ""), "fb_secret": ("••••" + s[-4:]) if s else "",
            "redirect": f"{_base()}/api/auth/fb/callback", "origins": [_base(), _base().replace("https://", "https://www.")]}


@adm.post("/oauth")
def oauth_set(body: OAuthCfg, db: Session = Depends(get_db)):
    for key, val in (("google_client_id", body.google_client_id), ("fb_login_app_id", body.fb_app_id), ("fb_login_secret", body.fb_secret)):
        v = val.strip()
        if v and not v.startswith("••••"):
            db.merge(Meta(key=key, value=json.dumps(v)))
    db.commit()
    return oauth_get(db)
