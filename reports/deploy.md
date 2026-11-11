# Zicer deploy 2026-11-11 16:41 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: 54ee72e 3D-матч-центр: вместо трибун фирменная светодиодная стена Winly (логотипы, золотые лучи), борта по периметру с рамкой и чётким текстом, след мяча только текущего удара

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
2026/11/11 19:41:01 [warn] 3098118#3098118: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/11 19:41:01 [warn] 3098118#3098118: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/11 19:41:01 [warn] 3098118#3098118: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/11 19:41:01 [warn] 3098118#3098118: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/11 19:41:01 [warn] 3098118#3098118: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/11 19:41:01 [warn] 3098118#3098118: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
social | 2026-11-11 16:38:51.277852 | social nothing due (test) | 
maxbet_results | 2026-11-11 16:38:54.946154 | maxbet results 2 | 
pandascore | 2026-11-11 16:06:16.134963 | pandascore new 0, updated 58, finished 0 | lib/python3.12/site-packages/sqlalchemy/engine/base.py", line 1986, in _exec_single_context
other_results | 2026-11-11 16:39:03.988079 | other results 31 | 
finish_stale | 2026-11-11 16:40:27.525209 | finished 0 | 
tg_poll | 2026-11-11 16:40:41.441607 | no token | 
football_live | 2026-11-11 16:40:46.503681 | live upserted 0 | 
live | 2026-11-11 16:40:46.937225 | live updated 23 | 
basketball | 2026-11-11 16:40:57.192917 | basketball upserted 414 | 
basketball_week | 2026-11-11 16:40:57.692220 | nba week upserted 48 | 
other_sports | 2026-11-11 16:40:58.350696 | other sports new 0 | 
backfill | 2026-11-11 16:40:58.354525 | already | 
trends | 2026-11-10 23:36:09.974574 | trends 11 | 
logos | 2026-11-11 16:40:58.452598 | logos: nothing to do | 
highlights | 2026-11-11 16:40:58.756588 | highlights +0 | 
analysis | 2026-11-10 23:36:10.199323 | analysis 27 | 
x22_line | 2026-11-11 16:41:05.522342 | x22 line new 0, fetched {'futsal': '0'} | 
odds | 2026-11-11 16:41:06.606116 | odds matched 71 | 
settle | 2026-11-11 16:41:06.635084 | settled 0 | 
xfeed | 2026-11-11 16:41:20.256063 | xfeed empty (22bet.ug http 308) | 
names | 2026-11-11 16:37:42.848435 | names 0 | 
tg_reminders | 2026-11-11 16:37:43.432674 | no token | 
football | 2026-11-11 16:40:55.143011 | football upserted 96 |  "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
--- worker log ---
Nov 11 19:40:57 impressed-jade.ptr.network python[3097781]: 2026-11-11 19:40:57,651 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261118 "HTTP/1.1 200 OK"
Nov 11 19:40:57 impressed-jade.ptr.network python[3097781]: 2026-11-11 19:40:57,822 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/H/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 19:40:57 impressed-jade.ptr.network python[3097781]: 2026-11-11 19:40:57,907 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/T/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 19:40:57 impressed-jade.ptr.network python[3097781]: 2026-11-11 19:40:57,972 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/V/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 19:40:58 impressed-jade.ptr.network python[3097781]: 2026-11-11 19:40:58,052 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/W/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 19:40:58 impressed-jade.ptr.network python[3097781]: 2026-11-11 19:40:58,147 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/HB/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 19:40:58 impressed-jade.ptr.network python[3097781]: 2026-11-11 19:40:58,247 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/TT/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 19:40:58 impressed-jade.ptr.network python[3097781]: 2026-11-11 19:40:58,526 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpFqOv5z4WKps64GlQS4ytw "HTTP/1.1 200 OK"
Nov 11 19:40:58 impressed-jade.ptr.network python[3097781]: 2026-11-11 19:40:58,536 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC-2Cj6KlR9rCfR28zNLmOTA "HTTP/1.1 200 OK"
Nov 11 19:40:58 impressed-jade.ptr.network python[3097781]: 2026-11-11 19:40:58,557 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCWJ2lWNubArHWmf3FIHbfcQ "HTTP/1.1 200 OK"
Nov 11 19:40:58 impressed-jade.ptr.network python[3097781]: 2026-11-11 19:40:58,571 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCqFMzb-4AUf6WAIbl132QKA "HTTP/1.1 200 OK"
Nov 11 19:40:58 impressed-jade.ptr.network python[3097781]: 2026-11-11 19:40:58,584 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCwJ3S2Ix7aI1BhHexDJlmEg "HTTP/1.1 200 OK"
Nov 11 19:40:58 impressed-jade.ptr.network python[3097781]: 2026-11-11 19:40:58,595 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCTv-XvfzLX3i4IGWAm4sbmA "HTTP/1.1 200 OK"
Nov 11 19:40:58 impressed-jade.ptr.network python[3097781]: 2026-11-11 19:40:58,613 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCxfPjORdISQSn2fV8tcVmgA "HTTP/1.1 200 OK"
Nov 11 19:40:58 impressed-jade.ptr.network python[3097781]: 2026-11-11 19:40:58,685 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCQsH5XtIc9hONE1BQjucM0g "HTTP/1.1 200 OK"
Nov 11 19:40:58 impressed-jade.ptr.network python[3097781]: 2026-11-11 19:40:58,700 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC6UL29enLNe4mqwTfAyeNuw "HTTP/1.1 200 OK"
Nov 11 19:40:58 impressed-jade.ptr.network python[3097781]: 2026-11-11 19:40:58,719 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpryVRk_VDudG8SHXgWcG0w "HTTP/1.1 200 OK"
Nov 11 19:40:58 impressed-jade.ptr.network python[3097781]: 2026-11-11 19:40:58,739 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCyGa1YEx9ST66rYrJTGIKOw "HTTP/1.1 200 OK"
Nov 11 19:40:58 impressed-jade.ptr.network python[3097781]: 2026-11-11 19:40:58,870 INFO HTTP Request: GET https://22bet.com/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 19:40:59 impressed-jade.ptr.network python[3097781]: 2026-11-11 19:40:59,123 INFO HTTP Request: GET https://22bet.co.ke/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 19:40:59 impressed-jade.ptr.network python[3097781]: 2026-11-11 19:40:59,199 INFO HTTP Request: GET https://22bet.ng/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 19:41:05 impressed-jade.ptr.network python[3097781]: 2026-11-11 19:41:05,520 INFO HTTP Request: GET https://22bet.ug/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 19:41:05 impressed-jade.ptr.network python[3097781]: 2026-11-11 19:41:05,666 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 19:41:05 impressed-jade.ptr.network python[3097781]: 2026-11-11 19:41:05,905 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 19:41:06 impressed-jade.ptr.network python[3097781]: 2026-11-11 19:41:06,454 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
--- api log ---
Nov 11 19:40:54 impressed-jade.ptr.network uvicorn[3097786]: INFO:     Application startup complete.
Nov 11 19:40:54 impressed-jade.ptr.network uvicorn[3097787]: INFO:     Started server process [3097787]
Nov 11 19:40:54 impressed-jade.ptr.network uvicorn[3097787]: INFO:     Waiting for application startup.
Nov 11 19:40:54 impressed-jade.ptr.network uvicorn[3097787]: INFO:     Application startup complete.
Nov 11 19:40:58 impressed-jade.ptr.network uvicorn[3097786]: INFO:     109.92.227.130:0 - "GET /api/matches/1805/center HTTP/1.0" 200 OK
Nov 11 19:41:04 impressed-jade.ptr.network uvicorn[3097787]: INFO:     109.92.227.130:0 - "GET /api/matches/1805/center HTTP/1.0" 200 OK
Nov 11 19:41:11 impressed-jade.ptr.network uvicorn[3097787]: INFO:     109.92.227.130:0 - "GET /api/matches/1805/center HTTP/1.0" 200 OK
Nov 11 19:41:17 impressed-jade.ptr.network uvicorn[3097787]: INFO:     109.92.227.130:0 - "GET /api/matches/1805/center HTTP/1.0" 200 OK
Nov 11 19:41:21 impressed-jade.ptr.network uvicorn[3097787]: INFO:     109.92.227.130:0 - "GET /api/me/watch?ids= HTTP/1.0" 200 OK
Nov 11 19:41:22 impressed-jade.ptr.network uvicorn[3097787]: INFO:     109.92.227.130:0 - "GET /api/matches/1805 HTTP/1.0" 200 OK
Nov 11 19:41:23 impressed-jade.ptr.network uvicorn[3097787]: INFO:     109.92.227.130:0 - "GET /api/matches/1805/center HTTP/1.0" 200 OK
Nov 11 19:41:25 impressed-jade.ptr.network uvicorn[3097787]: INFO:     127.0.0.1:34142 - "GET /api/health HTTP/1.1" 200 OK
Nov 11 19:41:25 impressed-jade.ptr.network uvicorn[3097786]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 19:41:25 impressed-jade.ptr.network uvicorn[3097787]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 19:41:25 impressed-jade.ptr.network uvicorn[3097787]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
