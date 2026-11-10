# Zicer deploy 2026-11-10 22:29 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: 2572bc3 Режиссура лайва: розыгрыш до прихода очка, решающий удар на площадке, пауза, плашка очка/гола, затем перелистывание счёта; очередь событий, лента без спойлеров

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
2026/11/11 01:28:36 [warn] 1711067#1711067: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/11 01:28:36 [warn] 1711067#1711067: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/11 01:28:36 [warn] 1711067#1711067: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/11 01:28:36 [warn] 1711067#1711067: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/11 01:28:36 [warn] 1711067#1711067: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/11 01:28:36 [warn] 1711067#1711067: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
maxbet_results | 2026-11-10 22:25:54.712617 | no pending | 
other_results | 2026-11-10 22:25:58.591868 | other results 4 | 
finish_stale | 2026-11-10 22:27:48.881162 | finished 0 | 
football_live | 2026-11-10 22:27:53.960272 | live upserted 1 | 
names | 2026-11-10 22:23:39.700566 | names 0 | 
tg_reminders | 2026-11-10 22:23:40.063652 | no token | 
tg_poll | 2026-11-10 22:28:25.820526 | no token | 
football | 2026-11-10 22:28:30.049543 | football upserted 97 | 
basketball | 2026-11-10 22:28:31.975268 | basketball upserted 421 | 
basketball_week | 2026-11-10 22:28:32.897510 | nba week upserted 48 | 
other_sports | 2026-11-10 22:28:33.215492 | other sports new 0 | 
backfill | 2026-11-10 22:28:33.219333 | already | 
odds | 2026-11-10 22:28:34.184308 | odds matched 50 | 
settle | 2026-11-10 22:28:34.203739 | settled 0 | 
trends | 2026-11-10 22:28:34.540502 | trends 11 | 
analysis | 2026-11-10 22:28:34.550766 | analysis 0 | 
xfeed | 2026-11-10 22:28:48.403498 | xfeed games 95, linked 0, updated 4 | 
live | 2026-11-10 22:28:58.632053 | live updated 4 | 
--- worker log ---
Nov 11 01:28:32 impressed-jade.ptr.network python[1710747]: 2026-11-11 01:28:32,169 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261113 "HTTP/1.1 200 OK"
Nov 11 01:28:32 impressed-jade.ptr.network python[1710747]: 2026-11-11 01:28:32,308 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261114 "HTTP/1.1 200 OK"
Nov 11 01:28:32 impressed-jade.ptr.network python[1710747]: 2026-11-11 01:28:32,437 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261115 "HTTP/1.1 200 OK"
Nov 11 01:28:32 impressed-jade.ptr.network python[1710747]: 2026-11-11 01:28:32,576 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261116 "HTTP/1.1 200 OK"
Nov 11 01:28:32 impressed-jade.ptr.network python[1710747]: 2026-11-11 01:28:32,732 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261117 "HTTP/1.1 200 OK"
Nov 11 01:28:32 impressed-jade.ptr.network python[1710747]: 2026-11-11 01:28:32,859 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261118 "HTTP/1.1 200 OK"
Nov 11 01:28:32 impressed-jade.ptr.network python[1710747]: 2026-11-11 01:28:32,985 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/H/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 01:28:33 impressed-jade.ptr.network python[1710747]: 2026-11-11 01:28:33,076 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/T/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 01:28:33 impressed-jade.ptr.network python[1710747]: 2026-11-11 01:28:33,141 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/V/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 01:28:33 impressed-jade.ptr.network python[1710747]: 2026-11-11 01:28:33,208 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/W/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 01:28:33 impressed-jade.ptr.network python[1710747]: 2026-11-11 01:28:33,355 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 01:28:33 impressed-jade.ptr.network python[1710747]: 2026-11-11 01:28:33,750 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 01:28:34 impressed-jade.ptr.network python[1710747]: 2026-11-11 01:28:34,138 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 01:28:44 impressed-jade.ptr.network python[1710747]: 2026-11-11 01:28:44,667 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 01:28:45 impressed-jade.ptr.network python[1710747]: 2026-11-11 01:28:45,292 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 01:28:45 impressed-jade.ptr.network python[1710747]: 2026-11-11 01:28:45,915 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 01:28:46 impressed-jade.ptr.network python[1710747]: 2026-11-11 01:28:46,543 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 01:28:47 impressed-jade.ptr.network python[1710747]: 2026-11-11 01:28:47,168 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 01:28:47 impressed-jade.ptr.network python[1710747]: 2026-11-11 01:28:47,787 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 01:28:58 impressed-jade.ptr.network python[1710747]: 2026-11-11 01:28:58,506 INFO HTTP Request: GET https://www.maxbet.rs/live/init/sr "HTTP/1.1 200 OK"
Nov 11 01:28:58 impressed-jade.ptr.network python[1710747]: 2026-11-11 01:28:58,728 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 01:28:59 impressed-jade.ptr.network python[1710747]: 2026-11-11 01:28:59,348 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 01:28:59 impressed-jade.ptr.network python[1710747]: 2026-11-11 01:28:59,973 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 01:29:00 impressed-jade.ptr.network python[1710747]: 2026-11-11 01:29:00,604 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 01:29:01 impressed-jade.ptr.network python[1710747]: 2026-11-11 01:29:01,229 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
--- api log ---
Nov 11 01:28:27 impressed-jade.ptr.network systemd[1]: Stopped zicer-api.service - Zicer API.
Nov 11 01:28:27 impressed-jade.ptr.network systemd[1]: zicer-api.service: Consumed 5.711s CPU time, 167.3M memory peak, 33.8M memory swap peak.
Nov 11 01:28:27 impressed-jade.ptr.network systemd[1]: Started zicer-api.service - Zicer API.
Nov 11 01:28:27 impressed-jade.ptr.network uvicorn[1710749]: INFO:     Uvicorn running on http://127.0.0.1:8790 (Press CTRL+C to quit)
Nov 11 01:28:27 impressed-jade.ptr.network uvicorn[1710749]: INFO:     Started parent process [1710749]
Nov 11 01:28:29 impressed-jade.ptr.network uvicorn[1710754]: INFO:     Started server process [1710754]
Nov 11 01:28:29 impressed-jade.ptr.network uvicorn[1710754]: INFO:     Waiting for application startup.
Nov 11 01:28:29 impressed-jade.ptr.network uvicorn[1710754]: INFO:     Application startup complete.
Nov 11 01:28:29 impressed-jade.ptr.network uvicorn[1710753]: INFO:     Started server process [1710753]
Nov 11 01:28:29 impressed-jade.ptr.network uvicorn[1710753]: INFO:     Waiting for application startup.
Nov 11 01:28:29 impressed-jade.ptr.network uvicorn[1710753]: INFO:     Application startup complete.
Nov 11 01:29:00 impressed-jade.ptr.network uvicorn[1710754]: INFO:     127.0.0.1:42408 - "GET /api/health HTTP/1.1" 200 OK
Nov 11 01:29:00 impressed-jade.ptr.network uvicorn[1710753]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 01:29:00 impressed-jade.ptr.network uvicorn[1710753]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 01:29:00 impressed-jade.ptr.network uvicorn[1710753]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
