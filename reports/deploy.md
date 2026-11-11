# Zicer deploy 2026-11-11 16:16 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: 857baf2 Матч-центр 3D (как Sportradar LMT) для футбола и тенниса: стадион с трибунами и болельщиками, светодиодные борта, газон с полосами и разметкой IFAB, ворота с сеткой, угловые флажки, теннисный корт ITF с сеткой и стойками, прожекторы и тени, мяч с тенью и высотой, путь мяча (в теннисе дуга полёта), зона атаки на поле, карточка события «Атака/Опасная атака» слева внизу, имена теннисистов в углах с подачей; 3D загружается отдельно, на устройствах без WebGL — прежний вид

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
2026/11/11 19:16:31 [warn] 3063465#3063465: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/11 19:16:31 [warn] 3063465#3063465: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/11 19:16:31 [warn] 3063465#3063465: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/11 19:16:31 [warn] 3063465#3063465: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/11 19:16:31 [warn] 3063465#3063465: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/11 19:16:31 [warn] 3063465#3063465: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
matches: {'esports': 58, 'hockey': 52, 'volleyball': 33, 'tabletennis': 142, 'handball': 44, 'basketball': 707, 'waterpolo': 7, 'tennis': 23, 'football': 1100}
social | 2026-11-11 16:15:03.634779 | social nothing due (test) | 
maxbet_results | 2026-11-11 16:15:07.408916 | maxbet results 1 | 
other_results | 2026-11-11 16:15:11.921295 | other results 15 | 
finish_stale | 2026-11-11 16:15:48.384874 | finished 0 | 
tg_poll | 2026-11-11 16:15:57.331818 | no token | 
live | 2026-11-11 16:16:02.643037 | live updated 8 | 
football_live | 2026-11-11 16:16:11.629739 | live upserted 0 | 
basketball | 2026-11-11 16:16:27.371140 | basketball upserted 414 | 
basketball_week | 2026-11-11 16:16:28.340321 | nba week upserted 48 | 
other_sports | 2026-11-11 16:16:28.913323 | other sports new 0 | 
backfill | 2026-11-11 16:16:28.917921 | already | 
logos | 2026-11-11 16:16:29.018298 | logos: nothing to do | 
highlights | 2026-11-11 16:16:29.478268 | highlights +0 | 
x22_line | 2026-11-11 16:16:36.255530 | x22 line new 0, fetched {'futsal': '0'} | 
odds | 2026-11-11 16:16:37.247357 | odds matched 72 | 
settle | 2026-11-11 16:16:37.274271 | settled 0 | 
xfeed | 2026-11-11 16:16:50.898381 | xfeed empty (22bet.ug http 308) | 
pandascore | 2026-11-11 16:06:16.134963 | pandascore new 0, updated 58, finished 0 |  ^^^^^^^^^^^^^^^^^^^^^^
names | 2026-11-11 16:12:50.640178 | names 0 | 
tg_reminders | 2026-11-11 16:12:51.196220 | no token | 
trends | 2026-11-10 23:36:09.974574 | trends 11 | 
analysis | 2026-11-10 23:36:10.199323 | analysis 27 | 
football | 2026-11-11 16:16:25.459102 | football upserted 96 |  "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
--- worker log ---
Nov 11 19:16:28 impressed-jade.ptr.network python[3063167]: 2026-11-11 19:16:28,308 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261118 "HTTP/1.1 200 OK"
Nov 11 19:16:28 impressed-jade.ptr.network python[3063167]: 2026-11-11 19:16:28,439 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/H/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 19:16:28 impressed-jade.ptr.network python[3063167]: 2026-11-11 19:16:28,519 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/T/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 19:16:28 impressed-jade.ptr.network python[3063167]: 2026-11-11 19:16:28,580 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/V/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 19:16:28 impressed-jade.ptr.network python[3063167]: 2026-11-11 19:16:28,674 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/W/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 19:16:28 impressed-jade.ptr.network python[3063167]: 2026-11-11 19:16:28,734 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/HB/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 19:16:28 impressed-jade.ptr.network python[3063167]: 2026-11-11 19:16:28,818 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/TT/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 19:16:29 impressed-jade.ptr.network python[3063167]: 2026-11-11 19:16:29,152 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpFqOv5z4WKps64GlQS4ytw "HTTP/1.1 200 OK"
Nov 11 19:16:29 impressed-jade.ptr.network python[3063167]: 2026-11-11 19:16:29,204 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC-2Cj6KlR9rCfR28zNLmOTA "HTTP/1.1 200 OK"
Nov 11 19:16:29 impressed-jade.ptr.network python[3063167]: 2026-11-11 19:16:29,216 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCWJ2lWNubArHWmf3FIHbfcQ "HTTP/1.1 200 OK"
Nov 11 19:16:29 impressed-jade.ptr.network python[3063167]: 2026-11-11 19:16:29,231 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCqFMzb-4AUf6WAIbl132QKA "HTTP/1.1 200 OK"
Nov 11 19:16:29 impressed-jade.ptr.network python[3063167]: 2026-11-11 19:16:29,250 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCwJ3S2Ix7aI1BhHexDJlmEg "HTTP/1.1 200 OK"
Nov 11 19:16:29 impressed-jade.ptr.network python[3063167]: 2026-11-11 19:16:29,266 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCTv-XvfzLX3i4IGWAm4sbmA "HTTP/1.1 200 OK"
Nov 11 19:16:29 impressed-jade.ptr.network python[3063167]: 2026-11-11 19:16:29,329 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCxfPjORdISQSn2fV8tcVmgA "HTTP/1.1 200 OK"
Nov 11 19:16:29 impressed-jade.ptr.network python[3063167]: 2026-11-11 19:16:29,349 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCQsH5XtIc9hONE1BQjucM0g "HTTP/1.1 200 OK"
Nov 11 19:16:29 impressed-jade.ptr.network python[3063167]: 2026-11-11 19:16:29,420 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC6UL29enLNe4mqwTfAyeNuw "HTTP/1.1 200 OK"
Nov 11 19:16:29 impressed-jade.ptr.network python[3063167]: 2026-11-11 19:16:29,440 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpryVRk_VDudG8SHXgWcG0w "HTTP/1.1 200 OK"
Nov 11 19:16:29 impressed-jade.ptr.network python[3063167]: 2026-11-11 19:16:29,461 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCyGa1YEx9ST66rYrJTGIKOw "HTTP/1.1 200 OK"
Nov 11 19:16:29 impressed-jade.ptr.network python[3063167]: 2026-11-11 19:16:29,590 INFO HTTP Request: GET https://22bet.com/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 19:16:29 impressed-jade.ptr.network python[3063167]: 2026-11-11 19:16:29,850 INFO HTTP Request: GET https://22bet.co.ke/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 19:16:29 impressed-jade.ptr.network python[3063167]: 2026-11-11 19:16:29,928 INFO HTTP Request: GET https://22bet.ng/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 19:16:36 impressed-jade.ptr.network python[3063167]: 2026-11-11 19:16:36,254 INFO HTTP Request: GET https://22bet.ug/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 19:16:36 impressed-jade.ptr.network python[3063167]: 2026-11-11 19:16:36,443 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 19:16:36 impressed-jade.ptr.network python[3063167]: 2026-11-11 19:16:36,625 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 19:16:37 impressed-jade.ptr.network python[3063167]: 2026-11-11 19:16:37,102 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
--- api log ---
Nov 11 19:16:27 impressed-jade.ptr.network uvicorn[3063215]: INFO:     109.92.227.130:0 - "GET /api/matches/1859/center HTTP/1.0" 200 OK
Nov 11 19:16:27 impressed-jade.ptr.network uvicorn[3063214]: INFO:     109.92.227.130:0 - "GET /api/home?tz=180&sport=esports HTTP/1.0" 200 OK
Nov 11 19:16:34 impressed-jade.ptr.network uvicorn[3063215]: INFO:     109.92.227.130:0 - "GET /api/matches/1859/center HTTP/1.0" 200 OK
Nov 11 19:16:38 impressed-jade.ptr.network uvicorn[3063214]: INFO:     109.92.227.130:0 - "GET /api/sports?tz=180 HTTP/1.0" 200 OK
Nov 11 19:16:41 impressed-jade.ptr.network uvicorn[3063215]: INFO:     109.92.227.130:0 - "GET /api/matches/1859/center HTTP/1.0" 200 OK
Nov 11 19:16:43 impressed-jade.ptr.network uvicorn[3063215]: INFO:     109.92.227.130:0 - "GET /api/clubs/battle?sport=football HTTP/1.0" 200 OK
Nov 11 19:16:43 impressed-jade.ptr.network uvicorn[3063214]: INFO:     109.92.227.130:0 - "GET /api/me/watch?ids= HTTP/1.0" 200 OK
Nov 11 19:16:46 impressed-jade.ptr.network uvicorn[3063214]: INFO:     109.92.227.130:0 - "GET /api/matches/1859 HTTP/1.0" 200 OK
Nov 11 19:16:48 impressed-jade.ptr.network uvicorn[3063214]: INFO:     109.92.227.130:0 - "GET /api/matches/1859/center HTTP/1.0" 200 OK
Nov 11 19:16:55 impressed-jade.ptr.network uvicorn[3063214]: INFO:     109.92.227.130:0 - "GET /api/matches/1859/center HTTP/1.0" 200 OK
Nov 11 19:16:55 impressed-jade.ptr.network uvicorn[3063214]: INFO:     109.92.227.130:0 - "GET /api/me/watch?ids= HTTP/1.0" 200 OK
Nov 11 19:16:56 impressed-jade.ptr.network uvicorn[3063214]: INFO:     127.0.0.1:54292 - "GET /api/health HTTP/1.1" 200 OK
Nov 11 19:16:56 impressed-jade.ptr.network uvicorn[3063215]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 19:16:56 impressed-jade.ptr.network uvicorn[3063214]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 19:16:56 impressed-jade.ptr.network uvicorn[3063214]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
