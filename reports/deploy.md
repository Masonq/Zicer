# Zicer deploy 2026-11-11 00:30 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: 110f693 Скорость мяча/шайбы по реальному расстоянию: время полёта = длина передачи / скорость спорта; замедлены хоккей, баскетбол, водное поло, футбол; удары быстрее передач

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
2026/11/11 03:30:01 [warn] 1876075#1876075: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/11 03:30:01 [warn] 1876075#1876075: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/11 03:30:01 [warn] 1876075#1876075: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/11 03:30:01 [warn] 1876075#1876075: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/11 03:30:01 [warn] 1876075#1876075: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/11 03:30:01 [warn] 1876075#1876075: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
matches: {'basketball': 688, 'football': 1100, 'hockey': 35, 'tennis': 12, 'volleyball': 5, 'waterpolo': 4}
maxbet_results | 2026-11-11 00:28:53.890376 | no pending | 
other_results | 2026-11-11 00:28:55.920698 | other results 4 | 
finish_stale | 2026-11-11 00:29:05.283963 | finished 0 | 
football_live | 2026-11-11 00:29:19.445101 | live upserted 1 | 
football | 2026-11-11 00:29:54.265735 | football upserted 97 |  "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
basketball | 2026-11-11 00:29:55.973081 | basketball upserted 420 | 
basketball_week | 2026-11-11 00:29:57.344775 | nba week upserted 48 | 
other_sports | 2026-11-11 00:29:57.627655 | other sports new 0 | 
backfill | 2026-11-11 00:29:57.631419 | already | 
odds | 2026-11-11 00:29:58.818214 | odds matched 50 | 
settle | 2026-11-11 00:29:58.838115 | settled 0 | 
live | 2026-11-11 00:30:22.914649 | live updated 4 | 
xfeed | 2026-11-11 00:30:26.750268 | xfeed games 124, linked 0, updated 5 | 
tg_poll | 2026-11-11 00:30:26.754772 | no token | 
trends | 2026-11-10 23:36:09.974574 | trends 11 | 
analysis | 2026-11-10 23:36:10.199323 | analysis 27 | 
names | 2026-11-11 00:27:42.688013 | names 0 | 
tg_reminders | 2026-11-11 00:27:43.010418 | no token | 
--- worker log ---
Nov 11 03:29:56 impressed-jade.ptr.network python[1875736]: 2026-11-11 03:29:56,301 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261114 "HTTP/1.1 200 OK"
Nov 11 03:29:56 impressed-jade.ptr.network python[1875736]: 2026-11-11 03:29:56,427 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261115 "HTTP/1.1 200 OK"
Nov 11 03:29:56 impressed-jade.ptr.network python[1875736]: 2026-11-11 03:29:56,814 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261116 "HTTP/1.1 200 OK"
Nov 11 03:29:56 impressed-jade.ptr.network python[1875736]: 2026-11-11 03:29:56,944 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261117 "HTTP/1.1 200 OK"
Nov 11 03:29:57 impressed-jade.ptr.network python[1875736]: 2026-11-11 03:29:57,312 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261118 "HTTP/1.1 200 OK"
Nov 11 03:29:57 impressed-jade.ptr.network python[1875736]: 2026-11-11 03:29:57,438 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/H/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 03:29:57 impressed-jade.ptr.network python[1875736]: 2026-11-11 03:29:57,514 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/T/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 03:29:57 impressed-jade.ptr.network python[1875736]: 2026-11-11 03:29:57,565 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/V/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 03:29:57 impressed-jade.ptr.network python[1875736]: 2026-11-11 03:29:57,620 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/W/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 03:29:57 impressed-jade.ptr.network python[1875736]: 2026-11-11 03:29:57,997 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 03:29:58 impressed-jade.ptr.network python[1875736]: 2026-11-11 03:29:58,361 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 03:29:58 impressed-jade.ptr.network python[1875736]: 2026-11-11 03:29:58,781 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 03:30:08 impressed-jade.ptr.network python[1875736]: 2026-11-11 03:30:08,937 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 03:30:09 impressed-jade.ptr.network python[1875736]: 2026-11-11 03:30:09,561 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 03:30:10 impressed-jade.ptr.network python[1875736]: 2026-11-11 03:30:10,194 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 03:30:10 impressed-jade.ptr.network python[1875736]: 2026-11-11 03:30:10,822 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 03:30:11 impressed-jade.ptr.network python[1875736]: 2026-11-11 03:30:11,445 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 03:30:12 impressed-jade.ptr.network python[1875736]: 2026-11-11 03:30:12,065 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 03:30:22 impressed-jade.ptr.network python[1875736]: 2026-11-11 03:30:22,809 INFO HTTP Request: GET https://www.maxbet.rs/live/init/sr "HTTP/1.1 200 OK"
Nov 11 03:30:23 impressed-jade.ptr.network python[1875736]: 2026-11-11 03:30:23,001 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 03:30:23 impressed-jade.ptr.network python[1875736]: 2026-11-11 03:30:23,625 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 03:30:24 impressed-jade.ptr.network python[1875736]: 2026-11-11 03:30:24,257 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 03:30:24 impressed-jade.ptr.network python[1875736]: 2026-11-11 03:30:24,885 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 03:30:25 impressed-jade.ptr.network python[1875736]: 2026-11-11 03:30:25,511 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 03:30:26 impressed-jade.ptr.network python[1875736]: 2026-11-11 03:30:26,129 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
--- api log ---
Nov 11 03:29:52 impressed-jade.ptr.network systemd[1]: zicer-api.service: Consumed 4.002s CPU time, 167.8M memory peak, 82.1M memory swap peak.
Nov 11 03:29:52 impressed-jade.ptr.network systemd[1]: Started zicer-api.service - Zicer API.
Nov 11 03:29:53 impressed-jade.ptr.network uvicorn[1875776]: INFO:     Uvicorn running on http://127.0.0.1:8790 (Press CTRL+C to quit)
Nov 11 03:29:53 impressed-jade.ptr.network uvicorn[1875776]: INFO:     Started parent process [1875776]
Nov 11 03:29:54 impressed-jade.ptr.network uvicorn[1875782]: INFO:     Started server process [1875782]
Nov 11 03:29:54 impressed-jade.ptr.network uvicorn[1875782]: INFO:     Waiting for application startup.
Nov 11 03:29:54 impressed-jade.ptr.network uvicorn[1875782]: INFO:     Application startup complete.
Nov 11 03:29:54 impressed-jade.ptr.network uvicorn[1875783]: INFO:     Started server process [1875783]
Nov 11 03:29:54 impressed-jade.ptr.network uvicorn[1875783]: INFO:     Waiting for application startup.
Nov 11 03:29:54 impressed-jade.ptr.network uvicorn[1875783]: INFO:     Application startup complete.
Nov 11 03:29:58 impressed-jade.ptr.network uvicorn[1875783]: INFO:     87.116.135.226:0 - "GET /api/matches/1766/center HTTP/1.0" 200 OK
Nov 11 03:30:26 impressed-jade.ptr.network uvicorn[1875783]: INFO:     127.0.0.1:36464 - "GET /api/health HTTP/1.1" 200 OK
Nov 11 03:30:26 impressed-jade.ptr.network uvicorn[1875783]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 03:30:27 impressed-jade.ptr.network uvicorn[1875783]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 03:30:27 impressed-jade.ptr.network uvicorn[1875783]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
