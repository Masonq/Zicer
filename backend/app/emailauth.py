"""Email: Brevo transactional API, 6-digit codes to verify the address and to reset the password.
Letters carry only the code — no links, no click tracking (keeps the domain clear of phishing flags)."""
import hashlib
import json
import logging
import os
import secrets
from datetime import datetime, timedelta

import httpx
from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel
from sqlalchemy import select, func
from sqlalchemy.orm import Session

from . import config
from .auth import admin_user, current_user, current_user_opt, hash_pw, make_token
from .db import get_db
from .models import User, EmailCode, Meta
from .serial import user_me

log = logging.getLogger("emailauth")
router = APIRouter(prefix="/api")
adm = APIRouter(prefix="/api/admin", dependencies=[Depends(admin_user)])


def _setting(db, key, default=""):
    r = db.get(Meta, key)
    if not r or not r.value:
        return default
    try:
        return json.loads(r.value)
    except Exception:  # noqa
        return r.value


def mail_cfg(db):
    return {"key": _setting(db, "brevo_key", "") or os.getenv("BREVO_API_KEY", ""), "from": _setting(db, "mail_from", "") or "no-reply@winly.rs"}


def mail_on(db) -> bool:
    return bool(mail_cfg(db)["key"])


TXT = {
    "sr": {"login": ("Kod za prijavu", "Prijava na Winly", "Unesi ovaj kod na sajtu Winly da se prijaviš:"),
           "verify": ("Tvoj kod za potvrdu", "Potvrdi svoju email adresu", "Unesi ovaj kod na sajtu Winly da potvrdiš adresu:"),
           "reset": ("Kod za novu lozinku", "Promena lozinke", "Unesi ovaj kod na sajtu Winly da postaviš novu lozinku:"),
           "foot": "Kod važi 15 minuta. Ako nisi ti tražio kod, samo ignoriši ovo pismo.", "test": ("Winly: probno pismo", "Pošta radi", "Ovo je probno pismo iz admin panela.")},
    "ru": {"login": ("Код для входа", "Вход в Winly", "Введи этот код на сайте Winly, чтобы войти:"),
           "verify": ("Код подтверждения", "Подтверди свою почту", "Введи этот код на сайте Winly, чтобы подтвердить адрес:"),
           "reset": ("Код для нового пароля", "Смена пароля", "Введи этот код на сайте Winly, чтобы задать новый пароль:"),
           "foot": "Код действует 15 минут. Если ты не запрашивал код — просто проигнорируй это письмо.", "test": ("Winly: тестовое письмо", "Почта работает", "Это тестовое письмо из админки.")},
}


def _cyr(s):
    from .textutil import to_cyr
    try:
        return to_cyr(s)
    except Exception:  # noqa
        return s


def _letter(lang, purpose, code):
    base = "ru" if lang == "ru" else "sr"
    t = TXT[base]
    subj, title, lead = t.get(purpose, t["verify"]) if purpose != "test" else t["test"]
    foot = t["foot"]
    if lang == "sr-cyr":
        subj, title, lead, foot = _cyr(subj), _cyr(title), _cyr(lead), _cyr(foot)
    code_html = f'<div style="font:800 40px/1 Arial,Helvetica,sans-serif;letter-spacing:10px;color:#F2C230;background:#0B2019;border:1px solid #2a4a3e;border-radius:14px;padding:18px 0;text-align:center">{code}</div>' if code else ""
    html = f'''<!doctype html><html><body style="margin:0;background:#0F2A22;padding:28px 12px;font-family:Arial,Helvetica,sans-serif">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td align="center">
<table role="presentation" width="100%" style="max-width:460px;background:#17372D;border-radius:18px;padding:28px" cellpadding="0" cellspacing="0"><tr><td>
<div style="font:800 26px/1 Arial,Helvetica,sans-serif;color:#F2C230;margin-bottom:22px">Winly</div>
<div style="font:700 20px/1.3 Arial,Helvetica,sans-serif;color:#EEF3EE;margin-bottom:10px">{title}</div>
<div style="font:400 15px/1.5 Arial,Helvetica,sans-serif;color:#C9D6CF;margin-bottom:18px">{lead}</div>
{code_html}
{f'<div style="font:400 12px/1.5 Arial,Helvetica,sans-serif;color:#8FA89D;margin-top:20px">{foot}</div>' if code else ''}
</td></tr></table>
<div style="font:400 11px/1.5 Arial,Helvetica,sans-serif;color:#6E8A7E;margin-top:14px">Winly · liga prognoza · winly.rs</div>
</td></tr></table></body></html>'''
    text = f"{title}\n\n{lead}\n\n{code}\n\n{foot}\n\nWinly · winly.rs" if code else f"{title}\n\n{lead}\n\nWinly · winly.rs"
    return subj, html, text


def send_mail(db, to: str, lang: str, purpose: str, code: str = "") -> bool:
    cfg = mail_cfg(db)
    if not cfg["key"]:
        log.warning("mail not configured; code for %s: %s", to, code)
        return False
    subj, html, text = _letter(lang, purpose, code)
    try:
        r = httpx.post("https://api.brevo.com/v3/smtp/email", timeout=20, headers={"api-key": cfg["key"], "accept": "application/json", "content-type": "application/json"},
                       json={"sender": {"name": "Winly", "email": cfg["from"]}, "to": [{"email": to}], "subject": subj, "htmlContent": html, "textContent": text,
                             "tags": [purpose]})
        if r.status_code >= 300:
            log.error("brevo %s %s", r.status_code, r.text[:300])
            return False
        return True
    except Exception:  # noqa
        log.exception("brevo send")
        return False


def _hash(code: str, email: str) -> str:
    return hashlib.sha256(f"{config.SECRET}:{email}:{code}".encode()).hexdigest()


