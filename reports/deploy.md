# Zicer deploy 2026-11-10 17:33 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: fc5077e Воркер: другие виды спорта сразу при старте

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
2026/11/10 20:33:22 [warn] 1321934#1321934: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/10 20:33:22 [warn] 1321934#1321934: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/10 20:33:22 [warn] 1321934#1321934: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/10 20:33:22 [warn] 1321934#1321934: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/10 20:33:22 [warn] 1321934#1321934: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/10 20:33:22 [warn] 1321934#1321934: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
matches: {'basketball': 673, 'football': 1090, 'hockey': 35, 'tennis': 11, 'volleyball': 5, 'waterpolo': 4}
tg_poll | 2026-11-10 17:33:39.583129 | no token | 
maxbet_results | 2026-11-10 17:29:51.824419 | no pending | 
names | 2026-11-10 17:33:04.576778 | names 0 | 
other_results | 2026-11-10 17:33:05.224552 | no pending | 
tg_reminders | 2026-11-10 17:33:06.143026 | no token | 
football_live | 2026-11-10 17:33:11.265719 | live upserted 6 | 
football | 2026-11-10 17:33:15.609448 | football upserted 93 | 
basketball | 2026-11-10 17:33:17.333610 | basketball upserted 424 | 
basketball_week | 2026-11-10 17:33:18.054477 | nba week upserted 40 | 
other_sports | 2026-11-10 17:33:18.433125 | other sports new 0 | 
backfill | 2026-11-10 17:33:18.438329 | already | 
odds | 2026-11-10 17:33:19.197351 | odds matched 58 | 
settle | 2026-11-10 17:33:19.222572 | settled 0 | 
trends | 2026-11-10 17:33:19.466065 | trends 12 | 
analysis | 2026-11-10 17:33:19.577932 | analysis 27 | 
--- worker log ---
Nov 10 20:33:14 impressed-jade.ptr.network python[1321641]: 2026-11-10 20:33:14,490 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261111 "HTTP/1.1 200 OK"
Nov 10 20:33:14 impressed-jade.ptr.network python[1321641]: 2026-11-10 20:33:14,590 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261112 "HTTP/1.1 200 OK"
Nov 10 20:33:14 impressed-jade.ptr.network python[1321641]: 2026-11-10 20:33:14,737 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261113 "HTTP/1.1 200 OK"
Nov 10 20:33:15 impressed-jade.ptr.network python[1321641]: 2026-11-10 20:33:15,024 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261114 "HTTP/1.1 200 OK"
Nov 10 20:33:15 impressed-jade.ptr.network python[1321641]: 2026-11-10 20:33:15,270 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261115 "HTTP/1.1 200 OK"
Nov 10 20:33:15 impressed-jade.ptr.network python[1321641]: 2026-11-10 20:33:15,387 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261116 "HTTP/1.1 200 OK"
Nov 10 20:33:15 impressed-jade.ptr.network python[1321641]: 2026-11-10 20:33:15,518 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261117 "HTTP/1.1 200 OK"
Nov 10 20:33:15 impressed-jade.ptr.network python[1321641]: 2026-11-10 20:33:15,756 INFO HTTP Request: GET https://api-live.euroleague.net/v2/competitions/E/seasons/E2026/games "HTTP/1.1 200 OK"
Nov 10 20:33:16 impressed-jade.ptr.network python[1321641]: 2026-11-10 20:33:16,581 INFO HTTP Request: GET https://api-live.euroleague.net/v2/competitions/U/seasons/U2026/games "HTTP/1.1 200 OK"
Nov 10 20:33:17 impressed-jade.ptr.network python[1321641]: 2026-11-10 20:33:17,219 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261109 "HTTP/1.1 200 OK"
Nov 10 20:33:17 impressed-jade.ptr.network python[1321641]: 2026-11-10 20:33:17,267 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261110 "HTTP/1.1 200 OK"
Nov 10 20:33:17 impressed-jade.ptr.network python[1321641]: 2026-11-10 20:33:17,307 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261111 "HTTP/1.1 200 OK"
Nov 10 20:33:17 impressed-jade.ptr.network python[1321641]: 2026-11-10 20:33:17,464 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261112 "HTTP/1.1 200 OK"
Nov 10 20:33:17 impressed-jade.ptr.network python[1321641]: 2026-11-10 20:33:17,610 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261113 "HTTP/1.1 200 OK"
Nov 10 20:33:17 impressed-jade.ptr.network python[1321641]: 2026-11-10 20:33:17,682 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261114 "HTTP/1.1 200 OK"
Nov 10 20:33:17 impressed-jade.ptr.network python[1321641]: 2026-11-10 20:33:17,829 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261115 "HTTP/1.1 200 OK"
Nov 10 20:33:17 impressed-jade.ptr.network python[1321641]: 2026-11-10 20:33:17,984 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261116 "HTTP/1.1 200 OK"
Nov 10 20:33:18 impressed-jade.ptr.network python[1321641]: 2026-11-10 20:33:18,040 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261117 "HTTP/1.1 200 OK"
Nov 10 20:33:18 impressed-jade.ptr.network python[1321641]: 2026-11-10 20:33:18,161 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/H/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 20:33:18 impressed-jade.ptr.network python[1321641]: 2026-11-10 20:33:18,263 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/T/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 20:33:18 impressed-jade.ptr.network python[1321641]: 2026-11-10 20:33:18,342 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/V/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 20:33:18 impressed-jade.ptr.network python[1321641]: 2026-11-10 20:33:18,423 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/W/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 20:33:18 impressed-jade.ptr.network python[1321641]: 2026-11-10 20:33:18,578 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 20:33:18 impressed-jade.ptr.network python[1321641]: 2026-11-10 20:33:18,757 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 20:33:19 impressed-jade.ptr.network python[1321641]: 2026-11-10 20:33:19,134 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
--- api log ---
Nov 10 20:33:13 impressed-jade.ptr.network uvicorn[1321648]: INFO:     Started parent process [1321648]
Nov 10 20:33:15 impressed-jade.ptr.network uvicorn[1321651]: INFO:     Started server process [1321651]
Nov 10 20:33:15 impressed-jade.ptr.network uvicorn[1321651]: INFO:     Waiting for application startup.
Nov 10 20:33:15 impressed-jade.ptr.network uvicorn[1321651]: INFO:     Application startup complete.
Nov 10 20:33:15 impressed-jade.ptr.network uvicorn[1321652]: INFO:     Started server process [1321652]
Nov 10 20:33:15 impressed-jade.ptr.network uvicorn[1321652]: INFO:     Waiting for application startup.
Nov 10 20:33:16 impressed-jade.ptr.network uvicorn[1321652]: INFO:     Application startup complete.
Nov 10 20:33:16 impressed-jade.ptr.network uvicorn[1321651]: INFO:     109.92.227.130:0 - "GET /api/tickets/1 HTTP/1.0" 200 OK
Nov 10 20:33:19 impressed-jade.ptr.network uvicorn[1321651]: INFO:     109.92.227.130:0 - "GET /api/me HTTP/1.0" 200 OK
Nov 10 20:33:19 impressed-jade.ptr.network uvicorn[1321652]: INFO:     109.92.227.130:0 - "GET /api/tickets/1 HTTP/1.0" 200 OK
Nov 10 20:33:19 impressed-jade.ptr.network uvicorn[1321652]: INFO:     109.92.227.130:0 - "GET /api/clubs/battle?sport=football HTTP/1.0" 200 OK
Nov 10 20:33:46 impressed-jade.ptr.network uvicorn[1321652]: INFO:     127.0.0.1:43818 - "GET /api/health HTTP/1.1" 200 OK
Nov 10 20:33:46 impressed-jade.ptr.network uvicorn[1321651]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 10 20:33:47 impressed-jade.ptr.network uvicorn[1321652]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 10 20:33:47 impressed-jade.ptr.network uvicorn[1321652]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
