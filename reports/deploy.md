# Zicer deploy 2026-11-10 21:01 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: 0af788d Матч-центр нового поколения: 3D-площадка (переключатель 2D/3D), шкала давления, лента последних событий с иконками, ключевые цифры, плавные анимации (motion), конфетти и вибрация при голе (canvas-confetti)

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
2026/11/11 00:01:21 [warn] 1593944#1593944: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/11 00:01:21 [warn] 1593944#1593944: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/11 00:01:21 [warn] 1593944#1593944: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/11 00:01:21 [warn] 1593944#1593944: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/11 00:01:21 [warn] 1593944#1593944: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/11 00:01:21 [warn] 1593944#1593944: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
tg_poll | 2026-11-10 21:01:04.287083 | no token | 
finish_stale | 2026-11-10 21:01:09.292566 | finished 0 | 
football | 2026-11-10 21:01:15.103024 | football upserted 98 | 
basketball | 2026-11-10 21:01:17.262906 | basketball upserted 424 | 
basketball_week | 2026-11-10 21:01:18.236152 | nba week upserted 48 | 
other_sports | 2026-11-10 21:01:18.624688 | other sports new 0 | 
backfill | 2026-11-10 21:01:18.629963 | already | 
odds | 2026-11-10 21:01:19.823085 | odds matched 50 | 
settle | 2026-11-10 21:01:19.845258 | settled 0 | 
trends | 2026-11-10 21:01:20.114565 | trends 11 | 
names | 2026-11-10 20:57:47.942613 | names 0 | 
tg_reminders | 2026-11-10 20:57:48.306963 | no token | 
analysis | 2026-11-10 21:01:20.120879 | analysis 0 | 
xfeed | 2026-11-10 21:01:34.010160 | xfeed games 169, linked 0, updated 6 | 
live | 2026-11-10 21:01:44.319557 | live updated 6 | 
maxbet_results | 2026-11-10 20:58:56.320308 | maxbet results 3 | 
other_results | 2026-11-10 20:58:58.097347 | other results 4 | 
football_live | 2026-11-10 21:00:31.843186 | live upserted 1 | 
--- worker log ---
Nov 11 00:01:17 impressed-jade.ptr.network python[1593619]: 2026-11-11 00:01:17,373 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261113 "HTTP/1.1 200 OK"
Nov 11 00:01:17 impressed-jade.ptr.network python[1593619]: 2026-11-11 00:01:17,534 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261114 "HTTP/1.1 200 OK"
Nov 11 00:01:17 impressed-jade.ptr.network python[1593619]: 2026-11-11 00:01:17,693 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261115 "HTTP/1.1 200 OK"
Nov 11 00:01:17 impressed-jade.ptr.network python[1593619]: 2026-11-11 00:01:17,886 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261116 "HTTP/1.1 200 OK"
Nov 11 00:01:18 impressed-jade.ptr.network python[1593619]: 2026-11-11 00:01:18,045 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261117 "HTTP/1.1 200 OK"
Nov 11 00:01:18 impressed-jade.ptr.network python[1593619]: 2026-11-11 00:01:18,200 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261118 "HTTP/1.1 200 OK"
Nov 11 00:01:18 impressed-jade.ptr.network python[1593619]: 2026-11-11 00:01:18,329 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/H/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 00:01:18 impressed-jade.ptr.network python[1593619]: 2026-11-11 00:01:18,490 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/T/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 00:01:18 impressed-jade.ptr.network python[1593619]: 2026-11-11 00:01:18,549 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/V/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 00:01:18 impressed-jade.ptr.network python[1593619]: 2026-11-11 00:01:18,617 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/W/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 00:01:19 impressed-jade.ptr.network python[1593619]: 2026-11-11 00:01:19,040 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 00:01:19 impressed-jade.ptr.network python[1593619]: 2026-11-11 00:01:19,389 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 00:01:19 impressed-jade.ptr.network python[1593619]: 2026-11-11 00:01:19,751 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 00:01:30 impressed-jade.ptr.network python[1593619]: 2026-11-11 00:01:30,232 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 00:01:30 impressed-jade.ptr.network python[1593619]: 2026-11-11 00:01:30,869 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 00:01:31 impressed-jade.ptr.network python[1593619]: 2026-11-11 00:01:31,493 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 00:01:32 impressed-jade.ptr.network python[1593619]: 2026-11-11 00:01:32,120 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 00:01:32 impressed-jade.ptr.network python[1593619]: 2026-11-11 00:01:32,742 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 00:01:33 impressed-jade.ptr.network python[1593619]: 2026-11-11 00:01:33,360 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 00:01:44 impressed-jade.ptr.network python[1593619]: 2026-11-11 00:01:44,149 INFO HTTP Request: GET https://www.maxbet.rs/live/init/sr "HTTP/1.1 200 OK"
Nov 11 00:01:44 impressed-jade.ptr.network python[1593619]: 2026-11-11 00:01:44,423 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 00:01:45 impressed-jade.ptr.network python[1593619]: 2026-11-11 00:01:45,062 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 00:01:45 impressed-jade.ptr.network python[1593619]: 2026-11-11 00:01:45,687 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 00:01:46 impressed-jade.ptr.network python[1593619]: 2026-11-11 00:01:46,313 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 00:01:46 impressed-jade.ptr.network python[1593619]: 2026-11-11 00:01:46,937 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
--- api log ---
Nov 11 00:01:12 impressed-jade.ptr.network uvicorn[1593621]: INFO:     Uvicorn running on http://127.0.0.1:8790 (Press CTRL+C to quit)
Nov 11 00:01:12 impressed-jade.ptr.network uvicorn[1593621]: INFO:     Started parent process [1593621]
Nov 11 00:01:14 impressed-jade.ptr.network uvicorn[1593625]: INFO:     Started server process [1593625]
Nov 11 00:01:14 impressed-jade.ptr.network uvicorn[1593625]: INFO:     Waiting for application startup.
Nov 11 00:01:14 impressed-jade.ptr.network uvicorn[1593625]: INFO:     Application startup complete.
Nov 11 00:01:14 impressed-jade.ptr.network uvicorn[1593624]: INFO:     Started server process [1593624]
Nov 11 00:01:14 impressed-jade.ptr.network uvicorn[1593624]: INFO:     Waiting for application startup.
Nov 11 00:01:14 impressed-jade.ptr.network uvicorn[1593624]: INFO:     Application startup complete.
Nov 11 00:01:15 impressed-jade.ptr.network uvicorn[1593624]: INFO:     87.116.135.226:0 - "GET /api/matches/1800/center HTTP/1.0" 200 OK
Nov 11 00:01:21 impressed-jade.ptr.network uvicorn[1593624]: INFO:     87.116.135.226:0 - "GET /api/matches/1800/center HTTP/1.0" 200 OK
Nov 11 00:01:27 impressed-jade.ptr.network uvicorn[1593624]: INFO:     87.116.135.226:0 - "GET /api/matches/1800/center HTTP/1.0" 200 OK
Nov 11 00:01:45 impressed-jade.ptr.network uvicorn[1593624]: INFO:     127.0.0.1:57206 - "GET /api/health HTTP/1.1" 200 OK
Nov 11 00:01:46 impressed-jade.ptr.network uvicorn[1593624]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 00:01:46 impressed-jade.ptr.network uvicorn[1593624]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 00:01:46 impressed-jade.ptr.network uvicorn[1593625]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
