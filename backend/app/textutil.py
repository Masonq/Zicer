import re
import unicodedata

_LAT2CYR = [("dž", "џ"), ("Dž", "Џ"), ("DŽ", "Џ"), ("lj", "љ"), ("Lj", "Љ"), ("LJ", "Љ"), ("nj", "њ"), ("Nj", "Њ"), ("NJ", "Њ")]
_SINGLE = dict(zip("abvgdđežzijklmnoprstćufhcčšABVGDĐEŽZIJKLMNOPRSTĆUFHCČŠ",
                   "абвгдђежзијклмнопрстћуфхцчшАБВГДЂЕЖЗИЈКЛМНОПРСТЋУФХЦЧШ"))


def to_cyr(s: str) -> str:
    for a, b in _LAT2CYR:
        s = s.replace(a, b)
    return "".join(_SINGLE.get(ch, ch) for ch in s)


ALIASES = {
    # national teams: different feeds name them differently
    "chinese taipei": "taiwan", "korea republic": "south korea", "republic of korea": "south korea", "korea rep": "south korea",
    "korea dpr": "north korea", "dpr korea": "north korea", "cote d ivoire": "ivory coast", "czechia": "czech republic",
    "turkiye": "turkey", "usa": "united states", "united states of america": "united states", "bosnia herzegovina": "bosnia and herzegovina",
    "bosnia hercegovina": "bosnia and herzegovina", "republic of ireland": "ireland", "cabo verde": "cape verde", "dr congo": "congo dr",
    "ir iran": "iran", "fyr macedonia": "north macedonia", "macedonia": "north macedonia", "kyrgyz republic": "kyrgyzstan",
    "hong kong china": "hong kong", "eswatini": "swaziland", "uae": "united arab emirates", "great britain": "united kingdom",
    "c zvezda": "crvena zvezda", "crvena zvezda": "crvena zvezda", "red star belgrade": "crvena zvezda",
    "red star": "crvena zvezda", "zvezda": "crvena zvezda", "fk crvena zvezda": "crvena zvezda",
    "psg": "paris saint germain", "paris sg": "paris saint germain", "man utd": "manchester united",
    "man united": "manchester united", "man city": "manchester city", "inter milan": "inter",
    "internazionale": "inter", "atl madrid": "atletico madrid", "atletico de madrid": "atletico madrid",
    "bayern munchen": "bayern munich", "bayern muenchen": "bayern munich", "tsc backa topola": "tsc",
    "backa topola": "tsc", "imt novi beograd": "imt", "radnicki 1923": "radnicki kragujevac",
    "olympiacos piraeus": "olympiacos", "olympiakos": "olympiacos", "panathinaikos aktor athens": "panathinaikos",
    "fenerbahce beko istanbul": "fenerbahce", "anadolu efes istanbul": "efes", "anadolu efes": "efes",
    "real madrid baloncesto": "real madrid", "ldlc asvel villeurbanne": "asvel", "fc barcelona": "barcelona",
    "zalgiris kaunas": "zalgiris", "maccabi playtika tel aviv": "maccabi tel aviv",
    "turkiye": "turkey", "bosnia herz": "bosnia and herzegovina", "bosnia herzegovina": "bosnia and herzegovina",
    "czech republic": "czechia", "fyr macedonia": "north macedonia", "republic of ireland": "ireland",
}
STOP = {"fk", "fc", "kk", "sc", "ac", "afc", "cf", "bk", "sk", "nk", "the", "de", "club", "cd", "ud", "sv",
        "belgrade", "beograd", "mozzart", "bet", "meridianbet", "armani", "kosner", "vitoria",
        "gasteiz", "ibi", "kosarka", "basket", "pallacanestro", "ssc", "calcio", "1", "2"}
GENERIC = {"united", "city", "real", "sporting", "athletic", "dinamo", "dynamo", "fc", "town", "rovers", "olympique"}


def strip_accents(s: str) -> str:
    s = s.replace("đ", "dj").replace("Đ", "Dj")
    return "".join(c for c in unicodedata.normalize("NFKD", s) if not unicodedata.combining(c))


def norm(s: str) -> str:
    s = strip_accents(s).lower()
    s = re.sub(r"[^a-z0-9 ]+", " ", s)
    s = re.sub(r"\s+", " ", s).strip()
    for k in sorted(ALIASES, key=len, reverse=True):
        if s == k or s.startswith(k + " ") or s.endswith(" " + k) or f" {k} " in f" {s} ":
            s = s.replace(k, ALIASES[k]) if k != ALIASES[k] else s
            break
    toks = [t for t in s.split() if t not in STOP]
    return " ".join(toks) or s


def similarity(a: str, b: str) -> float:
    from difflib import SequenceMatcher
    na, nb = norm(a), norm(b)
    if not na or not nb:
        return 0.0
    if na == nb:
        return 1.0
    ta, tb = set(na.split()), set(nb.split())
    common = {t for t in ta & tb if t not in GENERIC or len(ta) == 1 or len(tb) == 1}
    overlap = len(common) / max(1, min(len(ta), len(tb)))
    seq = SequenceMatcher(None, na, nb).ratio()
    if na in nb or nb in na:
        seq = max(seq, 0.9)
    return max(seq, overlap * 0.95)


_CYR2LAT = {"љ": "lj", "њ": "nj", "џ": "dž", "Љ": "Lj", "Њ": "Nj", "Џ": "Dž"}
_C1 = "абвгдђежзијклмнопрстћуфхцчшАБВГДЂЕЖЗИЈКЛМНОПРСТЋУФХЦЧШ"
_L1 = "abvgdđežzijklmnoprstćufhcčšABVGDĐEŽZIJKLMNOPRSTĆUFHCČŠ"


def to_lat(s: str) -> str:
    out = []
    for ch in s:
        if ch in _CYR2LAT:
            out.append(_CYR2LAT[ch])
        else:
            i = _C1.find(ch)
            out.append(_L1[i] if i >= 0 else ch)
    return "".join(out)
