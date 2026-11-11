# Zicer deploy 2026-11-11 11:19 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: ecfb8ce Матчи: липкая шапка лиги — сплошная полоса на всю ширину списка вплотную к верху, строки под ней не просвечивают

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
2026/11/11 14:19:16 [warn] 2664034#2664034: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/11 14:19:16 [warn] 2664034#2664034: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/11 14:19:16 [warn] 2664034#2664034: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/11 14:19:16 [warn] 2664034#2664034: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/11 14:19:16 [warn] 2664034#2664034: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/11 14:19:16 [warn] 2664034#2664034: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
tg_poll | 2026-11-11 11:18:53.224617 | no token | 
tg_reminders | 2026-11-11 11:18:53.226613 | no token | 
live | 2026-11-11 11:18:58.520392 | live updated 2 | 
finish_stale | 2026-11-11 11:19:07.417085 | finished 0 | 
basketball | 2026-11-11 11:19:12.412714 | basketball upserted 414 | 
basketball_week | 2026-11-11 11:19:13.468151 | nba week upserted 48 | 
other_sports | 2026-11-11 11:19:13.823254 | other sports new 0 | 
backfill | 2026-11-11 11:19:13.828461 | already | 
logos | 2026-11-11 11:19:22.261619 | logos: checked 12, found 3 | 
highlights | 2026-11-11 11:19:22.852243 | highlights +0 | 
odds | 2026-11-11 11:19:24.609195 | odds matched 76 | 
settle | 2026-11-11 11:19:24.633364 | settled 0 | 
xfeed | 2026-11-11 11:19:38.607563 | xfeed games 179, linked 0, updated 2 | 
names | 2026-11-11 11:11:16.568731 | names 0 | 
maxbet_results | 2026-11-11 11:16:53.098033 | no pending | 
other_results | 2026-11-11 11:16:54.692778 | other results 2 | 
trends | 2026-11-10 23:36:09.974574 | trends 11 | 
analysis | 2026-11-10 23:36:10.199323 | analysis 27 | 
football_live | 2026-11-11 11:18:34.659137 | live upserted 1 | 
football | 2026-11-11 11:19:10.594198 | football upserted 97 |  "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
--- worker log ---
Nov 11 14:19:18 impressed-jade.ptr.network python[2663729]: 2026-11-11 14:19:18,993 INFO HTTP Request: GET https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Frankfurt "HTTP/1.1 200 OK"
Nov 11 14:19:19 impressed-jade.ptr.network python[2663729]: 2026-11-11 14:19:19,688 INFO HTTP Request: GET https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Bremerhaven "HTTP/1.1 200 OK"
Nov 11 14:19:20 impressed-jade.ptr.network python[2663729]: 2026-11-11 14:19:20,374 INFO HTTP Request: GET https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Ingolstadt "HTTP/1.1 200 OK"
Nov 11 14:19:21 impressed-jade.ptr.network python[2663729]: 2026-11-11 14:19:21,011 INFO HTTP Request: GET https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Straubing "HTTP/1.1 429 Too Many Requests"
Nov 11 14:19:21 impressed-jade.ptr.network python[2663729]: 2026-11-11 14:19:21,651 INFO HTTP Request: GET https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Krefeld "HTTP/1.1 429 Too Many Requests"
Nov 11 14:19:22 impressed-jade.ptr.network python[2663729]: 2026-11-11 14:19:22,387 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpFqOv5z4WKps64GlQS4ytw "HTTP/1.1 200 OK"
Nov 11 14:19:22 impressed-jade.ptr.network python[2663729]: 2026-11-11 14:19:22,491 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC-2Cj6KlR9rCfR28zNLmOTA "HTTP/1.1 200 OK"
Nov 11 14:19:22 impressed-jade.ptr.network python[2663729]: 2026-11-11 14:19:22,501 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCWJ2lWNubArHWmf3FIHbfcQ "HTTP/1.1 200 OK"
Nov 11 14:19:22 impressed-jade.ptr.network python[2663729]: 2026-11-11 14:19:22,516 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCqFMzb-4AUf6WAIbl132QKA "HTTP/1.1 200 OK"
Nov 11 14:19:22 impressed-jade.ptr.network python[2663729]: 2026-11-11 14:19:22,588 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCwJ3S2Ix7aI1BhHexDJlmEg "HTTP/1.1 200 OK"
Nov 11 14:19:22 impressed-jade.ptr.network python[2663729]: 2026-11-11 14:19:22,651 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCTv-XvfzLX3i4IGWAm4sbmA "HTTP/1.1 200 OK"
Nov 11 14:19:22 impressed-jade.ptr.network python[2663729]: 2026-11-11 14:19:22,732 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCxfPjORdISQSn2fV8tcVmgA "HTTP/1.1 200 OK"
Nov 11 14:19:22 impressed-jade.ptr.network python[2663729]: 2026-11-11 14:19:22,744 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCQsH5XtIc9hONE1BQjucM0g "HTTP/1.1 200 OK"
Nov 11 14:19:22 impressed-jade.ptr.network python[2663729]: 2026-11-11 14:19:22,764 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC6UL29enLNe4mqwTfAyeNuw "HTTP/1.1 200 OK"
Nov 11 14:19:22 impressed-jade.ptr.network python[2663729]: 2026-11-11 14:19:22,805 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpryVRk_VDudG8SHXgWcG0w "HTTP/1.1 200 OK"
Nov 11 14:19:22 impressed-jade.ptr.network python[2663729]: 2026-11-11 14:19:22,828 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCyGa1YEx9ST66rYrJTGIKOw "HTTP/1.1 200 OK"
Nov 11 14:19:23 impressed-jade.ptr.network python[2663729]: 2026-11-11 14:19:23,301 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 14:19:23 impressed-jade.ptr.network python[2663729]: 2026-11-11 14:19:23,798 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 14:19:24 impressed-jade.ptr.network python[2663729]: 2026-11-11 14:19:24,275 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 14:19:34 impressed-jade.ptr.network python[2663729]: 2026-11-11 14:19:34,852 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 14:19:35 impressed-jade.ptr.network python[2663729]: 2026-11-11 14:19:35,486 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 14:19:36 impressed-jade.ptr.network python[2663729]: 2026-11-11 14:19:36,113 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 14:19:36 impressed-jade.ptr.network python[2663729]: 2026-11-11 14:19:36,742 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 14:19:37 impressed-jade.ptr.network python[2663729]: 2026-11-11 14:19:37,365 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 14:19:37 impressed-jade.ptr.network python[2663729]: 2026-11-11 14:19:37,982 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
--- api log ---
Nov 11 14:19:39 impressed-jade.ptr.network uvicorn[2663736]: INFO:     109.92.227.130:0 - "GET /api/clubs/battle?sport=football HTTP/1.0" 200 OK
Nov 11 14:19:40 impressed-jade.ptr.network uvicorn[2663737]: INFO:     127.0.0.1:38434 - "GET /api/health HTTP/1.1" 200 OK
Nov 11 14:19:40 impressed-jade.ptr.network uvicorn[2663737]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 14:19:40 impressed-jade.ptr.network uvicorn[2663737]: INFO:     109.92.227.130:0 - "GET /api/matches?day=today&sport=all&serbian=false&tz=180 HTTP/1.0" 200 OK
Nov 11 14:19:40 impressed-jade.ptr.network uvicorn[2663737]: INFO:     109.92.227.130:0 - "GET /api/sports?tz=180 HTTP/1.0" 200 OK
Nov 11 14:19:40 impressed-jade.ptr.network uvicorn[2663737]: INFO:     109.92.227.130:0 - "GET /api/clubs/battle?sport=football HTTP/1.0" 200 OK
Nov 11 14:19:40 impressed-jade.ptr.network uvicorn[2663737]: INFO:     109.92.227.130:0 - "GET /api/me/watch?ids= HTTP/1.0" 200 OK
Nov 11 14:19:40 impressed-jade.ptr.network uvicorn[2663737]: INFO:     109.92.227.130:0 - "GET /api/me HTTP/1.0" 200 OK
Nov 11 14:19:40 impressed-jade.ptr.network uvicorn[2663737]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 14:19:41 impressed-jade.ptr.network uvicorn[2663736]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
Nov 11 14:19:42 impressed-jade.ptr.network uvicorn[2663736]: INFO:     109.92.227.130:0 - "GET /api/sports?tz=180 HTTP/1.0" 200 OK
Nov 11 14:19:42 impressed-jade.ptr.network uvicorn[2663736]: INFO:     109.92.227.130:0 - "GET /api/matches?day=today&sport=all&serbian=false&tz=180 HTTP/1.0" 200 OK
Nov 11 14:19:42 impressed-jade.ptr.network uvicorn[2663736]: INFO:     109.92.227.130:0 - "GET /api/ranking?period=month HTTP/1.0" 200 OK
Nov 11 14:19:42 impressed-jade.ptr.network uvicorn[2663736]: INFO:     109.92.227.130:0 - "GET /api/matches?day=live&sport=all&serbian=false&tz=180 HTTP/1.0" 200 OK
Nov 11 14:19:42 impressed-jade.ptr.network uvicorn[2663737]: INFO:     109.92.227.130:0 - "GET /api/home?tz=180&sport=all HTTP/1.0" 200 OK
```
