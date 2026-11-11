# Zicer deploy 2026-11-11 02:04 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: 4a31722 Логотипы команд из открытых источников (ESPN, TheSportsDB): хоккей, баскетбол, волейбол, водное поло, фото теннисистов; картинка тикета: эмблемы команд, аватар, дата и время матча, без подписи и ссылки, крупнее сторис

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
2026/11/11 05:03:58 [warn] 1999155#1999155: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/11 05:03:58 [warn] 1999155#1999155: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/11 05:03:58 [warn] 1999155#1999155: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/11 05:03:58 [warn] 1999155#1999155: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/11 05:03:58 [warn] 1999155#1999155: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/11 05:03:58 [warn] 1999155#1999155: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
maxbet_results | 2026-11-11 02:02:31.081152 | no pending | 
other_results | 2026-11-11 02:02:33.191621 | other results 6 | 
finish_stale | 2026-11-11 02:02:52.219179 | finished 0 | 
football_live | 2026-11-11 02:03:11.306675 | live upserted 1 | 
names | 2026-11-11 02:03:29.630549 | names 0 | 
tg_reminders | 2026-11-11 02:03:29.999142 | no token | 
tg_poll | 2026-11-11 02:03:44.278862 | no token | 
football | 2026-11-11 02:03:53.105699 | football upserted 97 |  "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
basketball | 2026-11-11 02:03:56.565996 | basketball upserted 420 | 
basketball_week | 2026-11-11 02:03:57.661044 | nba week upserted 48 | 
other_sports | 2026-11-11 02:03:58.041257 | other sports new 0 | 
backfill | 2026-11-11 02:03:58.048966 | already | 
odds | 2026-11-11 02:03:59.132760 | odds matched 48 | 
trends | 2026-11-10 23:36:09.974574 | trends 11 | 
settle | 2026-11-11 02:03:59.191476 | settled 0 | 
xfeed | 2026-11-11 02:04:13.139509 | xfeed games 146, linked 0, updated 6 | 
analysis | 2026-11-10 23:36:10.199323 | analysis 27 | 
live | 2026-11-11 02:04:23.351655 | live updated 8 | 
--- worker log ---
Nov 11 05:03:56 impressed-jade.ptr.network python[1998817]: 2026-11-11 05:03:56,545 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261112 "HTTP/1.1 200 OK"
Nov 11 05:03:56 impressed-jade.ptr.network python[1998817]: 2026-11-11 05:03:56,769 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261113 "HTTP/1.1 200 OK"
Nov 11 05:03:56 impressed-jade.ptr.network python[1998817]: 2026-11-11 05:03:56,924 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261114 "HTTP/1.1 200 OK"
Nov 11 05:03:57 impressed-jade.ptr.network python[1998817]: 2026-11-11 05:03:57,086 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261115 "HTTP/1.1 200 OK"
Nov 11 05:03:57 impressed-jade.ptr.network python[1998817]: 2026-11-11 05:03:57,264 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261116 "HTTP/1.1 200 OK"
Nov 11 05:03:57 impressed-jade.ptr.network python[1998817]: 2026-11-11 05:03:57,422 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261117 "HTTP/1.1 200 OK"
Nov 11 05:03:57 impressed-jade.ptr.network python[1998817]: 2026-11-11 05:03:57,584 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261118 "HTTP/1.1 200 OK"
Nov 11 05:03:57 impressed-jade.ptr.network python[1998817]: 2026-11-11 05:03:57,767 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/H/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 05:03:57 impressed-jade.ptr.network python[1998817]: 2026-11-11 05:03:57,879 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/T/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 05:03:57 impressed-jade.ptr.network python[1998817]: 2026-11-11 05:03:57,953 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/V/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 05:03:58 impressed-jade.ptr.network python[1998817]: 2026-11-11 05:03:58,018 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/W/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 05:03:58 impressed-jade.ptr.network python[1998817]: 2026-11-11 05:03:58,193 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 05:03:58 impressed-jade.ptr.network python[1998817]: 2026-11-11 05:03:58,375 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 05:03:59 impressed-jade.ptr.network python[1998817]: 2026-11-11 05:03:59,025 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 05:04:09 impressed-jade.ptr.network python[1998817]: 2026-11-11 05:04:09,312 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 05:04:09 impressed-jade.ptr.network python[1998817]: 2026-11-11 05:04:09,939 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 05:04:10 impressed-jade.ptr.network python[1998817]: 2026-11-11 05:04:10,575 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 05:04:11 impressed-jade.ptr.network python[1998817]: 2026-11-11 05:04:11,210 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 05:04:11 impressed-jade.ptr.network python[1998817]: 2026-11-11 05:04:11,836 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 05:04:12 impressed-jade.ptr.network python[1998817]: 2026-11-11 05:04:12,457 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 05:04:23 impressed-jade.ptr.network python[1998817]: 2026-11-11 05:04:23,244 INFO HTTP Request: GET https://www.maxbet.rs/live/init/sr "HTTP/1.1 200 OK"
Nov 11 05:04:23 impressed-jade.ptr.network python[1998817]: 2026-11-11 05:04:23,445 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 05:04:24 impressed-jade.ptr.network python[1998817]: 2026-11-11 05:04:24,070 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 05:04:24 impressed-jade.ptr.network python[1998817]: 2026-11-11 05:04:24,704 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 05:04:25 impressed-jade.ptr.network python[1998817]: 2026-11-11 05:04:25,335 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
--- api log ---
Nov 11 05:03:50 impressed-jade.ptr.network uvicorn[1998821]: INFO:     Started parent process [1998821]
Nov 11 05:03:53 impressed-jade.ptr.network uvicorn[1998844]: INFO:     Started server process [1998844]
Nov 11 05:03:53 impressed-jade.ptr.network uvicorn[1998844]: INFO:     Waiting for application startup.
Nov 11 05:03:54 impressed-jade.ptr.network uvicorn[1998843]: INFO:     Started server process [1998843]
Nov 11 05:03:54 impressed-jade.ptr.network uvicorn[1998843]: INFO:     Waiting for application startup.
Nov 11 05:03:55 impressed-jade.ptr.network uvicorn[1998844]: INFO:     Application startup complete.
Nov 11 05:03:55 impressed-jade.ptr.network uvicorn[1998843]: INFO:     Application startup complete.
Nov 11 05:03:57 impressed-jade.ptr.network uvicorn[1998843]: INFO:     87.116.135.226:0 - "GET /api/sports?tz=60 HTTP/1.0" 200 OK
Nov 11 05:03:57 impressed-jade.ptr.network uvicorn[1998843]: INFO:     87.116.135.226:0 - "GET /api/matches?day=today&sport=all&serbian=false&tz=60 HTTP/1.0" 200 OK
Nov 11 05:04:06 impressed-jade.ptr.network uvicorn[1998844]: INFO:     87.116.135.226:0 - "GET /api/sports?tz=60 HTTP/1.0" 200 OK
Nov 11 05:04:06 impressed-jade.ptr.network uvicorn[1998844]: INFO:     87.116.135.226:0 - "GET /api/home?tz=60&sport=all HTTP/1.0" 200 OK
Nov 11 05:04:24 impressed-jade.ptr.network uvicorn[1998843]: INFO:     127.0.0.1:41622 - "GET /api/health HTTP/1.1" 200 OK
Nov 11 05:04:24 impressed-jade.ptr.network uvicorn[1998843]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 05:04:24 impressed-jade.ptr.network uvicorn[1998843]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 05:04:24 impressed-jade.ptr.network uvicorn[1998844]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
