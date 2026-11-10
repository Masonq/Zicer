# Zicer deploy 2026-11-10 21:25 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: c902ed7 Логотип в шапке встроен в код страницы с фиксированным размером — не грузится отдельно и не сдвигает шапку

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
2026/11/11 00:24:36 [warn] 1625488#1625488: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/11 00:24:36 [warn] 1625488#1625488: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/11 00:24:36 [warn] 1625488#1625488: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/11 00:24:36 [warn] 1625488#1625488: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/11 00:24:36 [warn] 1625488#1625488: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/11 00:24:36 [warn] 1625488#1625488: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
live | 2026-11-10 21:24:59.124729 | live updated 4 | 
maxbet_results | 2026-11-10 21:22:27.769127 | no pending | 
other_results | 2026-11-10 21:22:28.898785 | other results 3 | 
finish_stale | 2026-11-10 21:23:47.774248 | finished 0 | 
football_live | 2026-11-10 21:24:07.028320 | live upserted 1 | 
tg_poll | 2026-11-10 21:24:11.187308 | no token | 
names | 2026-11-10 21:24:25.112822 | names 0 | 
tg_reminders | 2026-11-10 21:24:25.595132 | no token | 
football | 2026-11-10 21:24:30.426602 | football upserted 98 | 
basketball | 2026-11-10 21:24:32.309217 | basketball upserted 423 | 
basketball_week | 2026-11-10 21:24:33.432478 | nba week upserted 48 | 
other_sports | 2026-11-10 21:24:33.759009 | other sports new 0 | 
backfill | 2026-11-10 21:24:33.764453 | already | 
odds | 2026-11-10 21:24:34.706181 | odds matched 50 | 
settle | 2026-11-10 21:24:34.721635 | settled 0 | 
trends | 2026-11-10 21:24:35.012066 | trends 11 | 
analysis | 2026-11-10 21:24:35.023290 | analysis 0 | 
xfeed | 2026-11-10 21:24:48.888571 | xfeed games 148, linked 0, updated 3 | 
--- worker log ---
Nov 11 00:24:33 impressed-jade.ptr.network python[1625226]: 2026-11-11 00:24:33,089 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261113 "HTTP/1.1 200 OK"
Nov 11 00:24:33 impressed-jade.ptr.network python[1625226]: 2026-11-11 00:24:33,144 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261114 "HTTP/1.1 200 OK"
Nov 11 00:24:33 impressed-jade.ptr.network python[1625226]: 2026-11-11 00:24:33,192 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261115 "HTTP/1.1 200 OK"
Nov 11 00:24:33 impressed-jade.ptr.network python[1625226]: 2026-11-11 00:24:33,255 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261116 "HTTP/1.1 200 OK"
Nov 11 00:24:33 impressed-jade.ptr.network python[1625226]: 2026-11-11 00:24:33,337 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261117 "HTTP/1.1 200 OK"
Nov 11 00:24:33 impressed-jade.ptr.network python[1625226]: 2026-11-11 00:24:33,390 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261118 "HTTP/1.1 200 OK"
Nov 11 00:24:33 impressed-jade.ptr.network python[1625226]: 2026-11-11 00:24:33,530 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/H/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 00:24:33 impressed-jade.ptr.network python[1625226]: 2026-11-11 00:24:33,618 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/T/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 00:24:33 impressed-jade.ptr.network python[1625226]: 2026-11-11 00:24:33,695 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/V/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 00:24:33 impressed-jade.ptr.network python[1625226]: 2026-11-11 00:24:33,752 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/W/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 00:24:33 impressed-jade.ptr.network python[1625226]: 2026-11-11 00:24:33,896 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 00:24:34 impressed-jade.ptr.network python[1625226]: 2026-11-11 00:24:34,257 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 00:24:34 impressed-jade.ptr.network python[1625226]: 2026-11-11 00:24:34,648 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 00:24:45 impressed-jade.ptr.network python[1625226]: 2026-11-11 00:24:45,127 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 00:24:45 impressed-jade.ptr.network python[1625226]: 2026-11-11 00:24:45,758 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 00:24:46 impressed-jade.ptr.network python[1625226]: 2026-11-11 00:24:46,379 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 00:24:47 impressed-jade.ptr.network python[1625226]: 2026-11-11 00:24:47,007 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 00:24:47 impressed-jade.ptr.network python[1625226]: 2026-11-11 00:24:47,630 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 00:24:48 impressed-jade.ptr.network python[1625226]: 2026-11-11 00:24:48,248 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 00:24:59 impressed-jade.ptr.network python[1625226]: 2026-11-11 00:24:59,001 INFO HTTP Request: GET https://www.maxbet.rs/live/init/sr "HTTP/1.1 200 OK"
Nov 11 00:24:59 impressed-jade.ptr.network python[1625226]: 2026-11-11 00:24:59,533 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 00:25:00 impressed-jade.ptr.network python[1625226]: 2026-11-11 00:25:00,157 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 00:25:00 impressed-jade.ptr.network python[1625226]: 2026-11-11 00:25:00,778 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 00:25:01 impressed-jade.ptr.network python[1625226]: 2026-11-11 00:25:01,408 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 00:25:02 impressed-jade.ptr.network python[1625226]: 2026-11-11 00:25:02,036 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
--- api log ---
Nov 11 00:25:00 impressed-jade.ptr.network uvicorn[1625232]: INFO:     87.116.135.226:0 - "GET /api/me HTTP/1.0" 200 OK
Nov 11 00:25:00 impressed-jade.ptr.network uvicorn[1625232]: INFO:     87.116.135.226:0 - "GET /api/clubs/battle?sport=football HTTP/1.0" 200 OK
Nov 11 00:25:00 impressed-jade.ptr.network uvicorn[1625232]: INFO:     87.116.135.226:0 - "GET /api/home?tz=60&sport=all HTTP/1.0" 200 OK
Nov 11 00:25:00 impressed-jade.ptr.network uvicorn[1625231]: INFO:     87.116.135.226:0 - "GET /api/me HTTP/1.0" 200 OK
Nov 11 00:25:00 impressed-jade.ptr.network uvicorn[1625232]: INFO:     87.116.135.226:0 - "GET /api/sports?tz=60 HTTP/1.0" 200 OK
Nov 11 00:25:00 impressed-jade.ptr.network uvicorn[1625231]: INFO:     87.116.135.226:0 - "GET /api/clubs/battle?sport=football HTTP/1.0" 200 OK
Nov 11 00:25:00 impressed-jade.ptr.network uvicorn[1625232]: INFO:     87.116.135.226:0 - "GET /api/home?tz=60&sport=all HTTP/1.0" 200 OK
Nov 11 00:25:00 impressed-jade.ptr.network uvicorn[1625232]: INFO:     127.0.0.1:43808 - "GET /api/health HTTP/1.1" 200 OK
Nov 11 00:25:00 impressed-jade.ptr.network uvicorn[1625231]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 00:25:01 impressed-jade.ptr.network uvicorn[1625232]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 00:25:01 impressed-jade.ptr.network uvicorn[1625232]: INFO:     87.116.135.226:0 - "GET /api/sports?tz=60 HTTP/1.0" 200 OK
Nov 11 00:25:01 impressed-jade.ptr.network uvicorn[1625231]: INFO:     87.116.135.226:0 - "GET /api/me HTTP/1.0" 200 OK
Nov 11 00:25:01 impressed-jade.ptr.network uvicorn[1625231]: INFO:     87.116.135.226:0 - "GET /api/clubs/battle?sport=football HTTP/1.0" 200 OK
Nov 11 00:25:01 impressed-jade.ptr.network uvicorn[1625232]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
Nov 11 00:25:01 impressed-jade.ptr.network uvicorn[1625231]: INFO:     87.116.135.226:0 - "GET /api/home?tz=60&sport=all HTTP/1.0" 200 OK
```
