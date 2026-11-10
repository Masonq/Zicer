# Zicer deploy 2026-11-10 19:47 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: a48f39f Смена спорта без перезагрузки и прыжков; пользователь и язык кэшируются — нет вспышки старого вида; скелетон вместо старой карточки в матч-центре; отступы категорий

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
2026/11/10 22:47:31 [warn] 1497726#1497726: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/10 22:47:31 [warn] 1497726#1497726: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/10 22:47:31 [warn] 1497726#1497726: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/10 22:47:31 [warn] 1497726#1497726: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/10 22:47:31 [warn] 1497726#1497726: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/10 22:47:31 [warn] 1497726#1497726: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
other_sports | 2026-11-10 19:47:32.988185 | other sports new 0 | 
backfill | 2026-11-10 19:47:32.993493 | already | 
odds | 2026-11-10 19:47:33.935041 | odds matched 50 | 
settle | 2026-11-10 19:47:33.961172 | settled 0 | 
trends | 2026-11-10 19:47:34.210740 | trends 10 | 
analysis | 2026-11-10 19:47:34.242670 | analysis 4 | 
xfeed | 2026-11-10 19:47:53.204394 | xfeed games 240, linked 0, updated 14 | 
names | 2026-11-10 19:44:02.617182 | names 0 | 
tg_reminders | 2026-11-10 19:44:02.979832 | no token | 
maxbet_results | 2026-11-10 19:46:42.881450 | maxbet results 3 | 
other_results | 2026-11-10 19:46:47.517885 | other results 5 | 
football_live | 2026-11-10 19:46:53.408325 | live upserted 6 | 
tg_poll | 2026-11-10 19:47:11.613899 | no token | 
live | 2026-11-10 19:47:17.036501 | live updated 15 | 
football | 2026-11-10 19:47:24.835974 | football upserted 93 | 
basketball | 2026-11-10 19:47:26.683431 | basketball upserted 421 | 
basketball_week | 2026-11-10 19:47:27.495398 | nba week upserted 40 | 
--- worker log ---
Nov 10 22:47:24 impressed-jade.ptr.network python[1497391]: 2026-11-10 22:47:24,756 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261117 "HTTP/1.1 200 OK"
Nov 10 22:47:24 impressed-jade.ptr.network python[1497391]: 2026-11-10 22:47:24,959 INFO HTTP Request: GET https://api-live.euroleague.net/v2/competitions/E/seasons/E2026/games "HTTP/1.1 200 OK"
Nov 10 22:47:25 impressed-jade.ptr.network python[1497391]: 2026-11-10 22:47:25,878 INFO HTTP Request: GET https://api-live.euroleague.net/v2/competitions/U/seasons/U2026/games "HTTP/1.1 200 OK"
Nov 10 22:47:26 impressed-jade.ptr.network python[1497391]: 2026-11-10 22:47:26,523 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261109 "HTTP/1.1 200 OK"
Nov 10 22:47:26 impressed-jade.ptr.network python[1497391]: 2026-11-10 22:47:26,587 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261110 "HTTP/1.1 200 OK"
Nov 10 22:47:26 impressed-jade.ptr.network python[1497391]: 2026-11-10 22:47:26,640 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261111 "HTTP/1.1 200 OK"
Nov 10 22:47:26 impressed-jade.ptr.network python[1497391]: 2026-11-10 22:47:26,829 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261112 "HTTP/1.1 200 OK"
Nov 10 22:47:26 impressed-jade.ptr.network python[1497391]: 2026-11-10 22:47:26,967 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261113 "HTTP/1.1 200 OK"
Nov 10 22:47:27 impressed-jade.ptr.network python[1497391]: 2026-11-10 22:47:27,113 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261114 "HTTP/1.1 200 OK"
Nov 10 22:47:27 impressed-jade.ptr.network python[1497391]: 2026-11-10 22:47:27,249 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261115 "HTTP/1.1 200 OK"
Nov 10 22:47:27 impressed-jade.ptr.network python[1497391]: 2026-11-10 22:47:27,403 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261116 "HTTP/1.1 200 OK"
Nov 10 22:47:27 impressed-jade.ptr.network python[1497391]: 2026-11-10 22:47:27,479 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261117 "HTTP/1.1 200 OK"
Nov 10 22:47:32 impressed-jade.ptr.network python[1497391]: 2026-11-10 22:47:32,645 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/H/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 22:47:32 impressed-jade.ptr.network python[1497391]: 2026-11-10 22:47:32,796 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/T/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 22:47:32 impressed-jade.ptr.network python[1497391]: 2026-11-10 22:47:32,897 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/V/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 22:47:32 impressed-jade.ptr.network python[1497391]: 2026-11-10 22:47:32,979 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/W/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 22:47:33 impressed-jade.ptr.network python[1497391]: 2026-11-10 22:47:33,146 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 22:47:33 impressed-jade.ptr.network python[1497391]: 2026-11-10 22:47:33,485 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 22:47:33 impressed-jade.ptr.network python[1497391]: 2026-11-10 22:47:33,887 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 22:47:49 impressed-jade.ptr.network python[1497391]: 2026-11-10 22:47:49,389 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 10 22:47:50 impressed-jade.ptr.network python[1497391]: 2026-11-10 22:47:50,043 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 10 22:47:50 impressed-jade.ptr.network python[1497391]: 2026-11-10 22:47:50,671 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 10 22:47:51 impressed-jade.ptr.network python[1497391]: 2026-11-10 22:47:51,303 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 10 22:47:51 impressed-jade.ptr.network python[1497391]: 2026-11-10 22:47:51,929 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 10 22:47:52 impressed-jade.ptr.network python[1497391]: 2026-11-10 22:47:52,551 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
--- api log ---
Nov 10 22:47:50 impressed-jade.ptr.network uvicorn[1497418]: INFO:     87.116.135.226:0 - "GET /api/clubs/battle?sport=football HTTP/1.0" 200 OK
Nov 10 22:47:50 impressed-jade.ptr.network uvicorn[1497417]: INFO:     87.116.135.226:0 - "GET /api/sports?tz=60 HTTP/1.0" 200 OK
Nov 10 22:47:51 impressed-jade.ptr.network uvicorn[1497418]: INFO:     87.116.135.226:0 - "GET /api/home?tz=60&sport=all HTTP/1.0" 200 OK
Nov 10 22:47:51 impressed-jade.ptr.network uvicorn[1497417]: INFO:     87.116.135.226:0 - "GET /api/sports?tz=60 HTTP/1.0" 200 OK
Nov 10 22:47:51 impressed-jade.ptr.network uvicorn[1497418]: INFO:     87.116.135.226:0 - "GET /api/me HTTP/1.0" 200 OK
Nov 10 22:47:51 impressed-jade.ptr.network uvicorn[1497417]: INFO:     87.116.135.226:0 - "GET /api/sports?tz=60 HTTP/1.0" 200 OK
Nov 10 22:47:51 impressed-jade.ptr.network uvicorn[1497418]: INFO:     87.116.135.226:0 - "GET /api/clubs/battle?sport=football HTTP/1.0" 200 OK
Nov 10 22:47:51 impressed-jade.ptr.network uvicorn[1497418]: INFO:     87.116.135.226:0 - "GET /api/home?tz=60&sport=all HTTP/1.0" 200 OK
Nov 10 22:47:51 impressed-jade.ptr.network uvicorn[1497417]: INFO:     87.116.135.226:0 - "GET /api/sports?tz=60 HTTP/1.0" 200 OK
Nov 10 22:47:53 impressed-jade.ptr.network uvicorn[1497417]: INFO:     87.116.135.226:0 - "GET /api/me/telegram HTTP/1.0" 200 OK
Nov 10 22:47:53 impressed-jade.ptr.network uvicorn[1497417]: INFO:     87.116.135.226:0 - "GET /api/users/maxsim HTTP/1.0" 200 OK
Nov 10 22:47:55 impressed-jade.ptr.network uvicorn[1497417]: INFO:     127.0.0.1:38706 - "GET /api/health HTTP/1.1" 200 OK
Nov 10 22:47:55 impressed-jade.ptr.network uvicorn[1497417]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 10 22:47:56 impressed-jade.ptr.network uvicorn[1497417]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 10 22:47:56 impressed-jade.ptr.network uvicorn[1497417]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
