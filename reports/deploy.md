# Zicer deploy 2026-11-12 10:04 UTC

Итог: УСПЕХ

Сайт: https://winly.rs

Админ: данные входа в /etc/zicer-admin.txt на сервере

Коммит: e5b7ba5 Сторож: журнал сохраняется между перезагрузками, в снимке — память по службам

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
2026/11/12 13:04:06 [warn] 30353#30353: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/12 13:04:06 [warn] 30353#30353: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/12 13:04:06 [warn] 30353#30353: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/12 13:04:06 [warn] 30353#30353: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/12 13:04:06 [warn] 30353#30353: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/12 13:04:06 [warn] 30353#30353: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
finish_stale | 2026-11-12 10:03:17.522768 | finished 0 | 
maxbet_results | 2026-11-12 10:03:19.421089 | no pending | 
other_results | 2026-11-12 10:03:25.538112 | other results 9 | 
live | 2026-11-12 10:03:31.827011 | live updated 2 | 
tg_poll | 2026-11-12 10:03:49.641621 | no token | 
football_live | 2026-11-12 10:03:54.779864 | live upserted 10 | 
basketball | 2026-11-12 10:03:59.426008 | basketball upserted 404 | 
basketball_week | 2026-11-12 10:04:00.372219 | nba week upserted 43 | 
other_sports | 2026-11-12 10:04:01.097305 | other sports new 0 | 
backfill | 2026-11-12 10:04:01.104201 | already | 
logos | 2026-11-12 10:04:01.234607 | logos: nothing to do | 
highlights | 2026-11-12 10:04:01.880405 | highlights +0 | 
names | 2026-11-12 09:52:22.495171 | names 0 | 
probe_sports | 2026-11-11 21:19:02.243724 | football/line:err(22bet.ug http 404) football/live:err(cooldown: 22bet.ug http 404) futsal/line:err(cooldown: 22bet.ug http 404) futsal/live:err(cooldown: 22bet.ug http 404) boxing/line:err(cooldown: 22bet.ug http 404) boxing/live:err(cooldown: 22bet.ug http 404) mma/line:err(cooldown: 22bet.ug http 404) mma/live:err(cooldown: 22bet.ug http 404) mma2/line:err(cooldown: 22bet.ug http 404) mma2/live:err(cooldown: 22bet.ug http 404) combat/line:err(cooldown: 22bet.ug http 404) combat/live:err(coold | 
tg_reminders | 2026-11-12 09:52:22.673279 | no token | 
x22_line | 2026-11-12 10:04:08.992574 | x22 line new 0, fetched {'futsal': '0'} | 
odds | 2026-11-12 10:04:10.318654 | odds matched 66 | 
settle | 2026-11-12 10:04:10.346524 | settled 0 | 
xfeed | 2026-11-12 10:04:23.969427 | xfeed empty (22bet.ug http 404) | 
trends | 2026-11-10 23:36:09.974574 | trends 11 | 
analysis | 2026-11-10 23:36:10.199323 | analysis 27 | 
social | 2026-11-12 10:02:08.234215 | social nothing due (live) | 
football | 2026-11-12 10:03:57.597927 | football upserted 99 |  "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
pandascore | 2026-11-12 01:33:44.105768 | pandascore new 0, updated 206, finished 0, with streams 172, history lookups 40 | es/sqlalchemy/engine/base.py", line 1936, in _exec_single_context
--- worker log ---
Nov 12 13:04:00 impressed-jade.ptr.network python[29512]: 2026-11-12 13:04:00,763 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/W/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 13:04:00 impressed-jade.ptr.network python[29512]: 2026-11-12 13:04:00,848 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/HB/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 13:04:00 impressed-jade.ptr.network python[29512]: 2026-11-12 13:04:00,970 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/TT/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 13:04:01 impressed-jade.ptr.network python[29512]: 2026-11-12 13:04:01,405 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpFqOv5z4WKps64GlQS4ytw "HTTP/1.1 200 OK"
Nov 12 13:04:01 impressed-jade.ptr.network python[29512]: 2026-11-12 13:04:01,505 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC-2Cj6KlR9rCfR28zNLmOTA "HTTP/1.1 200 OK"
Nov 12 13:04:01 impressed-jade.ptr.network python[29512]: 2026-11-12 13:04:01,518 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCWJ2lWNubArHWmf3FIHbfcQ "HTTP/1.1 200 OK"
Nov 12 13:04:01 impressed-jade.ptr.network python[29512]: 2026-11-12 13:04:01,539 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCqFMzb-4AUf6WAIbl132QKA "HTTP/1.1 200 OK"
Nov 12 13:04:01 impressed-jade.ptr.network python[29512]: 2026-11-12 13:04:01,614 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCwJ3S2Ix7aI1BhHexDJlmEg "HTTP/1.1 200 OK"
Nov 12 13:04:01 impressed-jade.ptr.network python[29512]: 2026-11-12 13:04:01,700 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCTv-XvfzLX3i4IGWAm4sbmA "HTTP/1.1 200 OK"
Nov 12 13:04:01 impressed-jade.ptr.network python[29512]: 2026-11-12 13:04:01,790 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCxfPjORdISQSn2fV8tcVmgA "HTTP/1.1 200 OK"
Nov 12 13:04:01 impressed-jade.ptr.network python[29512]: 2026-11-12 13:04:01,802 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCQsH5XtIc9hONE1BQjucM0g "HTTP/1.1 200 OK"
Nov 12 13:04:01 impressed-jade.ptr.network python[29512]: 2026-11-12 13:04:01,818 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC6UL29enLNe4mqwTfAyeNuw "HTTP/1.1 200 OK"
Nov 12 13:04:01 impressed-jade.ptr.network python[29512]: 2026-11-12 13:04:01,836 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpryVRk_VDudG8SHXgWcG0w "HTTP/1.1 200 OK"
Nov 12 13:04:01 impressed-jade.ptr.network python[29512]: 2026-11-12 13:04:01,855 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCyGa1YEx9ST66rYrJTGIKOw "HTTP/1.1 200 OK"
Nov 12 13:04:01 impressed-jade.ptr.network python[29512]: 2026-11-12 13:04:01,980 INFO HTTP Request: GET https://22bet.com/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 12 13:04:02 impressed-jade.ptr.network python[29512]: 2026-11-12 13:04:02,030 INFO HTTP Request: GET https://22bet.com/linefeed/get1x2_vzip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 404 Not Found"
Nov 12 13:04:02 impressed-jade.ptr.network python[29512]: 2026-11-12 13:04:02,280 INFO HTTP Request: GET https://22bet.co.ke/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 12 13:04:02 impressed-jade.ptr.network python[29512]: 2026-11-12 13:04:02,407 INFO HTTP Request: GET https://22bet.co.ke/linefeed/get1x2_vzip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 404 Not Found"
Nov 12 13:04:02 impressed-jade.ptr.network python[29512]: 2026-11-12 13:04:02,488 INFO HTTP Request: GET https://22bet.ng/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 12 13:04:02 impressed-jade.ptr.network python[29512]: 2026-11-12 13:04:02,550 INFO HTTP Request: GET https://22bet.ng/linefeed/get1x2_vzip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 404 Not Found"
Nov 12 13:04:08 impressed-jade.ptr.network python[29512]: 2026-11-12 13:04:08,850 INFO HTTP Request: GET https://22bet.ug/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 12 13:04:08 impressed-jade.ptr.network python[29512]: 2026-11-12 13:04:08,991 INFO HTTP Request: GET https://22bet.ug/linefeed/get1x2_vzip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 404 Not Found"
Nov 12 13:04:09 impressed-jade.ptr.network python[29512]: 2026-11-12 13:04:09,130 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 13:04:09 impressed-jade.ptr.network python[29512]: 2026-11-12 13:04:09,639 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 13:04:10 impressed-jade.ptr.network python[29512]: 2026-11-12 13:04:10,273 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
--- api log ---
Nov 12 13:03:55 impressed-jade.ptr.network uvicorn[29515]: INFO:     Uvicorn running on http://127.0.0.1:8790 (Press CTRL+C to quit)
Nov 12 13:03:55 impressed-jade.ptr.network uvicorn[29515]: INFO:     Started parent process [29515]
Nov 12 13:03:57 impressed-jade.ptr.network uvicorn[29519]: INFO:     Started server process [29519]
Nov 12 13:03:57 impressed-jade.ptr.network uvicorn[29519]: INFO:     Waiting for application startup.
Nov 12 13:03:57 impressed-jade.ptr.network uvicorn[29519]: INFO:     Application startup complete.
Nov 12 13:03:57 impressed-jade.ptr.network uvicorn[29518]: INFO:     Started server process [29518]
Nov 12 13:03:57 impressed-jade.ptr.network uvicorn[29518]: INFO:     Waiting for application startup.
Nov 12 13:03:57 impressed-jade.ptr.network uvicorn[29518]: INFO:     Application startup complete.
Nov 12 13:03:59 impressed-jade.ptr.network uvicorn[29518]: INFO:     109.92.227.130:0 - "GET /api/bookmakers HTTP/1.0" 200 OK
Nov 12 13:04:10 impressed-jade.ptr.network uvicorn[29519]: INFO:     109.92.227.130:0 - "GET /api/sports?tz=180 HTTP/1.0" 200 OK
Nov 12 13:04:16 impressed-jade.ptr.network uvicorn[29518]: INFO:     109.92.227.130:0 - "GET /api/home?tz=180&sport=esports HTTP/1.0" 200 OK
Nov 12 13:04:29 impressed-jade.ptr.network uvicorn[29519]: INFO:     127.0.0.1:41650 - "GET /api/health HTTP/1.1" 200 OK
Nov 12 13:04:29 impressed-jade.ptr.network uvicorn[29519]: INFO:     127.0.0.1:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 12 13:04:29 impressed-jade.ptr.network uvicorn[29518]: INFO:     127.0.0.1:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 12 13:04:29 impressed-jade.ptr.network uvicorn[29518]: INFO:     127.0.0.1:0 - "GET /api/home HTTP/1.0" 200 OK
```