def issue_code(db, email: str, purpose: str, lang: str) -> dict:
    email = email.strip().lower()
    now = datetime.utcnow()
    last = db.scalar(select(EmailCode).where(EmailCode.email == email, EmailCode.purpose == purpose).order_by(EmailCode.id.desc()))
    if last and (now - last.created_at).total_seconds() < 60:
        raise HTTPException(429, "too_soon")
    hour = db.scalar(select(func.count()).select_from(EmailCode).where(EmailCode.email == email, EmailCode.created_at > now - timedelta(hours=1))) or 0
    if hour >= 6:
        raise HTTPException(429, "too_many")
    code = f"{secrets.randbelow(1000000):06d}"
    db.add(EmailCode(email=email, purpose=purpose, code_hash=_hash(code, email), expires_at=now + timedelta(minutes=15)))
    db.commit()
    sent = send_mail(db, email, lang, purpose, code)
    return {"ok": True, "sent": sent}


def check_code(db, email: str, purpose: str, code: str):
    email = email.strip().lower()
    c = db.scalar(select(EmailCode).where(EmailCode.email == email, EmailCode.purpose == purpose, EmailCode.used == False).order_by(EmailCode.id.desc()))  # noqa
    if not c or c.expires_at < datetime.utcnow():
        raise HTTPException(400, "code_expired")
    if c.attempts >= 5:
        raise HTTPException(400, "code_locked")
    if c.code_hash != _hash((code or "").strip(), email):
        c.attempts += 1
        db.commit()
        raise HTTPException(400, "code_wrong")
    c.used = True
    db.commit()


class SendIn(BaseModel):
    purpose: str = "verify"
    email: str = ""


@router.get("/auth/mail")
def mail_status(db: Session = Depends(get_db)):
    return {"on": mail_on(db)}


@router.post("/auth/email/send")
def email_send(body: SendIn, u: User | None = Depends(current_user_opt), db: Session = Depends(get_db)):
    if body.purpose == "verify":
        if not u:
            raise HTTPException(401)
        if u.email_verified:
            return {"ok": True, "already": True}
        return issue_code(db, u.email, "verify", u.lang)
    if body.purpose in ("reset", "login"):
        email = body.email.strip().lower()
        user = db.scalar(select(User).where(User.email == email)) if email else None
        if user and not user.is_banned:
            issue_code(db, email, body.purpose, user.lang)
        return {"ok": True}  # same answer whether the address exists or not
    raise HTTPException(400, "bad_purpose")


class VerifyIn(BaseModel):
    code: str


@router.post("/auth/email/verify")
def email_verify(body: VerifyIn, u: User = Depends(current_user), db: Session = Depends(get_db)):
    u = db.merge(u)
    check_code(db, u.email, "verify", body.code)
    u.email_verified = True
    db.commit()
    return {"user": user_me(u)}


class ResetIn(BaseModel):
    email: str
    code: str
    password: str


@router.post("/auth/reset")
def reset_password(body: ResetIn, db: Session = Depends(get_db)):
    if len(body.password) < 6:
        raise HTTPException(400, "password_short")
    email = body.email.strip().lower()
    u = db.scalar(select(User).where(User.email == email))
    if not u:
        raise HTTPException(400, "code_wrong")
    check_code(db, email, "reset", body.code)
    u.pw_hash = hash_pw(body.password)
    u.email_verified = True  # the code proved the address
    db.commit()
    return {"token": make_token(u.id), "user": user_me(u)}


class CodeLoginIn(BaseModel):
    email: str
    code: str


@router.post("/auth/login/code")
def login_by_code(body: CodeLoginIn, db: Session = Depends(get_db)):
    """Passwordless sign-in: a 6-digit code sent to the account's email."""
    email = body.email.strip().lower()
    u = db.scalar(select(User).where(User.email == email))
    if not u:
        raise HTTPException(400, "code_wrong")
    if u.is_banned:
        raise HTTPException(403, "banned")
    check_code(db, email, "login", body.code)
    u.email_verified = True
    db.commit()
    return {"token": make_token(u.id), "user": user_me(u)}


def require_verified(db, u: User):
    """Predictions / tickets need a confirmed address once email is switched on."""
    if not getattr(u, "email_verified", True) and mail_on(db):
        raise HTTPException(403, "email_unverified")


# ---------- admin ----------
class MailCfgIn(BaseModel):
    key: str = ""
    sender: str = ""


@adm.get("/mail")
def mail_get(db: Session = Depends(get_db)):
    c = mail_cfg(db)
    sent = db.scalar(select(func.count()).select_from(EmailCode).where(EmailCode.created_at > datetime.utcnow() - timedelta(days=1))) or 0
    unver = db.scalar(select(func.count()).select_from(User).where(User.email_verified == False)) or 0  # noqa
    return {"on": bool(c["key"]), "key": ("••••" + c["key"][-4:]) if c["key"] else "", "from": c["from"], "codes_24h": sent, "unverified": unver}


@adm.post("/mail")
def mail_set(body: MailCfgIn, db: Session = Depends(get_db)):
    if body.key and not body.key.startswith("••••"):
        db.merge(Meta(key="brevo_key", value=json.dumps(body.key.strip())))
    if body.sender.strip():
        db.merge(Meta(key="mail_from", value=json.dumps(body.sender.strip())))
    db.commit()
    return mail_get(db)


class TestIn(BaseModel):
    to: str


@adm.post("/mail/test")
def mail_test(body: TestIn, db: Session = Depends(get_db)):
    ok = send_mail(db, body.to.strip(), "ru", "test", "")
    if not ok:
        raise HTTPException(400, "send_failed")
    return {"ok": True}
