# Zicer deploy 2026-11-10 22:49 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: d5b5595 Матч-центр: полоса давления под площадкой вместо блока снизу, волна атаки по силе, читаемые имена в теннисе, подача волейбола из MaxBet, без пустоты во вкладке периодов, площадка не во весь десктоп; анализ с переведёнными названиями; кириллица только для сербских названий лиг

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
2026/11/11 01:48:40 [warn] 1737893#1737893: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/11 01:48:40 [warn] 1737893#1737893: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/11 01:48:40 [warn] 1737893#1737893: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/11 01:48:40 [warn] 1737893#1737893: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/11 01:48:40 [warn] 1737893#1737893: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/11 01:48:40 [warn] 1737893#1737893: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
names | 2026-11-10 22:45:23.837714 | names 0 | 
tg_reminders | 2026-11-10 22:45:24.188394 | no token | 
maxbet_results | 2026-11-10 22:46:34.725887 | no pending | 
other_results | 2026-11-10 22:46:36.696507 | other results 4 | 
football_live | 2026-11-10 22:47:46.654470 | live upserted 1 | 
finish_stale | 2026-11-10 22:48:04.490368 | finished 0 | 
tg_poll | 2026-11-10 22:48:18.323033 | no token | 
football | 2026-11-10 22:48:35.408469 | football upserted 97 | 
basketball | 2026-11-10 22:48:37.405030 | basketball upserted 420 | 
basketball_week | 2026-11-10 22:48:38.267562 | nba week upserted 48 | 
other_sports | 2026-11-10 22:48:38.657535 | other sports new 0 | 
backfill | 2026-11-10 22:48:38.663006 | already | 
odds | 2026-11-10 22:48:39.308829 | odds matched 50 | 
settle | 2026-11-10 22:48:39.335076 | settled 0 | 
trends | 2026-11-10 22:48:39.670710 | trends 11 | 
analysis | 2026-11-10 22:48:39.693931 | analysis 2 | 
xfeed | 2026-11-10 22:48:53.519501 | xfeed games 88, linked 0, updated 4 | 
live | 2026-11-10 22:49:03.720686 | live updated 4 | 
--- worker log ---
Nov 11 01:48:37 impressed-jade.ptr.network python[1737565]: 2026-11-11 01:48:37,391 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261112 "HTTP/1.1 200 OK"
Nov 11 01:48:37 impressed-jade.ptr.network python[1737565]: 2026-11-11 01:48:37,529 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261113 "HTTP/1.1 200 OK"
Nov 11 01:48:37 impressed-jade.ptr.network python[1737565]: 2026-11-11 01:48:37,587 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261114 "HTTP/1.1 200 OK"
Nov 11 01:48:37 impressed-jade.ptr.network python[1737565]: 2026-11-11 01:48:37,810 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261115 "HTTP/1.1 200 OK"
Nov 11 01:48:37 impressed-jade.ptr.network python[1737565]: 2026-11-11 01:48:37,955 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261116 "HTTP/1.1 200 OK"
Nov 11 01:48:38 impressed-jade.ptr.network python[1737565]: 2026-11-11 01:48:38,102 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261117 "HTTP/1.1 200 OK"
Nov 11 01:48:38 impressed-jade.ptr.network python[1737565]: 2026-11-11 01:48:38,229 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261118 "HTTP/1.1 200 OK"
Nov 11 01:48:38 impressed-jade.ptr.network python[1737565]: 2026-11-11 01:48:38,437 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/H/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 01:48:38 impressed-jade.ptr.network python[1737565]: 2026-11-11 01:48:38,522 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/T/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 01:48:38 impressed-jade.ptr.network python[1737565]: 2026-11-11 01:48:38,594 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/V/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 01:48:38 impressed-jade.ptr.network python[1737565]: 2026-11-11 01:48:38,648 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/W/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 01:48:38 impressed-jade.ptr.network python[1737565]: 2026-11-11 01:48:38,768 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 01:48:38 impressed-jade.ptr.network python[1737565]: 2026-11-11 01:48:38,941 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 01:48:39 impressed-jade.ptr.network python[1737565]: 2026-11-11 01:48:39,255 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 01:48:49 impressed-jade.ptr.network python[1737565]: 2026-11-11 01:48:49,790 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 01:48:50 impressed-jade.ptr.network python[1737565]: 2026-11-11 01:48:50,410 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 01:48:51 impressed-jade.ptr.network python[1737565]: 2026-11-11 01:48:51,032 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 01:48:51 impressed-jade.ptr.network python[1737565]: 2026-11-11 01:48:51,660 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 01:48:52 impressed-jade.ptr.network python[1737565]: 2026-11-11 01:48:52,282 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 01:48:52 impressed-jade.ptr.network python[1737565]: 2026-11-11 01:48:52,899 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 01:49:03 impressed-jade.ptr.network python[1737565]: 2026-11-11 01:49:03,633 INFO HTTP Request: GET https://www.maxbet.rs/live/init/sr "HTTP/1.1 200 OK"
Nov 11 01:49:03 impressed-jade.ptr.network python[1737565]: 2026-11-11 01:49:03,813 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 01:49:04 impressed-jade.ptr.network python[1737565]: 2026-11-11 01:49:04,432 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 01:49:05 impressed-jade.ptr.network python[1737565]: 2026-11-11 01:49:05,053 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 01:49:05 impressed-jade.ptr.network python[1737565]: 2026-11-11 01:49:05,681 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
--- api log ---
Nov 11 01:48:32 impressed-jade.ptr.network uvicorn[1737567]: INFO:     Started parent process [1737567]
Nov 11 01:48:33 impressed-jade.ptr.network uvicorn[1737605]: INFO:     Started server process [1737605]
Nov 11 01:48:33 impressed-jade.ptr.network uvicorn[1737605]: INFO:     Waiting for application startup.
Nov 11 01:48:33 impressed-jade.ptr.network uvicorn[1737605]: INFO:     Application startup complete.
Nov 11 01:48:33 impressed-jade.ptr.network uvicorn[1737606]: INFO:     Started server process [1737606]
Nov 11 01:48:33 impressed-jade.ptr.network uvicorn[1737606]: INFO:     Waiting for application startup.
Nov 11 01:48:33 impressed-jade.ptr.network uvicorn[1737606]: INFO:     Application startup complete.
Nov 11 01:48:34 impressed-jade.ptr.network uvicorn[1737606]: INFO:     35.184.244.203:0 - "GET /api/share/ticket/1.png HTTP/1.0" 200 OK
Nov 11 01:49:02 impressed-jade.ptr.network uvicorn[1737606]: INFO:     87.116.135.226:0 - "GET /api/matches/1800/center HTTP/1.0" 200 OK
Nov 11 01:49:02 impressed-jade.ptr.network uvicorn[1737606]: INFO:     87.116.135.226:0 - "GET /api/clubs/battle?sport=football HTTP/1.0" 200 OK
Nov 11 01:49:02 impressed-jade.ptr.network uvicorn[1737605]: INFO:     87.116.135.226:0 - "GET /api/matches/1800 HTTP/1.0" 200 OK
Nov 11 01:49:04 impressed-jade.ptr.network uvicorn[1737606]: INFO:     127.0.0.1:57568 - "GET /api/health HTTP/1.1" 200 OK
Nov 11 01:49:04 impressed-jade.ptr.network uvicorn[1737605]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 01:49:04 impressed-jade.ptr.network uvicorn[1737606]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 01:49:05 impressed-jade.ptr.network uvicorn[1737605]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
