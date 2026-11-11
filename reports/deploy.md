# Zicer deploy 2026-11-11 21:15 UTC

Итог: УСПЕХ

Сайт: https://winly.rs

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: 0f679b1 Линия 22Bet: следовать перенаправлениям (футзал/проверка видов спорта)

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
домен: winly.rs (winly.rs по Google DNS → "data":"89.208.113.147", www: нет)

=== nginx ===
2026/11/12 00:15:22 [warn] 3462253#3462253: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/12 00:15:22 [warn] 3462253#3462253: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/12 00:15:22 [warn] 3462253#3462253: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/12 00:15:22 [warn] 3462253#3462253: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/12 00:15:22 [warn] 3462253#3462253: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/12 00:15:22 [warn] 3462253#3462253: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
matches: {'esports': 58, 'hockey': 63, 'volleyball': 42, 'tabletennis': 216, 'basketball': 713, 'handball': 47, 'waterpolo': 13, 'tennis': 25, 'football': 1104}
names | 2026-11-11 21:00:03.991875 | names 10 | 
maxbet_results | 2026-11-11 21:13:23.139415 | maxbet results 5 | 
other_results | 2026-11-11 21:13:29.949840 | other results 21 | 
probe_sports | 2026-11-11 21:14:06.296669 | football/line:err(22bet.ug http 308) football/live:err(cooldown: 22bet.ug http 308) futsal/line:err(cooldown: 22bet.ug http 308) futsal/live:err(cooldown: 22bet.ug http 308) boxing/line:err(cooldown: 22bet.ug http 308) boxing/live:err(cooldown: 22bet.ug http 308) mma/line:err(cooldown: 22bet.ug http 308) mma/live:err(cooldown: 22bet.ug http 308) mma2/line:err(cooldown: 22bet.ug http 308) mma2/live:err(cooldown: 22bet.ug http 308) combat/line:err(cooldown: 22bet.ug http 308) combat/live:err(coold | 
social | 2026-11-11 21:14:24.385110 | social nothing due (test) | 
finish_stale | 2026-11-11 21:14:40.811246 | finished 0 | 
football_live | 2026-11-11 21:14:45.926324 | live upserted 11 | 
tg_poll | 2026-11-11 21:15:04.207635 | no token | 
live | 2026-11-11 21:15:09.573382 | live updated 14 | 
basketball | 2026-11-11 21:15:17.400277 | basketball upserted 417 | 
basketball_week | 2026-11-11 21:15:18.611515 | nba week upserted 43 | 
other_sports | 2026-11-11 21:15:19.343959 | other sports new 0 | 
backfill | 2026-11-11 21:15:19.348808 | already | 
logos | 2026-11-11 21:15:19.451604 | logos: nothing to do | 
highlights | 2026-11-11 21:15:20.249440 | highlights +0 | 
x22_line | 2026-11-11 21:15:27.452323 | x22 line new 0, fetched {'futsal': '0'} | 
odds | 2026-11-11 21:15:28.332074 | odds matched 66 | 
settle | 2026-11-11 21:15:28.367160 | settled 0 | 
xfeed | 2026-11-11 21:15:41.994692 | xfeed empty (22bet.ug http 404) | 
trends | 2026-11-10 23:36:09.974574 | trends 11 | 
analysis | 2026-11-10 23:36:10.199323 | analysis 27 | 
tg_reminders | 2026-11-11 20:59:52.992212 | no token | 
football | 2026-11-11 21:15:15.692048 | football upserted 100 |  "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
pandascore | 2026-11-11 16:06:16.134963 | pandascore new 0, updated 58, finished 0 | le "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/engine/base.py", line 1986, in _exec_single_context
--- worker log ---
Nov 12 00:15:19 impressed-jade.ptr.network python[3461910]: 2026-11-12 00:15:19,055 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/W/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 00:15:19 impressed-jade.ptr.network python[3461910]: 2026-11-12 00:15:19,142 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/HB/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 00:15:19 impressed-jade.ptr.network python[3461910]: 2026-11-12 00:15:19,250 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/TT/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 00:15:19 impressed-jade.ptr.network python[3461910]: 2026-11-12 00:15:19,589 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpFqOv5z4WKps64GlQS4ytw "HTTP/1.1 200 OK"
Nov 12 00:15:19 impressed-jade.ptr.network python[3461910]: 2026-11-12 00:15:19,652 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC-2Cj6KlR9rCfR28zNLmOTA "HTTP/1.1 200 OK"
Nov 12 00:15:19 impressed-jade.ptr.network python[3461910]: 2026-11-12 00:15:19,665 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCWJ2lWNubArHWmf3FIHbfcQ "HTTP/1.1 200 OK"
Nov 12 00:15:19 impressed-jade.ptr.network python[3461910]: 2026-11-12 00:15:19,693 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCqFMzb-4AUf6WAIbl132QKA "HTTP/1.1 200 OK"
Nov 12 00:15:19 impressed-jade.ptr.network python[3461910]: 2026-11-12 00:15:19,707 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCwJ3S2Ix7aI1BhHexDJlmEg "HTTP/1.1 200 OK"
Nov 12 00:15:19 impressed-jade.ptr.network python[3461910]: 2026-11-12 00:15:19,719 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCTv-XvfzLX3i4IGWAm4sbmA "HTTP/1.1 200 OK"
Nov 12 00:15:19 impressed-jade.ptr.network python[3461910]: 2026-11-12 00:15:19,788 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCxfPjORdISQSn2fV8tcVmgA "HTTP/1.1 200 OK"
Nov 12 00:15:19 impressed-jade.ptr.network python[3461910]: 2026-11-12 00:15:19,849 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCQsH5XtIc9hONE1BQjucM0g "HTTP/1.1 200 OK"
Nov 12 00:15:19 impressed-jade.ptr.network python[3461910]: 2026-11-12 00:15:19,920 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC6UL29enLNe4mqwTfAyeNuw "HTTP/1.1 200 OK"
Nov 12 00:15:19 impressed-jade.ptr.network python[3461910]: 2026-11-12 00:15:19,948 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpryVRk_VDudG8SHXgWcG0w "HTTP/1.1 200 OK"
Nov 12 00:15:20 impressed-jade.ptr.network python[3461910]: 2026-11-12 00:15:20,228 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCyGa1YEx9ST66rYrJTGIKOw "HTTP/1.1 200 OK"
Nov 12 00:15:20 impressed-jade.ptr.network python[3461910]: 2026-11-12 00:15:20,384 INFO HTTP Request: GET https://22bet.com/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 12 00:15:20 impressed-jade.ptr.network python[3461910]: 2026-11-12 00:15:20,449 INFO HTTP Request: GET https://22bet.com/linefeed/get1x2_vzip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 404 Not Found"
Nov 12 00:15:20 impressed-jade.ptr.network python[3461910]: 2026-11-12 00:15:20,690 INFO HTTP Request: GET https://22bet.co.ke/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 12 00:15:20 impressed-jade.ptr.network python[3461910]: 2026-11-12 00:15:20,811 INFO HTTP Request: GET https://22bet.co.ke/linefeed/get1x2_vzip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 404 Not Found"
Nov 12 00:15:20 impressed-jade.ptr.network python[3461910]: 2026-11-12 00:15:20,907 INFO HTTP Request: GET https://22bet.ng/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 12 00:15:20 impressed-jade.ptr.network python[3461910]: 2026-11-12 00:15:20,976 INFO HTTP Request: GET https://22bet.ng/linefeed/get1x2_vzip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 404 Not Found"
Nov 12 00:15:27 impressed-jade.ptr.network python[3461910]: 2026-11-12 00:15:27,301 INFO HTTP Request: GET https://22bet.ug/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 12 00:15:27 impressed-jade.ptr.network python[3461910]: 2026-11-12 00:15:27,450 INFO HTTP Request: GET https://22bet.ug/linefeed/get1x2_vzip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 404 Not Found"
Nov 12 00:15:27 impressed-jade.ptr.network python[3461910]: 2026-11-12 00:15:27,569 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 00:15:27 impressed-jade.ptr.network python[3461910]: 2026-11-12 00:15:27,754 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 00:15:28 impressed-jade.ptr.network python[3461910]: 2026-11-12 00:15:28,267 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
--- api log ---
Nov 12 00:15:15 impressed-jade.ptr.network uvicorn[3461918]: INFO:     Started server process [3461918]
Nov 12 00:15:15 impressed-jade.ptr.network uvicorn[3461918]: INFO:     Waiting for application startup.
Nov 12 00:15:16 impressed-jade.ptr.network uvicorn[3461918]: INFO:     Application startup complete.
Nov 12 00:15:43 impressed-jade.ptr.network uvicorn[3461917]: INFO:     87.116.135.226:0 - "GET /api/sports?tz=60 HTTP/1.0" 200 OK
Nov 12 00:15:43 impressed-jade.ptr.network uvicorn[3461918]: INFO:     87.116.135.226:0 - "GET /api/clubs/battle?sport=football HTTP/1.0" 200 OK
Nov 12 00:15:43 impressed-jade.ptr.network uvicorn[3461917]: INFO:     87.116.135.226:0 - "GET /api/me/watch?ids= HTTP/1.0" 200 OK
Nov 12 00:15:43 impressed-jade.ptr.network uvicorn[3461918]: INFO:     87.116.135.226:0 - "GET /api/matches?day=today&sport=all&serbian=false&tz=60 HTTP/1.0" 200 OK
Nov 12 00:15:43 impressed-jade.ptr.network uvicorn[3461917]: INFO:     87.116.135.226:0 - "OPTIONS /api/me/watch?ids= HTTP/1.0" 405 Method Not Allowed
Nov 12 00:15:43 impressed-jade.ptr.network uvicorn[3461917]: INFO:     87.116.135.226:0 - "OPTIONS /api/matches/1822 HTTP/1.0" 405 Method Not Allowed
Nov 12 00:15:43 impressed-jade.ptr.network uvicorn[3461917]: INFO:     87.116.135.226:0 - "OPTIONS /api/clubs/battle?sport=football HTTP/1.0" 405 Method Not Allowed
Nov 12 00:15:43 impressed-jade.ptr.network uvicorn[3461917]: INFO:     87.116.135.226:0 - "OPTIONS /api/bookmakers HTTP/1.0" 405 Method Not Allowed
Nov 12 00:15:46 impressed-jade.ptr.network uvicorn[3461918]: INFO:     127.0.0.1:48420 - "GET /api/health HTTP/1.1" 200 OK
Nov 12 00:15:46 impressed-jade.ptr.network uvicorn[3461917]: INFO:     127.0.0.1:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 12 00:15:46 impressed-jade.ptr.network uvicorn[3461918]: INFO:     127.0.0.1:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 12 00:15:46 impressed-jade.ptr.network uvicorn[3461917]: INFO:     127.0.0.1:0 - "GET /api/home HTTP/1.0" 200 OK
```
