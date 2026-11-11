# Zicer deploy 2026-11-11 14:40 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: 3e55bd1 Лайв-лента: новые виды спорта опрашиваются раз в 3 цикла (лента снова отвечает); футзал/киберспорт закрываются по исчезновению из лайва; линия футзала и киберспорта загружается сразу при запуске

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
2026/11/11 17:39:51 [warn] 2932701#2932701: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/11 17:39:51 [warn] 2932701#2932701: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/11 17:39:51 [warn] 2932701#2932701: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/11 17:39:51 [warn] 2932701#2932701: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/11 17:39:51 [warn] 2932701#2932701: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/11 17:39:51 [warn] 2932701#2932701: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
tg_reminders | 2026-11-11 14:34:20.899458 | no token | 
xfeed | 2026-11-11 14:37:02.531811 | xfeed empty | 
finish_stale | 2026-11-11 14:37:02.548011 | finished 0 | 
social | 2026-11-11 14:37:02.560604 | social nothing due (test) | 
maxbet_results | 2026-11-11 14:37:04.531985 | no pending | 
other_results | 2026-11-11 14:37:08.652032 | other results 3 | 
odds | 2026-11-11 14:37:09.514556 | odds matched 72 | 
settle | 2026-11-11 14:37:09.525501 | settled 0 | 
tg_poll | 2026-11-11 14:37:09.528447 | no token | 
football_live | 2026-11-11 14:37:14.599744 | live upserted 0 | 
live | 2026-11-11 14:37:14.898706 | live updated 3 | 
trends | 2026-11-10 23:36:09.974574 | trends 11 | 
names | 2026-11-11 14:37:26.184503 | names 103 | 
analysis | 2026-11-10 23:36:10.199323 | analysis 27 | 
basketball | 2026-11-11 14:39:46.938963 | basketball upserted 414 | 
basketball_week | 2026-11-11 14:39:47.951116 | nba week upserted 48 | 
other_sports | 2026-11-11 14:39:48.704016 | other sports new 0 | 
backfill | 2026-11-11 14:39:48.708745 | already | 
logos | 2026-11-11 14:39:48.792571 | logos: nothing to do | 
highlights | 2026-11-11 14:39:49.282483 | highlights +0 | 
football | 2026-11-11 14:39:44.797663 | football upserted 96 |  "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
--- worker log ---
Nov 11 17:40:14 impressed-jade.ptr.network python[2932373]:   File "/opt/zicer/venv/lib/python3.12/site-packages/httpx/_client.py", line 1053, in get
Nov 11 17:40:14 impressed-jade.ptr.network python[2932373]:     return self.request(
Nov 11 17:40:14 impressed-jade.ptr.network python[2932373]:            ^^^^^^^^^^^^^
Nov 11 17:40:14 impressed-jade.ptr.network python[2932373]:   File "/opt/zicer/venv/lib/python3.12/site-packages/httpx/_client.py", line 825, in request
Nov 11 17:40:14 impressed-jade.ptr.network python[2932373]:     return self.send(request, auth=auth, follow_redirects=follow_redirects)
Nov 11 17:40:14 impressed-jade.ptr.network python[2932373]:            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Nov 11 17:40:14 impressed-jade.ptr.network python[2932373]:   File "/opt/zicer/venv/lib/python3.12/site-packages/httpx/_client.py", line 914, in send
Nov 11 17:40:14 impressed-jade.ptr.network python[2932373]:     response = self._send_handling_auth(
Nov 11 17:40:14 impressed-jade.ptr.network python[2932373]:                ^^^^^^^^^^^^^^^^^^^^^^^^^
Nov 11 17:40:14 impressed-jade.ptr.network python[2932373]:   File "/opt/zicer/venv/lib/python3.12/site-packages/httpx/_client.py", line 942, in _send_handling_auth
Nov 11 17:40:14 impressed-jade.ptr.network python[2932373]:     response = self._send_handling_redirects(
Nov 11 17:40:14 impressed-jade.ptr.network python[2932373]:                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Nov 11 17:40:14 impressed-jade.ptr.network python[2932373]:   File "/opt/zicer/venv/lib/python3.12/site-packages/httpx/_client.py", line 979, in _send_handling_redirects
Nov 11 17:40:14 impressed-jade.ptr.network python[2932373]:     response = self._send_single_request(request)
Nov 11 17:40:14 impressed-jade.ptr.network python[2932373]:                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Nov 11 17:40:14 impressed-jade.ptr.network python[2932373]:   File "/opt/zicer/venv/lib/python3.12/site-packages/httpx/_client.py", line 1014, in _send_single_request
Nov 11 17:40:14 impressed-jade.ptr.network python[2932373]:     response = transport.handle_request(request)
Nov 11 17:40:14 impressed-jade.ptr.network python[2932373]:                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Nov 11 17:40:14 impressed-jade.ptr.network python[2932373]:   File "/opt/zicer/venv/lib/python3.12/site-packages/httpx/_transports/default.py", line 249, in handle_request
Nov 11 17:40:14 impressed-jade.ptr.network python[2932373]:     with map_httpcore_exceptions():
Nov 11 17:40:14 impressed-jade.ptr.network python[2932373]:   File "/usr/lib/python3.12/contextlib.py", line 158, in __exit__
Nov 11 17:40:14 impressed-jade.ptr.network python[2932373]:     self.gen.throw(value)
Nov 11 17:40:14 impressed-jade.ptr.network python[2932373]:   File "/opt/zicer/venv/lib/python3.12/site-packages/httpx/_transports/default.py", line 118, in map_httpcore_exceptions
Nov 11 17:40:14 impressed-jade.ptr.network python[2932373]:     raise mapped_exc(message) from exc
Nov 11 17:40:14 impressed-jade.ptr.network python[2932373]: httpx.ConnectTimeout: _ssl.c:983: The handshake operation timed out
--- api log ---
Nov 11 17:39:43 impressed-jade.ptr.network uvicorn[2932395]: INFO:     Started parent process [2932395]
Nov 11 17:39:44 impressed-jade.ptr.network uvicorn[2932398]: INFO:     Started server process [2932398]
Nov 11 17:39:44 impressed-jade.ptr.network uvicorn[2932398]: INFO:     Waiting for application startup.
Nov 11 17:39:45 impressed-jade.ptr.network uvicorn[2932399]: INFO:     Started server process [2932399]
Nov 11 17:39:45 impressed-jade.ptr.network uvicorn[2932399]: INFO:     Waiting for application startup.
Nov 11 17:39:45 impressed-jade.ptr.network uvicorn[2932398]: INFO:     Application startup complete.
Nov 11 17:39:45 impressed-jade.ptr.network uvicorn[2932399]: INFO:     Application startup complete.
Nov 11 17:39:46 impressed-jade.ptr.network uvicorn[2932398]: INFO:     109.92.227.130:0 - "GET /api/me/watch?ids= HTTP/1.0" 200 OK
Nov 11 17:39:51 impressed-jade.ptr.network uvicorn[2932399]: INFO:     109.92.227.130:0 - "GET /api/home?tz=180&sport=all HTTP/1.0" 200 OK
Nov 11 17:40:06 impressed-jade.ptr.network uvicorn[2932398]: INFO:     109.92.227.130:0 - "GET /api/sports?tz=180 HTTP/1.0" 200 OK
Nov 11 17:40:06 impressed-jade.ptr.network uvicorn[2932399]: INFO:     109.92.227.130:0 - "GET /api/me/watch?ids= HTTP/1.0" 200 OK
Nov 11 17:40:15 impressed-jade.ptr.network uvicorn[2932399]: INFO:     127.0.0.1:54202 - "GET /api/health HTTP/1.1" 200 OK
Nov 11 17:40:15 impressed-jade.ptr.network uvicorn[2932398]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 17:40:15 impressed-jade.ptr.network uvicorn[2932399]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 17:40:16 impressed-jade.ptr.network uvicorn[2932399]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
