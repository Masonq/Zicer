# Zicer deploy 2026-11-11 17:34 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: 3dd333a Матч-центр как у букмекеров: плоский вид сверху на всех видах (3D выключен), мяч и шайба ходят только по центральной линии туда-обратно по ходу атаки, без подпрыгиваний и бросков в углы; яркий газон с полосами, мяч крупнее

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
2026/11/11 20:33:57 [warn] 3168121#3168121: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/11 20:33:57 [warn] 3168121#3168121: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/11 20:33:57 [warn] 3168121#3168121: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/11 20:33:57 [warn] 3168121#3168121: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/11 20:33:57 [warn] 3168121#3168121: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/11 20:33:57 [warn] 3168121#3168121: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
names | 2026-11-11 17:33:17.980775 | names 0 | 
tg_poll | 2026-11-11 17:33:18.585178 | no token | 
tg_reminders | 2026-11-11 17:33:18.586738 | no token | 
live | 2026-11-11 17:33:23.910416 | live updated 42 | 
basketball | 2026-11-11 17:33:54.402050 | basketball upserted 414 | 
basketball_week | 2026-11-11 17:33:55.130251 | nba week upserted 48 | 
other_sports | 2026-11-11 17:33:55.744042 | other sports new 0 | 
maxbet_results | 2026-11-11 17:30:40.206349 | maxbet results 9 | 
backfill | 2026-11-11 17:33:55.748364 | already | 
other_results | 2026-11-11 17:30:51.723013 | other results 44 | 
logos | 2026-11-11 17:33:55.821269 | logos: nothing to do | 
highlights | 2026-11-11 17:33:56.321556 | highlights +0 | 
x22_line | 2026-11-11 17:34:03.079303 | x22 line new 0, fetched {'futsal': '0'} | 
odds | 2026-11-11 17:34:03.936159 | odds matched 71 | 
settle | 2026-11-11 17:34:03.964264 | settled 0 | 
xfeed | 2026-11-11 17:34:17.595352 | xfeed empty (22bet.ug http 308) | 
social | 2026-11-11 17:32:42.798980 | social nothing due (test) | 
trends | 2026-11-10 23:36:09.974574 | trends 11 | 
analysis | 2026-11-10 23:36:10.199323 | analysis 27 | 
finish_stale | 2026-11-11 17:33:08.538569 | finished 0 | 
football_live | 2026-11-11 17:33:13.653365 | live upserted 0 | 
pandascore | 2026-11-11 16:06:16.134963 | pandascore new 0, updated 58, finished 0 | nv/lib/python3.12/site-packages/sqlalchemy/engine/base.py", line 1986, in _exec_single_context
football | 2026-11-11 17:33:52.115640 | football upserted 96 |  "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
--- worker log ---
Nov 11 20:33:55 impressed-jade.ptr.network python[3167807]: 2026-11-11 20:33:55,098 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261118 "HTTP/1.1 200 OK"
Nov 11 20:33:55 impressed-jade.ptr.network python[3167807]: 2026-11-11 20:33:55,249 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/H/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 20:33:55 impressed-jade.ptr.network python[3167807]: 2026-11-11 20:33:55,357 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/T/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 20:33:55 impressed-jade.ptr.network python[3167807]: 2026-11-11 20:33:55,414 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/V/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 20:33:55 impressed-jade.ptr.network python[3167807]: 2026-11-11 20:33:55,493 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/W/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 20:33:55 impressed-jade.ptr.network python[3167807]: 2026-11-11 20:33:55,559 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/HB/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 20:33:55 impressed-jade.ptr.network python[3167807]: 2026-11-11 20:33:55,640 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/TT/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 20:33:55 impressed-jade.ptr.network python[3167807]: 2026-11-11 20:33:55,962 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpFqOv5z4WKps64GlQS4ytw "HTTP/1.1 200 OK"
Nov 11 20:33:56 impressed-jade.ptr.network python[3167807]: 2026-11-11 20:33:56,015 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC-2Cj6KlR9rCfR28zNLmOTA "HTTP/1.1 200 OK"
Nov 11 20:33:56 impressed-jade.ptr.network python[3167807]: 2026-11-11 20:33:56,026 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCWJ2lWNubArHWmf3FIHbfcQ "HTTP/1.1 200 OK"
Nov 11 20:33:56 impressed-jade.ptr.network python[3167807]: 2026-11-11 20:33:56,041 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCqFMzb-4AUf6WAIbl132QKA "HTTP/1.1 200 OK"
Nov 11 20:33:56 impressed-jade.ptr.network python[3167807]: 2026-11-11 20:33:56,054 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCwJ3S2Ix7aI1BhHexDJlmEg "HTTP/1.1 200 OK"
Nov 11 20:33:56 impressed-jade.ptr.network python[3167807]: 2026-11-11 20:33:56,064 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCTv-XvfzLX3i4IGWAm4sbmA "HTTP/1.1 200 OK"
Nov 11 20:33:56 impressed-jade.ptr.network python[3167807]: 2026-11-11 20:33:56,158 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCxfPjORdISQSn2fV8tcVmgA "HTTP/1.1 200 OK"
Nov 11 20:33:56 impressed-jade.ptr.network python[3167807]: 2026-11-11 20:33:56,246 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCQsH5XtIc9hONE1BQjucM0g "HTTP/1.1 200 OK"
Nov 11 20:33:56 impressed-jade.ptr.network python[3167807]: 2026-11-11 20:33:56,263 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC6UL29enLNe4mqwTfAyeNuw "HTTP/1.1 200 OK"
Nov 11 20:33:56 impressed-jade.ptr.network python[3167807]: 2026-11-11 20:33:56,281 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpryVRk_VDudG8SHXgWcG0w "HTTP/1.1 200 OK"
Nov 11 20:33:56 impressed-jade.ptr.network python[3167807]: 2026-11-11 20:33:56,305 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCyGa1YEx9ST66rYrJTGIKOw "HTTP/1.1 200 OK"
Nov 11 20:33:56 impressed-jade.ptr.network python[3167807]: 2026-11-11 20:33:56,413 INFO HTTP Request: GET https://22bet.com/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 20:33:56 impressed-jade.ptr.network python[3167807]: 2026-11-11 20:33:56,655 INFO HTTP Request: GET https://22bet.co.ke/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 20:33:56 impressed-jade.ptr.network python[3167807]: 2026-11-11 20:33:56,747 INFO HTTP Request: GET https://22bet.ng/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 20:34:03 impressed-jade.ptr.network python[3167807]: 2026-11-11 20:34:03,076 INFO HTTP Request: GET https://22bet.ug/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 20:34:03 impressed-jade.ptr.network python[3167807]: 2026-11-11 20:34:03,209 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 20:34:03 impressed-jade.ptr.network python[3167807]: 2026-11-11 20:34:03,361 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 20:34:03 impressed-jade.ptr.network python[3167807]: 2026-11-11 20:34:03,806 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
--- api log ---
Nov 11 20:34:19 impressed-jade.ptr.network uvicorn[3167856]: INFO:     109.92.227.130:0 - "GET /api/home?tz=180&sport=all HTTP/1.0" 200 OK
Nov 11 20:34:20 impressed-jade.ptr.network uvicorn[3167856]: INFO:     109.92.227.130:0 - "GET /api/ranking?period=month HTTP/1.0" 200 OK
Nov 11 20:34:20 impressed-jade.ptr.network uvicorn[3167856]: INFO:     109.92.227.130:0 - "GET /api/matches?day=live&sport=all&serbian=false&tz=180 HTTP/1.0" 200 OK
Nov 11 20:34:20 impressed-jade.ptr.network uvicorn[3167856]: INFO:     109.92.227.130:0 - "GET /api/sports?tz=180 HTTP/1.0" 200 OK
Nov 11 20:34:20 impressed-jade.ptr.network uvicorn[3167856]: INFO:     109.92.227.130:0 - "GET /api/matches?day=today&sport=all&serbian=false&tz=180 HTTP/1.0" 200 OK
Nov 11 20:34:20 impressed-jade.ptr.network uvicorn[3167857]: INFO:     109.92.227.130:0 - "GET /api/home?tz=180&sport=all HTTP/1.0" 200 OK
Nov 11 20:34:21 impressed-jade.ptr.network uvicorn[3167856]: INFO:     109.92.227.130:0 - "POST /api/t HTTP/1.0" 200 OK
Nov 11 20:34:21 impressed-jade.ptr.network uvicorn[3167857]: INFO:     109.92.227.130:0 - "GET /api/matches/307 HTTP/1.0" 200 OK
Nov 11 20:34:21 impressed-jade.ptr.network uvicorn[3167857]: INFO:     127.0.0.1:49844 - "GET /api/health HTTP/1.1" 200 OK
Nov 11 20:34:21 impressed-jade.ptr.network uvicorn[3167857]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 20:34:21 impressed-jade.ptr.network uvicorn[3167857]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 20:34:22 impressed-jade.ptr.network uvicorn[3167857]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
Nov 11 20:34:22 impressed-jade.ptr.network uvicorn[3167857]: INFO:     109.92.227.130:0 - "GET /api/sports?tz=180 HTTP/1.0" 200 OK
Nov 11 20:34:22 impressed-jade.ptr.network uvicorn[3167856]: INFO:     109.92.227.130:0 - "POST /api/t HTTP/1.0" 200 OK
Nov 11 20:34:22 impressed-jade.ptr.network uvicorn[3167856]: INFO:     109.92.227.130:0 - "GET /api/home?tz=180&sport=all HTTP/1.0" 200 OK
```
