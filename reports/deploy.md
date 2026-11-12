# Zicer deploy 2026-11-12 00:40 UTC

Итог: УСПЕХ

Сайт: https://winly.rs

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: ca2dbe3 Срочно: страница матча снова открывается (декоратор маршрута съехал на вспомогательную функцию); проверка основных API перед каждым коммитом

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
2026/11/12 03:39:57 [warn] 104498#104498: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/12 03:39:57 [warn] 104498#104498: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/12 03:39:57 [warn] 104498#104498: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/12 03:39:57 [warn] 104498#104498: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/12 03:39:57 [warn] 104498#104498: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/12 03:39:57 [warn] 104498#104498: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
other_results | 2026-11-12 00:34:11.641349 | other results 10 | 
social | 2026-11-12 00:38:43.626491 | social nothing due (live) | 
finish_stale | 2026-11-12 00:38:52.473042 | finished 0 | 
football_live | 2026-11-12 00:38:57.590366 | live upserted 11 | 
live | 2026-11-12 00:39:23.225546 | live updated 7 | 
tg_poll | 2026-11-12 00:39:32.085820 | no token | 
probe_sports | 2026-11-11 21:19:02.243724 | football/line:err(22bet.ug http 404) football/live:err(cooldown: 22bet.ug http 404) futsal/line:err(cooldown: 22bet.ug http 404) futsal/live:err(cooldown: 22bet.ug http 404) boxing/line:err(cooldown: 22bet.ug http 404) boxing/live:err(cooldown: 22bet.ug http 404) mma/line:err(cooldown: 22bet.ug http 404) mma/live:err(cooldown: 22bet.ug http 404) mma2/line:err(cooldown: 22bet.ug http 404) mma2/live:err(cooldown: 22bet.ug http 404) combat/line:err(cooldown: 22bet.ug http 404) combat/live:err(coold | 
maxbet_results | 2026-11-12 00:39:45.628738 | no pending | 
basketball | 2026-11-12 00:39:52.438623 | basketball upserted 414 | 
basketball_week | 2026-11-12 00:39:53.472030 | nba week upserted 43 | 
other_sports | 2026-11-12 00:39:53.985786 | other sports new 0 | 
backfill | 2026-11-12 00:39:53.992111 | already | 
logos | 2026-11-12 00:39:54.092660 | logos: nothing to do | 
highlights | 2026-11-12 00:39:54.906058 | highlights +0 | 
x22_line | 2026-11-12 00:40:02.196467 | x22 line new 0, fetched {'futsal': '0'} | 
odds | 2026-11-12 00:40:03.024578 | odds matched 63 | 
settle | 2026-11-12 00:40:03.051563 | settled 0 | 
xfeed | 2026-11-12 00:40:16.672867 | xfeed empty (22bet.ug http 404) | 
names | 2026-11-12 00:31:48.490441 | names 0 | 
trends | 2026-11-10 23:36:09.974574 | trends 11 | 
tg_reminders | 2026-11-12 00:31:48.804486 | no token | 
analysis | 2026-11-10 23:36:10.199323 | analysis 27 | 
football | 2026-11-12 00:39:50.647034 | football upserted 100 |  "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
pandascore | 2026-11-12 00:03:41.416932 | pandascore new 12, updated 206, finished 0 | ile "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/engine/base.py", line 1986, in _exec_single_context
--- worker log ---
Nov 12 03:39:53 impressed-jade.ptr.network python[104160]: 2026-11-12 03:39:53,759 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/W/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 03:39:53 impressed-jade.ptr.network python[104160]: 2026-11-12 03:39:53,832 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/HB/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 03:39:53 impressed-jade.ptr.network python[104160]: 2026-11-12 03:39:53,914 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/TT/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 03:39:54 impressed-jade.ptr.network python[104160]: 2026-11-12 03:39:54,256 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpFqOv5z4WKps64GlQS4ytw "HTTP/1.1 200 OK"
Nov 12 03:39:54 impressed-jade.ptr.network python[104160]: 2026-11-12 03:39:54,328 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC-2Cj6KlR9rCfR28zNLmOTA "HTTP/1.1 200 OK"
Nov 12 03:39:54 impressed-jade.ptr.network python[104160]: 2026-11-12 03:39:54,447 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCWJ2lWNubArHWmf3FIHbfcQ "HTTP/1.1 200 OK"
Nov 12 03:39:54 impressed-jade.ptr.network python[104160]: 2026-11-12 03:39:54,464 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCqFMzb-4AUf6WAIbl132QKA "HTTP/1.1 200 OK"
Nov 12 03:39:54 impressed-jade.ptr.network python[104160]: 2026-11-12 03:39:54,478 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCwJ3S2Ix7aI1BhHexDJlmEg "HTTP/1.1 200 OK"
Nov 12 03:39:54 impressed-jade.ptr.network python[104160]: 2026-11-12 03:39:54,488 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCTv-XvfzLX3i4IGWAm4sbmA "HTTP/1.1 200 OK"
Nov 12 03:39:54 impressed-jade.ptr.network python[104160]: 2026-11-12 03:39:54,554 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCxfPjORdISQSn2fV8tcVmgA "HTTP/1.1 200 OK"
Nov 12 03:39:54 impressed-jade.ptr.network python[104160]: 2026-11-12 03:39:54,565 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCQsH5XtIc9hONE1BQjucM0g "HTTP/1.1 200 OK"
Nov 12 03:39:54 impressed-jade.ptr.network python[104160]: 2026-11-12 03:39:54,673 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC6UL29enLNe4mqwTfAyeNuw "HTTP/1.1 200 OK"
Nov 12 03:39:54 impressed-jade.ptr.network python[104160]: 2026-11-12 03:39:54,776 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpryVRk_VDudG8SHXgWcG0w "HTTP/1.1 200 OK"
Nov 12 03:39:54 impressed-jade.ptr.network python[104160]: 2026-11-12 03:39:54,890 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCyGa1YEx9ST66rYrJTGIKOw "HTTP/1.1 200 OK"
Nov 12 03:39:55 impressed-jade.ptr.network python[104160]: 2026-11-12 03:39:55,016 INFO HTTP Request: GET https://22bet.com/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 12 03:39:55 impressed-jade.ptr.network python[104160]: 2026-11-12 03:39:55,073 INFO HTTP Request: GET https://22bet.com/linefeed/get1x2_vzip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 404 Not Found"
Nov 12 03:39:55 impressed-jade.ptr.network python[104160]: 2026-11-12 03:39:55,317 INFO HTTP Request: GET https://22bet.co.ke/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 12 03:39:55 impressed-jade.ptr.network python[104160]: 2026-11-12 03:39:55,454 INFO HTTP Request: GET https://22bet.co.ke/linefeed/get1x2_vzip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 404 Not Found"
Nov 12 03:39:55 impressed-jade.ptr.network python[104160]: 2026-11-12 03:39:55,713 INFO HTTP Request: GET https://22bet.ng/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 12 03:39:55 impressed-jade.ptr.network python[104160]: 2026-11-12 03:39:55,782 INFO HTTP Request: GET https://22bet.ng/linefeed/get1x2_vzip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 404 Not Found"
Nov 12 03:40:02 impressed-jade.ptr.network python[104160]: 2026-11-12 03:40:02,075 INFO HTTP Request: GET https://22bet.ug/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 12 03:40:02 impressed-jade.ptr.network python[104160]: 2026-11-12 03:40:02,194 INFO HTTP Request: GET https://22bet.ug/linefeed/get1x2_vzip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 404 Not Found"
Nov 12 03:40:02 impressed-jade.ptr.network python[104160]: 2026-11-12 03:40:02,340 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 03:40:02 impressed-jade.ptr.network python[104160]: 2026-11-12 03:40:02,532 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 03:40:02 impressed-jade.ptr.network python[104160]: 2026-11-12 03:40:02,974 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
--- api log ---
Nov 12 03:40:03 impressed-jade.ptr.network uvicorn[104186]: INFO:     87.116.135.226:0 - "GET /api/home?tz=60&sport=all HTTP/1.0" 200 OK
Nov 12 03:40:04 impressed-jade.ptr.network uvicorn[104186]: INFO:     87.116.135.226:0 - "GET /api/sports?tz=60 HTTP/1.0" 200 OK
Nov 12 03:40:04 impressed-jade.ptr.network uvicorn[104187]: INFO:     87.116.135.226:0 - "POST /api/t HTTP/1.0" 200 OK
Nov 12 03:40:04 impressed-jade.ptr.network uvicorn[104187]: INFO:     87.116.135.226:0 - "GET /api/home?tz=60&sport=esports HTTP/1.0" 200 OK
Nov 12 03:40:06 impressed-jade.ptr.network uvicorn[104187]: INFO:     87.116.135.226:0 - "POST /api/t HTTP/1.0" 200 OK
Nov 12 03:40:06 impressed-jade.ptr.network uvicorn[104186]: INFO:     87.116.135.226:0 - "GET /api/matches/2129 HTTP/1.0" 200 OK
Nov 12 03:40:08 impressed-jade.ptr.network uvicorn[104187]: INFO:     87.116.135.226:0 - "POST /api/t HTTP/1.0" 200 OK
Nov 12 03:40:08 impressed-jade.ptr.network uvicorn[104186]: INFO:     87.116.135.226:0 - "GET /api/sports?tz=60 HTTP/1.0" 200 OK
Nov 12 03:40:08 impressed-jade.ptr.network uvicorn[104186]: INFO:     87.116.135.226:0 - "GET /api/home?tz=60&sport=esports HTTP/1.0" 200 OK
Nov 12 03:40:11 impressed-jade.ptr.network uvicorn[104187]: INFO:     87.116.135.226:0 - "POST /api/t HTTP/1.0" 200 OK
Nov 12 03:40:11 impressed-jade.ptr.network uvicorn[104186]: INFO:     87.116.135.226:0 - "GET /api/matches/2162 HTTP/1.0" 200 OK
Nov 12 03:40:20 impressed-jade.ptr.network uvicorn[104186]: INFO:     127.0.0.1:45244 - "GET /api/health HTTP/1.1" 200 OK
Nov 12 03:40:20 impressed-jade.ptr.network uvicorn[104187]: INFO:     127.0.0.1:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 12 03:40:21 impressed-jade.ptr.network uvicorn[104186]: INFO:     127.0.0.1:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 12 03:40:21 impressed-jade.ptr.network uvicorn[104186]: INFO:     127.0.0.1:0 - "GET /api/home HTTP/1.0" 200 OK
```
