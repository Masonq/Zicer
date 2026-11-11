# Zicer deploy 2026-11-11 15:40 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: b544163 Матч-центр: камера трансляции — площадка в перспективе с трибунами и болельщиками (как 3D-трекеры букмекеров), подписи на поле стоят к камере; настольный теннис — очки и подача по розыгрышам, партии до 11 с разницей 2, матч до 3 побед, минута перерыва между партиями

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
2026/11/11 18:40:02 [warn] 3013443#3013443: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/11 18:40:02 [warn] 3013443#3013443: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/11 18:40:02 [warn] 3013443#3013443: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/11 18:40:02 [warn] 3013443#3013443: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/11 18:40:02 [warn] 3013443#3013443: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/11 18:40:02 [warn] 3013443#3013443: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
matches: {'hockey': 52, 'volleyball': 33, 'tabletennis': 142, 'handball': 44, 'basketball': 707, 'waterpolo': 7, 'tennis': 23, 'football': 1100}
basketball | 2026-11-11 15:39:57.615510 | basketball upserted 414 | 
basketball_week | 2026-11-11 15:39:58.178548 | nba week upserted 48 | 
other_sports | 2026-11-11 15:39:58.822426 | other sports new 0 | 
backfill | 2026-11-11 15:39:58.829083 | already | 
logos | 2026-11-11 15:39:58.913782 | logos: nothing to do | 
highlights | 2026-11-11 15:39:59.581904 | highlights +0 | 
x22_line | 2026-11-11 15:40:06.762637 | x22 line new 0, fetched {'futsal': '0'} | 
odds | 2026-11-11 15:40:07.924997 | odds matched 72 | 
settle | 2026-11-11 15:40:07.953246 | settled 0 | 
xfeed | 2026-11-11 15:40:21.583350 | xfeed empty (22bet.ug http 308) | 
names | 2026-11-11 15:36:39.663902 | names 0 | 
tg_reminders | 2026-11-11 15:36:40.284014 | no token | 
maxbet_results | 2026-11-11 15:37:45.977536 | no pending | 
other_results | 2026-11-11 15:37:52.047619 | other results 17 | 
trends | 2026-11-10 23:36:09.974574 | trends 11 | 
analysis | 2026-11-10 23:36:10.199323 | analysis 27 | 
finish_stale | 2026-11-11 15:39:11.326141 | finished 0 | 
football_live | 2026-11-11 15:39:25.910655 | live upserted 0 | 
tg_poll | 2026-11-11 15:39:41.431116 | no token | 
live | 2026-11-11 15:39:46.679076 | live updated 6 | 
social | 2026-11-11 15:39:50.587089 | social nothing due (test) | 
football | 2026-11-11 15:39:55.723796 | football upserted 96 |  "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
--- worker log ---
Nov 11 18:39:58 impressed-jade.ptr.network python[3013130]: 2026-11-11 18:39:58,148 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261118 "HTTP/1.1 200 OK"
Nov 11 18:39:58 impressed-jade.ptr.network python[3013130]: 2026-11-11 18:39:58,279 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/H/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 18:39:58 impressed-jade.ptr.network python[3013130]: 2026-11-11 18:39:58,362 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/T/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 18:39:58 impressed-jade.ptr.network python[3013130]: 2026-11-11 18:39:58,448 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/V/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 18:39:58 impressed-jade.ptr.network python[3013130]: 2026-11-11 18:39:58,540 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/W/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 18:39:58 impressed-jade.ptr.network python[3013130]: 2026-11-11 18:39:58,593 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/HB/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 18:39:58 impressed-jade.ptr.network python[3013130]: 2026-11-11 18:39:58,709 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/TT/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 18:39:59 impressed-jade.ptr.network python[3013130]: 2026-11-11 18:39:59,034 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpFqOv5z4WKps64GlQS4ytw "HTTP/1.1 200 OK"
Nov 11 18:39:59 impressed-jade.ptr.network python[3013130]: 2026-11-11 18:39:59,094 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC-2Cj6KlR9rCfR28zNLmOTA "HTTP/1.1 200 OK"
Nov 11 18:39:59 impressed-jade.ptr.network python[3013130]: 2026-11-11 18:39:59,104 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCWJ2lWNubArHWmf3FIHbfcQ "HTTP/1.1 200 OK"
Nov 11 18:39:59 impressed-jade.ptr.network python[3013130]: 2026-11-11 18:39:59,125 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCqFMzb-4AUf6WAIbl132QKA "HTTP/1.1 200 OK"
Nov 11 18:39:59 impressed-jade.ptr.network python[3013130]: 2026-11-11 18:39:59,138 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCwJ3S2Ix7aI1BhHexDJlmEg "HTTP/1.1 200 OK"
Nov 11 18:39:59 impressed-jade.ptr.network python[3013130]: 2026-11-11 18:39:59,399 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCTv-XvfzLX3i4IGWAm4sbmA "HTTP/1.1 200 OK"
Nov 11 18:39:59 impressed-jade.ptr.network python[3013130]: 2026-11-11 18:39:59,484 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCxfPjORdISQSn2fV8tcVmgA "HTTP/1.1 200 OK"
Nov 11 18:39:59 impressed-jade.ptr.network python[3013130]: 2026-11-11 18:39:59,502 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCQsH5XtIc9hONE1BQjucM0g "HTTP/1.1 200 OK"
Nov 11 18:39:59 impressed-jade.ptr.network python[3013130]: 2026-11-11 18:39:59,523 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC6UL29enLNe4mqwTfAyeNuw "HTTP/1.1 200 OK"
Nov 11 18:39:59 impressed-jade.ptr.network python[3013130]: 2026-11-11 18:39:59,541 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpryVRk_VDudG8SHXgWcG0w "HTTP/1.1 200 OK"
Nov 11 18:39:59 impressed-jade.ptr.network python[3013130]: 2026-11-11 18:39:59,564 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCyGa1YEx9ST66rYrJTGIKOw "HTTP/1.1 200 OK"
Nov 11 18:39:59 impressed-jade.ptr.network python[3013130]: 2026-11-11 18:39:59,934 INFO HTTP Request: GET https://22bet.com/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 18:40:00 impressed-jade.ptr.network python[3013130]: 2026-11-11 18:40:00,181 INFO HTTP Request: GET https://22bet.co.ke/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 18:40:00 impressed-jade.ptr.network python[3013130]: 2026-11-11 18:40:00,431 INFO HTTP Request: GET https://22bet.ng/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 18:40:06 impressed-jade.ptr.network python[3013130]: 2026-11-11 18:40:06,761 INFO HTTP Request: GET https://22bet.ug/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 18:40:06 impressed-jade.ptr.network python[3013130]: 2026-11-11 18:40:06,910 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 18:40:07 impressed-jade.ptr.network python[3013130]: 2026-11-11 18:40:07,198 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 18:40:07 impressed-jade.ptr.network python[3013130]: 2026-11-11 18:40:07,769 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
--- api log ---
Nov 11 18:39:55 impressed-jade.ptr.network uvicorn[3013154]: INFO:     Waiting for application startup.
Nov 11 18:39:55 impressed-jade.ptr.network uvicorn[3013154]: INFO:     Application startup complete.
Nov 11 18:39:55 impressed-jade.ptr.network uvicorn[3013155]: INFO:     Started server process [3013155]
Nov 11 18:39:55 impressed-jade.ptr.network uvicorn[3013155]: INFO:     Waiting for application startup.
Nov 11 18:39:56 impressed-jade.ptr.network uvicorn[3013155]: INFO:     Application startup complete.
Nov 11 18:39:57 impressed-jade.ptr.network uvicorn[3013155]: INFO:     109.92.227.130:0 - "GET /api/matches/1870/center HTTP/1.0" 200 OK
Nov 11 18:40:04 impressed-jade.ptr.network uvicorn[3013155]: INFO:     109.92.227.130:0 - "GET /api/matches/1870/center HTTP/1.0" 200 OK
Nov 11 18:40:11 impressed-jade.ptr.network uvicorn[3013155]: INFO:     109.92.227.130:0 - "GET /api/matches/1870/center HTTP/1.0" 200 OK
Nov 11 18:40:13 impressed-jade.ptr.network uvicorn[3013155]: INFO:     109.92.227.130:0 - "GET /api/matches/1870 HTTP/1.0" 200 OK
Nov 11 18:40:18 impressed-jade.ptr.network uvicorn[3013155]: INFO:     109.92.227.130:0 - "GET /api/matches/1870/center HTTP/1.0" 200 OK
Nov 11 18:40:25 impressed-jade.ptr.network uvicorn[3013155]: INFO:     109.92.227.130:0 - "GET /api/matches/1870/center HTTP/1.0" 200 OK
Nov 11 18:40:26 impressed-jade.ptr.network uvicorn[3013155]: INFO:     127.0.0.1:50758 - "GET /api/health HTTP/1.1" 200 OK
Nov 11 18:40:26 impressed-jade.ptr.network uvicorn[3013154]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 18:40:26 impressed-jade.ptr.network uvicorn[3013155]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 18:40:26 impressed-jade.ptr.network uvicorn[3013155]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
