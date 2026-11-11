# Zicer deploy 2026-11-11 09:58 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: 91e02f6 «Матч дня»: многослойный фон — свечение в цвет спорта за мячом, мягкий свет из угла, блик-полоса, тонкая разметка площадки своего спорта, градиентная рамка, лёгкое зерно

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
2026/11/11 12:58:21 [warn] 2556260#2556260: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/11 12:58:21 [warn] 2556260#2556260: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/11 12:58:21 [warn] 2556260#2556260: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/11 12:58:21 [warn] 2556260#2556260: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/11 12:58:21 [warn] 2556260#2556260: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/11 12:58:21 [warn] 2556260#2556260: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
matches: {'basketball': 702, 'football': 1100, 'hockey': 46, 'tennis': 23, 'volleyball': 29, 'waterpolo': 4}
maxbet_results | 2026-11-11 09:55:56.552116 | no pending | 
other_results | 2026-11-11 09:55:56.558085 | no pending | 
tg_poll | 2026-11-11 09:58:02.288082 | no token | 
football_live | 2026-11-11 09:58:07.353336 | live upserted 1 | 
finish_stale | 2026-11-11 09:58:07.358330 | finished 0 | 
football | 2026-11-11 09:58:15.592434 | football upserted 97 |  "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
basketball | 2026-11-11 09:58:17.386438 | basketball upserted 414 | 
basketball_week | 2026-11-11 09:58:18.201881 | nba week upserted 48 | 
other_sports | 2026-11-11 09:58:18.573770 | other sports new 0 | 
backfill | 2026-11-11 09:58:18.578893 | already | 
logos | 2026-11-11 09:58:18.653924 | logos: nothing to do | 
highlights | 2026-11-11 09:58:19.071066 | highlights +7 | 
odds | 2026-11-11 09:58:19.860360 | odds matched 69 | 
settle | 2026-11-11 09:58:19.886291 | settled 0 | 
xfeed | 2026-11-11 09:58:33.753900 | xfeed games 155, linked 0, updated 2 | 
live | 2026-11-11 09:58:43.998168 | live updated 1 | 
trends | 2026-11-10 23:36:09.974574 | trends 11 | 
tg_reminders | 2026-11-11 09:54:45.817691 | no token | 
analysis | 2026-11-10 23:36:10.199323 | analysis 27 | 
names | 2026-11-11 09:54:46.088244 | names 0 | 
--- worker log ---
Nov 11 12:58:18 impressed-jade.ptr.network python[2555928]: 2026-11-11 12:58:18,846 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC-2Cj6KlR9rCfR28zNLmOTA "HTTP/1.1 200 OK"
Nov 11 12:58:18 impressed-jade.ptr.network python[2555928]: 2026-11-11 12:58:18,857 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCWJ2lWNubArHWmf3FIHbfcQ "HTTP/1.1 200 OK"
Nov 11 12:58:18 impressed-jade.ptr.network python[2555928]: 2026-11-11 12:58:18,873 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCqFMzb-4AUf6WAIbl132QKA "HTTP/1.1 200 OK"
Nov 11 12:58:18 impressed-jade.ptr.network python[2555928]: 2026-11-11 12:58:18,885 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCwJ3S2Ix7aI1BhHexDJlmEg "HTTP/1.1 200 OK"
Nov 11 12:58:18 impressed-jade.ptr.network python[2555928]: 2026-11-11 12:58:18,894 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCTv-XvfzLX3i4IGWAm4sbmA "HTTP/1.1 200 OK"
Nov 11 12:58:18 impressed-jade.ptr.network python[2555928]: 2026-11-11 12:58:18,960 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCxfPjORdISQSn2fV8tcVmgA "HTTP/1.1 200 OK"
Nov 11 12:58:18 impressed-jade.ptr.network python[2555928]: 2026-11-11 12:58:18,973 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCQsH5XtIc9hONE1BQjucM0g "HTTP/1.1 200 OK"
Nov 11 12:58:18 impressed-jade.ptr.network python[2555928]: 2026-11-11 12:58:18,996 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC6UL29enLNe4mqwTfAyeNuw "HTTP/1.1 200 OK"
Nov 11 12:58:19 impressed-jade.ptr.network python[2555928]: 2026-11-11 12:58:19,017 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpryVRk_VDudG8SHXgWcG0w "HTTP/1.1 200 OK"
Nov 11 12:58:19 impressed-jade.ptr.network python[2555928]: 2026-11-11 12:58:19,040 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCyGa1YEx9ST66rYrJTGIKOw "HTTP/1.1 200 OK"
Nov 11 12:58:19 impressed-jade.ptr.network python[2555928]: 2026-11-11 12:58:19,192 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 12:58:19 impressed-jade.ptr.network python[2555928]: 2026-11-11 12:58:19,387 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 12:58:19 impressed-jade.ptr.network python[2555928]: 2026-11-11 12:58:19,755 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 12:58:29 impressed-jade.ptr.network python[2555928]: 2026-11-11 12:58:29,992 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 12:58:30 impressed-jade.ptr.network python[2555928]: 2026-11-11 12:58:30,619 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 12:58:31 impressed-jade.ptr.network python[2555928]: 2026-11-11 12:58:31,246 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 12:58:31 impressed-jade.ptr.network python[2555928]: 2026-11-11 12:58:31,879 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 12:58:32 impressed-jade.ptr.network python[2555928]: 2026-11-11 12:58:32,503 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 12:58:33 impressed-jade.ptr.network python[2555928]: 2026-11-11 12:58:33,124 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 12:58:43 impressed-jade.ptr.network python[2555928]: 2026-11-11 12:58:43,914 INFO HTTP Request: GET https://www.maxbet.rs/live/init/sr "HTTP/1.1 200 OK"
Nov 11 12:58:44 impressed-jade.ptr.network python[2555928]: 2026-11-11 12:58:44,103 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 12:58:44 impressed-jade.ptr.network python[2555928]: 2026-11-11 12:58:44,730 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 12:58:45 impressed-jade.ptr.network python[2555928]: 2026-11-11 12:58:45,358 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 12:58:45 impressed-jade.ptr.network python[2555928]: 2026-11-11 12:58:45,991 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 12:58:46 impressed-jade.ptr.network python[2555928]: 2026-11-11 12:58:46,619 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
--- api log ---
Nov 11 12:58:31 impressed-jade.ptr.network uvicorn[2555933]: INFO:     109.245.227.4:0 - "GET /api/matches?day=live&sport=all&serbian=false&tz=60 HTTP/1.0" 200 OK
Nov 11 12:58:31 impressed-jade.ptr.network uvicorn[2555933]: INFO:     109.245.227.4:0 - "GET /api/matches?day=today&sport=all&serbian=false&tz=60 HTTP/1.0" 200 OK
Nov 11 12:58:31 impressed-jade.ptr.network uvicorn[2555933]: INFO:     109.245.227.4:0 - "GET /api/home?tz=60&sport=all HTTP/1.0" 200 OK
Nov 11 12:58:34 impressed-jade.ptr.network uvicorn[2555934]: INFO:     109.245.227.4:0 - "GET /api/home?tz=60&sport=basketball HTTP/1.0" 200 OK
Nov 11 12:58:37 impressed-jade.ptr.network uvicorn[2555933]: INFO:     109.245.227.4:0 - "GET /api/home?tz=60&sport=tennis HTTP/1.0" 200 OK
Nov 11 12:58:38 impressed-jade.ptr.network uvicorn[2555933]: INFO:     109.245.227.4:0 - "GET /api/matches/1856 HTTP/1.0" 200 OK
Nov 11 12:58:42 impressed-jade.ptr.network uvicorn[2555933]: INFO:     109.245.227.4:0 - "GET /api/sports?tz=60 HTTP/1.0" 200 OK
Nov 11 12:58:42 impressed-jade.ptr.network uvicorn[2555934]: INFO:     109.245.227.4:0 - "GET /api/home?tz=60&sport=all HTTP/1.0" 200 OK
Nov 11 12:58:44 impressed-jade.ptr.network uvicorn[2555933]: INFO:     109.92.227.130:0 - "GET /api/clubs/battle?sport=football HTTP/1.0" 200 OK
Nov 11 12:58:44 impressed-jade.ptr.network uvicorn[2555933]: INFO:     109.92.227.130:0 - "GET /api/sports?tz=180 HTTP/1.0" 200 OK
Nov 11 12:58:45 impressed-jade.ptr.network uvicorn[2555934]: INFO:     127.0.0.1:59562 - "GET /api/health HTTP/1.1" 200 OK
Nov 11 12:58:45 impressed-jade.ptr.network uvicorn[2555934]: INFO:     109.92.227.130:0 - "GET /api/home?tz=180&sport=all HTTP/1.0" 200 OK
Nov 11 12:58:45 impressed-jade.ptr.network uvicorn[2555933]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 12:58:45 impressed-jade.ptr.network uvicorn[2555933]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 12:58:46 impressed-jade.ptr.network uvicorn[2555933]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
