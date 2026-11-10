# Zicer deploy 2026-11-10 20:44 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: 2df079a Трекер как в образце: зона владения со стрелкой, карточка «команда — с мячом», карточки событий с иконками (фол, бросок, тайм-аут, угловой, карточка, гол), бонус-фолы и игровое время в баскетболе

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
2026/11/10 23:44:06 [warn] 1570768#1570768: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/10 23:44:06 [warn] 1570768#1570768: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/10 23:44:06 [warn] 1570768#1570768: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/10 23:44:06 [warn] 1570768#1570768: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/10 23:44:06 [warn] 1570768#1570768: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/10 23:44:06 [warn] 1570768#1570768: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
matches: {'basketball': 676, 'waterpolo': 4, 'tennis': 12, 'hockey': 35, 'volleyball': 5, 'football': 1090}
finish_stale | 2026-11-10 20:43:02.716359 | finished 0 | 
football_live | 2026-11-10 20:43:16.759898 | live upserted 4 | 
tg_poll | 2026-11-10 20:43:34.944585 | no token | 
names | 2026-11-10 20:39:39.916780 | names 0 | 
maxbet_results | 2026-11-10 20:43:48.753426 | maxbet results 3 | 
other_results | 2026-11-10 20:43:52.023231 | other results 5 | 
tg_reminders | 2026-11-10 20:39:40.293778 | no token | 
football | 2026-11-10 20:43:59.875119 | football upserted 91 | 
basketball | 2026-11-10 20:44:01.687874 | basketball upserted 421 | 
basketball_week | 2026-11-10 20:44:02.542296 | nba week upserted 40 | 
other_sports | 2026-11-10 20:44:02.884894 | other sports new 0 | 
backfill | 2026-11-10 20:44:02.890341 | already | 
odds | 2026-11-10 20:44:03.933333 | odds matched 50 | 
settle | 2026-11-10 20:44:03.954272 | settled 0 | 
trends | 2026-11-10 20:44:04.303047 | trends 11 | 
analysis | 2026-11-10 20:44:04.312333 | analysis 0 | 
xfeed | 2026-11-10 20:44:18.234692 | xfeed games 196, linked 0, updated 11 | 
live | 2026-11-10 20:44:28.562652 | live updated 14 | 
--- worker log ---
Nov 10 23:44:01 impressed-jade.ptr.network python[1570493]: 2026-11-10 23:44:01,658 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261111 "HTTP/1.1 200 OK"
Nov 10 23:44:01 impressed-jade.ptr.network python[1570493]: 2026-11-10 23:44:01,789 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261112 "HTTP/1.1 200 OK"
Nov 10 23:44:01 impressed-jade.ptr.network python[1570493]: 2026-11-10 23:44:01,830 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261113 "HTTP/1.1 200 OK"
Nov 10 23:44:02 impressed-jade.ptr.network python[1570493]: 2026-11-10 23:44:02,056 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261114 "HTTP/1.1 200 OK"
Nov 10 23:44:02 impressed-jade.ptr.network python[1570493]: 2026-11-10 23:44:02,185 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261115 "HTTP/1.1 200 OK"
Nov 10 23:44:02 impressed-jade.ptr.network python[1570493]: 2026-11-10 23:44:02,381 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261116 "HTTP/1.1 200 OK"
Nov 10 23:44:02 impressed-jade.ptr.network python[1570493]: 2026-11-10 23:44:02,524 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261117 "HTTP/1.1 200 OK"
Nov 10 23:44:02 impressed-jade.ptr.network python[1570493]: 2026-11-10 23:44:02,654 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/H/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 23:44:02 impressed-jade.ptr.network python[1570493]: 2026-11-10 23:44:02,742 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/T/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 23:44:02 impressed-jade.ptr.network python[1570493]: 2026-11-10 23:44:02,811 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/V/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 23:44:02 impressed-jade.ptr.network python[1570493]: 2026-11-10 23:44:02,878 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/W/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 23:44:03 impressed-jade.ptr.network python[1570493]: 2026-11-10 23:44:03,356 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 23:44:03 impressed-jade.ptr.network python[1570493]: 2026-11-10 23:44:03,484 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 23:44:03 impressed-jade.ptr.network python[1570493]: 2026-11-10 23:44:03,876 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 23:44:14 impressed-jade.ptr.network python[1570493]: 2026-11-10 23:44:14,422 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 10 23:44:15 impressed-jade.ptr.network python[1570493]: 2026-11-10 23:44:15,062 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 10 23:44:15 impressed-jade.ptr.network python[1570493]: 2026-11-10 23:44:15,705 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 10 23:44:16 impressed-jade.ptr.network python[1570493]: 2026-11-10 23:44:16,333 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 10 23:44:16 impressed-jade.ptr.network python[1570493]: 2026-11-10 23:44:16,961 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 10 23:44:17 impressed-jade.ptr.network python[1570493]: 2026-11-10 23:44:17,580 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 10 23:44:28 impressed-jade.ptr.network python[1570493]: 2026-11-10 23:44:28,390 INFO HTTP Request: GET https://www.maxbet.rs/live/init/sr "HTTP/1.1 200 OK"
Nov 10 23:44:28 impressed-jade.ptr.network python[1570493]: 2026-11-10 23:44:28,670 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 10 23:44:29 impressed-jade.ptr.network python[1570493]: 2026-11-10 23:44:29,311 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 10 23:44:29 impressed-jade.ptr.network python[1570493]: 2026-11-10 23:44:29,937 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 10 23:44:30 impressed-jade.ptr.network python[1570493]: 2026-11-10 23:44:30,564 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
--- api log ---
Nov 10 23:43:57 impressed-jade.ptr.network systemd[1]: Stopped zicer-api.service - Zicer API.
Nov 10 23:43:57 impressed-jade.ptr.network systemd[1]: zicer-api.service: Consumed 5.159s CPU time, 180.4M memory peak, 17.6M memory swap peak.
Nov 10 23:43:57 impressed-jade.ptr.network systemd[1]: Started zicer-api.service - Zicer API.
Nov 10 23:43:57 impressed-jade.ptr.network uvicorn[1570496]: INFO:     Uvicorn running on http://127.0.0.1:8790 (Press CTRL+C to quit)
Nov 10 23:43:57 impressed-jade.ptr.network uvicorn[1570496]: INFO:     Started parent process [1570496]
Nov 10 23:43:59 impressed-jade.ptr.network uvicorn[1570499]: INFO:     Started server process [1570499]
Nov 10 23:43:59 impressed-jade.ptr.network uvicorn[1570499]: INFO:     Waiting for application startup.
Nov 10 23:43:59 impressed-jade.ptr.network uvicorn[1570500]: INFO:     Started server process [1570500]
Nov 10 23:43:59 impressed-jade.ptr.network uvicorn[1570500]: INFO:     Waiting for application startup.
Nov 10 23:43:59 impressed-jade.ptr.network uvicorn[1570500]: INFO:     Application startup complete.
Nov 10 23:43:59 impressed-jade.ptr.network uvicorn[1570499]: INFO:     Application startup complete.
Nov 10 23:44:30 impressed-jade.ptr.network uvicorn[1570499]: INFO:     127.0.0.1:60664 - "GET /api/health HTTP/1.1" 200 OK
Nov 10 23:44:30 impressed-jade.ptr.network uvicorn[1570499]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 10 23:44:30 impressed-jade.ptr.network uvicorn[1570499]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 10 23:44:30 impressed-jade.ptr.network uvicorn[1570499]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
