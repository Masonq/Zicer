# Zicer deploy 2026-11-11 12:26 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: 8f4fbc9 Широкие экраны: основная колонка растёт (1040 px от 1440, 1240 px от 1720, 1440 px от 2200), правая колонка шире; админка: в «Последних тикетах» кэф и статус больше не налезают друг на друга

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
2026/11/11 15:26:22 [warn] 2754994#2754994: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/11 15:26:22 [warn] 2754994#2754994: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/11 15:26:22 [warn] 2754994#2754994: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/11 15:26:22 [warn] 2754994#2754994: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/11 15:26:22 [warn] 2754994#2754994: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/11 15:26:22 [warn] 2754994#2754994: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
matches: {'basketball': 707, 'waterpolo': 4, 'tennis': 23, 'hockey': 52, 'volleyball': 29, 'football': 1100}
maxbet_results | 2026-11-11 12:24:42.574845 | no pending | 
other_results | 2026-11-11 12:24:49.415924 | other results 2 | 
football_live | 2026-11-11 12:25:37.405412 | live upserted 1 | 
names | 2026-11-11 12:25:37.722311 | names 0 | 
tg_reminders | 2026-11-11 12:25:37.888456 | no token | 
finish_stale | 2026-11-11 12:26:00.930138 | finished 0 | 
tg_poll | 2026-11-11 12:26:00.955437 | no token | 
basketball | 2026-11-11 12:26:18.237480 | basketball upserted 414 | 
basketball_week | 2026-11-11 12:26:19.145187 | nba week upserted 48 | 
other_sports | 2026-11-11 12:26:19.534436 | other sports new 0 | 
backfill | 2026-11-11 12:26:19.542844 | already | 
logos | 2026-11-11 12:26:19.622269 | logos: nothing to do | 
highlights | 2026-11-11 12:26:20.060010 | highlights +0 | 
odds | 2026-11-11 12:26:21.578968 | odds matched 70 | 
settle | 2026-11-11 12:26:21.620499 | settled 0 | 
xfeed | 2026-11-11 12:26:35.527308 | xfeed games 171, linked 0, updated 2 | 
live | 2026-11-11 12:26:45.827570 | live updated 2 | 
trends | 2026-11-10 23:36:09.974574 | trends 11 | 
analysis | 2026-11-10 23:36:10.199323 | analysis 27 | 
football | 2026-11-11 12:26:16.325000 | football upserted 97 |  "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
--- worker log ---
Nov 11 15:26:19 impressed-jade.ptr.network python[2754698]: 2026-11-11 15:26:19,526 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/W/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 15:26:19 impressed-jade.ptr.network python[2754698]: 2026-11-11 15:26:19,779 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpFqOv5z4WKps64GlQS4ytw "HTTP/1.1 200 OK"
Nov 11 15:26:19 impressed-jade.ptr.network python[2754698]: 2026-11-11 15:26:19,831 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC-2Cj6KlR9rCfR28zNLmOTA "HTTP/1.1 200 OK"
Nov 11 15:26:19 impressed-jade.ptr.network python[2754698]: 2026-11-11 15:26:19,841 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCWJ2lWNubArHWmf3FIHbfcQ "HTTP/1.1 200 OK"
Nov 11 15:26:19 impressed-jade.ptr.network python[2754698]: 2026-11-11 15:26:19,856 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCqFMzb-4AUf6WAIbl132QKA "HTTP/1.1 200 OK"
Nov 11 15:26:19 impressed-jade.ptr.network python[2754698]: 2026-11-11 15:26:19,868 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCwJ3S2Ix7aI1BhHexDJlmEg "HTTP/1.1 200 OK"
Nov 11 15:26:19 impressed-jade.ptr.network python[2754698]: 2026-11-11 15:26:19,878 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCTv-XvfzLX3i4IGWAm4sbmA "HTTP/1.1 200 OK"
Nov 11 15:26:19 impressed-jade.ptr.network python[2754698]: 2026-11-11 15:26:19,957 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCxfPjORdISQSn2fV8tcVmgA "HTTP/1.1 200 OK"
Nov 11 15:26:19 impressed-jade.ptr.network python[2754698]: 2026-11-11 15:26:19,968 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCQsH5XtIc9hONE1BQjucM0g "HTTP/1.1 200 OK"
Nov 11 15:26:19 impressed-jade.ptr.network python[2754698]: 2026-11-11 15:26:19,990 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC6UL29enLNe4mqwTfAyeNuw "HTTP/1.1 200 OK"
Nov 11 15:26:20 impressed-jade.ptr.network python[2754698]: 2026-11-11 15:26:20,015 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpryVRk_VDudG8SHXgWcG0w "HTTP/1.1 200 OK"
Nov 11 15:26:20 impressed-jade.ptr.network python[2754698]: 2026-11-11 15:26:20,039 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCyGa1YEx9ST66rYrJTGIKOw "HTTP/1.1 200 OK"
Nov 11 15:26:20 impressed-jade.ptr.network python[2754698]: 2026-11-11 15:26:20,502 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 15:26:20 impressed-jade.ptr.network python[2754698]: 2026-11-11 15:26:20,971 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 15:26:21 impressed-jade.ptr.network python[2754698]: 2026-11-11 15:26:21,418 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 15:26:31 impressed-jade.ptr.network python[2754698]: 2026-11-11 15:26:31,766 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 15:26:32 impressed-jade.ptr.network python[2754698]: 2026-11-11 15:26:32,391 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 15:26:33 impressed-jade.ptr.network python[2754698]: 2026-11-11 15:26:33,021 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 15:26:33 impressed-jade.ptr.network python[2754698]: 2026-11-11 15:26:33,652 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 15:26:34 impressed-jade.ptr.network python[2754698]: 2026-11-11 15:26:34,276 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 15:26:34 impressed-jade.ptr.network python[2754698]: 2026-11-11 15:26:34,894 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 15:26:45 impressed-jade.ptr.network python[2754698]: 2026-11-11 15:26:45,715 INFO HTTP Request: GET https://www.maxbet.rs/live/init/sr "HTTP/1.1 200 OK"
Nov 11 15:26:45 impressed-jade.ptr.network python[2754698]: 2026-11-11 15:26:45,933 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 15:26:46 impressed-jade.ptr.network python[2754698]: 2026-11-11 15:26:46,568 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 15:26:47 impressed-jade.ptr.network python[2754698]: 2026-11-11 15:26:47,195 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
--- api log ---
Nov 11 15:26:13 impressed-jade.ptr.network uvicorn[2754722]: INFO:     Started parent process [2754722]
Nov 11 15:26:15 impressed-jade.ptr.network uvicorn[2754726]: INFO:     Started server process [2754726]
Nov 11 15:26:15 impressed-jade.ptr.network uvicorn[2754726]: INFO:     Waiting for application startup.
Nov 11 15:26:15 impressed-jade.ptr.network uvicorn[2754726]: INFO:     Application startup complete.
Nov 11 15:26:15 impressed-jade.ptr.network uvicorn[2754727]: INFO:     Started server process [2754727]
Nov 11 15:26:15 impressed-jade.ptr.network uvicorn[2754727]: INFO:     Waiting for application startup.
Nov 11 15:26:15 impressed-jade.ptr.network uvicorn[2754727]: INFO:     Application startup complete.
Nov 11 15:26:27 impressed-jade.ptr.network uvicorn[2754727]: INFO:     109.92.227.130:0 - "GET /api/me/watch?ids= HTTP/1.0" 200 OK
Nov 11 15:26:32 impressed-jade.ptr.network uvicorn[2754727]: INFO:     109.92.227.130:0 - "GET /api/home?tz=180&sport=all HTTP/1.0" 200 OK
Nov 11 15:26:46 impressed-jade.ptr.network uvicorn[2754727]: INFO:     127.0.0.1:49150 - "GET /api/health HTTP/1.1" 200 OK
Nov 11 15:26:46 impressed-jade.ptr.network uvicorn[2754727]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 15:26:46 impressed-jade.ptr.network uvicorn[2754727]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 15:26:46 impressed-jade.ptr.network uvicorn[2754726]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
Nov 11 15:26:47 impressed-jade.ptr.network uvicorn[2754726]: INFO:     109.92.227.130:0 - "GET /api/sports?tz=180 HTTP/1.0" 200 OK
Nov 11 15:26:47 impressed-jade.ptr.network uvicorn[2754727]: INFO:     109.92.227.130:0 - "GET /api/me/watch?ids= HTTP/1.0" 200 OK
```
