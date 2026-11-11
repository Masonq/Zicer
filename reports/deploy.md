# Zicer deploy 2026-11-11 21:05 UTC

Итог: УСПЕХ

Сайт: https://winly.rs

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: 536622e Вход по коду из почты без пароля; мягкая проверка MMA/бокса/футзала в линии 22Bet (запуск из админки); аватар и обложка Winly для страницы Facebook (winly.rs/brand/)

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
домен: winly.rs (winly.rs по Google DNS → "data":"185.119.88.99", www: нет)

=== nginx ===
2026/11/12 00:04:52 [warn] 3447743#3447743: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/12 00:04:52 [warn] 3447743#3447743: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/12 00:04:52 [warn] 3447743#3447743: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/12 00:04:52 [warn] 3447743#3447743: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/12 00:04:52 [warn] 3447743#3447743: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/12 00:04:52 [warn] 3447743#3447743: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
matches: {'esports': 58, 'hockey': 63, 'volleyball': 42, 'tabletennis': 216, 'basketball': 713, 'handball': 47, 'waterpolo': 13, 'tennis': 25, 'football': 1104}
names | 2026-11-11 21:00:03.991875 | names 10 | 
tg_poll | 2026-11-11 21:04:19.784099 | no token | 
football_live | 2026-11-11 21:04:24.883652 | live upserted 11 | 
live | 2026-11-11 21:04:25.163720 | live updated 18 | 
xfeed | 2026-11-11 21:04:29.139889 | xfeed games 171, linked 0, updated 11 | 
basketball | 2026-11-11 21:04:47.523145 | basketball upserted 418 | 
basketball_week | 2026-11-11 21:04:48.476470 | nba week upserted 43 | 
other_sports | 2026-11-11 21:04:49.070343 | other sports new 2 | 
backfill | 2026-11-11 21:04:49.074182 | already | 
logos | 2026-11-11 21:05:01.750067 | logos: checked 25, found 8 | 
highlights | 2026-11-11 21:05:02.539129 | highlights +0 | 
x22_line | 2026-11-11 21:05:09.411454 | x22 line new 0, fetched {'futsal': '0'} | 
odds | 2026-11-11 21:05:11.767949 | odds matched 66 | 
settle | 2026-11-11 21:05:11.900086 | settled 0 | 
trends | 2026-11-10 23:36:09.974574 | trends 11 | 
analysis | 2026-11-10 23:36:10.199323 | analysis 27 | 
maxbet_results | 2026-11-11 21:03:12.489148 | maxbet results 5 | 
social | 2026-11-11 21:03:22.345495 | social nothing due (test) | 
other_results | 2026-11-11 21:03:31.992035 | other results 26 | 
tg_reminders | 2026-11-11 20:59:52.992212 | no token | 
finish_stale | 2026-11-11 21:03:43.845115 | finished 0 | 
football | 2026-11-11 21:04:45.830495 | football upserted 100 |  "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
pandascore | 2026-11-11 16:06:16.134963 | pandascore new 0, updated 58, finished 0 | le "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/engine/base.py", line 1986, in _exec_single_context
--- worker log ---
Nov 12 00:04:57 impressed-jade.ptr.network python[3447397]: 2026-11-12 00:04:57,360 INFO HTTP Request: GET https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Primorac "HTTP/1.1 429 Too Many Requests"
Nov 12 00:04:57 impressed-jade.ptr.network python[3447397]: 2026-11-12 00:04:57,980 INFO HTTP Request: GET https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Strasbourg "HTTP/1.1 429 Too Many Requests"
Nov 12 00:04:58 impressed-jade.ptr.network python[3447397]: 2026-11-12 00:04:58,604 INFO HTTP Request: GET https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Partizan "HTTP/1.1 429 Too Many Requests"
Nov 12 00:04:59 impressed-jade.ptr.network python[3447397]: 2026-11-12 00:04:59,223 INFO HTTP Request: GET https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Spandau "HTTP/1.1 429 Too Many Requests"
Nov 12 00:04:59 impressed-jade.ptr.network python[3447397]: 2026-11-12 00:04:59,847 INFO HTTP Request: GET https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Savona "HTTP/1.1 429 Too Many Requests"
Nov 12 00:05:00 impressed-jade.ptr.network python[3447397]: 2026-11-12 00:05:00,474 INFO HTTP Request: GET https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Barcelona "HTTP/1.1 429 Too Many Requests"
Nov 12 00:05:01 impressed-jade.ptr.network python[3447397]: 2026-11-12 00:05:01,099 INFO HTTP Request: GET https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Apollon+Smyrnis "HTTP/1.1 429 Too Many Requests"
Nov 12 00:05:02 impressed-jade.ptr.network python[3447397]: 2026-11-12 00:05:02,011 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpFqOv5z4WKps64GlQS4ytw "HTTP/1.1 200 OK"
Nov 12 00:05:02 impressed-jade.ptr.network python[3447397]: 2026-11-12 00:05:02,071 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC-2Cj6KlR9rCfR28zNLmOTA "HTTP/1.1 200 OK"
Nov 12 00:05:02 impressed-jade.ptr.network python[3447397]: 2026-11-12 00:05:02,092 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCWJ2lWNubArHWmf3FIHbfcQ "HTTP/1.1 200 OK"
Nov 12 00:05:02 impressed-jade.ptr.network python[3447397]: 2026-11-12 00:05:02,136 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCqFMzb-4AUf6WAIbl132QKA "HTTP/1.1 200 OK"
Nov 12 00:05:02 impressed-jade.ptr.network python[3447397]: 2026-11-12 00:05:02,156 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCwJ3S2Ix7aI1BhHexDJlmEg "HTTP/1.1 200 OK"
Nov 12 00:05:02 impressed-jade.ptr.network python[3447397]: 2026-11-12 00:05:02,182 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCTv-XvfzLX3i4IGWAm4sbmA "HTTP/1.1 200 OK"
Nov 12 00:05:02 impressed-jade.ptr.network python[3447397]: 2026-11-12 00:05:02,284 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCxfPjORdISQSn2fV8tcVmgA "HTTP/1.1 200 OK"
Nov 12 00:05:02 impressed-jade.ptr.network python[3447397]: 2026-11-12 00:05:02,296 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCQsH5XtIc9hONE1BQjucM0g "HTTP/1.1 200 OK"
Nov 12 00:05:02 impressed-jade.ptr.network python[3447397]: 2026-11-12 00:05:02,365 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC6UL29enLNe4mqwTfAyeNuw "HTTP/1.1 200 OK"
Nov 12 00:05:02 impressed-jade.ptr.network python[3447397]: 2026-11-12 00:05:02,388 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpryVRk_VDudG8SHXgWcG0w "HTTP/1.1 200 OK"
Nov 12 00:05:02 impressed-jade.ptr.network python[3447397]: 2026-11-12 00:05:02,477 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCyGa1YEx9ST66rYrJTGIKOw "HTTP/1.1 200 OK"
Nov 12 00:05:02 impressed-jade.ptr.network python[3447397]: 2026-11-12 00:05:02,704 INFO HTTP Request: GET https://22bet.com/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 12 00:05:02 impressed-jade.ptr.network python[3447397]: 2026-11-12 00:05:02,969 INFO HTTP Request: GET https://22bet.co.ke/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 12 00:05:03 impressed-jade.ptr.network python[3447397]: 2026-11-12 00:05:03,049 INFO HTTP Request: GET https://22bet.ng/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 12 00:05:09 impressed-jade.ptr.network python[3447397]: 2026-11-12 00:05:09,391 INFO HTTP Request: GET https://22bet.ug/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 12 00:05:09 impressed-jade.ptr.network python[3447397]: 2026-11-12 00:05:09,980 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 00:05:10 impressed-jade.ptr.network python[3447397]: 2026-11-12 00:05:10,435 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 00:05:11 impressed-jade.ptr.network python[3447397]: 2026-11-12 00:05:11,550 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
--- api log ---
Nov 12 00:05:00 impressed-jade.ptr.network uvicorn[3447410]: INFO:     109.245.39.254:0 - "GET /api/clubs/battle?sport=football HTTP/1.0" 200 OK
Nov 12 00:05:00 impressed-jade.ptr.network uvicorn[3447409]: INFO:     109.245.39.254:0 - "GET /api/bookmakers HTTP/1.0" 200 OK
Nov 12 00:05:00 impressed-jade.ptr.network uvicorn[3447410]: INFO:     109.245.39.254:0 - "GET /api/me HTTP/1.0" 200 OK
Nov 12 00:05:00 impressed-jade.ptr.network uvicorn[3447409]: INFO:     109.245.39.254:0 - "GET /api/teams/561 HTTP/1.0" 200 OK
Nov 12 00:05:00 impressed-jade.ptr.network uvicorn[3447410]: INFO:     109.245.39.254:0 - "POST /api/t HTTP/1.0" 200 OK
Nov 12 00:05:01 impressed-jade.ptr.network uvicorn[3447410]: INFO:     109.245.39.254:0 - "GET /api/me/watch?ids= HTTP/1.0" 200 OK
Nov 12 00:05:02 impressed-jade.ptr.network uvicorn[3447410]: INFO:     109.245.39.254:0 - "GET /api/sports?tz=60 HTTP/1.0" 200 OK
Nov 12 00:05:02 impressed-jade.ptr.network uvicorn[3447410]: INFO:     109.245.39.254:0 - "GET /api/ranking?period=month HTTP/1.0" 200 OK
Nov 12 00:05:02 impressed-jade.ptr.network uvicorn[3447410]: INFO:     109.245.39.254:0 - "GET /api/matches?day=live&sport=all&serbian=false&tz=60 HTTP/1.0" 200 OK
Nov 12 00:05:02 impressed-jade.ptr.network uvicorn[3447410]: INFO:     109.245.39.254:0 - "GET /api/matches?day=today&sport=all&serbian=false&tz=60 HTTP/1.0" 200 OK
Nov 12 00:05:02 impressed-jade.ptr.network uvicorn[3447409]: INFO:     109.245.39.254:0 - "GET /api/home?tz=60&sport=all HTTP/1.0" 200 OK
Nov 12 00:05:21 impressed-jade.ptr.network uvicorn[3447410]: INFO:     127.0.0.1:59998 - "GET /api/health HTTP/1.1" 200 OK
Nov 12 00:05:21 impressed-jade.ptr.network uvicorn[3447409]: INFO:     127.0.0.1:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 12 00:05:21 impressed-jade.ptr.network uvicorn[3447410]: INFO:     127.0.0.1:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 12 00:05:21 impressed-jade.ptr.network uvicorn[3447410]: INFO:     127.0.0.1:0 - "GET /api/home HTTP/1.0" 200 OK
```
