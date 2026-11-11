# Zicer deploy 2026-11-11 11:46 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: 1b976f3 «К лайву»: прокрутка ставит лайв-матч сразу под верхнюю панель и полосу лиги, а не под них

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
2026/11/11 14:45:41 [warn] 2699974#2699974: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/11 14:45:41 [warn] 2699974#2699974: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/11 14:45:41 [warn] 2699974#2699974: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/11 14:45:41 [warn] 2699974#2699974: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/11 14:45:41 [warn] 2699974#2699974: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/11 14:45:41 [warn] 2699974#2699974: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
finish_stale | 2026-11-11 11:44:40.115695 | finished 0 | 
football_live | 2026-11-11 11:45:08.350662 | live upserted 1 | 
tg_poll | 2026-11-11 11:45:12.544027 | no token | 
names | 2026-11-11 11:45:26.795021 | names 0 | 
tg_reminders | 2026-11-11 11:45:26.923939 | no token | 
basketball | 2026-11-11 11:45:35.926809 | basketball upserted 414 | 
basketball_week | 2026-11-11 11:45:36.356956 | nba week upserted 48 | 
other_sports | 2026-11-11 11:45:36.760472 | other sports new 0 | 
backfill | 2026-11-11 11:45:36.764506 | already | 
logos | 2026-11-11 11:45:36.852447 | logos: nothing to do | 
highlights | 2026-11-11 11:45:37.821258 | highlights +0 | 
odds | 2026-11-11 11:45:38.697405 | odds matched 71 | 
settle | 2026-11-11 11:45:38.726918 | settled 0 | 
xfeed | 2026-11-11 11:45:52.605724 | xfeed games 182, linked 0, updated 1 | 
live | 2026-11-11 11:46:02.861689 | live updated 1 | 
trends | 2026-11-10 23:36:09.974574 | trends 11 | 
analysis | 2026-11-10 23:36:10.199323 | analysis 27 | 
maxbet_results | 2026-11-11 11:43:28.043101 | no pending | 
other_results | 2026-11-11 11:43:29.800387 | other results 1 | 
football | 2026-11-11 11:45:34.032546 | football upserted 97 |  "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
--- worker log ---
Nov 11 14:45:37 impressed-jade.ptr.network python[2699640]: 2026-11-11 14:45:37,076 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCWJ2lWNubArHWmf3FIHbfcQ "HTTP/1.1 200 OK"
Nov 11 14:45:37 impressed-jade.ptr.network python[2699640]: 2026-11-11 14:45:37,092 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCqFMzb-4AUf6WAIbl132QKA "HTTP/1.1 200 OK"
Nov 11 14:45:37 impressed-jade.ptr.network python[2699640]: 2026-11-11 14:45:37,168 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCwJ3S2Ix7aI1BhHexDJlmEg "HTTP/1.1 200 OK"
Nov 11 14:45:37 impressed-jade.ptr.network python[2699640]: 2026-11-11 14:45:37,229 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCTv-XvfzLX3i4IGWAm4sbmA "HTTP/1.1 200 OK"
Nov 11 14:45:37 impressed-jade.ptr.network python[2699640]: 2026-11-11 14:45:37,343 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCxfPjORdISQSn2fV8tcVmgA "HTTP/1.1 200 OK"
Nov 11 14:45:37 impressed-jade.ptr.network python[2699640]: 2026-11-11 14:45:37,359 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCQsH5XtIc9hONE1BQjucM0g "HTTP/1.1 200 OK"
Nov 11 14:45:37 impressed-jade.ptr.network python[2699640]: 2026-11-11 14:45:37,432 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC6UL29enLNe4mqwTfAyeNuw "HTTP/1.1 200 OK"
Nov 11 14:45:37 impressed-jade.ptr.network python[2699640]: 2026-11-11 14:45:37,590 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpryVRk_VDudG8SHXgWcG0w "HTTP/1.1 200 OK"
Nov 11 14:45:37 impressed-jade.ptr.network python[2699640]: 2026-11-11 14:45:37,800 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCyGa1YEx9ST66rYrJTGIKOw "HTTP/1.1 200 OK"
Nov 11 14:45:37 impressed-jade.ptr.network python[2699640]: 2026-11-11 14:45:37,952 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 14:45:38 impressed-jade.ptr.network python[2699640]: 2026-11-11 14:45:38,138 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 14:45:38 impressed-jade.ptr.network python[2699640]: 2026-11-11 14:45:38,548 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 14:45:48 impressed-jade.ptr.network python[2699640]: 2026-11-11 14:45:48,835 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 14:45:49 impressed-jade.ptr.network python[2699640]: 2026-11-11 14:45:49,470 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 14:45:50 impressed-jade.ptr.network python[2699640]: 2026-11-11 14:45:50,098 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 14:45:50 impressed-jade.ptr.network python[2699640]: 2026-11-11 14:45:50,726 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 14:45:51 impressed-jade.ptr.network python[2699640]: 2026-11-11 14:45:51,351 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 14:45:51 impressed-jade.ptr.network python[2699640]: 2026-11-11 14:45:51,971 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 14:46:02 impressed-jade.ptr.network python[2699640]: 2026-11-11 14:46:02,738 INFO HTTP Request: GET https://www.maxbet.rs/live/init/sr "HTTP/1.1 200 OK"
Nov 11 14:46:02 impressed-jade.ptr.network python[2699640]: 2026-11-11 14:46:02,984 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 14:46:03 impressed-jade.ptr.network python[2699640]: 2026-11-11 14:46:03,622 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 14:46:04 impressed-jade.ptr.network python[2699640]: 2026-11-11 14:46:04,249 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 14:46:04 impressed-jade.ptr.network python[2699640]: 2026-11-11 14:46:04,878 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 14:46:05 impressed-jade.ptr.network python[2699640]: 2026-11-11 14:46:05,502 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 14:46:06 impressed-jade.ptr.network python[2699640]: 2026-11-11 14:46:06,128 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
--- api log ---
Nov 11 14:45:48 impressed-jade.ptr.network uvicorn[2699646]: INFO:     109.92.227.130:0 - "GET /api/matches?day=today&sport=all&serbian=false&tz=180 HTTP/1.0" 200 OK
Nov 11 14:45:48 impressed-jade.ptr.network uvicorn[2699647]: INFO:     109.92.227.130:0 - "GET /api/me/watch?ids= HTTP/1.0" 200 OK
Nov 11 14:45:50 impressed-jade.ptr.network uvicorn[2699647]: INFO:     109.92.227.130:0 - "GET /api/matches?day=live&sport=all&serbian=false&tz=180 HTTP/1.0" 200 OK
Nov 11 14:45:50 impressed-jade.ptr.network uvicorn[2699647]: INFO:     109.92.227.130:0 - "GET /api/ranking?period=month HTTP/1.0" 200 OK
Nov 11 14:45:50 impressed-jade.ptr.network uvicorn[2699647]: INFO:     109.92.227.130:0 - "GET /api/sports?tz=180 HTTP/1.0" 200 OK
Nov 11 14:45:50 impressed-jade.ptr.network uvicorn[2699647]: INFO:     109.92.227.130:0 - "GET /api/matches?day=today&sport=all&serbian=false&tz=180 HTTP/1.0" 200 OK
Nov 11 14:45:50 impressed-jade.ptr.network uvicorn[2699646]: INFO:     109.92.227.130:0 - "GET /api/home?tz=180&sport=all HTTP/1.0" 200 OK
Nov 11 14:45:57 impressed-jade.ptr.network uvicorn[2699646]: INFO:     109.92.227.130:0 - "GET /api/matches?day=yesterday&sport=all&serbian=false&tz=180 HTTP/1.0" 200 OK
Nov 11 14:46:01 impressed-jade.ptr.network uvicorn[2699647]: INFO:     109.92.227.130:0 - "GET /api/matches/1696 HTTP/1.0" 200 OK
Nov 11 14:46:01 impressed-jade.ptr.network uvicorn[2699646]: INFO:httpx:HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401909953 "HTTP/1.1 200 OK"
Nov 11 14:46:01 impressed-jade.ptr.network uvicorn[2699646]: INFO:     109.92.227.130:0 - "GET /api/matches/1696/center HTTP/1.0" 200 OK
Nov 11 14:46:05 impressed-jade.ptr.network uvicorn[2699646]: INFO:     127.0.0.1:41330 - "GET /api/health HTTP/1.1" 200 OK
Nov 11 14:46:05 impressed-jade.ptr.network uvicorn[2699647]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 14:46:05 impressed-jade.ptr.network uvicorn[2699647]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 14:46:05 impressed-jade.ptr.network uvicorn[2699646]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
