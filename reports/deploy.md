# Zicer deploy 2026-11-12 00:48 UTC

Итог: УСПЕХ

Сайт: https://winly.rs

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: a578949 Кириллица: подстановки {b}, {won}, {all} больше не транслитерируются — «+2.000 у банку» в баннере «Првих 100» и «Прошло N од M» в тикете

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
2026/11/12 03:48:20 [warn] 115851#115851: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/12 03:48:20 [warn] 115851#115851: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/12 03:48:20 [warn] 115851#115851: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/12 03:48:20 [warn] 115851#115851: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/12 03:48:20 [warn] 115851#115851: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/12 03:48:20 [warn] 115851#115851: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
matches: {'esports': 235, 'hockey': 63, 'volleyball': 42, 'tabletennis': 243, 'basketball': 713, 'handball': 47, 'waterpolo': 13, 'tennis': 25, 'football': 1104}
social | 2026-11-12 00:46:14.236271 | social nothing due (live) | 
maxbet_results | 2026-11-12 00:46:15.908307 | no pending | 
other_results | 2026-11-12 00:46:20.112463 | other results 10 | 
probe_sports | 2026-11-11 21:19:02.243724 | football/line:err(22bet.ug http 404) football/live:err(cooldown: 22bet.ug http 404) futsal/line:err(cooldown: 22bet.ug http 404) futsal/live:err(cooldown: 22bet.ug http 404) boxing/line:err(cooldown: 22bet.ug http 404) boxing/live:err(cooldown: 22bet.ug http 404) mma/line:err(cooldown: 22bet.ug http 404) mma/live:err(cooldown: 22bet.ug http 404) mma2/line:err(cooldown: 22bet.ug http 404) mma2/live:err(cooldown: 22bet.ug http 404) combat/line:err(cooldown: 22bet.ug http 404) combat/live:err(coold | 
finish_stale | 2026-11-12 00:47:39.528749 | finished 0 | 
football_live | 2026-11-12 00:47:58.741941 | live upserted 11 | 
tg_poll | 2026-11-12 00:48:02.621446 | no token | 
live | 2026-11-12 00:48:07.850640 | live updated 7 | 
basketball | 2026-11-12 00:48:14.745933 | basketball upserted 414 | 
trends | 2026-11-10 23:36:09.974574 | trends 11 | 
basketball_week | 2026-11-12 00:48:15.593186 | nba week upserted 43 | 
analysis | 2026-11-10 23:36:10.199323 | analysis 27 | 
other_sports | 2026-11-12 00:48:16.155040 | other sports new 0 | 
backfill | 2026-11-12 00:48:16.161801 | already | 
logos | 2026-11-12 00:48:16.249175 | logos: nothing to do | 
highlights | 2026-11-12 00:48:16.515563 | highlights +0 | 
x22_line | 2026-11-12 00:48:23.639273 | x22 line new 0, fetched {'futsal': '0'} | 
odds | 2026-11-12 00:48:24.340053 | odds matched 63 | 
settle | 2026-11-12 00:48:24.367854 | settled 0 | 
xfeed | 2026-11-12 00:48:37.996053 | xfeed empty (22bet.ug http 404) | 
tg_reminders | 2026-11-12 00:45:10.262706 | no token | 
names | 2026-11-12 00:45:10.283902 | names 0 | 
football | 2026-11-12 00:48:13.055675 | football upserted 100 |  "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
pandascore | 2026-11-12 00:03:41.416932 | pandascore new 12, updated 206, finished 0 | ile "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/engine/base.py", line 1986, in _exec_single_context
--- worker log ---
Nov 12 03:48:15 impressed-jade.ptr.network python[115513]: 2026-11-12 03:48:15,890 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/W/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 03:48:15 impressed-jade.ptr.network python[115513]: 2026-11-12 03:48:15,980 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/HB/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 03:48:16 impressed-jade.ptr.network python[115513]: 2026-11-12 03:48:16,083 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/TT/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 03:48:16 impressed-jade.ptr.network python[115513]: 2026-11-12 03:48:16,344 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpFqOv5z4WKps64GlQS4ytw "HTTP/1.1 200 OK"
Nov 12 03:48:16 impressed-jade.ptr.network python[115513]: 2026-11-12 03:48:16,355 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC-2Cj6KlR9rCfR28zNLmOTA "HTTP/1.1 200 OK"
Nov 12 03:48:16 impressed-jade.ptr.network python[115513]: 2026-11-12 03:48:16,367 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCWJ2lWNubArHWmf3FIHbfcQ "HTTP/1.1 200 OK"
Nov 12 03:48:16 impressed-jade.ptr.network python[115513]: 2026-11-12 03:48:16,387 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCqFMzb-4AUf6WAIbl132QKA "HTTP/1.1 200 OK"
Nov 12 03:48:16 impressed-jade.ptr.network python[115513]: 2026-11-12 03:48:16,403 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCwJ3S2Ix7aI1BhHexDJlmEg "HTTP/1.1 200 OK"
Nov 12 03:48:16 impressed-jade.ptr.network python[115513]: 2026-11-12 03:48:16,417 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCTv-XvfzLX3i4IGWAm4sbmA "HTTP/1.1 200 OK"
Nov 12 03:48:16 impressed-jade.ptr.network python[115513]: 2026-11-12 03:48:16,431 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCxfPjORdISQSn2fV8tcVmgA "HTTP/1.1 200 OK"
Nov 12 03:48:16 impressed-jade.ptr.network python[115513]: 2026-11-12 03:48:16,441 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCQsH5XtIc9hONE1BQjucM0g "HTTP/1.1 200 OK"
Nov 12 03:48:16 impressed-jade.ptr.network python[115513]: 2026-11-12 03:48:16,459 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC6UL29enLNe4mqwTfAyeNuw "HTTP/1.1 200 OK"
Nov 12 03:48:16 impressed-jade.ptr.network python[115513]: 2026-11-12 03:48:16,477 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpryVRk_VDudG8SHXgWcG0w "HTTP/1.1 200 OK"
Nov 12 03:48:16 impressed-jade.ptr.network python[115513]: 2026-11-12 03:48:16,496 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCyGa1YEx9ST66rYrJTGIKOw "HTTP/1.1 200 OK"
Nov 12 03:48:16 impressed-jade.ptr.network python[115513]: 2026-11-12 03:48:16,620 INFO HTTP Request: GET https://22bet.com/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 12 03:48:16 impressed-jade.ptr.network python[115513]: 2026-11-12 03:48:16,666 INFO HTTP Request: GET https://22bet.com/linefeed/get1x2_vzip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 404 Not Found"
Nov 12 03:48:16 impressed-jade.ptr.network python[115513]: 2026-11-12 03:48:16,909 INFO HTTP Request: GET https://22bet.co.ke/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 12 03:48:17 impressed-jade.ptr.network python[115513]: 2026-11-12 03:48:17,048 INFO HTTP Request: GET https://22bet.co.ke/linefeed/get1x2_vzip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 404 Not Found"
Nov 12 03:48:17 impressed-jade.ptr.network python[115513]: 2026-11-12 03:48:17,142 INFO HTTP Request: GET https://22bet.ng/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 12 03:48:17 impressed-jade.ptr.network python[115513]: 2026-11-12 03:48:17,214 INFO HTTP Request: GET https://22bet.ng/linefeed/get1x2_vzip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 404 Not Found"
Nov 12 03:48:23 impressed-jade.ptr.network python[115513]: 2026-11-12 03:48:23,501 INFO HTTP Request: GET https://22bet.ug/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 12 03:48:23 impressed-jade.ptr.network python[115513]: 2026-11-12 03:48:23,638 INFO HTTP Request: GET https://22bet.ug/linefeed/get1x2_vzip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 404 Not Found"
Nov 12 03:48:23 impressed-jade.ptr.network python[115513]: 2026-11-12 03:48:23,747 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 03:48:23 impressed-jade.ptr.network python[115513]: 2026-11-12 03:48:23,933 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 03:48:24 impressed-jade.ptr.network python[115513]: 2026-11-12 03:48:24,303 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
--- api log ---
Nov 12 03:48:31 impressed-jade.ptr.network uvicorn[115518]: INFO:     87.116.135.226:0 - "POST /api/t HTTP/1.0" 200 OK
Nov 12 03:48:31 impressed-jade.ptr.network uvicorn[115519]: INFO:     87.116.135.226:0 - "GET /api/matches/2165 HTTP/1.0" 200 OK
Nov 12 03:48:34 impressed-jade.ptr.network uvicorn[115519]: INFO:     87.116.135.226:0 - "GET /api/sports?tz=60 HTTP/1.0" 200 OK
Nov 12 03:48:34 impressed-jade.ptr.network uvicorn[115519]: INFO:     87.116.135.226:0 - "POST /api/t HTTP/1.0" 200 OK
Nov 12 03:48:34 impressed-jade.ptr.network uvicorn[115519]: INFO:     87.116.135.226:0 - "GET /api/home?tz=60&sport=esports HTTP/1.0" 200 OK
Nov 12 03:48:36 impressed-jade.ptr.network uvicorn[115519]: INFO:     87.116.135.226:0 - "PATCH /api/me HTTP/1.0" 200 OK
Nov 12 03:48:38 impressed-jade.ptr.network uvicorn[115518]: INFO:     87.116.135.226:0 - "POST /api/t HTTP/1.0" 200 OK
Nov 12 03:48:38 impressed-jade.ptr.network uvicorn[115519]: INFO:     87.116.135.226:0 - "GET /api/matches/2128 HTTP/1.0" 200 OK
Nov 12 03:48:41 impressed-jade.ptr.network uvicorn[115519]: INFO:     87.116.135.226:0 - "GET /api/sports?tz=60 HTTP/1.0" 200 OK
Nov 12 03:48:41 impressed-jade.ptr.network uvicorn[115518]: INFO:     87.116.135.226:0 - "POST /api/t HTTP/1.0" 200 OK
Nov 12 03:48:41 impressed-jade.ptr.network uvicorn[115518]: INFO:     87.116.135.226:0 - "GET /api/home?tz=60&sport=all HTTP/1.0" 200 OK
Nov 12 03:48:43 impressed-jade.ptr.network uvicorn[115519]: INFO:     127.0.0.1:50040 - "GET /api/health HTTP/1.1" 200 OK
Nov 12 03:48:43 impressed-jade.ptr.network uvicorn[115518]: INFO:     127.0.0.1:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 12 03:48:43 impressed-jade.ptr.network uvicorn[115519]: INFO:     127.0.0.1:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 12 03:48:43 impressed-jade.ptr.network uvicorn[115518]: INFO:     127.0.0.1:0 - "GET /api/home HTTP/1.0" 200 OK
```
