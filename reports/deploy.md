# Zicer deploy 2026-11-11 13:45 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: 1af0672 Лайв-трекер: зона атаки как у букмекеров (полоса от центра к воротам с шевроном, глубже и теплее при опасной атаке, бегущие линии), плашка «Команда — Атака / Опасная атака», часы матча тикают по секундам (74:41), настоящие мячи и шайба на поле; связка сборных с лайв-лентой по разным написаниям (Chinese Taipei = Taiwan и др.)

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
2026/11/11 16:44:41 [warn] 2858875#2858875: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/11 16:44:41 [warn] 2858875#2858875: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/11 16:44:41 [warn] 2858875#2858875: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/11 16:44:41 [warn] 2858875#2858875: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/11 16:44:41 [warn] 2858875#2858875: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/11 16:44:41 [warn] 2858875#2858875: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
matches: {'basketball': 707, 'waterpolo': 7, 'tennis': 23, 'hockey': 52, 'volleyball': 33, 'football': 1100}
football_live | 2026-11-11 13:44:22.458452 | live upserted 1 | 
social | 2026-11-11 13:44:31.588569 | social nothing due (test) | 
tg_poll | 2026-11-11 13:44:31.590596 | no token | 
basketball | 2026-11-11 13:44:36.928193 | basketball upserted 414 | 
basketball_week | 2026-11-11 13:44:37.887538 | nba week upserted 48 | 
other_sports | 2026-11-11 13:44:38.310536 | other sports new 0 | 
backfill | 2026-11-11 13:44:38.316127 | already | 
logos | 2026-11-11 13:44:38.400370 | logos: nothing to do | 
highlights | 2026-11-11 13:44:38.873835 | highlights +0 | 
odds | 2026-11-11 13:44:40.743434 | odds matched 72 | 
settle | 2026-11-11 13:44:40.770375 | settled 0 | 
xfeed | 2026-11-11 13:44:54.674114 | xfeed games 159, linked 1, updated 4 | 
live | 2026-11-11 13:45:04.920936 | live updated 4 | 
names | 2026-11-11 13:41:18.292573 | names 0 | 
tg_reminders | 2026-11-11 13:41:18.390161 | no token | 
maxbet_results | 2026-11-11 13:42:24.681619 | no pending | 
other_results | 2026-11-11 13:42:28.598133 | other results 3 | 
trends | 2026-11-10 23:36:09.974574 | trends 11 | 
analysis | 2026-11-10 23:36:10.199323 | analysis 27 | 
finish_stale | 2026-11-11 13:43:35.401725 | finished 0 | 
football | 2026-11-11 13:44:35.075426 | football upserted 97 |  "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
--- worker log ---
Nov 11 16:44:38 impressed-jade.ptr.network python[2858537]: 2026-11-11 16:44:38,299 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/W/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 16:44:38 impressed-jade.ptr.network python[2858537]: 2026-11-11 16:44:38,525 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpFqOv5z4WKps64GlQS4ytw "HTTP/1.1 200 OK"
Nov 11 16:44:38 impressed-jade.ptr.network python[2858537]: 2026-11-11 16:44:38,572 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC-2Cj6KlR9rCfR28zNLmOTA "HTTP/1.1 200 OK"
Nov 11 16:44:38 impressed-jade.ptr.network python[2858537]: 2026-11-11 16:44:38,592 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCWJ2lWNubArHWmf3FIHbfcQ "HTTP/1.1 200 OK"
Nov 11 16:44:38 impressed-jade.ptr.network python[2858537]: 2026-11-11 16:44:38,608 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCqFMzb-4AUf6WAIbl132QKA "HTTP/1.1 200 OK"
Nov 11 16:44:38 impressed-jade.ptr.network python[2858537]: 2026-11-11 16:44:38,619 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCwJ3S2Ix7aI1BhHexDJlmEg "HTTP/1.1 200 OK"
Nov 11 16:44:38 impressed-jade.ptr.network python[2858537]: 2026-11-11 16:44:38,697 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCTv-XvfzLX3i4IGWAm4sbmA "HTTP/1.1 200 OK"
Nov 11 16:44:38 impressed-jade.ptr.network python[2858537]: 2026-11-11 16:44:38,780 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCxfPjORdISQSn2fV8tcVmgA "HTTP/1.1 200 OK"
Nov 11 16:44:38 impressed-jade.ptr.network python[2858537]: 2026-11-11 16:44:38,790 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCQsH5XtIc9hONE1BQjucM0g "HTTP/1.1 200 OK"
Nov 11 16:44:38 impressed-jade.ptr.network python[2858537]: 2026-11-11 16:44:38,812 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC6UL29enLNe4mqwTfAyeNuw "HTTP/1.1 200 OK"
Nov 11 16:44:38 impressed-jade.ptr.network python[2858537]: 2026-11-11 16:44:38,832 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpryVRk_VDudG8SHXgWcG0w "HTTP/1.1 200 OK"
Nov 11 16:44:38 impressed-jade.ptr.network python[2858537]: 2026-11-11 16:44:38,856 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCyGa1YEx9ST66rYrJTGIKOw "HTTP/1.1 200 OK"
Nov 11 16:44:39 impressed-jade.ptr.network python[2858537]: 2026-11-11 16:44:39,328 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 16:44:40 impressed-jade.ptr.network python[2858537]: 2026-11-11 16:44:40,095 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 16:44:40 impressed-jade.ptr.network python[2858537]: 2026-11-11 16:44:40,584 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 16:44:50 impressed-jade.ptr.network python[2858537]: 2026-11-11 16:44:50,883 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 16:44:51 impressed-jade.ptr.network python[2858537]: 2026-11-11 16:44:51,517 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 16:44:52 impressed-jade.ptr.network python[2858537]: 2026-11-11 16:44:52,138 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 16:44:52 impressed-jade.ptr.network python[2858537]: 2026-11-11 16:44:52,787 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 16:44:53 impressed-jade.ptr.network python[2858537]: 2026-11-11 16:44:53,418 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 16:44:54 impressed-jade.ptr.network python[2858537]: 2026-11-11 16:44:54,037 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 16:45:04 impressed-jade.ptr.network python[2858537]: 2026-11-11 16:45:04,806 INFO HTTP Request: GET https://www.maxbet.rs/live/init/sr "HTTP/1.1 200 OK"
Nov 11 16:45:05 impressed-jade.ptr.network python[2858537]: 2026-11-11 16:45:05,028 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 16:45:05 impressed-jade.ptr.network python[2858537]: 2026-11-11 16:45:05,660 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 16:45:06 impressed-jade.ptr.network python[2858537]: 2026-11-11 16:45:06,288 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
--- api log ---
Nov 11 16:44:33 impressed-jade.ptr.network uvicorn[2858548]: INFO:     Started parent process [2858548]
Nov 11 16:44:34 impressed-jade.ptr.network uvicorn[2858551]: INFO:     Started server process [2858551]
Nov 11 16:44:34 impressed-jade.ptr.network uvicorn[2858551]: INFO:     Waiting for application startup.
Nov 11 16:44:34 impressed-jade.ptr.network uvicorn[2858552]: INFO:     Started server process [2858552]
Nov 11 16:44:34 impressed-jade.ptr.network uvicorn[2858552]: INFO:     Waiting for application startup.
Nov 11 16:44:34 impressed-jade.ptr.network uvicorn[2858552]: INFO:     Application startup complete.
Nov 11 16:44:34 impressed-jade.ptr.network uvicorn[2858551]: INFO:     Application startup complete.
Nov 11 16:44:51 impressed-jade.ptr.network uvicorn[2858552]: INFO:     109.92.227.130:0 - "GET /api/home?tz=180&sport=all HTTP/1.0" 200 OK
Nov 11 16:44:55 impressed-jade.ptr.network uvicorn[2858551]: INFO:     109.92.227.130:0 - "GET /api/me/watch?ids= HTTP/1.0" 200 OK
Nov 11 16:44:57 impressed-jade.ptr.network uvicorn[2858552]: INFO:     109.92.227.130:0 - "GET /api/clubs/battle?sport=football HTTP/1.0" 200 OK
Nov 11 16:45:05 impressed-jade.ptr.network uvicorn[2858551]: INFO:     109.92.227.130:0 - "GET /api/sports?tz=180 HTTP/1.0" 200 OK
Nov 11 16:45:05 impressed-jade.ptr.network uvicorn[2858551]: INFO:     127.0.0.1:45706 - "GET /api/health HTTP/1.1" 200 OK
Nov 11 16:45:05 impressed-jade.ptr.network uvicorn[2858551]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 16:45:05 impressed-jade.ptr.network uvicorn[2858551]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 16:45:06 impressed-jade.ptr.network uvicorn[2858551]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
