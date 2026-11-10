# Zicer deploy 2026-11-10 18:34 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: 4a7a373 Живые события 22Bet: опасные атаки, удары, угловые, карточки и т.д. двигают мяч; статистика 22Bet для всех матчей; счёт и минута в реальном времени

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
2026/11/10 21:33:46 [warn] 1401617#1401617: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/10 21:33:46 [warn] 1401617#1401617: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/10 21:33:46 [warn] 1401617#1401617: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/10 21:33:46 [warn] 1401617#1401617: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/10 21:33:46 [warn] 1401617#1401617: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/10 21:33:46 [warn] 1401617#1401617: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
maxbet_results | 2026-11-10 18:31:06.328313 | maxbet results 1 | 
other_results | 2026-11-10 18:31:09.577430 | other results 7 | 
football_live | 2026-11-10 18:33:23.131982 | live upserted 6 | 
football | 2026-11-10 18:33:40.421125 | football upserted 93 | 
basketball | 2026-11-10 18:33:42.312422 | basketball upserted 424 | 
basketball_week | 2026-11-10 18:33:42.892534 | nba week upserted 40 | 
other_sports | 2026-11-10 18:33:43.483562 | other sports new 0 | 
backfill | 2026-11-10 18:33:43.488195 | already | 
odds | 2026-11-10 18:33:44.376172 | odds matched 56 | 
settle | 2026-11-10 18:33:44.405722 | settled 0 | 
trends | 2026-11-10 18:33:44.692009 | trends 11 | 
analysis | 2026-11-10 18:33:44.703930 | analysis 1 | 
xfeed | 2026-11-10 18:34:03.632321 | xfeed games 202, linked 11, updated 11 | 
live | 2026-11-10 18:34:08.922825 | live updated 11 | 
tg_poll | 2026-11-10 18:34:08.925666 | no token | 
names | 2026-11-10 18:28:56.757246 | names 0 | 
tg_reminders | 2026-11-10 18:28:57.104194 | no token | 
--- worker log ---
Nov 10 21:33:40 impressed-jade.ptr.network python[1401286]: 2026-11-10 21:33:40,531 INFO HTTP Request: GET https://api-live.euroleague.net/v2/competitions/E/seasons/E2026/games "HTTP/1.1 200 OK"
Nov 10 21:33:41 impressed-jade.ptr.network python[1401286]: 2026-11-10 21:33:41,453 INFO HTTP Request: GET https://api-live.euroleague.net/v2/competitions/U/seasons/U2026/games "HTTP/1.1 200 OK"
Nov 10 21:33:42 impressed-jade.ptr.network python[1401286]: 2026-11-10 21:33:42,080 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261109 "HTTP/1.1 200 OK"
Nov 10 21:33:42 impressed-jade.ptr.network python[1401286]: 2026-11-10 21:33:42,232 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261110 "HTTP/1.1 200 OK"
Nov 10 21:33:42 impressed-jade.ptr.network python[1401286]: 2026-11-10 21:33:42,285 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261111 "HTTP/1.1 200 OK"
Nov 10 21:33:42 impressed-jade.ptr.network python[1401286]: 2026-11-10 21:33:42,415 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261112 "HTTP/1.1 200 OK"
Nov 10 21:33:42 impressed-jade.ptr.network python[1401286]: 2026-11-10 21:33:42,460 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261113 "HTTP/1.1 200 OK"
Nov 10 21:33:42 impressed-jade.ptr.network python[1401286]: 2026-11-10 21:33:42,603 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261114 "HTTP/1.1 200 OK"
Nov 10 21:33:42 impressed-jade.ptr.network python[1401286]: 2026-11-10 21:33:42,649 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261115 "HTTP/1.1 200 OK"
Nov 10 21:33:42 impressed-jade.ptr.network python[1401286]: 2026-11-10 21:33:42,710 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261116 "HTTP/1.1 200 OK"
Nov 10 21:33:42 impressed-jade.ptr.network python[1401286]: 2026-11-10 21:33:42,876 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261117 "HTTP/1.1 200 OK"
Nov 10 21:33:42 impressed-jade.ptr.network python[1401286]: 2026-11-10 21:33:42,983 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/H/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 21:33:43 impressed-jade.ptr.network python[1401286]: 2026-11-10 21:33:43,089 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/T/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 21:33:43 impressed-jade.ptr.network python[1401286]: 2026-11-10 21:33:43,175 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/V/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 21:33:43 impressed-jade.ptr.network python[1401286]: 2026-11-10 21:33:43,472 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/W/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 21:33:43 impressed-jade.ptr.network python[1401286]: 2026-11-10 21:33:43,600 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 21:33:43 impressed-jade.ptr.network python[1401286]: 2026-11-10 21:33:43,807 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 21:33:44 impressed-jade.ptr.network python[1401286]: 2026-11-10 21:33:44,303 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 21:33:59 impressed-jade.ptr.network python[1401286]: 2026-11-10 21:33:59,808 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 10 21:34:00 impressed-jade.ptr.network python[1401286]: 2026-11-10 21:34:00,439 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 10 21:34:01 impressed-jade.ptr.network python[1401286]: 2026-11-10 21:34:01,070 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 10 21:34:01 impressed-jade.ptr.network python[1401286]: 2026-11-10 21:34:01,703 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 10 21:34:02 impressed-jade.ptr.network python[1401286]: 2026-11-10 21:34:02,330 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 10 21:34:02 impressed-jade.ptr.network python[1401286]: 2026-11-10 21:34:02,951 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 10 21:34:08 impressed-jade.ptr.network python[1401286]: 2026-11-10 21:34:08,770 INFO HTTP Request: GET https://www.maxbet.rs/live/init/sr "HTTP/1.1 200 OK"
--- api log ---
Nov 10 21:33:37 impressed-jade.ptr.network systemd[1]: Stopped zicer-api.service - Zicer API.
Nov 10 21:33:37 impressed-jade.ptr.network systemd[1]: zicer-api.service: Consumed 6.863s CPU time, 175.5M memory peak, 46.5M memory swap peak.
Nov 10 21:33:37 impressed-jade.ptr.network systemd[1]: Started zicer-api.service - Zicer API.
Nov 10 21:33:38 impressed-jade.ptr.network uvicorn[1401310]: INFO:     Uvicorn running on http://127.0.0.1:8790 (Press CTRL+C to quit)
Nov 10 21:33:38 impressed-jade.ptr.network uvicorn[1401310]: INFO:     Started parent process [1401310]
Nov 10 21:33:40 impressed-jade.ptr.network uvicorn[1401332]: INFO:     Started server process [1401332]
Nov 10 21:33:40 impressed-jade.ptr.network uvicorn[1401332]: INFO:     Waiting for application startup.
Nov 10 21:33:40 impressed-jade.ptr.network uvicorn[1401332]: INFO:     Application startup complete.
Nov 10 21:33:40 impressed-jade.ptr.network uvicorn[1401333]: INFO:     Started server process [1401333]
Nov 10 21:33:40 impressed-jade.ptr.network uvicorn[1401333]: INFO:     Waiting for application startup.
Nov 10 21:33:40 impressed-jade.ptr.network uvicorn[1401333]: INFO:     Application startup complete.
Nov 10 21:34:11 impressed-jade.ptr.network uvicorn[1401332]: INFO:     127.0.0.1:55980 - "GET /api/health HTTP/1.1" 200 OK
Nov 10 21:34:11 impressed-jade.ptr.network uvicorn[1401333]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 10 21:34:11 impressed-jade.ptr.network uvicorn[1401332]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 10 21:34:11 impressed-jade.ptr.network uvicorn[1401333]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
