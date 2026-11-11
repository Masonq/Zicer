# Zicer deploy 2026-11-11 00:16 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: 1c18c5e Живые арены: хоккей — текстура льда, борта с рекламными панелями, скамейки и штрафные боксы, сетки ворот, логотип в центре; баскетбол — кленовый паркет с волокнами и светом, стол секретаря, скамейки, щиты, логотип; водное поло — вода с бликами, разделители с поплавками, маркеры 2/5/6 м на бортике, ворота с сеткой

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
2026/11/11 03:16:22 [warn] 1857474#1857474: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/11 03:16:22 [warn] 1857474#1857474: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/11 03:16:22 [warn] 1857474#1857474: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/11 03:16:22 [warn] 1857474#1857474: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/11 03:16:22 [warn] 1857474#1857474: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/11 03:16:22 [warn] 1857474#1857474: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
matches: {'basketball': 688, 'football': 1100, 'hockey': 35, 'tennis': 12, 'volleyball': 5, 'waterpolo': 4}
football | 2026-11-11 00:16:16.095399 | football upserted 97 |  "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
basketball | 2026-11-11 00:16:17.988776 | basketball upserted 420 | 
basketball_week | 2026-11-11 00:16:18.887810 | nba week upserted 48 | 
other_sports | 2026-11-11 00:16:19.206198 | other sports new 0 | 
backfill | 2026-11-11 00:16:19.210323 | already | 
odds | 2026-11-11 00:16:20.049081 | odds matched 50 | 
settle | 2026-11-11 00:16:20.069532 | settled 0 | 
xfeed | 2026-11-11 00:16:33.914114 | xfeed games 118, linked 0, updated 4 | 
live | 2026-11-11 00:16:44.114287 | live updated 4 | 
names | 2026-11-11 00:14:06.603506 | names 0 | 
tg_reminders | 2026-11-11 00:14:06.943890 | no token | 
trends | 2026-11-10 23:36:09.974574 | trends 11 | 
analysis | 2026-11-10 23:36:10.199323 | analysis 27 | 
maxbet_results | 2026-11-11 00:15:17.677608 | no pending | 
other_results | 2026-11-11 00:15:18.663236 | other results 4 | 
finish_stale | 2026-11-11 00:15:28.079477 | finished 0 | 
football_live | 2026-11-11 00:15:47.209486 | live upserted 1 | 
tg_poll | 2026-11-11 00:15:51.064122 | no token | 
--- worker log ---
Nov 11 03:16:18 impressed-jade.ptr.network python[1857182]: 2026-11-11 03:16:18,318 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261114 "HTTP/1.1 200 OK"
Nov 11 03:16:18 impressed-jade.ptr.network python[1857182]: 2026-11-11 03:16:18,449 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261115 "HTTP/1.1 200 OK"
Nov 11 03:16:18 impressed-jade.ptr.network python[1857182]: 2026-11-11 03:16:18,588 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261116 "HTTP/1.1 200 OK"
Nov 11 03:16:18 impressed-jade.ptr.network python[1857182]: 2026-11-11 03:16:18,728 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261117 "HTTP/1.1 200 OK"
Nov 11 03:16:18 impressed-jade.ptr.network python[1857182]: 2026-11-11 03:16:18,854 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261118 "HTTP/1.1 200 OK"
Nov 11 03:16:18 impressed-jade.ptr.network python[1857182]: 2026-11-11 03:16:18,981 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/H/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 03:16:19 impressed-jade.ptr.network python[1857182]: 2026-11-11 03:16:19,080 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/T/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 03:16:19 impressed-jade.ptr.network python[1857182]: 2026-11-11 03:16:19,146 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/V/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 03:16:19 impressed-jade.ptr.network python[1857182]: 2026-11-11 03:16:19,199 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/W/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 03:16:19 impressed-jade.ptr.network python[1857182]: 2026-11-11 03:16:19,335 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 03:16:19 impressed-jade.ptr.network python[1857182]: 2026-11-11 03:16:19,673 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 03:16:20 impressed-jade.ptr.network python[1857182]: 2026-11-11 03:16:20,005 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 03:16:30 impressed-jade.ptr.network python[1857182]: 2026-11-11 03:16:30,165 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 03:16:30 impressed-jade.ptr.network python[1857182]: 2026-11-11 03:16:30,788 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 03:16:31 impressed-jade.ptr.network python[1857182]: 2026-11-11 03:16:31,417 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 03:16:32 impressed-jade.ptr.network python[1857182]: 2026-11-11 03:16:32,044 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 03:16:32 impressed-jade.ptr.network python[1857182]: 2026-11-11 03:16:32,665 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 03:16:33 impressed-jade.ptr.network python[1857182]: 2026-11-11 03:16:33,284 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 03:16:44 impressed-jade.ptr.network python[1857182]: 2026-11-11 03:16:44,021 INFO HTTP Request: GET https://www.maxbet.rs/live/init/sr "HTTP/1.1 200 OK"
Nov 11 03:16:44 impressed-jade.ptr.network python[1857182]: 2026-11-11 03:16:44,208 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 03:16:44 impressed-jade.ptr.network python[1857182]: 2026-11-11 03:16:44,831 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 03:16:45 impressed-jade.ptr.network python[1857182]: 2026-11-11 03:16:45,463 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 03:16:46 impressed-jade.ptr.network python[1857182]: 2026-11-11 03:16:46,091 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 03:16:46 impressed-jade.ptr.network python[1857182]: 2026-11-11 03:16:46,713 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 03:16:47 impressed-jade.ptr.network python[1857182]: 2026-11-11 03:16:47,331 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
--- api log ---
Nov 11 03:16:13 impressed-jade.ptr.network systemd[1]: Stopped zicer-api.service - Zicer API.
Nov 11 03:16:13 impressed-jade.ptr.network systemd[1]: zicer-api.service: Consumed 4.309s CPU time, 168.1M memory peak, 9.3M memory swap peak.
Nov 11 03:16:13 impressed-jade.ptr.network systemd[1]: Started zicer-api.service - Zicer API.
Nov 11 03:16:14 impressed-jade.ptr.network uvicorn[1857184]: INFO:     Uvicorn running on http://127.0.0.1:8790 (Press CTRL+C to quit)
Nov 11 03:16:14 impressed-jade.ptr.network uvicorn[1857184]: INFO:     Started parent process [1857184]
Nov 11 03:16:15 impressed-jade.ptr.network uvicorn[1857187]: INFO:     Started server process [1857187]
Nov 11 03:16:15 impressed-jade.ptr.network uvicorn[1857187]: INFO:     Waiting for application startup.
Nov 11 03:16:15 impressed-jade.ptr.network uvicorn[1857187]: INFO:     Application startup complete.
Nov 11 03:16:15 impressed-jade.ptr.network uvicorn[1857188]: INFO:     Started server process [1857188]
Nov 11 03:16:15 impressed-jade.ptr.network uvicorn[1857188]: INFO:     Waiting for application startup.
Nov 11 03:16:15 impressed-jade.ptr.network uvicorn[1857188]: INFO:     Application startup complete.
Nov 11 03:16:46 impressed-jade.ptr.network uvicorn[1857187]: INFO:     127.0.0.1:41556 - "GET /api/health HTTP/1.1" 200 OK
Nov 11 03:16:46 impressed-jade.ptr.network uvicorn[1857188]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 03:16:46 impressed-jade.ptr.network uvicorn[1857188]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 03:16:46 impressed-jade.ptr.network uvicorn[1857188]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
