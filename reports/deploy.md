# Zicer deploy 2026-11-12 11:42 UTC

Итог: УСПЕХ

Сайт: https://winly.rs

Админ: данные входа в /etc/zicer-admin.txt на сервере

Коммит: daaeb80 Автодеплой включён; отчёт reports/projects.txt — все службы, сайты, папки, контейнеры, таймеры, базы и порты на сервере

```
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
2026/11/12 14:42:02 [warn] 159552#159552: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/12 14:42:02 [warn] 159552#159552: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/12 14:42:02 [warn] 159552#159552: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/12 14:42:02 [warn] 159552#159552: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/12 14:42:02 [warn] 159552#159552: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/12 14:42:02 [warn] 159552#159552: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
social | 2026-11-12 11:41:39.636364 | social nothing due (live) | 
tg_poll | 2026-11-12 11:41:39.638850 | no token | 
basketball | 2026-11-12 11:41:48.676570 | basketball upserted 404 | 
basketball_week | 2026-11-12 11:41:49.731741 | nba week upserted 43 | 
other_sports | 2026-11-12 11:41:50.412427 | other sports new 0 | 
backfill | 2026-11-12 11:41:50.417814 | already | 
logos | 2026-11-12 11:41:50.551709 | logos: nothing to do | 
highlights | 2026-11-12 11:41:51.134272 | highlights +0 | 
x22_line | 2026-11-12 11:41:58.251856 | x22 line new 0, fetched {'futsal': '0'} | 
odds | 2026-11-12 11:41:59.577884 | odds matched 66 | 
settle | 2026-11-12 11:41:59.610638 | settled 0 | 
xfeed | 2026-11-12 11:42:13.233278 | xfeed empty (22bet.ug http 404) | 
live | 2026-11-12 11:42:23.474142 | live updated 4 | 
maxbet_results | 2026-11-12 11:39:39.581337 | no pending | 
other_results | 2026-11-12 11:39:42.652926 | other results 18 | 
probe_sports | 2026-11-11 21:19:02.243724 | football/line:err(22bet.ug http 404) football/live:err(cooldown: 22bet.ug http 404) futsal/line:err(cooldown: 22bet.ug http 404) futsal/live:err(cooldown: 22bet.ug http 404) boxing/line:err(cooldown: 22bet.ug http 404) boxing/live:err(cooldown: 22bet.ug http 404) mma/line:err(cooldown: 22bet.ug http 404) mma/live:err(cooldown: 22bet.ug http 404) mma2/line:err(cooldown: 22bet.ug http 404) mma2/live:err(cooldown: 22bet.ug http 404) combat/line:err(cooldown: 22bet.ug http 404) combat/live:err(coold | 
trends | 2026-11-10 23:36:09.974574 | trends 11 | 
analysis | 2026-11-10 23:36:10.199323 | analysis 27 | 
finish_stale | 2026-11-12 11:41:18.394584 | finished 0 | 
names | 2026-11-12 11:37:17.823278 | names 0 | 
tg_reminders | 2026-11-12 11:37:18.262175 | no token | 
football_live | 2026-11-12 11:41:23.519095 | live upserted 10 | 
football | 2026-11-12 11:41:46.816579 | football upserted 103 |  "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
pandascore | 2026-11-12 01:33:44.105768 | pandascore new 0, updated 206, finished 0, with streams 172, history lookups 40 | s/sqlalchemy/engine/base.py", line 1936, in _exec_single_context
--- worker log ---
Nov 12 14:41:50 impressed-jade.ptr.network python[157486]: 2026-11-12 14:41:50,216 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/HB/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 14:41:50 impressed-jade.ptr.network python[157486]: 2026-11-12 14:41:50,320 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/TT/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 14:41:50 impressed-jade.ptr.network python[157486]: 2026-11-12 14:41:50,720 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpFqOv5z4WKps64GlQS4ytw "HTTP/1.1 200 OK"
Nov 12 14:41:50 impressed-jade.ptr.network python[157486]: 2026-11-12 14:41:50,798 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC-2Cj6KlR9rCfR28zNLmOTA "HTTP/1.1 200 OK"
Nov 12 14:41:50 impressed-jade.ptr.network python[157486]: 2026-11-12 14:41:50,812 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCWJ2lWNubArHWmf3FIHbfcQ "HTTP/1.1 200 OK"
Nov 12 14:41:50 impressed-jade.ptr.network python[157486]: 2026-11-12 14:41:50,830 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCqFMzb-4AUf6WAIbl132QKA "HTTP/1.1 200 OK"
Nov 12 14:41:50 impressed-jade.ptr.network python[157486]: 2026-11-12 14:41:50,889 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCwJ3S2Ix7aI1BhHexDJlmEg "HTTP/1.1 200 OK"
Nov 12 14:41:50 impressed-jade.ptr.network python[157486]: 2026-11-12 14:41:50,904 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCTv-XvfzLX3i4IGWAm4sbmA "HTTP/1.1 200 OK"
Nov 12 14:41:50 impressed-jade.ptr.network python[157486]: 2026-11-12 14:41:50,959 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCxfPjORdISQSn2fV8tcVmgA "HTTP/1.1 200 OK"
Nov 12 14:41:50 impressed-jade.ptr.network python[157486]: 2026-11-12 14:41:50,970 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCQsH5XtIc9hONE1BQjucM0g "HTTP/1.1 200 OK"
Nov 12 14:41:50 impressed-jade.ptr.network python[157486]: 2026-11-12 14:41:50,987 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC6UL29enLNe4mqwTfAyeNuw "HTTP/1.1 200 OK"
Nov 12 14:41:51 impressed-jade.ptr.network python[157486]: 2026-11-12 14:41:51,097 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpryVRk_VDudG8SHXgWcG0w "HTTP/1.1 200 OK"
Nov 12 14:41:51 impressed-jade.ptr.network python[157486]: 2026-11-12 14:41:51,117 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCyGa1YEx9ST66rYrJTGIKOw "HTTP/1.1 200 OK"
Nov 12 14:41:51 impressed-jade.ptr.network python[157486]: 2026-11-12 14:41:51,223 INFO HTTP Request: GET https://22bet.com/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 12 14:41:51 impressed-jade.ptr.network python[157486]: 2026-11-12 14:41:51,281 INFO HTTP Request: GET https://22bet.com/linefeed/get1x2_vzip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 404 Not Found"
Nov 12 14:41:51 impressed-jade.ptr.network python[157486]: 2026-11-12 14:41:51,517 INFO HTTP Request: GET https://22bet.co.ke/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 12 14:41:51 impressed-jade.ptr.network python[157486]: 2026-11-12 14:41:51,651 INFO HTTP Request: GET https://22bet.co.ke/linefeed/get1x2_vzip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 404 Not Found"
Nov 12 14:41:51 impressed-jade.ptr.network python[157486]: 2026-11-12 14:41:51,732 INFO HTTP Request: GET https://22bet.ng/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 12 14:41:51 impressed-jade.ptr.network python[157486]: 2026-11-12 14:41:51,806 INFO HTTP Request: GET https://22bet.ng/linefeed/get1x2_vzip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 404 Not Found"
Nov 12 14:41:58 impressed-jade.ptr.network python[157486]: 2026-11-12 14:41:58,117 INFO HTTP Request: GET https://22bet.ug/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 12 14:41:58 impressed-jade.ptr.network python[157486]: 2026-11-12 14:41:58,250 INFO HTTP Request: GET https://22bet.ug/linefeed/get1x2_vzip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 404 Not Found"
Nov 12 14:41:58 impressed-jade.ptr.network python[157486]: 2026-11-12 14:41:58,376 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 14:41:58 impressed-jade.ptr.network python[157486]: 2026-11-12 14:41:58,582 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 14:41:59 impressed-jade.ptr.network python[157486]: 2026-11-12 14:41:59,524 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 14:42:23 impressed-jade.ptr.network python[157486]: 2026-11-12 14:42:23,366 INFO HTTP Request: GET https://www.maxbet.rs/live/init/sr "HTTP/1.1 200 OK"
--- api log ---
Nov 12 14:41:43 impressed-jade.ptr.network systemd[1]: zicer-api.service: Consumed 10.179s CPU time, 209.5M memory peak, 23.4M memory swap peak.
Nov 12 14:41:43 impressed-jade.ptr.network systemd[1]: Started zicer-api.service - Zicer API.
Nov 12 14:41:43 impressed-jade.ptr.network uvicorn[157489]: INFO:     Uvicorn running on http://127.0.0.1:8790 (Press CTRL+C to quit)
Nov 12 14:41:43 impressed-jade.ptr.network uvicorn[157489]: INFO:     Started parent process [157489]
Nov 12 14:41:47 impressed-jade.ptr.network uvicorn[157495]: INFO:     Started server process [157495]
Nov 12 14:41:47 impressed-jade.ptr.network uvicorn[157495]: INFO:     Waiting for application startup.
Nov 12 14:41:47 impressed-jade.ptr.network uvicorn[157494]: INFO:     Started server process [157494]
Nov 12 14:41:47 impressed-jade.ptr.network uvicorn[157494]: INFO:     Waiting for application startup.
Nov 12 14:41:47 impressed-jade.ptr.network uvicorn[157495]: INFO:     Application startup complete.
Nov 12 14:41:47 impressed-jade.ptr.network uvicorn[157494]: INFO:     Application startup complete.
Nov 12 14:41:55 impressed-jade.ptr.network uvicorn[157494]: INFO:     109.92.227.130:0 - "GET /api/clubs/battle?sport=football HTTP/1.0" 200 OK
Nov 12 14:42:25 impressed-jade.ptr.network uvicorn[157494]: INFO:     127.0.0.1:51912 - "GET /api/health HTTP/1.1" 200 OK
Nov 12 14:42:25 impressed-jade.ptr.network uvicorn[157494]: INFO:     127.0.0.1:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 12 14:42:25 impressed-jade.ptr.network uvicorn[157494]: INFO:     127.0.0.1:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 12 14:42:25 impressed-jade.ptr.network uvicorn[157494]: INFO:     127.0.0.1:0 - "GET /api/home HTTP/1.0" 200 OK
```
