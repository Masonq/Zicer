# Zicer deploy 2026-11-11 12:40 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: e58975a Главная: убран блок «Движение линии» (и сбор истории кэфов для него)

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

=== nginx ===
2026/11/11 15:40:06 [warn] 2772764#2772764: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/11 15:40:06 [warn] 2772764#2772764: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/11 15:40:06 [warn] 2772764#2772764: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/11 15:40:06 [warn] 2772764#2772764: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/11 15:40:06 [warn] 2772764#2772764: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/11 15:40:06 [warn] 2772764#2772764: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
matches: {'basketball': 707, 'waterpolo': 4, 'tennis': 23, 'hockey': 52, 'volleyball': 29, 'football': 1100}
finish_stale | 2026-11-11 12:39:56.157010 | finished 0 | 
tg_poll | 2026-11-11 12:39:56.182168 | no token | 
basketball | 2026-11-11 12:40:02.454196 | basketball upserted 414 | 
basketball_week | 2026-11-11 12:40:03.461258 | nba week upserted 48 | 
names | 2026-11-11 12:36:31.429391 | names 0 | 
tg_reminders | 2026-11-11 12:36:31.589393 | no token | 
other_sports | 2026-11-11 12:40:03.973172 | other sports new 0 | 
backfill | 2026-11-11 12:40:03.982019 | already | 
logos | 2026-11-11 12:40:04.115323 | logos: nothing to do | 
highlights | 2026-11-11 12:40:04.474836 | highlights +0 | 
odds | 2026-11-11 12:40:06.359146 | odds matched 70 | 
settle | 2026-11-11 12:40:06.403917 | settled 0 | 
xfeed | 2026-11-11 12:40:20.282928 | xfeed games 174, linked 0, updated 1 | 
live | 2026-11-11 12:40:30.568964 | live updated 2 | 
maxbet_results | 2026-11-11 12:38:34.397948 | no pending | 
other_results | 2026-11-11 12:38:36.765321 | other results 1 | 
football_live | 2026-11-11 12:39:14.634278 | live upserted 1 | 
trends | 2026-11-10 23:36:09.974574 | trends 11 | 
analysis | 2026-11-10 23:36:10.199323 | analysis 27 | 
football | 2026-11-11 12:40:00.101323 | football upserted 97 |  "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
--- worker log ---
Nov 11 15:40:03 impressed-jade.ptr.network python[2772470]: 2026-11-11 15:40:03,960 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/W/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 15:40:04 impressed-jade.ptr.network python[2772470]: 2026-11-11 15:40:04,217 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpFqOv5z4WKps64GlQS4ytw "HTTP/1.1 200 OK"
Nov 11 15:40:04 impressed-jade.ptr.network python[2772470]: 2026-11-11 15:40:04,230 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC-2Cj6KlR9rCfR28zNLmOTA "HTTP/1.1 200 OK"
Nov 11 15:40:04 impressed-jade.ptr.network python[2772470]: 2026-11-11 15:40:04,247 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCWJ2lWNubArHWmf3FIHbfcQ "HTTP/1.1 200 OK"
Nov 11 15:40:04 impressed-jade.ptr.network python[2772470]: 2026-11-11 15:40:04,280 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCqFMzb-4AUf6WAIbl132QKA "HTTP/1.1 200 OK"
Nov 11 15:40:04 impressed-jade.ptr.network python[2772470]: 2026-11-11 15:40:04,295 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCwJ3S2Ix7aI1BhHexDJlmEg "HTTP/1.1 200 OK"
Nov 11 15:40:04 impressed-jade.ptr.network python[2772470]: 2026-11-11 15:40:04,310 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCTv-XvfzLX3i4IGWAm4sbmA "HTTP/1.1 200 OK"
Nov 11 15:40:04 impressed-jade.ptr.network python[2772470]: 2026-11-11 15:40:04,350 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCxfPjORdISQSn2fV8tcVmgA "HTTP/1.1 200 OK"
Nov 11 15:40:04 impressed-jade.ptr.network python[2772470]: 2026-11-11 15:40:04,363 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCQsH5XtIc9hONE1BQjucM0g "HTTP/1.1 200 OK"
Nov 11 15:40:04 impressed-jade.ptr.network python[2772470]: 2026-11-11 15:40:04,393 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC6UL29enLNe4mqwTfAyeNuw "HTTP/1.1 200 OK"
Nov 11 15:40:04 impressed-jade.ptr.network python[2772470]: 2026-11-11 15:40:04,422 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpryVRk_VDudG8SHXgWcG0w "HTTP/1.1 200 OK"
Nov 11 15:40:04 impressed-jade.ptr.network python[2772470]: 2026-11-11 15:40:04,447 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCyGa1YEx9ST66rYrJTGIKOw "HTTP/1.1 200 OK"
Nov 11 15:40:05 impressed-jade.ptr.network python[2772470]: 2026-11-11 15:40:05,100 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 15:40:05 impressed-jade.ptr.network python[2772470]: 2026-11-11 15:40:05,593 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 15:40:06 impressed-jade.ptr.network python[2772470]: 2026-11-11 15:40:06,160 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 15:40:16 impressed-jade.ptr.network python[2772470]: 2026-11-11 15:40:16,521 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 15:40:17 impressed-jade.ptr.network python[2772470]: 2026-11-11 15:40:17,157 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 15:40:17 impressed-jade.ptr.network python[2772470]: 2026-11-11 15:40:17,784 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 15:40:18 impressed-jade.ptr.network python[2772470]: 2026-11-11 15:40:18,410 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 15:40:19 impressed-jade.ptr.network python[2772470]: 2026-11-11 15:40:19,034 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 15:40:19 impressed-jade.ptr.network python[2772470]: 2026-11-11 15:40:19,652 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 15:40:30 impressed-jade.ptr.network python[2772470]: 2026-11-11 15:40:30,424 INFO HTTP Request: GET https://www.maxbet.rs/live/init/sr "HTTP/1.1 200 OK"
Nov 11 15:40:30 impressed-jade.ptr.network python[2772470]: 2026-11-11 15:40:30,668 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 15:40:31 impressed-jade.ptr.network python[2772470]: 2026-11-11 15:40:31,303 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 15:40:31 impressed-jade.ptr.network python[2772470]: 2026-11-11 15:40:31,944 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
--- api log ---
Nov 11 15:40:14 impressed-jade.ptr.network uvicorn[2772480]: INFO:     109.92.227.130:0 - "GET /api/home?tz=180&sport=all HTTP/1.0" 200 OK
Nov 11 15:40:24 impressed-jade.ptr.network uvicorn[2772480]: INFO:     109.92.227.130:0 - "GET /api/sports?tz=180 HTTP/1.0" 200 OK
Nov 11 15:40:24 impressed-jade.ptr.network uvicorn[2772479]: INFO:     109.92.227.130:0 - "GET /api/clubs/battle?sport=football HTTP/1.0" 200 OK
Nov 11 15:40:24 impressed-jade.ptr.network uvicorn[2772479]: INFO:     109.92.227.130:0 - "GET /api/me HTTP/1.0" 200 OK
Nov 11 15:40:24 impressed-jade.ptr.network uvicorn[2772479]: INFO:     109.92.227.130:0 - "GET /api/me/watch?ids= HTTP/1.0" 200 OK
Nov 11 15:40:24 impressed-jade.ptr.network uvicorn[2772479]: INFO:     109.92.227.130:0 - "GET /api/home?tz=180&sport=all HTTP/1.0" 200 OK
Nov 11 15:40:25 impressed-jade.ptr.network uvicorn[2772480]: INFO:     109.92.227.130:0 - "GET /api/sports?tz=180 HTTP/1.0" 200 OK
Nov 11 15:40:25 impressed-jade.ptr.network uvicorn[2772479]: INFO:     109.92.227.130:0 - "GET /api/matches?day=today&sport=all&serbian=false&tz=180 HTTP/1.0" 200 OK
Nov 11 15:40:25 impressed-jade.ptr.network uvicorn[2772479]: INFO:     109.92.227.130:0 - "GET /api/ranking?period=month HTTP/1.0" 200 OK
Nov 11 15:40:25 impressed-jade.ptr.network uvicorn[2772479]: INFO:     109.92.227.130:0 - "GET /api/matches?day=live&sport=all&serbian=false&tz=180 HTTP/1.0" 200 OK
Nov 11 15:40:25 impressed-jade.ptr.network uvicorn[2772480]: INFO:     109.92.227.130:0 - "GET /api/home?tz=180&sport=all HTTP/1.0" 200 OK
Nov 11 15:40:30 impressed-jade.ptr.network uvicorn[2772480]: INFO:     127.0.0.1:55246 - "GET /api/health HTTP/1.1" 200 OK
Nov 11 15:40:31 impressed-jade.ptr.network uvicorn[2772480]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 15:40:31 impressed-jade.ptr.network uvicorn[2772479]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 15:40:31 impressed-jade.ptr.network uvicorn[2772480]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
