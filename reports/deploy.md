# Zicer deploy 2026-11-11 20:44 UTC

Итог: УСПЕХ

Сайт: https://winly.rs

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: 0e326e8 Письма: строка «Код действует 15 минут» только в письмах с кодом, не в тестовом

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
домен: winly.rs (winly.rs по Google DNS → "data":"185.119.88.99", www: www.winly.rs)

=== nginx ===
2026/11/11 23:44:32 [warn] 3421409#3421409: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/11 23:44:32 [warn] 3421409#3421409: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/11 23:44:32 [warn] 3421409#3421409: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/11 23:44:32 [warn] 3421409#3421409: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/11 23:44:32 [warn] 3421409#3421409: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/11 23:44:32 [warn] 3421409#3421409: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
OK: nginx перезагружен

=== HTTPS ===
OK: сертификат уже есть

=== Проверки ===
api local: {"ok":true,"app":"zicer"}
api https: {"ok":true,"app":"zicer"}
https / -> 200
https /api/health -> 200
https /api/home -> 200
https /mecevi -> 200
index cache: cache-control: no-cache
cache-control: no-cache, no-store, must-revalidate
matches: {'esports': 58, 'hockey': 52, 'volleyball': 39, 'tabletennis': 186, 'basketball': 709, 'handball': 45, 'waterpolo': 7, 'tennis': 25, 'football': 1100}
finish_stale | 2026-11-11 20:43:38.811921 | finished 0 | 
maxbet_results | 2026-11-11 20:43:44.144403 | maxbet results 5 | 
other_results | 2026-11-11 20:43:57.120806 | other results 37 | 
football_live | 2026-11-11 20:44:02.215378 | live upserted 0 | 
live | 2026-11-11 20:44:02.576472 | live updated 26 | 
tg_poll | 2026-11-11 20:44:21.238249 | no token | 
pandascore | 2026-11-11 16:06:16.134963 | pandascore new 0, updated 58, finished 0 | "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/engine/base.py", line 1986, in _exec_single_context
basketball | 2026-11-11 20:44:30.310870 | basketball upserted 410 | 
basketball_week | 2026-11-11 20:44:31.872912 | nba week upserted 48 | 
other_sports | 2026-11-11 20:44:32.602379 | other sports new 0 | 
backfill | 2026-11-11 20:44:32.611294 | already | 
logos | 2026-11-11 20:44:32.802980 | logos: nothing to do | 
highlights | 2026-11-11 20:44:33.435909 | highlights +2 | 
x22_line | 2026-11-11 20:44:40.219027 | x22 line new 0, fetched {'futsal': '0'} | 
odds | 2026-11-11 20:44:41.586044 | odds matched 66 | 
settle | 2026-11-11 20:44:41.705820 | settled 0 | 
xfeed | 2026-11-11 20:44:55.348970 | xfeed empty (22bet.ug http 308) | 
trends | 2026-11-10 23:36:09.974574 | trends 11 | 
analysis | 2026-11-10 23:36:10.199323 | analysis 27 | 
names | 2026-11-11 20:42:13.686136 | names 0 | 
tg_reminders | 2026-11-11 20:42:14.024261 | no token | 
social | 2026-11-11 20:42:25.507109 | social nothing due (test) | 
football | 2026-11-11 20:44:27.047448 | football upserted 96 |  "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
--- worker log ---
Nov 11 23:44:31 impressed-jade.ptr.network python[3421071]: 2026-11-11 23:44:31,696 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261118 "HTTP/1.1 200 OK"
Nov 11 23:44:32 impressed-jade.ptr.network python[3421071]: 2026-11-11 23:44:32,034 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/H/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 23:44:32 impressed-jade.ptr.network python[3421071]: 2026-11-11 23:44:32,176 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/T/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 23:44:32 impressed-jade.ptr.network python[3421071]: 2026-11-11 23:44:32,246 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/V/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 23:44:32 impressed-jade.ptr.network python[3421071]: 2026-11-11 23:44:32,357 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/W/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 23:44:32 impressed-jade.ptr.network python[3421071]: 2026-11-11 23:44:32,425 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/HB/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 23:44:32 impressed-jade.ptr.network python[3421071]: 2026-11-11 23:44:32,518 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/TT/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 23:44:33 impressed-jade.ptr.network python[3421071]: 2026-11-11 23:44:33,043 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpFqOv5z4WKps64GlQS4ytw "HTTP/1.1 200 OK"
Nov 11 23:44:33 impressed-jade.ptr.network python[3421071]: 2026-11-11 23:44:33,105 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC-2Cj6KlR9rCfR28zNLmOTA "HTTP/1.1 200 OK"
Nov 11 23:44:33 impressed-jade.ptr.network python[3421071]: 2026-11-11 23:44:33,171 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCWJ2lWNubArHWmf3FIHbfcQ "HTTP/1.1 200 OK"
Nov 11 23:44:33 impressed-jade.ptr.network python[3421071]: 2026-11-11 23:44:33,205 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCqFMzb-4AUf6WAIbl132QKA "HTTP/1.1 200 OK"
Nov 11 23:44:33 impressed-jade.ptr.network python[3421071]: 2026-11-11 23:44:33,223 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCwJ3S2Ix7aI1BhHexDJlmEg "HTTP/1.1 200 OK"
Nov 11 23:44:33 impressed-jade.ptr.network python[3421071]: 2026-11-11 23:44:33,237 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCTv-XvfzLX3i4IGWAm4sbmA "HTTP/1.1 200 OK"
Nov 11 23:44:33 impressed-jade.ptr.network python[3421071]: 2026-11-11 23:44:33,310 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCxfPjORdISQSn2fV8tcVmgA "HTTP/1.1 200 OK"
Nov 11 23:44:33 impressed-jade.ptr.network python[3421071]: 2026-11-11 23:44:33,321 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCQsH5XtIc9hONE1BQjucM0g "HTTP/1.1 200 OK"
Nov 11 23:44:33 impressed-jade.ptr.network python[3421071]: 2026-11-11 23:44:33,346 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC6UL29enLNe4mqwTfAyeNuw "HTTP/1.1 200 OK"
Nov 11 23:44:33 impressed-jade.ptr.network python[3421071]: 2026-11-11 23:44:33,375 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpryVRk_VDudG8SHXgWcG0w "HTTP/1.1 200 OK"
Nov 11 23:44:33 impressed-jade.ptr.network python[3421071]: 2026-11-11 23:44:33,403 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCyGa1YEx9ST66rYrJTGIKOw "HTTP/1.1 200 OK"
Nov 11 23:44:33 impressed-jade.ptr.network python[3421071]: 2026-11-11 23:44:33,551 INFO HTTP Request: GET https://22bet.com/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 23:44:33 impressed-jade.ptr.network python[3421071]: 2026-11-11 23:44:33,802 INFO HTTP Request: GET https://22bet.co.ke/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 23:44:33 impressed-jade.ptr.network python[3421071]: 2026-11-11 23:44:33,901 INFO HTTP Request: GET https://22bet.ng/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 23:44:40 impressed-jade.ptr.network python[3421071]: 2026-11-11 23:44:40,216 INFO HTTP Request: GET https://22bet.ug/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 23:44:40 impressed-jade.ptr.network python[3421071]: 2026-11-11 23:44:40,370 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 23:44:40 impressed-jade.ptr.network python[3421071]: 2026-11-11 23:44:40,767 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 23:44:41 impressed-jade.ptr.network python[3421071]: 2026-11-11 23:44:41,455 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
--- api log ---
Nov 11 23:44:45 impressed-jade.ptr.network uvicorn[3421136]: INFO:     109.245.39.254:0 - "GET /api/me/watch?ids= HTTP/1.0" 200 OK
Nov 11 23:44:45 impressed-jade.ptr.network uvicorn[3421136]: INFO:     109.245.39.254:0 - "POST /api/t HTTP/1.0" 200 OK
Nov 11 23:44:46 impressed-jade.ptr.network uvicorn[3421136]: INFO:     109.245.39.254:0 - "GET /api/bookmakers HTTP/1.0" 200 OK
Nov 11 23:44:46 impressed-jade.ptr.network uvicorn[3421136]: INFO:     109.245.39.254:0 - "GET /api/me/watch?ids= HTTP/1.0" 200 OK
Nov 11 23:44:46 impressed-jade.ptr.network uvicorn[3421137]: INFO:     109.245.39.254:0 - "POST /api/t HTTP/1.0" 200 OK
Nov 11 23:44:46 impressed-jade.ptr.network uvicorn[3421136]: INFO:     109.245.39.254:0 - "GET /api/clubs/battle?sport=football HTTP/1.0" 200 OK
Nov 11 23:44:48 impressed-jade.ptr.network uvicorn[3421137]: INFO:     109.245.39.254:0 - "GET /api/ranking?period=month HTTP/1.0" 200 OK
Nov 11 23:44:48 impressed-jade.ptr.network uvicorn[3421137]: INFO:     109.245.39.254:0 - "GET /api/sports?tz=60 HTTP/1.0" 200 OK
Nov 11 23:44:48 impressed-jade.ptr.network uvicorn[3421136]: INFO:     109.245.39.254:0 - "GET /api/matches?day=live&sport=all&serbian=false&tz=60 HTTP/1.0" 200 OK
Nov 11 23:44:48 impressed-jade.ptr.network uvicorn[3421136]: INFO:     109.245.39.254:0 - "GET /api/matches?day=today&sport=all&serbian=false&tz=60 HTTP/1.0" 200 OK
Nov 11 23:44:48 impressed-jade.ptr.network uvicorn[3421136]: INFO:     109.245.39.254:0 - "GET /api/home?tz=60&sport=all HTTP/1.0" 200 OK
Nov 11 23:44:57 impressed-jade.ptr.network uvicorn[3421136]: INFO:     127.0.0.1:34526 - "GET /api/health HTTP/1.1" 200 OK
Nov 11 23:44:57 impressed-jade.ptr.network uvicorn[3421136]: INFO:     127.0.0.1:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 23:44:57 impressed-jade.ptr.network uvicorn[3421136]: INFO:     127.0.0.1:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 23:44:58 impressed-jade.ptr.network uvicorn[3421136]: INFO:     127.0.0.1:0 - "GET /api/home HTTP/1.0" 200 OK
```
