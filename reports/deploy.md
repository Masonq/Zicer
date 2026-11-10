# Zicer deploy 2026-11-10 20:53 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: 2ba6160 Переименование в Winly; страница вариантов логотипа /brend; теннис: анимация подачи и розыгрыша, мяч всегда через сетку

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
2026/11/10 23:52:46 [warn] 1582358#1582358: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/10 23:52:46 [warn] 1582358#1582358: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/10 23:52:46 [warn] 1582358#1582358: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/10 23:52:46 [warn] 1582358#1582358: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/10 23:52:46 [warn] 1582358#1582358: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/10 23:52:46 [warn] 1582358#1582358: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
xfeed | 2026-11-10 20:52:58.722216 | xfeed games 189, linked 0, updated 7 | 
live | 2026-11-10 20:53:09.095980 | live updated 8 | 
names | 2026-11-10 20:49:12.423908 | names 0 | 
tg_reminders | 2026-11-10 20:49:12.794412 | no token | 
maxbet_results | 2026-11-10 20:50:12.312117 | maxbet results 3 | 
other_results | 2026-11-10 20:50:15.422176 | other results 5 | 
football_live | 2026-11-10 20:52:02.953875 | live upserted 2 | 
tg_poll | 2026-11-10 20:52:21.500245 | no token | 
finish_stale | 2026-11-10 20:52:35.707728 | finished 0 | 
football | 2026-11-10 20:52:40.372563 | football upserted 89 | 
basketball | 2026-11-10 20:52:42.172347 | basketball upserted 420 | 
basketball_week | 2026-11-10 20:52:42.829107 | nba week upserted 40 | 
other_sports | 2026-11-10 20:52:43.223770 | other sports new 0 | 
backfill | 2026-11-10 20:52:43.230950 | already | 
odds | 2026-11-10 20:52:44.202578 | odds matched 50 | 
settle | 2026-11-10 20:52:44.260001 | settled 0 | 
trends | 2026-11-10 20:52:44.789573 | trends 11 | 
analysis | 2026-11-10 20:52:44.805493 | analysis 0 | 
--- worker log ---
Nov 10 23:52:42 impressed-jade.ptr.network python[1582028]: 2026-11-10 23:52:42,324 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261113 "HTTP/1.1 200 OK"
Nov 10 23:52:42 impressed-jade.ptr.network python[1582028]: 2026-11-10 23:52:42,465 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261114 "HTTP/1.1 200 OK"
Nov 10 23:52:42 impressed-jade.ptr.network python[1582028]: 2026-11-10 23:52:42,511 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261115 "HTTP/1.1 200 OK"
Nov 10 23:52:42 impressed-jade.ptr.network python[1582028]: 2026-11-10 23:52:42,654 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261116 "HTTP/1.1 200 OK"
Nov 10 23:52:42 impressed-jade.ptr.network python[1582028]: 2026-11-10 23:52:42,802 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261117 "HTTP/1.1 200 OK"
Nov 10 23:52:42 impressed-jade.ptr.network python[1582028]: 2026-11-10 23:52:42,941 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/H/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 23:52:43 impressed-jade.ptr.network python[1582028]: 2026-11-10 23:52:43,065 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/T/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 23:52:43 impressed-jade.ptr.network python[1582028]: 2026-11-10 23:52:43,145 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/V/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 23:52:43 impressed-jade.ptr.network python[1582028]: 2026-11-10 23:52:43,209 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/W/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 23:52:43 impressed-jade.ptr.network python[1582028]: 2026-11-10 23:52:43,359 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 23:52:43 impressed-jade.ptr.network python[1582028]: 2026-11-10 23:52:43,538 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 23:52:44 impressed-jade.ptr.network python[1582028]: 2026-11-10 23:52:44,076 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 23:52:54 impressed-jade.ptr.network python[1582028]: 2026-11-10 23:52:54,920 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 10 23:52:55 impressed-jade.ptr.network python[1582028]: 2026-11-10 23:52:55,562 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 10 23:52:56 impressed-jade.ptr.network python[1582028]: 2026-11-10 23:52:56,189 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 10 23:52:56 impressed-jade.ptr.network python[1582028]: 2026-11-10 23:52:56,832 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 10 23:52:57 impressed-jade.ptr.network python[1582028]: 2026-11-10 23:52:57,456 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 10 23:52:58 impressed-jade.ptr.network python[1582028]: 2026-11-10 23:52:58,074 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 10 23:53:08 impressed-jade.ptr.network python[1582028]: 2026-11-10 23:53:08,890 INFO HTTP Request: GET https://www.maxbet.rs/live/init/sr "HTTP/1.1 200 OK"
Nov 10 23:53:09 impressed-jade.ptr.network python[1582028]: 2026-11-10 23:53:09,214 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 10 23:53:09 impressed-jade.ptr.network python[1582028]: 2026-11-10 23:53:09,854 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 10 23:53:10 impressed-jade.ptr.network python[1582028]: 2026-11-10 23:53:10,485 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 10 23:53:11 impressed-jade.ptr.network python[1582028]: 2026-11-10 23:53:11,115 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 10 23:53:11 impressed-jade.ptr.network python[1582028]: 2026-11-10 23:53:11,742 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 10 23:53:12 impressed-jade.ptr.network python[1582028]: 2026-11-10 23:53:12,362 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
--- api log ---
Nov 10 23:52:37 impressed-jade.ptr.network systemd[1]: Stopped zicer-api.service - Zicer API.
Nov 10 23:52:37 impressed-jade.ptr.network systemd[1]: zicer-api.service: Consumed 7.703s CPU time, 186.4M memory peak, 3.4M memory swap peak.
Nov 10 23:52:37 impressed-jade.ptr.network systemd[1]: Started zicer-api.service - Zicer API.
Nov 10 23:52:37 impressed-jade.ptr.network uvicorn[1582030]: INFO:     Uvicorn running on http://127.0.0.1:8790 (Press CTRL+C to quit)
Nov 10 23:52:37 impressed-jade.ptr.network uvicorn[1582030]: INFO:     Started parent process [1582030]
Nov 10 23:52:39 impressed-jade.ptr.network uvicorn[1582053]: INFO:     Started server process [1582053]
Nov 10 23:52:39 impressed-jade.ptr.network uvicorn[1582053]: INFO:     Waiting for application startup.
Nov 10 23:52:39 impressed-jade.ptr.network uvicorn[1582053]: INFO:     Application startup complete.
Nov 10 23:52:40 impressed-jade.ptr.network uvicorn[1582052]: INFO:     Started server process [1582052]
Nov 10 23:52:40 impressed-jade.ptr.network uvicorn[1582052]: INFO:     Waiting for application startup.
Nov 10 23:52:40 impressed-jade.ptr.network uvicorn[1582052]: INFO:     Application startup complete.
Nov 10 23:53:11 impressed-jade.ptr.network uvicorn[1582052]: INFO:     127.0.0.1:34844 - "GET /api/health HTTP/1.1" 200 OK
Nov 10 23:53:11 impressed-jade.ptr.network uvicorn[1582052]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 10 23:53:11 impressed-jade.ptr.network uvicorn[1582052]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 10 23:53:11 impressed-jade.ptr.network uvicorn[1582052]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
