import base64
import hashlib
import hmac
import os
import time
from fastapi import Depends, Header, HTTPException
from sqlalchemy.orm import Session
from .config import SECRET
from .db import get_db
from .models import User


def hash_pw(pw: str) -> str:
    salt = os.urandom(16)
    h = hashlib.pbkdf2_hmac("sha256", pw.encode(), salt, 200_000)
    return base64.b64encode(salt).decode() + "$" + base64.b64encode(h).decode()


def check_pw(pw: str, stored: str) -> bool:
    try:
        s, h = stored.split("$")
        calc = hashlib.pbkdf2_hmac("sha256", pw.encode(), base64.b64decode(s), 200_000)
        return hmac.compare_digest(calc, base64.b64decode(h))
    except Exception:  # noqa
        return False


def make_token(uid: int, days: int = 60) -> str:
    body = f"{uid}.{int(time.time()) + days * 86400}"
    sig = hmac.new(SECRET.encode(), body.encode(), hashlib.sha256).hexdigest()[:40]
    return f"{body}.{sig}"


def parse_token(tok: str) -> int | None:
    try:
        uid, exp, sig = tok.split(".")
        good = hmac.new(SECRET.encode(), f"{uid}.{exp}".encode(), hashlib.sha256).hexdigest()[:40]
        if not hmac.compare_digest(sig, good) or int(exp) < time.time():
            return None
        return int(uid)
    except Exception:  # noqa
        return None


def current_user_opt(authorization: str = Header(default=""), db: Session = Depends(get_db)) -> User | None:
    if not authorization.startswith("Bearer "):
        return None
    uid = parse_token(authorization[7:])
    u = db.get(User, uid) if uid else None
    if u and u.is_banned:
        return None
    return u


def current_user(u: User | None = Depends(current_user_opt)) -> User:
    if not u:
        raise HTTPException(401, "auth")
    return u


def admin_user(u: User = Depends(current_user)) -> User:
    if not u.is_admin:
        raise HTTPException(403, "admin")
    return u
