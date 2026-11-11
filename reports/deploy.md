# Zicer deploy 2026-11-11 21:57 UTC

Итог: УСПЕХ

Сайт: https://winly.rs

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: f7e971f Шторка прогноза снова по ширине экрана (её ломал стиль старой шторки фильтров); плашка «Отменить» не шире экрана

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
2026/11/12 00:57:07 [warn] 3506130#3506130: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/12 00:57:07 [warn] 3506130#3506130: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/12 00:57:07 [warn] 3506130#3506130: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/12 00:57:07 [warn] 3506130#3506130: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/12 00:57:07 [warn] 3506130#3506130: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/12 00:57:07 [warn] 3506130#3506130: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
matches: {'esports': 85, 'hockey': 63, 'volleyball': 42, 'tabletennis': 216, 'basketball': 713, 'handball': 47, 'waterpolo': 13, 'tennis': 25, 'football': 1104}
finish_stale | 2026-11-11 21:56:12.918489 | finished 0 | 
tg_poll | 2026-11-11 21:56:47.285879 | no token | 
football_live | 2026-11-11 21:56:52.463861 | live upserted 11 | 
live | 2026-11-11 21:56:52.678877 | live updated 7 | 
names | 2026-11-11 21:52:05.064277 | names 0 | 
basketball | 2026-11-11 21:57:02.724326 | basketball upserted 415 | 
basketball_week | 2026-11-11 21:57:03.415460 | nba week upserted 43 | 
other_sports | 2026-11-11 21:57:04.172994 | other sports new 0 | 
backfill | 2026-11-11 21:57:04.178425 | already | 
logos | 2026-11-11 21:57:04.261395 | logos: nothing to do | 
tg_reminders | 2026-11-11 21:52:30.596406 | no token | 
highlights | 2026-11-11 21:57:04.944398 | highlights +1 | 
x22_line | 2026-11-11 21:57:12.050231 | x22 line new 0, fetched {'futsal': '0'} | 
odds | 2026-11-11 21:57:13.299209 | odds matched 66 | 
probe_sports | 2026-11-11 21:19:02.243724 | football/line:err(22bet.ug http 404) football/live:err(cooldown: 22bet.ug http 404) futsal/line:err(cooldown: 22bet.ug http 404) futsal/live:err(cooldown: 22bet.ug http 404) boxing/line:err(cooldown: 22bet.ug http 404) boxing/live:err(cooldown: 22bet.ug http 404) mma/line:err(cooldown: 22bet.ug http 404) mma/live:err(cooldown: 22bet.ug http 404) mma2/line:err(cooldown: 22bet.ug http 404) mma2/live:err(cooldown: 22bet.ug http 404) combat/line:err(cooldown: 22bet.ug http 404) combat/live:err(coold | 
settle | 2026-11-11 21:57:13.325907 | settled 0 | 
xfeed | 2026-11-11 21:57:26.954710 | xfeed empty (22bet.ug http 404) | 
trends | 2026-11-10 23:36:09.974574 | trends 11 | 
analysis | 2026-11-10 23:36:10.199323 | analysis 27 | 
maxbet_results | 2026-11-11 21:54:24.410727 | maxbet results 1 | 
other_results | 2026-11-11 21:54:30.849967 | other results 16 | 
social | 2026-11-11 21:55:03.458991 | social nothing due (test) | 
football | 2026-11-11 21:57:00.999036 | football upserted 100 |  "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
pandascore | 2026-11-11 21:45:40.992173 | pandascore new 27, updated 59, finished 0 | ile "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/engine/base.py", line 1986, in _exec_single_context
--- worker log ---
Nov 12 00:57:03 impressed-jade.ptr.network python[3505779]: 2026-11-12 00:57:03,985 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/W/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 00:57:04 impressed-jade.ptr.network python[3505779]: 2026-11-12 00:57:04,048 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/HB/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 00:57:04 impressed-jade.ptr.network python[3505779]: 2026-11-12 00:57:04,116 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/TT/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 00:57:04 impressed-jade.ptr.network python[3505779]: 2026-11-12 00:57:04,382 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpFqOv5z4WKps64GlQS4ytw "HTTP/1.1 200 OK"
Nov 12 00:57:04 impressed-jade.ptr.network python[3505779]: 2026-11-12 00:57:04,431 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC-2Cj6KlR9rCfR28zNLmOTA "HTTP/1.1 200 OK"
Nov 12 00:57:04 impressed-jade.ptr.network python[3505779]: 2026-11-12 00:57:04,440 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCWJ2lWNubArHWmf3FIHbfcQ "HTTP/1.1 200 OK"
Nov 12 00:57:04 impressed-jade.ptr.network python[3505779]: 2026-11-12 00:57:04,460 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCqFMzb-4AUf6WAIbl132QKA "HTTP/1.1 200 OK"
Nov 12 00:57:04 impressed-jade.ptr.network python[3505779]: 2026-11-12 00:57:04,541 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCwJ3S2Ix7aI1BhHexDJlmEg "HTTP/1.1 200 OK"
Nov 12 00:57:04 impressed-jade.ptr.network python[3505779]: 2026-11-12 00:57:04,833 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCTv-XvfzLX3i4IGWAm4sbmA "HTTP/1.1 200 OK"
Nov 12 00:57:04 impressed-jade.ptr.network python[3505779]: 2026-11-12 00:57:04,849 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCxfPjORdISQSn2fV8tcVmgA "HTTP/1.1 200 OK"
Nov 12 00:57:04 impressed-jade.ptr.network python[3505779]: 2026-11-12 00:57:04,861 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCQsH5XtIc9hONE1BQjucM0g "HTTP/1.1 200 OK"
Nov 12 00:57:04 impressed-jade.ptr.network python[3505779]: 2026-11-12 00:57:04,878 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC6UL29enLNe4mqwTfAyeNuw "HTTP/1.1 200 OK"
Nov 12 00:57:04 impressed-jade.ptr.network python[3505779]: 2026-11-12 00:57:04,895 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpryVRk_VDudG8SHXgWcG0w "HTTP/1.1 200 OK"
Nov 12 00:57:04 impressed-jade.ptr.network python[3505779]: 2026-11-12 00:57:04,917 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCyGa1YEx9ST66rYrJTGIKOw "HTTP/1.1 200 OK"
Nov 12 00:57:05 impressed-jade.ptr.network python[3505779]: 2026-11-12 00:57:05,047 INFO HTTP Request: GET https://22bet.com/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 12 00:57:05 impressed-jade.ptr.network python[3505779]: 2026-11-12 00:57:05,113 INFO HTTP Request: GET https://22bet.com/linefeed/get1x2_vzip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 404 Not Found"
Nov 12 00:57:05 impressed-jade.ptr.network python[3505779]: 2026-11-12 00:57:05,354 INFO HTTP Request: GET https://22bet.co.ke/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 12 00:57:05 impressed-jade.ptr.network python[3505779]: 2026-11-12 00:57:05,475 INFO HTTP Request: GET https://22bet.co.ke/linefeed/get1x2_vzip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 404 Not Found"
Nov 12 00:57:05 impressed-jade.ptr.network python[3505779]: 2026-11-12 00:57:05,547 INFO HTTP Request: GET https://22bet.ng/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 12 00:57:05 impressed-jade.ptr.network python[3505779]: 2026-11-12 00:57:05,609 INFO HTTP Request: GET https://22bet.ng/linefeed/get1x2_vzip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 404 Not Found"
Nov 12 00:57:11 impressed-jade.ptr.network python[3505779]: 2026-11-12 00:57:11,906 INFO HTTP Request: GET https://22bet.ug/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 12 00:57:12 impressed-jade.ptr.network python[3505779]: 2026-11-12 00:57:12,045 INFO HTTP Request: GET https://22bet.ug/linefeed/get1x2_vzip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 404 Not Found"
Nov 12 00:57:12 impressed-jade.ptr.network python[3505779]: 2026-11-12 00:57:12,219 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 00:57:12 impressed-jade.ptr.network python[3505779]: 2026-11-12 00:57:12,632 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 00:57:13 impressed-jade.ptr.network python[3505779]: 2026-11-12 00:57:13,231 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
--- api log ---
Nov 12 00:57:14 impressed-jade.ptr.network uvicorn[3505789]: INFO:     87.116.135.226:0 - "GET /api/me HTTP/1.0" 200 OK
Nov 12 00:57:14 impressed-jade.ptr.network uvicorn[3505789]: INFO:     87.116.135.226:0 - "GET /api/me/watch?ids= HTTP/1.0" 200 OK
Nov 12 00:57:14 impressed-jade.ptr.network uvicorn[3505788]: INFO:     87.116.135.226:0 - "GET /api/sports?tz=60 HTTP/1.0" 200 OK
Nov 12 00:57:14 impressed-jade.ptr.network uvicorn[3505788]: INFO:     87.116.135.226:0 - "GET /api/home?tz=60&sport=all HTTP/1.0" 200 OK
Nov 12 00:57:15 impressed-jade.ptr.network uvicorn[3505789]: INFO:     87.116.135.226:0 - "GET /api/ranking?period=month HTTP/1.0" 200 OK
Nov 12 00:57:15 impressed-jade.ptr.network uvicorn[3505789]: INFO:     87.116.135.226:0 - "GET /api/sports?tz=60 HTTP/1.0" 200 OK
Nov 12 00:57:15 impressed-jade.ptr.network uvicorn[3505789]: INFO:     87.116.135.226:0 - "GET /api/matches?day=live&sport=all&serbian=false&tz=60 HTTP/1.0" 200 OK
Nov 12 00:57:16 impressed-jade.ptr.network uvicorn[3505789]: INFO:     87.116.135.226:0 - "GET /api/matches?day=today&sport=all&serbian=false&tz=60 HTTP/1.0" 200 OK
Nov 12 00:57:16 impressed-jade.ptr.network uvicorn[3505789]: INFO:     87.116.135.226:0 - "GET /api/home?tz=60&sport=all HTTP/1.0" 200 OK
Nov 12 00:57:28 impressed-jade.ptr.network uvicorn[3505789]: INFO:     127.0.0.1:60240 - "GET /robots.txt HTTP/1.0" 200 OK
Nov 12 00:57:29 impressed-jade.ptr.network uvicorn[3505789]: INFO:     127.0.0.1:60250 - "GET /sitemap.xml HTTP/1.0" 200 OK
Nov 12 00:57:32 impressed-jade.ptr.network uvicorn[3505789]: INFO:     127.0.0.1:48656 - "GET /api/health HTTP/1.1" 200 OK
Nov 12 00:57:32 impressed-jade.ptr.network uvicorn[3505789]: INFO:     127.0.0.1:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 12 00:57:32 impressed-jade.ptr.network uvicorn[3505789]: INFO:     127.0.0.1:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 12 00:57:32 impressed-jade.ptr.network uvicorn[3505789]: INFO:     127.0.0.1:0 - "GET /api/home HTTP/1.0" 200 OK
```
