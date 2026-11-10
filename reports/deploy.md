# Zicer deploy 2026-11-10 23:30 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: 30ff207 Теннис: паузы по регламенту ITF/ATP/WTA — смена сторон 90 с после нечётных геймов (кроме первого гейма сета), 120 с между сетами, обратный отсчёт; реальное очко прерывает паузу

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
2026/11/11 02:29:45 [warn] 1793671#1793671: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/11 02:29:45 [warn] 1793671#1793671: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/11 02:29:45 [warn] 1793671#1793671: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/11 02:29:45 [warn] 1793671#1793671: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/11 02:29:45 [warn] 1793671#1793671: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/11 02:29:45 [warn] 1793671#1793671: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
tg_poll | 2026-11-10 23:29:27.285783 | no token | 
football_live | 2026-11-10 23:29:32.354865 | live upserted 1 | 
football | 2026-11-10 23:29:39.668004 | football upserted 97 | 
basketball | 2026-11-10 23:29:41.453170 | basketball upserted 420 | 
basketball_week | 2026-11-10 23:29:42.417997 | nba week upserted 48 | 
other_sports | 2026-11-10 23:29:42.705410 | other sports new 0 | 
backfill | 2026-11-10 23:29:42.711707 | already | 
odds | 2026-11-10 23:29:43.934518 | odds matched 50 | 
settle | 2026-11-10 23:29:43.960958 | settled 0 | 
trends | 2026-11-10 23:29:44.225581 | trends 11 | 
analysis | 2026-11-10 23:29:44.230835 | analysis 0 | 
xfeed | 2026-11-10 23:29:58.055154 | xfeed games 79, linked 0, updated 1 | 
live | 2026-11-10 23:30:08.270407 | live updated 1 | 
names | 2026-11-10 23:27:23.115471 | names 0 | 
tg_reminders | 2026-11-10 23:27:23.454943 | no token | 
maxbet_results | 2026-11-10 23:28:29.846190 | no pending | 
other_results | 2026-11-10 23:28:31.861128 | other results 2 | 
finish_stale | 2026-11-10 23:28:46.376704 | finished 0 | 
--- worker log ---
Nov 11 02:29:41 impressed-jade.ptr.network python[1793342]: 2026-11-11 02:29:41,556 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261113 "HTTP/1.1 200 OK"
Nov 11 02:29:41 impressed-jade.ptr.network python[1793342]: 2026-11-11 02:29:41,691 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261114 "HTTP/1.1 200 OK"
Nov 11 02:29:41 impressed-jade.ptr.network python[1793342]: 2026-11-11 02:29:41,820 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261115 "HTTP/1.1 200 OK"
Nov 11 02:29:41 impressed-jade.ptr.network python[1793342]: 2026-11-11 02:29:41,985 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261116 "HTTP/1.1 200 OK"
Nov 11 02:29:42 impressed-jade.ptr.network python[1793342]: 2026-11-11 02:29:42,146 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261117 "HTTP/1.1 200 OK"
Nov 11 02:29:42 impressed-jade.ptr.network python[1793342]: 2026-11-11 02:29:42,278 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261118 "HTTP/1.1 200 OK"
Nov 11 02:29:42 impressed-jade.ptr.network python[1793342]: 2026-11-11 02:29:42,512 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/H/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 02:29:42 impressed-jade.ptr.network python[1793342]: 2026-11-11 02:29:42,593 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/T/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 02:29:42 impressed-jade.ptr.network python[1793342]: 2026-11-11 02:29:42,647 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/V/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 02:29:42 impressed-jade.ptr.network python[1793342]: 2026-11-11 02:29:42,697 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/W/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 02:29:43 impressed-jade.ptr.network python[1793342]: 2026-11-11 02:29:43,157 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 02:29:43 impressed-jade.ptr.network python[1793342]: 2026-11-11 02:29:43,571 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 02:29:43 impressed-jade.ptr.network python[1793342]: 2026-11-11 02:29:43,883 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 02:29:54 impressed-jade.ptr.network python[1793342]: 2026-11-11 02:29:54,325 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 02:29:54 impressed-jade.ptr.network python[1793342]: 2026-11-11 02:29:54,946 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 02:29:55 impressed-jade.ptr.network python[1793342]: 2026-11-11 02:29:55,571 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 02:29:56 impressed-jade.ptr.network python[1793342]: 2026-11-11 02:29:56,195 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 02:29:56 impressed-jade.ptr.network python[1793342]: 2026-11-11 02:29:56,818 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 02:29:57 impressed-jade.ptr.network python[1793342]: 2026-11-11 02:29:57,437 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 02:30:08 impressed-jade.ptr.network python[1793342]: 2026-11-11 02:30:08,189 INFO HTTP Request: GET https://www.maxbet.rs/live/init/sr "HTTP/1.1 200 OK"
Nov 11 02:30:08 impressed-jade.ptr.network python[1793342]: 2026-11-11 02:30:08,366 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 02:30:08 impressed-jade.ptr.network python[1793342]: 2026-11-11 02:30:08,985 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 02:30:09 impressed-jade.ptr.network python[1793342]: 2026-11-11 02:30:09,607 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 02:30:10 impressed-jade.ptr.network python[1793342]: 2026-11-11 02:30:10,233 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 02:30:10 impressed-jade.ptr.network python[1793342]: 2026-11-11 02:30:10,856 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
--- api log ---
Nov 11 02:29:37 impressed-jade.ptr.network systemd[1]: Stopped zicer-api.service - Zicer API.
Nov 11 02:29:37 impressed-jade.ptr.network systemd[1]: zicer-api.service: Consumed 5.135s CPU time, 171.5M memory peak, 0B memory swap peak.
Nov 11 02:29:37 impressed-jade.ptr.network systemd[1]: Started zicer-api.service - Zicer API.
Nov 11 02:29:37 impressed-jade.ptr.network uvicorn[1793364]: INFO:     Uvicorn running on http://127.0.0.1:8790 (Press CTRL+C to quit)
Nov 11 02:29:37 impressed-jade.ptr.network uvicorn[1793364]: INFO:     Started parent process [1793364]
Nov 11 02:29:38 impressed-jade.ptr.network uvicorn[1793419]: INFO:     Started server process [1793419]
Nov 11 02:29:38 impressed-jade.ptr.network uvicorn[1793419]: INFO:     Waiting for application startup.
Nov 11 02:29:38 impressed-jade.ptr.network uvicorn[1793419]: INFO:     Application startup complete.
Nov 11 02:29:39 impressed-jade.ptr.network uvicorn[1793421]: INFO:     Started server process [1793421]
Nov 11 02:29:39 impressed-jade.ptr.network uvicorn[1793421]: INFO:     Waiting for application startup.
Nov 11 02:29:39 impressed-jade.ptr.network uvicorn[1793421]: INFO:     Application startup complete.
Nov 11 02:30:09 impressed-jade.ptr.network uvicorn[1793421]: INFO:     127.0.0.1:55074 - "GET /api/health HTTP/1.1" 200 OK
Nov 11 02:30:09 impressed-jade.ptr.network uvicorn[1793419]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 02:30:10 impressed-jade.ptr.network uvicorn[1793421]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 02:30:10 impressed-jade.ptr.network uvicorn[1793419]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
