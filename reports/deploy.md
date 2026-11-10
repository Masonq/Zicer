# Zicer deploy 2026-11-10 18:19 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: c34d28d Матч-центр для всех видов спорта: площадки (баскетбол, хоккей, теннис, волейбол, водное поло), ход игры и статистика Евролиги/Еврокубка/NBA, периоды; плавное движение мяча без пляски; иконки Tabler

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
2026/11/10 21:18:51 [warn] 1382191#1382191: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/10 21:18:51 [warn] 1382191#1382191: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/10 21:18:51 [warn] 1382191#1382191: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/10 21:18:51 [warn] 1382191#1382191: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/10 21:18:51 [warn] 1382191#1382191: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/10 21:18:51 [warn] 1382191#1382191: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
matches: {'basketball': 673, 'waterpolo': 4, 'tennis': 11, 'hockey': 35, 'volleyball': 5, 'football': 1090}
maxbet_results | 2026-11-10 18:18:32.629809 | maxbet results 1 | 
other_results | 2026-11-10 18:18:35.937236 | other results 6 | 
football | 2026-11-10 18:18:44.566379 | football upserted 93 | 
basketball | 2026-11-10 18:18:46.705795 | basketball upserted 424 | 
basketball_week | 2026-11-10 18:18:47.742547 | nba week upserted 40 | 
other_sports | 2026-11-10 18:18:48.146118 | other sports new 0 | 
backfill | 2026-11-10 18:18:48.151311 | already | 
odds | 2026-11-10 18:18:48.918897 | odds matched 57 | 
settle | 2026-11-10 18:18:48.946784 | settled 0 | 
trends | 2026-11-10 18:18:49.312078 | trends 12 | 
analysis | 2026-11-10 18:18:49.321010 | analysis 0 | 
live | 2026-11-10 18:19:09.649449 | live updated 9 | 
tg_poll | 2026-11-10 18:19:09.652359 | no token | 
tg_reminders | 2026-11-10 18:14:25.128398 | no token | 
names | 2026-11-10 18:18:13.906136 | names 120 | 
football_live | 2026-11-10 18:18:23.879079 | live upserted 6 | 
--- worker log ---
Nov 10 21:18:43 impressed-jade.ptr.network python[1381853]: 2026-11-10 21:18:43,690 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261112 "HTTP/1.1 200 OK"
Nov 10 21:18:43 impressed-jade.ptr.network python[1381853]: 2026-11-10 21:18:43,838 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261113 "HTTP/1.1 200 OK"
Nov 10 21:18:44 impressed-jade.ptr.network python[1381853]: 2026-11-10 21:18:44,088 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261114 "HTTP/1.1 200 OK"
Nov 10 21:18:44 impressed-jade.ptr.network python[1381853]: 2026-11-10 21:18:44,280 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261115 "HTTP/1.1 200 OK"
Nov 10 21:18:44 impressed-jade.ptr.network python[1381853]: 2026-11-10 21:18:44,396 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261116 "HTTP/1.1 200 OK"
Nov 10 21:18:44 impressed-jade.ptr.network python[1381853]: 2026-11-10 21:18:44,504 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261117 "HTTP/1.1 200 OK"
Nov 10 21:18:44 impressed-jade.ptr.network python[1381853]: 2026-11-10 21:18:44,709 INFO HTTP Request: GET https://api-live.euroleague.net/v2/competitions/E/seasons/E2026/games "HTTP/1.1 200 OK"
Nov 10 21:18:45 impressed-jade.ptr.network python[1381853]: 2026-11-10 21:18:45,939 INFO HTTP Request: GET https://api-live.euroleague.net/v2/competitions/U/seasons/U2026/games "HTTP/1.1 200 OK"
Nov 10 21:18:46 impressed-jade.ptr.network python[1381853]: 2026-11-10 21:18:46,564 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261109 "HTTP/1.1 200 OK"
Nov 10 21:18:46 impressed-jade.ptr.network python[1381853]: 2026-11-10 21:18:46,619 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261110 "HTTP/1.1 200 OK"
Nov 10 21:18:46 impressed-jade.ptr.network python[1381853]: 2026-11-10 21:18:46,676 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261111 "HTTP/1.1 200 OK"
Nov 10 21:18:46 impressed-jade.ptr.network python[1381853]: 2026-11-10 21:18:46,811 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261112 "HTTP/1.1 200 OK"
Nov 10 21:18:46 impressed-jade.ptr.network python[1381853]: 2026-11-10 21:18:46,857 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261113 "HTTP/1.1 200 OK"
Nov 10 21:18:47 impressed-jade.ptr.network python[1381853]: 2026-11-10 21:18:47,010 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261114 "HTTP/1.1 200 OK"
Nov 10 21:18:47 impressed-jade.ptr.network python[1381853]: 2026-11-10 21:18:47,144 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261115 "HTTP/1.1 200 OK"
Nov 10 21:18:47 impressed-jade.ptr.network python[1381853]: 2026-11-10 21:18:47,307 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261116 "HTTP/1.1 200 OK"
Nov 10 21:18:47 impressed-jade.ptr.network python[1381853]: 2026-11-10 21:18:47,718 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261117 "HTTP/1.1 200 OK"
Nov 10 21:18:47 impressed-jade.ptr.network python[1381853]: 2026-11-10 21:18:47,894 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/H/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 21:18:47 impressed-jade.ptr.network python[1381853]: 2026-11-10 21:18:47,990 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/T/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 21:18:48 impressed-jade.ptr.network python[1381853]: 2026-11-10 21:18:48,074 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/V/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 21:18:48 impressed-jade.ptr.network python[1381853]: 2026-11-10 21:18:48,137 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/W/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 21:18:48 impressed-jade.ptr.network python[1381853]: 2026-11-10 21:18:48,278 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 21:18:48 impressed-jade.ptr.network python[1381853]: 2026-11-10 21:18:48,470 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 21:18:48 impressed-jade.ptr.network python[1381853]: 2026-11-10 21:18:48,863 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 21:19:09 impressed-jade.ptr.network python[1381853]: 2026-11-10 21:19:09,470 INFO HTTP Request: GET https://www.maxbet.rs/live/init/sr "HTTP/1.1 200 OK"
--- api log ---
Nov 10 21:18:42 impressed-jade.ptr.network systemd[1]: Stopped zicer-api.service - Zicer API.
Nov 10 21:18:42 impressed-jade.ptr.network systemd[1]: zicer-api.service: Consumed 6.451s CPU time, 188.8M memory peak, 25.1M memory swap peak.
Nov 10 21:18:42 impressed-jade.ptr.network systemd[1]: Started zicer-api.service - Zicer API.
Nov 10 21:18:42 impressed-jade.ptr.network uvicorn[1381857]: INFO:     Uvicorn running on http://127.0.0.1:8790 (Press CTRL+C to quit)
Nov 10 21:18:42 impressed-jade.ptr.network uvicorn[1381857]: INFO:     Started parent process [1381857]
Nov 10 21:18:43 impressed-jade.ptr.network uvicorn[1381861]: INFO:     Started server process [1381861]
Nov 10 21:18:43 impressed-jade.ptr.network uvicorn[1381861]: INFO:     Waiting for application startup.
Nov 10 21:18:43 impressed-jade.ptr.network uvicorn[1381861]: INFO:     Application startup complete.
Nov 10 21:18:44 impressed-jade.ptr.network uvicorn[1381862]: INFO:     Started server process [1381862]
Nov 10 21:18:44 impressed-jade.ptr.network uvicorn[1381862]: INFO:     Waiting for application startup.
Nov 10 21:18:44 impressed-jade.ptr.network uvicorn[1381862]: INFO:     Application startup complete.
Nov 10 21:19:15 impressed-jade.ptr.network uvicorn[1381862]: INFO:     127.0.0.1:50486 - "GET /api/health HTTP/1.1" 200 OK
Nov 10 21:19:15 impressed-jade.ptr.network uvicorn[1381862]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 10 21:19:15 impressed-jade.ptr.network uvicorn[1381862]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 10 21:19:16 impressed-jade.ptr.network uvicorn[1381862]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
