# Zicer deploy 2026-11-10 22:51 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: fdb08c5 Срочно: класс поля площадки конфликтовал с полями форм (вход, профиль, тикет, админка) — переименован, формы снова ровные

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
2026/11/11 01:50:48 [warn] 1741183#1741183: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/11 01:50:48 [warn] 1741183#1741183: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/11 01:50:48 [warn] 1741183#1741183: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/11 01:50:48 [warn] 1741183#1741183: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/11 01:50:48 [warn] 1741183#1741183: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/11 01:50:48 [warn] 1741183#1741183: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
finish_stale | 2026-11-10 22:49:44.335381 | finished 0 | 
football_live | 2026-11-10 22:50:12.224185 | live upserted 1 | 
tg_poll | 2026-11-10 22:50:39.180024 | no token | 
football | 2026-11-10 22:50:42.309180 | football upserted 97 | 
maxbet_results | 2026-11-10 22:46:34.725887 | no pending | 
other_results | 2026-11-10 22:46:36.696507 | other results 4 | 
basketball | 2026-11-10 22:50:44.112358 | basketball upserted 420 | 
basketball_week | 2026-11-10 22:50:45.188541 | nba week upserted 48 | 
other_sports | 2026-11-10 22:50:45.603835 | other sports new 0 | 
backfill | 2026-11-10 22:50:45.608571 | already | 
odds | 2026-11-10 22:50:46.270442 | odds matched 50 | 
settle | 2026-11-10 22:50:46.294253 | settled 0 | 
trends | 2026-11-10 22:50:46.641265 | trends 11 | 
analysis | 2026-11-10 22:50:46.659510 | analysis 0 | 
xfeed | 2026-11-10 22:51:00.504469 | xfeed games 88, linked 0, updated 4 | 
live | 2026-11-10 22:51:10.741181 | live updated 4 | 
--- worker log ---
Nov 11 01:50:44 impressed-jade.ptr.network python[1740849]: 2026-11-11 01:50:44,442 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261114 "HTTP/1.1 200 OK"
Nov 11 01:50:44 impressed-jade.ptr.network python[1740849]: 2026-11-11 01:50:44,731 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261115 "HTTP/1.1 200 OK"
Nov 11 01:50:44 impressed-jade.ptr.network python[1740849]: 2026-11-11 01:50:44,873 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261116 "HTTP/1.1 200 OK"
Nov 11 01:50:45 impressed-jade.ptr.network python[1740849]: 2026-11-11 01:50:45,015 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261117 "HTTP/1.1 200 OK"
Nov 11 01:50:45 impressed-jade.ptr.network python[1740849]: 2026-11-11 01:50:45,148 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261118 "HTTP/1.1 200 OK"
Nov 11 01:50:45 impressed-jade.ptr.network python[1740849]: 2026-11-11 01:50:45,387 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/H/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 01:50:45 impressed-jade.ptr.network python[1740849]: 2026-11-11 01:50:45,480 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/T/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 01:50:45 impressed-jade.ptr.network python[1740849]: 2026-11-11 01:50:45,535 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/V/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 01:50:45 impressed-jade.ptr.network python[1740849]: 2026-11-11 01:50:45,596 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/W/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 01:50:45 impressed-jade.ptr.network python[1740849]: 2026-11-11 01:50:45,717 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 01:50:45 impressed-jade.ptr.network python[1740849]: 2026-11-11 01:50:45,884 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 01:50:46 impressed-jade.ptr.network python[1740849]: 2026-11-11 01:50:46,219 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 01:50:56 impressed-jade.ptr.network python[1740849]: 2026-11-11 01:50:56,764 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 01:50:57 impressed-jade.ptr.network python[1740849]: 2026-11-11 01:50:57,388 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 01:50:58 impressed-jade.ptr.network python[1740849]: 2026-11-11 01:50:58,011 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 01:50:58 impressed-jade.ptr.network python[1740849]: 2026-11-11 01:50:58,639 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 01:50:59 impressed-jade.ptr.network python[1740849]: 2026-11-11 01:50:59,264 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 01:50:59 impressed-jade.ptr.network python[1740849]: 2026-11-11 01:50:59,882 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 01:51:10 impressed-jade.ptr.network python[1740849]: 2026-11-11 01:51:10,626 INFO HTTP Request: GET https://www.maxbet.rs/live/init/sr "HTTP/1.1 200 OK"
Nov 11 01:51:10 impressed-jade.ptr.network python[1740849]: 2026-11-11 01:51:10,842 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 01:51:11 impressed-jade.ptr.network python[1740849]: 2026-11-11 01:51:11,464 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 01:51:12 impressed-jade.ptr.network python[1740849]: 2026-11-11 01:51:12,086 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 01:51:12 impressed-jade.ptr.network python[1740849]: 2026-11-11 01:51:12,715 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 01:51:13 impressed-jade.ptr.network python[1740849]: 2026-11-11 01:51:13,337 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 01:51:13 impressed-jade.ptr.network python[1740849]: 2026-11-11 01:51:13,956 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
--- api log ---
Nov 11 01:50:40 impressed-jade.ptr.network systemd[1]: Started zicer-api.service - Zicer API.
Nov 11 01:50:40 impressed-jade.ptr.network uvicorn[1740853]: INFO:     Uvicorn running on http://127.0.0.1:8790 (Press CTRL+C to quit)
Nov 11 01:50:40 impressed-jade.ptr.network uvicorn[1740853]: INFO:     Started parent process [1740853]
Nov 11 01:50:41 impressed-jade.ptr.network uvicorn[1740878]: INFO:     Started server process [1740878]
Nov 11 01:50:41 impressed-jade.ptr.network uvicorn[1740878]: INFO:     Waiting for application startup.
Nov 11 01:50:41 impressed-jade.ptr.network uvicorn[1740877]: INFO:     Started server process [1740877]
Nov 11 01:50:41 impressed-jade.ptr.network uvicorn[1740877]: INFO:     Waiting for application startup.
Nov 11 01:50:41 impressed-jade.ptr.network uvicorn[1740878]: INFO:     Application startup complete.
Nov 11 01:50:41 impressed-jade.ptr.network uvicorn[1740877]: INFO:     Application startup complete.
Nov 11 01:51:02 impressed-jade.ptr.network uvicorn[1740877]: INFO:     87.116.135.226:0 - "GET /api/clubs/battle?sport=football HTTP/1.0" 200 OK
Nov 11 01:51:04 impressed-jade.ptr.network uvicorn[1740877]: INFO:     87.116.135.226:0 - "GET /api/matches/307 HTTP/1.0" 200 OK
Nov 11 01:51:13 impressed-jade.ptr.network uvicorn[1740877]: INFO:     127.0.0.1:46386 - "GET /api/health HTTP/1.1" 200 OK
Nov 11 01:51:13 impressed-jade.ptr.network uvicorn[1740877]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 01:51:13 impressed-jade.ptr.network uvicorn[1740877]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 01:51:13 impressed-jade.ptr.network uvicorn[1740877]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
