# Zicer deploy 2026-11-10 17:44 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: a78544a Матч-центр: события, статистика, давление (футбол), счёт по периодам (баскетбол, хоккей, теннис, волейбол); живой счёт из MaxBet; переключатель видов спорта под матчем дня; переводчик с запасными сервисами

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
2026/11/10 20:44:07 [warn] 1336396#1336396: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/10 20:44:07 [warn] 1336396#1336396: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/10 20:44:07 [warn] 1336396#1336396: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/10 20:44:07 [warn] 1336396#1336396: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/10 20:44:07 [warn] 1336396#1336396: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/10 20:44:07 [warn] 1336396#1336396: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
football | 2026-11-10 17:44:01.719017 | football upserted 93 | 
basketball | 2026-11-10 17:44:03.592104 | basketball upserted 424 | 
basketball_week | 2026-11-10 17:44:04.803498 | nba week upserted 40 | 
other_sports | 2026-11-10 17:44:05.140859 | other sports new 0 | 
backfill | 2026-11-10 17:44:05.144700 | already | 
odds | 2026-11-10 17:44:06.263076 | odds matched 58 | 
settle | 2026-11-10 17:44:06.286968 | settled 0 | 
trends | 2026-11-10 17:44:06.510160 | trends 12 | 
analysis | 2026-11-10 17:44:06.518573 | analysis 0 | 
live | 2026-11-10 17:44:26.885097 | live updated 4 | 
tg_poll | 2026-11-10 17:44:26.888287 | no token | 
names | 2026-11-10 17:39:41.355542 | names 3 | 
tg_reminders | 2026-11-10 17:39:42.685587 | no token | 
other_results | 2026-11-10 17:42:46.397994 | no pending | 
football_live | 2026-11-10 17:42:52.058904 | live upserted 6 | 
maxbet_results | 2026-11-10 17:42:55.211038 | maxbet results 1 | 
--- worker log ---
Nov 10 20:44:00 impressed-jade.ptr.network python[1336069]: 2026-11-10 20:44:00,922 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261112 "HTTP/1.1 200 OK"
Nov 10 20:44:01 impressed-jade.ptr.network python[1336069]: 2026-11-10 20:44:01,050 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261113 "HTTP/1.1 200 OK"
Nov 10 20:44:01 impressed-jade.ptr.network python[1336069]: 2026-11-10 20:44:01,263 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261114 "HTTP/1.1 200 OK"
Nov 10 20:44:01 impressed-jade.ptr.network python[1336069]: 2026-11-10 20:44:01,447 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261115 "HTTP/1.1 200 OK"
Nov 10 20:44:01 impressed-jade.ptr.network python[1336069]: 2026-11-10 20:44:01,540 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261116 "HTTP/1.1 200 OK"
Nov 10 20:44:01 impressed-jade.ptr.network python[1336069]: 2026-11-10 20:44:01,657 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261117 "HTTP/1.1 200 OK"
Nov 10 20:44:01 impressed-jade.ptr.network python[1336069]: 2026-11-10 20:44:01,863 INFO HTTP Request: GET https://api-live.euroleague.net/v2/competitions/E/seasons/E2026/games "HTTP/1.1 200 OK"
Nov 10 20:44:02 impressed-jade.ptr.network python[1336069]: 2026-11-10 20:44:02,749 INFO HTTP Request: GET https://api-live.euroleague.net/v2/competitions/U/seasons/U2026/games "HTTP/1.1 200 OK"
Nov 10 20:44:03 impressed-jade.ptr.network python[1336069]: 2026-11-10 20:44:03,358 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261109 "HTTP/1.1 200 OK"
Nov 10 20:44:03 impressed-jade.ptr.network python[1336069]: 2026-11-10 20:44:03,486 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261110 "HTTP/1.1 200 OK"
Nov 10 20:44:03 impressed-jade.ptr.network python[1336069]: 2026-11-10 20:44:03,559 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261111 "HTTP/1.1 200 OK"
Nov 10 20:44:03 impressed-jade.ptr.network python[1336069]: 2026-11-10 20:44:03,782 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261112 "HTTP/1.1 200 OK"
Nov 10 20:44:04 impressed-jade.ptr.network python[1336069]: 2026-11-10 20:44:04,152 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261113 "HTTP/1.1 200 OK"
Nov 10 20:44:04 impressed-jade.ptr.network python[1336069]: 2026-11-10 20:44:04,310 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261114 "HTTP/1.1 200 OK"
Nov 10 20:44:04 impressed-jade.ptr.network python[1336069]: 2026-11-10 20:44:04,445 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261115 "HTTP/1.1 200 OK"
Nov 10 20:44:04 impressed-jade.ptr.network python[1336069]: 2026-11-10 20:44:04,587 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261116 "HTTP/1.1 200 OK"
Nov 10 20:44:04 impressed-jade.ptr.network python[1336069]: 2026-11-10 20:44:04,776 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261117 "HTTP/1.1 200 OK"
Nov 10 20:44:04 impressed-jade.ptr.network python[1336069]: 2026-11-10 20:44:04,914 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/H/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 20:44:05 impressed-jade.ptr.network python[1336069]: 2026-11-10 20:44:05,008 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/T/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 20:44:05 impressed-jade.ptr.network python[1336069]: 2026-11-10 20:44:05,077 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/V/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 20:44:05 impressed-jade.ptr.network python[1336069]: 2026-11-10 20:44:05,132 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/W/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 20:44:05 impressed-jade.ptr.network python[1336069]: 2026-11-10 20:44:05,327 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 20:44:05 impressed-jade.ptr.network python[1336069]: 2026-11-10 20:44:05,749 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 20:44:06 impressed-jade.ptr.network python[1336069]: 2026-11-10 20:44:06,203 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 20:44:26 impressed-jade.ptr.network python[1336069]: 2026-11-10 20:44:26,704 INFO HTTP Request: GET https://www.maxbet.rs/live/init/sr "HTTP/1.1 200 OK"
--- api log ---
Nov 10 20:43:58 impressed-jade.ptr.network systemd[1]: zicer-api.service: Consumed 7.580s CPU time, 178.9M memory peak, 0B memory swap peak.
Nov 10 20:43:59 impressed-jade.ptr.network systemd[1]: Started zicer-api.service - Zicer API.
Nov 10 20:43:59 impressed-jade.ptr.network uvicorn[1336091]: INFO:     Uvicorn running on http://127.0.0.1:8790 (Press CTRL+C to quit)
Nov 10 20:43:59 impressed-jade.ptr.network uvicorn[1336091]: INFO:     Started parent process [1336091]
Nov 10 20:44:01 impressed-jade.ptr.network uvicorn[1336114]: INFO:     Started server process [1336114]
Nov 10 20:44:01 impressed-jade.ptr.network uvicorn[1336114]: INFO:     Waiting for application startup.
Nov 10 20:44:01 impressed-jade.ptr.network uvicorn[1336113]: INFO:     Started server process [1336113]
Nov 10 20:44:01 impressed-jade.ptr.network uvicorn[1336113]: INFO:     Waiting for application startup.
Nov 10 20:44:01 impressed-jade.ptr.network uvicorn[1336113]: INFO:     Application startup complete.
Nov 10 20:44:01 impressed-jade.ptr.network uvicorn[1336114]: INFO:     Application startup complete.
Nov 10 20:44:24 impressed-jade.ptr.network uvicorn[1336114]: INFO:     109.92.227.130:0 - "GET /api/sports?tz=180 HTTP/1.0" 200 OK
Nov 10 20:44:31 impressed-jade.ptr.network uvicorn[1336114]: INFO:     127.0.0.1:38700 - "GET /api/health HTTP/1.1" 200 OK
Nov 10 20:44:32 impressed-jade.ptr.network uvicorn[1336113]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 10 20:44:32 impressed-jade.ptr.network uvicorn[1336114]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 10 20:44:32 impressed-jade.ptr.network uvicorn[1336114]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
