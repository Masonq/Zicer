# Zicer deploy 2026-11-10 18:42 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: fc5d94a Карточка матча в стиле своего спорта: площадка, цвета, значок и название спорта; значок спорта у лиг в списках

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
2026/11/10 21:42:16 [warn] 1413022#1413022: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/10 21:42:16 [warn] 1413022#1413022: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/10 21:42:16 [warn] 1413022#1413022: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/10 21:42:16 [warn] 1413022#1413022: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/10 21:42:16 [warn] 1413022#1413022: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/10 21:42:16 [warn] 1413022#1413022: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
football_live | 2026-11-10 18:41:33.116054 | live upserted 6 | 
football | 2026-11-10 18:42:09.583028 | football upserted 93 | 
basketball | 2026-11-10 18:42:11.569330 | basketball upserted 424 | 
basketball_week | 2026-11-10 18:42:12.438763 | nba week upserted 40 | 
other_sports | 2026-11-10 18:42:12.843434 | other sports new 0 | 
backfill | 2026-11-10 18:42:12.849426 | already | 
odds | 2026-11-10 18:42:13.578722 | odds matched 56 | 
settle | 2026-11-10 18:42:13.607818 | settled 0 | 
trends | 2026-11-10 18:42:13.923946 | trends 11 | 
analysis | 2026-11-10 18:42:13.933254 | analysis 0 | 
xfeed | 2026-11-10 18:42:32.828079 | xfeed games 210, linked 0, updated 11 | 
live | 2026-11-10 18:42:38.184769 | live updated 11 | 
tg_poll | 2026-11-10 18:42:38.188170 | no token | 
names | 2026-11-10 18:38:53.265102 | names 0 | 
tg_reminders | 2026-11-10 18:38:53.635848 | no token | 
maxbet_results | 2026-11-10 18:39:58.707468 | maxbet results 1 | 
other_results | 2026-11-10 18:40:02.045480 | other results 7 | 
--- worker log ---
Nov 10 21:42:09 impressed-jade.ptr.network python[1412695]: 2026-11-10 21:42:09,676 INFO HTTP Request: GET https://api-live.euroleague.net/v2/competitions/E/seasons/E2026/games "HTTP/1.1 200 OK"
Nov 10 21:42:10 impressed-jade.ptr.network python[1412695]: 2026-11-10 21:42:10,673 INFO HTTP Request: GET https://api-live.euroleague.net/v2/competitions/U/seasons/U2026/games "HTTP/1.1 200 OK"
Nov 10 21:42:11 impressed-jade.ptr.network python[1412695]: 2026-11-10 21:42:11,316 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261109 "HTTP/1.1 200 OK"
Nov 10 21:42:11 impressed-jade.ptr.network python[1412695]: 2026-11-10 21:42:11,393 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261110 "HTTP/1.1 200 OK"
Nov 10 21:42:11 impressed-jade.ptr.network python[1412695]: 2026-11-10 21:42:11,531 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261111 "HTTP/1.1 200 OK"
Nov 10 21:42:11 impressed-jade.ptr.network python[1412695]: 2026-11-10 21:42:11,768 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261112 "HTTP/1.1 200 OK"
Nov 10 21:42:11 impressed-jade.ptr.network python[1412695]: 2026-11-10 21:42:11,810 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261113 "HTTP/1.1 200 OK"
Nov 10 21:42:11 impressed-jade.ptr.network python[1412695]: 2026-11-10 21:42:11,955 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261114 "HTTP/1.1 200 OK"
Nov 10 21:42:12 impressed-jade.ptr.network python[1412695]: 2026-11-10 21:42:12,081 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261115 "HTTP/1.1 200 OK"
Nov 10 21:42:12 impressed-jade.ptr.network python[1412695]: 2026-11-10 21:42:12,224 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261116 "HTTP/1.1 200 OK"
Nov 10 21:42:12 impressed-jade.ptr.network python[1412695]: 2026-11-10 21:42:12,419 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261117 "HTTP/1.1 200 OK"
Nov 10 21:42:12 impressed-jade.ptr.network python[1412695]: 2026-11-10 21:42:12,537 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/H/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 21:42:12 impressed-jade.ptr.network python[1412695]: 2026-11-10 21:42:12,637 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/T/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 21:42:12 impressed-jade.ptr.network python[1412695]: 2026-11-10 21:42:12,748 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/V/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 21:42:12 impressed-jade.ptr.network python[1412695]: 2026-11-10 21:42:12,832 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/W/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 21:42:12 impressed-jade.ptr.network python[1412695]: 2026-11-10 21:42:12,982 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 21:42:13 impressed-jade.ptr.network python[1412695]: 2026-11-10 21:42:13,192 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 21:42:13 impressed-jade.ptr.network python[1412695]: 2026-11-10 21:42:13,530 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 21:42:29 impressed-jade.ptr.network python[1412695]: 2026-11-10 21:42:29,041 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 10 21:42:29 impressed-jade.ptr.network python[1412695]: 2026-11-10 21:42:29,673 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 10 21:42:30 impressed-jade.ptr.network python[1412695]: 2026-11-10 21:42:30,305 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 10 21:42:30 impressed-jade.ptr.network python[1412695]: 2026-11-10 21:42:30,942 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 10 21:42:31 impressed-jade.ptr.network python[1412695]: 2026-11-10 21:42:31,572 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 10 21:42:32 impressed-jade.ptr.network python[1412695]: 2026-11-10 21:42:32,193 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 10 21:42:38 impressed-jade.ptr.network python[1412695]: 2026-11-10 21:42:38,015 INFO HTTP Request: GET https://www.maxbet.rs/live/init/sr "HTTP/1.1 200 OK"
--- api log ---
Nov 10 21:42:07 impressed-jade.ptr.network systemd[1]: Stopped zicer-api.service - Zicer API.
Nov 10 21:42:07 impressed-jade.ptr.network systemd[1]: zicer-api.service: Consumed 4.883s CPU time, 169.0M memory peak, 80.7M memory swap peak.
Nov 10 21:42:07 impressed-jade.ptr.network systemd[1]: Started zicer-api.service - Zicer API.
Nov 10 21:42:07 impressed-jade.ptr.network uvicorn[1412699]: INFO:     Uvicorn running on http://127.0.0.1:8790 (Press CTRL+C to quit)
Nov 10 21:42:07 impressed-jade.ptr.network uvicorn[1412699]: INFO:     Started parent process [1412699]
Nov 10 21:42:08 impressed-jade.ptr.network uvicorn[1412703]: INFO:     Started server process [1412703]
Nov 10 21:42:08 impressed-jade.ptr.network uvicorn[1412703]: INFO:     Waiting for application startup.
Nov 10 21:42:09 impressed-jade.ptr.network uvicorn[1412702]: INFO:     Started server process [1412702]
Nov 10 21:42:09 impressed-jade.ptr.network uvicorn[1412702]: INFO:     Waiting for application startup.
Nov 10 21:42:09 impressed-jade.ptr.network uvicorn[1412703]: INFO:     Application startup complete.
Nov 10 21:42:09 impressed-jade.ptr.network uvicorn[1412702]: INFO:     Application startup complete.
Nov 10 21:42:40 impressed-jade.ptr.network uvicorn[1412702]: INFO:     127.0.0.1:52952 - "GET /api/health HTTP/1.1" 200 OK
Nov 10 21:42:40 impressed-jade.ptr.network uvicorn[1412702]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 10 21:42:40 impressed-jade.ptr.network uvicorn[1412702]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 10 21:42:40 impressed-jade.ptr.network uvicorn[1412702]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
