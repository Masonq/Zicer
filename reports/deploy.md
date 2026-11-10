# Zicer deploy 2026-11-10 21:32 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: ea84fef Матч-центр: непрерывная игра мяча/шайбы по траекториям до реального события, след движения, вспышка в точке события, зона владения с бегущими стрелками, объёмные площадки (виньетка, освещение, светлый лёд, живая вода)

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
2026/11/11 00:32:13 [warn] 1635792#1635792: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/11 00:32:13 [warn] 1635792#1635792: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/11 00:32:13 [warn] 1635792#1635792: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/11 00:32:13 [warn] 1635792#1635792: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/11 00:32:13 [warn] 1635792#1635792: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/11 00:32:13 [warn] 1635792#1635792: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
names | 2026-11-10 21:29:35.155650 | names 0 | 
tg_reminders | 2026-11-10 21:29:35.499077 | no token | 
maxbet_results | 2026-11-10 21:30:38.121685 | no pending | 
other_results | 2026-11-10 21:30:40.366868 | other results 3 | 
live | 2026-11-10 21:31:41.487008 | live updated 5 | 
football_live | 2026-11-10 21:31:50.488182 | live upserted 1 | 
finish_stale | 2026-11-10 21:31:54.466653 | finished 0 | 
football | 2026-11-10 21:32:07.103202 | football upserted 98 | 
basketball | 2026-11-10 21:32:10.202424 | basketball upserted 423 | 
basketball_week | 2026-11-10 21:32:11.529685 | nba week upserted 48 | 
other_sports | 2026-11-10 21:32:11.880966 | other sports new 0 | 
backfill | 2026-11-10 21:32:11.885238 | already | 
odds | 2026-11-10 21:32:13.034174 | odds matched 50 | 
settle | 2026-11-10 21:32:13.089921 | settled 0 | 
trends | 2026-11-10 21:32:14.450693 | trends 11 | 
analysis | 2026-11-10 21:32:14.484459 | analysis 0 | 
xfeed | 2026-11-10 21:32:54.315398 | xfeed games 139, linked 0, updated 3 | 
tg_poll | 2026-11-10 21:32:54.330873 | no token | 
--- worker log ---
Nov 11 00:32:07 impressed-jade.ptr.network python[1635458]: 2026-11-11 00:32:07,002 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261118 "HTTP/1.1 200 OK"
Nov 11 00:32:07 impressed-jade.ptr.network python[1635458]: 2026-11-11 00:32:07,304 INFO HTTP Request: GET https://api-live.euroleague.net/v2/competitions/E/seasons/E2026/games "HTTP/1.1 200 OK"
Nov 11 00:32:09 impressed-jade.ptr.network python[1635458]: 2026-11-11 00:32:09,183 INFO HTTP Request: GET https://api-live.euroleague.net/v2/competitions/U/seasons/U2026/games "HTTP/1.1 200 OK"
Nov 11 00:32:09 impressed-jade.ptr.network python[1635458]: 2026-11-11 00:32:09,863 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261110 "HTTP/1.1 200 OK"
Nov 11 00:32:10 impressed-jade.ptr.network python[1635458]: 2026-11-11 00:32:10,006 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261111 "HTTP/1.1 200 OK"
Nov 11 00:32:10 impressed-jade.ptr.network python[1635458]: 2026-11-11 00:32:10,184 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261112 "HTTP/1.1 200 OK"
Nov 11 00:32:10 impressed-jade.ptr.network python[1635458]: 2026-11-11 00:32:10,432 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261113 "HTTP/1.1 200 OK"
Nov 11 00:32:10 impressed-jade.ptr.network python[1635458]: 2026-11-11 00:32:10,598 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261114 "HTTP/1.1 200 OK"
Nov 11 00:32:10 impressed-jade.ptr.network python[1635458]: 2026-11-11 00:32:10,746 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261115 "HTTP/1.1 200 OK"
Nov 11 00:32:10 impressed-jade.ptr.network python[1635458]: 2026-11-11 00:32:10,899 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261116 "HTTP/1.1 200 OK"
Nov 11 00:32:11 impressed-jade.ptr.network python[1635458]: 2026-11-11 00:32:11,062 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261117 "HTTP/1.1 200 OK"
Nov 11 00:32:11 impressed-jade.ptr.network python[1635458]: 2026-11-11 00:32:11,455 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261118 "HTTP/1.1 200 OK"
Nov 11 00:32:11 impressed-jade.ptr.network python[1635458]: 2026-11-11 00:32:11,652 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/H/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 00:32:11 impressed-jade.ptr.network python[1635458]: 2026-11-11 00:32:11,759 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/T/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 00:32:11 impressed-jade.ptr.network python[1635458]: 2026-11-11 00:32:11,821 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/V/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 00:32:11 impressed-jade.ptr.network python[1635458]: 2026-11-11 00:32:11,871 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/W/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 00:32:12 impressed-jade.ptr.network python[1635458]: 2026-11-11 00:32:12,018 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 00:32:12 impressed-jade.ptr.network python[1635458]: 2026-11-11 00:32:12,208 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 00:32:12 impressed-jade.ptr.network python[1635458]: 2026-11-11 00:32:12,873 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 00:32:48 impressed-jade.ptr.network python[1635458]: 2026-11-11 00:32:48,720 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 00:32:49 impressed-jade.ptr.network python[1635458]: 2026-11-11 00:32:49,351 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 00:32:49 impressed-jade.ptr.network python[1635458]: 2026-11-11 00:32:49,978 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 00:32:50 impressed-jade.ptr.network python[1635458]: 2026-11-11 00:32:50,610 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 00:32:51 impressed-jade.ptr.network python[1635458]: 2026-11-11 00:32:51,253 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 00:32:51 impressed-jade.ptr.network python[1635458]: 2026-11-11 00:32:51,887 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
--- api log ---
Nov 11 00:32:50 impressed-jade.ptr.network uvicorn[1635545]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 00:32:50 impressed-jade.ptr.network uvicorn[1635545]: INFO:     109.245.39.147:0 - "GET /api/home?tz=60&sport=all HTTP/1.0" 200 OK
Nov 11 00:32:50 impressed-jade.ptr.network uvicorn[1635545]: INFO:     109.245.39.147:0 - "GET /api/home?tz=60&sport=all HTTP/1.0" 200 OK
Nov 11 00:32:51 impressed-jade.ptr.network uvicorn[1635545]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
Nov 11 00:32:51 impressed-jade.ptr.network uvicorn[1635545]: INFO:     109.245.39.147:0 - "GET /api/sports?tz=60 HTTP/1.0" 200 OK
Nov 11 00:32:51 impressed-jade.ptr.network uvicorn[1635545]: INFO:     109.245.39.147:0 - "GET /api/clubs/battle?sport=football HTTP/1.0" 200 OK
Nov 11 00:32:51 impressed-jade.ptr.network uvicorn[1635545]: INFO:     109.245.39.147:0 - "GET /api/me HTTP/1.0" 200 OK
Nov 11 00:32:51 impressed-jade.ptr.network uvicorn[1635545]: INFO:     109.245.39.147:0 - "GET /api/home?tz=60&sport=all HTTP/1.0" 200 OK
Nov 11 00:32:55 impressed-jade.ptr.network uvicorn[1635545]: INFO:     109.245.39.147:0 - "GET /api/me HTTP/1.0" 200 OK
Nov 11 00:32:55 impressed-jade.ptr.network uvicorn[1635545]: INFO:     109.245.39.147:0 - "GET /api/clubs/battle?sport=football HTTP/1.0" 200 OK
Nov 11 00:32:55 impressed-jade.ptr.network uvicorn[1635545]: INFO:     109.245.39.147:0 - "GET /api/sports?tz=60 HTTP/1.0" 200 OK
Nov 11 00:32:55 impressed-jade.ptr.network uvicorn[1635545]: INFO:     109.245.39.147:0 - "GET /api/home?tz=60&sport=all HTTP/1.0" 200 OK
Nov 11 00:32:55 impressed-jade.ptr.network uvicorn[1635545]: INFO:     109.245.39.147:0 - "GET /api/clubs/battle?sport=football HTTP/1.0" 200 OK
Nov 11 00:32:56 impressed-jade.ptr.network uvicorn[1635545]: INFO:     109.245.39.147:0 - "GET /api/sports?tz=60 HTTP/1.0" 200 OK
Nov 11 00:32:56 impressed-jade.ptr.network uvicorn[1635545]: INFO:     109.245.39.147:0 - "GET /api/me HTTP/1.0" 200 OK
```
