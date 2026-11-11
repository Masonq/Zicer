# Zicer deploy 2026-11-11 14:13 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: 261eea3 Лайв-трекер: мяч больше не квадрат — старые цветные правила для тенниса/баскетбола/волейбола перекрывали картинку; у каждого спорта полное описание фона, прозрачный фон и круг

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
2026/11/11 17:13:26 [warn] 2897279#2897279: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/11 17:13:26 [warn] 2897279#2897279: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/11 17:13:26 [warn] 2897279#2897279: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/11 17:13:26 [warn] 2897279#2897279: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/11 17:13:26 [warn] 2897279#2897279: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/11 17:13:26 [warn] 2897279#2897279: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
matches: {'basketball': 707, 'waterpolo': 7, 'tennis': 23, 'hockey': 52, 'volleyball': 33, 'football': 1100}
social | 2026-11-11 14:12:11.472578 | social nothing due (test) | 
football_live | 2026-11-11 14:12:30.774884 | live upserted 0 | 
names | 2026-11-11 14:13:02.685054 | names 0 | 
tg_reminders | 2026-11-11 14:13:02.879337 | no token | 
live | 2026-11-11 14:13:08.182901 | live updated 3 | 
finish_stale | 2026-11-11 14:13:12.419075 | finished 0 | 
basketball | 2026-11-11 14:13:21.800796 | basketball upserted 414 | 
basketball_week | 2026-11-11 14:13:22.669706 | nba week upserted 48 | 
other_sports | 2026-11-11 14:13:23.071574 | other sports new 0 | 
backfill | 2026-11-11 14:13:23.074772 | already | 
logos | 2026-11-11 14:13:23.170899 | logos: nothing to do | 
highlights | 2026-11-11 14:13:23.608714 | highlights +0 | 
odds | 2026-11-11 14:13:24.931724 | odds matched 72 | 
settle | 2026-11-11 14:13:24.963553 | settled 0 | 
xfeed | 2026-11-11 14:13:48.177173 | xfeed games 151, linked 0, updated 3 | 
tg_poll | 2026-11-11 14:13:48.180241 | no token | 
trends | 2026-11-10 23:36:09.974574 | trends 11 | 
analysis | 2026-11-10 23:36:10.199323 | analysis 27 | 
maxbet_results | 2026-11-11 14:11:07.052043 | no pending | 
other_results | 2026-11-11 14:11:09.945109 | other results 3 | 
football | 2026-11-11 14:13:20.152090 | football upserted 96 |  "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
--- worker log ---
Nov 11 17:13:23 impressed-jade.ptr.network python[2896943]: 2026-11-11 17:13:23,321 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC-2Cj6KlR9rCfR28zNLmOTA "HTTP/1.1 200 OK"
Nov 11 17:13:23 impressed-jade.ptr.network python[2896943]: 2026-11-11 17:13:23,330 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCWJ2lWNubArHWmf3FIHbfcQ "HTTP/1.1 200 OK"
Nov 11 17:13:23 impressed-jade.ptr.network python[2896943]: 2026-11-11 17:13:23,348 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCqFMzb-4AUf6WAIbl132QKA "HTTP/1.1 200 OK"
Nov 11 17:13:23 impressed-jade.ptr.network python[2896943]: 2026-11-11 17:13:23,420 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCwJ3S2Ix7aI1BhHexDJlmEg "HTTP/1.1 200 OK"
Nov 11 17:13:23 impressed-jade.ptr.network python[2896943]: 2026-11-11 17:13:23,430 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCTv-XvfzLX3i4IGWAm4sbmA "HTTP/1.1 200 OK"
Nov 11 17:13:23 impressed-jade.ptr.network python[2896943]: 2026-11-11 17:13:23,497 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCxfPjORdISQSn2fV8tcVmgA "HTTP/1.1 200 OK"
Nov 11 17:13:23 impressed-jade.ptr.network python[2896943]: 2026-11-11 17:13:23,509 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCQsH5XtIc9hONE1BQjucM0g "HTTP/1.1 200 OK"
Nov 11 17:13:23 impressed-jade.ptr.network python[2896943]: 2026-11-11 17:13:23,533 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC6UL29enLNe4mqwTfAyeNuw "HTTP/1.1 200 OK"
Nov 11 17:13:23 impressed-jade.ptr.network python[2896943]: 2026-11-11 17:13:23,557 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpryVRk_VDudG8SHXgWcG0w "HTTP/1.1 200 OK"
Nov 11 17:13:23 impressed-jade.ptr.network python[2896943]: 2026-11-11 17:13:23,589 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCyGa1YEx9ST66rYrJTGIKOw "HTTP/1.1 200 OK"
Nov 11 17:13:23 impressed-jade.ptr.network python[2896943]: 2026-11-11 17:13:23,762 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 17:13:24 impressed-jade.ptr.network python[2896943]: 2026-11-11 17:13:24,264 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 17:13:24 impressed-jade.ptr.network python[2896943]: 2026-11-11 17:13:24,789 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 17:13:35 impressed-jade.ptr.network python[2896943]: 2026-11-11 17:13:35,303 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 17:13:35 impressed-jade.ptr.network python[2896943]: 2026-11-11 17:13:35,931 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 17:13:36 impressed-jade.ptr.network python[2896943]: 2026-11-11 17:13:36,556 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 17:13:37 impressed-jade.ptr.network python[2896943]: 2026-11-11 17:13:37,201 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 17:13:37 impressed-jade.ptr.network python[2896943]: 2026-11-11 17:13:37,832 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 17:13:38 impressed-jade.ptr.network python[2896943]: 2026-11-11 17:13:38,453 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 17:13:44 impressed-jade.ptr.network python[2896943]: 2026-11-11 17:13:44,417 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 17:13:45 impressed-jade.ptr.network python[2896943]: 2026-11-11 17:13:45,045 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 17:13:45 impressed-jade.ptr.network python[2896943]: 2026-11-11 17:13:45,675 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 17:13:46 impressed-jade.ptr.network python[2896943]: 2026-11-11 17:13:46,310 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 17:13:46 impressed-jade.ptr.network python[2896943]: 2026-11-11 17:13:46,941 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 17:13:47 impressed-jade.ptr.network python[2896943]: 2026-11-11 17:13:47,566 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
--- api log ---
Nov 11 17:13:31 impressed-jade.ptr.network uvicorn[2896951]: INFO:     109.92.227.130:0 - "GET /api/sports?tz=180 HTTP/1.0" 200 OK
Nov 11 17:13:33 impressed-jade.ptr.network uvicorn[2896951]: INFO:     109.92.227.130:0 - "GET /api/matches/1856/center HTTP/1.0" 200 OK
Nov 11 17:13:33 impressed-jade.ptr.network uvicorn[2896950]: INFO:     109.92.227.130:0 - "POST /api/t HTTP/1.0" 200 OK
Nov 11 17:13:33 impressed-jade.ptr.network uvicorn[2896951]: INFO:     109.92.227.130:0 - "GET /api/matches/1856 HTTP/1.0" 200 OK
Nov 11 17:13:34 impressed-jade.ptr.network uvicorn[2896951]: INFO:     109.92.227.130:0 - "GET /api/sports?tz=180 HTTP/1.0" 200 OK
Nov 11 17:13:34 impressed-jade.ptr.network uvicorn[2896950]: INFO:     109.92.227.130:0 - "GET /api/matches?day=live&sport=all&serbian=false&tz=180 HTTP/1.0" 200 OK
Nov 11 17:13:34 impressed-jade.ptr.network uvicorn[2896950]: INFO:     109.92.227.130:0 - "POST /api/t HTTP/1.0" 200 OK
Nov 11 17:13:37 impressed-jade.ptr.network uvicorn[2896950]: INFO:     109.92.227.130:0 - "GET /api/me/watch?ids= HTTP/1.0" 200 OK
Nov 11 17:13:38 impressed-jade.ptr.network uvicorn[2896951]: INFO:     109.92.227.130:0 - "GET /api/sports?tz=180 HTTP/1.0" 200 OK
Nov 11 17:13:38 impressed-jade.ptr.network uvicorn[2896950]: INFO:     109.92.227.130:0 - "POST /api/t HTTP/1.0" 200 OK
Nov 11 17:13:38 impressed-jade.ptr.network uvicorn[2896950]: INFO:     109.92.227.130:0 - "GET /api/home?tz=180&sport=all HTTP/1.0" 200 OK
Nov 11 17:13:50 impressed-jade.ptr.network uvicorn[2896951]: INFO:     127.0.0.1:36452 - "GET /api/health HTTP/1.1" 200 OK
Nov 11 17:13:50 impressed-jade.ptr.network uvicorn[2896951]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 17:13:50 impressed-jade.ptr.network uvicorn[2896951]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 17:13:50 impressed-jade.ptr.network uvicorn[2896951]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
