# Zicer deploy 2026-11-10 23:36 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: 6360c87 Регламент пауз для каждого спорта: перерывы с обратным отсчётом (футбол 15 мин, баскетбол FIBA/NBA, хоккей IIHF/NHL, волейбол, водное поло) и тайм-ауты (баскетбол 60/75 с, волейбол 30 с, водное поло 60 с, хоккей 30 с); сервер запоминает начало перерыва

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
2026/11/11 02:36:11 [warn] 1802509#1802509: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/11 02:36:11 [warn] 1802509#1802509: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/11 02:36:11 [warn] 1802509#1802509: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/11 02:36:11 [warn] 1802509#1802509: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/11 02:36:11 [warn] 1802509#1802509: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/11 02:36:11 [warn] 1802509#1802509: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
matches: {'basketball': 688, 'waterpolo': 4, 'tennis': 12, 'hockey': 35, 'volleyball': 5, 'football': 1100}
names | 2026-11-10 23:34:47.919291 | names 0 | 
tg_reminders | 2026-11-10 23:34:48.192508 | no token | 
finish_stale | 2026-11-10 23:35:11.100005 | finished 0 | 
football_live | 2026-11-10 23:35:44.000299 | live upserted 1 | 
tg_poll | 2026-11-10 23:35:47.827903 | no token | 
maxbet_results | 2026-11-10 23:35:58.549794 | no pending | 
other_results | 2026-11-10 23:36:00.046445 | other results 1 | 
football | 2026-11-10 23:29:39.668004 | football upserted 97 |  "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
basketball | 2026-11-10 23:36:07.774540 | basketball upserted 420 | 
basketball_week | 2026-11-10 23:36:08.839534 | nba week upserted 48 | 
other_sports | 2026-11-10 23:36:09.158453 | other sports new 0 | 
backfill | 2026-11-10 23:36:09.164627 | already | 
odds | 2026-11-10 23:36:09.682098 | odds matched 50 | 
settle | 2026-11-10 23:36:09.701666 | settled 0 | 
trends | 2026-11-10 23:36:09.974574 | trends 11 | 
analysis | 2026-11-10 23:36:10.199323 | analysis 27 | 
xfeed | 2026-11-10 23:36:24.051142 | xfeed games 84, linked 0, updated 1 | 
live | 2026-11-10 23:36:34.308526 | live updated 1 | 
--- worker log ---
Nov 11 02:36:08 impressed-jade.ptr.network python[1802213]: 2026-11-11 02:36:08,198 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261113 "HTTP/1.1 200 OK"
Nov 11 02:36:08 impressed-jade.ptr.network python[1802213]: 2026-11-11 02:36:08,338 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261114 "HTTP/1.1 200 OK"
Nov 11 02:36:08 impressed-jade.ptr.network python[1802213]: 2026-11-11 02:36:08,379 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261115 "HTTP/1.1 200 OK"
Nov 11 02:36:08 impressed-jade.ptr.network python[1802213]: 2026-11-11 02:36:08,516 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261116 "HTTP/1.1 200 OK"
Nov 11 02:36:08 impressed-jade.ptr.network python[1802213]: 2026-11-11 02:36:08,670 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261117 "HTTP/1.1 200 OK"
Nov 11 02:36:08 impressed-jade.ptr.network python[1802213]: 2026-11-11 02:36:08,797 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261118 "HTTP/1.1 200 OK"
Nov 11 02:36:08 impressed-jade.ptr.network python[1802213]: 2026-11-11 02:36:08,939 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/H/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 02:36:09 impressed-jade.ptr.network python[1802213]: 2026-11-11 02:36:09,043 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/T/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 02:36:09 impressed-jade.ptr.network python[1802213]: 2026-11-11 02:36:09,097 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/V/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 02:36:09 impressed-jade.ptr.network python[1802213]: 2026-11-11 02:36:09,147 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/W/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 02:36:09 impressed-jade.ptr.network python[1802213]: 2026-11-11 02:36:09,245 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 02:36:09 impressed-jade.ptr.network python[1802213]: 2026-11-11 02:36:09,343 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 02:36:09 impressed-jade.ptr.network python[1802213]: 2026-11-11 02:36:09,634 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 02:36:20 impressed-jade.ptr.network python[1802213]: 2026-11-11 02:36:20,300 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 02:36:20 impressed-jade.ptr.network python[1802213]: 2026-11-11 02:36:20,921 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 02:36:21 impressed-jade.ptr.network python[1802213]: 2026-11-11 02:36:21,545 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 02:36:22 impressed-jade.ptr.network python[1802213]: 2026-11-11 02:36:22,171 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 02:36:22 impressed-jade.ptr.network python[1802213]: 2026-11-11 02:36:22,810 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 02:36:23 impressed-jade.ptr.network python[1802213]: 2026-11-11 02:36:23,429 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 02:36:34 impressed-jade.ptr.network python[1802213]: 2026-11-11 02:36:34,210 INFO HTTP Request: GET https://www.maxbet.rs/live/init/sr "HTTP/1.1 200 OK"
Nov 11 02:36:34 impressed-jade.ptr.network python[1802213]: 2026-11-11 02:36:34,404 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 02:36:35 impressed-jade.ptr.network python[1802213]: 2026-11-11 02:36:35,023 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 02:36:35 impressed-jade.ptr.network python[1802213]: 2026-11-11 02:36:35,646 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 02:36:36 impressed-jade.ptr.network python[1802213]: 2026-11-11 02:36:36,274 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 02:36:36 impressed-jade.ptr.network python[1802213]: 2026-11-11 02:36:36,900 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
--- api log ---
Nov 11 02:36:04 impressed-jade.ptr.network uvicorn[1802238]: INFO:     Waiting for application startup.
Nov 11 02:36:04 impressed-jade.ptr.network uvicorn[1802238]: INFO:     Application startup complete.
Nov 11 02:36:05 impressed-jade.ptr.network uvicorn[1802239]: INFO:     Started server process [1802239]
Nov 11 02:36:05 impressed-jade.ptr.network uvicorn[1802239]: INFO:     Waiting for application startup.
Nov 11 02:36:06 impressed-jade.ptr.network uvicorn[1802239]: INFO:     Application startup complete.
Nov 11 02:36:06 impressed-jade.ptr.network uvicorn[1802239]: INFO:     87.116.135.226:0 - "GET /api/matches/1814 HTTP/1.0" 200 OK
Nov 11 02:36:06 impressed-jade.ptr.network uvicorn[1802238]: INFO:     87.116.135.226:0 - "GET /api/matches/1814/center HTTP/1.0" 200 OK
Nov 11 02:36:19 impressed-jade.ptr.network uvicorn[1802239]: INFO:     87.116.135.226:0 - "GET /api/matches/1814/center HTTP/1.0" 200 OK
Nov 11 02:36:25 impressed-jade.ptr.network uvicorn[1802239]: INFO:     87.116.135.226:0 - "GET /api/matches/1814/center HTTP/1.0" 200 OK
Nov 11 02:36:31 impressed-jade.ptr.network uvicorn[1802239]: INFO:     87.116.135.226:0 - "GET /api/matches/1814/center HTTP/1.0" 200 OK
Nov 11 02:36:35 impressed-jade.ptr.network uvicorn[1802239]: INFO:     127.0.0.1:47464 - "GET /api/health HTTP/1.1" 200 OK
Nov 11 02:36:35 impressed-jade.ptr.network uvicorn[1802238]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 02:36:36 impressed-jade.ptr.network uvicorn[1802238]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 02:36:36 impressed-jade.ptr.network uvicorn[1802238]: INFO:     87.116.135.226:0 - "GET /api/matches/1814 HTTP/1.0" 200 OK
Nov 11 02:36:36 impressed-jade.ptr.network uvicorn[1802238]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
