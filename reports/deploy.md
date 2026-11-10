# Zicer deploy 2026-11-10 23:09 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: 6472787 Теннис/волейбол: матч закрывается сразу, как только сеты решены (без ожидания фида), ставки рассчитываются только после официального результата; статистика на корте в смене сторон, перерывах и после матча

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
2026/11/11 02:08:36 [warn] 1765030#1765030: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/11 02:08:36 [warn] 1765030#1765030: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/11 02:08:36 [warn] 1765030#1765030: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/11 02:08:36 [warn] 1765030#1765030: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/11 02:08:36 [warn] 1765030#1765030: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/11 02:08:36 [warn] 1765030#1765030: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
maxbet_results | 2026-11-10 23:05:26.753398 | no pending | 
other_results | 2026-11-10 23:05:29.619319 | other results 3 | 
finish_stale | 2026-11-10 23:07:52.780812 | finished 0 | 
football_live | 2026-11-10 23:08:06.671508 | live upserted 1 | 
names | 2026-11-10 23:04:15.377516 | names 0 | 
tg_poll | 2026-11-10 23:08:24.549045 | no token | 
tg_reminders | 2026-11-10 23:04:15.710696 | no token | 
football | 2026-11-10 23:08:29.499735 | football upserted 97 | 
basketball | 2026-11-10 23:08:31.361702 | basketball upserted 420 | 
basketball_week | 2026-11-10 23:08:32.204849 | nba week upserted 48 | 
other_sports | 2026-11-10 23:08:32.493951 | other sports new 0 | 
backfill | 2026-11-10 23:08:32.498359 | already | 
odds | 2026-11-10 23:08:33.741642 | odds matched 50 | 
settle | 2026-11-10 23:08:33.762999 | settled 0 | 
trends | 2026-11-10 23:08:33.983006 | trends 11 | 
analysis | 2026-11-10 23:08:33.990877 | analysis 0 | 
xfeed | 2026-11-10 23:08:47.833290 | xfeed games 86, linked 0, updated 2 | 
live | 2026-11-10 23:08:58.035696 | live updated 2 | 
--- worker log ---
Nov 11 02:08:31 impressed-jade.ptr.network python[1764716]: 2026-11-11 02:08:31,600 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261114 "HTTP/1.1 200 OK"
Nov 11 02:08:31 impressed-jade.ptr.network python[1764716]: 2026-11-11 02:08:31,738 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261115 "HTTP/1.1 200 OK"
Nov 11 02:08:31 impressed-jade.ptr.network python[1764716]: 2026-11-11 02:08:31,878 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261116 "HTTP/1.1 200 OK"
Nov 11 02:08:32 impressed-jade.ptr.network python[1764716]: 2026-11-11 02:08:32,038 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261117 "HTTP/1.1 200 OK"
Nov 11 02:08:32 impressed-jade.ptr.network python[1764716]: 2026-11-11 02:08:32,171 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261118 "HTTP/1.1 200 OK"
Nov 11 02:08:32 impressed-jade.ptr.network python[1764716]: 2026-11-11 02:08:32,298 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/H/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 02:08:32 impressed-jade.ptr.network python[1764716]: 2026-11-11 02:08:32,398 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/T/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 02:08:32 impressed-jade.ptr.network python[1764716]: 2026-11-11 02:08:32,444 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/V/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 02:08:32 impressed-jade.ptr.network python[1764716]: 2026-11-11 02:08:32,487 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/W/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 02:08:32 impressed-jade.ptr.network python[1764716]: 2026-11-11 02:08:32,938 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 02:08:33 impressed-jade.ptr.network python[1764716]: 2026-11-11 02:08:33,303 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 02:08:33 impressed-jade.ptr.network python[1764716]: 2026-11-11 02:08:33,696 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 02:08:44 impressed-jade.ptr.network python[1764716]: 2026-11-11 02:08:44,090 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 02:08:44 impressed-jade.ptr.network python[1764716]: 2026-11-11 02:08:44,716 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 02:08:45 impressed-jade.ptr.network python[1764716]: 2026-11-11 02:08:45,339 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 02:08:45 impressed-jade.ptr.network python[1764716]: 2026-11-11 02:08:45,967 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 02:08:46 impressed-jade.ptr.network python[1764716]: 2026-11-11 02:08:46,591 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 02:08:47 impressed-jade.ptr.network python[1764716]: 2026-11-11 02:08:47,212 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 02:08:57 impressed-jade.ptr.network python[1764716]: 2026-11-11 02:08:57,952 INFO HTTP Request: GET https://www.maxbet.rs/live/init/sr "HTTP/1.1 200 OK"
Nov 11 02:08:58 impressed-jade.ptr.network python[1764716]: 2026-11-11 02:08:58,134 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 02:08:58 impressed-jade.ptr.network python[1764716]: 2026-11-11 02:08:58,753 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 02:08:59 impressed-jade.ptr.network python[1764716]: 2026-11-11 02:08:59,375 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 02:09:00 impressed-jade.ptr.network python[1764716]: 2026-11-11 02:09:00,000 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 02:09:00 impressed-jade.ptr.network python[1764716]: 2026-11-11 02:09:00,623 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 02:09:01 impressed-jade.ptr.network python[1764716]: 2026-11-11 02:09:01,240 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
--- api log ---
Nov 11 02:08:29 impressed-jade.ptr.network uvicorn[1764724]: INFO:     Waiting for application startup.
Nov 11 02:08:29 impressed-jade.ptr.network uvicorn[1764725]: INFO:     Started server process [1764725]
Nov 11 02:08:29 impressed-jade.ptr.network uvicorn[1764725]: INFO:     Waiting for application startup.
Nov 11 02:08:29 impressed-jade.ptr.network uvicorn[1764725]: INFO:     Application startup complete.
Nov 11 02:08:29 impressed-jade.ptr.network uvicorn[1764724]: INFO:     Application startup complete.
Nov 11 02:08:30 impressed-jade.ptr.network uvicorn[1764724]: INFO:     87.116.135.226:0 - "GET /api/matches/1804/center HTTP/1.0" 200 OK
Nov 11 02:08:43 impressed-jade.ptr.network uvicorn[1764724]: INFO:     87.116.135.226:0 - "GET /api/matches/1804/center HTTP/1.0" 200 OK
Nov 11 02:08:49 impressed-jade.ptr.network uvicorn[1764724]: INFO:     87.116.135.226:0 - "GET /api/matches/1804/center HTTP/1.0" 200 OK
Nov 11 02:08:54 impressed-jade.ptr.network uvicorn[1764724]: INFO:     87.116.135.226:0 - "GET /api/matches/1804 HTTP/1.0" 200 OK
Nov 11 02:08:55 impressed-jade.ptr.network uvicorn[1764724]: INFO:     87.116.135.226:0 - "GET /api/matches/1804/center HTTP/1.0" 200 OK
Nov 11 02:09:00 impressed-jade.ptr.network uvicorn[1764725]: INFO:     127.0.0.1:49436 - "GET /api/health HTTP/1.1" 200 OK
Nov 11 02:09:01 impressed-jade.ptr.network uvicorn[1764724]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 02:09:01 impressed-jade.ptr.network uvicorn[1764724]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 02:09:01 impressed-jade.ptr.network uvicorn[1764724]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
Nov 11 02:09:01 impressed-jade.ptr.network uvicorn[1764724]: INFO:     87.116.135.226:0 - "GET /api/matches/1804/center HTTP/1.0" 200 OK
```
