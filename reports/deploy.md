# Zicer deploy 2026-11-10 16:44 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: 7642e08 deploy report 2026-11-10_1643

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
2026/11/10 19:43:52 [warn] 1254646#1254646: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/10 19:43:52 [warn] 1254646#1254646: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/10 19:43:52 [warn] 1254646#1254646: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/10 19:43:52 [warn] 1254646#1254646: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/10 19:43:52 [warn] 1254646#1254646: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/10 19:43:52 [warn] 1254646#1254646: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
football | 2026-11-10 16:43:45.598392 | football upserted 33 | 
basketball | 2026-11-10 16:43:47.259134 | basketball upserted 280 | 
backfill | 2026-11-10 16:43:47.265267 | already | 
odds | 2026-11-10 16:43:48.051736 | odds matched 26 | 
settle | 2026-11-10 16:43:48.089115 | settled 0 | 
trends | 2026-11-10 16:43:48.144864 | trends 2 | 
analysis | 2026-11-10 16:43:48.151854 | analysis 0 | 
tg_poll | 2026-11-10 16:44:08.159703 | no token | 
--- worker log ---
Nov 10 19:42:58 impressed-jade.ptr.network python[1252693]: 2026-11-10 19:42:58,044 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261113 "HTTP/1.1 200 OK"
Nov 10 19:42:58 impressed-jade.ptr.network python[1252693]: 2026-11-10 19:42:58,275 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261114 "HTTP/1.1 200 OK"
Nov 10 19:42:58 impressed-jade.ptr.network python[1252693]: 2026-11-10 19:42:58,466 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261115 "HTTP/1.1 200 OK"
Nov 10 19:42:58 impressed-jade.ptr.network python[1252693]: 2026-11-10 19:42:58,558 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261116 "HTTP/1.1 200 OK"
Nov 10 19:42:58 impressed-jade.ptr.network python[1252693]: 2026-11-10 19:42:58,692 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261117 "HTTP/1.1 200 OK"
Nov 10 19:42:58 impressed-jade.ptr.network python[1252693]: 2026-11-10 19:42:58,800 INFO HTTP Request: GET https://api-live.euroleague.net/v2/competitions/E/seasons/E2026/games "HTTP/1.1 200 OK"
Nov 10 19:42:59 impressed-jade.ptr.network python[1252693]: 2026-11-10 19:42:59,858 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 19:43:00 impressed-jade.ptr.network python[1252693]: 2026-11-10 19:43:00,363 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 19:43:43 impressed-jade.ptr.network systemd[1]: Stopping zicer-worker.service - Zicer data worker...
Nov 10 19:43:43 impressed-jade.ptr.network systemd[1]: zicer-worker.service: Deactivated successfully.
Nov 10 19:43:43 impressed-jade.ptr.network systemd[1]: Stopped zicer-worker.service - Zicer data worker.
Nov 10 19:43:43 impressed-jade.ptr.network systemd[1]: zicer-worker.service: Consumed 1.483s CPU time, 66.5M memory peak, 0B memory swap peak.
Nov 10 19:43:43 impressed-jade.ptr.network systemd[1]: Started zicer-worker.service - Zicer data worker.
Nov 10 19:43:44 impressed-jade.ptr.network python[1254285]: 2026-11-10 19:43:44,401 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261109 "HTTP/1.1 200 OK"
Nov 10 19:43:44 impressed-jade.ptr.network python[1254285]: 2026-11-10 19:43:44,421 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261110 "HTTP/1.1 200 OK"
Nov 10 19:43:44 impressed-jade.ptr.network python[1254285]: 2026-11-10 19:43:44,435 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261111 "HTTP/1.1 200 OK"
Nov 10 19:43:44 impressed-jade.ptr.network python[1254285]: 2026-11-10 19:43:44,561 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261112 "HTTP/1.1 200 OK"
Nov 10 19:43:44 impressed-jade.ptr.network python[1254285]: 2026-11-10 19:43:44,720 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261113 "HTTP/1.1 200 OK"
Nov 10 19:43:44 impressed-jade.ptr.network python[1254285]: 2026-11-10 19:43:44,994 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261114 "HTTP/1.1 200 OK"
Nov 10 19:43:45 impressed-jade.ptr.network python[1254285]: 2026-11-10 19:43:45,271 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261115 "HTTP/1.1 200 OK"
Nov 10 19:43:45 impressed-jade.ptr.network python[1254285]: 2026-11-10 19:43:45,406 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261116 "HTTP/1.1 200 OK"
Nov 10 19:43:45 impressed-jade.ptr.network python[1254285]: 2026-11-10 19:43:45,536 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261117 "HTTP/1.1 200 OK"
Nov 10 19:43:45 impressed-jade.ptr.network python[1254285]: 2026-11-10 19:43:45,723 INFO HTTP Request: GET https://api-live.euroleague.net/v2/competitions/E/seasons/E2026/games "HTTP/1.1 200 OK"
Nov 10 19:43:47 impressed-jade.ptr.network python[1254285]: 2026-11-10 19:43:47,406 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 19:43:48 impressed-jade.ptr.network python[1254285]: 2026-11-10 19:43:48,018 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
--- api log ---
Nov 10 19:43:46 impressed-jade.ptr.network uvicorn[1254293]: INFO:     Waiting for application startup.
Nov 10 19:43:46 impressed-jade.ptr.network uvicorn[1254294]: INFO:     Started server process [1254294]
Nov 10 19:43:46 impressed-jade.ptr.network uvicorn[1254294]: INFO:     Waiting for application startup.
Nov 10 19:43:46 impressed-jade.ptr.network uvicorn[1254293]: INFO:     Application startup complete.
Nov 10 19:43:47 impressed-jade.ptr.network uvicorn[1254294]: INFO:     Application startup complete.
Nov 10 19:43:51 impressed-jade.ptr.network uvicorn[1254294]: INFO:     109.245.37.185:0 - "GET /api/clubs/battle?sport=football HTTP/1.0" 200 OK
Nov 10 19:43:52 impressed-jade.ptr.network uvicorn[1254294]: INFO:     109.245.37.185:0 - "GET /api/home?tz=60 HTTP/1.0" 200 OK
Nov 10 19:43:59 impressed-jade.ptr.network uvicorn[1254294]: INFO:     109.245.37.185:0 - "GET /api/home?tz=60 HTTP/1.0" 200 OK
Nov 10 19:44:01 impressed-jade.ptr.network uvicorn[1254294]: INFO:     109.245.37.185:0 - "GET /api/home?tz=60 HTTP/1.0" 200 OK
Nov 10 19:44:12 impressed-jade.ptr.network uvicorn[1254294]: INFO:     109.245.37.185:0 - "GET /api/bookmakers HTTP/1.0" 200 OK
Nov 10 19:44:15 impressed-jade.ptr.network uvicorn[1254294]: INFO:     109.245.37.185:0 - "GET /api/home?tz=60 HTTP/1.0" 200 OK
Nov 10 19:44:16 impressed-jade.ptr.network uvicorn[1254294]: INFO:     127.0.0.1:50712 - "GET /api/health HTTP/1.1" 200 OK
Nov 10 19:44:16 impressed-jade.ptr.network uvicorn[1254294]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 10 19:44:16 impressed-jade.ptr.network uvicorn[1254294]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 10 19:44:16 impressed-jade.ptr.network uvicorn[1254294]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
