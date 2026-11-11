# Zicer deploy 2026-11-11 02:30 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: 5e66fe9 Превью ссылки: правильное склонение «4 события»

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
OK: chromium уже установлен

=== Сервисы ===
OK: zicer-api работает
OK: zicer-worker работает

=== Автообновление ===
OK: таймер автообновления включён

=== Админ ===
OK: админ есть

=== nginx ===
2026/11/11 05:30:00 [warn] 2035197#2035197: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/11 05:30:00 [warn] 2035197#2035197: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/11 05:30:00 [warn] 2035197#2035197: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/11 05:30:00 [warn] 2035197#2035197: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/11 05:30:00 [warn] 2035197#2035197: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/11 05:30:00 [warn] 2035197#2035197: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
maxbet_results | 2026-11-11 02:29:08.885903 | no pending | 
other_results | 2026-11-11 02:29:11.077733 | other results 6 | 
football_live | 2026-11-11 02:29:16.646375 | live upserted 1 | 
finish_stale | 2026-11-11 02:29:20.733301 | finished 0 | 
live | 2026-11-11 02:29:39.804869 | live updated 10 | 
tg_poll | 2026-11-11 02:29:43.676432 | no token | 
football | 2026-11-11 02:29:53.636701 | football upserted 97 |  "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
basketball | 2026-11-11 02:29:55.337583 | basketball upserted 420 | 
basketball_week | 2026-11-11 02:29:56.202687 | nba week upserted 48 | 
other_sports | 2026-11-11 02:29:56.470431 | other sports new 0 | 
backfill | 2026-11-11 02:29:56.475034 | already | 
logos | 2026-11-11 02:30:11.689349 | logos: checked 25, found 6 | 
odds | 2026-11-11 02:30:12.444835 | odds matched 46 | 
settle | 2026-11-11 02:30:12.465680 | settled 0 | 
xfeed | 2026-11-11 02:30:26.339244 | xfeed games 124, linked 0, updated 6 | 
trends | 2026-11-10 23:36:09.974574 | trends 11 | 
analysis | 2026-11-10 23:36:10.199323 | analysis 27 | 
names | 2026-11-11 02:20:38.320651 | names 0 | 
tg_reminders | 2026-11-11 02:20:38.655708 | no token | 
--- worker log ---
Nov 11 05:30:01 impressed-jade.ptr.network python[2034841]: 2026-11-11 05:30:01,612 INFO HTTP Request: GET https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Slovan+B. "HTTP/1.1 200 OK"
Nov 11 05:30:02 impressed-jade.ptr.network python[2034841]: 2026-11-11 05:30:02,292 INFO HTTP Request: GET https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=KAC "HTTP/1.1 200 OK"
Nov 11 05:30:02 impressed-jade.ptr.network python[2034841]: 2026-11-11 05:30:02,967 INFO HTTP Request: GET https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Val+Pusteria "HTTP/1.1 200 OK"
Nov 11 05:30:03 impressed-jade.ptr.network python[2034841]: 2026-11-11 05:30:03,633 INFO HTTP Request: GET https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Ambri-Piotta "HTTP/1.1 200 OK"
Nov 11 05:30:04 impressed-jade.ptr.network python[2034841]: 2026-11-11 05:30:04,262 INFO HTTP Request: GET https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=HV+71 "HTTP/1.1 429 Too Many Requests"
Nov 11 05:30:04 impressed-jade.ptr.network python[2034841]: 2026-11-11 05:30:04,897 INFO HTTP Request: GET https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=IF+Bjorkloven "HTTP/1.1 429 Too Many Requests"
Nov 11 05:30:05 impressed-jade.ptr.network python[2034841]: 2026-11-11 05:30:05,524 INFO HTTP Request: GET https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Frolunda "HTTP/1.1 429 Too Many Requests"
Nov 11 05:30:06 impressed-jade.ptr.network python[2034841]: 2026-11-11 05:30:06,151 INFO HTTP Request: GET https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Vaxjo "HTTP/1.1 429 Too Many Requests"
Nov 11 05:30:06 impressed-jade.ptr.network python[2034841]: 2026-11-11 05:30:06,777 INFO HTTP Request: GET https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Mannheim "HTTP/1.1 429 Too Many Requests"
Nov 11 05:30:07 impressed-jade.ptr.network python[2034841]: 2026-11-11 05:30:07,393 INFO HTTP Request: GET https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Podgorica "HTTP/1.1 429 Too Many Requests"
Nov 11 05:30:08 impressed-jade.ptr.network python[2034841]: 2026-11-11 05:30:08,007 INFO HTTP Request: GET https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Fino+Kaposvar "HTTP/1.1 429 Too Many Requests"
Nov 11 05:30:08 impressed-jade.ptr.network python[2034841]: 2026-11-11 05:30:08,621 INFO HTTP Request: GET https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Sao+Jose+dos+C. "HTTP/1.1 429 Too Many Requests"
Nov 11 05:30:09 impressed-jade.ptr.network python[2034841]: 2026-11-11 05:30:09,234 INFO HTTP Request: GET https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Panathinaikos "HTTP/1.1 429 Too Many Requests"
Nov 11 05:30:09 impressed-jade.ptr.network python[2034841]: 2026-11-11 05:30:09,847 INFO HTTP Request: GET https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Ferencvarosi "HTTP/1.1 429 Too Many Requests"
Nov 11 05:30:10 impressed-jade.ptr.network python[2034841]: 2026-11-11 05:30:10,462 INFO HTTP Request: GET https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Jadran+ST "HTTP/1.1 429 Too Many Requests"
Nov 11 05:30:11 impressed-jade.ptr.network python[2034841]: 2026-11-11 05:30:11,078 INFO HTTP Request: GET https://www.thesportsdb.com/api/v1/json/123/searchplayers.php?p=Andreescu "HTTP/1.1 429 Too Many Requests"
Nov 11 05:30:11 impressed-jade.ptr.network python[2034841]: 2026-11-11 05:30:11,802 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 05:30:11 impressed-jade.ptr.network python[2034841]: 2026-11-11 05:30:11,976 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 05:30:12 impressed-jade.ptr.network python[2034841]: 2026-11-11 05:30:12,410 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 05:30:22 impressed-jade.ptr.network python[2034841]: 2026-11-11 05:30:22,565 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 05:30:23 impressed-jade.ptr.network python[2034841]: 2026-11-11 05:30:23,188 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 05:30:23 impressed-jade.ptr.network python[2034841]: 2026-11-11 05:30:23,820 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 05:30:24 impressed-jade.ptr.network python[2034841]: 2026-11-11 05:30:24,450 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 05:30:25 impressed-jade.ptr.network python[2034841]: 2026-11-11 05:30:25,073 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 05:30:25 impressed-jade.ptr.network python[2034841]: 2026-11-11 05:30:25,692 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
--- api log ---
Nov 11 05:29:52 impressed-jade.ptr.network systemd[1]: Stopped zicer-api.service - Zicer API.
Nov 11 05:29:52 impressed-jade.ptr.network systemd[1]: zicer-api.service: Consumed 4.257s CPU time, 519.6M memory peak, 0B memory swap peak.
Nov 11 05:29:52 impressed-jade.ptr.network systemd[1]: Started zicer-api.service - Zicer API.
Nov 11 05:29:52 impressed-jade.ptr.network uvicorn[2034843]: INFO:     Uvicorn running on http://127.0.0.1:8790 (Press CTRL+C to quit)
Nov 11 05:29:52 impressed-jade.ptr.network uvicorn[2034843]: INFO:     Started parent process [2034843]
Nov 11 05:29:53 impressed-jade.ptr.network uvicorn[2034850]: INFO:     Started server process [2034850]
Nov 11 05:29:53 impressed-jade.ptr.network uvicorn[2034850]: INFO:     Waiting for application startup.
Nov 11 05:29:53 impressed-jade.ptr.network uvicorn[2034849]: INFO:     Started server process [2034849]
Nov 11 05:29:53 impressed-jade.ptr.network uvicorn[2034849]: INFO:     Waiting for application startup.
Nov 11 05:29:53 impressed-jade.ptr.network uvicorn[2034850]: INFO:     Application startup complete.
Nov 11 05:29:53 impressed-jade.ptr.network uvicorn[2034849]: INFO:     Application startup complete.
Nov 11 05:30:25 impressed-jade.ptr.network uvicorn[2034849]: INFO:     127.0.0.1:43132 - "GET /api/health HTTP/1.1" 200 OK
Nov 11 05:30:25 impressed-jade.ptr.network uvicorn[2034849]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 05:30:25 impressed-jade.ptr.network uvicorn[2034849]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 05:30:26 impressed-jade.ptr.network uvicorn[2034850]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
