# Zicer deploy 2026-11-11 00:23 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: 48fec93 Хоккей: шайба — плоский чёрный диск на льду (вид сверху), без подъёма и висящей тени, скользит с замедлением; след как от шайбы по льду

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
2026/11/11 03:22:41 [warn] 1866143#1866143: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/11 03:22:41 [warn] 1866143#1866143: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/11 03:22:41 [warn] 1866143#1866143: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/11 03:22:41 [warn] 1866143#1866143: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/11 03:22:41 [warn] 1866143#1866143: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/11 03:22:41 [warn] 1866143#1866143: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
matches: {'basketball': 688, 'football': 1100, 'hockey': 35, 'tennis': 12, 'volleyball': 5, 'waterpolo': 4}
names | 2026-11-11 00:21:22.987242 | names 0 | 
tg_reminders | 2026-11-11 00:21:23.347285 | no token | 
finish_stale | 2026-11-11 00:21:46.344526 | finished 0 | 
football_live | 2026-11-11 00:22:19.319356 | live upserted 1 | 
football | 2026-11-11 00:22:34.522697 | football upserted 97 |  "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
basketball | 2026-11-11 00:22:36.196134 | basketball upserted 420 | 
basketball_week | 2026-11-11 00:22:37.232207 | nba week upserted 48 | 
other_sports | 2026-11-11 00:22:37.510238 | other sports new 0 | 
backfill | 2026-11-11 00:22:37.517004 | already | 
odds | 2026-11-11 00:22:38.628009 | odds matched 50 | 
settle | 2026-11-11 00:22:38.654731 | settled 0 | 
live | 2026-11-11 00:23:02.742656 | live updated 4 | 
xfeed | 2026-11-11 00:23:06.598286 | xfeed games 124, linked 0, updated 5 | 
maxbet_results | 2026-11-11 00:19:30.649782 | no pending | 
other_results | 2026-11-11 00:19:31.779699 | other results 4 | 
tg_poll | 2026-11-11 00:23:06.602443 | no token | 
trends | 2026-11-10 23:36:09.974574 | trends 11 | 
analysis | 2026-11-10 23:36:10.199323 | analysis 27 | 
--- worker log ---
Nov 11 03:22:36 impressed-jade.ptr.network python[1865823]: 2026-11-11 03:22:36,351 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261114 "HTTP/1.1 200 OK"
Nov 11 03:22:36 impressed-jade.ptr.network python[1865823]: 2026-11-11 03:22:36,476 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261115 "HTTP/1.1 200 OK"
Nov 11 03:22:36 impressed-jade.ptr.network python[1865823]: 2026-11-11 03:22:36,615 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261116 "HTTP/1.1 200 OK"
Nov 11 03:22:36 impressed-jade.ptr.network python[1865823]: 2026-11-11 03:22:36,772 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261117 "HTTP/1.1 200 OK"
Nov 11 03:22:37 impressed-jade.ptr.network python[1865823]: 2026-11-11 03:22:37,193 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261118 "HTTP/1.1 200 OK"
Nov 11 03:22:37 impressed-jade.ptr.network python[1865823]: 2026-11-11 03:22:37,320 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/H/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 03:22:37 impressed-jade.ptr.network python[1865823]: 2026-11-11 03:22:37,397 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/T/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 03:22:37 impressed-jade.ptr.network python[1865823]: 2026-11-11 03:22:37,459 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/V/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 03:22:37 impressed-jade.ptr.network python[1865823]: 2026-11-11 03:22:37,503 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/W/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 03:22:37 impressed-jade.ptr.network python[1865823]: 2026-11-11 03:22:37,901 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 03:22:38 impressed-jade.ptr.network python[1865823]: 2026-11-11 03:22:38,242 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 03:22:38 impressed-jade.ptr.network python[1865823]: 2026-11-11 03:22:38,585 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 03:22:48 impressed-jade.ptr.network python[1865823]: 2026-11-11 03:22:48,752 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 03:22:49 impressed-jade.ptr.network python[1865823]: 2026-11-11 03:22:49,381 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 03:22:50 impressed-jade.ptr.network python[1865823]: 2026-11-11 03:22:50,013 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 03:22:50 impressed-jade.ptr.network python[1865823]: 2026-11-11 03:22:50,644 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 03:22:51 impressed-jade.ptr.network python[1865823]: 2026-11-11 03:22:51,269 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 03:22:51 impressed-jade.ptr.network python[1865823]: 2026-11-11 03:22:51,889 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 03:23:02 impressed-jade.ptr.network python[1865823]: 2026-11-11 03:23:02,638 INFO HTTP Request: GET https://www.maxbet.rs/live/init/sr "HTTP/1.1 200 OK"
Nov 11 03:23:02 impressed-jade.ptr.network python[1865823]: 2026-11-11 03:23:02,842 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 03:23:03 impressed-jade.ptr.network python[1865823]: 2026-11-11 03:23:03,465 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 03:23:04 impressed-jade.ptr.network python[1865823]: 2026-11-11 03:23:04,096 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 03:23:04 impressed-jade.ptr.network python[1865823]: 2026-11-11 03:23:04,727 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 03:23:05 impressed-jade.ptr.network python[1865823]: 2026-11-11 03:23:05,354 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 03:23:05 impressed-jade.ptr.network python[1865823]: 2026-11-11 03:23:05,972 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
--- api log ---
Nov 11 03:22:33 impressed-jade.ptr.network uvicorn[1865870]: INFO:     Application startup complete.
Nov 11 03:22:35 impressed-jade.ptr.network uvicorn[1865870]: INFO:     87.116.135.226:0 - "GET /api/matches/1766/center HTTP/1.0" 200 OK
Nov 11 03:22:35 impressed-jade.ptr.network uvicorn[1865870]: INFO:     87.116.135.226:0 - "GET /api/matches/1766 HTTP/1.0" 200 OK
Nov 11 03:22:35 impressed-jade.ptr.network uvicorn[1865871]: INFO:     87.116.135.226:0 - "GET /api/clubs/battle?sport=football HTTP/1.0" 200 OK
Nov 11 03:22:35 impressed-jade.ptr.network uvicorn[1865871]: INFO:     87.116.135.226:0 - "GET /api/me HTTP/1.0" 200 OK
Nov 11 03:22:36 impressed-jade.ptr.network uvicorn[1865870]: INFO:     87.116.135.226:0 - "GET /api/sports?tz=60 HTTP/1.0" 200 OK
Nov 11 03:22:36 impressed-jade.ptr.network uvicorn[1865871]: INFO:     87.116.135.226:0 - "GET /api/matches?day=live&sport=all&serbian=false&tz=60 HTTP/1.0" 200 OK
Nov 11 03:22:36 impressed-jade.ptr.network uvicorn[1865871]: INFO:     87.116.135.226:0 - "GET /api/matches?day=today&sport=all&serbian=false&tz=60 HTTP/1.0" 200 OK
Nov 11 03:22:36 impressed-jade.ptr.network uvicorn[1865871]: INFO:     87.116.135.226:0 - "GET /api/ranking?period=month HTTP/1.0" 200 OK
Nov 11 03:22:36 impressed-jade.ptr.network uvicorn[1865871]: INFO:     87.116.135.226:0 - "GET /api/home?tz=60&sport=all HTTP/1.0" 200 OK
Nov 11 03:22:45 impressed-jade.ptr.network uvicorn[1865870]: INFO:     87.116.135.226:0 - "GET /api/matches/1766/center HTTP/1.0" 200 OK
Nov 11 03:23:05 impressed-jade.ptr.network uvicorn[1865870]: INFO:     127.0.0.1:42872 - "GET /api/health HTTP/1.1" 200 OK
Nov 11 03:23:05 impressed-jade.ptr.network uvicorn[1865870]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 03:23:05 impressed-jade.ptr.network uvicorn[1865870]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 03:23:06 impressed-jade.ptr.network uvicorn[1865871]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
