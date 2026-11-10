# Zicer deploy 2026-11-10 17:18 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: 5a6d001 Названия команд и лиг на выбранном языке (LAT/ЋИР/RU); +30 футбольных чемпионатов и кубков; баскетбол: Еврокубок, NBA, ABA/KLS/FIBA по данным MaxBet с результатами

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
2026/11/10 20:18:21 [warn] 1299996#1299996: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/10 20:18:21 [warn] 1299996#1299996: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/10 20:18:21 [warn] 1299996#1299996: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/10 20:18:21 [warn] 1299996#1299996: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/10 20:18:21 [warn] 1299996#1299996: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/10 20:18:21 [warn] 1299996#1299996: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
matches: {'basketball': 673, 'football': 1090}
tg_reminders | 2026-11-10 17:17:19.100887 | no token | 
football_live | 2026-11-10 17:17:24.177555 | live upserted 0 | 
football | 2026-11-10 17:18:14.617064 | football upserted 97 | 
basketball | 2026-11-10 17:18:16.777092 | basketball upserted 528 | 
basketball_week | 2026-11-10 17:18:17.633382 | nba week upserted 40 | 
backfill | 2026-11-10 17:18:17.639400 | already | 
odds | 2026-11-10 17:18:18.692258 | odds matched 63 | 
settle | 2026-11-10 17:18:19.039342 | settled 0 | 
trends | 2026-11-10 17:18:19.166920 | trends 12 | 
analysis | 2026-11-10 17:18:19.320556 | analysis 25 | 
tg_poll | 2026-11-10 17:18:39.326772 | no token | 
--- worker log ---
Nov 10 20:18:12 impressed-jade.ptr.network systemd[1]: zicer-worker.service: Consumed 7.884s CPU time, 98.3M memory peak, 45.9M memory swap peak.
Nov 10 20:18:12 impressed-jade.ptr.network systemd[1]: Started zicer-worker.service - Zicer data worker.
Nov 10 20:18:13 impressed-jade.ptr.network python[1299656]: 2026-11-10 20:18:13,183 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261109 "HTTP/1.1 200 OK"
Nov 10 20:18:13 impressed-jade.ptr.network python[1299656]: 2026-11-10 20:18:13,257 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261110 "HTTP/1.1 200 OK"
Nov 10 20:18:13 impressed-jade.ptr.network python[1299656]: 2026-11-10 20:18:13,313 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261111 "HTTP/1.1 200 OK"
Nov 10 20:18:13 impressed-jade.ptr.network python[1299656]: 2026-11-10 20:18:13,438 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261112 "HTTP/1.1 200 OK"
Nov 10 20:18:13 impressed-jade.ptr.network python[1299656]: 2026-11-10 20:18:13,569 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261113 "HTTP/1.1 200 OK"
Nov 10 20:18:13 impressed-jade.ptr.network python[1299656]: 2026-11-10 20:18:13,835 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261114 "HTTP/1.1 200 OK"
Nov 10 20:18:14 impressed-jade.ptr.network python[1299656]: 2026-11-10 20:18:14,108 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261115 "HTTP/1.1 200 OK"
Nov 10 20:18:14 impressed-jade.ptr.network python[1299656]: 2026-11-10 20:18:14,437 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261116 "HTTP/1.1 200 OK"
Nov 10 20:18:14 impressed-jade.ptr.network python[1299656]: 2026-11-10 20:18:14,557 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261117 "HTTP/1.1 200 OK"
Nov 10 20:18:14 impressed-jade.ptr.network python[1299656]: 2026-11-10 20:18:14,728 INFO HTTP Request: GET https://api-live.euroleague.net/v2/competitions/E/seasons/E2026/games "HTTP/1.1 200 OK"
Nov 10 20:18:15 impressed-jade.ptr.network python[1299656]: 2026-11-10 20:18:15,667 INFO HTTP Request: GET https://api-live.euroleague.net/v2/competitions/U/seasons/U2026/games "HTTP/1.1 200 OK"
Nov 10 20:18:16 impressed-jade.ptr.network python[1299656]: 2026-11-10 20:18:16,473 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261109 "HTTP/1.1 200 OK"
Nov 10 20:18:16 impressed-jade.ptr.network python[1299656]: 2026-11-10 20:18:16,542 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261110 "HTTP/1.1 200 OK"
Nov 10 20:18:16 impressed-jade.ptr.network python[1299656]: 2026-11-10 20:18:16,736 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261111 "HTTP/1.1 200 OK"
Nov 10 20:18:16 impressed-jade.ptr.network python[1299656]: 2026-11-10 20:18:16,880 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261112 "HTTP/1.1 200 OK"
Nov 10 20:18:17 impressed-jade.ptr.network python[1299656]: 2026-11-10 20:18:17,016 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261113 "HTTP/1.1 200 OK"
Nov 10 20:18:17 impressed-jade.ptr.network python[1299656]: 2026-11-10 20:18:17,169 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261114 "HTTP/1.1 200 OK"
Nov 10 20:18:17 impressed-jade.ptr.network python[1299656]: 2026-11-10 20:18:17,307 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261115 "HTTP/1.1 200 OK"
Nov 10 20:18:17 impressed-jade.ptr.network python[1299656]: 2026-11-10 20:18:17,449 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261116 "HTTP/1.1 200 OK"
Nov 10 20:18:17 impressed-jade.ptr.network python[1299656]: 2026-11-10 20:18:17,608 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261117 "HTTP/1.1 200 OK"
Nov 10 20:18:17 impressed-jade.ptr.network python[1299656]: 2026-11-10 20:18:17,779 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 20:18:17 impressed-jade.ptr.network python[1299656]: 2026-11-10 20:18:17,977 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 20:18:18 impressed-jade.ptr.network python[1299656]: 2026-11-10 20:18:18,416 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
--- api log ---
Nov 10 20:18:12 impressed-jade.ptr.network systemd[1]: Stopped zicer-api.service - Zicer API.
Nov 10 20:18:12 impressed-jade.ptr.network systemd[1]: zicer-api.service: Consumed 9.244s CPU time, 165.2M memory peak, 91.9M memory swap peak.
Nov 10 20:18:12 impressed-jade.ptr.network systemd[1]: Started zicer-api.service - Zicer API.
Nov 10 20:18:13 impressed-jade.ptr.network uvicorn[1299661]: INFO:     Uvicorn running on http://127.0.0.1:8790 (Press CTRL+C to quit)
Nov 10 20:18:13 impressed-jade.ptr.network uvicorn[1299661]: INFO:     Started parent process [1299661]
Nov 10 20:18:14 impressed-jade.ptr.network uvicorn[1299685]: INFO:     Started server process [1299685]
Nov 10 20:18:14 impressed-jade.ptr.network uvicorn[1299685]: INFO:     Waiting for application startup.
Nov 10 20:18:14 impressed-jade.ptr.network uvicorn[1299685]: INFO:     Application startup complete.
Nov 10 20:18:14 impressed-jade.ptr.network uvicorn[1299684]: INFO:     Started server process [1299684]
Nov 10 20:18:14 impressed-jade.ptr.network uvicorn[1299684]: INFO:     Waiting for application startup.
Nov 10 20:18:14 impressed-jade.ptr.network uvicorn[1299684]: INFO:     Application startup complete.
Nov 10 20:18:45 impressed-jade.ptr.network uvicorn[1299684]: INFO:     127.0.0.1:37444 - "GET /api/health HTTP/1.1" 200 OK
Nov 10 20:18:45 impressed-jade.ptr.network uvicorn[1299684]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 10 20:18:45 impressed-jade.ptr.network uvicorn[1299684]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 10 20:18:46 impressed-jade.ptr.network uvicorn[1299685]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
