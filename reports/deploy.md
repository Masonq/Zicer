# Zicer deploy 2026-11-11 19:12 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: 8150fc8 Баскетбол: тикающее время четверти из лайв-ленты вместо застывшего времени последнего эпизода

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
2026/11/11 22:12:32 [warn] 3298696#3298696: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/11 22:12:32 [warn] 3298696#3298696: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/11 22:12:32 [warn] 3298696#3298696: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/11 22:12:32 [warn] 3298696#3298696: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/11 22:12:32 [warn] 3298696#3298696: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/11 22:12:32 [warn] 3298696#3298696: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
matches: {'esports': 58, 'hockey': 52, 'volleyball': 39, 'tabletennis': 186, 'basketball': 709, 'handball': 45, 'waterpolo': 7, 'tennis': 25, 'football': 1100}
names | 2026-11-11 19:11:15.027136 | names 0 | 
tg_reminders | 2026-11-11 19:11:15.630647 | no token | 
pandascore | 2026-11-11 16:06:16.134963 | pandascore new 0, updated 58, finished 0 | le "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/engine/base.py", line 1986, in _exec_single_context
finish_stale | 2026-11-11 19:11:50.170905 | finished 0 | 
tg_poll | 2026-11-11 19:11:50.191671 | no token | 
football_live | 2026-11-11 19:11:55.302352 | live upserted 0 | 
live | 2026-11-11 19:11:56.850875 | live updated 39 | 
maxbet_results | 2026-11-11 19:12:18.535209 | maxbet results 11 | 
basketball | 2026-11-11 19:12:29.349667 | basketball upserted 412 | 
basketball_week | 2026-11-11 19:12:30.354128 | nba week upserted 48 | 
other_sports | 2026-11-11 19:12:31.136875 | other sports new 0 | 
backfill | 2026-11-11 19:12:31.145409 | already | 
logos | 2026-11-11 19:12:31.251248 | logos: nothing to do | 
highlights | 2026-11-11 19:12:31.875380 | highlights +0 | 
x22_line | 2026-11-11 19:12:39.016838 | x22 line new 0, fetched {'futsal': '0'} | 
odds | 2026-11-11 19:12:42.037998 | odds matched 68 | 
settle | 2026-11-11 19:12:42.203020 | settled 0 | 
xfeed | 2026-11-11 19:12:55.854258 | xfeed empty (22bet.ug http 308) | 
other_results | 2026-11-11 19:09:28.147240 | other results 70 | 
trends | 2026-11-10 23:36:09.974574 | trends 11 | 
analysis | 2026-11-10 23:36:10.199323 | analysis 27 | 
social | 2026-11-11 19:10:17.678118 | social nothing due (test) | 
football | 2026-11-11 19:12:27.190012 | football upserted 96 |  "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
--- worker log ---
Nov 11 22:12:30 impressed-jade.ptr.network python[3298368]: 2026-11-11 22:12:30,305 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261118 "HTTP/1.1 200 OK"
Nov 11 22:12:30 impressed-jade.ptr.network python[3298368]: 2026-11-11 22:12:30,503 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/H/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 22:12:30 impressed-jade.ptr.network python[3298368]: 2026-11-11 22:12:30,646 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/T/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 22:12:30 impressed-jade.ptr.network python[3298368]: 2026-11-11 22:12:30,743 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/V/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 22:12:30 impressed-jade.ptr.network python[3298368]: 2026-11-11 22:12:30,847 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/W/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 22:12:30 impressed-jade.ptr.network python[3298368]: 2026-11-11 22:12:30,928 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/HB/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 22:12:31 impressed-jade.ptr.network python[3298368]: 2026-11-11 22:12:31,047 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/TT/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 22:12:31 impressed-jade.ptr.network python[3298368]: 2026-11-11 22:12:31,398 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpFqOv5z4WKps64GlQS4ytw "HTTP/1.1 200 OK"
Nov 11 22:12:31 impressed-jade.ptr.network python[3298368]: 2026-11-11 22:12:31,518 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC-2Cj6KlR9rCfR28zNLmOTA "HTTP/1.1 200 OK"
Nov 11 22:12:31 impressed-jade.ptr.network python[3298368]: 2026-11-11 22:12:31,530 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCWJ2lWNubArHWmf3FIHbfcQ "HTTP/1.1 200 OK"
Nov 11 22:12:31 impressed-jade.ptr.network python[3298368]: 2026-11-11 22:12:31,548 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCqFMzb-4AUf6WAIbl132QKA "HTTP/1.1 200 OK"
Nov 11 22:12:31 impressed-jade.ptr.network python[3298368]: 2026-11-11 22:12:31,625 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCwJ3S2Ix7aI1BhHexDJlmEg "HTTP/1.1 200 OK"
Nov 11 22:12:31 impressed-jade.ptr.network python[3298368]: 2026-11-11 22:12:31,646 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCTv-XvfzLX3i4IGWAm4sbmA "HTTP/1.1 200 OK"
Nov 11 22:12:31 impressed-jade.ptr.network python[3298368]: 2026-11-11 22:12:31,733 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCxfPjORdISQSn2fV8tcVmgA "HTTP/1.1 200 OK"
Nov 11 22:12:31 impressed-jade.ptr.network python[3298368]: 2026-11-11 22:12:31,749 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCQsH5XtIc9hONE1BQjucM0g "HTTP/1.1 200 OK"
Nov 11 22:12:31 impressed-jade.ptr.network python[3298368]: 2026-11-11 22:12:31,781 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC6UL29enLNe4mqwTfAyeNuw "HTTP/1.1 200 OK"
Nov 11 22:12:31 impressed-jade.ptr.network python[3298368]: 2026-11-11 22:12:31,815 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpryVRk_VDudG8SHXgWcG0w "HTTP/1.1 200 OK"
Nov 11 22:12:31 impressed-jade.ptr.network python[3298368]: 2026-11-11 22:12:31,851 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCyGa1YEx9ST66rYrJTGIKOw "HTTP/1.1 200 OK"
Nov 11 22:12:32 impressed-jade.ptr.network python[3298368]: 2026-11-11 22:12:32,215 INFO HTTP Request: GET https://22bet.com/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 22:12:32 impressed-jade.ptr.network python[3298368]: 2026-11-11 22:12:32,459 INFO HTTP Request: GET https://22bet.co.ke/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 22:12:32 impressed-jade.ptr.network python[3298368]: 2026-11-11 22:12:32,526 INFO HTTP Request: GET https://22bet.ng/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 22:12:39 impressed-jade.ptr.network python[3298368]: 2026-11-11 22:12:39,015 INFO HTTP Request: GET https://22bet.ug/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 22:12:40 impressed-jade.ptr.network python[3298368]: 2026-11-11 22:12:40,220 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 22:12:40 impressed-jade.ptr.network python[3298368]: 2026-11-11 22:12:40,686 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 22:12:41 impressed-jade.ptr.network python[3298368]: 2026-11-11 22:12:41,819 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
--- api log ---
Nov 11 22:12:23 impressed-jade.ptr.network systemd[1]: Stopped zicer-api.service - Zicer API.
Nov 11 22:12:23 impressed-jade.ptr.network systemd[1]: zicer-api.service: Consumed 9.535s CPU time, 675.9M memory peak, 26.6M memory swap peak.
Nov 11 22:12:23 impressed-jade.ptr.network systemd[1]: Started zicer-api.service - Zicer API.
Nov 11 22:12:23 impressed-jade.ptr.network uvicorn[3298370]: INFO:     Uvicorn running on http://127.0.0.1:8790 (Press CTRL+C to quit)
Nov 11 22:12:23 impressed-jade.ptr.network uvicorn[3298370]: INFO:     Started parent process [3298370]
Nov 11 22:12:27 impressed-jade.ptr.network uvicorn[3298374]: INFO:     Started server process [3298374]
Nov 11 22:12:27 impressed-jade.ptr.network uvicorn[3298374]: INFO:     Waiting for application startup.
Nov 11 22:12:27 impressed-jade.ptr.network uvicorn[3298374]: INFO:     Application startup complete.
Nov 11 22:12:27 impressed-jade.ptr.network uvicorn[3298373]: INFO:     Started server process [3298373]
Nov 11 22:12:27 impressed-jade.ptr.network uvicorn[3298373]: INFO:     Waiting for application startup.
Nov 11 22:12:28 impressed-jade.ptr.network uvicorn[3298373]: INFO:     Application startup complete.
Nov 11 22:12:57 impressed-jade.ptr.network uvicorn[3298374]: INFO:     127.0.0.1:54414 - "GET /api/health HTTP/1.1" 200 OK
Nov 11 22:12:57 impressed-jade.ptr.network uvicorn[3298373]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 22:12:58 impressed-jade.ptr.network uvicorn[3298373]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 22:12:58 impressed-jade.ptr.network uvicorn[3298373]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
