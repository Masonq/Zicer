# Zicer deploy 2026-11-10 16:43 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: 8f723ce deploy: свободный порт для API, проверка что отвечает именно Zicer

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

=== Админ ===
OK: админ есть

=== nginx ===
2026/11/10 19:43:05 [warn] 1252987#1252987: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/10 19:43:05 [warn] 1252987#1252987: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/10 19:43:05 [warn] 1252987#1252987: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/10 19:43:05 [warn] 1252987#1252987: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/10 19:43:05 [warn] 1252987#1252987: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/10 19:43:05 [warn] 1252987#1252987: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
football | 2026-11-10 16:42:58.719310 | football upserted 33 | 
basketball | 2026-11-10 16:42:59.707087 | basketball upserted 280 | 
backfill | 2026-11-10 16:42:59.712180 | already | 
odds | 2026-11-10 16:43:00.383509 | odds matched 26 | 
settle | 2026-11-10 16:43:00.403114 | settled 0 | 
trends | 2026-11-10 16:43:00.442103 | trends 2 | 
analysis | 2026-11-10 16:43:00.447695 | analysis 0 | 
tg_poll | 2026-11-10 16:43:20.453675 | no token | 
--- worker log ---
Nov 10 19:42:03 impressed-jade.ptr.network python[1250240]: 2026-11-10 19:42:03,664 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261103 "HTTP/1.1 200 OK"
Nov 10 19:42:04 impressed-jade.ptr.network python[1250240]: 2026-11-10 19:42:04,214 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261104 "HTTP/1.1 200 OK"
Nov 10 19:42:04 impressed-jade.ptr.network python[1250240]: 2026-11-10 19:42:04,738 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261105 "HTTP/1.1 200 OK"
Nov 10 19:42:05 impressed-jade.ptr.network python[1250240]: 2026-11-10 19:42:05,370 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261106 "HTTP/1.1 200 OK"
Nov 10 19:42:06 impressed-jade.ptr.network python[1250240]: 2026-11-10 19:42:06,294 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261107 "HTTP/1.1 200 OK"
Nov 10 19:42:07 impressed-jade.ptr.network python[1250240]: 2026-11-10 19:42:07,074 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261108 "HTTP/1.1 200 OK"
Nov 10 19:42:07 impressed-jade.ptr.network python[1250240]: 2026-11-10 19:42:07,773 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 19:42:08 impressed-jade.ptr.network python[1250240]: 2026-11-10 19:42:08,081 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 19:42:57 impressed-jade.ptr.network systemd[1]: Stopping zicer-worker.service - Zicer data worker...
Nov 10 19:42:57 impressed-jade.ptr.network systemd[1]: zicer-worker.service: Deactivated successfully.
Nov 10 19:42:57 impressed-jade.ptr.network systemd[1]: Stopped zicer-worker.service - Zicer data worker.
Nov 10 19:42:57 impressed-jade.ptr.network systemd[1]: zicer-worker.service: Consumed 5.884s CPU time, 68.9M memory peak, 0B memory swap peak.
Nov 10 19:42:57 impressed-jade.ptr.network systemd[1]: Started zicer-worker.service - Zicer data worker.
Nov 10 19:42:57 impressed-jade.ptr.network python[1252693]: 2026-11-10 19:42:57,824 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261109 "HTTP/1.1 200 OK"
Nov 10 19:42:57 impressed-jade.ptr.network python[1252693]: 2026-11-10 19:42:57,839 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261110 "HTTP/1.1 200 OK"
Nov 10 19:42:57 impressed-jade.ptr.network python[1252693]: 2026-11-10 19:42:57,852 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261111 "HTTP/1.1 200 OK"
Nov 10 19:42:57 impressed-jade.ptr.network python[1252693]: 2026-11-10 19:42:57,922 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261112 "HTTP/1.1 200 OK"
Nov 10 19:42:58 impressed-jade.ptr.network python[1252693]: 2026-11-10 19:42:58,044 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261113 "HTTP/1.1 200 OK"
Nov 10 19:42:58 impressed-jade.ptr.network python[1252693]: 2026-11-10 19:42:58,275 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261114 "HTTP/1.1 200 OK"
Nov 10 19:42:58 impressed-jade.ptr.network python[1252693]: 2026-11-10 19:42:58,466 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261115 "HTTP/1.1 200 OK"
Nov 10 19:42:58 impressed-jade.ptr.network python[1252693]: 2026-11-10 19:42:58,558 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261116 "HTTP/1.1 200 OK"
Nov 10 19:42:58 impressed-jade.ptr.network python[1252693]: 2026-11-10 19:42:58,692 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261117 "HTTP/1.1 200 OK"
Nov 10 19:42:58 impressed-jade.ptr.network python[1252693]: 2026-11-10 19:42:58,800 INFO HTTP Request: GET https://api-live.euroleague.net/v2/competitions/E/seasons/E2026/games "HTTP/1.1 200 OK"
Nov 10 19:42:59 impressed-jade.ptr.network python[1252693]: 2026-11-10 19:42:59,858 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 19:43:00 impressed-jade.ptr.network python[1252693]: 2026-11-10 19:43:00,363 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
--- api log ---
Nov 10 19:42:54 impressed-jade.ptr.network systemd[1]: zicer-api.service: Failed with result 'exit-code'.
Nov 10 19:42:55 impressed-jade.ptr.network systemd[1]: Stopped zicer-api.service - Zicer API.
Nov 10 19:42:57 impressed-jade.ptr.network systemd[1]: Started zicer-api.service - Zicer API.
Nov 10 19:42:57 impressed-jade.ptr.network uvicorn[1252691]: INFO:     Uvicorn running on http://127.0.0.1:8790 (Press CTRL+C to quit)
Nov 10 19:42:57 impressed-jade.ptr.network uvicorn[1252691]: INFO:     Started parent process [1252691]
Nov 10 19:42:58 impressed-jade.ptr.network uvicorn[1252696]: INFO:     Started server process [1252696]
Nov 10 19:42:58 impressed-jade.ptr.network uvicorn[1252696]: INFO:     Waiting for application startup.
Nov 10 19:42:58 impressed-jade.ptr.network uvicorn[1252697]: INFO:     Started server process [1252697]
Nov 10 19:42:58 impressed-jade.ptr.network uvicorn[1252697]: INFO:     Waiting for application startup.
Nov 10 19:42:58 impressed-jade.ptr.network uvicorn[1252696]: INFO:     Application startup complete.
Nov 10 19:42:58 impressed-jade.ptr.network uvicorn[1252697]: INFO:     Application startup complete.
Nov 10 19:43:29 impressed-jade.ptr.network uvicorn[1252697]: INFO:     127.0.0.1:51918 - "GET /api/health HTTP/1.1" 200 OK
Nov 10 19:43:34 impressed-jade.ptr.network uvicorn[1252697]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 10 19:43:34 impressed-jade.ptr.network uvicorn[1252697]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 10 19:43:35 impressed-jade.ptr.network uvicorn[1252697]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
