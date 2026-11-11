# Zicer deploy 2026-11-11 01:08 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: 285ba0e Перерывы и остановки: заголовок целиком (с переносом), таймер отдельной плашкой в строке статуса и на карточке; «владение шайбой» в хоккее; NBA: ход игры на русском/сербском с именем игрока, время 0:25 вместо 25.5; значок периода не пустой

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
2026/11/11 04:08:11 [warn] 1924193#1924193: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/11 04:08:11 [warn] 1924193#1924193: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/11 04:08:11 [warn] 1924193#1924193: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/11 04:08:11 [warn] 1924193#1924193: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/11 04:08:11 [warn] 1924193#1924193: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/11 04:08:11 [warn] 1924193#1924193: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
other_results | 2026-11-11 01:05:52.866934 | other results 5 | 
names | 2026-11-11 01:06:39.599418 | names 0 | 
tg_reminders | 2026-11-11 01:06:39.905080 | no token | 
finish_stale | 2026-11-11 01:07:11.929146 | finished 0 | 
football_live | 2026-11-11 01:07:49.225274 | live upserted 1 | 
football | 2026-11-11 01:08:04.049667 | football upserted 97 |  "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
basketball | 2026-11-11 01:08:05.791130 | basketball upserted 420 | 
basketball_week | 2026-11-11 01:08:06.693391 | nba week upserted 48 | 
other_sports | 2026-11-11 01:08:06.949349 | other sports new 0 | 
backfill | 2026-11-11 01:08:06.954509 | already | 
odds | 2026-11-11 01:08:07.799889 | odds matched 49 | 
settle | 2026-11-11 01:08:07.826596 | settled 0 | 
live | 2026-11-11 01:08:31.936311 | live updated 6 | 
xfeed | 2026-11-11 01:08:35.789258 | xfeed games 148, linked 0, updated 6 | 
tg_poll | 2026-11-11 01:08:35.791957 | no token | 
trends | 2026-11-10 23:36:09.974574 | trends 11 | 
analysis | 2026-11-10 23:36:10.199323 | analysis 27 | 
maxbet_results | 2026-11-11 01:05:50.896960 | no pending | 
--- worker log ---
Nov 11 04:08:06 impressed-jade.ptr.network python[1923861]: 2026-11-11 04:08:06,121 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261114 "HTTP/1.1 200 OK"
Nov 11 04:08:06 impressed-jade.ptr.network python[1923861]: 2026-11-11 04:08:06,253 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261115 "HTTP/1.1 200 OK"
Nov 11 04:08:06 impressed-jade.ptr.network python[1923861]: 2026-11-11 04:08:06,388 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261116 "HTTP/1.1 200 OK"
Nov 11 04:08:06 impressed-jade.ptr.network python[1923861]: 2026-11-11 04:08:06,527 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261117 "HTTP/1.1 200 OK"
Nov 11 04:08:06 impressed-jade.ptr.network python[1923861]: 2026-11-11 04:08:06,655 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261118 "HTTP/1.1 200 OK"
Nov 11 04:08:06 impressed-jade.ptr.network python[1923861]: 2026-11-11 04:08:06,779 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/H/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 04:08:06 impressed-jade.ptr.network python[1923861]: 2026-11-11 04:08:06,852 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/T/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 04:08:06 impressed-jade.ptr.network python[1923861]: 2026-11-11 04:08:06,903 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/V/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 04:08:06 impressed-jade.ptr.network python[1923861]: 2026-11-11 04:08:06,942 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/W/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 04:08:07 impressed-jade.ptr.network python[1923861]: 2026-11-11 04:08:07,081 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 04:08:07 impressed-jade.ptr.network python[1923861]: 2026-11-11 04:08:07,460 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 04:08:07 impressed-jade.ptr.network python[1923861]: 2026-11-11 04:08:07,757 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 04:08:17 impressed-jade.ptr.network python[1923861]: 2026-11-11 04:08:17,926 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 04:08:18 impressed-jade.ptr.network python[1923861]: 2026-11-11 04:08:18,558 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 04:08:19 impressed-jade.ptr.network python[1923861]: 2026-11-11 04:08:19,193 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 04:08:19 impressed-jade.ptr.network python[1923861]: 2026-11-11 04:08:19,830 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 04:08:20 impressed-jade.ptr.network python[1923861]: 2026-11-11 04:08:20,456 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 04:08:21 impressed-jade.ptr.network python[1923861]: 2026-11-11 04:08:21,074 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 04:08:31 impressed-jade.ptr.network python[1923861]: 2026-11-11 04:08:31,823 INFO HTTP Request: GET https://www.maxbet.rs/live/init/sr "HTTP/1.1 200 OK"
Nov 11 04:08:32 impressed-jade.ptr.network python[1923861]: 2026-11-11 04:08:32,031 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 04:08:32 impressed-jade.ptr.network python[1923861]: 2026-11-11 04:08:32,655 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 04:08:33 impressed-jade.ptr.network python[1923861]: 2026-11-11 04:08:33,290 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 04:08:33 impressed-jade.ptr.network python[1923861]: 2026-11-11 04:08:33,919 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 04:08:34 impressed-jade.ptr.network python[1923861]: 2026-11-11 04:08:34,542 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 04:08:35 impressed-jade.ptr.network python[1923861]: 2026-11-11 04:08:35,160 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
--- api log ---
Nov 11 04:08:02 impressed-jade.ptr.network systemd[1]: Stopped zicer-api.service - Zicer API.
Nov 11 04:08:02 impressed-jade.ptr.network systemd[1]: zicer-api.service: Consumed 5.265s CPU time, 166.0M memory peak, 22.3M memory swap peak.
Nov 11 04:08:02 impressed-jade.ptr.network systemd[1]: Started zicer-api.service - Zicer API.
Nov 11 04:08:02 impressed-jade.ptr.network uvicorn[1923863]: INFO:     Uvicorn running on http://127.0.0.1:8790 (Press CTRL+C to quit)
Nov 11 04:08:02 impressed-jade.ptr.network uvicorn[1923863]: INFO:     Started parent process [1923863]
Nov 11 04:08:03 impressed-jade.ptr.network uvicorn[1923870]: INFO:     Started server process [1923870]
Nov 11 04:08:03 impressed-jade.ptr.network uvicorn[1923870]: INFO:     Waiting for application startup.
Nov 11 04:08:03 impressed-jade.ptr.network uvicorn[1923870]: INFO:     Application startup complete.
Nov 11 04:08:03 impressed-jade.ptr.network uvicorn[1923869]: INFO:     Started server process [1923869]
Nov 11 04:08:03 impressed-jade.ptr.network uvicorn[1923869]: INFO:     Waiting for application startup.
Nov 11 04:08:04 impressed-jade.ptr.network uvicorn[1923869]: INFO:     Application startup complete.
Nov 11 04:08:35 impressed-jade.ptr.network uvicorn[1923870]: INFO:     127.0.0.1:35098 - "GET /api/health HTTP/1.1" 200 OK
Nov 11 04:08:35 impressed-jade.ptr.network uvicorn[1923869]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 04:08:35 impressed-jade.ptr.network uvicorn[1923869]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 04:08:35 impressed-jade.ptr.network uvicorn[1923869]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
