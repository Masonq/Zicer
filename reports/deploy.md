# Zicer deploy 2026-11-10 16:57 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: ffe3407 Рынки: двойной шанс, тоталы, обе забьют, фора, точный счёт, баскет фора/тотал; профиль: имя, @ник, о себе, аватар, пароль; дизайн: панель выбора, без названия БК

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
2026/11/10 19:57:11 [warn] 1272357#1272357: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/10 19:57:11 [warn] 1272357#1272357: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/10 19:57:11 [warn] 1272357#1272357: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/10 19:57:11 [warn] 1272357#1272357: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/10 19:57:11 [warn] 1272357#1272357: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/10 19:57:11 [warn] 1272357#1272357: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
matches: {'basketball': 380, 'football': 1026}
tg_reminders | 2026-11-10 16:53:55.282044 | no token | 
football_live | 2026-11-10 16:56:57.053287 | live upserted 0 | 
football | 2026-11-10 16:57:04.923276 | football upserted 33 | 
basketball | 2026-11-10 16:57:06.322332 | basketball upserted 280 | 
backfill | 2026-11-10 16:57:06.331958 | already | 
odds | 2026-11-10 16:57:07.065372 | odds matched 26 | 
settle | 2026-11-10 16:57:07.079661 | settled 0 | 
trends | 2026-11-10 16:57:07.107043 | trends 2 | 
analysis | 2026-11-10 16:57:07.111909 | analysis 0 | 
tg_poll | 2026-11-10 16:57:27.119469 | no token | 
--- worker log ---
Nov 10 19:53:55 impressed-jade.ptr.network python[1254285]: 2026-11-10 19:53:55,267 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261110 "HTTP/1.1 200 OK"
Nov 10 19:54:55 impressed-jade.ptr.network python[1254285]: 2026-11-10 19:54:55,361 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261110 "HTTP/1.1 200 OK"
Nov 10 19:55:55 impressed-jade.ptr.network python[1254285]: 2026-11-10 19:55:55,448 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261110 "HTTP/1.1 200 OK"
Nov 10 19:55:55 impressed-jade.ptr.network python[1254285]: 2026-11-10 19:55:55,581 INFO HTTP Request: GET https://api-live.euroleague.net/v2/competitions/E/seasons/E2026/games "HTTP/1.1 200 OK"
Nov 10 19:55:56 impressed-jade.ptr.network python[1254285]: 2026-11-10 19:55:56,402 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 19:55:56 impressed-jade.ptr.network python[1254285]: 2026-11-10 19:55:56,958 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 19:56:57 impressed-jade.ptr.network python[1254285]: 2026-11-10 19:56:57,051 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261110 "HTTP/1.1 200 OK"
Nov 10 19:57:02 impressed-jade.ptr.network systemd[1]: Stopping zicer-worker.service - Zicer data worker...
Nov 10 19:57:02 impressed-jade.ptr.network systemd[1]: zicer-worker.service: Deactivated successfully.
Nov 10 19:57:02 impressed-jade.ptr.network systemd[1]: Stopped zicer-worker.service - Zicer data worker.
Nov 10 19:57:02 impressed-jade.ptr.network systemd[1]: zicer-worker.service: Consumed 5.052s CPU time, 78.8M memory peak, 2.8M memory swap peak.
Nov 10 19:57:02 impressed-jade.ptr.network systemd[1]: Started zicer-worker.service - Zicer data worker.
Nov 10 19:57:03 impressed-jade.ptr.network python[1272030]: 2026-11-10 19:57:03,859 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261109 "HTTP/1.1 200 OK"
Nov 10 19:57:03 impressed-jade.ptr.network python[1272030]: 2026-11-10 19:57:03,874 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261110 "HTTP/1.1 200 OK"
Nov 10 19:57:03 impressed-jade.ptr.network python[1272030]: 2026-11-10 19:57:03,953 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261111 "HTTP/1.1 200 OK"
Nov 10 19:57:04 impressed-jade.ptr.network python[1272030]: 2026-11-10 19:57:04,040 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261112 "HTTP/1.1 200 OK"
Nov 10 19:57:04 impressed-jade.ptr.network python[1272030]: 2026-11-10 19:57:04,175 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261113 "HTTP/1.1 200 OK"
Nov 10 19:57:04 impressed-jade.ptr.network python[1272030]: 2026-11-10 19:57:04,428 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261114 "HTTP/1.1 200 OK"
Nov 10 19:57:04 impressed-jade.ptr.network python[1272030]: 2026-11-10 19:57:04,675 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261115 "HTTP/1.1 200 OK"
Nov 10 19:57:04 impressed-jade.ptr.network python[1272030]: 2026-11-10 19:57:04,773 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261116 "HTTP/1.1 200 OK"
Nov 10 19:57:04 impressed-jade.ptr.network python[1272030]: 2026-11-10 19:57:04,896 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261117 "HTTP/1.1 200 OK"
Nov 10 19:57:05 impressed-jade.ptr.network python[1272030]: 2026-11-10 19:57:05,057 INFO HTTP Request: GET https://api-live.euroleague.net/v2/competitions/E/seasons/E2026/games "HTTP/1.1 200 OK"
Nov 10 19:57:06 impressed-jade.ptr.network python[1272030]: 2026-11-10 19:57:06,490 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 19:57:06 impressed-jade.ptr.network python[1272030]: 2026-11-10 19:57:06,681 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 19:57:07 impressed-jade.ptr.network python[1272030]: 2026-11-10 19:57:07,044 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
--- api log ---
Nov 10 19:57:02 impressed-jade.ptr.network systemd[1]: zicer-api.service: Consumed 6.343s CPU time, 166.6M memory peak, 6.8M memory swap peak.
Nov 10 19:57:02 impressed-jade.ptr.network systemd[1]: Started zicer-api.service - Zicer API.
Nov 10 19:57:02 impressed-jade.ptr.network uvicorn[1272032]: INFO:     Uvicorn running on http://127.0.0.1:8790 (Press CTRL+C to quit)
Nov 10 19:57:02 impressed-jade.ptr.network uvicorn[1272032]: INFO:     Started parent process [1272032]
Nov 10 19:57:05 impressed-jade.ptr.network uvicorn[1272036]: INFO:     Started server process [1272036]
Nov 10 19:57:05 impressed-jade.ptr.network uvicorn[1272036]: INFO:     Waiting for application startup.
Nov 10 19:57:06 impressed-jade.ptr.network uvicorn[1272035]: INFO:     Started server process [1272035]
Nov 10 19:57:06 impressed-jade.ptr.network uvicorn[1272035]: INFO:     Waiting for application startup.
Nov 10 19:57:06 impressed-jade.ptr.network uvicorn[1272036]: INFO:     Application startup complete.
Nov 10 19:57:06 impressed-jade.ptr.network uvicorn[1272035]: INFO:     Application startup complete.
Nov 10 19:57:23 impressed-jade.ptr.network uvicorn[1272035]: INFO:     109.92.227.130:0 - "GET /api/matches/312 HTTP/1.0" 200 OK
Nov 10 19:57:35 impressed-jade.ptr.network uvicorn[1272035]: INFO:     127.0.0.1:48916 - "GET /api/health HTTP/1.1" 200 OK
Nov 10 19:57:35 impressed-jade.ptr.network uvicorn[1272035]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 10 19:57:36 impressed-jade.ptr.network uvicorn[1272035]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 10 19:57:36 impressed-jade.ptr.network uvicorn[1272036]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
