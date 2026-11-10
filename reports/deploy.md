# Zicer deploy 2026-11-10 22:59 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: a7e0234 Теннис: после гейма подача сразу переходит к другому игроку

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
2026/11/11 01:59:10 [warn] 1752466#1752466: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/11 01:59:10 [warn] 1752466#1752466: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/11 01:59:10 [warn] 1752466#1752466: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/11 01:59:10 [warn] 1752466#1752466: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/11 01:59:10 [warn] 1752466#1752466: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/11 01:59:10 [warn] 1752466#1752466: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
finish_stale | 2026-11-10 22:58:08.554143 | finished 0 | 
tg_poll | 2026-11-10 22:58:45.309942 | no token | 
football_live | 2026-11-10 22:58:59.447226 | live upserted 1 | 
football | 2026-11-10 22:59:04.466284 | football upserted 97 | 
basketball | 2026-11-10 22:59:06.341660 | basketball upserted 420 | 
basketball_week | 2026-11-10 22:59:07.342538 | nba week upserted 48 | 
other_sports | 2026-11-10 22:59:07.679480 | other sports new 0 | 
backfill | 2026-11-10 22:59:07.685213 | already | 
odds | 2026-11-10 22:59:08.891425 | odds matched 50 | 
settle | 2026-11-10 22:59:08.913999 | settled 0 | 
trends | 2026-11-10 22:59:09.216529 | trends 11 | 
analysis | 2026-11-10 22:59:09.230270 | analysis 0 | 
xfeed | 2026-11-10 22:59:23.068724 | xfeed games 89, linked 0, updated 4 | 
live | 2026-11-10 22:59:33.379849 | live updated 3 | 
names | 2026-11-10 22:55:51.115714 | names 0 | 
tg_reminders | 2026-11-10 22:55:51.435820 | no token | 
maxbet_results | 2026-11-10 22:57:02.186997 | no pending | 
other_results | 2026-11-10 22:57:04.100371 | other results 4 | 
--- worker log ---
Nov 11 01:59:06 impressed-jade.ptr.network python[1752139]: 2026-11-11 01:59:06,326 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261112 "HTTP/1.1 200 OK"
Nov 11 01:59:06 impressed-jade.ptr.network python[1752139]: 2026-11-11 01:59:06,446 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261113 "HTTP/1.1 200 OK"
Nov 11 01:59:06 impressed-jade.ptr.network python[1752139]: 2026-11-11 01:59:06,580 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261114 "HTTP/1.1 200 OK"
Nov 11 01:59:06 impressed-jade.ptr.network python[1752139]: 2026-11-11 01:59:06,638 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261115 "HTTP/1.1 200 OK"
Nov 11 01:59:06 impressed-jade.ptr.network python[1752139]: 2026-11-11 01:59:06,791 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261116 "HTTP/1.1 200 OK"
Nov 11 01:59:06 impressed-jade.ptr.network python[1752139]: 2026-11-11 01:59:06,939 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261117 "HTTP/1.1 200 OK"
Nov 11 01:59:07 impressed-jade.ptr.network python[1752139]: 2026-11-11 01:59:07,229 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261118 "HTTP/1.1 200 OK"
Nov 11 01:59:07 impressed-jade.ptr.network python[1752139]: 2026-11-11 01:59:07,440 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/H/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 01:59:07 impressed-jade.ptr.network python[1752139]: 2026-11-11 01:59:07,541 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/T/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 01:59:07 impressed-jade.ptr.network python[1752139]: 2026-11-11 01:59:07,614 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/V/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 01:59:07 impressed-jade.ptr.network python[1752139]: 2026-11-11 01:59:07,671 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/W/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 01:59:08 impressed-jade.ptr.network python[1752139]: 2026-11-11 01:59:08,124 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 01:59:08 impressed-jade.ptr.network python[1752139]: 2026-11-11 01:59:08,469 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 01:59:08 impressed-jade.ptr.network python[1752139]: 2026-11-11 01:59:08,850 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 01:59:19 impressed-jade.ptr.network python[1752139]: 2026-11-11 01:59:19,335 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 01:59:19 impressed-jade.ptr.network python[1752139]: 2026-11-11 01:59:19,956 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 01:59:20 impressed-jade.ptr.network python[1752139]: 2026-11-11 01:59:20,578 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 01:59:21 impressed-jade.ptr.network python[1752139]: 2026-11-11 01:59:21,207 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 01:59:21 impressed-jade.ptr.network python[1752139]: 2026-11-11 01:59:21,830 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 01:59:22 impressed-jade.ptr.network python[1752139]: 2026-11-11 01:59:22,448 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 01:59:33 impressed-jade.ptr.network python[1752139]: 2026-11-11 01:59:33,297 INFO HTTP Request: GET https://www.maxbet.rs/live/init/sr "HTTP/1.1 200 OK"
Nov 11 01:59:33 impressed-jade.ptr.network python[1752139]: 2026-11-11 01:59:33,482 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 01:59:34 impressed-jade.ptr.network python[1752139]: 2026-11-11 01:59:34,103 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 01:59:34 impressed-jade.ptr.network python[1752139]: 2026-11-11 01:59:34,726 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 01:59:35 impressed-jade.ptr.network python[1752139]: 2026-11-11 01:59:35,357 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
--- api log ---
Nov 11 01:59:02 impressed-jade.ptr.network systemd[1]: Started zicer-api.service - Zicer API.
Nov 11 01:59:02 impressed-jade.ptr.network uvicorn[1752141]: INFO:     Uvicorn running on http://127.0.0.1:8790 (Press CTRL+C to quit)
Nov 11 01:59:02 impressed-jade.ptr.network uvicorn[1752141]: INFO:     Started parent process [1752141]
Nov 11 01:59:03 impressed-jade.ptr.network uvicorn[1752180]: INFO:     Started server process [1752180]
Nov 11 01:59:03 impressed-jade.ptr.network uvicorn[1752180]: INFO:     Waiting for application startup.
Nov 11 01:59:03 impressed-jade.ptr.network uvicorn[1752180]: INFO:     Application startup complete.
Nov 11 01:59:03 impressed-jade.ptr.network uvicorn[1752179]: INFO:     Started server process [1752179]
Nov 11 01:59:03 impressed-jade.ptr.network uvicorn[1752179]: INFO:     Waiting for application startup.
Nov 11 01:59:03 impressed-jade.ptr.network uvicorn[1752179]: INFO:     Application startup complete.
Nov 11 01:59:05 impressed-jade.ptr.network uvicorn[1752179]: INFO:     87.116.135.226:0 - "GET /api/matches/1800/center HTTP/1.0" 200 OK
Nov 11 01:59:18 impressed-jade.ptr.network uvicorn[1752179]: INFO:     87.116.135.226:0 - "GET /api/matches/1800/center HTTP/1.0" 200 OK
Nov 11 01:59:34 impressed-jade.ptr.network uvicorn[1752179]: INFO:     127.0.0.1:46654 - "GET /api/health HTTP/1.1" 200 OK
Nov 11 01:59:34 impressed-jade.ptr.network uvicorn[1752180]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 01:59:34 impressed-jade.ptr.network uvicorn[1752179]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 01:59:34 impressed-jade.ptr.network uvicorn[1752179]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
