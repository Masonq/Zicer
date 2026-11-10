# Zicer deploy 2026-11-10 22:06 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: 2f2a74b Волейбол: плашка «Очко» с командой и счётом партии, мяч в площадку соперника, подача у выигравшей розыгрыш команды, обновление каждые 6 с; давление скрыто без данных; часы баскетбола без мусора

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
2026/11/11 01:06:11 [warn] 1681209#1681209: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/11 01:06:11 [warn] 1681209#1681209: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/11 01:06:11 [warn] 1681209#1681209: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/11 01:06:11 [warn] 1681209#1681209: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/11 01:06:11 [warn] 1681209#1681209: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/11 01:06:11 [warn] 1681209#1681209: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
finish_stale | 2026-11-10 22:05:23.824722 | finished 0 | 
football_live | 2026-11-10 22:05:28.896351 | live upserted 1 | 
tg_poll | 2026-11-10 22:06:00.604605 | no token | 
football | 2026-11-10 22:06:04.127304 | football upserted 97 | 
basketball | 2026-11-10 22:06:05.929193 | basketball upserted 421 | 
basketball_week | 2026-11-10 22:06:07.275449 | nba week upserted 48 | 
other_sports | 2026-11-10 22:06:07.552958 | other sports new 0 | 
backfill | 2026-11-10 22:06:07.557111 | already | 
odds | 2026-11-10 22:06:08.207506 | odds matched 50 | 
settle | 2026-11-10 22:06:08.231271 | settled 0 | 
trends | 2026-11-10 22:06:08.550201 | trends 11 | 
analysis | 2026-11-10 22:06:08.562021 | analysis 0 | 
xfeed | 2026-11-10 22:06:22.391009 | xfeed games 94, linked 0, updated 3 | 
live | 2026-11-10 22:06:32.599076 | live updated 4 | 
names | 2026-11-10 22:03:51.767024 | names 0 | 
tg_reminders | 2026-11-10 22:03:52.093567 | no token | 
maxbet_results | 2026-11-10 22:05:03.035016 | no pending | 
other_results | 2026-11-10 22:05:05.421664 | other results 3 | 
--- worker log ---
Nov 11 01:06:06 impressed-jade.ptr.network python[1680875]: 2026-11-11 01:06:06,546 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261114 "HTTP/1.1 200 OK"
Nov 11 01:06:06 impressed-jade.ptr.network python[1680875]: 2026-11-11 01:06:06,592 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261115 "HTTP/1.1 200 OK"
Nov 11 01:06:06 impressed-jade.ptr.network python[1680875]: 2026-11-11 01:06:06,731 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261116 "HTTP/1.1 200 OK"
Nov 11 01:06:07 impressed-jade.ptr.network python[1680875]: 2026-11-11 01:06:07,114 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261117 "HTTP/1.1 200 OK"
Nov 11 01:06:07 impressed-jade.ptr.network python[1680875]: 2026-11-11 01:06:07,241 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261118 "HTTP/1.1 200 OK"
Nov 11 01:06:07 impressed-jade.ptr.network python[1680875]: 2026-11-11 01:06:07,364 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/H/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 01:06:07 impressed-jade.ptr.network python[1680875]: 2026-11-11 01:06:07,448 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/T/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 01:06:07 impressed-jade.ptr.network python[1680875]: 2026-11-11 01:06:07,499 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/V/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 01:06:07 impressed-jade.ptr.network python[1680875]: 2026-11-11 01:06:07,545 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/W/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 01:06:07 impressed-jade.ptr.network python[1680875]: 2026-11-11 01:06:07,649 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 01:06:07 impressed-jade.ptr.network python[1680875]: 2026-11-11 01:06:07,816 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 01:06:08 impressed-jade.ptr.network python[1680875]: 2026-11-11 01:06:08,162 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 01:06:18 impressed-jade.ptr.network python[1680875]: 2026-11-11 01:06:18,657 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 01:06:19 impressed-jade.ptr.network python[1680875]: 2026-11-11 01:06:19,277 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 01:06:19 impressed-jade.ptr.network python[1680875]: 2026-11-11 01:06:19,898 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 01:06:20 impressed-jade.ptr.network python[1680875]: 2026-11-11 01:06:20,526 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 01:06:21 impressed-jade.ptr.network python[1680875]: 2026-11-11 01:06:21,151 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 01:06:21 impressed-jade.ptr.network python[1680875]: 2026-11-11 01:06:21,768 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 01:06:32 impressed-jade.ptr.network python[1680875]: 2026-11-11 01:06:32,492 INFO HTTP Request: GET https://www.maxbet.rs/live/init/sr "HTTP/1.1 200 OK"
Nov 11 01:06:32 impressed-jade.ptr.network python[1680875]: 2026-11-11 01:06:32,692 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 01:06:33 impressed-jade.ptr.network python[1680875]: 2026-11-11 01:06:33,311 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 01:06:33 impressed-jade.ptr.network python[1680875]: 2026-11-11 01:06:33,932 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 01:06:34 impressed-jade.ptr.network python[1680875]: 2026-11-11 01:06:34,559 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 01:06:35 impressed-jade.ptr.network python[1680875]: 2026-11-11 01:06:35,182 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 01:06:35 impressed-jade.ptr.network python[1680875]: 2026-11-11 01:06:35,807 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
--- api log ---
Nov 11 01:06:35 impressed-jade.ptr.network uvicorn[1680882]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
Nov 11 01:06:35 impressed-jade.ptr.network uvicorn[1680883]: INFO:     87.116.135.226:0 - "GET /api/clubs/battle?sport=football HTTP/1.0" 200 OK
Nov 11 01:06:35 impressed-jade.ptr.network uvicorn[1680883]: INFO:     87.116.135.226:0 - "GET /api/me HTTP/1.0" 200 OK
Nov 11 01:06:35 impressed-jade.ptr.network uvicorn[1680883]: INFO:     87.116.135.226:0 - "GET /api/home?tz=60&sport=all HTTP/1.0" 200 OK
Nov 11 01:06:35 impressed-jade.ptr.network uvicorn[1680882]: INFO:     87.116.135.226:0 - "GET /api/me HTTP/1.0" 200 OK
Nov 11 01:06:35 impressed-jade.ptr.network uvicorn[1680882]: INFO:     87.116.135.226:0 - "GET /api/sports?tz=60 HTTP/1.0" 200 OK
Nov 11 01:06:35 impressed-jade.ptr.network uvicorn[1680882]: INFO:     87.116.135.226:0 - "GET /api/clubs/battle?sport=football HTTP/1.0" 200 OK
Nov 11 01:06:35 impressed-jade.ptr.network uvicorn[1680882]: INFO:     87.116.135.226:0 - "GET /api/home?tz=60&sport=all HTTP/1.0" 200 OK
Nov 11 01:06:35 impressed-jade.ptr.network uvicorn[1680882]: INFO:     87.116.135.226:0 - "GET /api/me HTTP/1.0" 200 OK
Nov 11 01:06:35 impressed-jade.ptr.network uvicorn[1680882]: INFO:     87.116.135.226:0 - "GET /api/sports?tz=60 HTTP/1.0" 200 OK
Nov 11 01:06:35 impressed-jade.ptr.network uvicorn[1680882]: INFO:     87.116.135.226:0 - "GET /api/clubs/battle?sport=football HTTP/1.0" 200 OK
Nov 11 01:06:35 impressed-jade.ptr.network uvicorn[1680882]: INFO:     87.116.135.226:0 - "GET /api/home?tz=60&sport=all HTTP/1.0" 200 OK
Nov 11 01:06:36 impressed-jade.ptr.network uvicorn[1680882]: INFO:     87.116.135.226:0 - "GET /api/me HTTP/1.0" 200 OK
Nov 11 01:06:36 impressed-jade.ptr.network uvicorn[1680882]: INFO:     87.116.135.226:0 - "GET /api/clubs/battle?sport=football HTTP/1.0" 200 OK
Nov 11 01:06:36 impressed-jade.ptr.network uvicorn[1680882]: INFO:     87.116.135.226:0 - "GET /api/sports?tz=60 HTTP/1.0" 200 OK
```
