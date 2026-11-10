"""Machine translation with several free providers (first that works wins)."""
import logging
import httpx
from .config import UA

log = logging.getLogger("zicer.tr")
last_error = {"msg": ""}


def _g1(text, tl, c):
    r = c.get("https://translate.googleapis.com/translate_a/single", params={"client": "gtx", "sl": "auto", "tl": tl, "dt": "t", "q": text})
    r.raise_for_status()
    return "".join(p[0] for p in r.json()[0] if p and p[0])


def _g2(text, tl, c):
    r = c.get("https://clients5.google.com/translate_a/t", params={"client": "dict-chrome-ex", "sl": "auto", "tl": tl, "q": text})
    r.raise_for_status()
    j = r.json()
    x = j[0]
    return x[0] if isinstance(x, list) else x


def _mm(text, tl, c):
    r = c.get("https://api.mymemory.translated.net/get", params={"q": text, "langpair": f"en|{'sr' if tl == 'sr' else tl}"})
    r.raise_for_status()
    t = r.json()["responseData"]["translatedText"]
    if not t or "MYMEMORY WARNING" in t:
        raise RuntimeError("mymemory quota")
    return t


PROVIDERS = [_g1, _g2, _mm]


def translate(text: str, tl: str) -> str:
    errs = []
    with httpx.Client(headers={"User-Agent": UA}, timeout=12) as c:
        for fn in PROVIDERS:
            try:
                out = (fn(text, tl, c) or "").strip()
                if out:
                    return out
            except Exception as e:  # noqa
                errs.append(f"{fn.__name__}: {type(e).__name__} {str(e)[:80]}")
    last_error["msg"] = " | ".join(errs)
    raise RuntimeError(last_error["msg"])
