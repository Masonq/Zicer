# Zicer deploy 2026-11-11 17:42 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: 2c6c0ac Водное поло как у букмекеров: ровный бассейн без воды и поплавков — полосы дорожек, белые линии ворот и центра, красные 2 м, жёлтые 5 м, ворота с сеткой; проверено движение мяча на всех видах (только по центральной линии, плавно, в пределах поля)

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
2026/11/11 20:42:31 [warn] 3179610#3179610: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/11 20:42:31 [warn] 3179610#3179610: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/11 20:42:31 [warn] 3179610#3179610: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/11 20:42:31 [warn] 3179610#3179610: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/11 20:42:31 [warn] 3179610#3179610: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/11 20:42:31 [warn] 3179610#3179610: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
finish_stale | 2026-11-11 17:41:46.763339 | finished 0 | 
football_live | 2026-11-11 17:42:05.871446 | live upserted 0 | 
live | 2026-11-11 17:42:06.330384 | live updated 41 | 
xfeed | 2026-11-11 17:42:21.872403 | xfeed games 271, linked 0, updated 40 | 
social | 2026-11-11 17:42:21.893435 | social nothing due (test) | 
tg_poll | 2026-11-11 17:42:21.898338 | no token | 
basketball | 2026-11-11 17:42:27.425411 | basketball upserted 414 | 
basketball_week | 2026-11-11 17:42:28.395587 | nba week upserted 48 | 
other_sports | 2026-11-11 17:42:29.087536 | other sports new 0 | 
backfill | 2026-11-11 17:42:29.095940 | already | 
logos | 2026-11-11 17:42:29.181823 | logos: nothing to do | 
highlights | 2026-11-11 17:42:29.632316 | highlights +0 | 
x22_line | 2026-11-11 17:42:42.375723 | x22 line new 0, fetched {'futsal': '0'} | 
odds | 2026-11-11 17:42:43.842900 | odds matched 71 | 
settle | 2026-11-11 17:42:43.875737 | settled 0 | 
names | 2026-11-11 17:39:11.841972 | names 0 | 
tg_reminders | 2026-11-11 17:39:11.900978 | no token | 
trends | 2026-11-10 23:36:09.974574 | trends 11 | 
analysis | 2026-11-10 23:36:10.199323 | analysis 27 | 
maxbet_results | 2026-11-11 17:40:19.332439 | maxbet results 12 | 
pandascore | 2026-11-11 16:06:16.134963 | pandascore new 0, updated 58, finished 0 | nv/lib/python3.12/site-packages/sqlalchemy/engine/base.py", line 1986, in _exec_single_context
other_results | 2026-11-11 17:40:32.518812 | other results 54 | 
football | 2026-11-11 17:42:25.624491 | football upserted 96 |  "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
--- worker log ---
Nov 11 20:42:28 impressed-jade.ptr.network python[3179275]: 2026-11-11 20:42:28,227 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261117 "HTTP/1.1 200 OK"
Nov 11 20:42:28 impressed-jade.ptr.network python[3179275]: 2026-11-11 20:42:28,360 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261118 "HTTP/1.1 200 OK"
Nov 11 20:42:28 impressed-jade.ptr.network python[3179275]: 2026-11-11 20:42:28,541 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/H/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 20:42:28 impressed-jade.ptr.network python[3179275]: 2026-11-11 20:42:28,628 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/T/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 20:42:28 impressed-jade.ptr.network python[3179275]: 2026-11-11 20:42:28,683 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/V/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 20:42:28 impressed-jade.ptr.network python[3179275]: 2026-11-11 20:42:28,772 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/W/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 20:42:28 impressed-jade.ptr.network python[3179275]: 2026-11-11 20:42:28,873 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/HB/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 20:42:28 impressed-jade.ptr.network python[3179275]: 2026-11-11 20:42:28,989 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/TT/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 20:42:29 impressed-jade.ptr.network python[3179275]: 2026-11-11 20:42:29,318 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpFqOv5z4WKps64GlQS4ytw "HTTP/1.1 200 OK"
Nov 11 20:42:29 impressed-jade.ptr.network python[3179275]: 2026-11-11 20:42:29,365 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC-2Cj6KlR9rCfR28zNLmOTA "HTTP/1.1 200 OK"
Nov 11 20:42:29 impressed-jade.ptr.network python[3179275]: 2026-11-11 20:42:29,374 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCWJ2lWNubArHWmf3FIHbfcQ "HTTP/1.1 200 OK"
Nov 11 20:42:29 impressed-jade.ptr.network python[3179275]: 2026-11-11 20:42:29,389 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCqFMzb-4AUf6WAIbl132QKA "HTTP/1.1 200 OK"
Nov 11 20:42:29 impressed-jade.ptr.network python[3179275]: 2026-11-11 20:42:29,399 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCwJ3S2Ix7aI1BhHexDJlmEg "HTTP/1.1 200 OK"
Nov 11 20:42:29 impressed-jade.ptr.network python[3179275]: 2026-11-11 20:42:29,409 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCTv-XvfzLX3i4IGWAm4sbmA "HTTP/1.1 200 OK"
Nov 11 20:42:29 impressed-jade.ptr.network python[3179275]: 2026-11-11 20:42:29,480 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCxfPjORdISQSn2fV8tcVmgA "HTTP/1.1 200 OK"
Nov 11 20:42:29 impressed-jade.ptr.network python[3179275]: 2026-11-11 20:42:29,555 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCQsH5XtIc9hONE1BQjucM0g "HTTP/1.1 200 OK"
Nov 11 20:42:29 impressed-jade.ptr.network python[3179275]: 2026-11-11 20:42:29,575 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC6UL29enLNe4mqwTfAyeNuw "HTTP/1.1 200 OK"
Nov 11 20:42:29 impressed-jade.ptr.network python[3179275]: 2026-11-11 20:42:29,592 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpryVRk_VDudG8SHXgWcG0w "HTTP/1.1 200 OK"
Nov 11 20:42:29 impressed-jade.ptr.network python[3179275]: 2026-11-11 20:42:29,616 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCyGa1YEx9ST66rYrJTGIKOw "HTTP/1.1 200 OK"
Nov 11 20:42:29 impressed-jade.ptr.network python[3179275]: 2026-11-11 20:42:29,755 INFO HTTP Request: GET https://22bet.com/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 20:42:35 impressed-jade.ptr.network python[3179275]: 2026-11-11 20:42:35,906 INFO HTTP Request: GET https://22bet.ng/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 20:42:42 impressed-jade.ptr.network python[3179275]: 2026-11-11 20:42:42,373 INFO HTTP Request: GET https://22bet.ug/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 20:42:42 impressed-jade.ptr.network python[3179275]: 2026-11-11 20:42:42,837 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 20:42:43 impressed-jade.ptr.network python[3179275]: 2026-11-11 20:42:43,312 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 20:42:43 impressed-jade.ptr.network python[3179275]: 2026-11-11 20:42:43,733 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
--- api log ---
Nov 11 20:42:23 impressed-jade.ptr.network uvicorn[3179281]: INFO:     Uvicorn running on http://127.0.0.1:8790 (Press CTRL+C to quit)
Nov 11 20:42:23 impressed-jade.ptr.network uvicorn[3179281]: INFO:     Started parent process [3179281]
Nov 11 20:42:25 impressed-jade.ptr.network uvicorn[3179284]: INFO:     Started server process [3179284]
Nov 11 20:42:25 impressed-jade.ptr.network uvicorn[3179284]: INFO:     Waiting for application startup.
Nov 11 20:42:25 impressed-jade.ptr.network uvicorn[3179285]: INFO:     Started server process [3179285]
Nov 11 20:42:25 impressed-jade.ptr.network uvicorn[3179285]: INFO:     Waiting for application startup.
Nov 11 20:42:25 impressed-jade.ptr.network uvicorn[3179285]: INFO:     Application startup complete.
Nov 11 20:42:25 impressed-jade.ptr.network uvicorn[3179284]: INFO:     Application startup complete.
Nov 11 20:42:48 impressed-jade.ptr.network uvicorn[3179284]: INFO:     109.92.227.130:0 - "GET /api/bookmakers HTTP/1.0" 200 OK
Nov 11 20:42:52 impressed-jade.ptr.network uvicorn[3179284]: INFO:     109.92.227.130:0 - "GET /api/matches?day=live&sport=all&serbian=false&tz=180 HTTP/1.0" 200 OK
Nov 11 20:42:55 impressed-jade.ptr.network uvicorn[3179284]: INFO:     127.0.0.1:46848 - "GET /api/health HTTP/1.1" 200 OK
Nov 11 20:42:55 impressed-jade.ptr.network uvicorn[3179285]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 20:42:55 impressed-jade.ptr.network uvicorn[3179284]: INFO:     109.92.227.130:0 - "GET /api/me/watch?ids=1858 HTTP/1.0" 200 OK
Nov 11 20:42:55 impressed-jade.ptr.network uvicorn[3179284]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 20:42:55 impressed-jade.ptr.network uvicorn[3179285]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
