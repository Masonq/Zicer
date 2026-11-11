# Zicer deploy 2026-11-11 12:54 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: 86462c3 Главная: «Битва фанатов» в ленте только на телефоне — на компьютере она уже есть в правой колонке

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
2026/11/11 15:54:03 [warn] 2792021#2792021: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/11 15:54:03 [warn] 2792021#2792021: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/11 15:54:03 [warn] 2792021#2792021: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/11 15:54:03 [warn] 2792021#2792021: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/11 15:54:03 [warn] 2792021#2792021: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/11 15:54:03 [warn] 2792021#2792021: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
tg_reminders | 2026-11-11 12:45:09.590618 | no token | 
football_live | 2026-11-11 12:53:25.492610 | live upserted 1 | 
tg_poll | 2026-11-11 12:53:38.651079 | no token | 
finish_stale | 2026-11-11 12:53:52.692910 | finished 0 | 
names | 2026-11-11 12:53:53.380995 | names 0 | 
basketball | 2026-11-11 12:53:59.373502 | basketball upserted 414 | 
basketball_week | 2026-11-11 12:54:00.027029 | nba week upserted 48 | 
other_sports | 2026-11-11 12:54:00.414667 | other sports new 0 | 
backfill | 2026-11-11 12:54:00.418459 | already | 
logos | 2026-11-11 12:54:00.496466 | logos: nothing to do | 
highlights | 2026-11-11 12:54:01.034354 | highlights +0 | 
odds | 2026-11-11 12:54:02.615424 | odds matched 70 | 
settle | 2026-11-11 12:54:02.636268 | settled 0 | 
xfeed | 2026-11-11 12:54:16.557074 | xfeed games 175, linked 0, updated 1 | 
live | 2026-11-11 12:54:26.891702 | live updated 2 | 
trends | 2026-11-10 23:36:09.974574 | trends 11 | 
analysis | 2026-11-10 23:36:10.199323 | analysis 27 | 
maxbet_results | 2026-11-11 12:51:47.549768 | no pending | 
other_results | 2026-11-11 12:51:50.711873 | other results 1 | 
football | 2026-11-11 12:53:57.667882 | football upserted 97 |  "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
--- worker log ---
Nov 11 15:54:00 impressed-jade.ptr.network python[2791682]: 2026-11-11 15:54:00,654 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpFqOv5z4WKps64GlQS4ytw "HTTP/1.1 200 OK"
Nov 11 15:54:00 impressed-jade.ptr.network python[2791682]: 2026-11-11 15:54:00,708 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC-2Cj6KlR9rCfR28zNLmOTA "HTTP/1.1 200 OK"
Nov 11 15:54:00 impressed-jade.ptr.network python[2791682]: 2026-11-11 15:54:00,719 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCWJ2lWNubArHWmf3FIHbfcQ "HTTP/1.1 200 OK"
Nov 11 15:54:00 impressed-jade.ptr.network python[2791682]: 2026-11-11 15:54:00,737 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCqFMzb-4AUf6WAIbl132QKA "HTTP/1.1 200 OK"
Nov 11 15:54:00 impressed-jade.ptr.network python[2791682]: 2026-11-11 15:54:00,790 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCwJ3S2Ix7aI1BhHexDJlmEg "HTTP/1.1 200 OK"
Nov 11 15:54:00 impressed-jade.ptr.network python[2791682]: 2026-11-11 15:54:00,803 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCTv-XvfzLX3i4IGWAm4sbmA "HTTP/1.1 200 OK"
Nov 11 15:54:00 impressed-jade.ptr.network python[2791682]: 2026-11-11 15:54:00,881 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCxfPjORdISQSn2fV8tcVmgA "HTTP/1.1 200 OK"
Nov 11 15:54:00 impressed-jade.ptr.network python[2791682]: 2026-11-11 15:54:00,894 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCQsH5XtIc9hONE1BQjucM0g "HTTP/1.1 200 OK"
Nov 11 15:54:00 impressed-jade.ptr.network python[2791682]: 2026-11-11 15:54:00,915 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC6UL29enLNe4mqwTfAyeNuw "HTTP/1.1 200 OK"
Nov 11 15:54:00 impressed-jade.ptr.network python[2791682]: 2026-11-11 15:54:00,985 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpryVRk_VDudG8SHXgWcG0w "HTTP/1.1 200 OK"
Nov 11 15:54:01 impressed-jade.ptr.network python[2791682]: 2026-11-11 15:54:01,010 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCyGa1YEx9ST66rYrJTGIKOw "HTTP/1.1 200 OK"
Nov 11 15:54:01 impressed-jade.ptr.network python[2791682]: 2026-11-11 15:54:01,482 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 15:54:01 impressed-jade.ptr.network python[2791682]: 2026-11-11 15:54:01,943 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 15:54:02 impressed-jade.ptr.network python[2791682]: 2026-11-11 15:54:02,472 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 15:54:12 impressed-jade.ptr.network python[2791682]: 2026-11-11 15:54:12,763 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 15:54:13 impressed-jade.ptr.network python[2791682]: 2026-11-11 15:54:13,393 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 15:54:14 impressed-jade.ptr.network python[2791682]: 2026-11-11 15:54:14,018 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 15:54:14 impressed-jade.ptr.network python[2791682]: 2026-11-11 15:54:14,666 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 15:54:15 impressed-jade.ptr.network python[2791682]: 2026-11-11 15:54:15,298 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 15:54:15 impressed-jade.ptr.network python[2791682]: 2026-11-11 15:54:15,919 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 15:54:26 impressed-jade.ptr.network python[2791682]: 2026-11-11 15:54:26,743 INFO HTTP Request: GET https://www.maxbet.rs/live/init/sr "HTTP/1.1 200 OK"
Nov 11 15:54:27 impressed-jade.ptr.network python[2791682]: 2026-11-11 15:54:27,003 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 15:54:27 impressed-jade.ptr.network python[2791682]: 2026-11-11 15:54:27,641 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 15:54:28 impressed-jade.ptr.network python[2791682]: 2026-11-11 15:54:28,284 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 15:54:28 impressed-jade.ptr.network python[2791682]: 2026-11-11 15:54:28,939 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
--- api log ---
Nov 11 15:53:54 impressed-jade.ptr.network systemd[1]: Started zicer-api.service - Zicer API.
Nov 11 15:53:55 impressed-jade.ptr.network uvicorn[2791690]: INFO:     Uvicorn running on http://127.0.0.1:8790 (Press CTRL+C to quit)
Nov 11 15:53:55 impressed-jade.ptr.network uvicorn[2791690]: INFO:     Started parent process [2791690]
Nov 11 15:53:57 impressed-jade.ptr.network uvicorn[2791694]: INFO:     Started server process [2791694]
Nov 11 15:53:57 impressed-jade.ptr.network uvicorn[2791694]: INFO:     Waiting for application startup.
Nov 11 15:53:57 impressed-jade.ptr.network uvicorn[2791694]: INFO:     Application startup complete.
Nov 11 15:53:57 impressed-jade.ptr.network uvicorn[2791693]: INFO:     Started server process [2791693]
Nov 11 15:53:57 impressed-jade.ptr.network uvicorn[2791693]: INFO:     Waiting for application startup.
Nov 11 15:53:57 impressed-jade.ptr.network uvicorn[2791693]: INFO:     Application startup complete.
Nov 11 15:53:59 impressed-jade.ptr.network uvicorn[2791693]: INFO:     109.92.227.130:0 - "GET /api/bookmakers HTTP/1.0" 200 OK
Nov 11 15:54:14 impressed-jade.ptr.network uvicorn[2791693]: INFO:     109.92.227.130:0 - "GET /api/me/watch?ids= HTTP/1.0" 200 OK
Nov 11 15:54:27 impressed-jade.ptr.network uvicorn[2791694]: INFO:     127.0.0.1:38544 - "GET /api/health HTTP/1.1" 200 OK
Nov 11 15:54:27 impressed-jade.ptr.network uvicorn[2791694]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 15:54:27 impressed-jade.ptr.network uvicorn[2791693]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 15:54:28 impressed-jade.ptr.network uvicorn[2791693]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
