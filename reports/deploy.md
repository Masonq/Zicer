# Zicer deploy 2026-11-11 00:02 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: 7d60eb7 Хоккей: площадка по регламенту IIHF/NHL — борта со скруглением 8,5 м, линии ворот, синие и красная линии нужной толщины, круги вбрасывания с разметкой, точки средней зоны, вратарские площади, ворота, трапеции, зона судьи; шайба меньше; отсчёт паузы отдельной плашкой

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
2026/11/11 03:01:46 [warn] 1837466#1837466: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/11 03:01:46 [warn] 1837466#1837466: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/11 03:01:46 [warn] 1837466#1837466: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/11 03:01:46 [warn] 1837466#1837466: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/11 03:01:46 [warn] 1837466#1837466: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/11 03:01:46 [warn] 1837466#1837466: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
football_live | 2026-11-11 00:01:09.670651 | live upserted 1 | 
maxbet_results | 2026-11-11 00:01:30.310024 | no pending | 
other_results | 2026-11-11 00:01:31.389884 | other results 4 | 
tg_poll | 2026-11-11 00:01:32.137732 | no token | 
football | 2026-11-11 00:01:39.595426 | football upserted 97 |  "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
basketball | 2026-11-11 00:01:41.555643 | basketball upserted 420 | 
basketball_week | 2026-11-11 00:01:42.502901 | nba week upserted 48 | 
other_sports | 2026-11-11 00:01:42.848946 | other sports new 0 | 
backfill | 2026-11-11 00:01:42.854774 | already | 
odds | 2026-11-11 00:01:43.542809 | odds matched 50 | 
settle | 2026-11-11 00:01:43.568689 | settled 0 | 
xfeed | 2026-11-11 00:01:57.418990 | xfeed games 109, linked 0, updated 4 | 
live | 2026-11-11 00:02:07.873837 | live updated 3 | 
trends | 2026-11-10 23:36:09.974574 | trends 11 | 
names | 2026-11-11 00:00:14.344624 | names 0 | 
analysis | 2026-11-10 23:36:10.199323 | analysis 27 | 
tg_reminders | 2026-11-11 00:00:14.768494 | no token | 
finish_stale | 2026-11-11 00:00:46.662550 | finished 0 | 
--- worker log ---
Nov 11 03:01:41 impressed-jade.ptr.network python[1837134]: 2026-11-11 03:01:41,806 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261114 "HTTP/1.1 200 OK"
Nov 11 03:01:41 impressed-jade.ptr.network python[1837134]: 2026-11-11 03:01:41,953 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261115 "HTTP/1.1 200 OK"
Nov 11 03:01:42 impressed-jade.ptr.network python[1837134]: 2026-11-11 03:01:42,007 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261116 "HTTP/1.1 200 OK"
Nov 11 03:01:42 impressed-jade.ptr.network python[1837134]: 2026-11-11 03:01:42,078 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261117 "HTTP/1.1 200 OK"
Nov 11 03:01:42 impressed-jade.ptr.network python[1837134]: 2026-11-11 03:01:42,474 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261118 "HTTP/1.1 200 OK"
Nov 11 03:01:42 impressed-jade.ptr.network python[1837134]: 2026-11-11 03:01:42,596 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/H/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 03:01:42 impressed-jade.ptr.network python[1837134]: 2026-11-11 03:01:42,726 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/T/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 03:01:42 impressed-jade.ptr.network python[1837134]: 2026-11-11 03:01:42,794 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/V/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 03:01:42 impressed-jade.ptr.network python[1837134]: 2026-11-11 03:01:42,840 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/W/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 03:01:42 impressed-jade.ptr.network python[1837134]: 2026-11-11 03:01:42,972 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 03:01:43 impressed-jade.ptr.network python[1837134]: 2026-11-11 03:01:43,152 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 03:01:43 impressed-jade.ptr.network python[1837134]: 2026-11-11 03:01:43,496 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 03:01:53 impressed-jade.ptr.network python[1837134]: 2026-11-11 03:01:53,673 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 03:01:54 impressed-jade.ptr.network python[1837134]: 2026-11-11 03:01:54,297 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 03:01:54 impressed-jade.ptr.network python[1837134]: 2026-11-11 03:01:54,925 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 03:01:55 impressed-jade.ptr.network python[1837134]: 2026-11-11 03:01:55,557 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 03:01:56 impressed-jade.ptr.network python[1837134]: 2026-11-11 03:01:56,179 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 03:01:56 impressed-jade.ptr.network python[1837134]: 2026-11-11 03:01:56,800 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 03:02:07 impressed-jade.ptr.network python[1837134]: 2026-11-11 03:02:07,667 INFO HTTP Request: GET https://www.maxbet.rs/live/init/sr "HTTP/1.1 200 OK"
Nov 11 03:02:07 impressed-jade.ptr.network python[1837134]: 2026-11-11 03:02:07,965 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 03:02:08 impressed-jade.ptr.network python[1837134]: 2026-11-11 03:02:08,588 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 03:02:09 impressed-jade.ptr.network python[1837134]: 2026-11-11 03:02:09,221 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 03:02:09 impressed-jade.ptr.network python[1837134]: 2026-11-11 03:02:09,847 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 03:02:10 impressed-jade.ptr.network python[1837134]: 2026-11-11 03:02:10,470 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 03:02:11 impressed-jade.ptr.network python[1837134]: 2026-11-11 03:02:11,089 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
--- api log ---
Nov 11 03:01:38 impressed-jade.ptr.network uvicorn[1837139]: INFO:     Started parent process [1837139]
Nov 11 03:01:40 impressed-jade.ptr.network uvicorn[1837143]: INFO:     Started server process [1837143]
Nov 11 03:01:40 impressed-jade.ptr.network uvicorn[1837143]: INFO:     Waiting for application startup.
Nov 11 03:01:40 impressed-jade.ptr.network uvicorn[1837144]: INFO:     Started server process [1837144]
Nov 11 03:01:40 impressed-jade.ptr.network uvicorn[1837144]: INFO:     Waiting for application startup.
Nov 11 03:01:40 impressed-jade.ptr.network uvicorn[1837143]: INFO:     Application startup complete.
Nov 11 03:01:40 impressed-jade.ptr.network uvicorn[1837144]: INFO:     Application startup complete.
Nov 11 03:01:45 impressed-jade.ptr.network uvicorn[1837144]: INFO:     87.116.135.226:0 - "GET /api/matches/1765 HTTP/1.0" 200 OK
Nov 11 03:01:45 impressed-jade.ptr.network uvicorn[1837144]: INFO:     87.116.135.226:0 - "GET /api/matches/1765/center HTTP/1.0" 200 OK
Nov 11 03:01:56 impressed-jade.ptr.network uvicorn[1837144]: INFO:     87.116.135.226:0 - "GET /api/matches/1765/center HTTP/1.0" 200 OK
Nov 11 03:02:06 impressed-jade.ptr.network uvicorn[1837144]: INFO:     87.116.135.226:0 - "GET /api/matches/1765/center HTTP/1.0" 200 OK
Nov 11 03:02:10 impressed-jade.ptr.network uvicorn[1837144]: INFO:     127.0.0.1:59144 - "GET /api/health HTTP/1.1" 200 OK
Nov 11 03:02:10 impressed-jade.ptr.network uvicorn[1837143]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 03:02:10 impressed-jade.ptr.network uvicorn[1837144]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 03:02:10 impressed-jade.ptr.network uvicorn[1837144]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
