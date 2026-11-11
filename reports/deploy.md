# Zicer deploy 2026-11-11 02:26 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: 6413343 Ссылка «поделиться» с языком пользователя

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
OK: chromium для картинок

=== Сервисы ===
OK: zicer-api работает
OK: zicer-worker работает

=== Автообновление ===
OK: таймер автообновления включён

=== Админ ===
OK: админ есть

=== nginx ===
2026/11/11 05:25:55 [warn] 2029324#2029324: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/11 05:25:55 [warn] 2029324#2029324: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/11 05:25:55 [warn] 2029324#2029324: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/11 05:25:55 [warn] 2029324#2029324: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/11 05:25:55 [warn] 2029324#2029324: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/11 05:25:55 [warn] 2029324#2029324: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
football_live | 2026-11-11 02:24:55.911983 | live upserted 1 | 
live | 2026-11-11 02:25:19.336086 | live updated 10 | 
tg_poll | 2026-11-11 02:25:23.490844 | no token | 
football | 2026-11-11 02:25:49.288598 | football upserted 97 |  "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
basketball | 2026-11-11 02:25:50.951016 | basketball upserted 420 | 
basketball_week | 2026-11-11 02:25:51.852348 | nba week upserted 48 | 
other_sports | 2026-11-11 02:25:52.158979 | other sports new 0 | 
backfill | 2026-11-11 02:25:52.163364 | already | 
logos | 2026-11-11 02:26:06.225859 | logos: checked 25, found 3 | 
odds | 2026-11-11 02:26:06.919949 | odds matched 46 | 
settle | 2026-11-11 02:26:06.941211 | settled 0 | 
xfeed | 2026-11-11 02:26:20.864613 | xfeed games 129, linked 0, updated 6 | 
maxbet_results | 2026-11-11 02:22:53.529488 | no pending | 
other_results | 2026-11-11 02:22:55.468267 | other results 6 | 
trends | 2026-11-10 23:36:09.974574 | trends 11 | 
analysis | 2026-11-10 23:36:10.199323 | analysis 27 | 
names | 2026-11-11 02:20:38.320651 | names 0 | 
tg_reminders | 2026-11-11 02:20:38.655708 | no token | 
finish_stale | 2026-11-11 02:24:36.945173 | finished 0 | 
--- worker log ---
Nov 11 05:25:56 impressed-jade.ptr.network python[2029025]: 2026-11-11 05:25:56,162 INFO HTTP Request: GET https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=OFI "HTTP/1.1 429 Too Many Requests"
Nov 11 05:25:56 impressed-jade.ptr.network python[2029025]: 2026-11-11 05:25:56,779 INFO HTTP Request: GET https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Komarno "HTTP/1.1 429 Too Many Requests"
Nov 11 05:25:57 impressed-jade.ptr.network python[2029025]: 2026-11-11 05:25:57,399 INFO HTTP Request: GET https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=TSV+Hartberg "HTTP/1.1 429 Too Many Requests"
Nov 11 05:25:58 impressed-jade.ptr.network python[2029025]: 2026-11-11 05:25:58,020 INFO HTTP Request: GET https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Lorentzweiler "HTTP/1.1 429 Too Many Requests"
Nov 11 05:25:58 impressed-jade.ptr.network python[2029025]: 2026-11-11 05:25:58,641 INFO HTTP Request: GET https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Tromso "HTTP/1.1 429 Too Many Requests"
Nov 11 05:25:59 impressed-jade.ptr.network python[2029025]: 2026-11-11 05:25:59,258 INFO HTTP Request: GET https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Montes+Claros "HTTP/1.1 429 Too Many Requests"
Nov 11 05:25:59 impressed-jade.ptr.network python[2029025]: 2026-11-11 05:25:59,876 INFO HTTP Request: GET https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Radnicki "HTTP/1.1 429 Too Many Requests"
Nov 11 05:26:00 impressed-jade.ptr.network python[2029025]: 2026-11-11 05:26:00,495 INFO HTTP Request: GET https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Pro+Recco "HTTP/1.1 429 Too Many Requests"
Nov 11 05:26:01 impressed-jade.ptr.network python[2029025]: 2026-11-11 05:26:01,116 INFO HTTP Request: GET https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Steaua+Bucuresti "HTTP/1.1 429 Too Many Requests"
Nov 11 05:26:01 impressed-jade.ptr.network python[2029025]: 2026-11-11 05:26:01,729 INFO HTTP Request: GET https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Marseille "HTTP/1.1 429 Too Many Requests"
Nov 11 05:26:02 impressed-jade.ptr.network python[2029025]: 2026-11-11 05:26:02,345 INFO HTTP Request: GET https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Novi+Beograd "HTTP/1.1 429 Too Many Requests"
Nov 11 05:26:02 impressed-jade.ptr.network python[2029025]: 2026-11-11 05:26:02,960 INFO HTTP Request: GET https://www.thesportsdb.com/api/v1/json/123/searchplayers.php?p=Masarova "HTTP/1.1 429 Too Many Requests"
Nov 11 05:26:03 impressed-jade.ptr.network python[2029025]: 2026-11-11 05:26:03,601 INFO HTTP Request: GET https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Chalon%2FSaone "HTTP/1.1 429 Too Many Requests"
Nov 11 05:26:04 impressed-jade.ptr.network python[2029025]: 2026-11-11 05:26:04,333 INFO HTTP Request: GET https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Ilves "HTTP/1.1 429 Too Many Requests"
Nov 11 05:26:04 impressed-jade.ptr.network python[2029025]: 2026-11-11 05:26:04,965 INFO HTTP Request: GET https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Bilbao "HTTP/1.1 429 Too Many Requests"
Nov 11 05:26:05 impressed-jade.ptr.network python[2029025]: 2026-11-11 05:26:05,614 INFO HTTP Request: GET https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Spartak+Subotica "HTTP/1.1 429 Too Many Requests"
Nov 11 05:26:06 impressed-jade.ptr.network python[2029025]: 2026-11-11 05:26:06,337 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 05:26:06 impressed-jade.ptr.network python[2029025]: 2026-11-11 05:26:06,517 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 05:26:06 impressed-jade.ptr.network python[2029025]: 2026-11-11 05:26:06,857 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 05:26:17 impressed-jade.ptr.network python[2029025]: 2026-11-11 05:26:17,035 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 05:26:17 impressed-jade.ptr.network python[2029025]: 2026-11-11 05:26:17,660 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 05:26:18 impressed-jade.ptr.network python[2029025]: 2026-11-11 05:26:18,292 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 05:26:18 impressed-jade.ptr.network python[2029025]: 2026-11-11 05:26:18,921 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 05:26:19 impressed-jade.ptr.network python[2029025]: 2026-11-11 05:26:19,544 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 05:26:20 impressed-jade.ptr.network python[2029025]: 2026-11-11 05:26:20,163 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
--- api log ---
Nov 11 05:25:47 impressed-jade.ptr.network systemd[1]: Stopped zicer-api.service - Zicer API.
Nov 11 05:25:47 impressed-jade.ptr.network systemd[1]: zicer-api.service: Consumed 2.189s CPU time, 157.5M memory peak, 0B memory swap peak.
Nov 11 05:25:47 impressed-jade.ptr.network systemd[1]: Started zicer-api.service - Zicer API.
Nov 11 05:25:47 impressed-jade.ptr.network uvicorn[2029028]: INFO:     Uvicorn running on http://127.0.0.1:8790 (Press CTRL+C to quit)
Nov 11 05:25:47 impressed-jade.ptr.network uvicorn[2029028]: INFO:     Started parent process [2029028]
Nov 11 05:25:49 impressed-jade.ptr.network uvicorn[2029032]: INFO:     Started server process [2029032]
Nov 11 05:25:49 impressed-jade.ptr.network uvicorn[2029032]: INFO:     Waiting for application startup.
Nov 11 05:25:49 impressed-jade.ptr.network uvicorn[2029031]: INFO:     Started server process [2029031]
Nov 11 05:25:49 impressed-jade.ptr.network uvicorn[2029031]: INFO:     Waiting for application startup.
Nov 11 05:25:49 impressed-jade.ptr.network uvicorn[2029032]: INFO:     Application startup complete.
Nov 11 05:25:50 impressed-jade.ptr.network uvicorn[2029031]: INFO:     Application startup complete.
Nov 11 05:26:19 impressed-jade.ptr.network uvicorn[2029031]: INFO:     127.0.0.1:44586 - "GET /api/health HTTP/1.1" 200 OK
Nov 11 05:26:20 impressed-jade.ptr.network uvicorn[2029031]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 05:26:20 impressed-jade.ptr.network uvicorn[2029031]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 05:26:20 impressed-jade.ptr.network uvicorn[2029031]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
