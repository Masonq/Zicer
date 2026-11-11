# Zicer deploy 2026-11-11 17:02 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: c99ae3e 3D для всех видов: баскетбол (щиты, кольца, стойки), хоккей (разметка, борта, ворота), волейбол и настольный теннис (вид сзади, сетки, стол на ножках), гандбол и футзал (ворота с сеткой), водное поло (плавающие ворота); фирменная стена за площадками; без плашки счёта (счёт есть сверху); теннисный корт дальше от края кадра

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
2026/11/11 20:02:12 [warn] 3126148#3126148: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/11 20:02:12 [warn] 3126148#3126148: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/11 20:02:12 [warn] 3126148#3126148: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/11 20:02:12 [warn] 3126148#3126148: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/11 20:02:12 [warn] 3126148#3126148: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/11 20:02:12 [warn] 3126148#3126148: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
basketball | 2026-11-11 17:02:10.769129 | basketball upserted 414 | 
basketball_week | 2026-11-11 17:02:11.948922 | nba week upserted 48 | 
other_sports | 2026-11-11 17:02:12.963135 | other sports new 0 | 
backfill | 2026-11-11 17:02:12.971057 | already | 
logos | 2026-11-11 17:02:13.081123 | logos: nothing to do | 
highlights | 2026-11-11 17:02:13.619512 | highlights +0 | 
x22_line | 2026-11-11 17:02:20.410798 | x22 line new 0, fetched {'futsal': '0'} | 
odds | 2026-11-11 17:02:21.944904 | odds matched 71 | 
settle | 2026-11-11 17:02:22.009486 | settled 0 | 
xfeed | 2026-11-11 17:02:35.637255 | xfeed empty (22bet.ug http 308) | 
pandascore | 2026-11-11 16:06:16.134963 | pandascore new 0, updated 58, finished 0 | lib/python3.12/site-packages/sqlalchemy/engine/base.py", line 1986, in _exec_single_context
social | 2026-11-11 17:00:06.427651 | social nothing due (test) | 
maxbet_results | 2026-11-11 17:00:47.367121 | maxbet results 9 | 
other_results | 2026-11-11 17:00:58.773285 | other results 47 | 
names | 2026-11-11 16:56:39.868265 | names 0 | 
trends | 2026-11-10 23:36:09.974574 | trends 11 | 
analysis | 2026-11-10 23:36:10.199323 | analysis 27 | 
finish_stale | 2026-11-11 17:01:21.631334 | finished 0 | 
tg_poll | 2026-11-11 17:01:45.830469 | no token | 
tg_reminders | 2026-11-11 17:01:45.831996 | no token | 
football_live | 2026-11-11 17:01:50.902346 | live upserted 0 | 
live | 2026-11-11 17:01:51.311563 | live updated 36 | 
football | 2026-11-11 17:02:06.738906 | football upserted 96 |  "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
--- worker log ---
Nov 11 20:02:11 impressed-jade.ptr.network python[3125816]: 2026-11-11 20:02:11,836 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261118 "HTTP/1.1 200 OK"
Nov 11 20:02:12 impressed-jade.ptr.network python[3125816]: 2026-11-11 20:02:12,100 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/H/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 20:02:12 impressed-jade.ptr.network python[3125816]: 2026-11-11 20:02:12,256 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/T/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 20:02:12 impressed-jade.ptr.network python[3125816]: 2026-11-11 20:02:12,354 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/V/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 20:02:12 impressed-jade.ptr.network python[3125816]: 2026-11-11 20:02:12,512 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/W/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 20:02:12 impressed-jade.ptr.network python[3125816]: 2026-11-11 20:02:12,615 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/HB/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 20:02:12 impressed-jade.ptr.network python[3125816]: 2026-11-11 20:02:12,792 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/TT/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 20:02:13 impressed-jade.ptr.network python[3125816]: 2026-11-11 20:02:13,198 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpFqOv5z4WKps64GlQS4ytw "HTTP/1.1 200 OK"
Nov 11 20:02:13 impressed-jade.ptr.network python[3125816]: 2026-11-11 20:02:13,312 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC-2Cj6KlR9rCfR28zNLmOTA "HTTP/1.1 200 OK"
Nov 11 20:02:13 impressed-jade.ptr.network python[3125816]: 2026-11-11 20:02:13,324 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCWJ2lWNubArHWmf3FIHbfcQ "HTTP/1.1 200 OK"
Nov 11 20:02:13 impressed-jade.ptr.network python[3125816]: 2026-11-11 20:02:13,348 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCqFMzb-4AUf6WAIbl132QKA "HTTP/1.1 200 OK"
Nov 11 20:02:13 impressed-jade.ptr.network python[3125816]: 2026-11-11 20:02:13,362 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCwJ3S2Ix7aI1BhHexDJlmEg "HTTP/1.1 200 OK"
Nov 11 20:02:13 impressed-jade.ptr.network python[3125816]: 2026-11-11 20:02:13,374 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCTv-XvfzLX3i4IGWAm4sbmA "HTTP/1.1 200 OK"
Nov 11 20:02:13 impressed-jade.ptr.network python[3125816]: 2026-11-11 20:02:13,482 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCxfPjORdISQSn2fV8tcVmgA "HTTP/1.1 200 OK"
Nov 11 20:02:13 impressed-jade.ptr.network python[3125816]: 2026-11-11 20:02:13,494 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCQsH5XtIc9hONE1BQjucM0g "HTTP/1.1 200 OK"
Nov 11 20:02:13 impressed-jade.ptr.network python[3125816]: 2026-11-11 20:02:13,523 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC6UL29enLNe4mqwTfAyeNuw "HTTP/1.1 200 OK"
Nov 11 20:02:13 impressed-jade.ptr.network python[3125816]: 2026-11-11 20:02:13,552 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpryVRk_VDudG8SHXgWcG0w "HTTP/1.1 200 OK"
Nov 11 20:02:13 impressed-jade.ptr.network python[3125816]: 2026-11-11 20:02:13,582 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCyGa1YEx9ST66rYrJTGIKOw "HTTP/1.1 200 OK"
Nov 11 20:02:13 impressed-jade.ptr.network python[3125816]: 2026-11-11 20:02:13,772 INFO HTTP Request: GET https://22bet.com/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 20:02:14 impressed-jade.ptr.network python[3125816]: 2026-11-11 20:02:14,026 INFO HTTP Request: GET https://22bet.co.ke/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 20:02:14 impressed-jade.ptr.network python[3125816]: 2026-11-11 20:02:14,118 INFO HTTP Request: GET https://22bet.ng/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 20:02:20 impressed-jade.ptr.network python[3125816]: 2026-11-11 20:02:20,409 INFO HTTP Request: GET https://22bet.ug/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 20:02:20 impressed-jade.ptr.network python[3125816]: 2026-11-11 20:02:20,583 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 20:02:21 impressed-jade.ptr.network python[3125816]: 2026-11-11 20:02:21,087 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 20:02:21 impressed-jade.ptr.network python[3125816]: 2026-11-11 20:02:21,745 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
--- api log ---
Nov 11 20:02:08 impressed-jade.ptr.network uvicorn[3125827]: INFO:     Waiting for application startup.
Nov 11 20:02:08 impressed-jade.ptr.network uvicorn[3125826]: INFO:     Started server process [3125826]
Nov 11 20:02:08 impressed-jade.ptr.network uvicorn[3125826]: INFO:     Waiting for application startup.
Nov 11 20:02:09 impressed-jade.ptr.network uvicorn[3125827]: INFO:     Application startup complete.
Nov 11 20:02:09 impressed-jade.ptr.network uvicorn[3125826]: INFO:     Application startup complete.
Nov 11 20:02:09 impressed-jade.ptr.network uvicorn[3125826]: INFO:     109.92.227.130:0 - "GET /api/matches/1858/center HTTP/1.0" 200 OK
Nov 11 20:02:16 impressed-jade.ptr.network uvicorn[3125826]: INFO:     109.92.227.130:0 - "GET /api/matches/1858/center HTTP/1.0" 200 OK
Nov 11 20:02:17 impressed-jade.ptr.network uvicorn[3125826]: INFO:     109.92.227.130:0 - "GET /api/matches/1858 HTTP/1.0" 200 OK
Nov 11 20:02:23 impressed-jade.ptr.network uvicorn[3125826]: INFO:     109.92.227.130:0 - "GET /api/matches/1858/center HTTP/1.0" 200 OK
Nov 11 20:02:30 impressed-jade.ptr.network uvicorn[3125826]: INFO:     109.92.227.130:0 - "GET /api/matches/1858/center HTTP/1.0" 200 OK
Nov 11 20:02:37 impressed-jade.ptr.network uvicorn[3125826]: INFO:     109.92.227.130:0 - "GET /api/matches/1858/center HTTP/1.0" 200 OK
Nov 11 20:02:37 impressed-jade.ptr.network uvicorn[3125827]: INFO:     127.0.0.1:36576 - "GET /api/health HTTP/1.1" 200 OK
Nov 11 20:02:38 impressed-jade.ptr.network uvicorn[3125826]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 20:02:38 impressed-jade.ptr.network uvicorn[3125826]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 20:02:38 impressed-jade.ptr.network uvicorn[3125826]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
