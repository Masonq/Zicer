# Zicer deploy 2026-11-10 23:55 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: 0e5d0eb Профиль: кнопки «Редактировать профиль» и «Админка» в одну строку, по центру

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
2026/11/11 02:55:15 [warn] 1828612#1828612: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/11 02:55:15 [warn] 1828612#1828612: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/11 02:55:15 [warn] 1828612#1828612: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/11 02:55:15 [warn] 1828612#1828612: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/11 02:55:15 [warn] 1828612#1828612: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/11 02:55:15 [warn] 1828612#1828612: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
names | 2026-11-10 23:54:50.342504 | names 0 | 
tg_poll | 2026-11-10 23:54:50.694920 | no token | 
tg_reminders | 2026-11-10 23:54:50.697463 | no token | 
football_live | 2026-11-10 23:54:55.759128 | live upserted 1 | 
finish_stale | 2026-11-10 23:55:04.582139 | finished 0 | 
football | 2026-11-10 23:55:09.207046 | football upserted 97 |  "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
basketball | 2026-11-10 23:55:11.131577 | basketball upserted 420 | 
basketball_week | 2026-11-10 23:55:12.983050 | nba week upserted 48 | 
other_sports | 2026-11-10 23:55:13.303945 | other sports new 0 | 
backfill | 2026-11-10 23:55:13.307455 | already | 
odds | 2026-11-10 23:55:13.947419 | odds matched 50 | 
settle | 2026-11-10 23:55:13.970923 | settled 0 | 
xfeed | 2026-11-10 23:55:27.804602 | xfeed games 82, linked 0, updated 4 | 
live | 2026-11-10 23:55:38.010657 | live updated 2 | 
maxbet_results | 2026-11-10 23:52:50.116049 | no pending | 
other_results | 2026-11-10 23:52:50.119048 | no pending | 
trends | 2026-11-10 23:36:09.974574 | trends 11 | 
analysis | 2026-11-10 23:36:10.199323 | analysis 27 | 
--- worker log ---
Nov 11 02:55:11 impressed-jade.ptr.network python[1828279]: 2026-11-11 02:55:11,316 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261113 "HTTP/1.1 200 OK"
Nov 11 02:55:11 impressed-jade.ptr.network python[1828279]: 2026-11-11 02:55:11,698 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261114 "HTTP/1.1 200 OK"
Nov 11 02:55:11 impressed-jade.ptr.network python[1828279]: 2026-11-11 02:55:11,823 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261115 "HTTP/1.1 200 OK"
Nov 11 02:55:12 impressed-jade.ptr.network python[1828279]: 2026-11-11 02:55:12,204 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261116 "HTTP/1.1 200 OK"
Nov 11 02:55:12 impressed-jade.ptr.network python[1828279]: 2026-11-11 02:55:12,500 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261117 "HTTP/1.1 200 OK"
Nov 11 02:55:12 impressed-jade.ptr.network python[1828279]: 2026-11-11 02:55:12,867 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261118 "HTTP/1.1 200 OK"
Nov 11 02:55:13 impressed-jade.ptr.network python[1828279]: 2026-11-11 02:55:13,111 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/H/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 02:55:13 impressed-jade.ptr.network python[1828279]: 2026-11-11 02:55:13,182 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/T/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 02:55:13 impressed-jade.ptr.network python[1828279]: 2026-11-11 02:55:13,241 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/V/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 02:55:13 impressed-jade.ptr.network python[1828279]: 2026-11-11 02:55:13,297 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/W/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 02:55:13 impressed-jade.ptr.network python[1828279]: 2026-11-11 02:55:13,422 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 02:55:13 impressed-jade.ptr.network python[1828279]: 2026-11-11 02:55:13,588 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 02:55:13 impressed-jade.ptr.network python[1828279]: 2026-11-11 02:55:13,899 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 02:55:24 impressed-jade.ptr.network python[1828279]: 2026-11-11 02:55:24,068 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 02:55:24 impressed-jade.ptr.network python[1828279]: 2026-11-11 02:55:24,691 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 02:55:25 impressed-jade.ptr.network python[1828279]: 2026-11-11 02:55:25,315 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 02:55:25 impressed-jade.ptr.network python[1828279]: 2026-11-11 02:55:25,941 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 02:55:26 impressed-jade.ptr.network python[1828279]: 2026-11-11 02:55:26,565 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 02:55:27 impressed-jade.ptr.network python[1828279]: 2026-11-11 02:55:27,188 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 02:55:37 impressed-jade.ptr.network python[1828279]: 2026-11-11 02:55:37,929 INFO HTTP Request: GET https://www.maxbet.rs/live/init/sr "HTTP/1.1 200 OK"
Nov 11 02:55:38 impressed-jade.ptr.network python[1828279]: 2026-11-11 02:55:38,104 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 02:55:38 impressed-jade.ptr.network python[1828279]: 2026-11-11 02:55:38,727 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 02:55:39 impressed-jade.ptr.network python[1828279]: 2026-11-11 02:55:39,356 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 02:55:39 impressed-jade.ptr.network python[1828279]: 2026-11-11 02:55:39,980 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 02:55:40 impressed-jade.ptr.network python[1828279]: 2026-11-11 02:55:40,606 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
--- api log ---
Nov 11 02:55:07 impressed-jade.ptr.network systemd[1]: Stopped zicer-api.service - Zicer API.
Nov 11 02:55:07 impressed-jade.ptr.network systemd[1]: zicer-api.service: Consumed 3.438s CPU time, 170.6M memory peak, 0B memory swap peak.
Nov 11 02:55:07 impressed-jade.ptr.network systemd[1]: Started zicer-api.service - Zicer API.
Nov 11 02:55:07 impressed-jade.ptr.network uvicorn[1828281]: INFO:     Uvicorn running on http://127.0.0.1:8790 (Press CTRL+C to quit)
Nov 11 02:55:07 impressed-jade.ptr.network uvicorn[1828281]: INFO:     Started parent process [1828281]
Nov 11 02:55:08 impressed-jade.ptr.network uvicorn[1828285]: INFO:     Started server process [1828285]
Nov 11 02:55:08 impressed-jade.ptr.network uvicorn[1828285]: INFO:     Waiting for application startup.
Nov 11 02:55:08 impressed-jade.ptr.network uvicorn[1828285]: INFO:     Application startup complete.
Nov 11 02:55:08 impressed-jade.ptr.network uvicorn[1828284]: INFO:     Started server process [1828284]
Nov 11 02:55:08 impressed-jade.ptr.network uvicorn[1828284]: INFO:     Waiting for application startup.
Nov 11 02:55:08 impressed-jade.ptr.network uvicorn[1828284]: INFO:     Application startup complete.
Nov 11 02:55:39 impressed-jade.ptr.network uvicorn[1828285]: INFO:     127.0.0.1:39572 - "GET /api/health HTTP/1.1" 200 OK
Nov 11 02:55:40 impressed-jade.ptr.network uvicorn[1828284]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 02:55:40 impressed-jade.ptr.network uvicorn[1828284]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 02:55:40 impressed-jade.ptr.network uvicorn[1828285]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
