# Zicer deploy 2026-11-10 20:34 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: 58332f4 Матч-центр: мяч/шайба двигаются только по реальным событиям, без случайных прыжков; подача в теннисе у подающего; завершение матчей, пропавших из лайва (расчёт ждёт официальный результат)

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
2026/11/10 23:34:33 [warn] 1558067#1558067: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/10 23:34:33 [warn] 1558067#1558067: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/10 23:34:33 [warn] 1558067#1558067: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/10 23:34:33 [warn] 1558067#1558067: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/10 23:34:33 [warn] 1558067#1558067: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/10 23:34:33 [warn] 1558067#1558067: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
matches: {'basketball': 676, 'waterpolo': 4, 'tennis': 12, 'hockey': 35, 'volleyball': 5, 'football': 1090}
football_live | 2026-11-10 20:33:52.925872 | live upserted 4 | 
tg_poll | 2026-11-10 20:34:11.561446 | no token | 
football | 2026-11-10 20:34:27.159065 | football upserted 91 | 
basketball | 2026-11-10 20:34:30.706527 | basketball upserted 421 | 
basketball_week | 2026-11-10 20:34:31.308822 | nba week upserted 40 | 
other_sports | 2026-11-10 20:34:31.695936 | other sports new 0 | 
backfill | 2026-11-10 20:34:31.704176 | already | 
odds | 2026-11-10 20:34:32.809192 | odds matched 50 | 
settle | 2026-11-10 20:34:32.853174 | settled 0 | 
trends | 2026-11-10 20:34:33.699680 | trends 11 | 
analysis | 2026-11-10 20:34:33.709675 | analysis 0 | 
xfeed | 2026-11-10 20:34:47.695657 | xfeed games 207, linked 0, updated 11 | 
live | 2026-11-10 20:34:58.015447 | live updated 14 | 
names | 2026-11-10 20:31:03.606140 | names 0 | 
tg_reminders | 2026-11-10 20:31:04.135297 | no token | 
maxbet_results | 2026-11-10 20:32:09.063453 | maxbet results 3 | 
other_results | 2026-11-10 20:32:13.589875 | other results 5 | 
--- worker log ---
Nov 10 23:34:30 impressed-jade.ptr.network python[1557742]: 2026-11-10 23:34:30,581 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261110 "HTTP/1.1 200 OK"
Nov 10 23:34:30 impressed-jade.ptr.network python[1557742]: 2026-11-10 23:34:30,646 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261111 "HTTP/1.1 200 OK"
Nov 10 23:34:30 impressed-jade.ptr.network python[1557742]: 2026-11-10 23:34:30,829 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261112 "HTTP/1.1 200 OK"
Nov 10 23:34:30 impressed-jade.ptr.network python[1557742]: 2026-11-10 23:34:30,884 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261113 "HTTP/1.1 200 OK"
Nov 10 23:34:30 impressed-jade.ptr.network python[1557742]: 2026-11-10 23:34:30,959 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261114 "HTTP/1.1 200 OK"
Nov 10 23:34:31 impressed-jade.ptr.network python[1557742]: 2026-11-10 23:34:31,008 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261115 "HTTP/1.1 200 OK"
Nov 10 23:34:31 impressed-jade.ptr.network python[1557742]: 2026-11-10 23:34:31,082 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261116 "HTTP/1.1 200 OK"
Nov 10 23:34:31 impressed-jade.ptr.network python[1557742]: 2026-11-10 23:34:31,259 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261117 "HTTP/1.1 200 OK"
Nov 10 23:34:31 impressed-jade.ptr.network python[1557742]: 2026-11-10 23:34:31,446 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/H/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 23:34:31 impressed-jade.ptr.network python[1557742]: 2026-11-10 23:34:31,542 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/T/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 23:34:31 impressed-jade.ptr.network python[1557742]: 2026-11-10 23:34:31,611 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/V/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 23:34:31 impressed-jade.ptr.network python[1557742]: 2026-11-10 23:34:31,681 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/W/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 23:34:31 impressed-jade.ptr.network python[1557742]: 2026-11-10 23:34:31,834 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 23:34:32 impressed-jade.ptr.network python[1557742]: 2026-11-10 23:34:32,184 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 23:34:32 impressed-jade.ptr.network python[1557742]: 2026-11-10 23:34:32,689 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 23:34:43 impressed-jade.ptr.network python[1557742]: 2026-11-10 23:34:43,848 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 10 23:34:44 impressed-jade.ptr.network python[1557742]: 2026-11-10 23:34:44,503 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 10 23:34:45 impressed-jade.ptr.network python[1557742]: 2026-11-10 23:34:45,133 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 10 23:34:45 impressed-jade.ptr.network python[1557742]: 2026-11-10 23:34:45,764 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 10 23:34:46 impressed-jade.ptr.network python[1557742]: 2026-11-10 23:34:46,394 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 10 23:34:47 impressed-jade.ptr.network python[1557742]: 2026-11-10 23:34:47,015 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 10 23:34:57 impressed-jade.ptr.network python[1557742]: 2026-11-10 23:34:57,837 INFO HTTP Request: GET https://www.maxbet.rs/live/init/sr "HTTP/1.1 200 OK"
Nov 10 23:34:58 impressed-jade.ptr.network python[1557742]: 2026-11-10 23:34:58,133 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 10 23:34:58 impressed-jade.ptr.network python[1557742]: 2026-11-10 23:34:58,781 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 10 23:34:59 impressed-jade.ptr.network python[1557742]: 2026-11-10 23:34:59,408 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
--- api log ---
Nov 10 23:34:24 impressed-jade.ptr.network systemd[1]: Stopped zicer-api.service - Zicer API.
Nov 10 23:34:24 impressed-jade.ptr.network systemd[1]: zicer-api.service: Consumed 6.106s CPU time, 176.5M memory peak, 49.7M memory swap peak.
Nov 10 23:34:24 impressed-jade.ptr.network systemd[1]: Started zicer-api.service - Zicer API.
Nov 10 23:34:25 impressed-jade.ptr.network uvicorn[1557786]: INFO:     Uvicorn running on http://127.0.0.1:8790 (Press CTRL+C to quit)
Nov 10 23:34:25 impressed-jade.ptr.network uvicorn[1557786]: INFO:     Started parent process [1557786]
Nov 10 23:34:29 impressed-jade.ptr.network uvicorn[1557789]: INFO:     Started server process [1557789]
Nov 10 23:34:29 impressed-jade.ptr.network uvicorn[1557789]: INFO:     Waiting for application startup.
Nov 10 23:34:29 impressed-jade.ptr.network uvicorn[1557790]: INFO:     Started server process [1557790]
Nov 10 23:34:29 impressed-jade.ptr.network uvicorn[1557790]: INFO:     Waiting for application startup.
Nov 10 23:34:29 impressed-jade.ptr.network uvicorn[1557789]: INFO:     Application startup complete.
Nov 10 23:34:29 impressed-jade.ptr.network uvicorn[1557790]: INFO:     Application startup complete.
Nov 10 23:34:58 impressed-jade.ptr.network uvicorn[1557790]: INFO:     127.0.0.1:46986 - "GET /api/health HTTP/1.1" 200 OK
Nov 10 23:34:58 impressed-jade.ptr.network uvicorn[1557790]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 10 23:34:58 impressed-jade.ptr.network uvicorn[1557790]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 10 23:34:58 impressed-jade.ptr.network uvicorn[1557790]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
