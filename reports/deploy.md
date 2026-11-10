# Zicer deploy 2026-11-10 19:19 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: 39e9a3b Карточка матча без разметки: тёмная карточка с цветом спорта, крупный водяной знак, цветной значок; эмблемы на одной линии

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
2026/11/10 22:18:41 [warn] 1460449#1460449: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/10 22:18:41 [warn] 1460449#1460449: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/10 22:18:41 [warn] 1460449#1460449: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/10 22:18:41 [warn] 1460449#1460449: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/10 22:18:41 [warn] 1460449#1460449: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/10 22:18:41 [warn] 1460449#1460449: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
football | 2026-11-10 19:18:34.691857 | football upserted 93 | 
basketball | 2026-11-10 19:18:36.524608 | basketball upserted 421 | 
basketball_week | 2026-11-10 19:18:37.682062 | nba week upserted 40 | 
other_sports | 2026-11-10 19:18:38.016409 | other sports new 0 | 
backfill | 2026-11-10 19:18:38.022151 | already | 
odds | 2026-11-10 19:18:39.129867 | odds matched 51 | 
settle | 2026-11-10 19:18:39.158974 | settled 0 | 
trends | 2026-11-10 19:18:39.440959 | trends 9 | 
analysis | 2026-11-10 19:18:39.461051 | analysis 2 | 
xfeed | 2026-11-10 19:18:58.360050 | xfeed games 221, linked 0, updated 16 | 
live | 2026-11-10 19:19:04.153928 | live updated 17 | 
names | 2026-11-10 19:14:26.936353 | names 0 | 
tg_reminders | 2026-11-10 19:14:27.251744 | no token | 
tg_poll | 2026-11-10 19:19:04.158016 | no token | 
maxbet_results | 2026-11-10 19:16:06.002249 | maxbet results 4 | 
other_results | 2026-11-10 19:16:09.576588 | other results 8 | 
football_live | 2026-11-10 19:17:50.148200 | live upserted 6 | 
--- worker log ---
Nov 10 22:18:34 impressed-jade.ptr.network python[1460112]: 2026-11-10 22:18:34,799 INFO HTTP Request: GET https://api-live.euroleague.net/v2/competitions/E/seasons/E2026/games "HTTP/1.1 200 OK"
Nov 10 22:18:35 impressed-jade.ptr.network python[1460112]: 2026-11-10 22:18:35,749 INFO HTTP Request: GET https://api-live.euroleague.net/v2/competitions/U/seasons/U2026/games "HTTP/1.1 200 OK"
Nov 10 22:18:36 impressed-jade.ptr.network python[1460112]: 2026-11-10 22:18:36,386 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261109 "HTTP/1.1 200 OK"
Nov 10 22:18:36 impressed-jade.ptr.network python[1460112]: 2026-11-10 22:18:36,445 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261110 "HTTP/1.1 200 OK"
Nov 10 22:18:36 impressed-jade.ptr.network python[1460112]: 2026-11-10 22:18:36,491 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261111 "HTTP/1.1 200 OK"
Nov 10 22:18:36 impressed-jade.ptr.network python[1460112]: 2026-11-10 22:18:36,629 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261112 "HTTP/1.1 200 OK"
Nov 10 22:18:36 impressed-jade.ptr.network python[1460112]: 2026-11-10 22:18:36,760 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261113 "HTTP/1.1 200 OK"
Nov 10 22:18:36 impressed-jade.ptr.network python[1460112]: 2026-11-10 22:18:36,909 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261114 "HTTP/1.1 200 OK"
Nov 10 22:18:37 impressed-jade.ptr.network python[1460112]: 2026-11-10 22:18:37,305 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261115 "HTTP/1.1 200 OK"
Nov 10 22:18:37 impressed-jade.ptr.network python[1460112]: 2026-11-10 22:18:37,463 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261116 "HTTP/1.1 200 OK"
Nov 10 22:18:37 impressed-jade.ptr.network python[1460112]: 2026-11-10 22:18:37,662 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261117 "HTTP/1.1 200 OK"
Nov 10 22:18:37 impressed-jade.ptr.network python[1460112]: 2026-11-10 22:18:37,787 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/H/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 22:18:37 impressed-jade.ptr.network python[1460112]: 2026-11-10 22:18:37,878 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/T/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 22:18:37 impressed-jade.ptr.network python[1460112]: 2026-11-10 22:18:37,938 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/V/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 22:18:38 impressed-jade.ptr.network python[1460112]: 2026-11-10 22:18:38,001 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/W/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 22:18:38 impressed-jade.ptr.network python[1460112]: 2026-11-10 22:18:38,188 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 22:18:38 impressed-jade.ptr.network python[1460112]: 2026-11-10 22:18:38,636 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 22:18:39 impressed-jade.ptr.network python[1460112]: 2026-11-10 22:18:39,076 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 22:18:54 impressed-jade.ptr.network python[1460112]: 2026-11-10 22:18:54,576 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 10 22:18:55 impressed-jade.ptr.network python[1460112]: 2026-11-10 22:18:55,216 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 10 22:18:55 impressed-jade.ptr.network python[1460112]: 2026-11-10 22:18:55,844 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 10 22:18:56 impressed-jade.ptr.network python[1460112]: 2026-11-10 22:18:56,474 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 10 22:18:57 impressed-jade.ptr.network python[1460112]: 2026-11-10 22:18:57,100 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 10 22:18:57 impressed-jade.ptr.network python[1460112]: 2026-11-10 22:18:57,720 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 10 22:19:03 impressed-jade.ptr.network python[1460112]: 2026-11-10 22:19:03,560 INFO HTTP Request: GET https://www.maxbet.rs/live/init/sr "HTTP/1.1 200 OK"
--- api log ---
Nov 10 22:18:32 impressed-jade.ptr.network systemd[1]: Stopped zicer-api.service - Zicer API.
Nov 10 22:18:32 impressed-jade.ptr.network systemd[1]: zicer-api.service: Consumed 7.819s CPU time, 166.9M memory peak, 49.9M memory swap peak.
Nov 10 22:18:32 impressed-jade.ptr.network systemd[1]: Started zicer-api.service - Zicer API.
Nov 10 22:18:32 impressed-jade.ptr.network uvicorn[1460115]: INFO:     Uvicorn running on http://127.0.0.1:8790 (Press CTRL+C to quit)
Nov 10 22:18:32 impressed-jade.ptr.network uvicorn[1460115]: INFO:     Started parent process [1460115]
Nov 10 22:18:34 impressed-jade.ptr.network uvicorn[1460119]: INFO:     Started server process [1460119]
Nov 10 22:18:34 impressed-jade.ptr.network uvicorn[1460119]: INFO:     Waiting for application startup.
Nov 10 22:18:34 impressed-jade.ptr.network uvicorn[1460119]: INFO:     Application startup complete.
Nov 10 22:18:34 impressed-jade.ptr.network uvicorn[1460118]: INFO:     Started server process [1460118]
Nov 10 22:18:34 impressed-jade.ptr.network uvicorn[1460118]: INFO:     Waiting for application startup.
Nov 10 22:18:34 impressed-jade.ptr.network uvicorn[1460118]: INFO:     Application startup complete.
Nov 10 22:19:05 impressed-jade.ptr.network uvicorn[1460118]: INFO:     127.0.0.1:51864 - "GET /api/health HTTP/1.1" 200 OK
Nov 10 22:19:05 impressed-jade.ptr.network uvicorn[1460118]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 10 22:19:05 impressed-jade.ptr.network uvicorn[1460118]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 10 22:19:06 impressed-jade.ptr.network uvicorn[1460118]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
