# Zicer deploy 2026-11-12 12:19 UTC

Итог: УСПЕХ

Сайт: https://winly.rs

Админ: данные входа в /etc/zicer-admin.txt на сервере

Коммит: 7cb81f0 Удаление проектов с сервера: Plunkly (Бункер 17), Kront, Puškica, POLAKO — службы, контейнеры, базы, папки, сайты nginx, сертификаты; копия кода и баз в /root/backups/deleted-20261112

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
OK: удалены проекты: Plunkly (Бункер 17), Kront, Puškica, POLAKO; копия в /root/backups/deleted-20261112 (18M)
OK: список проектов на сервере записан

=== Админ ===
OK: админ есть
домен: winly.rs (winly.rs по Google DNS → "data":"89.208.113.147", www: нет)

=== nginx ===
2026/11/12 15:19:09 [warn] 210232#210232: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/12 15:19:09 [warn] 210232#210232: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/12 15:19:09 [warn] 210232#210232: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/12 15:19:09 [warn] 210232#210232: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
basketball | 2026-11-12 12:18:34.376687 | basketball upserted 404 | 
basketball_week | 2026-11-12 12:18:35.245947 | nba week upserted 43 | 
other_sports | 2026-11-12 12:18:35.848833 | other sports new 0 | 
backfill | 2026-11-12 12:18:35.852268 | already | 
logos | 2026-11-12 12:18:35.971606 | logos: nothing to do | 
highlights | 2026-11-12 12:18:36.598226 | highlights +0 | 
x22_line | 2026-11-12 12:18:43.693077 | x22 line new 0, fetched {'futsal': '0'} | 
odds | 2026-11-12 12:18:44.797889 | odds matched 66 | 
settle | 2026-11-12 12:18:44.857885 | settled 0 | 
tg_poll | 2026-11-12 12:19:12.444698 | no token | 
xfeed | 2026-11-12 12:19:28.464742 | xfeed empty (22bet.ug http 404) | 
football_live | 2026-11-12 12:19:33.565052 | live upserted 10 | 
live | 2026-11-12 12:19:33.983735 | live updated 4 | 
probe_sports | 2026-11-11 21:19:02.243724 | football/line:err(22bet.ug http 404) football/live:err(cooldown: 22bet.ug http 404) futsal/line:err(cooldown: 22bet.ug http 404) futsal/live:err(cooldown: 22bet.ug http 404) boxing/line:err(cooldown: 22bet.ug http 404) boxing/live:err(cooldown: 22bet.ug http 404) mma/line:err(cooldown: 22bet.ug http 404) mma/live:err(cooldown: 22bet.ug http 404) mma2/line:err(cooldown: 22bet.ug http 404) mma2/live:err(cooldown: 22bet.ug http 404) combat/line:err(cooldown: 22bet.ug http 404) combat/live:err(coold | 
maxbet_results | 2026-11-12 12:16:16.585564 | no pending | 
other_results | 2026-11-12 12:16:22.624789 | other results 14 | 
trends | 2026-11-10 23:36:09.974574 | trends 11 | 
social | 2026-11-12 12:17:08.560712 | social nothing due (live) | 
analysis | 2026-11-10 23:36:10.199323 | analysis 27 | 
finish_stale | 2026-11-12 12:17:34.435492 | finished 0 | 
names | 2026-11-12 12:17:34.709748 | names 0 | 
tg_reminders | 2026-11-12 12:17:35.124759 | no token | 
football | 2026-11-12 12:18:31.898215 | football upserted 103 |  "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
pandascore | 2026-11-12 01:33:44.105768 | pandascore new 0, updated 206, finished 0, with streams 172, history lookups 40 | s/sqlalchemy/engine/base.py", line 1936, in _exec_single_context
--- worker log ---
Nov 12 15:18:36 impressed-jade.ptr.network python[206803]: 2026-11-12 15:18:36,157 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpFqOv5z4WKps64GlQS4ytw "HTTP/1.1 200 OK"
Nov 12 15:18:36 impressed-jade.ptr.network python[206803]: 2026-11-12 15:18:36,211 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC-2Cj6KlR9rCfR28zNLmOTA "HTTP/1.1 200 OK"
Nov 12 15:18:36 impressed-jade.ptr.network python[206803]: 2026-11-12 15:18:36,220 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCWJ2lWNubArHWmf3FIHbfcQ "HTTP/1.1 200 OK"
Nov 12 15:18:36 impressed-jade.ptr.network python[206803]: 2026-11-12 15:18:36,305 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCqFMzb-4AUf6WAIbl132QKA "HTTP/1.1 200 OK"
Nov 12 15:18:36 impressed-jade.ptr.network python[206803]: 2026-11-12 15:18:36,393 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCwJ3S2Ix7aI1BhHexDJlmEg "HTTP/1.1 200 OK"
Nov 12 15:18:36 impressed-jade.ptr.network python[206803]: 2026-11-12 15:18:36,407 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCTv-XvfzLX3i4IGWAm4sbmA "HTTP/1.1 200 OK"
Nov 12 15:18:36 impressed-jade.ptr.network python[206803]: 2026-11-12 15:18:36,510 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCxfPjORdISQSn2fV8tcVmgA "HTTP/1.1 200 OK"
Nov 12 15:18:36 impressed-jade.ptr.network python[206803]: 2026-11-12 15:18:36,522 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCQsH5XtIc9hONE1BQjucM0g "HTTP/1.1 200 OK"
Nov 12 15:18:36 impressed-jade.ptr.network python[206803]: 2026-11-12 15:18:36,538 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC6UL29enLNe4mqwTfAyeNuw "HTTP/1.1 200 OK"
Nov 12 15:18:36 impressed-jade.ptr.network python[206803]: 2026-11-12 15:18:36,562 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpryVRk_VDudG8SHXgWcG0w "HTTP/1.1 200 OK"
Nov 12 15:18:36 impressed-jade.ptr.network python[206803]: 2026-11-12 15:18:36,580 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCyGa1YEx9ST66rYrJTGIKOw "HTTP/1.1 200 OK"
Nov 12 15:18:36 impressed-jade.ptr.network python[206803]: 2026-11-12 15:18:36,711 INFO HTTP Request: GET https://22bet.com/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 12 15:18:36 impressed-jade.ptr.network python[206803]: 2026-11-12 15:18:36,764 INFO HTTP Request: GET https://22bet.com/linefeed/get1x2_vzip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 404 Not Found"
Nov 12 15:18:37 impressed-jade.ptr.network python[206803]: 2026-11-12 15:18:37,007 INFO HTTP Request: GET https://22bet.co.ke/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 12 15:18:37 impressed-jade.ptr.network python[206803]: 2026-11-12 15:18:37,124 INFO HTTP Request: GET https://22bet.co.ke/linefeed/get1x2_vzip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 404 Not Found"
Nov 12 15:18:37 impressed-jade.ptr.network python[206803]: 2026-11-12 15:18:37,213 INFO HTTP Request: GET https://22bet.ng/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 12 15:18:37 impressed-jade.ptr.network python[206803]: 2026-11-12 15:18:37,268 INFO HTTP Request: GET https://22bet.ng/linefeed/get1x2_vzip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 404 Not Found"
Nov 12 15:18:43 impressed-jade.ptr.network python[206803]: 2026-11-12 15:18:43,569 INFO HTTP Request: GET https://22bet.ug/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 12 15:18:43 impressed-jade.ptr.network python[206803]: 2026-11-12 15:18:43,691 INFO HTTP Request: GET https://22bet.ug/linefeed/get1x2_vzip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 404 Not Found"
Nov 12 15:18:43 impressed-jade.ptr.network python[206803]: 2026-11-12 15:18:43,810 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 15:18:44 impressed-jade.ptr.network python[206803]: 2026-11-12 15:18:44,003 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 15:18:44 impressed-jade.ptr.network python[206803]: 2026-11-12 15:18:44,703 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 15:19:08 impressed-jade.ptr.network python[206803]: 2026-11-12 15:19:08,632 INFO HTTP Request: GET https://www.maxbet.rs/live/init/sr "HTTP/1.1 200 OK"
Nov 12 15:19:33 impressed-jade.ptr.network python[206803]: 2026-11-12 15:19:33,527 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261112 "HTTP/1.1 200 OK"
Nov 12 15:19:33 impressed-jade.ptr.network python[206803]: 2026-11-12 15:19:33,861 INFO HTTP Request: GET https://www.maxbet.rs/live/init/sr "HTTP/1.1 200 OK"
--- api log ---
Nov 12 15:18:29 impressed-jade.ptr.network systemd[1]: zicer-api.service: Consumed 11.102s CPU time, 175.9M memory peak, 134.7M memory swap peak.
Nov 12 15:18:29 impressed-jade.ptr.network systemd[1]: Started zicer-api.service - Zicer API.
Nov 12 15:18:29 impressed-jade.ptr.network uvicorn[206837]: INFO:     Uvicorn running on http://127.0.0.1:8790 (Press CTRL+C to quit)
Nov 12 15:18:29 impressed-jade.ptr.network uvicorn[206837]: INFO:     Started parent process [206837]
Nov 12 15:18:32 impressed-jade.ptr.network uvicorn[206841]: INFO:     Started server process [206841]
Nov 12 15:18:32 impressed-jade.ptr.network uvicorn[206841]: INFO:     Waiting for application startup.
Nov 12 15:18:32 impressed-jade.ptr.network uvicorn[206842]: INFO:     Started server process [206842]
Nov 12 15:18:32 impressed-jade.ptr.network uvicorn[206842]: INFO:     Waiting for application startup.
Nov 12 15:18:33 impressed-jade.ptr.network uvicorn[206842]: INFO:     Application startup complete.
Nov 12 15:18:33 impressed-jade.ptr.network uvicorn[206841]: INFO:     Application startup complete.
Nov 12 15:19:24 impressed-jade.ptr.network uvicorn[206841]: INFO:     127.0.0.1:41162 - "GET /api/health HTTP/1.1" 200 OK
Nov 12 15:19:33 impressed-jade.ptr.network uvicorn[206841]: INFO:     127.0.0.1:48638 - "GET /api/health HTTP/1.1" 200 OK
Nov 12 15:19:33 impressed-jade.ptr.network uvicorn[206841]: INFO:     127.0.0.1:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 12 15:19:33 impressed-jade.ptr.network uvicorn[206842]: INFO:     127.0.0.1:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 12 15:19:33 impressed-jade.ptr.network uvicorn[206841]: INFO:     127.0.0.1:0 - "GET /api/home HTTP/1.0" 200 OK
```
