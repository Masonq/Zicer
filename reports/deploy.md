# Zicer deploy 2026-11-10 21:49 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: b98b45f Теннис: розыгрыш без остановок — последний мяч уходит с корта, сразу новая подача, цикл до прихода очка

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
2026/11/11 00:49:10 [warn] 1658174#1658174: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/11 00:49:10 [warn] 1658174#1658174: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/11 00:49:10 [warn] 1658174#1658174: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/11 00:49:10 [warn] 1658174#1658174: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/11 00:49:10 [warn] 1658174#1658174: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/11 00:49:10 [warn] 1658174#1658174: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
odds | 2026-11-10 21:49:08.275635 | odds matched 50 | 
settle | 2026-11-10 21:49:08.333103 | settled 0 | 
trends | 2026-11-10 21:49:08.637404 | trends 11 | 
analysis | 2026-11-10 21:49:08.645038 | analysis 0 | 
xfeed | 2026-11-10 21:49:22.475548 | xfeed games 99, linked 0, updated 4 | 
live | 2026-11-10 21:49:32.745097 | live updated 3 | 
names | 2026-11-10 21:47:43.727209 | names 0 | 
tg_reminders | 2026-11-10 21:47:44.108869 | no token | 
finish_stale | 2026-11-10 21:48:11.245627 | finished 0 | 
football_live | 2026-11-10 21:48:39.273546 | live upserted 1 | 
tg_poll | 2026-11-10 21:48:39.276683 | no token | 
maxbet_results | 2026-11-10 21:48:50.111296 | no pending | 
other_results | 2026-11-10 21:48:52.349580 | other results 4 | 
football | 2026-11-10 21:49:04.001928 | football upserted 98 | 
basketball | 2026-11-10 21:49:05.824093 | basketball upserted 422 | 
basketball_week | 2026-11-10 21:49:06.738516 | nba week upserted 48 | 
other_sports | 2026-11-10 21:49:07.065036 | other sports new 0 | 
backfill | 2026-11-10 21:49:07.069794 | already | 
--- worker log ---
Nov 11 00:49:05 impressed-jade.ptr.network python[1657843]: 2026-11-11 00:49:05,931 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261113 "HTTP/1.1 200 OK"
Nov 11 00:49:06 impressed-jade.ptr.network python[1657843]: 2026-11-11 00:49:06,077 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261114 "HTTP/1.1 200 OK"
Nov 11 00:49:06 impressed-jade.ptr.network python[1657843]: 2026-11-11 00:49:06,126 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261115 "HTTP/1.1 200 OK"
Nov 11 00:49:06 impressed-jade.ptr.network python[1657843]: 2026-11-11 00:49:06,189 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261116 "HTTP/1.1 200 OK"
Nov 11 00:49:06 impressed-jade.ptr.network python[1657843]: 2026-11-11 00:49:06,572 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261117 "HTTP/1.1 200 OK"
Nov 11 00:49:06 impressed-jade.ptr.network python[1657843]: 2026-11-11 00:49:06,699 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261118 "HTTP/1.1 200 OK"
Nov 11 00:49:06 impressed-jade.ptr.network python[1657843]: 2026-11-11 00:49:06,860 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/H/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 00:49:06 impressed-jade.ptr.network python[1657843]: 2026-11-11 00:49:06,946 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/T/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 00:49:07 impressed-jade.ptr.network python[1657843]: 2026-11-11 00:49:07,014 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/V/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 00:49:07 impressed-jade.ptr.network python[1657843]: 2026-11-11 00:49:07,058 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/W/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 00:49:07 impressed-jade.ptr.network python[1657843]: 2026-11-11 00:49:07,422 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 00:49:07 impressed-jade.ptr.network python[1657843]: 2026-11-11 00:49:07,788 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 00:49:08 impressed-jade.ptr.network python[1657843]: 2026-11-11 00:49:08,180 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 00:49:18 impressed-jade.ptr.network python[1657843]: 2026-11-11 00:49:18,742 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 00:49:19 impressed-jade.ptr.network python[1657843]: 2026-11-11 00:49:19,363 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 00:49:19 impressed-jade.ptr.network python[1657843]: 2026-11-11 00:49:19,984 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 00:49:20 impressed-jade.ptr.network python[1657843]: 2026-11-11 00:49:20,614 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 00:49:21 impressed-jade.ptr.network python[1657843]: 2026-11-11 00:49:21,236 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 00:49:21 impressed-jade.ptr.network python[1657843]: 2026-11-11 00:49:21,854 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 00:49:32 impressed-jade.ptr.network python[1657843]: 2026-11-11 00:49:32,641 INFO HTTP Request: GET https://www.maxbet.rs/live/init/sr "HTTP/1.1 200 OK"
Nov 11 00:49:32 impressed-jade.ptr.network python[1657843]: 2026-11-11 00:49:32,846 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 00:49:33 impressed-jade.ptr.network python[1657843]: 2026-11-11 00:49:33,468 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 00:49:34 impressed-jade.ptr.network python[1657843]: 2026-11-11 00:49:34,090 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 00:49:34 impressed-jade.ptr.network python[1657843]: 2026-11-11 00:49:34,719 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 00:49:35 impressed-jade.ptr.network python[1657843]: 2026-11-11 00:49:35,346 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
--- api log ---
Nov 11 00:49:02 impressed-jade.ptr.network uvicorn[1657845]: INFO:     Started parent process [1657845]
Nov 11 00:49:03 impressed-jade.ptr.network uvicorn[1657867]: INFO:     Started server process [1657867]
Nov 11 00:49:03 impressed-jade.ptr.network uvicorn[1657867]: INFO:     Waiting for application startup.
Nov 11 00:49:03 impressed-jade.ptr.network uvicorn[1657867]: INFO:     Application startup complete.
Nov 11 00:49:04 impressed-jade.ptr.network uvicorn[1657868]: INFO:     Started server process [1657868]
Nov 11 00:49:04 impressed-jade.ptr.network uvicorn[1657868]: INFO:     Waiting for application startup.
Nov 11 00:49:04 impressed-jade.ptr.network uvicorn[1657868]: INFO:     Application startup complete.
Nov 11 00:49:07 impressed-jade.ptr.network uvicorn[1657868]: INFO:     87.116.135.226:0 - "GET /api/matches/1800/center HTTP/1.0" 200 OK
Nov 11 00:49:13 impressed-jade.ptr.network uvicorn[1657867]: INFO:     87.116.135.226:0 - "GET /api/matches/1800/center HTTP/1.0" 200 OK
Nov 11 00:49:17 impressed-jade.ptr.network uvicorn[1657868]: INFO:     87.116.135.226:0 - "GET /api/sports?tz=60 HTTP/1.0" 200 OK
Nov 11 00:49:18 impressed-jade.ptr.network uvicorn[1657868]: INFO:     87.116.135.226:0 - "GET /api/home?tz=60&sport=all HTTP/1.0" 200 OK
Nov 11 00:49:34 impressed-jade.ptr.network uvicorn[1657868]: INFO:     127.0.0.1:33572 - "GET /api/health HTTP/1.1" 200 OK
Nov 11 00:49:34 impressed-jade.ptr.network uvicorn[1657868]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 00:49:35 impressed-jade.ptr.network uvicorn[1657868]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 00:49:35 impressed-jade.ptr.network uvicorn[1657867]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
