# Zicer deploy 2026-11-10 21:59 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: 6676b19 Теннис: одна подача на очко и непрерывный розыгрыш до прихода очка; подпись владения и событий вынесена над площадкой — мяч больше не закрыт

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
2026/11/11 00:58:51 [warn] 1671178#1671178: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/11 00:58:51 [warn] 1671178#1671178: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/11 00:58:51 [warn] 1671178#1671178: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/11 00:58:51 [warn] 1671178#1671178: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/11 00:58:51 [warn] 1671178#1671178: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/11 00:58:51 [warn] 1671178#1671178: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
finish_stale | 2026-11-10 21:57:57.671472 | finished 0 | 
football_live | 2026-11-10 21:58:02.741226 | live upserted 1 | 
names | 2026-11-10 21:54:12.066798 | names 0 | 
tg_reminders | 2026-11-10 21:54:12.404560 | no token | 
tg_poll | 2026-11-10 21:58:20.588354 | no token | 
maxbet_results | 2026-11-10 21:58:31.480952 | no pending | 
other_results | 2026-11-10 21:58:33.531645 | other results 3 | 
football | 2026-11-10 21:58:44.276005 | football upserted 97 | 
basketball | 2026-11-10 21:58:46.155689 | basketball upserted 422 | 
basketball_week | 2026-11-10 21:58:47.271967 | nba week upserted 48 | 
other_sports | 2026-11-10 21:58:47.569238 | other sports new 0 | 
backfill | 2026-11-10 21:58:47.573002 | already | 
odds | 2026-11-10 21:58:48.890552 | odds matched 50 | 
settle | 2026-11-10 21:58:48.943072 | settled 0 | 
trends | 2026-11-10 21:58:49.205799 | trends 11 | 
analysis | 2026-11-10 21:58:49.217964 | analysis 0 | 
xfeed | 2026-11-10 21:59:03.060595 | xfeed games 94, linked 0, updated 3 | 
live | 2026-11-10 21:59:13.275967 | live updated 3 | 
--- worker log ---
Nov 11 00:58:46 impressed-jade.ptr.network python[1670848]: 2026-11-11 00:58:46,365 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261113 "HTTP/1.1 200 OK"
Nov 11 00:58:46 impressed-jade.ptr.network python[1670848]: 2026-11-11 00:58:46,508 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261114 "HTTP/1.1 200 OK"
Nov 11 00:58:46 impressed-jade.ptr.network python[1670848]: 2026-11-11 00:58:46,639 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261115 "HTTP/1.1 200 OK"
Nov 11 00:58:46 impressed-jade.ptr.network python[1670848]: 2026-11-11 00:58:46,796 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261116 "HTTP/1.1 200 OK"
Nov 11 00:58:47 impressed-jade.ptr.network python[1670848]: 2026-11-11 00:58:47,104 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261117 "HTTP/1.1 200 OK"
Nov 11 00:58:47 impressed-jade.ptr.network python[1670848]: 2026-11-11 00:58:47,234 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261118 "HTTP/1.1 200 OK"
Nov 11 00:58:47 impressed-jade.ptr.network python[1670848]: 2026-11-11 00:58:47,355 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/H/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 00:58:47 impressed-jade.ptr.network python[1670848]: 2026-11-11 00:58:47,442 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/T/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 00:58:47 impressed-jade.ptr.network python[1670848]: 2026-11-11 00:58:47,501 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/V/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 00:58:47 impressed-jade.ptr.network python[1670848]: 2026-11-11 00:58:47,560 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/W/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 00:58:48 impressed-jade.ptr.network python[1670848]: 2026-11-11 00:58:48,096 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 00:58:48 impressed-jade.ptr.network python[1670848]: 2026-11-11 00:58:48,489 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 00:58:48 impressed-jade.ptr.network python[1670848]: 2026-11-11 00:58:48,843 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 00:58:59 impressed-jade.ptr.network python[1670848]: 2026-11-11 00:58:59,321 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 00:58:59 impressed-jade.ptr.network python[1670848]: 2026-11-11 00:58:59,943 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 00:59:00 impressed-jade.ptr.network python[1670848]: 2026-11-11 00:59:00,565 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 00:59:01 impressed-jade.ptr.network python[1670848]: 2026-11-11 00:59:01,194 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 00:59:01 impressed-jade.ptr.network python[1670848]: 2026-11-11 00:59:01,820 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 00:59:02 impressed-jade.ptr.network python[1670848]: 2026-11-11 00:59:02,439 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 00:59:13 impressed-jade.ptr.network python[1670848]: 2026-11-11 00:59:13,188 INFO HTTP Request: GET https://www.maxbet.rs/live/init/sr "HTTP/1.1 200 OK"
Nov 11 00:59:13 impressed-jade.ptr.network python[1670848]: 2026-11-11 00:59:13,369 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 00:59:13 impressed-jade.ptr.network python[1670848]: 2026-11-11 00:59:13,989 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 00:59:14 impressed-jade.ptr.network python[1670848]: 2026-11-11 00:59:14,610 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 00:59:15 impressed-jade.ptr.network python[1670848]: 2026-11-11 00:59:15,239 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 00:59:15 impressed-jade.ptr.network python[1670848]: 2026-11-11 00:59:15,863 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
--- api log ---
Nov 11 00:58:42 impressed-jade.ptr.network uvicorn[1670851]: INFO:     Uvicorn running on http://127.0.0.1:8790 (Press CTRL+C to quit)
Nov 11 00:58:42 impressed-jade.ptr.network uvicorn[1670851]: INFO:     Started parent process [1670851]
Nov 11 00:58:43 impressed-jade.ptr.network uvicorn[1670854]: INFO:     Started server process [1670854]
Nov 11 00:58:43 impressed-jade.ptr.network uvicorn[1670854]: INFO:     Waiting for application startup.
Nov 11 00:58:43 impressed-jade.ptr.network uvicorn[1670855]: INFO:     Started server process [1670855]
Nov 11 00:58:43 impressed-jade.ptr.network uvicorn[1670855]: INFO:     Waiting for application startup.
Nov 11 00:58:43 impressed-jade.ptr.network uvicorn[1670854]: INFO:     Application startup complete.
Nov 11 00:58:43 impressed-jade.ptr.network uvicorn[1670855]: INFO:     Application startup complete.
Nov 11 00:58:56 impressed-jade.ptr.network uvicorn[1670855]: INFO:     87.116.135.226:0 - "GET /api/matches/1814 HTTP/1.0" 200 OK
Nov 11 00:58:56 impressed-jade.ptr.network uvicorn[1670854]: INFO:     87.116.135.226:0 - "GET /api/matches/1814/center HTTP/1.0" 200 OK
Nov 11 00:59:12 impressed-jade.ptr.network uvicorn[1670855]: INFO:     87.116.135.226:0 - "GET /api/matches/1814/center HTTP/1.0" 200 OK
Nov 11 00:59:14 impressed-jade.ptr.network uvicorn[1670855]: INFO:     127.0.0.1:45180 - "GET /api/health HTTP/1.1" 200 OK
Nov 11 00:59:15 impressed-jade.ptr.network uvicorn[1670855]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 00:59:15 impressed-jade.ptr.network uvicorn[1670855]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 00:59:15 impressed-jade.ptr.network uvicorn[1670855]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
