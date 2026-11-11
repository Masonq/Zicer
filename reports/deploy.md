# Zicer deploy 2026-11-11 00:57 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: 0174ed7 Баскетбол: площадка как настоящая — окрашенные трапеции, отметки мест на линиях штрафной зоны, круг штрафного (сплошной снаружи, пунктир внутри), полукруг под кольцом, трёхочковая с прямыми у углов, щит со стойкой, кольцо с сеткой, отметки вбрасывания; баскетбольные майки команд в шапке

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
2026/11/11 03:56:36 [warn] 1908732#1908732: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/11 03:56:36 [warn] 1908732#1908732: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/11 03:56:36 [warn] 1908732#1908732: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/11 03:56:36 [warn] 1908732#1908732: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/11 03:56:36 [warn] 1908732#1908732: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/11 03:56:36 [warn] 1908732#1908732: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
names | 2026-11-11 00:53:42.162908 | names 0 | 
tg_reminders | 2026-11-11 00:53:42.488182 | no token | 
maxbet_results | 2026-11-11 00:54:01.978781 | no pending | 
other_results | 2026-11-11 00:54:03.130746 | other results 4 | 
finish_stale | 2026-11-11 00:55:53.944139 | finished 0 | 
football_live | 2026-11-11 00:55:59.043596 | live upserted 1 | 
tg_poll | 2026-11-11 00:56:07.918217 | no token | 
football | 2026-11-11 00:56:30.169657 | football upserted 97 |  "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
basketball | 2026-11-11 00:56:31.711579 | basketball upserted 420 | 
basketball_week | 2026-11-11 00:56:32.545657 | nba week upserted 48 | 
other_sports | 2026-11-11 00:56:32.861660 | other sports new 0 | 
backfill | 2026-11-11 00:56:32.868014 | already | 
odds | 2026-11-11 00:56:33.812050 | odds matched 49 | 
settle | 2026-11-11 00:56:33.839392 | settled 0 | 
xfeed | 2026-11-11 00:56:47.753393 | xfeed games 133, linked 0, updated 6 | 
live | 2026-11-11 00:56:57.990249 | live updated 6 | 
trends | 2026-11-10 23:36:09.974574 | trends 11 | 
analysis | 2026-11-10 23:36:10.199323 | analysis 27 | 
--- worker log ---
Nov 11 03:56:31 impressed-jade.ptr.network python[1908410]: 2026-11-11 03:56:31,969 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261114 "HTTP/1.1 200 OK"
Nov 11 03:56:32 impressed-jade.ptr.network python[1908410]: 2026-11-11 03:56:32,011 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261115 "HTTP/1.1 200 OK"
Nov 11 03:56:32 impressed-jade.ptr.network python[1908410]: 2026-11-11 03:56:32,059 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261116 "HTTP/1.1 200 OK"
Nov 11 03:56:32 impressed-jade.ptr.network python[1908410]: 2026-11-11 03:56:32,332 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261117 "HTTP/1.1 200 OK"
Nov 11 03:56:32 impressed-jade.ptr.network python[1908410]: 2026-11-11 03:56:32,484 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261118 "HTTP/1.1 200 OK"
Nov 11 03:56:32 impressed-jade.ptr.network python[1908410]: 2026-11-11 03:56:32,647 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/H/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 03:56:32 impressed-jade.ptr.network python[1908410]: 2026-11-11 03:56:32,745 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/T/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 03:56:32 impressed-jade.ptr.network python[1908410]: 2026-11-11 03:56:32,802 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/V/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 03:56:32 impressed-jade.ptr.network python[1908410]: 2026-11-11 03:56:32,853 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/W/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 03:56:33 impressed-jade.ptr.network python[1908410]: 2026-11-11 03:56:33,021 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 03:56:33 impressed-jade.ptr.network python[1908410]: 2026-11-11 03:56:33,380 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 03:56:33 impressed-jade.ptr.network python[1908410]: 2026-11-11 03:56:33,752 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 03:56:43 impressed-jade.ptr.network python[1908410]: 2026-11-11 03:56:43,954 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 03:56:44 impressed-jade.ptr.network python[1908410]: 2026-11-11 03:56:44,578 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 03:56:45 impressed-jade.ptr.network python[1908410]: 2026-11-11 03:56:45,215 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 03:56:45 impressed-jade.ptr.network python[1908410]: 2026-11-11 03:56:45,845 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 03:56:46 impressed-jade.ptr.network python[1908410]: 2026-11-11 03:56:46,477 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 03:56:47 impressed-jade.ptr.network python[1908410]: 2026-11-11 03:56:47,095 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 03:56:57 impressed-jade.ptr.network python[1908410]: 2026-11-11 03:56:57,876 INFO HTTP Request: GET https://www.maxbet.rs/live/init/sr "HTTP/1.1 200 OK"
Nov 11 03:56:58 impressed-jade.ptr.network python[1908410]: 2026-11-11 03:56:58,090 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 03:56:58 impressed-jade.ptr.network python[1908410]: 2026-11-11 03:56:58,715 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 03:56:59 impressed-jade.ptr.network python[1908410]: 2026-11-11 03:56:59,347 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 03:56:59 impressed-jade.ptr.network python[1908410]: 2026-11-11 03:56:59,976 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 03:57:00 impressed-jade.ptr.network python[1908410]: 2026-11-11 03:57:00,599 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 03:57:01 impressed-jade.ptr.network python[1908410]: 2026-11-11 03:57:01,219 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
--- api log ---
Nov 11 03:56:27 impressed-jade.ptr.network systemd[1]: Stopped zicer-api.service - Zicer API.
Nov 11 03:56:27 impressed-jade.ptr.network systemd[1]: zicer-api.service: Consumed 6.974s CPU time, 170.4M memory peak, 97.0M memory swap peak.
Nov 11 03:56:27 impressed-jade.ptr.network systemd[1]: Started zicer-api.service - Zicer API.
Nov 11 03:56:28 impressed-jade.ptr.network uvicorn[1908412]: INFO:     Uvicorn running on http://127.0.0.1:8790 (Press CTRL+C to quit)
Nov 11 03:56:28 impressed-jade.ptr.network uvicorn[1908412]: INFO:     Started parent process [1908412]
Nov 11 03:56:30 impressed-jade.ptr.network uvicorn[1908418]: INFO:     Started server process [1908418]
Nov 11 03:56:30 impressed-jade.ptr.network uvicorn[1908418]: INFO:     Waiting for application startup.
Nov 11 03:56:30 impressed-jade.ptr.network uvicorn[1908418]: INFO:     Application startup complete.
Nov 11 03:56:30 impressed-jade.ptr.network uvicorn[1908417]: INFO:     Started server process [1908417]
Nov 11 03:56:30 impressed-jade.ptr.network uvicorn[1908417]: INFO:     Waiting for application startup.
Nov 11 03:56:30 impressed-jade.ptr.network uvicorn[1908417]: INFO:     Application startup complete.
Nov 11 03:57:00 impressed-jade.ptr.network uvicorn[1908417]: INFO:     127.0.0.1:54836 - "GET /api/health HTTP/1.1" 200 OK
Nov 11 03:57:00 impressed-jade.ptr.network uvicorn[1908417]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 03:57:00 impressed-jade.ptr.network uvicorn[1908417]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 03:57:00 impressed-jade.ptr.network uvicorn[1908417]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
