# Zicer deploy 2026-11-10 21:43 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: 00b1342 Площадки по реальным размерам и разметке (футбол, баскетбол FIBA, хоккей IIHF, теннис, волейбол, водное поло), без 3D и эффектов; теннис зациклен до прихода очка; конфетти убрано; имена теннисистов без перевода; шапка закреплена

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
2026/11/11 00:42:41 [warn] 1649385#1649385: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/11 00:42:41 [warn] 1649385#1649385: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/11 00:42:41 [warn] 1649385#1649385: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/11 00:42:41 [warn] 1649385#1649385: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/11 00:42:41 [warn] 1649385#1649385: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/11 00:42:41 [warn] 1649385#1649385: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
maxbet_results | 2026-11-10 21:41:21.730998 | no pending | 
other_results | 2026-11-10 21:41:24.960552 | other results 4 | 
finish_stale | 2026-11-10 21:41:58.071593 | finished 0 | 
football_live | 2026-11-10 21:42:12.351092 | live upserted 1 | 
names | 2026-11-10 21:42:16.209146 | names 0 | 
tg_reminders | 2026-11-10 21:42:16.608205 | no token | 
tg_poll | 2026-11-10 21:42:25.477034 | no token | 
football | 2026-11-10 21:42:34.464538 | football upserted 98 | 
basketball | 2026-11-10 21:42:36.304048 | basketball upserted 422 | 
basketball_week | 2026-11-10 21:42:37.003367 | nba week upserted 48 | 
other_sports | 2026-11-10 21:42:37.353232 | other sports new 0 | 
backfill | 2026-11-10 21:42:37.358722 | already | 
odds | 2026-11-10 21:42:38.016439 | odds matched 50 | 
settle | 2026-11-10 21:42:38.044575 | settled 0 | 
trends | 2026-11-10 21:42:38.400351 | trends 11 | 
analysis | 2026-11-10 21:42:38.408680 | analysis 0 | 
xfeed | 2026-11-10 21:42:52.264570 | xfeed games 120, linked 0, updated 3 | 
live | 2026-11-10 21:43:02.588639 | live updated 4 | 
--- worker log ---
Nov 11 00:42:36 impressed-jade.ptr.network python[1649054]: 2026-11-11 00:42:36,471 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261114 "HTTP/1.1 200 OK"
Nov 11 00:42:36 impressed-jade.ptr.network python[1649054]: 2026-11-11 00:42:36,516 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261115 "HTTP/1.1 200 OK"
Nov 11 00:42:36 impressed-jade.ptr.network python[1649054]: 2026-11-11 00:42:36,692 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261116 "HTTP/1.1 200 OK"
Nov 11 00:42:36 impressed-jade.ptr.network python[1649054]: 2026-11-11 00:42:36,833 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261117 "HTTP/1.1 200 OK"
Nov 11 00:42:36 impressed-jade.ptr.network python[1649054]: 2026-11-11 00:42:36,971 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261118 "HTTP/1.1 200 OK"
Nov 11 00:42:37 impressed-jade.ptr.network python[1649054]: 2026-11-11 00:42:37,121 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/H/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 00:42:37 impressed-jade.ptr.network python[1649054]: 2026-11-11 00:42:37,213 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/T/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 00:42:37 impressed-jade.ptr.network python[1649054]: 2026-11-11 00:42:37,289 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/V/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 00:42:37 impressed-jade.ptr.network python[1649054]: 2026-11-11 00:42:37,344 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/W/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 00:42:37 impressed-jade.ptr.network python[1649054]: 2026-11-11 00:42:37,464 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 00:42:37 impressed-jade.ptr.network python[1649054]: 2026-11-11 00:42:37,622 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 00:42:37 impressed-jade.ptr.network python[1649054]: 2026-11-11 00:42:37,965 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 00:42:48 impressed-jade.ptr.network python[1649054]: 2026-11-11 00:42:48,513 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 00:42:49 impressed-jade.ptr.network python[1649054]: 2026-11-11 00:42:49,137 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 00:42:49 impressed-jade.ptr.network python[1649054]: 2026-11-11 00:42:49,758 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 00:42:50 impressed-jade.ptr.network python[1649054]: 2026-11-11 00:42:50,388 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 00:42:51 impressed-jade.ptr.network python[1649054]: 2026-11-11 00:42:51,012 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 00:42:51 impressed-jade.ptr.network python[1649054]: 2026-11-11 00:42:51,631 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 00:43:02 impressed-jade.ptr.network python[1649054]: 2026-11-11 00:43:02,480 INFO HTTP Request: GET https://www.maxbet.rs/live/init/sr "HTTP/1.1 200 OK"
Nov 11 00:43:02 impressed-jade.ptr.network python[1649054]: 2026-11-11 00:43:02,699 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 00:43:03 impressed-jade.ptr.network python[1649054]: 2026-11-11 00:43:03,320 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 00:43:03 impressed-jade.ptr.network python[1649054]: 2026-11-11 00:43:03,942 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 00:43:04 impressed-jade.ptr.network python[1649054]: 2026-11-11 00:43:04,572 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 00:43:05 impressed-jade.ptr.network python[1649054]: 2026-11-11 00:43:05,197 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 00:43:05 impressed-jade.ptr.network python[1649054]: 2026-11-11 00:43:05,815 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
--- api log ---
Nov 11 00:42:34 impressed-jade.ptr.network uvicorn[1649061]: INFO:     Waiting for application startup.
Nov 11 00:42:34 impressed-jade.ptr.network uvicorn[1649061]: INFO:     Application startup complete.
Nov 11 00:42:34 impressed-jade.ptr.network uvicorn[1649060]: INFO:     Started server process [1649060]
Nov 11 00:42:34 impressed-jade.ptr.network uvicorn[1649060]: INFO:     Waiting for application startup.
Nov 11 00:42:34 impressed-jade.ptr.network uvicorn[1649060]: INFO:     Application startup complete.
Nov 11 00:42:39 impressed-jade.ptr.network uvicorn[1649060]: INFO:     87.116.135.226:0 - "GET /api/matches/1800 HTTP/1.0" 200 OK
Nov 11 00:42:39 impressed-jade.ptr.network uvicorn[1649060]: INFO:     87.116.135.226:0 - "GET /api/matches/1800/center HTTP/1.0" 200 OK
Nov 11 00:42:45 impressed-jade.ptr.network uvicorn[1649060]: INFO:     87.116.135.226:0 - "GET /api/matches/1800/center HTTP/1.0" 200 OK
Nov 11 00:42:51 impressed-jade.ptr.network uvicorn[1649060]: INFO:     87.116.135.226:0 - "GET /api/matches/1800/center HTTP/1.0" 200 OK
Nov 11 00:42:57 impressed-jade.ptr.network uvicorn[1649060]: INFO:     87.116.135.226:0 - "GET /api/matches/1800/center HTTP/1.0" 200 OK
Nov 11 00:43:03 impressed-jade.ptr.network uvicorn[1649060]: INFO:     87.116.135.226:0 - "GET /api/matches/1800/center HTTP/1.0" 200 OK
Nov 11 00:43:05 impressed-jade.ptr.network uvicorn[1649060]: INFO:     127.0.0.1:47486 - "GET /api/health HTTP/1.1" 200 OK
Nov 11 00:43:05 impressed-jade.ptr.network uvicorn[1649060]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 00:43:05 impressed-jade.ptr.network uvicorn[1649061]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 00:43:05 impressed-jade.ptr.network uvicorn[1649060]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
