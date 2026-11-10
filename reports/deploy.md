# Zicer deploy 2026-11-10 18:09 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: fa76b0c Матч-центр футбола вместо верхней карточки: табло + поле с движением мяча по давлению, события и статистика в одной карточке

```

=== Пакеты ===
OK: всё уже стоит

=== Настройки /etc/zicer.env ===
OK: уже есть, не трогаю
OK: порт API: 8790

=== PostgreSQL ===
OK: база zicer готова

=== Python ===
OK: зависимости

=== Сервисы ===
OK: zicer-api работает
OK: zicer-worker работает

=== Автообновление ===
OK: таймер автообновления включён

=== Админ ===
OK: админ есть

=== nginx ===
2026/11/10 21:09:21 [warn] 1369506#1369506: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/10 21:09:21 [warn] 1369506#1369506: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/10 21:09:21 [warn] 1369506#1369506: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/10 21:09:21 [warn] 1369506#1369506: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/10 21:09:21 [warn] 1369506#1369506: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/10 21:09:21 [warn] 1369506#1369506: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
OK: nginx перезагружен

=== HTTPS ===
OK: сертификат уже есть

=== Проверки ===
api local: {"ok":true,"app":"zicer"}
api https: {"ok":true,"app":"zicer"}
https / -> 200
https /api/health -> 200
https /api/home -> 200
https /mecevi -> 200
index cache: cache-control: no-cache
cache-control: no-cache, no-store, must-revalidate
matches: {'basketball': 673, 'waterpolo': 4, 'tennis': 11, 'hockey': 35, 'volleyball': 5, 'football': 1090}
maxbet_results | 2026-11-10 18:06:57.127724 | maxbet results 1 | 
other_results | 2026-11-10 18:07:01.025732 | other results 6 | 
names | 2026-11-10 18:08:30.598436 | names 120 | 
football_live | 2026-11-10 18:08:33.827604 | live upserted 6 | 
football | 2026-11-10 18:09:14.805981 | football upserted 93 | 
basketball | 2026-11-10 18:09:16.783888 | basketball upserted 424 | 
basketball_week | 2026-11-10 18:09:17.477004 | nba week upserted 40 | 
other_sports | 2026-11-10 18:09:17.870205 | other sports new 0 | 
backfill | 2026-11-10 18:09:17.874167 | already | 
odds | 2026-11-10 18:09:19.182031 | odds matched 57 | 
settle | 2026-11-10 18:09:19.207482 | settled 0 | 
trends | 2026-11-10 18:09:19.557041 | trends 12 | 
analysis | 2026-11-10 18:09:19.611288 | analysis 9 | 
live | 2026-11-10 18:09:39.902586 | live updated 9 | 
tg_poll | 2026-11-10 18:09:39.905628 | no token | 
tg_reminders | 2026-11-10 18:04:43.409812 | no token | 
--- worker log ---
Nov 10 21:09:13 impressed-jade.ptr.network python[1369209]: 2026-11-10 21:09:13,803 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261112 "HTTP/1.1 200 OK"
Nov 10 21:09:13 impressed-jade.ptr.network python[1369209]: 2026-11-10 21:09:13,933 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261113 "HTTP/1.1 200 OK"
Nov 10 21:09:14 impressed-jade.ptr.network python[1369209]: 2026-11-10 21:09:14,168 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261114 "HTTP/1.1 200 OK"
Nov 10 21:09:14 impressed-jade.ptr.network python[1369209]: 2026-11-10 21:09:14,447 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261115 "HTTP/1.1 200 OK"
Nov 10 21:09:14 impressed-jade.ptr.network python[1369209]: 2026-11-10 21:09:14,587 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261116 "HTTP/1.1 200 OK"
Nov 10 21:09:14 impressed-jade.ptr.network python[1369209]: 2026-11-10 21:09:14,719 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261117 "HTTP/1.1 200 OK"
Nov 10 21:09:14 impressed-jade.ptr.network python[1369209]: 2026-11-10 21:09:14,927 INFO HTTP Request: GET https://api-live.euroleague.net/v2/competitions/E/seasons/E2026/games "HTTP/1.1 200 OK"
Nov 10 21:09:15 impressed-jade.ptr.network python[1369209]: 2026-11-10 21:09:15,943 INFO HTTP Request: GET https://api-live.euroleague.net/v2/competitions/U/seasons/U2026/games "HTTP/1.1 200 OK"
Nov 10 21:09:16 impressed-jade.ptr.network python[1369209]: 2026-11-10 21:09:16,554 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261109 "HTTP/1.1 200 OK"
Nov 10 21:09:16 impressed-jade.ptr.network python[1369209]: 2026-11-10 21:09:16,618 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261110 "HTTP/1.1 200 OK"
Nov 10 21:09:16 impressed-jade.ptr.network python[1369209]: 2026-11-10 21:09:16,752 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261111 "HTTP/1.1 200 OK"
Nov 10 21:09:16 impressed-jade.ptr.network python[1369209]: 2026-11-10 21:09:16,894 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261112 "HTTP/1.1 200 OK"
Nov 10 21:09:17 impressed-jade.ptr.network python[1369209]: 2026-11-10 21:09:17,029 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261113 "HTTP/1.1 200 OK"
Nov 10 21:09:17 impressed-jade.ptr.network python[1369209]: 2026-11-10 21:09:17,179 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261114 "HTTP/1.1 200 OK"
Nov 10 21:09:17 impressed-jade.ptr.network python[1369209]: 2026-11-10 21:09:17,321 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261115 "HTTP/1.1 200 OK"
Nov 10 21:09:17 impressed-jade.ptr.network python[1369209]: 2026-11-10 21:09:17,393 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261116 "HTTP/1.1 200 OK"
Nov 10 21:09:17 impressed-jade.ptr.network python[1369209]: 2026-11-10 21:09:17,458 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261117 "HTTP/1.1 200 OK"
Nov 10 21:09:17 impressed-jade.ptr.network python[1369209]: 2026-11-10 21:09:17,610 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/H/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 21:09:17 impressed-jade.ptr.network python[1369209]: 2026-11-10 21:09:17,733 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/T/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 21:09:17 impressed-jade.ptr.network python[1369209]: 2026-11-10 21:09:17,805 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/V/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 21:09:17 impressed-jade.ptr.network python[1369209]: 2026-11-10 21:09:17,861 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/W/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 21:09:18 impressed-jade.ptr.network python[1369209]: 2026-11-10 21:09:18,311 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 21:09:18 impressed-jade.ptr.network python[1369209]: 2026-11-10 21:09:18,732 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 21:09:19 impressed-jade.ptr.network python[1369209]: 2026-11-10 21:09:19,123 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 21:09:39 impressed-jade.ptr.network python[1369209]: 2026-11-10 21:09:39,745 INFO HTTP Request: GET https://www.maxbet.rs/live/init/sr "HTTP/1.1 200 OK"
--- api log ---
Nov 10 21:09:13 impressed-jade.ptr.network uvicorn[1369233]: INFO:     Started parent process [1369233]
Nov 10 21:09:14 impressed-jade.ptr.network uvicorn[1369238]: INFO:     Started server process [1369238]
Nov 10 21:09:14 impressed-jade.ptr.network uvicorn[1369238]: INFO:     Waiting for application startup.
Nov 10 21:09:14 impressed-jade.ptr.network uvicorn[1369237]: INFO:     Started server process [1369237]
Nov 10 21:09:14 impressed-jade.ptr.network uvicorn[1369237]: INFO:     Waiting for application startup.
Nov 10 21:09:14 impressed-jade.ptr.network uvicorn[1369238]: INFO:     Application startup complete.
Nov 10 21:09:14 impressed-jade.ptr.network uvicorn[1369237]: INFO:     Application startup complete.
Nov 10 21:09:20 impressed-jade.ptr.network uvicorn[1369237]: INFO:     109.92.227.130:0 - "GET /api/clubs/battle?sport=football HTTP/1.0" 200 OK
Nov 10 21:09:28 impressed-jade.ptr.network uvicorn[1369237]: INFO:     109.92.227.130:0 - "GET /api/matches/1412 HTTP/1.0" 200 OK
Nov 10 21:09:29 impressed-jade.ptr.network uvicorn[1369238]: INFO:httpx:HTTP Request: GET https://www.fotmob.com/api/data/matchDetails?matchId=6386069 "HTTP/1.1 200 OK"
Nov 10 21:09:29 impressed-jade.ptr.network uvicorn[1369238]: INFO:     109.92.227.130:0 - "GET /api/matches/1412/center HTTP/1.0" 200 OK
Nov 10 21:09:45 impressed-jade.ptr.network uvicorn[1369237]: INFO:     127.0.0.1:45548 - "GET /api/health HTTP/1.1" 200 OK
Nov 10 21:09:45 impressed-jade.ptr.network uvicorn[1369237]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 10 21:09:46 impressed-jade.ptr.network uvicorn[1369237]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 10 21:09:46 impressed-jade.ptr.network uvicorn[1369237]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
