# Zicer deploy 2026-11-11 01:30 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: 59e6ff3 Поделиться тикетом: картинка на языке пользователя, формат для поста и для сторис, отправка самой картинкой, Telegram/WhatsApp/Viber, понятные названия ставок, счёт и лига у событий, ссылка внизу; логотип выровнен по высоте заглавных букв в шапке и на картинке

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
2026/11/11 04:29:40 [warn] 1952898#1952898: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/11 04:29:40 [warn] 1952898#1952898: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/11 04:29:40 [warn] 1952898#1952898: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/11 04:29:40 [warn] 1952898#1952898: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/11 04:29:40 [warn] 1952898#1952898: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/11 04:29:40 [warn] 1952898#1952898: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
football | 2026-11-11 01:29:34.055416 | football upserted 97 |  "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
basketball | 2026-11-11 01:29:35.867258 | basketball upserted 420 | 
basketball_week | 2026-11-11 01:29:36.582194 | nba week upserted 48 | 
other_sports | 2026-11-11 01:29:36.899206 | other sports new 0 | 
backfill | 2026-11-11 01:29:36.906619 | already | 
odds | 2026-11-11 01:29:37.581900 | odds matched 48 | 
settle | 2026-11-11 01:29:37.606245 | settled 0 | 
live | 2026-11-11 01:30:01.698896 | live updated 8 | 
xfeed | 2026-11-11 01:30:05.570241 | xfeed games 143, linked 0, updated 6 | 
tg_poll | 2026-11-11 01:30:05.572348 | no token | 
finish_stale | 2026-11-11 01:28:34.683942 | finished 0 | 
names | 2026-11-11 01:28:45.713828 | names 0 | 
tg_reminders | 2026-11-11 01:28:46.028427 | no token | 
maxbet_results | 2026-11-11 01:28:54.908841 | no pending | 
other_results | 2026-11-11 01:28:55.868311 | other results 5 | 
trends | 2026-11-10 23:36:09.974574 | trends 11 | 
football_live | 2026-11-11 01:29:01.696840 | live upserted 1 | 
analysis | 2026-11-10 23:36:10.199323 | analysis 27 | 
--- worker log ---
Nov 11 04:29:36 impressed-jade.ptr.network python[1952563]: 2026-11-11 04:29:36,110 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261114 "HTTP/1.1 200 OK"
Nov 11 04:29:36 impressed-jade.ptr.network python[1952563]: 2026-11-11 04:29:36,232 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261115 "HTTP/1.1 200 OK"
Nov 11 04:29:36 impressed-jade.ptr.network python[1952563]: 2026-11-11 04:29:36,285 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261116 "HTTP/1.1 200 OK"
Nov 11 04:29:36 impressed-jade.ptr.network python[1952563]: 2026-11-11 04:29:36,419 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261117 "HTTP/1.1 200 OK"
Nov 11 04:29:36 impressed-jade.ptr.network python[1952563]: 2026-11-11 04:29:36,544 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261118 "HTTP/1.1 200 OK"
Nov 11 04:29:36 impressed-jade.ptr.network python[1952563]: 2026-11-11 04:29:36,680 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/H/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 04:29:36 impressed-jade.ptr.network python[1952563]: 2026-11-11 04:29:36,763 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/T/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 04:29:36 impressed-jade.ptr.network python[1952563]: 2026-11-11 04:29:36,831 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/V/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 04:29:36 impressed-jade.ptr.network python[1952563]: 2026-11-11 04:29:36,893 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/W/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 04:29:37 impressed-jade.ptr.network python[1952563]: 2026-11-11 04:29:37,028 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 04:29:37 impressed-jade.ptr.network python[1952563]: 2026-11-11 04:29:37,215 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 04:29:37 impressed-jade.ptr.network python[1952563]: 2026-11-11 04:29:37,541 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 04:29:47 impressed-jade.ptr.network python[1952563]: 2026-11-11 04:29:47,701 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 04:29:48 impressed-jade.ptr.network python[1952563]: 2026-11-11 04:29:48,329 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 04:29:48 impressed-jade.ptr.network python[1952563]: 2026-11-11 04:29:48,963 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 04:29:49 impressed-jade.ptr.network python[1952563]: 2026-11-11 04:29:49,595 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 04:29:50 impressed-jade.ptr.network python[1952563]: 2026-11-11 04:29:50,217 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 04:29:50 impressed-jade.ptr.network python[1952563]: 2026-11-11 04:29:50,835 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 04:30:01 impressed-jade.ptr.network python[1952563]: 2026-11-11 04:30:01,585 INFO HTTP Request: GET https://www.maxbet.rs/live/init/sr "HTTP/1.1 200 OK"
Nov 11 04:30:01 impressed-jade.ptr.network python[1952563]: 2026-11-11 04:30:01,801 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 04:30:02 impressed-jade.ptr.network python[1952563]: 2026-11-11 04:30:02,429 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 04:30:03 impressed-jade.ptr.network python[1952563]: 2026-11-11 04:30:03,064 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 04:30:03 impressed-jade.ptr.network python[1952563]: 2026-11-11 04:30:03,694 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 04:30:04 impressed-jade.ptr.network python[1952563]: 2026-11-11 04:30:04,317 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 04:30:04 impressed-jade.ptr.network python[1952563]: 2026-11-11 04:30:04,936 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
--- api log ---
Nov 11 04:29:32 impressed-jade.ptr.network systemd[1]: Stopped zicer-api.service - Zicer API.
Nov 11 04:29:32 impressed-jade.ptr.network systemd[1]: zicer-api.service: Consumed 6.582s CPU time, 177.9M memory peak, 34.5M memory swap peak.
Nov 11 04:29:32 impressed-jade.ptr.network systemd[1]: Started zicer-api.service - Zicer API.
Nov 11 04:29:32 impressed-jade.ptr.network uvicorn[1952584]: INFO:     Uvicorn running on http://127.0.0.1:8790 (Press CTRL+C to quit)
Nov 11 04:29:32 impressed-jade.ptr.network uvicorn[1952584]: INFO:     Started parent process [1952584]
Nov 11 04:29:33 impressed-jade.ptr.network uvicorn[1952587]: INFO:     Started server process [1952587]
Nov 11 04:29:33 impressed-jade.ptr.network uvicorn[1952587]: INFO:     Waiting for application startup.
Nov 11 04:29:33 impressed-jade.ptr.network uvicorn[1952587]: INFO:     Application startup complete.
Nov 11 04:29:33 impressed-jade.ptr.network uvicorn[1952588]: INFO:     Started server process [1952588]
Nov 11 04:29:33 impressed-jade.ptr.network uvicorn[1952588]: INFO:     Waiting for application startup.
Nov 11 04:29:33 impressed-jade.ptr.network uvicorn[1952588]: INFO:     Application startup complete.
Nov 11 04:30:04 impressed-jade.ptr.network uvicorn[1952587]: INFO:     127.0.0.1:49184 - "GET /api/health HTTP/1.1" 200 OK
Nov 11 04:30:04 impressed-jade.ptr.network uvicorn[1952587]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 04:30:05 impressed-jade.ptr.network uvicorn[1952588]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 04:30:05 impressed-jade.ptr.network uvicorn[1952588]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
