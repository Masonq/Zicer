# Zicer deploy 2026-11-11 14:46 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: 1293939 Деплой: убрана разовая проверка источников (она делала сотни запросов к 22Bet и могла вызвать временную блокировку)

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
2026/11/11 17:45:42 [warn] 2940736#2940736: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/11 17:45:42 [warn] 2940736#2940736: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/11 17:45:42 [warn] 2940736#2940736: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/11 17:45:42 [warn] 2940736#2940736: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/11 17:45:42 [warn] 2940736#2940736: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/11 17:45:42 [warn] 2940736#2940736: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
matches: {'hockey': 52, 'volleyball': 33, 'tabletennis': 142, 'handball': 44, 'basketball': 707, 'waterpolo': 7, 'tennis': 23, 'football': 1100}
x22_line | 2026-11-11 14:40:39.392021 | x22 line new 0 | 
football_live | 2026-11-11 14:42:45.175701 | live upserted 0 | 
live | 2026-11-11 14:42:45.419037 | live updated 2 | 
xfeed | 2026-11-11 14:45:21.723101 | xfeed empty | 
finish_stale | 2026-11-11 14:45:21.734959 | finished 0 | 
social | 2026-11-11 14:45:21.740331 | social nothing due (test) | 
maxbet_results | 2026-11-11 14:45:23.490454 | no pending | 
other_results | 2026-11-11 14:45:30.136047 | other results 5 | 
odds | 2026-11-11 14:45:32.357194 | odds matched 72 | 
settle | 2026-11-11 14:45:32.485168 | settled 0 | 
tg_poll | 2026-11-11 14:45:32.487578 | no token | 
basketball | 2026-11-11 14:45:38.148166 | basketball upserted 414 | 
basketball_week | 2026-11-11 14:45:39.276204 | nba week upserted 48 | 
other_sports | 2026-11-11 14:45:39.888294 | other sports new 0 | 
backfill | 2026-11-11 14:45:39.891778 | already | 
logos | 2026-11-11 14:45:39.997958 | logos: nothing to do | 
highlights | 2026-11-11 14:45:40.577895 | highlights +0 | 
tg_reminders | 2026-11-11 14:34:20.899458 | no token | 
trends | 2026-11-10 23:36:09.974574 | trends 11 | 
names | 2026-11-11 14:37:26.184503 | names 103 | 
analysis | 2026-11-10 23:36:10.199323 | analysis 27 | 
football | 2026-11-11 14:45:35.388000 | football upserted 96 |  "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
--- worker log ---
Nov 11 17:46:05 impressed-jade.ptr.network python[2940415]:   File "/opt/zicer/venv/lib/python3.12/site-packages/httpx/_client.py", line 1053, in get
Nov 11 17:46:05 impressed-jade.ptr.network python[2940415]:     return self.request(
Nov 11 17:46:05 impressed-jade.ptr.network python[2940415]:            ^^^^^^^^^^^^^
Nov 11 17:46:05 impressed-jade.ptr.network python[2940415]:   File "/opt/zicer/venv/lib/python3.12/site-packages/httpx/_client.py", line 825, in request
Nov 11 17:46:05 impressed-jade.ptr.network python[2940415]:     return self.send(request, auth=auth, follow_redirects=follow_redirects)
Nov 11 17:46:05 impressed-jade.ptr.network python[2940415]:            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Nov 11 17:46:05 impressed-jade.ptr.network python[2940415]:   File "/opt/zicer/venv/lib/python3.12/site-packages/httpx/_client.py", line 914, in send
Nov 11 17:46:05 impressed-jade.ptr.network python[2940415]:     response = self._send_handling_auth(
Nov 11 17:46:05 impressed-jade.ptr.network python[2940415]:                ^^^^^^^^^^^^^^^^^^^^^^^^^
Nov 11 17:46:05 impressed-jade.ptr.network python[2940415]:   File "/opt/zicer/venv/lib/python3.12/site-packages/httpx/_client.py", line 942, in _send_handling_auth
Nov 11 17:46:05 impressed-jade.ptr.network python[2940415]:     response = self._send_handling_redirects(
Nov 11 17:46:05 impressed-jade.ptr.network python[2940415]:                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Nov 11 17:46:05 impressed-jade.ptr.network python[2940415]:   File "/opt/zicer/venv/lib/python3.12/site-packages/httpx/_client.py", line 979, in _send_handling_redirects
Nov 11 17:46:05 impressed-jade.ptr.network python[2940415]:     response = self._send_single_request(request)
Nov 11 17:46:05 impressed-jade.ptr.network python[2940415]:                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Nov 11 17:46:05 impressed-jade.ptr.network python[2940415]:   File "/opt/zicer/venv/lib/python3.12/site-packages/httpx/_client.py", line 1014, in _send_single_request
Nov 11 17:46:05 impressed-jade.ptr.network python[2940415]:     response = transport.handle_request(request)
Nov 11 17:46:05 impressed-jade.ptr.network python[2940415]:                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Nov 11 17:46:05 impressed-jade.ptr.network python[2940415]:   File "/opt/zicer/venv/lib/python3.12/site-packages/httpx/_transports/default.py", line 249, in handle_request
Nov 11 17:46:05 impressed-jade.ptr.network python[2940415]:     with map_httpcore_exceptions():
Nov 11 17:46:05 impressed-jade.ptr.network python[2940415]:   File "/usr/lib/python3.12/contextlib.py", line 158, in __exit__
Nov 11 17:46:05 impressed-jade.ptr.network python[2940415]:     self.gen.throw(value)
Nov 11 17:46:05 impressed-jade.ptr.network python[2940415]:   File "/opt/zicer/venv/lib/python3.12/site-packages/httpx/_transports/default.py", line 118, in map_httpcore_exceptions
Nov 11 17:46:05 impressed-jade.ptr.network python[2940415]:     raise mapped_exc(message) from exc
Nov 11 17:46:05 impressed-jade.ptr.network python[2940415]: httpx.ConnectTimeout: _ssl.c:983: The handshake operation timed out
--- api log ---
Nov 11 17:45:33 impressed-jade.ptr.network systemd[1]: Started zicer-api.service - Zicer API.
Nov 11 17:45:33 impressed-jade.ptr.network uvicorn[2940419]: INFO:     Uvicorn running on http://127.0.0.1:8790 (Press CTRL+C to quit)
Nov 11 17:45:33 impressed-jade.ptr.network uvicorn[2940419]: INFO:     Started parent process [2940419]
Nov 11 17:45:35 impressed-jade.ptr.network uvicorn[2940422]: INFO:     Started server process [2940422]
Nov 11 17:45:35 impressed-jade.ptr.network uvicorn[2940422]: INFO:     Waiting for application startup.
Nov 11 17:45:36 impressed-jade.ptr.network uvicorn[2940423]: INFO:     Started server process [2940423]
Nov 11 17:45:36 impressed-jade.ptr.network uvicorn[2940423]: INFO:     Waiting for application startup.
Nov 11 17:45:36 impressed-jade.ptr.network uvicorn[2940422]: INFO:     Application startup complete.
Nov 11 17:45:36 impressed-jade.ptr.network uvicorn[2940423]: INFO:     Application startup complete.
Nov 11 17:45:41 impressed-jade.ptr.network uvicorn[2940422]: INFO:     109.92.227.130:0 - "GET /api/me/watch?ids= HTTP/1.0" 200 OK
Nov 11 17:46:01 impressed-jade.ptr.network uvicorn[2940423]: INFO:     109.92.227.130:0 - "GET /api/me/watch?ids= HTTP/1.0" 200 OK
Nov 11 17:46:05 impressed-jade.ptr.network uvicorn[2940423]: INFO:     127.0.0.1:35578 - "GET /api/health HTTP/1.1" 200 OK
Nov 11 17:46:05 impressed-jade.ptr.network uvicorn[2940423]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 17:46:06 impressed-jade.ptr.network uvicorn[2940423]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 17:46:06 impressed-jade.ptr.network uvicorn[2940423]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
