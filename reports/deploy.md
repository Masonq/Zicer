# Zicer deploy 2026-11-11 10:28 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: 31b0bde Десктоп: все горизонтальные ленты листаются колесом мыши и перетаскиванием (обзоры, виды спорта, фильтры, ставки, широкие таблицы); у лент обзоров и видов спорта стрелки по краям

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
2026/11/11 13:28:16 [warn] 2596088#2596088: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/11 13:28:16 [warn] 2596088#2596088: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/11 13:28:16 [warn] 2596088#2596088: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/11 13:28:16 [warn] 2596088#2596088: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/11 13:28:16 [warn] 2596088#2596088: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/11 13:28:16 [warn] 2596088#2596088: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
matches: {'basketball': 702, 'waterpolo': 4, 'tennis': 23, 'hockey': 46, 'volleyball': 29, 'football': 1100}
football_live | 2026-11-11 10:27:51.088537 | live upserted 1 | 
tg_poll | 2026-11-11 10:27:59.950903 | no token | 
football | 2026-11-11 10:28:09.725134 | football upserted 97 |  "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
basketball | 2026-11-11 10:28:11.654822 | basketball upserted 414 | 
basketball_week | 2026-11-11 10:28:12.394466 | nba week upserted 48 | 
other_sports | 2026-11-11 10:28:12.776512 | other sports new 0 | 
backfill | 2026-11-11 10:28:12.782360 | already | 
logos | 2026-11-11 10:28:12.865345 | logos: nothing to do | 
highlights | 2026-11-11 10:28:13.374890 | highlights +0 | 
odds | 2026-11-11 10:28:14.972180 | odds matched 71 | 
settle | 2026-11-11 10:28:14.991655 | settled 0 | 
xfeed | 2026-11-11 10:28:28.841494 | xfeed games 164, linked 0, updated 2 | 
live | 2026-11-11 10:28:39.125403 | live updated 2 | 
maxbet_results | 2026-11-11 10:25:30.299895 | no pending | 
other_results | 2026-11-11 10:25:31.675690 | other results 2 | 
trends | 2026-11-10 23:36:09.974574 | trends 11 | 
analysis | 2026-11-10 23:36:10.199323 | analysis 27 | 
names | 2026-11-11 10:23:23.806147 | names 0 | 
tg_reminders | 2026-11-11 10:23:23.897158 | no token | 
finish_stale | 2026-11-11 10:27:08.871217 | finished 0 | 
--- worker log ---
Nov 11 13:28:13 impressed-jade.ptr.network python[2595757]: 2026-11-11 13:28:13,061 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC-2Cj6KlR9rCfR28zNLmOTA "HTTP/1.1 200 OK"
Nov 11 13:28:13 impressed-jade.ptr.network python[2595757]: 2026-11-11 13:28:13,071 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCWJ2lWNubArHWmf3FIHbfcQ "HTTP/1.1 200 OK"
Nov 11 13:28:13 impressed-jade.ptr.network python[2595757]: 2026-11-11 13:28:13,088 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCqFMzb-4AUf6WAIbl132QKA "HTTP/1.1 200 OK"
Nov 11 13:28:13 impressed-jade.ptr.network python[2595757]: 2026-11-11 13:28:13,103 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCwJ3S2Ix7aI1BhHexDJlmEg "HTTP/1.1 200 OK"
Nov 11 13:28:13 impressed-jade.ptr.network python[2595757]: 2026-11-11 13:28:13,114 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCTv-XvfzLX3i4IGWAm4sbmA "HTTP/1.1 200 OK"
Nov 11 13:28:13 impressed-jade.ptr.network python[2595757]: 2026-11-11 13:28:13,195 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCxfPjORdISQSn2fV8tcVmgA "HTTP/1.1 200 OK"
Nov 11 13:28:13 impressed-jade.ptr.network python[2595757]: 2026-11-11 13:28:13,208 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCQsH5XtIc9hONE1BQjucM0g "HTTP/1.1 200 OK"
Nov 11 13:28:13 impressed-jade.ptr.network python[2595757]: 2026-11-11 13:28:13,229 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC6UL29enLNe4mqwTfAyeNuw "HTTP/1.1 200 OK"
Nov 11 13:28:13 impressed-jade.ptr.network python[2595757]: 2026-11-11 13:28:13,326 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpryVRk_VDudG8SHXgWcG0w "HTTP/1.1 200 OK"
Nov 11 13:28:13 impressed-jade.ptr.network python[2595757]: 2026-11-11 13:28:13,351 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCyGa1YEx9ST66rYrJTGIKOw "HTTP/1.1 200 OK"
Nov 11 13:28:13 impressed-jade.ptr.network python[2595757]: 2026-11-11 13:28:13,900 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 13:28:14 impressed-jade.ptr.network python[2595757]: 2026-11-11 13:28:14,426 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 13:28:14 impressed-jade.ptr.network python[2595757]: 2026-11-11 13:28:14,866 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 13:28:25 impressed-jade.ptr.network python[2595757]: 2026-11-11 13:28:25,095 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 13:28:25 impressed-jade.ptr.network python[2595757]: 2026-11-11 13:28:25,725 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 13:28:26 impressed-jade.ptr.network python[2595757]: 2026-11-11 13:28:26,353 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 13:28:26 impressed-jade.ptr.network python[2595757]: 2026-11-11 13:28:26,982 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 13:28:27 impressed-jade.ptr.network python[2595757]: 2026-11-11 13:28:27,604 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 13:28:28 impressed-jade.ptr.network python[2595757]: 2026-11-11 13:28:28,223 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 13:28:38 impressed-jade.ptr.network python[2595757]: 2026-11-11 13:28:38,973 INFO HTTP Request: GET https://www.maxbet.rs/live/init/sr "HTTP/1.1 200 OK"
Nov 11 13:28:39 impressed-jade.ptr.network python[2595757]: 2026-11-11 13:28:39,233 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 13:28:39 impressed-jade.ptr.network python[2595757]: 2026-11-11 13:28:39,862 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 13:28:40 impressed-jade.ptr.network python[2595757]: 2026-11-11 13:28:40,489 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 13:28:41 impressed-jade.ptr.network python[2595757]: 2026-11-11 13:28:41,119 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 13:28:41 impressed-jade.ptr.network python[2595757]: 2026-11-11 13:28:41,747 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
--- api log ---
Nov 11 13:28:07 impressed-jade.ptr.network systemd[1]: zicer-api.service: Consumed 10.994s CPU time, 179.8M memory peak, 19.1M memory swap peak.
Nov 11 13:28:07 impressed-jade.ptr.network systemd[1]: Started zicer-api.service - Zicer API.
Nov 11 13:28:07 impressed-jade.ptr.network uvicorn[2595797]: INFO:     Uvicorn running on http://127.0.0.1:8790 (Press CTRL+C to quit)
Nov 11 13:28:07 impressed-jade.ptr.network uvicorn[2595797]: INFO:     Started parent process [2595797]
Nov 11 13:28:09 impressed-jade.ptr.network uvicorn[2595803]: INFO:     Started server process [2595803]
Nov 11 13:28:09 impressed-jade.ptr.network uvicorn[2595803]: INFO:     Waiting for application startup.
Nov 11 13:28:09 impressed-jade.ptr.network uvicorn[2595803]: INFO:     Application startup complete.
Nov 11 13:28:09 impressed-jade.ptr.network uvicorn[2595804]: INFO:     Started server process [2595804]
Nov 11 13:28:09 impressed-jade.ptr.network uvicorn[2595804]: INFO:     Waiting for application startup.
Nov 11 13:28:09 impressed-jade.ptr.network uvicorn[2595804]: INFO:     Application startup complete.
Nov 11 13:28:30 impressed-jade.ptr.network uvicorn[2595804]: INFO:     109.92.227.130:0 - "GET /api/home?tz=180&sport=all HTTP/1.0" 200 OK
Nov 11 13:28:40 impressed-jade.ptr.network uvicorn[2595804]: INFO:     127.0.0.1:49758 - "GET /api/health HTTP/1.1" 200 OK
Nov 11 13:28:40 impressed-jade.ptr.network uvicorn[2595804]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 13:28:40 impressed-jade.ptr.network uvicorn[2595804]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 13:28:41 impressed-jade.ptr.network uvicorn[2595804]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
