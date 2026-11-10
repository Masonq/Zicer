"""python -m app.cli create-admin <username> <email>"""
import secrets
import sys
from sqlalchemy import select, func
from .db import SessionLocal, engine, Base
from .models import User
from .auth import hash_pw


def main():
    Base.metadata.create_all(engine)
    if len(sys.argv) >= 4 and sys.argv[1] == "create-admin":
        name, email = sys.argv[2], sys.argv[3].lower()
        with SessionLocal() as db:
            u = db.scalar(select(User).where(func.lower(User.username) == name.lower()))
            if u:
                print("EXISTS")
                return
            pw = secrets.token_urlsafe(9)
            db.add(User(username=name, email=email, pw_hash=hash_pw(pw), is_admin=True, lang="ru", tg_code=secrets.token_hex(8)))
            db.commit()
            print(f"ADMIN {name} {pw}")


if __name__ == "__main__":
    main()
