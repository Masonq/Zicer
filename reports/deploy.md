# Zicer deploy 2026-11-11 00:09 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: 6bf737e Площадки в сдержанном «телевизионном» стиле: приглушённые цвета покрытий, тонкие линии, без свечений и ореолов у мяча, без жёлтых бортов, маленький реалистичный мяч/шайба

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
2026/11/11 03:09:03 [warn] 1847517#1847517: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/11 03:09:03 [warn] 1847517#1847517: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/11 03:09:03 [warn] 1847517#1847517: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/11 03:09:03 [warn] 1847517#1847517: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/11 03:09:03 [warn] 1847517#1847517: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/11 03:09:03 [warn] 1847517#1847517: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
finish_stale | 2026-11-11 00:08:17.907161 | finished 0 | 
football_live | 2026-11-11 00:08:23.198236 | live upserted 1 | 
tg_poll | 2026-11-11 00:08:32.234588 | no token | 
football | 2026-11-11 00:08:56.736002 | football upserted 97 |  "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
basketball | 2026-11-11 00:09:00.517445 | basketball upserted 420 | 
basketball_week | 2026-11-11 00:09:01.230349 | nba week upserted 48 | 
other_sports | 2026-11-11 00:09:01.628814 | other sports new 0 | 
backfill | 2026-11-11 00:09:01.637724 | already | 
odds | 2026-11-11 00:09:03.263966 | odds matched 50 | 
settle | 2026-11-11 00:09:03.305488 | settled 0 | 
xfeed | 2026-11-11 00:09:17.212399 | xfeed games 123, linked 0, updated 4 | 
live | 2026-11-11 00:09:27.468423 | live updated 3 | 
names | 2026-11-11 00:06:45.764454 | names 0 | 
tg_reminders | 2026-11-11 00:06:46.073951 | no token | 
maxbet_results | 2026-11-11 00:07:57.668127 | no pending | 
other_results | 2026-11-11 00:07:59.195998 | other results 4 | 
trends | 2026-11-10 23:36:09.974574 | trends 11 | 
analysis | 2026-11-10 23:36:10.199323 | analysis 27 | 
--- worker log ---
Nov 11 03:09:00 impressed-jade.ptr.network python[1847180]: 2026-11-11 03:09:00,657 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261113 "HTTP/1.1 200 OK"
Nov 11 03:09:00 impressed-jade.ptr.network python[1847180]: 2026-11-11 03:09:00,721 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261114 "HTTP/1.1 200 OK"
Nov 11 03:09:00 impressed-jade.ptr.network python[1847180]: 2026-11-11 03:09:00,782 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261115 "HTTP/1.1 200 OK"
Nov 11 03:09:00 impressed-jade.ptr.network python[1847180]: 2026-11-11 03:09:00,871 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261116 "HTTP/1.1 200 OK"
Nov 11 03:09:00 impressed-jade.ptr.network python[1847180]: 2026-11-11 03:09:00,998 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261117 "HTTP/1.1 200 OK"
Nov 11 03:09:01 impressed-jade.ptr.network python[1847180]: 2026-11-11 03:09:01,146 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261118 "HTTP/1.1 200 OK"
Nov 11 03:09:01 impressed-jade.ptr.network python[1847180]: 2026-11-11 03:09:01,347 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/H/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 03:09:01 impressed-jade.ptr.network python[1847180]: 2026-11-11 03:09:01,476 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/T/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 03:09:01 impressed-jade.ptr.network python[1847180]: 2026-11-11 03:09:01,556 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/V/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 03:09:01 impressed-jade.ptr.network python[1847180]: 2026-11-11 03:09:01,606 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/W/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 03:09:01 impressed-jade.ptr.network python[1847180]: 2026-11-11 03:09:01,801 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 03:09:02 impressed-jade.ptr.network python[1847180]: 2026-11-11 03:09:02,159 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 03:09:03 impressed-jade.ptr.network python[1847180]: 2026-11-11 03:09:03,134 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 03:09:13 impressed-jade.ptr.network python[1847180]: 2026-11-11 03:09:13,425 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 03:09:14 impressed-jade.ptr.network python[1847180]: 2026-11-11 03:09:14,055 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 03:09:14 impressed-jade.ptr.network python[1847180]: 2026-11-11 03:09:14,686 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 03:09:15 impressed-jade.ptr.network python[1847180]: 2026-11-11 03:09:15,318 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 03:09:15 impressed-jade.ptr.network python[1847180]: 2026-11-11 03:09:15,943 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 03:09:16 impressed-jade.ptr.network python[1847180]: 2026-11-11 03:09:16,565 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 03:09:27 impressed-jade.ptr.network python[1847180]: 2026-11-11 03:09:27,351 INFO HTTP Request: GET https://www.maxbet.rs/live/init/sr "HTTP/1.1 200 OK"
Nov 11 03:09:27 impressed-jade.ptr.network python[1847180]: 2026-11-11 03:09:27,572 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 03:09:28 impressed-jade.ptr.network python[1847180]: 2026-11-11 03:09:28,195 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 03:09:28 impressed-jade.ptr.network python[1847180]: 2026-11-11 03:09:28,828 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 03:09:29 impressed-jade.ptr.network python[1847180]: 2026-11-11 03:09:29,465 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 03:09:30 impressed-jade.ptr.network python[1847180]: 2026-11-11 03:09:30,090 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
--- api log ---
Nov 11 03:08:54 impressed-jade.ptr.network systemd[1]: Stopped zicer-api.service - Zicer API.
Nov 11 03:08:54 impressed-jade.ptr.network systemd[1]: zicer-api.service: Consumed 4.600s CPU time, 170.2M memory peak, 86.1M memory swap peak.
Nov 11 03:08:54 impressed-jade.ptr.network systemd[1]: Started zicer-api.service - Zicer API.
Nov 11 03:08:54 impressed-jade.ptr.network uvicorn[1847184]: INFO:     Uvicorn running on http://127.0.0.1:8790 (Press CTRL+C to quit)
Nov 11 03:08:54 impressed-jade.ptr.network uvicorn[1847184]: INFO:     Started parent process [1847184]
Nov 11 03:08:58 impressed-jade.ptr.network uvicorn[1847190]: INFO:     Started server process [1847190]
Nov 11 03:08:58 impressed-jade.ptr.network uvicorn[1847190]: INFO:     Waiting for application startup.
Nov 11 03:08:58 impressed-jade.ptr.network uvicorn[1847189]: INFO:     Started server process [1847189]
Nov 11 03:08:58 impressed-jade.ptr.network uvicorn[1847189]: INFO:     Waiting for application startup.
Nov 11 03:08:59 impressed-jade.ptr.network uvicorn[1847189]: INFO:     Application startup complete.
Nov 11 03:09:00 impressed-jade.ptr.network uvicorn[1847190]: INFO:     Application startup complete.
Nov 11 03:09:28 impressed-jade.ptr.network uvicorn[1847190]: INFO:     127.0.0.1:51448 - "GET /api/health HTTP/1.1" 200 OK
Nov 11 03:09:28 impressed-jade.ptr.network uvicorn[1847190]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 03:09:28 impressed-jade.ptr.network uvicorn[1847190]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 03:09:28 impressed-jade.ptr.network uvicorn[1847190]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
