# Zicer deploy 2026-11-10 18:54 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: aa5fb80 Баскетбол: светлый кленовый паркет, закрашенные трапеции и центральный круг, кольца

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
2026/11/10 21:54:11 [warn] 1428665#1428665: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/10 21:54:11 [warn] 1428665#1428665: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/10 21:54:11 [warn] 1428665#1428665: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/10 21:54:11 [warn] 1428665#1428665: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/10 21:54:11 [warn] 1428665#1428665: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/10 21:54:11 [warn] 1428665#1428665: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
live | 2026-11-10 18:54:33.560672 | live updated 11 | 
tg_poll | 2026-11-10 18:54:33.562811 | no token | 
maxbet_results | 2026-11-10 18:51:41.281415 | maxbet results 1 | 
other_results | 2026-11-10 18:51:44.330235 | other results 5 | 
names | 2026-11-10 18:52:22.518733 | names 0 | 
tg_reminders | 2026-11-10 18:52:22.932079 | no token | 
football_live | 2026-11-10 18:53:43.907703 | live upserted 6 | 
football | 2026-11-10 18:54:05.179852 | football upserted 93 | 
basketball | 2026-11-10 18:54:07.155679 | basketball upserted 424 | 
basketball_week | 2026-11-10 18:54:07.832263 | nba week upserted 40 | 
other_sports | 2026-11-10 18:54:08.170267 | other sports new 0 | 
backfill | 2026-11-10 18:54:08.175195 | already | 
odds | 2026-11-10 18:54:08.964681 | odds matched 56 | 
settle | 2026-11-10 18:54:08.994245 | settled 0 | 
trends | 2026-11-10 18:54:09.342923 | trends 11 | 
analysis | 2026-11-10 18:54:09.353103 | analysis 0 | 
xfeed | 2026-11-10 18:54:28.276058 | xfeed games 192, linked 0, updated 11 | 
--- worker log ---
Nov 10 21:54:05 impressed-jade.ptr.network python[1428333]: 2026-11-10 21:54:05,280 INFO HTTP Request: GET https://api-live.euroleague.net/v2/competitions/E/seasons/E2026/games "HTTP/1.1 200 OK"
Nov 10 21:54:06 impressed-jade.ptr.network python[1428333]: 2026-11-10 21:54:06,248 INFO HTTP Request: GET https://api-live.euroleague.net/v2/competitions/U/seasons/U2026/games "HTTP/1.1 200 OK"
Nov 10 21:54:06 impressed-jade.ptr.network python[1428333]: 2026-11-10 21:54:06,936 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261109 "HTTP/1.1 200 OK"
Nov 10 21:54:06 impressed-jade.ptr.network python[1428333]: 2026-11-10 21:54:06,985 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261110 "HTTP/1.1 200 OK"
Nov 10 21:54:07 impressed-jade.ptr.network python[1428333]: 2026-11-10 21:54:07,123 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261111 "HTTP/1.1 200 OK"
Nov 10 21:54:07 impressed-jade.ptr.network python[1428333]: 2026-11-10 21:54:07,259 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261112 "HTTP/1.1 200 OK"
Nov 10 21:54:07 impressed-jade.ptr.network python[1428333]: 2026-11-10 21:54:07,302 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261113 "HTTP/1.1 200 OK"
Nov 10 21:54:07 impressed-jade.ptr.network python[1428333]: 2026-11-10 21:54:07,444 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261114 "HTTP/1.1 200 OK"
Nov 10 21:54:07 impressed-jade.ptr.network python[1428333]: 2026-11-10 21:54:07,498 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261115 "HTTP/1.1 200 OK"
Nov 10 21:54:07 impressed-jade.ptr.network python[1428333]: 2026-11-10 21:54:07,659 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261116 "HTTP/1.1 200 OK"
Nov 10 21:54:07 impressed-jade.ptr.network python[1428333]: 2026-11-10 21:54:07,814 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261117 "HTTP/1.1 200 OK"
Nov 10 21:54:07 impressed-jade.ptr.network python[1428333]: 2026-11-10 21:54:07,937 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/H/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 21:54:08 impressed-jade.ptr.network python[1428333]: 2026-11-10 21:54:08,021 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/T/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 21:54:08 impressed-jade.ptr.network python[1428333]: 2026-11-10 21:54:08,086 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/V/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 21:54:08 impressed-jade.ptr.network python[1428333]: 2026-11-10 21:54:08,160 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/W/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 21:54:08 impressed-jade.ptr.network python[1428333]: 2026-11-10 21:54:08,308 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 21:54:08 impressed-jade.ptr.network python[1428333]: 2026-11-10 21:54:08,497 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 21:54:08 impressed-jade.ptr.network python[1428333]: 2026-11-10 21:54:08,901 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 21:54:24 impressed-jade.ptr.network python[1428333]: 2026-11-10 21:54:24,470 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 10 21:54:25 impressed-jade.ptr.network python[1428333]: 2026-11-10 21:54:25,104 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 10 21:54:25 impressed-jade.ptr.network python[1428333]: 2026-11-10 21:54:25,734 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 10 21:54:26 impressed-jade.ptr.network python[1428333]: 2026-11-10 21:54:26,364 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 10 21:54:26 impressed-jade.ptr.network python[1428333]: 2026-11-10 21:54:26,993 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 10 21:54:27 impressed-jade.ptr.network python[1428333]: 2026-11-10 21:54:27,614 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 10 21:54:33 impressed-jade.ptr.network python[1428333]: 2026-11-10 21:54:33,407 INFO HTTP Request: GET https://www.maxbet.rs/live/init/sr "HTTP/1.1 200 OK"
--- api log ---
Nov 10 21:54:02 impressed-jade.ptr.network systemd[1]: Stopped zicer-api.service - Zicer API.
Nov 10 21:54:02 impressed-jade.ptr.network systemd[1]: zicer-api.service: Consumed 5.148s CPU time, 171.2M memory peak, 0B memory swap peak.
Nov 10 21:54:02 impressed-jade.ptr.network systemd[1]: Started zicer-api.service - Zicer API.
Nov 10 21:54:02 impressed-jade.ptr.network uvicorn[1428336]: INFO:     Uvicorn running on http://127.0.0.1:8790 (Press CTRL+C to quit)
Nov 10 21:54:02 impressed-jade.ptr.network uvicorn[1428336]: INFO:     Started parent process [1428336]
Nov 10 21:54:04 impressed-jade.ptr.network uvicorn[1428339]: INFO:     Started server process [1428339]
Nov 10 21:54:04 impressed-jade.ptr.network uvicorn[1428339]: INFO:     Waiting for application startup.
Nov 10 21:54:04 impressed-jade.ptr.network uvicorn[1428339]: INFO:     Application startup complete.
Nov 10 21:54:04 impressed-jade.ptr.network uvicorn[1428340]: INFO:     Started server process [1428340]
Nov 10 21:54:04 impressed-jade.ptr.network uvicorn[1428340]: INFO:     Waiting for application startup.
Nov 10 21:54:04 impressed-jade.ptr.network uvicorn[1428340]: INFO:     Application startup complete.
Nov 10 21:54:35 impressed-jade.ptr.network uvicorn[1428340]: INFO:     127.0.0.1:48434 - "GET /api/health HTTP/1.1" 200 OK
Nov 10 21:54:35 impressed-jade.ptr.network uvicorn[1428340]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 10 21:54:35 impressed-jade.ptr.network uvicorn[1428340]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 10 21:54:35 impressed-jade.ptr.network uvicorn[1428339]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
