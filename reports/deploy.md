# Zicer deploy 2026-11-11 01:53 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: c0f2e4c Страница тикета как настоящий купон: статус, дата, полоса прогресса по событиям, коэффициент/ставка/выигрыш, карточки событий с лигой, временем, понятной ставкой и результатом; превью «Для сторис» без растягивания (оба формата загружаются заранее)

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
2026/11/11 04:53:21 [warn] 1985020#1985020: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/11 04:53:21 [warn] 1985020#1985020: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/11 04:53:21 [warn] 1985020#1985020: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/11 04:53:21 [warn] 1985020#1985020: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/11 04:53:21 [warn] 1985020#1985020: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/11 04:53:21 [warn] 1985020#1985020: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
tg_poll | 2026-11-11 01:52:55.471459 | no token | 
football_live | 2026-11-11 01:53:00.569491 | live upserted 1 | 
football | 2026-11-11 01:44:34.418785 | football upserted 97 |  "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
basketball | 2026-11-11 01:53:16.743200 | basketball upserted 420 | 
basketball_week | 2026-11-11 01:53:17.717037 | nba week upserted 48 | 
other_sports | 2026-11-11 01:53:18.030483 | other sports new 0 | 
backfill | 2026-11-11 01:53:18.034493 | already | 
odds | 2026-11-11 01:53:18.706170 | odds matched 48 | 
settle | 2026-11-11 01:53:18.729154 | settled 0 | 
xfeed | 2026-11-11 01:53:32.621135 | xfeed games 138, linked 0, updated 6 | 
live | 2026-11-11 01:53:42.842794 | live updated 8 | 
names | 2026-11-11 01:49:46.388546 | names 0 | 
tg_reminders | 2026-11-11 01:49:46.725214 | no token | 
maxbet_results | 2026-11-11 01:50:48.584493 | no pending | 
other_results | 2026-11-11 01:50:50.585013 | other results 6 | 
trends | 2026-11-10 23:36:09.974574 | trends 11 | 
analysis | 2026-11-10 23:36:10.199323 | analysis 27 | 
finish_stale | 2026-11-11 01:52:09.464052 | finished 0 | 
--- worker log ---
Nov 11 04:53:16 impressed-jade.ptr.network python[1984686]: 2026-11-11 04:53:16,895 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261114 "HTTP/1.1 200 OK"
Nov 11 04:53:17 impressed-jade.ptr.network python[1984686]: 2026-11-11 04:53:17,186 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261115 "HTTP/1.1 200 OK"
Nov 11 04:53:17 impressed-jade.ptr.network python[1984686]: 2026-11-11 04:53:17,345 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261116 "HTTP/1.1 200 OK"
Nov 11 04:53:17 impressed-jade.ptr.network python[1984686]: 2026-11-11 04:53:17,476 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261117 "HTTP/1.1 200 OK"
Nov 11 04:53:17 impressed-jade.ptr.network python[1984686]: 2026-11-11 04:53:17,601 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261118 "HTTP/1.1 200 OK"
Nov 11 04:53:17 impressed-jade.ptr.network python[1984686]: 2026-11-11 04:53:17,805 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/H/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 04:53:17 impressed-jade.ptr.network python[1984686]: 2026-11-11 04:53:17,897 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/T/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 04:53:17 impressed-jade.ptr.network python[1984686]: 2026-11-11 04:53:17,964 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/V/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 04:53:18 impressed-jade.ptr.network python[1984686]: 2026-11-11 04:53:18,025 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/W/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 04:53:18 impressed-jade.ptr.network python[1984686]: 2026-11-11 04:53:18,150 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 04:53:18 impressed-jade.ptr.network python[1984686]: 2026-11-11 04:53:18,329 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 04:53:18 impressed-jade.ptr.network python[1984686]: 2026-11-11 04:53:18,657 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 04:53:28 impressed-jade.ptr.network python[1984686]: 2026-11-11 04:53:28,843 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 04:53:29 impressed-jade.ptr.network python[1984686]: 2026-11-11 04:53:29,467 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 04:53:30 impressed-jade.ptr.network python[1984686]: 2026-11-11 04:53:30,099 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 04:53:30 impressed-jade.ptr.network python[1984686]: 2026-11-11 04:53:30,725 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 04:53:31 impressed-jade.ptr.network python[1984686]: 2026-11-11 04:53:31,347 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 04:53:31 impressed-jade.ptr.network python[1984686]: 2026-11-11 04:53:31,965 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 04:53:42 impressed-jade.ptr.network python[1984686]: 2026-11-11 04:53:42,742 INFO HTTP Request: GET https://www.maxbet.rs/live/init/sr "HTTP/1.1 200 OK"
Nov 11 04:53:42 impressed-jade.ptr.network python[1984686]: 2026-11-11 04:53:42,937 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 04:53:43 impressed-jade.ptr.network python[1984686]: 2026-11-11 04:53:43,561 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 04:53:44 impressed-jade.ptr.network python[1984686]: 2026-11-11 04:53:44,194 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 04:53:44 impressed-jade.ptr.network python[1984686]: 2026-11-11 04:53:44,822 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 04:53:45 impressed-jade.ptr.network python[1984686]: 2026-11-11 04:53:45,451 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 04:53:46 impressed-jade.ptr.network python[1984686]: 2026-11-11 04:53:46,068 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
--- api log ---
Nov 11 04:53:12 impressed-jade.ptr.network systemd[1]: Stopped zicer-api.service - Zicer API.
Nov 11 04:53:12 impressed-jade.ptr.network systemd[1]: zicer-api.service: Consumed 9.302s CPU time, 221.4M memory peak, 23.9M memory swap peak.
Nov 11 04:53:12 impressed-jade.ptr.network systemd[1]: Started zicer-api.service - Zicer API.
Nov 11 04:53:12 impressed-jade.ptr.network uvicorn[1984727]: INFO:     Uvicorn running on http://127.0.0.1:8790 (Press CTRL+C to quit)
Nov 11 04:53:12 impressed-jade.ptr.network uvicorn[1984727]: INFO:     Started parent process [1984727]
Nov 11 04:53:13 impressed-jade.ptr.network uvicorn[1984732]: INFO:     Started server process [1984732]
Nov 11 04:53:13 impressed-jade.ptr.network uvicorn[1984732]: INFO:     Waiting for application startup.
Nov 11 04:53:13 impressed-jade.ptr.network uvicorn[1984731]: INFO:     Started server process [1984731]
Nov 11 04:53:13 impressed-jade.ptr.network uvicorn[1984731]: INFO:     Waiting for application startup.
Nov 11 04:53:14 impressed-jade.ptr.network uvicorn[1984732]: INFO:     Application startup complete.
Nov 11 04:53:14 impressed-jade.ptr.network uvicorn[1984731]: INFO:     Application startup complete.
Nov 11 04:53:45 impressed-jade.ptr.network uvicorn[1984731]: INFO:     127.0.0.1:41576 - "GET /api/health HTTP/1.1" 200 OK
Nov 11 04:53:45 impressed-jade.ptr.network uvicorn[1984731]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 04:53:45 impressed-jade.ptr.network uvicorn[1984731]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 04:53:45 impressed-jade.ptr.network uvicorn[1984732]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
