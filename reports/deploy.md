# Zicer deploy 2026-11-10 20:13 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: c1a1d07 Теннисный трекер как у букмекеров: счёт в гейме, подающий, сторона подачи, «Поинт», крупный счёт, гейм/брейк/брейк-пойнт; исправлено затирание лайв-данных 22Bet

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
2026/11/10 23:13:11 [warn] 1529869#1529869: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/10 23:13:11 [warn] 1529869#1529869: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/10 23:13:11 [warn] 1529869#1529869: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/10 23:13:11 [warn] 1529869#1529869: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/10 23:13:11 [warn] 1529869#1529869: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/10 23:13:11 [warn] 1529869#1529869: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
football_live | 2026-11-10 20:12:40.699974 | live upserted 4 | 
tg_poll | 2026-11-10 20:12:49.662439 | no token | 
football | 2026-11-10 20:13:04.234691 | football upserted 91 | 
basketball | 2026-11-10 20:13:06.161462 | basketball upserted 421 | 
basketball_week | 2026-11-10 20:13:06.993582 | nba week upserted 40 | 
other_sports | 2026-11-10 20:13:07.364997 | other sports new 0 | 
backfill | 2026-11-10 20:13:07.369907 | already | 
odds | 2026-11-10 20:13:08.130709 | odds matched 50 | 
settle | 2026-11-10 20:13:08.169213 | settled 0 | 
trends | 2026-11-10 20:13:08.478795 | trends 11 | 
analysis | 2026-11-10 20:13:08.487774 | analysis 0 | 
xfeed | 2026-11-10 20:13:22.419295 | xfeed games 224, linked 0, updated 12 | 
live | 2026-11-10 20:13:32.739186 | live updated 14 | 
names | 2026-11-10 20:09:46.564432 | names 0 | 
tg_reminders | 2026-11-10 20:09:47.029792 | no token | 
maxbet_results | 2026-11-10 20:10:48.129215 | maxbet results 3 | 
other_results | 2026-11-10 20:11:00.961721 | other results 5 | 
--- worker log ---
Nov 10 23:13:06 impressed-jade.ptr.network python[1529539]: 2026-11-10 23:13:06,392 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261113 "HTTP/1.1 200 OK"
Nov 10 23:13:06 impressed-jade.ptr.network python[1529539]: 2026-11-10 23:13:06,530 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261114 "HTTP/1.1 200 OK"
Nov 10 23:13:06 impressed-jade.ptr.network python[1529539]: 2026-11-10 23:13:06,668 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261115 "HTTP/1.1 200 OK"
Nov 10 23:13:06 impressed-jade.ptr.network python[1529539]: 2026-11-10 23:13:06,814 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261116 "HTTP/1.1 200 OK"
Nov 10 23:13:06 impressed-jade.ptr.network python[1529539]: 2026-11-10 23:13:06,966 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261117 "HTTP/1.1 200 OK"
Nov 10 23:13:07 impressed-jade.ptr.network python[1529539]: 2026-11-10 23:13:07,116 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/H/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 23:13:07 impressed-jade.ptr.network python[1529539]: 2026-11-10 23:13:07,212 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/T/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 23:13:07 impressed-jade.ptr.network python[1529539]: 2026-11-10 23:13:07,275 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/V/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 23:13:07 impressed-jade.ptr.network python[1529539]: 2026-11-10 23:13:07,354 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/W/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 23:13:07 impressed-jade.ptr.network python[1529539]: 2026-11-10 23:13:07,485 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 23:13:07 impressed-jade.ptr.network python[1529539]: 2026-11-10 23:13:07,670 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 23:13:08 impressed-jade.ptr.network python[1529539]: 2026-11-10 23:13:08,050 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 23:13:18 impressed-jade.ptr.network python[1529539]: 2026-11-10 23:13:18,609 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 10 23:13:19 impressed-jade.ptr.network python[1529539]: 2026-11-10 23:13:19,255 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 10 23:13:19 impressed-jade.ptr.network python[1529539]: 2026-11-10 23:13:19,889 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 10 23:13:20 impressed-jade.ptr.network python[1529539]: 2026-11-10 23:13:20,521 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 10 23:13:21 impressed-jade.ptr.network python[1529539]: 2026-11-10 23:13:21,148 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 10 23:13:21 impressed-jade.ptr.network python[1529539]: 2026-11-10 23:13:21,766 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 10 23:13:32 impressed-jade.ptr.network python[1529539]: 2026-11-10 23:13:32,557 INFO HTTP Request: GET https://www.maxbet.rs/live/init/sr "HTTP/1.1 200 OK"
Nov 10 23:13:32 impressed-jade.ptr.network python[1529539]: 2026-11-10 23:13:32,855 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 10 23:13:33 impressed-jade.ptr.network python[1529539]: 2026-11-10 23:13:33,499 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 10 23:13:34 impressed-jade.ptr.network python[1529539]: 2026-11-10 23:13:34,130 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 10 23:13:34 impressed-jade.ptr.network python[1529539]: 2026-11-10 23:13:34,757 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 10 23:13:35 impressed-jade.ptr.network python[1529539]: 2026-11-10 23:13:35,381 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 10 23:13:36 impressed-jade.ptr.network python[1529539]: 2026-11-10 23:13:36,003 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
--- api log ---
Nov 10 23:13:03 impressed-jade.ptr.network uvicorn[1529563]: INFO:     Uvicorn running on http://127.0.0.1:8790 (Press CTRL+C to quit)
Nov 10 23:13:03 impressed-jade.ptr.network uvicorn[1529563]: INFO:     Started parent process [1529563]
Nov 10 23:13:04 impressed-jade.ptr.network uvicorn[1529603]: INFO:     Started server process [1529603]
Nov 10 23:13:04 impressed-jade.ptr.network uvicorn[1529603]: INFO:     Waiting for application startup.
Nov 10 23:13:05 impressed-jade.ptr.network uvicorn[1529604]: INFO:     Started server process [1529604]
Nov 10 23:13:05 impressed-jade.ptr.network uvicorn[1529604]: INFO:     Waiting for application startup.
Nov 10 23:13:05 impressed-jade.ptr.network uvicorn[1529603]: INFO:     Application startup complete.
Nov 10 23:13:05 impressed-jade.ptr.network uvicorn[1529604]: INFO:     Application startup complete.
Nov 10 23:13:13 impressed-jade.ptr.network uvicorn[1529604]: INFO:     87.116.135.226:0 - "GET /api/matches/1799/center HTTP/1.0" 200 OK
Nov 10 23:13:28 impressed-jade.ptr.network uvicorn[1529604]: INFO:     87.116.135.226:0 - "GET /api/matches/1799 HTTP/1.0" 200 OK
Nov 10 23:13:29 impressed-jade.ptr.network uvicorn[1529603]: INFO:     87.116.135.226:0 - "GET /api/matches/1799/center HTTP/1.0" 200 OK
Nov 10 23:13:35 impressed-jade.ptr.network uvicorn[1529603]: INFO:     127.0.0.1:53462 - "GET /api/health HTTP/1.1" 200 OK
Nov 10 23:13:35 impressed-jade.ptr.network uvicorn[1529604]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 10 23:13:35 impressed-jade.ptr.network uvicorn[1529604]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 10 23:13:35 impressed-jade.ptr.network uvicorn[1529604]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
