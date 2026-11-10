# Zicer deploy 2026-11-10 22:14 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: 163be24 Волейбол: очки из MaxBet, если матча нет в 22Bet; привязка к 22Bet при разном написании одной из команд

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
2026/11/11 01:13:35 [warn] 1691298#1691298: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/11 01:13:35 [warn] 1691298#1691298: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/11 01:13:35 [warn] 1691298#1691298: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/11 01:13:35 [warn] 1691298#1691298: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/11 01:13:35 [warn] 1691298#1691298: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/11 01:13:35 [warn] 1691298#1691298: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
tg_poll | 2026-11-10 22:13:22.269115 | no token | 
football | 2026-11-10 22:13:29.091061 | football upserted 97 | 
basketball | 2026-11-10 22:13:30.951388 | basketball upserted 421 | 
basketball_week | 2026-11-10 22:13:31.878628 | nba week upserted 48 | 
other_sports | 2026-11-10 22:13:32.227217 | other sports new 0 | 
backfill | 2026-11-10 22:13:32.232829 | already | 
odds | 2026-11-10 22:13:33.307925 | odds matched 50 | 
settle | 2026-11-10 22:13:33.334180 | settled 0 | 
trends | 2026-11-10 22:13:33.618369 | trends 11 | 
analysis | 2026-11-10 22:13:33.628791 | analysis 0 | 
xfeed | 2026-11-10 22:13:47.464512 | xfeed games 97, linked 1, updated 4 | 
live | 2026-11-10 22:13:57.668708 | live updated 4 | 
names | 2026-11-10 22:11:13.154804 | names 0 | 
tg_reminders | 2026-11-10 22:11:13.470928 | no token | 
maxbet_results | 2026-11-10 22:12:24.355133 | no pending | 
other_results | 2026-11-10 22:12:26.521039 | other results 4 | 
finish_stale | 2026-11-10 22:12:41.349911 | finished 0 | 
football_live | 2026-11-10 22:12:55.260654 | live upserted 1 | 
--- worker log ---
Nov 11 01:13:31 impressed-jade.ptr.network python[1690970]: 2026-11-11 01:13:31,273 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261114 "HTTP/1.1 200 OK"
Nov 11 01:13:31 impressed-jade.ptr.network python[1690970]: 2026-11-11 01:13:31,398 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261115 "HTTP/1.1 200 OK"
Nov 11 01:13:31 impressed-jade.ptr.network python[1690970]: 2026-11-11 01:13:31,566 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261116 "HTTP/1.1 200 OK"
Nov 11 01:13:31 impressed-jade.ptr.network python[1690970]: 2026-11-11 01:13:31,717 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261117 "HTTP/1.1 200 OK"
Nov 11 01:13:31 impressed-jade.ptr.network python[1690970]: 2026-11-11 01:13:31,843 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261118 "HTTP/1.1 200 OK"
Nov 11 01:13:31 impressed-jade.ptr.network python[1690970]: 2026-11-11 01:13:31,975 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/H/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 01:13:32 impressed-jade.ptr.network python[1690970]: 2026-11-11 01:13:32,086 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/T/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 01:13:32 impressed-jade.ptr.network python[1690970]: 2026-11-11 01:13:32,165 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/V/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 01:13:32 impressed-jade.ptr.network python[1690970]: 2026-11-11 01:13:32,218 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/W/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 01:13:32 impressed-jade.ptr.network python[1690970]: 2026-11-11 01:13:32,620 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 01:13:32 impressed-jade.ptr.network python[1690970]: 2026-11-11 01:13:32,936 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 01:13:33 impressed-jade.ptr.network python[1690970]: 2026-11-11 01:13:33,261 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 01:13:43 impressed-jade.ptr.network python[1690970]: 2026-11-11 01:13:43,724 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 01:13:44 impressed-jade.ptr.network python[1690970]: 2026-11-11 01:13:44,344 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 01:13:44 impressed-jade.ptr.network python[1690970]: 2026-11-11 01:13:44,965 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 01:13:45 impressed-jade.ptr.network python[1690970]: 2026-11-11 01:13:45,594 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 01:13:46 impressed-jade.ptr.network python[1690970]: 2026-11-11 01:13:46,219 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 01:13:46 impressed-jade.ptr.network python[1690970]: 2026-11-11 01:13:46,836 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 01:13:57 impressed-jade.ptr.network python[1690970]: 2026-11-11 01:13:57,571 INFO HTTP Request: GET https://www.maxbet.rs/live/init/sr "HTTP/1.1 200 OK"
Nov 11 01:13:57 impressed-jade.ptr.network python[1690970]: 2026-11-11 01:13:57,762 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 01:13:58 impressed-jade.ptr.network python[1690970]: 2026-11-11 01:13:58,382 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 01:13:59 impressed-jade.ptr.network python[1690970]: 2026-11-11 01:13:59,003 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 01:13:59 impressed-jade.ptr.network python[1690970]: 2026-11-11 01:13:59,633 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 01:14:00 impressed-jade.ptr.network python[1690970]: 2026-11-11 01:14:00,256 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 01:14:00 impressed-jade.ptr.network python[1690970]: 2026-11-11 01:14:00,876 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
--- api log ---
Nov 11 01:13:28 impressed-jade.ptr.network uvicorn[1690975]: INFO:     Started server process [1690975]
Nov 11 01:13:28 impressed-jade.ptr.network uvicorn[1690975]: INFO:     Waiting for application startup.
Nov 11 01:13:28 impressed-jade.ptr.network uvicorn[1690976]: INFO:     Started server process [1690976]
Nov 11 01:13:28 impressed-jade.ptr.network uvicorn[1690976]: INFO:     Waiting for application startup.
Nov 11 01:13:28 impressed-jade.ptr.network uvicorn[1690976]: INFO:     Application startup complete.
Nov 11 01:13:28 impressed-jade.ptr.network uvicorn[1690975]: INFO:     Application startup complete.
Nov 11 01:13:30 impressed-jade.ptr.network uvicorn[1690975]: INFO:     87.116.135.226:0 - "GET /api/matches/1814/center HTTP/1.0" 200 OK
Nov 11 01:13:43 impressed-jade.ptr.network uvicorn[1690975]: INFO:     87.116.135.226:0 - "GET /api/matches/1814/center HTTP/1.0" 200 OK
Nov 11 01:13:48 impressed-jade.ptr.network uvicorn[1690975]: INFO:     87.116.135.226:0 - "GET /api/matches/1814 HTTP/1.0" 200 OK
Nov 11 01:13:49 impressed-jade.ptr.network uvicorn[1690975]: INFO:     87.116.135.226:0 - "GET /api/matches/1814/center HTTP/1.0" 200 OK
Nov 11 01:13:55 impressed-jade.ptr.network uvicorn[1690975]: INFO:     87.116.135.226:0 - "GET /api/matches/1814/center HTTP/1.0" 200 OK
Nov 11 01:13:59 impressed-jade.ptr.network uvicorn[1690975]: INFO:     127.0.0.1:58266 - "GET /api/health HTTP/1.1" 200 OK
Nov 11 01:13:59 impressed-jade.ptr.network uvicorn[1690975]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 01:13:59 impressed-jade.ptr.network uvicorn[1690975]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 01:14:00 impressed-jade.ptr.network uvicorn[1690975]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
