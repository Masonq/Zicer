# Zicer deploy 2026-11-11 18:49 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: 49e2d65 Теннис и настольный теннис: розыгрыш по диагонали (кросс), подача из угла подающего, при очке мяч улетает по диагонали за пропустившего; удар медленнее (теннис 1,15 с, настольный 0,75 с)

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
2026/11/11 21:49:00 [warn] 3267824#3267824: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/11 21:49:00 [warn] 3267824#3267824: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/11 21:49:00 [warn] 3267824#3267824: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/11 21:49:00 [warn] 3267824#3267824: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/11 21:49:00 [warn] 3267824#3267824: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/11 21:49:00 [warn] 3267824#3267824: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
tg_poll | 2026-11-11 18:48:11.651666 | no token | 
football_live | 2026-11-11 18:48:16.765340 | live upserted 0 | 
live | 2026-11-11 18:48:17.553904 | live updated 55 | 
finish_stale | 2026-11-11 18:48:30.961219 | finished 0 | 
xfeed | 2026-11-11 18:48:42.672975 | xfeed games 394, linked 0, updated 79 | 
maxbet_results | 2026-11-11 18:48:47.145497 | maxbet results 15 | 
tg_reminders | 2026-11-11 18:44:42.019979 | no token | 
basketball | 2026-11-11 18:48:57.604662 | basketball upserted 412 | 
names | 2026-11-11 18:44:51.569541 | names 6 | 
basketball_week | 2026-11-11 18:48:58.886803 | nba week upserted 48 | 
other_sports | 2026-11-11 18:48:59.726159 | other sports new 0 | 
backfill | 2026-11-11 18:48:59.737070 | already | 
logos | 2026-11-11 18:49:03.920374 | logos: checked 5, found 3 | 
highlights | 2026-11-11 18:49:04.829881 | highlights +1 | 
x22_line | 2026-11-11 18:49:11.756605 | x22 line new 0, fetched {'futsal': '0'} | 
odds | 2026-11-11 18:49:13.530567 | odds matched 69 | 
settle | 2026-11-11 18:49:13.566182 | settled 0 | 
other_results | 2026-11-11 18:45:56.667485 | other results 76 | 
trends | 2026-11-10 23:36:09.974574 | trends 11 | 
analysis | 2026-11-10 23:36:10.199323 | analysis 27 | 
pandascore | 2026-11-11 16:06:16.134963 | pandascore new 0, updated 58, finished 0 | /lib/python3.12/site-packages/sqlalchemy/engine/base.py", line 1986, in _exec_single_context
social | 2026-11-11 18:47:45.787459 | social nothing due (test) | 
football | 2026-11-11 18:48:54.584678 | football upserted 96 |  "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
--- worker log ---
Nov 11 21:49:00 impressed-jade.ptr.network python[3267507]: 2026-11-11 21:49:00,066 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams "HTTP/1.1 200 OK"
Nov 11 21:49:00 impressed-jade.ptr.network python[3267507]: 2026-11-11 21:49:00,185 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/wnba/teams "HTTP/1.1 200 OK"
Nov 11 21:49:00 impressed-jade.ptr.network python[3267507]: 2026-11-11 21:49:00,367 INFO HTTP Request: GET https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Cibona "HTTP/1.1 200 OK"
Nov 11 21:49:01 impressed-jade.ptr.network python[3267507]: 2026-11-11 21:49:01,112 INFO HTTP Request: GET https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=FMP+Beograd "HTTP/1.1 200 OK"
Nov 11 21:49:01 impressed-jade.ptr.network python[3267507]: 2026-11-11 21:49:01,886 INFO HTTP Request: GET https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Krka "HTTP/1.1 200 OK"
Nov 11 21:49:02 impressed-jade.ptr.network python[3267507]: 2026-11-11 21:49:02,609 INFO HTTP Request: GET https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Siroki+Brijeg "HTTP/1.1 200 OK"
Nov 11 21:49:03 impressed-jade.ptr.network python[3267507]: 2026-11-11 21:49:03,309 INFO HTTP Request: GET https://www.thesportsdb.com/api/v1/json/123/searchplayers.php?p=Michelsen "HTTP/1.1 200 OK"
Nov 11 21:49:04 impressed-jade.ptr.network python[3267507]: 2026-11-11 21:49:04,275 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpFqOv5z4WKps64GlQS4ytw "HTTP/1.1 200 OK"
Nov 11 21:49:04 impressed-jade.ptr.network python[3267507]: 2026-11-11 21:49:04,508 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC-2Cj6KlR9rCfR28zNLmOTA "HTTP/1.1 200 OK"
Nov 11 21:49:04 impressed-jade.ptr.network python[3267507]: 2026-11-11 21:49:04,522 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCWJ2lWNubArHWmf3FIHbfcQ "HTTP/1.1 200 OK"
Nov 11 21:49:04 impressed-jade.ptr.network python[3267507]: 2026-11-11 21:49:04,611 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCqFMzb-4AUf6WAIbl132QKA "HTTP/1.1 200 OK"
Nov 11 21:49:04 impressed-jade.ptr.network python[3267507]: 2026-11-11 21:49:04,628 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCwJ3S2Ix7aI1BhHexDJlmEg "HTTP/1.1 200 OK"
Nov 11 21:49:04 impressed-jade.ptr.network python[3267507]: 2026-11-11 21:49:04,640 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCTv-XvfzLX3i4IGWAm4sbmA "HTTP/1.1 200 OK"
Nov 11 21:49:04 impressed-jade.ptr.network python[3267507]: 2026-11-11 21:49:04,716 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCxfPjORdISQSn2fV8tcVmgA "HTTP/1.1 200 OK"
Nov 11 21:49:04 impressed-jade.ptr.network python[3267507]: 2026-11-11 21:49:04,730 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCQsH5XtIc9hONE1BQjucM0g "HTTP/1.1 200 OK"
Nov 11 21:49:04 impressed-jade.ptr.network python[3267507]: 2026-11-11 21:49:04,748 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC6UL29enLNe4mqwTfAyeNuw "HTTP/1.1 200 OK"
Nov 11 21:49:04 impressed-jade.ptr.network python[3267507]: 2026-11-11 21:49:04,773 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpryVRk_VDudG8SHXgWcG0w "HTTP/1.1 200 OK"
Nov 11 21:49:04 impressed-jade.ptr.network python[3267507]: 2026-11-11 21:49:04,806 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCyGa1YEx9ST66rYrJTGIKOw "HTTP/1.1 200 OK"
Nov 11 21:49:04 impressed-jade.ptr.network python[3267507]: 2026-11-11 21:49:04,961 INFO HTTP Request: GET https://22bet.com/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 21:49:05 impressed-jade.ptr.network python[3267507]: 2026-11-11 21:49:05,209 INFO HTTP Request: GET https://22bet.co.ke/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 21:49:05 impressed-jade.ptr.network python[3267507]: 2026-11-11 21:49:05,333 INFO HTTP Request: GET https://22bet.ng/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 21:49:11 impressed-jade.ptr.network python[3267507]: 2026-11-11 21:49:11,755 INFO HTTP Request: GET https://22bet.ug/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 21:49:12 impressed-jade.ptr.network python[3267507]: 2026-11-11 21:49:12,282 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 21:49:12 impressed-jade.ptr.network python[3267507]: 2026-11-11 21:49:12,708 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 21:49:13 impressed-jade.ptr.network python[3267507]: 2026-11-11 21:49:13,361 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
--- api log ---
Nov 11 21:48:51 impressed-jade.ptr.network systemd[1]: Stopped zicer-api.service - Zicer API.
Nov 11 21:48:51 impressed-jade.ptr.network systemd[1]: zicer-api.service: Consumed 6.971s CPU time, 205.2M memory peak, 0B memory swap peak.
Nov 11 21:48:51 impressed-jade.ptr.network systemd[1]: Started zicer-api.service - Zicer API.
Nov 11 21:48:52 impressed-jade.ptr.network uvicorn[3267528]: INFO:     Uvicorn running on http://127.0.0.1:8790 (Press CTRL+C to quit)
Nov 11 21:48:52 impressed-jade.ptr.network uvicorn[3267528]: INFO:     Started parent process [3267528]
Nov 11 21:48:56 impressed-jade.ptr.network uvicorn[3267532]: INFO:     Started server process [3267532]
Nov 11 21:48:56 impressed-jade.ptr.network uvicorn[3267532]: INFO:     Waiting for application startup.
Nov 11 21:48:56 impressed-jade.ptr.network uvicorn[3267531]: INFO:     Started server process [3267531]
Nov 11 21:48:56 impressed-jade.ptr.network uvicorn[3267531]: INFO:     Waiting for application startup.
Nov 11 21:48:56 impressed-jade.ptr.network uvicorn[3267532]: INFO:     Application startup complete.
Nov 11 21:48:57 impressed-jade.ptr.network uvicorn[3267531]: INFO:     Application startup complete.
Nov 11 21:49:25 impressed-jade.ptr.network uvicorn[3267531]: INFO:     127.0.0.1:35926 - "GET /api/health HTTP/1.1" 200 OK
Nov 11 21:49:25 impressed-jade.ptr.network uvicorn[3267531]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 21:49:25 impressed-jade.ptr.network uvicorn[3267531]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 21:49:26 impressed-jade.ptr.network uvicorn[3267532]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
