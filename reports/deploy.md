# Zicer deploy 2026-11-10 22:40 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: 4a7097b Теннис: счёт по сетам и геймам текущего сета под табло, перерыв между сетами (и перерывы в других видах спорта) — игра на площадке останавливается; жёлтый теннисный мяч

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
2026/11/11 01:40:22 [warn] 1726729#1726729: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/11 01:40:22 [warn] 1726729#1726729: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/11 01:40:22 [warn] 1726729#1726729: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/11 01:40:22 [warn] 1726729#1726729: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/11 01:40:22 [warn] 1726729#1726729: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/11 01:40:22 [warn] 1726729#1726729: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
maxbet_results | 2026-11-10 22:37:53.669001 | no pending | 
other_results | 2026-11-10 22:37:56.555960 | other results 4 | 
names | 2026-11-10 22:38:43.204182 | names 0 | 
tg_reminders | 2026-11-10 22:38:43.579892 | no token | 
finish_stale | 2026-11-10 22:39:29.448522 | finished 0 | 
football_live | 2026-11-10 22:39:52.439914 | live upserted 1 | 
tg_poll | 2026-11-10 22:40:01.274014 | no token | 
football | 2026-11-10 22:40:16.123302 | football upserted 97 | 
basketball | 2026-11-10 22:40:17.850631 | basketball upserted 421 | 
basketball_week | 2026-11-10 22:40:19.048700 | nba week upserted 48 | 
other_sports | 2026-11-10 22:40:19.376787 | other sports new 0 | 
backfill | 2026-11-10 22:40:19.380849 | already | 
odds | 2026-11-10 22:40:20.379127 | odds matched 50 | 
settle | 2026-11-10 22:40:20.399648 | settled 0 | 
trends | 2026-11-10 22:40:20.636938 | trends 11 | 
analysis | 2026-11-10 22:40:20.646055 | analysis 0 | 
xfeed | 2026-11-10 22:40:34.477903 | xfeed games 91, linked 0, updated 4 | 
live | 2026-11-10 22:40:44.702703 | live updated 4 | 
--- worker log ---
Nov 11 01:40:18 impressed-jade.ptr.network python[1726400]: 2026-11-11 01:40:18,040 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261113 "HTTP/1.1 200 OK"
Nov 11 01:40:18 impressed-jade.ptr.network python[1726400]: 2026-11-11 01:40:18,180 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261114 "HTTP/1.1 200 OK"
Nov 11 01:40:18 impressed-jade.ptr.network python[1726400]: 2026-11-11 01:40:18,305 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261115 "HTTP/1.1 200 OK"
Nov 11 01:40:18 impressed-jade.ptr.network python[1726400]: 2026-11-11 01:40:18,511 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261116 "HTTP/1.1 200 OK"
Nov 11 01:40:18 impressed-jade.ptr.network python[1726400]: 2026-11-11 01:40:18,652 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261117 "HTTP/1.1 200 OK"
Nov 11 01:40:19 impressed-jade.ptr.network python[1726400]: 2026-11-11 01:40:19,018 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261118 "HTTP/1.1 200 OK"
Nov 11 01:40:19 impressed-jade.ptr.network python[1726400]: 2026-11-11 01:40:19,170 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/H/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 01:40:19 impressed-jade.ptr.network python[1726400]: 2026-11-11 01:40:19,264 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/T/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 01:40:19 impressed-jade.ptr.network python[1726400]: 2026-11-11 01:40:19,319 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/V/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 01:40:19 impressed-jade.ptr.network python[1726400]: 2026-11-11 01:40:19,369 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/W/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 01:40:19 impressed-jade.ptr.network python[1726400]: 2026-11-11 01:40:19,506 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 01:40:19 impressed-jade.ptr.network python[1726400]: 2026-11-11 01:40:19,678 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 01:40:20 impressed-jade.ptr.network python[1726400]: 2026-11-11 01:40:20,280 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 01:40:30 impressed-jade.ptr.network python[1726400]: 2026-11-11 01:40:30,743 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 01:40:31 impressed-jade.ptr.network python[1726400]: 2026-11-11 01:40:31,366 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 01:40:31 impressed-jade.ptr.network python[1726400]: 2026-11-11 01:40:31,987 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 01:40:32 impressed-jade.ptr.network python[1726400]: 2026-11-11 01:40:32,616 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 01:40:33 impressed-jade.ptr.network python[1726400]: 2026-11-11 01:40:33,238 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 01:40:33 impressed-jade.ptr.network python[1726400]: 2026-11-11 01:40:33,857 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 01:40:44 impressed-jade.ptr.network python[1726400]: 2026-11-11 01:40:44,593 INFO HTTP Request: GET https://www.maxbet.rs/live/init/sr "HTTP/1.1 200 OK"
Nov 11 01:40:44 impressed-jade.ptr.network python[1726400]: 2026-11-11 01:40:44,813 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 01:40:45 impressed-jade.ptr.network python[1726400]: 2026-11-11 01:40:45,434 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 01:40:46 impressed-jade.ptr.network python[1726400]: 2026-11-11 01:40:46,057 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 01:40:46 impressed-jade.ptr.network python[1726400]: 2026-11-11 01:40:46,686 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 01:40:47 impressed-jade.ptr.network python[1726400]: 2026-11-11 01:40:47,311 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
--- api log ---
Nov 11 01:40:16 impressed-jade.ptr.network uvicorn[1726466]: INFO:     Waiting for application startup.
Nov 11 01:40:16 impressed-jade.ptr.network uvicorn[1726465]: INFO:     Started server process [1726465]
Nov 11 01:40:16 impressed-jade.ptr.network uvicorn[1726465]: INFO:     Waiting for application startup.
Nov 11 01:40:16 impressed-jade.ptr.network uvicorn[1726466]: INFO:     Application startup complete.
Nov 11 01:40:16 impressed-jade.ptr.network uvicorn[1726465]: INFO:     Application startup complete.
Nov 11 01:40:20 impressed-jade.ptr.network uvicorn[1726466]: INFO:     87.116.135.226:0 - "GET /api/matches/1804/center HTTP/1.0" 200 OK
Nov 11 01:40:26 impressed-jade.ptr.network uvicorn[1726465]: INFO:     87.116.135.226:0 - "GET /api/matches/1804/center HTTP/1.0" 200 OK
Nov 11 01:40:31 impressed-jade.ptr.network uvicorn[1726465]: INFO:     87.116.135.226:0 - "GET /api/matches/1804 HTTP/1.0" 200 OK
Nov 11 01:40:32 impressed-jade.ptr.network uvicorn[1726465]: INFO:     87.116.135.226:0 - "GET /api/matches/1804/center HTTP/1.0" 200 OK
Nov 11 01:40:38 impressed-jade.ptr.network uvicorn[1726465]: INFO:     87.116.135.226:0 - "GET /api/matches/1804/center HTTP/1.0" 200 OK
Nov 11 01:40:44 impressed-jade.ptr.network uvicorn[1726465]: INFO:     87.116.135.226:0 - "GET /api/matches/1804/center HTTP/1.0" 200 OK
Nov 11 01:40:46 impressed-jade.ptr.network uvicorn[1726465]: INFO:     127.0.0.1:51348 - "GET /api/health HTTP/1.1" 200 OK
Nov 11 01:40:46 impressed-jade.ptr.network uvicorn[1726465]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 01:40:46 impressed-jade.ptr.network uvicorn[1726465]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 01:40:47 impressed-jade.ptr.network uvicorn[1726465]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
