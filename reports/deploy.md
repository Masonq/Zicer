# Zicer deploy 2026-11-11 23:26 UTC

Итог: УСПЕХ

Сайт: https://winly.rs

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: ead40a2 Facebook: страница из бизнес-портфолио находится и через портфолио (business_management)

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
2026/11/12 02:25:54 [warn] 7156#7156: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/12 02:25:54 [warn] 7156#7156: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/12 02:25:54 [warn] 7156#7156: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/12 02:25:54 [warn] 7156#7156: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/12 02:25:54 [warn] 7156#7156: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/12 02:25:54 [warn] 7156#7156: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
matches: {'esports': 93, 'hockey': 63, 'volleyball': 42, 'tabletennis': 216, 'basketball': 713, 'handball': 47, 'waterpolo': 13, 'tennis': 25, 'football': 1104}
maxbet_results | 2026-11-11 23:04:04.372004 | no pending | 
other_results | 2026-11-11 23:04:11.325211 | other results 9 | 
live | 2026-11-11 23:25:23.855118 | live updated 2 | 
social | 2026-11-11 23:25:28.097941 | social nothing due (test) | 
tg_poll | 2026-11-11 23:25:28.101898 | no token | 
finish_stale | 2026-11-11 23:25:36.950003 | finished 0 | 
football_live | 2026-11-11 23:25:42.038650 | live upserted 11 | 
basketball | 2026-11-11 23:25:49.634566 | basketball upserted 414 | 
basketball_week | 2026-11-11 23:25:50.459469 | nba week upserted 43 | 
other_sports | 2026-11-11 23:25:50.996089 | other sports new 0 | 
backfill | 2026-11-11 23:25:51.000496 | already | 
logos | 2026-11-11 23:25:51.126136 | logos: nothing to do | 
highlights | 2026-11-11 23:25:51.568494 | highlights +0 | 
x22_line | 2026-11-11 23:25:58.744490 | x22 line new 0, fetched {'futsal': '0'} | 
odds | 2026-11-11 23:26:00.035772 | odds matched 66 | 
settle | 2026-11-11 23:26:00.060516 | settled 0 | 
xfeed | 2026-11-11 23:26:13.680547 | xfeed empty (22bet.ug http 404) | 
probe_sports | 2026-11-11 21:19:02.243724 | football/line:err(22bet.ug http 404) football/live:err(cooldown: 22bet.ug http 404) futsal/line:err(cooldown: 22bet.ug http 404) futsal/live:err(cooldown: 22bet.ug http 404) boxing/line:err(cooldown: 22bet.ug http 404) boxing/live:err(cooldown: 22bet.ug http 404) mma/line:err(cooldown: 22bet.ug http 404) mma/live:err(cooldown: 22bet.ug http 404) mma2/line:err(cooldown: 22bet.ug http 404) mma2/live:err(cooldown: 22bet.ug http 404) combat/line:err(cooldown: 22bet.ug http 404) combat/live:err(coold | 
names | 2026-11-11 23:01:55.972478 | names 0 | 
tg_reminders | 2026-11-11 23:01:56.343914 | no token | 
trends | 2026-11-10 23:36:09.974574 | trends 11 | 
analysis | 2026-11-10 23:36:10.199323 | analysis 27 | 
pandascore | 2026-11-11 21:45:40.992173 | pandascore new 27, updated 59, finished 0 | ile "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/engine/base.py", line 1986, in _exec_single_context
football | 2026-11-11 23:25:47.907981 | football upserted 100 |  "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
--- worker log ---
Nov 12 02:25:50 impressed-jade.ptr.network python[6821]: 2026-11-12 02:25:50,782 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/W/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 02:25:50 impressed-jade.ptr.network python[6821]: 2026-11-12 02:25:50,839 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/HB/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 02:25:50 impressed-jade.ptr.network python[6821]: 2026-11-12 02:25:50,924 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/TT/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 02:25:51 impressed-jade.ptr.network python[6821]: 2026-11-12 02:25:51,264 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpFqOv5z4WKps64GlQS4ytw "HTTP/1.1 200 OK"
Nov 12 02:25:51 impressed-jade.ptr.network python[6821]: 2026-11-12 02:25:51,306 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC-2Cj6KlR9rCfR28zNLmOTA "HTTP/1.1 200 OK"
Nov 12 02:25:51 impressed-jade.ptr.network python[6821]: 2026-11-12 02:25:51,317 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCWJ2lWNubArHWmf3FIHbfcQ "HTTP/1.1 200 OK"
Nov 12 02:25:51 impressed-jade.ptr.network python[6821]: 2026-11-12 02:25:51,338 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCqFMzb-4AUf6WAIbl132QKA "HTTP/1.1 200 OK"
Nov 12 02:25:51 impressed-jade.ptr.network python[6821]: 2026-11-12 02:25:51,351 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCwJ3S2Ix7aI1BhHexDJlmEg "HTTP/1.1 200 OK"
Nov 12 02:25:51 impressed-jade.ptr.network python[6821]: 2026-11-12 02:25:51,365 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCTv-XvfzLX3i4IGWAm4sbmA "HTTP/1.1 200 OK"
Nov 12 02:25:51 impressed-jade.ptr.network python[6821]: 2026-11-12 02:25:51,426 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCxfPjORdISQSn2fV8tcVmgA "HTTP/1.1 200 OK"
Nov 12 02:25:51 impressed-jade.ptr.network python[6821]: 2026-11-12 02:25:51,436 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCQsH5XtIc9hONE1BQjucM0g "HTTP/1.1 200 OK"
Nov 12 02:25:51 impressed-jade.ptr.network python[6821]: 2026-11-12 02:25:51,456 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC6UL29enLNe4mqwTfAyeNuw "HTTP/1.1 200 OK"
Nov 12 02:25:51 impressed-jade.ptr.network python[6821]: 2026-11-12 02:25:51,476 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpryVRk_VDudG8SHXgWcG0w "HTTP/1.1 200 OK"
Nov 12 02:25:51 impressed-jade.ptr.network python[6821]: 2026-11-12 02:25:51,547 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCyGa1YEx9ST66rYrJTGIKOw "HTTP/1.1 200 OK"
Nov 12 02:25:51 impressed-jade.ptr.network python[6821]: 2026-11-12 02:25:51,674 INFO HTTP Request: GET https://22bet.com/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 12 02:25:51 impressed-jade.ptr.network python[6821]: 2026-11-12 02:25:51,739 INFO HTTP Request: GET https://22bet.com/linefeed/get1x2_vzip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 404 Not Found"
Nov 12 02:25:52 impressed-jade.ptr.network python[6821]: 2026-11-12 02:25:52,004 INFO HTTP Request: GET https://22bet.co.ke/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 12 02:25:52 impressed-jade.ptr.network python[6821]: 2026-11-12 02:25:52,137 INFO HTTP Request: GET https://22bet.co.ke/linefeed/get1x2_vzip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 404 Not Found"
Nov 12 02:25:52 impressed-jade.ptr.network python[6821]: 2026-11-12 02:25:52,223 INFO HTTP Request: GET https://22bet.ng/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 12 02:25:52 impressed-jade.ptr.network python[6821]: 2026-11-12 02:25:52,309 INFO HTTP Request: GET https://22bet.ng/linefeed/get1x2_vzip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 404 Not Found"
Nov 12 02:25:58 impressed-jade.ptr.network python[6821]: 2026-11-12 02:25:58,611 INFO HTTP Request: GET https://22bet.ug/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 12 02:25:58 impressed-jade.ptr.network python[6821]: 2026-11-12 02:25:58,743 INFO HTTP Request: GET https://22bet.ug/linefeed/get1x2_vzip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 404 Not Found"
Nov 12 02:25:59 impressed-jade.ptr.network python[6821]: 2026-11-12 02:25:59,161 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 02:25:59 impressed-jade.ptr.network python[6821]: 2026-11-12 02:25:59,549 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 02:25:59 impressed-jade.ptr.network python[6821]: 2026-11-12 02:25:59,983 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
--- api log ---
Nov 12 02:25:46 impressed-jade.ptr.network systemd[1]: Stopped zicer-api.service - Zicer API.
Nov 12 02:25:46 impressed-jade.ptr.network systemd[1]: zicer-api.service: Consumed 6.794s CPU time, 685.8M memory peak, 86.1M memory swap peak.
Nov 12 02:25:46 impressed-jade.ptr.network systemd[1]: Started zicer-api.service - Zicer API.
Nov 12 02:25:46 impressed-jade.ptr.network uvicorn[6861]: INFO:     Uvicorn running on http://127.0.0.1:8790 (Press CTRL+C to quit)
Nov 12 02:25:46 impressed-jade.ptr.network uvicorn[6861]: INFO:     Started parent process [6861]
Nov 12 02:25:47 impressed-jade.ptr.network uvicorn[6865]: INFO:     Started server process [6865]
Nov 12 02:25:47 impressed-jade.ptr.network uvicorn[6865]: INFO:     Waiting for application startup.
Nov 12 02:25:47 impressed-jade.ptr.network uvicorn[6865]: INFO:     Application startup complete.
Nov 12 02:25:47 impressed-jade.ptr.network uvicorn[6864]: INFO:     Started server process [6864]
Nov 12 02:25:47 impressed-jade.ptr.network uvicorn[6864]: INFO:     Waiting for application startup.
Nov 12 02:25:47 impressed-jade.ptr.network uvicorn[6864]: INFO:     Application startup complete.
Nov 12 02:26:18 impressed-jade.ptr.network uvicorn[6865]: INFO:     127.0.0.1:55562 - "GET /api/health HTTP/1.1" 200 OK
Nov 12 02:26:18 impressed-jade.ptr.network uvicorn[6864]: INFO:     127.0.0.1:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 12 02:26:18 impressed-jade.ptr.network uvicorn[6864]: INFO:     127.0.0.1:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 12 02:26:18 impressed-jade.ptr.network uvicorn[6865]: INFO:     127.0.0.1:0 - "GET /api/home HTTP/1.0" 200 OK
```
