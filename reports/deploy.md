# Zicer deploy 2026-11-11 20:02 UTC

Итог: УСПЕХ

Сайт: https://winly.rs

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: 599e4b1 Домен: выбор winly.rs по Google DNS и закрепление после выпуска сертификата (без переключений туда-обратно, пока у сервера в кэше старый адрес); проверки деплоя ходят прямо на сервер

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
домен: winly.rs (winly.rs по Google DNS → "data":"89.208.113.147", www: www.winly.rs)

=== nginx ===
2026/11/11 23:02:18 [warn] 3367206#3367206: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/11 23:02:18 [warn] 3367206#3367206: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/11 23:02:18 [warn] 3367206#3367206: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/11 23:02:18 [warn] 3367206#3367206: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/11 23:02:18 [warn] 3367206#3367206: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/11 23:02:18 [warn] 3367206#3367206: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
finish_stale | 2026-11-11 20:01:25.544386 | finished 0 | 
football_live | 2026-11-11 20:01:50.872434 | live upserted 0 | 
live | 2026-11-11 20:01:51.218600 | live updated 28 | 
tg_poll | 2026-11-11 20:01:59.845409 | no token | 
basketball | 2026-11-11 20:02:15.913886 | basketball upserted 411 | 
basketball_week | 2026-11-11 20:02:16.961214 | nba week upserted 48 | 
other_sports | 2026-11-11 20:02:17.957690 | other sports new 0 | 
backfill | 2026-11-11 20:02:17.973594 | already | 
logos | 2026-11-11 20:02:18.208263 | logos: nothing to do | 
highlights | 2026-11-11 20:02:19.285006 | highlights +0 | 
x22_line | 2026-11-11 20:02:26.258198 | x22 line new 0, fetched {'futsal': '0'} | 
maxbet_results | 2026-11-11 19:54:05.709603 | maxbet results 10 | 
other_results | 2026-11-11 19:54:17.728630 | other results 50 | 
odds | 2026-11-11 20:02:27.908004 | odds matched 66 | 
settle | 2026-11-11 20:02:27.981952 | settled 0 | 
xfeed | 2026-11-11 20:02:41.621631 | xfeed empty (22bet.ug http 308) | 
social | 2026-11-11 19:54:58.056614 | social nothing due (test) | 
pandascore | 2026-11-11 16:06:16.134963 | pandascore new 0, updated 58, finished 0 | "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/engine/base.py", line 1986, in _exec_single_context
trends | 2026-11-10 23:36:09.974574 | trends 11 | 
analysis | 2026-11-10 23:36:10.199323 | analysis 27 | 
names | 2026-11-11 19:56:04.201560 | names 0 | 
tg_reminders | 2026-11-11 19:56:04.756067 | no token | 
football | 2026-11-11 20:02:13.070040 | football upserted 96 |  "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
--- worker log ---
Nov 11 23:02:16 impressed-jade.ptr.network python[3366865]: 2026-11-11 23:02:16,909 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261118 "HTTP/1.1 200 OK"
Nov 11 23:02:17 impressed-jade.ptr.network python[3366865]: 2026-11-11 23:02:17,083 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/H/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 23:02:17 impressed-jade.ptr.network python[3366865]: 2026-11-11 23:02:17,237 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/T/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 23:02:17 impressed-jade.ptr.network python[3366865]: 2026-11-11 23:02:17,322 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/V/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 23:02:17 impressed-jade.ptr.network python[3366865]: 2026-11-11 23:02:17,405 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/W/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 23:02:17 impressed-jade.ptr.network python[3366865]: 2026-11-11 23:02:17,452 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/HB/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 23:02:17 impressed-jade.ptr.network python[3366865]: 2026-11-11 23:02:17,584 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/TT/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 23:02:18 impressed-jade.ptr.network python[3366865]: 2026-11-11 23:02:18,396 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpFqOv5z4WKps64GlQS4ytw "HTTP/1.1 200 OK"
Nov 11 23:02:18 impressed-jade.ptr.network python[3366865]: 2026-11-11 23:02:18,470 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC-2Cj6KlR9rCfR28zNLmOTA "HTTP/1.1 200 OK"
Nov 11 23:02:18 impressed-jade.ptr.network python[3366865]: 2026-11-11 23:02:18,550 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCWJ2lWNubArHWmf3FIHbfcQ "HTTP/1.1 200 OK"
Nov 11 23:02:18 impressed-jade.ptr.network python[3366865]: 2026-11-11 23:02:18,654 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCqFMzb-4AUf6WAIbl132QKA "HTTP/1.1 200 OK"
Nov 11 23:02:18 impressed-jade.ptr.network python[3366865]: 2026-11-11 23:02:18,735 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCwJ3S2Ix7aI1BhHexDJlmEg "HTTP/1.1 200 OK"
Nov 11 23:02:18 impressed-jade.ptr.network python[3366865]: 2026-11-11 23:02:18,849 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCTv-XvfzLX3i4IGWAm4sbmA "HTTP/1.1 200 OK"
Nov 11 23:02:18 impressed-jade.ptr.network python[3366865]: 2026-11-11 23:02:18,944 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCxfPjORdISQSn2fV8tcVmgA "HTTP/1.1 200 OK"
Nov 11 23:02:19 impressed-jade.ptr.network python[3366865]: 2026-11-11 23:02:19,006 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCQsH5XtIc9hONE1BQjucM0g "HTTP/1.1 200 OK"
Nov 11 23:02:19 impressed-jade.ptr.network python[3366865]: 2026-11-11 23:02:19,038 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC6UL29enLNe4mqwTfAyeNuw "HTTP/1.1 200 OK"
Nov 11 23:02:19 impressed-jade.ptr.network python[3366865]: 2026-11-11 23:02:19,111 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpryVRk_VDudG8SHXgWcG0w "HTTP/1.1 200 OK"
Nov 11 23:02:19 impressed-jade.ptr.network python[3366865]: 2026-11-11 23:02:19,240 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCyGa1YEx9ST66rYrJTGIKOw "HTTP/1.1 200 OK"
Nov 11 23:02:19 impressed-jade.ptr.network python[3366865]: 2026-11-11 23:02:19,431 INFO HTTP Request: GET https://22bet.com/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 23:02:19 impressed-jade.ptr.network python[3366865]: 2026-11-11 23:02:19,679 INFO HTTP Request: GET https://22bet.co.ke/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 23:02:19 impressed-jade.ptr.network python[3366865]: 2026-11-11 23:02:19,938 INFO HTTP Request: GET https://22bet.ng/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 23:02:26 impressed-jade.ptr.network python[3366865]: 2026-11-11 23:02:26,254 INFO HTTP Request: GET https://22bet.ug/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 23:02:26 impressed-jade.ptr.network python[3366865]: 2026-11-11 23:02:26,680 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 23:02:27 impressed-jade.ptr.network python[3366865]: 2026-11-11 23:02:27,065 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 23:02:27 impressed-jade.ptr.network python[3366865]: 2026-11-11 23:02:27,744 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
--- api log ---
Nov 11 23:02:08 impressed-jade.ptr.network systemd[1]: Stopped zicer-api.service - Zicer API.
Nov 11 23:02:08 impressed-jade.ptr.network systemd[1]: zicer-api.service: Consumed 2.663s CPU time, 171.2M memory peak, 0B memory swap peak.
Nov 11 23:02:09 impressed-jade.ptr.network systemd[1]: Started zicer-api.service - Zicer API.
Nov 11 23:02:09 impressed-jade.ptr.network uvicorn[3366869]: INFO:     Uvicorn running on http://127.0.0.1:8790 (Press CTRL+C to quit)
Nov 11 23:02:09 impressed-jade.ptr.network uvicorn[3366869]: INFO:     Started parent process [3366869]
Nov 11 23:02:14 impressed-jade.ptr.network uvicorn[3366872]: INFO:     Started server process [3366872]
Nov 11 23:02:14 impressed-jade.ptr.network uvicorn[3366872]: INFO:     Waiting for application startup.
Nov 11 23:02:14 impressed-jade.ptr.network uvicorn[3366873]: INFO:     Started server process [3366873]
Nov 11 23:02:14 impressed-jade.ptr.network uvicorn[3366873]: INFO:     Waiting for application startup.
Nov 11 23:02:14 impressed-jade.ptr.network uvicorn[3366872]: INFO:     Application startup complete.
Nov 11 23:02:14 impressed-jade.ptr.network uvicorn[3366873]: INFO:     Application startup complete.
Nov 11 23:02:43 impressed-jade.ptr.network uvicorn[3366873]: INFO:     127.0.0.1:42902 - "GET /api/health HTTP/1.1" 200 OK
Nov 11 23:02:43 impressed-jade.ptr.network uvicorn[3366873]: INFO:     127.0.0.1:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 23:02:43 impressed-jade.ptr.network uvicorn[3366873]: INFO:     127.0.0.1:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 23:02:43 impressed-jade.ptr.network uvicorn[3366873]: INFO:     127.0.0.1:0 - "GET /api/home HTTP/1.0" 200 OK
```
