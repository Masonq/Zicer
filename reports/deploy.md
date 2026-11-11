# Zicer deploy 2026-11-11 17:57 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: 007c219 Матч-центр: подача без телепорта — мяч катится к подающему по линии; повторный вызов той же подачи не сбрасывает розыгрыш (настольный теннис больше не замирает у края стола)

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
2026/11/11 20:57:31 [warn] 3199983#3199983: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/11 20:57:31 [warn] 3199983#3199983: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/11 20:57:31 [warn] 3199983#3199983: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/11 20:57:31 [warn] 3199983#3199983: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/11 20:57:31 [warn] 3199983#3199983: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/11 20:57:31 [warn] 3199983#3199983: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
live | 2026-11-11 17:57:05.659219 | live updated 51 | 
social | 2026-11-11 17:57:12.367364 | social nothing due (test) | 
football_live | 2026-11-11 17:57:17.433517 | live upserted 0 | 
tg_poll | 2026-11-11 17:57:21.458433 | no token | 
basketball | 2026-11-11 17:57:26.852268 | basketball upserted 414 | 
basketball_week | 2026-11-11 17:57:27.625252 | nba week upserted 48 | 
other_sports | 2026-11-11 17:57:28.320352 | other sports new 0 | 
backfill | 2026-11-11 17:57:28.326142 | already | 
logos | 2026-11-11 17:57:28.415072 | logos: nothing to do | 
highlights | 2026-11-11 17:57:28.890808 | highlights +0 | 
x22_line | 2026-11-11 17:57:35.790447 | x22 line new 0, fetched {'futsal': '0'} | 
odds | 2026-11-11 17:57:37.125910 | odds matched 71 | 
names | 2026-11-11 17:54:00.281394 | names 0 | 
tg_reminders | 2026-11-11 17:54:00.711529 | no token | 
settle | 2026-11-11 17:57:37.176134 | settled 0 | 
xfeed | 2026-11-11 17:57:50.796644 | xfeed empty (22bet.ug http 308) | 
maxbet_results | 2026-11-11 17:55:08.808366 | maxbet results 12 | 
other_results | 2026-11-11 17:55:20.744805 | other results 50 | 
trends | 2026-11-10 23:36:09.974574 | trends 11 | 
analysis | 2026-11-10 23:36:10.199323 | analysis 27 | 
pandascore | 2026-11-11 16:06:16.134963 | pandascore new 0, updated 58, finished 0 | nv/lib/python3.12/site-packages/sqlalchemy/engine/base.py", line 1986, in _exec_single_context
finish_stale | 2026-11-11 17:56:46.363335 | finished 0 | 
football | 2026-11-11 17:57:25.025604 | football upserted 96 |  "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
--- worker log ---
Nov 11 20:57:27 impressed-jade.ptr.network python[3199620]: 2026-11-11 20:57:27,585 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261118 "HTTP/1.1 200 OK"
Nov 11 20:57:27 impressed-jade.ptr.network python[3199620]: 2026-11-11 20:57:27,765 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/H/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 20:57:27 impressed-jade.ptr.network python[3199620]: 2026-11-11 20:57:27,846 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/T/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 20:57:27 impressed-jade.ptr.network python[3199620]: 2026-11-11 20:57:27,931 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/V/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 20:57:28 impressed-jade.ptr.network python[3199620]: 2026-11-11 20:57:28,021 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/W/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 20:57:28 impressed-jade.ptr.network python[3199620]: 2026-11-11 20:57:28,101 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/HB/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 20:57:28 impressed-jade.ptr.network python[3199620]: 2026-11-11 20:57:28,230 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/TT/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 20:57:28 impressed-jade.ptr.network python[3199620]: 2026-11-11 20:57:28,554 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpFqOv5z4WKps64GlQS4ytw "HTTP/1.1 200 OK"
Nov 11 20:57:28 impressed-jade.ptr.network python[3199620]: 2026-11-11 20:57:28,607 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC-2Cj6KlR9rCfR28zNLmOTA "HTTP/1.1 200 OK"
Nov 11 20:57:28 impressed-jade.ptr.network python[3199620]: 2026-11-11 20:57:28,675 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCWJ2lWNubArHWmf3FIHbfcQ "HTTP/1.1 200 OK"
Nov 11 20:57:28 impressed-jade.ptr.network python[3199620]: 2026-11-11 20:57:28,696 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCqFMzb-4AUf6WAIbl132QKA "HTTP/1.1 200 OK"
Nov 11 20:57:28 impressed-jade.ptr.network python[3199620]: 2026-11-11 20:57:28,711 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCwJ3S2Ix7aI1BhHexDJlmEg "HTTP/1.1 200 OK"
Nov 11 20:57:28 impressed-jade.ptr.network python[3199620]: 2026-11-11 20:57:28,726 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCTv-XvfzLX3i4IGWAm4sbmA "HTTP/1.1 200 OK"
Nov 11 20:57:28 impressed-jade.ptr.network python[3199620]: 2026-11-11 20:57:28,796 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCxfPjORdISQSn2fV8tcVmgA "HTTP/1.1 200 OK"
Nov 11 20:57:28 impressed-jade.ptr.network python[3199620]: 2026-11-11 20:57:28,808 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCQsH5XtIc9hONE1BQjucM0g "HTTP/1.1 200 OK"
Nov 11 20:57:28 impressed-jade.ptr.network python[3199620]: 2026-11-11 20:57:28,835 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC6UL29enLNe4mqwTfAyeNuw "HTTP/1.1 200 OK"
Nov 11 20:57:28 impressed-jade.ptr.network python[3199620]: 2026-11-11 20:57:28,854 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpryVRk_VDudG8SHXgWcG0w "HTTP/1.1 200 OK"
Nov 11 20:57:28 impressed-jade.ptr.network python[3199620]: 2026-11-11 20:57:28,876 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCyGa1YEx9ST66rYrJTGIKOw "HTTP/1.1 200 OK"
Nov 11 20:57:29 impressed-jade.ptr.network python[3199620]: 2026-11-11 20:57:29,002 INFO HTTP Request: GET https://22bet.com/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 20:57:29 impressed-jade.ptr.network python[3199620]: 2026-11-11 20:57:29,259 INFO HTTP Request: GET https://22bet.co.ke/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 20:57:29 impressed-jade.ptr.network python[3199620]: 2026-11-11 20:57:29,378 INFO HTTP Request: GET https://22bet.ng/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 20:57:35 impressed-jade.ptr.network python[3199620]: 2026-11-11 20:57:35,789 INFO HTTP Request: GET https://22bet.ug/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 20:57:36 impressed-jade.ptr.network python[3199620]: 2026-11-11 20:57:36,009 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 20:57:36 impressed-jade.ptr.network python[3199620]: 2026-11-11 20:57:36,420 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 20:57:37 impressed-jade.ptr.network python[3199620]: 2026-11-11 20:57:37,023 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
--- api log ---
Nov 11 20:57:23 impressed-jade.ptr.network systemd[1]: Started zicer-api.service - Zicer API.
Nov 11 20:57:23 impressed-jade.ptr.network uvicorn[3199644]: INFO:     Uvicorn running on http://127.0.0.1:8790 (Press CTRL+C to quit)
Nov 11 20:57:23 impressed-jade.ptr.network uvicorn[3199644]: INFO:     Started parent process [3199644]
Nov 11 20:57:25 impressed-jade.ptr.network uvicorn[3199648]: INFO:     Started server process [3199648]
Nov 11 20:57:25 impressed-jade.ptr.network uvicorn[3199648]: INFO:     Waiting for application startup.
Nov 11 20:57:25 impressed-jade.ptr.network uvicorn[3199648]: INFO:     Application startup complete.
Nov 11 20:57:25 impressed-jade.ptr.network uvicorn[3199647]: INFO:     Started server process [3199647]
Nov 11 20:57:25 impressed-jade.ptr.network uvicorn[3199647]: INFO:     Waiting for application startup.
Nov 11 20:57:26 impressed-jade.ptr.network uvicorn[3199647]: INFO:     Application startup complete.
Nov 11 20:57:30 impressed-jade.ptr.network uvicorn[3199647]: INFO:     109.92.227.130:0 - "GET /api/sports?tz=180 HTTP/1.0" 200 OK
Nov 11 20:57:55 impressed-jade.ptr.network uvicorn[3199647]: INFO:     127.0.0.1:54934 - "GET /api/health HTTP/1.1" 200 OK
Nov 11 20:57:55 impressed-jade.ptr.network uvicorn[3199647]: INFO:     109.92.227.130:0 - "GET /api/me/watch?ids=1858 HTTP/1.0" 200 OK
Nov 11 20:57:55 impressed-jade.ptr.network uvicorn[3199648]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 20:57:55 impressed-jade.ptr.network uvicorn[3199647]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 20:57:56 impressed-jade.ptr.network uvicorn[3199647]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
