# Zicer deploy 2026-11-11 19:50 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: 270bcd4 deploy report 2026-11-11_1948

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
домен: zicer.89-208-113-147.sslip.io (winly.rs → 185.119.88.99)

=== nginx ===
2026/11/11 22:49:44 [warn] 3347841#3347841: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/11 22:49:44 [warn] 3347841#3347841: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/11 22:49:44 [warn] 3347841#3347841: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/11 22:49:44 [warn] 3347841#3347841: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/11 22:49:44 [warn] 3347841#3347841: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/11 22:49:44 [warn] 3347841#3347841: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
maxbet_results | 2026-11-11 19:45:08.778078 | maxbet results 11 | 
other_results | 2026-11-11 19:45:22.316157 | other results 50 | 
finish_stale | 2026-11-11 19:48:56.449366 | finished 0 | 
football_live | 2026-11-11 19:49:21.647361 | live upserted 0 | 
live | 2026-11-11 19:49:22.364968 | live updated 34 | 
tg_poll | 2026-11-11 19:49:30.993955 | no token | 
basketball | 2026-11-11 19:49:40.587088 | basketball upserted 412 | 
basketball_week | 2026-11-11 19:49:41.437292 | nba week upserted 48 | 
other_sports | 2026-11-11 19:49:42.088618 | other sports new 0 | 
social | 2026-11-11 19:46:25.538006 | social nothing due (test) | 
backfill | 2026-11-11 19:49:42.104266 | already | 
logos | 2026-11-11 19:49:42.215135 | logos: nothing to do | 
highlights | 2026-11-11 19:49:42.575470 | highlights +0 | 
x22_line | 2026-11-11 19:49:49.368835 | x22 line new 0, fetched {'futsal': '0'} | 
odds | 2026-11-11 19:49:50.246374 | odds matched 66 | 
settle | 2026-11-11 19:49:50.273943 | settled 0 | 
xfeed | 2026-11-11 19:50:03.902327 | xfeed empty (22bet.ug http 308) | 
pandascore | 2026-11-11 16:06:16.134963 | pandascore new 0, updated 58, finished 0 | "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/engine/base.py", line 1986, in _exec_single_context
trends | 2026-11-10 23:36:09.974574 | trends 11 | 
analysis | 2026-11-10 23:36:10.199323 | analysis 27 | 
names | 2026-11-11 19:44:53.021898 | names 0 | 
tg_reminders | 2026-11-11 19:44:53.580613 | no token | 
football | 2026-11-11 19:49:38.665668 | football upserted 96 |  "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
--- worker log ---
Nov 11 22:49:41 impressed-jade.ptr.network python[3347498]: 2026-11-11 22:49:41,391 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261118 "HTTP/1.1 200 OK"
Nov 11 22:49:41 impressed-jade.ptr.network python[3347498]: 2026-11-11 22:49:41,584 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/H/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 22:49:41 impressed-jade.ptr.network python[3347498]: 2026-11-11 22:49:41,690 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/T/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 22:49:41 impressed-jade.ptr.network python[3347498]: 2026-11-11 22:49:41,765 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/V/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 22:49:41 impressed-jade.ptr.network python[3347498]: 2026-11-11 22:49:41,850 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/W/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 22:49:41 impressed-jade.ptr.network python[3347498]: 2026-11-11 22:49:41,913 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/HB/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 22:49:42 impressed-jade.ptr.network python[3347498]: 2026-11-11 22:49:42,000 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/TT/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 22:49:42 impressed-jade.ptr.network python[3347498]: 2026-11-11 22:49:42,309 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpFqOv5z4WKps64GlQS4ytw "HTTP/1.1 200 OK"
Nov 11 22:49:42 impressed-jade.ptr.network python[3347498]: 2026-11-11 22:49:42,318 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC-2Cj6KlR9rCfR28zNLmOTA "HTTP/1.1 200 OK"
Nov 11 22:49:42 impressed-jade.ptr.network python[3347498]: 2026-11-11 22:49:42,328 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCWJ2lWNubArHWmf3FIHbfcQ "HTTP/1.1 200 OK"
Nov 11 22:49:42 impressed-jade.ptr.network python[3347498]: 2026-11-11 22:49:42,349 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCqFMzb-4AUf6WAIbl132QKA "HTTP/1.1 200 OK"
Nov 11 22:49:42 impressed-jade.ptr.network python[3347498]: 2026-11-11 22:49:42,372 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCwJ3S2Ix7aI1BhHexDJlmEg "HTTP/1.1 200 OK"
Nov 11 22:49:42 impressed-jade.ptr.network python[3347498]: 2026-11-11 22:49:42,391 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCTv-XvfzLX3i4IGWAm4sbmA "HTTP/1.1 200 OK"
Nov 11 22:49:42 impressed-jade.ptr.network python[3347498]: 2026-11-11 22:49:42,412 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCxfPjORdISQSn2fV8tcVmgA "HTTP/1.1 200 OK"
Nov 11 22:49:42 impressed-jade.ptr.network python[3347498]: 2026-11-11 22:49:42,425 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCQsH5XtIc9hONE1BQjucM0g "HTTP/1.1 200 OK"
Nov 11 22:49:42 impressed-jade.ptr.network python[3347498]: 2026-11-11 22:49:42,449 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC6UL29enLNe4mqwTfAyeNuw "HTTP/1.1 200 OK"
Nov 11 22:49:42 impressed-jade.ptr.network python[3347498]: 2026-11-11 22:49:42,519 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpryVRk_VDudG8SHXgWcG0w "HTTP/1.1 200 OK"
Nov 11 22:49:42 impressed-jade.ptr.network python[3347498]: 2026-11-11 22:49:42,549 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCyGa1YEx9ST66rYrJTGIKOw "HTTP/1.1 200 OK"
Nov 11 22:49:42 impressed-jade.ptr.network python[3347498]: 2026-11-11 22:49:42,708 INFO HTTP Request: GET https://22bet.com/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 22:49:42 impressed-jade.ptr.network python[3347498]: 2026-11-11 22:49:42,954 INFO HTTP Request: GET https://22bet.co.ke/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 22:49:43 impressed-jade.ptr.network python[3347498]: 2026-11-11 22:49:43,042 INFO HTTP Request: GET https://22bet.ng/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 22:49:49 impressed-jade.ptr.network python[3347498]: 2026-11-11 22:49:49,365 INFO HTTP Request: GET https://22bet.ug/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 22:49:49 impressed-jade.ptr.network python[3347498]: 2026-11-11 22:49:49,506 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 22:49:49 impressed-jade.ptr.network python[3347498]: 2026-11-11 22:49:49,727 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 22:49:50 impressed-jade.ptr.network python[3347498]: 2026-11-11 22:49:50,173 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
--- api log ---
Nov 11 22:49:35 impressed-jade.ptr.network systemd[1]: Stopped zicer-api.service - Zicer API.
Nov 11 22:49:35 impressed-jade.ptr.network systemd[1]: zicer-api.service: Consumed 2.804s CPU time, 170.2M memory peak, 0B memory swap peak.
Nov 11 22:49:35 impressed-jade.ptr.network systemd[1]: Started zicer-api.service - Zicer API.
Nov 11 22:49:35 impressed-jade.ptr.network uvicorn[3347502]: INFO:     Uvicorn running on http://127.0.0.1:8790 (Press CTRL+C to quit)
Nov 11 22:49:35 impressed-jade.ptr.network uvicorn[3347502]: INFO:     Started parent process [3347502]
Nov 11 22:49:38 impressed-jade.ptr.network uvicorn[3347509]: INFO:     Started server process [3347509]
Nov 11 22:49:38 impressed-jade.ptr.network uvicorn[3347509]: INFO:     Waiting for application startup.
Nov 11 22:49:38 impressed-jade.ptr.network uvicorn[3347509]: INFO:     Application startup complete.
Nov 11 22:49:38 impressed-jade.ptr.network uvicorn[3347508]: INFO:     Started server process [3347508]
Nov 11 22:49:38 impressed-jade.ptr.network uvicorn[3347508]: INFO:     Waiting for application startup.
Nov 11 22:49:39 impressed-jade.ptr.network uvicorn[3347508]: INFO:     Application startup complete.
Nov 11 22:50:08 impressed-jade.ptr.network uvicorn[3347508]: INFO:     127.0.0.1:42284 - "GET /api/health HTTP/1.1" 200 OK
Nov 11 22:50:08 impressed-jade.ptr.network uvicorn[3347508]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 22:50:09 impressed-jade.ptr.network uvicorn[3347508]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 22:50:09 impressed-jade.ptr.network uvicorn[3347508]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
