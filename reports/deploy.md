# Zicer deploy 2026-11-11 16:32 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: 2fdc0e0 3D-матч-центр: след мяча по настоящей траектории (не прыгает вместе с мячом), чёткая разметка и анизотропная фильтрация текстур, тени высокого разрешения, новые трибуны с болельщиками, чёткий мяч

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
2026/11/11 19:32:33 [warn] 3086840#3086840: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/11 19:32:33 [warn] 3086840#3086840: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/11 19:32:33 [warn] 3086840#3086840: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/11 19:32:33 [warn] 3086840#3086840: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/11 19:32:33 [warn] 3086840#3086840: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/11 19:32:33 [warn] 3086840#3086840: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
social | 2026-11-11 16:31:07.289904 | social nothing due (test) | 
football_live | 2026-11-11 16:31:26.754242 | live upserted 0 | 
names | 2026-11-11 16:31:42.828031 | names 0 | 
tg_reminders | 2026-11-11 16:31:43.470060 | no token | 
pandascore | 2026-11-11 16:06:16.134963 | pandascore new 0, updated 58, finished 0 | lib/python3.12/site-packages/sqlalchemy/engine/base.py", line 1986, in _exec_single_context
live | 2026-11-11 16:32:02.777706 | live updated 22 | 
finish_stale | 2026-11-11 16:32:08.812691 | finished 0 | 
maxbet_results | 2026-11-11 16:32:12.660800 | maxbet results 2 | 
other_results | 2026-11-11 16:32:20.876295 | other results 31 | 
tg_poll | 2026-11-11 16:32:22.213307 | no token | 
basketball | 2026-11-11 16:32:29.727290 | basketball upserted 414 | 
basketball_week | 2026-11-11 16:32:30.693466 | nba week upserted 48 | 
other_sports | 2026-11-11 16:32:31.468862 | other sports new 0 | 
backfill | 2026-11-11 16:32:31.482298 | already | 
logos | 2026-11-11 16:32:31.660233 | logos: nothing to do | 
highlights | 2026-11-11 16:32:32.197291 | highlights +0 | 
x22_line | 2026-11-11 16:32:39.241463 | x22 line new 0, fetched {'futsal': '0'} | 
odds | 2026-11-11 16:32:40.610693 | odds matched 71 | 
settle | 2026-11-11 16:32:40.653193 | settled 0 | 
xfeed | 2026-11-11 16:32:54.276895 | xfeed empty (22bet.ug http 308) | 
trends | 2026-11-10 23:36:09.974574 | trends 11 | 
analysis | 2026-11-10 23:36:10.199323 | analysis 27 | 
football | 2026-11-11 16:32:26.790065 | football upserted 96 |  "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
--- worker log ---
Nov 11 19:32:30 impressed-jade.ptr.network python[3086507]: 2026-11-11 19:32:30,632 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261118 "HTTP/1.1 200 OK"
Nov 11 19:32:30 impressed-jade.ptr.network python[3086507]: 2026-11-11 19:32:30,834 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/H/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 19:32:30 impressed-jade.ptr.network python[3086507]: 2026-11-11 19:32:30,939 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/T/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 19:32:31 impressed-jade.ptr.network python[3086507]: 2026-11-11 19:32:31,030 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/V/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 19:32:31 impressed-jade.ptr.network python[3086507]: 2026-11-11 19:32:31,121 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/W/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 19:32:31 impressed-jade.ptr.network python[3086507]: 2026-11-11 19:32:31,181 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/HB/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 19:32:31 impressed-jade.ptr.network python[3086507]: 2026-11-11 19:32:31,285 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/TT/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 19:32:31 impressed-jade.ptr.network python[3086507]: 2026-11-11 19:32:31,820 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpFqOv5z4WKps64GlQS4ytw "HTTP/1.1 200 OK"
Nov 11 19:32:31 impressed-jade.ptr.network python[3086507]: 2026-11-11 19:32:31,896 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC-2Cj6KlR9rCfR28zNLmOTA "HTTP/1.1 200 OK"
Nov 11 19:32:31 impressed-jade.ptr.network python[3086507]: 2026-11-11 19:32:31,920 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCWJ2lWNubArHWmf3FIHbfcQ "HTTP/1.1 200 OK"
Nov 11 19:32:31 impressed-jade.ptr.network python[3086507]: 2026-11-11 19:32:31,944 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCqFMzb-4AUf6WAIbl132QKA "HTTP/1.1 200 OK"
Nov 11 19:32:31 impressed-jade.ptr.network python[3086507]: 2026-11-11 19:32:31,962 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCwJ3S2Ix7aI1BhHexDJlmEg "HTTP/1.1 200 OK"
Nov 11 19:32:31 impressed-jade.ptr.network python[3086507]: 2026-11-11 19:32:31,975 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCTv-XvfzLX3i4IGWAm4sbmA "HTTP/1.1 200 OK"
Nov 11 19:32:32 impressed-jade.ptr.network python[3086507]: 2026-11-11 19:32:32,054 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCxfPjORdISQSn2fV8tcVmgA "HTTP/1.1 200 OK"
Nov 11 19:32:32 impressed-jade.ptr.network python[3086507]: 2026-11-11 19:32:32,068 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCQsH5XtIc9hONE1BQjucM0g "HTTP/1.1 200 OK"
Nov 11 19:32:32 impressed-jade.ptr.network python[3086507]: 2026-11-11 19:32:32,106 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC6UL29enLNe4mqwTfAyeNuw "HTTP/1.1 200 OK"
Nov 11 19:32:32 impressed-jade.ptr.network python[3086507]: 2026-11-11 19:32:32,139 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpryVRk_VDudG8SHXgWcG0w "HTTP/1.1 200 OK"
Nov 11 19:32:32 impressed-jade.ptr.network python[3086507]: 2026-11-11 19:32:32,168 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCyGa1YEx9ST66rYrJTGIKOw "HTTP/1.1 200 OK"
Nov 11 19:32:32 impressed-jade.ptr.network python[3086507]: 2026-11-11 19:32:32,301 INFO HTTP Request: GET https://22bet.com/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 19:32:32 impressed-jade.ptr.network python[3086507]: 2026-11-11 19:32:32,551 INFO HTTP Request: GET https://22bet.co.ke/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 19:32:32 impressed-jade.ptr.network python[3086507]: 2026-11-11 19:32:32,648 INFO HTTP Request: GET https://22bet.ng/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 19:32:39 impressed-jade.ptr.network python[3086507]: 2026-11-11 19:32:39,239 INFO HTTP Request: GET https://22bet.ug/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 19:32:39 impressed-jade.ptr.network python[3086507]: 2026-11-11 19:32:39,409 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 19:32:39 impressed-jade.ptr.network python[3086507]: 2026-11-11 19:32:39,879 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 19:32:40 impressed-jade.ptr.network python[3086507]: 2026-11-11 19:32:40,452 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
--- api log ---
Nov 11 19:32:28 impressed-jade.ptr.network uvicorn[3086517]: INFO:     Waiting for application startup.
Nov 11 19:32:28 impressed-jade.ptr.network uvicorn[3086516]: INFO:     Started server process [3086516]
Nov 11 19:32:28 impressed-jade.ptr.network uvicorn[3086516]: INFO:     Waiting for application startup.
Nov 11 19:32:28 impressed-jade.ptr.network uvicorn[3086517]: INFO:     Application startup complete.
Nov 11 19:32:28 impressed-jade.ptr.network uvicorn[3086516]: INFO:     Application startup complete.
Nov 11 19:32:32 impressed-jade.ptr.network uvicorn[3086516]: INFO:     109.92.227.130:0 - "GET /api/matches/1859/center HTTP/1.0" 200 OK
Nov 11 19:32:35 impressed-jade.ptr.network uvicorn[3086516]: INFO:     109.92.227.130:0 - "GET /api/matches/1859 HTTP/1.0" 200 OK
Nov 11 19:32:39 impressed-jade.ptr.network uvicorn[3086516]: INFO:     109.92.227.130:0 - "GET /api/matches/1859/center HTTP/1.0" 200 OK
Nov 11 19:32:43 impressed-jade.ptr.network uvicorn[3086516]: INFO:     109.92.227.130:0 - "GET /api/me/watch?ids= HTTP/1.0" 200 OK
Nov 11 19:32:46 impressed-jade.ptr.network uvicorn[3086516]: INFO:     109.92.227.130:0 - "GET /api/matches/1859/center HTTP/1.0" 200 OK
Nov 11 19:32:53 impressed-jade.ptr.network uvicorn[3086516]: INFO:     109.92.227.130:0 - "GET /api/matches/1859/center HTTP/1.0" 200 OK
Nov 11 19:32:57 impressed-jade.ptr.network uvicorn[3086516]: INFO:     127.0.0.1:52856 - "GET /api/health HTTP/1.1" 200 OK
Nov 11 19:32:57 impressed-jade.ptr.network uvicorn[3086516]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 19:32:57 impressed-jade.ptr.network uvicorn[3086516]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 19:32:58 impressed-jade.ptr.network uvicorn[3086516]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
