# Zicer deploy 2026-11-11 14:28 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: 301d475 Новые виды спорта: гандбол и настольный теннис (MaxBet + лайв 22Bet), футзал и киберспорт (CS2, Dota 2, LoL, Valorant — линия и лайв 22Bet); площадки гандбола и футзала по правилам IHF/FIFA, стол для настольного тенниса, киберспорт без поля; иконки, цвета, мячи и геймпад; паузы и скорости по видам; проверка MMA/бокса в отчёте

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
OK: chromium уже установлен

=== Сервисы ===
OK: zicer-api работает
OK: zicer-worker работает

=== Автообновление ===
OK: таймер автообновления включён

=== Админ ===
OK: админ есть

=== nginx ===
2026/11/11 17:28:20 [warn] 2917357#2917357: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/11 17:28:20 [warn] 2917357#2917357: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/11 17:28:20 [warn] 2917357#2917357: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/11 17:28:20 [warn] 2917357#2917357: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/11 17:28:20 [warn] 2917357#2917357: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/11 17:28:20 [warn] 2917357#2917357: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
matches: {'hockey': 52, 'volleyball': 33, 'tabletennis': 142, 'handball': 44, 'basketball': 707, 'waterpolo': 7, 'tennis': 23, 'football': 1100}
tg_poll | 2026-11-11 14:28:06.190519 | no token | 
football_live | 2026-11-11 14:28:11.291306 | live upserted 0 | 
basketball | 2026-11-11 14:28:17.306966 | basketball upserted 414 | 
basketball_week | 2026-11-11 14:28:18.092514 | nba week upserted 48 | 
other_sports | 2026-11-11 14:28:19.227635 | other sports new 186 | 
backfill | 2026-11-11 14:28:19.234508 | already | 
logos | 2026-11-11 14:28:19.320708 | logos: nothing to do | 
highlights | 2026-11-11 14:28:20.110547 | highlights +0 | 
odds | 2026-11-11 14:28:21.159202 | odds matched 72 | 
settle | 2026-11-11 14:28:21.185028 | settled 0 | 
xfeed | 2026-11-11 14:28:37.593169 | xfeed games 212, linked 0, updated 3 | 
live | 2026-11-11 14:28:42.982878 | live updated 3 | 
names | 2026-11-11 14:25:26.972665 | names 0 | 
tg_reminders | 2026-11-11 14:25:27.401337 | no token | 
maxbet_results | 2026-11-11 14:26:52.078240 | no pending | 
other_results | 2026-11-11 14:26:55.054218 | other results 3 | 
social | 2026-11-11 14:27:29.108618 | social nothing due (test) | 
finish_stale | 2026-11-11 14:27:37.973489 | finished 0 | 
trends | 2026-11-10 23:36:09.974574 | trends 11 | 
analysis | 2026-11-10 23:36:10.199323 | analysis 27 | 
football | 2026-11-11 14:28:15.048689 | football upserted 96 |  "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
--- worker log ---
Nov 11 17:28:19 impressed-jade.ptr.network python[2917061]: 2026-11-11 17:28:19,671 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCTv-XvfzLX3i4IGWAm4sbmA "HTTP/1.1 200 OK"
Nov 11 17:28:19 impressed-jade.ptr.network python[2917061]: 2026-11-11 17:28:19,740 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCxfPjORdISQSn2fV8tcVmgA "HTTP/1.1 200 OK"
Nov 11 17:28:19 impressed-jade.ptr.network python[2917061]: 2026-11-11 17:28:19,805 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCQsH5XtIc9hONE1BQjucM0g "HTTP/1.1 200 OK"
Nov 11 17:28:19 impressed-jade.ptr.network python[2917061]: 2026-11-11 17:28:19,902 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC6UL29enLNe4mqwTfAyeNuw "HTTP/1.1 200 OK"
Nov 11 17:28:20 impressed-jade.ptr.network python[2917061]: 2026-11-11 17:28:20,025 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpryVRk_VDudG8SHXgWcG0w "HTTP/1.1 200 OK"
Nov 11 17:28:20 impressed-jade.ptr.network python[2917061]: 2026-11-11 17:28:20,093 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCyGa1YEx9ST66rYrJTGIKOw "HTTP/1.1 200 OK"
Nov 11 17:28:20 impressed-jade.ptr.network python[2917061]: 2026-11-11 17:28:20,257 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 17:28:20 impressed-jade.ptr.network python[2917061]: 2026-11-11 17:28:20,471 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 17:28:21 impressed-jade.ptr.network python[2917061]: 2026-11-11 17:28:21,011 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 17:28:31 impressed-jade.ptr.network python[2917061]: 2026-11-11 17:28:31,286 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 17:28:31 impressed-jade.ptr.network python[2917061]: 2026-11-11 17:28:31,913 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 17:28:32 impressed-jade.ptr.network python[2917061]: 2026-11-11 17:28:32,543 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 17:28:33 impressed-jade.ptr.network python[2917061]: 2026-11-11 17:28:33,187 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 17:28:33 impressed-jade.ptr.network python[2917061]: 2026-11-11 17:28:33,811 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 17:28:34 impressed-jade.ptr.network python[2917061]: 2026-11-11 17:28:34,430 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 17:28:35 impressed-jade.ptr.network python[2917061]: 2026-11-11 17:28:35,053 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=8&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 17:28:35 impressed-jade.ptr.network python[2917061]: 2026-11-11 17:28:35,696 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=10&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 17:28:36 impressed-jade.ptr.network python[2917061]: 2026-11-11 17:28:36,321 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=14&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 17:28:36 impressed-jade.ptr.network python[2917061]: 2026-11-11 17:28:36,963 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=40&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 17:28:42 impressed-jade.ptr.network python[2917061]: 2026-11-11 17:28:42,861 INFO HTTP Request: GET https://www.maxbet.rs/live/init/sr "HTTP/1.1 200 OK"
Nov 11 17:28:43 impressed-jade.ptr.network python[2917061]: 2026-11-11 17:28:43,322 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 17:28:43 impressed-jade.ptr.network python[2917061]: 2026-11-11 17:28:43,949 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 17:28:44 impressed-jade.ptr.network python[2917061]: 2026-11-11 17:28:44,587 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 17:28:45 impressed-jade.ptr.network python[2917061]: 2026-11-11 17:28:45,602 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 17:28:46 impressed-jade.ptr.network python[2917061]: 2026-11-11 17:28:46,235 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
--- api log ---
Nov 11 17:28:12 impressed-jade.ptr.network systemd[1]: Started zicer-api.service - Zicer API.
Nov 11 17:28:12 impressed-jade.ptr.network uvicorn[2917065]: INFO:     Uvicorn running on http://127.0.0.1:8790 (Press CTRL+C to quit)
Nov 11 17:28:12 impressed-jade.ptr.network uvicorn[2917065]: INFO:     Started parent process [2917065]
Nov 11 17:28:14 impressed-jade.ptr.network uvicorn[2917068]: INFO:     Started server process [2917068]
Nov 11 17:28:14 impressed-jade.ptr.network uvicorn[2917068]: INFO:     Waiting for application startup.
Nov 11 17:28:14 impressed-jade.ptr.network uvicorn[2917068]: INFO:     Application startup complete.
Nov 11 17:28:14 impressed-jade.ptr.network uvicorn[2917069]: INFO:     Started server process [2917069]
Nov 11 17:28:14 impressed-jade.ptr.network uvicorn[2917069]: INFO:     Waiting for application startup.
Nov 11 17:28:14 impressed-jade.ptr.network uvicorn[2917069]: INFO:     Application startup complete.
Nov 11 17:28:25 impressed-jade.ptr.network uvicorn[2917069]: INFO:     109.92.227.130:0 - "GET /api/home?tz=180&sport=all HTTP/1.0" 200 OK
Nov 11 17:28:31 impressed-jade.ptr.network uvicorn[2917068]: INFO:     109.92.227.130:0 - "GET /api/me/watch?ids= HTTP/1.0" 200 OK
Nov 11 17:28:44 impressed-jade.ptr.network uvicorn[2917069]: INFO:     127.0.0.1:44986 - "GET /api/health HTTP/1.1" 200 OK
Nov 11 17:28:44 impressed-jade.ptr.network uvicorn[2917069]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 17:28:45 impressed-jade.ptr.network uvicorn[2917069]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 17:28:46 impressed-jade.ptr.network uvicorn[2917068]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
