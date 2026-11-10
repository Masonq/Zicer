# Zicer deploy 2026-11-10 21:11 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: cc80819 Логотип Winly: иконки сайта и телефона (favicon, apple-touch, PWA-манифест), логотип в шапке, фирменная палитра (графит + лайм), логотип на картинке тикета

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
2026/11/11 00:10:51 [warn] 1606636#1606636: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/11 00:10:51 [warn] 1606636#1606636: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/11 00:10:51 [warn] 1606636#1606636: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/11 00:10:51 [warn] 1606636#1606636: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/11 00:10:51 [warn] 1606636#1606636: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/11 00:10:51 [warn] 1606636#1606636: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
finish_stale | 2026-11-10 21:09:42.467501 | finished 0 | 
tg_poll | 2026-11-10 21:10:23.526889 | no token | 
football_live | 2026-11-10 21:10:28.657678 | live upserted 1 | 
tg_reminders | 2026-11-10 21:06:22.675380 | no token | 
maxbet_results | 2026-11-10 21:10:31.620786 | maxbet results 1 | 
other_results | 2026-11-10 21:10:32.554154 | other results 4 | 
football | 2026-11-10 21:10:44.444058 | football upserted 98 | 
basketball | 2026-11-10 21:10:46.399246 | basketball upserted 423 | 
names | 2026-11-10 21:06:49.409243 | names 16 | 
basketball_week | 2026-11-10 21:10:47.382746 | nba week upserted 48 | 
other_sports | 2026-11-10 21:10:47.773832 | other sports new 0 | 
backfill | 2026-11-10 21:10:47.778556 | already | 
odds | 2026-11-10 21:10:48.618433 | odds matched 50 | 
settle | 2026-11-10 21:10:48.641088 | settled 0 | 
trends | 2026-11-10 21:10:48.948496 | trends 11 | 
analysis | 2026-11-10 21:10:48.956283 | analysis 0 | 
xfeed | 2026-11-10 21:11:02.844061 | xfeed games 157, linked 0, updated 3 | 
live | 2026-11-10 21:11:13.121616 | live updated 4 | 
--- worker log ---
Nov 11 00:10:46 impressed-jade.ptr.network python[1606300]: 2026-11-11 00:10:46,773 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261114 "HTTP/1.1 200 OK"
Nov 11 00:10:46 impressed-jade.ptr.network python[1606300]: 2026-11-11 00:10:46,900 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261115 "HTTP/1.1 200 OK"
Nov 11 00:10:47 impressed-jade.ptr.network python[1606300]: 2026-11-11 00:10:47,057 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261116 "HTTP/1.1 200 OK"
Nov 11 00:10:47 impressed-jade.ptr.network python[1606300]: 2026-11-11 00:10:47,201 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261117 "HTTP/1.1 200 OK"
Nov 11 00:10:47 impressed-jade.ptr.network python[1606300]: 2026-11-11 00:10:47,338 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261118 "HTTP/1.1 200 OK"
Nov 11 00:10:47 impressed-jade.ptr.network python[1606300]: 2026-11-11 00:10:47,511 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/H/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 00:10:47 impressed-jade.ptr.network python[1606300]: 2026-11-11 00:10:47,627 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/T/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 00:10:47 impressed-jade.ptr.network python[1606300]: 2026-11-11 00:10:47,695 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/V/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 00:10:47 impressed-jade.ptr.network python[1606300]: 2026-11-11 00:10:47,763 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/W/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 00:10:47 impressed-jade.ptr.network python[1606300]: 2026-11-11 00:10:47,912 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 00:10:48 impressed-jade.ptr.network python[1606300]: 2026-11-11 00:10:48,216 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 00:10:48 impressed-jade.ptr.network python[1606300]: 2026-11-11 00:10:48,571 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 00:10:59 impressed-jade.ptr.network python[1606300]: 2026-11-11 00:10:59,064 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 00:10:59 impressed-jade.ptr.network python[1606300]: 2026-11-11 00:10:59,697 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 00:11:00 impressed-jade.ptr.network python[1606300]: 2026-11-11 00:11:00,320 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 00:11:00 impressed-jade.ptr.network python[1606300]: 2026-11-11 00:11:00,946 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 00:11:01 impressed-jade.ptr.network python[1606300]: 2026-11-11 00:11:01,569 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 00:11:02 impressed-jade.ptr.network python[1606300]: 2026-11-11 00:11:02,190 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 00:11:12 impressed-jade.ptr.network python[1606300]: 2026-11-11 00:11:12,972 INFO HTTP Request: GET https://www.maxbet.rs/live/init/sr "HTTP/1.1 200 OK"
Nov 11 00:11:13 impressed-jade.ptr.network python[1606300]: 2026-11-11 00:11:13,248 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 00:11:13 impressed-jade.ptr.network python[1606300]: 2026-11-11 00:11:13,886 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 00:11:14 impressed-jade.ptr.network python[1606300]: 2026-11-11 00:11:14,509 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 00:11:15 impressed-jade.ptr.network python[1606300]: 2026-11-11 00:11:15,144 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 00:11:15 impressed-jade.ptr.network python[1606300]: 2026-11-11 00:11:15,772 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 00:11:16 impressed-jade.ptr.network python[1606300]: 2026-11-11 00:11:16,391 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
--- api log ---
Nov 11 00:10:44 impressed-jade.ptr.network uvicorn[1606365]: INFO:     Waiting for application startup.
Nov 11 00:10:44 impressed-jade.ptr.network uvicorn[1606365]: INFO:     Application startup complete.
Nov 11 00:10:44 impressed-jade.ptr.network uvicorn[1606366]: INFO:     Started server process [1606366]
Nov 11 00:10:44 impressed-jade.ptr.network uvicorn[1606366]: INFO:     Waiting for application startup.
Nov 11 00:10:44 impressed-jade.ptr.network uvicorn[1606366]: INFO:     Application startup complete.
Nov 11 00:10:48 impressed-jade.ptr.network uvicorn[1606366]: INFO:     87.116.135.226:0 - "GET /api/matches/1800/center HTTP/1.0" 200 OK
Nov 11 00:10:55 impressed-jade.ptr.network uvicorn[1606366]: INFO:     87.116.135.226:0 - "GET /api/matches/1800/center HTTP/1.0" 200 OK
Nov 11 00:11:01 impressed-jade.ptr.network uvicorn[1606366]: INFO:     87.116.135.226:0 - "GET /api/matches/1800/center HTTP/1.0" 200 OK
Nov 11 00:11:07 impressed-jade.ptr.network uvicorn[1606365]: INFO:     87.116.135.226:0 - "GET /api/matches/1800/center HTTP/1.0" 200 OK
Nov 11 00:11:12 impressed-jade.ptr.network uvicorn[1606366]: INFO:     87.116.135.226:0 - "GET /api/matches/1800 HTTP/1.0" 200 OK
Nov 11 00:11:13 impressed-jade.ptr.network uvicorn[1606366]: INFO:     87.116.135.226:0 - "GET /api/matches/1800/center HTTP/1.0" 200 OK
Nov 11 00:11:15 impressed-jade.ptr.network uvicorn[1606366]: INFO:     127.0.0.1:54494 - "GET /api/health HTTP/1.1" 200 OK
Nov 11 00:11:15 impressed-jade.ptr.network uvicorn[1606366]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 00:11:15 impressed-jade.ptr.network uvicorn[1606366]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 00:11:16 impressed-jade.ptr.network uvicorn[1606366]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
