# Zicer deploy 2026-11-12 12:34 UTC

Итог: УСПЕХ

Сайт: https://winly.rs

Админ: данные входа в /etc/zicer-admin.txt на сервере

Коммит: 94cf7c8 Проверка памяти сервера

```

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

=== Сторож сервера ===
OK: сторож включён (проверка раз в минуту)
OK: earlyoom включён
OK: swap есть
OK: аппаратный сторож ядра включён (softdog)
OK: снимок здоровья сервера записан
OK: список проектов на сервере записан

=== Админ ===
OK: админ есть
домен: winly.rs (winly.rs по Google DNS → "data":"89.208.113.147", www: нет)

=== nginx ===
2026/11/12 15:34:29 [warn] 7609#7609: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/12 15:34:29 [warn] 7609#7609: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/12 15:34:29 [warn] 7609#7609: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/12 15:34:29 [warn] 7609#7609: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
OK: nginx перезагружен

=== HTTPS ===
Saving debug log to /var/log/letsencrypt/letsencrypt.log
Deploying certificate
Successfully deployed certificate for winly.rs to /etc/nginx/sites-enabled/zicer.conf
OK: HTTPS включён
OK: сертификат уже есть

=== Проверки ===
OK: сборка сайта полная
api local: {"ok":true,"app":"zicer"}
api https: {"ok":true,"app":"zicer"}
https / -> 200
https /api/health -> 200
https /api/home -> 200
https /mecevi -> 200
index cache: cache-control: no-cache
cache-control: no-cache, no-store, must-revalidate
matches: {'esports': 235, 'hockey': 90, 'volleyball': 51, 'tabletennis': 400, 'handball': 62, 'basketball': 714, 'waterpolo': 15, 'tennis': 33, 'football': 1108}
basketball | 2026-11-12 12:34:14.662972 | basketball upserted 404 | 
basketball_week | 2026-11-12 12:34:15.249665 | nba week upserted 43 | 
other_sports | 2026-11-12 12:34:15.797338 | other sports new 0 | 
backfill | 2026-11-12 12:34:15.801719 | already | 
logos | 2026-11-12 12:34:15.921653 | logos: nothing to do | 
names | 2026-11-12 12:30:27.118327 | names 0 | 
highlights | 2026-11-12 12:34:16.472613 | highlights +0 | 
tg_reminders | 2026-11-12 12:30:27.616817 | no token | 
x22_line | 2026-11-12 12:34:23.643928 | x22 line new 0, fetched {'futsal': '0'} | 
odds | 2026-11-12 12:34:25.430959 | odds matched 66 | 
settle | 2026-11-12 12:34:25.456882 | settled 0 | 
live | 2026-11-12 12:34:49.344123 | live updated 2 | 
xfeed | 2026-11-12 12:34:52.963249 | xfeed empty (22bet.ug http 404) | 
tg_poll | 2026-11-12 12:34:52.968489 | no token | 
maxbet_results | 2026-11-12 12:31:38.379349 | no pending | 
other_results | 2026-11-12 12:31:44.358028 | other results 15 | 
probe_sports | 2026-11-11 21:19:02.243724 | football/line:err(22bet.ug http 404) football/live:err(cooldown: 22bet.ug http 404) futsal/line:err(cooldown: 22bet.ug http 404) futsal/live:err(cooldown: 22bet.ug http 404) boxing/line:err(cooldown: 22bet.ug http 404) boxing/live:err(cooldown: 22bet.ug http 404) mma/line:err(cooldown: 22bet.ug http 404) mma/live:err(cooldown: 22bet.ug http 404) mma2/line:err(cooldown: 22bet.ug http 404) mma2/live:err(cooldown: 22bet.ug http 404) combat/line:err(cooldown: 22bet.ug http 404) combat/live:err(coold | 
finish_stale | 2026-11-12 12:33:03.570910 | finished 0 | 
trends | 2026-11-10 23:36:09.974574 | trends 11 | 
analysis | 2026-11-10 23:36:10.199323 | analysis 27 | 
football_live | 2026-11-12 12:33:31.744592 | live upserted 10 | 
social | 2026-11-12 12:33:38.393846 | social nothing due (live) | 
football | 2026-11-12 12:34:12.844910 | football upserted 103 |  "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
pandascore | 2026-11-12 01:33:44.105768 | pandascore new 0, updated 206, finished 0, with streams 172, history lookups 40 | s/sqlalchemy/engine/base.py", line 1936, in _exec_single_context
--- worker log ---
Nov 12 15:34:15 impressed-jade.ptr.network python[5882]: 2026-11-12 15:34:15,652 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/HB/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 15:34:15 impressed-jade.ptr.network python[5882]: 2026-11-12 15:34:15,727 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/TT/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 15:34:16 impressed-jade.ptr.network python[5882]: 2026-11-12 15:34:16,090 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpFqOv5z4WKps64GlQS4ytw "HTTP/1.1 200 OK"
Nov 12 15:34:16 impressed-jade.ptr.network python[5882]: 2026-11-12 15:34:16,171 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC-2Cj6KlR9rCfR28zNLmOTA "HTTP/1.1 200 OK"
Nov 12 15:34:16 impressed-jade.ptr.network python[5882]: 2026-11-12 15:34:16,257 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCWJ2lWNubArHWmf3FIHbfcQ "HTTP/1.1 200 OK"
Nov 12 15:34:16 impressed-jade.ptr.network python[5882]: 2026-11-12 15:34:16,279 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCqFMzb-4AUf6WAIbl132QKA "HTTP/1.1 200 OK"
Nov 12 15:34:16 impressed-jade.ptr.network python[5882]: 2026-11-12 15:34:16,303 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCwJ3S2Ix7aI1BhHexDJlmEg "HTTP/1.1 200 OK"
Nov 12 15:34:16 impressed-jade.ptr.network python[5882]: 2026-11-12 15:34:16,324 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCTv-XvfzLX3i4IGWAm4sbmA "HTTP/1.1 200 OK"
Nov 12 15:34:16 impressed-jade.ptr.network python[5882]: 2026-11-12 15:34:16,390 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCxfPjORdISQSn2fV8tcVmgA "HTTP/1.1 200 OK"
Nov 12 15:34:16 impressed-jade.ptr.network python[5882]: 2026-11-12 15:34:16,401 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCQsH5XtIc9hONE1BQjucM0g "HTTP/1.1 200 OK"
Nov 12 15:34:16 impressed-jade.ptr.network python[5882]: 2026-11-12 15:34:16,418 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC6UL29enLNe4mqwTfAyeNuw "HTTP/1.1 200 OK"
Nov 12 15:34:16 impressed-jade.ptr.network python[5882]: 2026-11-12 15:34:16,434 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpryVRk_VDudG8SHXgWcG0w "HTTP/1.1 200 OK"
Nov 12 15:34:16 impressed-jade.ptr.network python[5882]: 2026-11-12 15:34:16,452 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCyGa1YEx9ST66rYrJTGIKOw "HTTP/1.1 200 OK"
Nov 12 15:34:16 impressed-jade.ptr.network python[5882]: 2026-11-12 15:34:16,589 INFO HTTP Request: GET https://22bet.com/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 12 15:34:16 impressed-jade.ptr.network python[5882]: 2026-11-12 15:34:16,652 INFO HTTP Request: GET https://22bet.com/linefeed/get1x2_vzip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 404 Not Found"
Nov 12 15:34:16 impressed-jade.ptr.network python[5882]: 2026-11-12 15:34:16,896 INFO HTTP Request: GET https://22bet.co.ke/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 12 15:34:17 impressed-jade.ptr.network python[5882]: 2026-11-12 15:34:17,044 INFO HTTP Request: GET https://22bet.co.ke/linefeed/get1x2_vzip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 404 Not Found"
Nov 12 15:34:17 impressed-jade.ptr.network python[5882]: 2026-11-12 15:34:17,128 INFO HTTP Request: GET https://22bet.ng/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 12 15:34:17 impressed-jade.ptr.network python[5882]: 2026-11-12 15:34:17,197 INFO HTTP Request: GET https://22bet.ng/linefeed/get1x2_vzip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 404 Not Found"
Nov 12 15:34:23 impressed-jade.ptr.network python[5882]: 2026-11-12 15:34:23,516 INFO HTTP Request: GET https://22bet.ug/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 12 15:34:23 impressed-jade.ptr.network python[5882]: 2026-11-12 15:34:23,642 INFO HTTP Request: GET https://22bet.ug/linefeed/get1x2_vzip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 404 Not Found"
Nov 12 15:34:24 impressed-jade.ptr.network python[5882]: 2026-11-12 15:34:24,176 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 15:34:24 impressed-jade.ptr.network python[5882]: 2026-11-12 15:34:24,720 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 15:34:25 impressed-jade.ptr.network python[5882]: 2026-11-12 15:34:25,391 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 15:34:49 impressed-jade.ptr.network python[5882]: 2026-11-12 15:34:49,221 INFO HTTP Request: GET https://www.maxbet.rs/live/init/sr "HTTP/1.1 200 OK"
--- api log ---
Nov 12 15:34:12 impressed-jade.ptr.network uvicorn[5887]: INFO:     Started server process [5887]
Nov 12 15:34:12 impressed-jade.ptr.network uvicorn[5887]: INFO:     Waiting for application startup.
Nov 12 15:34:12 impressed-jade.ptr.network uvicorn[5887]: INFO:     Application startup complete.
Nov 12 15:34:12 impressed-jade.ptr.network uvicorn[5888]: INFO:     Started server process [5888]
Nov 12 15:34:12 impressed-jade.ptr.network uvicorn[5888]: INFO:     Waiting for application startup.
Nov 12 15:34:12 impressed-jade.ptr.network uvicorn[5888]: INFO:     Application startup complete.
Nov 12 15:34:24 impressed-jade.ptr.network uvicorn[5887]: INFO:     109.92.227.130:0 - "GET /api/me/watch?ids= HTTP/1.0" 200 OK
Nov 12 15:34:33 impressed-jade.ptr.network uvicorn[5888]: INFO:     109.92.227.130:0 - "GET /api/home?tz=180&sport=all HTTP/1.0" 200 OK
Nov 12 15:34:44 impressed-jade.ptr.network uvicorn[5888]: INFO:     109.92.227.130:0 - "GET /api/me/watch?ids= HTTP/1.0" 200 OK
Nov 12 15:34:48 impressed-jade.ptr.network uvicorn[5888]: INFO:     109.92.227.130:0 - "GET /api/sports?tz=180 HTTP/1.0" 200 OK
Nov 12 15:34:48 impressed-jade.ptr.network uvicorn[5888]: INFO:     127.0.0.1:59896 - "GET /seo-render/mec/2632-raska-m-velky-jr-d HTTP/1.0" 200 OK
Nov 12 15:34:53 impressed-jade.ptr.network uvicorn[5888]: INFO:     127.0.0.1:49400 - "GET /api/health HTTP/1.1" 200 OK
Nov 12 15:34:53 impressed-jade.ptr.network uvicorn[5887]: INFO:     127.0.0.1:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 12 15:34:53 impressed-jade.ptr.network uvicorn[5888]: INFO:     127.0.0.1:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 12 15:34:54 impressed-jade.ptr.network uvicorn[5887]: INFO:     127.0.0.1:0 - "GET /api/home HTTP/1.0" 200 OK
```
