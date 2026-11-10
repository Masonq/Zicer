# Zicer deploy 2026-11-10 23:42 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: 1b1bf5a Убраны разбор матча и тренды: со страницы матча, главной, из меню; /trendovi ведёт на главную; фоновые задачи разбора и трендов отключены

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
2026/11/11 02:42:30 [warn] 1811217#1811217: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/11 02:42:30 [warn] 1811217#1811217: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/11 02:42:30 [warn] 1811217#1811217: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/11 02:42:30 [warn] 1811217#1811217: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/11 02:42:30 [warn] 1811217#1811217: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/11 02:42:30 [warn] 1811217#1811217: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
names | 2026-11-10 23:41:18.486173 | names 0 | 
tg_reminders | 2026-11-10 23:41:18.788870 | no token | 
finish_stale | 2026-11-10 23:41:32.604820 | finished 0 | 
football_live | 2026-11-10 23:42:00.588790 | live upserted 1 | 
tg_poll | 2026-11-10 23:42:04.585980 | no token | 
maxbet_results | 2026-11-10 23:42:20.287864 | no pending | 
other_results | 2026-11-10 23:42:21.296640 | other results 1 | 
football | 2026-11-10 23:42:24.352263 | football upserted 97 |  "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
basketball | 2026-11-10 23:42:26.319495 | basketball upserted 420 | 
basketball_week | 2026-11-10 23:42:27.455042 | nba week upserted 48 | 
other_sports | 2026-11-10 23:42:27.741073 | other sports new 0 | 
backfill | 2026-11-10 23:42:27.745513 | already | 
odds | 2026-11-10 23:42:28.383785 | odds matched 50 | 
settle | 2026-11-10 23:42:28.440461 | settled 0 | 
xfeed | 2026-11-10 23:42:42.266381 | xfeed games 78, linked 0, updated 0 | 
live | 2026-11-10 23:42:52.482570 | live updated 0 | 
trends | 2026-11-10 23:36:09.974574 | trends 11 | 
analysis | 2026-11-10 23:36:10.199323 | analysis 27 | 
--- worker log ---
Nov 11 02:42:26 impressed-jade.ptr.network python[1810916]: 2026-11-11 02:42:26,419 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261113 "HTTP/1.1 200 OK"
Nov 11 02:42:26 impressed-jade.ptr.network python[1810916]: 2026-11-11 02:42:26,572 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261114 "HTTP/1.1 200 OK"
Nov 11 02:42:26 impressed-jade.ptr.network python[1810916]: 2026-11-11 02:42:26,712 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261115 "HTTP/1.1 200 OK"
Nov 11 02:42:26 impressed-jade.ptr.network python[1810916]: 2026-11-11 02:42:26,861 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261116 "HTTP/1.1 200 OK"
Nov 11 02:42:27 impressed-jade.ptr.network python[1810916]: 2026-11-11 02:42:27,287 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261117 "HTTP/1.1 200 OK"
Nov 11 02:42:27 impressed-jade.ptr.network python[1810916]: 2026-11-11 02:42:27,420 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261118 "HTTP/1.1 200 OK"
Nov 11 02:42:27 impressed-jade.ptr.network python[1810916]: 2026-11-11 02:42:27,536 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/H/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 02:42:27 impressed-jade.ptr.network python[1810916]: 2026-11-11 02:42:27,622 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/T/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 02:42:27 impressed-jade.ptr.network python[1810916]: 2026-11-11 02:42:27,673 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/V/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 02:42:27 impressed-jade.ptr.network python[1810916]: 2026-11-11 02:42:27,734 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/W/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 02:42:27 impressed-jade.ptr.network python[1810916]: 2026-11-11 02:42:27,857 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 02:42:28 impressed-jade.ptr.network python[1810916]: 2026-11-11 02:42:28,018 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 02:42:28 impressed-jade.ptr.network python[1810916]: 2026-11-11 02:42:28,336 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 02:42:38 impressed-jade.ptr.network python[1810916]: 2026-11-11 02:42:38,539 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 02:42:39 impressed-jade.ptr.network python[1810916]: 2026-11-11 02:42:39,163 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 02:42:39 impressed-jade.ptr.network python[1810916]: 2026-11-11 02:42:39,787 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 02:42:40 impressed-jade.ptr.network python[1810916]: 2026-11-11 02:42:40,411 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 02:42:41 impressed-jade.ptr.network python[1810916]: 2026-11-11 02:42:41,033 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 02:42:41 impressed-jade.ptr.network python[1810916]: 2026-11-11 02:42:41,651 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 02:42:52 impressed-jade.ptr.network python[1810916]: 2026-11-11 02:42:52,387 INFO HTTP Request: GET https://www.maxbet.rs/live/init/sr "HTTP/1.1 200 OK"
Nov 11 02:42:52 impressed-jade.ptr.network python[1810916]: 2026-11-11 02:42:52,578 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 02:42:53 impressed-jade.ptr.network python[1810916]: 2026-11-11 02:42:53,198 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 02:42:53 impressed-jade.ptr.network python[1810916]: 2026-11-11 02:42:53,823 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 02:42:54 impressed-jade.ptr.network python[1810916]: 2026-11-11 02:42:54,447 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 02:42:55 impressed-jade.ptr.network python[1810916]: 2026-11-11 02:42:55,068 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
--- api log ---
Nov 11 02:42:40 impressed-jade.ptr.network uvicorn[1810925]: INFO:     87.116.135.226:0 - "GET /api/me/telegram HTTP/1.0" 200 OK
Nov 11 02:42:40 impressed-jade.ptr.network uvicorn[1810925]: INFO:     87.116.135.226:0 - "GET /api/users/Anonymous HTTP/1.0" 200 OK
Nov 11 02:42:41 impressed-jade.ptr.network uvicorn[1810924]: INFO:     87.116.135.226:0 - "GET /api/matches?day=live&sport=all&serbian=false&tz=60 HTTP/1.0" 200 OK
Nov 11 02:42:41 impressed-jade.ptr.network uvicorn[1810924]: INFO:     87.116.135.226:0 - "GET /api/ranking?period=month HTTP/1.0" 200 OK
Nov 11 02:42:41 impressed-jade.ptr.network uvicorn[1810924]: INFO:     87.116.135.226:0 - "GET /api/matches?day=today&sport=all&serbian=false&tz=60 HTTP/1.0" 200 OK
Nov 11 02:42:41 impressed-jade.ptr.network uvicorn[1810924]: INFO:     87.116.135.226:0 - "GET /api/sports?tz=60 HTTP/1.0" 200 OK
Nov 11 02:42:41 impressed-jade.ptr.network uvicorn[1810924]: INFO:     87.116.135.226:0 - "GET /api/home?tz=60&sport=all HTTP/1.0" 200 OK
Nov 11 02:42:44 impressed-jade.ptr.network uvicorn[1810924]: INFO:     87.116.135.226:0 - "GET /api/teams/serbian?sport=basketball HTTP/1.0" 200 OK
Nov 11 02:42:44 impressed-jade.ptr.network uvicorn[1810925]: INFO:     87.116.135.226:0 - "GET /api/teams/serbian?sport=football HTTP/1.0" 200 OK
Nov 11 02:42:47 impressed-jade.ptr.network uvicorn[1810925]: INFO:     87.116.135.226:0 - "GET /api/sports?tz=60 HTTP/1.0" 200 OK
Nov 11 02:42:47 impressed-jade.ptr.network uvicorn[1810924]: INFO:     87.116.135.226:0 - "GET /api/home?tz=60&sport=all HTTP/1.0" 200 OK
Nov 11 02:42:54 impressed-jade.ptr.network uvicorn[1810924]: INFO:     127.0.0.1:55164 - "GET /api/health HTTP/1.1" 200 OK
Nov 11 02:42:54 impressed-jade.ptr.network uvicorn[1810925]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 02:42:54 impressed-jade.ptr.network uvicorn[1810924]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 02:42:54 impressed-jade.ptr.network uvicorn[1810925]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
