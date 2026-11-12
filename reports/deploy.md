# Zicer deploy 2026-11-12 09:56 UTC

Итог: УСПЕХ

Сайт: https://winly.rs

Админ: данные входа в /etc/zicer-admin.txt на сервере

Коммит: 517bd34 Сторож сервера: раз в минуту проверяет API, nginx, базу и воркер и перезапускает упавшее; при нехватке памяти убивает зависшие браузеры; если 5 проверок подряд не помогли — перезагрузка (не чаще раза в 30 мин); earlyoom, swap 2 ГБ, softdog ядра (сам перезагрузит зависшую машину), снимок здоровья в reports/server-health.txt

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
2026/11/12 12:55:44 [warn] 17574#17574: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/12 12:55:44 [warn] 17574#17574: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/12 12:55:44 [warn] 17574#17574: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/12 12:55:44 [warn] 17574#17574: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/12 12:55:44 [warn] 17574#17574: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/12 12:55:44 [warn] 17574#17574: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
finish_stale | 2026-11-12 09:54:42.607408 | finished 0 | 
football_live | 2026-11-12 09:54:52.692771 | live upserted 10 | 
tg_poll | 2026-11-12 09:55:22.180254 | no token | 
basketball | 2026-11-12 09:55:32.377874 | basketball upserted 404 | 
basketball_week | 2026-11-12 09:55:33.176922 | nba week upserted 43 | 
other_sports | 2026-11-12 09:55:33.930589 | other sports new 0 | 
backfill | 2026-11-12 09:55:33.935856 | already | 
logos | 2026-11-12 09:55:34.061814 | logos: nothing to do | 
highlights | 2026-11-12 09:55:34.776519 | highlights +0 | 
x22_line | 2026-11-12 09:55:41.892871 | x22 line new 0, fetched {'futsal': '0'} | 
odds | 2026-11-12 09:55:42.971756 | odds matched 66 | 
settle | 2026-11-12 09:55:43.001097 | settled 0 | 
xfeed | 2026-11-12 09:55:56.624827 | xfeed empty (22bet.ug http 404) | 
live | 2026-11-12 09:56:06.931641 | live updated 0 | 
names | 2026-11-12 09:52:22.495171 | names 0 | 
probe_sports | 2026-11-11 21:19:02.243724 | football/line:err(22bet.ug http 404) football/live:err(cooldown: 22bet.ug http 404) futsal/line:err(cooldown: 22bet.ug http 404) futsal/live:err(cooldown: 22bet.ug http 404) boxing/line:err(cooldown: 22bet.ug http 404) boxing/live:err(cooldown: 22bet.ug http 404) mma/line:err(cooldown: 22bet.ug http 404) mma/live:err(cooldown: 22bet.ug http 404) mma2/line:err(cooldown: 22bet.ug http 404) mma2/live:err(cooldown: 22bet.ug http 404) combat/line:err(cooldown: 22bet.ug http 404) combat/live:err(coold | 
tg_reminders | 2026-11-12 09:52:22.673279 | no token | 
trends | 2026-11-10 23:36:09.974574 | trends 11 | 
analysis | 2026-11-10 23:36:10.199323 | analysis 27 | 
social | 2026-11-12 09:53:40.366611 | social nothing due (live) | 
maxbet_results | 2026-11-12 09:53:42.183615 | no pending | 
other_results | 2026-11-12 09:53:43.662919 | other results 9 | 
football | 2026-11-12 09:55:30.536170 | football upserted 99 |  "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
pandascore | 2026-11-12 01:33:44.105768 | pandascore new 0, updated 206, finished 0, with streams 172, history lookups 40 | es/sqlalchemy/engine/base.py", line 1936, in _exec_single_context
--- worker log ---
Nov 12 12:55:33 impressed-jade.ptr.network python[16458]: 2026-11-12 12:55:33,651 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/HB/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 12:55:33 impressed-jade.ptr.network python[16458]: 2026-11-12 12:55:33,815 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/TT/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 12:55:34 impressed-jade.ptr.network python[16458]: 2026-11-12 12:55:34,227 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpFqOv5z4WKps64GlQS4ytw "HTTP/1.1 200 OK"
Nov 12 12:55:34 impressed-jade.ptr.network python[16458]: 2026-11-12 12:55:34,317 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC-2Cj6KlR9rCfR28zNLmOTA "HTTP/1.1 200 OK"
Nov 12 12:55:34 impressed-jade.ptr.network python[16458]: 2026-11-12 12:55:34,328 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCWJ2lWNubArHWmf3FIHbfcQ "HTTP/1.1 200 OK"
Nov 12 12:55:34 impressed-jade.ptr.network python[16458]: 2026-11-12 12:55:34,353 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCqFMzb-4AUf6WAIbl132QKA "HTTP/1.1 200 OK"
Nov 12 12:55:34 impressed-jade.ptr.network python[16458]: 2026-11-12 12:55:34,434 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCwJ3S2Ix7aI1BhHexDJlmEg "HTTP/1.1 200 OK"
Nov 12 12:55:34 impressed-jade.ptr.network python[16458]: 2026-11-12 12:55:34,448 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCTv-XvfzLX3i4IGWAm4sbmA "HTTP/1.1 200 OK"
Nov 12 12:55:34 impressed-jade.ptr.network python[16458]: 2026-11-12 12:55:34,502 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCxfPjORdISQSn2fV8tcVmgA "HTTP/1.1 200 OK"
Nov 12 12:55:34 impressed-jade.ptr.network python[16458]: 2026-11-12 12:55:34,602 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCQsH5XtIc9hONE1BQjucM0g "HTTP/1.1 200 OK"
Nov 12 12:55:34 impressed-jade.ptr.network python[16458]: 2026-11-12 12:55:34,674 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC6UL29enLNe4mqwTfAyeNuw "HTTP/1.1 200 OK"
Nov 12 12:55:34 impressed-jade.ptr.network python[16458]: 2026-11-12 12:55:34,737 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpryVRk_VDudG8SHXgWcG0w "HTTP/1.1 200 OK"
Nov 12 12:55:34 impressed-jade.ptr.network python[16458]: 2026-11-12 12:55:34,756 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCyGa1YEx9ST66rYrJTGIKOw "HTTP/1.1 200 OK"
Nov 12 12:55:34 impressed-jade.ptr.network python[16458]: 2026-11-12 12:55:34,877 INFO HTTP Request: GET https://22bet.com/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 12 12:55:34 impressed-jade.ptr.network python[16458]: 2026-11-12 12:55:34,921 INFO HTTP Request: GET https://22bet.com/linefeed/get1x2_vzip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 404 Not Found"
Nov 12 12:55:35 impressed-jade.ptr.network python[16458]: 2026-11-12 12:55:35,154 INFO HTTP Request: GET https://22bet.co.ke/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 12 12:55:35 impressed-jade.ptr.network python[16458]: 2026-11-12 12:55:35,282 INFO HTTP Request: GET https://22bet.co.ke/linefeed/get1x2_vzip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 404 Not Found"
Nov 12 12:55:35 impressed-jade.ptr.network python[16458]: 2026-11-12 12:55:35,360 INFO HTTP Request: GET https://22bet.ng/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 12 12:55:35 impressed-jade.ptr.network python[16458]: 2026-11-12 12:55:35,436 INFO HTTP Request: GET https://22bet.ng/linefeed/get1x2_vzip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 404 Not Found"
Nov 12 12:55:41 impressed-jade.ptr.network python[16458]: 2026-11-12 12:55:41,761 INFO HTTP Request: GET https://22bet.ug/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 12 12:55:41 impressed-jade.ptr.network python[16458]: 2026-11-12 12:55:41,891 INFO HTTP Request: GET https://22bet.ug/linefeed/get1x2_vzip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 404 Not Found"
Nov 12 12:55:42 impressed-jade.ptr.network python[16458]: 2026-11-12 12:55:42,088 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 12:55:42 impressed-jade.ptr.network python[16458]: 2026-11-12 12:55:42,290 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 12:55:42 impressed-jade.ptr.network python[16458]: 2026-11-12 12:55:42,930 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 12:56:06 impressed-jade.ptr.network python[16458]: 2026-11-12 12:56:06,817 INFO HTTP Request: GET https://www.maxbet.rs/live/init/sr "HTTP/1.1 200 OK"
--- api log ---
Nov 12 12:55:29 impressed-jade.ptr.network uvicorn[16464]: INFO:     Started server process [16464]
Nov 12 12:55:29 impressed-jade.ptr.network uvicorn[16464]: INFO:     Waiting for application startup.
Nov 12 12:55:29 impressed-jade.ptr.network uvicorn[16464]: INFO:     Application startup complete.
Nov 12 12:55:29 impressed-jade.ptr.network uvicorn[16463]: INFO:     Started server process [16463]
Nov 12 12:55:29 impressed-jade.ptr.network uvicorn[16463]: INFO:     Waiting for application startup.
Nov 12 12:55:30 impressed-jade.ptr.network uvicorn[16463]: INFO:     Application startup complete.
Nov 12 12:55:37 impressed-jade.ptr.network uvicorn[16463]: INFO:     127.0.0.1:59238 - "GET /api/health HTTP/1.1" 200 OK
Nov 12 12:55:38 impressed-jade.ptr.network uvicorn[16463]: INFO:     109.92.227.130:0 - "GET /api/me/watch?ids= HTTP/1.0" 200 OK
Nov 12 12:55:38 impressed-jade.ptr.network uvicorn[16463]: INFO:     109.92.227.130:0 - "GET /api/me/watch?ids= HTTP/1.0" 200 OK
Nov 12 12:55:50 impressed-jade.ptr.network uvicorn[16463]: INFO:     109.92.227.130:0 - "GET /api/home?tz=180&sport=esports HTTP/1.0" 200 OK
Nov 12 12:56:02 impressed-jade.ptr.network uvicorn[16463]: INFO:     109.92.227.130:0 - "GET /api/sports?tz=180 HTTP/1.0" 200 OK
Nov 12 12:56:08 impressed-jade.ptr.network uvicorn[16464]: INFO:     127.0.0.1:37924 - "GET /api/health HTTP/1.1" 200 OK
Nov 12 12:56:08 impressed-jade.ptr.network uvicorn[16464]: INFO:     127.0.0.1:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 12 12:56:08 impressed-jade.ptr.network uvicorn[16463]: INFO:     127.0.0.1:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 12 12:56:08 impressed-jade.ptr.network uvicorn[16463]: INFO:     127.0.0.1:0 - "GET /api/home HTTP/1.0" 200 OK
```
