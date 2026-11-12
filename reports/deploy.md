# Zicer deploy 2026-11-12 10:00 UTC

Итог: УСПЕХ

Сайт: https://winly.rs

Админ: данные входа в /etc/zicer-admin.txt на сервере

Коммит: 44c4804 Сторож: журнал системы сохраняется между перезагрузками (чтобы понять причину зависания), в снимке здоровья — память по службам

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

=== Админ ===
OK: админ есть
домен: winly.rs (winly.rs по Google DNS → "data":"89.208.113.147", www: нет)

=== nginx ===
2026/11/12 12:59:58 [warn] 23985#23985: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/12 12:59:58 [warn] 23985#23985: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/12 12:59:58 [warn] 23985#23985: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/12 12:59:58 [warn] 23985#23985: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/12 12:59:58 [warn] 23985#23985: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/12 12:59:58 [warn] 23985#23985: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
matches: {'esports': 235, 'hockey': 90, 'volleyball': 51, 'tabletennis': 400, 'handball': 62, 'basketball': 714, 'waterpolo': 15, 'tennis': 33, 'football': 1104}
finish_stale | 2026-11-12 09:59:01.026809 | finished 0 | 
maxbet_results | 2026-11-12 09:59:02.805167 | no pending | 
other_results | 2026-11-12 09:59:04.419223 | other results 7 | 
football_live | 2026-11-12 09:59:30.337173 | live upserted 10 | 
tg_poll | 2026-11-12 09:59:37.830432 | no token | 
live | 2026-11-12 09:59:43.084545 | live updated 0 | 
social | 2026-11-12 09:59:47.643978 | social nothing due (live) | 
basketball | 2026-11-12 09:59:53.567140 | basketball upserted 404 | 
basketball_week | 2026-11-12 09:59:54.386841 | nba week upserted 43 | 
other_sports | 2026-11-12 09:59:55.042450 | other sports new 0 | 
backfill | 2026-11-12 09:59:55.047530 | already | 
names | 2026-11-12 09:52:22.495171 | names 0 | 
logos | 2026-11-12 09:59:55.162394 | logos: nothing to do | 
highlights | 2026-11-12 09:59:55.494954 | highlights +0 | 
x22_line | 2026-11-12 10:00:04.797669 | x22 line new 0, fetched {'futsal': '0'} | 
probe_sports | 2026-11-11 21:19:02.243724 | football/line:err(22bet.ug http 404) football/live:err(cooldown: 22bet.ug http 404) futsal/line:err(cooldown: 22bet.ug http 404) futsal/live:err(cooldown: 22bet.ug http 404) boxing/line:err(cooldown: 22bet.ug http 404) boxing/live:err(cooldown: 22bet.ug http 404) mma/line:err(cooldown: 22bet.ug http 404) mma/live:err(cooldown: 22bet.ug http 404) mma2/line:err(cooldown: 22bet.ug http 404) mma2/live:err(cooldown: 22bet.ug http 404) combat/line:err(cooldown: 22bet.ug http 404) combat/live:err(coold | 
tg_reminders | 2026-11-12 09:52:22.673279 | no token | 
odds | 2026-11-12 10:00:06.801710 | odds matched 66 | 
settle | 2026-11-12 10:00:06.826244 | settled 0 | 
xfeed | 2026-11-12 10:00:20.457844 | xfeed empty (22bet.ug http 404) | 
trends | 2026-11-10 23:36:09.974574 | trends 11 | 
analysis | 2026-11-10 23:36:10.199323 | analysis 27 | 
pandascore | 2026-11-12 01:33:44.105768 | pandascore new 0, updated 206, finished 0, with streams 172, history lookups 40 | es/sqlalchemy/engine/base.py", line 1936, in _exec_single_context
football | 2026-11-12 09:59:51.759196 | football upserted 99 |  "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
--- worker log ---
Nov 12 12:59:54 impressed-jade.ptr.network python[23215]: 2026-11-12 12:59:54,744 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/W/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 12:59:54 impressed-jade.ptr.network python[23215]: 2026-11-12 12:59:54,832 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/HB/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 12:59:54 impressed-jade.ptr.network python[23215]: 2026-11-12 12:59:54,909 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/TT/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 12:59:55 impressed-jade.ptr.network python[23215]: 2026-11-12 12:59:55,257 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpFqOv5z4WKps64GlQS4ytw "HTTP/1.1 200 OK"
Nov 12 12:59:55 impressed-jade.ptr.network python[23215]: 2026-11-12 12:59:55,267 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC-2Cj6KlR9rCfR28zNLmOTA "HTTP/1.1 200 OK"
Nov 12 12:59:55 impressed-jade.ptr.network python[23215]: 2026-11-12 12:59:55,283 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCWJ2lWNubArHWmf3FIHbfcQ "HTTP/1.1 200 OK"
Nov 12 12:59:55 impressed-jade.ptr.network python[23215]: 2026-11-12 12:59:55,299 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCqFMzb-4AUf6WAIbl132QKA "HTTP/1.1 200 OK"
Nov 12 12:59:55 impressed-jade.ptr.network python[23215]: 2026-11-12 12:59:55,318 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCwJ3S2Ix7aI1BhHexDJlmEg "HTTP/1.1 200 OK"
Nov 12 12:59:55 impressed-jade.ptr.network python[23215]: 2026-11-12 12:59:55,333 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCTv-XvfzLX3i4IGWAm4sbmA "HTTP/1.1 200 OK"
Nov 12 12:59:55 impressed-jade.ptr.network python[23215]: 2026-11-12 12:59:55,347 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCxfPjORdISQSn2fV8tcVmgA "HTTP/1.1 200 OK"
Nov 12 12:59:55 impressed-jade.ptr.network python[23215]: 2026-11-12 12:59:55,423 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCQsH5XtIc9hONE1BQjucM0g "HTTP/1.1 200 OK"
Nov 12 12:59:55 impressed-jade.ptr.network python[23215]: 2026-11-12 12:59:55,441 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC6UL29enLNe4mqwTfAyeNuw "HTTP/1.1 200 OK"
Nov 12 12:59:55 impressed-jade.ptr.network python[23215]: 2026-11-12 12:59:55,459 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpryVRk_VDudG8SHXgWcG0w "HTTP/1.1 200 OK"
Nov 12 12:59:55 impressed-jade.ptr.network python[23215]: 2026-11-12 12:59:55,478 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCyGa1YEx9ST66rYrJTGIKOw "HTTP/1.1 200 OK"
Nov 12 12:59:55 impressed-jade.ptr.network python[23215]: 2026-11-12 12:59:55,615 INFO HTTP Request: GET https://22bet.com/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 12 12:59:55 impressed-jade.ptr.network python[23215]: 2026-11-12 12:59:55,663 INFO HTTP Request: GET https://22bet.com/linefeed/get1x2_vzip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 404 Not Found"
Nov 12 12:59:55 impressed-jade.ptr.network python[23215]: 2026-11-12 12:59:55,905 INFO HTTP Request: GET https://22bet.co.ke/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 12 12:59:56 impressed-jade.ptr.network python[23215]: 2026-11-12 12:59:56,040 INFO HTTP Request: GET https://22bet.co.ke/linefeed/get1x2_vzip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 404 Not Found"
Nov 12 12:59:56 impressed-jade.ptr.network python[23215]: 2026-11-12 12:59:56,110 INFO HTTP Request: GET https://22bet.ng/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 12 12:59:56 impressed-jade.ptr.network python[23215]: 2026-11-12 12:59:56,164 INFO HTTP Request: GET https://22bet.ng/linefeed/get1x2_vzip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 404 Not Found"
Nov 12 13:00:04 impressed-jade.ptr.network python[23215]: 2026-11-12 13:00:04,663 INFO HTTP Request: GET https://22bet.ug/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 12 13:00:04 impressed-jade.ptr.network python[23215]: 2026-11-12 13:00:04,796 INFO HTTP Request: GET https://22bet.ug/linefeed/get1x2_vzip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 404 Not Found"
Nov 12 13:00:05 impressed-jade.ptr.network python[23215]: 2026-11-12 13:00:05,371 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 13:00:05 impressed-jade.ptr.network python[23215]: 2026-11-12 13:00:05,961 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 13:00:06 impressed-jade.ptr.network python[23215]: 2026-11-12 13:00:06,749 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
--- api log ---
Nov 12 12:59:48 impressed-jade.ptr.network uvicorn[23232]: INFO:     Uvicorn running on http://127.0.0.1:8790 (Press CTRL+C to quit)
Nov 12 12:59:48 impressed-jade.ptr.network uvicorn[23232]: INFO:     Started parent process [23232]
Nov 12 12:59:50 impressed-jade.ptr.network uvicorn[23240]: INFO:     Started server process [23240]
Nov 12 12:59:50 impressed-jade.ptr.network uvicorn[23240]: INFO:     Waiting for application startup.
Nov 12 12:59:50 impressed-jade.ptr.network uvicorn[23240]: INFO:     Application startup complete.
Nov 12 12:59:50 impressed-jade.ptr.network uvicorn[23239]: INFO:     Started server process [23239]
Nov 12 12:59:50 impressed-jade.ptr.network uvicorn[23239]: INFO:     Waiting for application startup.
Nov 12 12:59:50 impressed-jade.ptr.network uvicorn[23239]: INFO:     Application startup complete.
Nov 12 13:00:01 impressed-jade.ptr.network uvicorn[23239]: INFO:     109.92.227.130:0 - "GET /api/home?tz=180&sport=all HTTP/1.0" 200 OK
Nov 12 13:00:06 impressed-jade.ptr.network uvicorn[23239]: INFO:     109.92.227.130:0 - "GET /api/sports?tz=180 HTTP/1.0" 200 OK
Nov 12 13:00:09 impressed-jade.ptr.network uvicorn[23239]: INFO:     127.0.0.1:46776 - "GET /api/health HTTP/1.1" 200 OK
Nov 12 13:00:23 impressed-jade.ptr.network uvicorn[23239]: INFO:     127.0.0.1:56462 - "GET /api/health HTTP/1.1" 200 OK
Nov 12 13:00:23 impressed-jade.ptr.network uvicorn[23239]: INFO:     127.0.0.1:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 12 13:00:23 impressed-jade.ptr.network uvicorn[23239]: INFO:     127.0.0.1:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 12 13:00:23 impressed-jade.ptr.network uvicorn[23239]: INFO:     127.0.0.1:0 - "GET /api/home HTTP/1.0" 200 OK
```
