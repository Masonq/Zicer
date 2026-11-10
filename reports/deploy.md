# Zicer deploy 2026-11-10 19:53 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: 10b90f2 Анимация мяча по видам спорта: розыгрыш через сетку (теннис, волейбол), атаки и броски (баскетбол, хоккей, водное поло, футбол), полёт с тенью; подложка под надписью на поле

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
2026/11/10 22:52:56 [warn] 1505206#1505206: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/10 22:52:56 [warn] 1505206#1505206: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/10 22:52:56 [warn] 1505206#1505206: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/10 22:52:56 [warn] 1505206#1505206: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/10 22:52:56 [warn] 1505206#1505206: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/10 22:52:56 [warn] 1505206#1505206: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
football_live | 2026-11-10 19:52:36.806668 | live upserted 4 | 
names | 2026-11-10 19:52:37.226817 | names 0 | 
tg_reminders | 2026-11-10 19:52:37.606183 | no token | 
football | 2026-11-10 19:52:49.867063 | football upserted 91 | 
basketball | 2026-11-10 19:52:52.120662 | basketball upserted 421 | 
basketball_week | 2026-11-10 19:52:52.846189 | nba week upserted 40 | 
other_sports | 2026-11-10 19:52:53.157651 | other sports new 0 | 
backfill | 2026-11-10 19:52:53.161741 | already | 
odds | 2026-11-10 19:52:54.398443 | odds matched 50 | 
settle | 2026-11-10 19:52:54.435134 | settled 0 | 
trends | 2026-11-10 19:52:54.707643 | trends 10 | 
analysis | 2026-11-10 19:52:54.718908 | analysis 0 | 
xfeed | 2026-11-10 19:53:13.642803 | xfeed games 235, linked 0, updated 12 | 
live | 2026-11-10 19:53:19.005998 | live updated 13 | 
tg_poll | 2026-11-10 19:53:19.009629 | no token | 
maxbet_results | 2026-11-10 19:50:38.187233 | maxbet results 3 | 
other_results | 2026-11-10 19:50:42.764816 | other results 5 | 
--- worker log ---
Nov 10 22:52:50 impressed-jade.ptr.network python[1504875]: 2026-11-10 22:52:50,040 INFO HTTP Request: GET https://api-live.euroleague.net/v2/competitions/E/seasons/E2026/games "HTTP/1.1 200 OK"
Nov 10 22:52:51 impressed-jade.ptr.network python[1504875]: 2026-11-10 22:52:51,180 INFO HTTP Request: GET https://api-live.euroleague.net/v2/competitions/U/seasons/U2026/games "HTTP/1.1 200 OK"
Nov 10 22:52:51 impressed-jade.ptr.network python[1504875]: 2026-11-10 22:52:51,922 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261109 "HTTP/1.1 200 OK"
Nov 10 22:52:52 impressed-jade.ptr.network python[1504875]: 2026-11-10 22:52:52,011 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261110 "HTTP/1.1 200 OK"
Nov 10 22:52:52 impressed-jade.ptr.network python[1504875]: 2026-11-10 22:52:52,085 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261111 "HTTP/1.1 200 OK"
Nov 10 22:52:52 impressed-jade.ptr.network python[1504875]: 2026-11-10 22:52:52,232 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261112 "HTTP/1.1 200 OK"
Nov 10 22:52:52 impressed-jade.ptr.network python[1504875]: 2026-11-10 22:52:52,296 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261113 "HTTP/1.1 200 OK"
Nov 10 22:52:52 impressed-jade.ptr.network python[1504875]: 2026-11-10 22:52:52,460 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261114 "HTTP/1.1 200 OK"
Nov 10 22:52:52 impressed-jade.ptr.network python[1504875]: 2026-11-10 22:52:52,593 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261115 "HTTP/1.1 200 OK"
Nov 10 22:52:52 impressed-jade.ptr.network python[1504875]: 2026-11-10 22:52:52,651 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261116 "HTTP/1.1 200 OK"
Nov 10 22:52:52 impressed-jade.ptr.network python[1504875]: 2026-11-10 22:52:52,828 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261117 "HTTP/1.1 200 OK"
Nov 10 22:52:52 impressed-jade.ptr.network python[1504875]: 2026-11-10 22:52:52,943 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/H/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 22:52:53 impressed-jade.ptr.network python[1504875]: 2026-11-10 22:52:53,031 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/T/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 22:52:53 impressed-jade.ptr.network python[1504875]: 2026-11-10 22:52:53,093 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/V/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 22:52:53 impressed-jade.ptr.network python[1504875]: 2026-11-10 22:52:53,150 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/W/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 22:52:53 impressed-jade.ptr.network python[1504875]: 2026-11-10 22:52:53,537 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 22:52:53 impressed-jade.ptr.network python[1504875]: 2026-11-10 22:52:53,936 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 22:52:54 impressed-jade.ptr.network python[1504875]: 2026-11-10 22:52:54,303 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 22:53:09 impressed-jade.ptr.network python[1504875]: 2026-11-10 22:53:09,840 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 10 22:53:10 impressed-jade.ptr.network python[1504875]: 2026-11-10 22:53:10,488 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 10 22:53:11 impressed-jade.ptr.network python[1504875]: 2026-11-10 22:53:11,117 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 10 22:53:11 impressed-jade.ptr.network python[1504875]: 2026-11-10 22:53:11,744 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 10 22:53:12 impressed-jade.ptr.network python[1504875]: 2026-11-10 22:53:12,367 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 10 22:53:12 impressed-jade.ptr.network python[1504875]: 2026-11-10 22:53:12,991 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 10 22:53:18 impressed-jade.ptr.network python[1504875]: 2026-11-10 22:53:18,824 INFO HTTP Request: GET https://www.maxbet.rs/live/init/sr "HTTP/1.1 200 OK"
--- api log ---
Nov 10 22:52:47 impressed-jade.ptr.network systemd[1]: Stopped zicer-api.service - Zicer API.
Nov 10 22:52:47 impressed-jade.ptr.network systemd[1]: zicer-api.service: Consumed 5.436s CPU time, 180.6M memory peak, 0B memory swap peak.
Nov 10 22:52:47 impressed-jade.ptr.network systemd[1]: Started zicer-api.service - Zicer API.
Nov 10 22:52:47 impressed-jade.ptr.network uvicorn[1504883]: INFO:     Uvicorn running on http://127.0.0.1:8790 (Press CTRL+C to quit)
Nov 10 22:52:47 impressed-jade.ptr.network uvicorn[1504883]: INFO:     Started parent process [1504883]
Nov 10 22:52:49 impressed-jade.ptr.network uvicorn[1504899]: INFO:     Started server process [1504899]
Nov 10 22:52:49 impressed-jade.ptr.network uvicorn[1504899]: INFO:     Waiting for application startup.
Nov 10 22:52:49 impressed-jade.ptr.network uvicorn[1504899]: INFO:     Application startup complete.
Nov 10 22:52:49 impressed-jade.ptr.network uvicorn[1504900]: INFO:     Started server process [1504900]
Nov 10 22:52:49 impressed-jade.ptr.network uvicorn[1504900]: INFO:     Waiting for application startup.
Nov 10 22:52:50 impressed-jade.ptr.network uvicorn[1504900]: INFO:     Application startup complete.
Nov 10 22:53:20 impressed-jade.ptr.network uvicorn[1504900]: INFO:     127.0.0.1:44146 - "GET /api/health HTTP/1.1" 200 OK
Nov 10 22:53:20 impressed-jade.ptr.network uvicorn[1504900]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 10 22:53:20 impressed-jade.ptr.network uvicorn[1504900]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 10 22:53:20 impressed-jade.ptr.network uvicorn[1504900]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
