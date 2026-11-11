# Zicer deploy 2026-11-11 21:10 UTC

Итог: УСПЕХ

Сайт: https://winly.rs

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: d97e00a Проверка линии: текст ошибки в статусе

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
домен: winly.rs (winly.rs по Google DNS → "data":"89.208.113.147", www: нет)

=== nginx ===
2026/11/12 00:10:07 [warn] 3454997#3454997: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/12 00:10:07 [warn] 3454997#3454997: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/12 00:10:07 [warn] 3454997#3454997: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/12 00:10:07 [warn] 3454997#3454997: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/12 00:10:07 [warn] 3454997#3454997: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/12 00:10:07 [warn] 3454997#3454997: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
matches: {'esports': 58, 'hockey': 63, 'volleyball': 42, 'tabletennis': 216, 'basketball': 713, 'handball': 47, 'waterpolo': 13, 'tennis': 25, 'football': 1104}
names | 2026-11-11 21:00:03.991875 | names 10 | 
probe_sports | 2026-11-11 21:09:01.430468 | football/line:err football/live:err futsal/line:err futsal/live:err boxing/line:err boxing/live:err mma/line:err mma/live:err mma2/line:err mma2/live:err combat/line:err combat/live:err | 
social | 2026-11-11 21:09:26.440727 | social nothing due (test) | 
football_live | 2026-11-11 21:09:36.532077 | live upserted 11 | 
finish_stale | 2026-11-11 21:09:42.945248 | finished 0 | 
tg_poll | 2026-11-11 21:09:42.959438 | no token | 
live | 2026-11-11 21:09:48.239809 | live updated 14 | 
basketball | 2026-11-11 21:10:03.125675 | basketball upserted 417 | 
basketball_week | 2026-11-11 21:10:03.720482 | nba week upserted 43 | 
other_sports | 2026-11-11 21:10:04.253833 | other sports new 0 | 
backfill | 2026-11-11 21:10:04.257419 | already | 
logos | 2026-11-11 21:10:04.918530 | logos: checked 3, found 3 | 
highlights | 2026-11-11 21:10:05.528622 | highlights +0 | 
x22_line | 2026-11-11 21:10:12.435801 | x22 line new 0, fetched {'futsal': '0'} | 
odds | 2026-11-11 21:10:13.584589 | odds matched 66 | 
settle | 2026-11-11 21:10:13.610197 | settled 0 | 
xfeed | 2026-11-11 21:10:27.235975 | xfeed empty (22bet.ug http 308) | 
trends | 2026-11-10 23:36:09.974574 | trends 11 | 
analysis | 2026-11-10 23:36:10.199323 | analysis 27 | 
maxbet_results | 2026-11-11 21:08:24.019125 | maxbet results 5 | 
other_results | 2026-11-11 21:08:32.146510 | other results 26 | 
tg_reminders | 2026-11-11 20:59:52.992212 | no token | 
football | 2026-11-11 21:10:00.845737 | football upserted 100 |  "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
pandascore | 2026-11-11 16:06:16.134963 | pandascore new 0, updated 58, finished 0 | le "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/engine/base.py", line 1986, in _exec_single_context
--- worker log ---
Nov 12 00:10:03 impressed-jade.ptr.network python[3454646]: 2026-11-12 00:10:03,833 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/H/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 00:10:03 impressed-jade.ptr.network python[3454646]: 2026-11-12 00:10:03,919 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/T/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 00:10:03 impressed-jade.ptr.network python[3454646]: 2026-11-12 00:10:03,981 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/V/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 00:10:04 impressed-jade.ptr.network python[3454646]: 2026-11-12 00:10:04,065 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/W/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 00:10:04 impressed-jade.ptr.network python[3454646]: 2026-11-12 00:10:04,120 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/HB/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 00:10:04 impressed-jade.ptr.network python[3454646]: 2026-11-12 00:10:04,176 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/TT/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 00:10:04 impressed-jade.ptr.network python[3454646]: 2026-11-12 00:10:04,843 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/hockey/nhl/teams "HTTP/1.1 200 OK"
Nov 12 00:10:05 impressed-jade.ptr.network python[3454646]: 2026-11-12 00:10:05,006 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpFqOv5z4WKps64GlQS4ytw "HTTP/1.1 200 OK"
Nov 12 00:10:05 impressed-jade.ptr.network python[3454646]: 2026-11-12 00:10:05,189 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC-2Cj6KlR9rCfR28zNLmOTA "HTTP/1.1 200 OK"
Nov 12 00:10:05 impressed-jade.ptr.network python[3454646]: 2026-11-12 00:10:05,200 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCWJ2lWNubArHWmf3FIHbfcQ "HTTP/1.1 200 OK"
Nov 12 00:10:05 impressed-jade.ptr.network python[3454646]: 2026-11-12 00:10:05,229 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCqFMzb-4AUf6WAIbl132QKA "HTTP/1.1 200 OK"
Nov 12 00:10:05 impressed-jade.ptr.network python[3454646]: 2026-11-12 00:10:05,253 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCwJ3S2Ix7aI1BhHexDJlmEg "HTTP/1.1 200 OK"
Nov 12 00:10:05 impressed-jade.ptr.network python[3454646]: 2026-11-12 00:10:05,266 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCTv-XvfzLX3i4IGWAm4sbmA "HTTP/1.1 200 OK"
Nov 12 00:10:05 impressed-jade.ptr.network python[3454646]: 2026-11-12 00:10:05,345 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCxfPjORdISQSn2fV8tcVmgA "HTTP/1.1 200 OK"
Nov 12 00:10:05 impressed-jade.ptr.network python[3454646]: 2026-11-12 00:10:05,356 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCQsH5XtIc9hONE1BQjucM0g "HTTP/1.1 200 OK"
Nov 12 00:10:05 impressed-jade.ptr.network python[3454646]: 2026-11-12 00:10:05,422 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC6UL29enLNe4mqwTfAyeNuw "HTTP/1.1 200 OK"
Nov 12 00:10:05 impressed-jade.ptr.network python[3454646]: 2026-11-12 00:10:05,484 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpryVRk_VDudG8SHXgWcG0w "HTTP/1.1 200 OK"
Nov 12 00:10:05 impressed-jade.ptr.network python[3454646]: 2026-11-12 00:10:05,509 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCyGa1YEx9ST66rYrJTGIKOw "HTTP/1.1 200 OK"
Nov 12 00:10:05 impressed-jade.ptr.network python[3454646]: 2026-11-12 00:10:05,645 INFO HTTP Request: GET https://22bet.com/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 12 00:10:05 impressed-jade.ptr.network python[3454646]: 2026-11-12 00:10:05,894 INFO HTTP Request: GET https://22bet.co.ke/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 12 00:10:05 impressed-jade.ptr.network python[3454646]: 2026-11-12 00:10:05,969 INFO HTTP Request: GET https://22bet.ng/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 12 00:10:12 impressed-jade.ptr.network python[3454646]: 2026-11-12 00:10:12,434 INFO HTTP Request: GET https://22bet.ug/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 12 00:10:12 impressed-jade.ptr.network python[3454646]: 2026-11-12 00:10:12,595 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 00:10:12 impressed-jade.ptr.network python[3454646]: 2026-11-12 00:10:12,985 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 00:10:13 impressed-jade.ptr.network python[3454646]: 2026-11-12 00:10:13,503 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
--- api log ---
Nov 12 00:09:58 impressed-jade.ptr.network systemd[1]: Stopped zicer-api.service - Zicer API.
Nov 12 00:09:58 impressed-jade.ptr.network systemd[1]: zicer-api.service: Consumed 5.756s CPU time, 208.1M memory peak, 20.7M memory swap peak.
Nov 12 00:09:58 impressed-jade.ptr.network systemd[1]: Started zicer-api.service - Zicer API.
Nov 12 00:09:58 impressed-jade.ptr.network uvicorn[3454651]: INFO:     Uvicorn running on http://127.0.0.1:8790 (Press CTRL+C to quit)
Nov 12 00:09:58 impressed-jade.ptr.network uvicorn[3454651]: INFO:     Started parent process [3454651]
Nov 12 00:10:00 impressed-jade.ptr.network uvicorn[3454656]: INFO:     Started server process [3454656]
Nov 12 00:10:00 impressed-jade.ptr.network uvicorn[3454656]: INFO:     Waiting for application startup.
Nov 12 00:10:00 impressed-jade.ptr.network uvicorn[3454655]: INFO:     Started server process [3454655]
Nov 12 00:10:00 impressed-jade.ptr.network uvicorn[3454655]: INFO:     Waiting for application startup.
Nov 12 00:10:01 impressed-jade.ptr.network uvicorn[3454656]: INFO:     Application startup complete.
Nov 12 00:10:01 impressed-jade.ptr.network uvicorn[3454655]: INFO:     Application startup complete.
Nov 12 00:10:31 impressed-jade.ptr.network uvicorn[3454655]: INFO:     127.0.0.1:49932 - "GET /api/health HTTP/1.1" 200 OK
Nov 12 00:10:31 impressed-jade.ptr.network uvicorn[3454656]: INFO:     127.0.0.1:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 12 00:10:31 impressed-jade.ptr.network uvicorn[3454655]: INFO:     127.0.0.1:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 12 00:10:31 impressed-jade.ptr.network uvicorn[3454655]: INFO:     127.0.0.1:0 - "GET /api/home HTTP/1.0" 200 OK
```
