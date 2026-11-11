# Zicer deploy 2026-11-11 01:33 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: 2bcb779 Картинка тикета: название лиги на языке пользователя

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
2026/11/11 04:32:56 [warn] 1957677#1957677: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/11 04:32:56 [warn] 1957677#1957677: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/11 04:32:56 [warn] 1957677#1957677: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/11 04:32:56 [warn] 1957677#1957677: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/11 04:32:56 [warn] 1957677#1957677: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/11 04:32:56 [warn] 1957677#1957677: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
basketball | 2026-11-11 01:32:51.591605 | basketball upserted 420 | 
basketball_week | 2026-11-11 01:32:52.723363 | nba week upserted 48 | 
other_sports | 2026-11-11 01:32:53.041822 | other sports new 0 | 
backfill | 2026-11-11 01:32:53.045476 | already | 
odds | 2026-11-11 01:32:53.712251 | odds matched 48 | 
settle | 2026-11-11 01:32:53.741235 | settled 0 | 
xfeed | 2026-11-11 01:33:07.593463 | xfeed games 142, linked 0, updated 6 | 
live | 2026-11-11 01:33:17.882188 | live updated 8 | 
finish_stale | 2026-11-11 01:31:42.866385 | finished 0 | 
tg_poll | 2026-11-11 01:32:23.936632 | no token | 
football_live | 2026-11-11 01:32:29.032591 | live upserted 1 | 
names | 2026-11-11 01:28:45.713828 | names 0 | 
tg_reminders | 2026-11-11 01:28:46.028427 | no token | 
maxbet_results | 2026-11-11 01:32:39.619929 | no pending | 
other_results | 2026-11-11 01:32:40.928175 | other results 5 | 
trends | 2026-11-10 23:36:09.974574 | trends 11 | 
analysis | 2026-11-10 23:36:10.199323 | analysis 27 | 
football | 2026-11-11 01:32:49.661941 | football upserted 97 |  "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
--- worker log ---
Nov 11 04:32:51 impressed-jade.ptr.network python[1957341]: 2026-11-11 04:32:51,910 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261114 "HTTP/1.1 200 OK"
Nov 11 04:32:52 impressed-jade.ptr.network python[1957341]: 2026-11-11 04:32:52,038 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261115 "HTTP/1.1 200 OK"
Nov 11 04:32:52 impressed-jade.ptr.network python[1957341]: 2026-11-11 04:32:52,180 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261116 "HTTP/1.1 200 OK"
Nov 11 04:32:52 impressed-jade.ptr.network python[1957341]: 2026-11-11 04:32:52,559 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261117 "HTTP/1.1 200 OK"
Nov 11 04:32:52 impressed-jade.ptr.network python[1957341]: 2026-11-11 04:32:52,685 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261118 "HTTP/1.1 200 OK"
Nov 11 04:32:52 impressed-jade.ptr.network python[1957341]: 2026-11-11 04:32:52,830 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/H/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 04:32:52 impressed-jade.ptr.network python[1957341]: 2026-11-11 04:32:52,917 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/T/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 04:32:52 impressed-jade.ptr.network python[1957341]: 2026-11-11 04:32:52,979 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/V/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 04:32:53 impressed-jade.ptr.network python[1957341]: 2026-11-11 04:32:53,034 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/W/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 04:32:53 impressed-jade.ptr.network python[1957341]: 2026-11-11 04:32:53,158 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 04:32:53 impressed-jade.ptr.network python[1957341]: 2026-11-11 04:32:53,331 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 04:32:53 impressed-jade.ptr.network python[1957341]: 2026-11-11 04:32:53,669 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 04:33:03 impressed-jade.ptr.network python[1957341]: 2026-11-11 04:33:03,834 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 04:33:04 impressed-jade.ptr.network python[1957341]: 2026-11-11 04:33:04,457 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 04:33:05 impressed-jade.ptr.network python[1957341]: 2026-11-11 04:33:05,093 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 04:33:05 impressed-jade.ptr.network python[1957341]: 2026-11-11 04:33:05,721 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 04:33:06 impressed-jade.ptr.network python[1957341]: 2026-11-11 04:33:06,343 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 04:33:06 impressed-jade.ptr.network python[1957341]: 2026-11-11 04:33:06,961 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 04:33:17 impressed-jade.ptr.network python[1957341]: 2026-11-11 04:33:17,769 INFO HTTP Request: GET https://www.maxbet.rs/live/init/sr "HTTP/1.1 200 OK"
Nov 11 04:33:17 impressed-jade.ptr.network python[1957341]: 2026-11-11 04:33:17,973 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 04:33:18 impressed-jade.ptr.network python[1957341]: 2026-11-11 04:33:18,597 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 04:33:19 impressed-jade.ptr.network python[1957341]: 2026-11-11 04:33:19,233 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 04:33:19 impressed-jade.ptr.network python[1957341]: 2026-11-11 04:33:19,862 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 04:33:20 impressed-jade.ptr.network python[1957341]: 2026-11-11 04:33:20,484 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 04:33:21 impressed-jade.ptr.network python[1957341]: 2026-11-11 04:33:21,102 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
--- api log ---
Nov 11 04:32:47 impressed-jade.ptr.network systemd[1]: Stopped zicer-api.service - Zicer API.
Nov 11 04:32:47 impressed-jade.ptr.network systemd[1]: zicer-api.service: Consumed 3.292s CPU time, 189.2M memory peak, 0B memory swap peak.
Nov 11 04:32:47 impressed-jade.ptr.network systemd[1]: Started zicer-api.service - Zicer API.
Nov 11 04:32:47 impressed-jade.ptr.network uvicorn[1957343]: INFO:     Uvicorn running on http://127.0.0.1:8790 (Press CTRL+C to quit)
Nov 11 04:32:47 impressed-jade.ptr.network uvicorn[1957343]: INFO:     Started parent process [1957343]
Nov 11 04:32:49 impressed-jade.ptr.network uvicorn[1957348]: INFO:     Started server process [1957348]
Nov 11 04:32:49 impressed-jade.ptr.network uvicorn[1957348]: INFO:     Waiting for application startup.
Nov 11 04:32:49 impressed-jade.ptr.network uvicorn[1957348]: INFO:     Application startup complete.
Nov 11 04:32:49 impressed-jade.ptr.network uvicorn[1957347]: INFO:     Started server process [1957347]
Nov 11 04:32:49 impressed-jade.ptr.network uvicorn[1957347]: INFO:     Waiting for application startup.
Nov 11 04:32:49 impressed-jade.ptr.network uvicorn[1957347]: INFO:     Application startup complete.
Nov 11 04:33:19 impressed-jade.ptr.network uvicorn[1957347]: INFO:     127.0.0.1:36650 - "GET /api/health HTTP/1.1" 200 OK
Nov 11 04:33:20 impressed-jade.ptr.network uvicorn[1957347]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 04:33:20 impressed-jade.ptr.network uvicorn[1957348]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 04:33:20 impressed-jade.ptr.network uvicorn[1957347]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
