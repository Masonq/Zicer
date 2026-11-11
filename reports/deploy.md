# Zicer deploy 2026-11-11 13:03 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: 334cb48 Лайв-матчи видны сразу: красноватая подложка строки с красной полосой слева, пульсирующая точка «ЛАЙВ» под периодом, счёт красным; «К лайву» подсвечивает матч дольше (двойная вспышка ~3 с)

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
2026/11/11 16:03:32 [warn] 2805187#2805187: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/11 16:03:32 [warn] 2805187#2805187: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/11 16:03:32 [warn] 2805187#2805187: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/11 16:03:32 [warn] 2805187#2805187: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/11 16:03:32 [warn] 2805187#2805187: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/11 16:03:32 [warn] 2805187#2805187: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
live | 2026-11-11 13:03:56.004279 | live updated 3 | 
maxbet_results | 2026-11-11 13:01:30.459719 | no pending | 
tg_reminders | 2026-11-11 12:45:09.590618 | no token | 
other_results | 2026-11-11 13:01:34.110219 | other results 2 | 
names | 2026-11-11 12:53:53.380995 | names 0 | 
finish_stale | 2026-11-11 13:02:44.705185 | finished 0 | 
football_live | 2026-11-11 13:02:49.768526 | live upserted 1 | 
trends | 2026-11-10 23:36:09.974574 | trends 11 | 
tg_poll | 2026-11-11 13:03:07.828179 | no token | 
analysis | 2026-11-10 23:36:10.199323 | analysis 27 | 
basketball | 2026-11-11 13:03:28.096223 | basketball upserted 414 | 
basketball_week | 2026-11-11 13:03:29.335167 | nba week upserted 48 | 
other_sports | 2026-11-11 13:03:29.889926 | other sports new 0 | 
backfill | 2026-11-11 13:03:29.899216 | already | 
logos | 2026-11-11 13:03:30.085456 | logos: nothing to do | 
highlights | 2026-11-11 13:03:30.743523 | highlights +0 | 
odds | 2026-11-11 13:03:31.721994 | odds matched 70 | 
settle | 2026-11-11 13:03:31.748150 | settled 0 | 
xfeed | 2026-11-11 13:03:45.727405 | xfeed games 178, linked 0, updated 2 | 
football | 2026-11-11 13:03:26.158825 | football upserted 97 |  "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
--- worker log ---
Nov 11 16:03:30 impressed-jade.ptr.network python[2804805]: 2026-11-11 16:03:30,286 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpFqOv5z4WKps64GlQS4ytw "HTTP/1.1 200 OK"
Nov 11 16:03:30 impressed-jade.ptr.network python[2804805]: 2026-11-11 16:03:30,370 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC-2Cj6KlR9rCfR28zNLmOTA "HTTP/1.1 200 OK"
Nov 11 16:03:30 impressed-jade.ptr.network python[2804805]: 2026-11-11 16:03:30,379 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCWJ2lWNubArHWmf3FIHbfcQ "HTTP/1.1 200 OK"
Nov 11 16:03:30 impressed-jade.ptr.network python[2804805]: 2026-11-11 16:03:30,397 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCqFMzb-4AUf6WAIbl132QKA "HTTP/1.1 200 OK"
Nov 11 16:03:30 impressed-jade.ptr.network python[2804805]: 2026-11-11 16:03:30,413 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCwJ3S2Ix7aI1BhHexDJlmEg "HTTP/1.1 200 OK"
Nov 11 16:03:30 impressed-jade.ptr.network python[2804805]: 2026-11-11 16:03:30,426 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCTv-XvfzLX3i4IGWAm4sbmA "HTTP/1.1 200 OK"
Nov 11 16:03:30 impressed-jade.ptr.network python[2804805]: 2026-11-11 16:03:30,504 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCxfPjORdISQSn2fV8tcVmgA "HTTP/1.1 200 OK"
Nov 11 16:03:30 impressed-jade.ptr.network python[2804805]: 2026-11-11 16:03:30,525 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCQsH5XtIc9hONE1BQjucM0g "HTTP/1.1 200 OK"
Nov 11 16:03:30 impressed-jade.ptr.network python[2804805]: 2026-11-11 16:03:30,606 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC6UL29enLNe4mqwTfAyeNuw "HTTP/1.1 200 OK"
Nov 11 16:03:30 impressed-jade.ptr.network python[2804805]: 2026-11-11 16:03:30,688 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpryVRk_VDudG8SHXgWcG0w "HTTP/1.1 200 OK"
Nov 11 16:03:30 impressed-jade.ptr.network python[2804805]: 2026-11-11 16:03:30,716 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCyGa1YEx9ST66rYrJTGIKOw "HTTP/1.1 200 OK"
Nov 11 16:03:30 impressed-jade.ptr.network python[2804805]: 2026-11-11 16:03:30,902 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 16:03:31 impressed-jade.ptr.network python[2804805]: 2026-11-11 16:03:31,126 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 16:03:31 impressed-jade.ptr.network python[2804805]: 2026-11-11 16:03:31,596 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 16:03:41 impressed-jade.ptr.network python[2804805]: 2026-11-11 16:03:41,882 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 16:03:42 impressed-jade.ptr.network python[2804805]: 2026-11-11 16:03:42,512 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 16:03:43 impressed-jade.ptr.network python[2804805]: 2026-11-11 16:03:43,198 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 16:03:43 impressed-jade.ptr.network python[2804805]: 2026-11-11 16:03:43,843 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 16:03:44 impressed-jade.ptr.network python[2804805]: 2026-11-11 16:03:44,468 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 16:03:45 impressed-jade.ptr.network python[2804805]: 2026-11-11 16:03:45,096 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 16:03:55 impressed-jade.ptr.network python[2804805]: 2026-11-11 16:03:55,864 INFO HTTP Request: GET https://www.maxbet.rs/live/init/sr "HTTP/1.1 200 OK"
Nov 11 16:03:56 impressed-jade.ptr.network python[2804805]: 2026-11-11 16:03:56,098 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 16:03:56 impressed-jade.ptr.network python[2804805]: 2026-11-11 16:03:56,731 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 16:03:57 impressed-jade.ptr.network python[2804805]: 2026-11-11 16:03:57,354 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 16:03:57 impressed-jade.ptr.network python[2804805]: 2026-11-11 16:03:57,987 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
--- api log ---
Nov 11 16:03:24 impressed-jade.ptr.network uvicorn[2804855]: INFO:     Started parent process [2804855]
Nov 11 16:03:26 impressed-jade.ptr.network uvicorn[2804861]: INFO:     Started server process [2804861]
Nov 11 16:03:26 impressed-jade.ptr.network uvicorn[2804861]: INFO:     Waiting for application startup.
Nov 11 16:03:26 impressed-jade.ptr.network uvicorn[2804860]: INFO:     Started server process [2804860]
Nov 11 16:03:26 impressed-jade.ptr.network uvicorn[2804860]: INFO:     Waiting for application startup.
Nov 11 16:03:27 impressed-jade.ptr.network uvicorn[2804861]: INFO:     Application startup complete.
Nov 11 16:03:27 impressed-jade.ptr.network uvicorn[2804860]: INFO:     Application startup complete.
Nov 11 16:03:32 impressed-jade.ptr.network uvicorn[2804860]: INFO:     109.92.227.130:0 - "GET /api/me/watch?ids= HTTP/1.0" 200 OK
Nov 11 16:03:37 impressed-jade.ptr.network uvicorn[2804860]: INFO:     109.92.227.130:0 - "GET /api/home?tz=180&sport=all HTTP/1.0" 200 OK
Nov 11 16:03:52 impressed-jade.ptr.network uvicorn[2804860]: INFO:     109.92.227.130:0 - "GET /api/me/watch?ids= HTTP/1.0" 200 OK
Nov 11 16:03:52 impressed-jade.ptr.network uvicorn[2804861]: INFO:     109.92.227.130:0 - "GET /api/sports?tz=180 HTTP/1.0" 200 OK
Nov 11 16:03:56 impressed-jade.ptr.network uvicorn[2804860]: INFO:     127.0.0.1:41328 - "GET /api/health HTTP/1.1" 200 OK
Nov 11 16:03:56 impressed-jade.ptr.network uvicorn[2804860]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 16:03:56 impressed-jade.ptr.network uvicorn[2804860]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 16:03:57 impressed-jade.ptr.network uvicorn[2804860]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
