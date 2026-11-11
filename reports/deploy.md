# Zicer deploy 2026-11-11 19:48 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: bc137ab Переход на winly.rs: домен распознаётся и через Cloudflare (проверка по HTTP), а не только по прямому IP

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
домен: zicer.89-208-113-147.sslip.io (winly.rs → )

=== nginx ===
2026/11/11 22:47:43 [warn] 3344678#3344678: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/11 22:47:43 [warn] 3344678#3344678: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/11 22:47:43 [warn] 3344678#3344678: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/11 22:47:43 [warn] 3344678#3344678: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/11 22:47:43 [warn] 3344678#3344678: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/11 22:47:43 [warn] 3344678#3344678: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
xfeed | 2026-11-11 19:48:03.574829 | xfeed empty (22bet.ug http 308) | 
maxbet_results | 2026-11-11 19:45:08.778078 | maxbet results 11 | 
other_results | 2026-11-11 19:45:22.316157 | other results 50 | 
social | 2026-11-11 19:46:25.538006 | social nothing due (test) | 
finish_stale | 2026-11-11 19:46:59.505627 | finished 0 | 
football_live | 2026-11-11 19:47:16.773262 | live upserted 0 | 
tg_poll | 2026-11-11 19:47:21.068405 | no token | 
live | 2026-11-11 19:47:26.399478 | live updated 34 | 
basketball | 2026-11-11 19:47:39.731115 | basketball upserted 412 | 
pandascore | 2026-11-11 16:06:16.134963 | pandascore new 0, updated 58, finished 0 | "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/engine/base.py", line 1986, in _exec_single_context
basketball_week | 2026-11-11 19:47:40.683628 | nba week upserted 48 | 
trends | 2026-11-10 23:36:09.974574 | trends 11 | 
analysis | 2026-11-10 23:36:10.199323 | analysis 27 | 
names | 2026-11-11 19:44:53.021898 | names 0 | 
tg_reminders | 2026-11-11 19:44:53.580613 | no token | 
other_sports | 2026-11-11 19:47:41.299334 | other sports new 0 | 
backfill | 2026-11-11 19:47:41.308631 | already | 
logos | 2026-11-11 19:47:41.440667 | logos: nothing to do | 
highlights | 2026-11-11 19:47:41.871553 | highlights +0 | 
x22_line | 2026-11-11 19:47:48.889251 | x22 line new 0, fetched {'futsal': '0'} | 
odds | 2026-11-11 19:47:49.880798 | odds matched 66 | 
settle | 2026-11-11 19:47:49.931110 | settled 0 | 
football | 2026-11-11 19:47:37.177910 | football upserted 96 |  "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
--- worker log ---
Nov 11 22:47:40 impressed-jade.ptr.network python[3344335]: 2026-11-11 22:47:40,623 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261118 "HTTP/1.1 200 OK"
Nov 11 22:47:40 impressed-jade.ptr.network python[3344335]: 2026-11-11 22:47:40,797 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/H/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 22:47:40 impressed-jade.ptr.network python[3344335]: 2026-11-11 22:47:40,888 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/T/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 22:47:40 impressed-jade.ptr.network python[3344335]: 2026-11-11 22:47:40,956 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/V/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 22:47:41 impressed-jade.ptr.network python[3344335]: 2026-11-11 22:47:41,037 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/W/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 22:47:41 impressed-jade.ptr.network python[3344335]: 2026-11-11 22:47:41,089 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/HB/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 22:47:41 impressed-jade.ptr.network python[3344335]: 2026-11-11 22:47:41,166 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/TT/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 22:47:41 impressed-jade.ptr.network python[3344335]: 2026-11-11 22:47:41,540 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpFqOv5z4WKps64GlQS4ytw "HTTP/1.1 200 OK"
Nov 11 22:47:41 impressed-jade.ptr.network python[3344335]: 2026-11-11 22:47:41,601 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC-2Cj6KlR9rCfR28zNLmOTA "HTTP/1.1 200 OK"
Nov 11 22:47:41 impressed-jade.ptr.network python[3344335]: 2026-11-11 22:47:41,611 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCWJ2lWNubArHWmf3FIHbfcQ "HTTP/1.1 200 OK"
Nov 11 22:47:41 impressed-jade.ptr.network python[3344335]: 2026-11-11 22:47:41,688 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCqFMzb-4AUf6WAIbl132QKA "HTTP/1.1 200 OK"
Nov 11 22:47:41 impressed-jade.ptr.network python[3344335]: 2026-11-11 22:47:41,708 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCwJ3S2Ix7aI1BhHexDJlmEg "HTTP/1.1 200 OK"
Nov 11 22:47:41 impressed-jade.ptr.network python[3344335]: 2026-11-11 22:47:41,732 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCTv-XvfzLX3i4IGWAm4sbmA "HTTP/1.1 200 OK"
Nov 11 22:47:41 impressed-jade.ptr.network python[3344335]: 2026-11-11 22:47:41,753 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCxfPjORdISQSn2fV8tcVmgA "HTTP/1.1 200 OK"
Nov 11 22:47:41 impressed-jade.ptr.network python[3344335]: 2026-11-11 22:47:41,765 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCQsH5XtIc9hONE1BQjucM0g "HTTP/1.1 200 OK"
Nov 11 22:47:41 impressed-jade.ptr.network python[3344335]: 2026-11-11 22:47:41,790 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC6UL29enLNe4mqwTfAyeNuw "HTTP/1.1 200 OK"
Nov 11 22:47:41 impressed-jade.ptr.network python[3344335]: 2026-11-11 22:47:41,807 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpryVRk_VDudG8SHXgWcG0w "HTTP/1.1 200 OK"
Nov 11 22:47:41 impressed-jade.ptr.network python[3344335]: 2026-11-11 22:47:41,832 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCyGa1YEx9ST66rYrJTGIKOw "HTTP/1.1 200 OK"
Nov 11 22:47:42 impressed-jade.ptr.network python[3344335]: 2026-11-11 22:47:42,241 INFO HTTP Request: GET https://22bet.com/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 22:47:42 impressed-jade.ptr.network python[3344335]: 2026-11-11 22:47:42,489 INFO HTTP Request: GET https://22bet.co.ke/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 22:47:42 impressed-jade.ptr.network python[3344335]: 2026-11-11 22:47:42,585 INFO HTTP Request: GET https://22bet.ng/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 22:47:48 impressed-jade.ptr.network python[3344335]: 2026-11-11 22:47:48,887 INFO HTTP Request: GET https://22bet.ug/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 22:47:49 impressed-jade.ptr.network python[3344335]: 2026-11-11 22:47:49,035 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 22:47:49 impressed-jade.ptr.network python[3344335]: 2026-11-11 22:47:49,253 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 22:47:49 impressed-jade.ptr.network python[3344335]: 2026-11-11 22:47:49,784 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
--- api log ---
Nov 11 22:47:34 impressed-jade.ptr.network systemd[1]: Stopped zicer-api.service - Zicer API.
Nov 11 22:47:34 impressed-jade.ptr.network systemd[1]: zicer-api.service: Consumed 6.069s CPU time, 170.7M memory peak, 115.4M memory swap peak.
Nov 11 22:47:34 impressed-jade.ptr.network systemd[1]: Started zicer-api.service - Zicer API.
Nov 11 22:47:34 impressed-jade.ptr.network uvicorn[3344340]: INFO:     Uvicorn running on http://127.0.0.1:8790 (Press CTRL+C to quit)
Nov 11 22:47:34 impressed-jade.ptr.network uvicorn[3344340]: INFO:     Started parent process [3344340]
Nov 11 22:47:38 impressed-jade.ptr.network uvicorn[3344344]: INFO:     Started server process [3344344]
Nov 11 22:47:38 impressed-jade.ptr.network uvicorn[3344344]: INFO:     Waiting for application startup.
Nov 11 22:47:38 impressed-jade.ptr.network uvicorn[3344343]: INFO:     Started server process [3344343]
Nov 11 22:47:38 impressed-jade.ptr.network uvicorn[3344343]: INFO:     Waiting for application startup.
Nov 11 22:47:38 impressed-jade.ptr.network uvicorn[3344344]: INFO:     Application startup complete.
Nov 11 22:47:38 impressed-jade.ptr.network uvicorn[3344343]: INFO:     Application startup complete.
Nov 11 22:48:07 impressed-jade.ptr.network uvicorn[3344343]: INFO:     127.0.0.1:48424 - "GET /api/health HTTP/1.1" 200 OK
Nov 11 22:48:07 impressed-jade.ptr.network uvicorn[3344343]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 22:48:08 impressed-jade.ptr.network uvicorn[3344343]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 22:48:08 impressed-jade.ptr.network uvicorn[3344344]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
