# Zicer deploy 2026-11-12 00:21 UTC

Итог: УСПЕХ

Сайт: https://winly.rs

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: c8e73af Баннер «Prvih 100 prognozera» первым слайдом карусели на главной: золотая медаль, бонус, полоска заполнения и живой счётчик мест; гостям — регистрация, игрокам — позвать друзей

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
2026/11/12 03:21:35 [warn] 79750#79750: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/12 03:21:35 [warn] 79750#79750: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/12 03:21:35 [warn] 79750#79750: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/12 03:21:35 [warn] 79750#79750: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/12 03:21:35 [warn] 79750#79750: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/12 03:21:35 [warn] 79750#79750: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
live | 2026-11-12 00:21:19.156071 | live updated 6 | 
basketball | 2026-11-12 00:21:29.717342 | basketball upserted 414 | 
basketball_week | 2026-11-12 00:21:30.736470 | nba week upserted 43 | 
other_sports | 2026-11-12 00:21:31.263191 | other sports new 0 | 
backfill | 2026-11-12 00:21:31.268429 | already | 
logos | 2026-11-12 00:21:31.356563 | logos: nothing to do | 
highlights | 2026-11-12 00:21:32.077134 | highlights +0 | 
names | 2026-11-12 00:17:45.534033 | names 0 | 
tg_reminders | 2026-11-12 00:17:45.585503 | no token | 
x22_line | 2026-11-12 00:21:39.223670 | x22 line new 0, fetched {'futsal': '0'} | 
odds | 2026-11-12 00:21:40.217114 | odds matched 63 | 
settle | 2026-11-12 00:21:40.238515 | settled 0 | 
xfeed | 2026-11-12 00:21:53.860329 | xfeed empty (22bet.ug http 404) | 
probe_sports | 2026-11-11 21:19:02.243724 | football/line:err(22bet.ug http 404) football/live:err(cooldown: 22bet.ug http 404) futsal/line:err(cooldown: 22bet.ug http 404) futsal/live:err(cooldown: 22bet.ug http 404) boxing/line:err(cooldown: 22bet.ug http 404) boxing/live:err(cooldown: 22bet.ug http 404) mma/line:err(cooldown: 22bet.ug http 404) mma/live:err(cooldown: 22bet.ug http 404) mma2/line:err(cooldown: 22bet.ug http 404) mma2/live:err(cooldown: 22bet.ug http 404) combat/line:err(cooldown: 22bet.ug http 404) combat/live:err(coold | 
social | 2026-11-12 00:20:02.048803 | social nothing due (live) | 
maxbet_results | 2026-11-12 00:20:03.835562 | no pending | 
other_results | 2026-11-12 00:20:08.612416 | other results 9 | 
trends | 2026-11-10 23:36:09.974574 | trends 11 | 
analysis | 2026-11-10 23:36:10.199323 | analysis 27 | 
football_live | 2026-11-12 00:20:58.551558 | live upserted 11 | 
finish_stale | 2026-11-12 00:21:05.095625 | finished 0 | 
tg_poll | 2026-11-12 00:21:13.945570 | no token | 
football | 2026-11-12 00:21:28.006079 | football upserted 100 |  "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
pandascore | 2026-11-12 00:03:41.416932 | pandascore new 12, updated 206, finished 0 | ile "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/engine/base.py", line 1986, in _exec_single_context
--- worker log ---
Nov 12 03:21:31 impressed-jade.ptr.network python[79396]: 2026-11-12 03:21:31,051 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/W/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 03:21:31 impressed-jade.ptr.network python[79396]: 2026-11-12 03:21:31,128 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/HB/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 03:21:31 impressed-jade.ptr.network python[79396]: 2026-11-12 03:21:31,193 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/TT/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 03:21:31 impressed-jade.ptr.network python[79396]: 2026-11-12 03:21:31,568 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpFqOv5z4WKps64GlQS4ytw "HTTP/1.1 200 OK"
Nov 12 03:21:31 impressed-jade.ptr.network python[79396]: 2026-11-12 03:21:31,854 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC-2Cj6KlR9rCfR28zNLmOTA "HTTP/1.1 200 OK"
Nov 12 03:21:31 impressed-jade.ptr.network python[79396]: 2026-11-12 03:21:31,864 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCWJ2lWNubArHWmf3FIHbfcQ "HTTP/1.1 200 OK"
Nov 12 03:21:31 impressed-jade.ptr.network python[79396]: 2026-11-12 03:21:31,884 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCqFMzb-4AUf6WAIbl132QKA "HTTP/1.1 200 OK"
Nov 12 03:21:31 impressed-jade.ptr.network python[79396]: 2026-11-12 03:21:31,898 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCwJ3S2Ix7aI1BhHexDJlmEg "HTTP/1.1 200 OK"
Nov 12 03:21:31 impressed-jade.ptr.network python[79396]: 2026-11-12 03:21:31,910 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCTv-XvfzLX3i4IGWAm4sbmA "HTTP/1.1 200 OK"
Nov 12 03:21:31 impressed-jade.ptr.network python[79396]: 2026-11-12 03:21:31,993 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCxfPjORdISQSn2fV8tcVmgA "HTTP/1.1 200 OK"
Nov 12 03:21:32 impressed-jade.ptr.network python[79396]: 2026-11-12 03:21:32,003 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCQsH5XtIc9hONE1BQjucM0g "HTTP/1.1 200 OK"
Nov 12 03:21:32 impressed-jade.ptr.network python[79396]: 2026-11-12 03:21:32,023 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC6UL29enLNe4mqwTfAyeNuw "HTTP/1.1 200 OK"
Nov 12 03:21:32 impressed-jade.ptr.network python[79396]: 2026-11-12 03:21:32,039 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpryVRk_VDudG8SHXgWcG0w "HTTP/1.1 200 OK"
Nov 12 03:21:32 impressed-jade.ptr.network python[79396]: 2026-11-12 03:21:32,058 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCyGa1YEx9ST66rYrJTGIKOw "HTTP/1.1 200 OK"
Nov 12 03:21:32 impressed-jade.ptr.network python[79396]: 2026-11-12 03:21:32,185 INFO HTTP Request: GET https://22bet.com/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 12 03:21:32 impressed-jade.ptr.network python[79396]: 2026-11-12 03:21:32,239 INFO HTTP Request: GET https://22bet.com/linefeed/get1x2_vzip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 404 Not Found"
Nov 12 03:21:32 impressed-jade.ptr.network python[79396]: 2026-11-12 03:21:32,478 INFO HTTP Request: GET https://22bet.co.ke/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 12 03:21:32 impressed-jade.ptr.network python[79396]: 2026-11-12 03:21:32,628 INFO HTTP Request: GET https://22bet.co.ke/linefeed/get1x2_vzip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 404 Not Found"
Nov 12 03:21:32 impressed-jade.ptr.network python[79396]: 2026-11-12 03:21:32,722 INFO HTTP Request: GET https://22bet.ng/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 12 03:21:32 impressed-jade.ptr.network python[79396]: 2026-11-12 03:21:32,785 INFO HTTP Request: GET https://22bet.ng/linefeed/get1x2_vzip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 404 Not Found"
Nov 12 03:21:39 impressed-jade.ptr.network python[79396]: 2026-11-12 03:21:39,093 INFO HTTP Request: GET https://22bet.ug/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 12 03:21:39 impressed-jade.ptr.network python[79396]: 2026-11-12 03:21:39,222 INFO HTTP Request: GET https://22bet.ug/linefeed/get1x2_vzip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 404 Not Found"
Nov 12 03:21:39 impressed-jade.ptr.network python[79396]: 2026-11-12 03:21:39,353 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 03:21:39 impressed-jade.ptr.network python[79396]: 2026-11-12 03:21:39,724 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 03:21:40 impressed-jade.ptr.network python[79396]: 2026-11-12 03:21:40,165 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
--- api log ---
Nov 12 03:21:56 impressed-jade.ptr.network uvicorn[79401]: INFO:     87.116.135.226:0 - "GET /api/me/watch?ids= HTTP/1.0" 200 OK
Nov 12 03:21:57 impressed-jade.ptr.network uvicorn[79402]: INFO:     87.116.135.226:0 - "GET /api/home?tz=60&sport=all HTTP/1.0" 200 OK
Nov 12 03:21:57 impressed-jade.ptr.network uvicorn[79402]: INFO:     87.116.135.226:0 - "POST /api/t HTTP/1.0" 200 OK
Nov 12 03:21:58 impressed-jade.ptr.network uvicorn[79401]: INFO:     87.116.135.226:0 - "GET /api/matches?day=live&sport=all&serbian=false&tz=60 HTTP/1.0" 200 OK
Nov 12 03:21:58 impressed-jade.ptr.network uvicorn[79401]: INFO:     87.116.135.226:0 - "GET /api/ranking?period=month HTTP/1.0" 200 OK
Nov 12 03:21:58 impressed-jade.ptr.network uvicorn[79402]: INFO:     87.116.135.226:0 - "GET /api/sports?tz=60 HTTP/1.0" 200 OK
Nov 12 03:21:58 impressed-jade.ptr.network uvicorn[79402]: INFO:     87.116.135.226:0 - "GET /api/matches?day=today&sport=all&serbian=false&tz=60 HTTP/1.0" 200 OK
Nov 12 03:21:58 impressed-jade.ptr.network uvicorn[79402]: INFO:     87.116.135.226:0 - "GET /api/home?tz=60&sport=all HTTP/1.0" 200 OK
Nov 12 03:21:58 impressed-jade.ptr.network uvicorn[79402]: INFO:     127.0.0.1:53598 - "GET /api/health HTTP/1.1" 200 OK
Nov 12 03:21:59 impressed-jade.ptr.network uvicorn[79402]: INFO:     127.0.0.1:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 12 03:21:59 impressed-jade.ptr.network uvicorn[79402]: INFO:     127.0.0.1:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 12 03:21:59 impressed-jade.ptr.network uvicorn[79402]: INFO:     127.0.0.1:0 - "GET /api/home HTTP/1.0" 200 OK
Nov 12 03:21:59 impressed-jade.ptr.network uvicorn[79402]: INFO:     87.116.135.226:0 - "GET /api/sports?tz=60 HTTP/1.0" 200 OK
Nov 12 03:21:59 impressed-jade.ptr.network uvicorn[79401]: INFO:     87.116.135.226:0 - "POST /api/t HTTP/1.0" 200 OK
Nov 12 03:21:59 impressed-jade.ptr.network uvicorn[79401]: INFO:     87.116.135.226:0 - "GET /api/home?tz=60&sport=all HTTP/1.0" 200 OK
```
