# Zicer deploy 2026-11-10 17:27 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: 1e7ea15 Главная: переключатель видов спорта; хоккей, теннис, волейбол, ватерполо; исправлено падение рейтинга при смене вкладок; защита от белого экрана

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
2026/11/10 20:26:51 [warn] 1313135#1313135: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/10 20:26:51 [warn] 1313135#1313135: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/10 20:26:51 [warn] 1313135#1313135: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/10 20:26:51 [warn] 1313135#1313135: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/10 20:26:51 [warn] 1313135#1313135: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/10 20:26:51 [warn] 1313135#1313135: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
football_live | 2026-11-10 17:25:45.995713 | live upserted 6 | 
football | 2026-11-10 17:26:45.041140 | football upserted 93 | 
basketball | 2026-11-10 17:26:46.967943 | basketball upserted 424 | 
basketball_week | 2026-11-10 17:26:47.862674 | nba week upserted 40 | 
backfill | 2026-11-10 17:26:47.867962 | already | 
odds | 2026-11-10 17:26:49.349608 | odds matched 58 | 
settle | 2026-11-10 17:26:49.378497 | settled 0 | 
trends | 2026-11-10 17:26:49.512124 | trends 12 | 
analysis | 2026-11-10 17:26:49.519188 | analysis 0 | 
tg_poll | 2026-11-10 17:27:09.524129 | no token | 
names | 2026-11-10 17:24:37.982103 | names 35 | 
tg_reminders | 2026-11-10 17:24:38.890298 | no token | 
maxbet_results | 2026-11-10 17:24:45.829776 | no pending | 
--- worker log ---
Nov 10 20:26:42 impressed-jade.ptr.network systemd[1]: zicer-worker.service: Consumed 9.578s CPU time, 106.4M memory peak, 22.4M memory swap peak.
Nov 10 20:26:42 impressed-jade.ptr.network systemd[1]: Started zicer-worker.service - Zicer data worker.
Nov 10 20:26:43 impressed-jade.ptr.network python[1312832]: 2026-11-10 20:26:43,790 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261109 "HTTP/1.1 200 OK"
Nov 10 20:26:43 impressed-jade.ptr.network python[1312832]: 2026-11-10 20:26:43,843 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261110 "HTTP/1.1 200 OK"
Nov 10 20:26:43 impressed-jade.ptr.network python[1312832]: 2026-11-10 20:26:43,965 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261111 "HTTP/1.1 200 OK"
Nov 10 20:26:44 impressed-jade.ptr.network python[1312832]: 2026-11-10 20:26:44,043 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261112 "HTTP/1.1 200 OK"
Nov 10 20:26:44 impressed-jade.ptr.network python[1312832]: 2026-11-10 20:26:44,158 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261113 "HTTP/1.1 200 OK"
Nov 10 20:26:44 impressed-jade.ptr.network python[1312832]: 2026-11-10 20:26:44,409 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261114 "HTTP/1.1 200 OK"
Nov 10 20:26:44 impressed-jade.ptr.network python[1312832]: 2026-11-10 20:26:44,626 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261115 "HTTP/1.1 200 OK"
Nov 10 20:26:44 impressed-jade.ptr.network python[1312832]: 2026-11-10 20:26:44,770 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261116 "HTTP/1.1 200 OK"
Nov 10 20:26:44 impressed-jade.ptr.network python[1312832]: 2026-11-10 20:26:44,937 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261117 "HTTP/1.1 200 OK"
Nov 10 20:26:45 impressed-jade.ptr.network python[1312832]: 2026-11-10 20:26:45,141 INFO HTTP Request: GET https://api-live.euroleague.net/v2/competitions/E/seasons/E2026/games "HTTP/1.1 200 OK"
Nov 10 20:26:46 impressed-jade.ptr.network python[1312832]: 2026-11-10 20:26:46,087 INFO HTTP Request: GET https://api-live.euroleague.net/v2/competitions/U/seasons/U2026/games "HTTP/1.1 200 OK"
Nov 10 20:26:46 impressed-jade.ptr.network python[1312832]: 2026-11-10 20:26:46,693 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261109 "HTTP/1.1 200 OK"
Nov 10 20:26:46 impressed-jade.ptr.network python[1312832]: 2026-11-10 20:26:46,882 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261110 "HTTP/1.1 200 OK"
Nov 10 20:26:46 impressed-jade.ptr.network python[1312832]: 2026-11-10 20:26:46,937 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261111 "HTTP/1.1 200 OK"
Nov 10 20:26:47 impressed-jade.ptr.network python[1312832]: 2026-11-10 20:26:47,077 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261112 "HTTP/1.1 200 OK"
Nov 10 20:26:47 impressed-jade.ptr.network python[1312832]: 2026-11-10 20:26:47,217 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261113 "HTTP/1.1 200 OK"
Nov 10 20:26:47 impressed-jade.ptr.network python[1312832]: 2026-11-10 20:26:47,364 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261114 "HTTP/1.1 200 OK"
Nov 10 20:26:47 impressed-jade.ptr.network python[1312832]: 2026-11-10 20:26:47,492 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261115 "HTTP/1.1 200 OK"
Nov 10 20:26:47 impressed-jade.ptr.network python[1312832]: 2026-11-10 20:26:47,683 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261116 "HTTP/1.1 200 OK"
Nov 10 20:26:47 impressed-jade.ptr.network python[1312832]: 2026-11-10 20:26:47,844 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261117 "HTTP/1.1 200 OK"
Nov 10 20:26:48 impressed-jade.ptr.network python[1312832]: 2026-11-10 20:26:48,323 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 20:26:48 impressed-jade.ptr.network python[1312832]: 2026-11-10 20:26:48,859 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 20:26:49 impressed-jade.ptr.network python[1312832]: 2026-11-10 20:26:49,287 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
--- api log ---
Nov 10 20:26:43 impressed-jade.ptr.network systemd[1]: zicer-api.service: Consumed 4.847s CPU time, 168.8M memory peak, 23.1M memory swap peak.
Nov 10 20:26:43 impressed-jade.ptr.network systemd[1]: Started zicer-api.service - Zicer API.
Nov 10 20:26:43 impressed-jade.ptr.network uvicorn[1312838]: INFO:     Uvicorn running on http://127.0.0.1:8790 (Press CTRL+C to quit)
Nov 10 20:26:43 impressed-jade.ptr.network uvicorn[1312838]: INFO:     Started parent process [1312838]
Nov 10 20:26:44 impressed-jade.ptr.network uvicorn[1312842]: INFO:     Started server process [1312842]
Nov 10 20:26:44 impressed-jade.ptr.network uvicorn[1312842]: INFO:     Waiting for application startup.
Nov 10 20:26:44 impressed-jade.ptr.network uvicorn[1312842]: INFO:     Application startup complete.
Nov 10 20:26:44 impressed-jade.ptr.network uvicorn[1312843]: INFO:     Started server process [1312843]
Nov 10 20:26:44 impressed-jade.ptr.network uvicorn[1312843]: INFO:     Waiting for application startup.
Nov 10 20:26:44 impressed-jade.ptr.network uvicorn[1312843]: INFO:     Application startup complete.
Nov 10 20:27:07 impressed-jade.ptr.network uvicorn[1312843]: INFO:     109.92.227.130:0 - "GET /api/matches?day=live&sport=all&serbian=false&tz=180 HTTP/1.0" 200 OK
Nov 10 20:27:16 impressed-jade.ptr.network uvicorn[1312843]: INFO:     127.0.0.1:36492 - "GET /api/health HTTP/1.1" 200 OK
Nov 10 20:27:16 impressed-jade.ptr.network uvicorn[1312843]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 10 20:27:16 impressed-jade.ptr.network uvicorn[1312843]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 10 20:27:16 impressed-jade.ptr.network uvicorn[1312843]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
