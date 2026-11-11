"""Full official names for NBA and NHL teams (feeds give only the nickname or the city), with proper Russian names."""
import httpx
from sqlalchemy import select
from sqlalchemy.orm import Session

from .models import Team, Match, League, Meta

RU = {
    # NBA
    "Atlanta Hawks": "Атланта Хокс", "Boston Celtics": "Бостон Селтикс", "Brooklyn Nets": "Бруклин Нетс", "Charlotte Hornets": "Шарлотт Хорнетс",
    "Chicago Bulls": "Чикаго Буллз", "Cleveland Cavaliers": "Кливленд Кавальерс", "Dallas Mavericks": "Даллас Маверикс", "Denver Nuggets": "Денвер Наггетс",
    "Detroit Pistons": "Детройт Пистонс", "Golden State Warriors": "Голден Стэйт Уорриорз", "Houston Rockets": "Хьюстон Рокетс", "Indiana Pacers": "Индиана Пэйсерс",
    "LA Clippers": "Лос-Анджелес Клипперс", "Los Angeles Clippers": "Лос-Анджелес Клипперс", "Los Angeles Lakers": "Лос-Анджелес Лейкерс",
    "Memphis Grizzlies": "Мемфис Гриззлис", "Miami Heat": "Майами Хит", "Milwaukee Bucks": "Милуоки Бакс", "Minnesota Timberwolves": "Миннесота Тимбервулвз",
    "New Orleans Pelicans": "Нью-Орлеан Пеликанс", "New York Knicks": "Нью-Йорк Никс", "Oklahoma City Thunder": "Оклахома-Сити Тандер", "Orlando Magic": "Орландо Мэджик",
    "Philadelphia 76ers": "Филадельфия Севенти Сиксерс", "Phoenix Suns": "Финикс Санз", "Portland Trail Blazers": "Портленд Трэйл Блэйзерс",
    "Sacramento Kings": "Сакраменто Кингз", "San Antonio Spurs": "Сан-Антонио Спёрс", "Toronto Raptors": "Торонто Рэпторс", "Utah Jazz": "Юта Джаз",
    "Washington Wizards": "Вашингтон Уизардс",
    # NHL
    "Anaheim Ducks": "Анахайм Дакс", "Boston Bruins": "Бостон Брюинз", "Buffalo Sabres": "Баффало Сейбрз", "Calgary Flames": "Калгари Флэймз",
    "Carolina Hurricanes": "Каролина Харрикейнз", "Chicago Blackhawks": "Чикаго Блэкхокс", "Colorado Avalanche": "Колорадо Эвеланш",
    "Columbus Blue Jackets": "Коламбус Блю Джекетс", "Dallas Stars": "Даллас Старз", "Detroit Red Wings": "Детройт Ред Уингз", "Edmonton Oilers": "Эдмонтон Ойлерз",
    "Florida Panthers": "Флорида Пантерз", "Los Angeles Kings": "Лос-Анджелес Кингз", "Minnesota Wild": "Миннесота Уайлд", "Montreal Canadiens": "Монреаль Канадиенс",
    "Nashville Predators": "Нэшвилл Предаторз", "New Jersey Devils": "Нью-Джерси Девилз", "New York Islanders": "Нью-Йорк Айлендерс",
    "New York Rangers": "Нью-Йорк Рейнджерс", "Ottawa Senators": "Оттава Сенаторз", "Philadelphia Flyers": "Филадельфия Флайерз",
    "Pittsburgh Penguins": "Питтсбург Пингвинз", "San Jose Sharks": "Сан-Хосе Шаркс", "Seattle Kraken": "Сиэтл Кракен", "St. Louis Blues": "Сент-Луис Блюз",
    "Tampa Bay Lightning": "Тампа-Бэй Лайтнинг", "Toronto Maple Leafs": "Торонто Мейпл Лифс", "Utah Mammoth": "Юта Мамонт", "Utah Hockey Club": "Юта",
    "Vancouver Canucks": "Ванкувер Кэнакс", "Vegas Golden Knights": "Вегас Голден Найтс", "Washington Capitals": "Вашингтон Кэпиталз",
    "Winnipeg Jets": "Виннипег Джетс",
}
ESPN = {"basketball": "basketball/nba", "hockey": "hockey/nhl"}
LEAGUE = {"basketball": "NBA", "hockey": "NHL"}
ALIASES = {"ny rangers": "New York Rangers", "ny islanders": "New York Islanders", "nj devils": "New Jersey Devils", "la kings": "Los Angeles Kings",
           "tampa bay": "Tampa Bay Lightning", "vegas": "Vegas Golden Knights", "st louis": "St. Louis Blues", "st. louis": "St. Louis Blues"}


def _espn(c, sport):
    d = c.get(f"https://site.api.espn.com/apis/site/v2/sports/{ESPN[sport]}/teams", timeout=15).json()
    out = []
    for t in d["sports"][0]["leagues"][0]["teams"]:
        t = t["team"]
        out.append({"full": t.get("displayName", ""), "keys": {(t.get(k) or "").lower() for k in ("displayName", "shortDisplayName", "location", "name", "nickname", "abbreviation")} - {""}})
    return out


def apply_full_names(db: Session) -> int:
    done = 0
    with httpx.Client(headers={"User-Agent": "Mozilla/5.0 Winly"}) as c:
        for sport, lname in LEAGUE.items():
            lg = db.scalar(select(League).where(League.name == lname))
            if not lg:
                continue
            ids = {x for m in db.scalars(select(Match).where(Match.league_id == lg.id)).all() for x in (m.home_id, m.away_id)}
            try:
                teams = _espn(c, sport)
            except Exception:  # noqa
                continue
            # city-only names that are shared ("New York", "Los Angeles") can't be resolved safely: skip them
            city_count = {}
            for t in teams:
                for k in t["keys"]:
                    city_count[k] = city_count.get(k, 0) + 1
            for tm in db.scalars(select(Team).where(Team.id.in_(ids))).all():
                if (tm.name_ru or "") in RU.values() and tm.name_sr:
                    continue
                cand = [tm.name, tm.short_name]
                full = ""
                for n in cand:
                    k = (n or "").lower().strip()
                    if k in ALIASES:
                        full = ALIASES[k]
                        break
                    hits = [t for t in teams if k in t["keys"]]
                    if len(hits) == 1 and city_count.get(k, 0) == 1:
                        full = hits[0]["full"]
                        break
                if not full:
                    continue
                tm.name_sr = tm.name_cyr = full
                tm.name_ru = RU.get(full, tm.name_ru)
                done += 1
    db.commit()
    return done
