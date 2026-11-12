# Zicer deploy 2026-11-12 09:35 UTC

Итог: УСПЕХ

Сайт: https://winly.rs

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: dc00b82 Автодеплой снова включён (убрана пауза deploy/PAUSE)

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
2026/11/12 12:35:33 [warn] 801521#801521: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/12 12:35:33 [warn] 801521#801521: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/12 12:35:33 [warn] 801521#801521: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/12 12:35:33 [warn] 801521#801521: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/12 12:35:33 [warn] 801521#801521: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/12 12:35:33 [warn] 801521#801521: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
finish_stale | 2026-11-12 09:34:40.509861 | finished 0 | 
football_live | 2026-11-12 09:35:05.923133 | live upserted 10 | 
tg_poll | 2026-11-12 09:35:09.565699 | no token | 
live | 2026-11-12 09:35:14.888603 | live updated 1 | 
basketball | 2026-11-12 09:35:29.520316 | basketball upserted 404 | 
basketball_week | 2026-11-12 09:35:30.502326 | nba week upserted 43 | 
other_sports | 2026-11-12 09:35:31.118992 | other sports new 0 | 
backfill | 2026-11-12 09:35:31.125509 | already | 
logos | 2026-11-12 09:35:31.225360 | logos: nothing to do | 
highlights | 2026-11-12 09:35:31.904843 | highlights +0 | 
x22_line | 2026-11-12 09:35:39.094805 | x22 line new 0, fetched {'futsal': '0'} | 
odds | 2026-11-12 09:35:40.113482 | odds matched 66 | 
settle | 2026-11-12 09:35:40.140066 | settled 0 | 
xfeed | 2026-11-12 09:35:53.795587 | xfeed empty (22bet.ug http 404) | 
probe_sports | 2026-11-11 21:19:02.243724 | football/line:err(22bet.ug http 404) football/live:err(cooldown: 22bet.ug http 404) futsal/line:err(cooldown: 22bet.ug http 404) futsal/live:err(cooldown: 22bet.ug http 404) boxing/line:err(cooldown: 22bet.ug http 404) boxing/live:err(cooldown: 22bet.ug http 404) mma/line:err(cooldown: 22bet.ug http 404) mma/live:err(cooldown: 22bet.ug http 404) mma2/line:err(cooldown: 22bet.ug http 404) mma2/live:err(cooldown: 22bet.ug http 404) combat/line:err(cooldown: 22bet.ug http 404) combat/live:err(coold | 
maxbet_results | 2026-11-12 09:32:43.858758 | no pending | 
other_results | 2026-11-12 09:32:45.562076 | other results 13 | 
names | 2026-11-12 09:32:55.397950 | names 0 | 
tg_reminders | 2026-11-12 09:32:56.075994 | no token | 
trends | 2026-11-10 23:36:09.974574 | trends 11 | 
analysis | 2026-11-10 23:36:10.199323 | analysis 27 | 
social | 2026-11-12 09:34:10.396426 | social nothing due (live) | 
football | 2026-11-12 09:35:27.541266 | football upserted 99 |  "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
pandascore | 2026-11-12 01:33:44.105768 | pandascore new 0, updated 206, finished 0, with streams 172, history lookups 40 | es/sqlalchemy/engine/base.py", line 1936, in _exec_single_context
--- worker log ---
Nov 12 12:35:30 impressed-jade.ptr.network python[801175]: 2026-11-12 12:35:30,843 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/W/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 12:35:30 impressed-jade.ptr.network python[801175]: 2026-11-12 12:35:30,903 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/HB/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 12:35:30 impressed-jade.ptr.network python[801175]: 2026-11-12 12:35:30,981 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/TT/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 12:35:31 impressed-jade.ptr.network python[801175]: 2026-11-12 12:35:31,438 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpFqOv5z4WKps64GlQS4ytw "HTTP/1.1 200 OK"
Nov 12 12:35:31 impressed-jade.ptr.network python[801175]: 2026-11-12 12:35:31,502 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC-2Cj6KlR9rCfR28zNLmOTA "HTTP/1.1 200 OK"
Nov 12 12:35:31 impressed-jade.ptr.network python[801175]: 2026-11-12 12:35:31,519 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCWJ2lWNubArHWmf3FIHbfcQ "HTTP/1.1 200 OK"
Nov 12 12:35:31 impressed-jade.ptr.network python[801175]: 2026-11-12 12:35:31,589 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCqFMzb-4AUf6WAIbl132QKA "HTTP/1.1 200 OK"
Nov 12 12:35:31 impressed-jade.ptr.network python[801175]: 2026-11-12 12:35:31,653 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCwJ3S2Ix7aI1BhHexDJlmEg "HTTP/1.1 200 OK"
Nov 12 12:35:31 impressed-jade.ptr.network python[801175]: 2026-11-12 12:35:31,670 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCTv-XvfzLX3i4IGWAm4sbmA "HTTP/1.1 200 OK"
Nov 12 12:35:31 impressed-jade.ptr.network python[801175]: 2026-11-12 12:35:31,744 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCxfPjORdISQSn2fV8tcVmgA "HTTP/1.1 200 OK"
Nov 12 12:35:31 impressed-jade.ptr.network python[801175]: 2026-11-12 12:35:31,759 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCQsH5XtIc9hONE1BQjucM0g "HTTP/1.1 200 OK"
Nov 12 12:35:31 impressed-jade.ptr.network python[801175]: 2026-11-12 12:35:31,830 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC6UL29enLNe4mqwTfAyeNuw "HTTP/1.1 200 OK"
Nov 12 12:35:31 impressed-jade.ptr.network python[801175]: 2026-11-12 12:35:31,863 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpryVRk_VDudG8SHXgWcG0w "HTTP/1.1 200 OK"
Nov 12 12:35:31 impressed-jade.ptr.network python[801175]: 2026-11-12 12:35:31,887 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCyGa1YEx9ST66rYrJTGIKOw "HTTP/1.1 200 OK"
Nov 12 12:35:32 impressed-jade.ptr.network python[801175]: 2026-11-12 12:35:32,013 INFO HTTP Request: GET https://22bet.com/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 12 12:35:32 impressed-jade.ptr.network python[801175]: 2026-11-12 12:35:32,062 INFO HTTP Request: GET https://22bet.com/linefeed/get1x2_vzip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 404 Not Found"
Nov 12 12:35:32 impressed-jade.ptr.network python[801175]: 2026-11-12 12:35:32,307 INFO HTTP Request: GET https://22bet.co.ke/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 12 12:35:32 impressed-jade.ptr.network python[801175]: 2026-11-12 12:35:32,456 INFO HTTP Request: GET https://22bet.co.ke/linefeed/get1x2_vzip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 404 Not Found"
Nov 12 12:35:32 impressed-jade.ptr.network python[801175]: 2026-11-12 12:35:32,570 INFO HTTP Request: GET https://22bet.ng/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 12 12:35:32 impressed-jade.ptr.network python[801175]: 2026-11-12 12:35:32,629 INFO HTTP Request: GET https://22bet.ng/linefeed/get1x2_vzip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 404 Not Found"
Nov 12 12:35:38 impressed-jade.ptr.network python[801175]: 2026-11-12 12:35:38,976 INFO HTTP Request: GET https://22bet.ug/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 12 12:35:39 impressed-jade.ptr.network python[801175]: 2026-11-12 12:35:39,093 INFO HTTP Request: GET https://22bet.ug/linefeed/get1x2_vzip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 404 Not Found"
Nov 12 12:35:39 impressed-jade.ptr.network python[801175]: 2026-11-12 12:35:39,233 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 12:35:39 impressed-jade.ptr.network python[801175]: 2026-11-12 12:35:39,440 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 12:35:40 impressed-jade.ptr.network python[801175]: 2026-11-12 12:35:40,062 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
--- api log ---
Nov 12 12:35:24 impressed-jade.ptr.network systemd[1]: Started zicer-api.service - Zicer API.
Nov 12 12:35:24 impressed-jade.ptr.network uvicorn[801181]: INFO:     Uvicorn running on http://127.0.0.1:8790 (Press CTRL+C to quit)
Nov 12 12:35:24 impressed-jade.ptr.network uvicorn[801181]: INFO:     Started parent process [801181]
Nov 12 12:35:27 impressed-jade.ptr.network uvicorn[801205]: INFO:     Started server process [801205]
Nov 12 12:35:27 impressed-jade.ptr.network uvicorn[801205]: INFO:     Waiting for application startup.
Nov 12 12:35:27 impressed-jade.ptr.network uvicorn[801206]: INFO:     Started server process [801206]
Nov 12 12:35:27 impressed-jade.ptr.network uvicorn[801206]: INFO:     Waiting for application startup.
Nov 12 12:35:28 impressed-jade.ptr.network uvicorn[801205]: INFO:     Application startup complete.
Nov 12 12:35:28 impressed-jade.ptr.network uvicorn[801206]: INFO:     Application startup complete.
Nov 12 12:35:31 impressed-jade.ptr.network uvicorn[801205]: INFO:     109.92.227.130:0 - "GET /api/me/watch?ids= HTTP/1.0" 200 OK
Nov 12 12:35:45 impressed-jade.ptr.network uvicorn[801206]: INFO:     109.92.227.130:0 - "GET /api/home?tz=180&sport=esports HTTP/1.0" 200 OK
Nov 12 12:35:57 impressed-jade.ptr.network uvicorn[801206]: INFO:     127.0.0.1:41034 - "GET /api/health HTTP/1.1" 200 OK
Nov 12 12:35:57 impressed-jade.ptr.network uvicorn[801206]: INFO:     127.0.0.1:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 12 12:35:58 impressed-jade.ptr.network uvicorn[801206]: INFO:     127.0.0.1:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 12 12:35:58 impressed-jade.ptr.network uvicorn[801206]: INFO:     127.0.0.1:0 - "GET /api/home HTTP/1.0" 200 OK
```
