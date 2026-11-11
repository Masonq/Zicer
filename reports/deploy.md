# Zicer deploy 2026-11-11 17:49 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: 80cc542 Матч-центр: розыгрыш у видов с сеткой не замирает — если новое очко не пришло за 6 с (и это не перерыв), подача повторяется

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
2026/11/11 20:48:51 [warn] 3188309#3188309: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/11 20:48:51 [warn] 3188309#3188309: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/11 20:48:51 [warn] 3188309#3188309: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/11 20:48:51 [warn] 3188309#3188309: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/11 20:48:51 [warn] 3188309#3188309: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/11 20:48:51 [warn] 3188309#3188309: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
matches: {'basketball': 707, 'esports': 58, 'football': 1100, 'handball': 44, 'hockey': 52, 'tabletennis': 186, 'tennis': 23, 'volleyball': 39, 'waterpolo': 7}
backfill | 2026-11-11 17:48:48.894035 | already | 
logos | 2026-11-11 17:48:48.992860 | logos: nothing to do | 
highlights | 2026-11-11 17:48:49.416098 | highlights +0 | 
x22_line | 2026-11-11 17:48:56.131512 | x22 line new 0, fetched {'futsal': '0'} | 
odds | 2026-11-11 17:48:57.316910 | odds matched 71 | 
settle | 2026-11-11 17:48:57.341331 | settled 0 | 
xfeed | 2026-11-11 17:49:10.962479 | xfeed empty (22bet.ug http 308) | 
maxbet_results | 2026-11-11 17:45:53.940860 | maxbet results 12 | 
other_results | 2026-11-11 17:46:04.853560 | other results 55 | 
social | 2026-11-11 17:46:45.518323 | social nothing due (test) | 
trends | 2026-11-10 23:36:09.974574 | trends 11 | 
names | 2026-11-11 17:47:50.909044 | names 0 | 
analysis | 2026-11-10 23:36:10.199323 | analysis 27 | 
tg_reminders | 2026-11-11 17:47:51.368567 | no token | 
pandascore | 2026-11-11 16:06:16.134963 | pandascore new 0, updated 58, finished 0 | nv/lib/python3.12/site-packages/sqlalchemy/engine/base.py", line 1986, in _exec_single_context
football_live | 2026-11-11 17:48:07.965390 | live upserted 0 | 
finish_stale | 2026-11-11 17:48:20.603190 | finished 0 | 
tg_poll | 2026-11-11 17:48:36.631866 | no token | 
live | 2026-11-11 17:48:42.319972 | live updated 41 | 
basketball | 2026-11-11 17:48:47.295454 | basketball upserted 414 | 
basketball_week | 2026-11-11 17:48:48.275427 | nba week upserted 48 | 
other_sports | 2026-11-11 17:48:48.888290 | other sports new 0 | 
football | 2026-11-11 17:48:45.399070 | football upserted 96 |  "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
--- worker log ---
Nov 11 20:48:48 impressed-jade.ptr.network python[3187970]: 2026-11-11 20:48:48,245 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261118 "HTTP/1.1 200 OK"
Nov 11 20:48:48 impressed-jade.ptr.network python[3187970]: 2026-11-11 20:48:48,399 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/H/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 20:48:48 impressed-jade.ptr.network python[3187970]: 2026-11-11 20:48:48,532 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/T/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 20:48:48 impressed-jade.ptr.network python[3187970]: 2026-11-11 20:48:48,586 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/V/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 20:48:48 impressed-jade.ptr.network python[3187970]: 2026-11-11 20:48:48,654 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/W/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 20:48:48 impressed-jade.ptr.network python[3187970]: 2026-11-11 20:48:48,708 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/HB/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 20:48:48 impressed-jade.ptr.network python[3187970]: 2026-11-11 20:48:48,791 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/TT/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 20:48:49 impressed-jade.ptr.network python[3187970]: 2026-11-11 20:48:49,158 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpFqOv5z4WKps64GlQS4ytw "HTTP/1.1 200 OK"
Nov 11 20:48:49 impressed-jade.ptr.network python[3187970]: 2026-11-11 20:48:49,221 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC-2Cj6KlR9rCfR28zNLmOTA "HTTP/1.1 200 OK"
Nov 11 20:48:49 impressed-jade.ptr.network python[3187970]: 2026-11-11 20:48:49,231 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCWJ2lWNubArHWmf3FIHbfcQ "HTTP/1.1 200 OK"
Nov 11 20:48:49 impressed-jade.ptr.network python[3187970]: 2026-11-11 20:48:49,247 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCqFMzb-4AUf6WAIbl132QKA "HTTP/1.1 200 OK"
Nov 11 20:48:49 impressed-jade.ptr.network python[3187970]: 2026-11-11 20:48:49,259 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCwJ3S2Ix7aI1BhHexDJlmEg "HTTP/1.1 200 OK"
Nov 11 20:48:49 impressed-jade.ptr.network python[3187970]: 2026-11-11 20:48:49,269 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCTv-XvfzLX3i4IGWAm4sbmA "HTTP/1.1 200 OK"
Nov 11 20:48:49 impressed-jade.ptr.network python[3187970]: 2026-11-11 20:48:49,329 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCxfPjORdISQSn2fV8tcVmgA "HTTP/1.1 200 OK"
Nov 11 20:48:49 impressed-jade.ptr.network python[3187970]: 2026-11-11 20:48:49,339 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCQsH5XtIc9hONE1BQjucM0g "HTTP/1.1 200 OK"
Nov 11 20:48:49 impressed-jade.ptr.network python[3187970]: 2026-11-11 20:48:49,355 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC6UL29enLNe4mqwTfAyeNuw "HTTP/1.1 200 OK"
Nov 11 20:48:49 impressed-jade.ptr.network python[3187970]: 2026-11-11 20:48:49,375 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpryVRk_VDudG8SHXgWcG0w "HTTP/1.1 200 OK"
Nov 11 20:48:49 impressed-jade.ptr.network python[3187970]: 2026-11-11 20:48:49,396 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCyGa1YEx9ST66rYrJTGIKOw "HTTP/1.1 200 OK"
Nov 11 20:48:49 impressed-jade.ptr.network python[3187970]: 2026-11-11 20:48:49,534 INFO HTTP Request: GET https://22bet.com/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 20:48:49 impressed-jade.ptr.network python[3187970]: 2026-11-11 20:48:49,772 INFO HTTP Request: GET https://22bet.co.ke/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 20:48:49 impressed-jade.ptr.network python[3187970]: 2026-11-11 20:48:49,841 INFO HTTP Request: GET https://22bet.ng/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 20:48:56 impressed-jade.ptr.network python[3187970]: 2026-11-11 20:48:56,130 INFO HTTP Request: GET https://22bet.ug/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 20:48:56 impressed-jade.ptr.network python[3187970]: 2026-11-11 20:48:56,291 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 20:48:56 impressed-jade.ptr.network python[3187970]: 2026-11-11 20:48:56,754 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 20:48:57 impressed-jade.ptr.network python[3187970]: 2026-11-11 20:48:57,217 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
--- api log ---
Nov 11 20:48:55 impressed-jade.ptr.network uvicorn[3187976]: INFO:     109.92.227.130:0 - "POST /api/t HTTP/1.0" 200 OK
Nov 11 20:48:55 impressed-jade.ptr.network uvicorn[3187975]: INFO:     109.92.227.130:0 - "GET /api/matches/2027/center HTTP/1.0" 200 OK
Nov 11 20:48:55 impressed-jade.ptr.network uvicorn[3187975]: INFO:     109.92.227.130:0 - "GET /api/matches/2027 HTTP/1.0" 200 OK
Nov 11 20:49:00 impressed-jade.ptr.network uvicorn[3187975]: INFO:     109.92.227.130:0 - "GET /api/sports?tz=180 HTTP/1.0" 200 OK
Nov 11 20:49:00 impressed-jade.ptr.network uvicorn[3187975]: INFO:     109.92.227.130:0 - "POST /api/t HTTP/1.0" 200 OK
Nov 11 20:49:00 impressed-jade.ptr.network uvicorn[3187976]: INFO:     109.92.227.130:0 - "GET /api/home?tz=180&sport=tabletennis HTTP/1.0" 200 OK
Nov 11 20:49:03 impressed-jade.ptr.network uvicorn[3187975]: INFO:     109.92.227.130:0 - "GET /api/matches/2025/center HTTP/1.0" 200 OK
Nov 11 20:49:03 impressed-jade.ptr.network uvicorn[3187976]: INFO:     109.92.227.130:0 - "POST /api/t HTTP/1.0" 200 OK
Nov 11 20:49:03 impressed-jade.ptr.network uvicorn[3187975]: INFO:     109.92.227.130:0 - "GET /api/matches/2025 HTTP/1.0" 200 OK
Nov 11 20:49:06 impressed-jade.ptr.network uvicorn[3187976]: INFO:     109.92.227.130:0 - "GET /api/me/watch?ids=1858 HTTP/1.0" 200 OK
Nov 11 20:49:13 impressed-jade.ptr.network uvicorn[3187975]: INFO:     109.92.227.130:0 - "GET /api/matches/2025/center HTTP/1.0" 200 OK
Nov 11 20:49:15 impressed-jade.ptr.network uvicorn[3187975]: INFO:     127.0.0.1:33382 - "GET /api/health HTTP/1.1" 200 OK
Nov 11 20:49:15 impressed-jade.ptr.network uvicorn[3187975]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 20:49:15 impressed-jade.ptr.network uvicorn[3187976]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 20:49:15 impressed-jade.ptr.network uvicorn[3187976]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
