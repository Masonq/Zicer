# Zicer deploy 2026-11-11 17:07 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: 8360651 3D настольный теннис: камера дальше, стол целиком в кадре

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
2026/11/11 20:07:26 [warn] 3133271#3133271: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/11 20:07:26 [warn] 3133271#3133271: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/11 20:07:26 [warn] 3133271#3133271: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/11 20:07:26 [warn] 3133271#3133271: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/11 20:07:26 [warn] 3133271#3133271: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/11 20:07:26 [warn] 3133271#3133271: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
matches: {'esports': 58, 'hockey': 52, 'volleyball': 39, 'tabletennis': 186, 'handball': 44, 'basketball': 707, 'waterpolo': 7, 'tennis': 23, 'football': 1100}
social | 2026-11-11 17:06:31.837480 | social nothing due (test) | 
pandascore | 2026-11-11 16:06:16.134963 | pandascore new 0, updated 58, finished 0 | lib/python3.12/site-packages/sqlalchemy/engine/base.py", line 1986, in _exec_single_context
football_live | 2026-11-11 17:06:48.682929 | live upserted 0 | 
finish_stale | 2026-11-11 17:07:07.089861 | finished 0 | 
tg_poll | 2026-11-11 17:07:07.093068 | no token | 
live | 2026-11-11 17:07:12.596998 | live updated 36 | 
basketball | 2026-11-11 17:07:22.154495 | basketball upserted 414 | 
basketball_week | 2026-11-11 17:07:23.391112 | nba week upserted 48 | 
other_sports | 2026-11-11 17:07:24.217285 | other sports new 0 | 
backfill | 2026-11-11 17:07:24.221789 | already | 
logos | 2026-11-11 17:07:24.333138 | logos: nothing to do | 
highlights | 2026-11-11 17:07:24.617272 | highlights +0 | 
x22_line | 2026-11-11 17:07:31.378572 | x22 line new 0, fetched {'futsal': '0'} | 
odds | 2026-11-11 17:07:32.410831 | odds matched 71 | 
settle | 2026-11-11 17:07:32.514725 | settled 0 | 
xfeed | 2026-11-11 17:07:46.135552 | xfeed empty (22bet.ug http 308) | 
names | 2026-11-11 16:56:39.868265 | names 0 | 
trends | 2026-11-10 23:36:09.974574 | trends 11 | 
analysis | 2026-11-10 23:36:10.199323 | analysis 27 | 
maxbet_results | 2026-11-11 17:05:36.624411 | maxbet results 9 | 
other_results | 2026-11-11 17:05:49.744306 | other results 47 | 
tg_reminders | 2026-11-11 17:01:45.831996 | no token | 
football | 2026-11-11 17:07:19.987024 | football upserted 96 |  "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
--- worker log ---
Nov 11 20:07:23 impressed-jade.ptr.network python[3132967]: 2026-11-11 20:07:23,352 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261118 "HTTP/1.1 200 OK"
Nov 11 20:07:23 impressed-jade.ptr.network python[3132967]: 2026-11-11 20:07:23,525 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/H/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 20:07:23 impressed-jade.ptr.network python[3132967]: 2026-11-11 20:07:23,666 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/T/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 20:07:23 impressed-jade.ptr.network python[3132967]: 2026-11-11 20:07:23,733 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/V/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 20:07:23 impressed-jade.ptr.network python[3132967]: 2026-11-11 20:07:23,825 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/W/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 20:07:23 impressed-jade.ptr.network python[3132967]: 2026-11-11 20:07:23,896 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/HB/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 20:07:24 impressed-jade.ptr.network python[3132967]: 2026-11-11 20:07:24,011 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/TT/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 20:07:24 impressed-jade.ptr.network python[3132967]: 2026-11-11 20:07:24,430 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpFqOv5z4WKps64GlQS4ytw "HTTP/1.1 200 OK"
Nov 11 20:07:24 impressed-jade.ptr.network python[3132967]: 2026-11-11 20:07:24,441 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC-2Cj6KlR9rCfR28zNLmOTA "HTTP/1.1 200 OK"
Nov 11 20:07:24 impressed-jade.ptr.network python[3132967]: 2026-11-11 20:07:24,452 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCWJ2lWNubArHWmf3FIHbfcQ "HTTP/1.1 200 OK"
Nov 11 20:07:24 impressed-jade.ptr.network python[3132967]: 2026-11-11 20:07:24,470 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCqFMzb-4AUf6WAIbl132QKA "HTTP/1.1 200 OK"
Nov 11 20:07:24 impressed-jade.ptr.network python[3132967]: 2026-11-11 20:07:24,483 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCwJ3S2Ix7aI1BhHexDJlmEg "HTTP/1.1 200 OK"
Nov 11 20:07:24 impressed-jade.ptr.network python[3132967]: 2026-11-11 20:07:24,496 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCTv-XvfzLX3i4IGWAm4sbmA "HTTP/1.1 200 OK"
Nov 11 20:07:24 impressed-jade.ptr.network python[3132967]: 2026-11-11 20:07:24,516 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCxfPjORdISQSn2fV8tcVmgA "HTTP/1.1 200 OK"
Nov 11 20:07:24 impressed-jade.ptr.network python[3132967]: 2026-11-11 20:07:24,527 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCQsH5XtIc9hONE1BQjucM0g "HTTP/1.1 200 OK"
Nov 11 20:07:24 impressed-jade.ptr.network python[3132967]: 2026-11-11 20:07:24,551 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC6UL29enLNe4mqwTfAyeNuw "HTTP/1.1 200 OK"
Nov 11 20:07:24 impressed-jade.ptr.network python[3132967]: 2026-11-11 20:07:24,573 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpryVRk_VDudG8SHXgWcG0w "HTTP/1.1 200 OK"
Nov 11 20:07:24 impressed-jade.ptr.network python[3132967]: 2026-11-11 20:07:24,597 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCyGa1YEx9ST66rYrJTGIKOw "HTTP/1.1 200 OK"
Nov 11 20:07:24 impressed-jade.ptr.network python[3132967]: 2026-11-11 20:07:24,729 INFO HTTP Request: GET https://22bet.com/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 20:07:24 impressed-jade.ptr.network python[3132967]: 2026-11-11 20:07:24,976 INFO HTTP Request: GET https://22bet.co.ke/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 20:07:25 impressed-jade.ptr.network python[3132967]: 2026-11-11 20:07:25,068 INFO HTTP Request: GET https://22bet.ng/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 20:07:31 impressed-jade.ptr.network python[3132967]: 2026-11-11 20:07:31,376 INFO HTTP Request: GET https://22bet.ug/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 20:07:31 impressed-jade.ptr.network python[3132967]: 2026-11-11 20:07:31,525 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 20:07:31 impressed-jade.ptr.network python[3132967]: 2026-11-11 20:07:31,730 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 20:07:32 impressed-jade.ptr.network python[3132967]: 2026-11-11 20:07:32,257 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
--- api log ---
Nov 11 20:07:32 impressed-jade.ptr.network uvicorn[3133004]: INFO:     109.92.227.130:0 - "POST /api/t HTTP/1.0" 200 OK
Nov 11 20:07:32 impressed-jade.ptr.network uvicorn[3133004]: INFO:     109.92.227.130:0 - "GET /api/teams/540 HTTP/1.0" 200 OK
Nov 11 20:07:34 impressed-jade.ptr.network uvicorn[3133004]: INFO:     109.92.227.130:0 - "GET /api/sports?tz=180 HTTP/1.0" 200 OK
Nov 11 20:07:34 impressed-jade.ptr.network uvicorn[3133004]: INFO:     109.92.227.130:0 - "POST /api/t HTTP/1.0" 200 OK
Nov 11 20:07:34 impressed-jade.ptr.network uvicorn[3133003]: INFO:     109.92.227.130:0 - "GET /api/home?tz=180&sport=all HTTP/1.0" 200 OK
Nov 11 20:07:37 impressed-jade.ptr.network uvicorn[3133003]: INFO:     109.92.227.130:0 - "GET /api/home?tz=180&sport=esports HTTP/1.0" 200 OK
Nov 11 20:07:39 impressed-jade.ptr.network uvicorn[3133004]: INFO:     109.92.227.130:0 - "GET /api/matches/2166/center HTTP/1.0" 200 OK
Nov 11 20:07:39 impressed-jade.ptr.network uvicorn[3133003]: INFO:     109.92.227.130:0 - "POST /api/t HTTP/1.0" 200 OK
Nov 11 20:07:39 impressed-jade.ptr.network uvicorn[3133003]: INFO:     109.92.227.130:0 - "GET /api/matches/2166 HTTP/1.0" 200 OK
Nov 11 20:07:49 impressed-jade.ptr.network uvicorn[3133004]: INFO:     109.92.227.130:0 - "GET /api/matches/2166/center HTTP/1.0" 200 OK
Nov 11 20:07:50 impressed-jade.ptr.network uvicorn[3133004]: INFO:     109.92.227.130:0 - "GET /api/me/watch?ids=1858 HTTP/1.0" 200 OK
Nov 11 20:07:50 impressed-jade.ptr.network uvicorn[3133003]: INFO:     127.0.0.1:51734 - "GET /api/health HTTP/1.1" 200 OK
Nov 11 20:07:51 impressed-jade.ptr.network uvicorn[3133004]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 20:07:51 impressed-jade.ptr.network uvicorn[3133004]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 20:07:51 impressed-jade.ptr.network uvicorn[3133004]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
