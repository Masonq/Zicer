# Zicer deploy 2026-11-10 21:19 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: 77c1016 Цвета сайта возвращены (зелёный + золото); логотип — только буква W в цветах сайта (шапка, иконки, тикет); теннис: одна непрерывная траектория розыгрыша до прихода очка

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
2026/11/11 00:19:21 [warn] 1618223#1618223: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/11 00:19:21 [warn] 1618223#1618223: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/11 00:19:21 [warn] 1618223#1618223: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/11 00:19:21 [warn] 1618223#1618223: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/11 00:19:21 [warn] 1618223#1618223: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/11 00:19:21 [warn] 1618223#1618223: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
maxbet_results | 2026-11-10 21:16:52.884938 | no pending | 
other_results | 2026-11-10 21:16:53.970290 | other results 4 | 
finish_stale | 2026-11-10 21:18:13.068494 | finished 0 | 
football_live | 2026-11-10 21:18:27.285552 | live upserted 1 | 
live | 2026-11-10 21:19:04.402152 | live updated 4 | 
tg_poll | 2026-11-10 21:19:08.276237 | no token | 
football | 2026-11-10 21:19:15.164811 | football upserted 98 | 
basketball | 2026-11-10 21:19:17.167238 | basketball upserted 423 | 
basketball_week | 2026-11-10 21:19:18.151937 | nba week upserted 48 | 
other_sports | 2026-11-10 21:19:18.488687 | other sports new 0 | 
backfill | 2026-11-10 21:19:18.494067 | already | 
odds | 2026-11-10 21:19:24.641628 | odds matched 50 | 
settle | 2026-11-10 21:19:24.669317 | settled 0 | 
trends | 2026-11-10 21:19:24.957885 | trends 11 | 
analysis | 2026-11-10 21:19:24.964580 | analysis 0 | 
xfeed | 2026-11-10 21:19:38.899716 | xfeed games 156, linked 0, updated 3 | 
names | 2026-11-10 21:15:50.210122 | names 0 | 
tg_reminders | 2026-11-10 21:15:50.549128 | no token | 
--- worker log ---
Nov 11 00:19:15 impressed-jade.ptr.network python[1617884]: 2026-11-11 00:19:15,127 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261118 "HTTP/1.1 200 OK"
Nov 11 00:19:15 impressed-jade.ptr.network python[1617884]: 2026-11-11 00:19:15,258 INFO HTTP Request: GET https://api-live.euroleague.net/v2/competitions/E/seasons/E2026/games "HTTP/1.1 200 OK"
Nov 11 00:19:16 impressed-jade.ptr.network python[1617884]: 2026-11-11 00:19:16,289 INFO HTTP Request: GET https://api-live.euroleague.net/v2/competitions/U/seasons/U2026/games "HTTP/1.1 200 OK"
Nov 11 00:19:16 impressed-jade.ptr.network python[1617884]: 2026-11-11 00:19:16,941 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261110 "HTTP/1.1 200 OK"
Nov 11 00:19:16 impressed-jade.ptr.network python[1617884]: 2026-11-11 00:19:16,991 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261111 "HTTP/1.1 200 OK"
Nov 11 00:19:17 impressed-jade.ptr.network python[1617884]: 2026-11-11 00:19:17,148 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261112 "HTTP/1.1 200 OK"
Nov 11 00:19:17 impressed-jade.ptr.network python[1617884]: 2026-11-11 00:19:17,356 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261113 "HTTP/1.1 200 OK"
Nov 11 00:19:17 impressed-jade.ptr.network python[1617884]: 2026-11-11 00:19:17,510 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261114 "HTTP/1.1 200 OK"
Nov 11 00:19:17 impressed-jade.ptr.network python[1617884]: 2026-11-11 00:19:17,647 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261115 "HTTP/1.1 200 OK"
Nov 11 00:19:17 impressed-jade.ptr.network python[1617884]: 2026-11-11 00:19:17,787 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261116 "HTTP/1.1 200 OK"
Nov 11 00:19:17 impressed-jade.ptr.network python[1617884]: 2026-11-11 00:19:17,956 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261117 "HTTP/1.1 200 OK"
Nov 11 00:19:18 impressed-jade.ptr.network python[1617884]: 2026-11-11 00:19:18,114 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261118 "HTTP/1.1 200 OK"
Nov 11 00:19:18 impressed-jade.ptr.network python[1617884]: 2026-11-11 00:19:18,265 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/H/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 00:19:18 impressed-jade.ptr.network python[1617884]: 2026-11-11 00:19:18,349 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/T/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 00:19:18 impressed-jade.ptr.network python[1617884]: 2026-11-11 00:19:18,417 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/V/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 00:19:18 impressed-jade.ptr.network python[1617884]: 2026-11-11 00:19:18,480 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/W/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 00:19:23 impressed-jade.ptr.network python[1617884]: 2026-11-11 00:19:23,919 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 00:19:24 impressed-jade.ptr.network python[1617884]: 2026-11-11 00:19:24,240 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 00:19:24 impressed-jade.ptr.network python[1617884]: 2026-11-11 00:19:24,588 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 00:19:35 impressed-jade.ptr.network python[1617884]: 2026-11-11 00:19:35,077 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 00:19:35 impressed-jade.ptr.network python[1617884]: 2026-11-11 00:19:35,710 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 00:19:36 impressed-jade.ptr.network python[1617884]: 2026-11-11 00:19:36,330 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 00:19:36 impressed-jade.ptr.network python[1617884]: 2026-11-11 00:19:36,958 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 00:19:37 impressed-jade.ptr.network python[1617884]: 2026-11-11 00:19:37,582 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 00:19:38 impressed-jade.ptr.network python[1617884]: 2026-11-11 00:19:38,200 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
--- api log ---
Nov 11 00:19:12 impressed-jade.ptr.network uvicorn[1617886]: INFO:     Uvicorn running on http://127.0.0.1:8790 (Press CTRL+C to quit)
Nov 11 00:19:12 impressed-jade.ptr.network uvicorn[1617886]: INFO:     Started parent process [1617886]
Nov 11 00:19:14 impressed-jade.ptr.network uvicorn[1617890]: INFO:     Started server process [1617890]
Nov 11 00:19:14 impressed-jade.ptr.network uvicorn[1617890]: INFO:     Waiting for application startup.
Nov 11 00:19:14 impressed-jade.ptr.network uvicorn[1617890]: INFO:     Application startup complete.
Nov 11 00:19:14 impressed-jade.ptr.network uvicorn[1617889]: INFO:     Started server process [1617889]
Nov 11 00:19:14 impressed-jade.ptr.network uvicorn[1617889]: INFO:     Waiting for application startup.
Nov 11 00:19:14 impressed-jade.ptr.network uvicorn[1617889]: INFO:     Application startup complete.
Nov 11 00:19:20 impressed-jade.ptr.network uvicorn[1617889]: INFO:     87.116.135.226:0 - "GET /api/sports?tz=60 HTTP/1.0" 200 OK
Nov 11 00:19:20 impressed-jade.ptr.network uvicorn[1617889]: INFO:     87.116.135.226:0 - "GET /api/home?tz=60&sport=all HTTP/1.0" 200 OK
Nov 11 00:19:23 impressed-jade.ptr.network uvicorn[1617889]: INFO:     87.116.135.226:0 - "PATCH /api/me HTTP/1.0" 200 OK
Nov 11 00:19:45 impressed-jade.ptr.network uvicorn[1617889]: INFO:     127.0.0.1:44268 - "GET /api/health HTTP/1.1" 200 OK
Nov 11 00:19:45 impressed-jade.ptr.network uvicorn[1617889]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 00:19:45 impressed-jade.ptr.network uvicorn[1617889]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 00:19:45 impressed-jade.ptr.network uvicorn[1617889]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
