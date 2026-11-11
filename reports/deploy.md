# Zicer deploy 2026-11-11 20:00 UTC

Итог: ЕСТЬ ОШИБКИ

Сайт: https://winly.rs

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: 2766f80 deploy report 2026-11-11_1958

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
домен: winly.rs (winly.rs → 89.208.113.147)

=== nginx ===
2026/11/11 23:00:12 [warn] 3363949#3363949: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/11 23:00:12 [warn] 3363949#3363949: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/11 23:00:12 [warn] 3363949#3363949: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/11 23:00:12 [warn] 3363949#3363949: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/11 23:00:12 [warn] 3363949#3363949: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/11 23:00:12 [warn] 3363949#3363949: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
https /mecevi -> 000
FAIL: https /mecevi 000
index cache: cache-control: no-cache
cache-control: no-cache, no-store, must-revalidate
matches: {'esports': 58, 'hockey': 52, 'volleyball': 39, 'tabletennis': 186, 'basketball': 709, 'handball': 45, 'waterpolo': 7, 'tennis': 25, 'football': 1100}
maxbet_results | 2026-11-11 19:54:05.709603 | maxbet results 10 | 
other_results | 2026-11-11 19:54:17.728630 | other results 50 | 
social | 2026-11-11 19:54:58.056614 | social nothing due (test) | 
finish_stale | 2026-11-11 19:59:20.677837 | finished 0 | 
football_live | 2026-11-11 19:59:46.129737 | live upserted 0 | 
live | 2026-11-11 19:59:46.473184 | live updated 31 | 
pandascore | 2026-11-11 16:06:16.134963 | pandascore new 0, updated 58, finished 0 | "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/engine/base.py", line 1986, in _exec_single_context
tg_poll | 2026-11-11 19:59:55.118243 | no token | 
trends | 2026-11-10 23:36:09.974574 | trends 11 | 
basketball | 2026-11-11 20:00:09.470083 | basketball upserted 411 | 
basketball_week | 2026-11-11 20:00:10.047231 | nba week upserted 48 | 
analysis | 2026-11-10 23:36:10.199323 | analysis 27 | 
other_sports | 2026-11-11 20:00:10.765995 | other sports new 0 | 
backfill | 2026-11-11 20:00:10.775002 | already | 
logos | 2026-11-11 20:00:10.891448 | logos: nothing to do | 
highlights | 2026-11-11 20:00:11.482215 | highlights +0 | 
x22_line | 2026-11-11 20:00:18.259579 | x22 line new 0, fetched {'futsal': '0'} | 
odds | 2026-11-11 20:00:19.151580 | odds matched 66 | 
names | 2026-11-11 19:56:04.201560 | names 0 | 
tg_reminders | 2026-11-11 19:56:04.756067 | no token | 
settle | 2026-11-11 20:00:19.188866 | settled 0 | 
xfeed | 2026-11-11 20:00:32.819085 | xfeed empty (22bet.ug http 308) | 
football | 2026-11-11 20:00:07.859515 | football upserted 96 |  "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
--- worker log ---
Nov 11 23:00:10 impressed-jade.ptr.network python[3363600]: 2026-11-11 23:00:10,000 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261118 "HTTP/1.1 200 OK"
Nov 11 23:00:10 impressed-jade.ptr.network python[3363600]: 2026-11-11 23:00:10,240 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/H/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 23:00:10 impressed-jade.ptr.network python[3363600]: 2026-11-11 23:00:10,323 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/T/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 23:00:10 impressed-jade.ptr.network python[3363600]: 2026-11-11 23:00:10,406 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/V/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 23:00:10 impressed-jade.ptr.network python[3363600]: 2026-11-11 23:00:10,484 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/W/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 23:00:10 impressed-jade.ptr.network python[3363600]: 2026-11-11 23:00:10,548 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/HB/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 23:00:10 impressed-jade.ptr.network python[3363600]: 2026-11-11 23:00:10,662 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/TT/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 23:00:11 impressed-jade.ptr.network python[3363600]: 2026-11-11 23:00:11,071 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpFqOv5z4WKps64GlQS4ytw "HTTP/1.1 200 OK"
Nov 11 23:00:11 impressed-jade.ptr.network python[3363600]: 2026-11-11 23:00:11,171 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC-2Cj6KlR9rCfR28zNLmOTA "HTTP/1.1 200 OK"
Nov 11 23:00:11 impressed-jade.ptr.network python[3363600]: 2026-11-11 23:00:11,187 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCWJ2lWNubArHWmf3FIHbfcQ "HTTP/1.1 200 OK"
Nov 11 23:00:11 impressed-jade.ptr.network python[3363600]: 2026-11-11 23:00:11,217 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCqFMzb-4AUf6WAIbl132QKA "HTTP/1.1 200 OK"
Nov 11 23:00:11 impressed-jade.ptr.network python[3363600]: 2026-11-11 23:00:11,244 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCwJ3S2Ix7aI1BhHexDJlmEg "HTTP/1.1 200 OK"
Nov 11 23:00:11 impressed-jade.ptr.network python[3363600]: 2026-11-11 23:00:11,256 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCTv-XvfzLX3i4IGWAm4sbmA "HTTP/1.1 200 OK"
Nov 11 23:00:11 impressed-jade.ptr.network python[3363600]: 2026-11-11 23:00:11,365 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCxfPjORdISQSn2fV8tcVmgA "HTTP/1.1 200 OK"
Nov 11 23:00:11 impressed-jade.ptr.network python[3363600]: 2026-11-11 23:00:11,379 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCQsH5XtIc9hONE1BQjucM0g "HTTP/1.1 200 OK"
Nov 11 23:00:11 impressed-jade.ptr.network python[3363600]: 2026-11-11 23:00:11,401 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC6UL29enLNe4mqwTfAyeNuw "HTTP/1.1 200 OK"
Nov 11 23:00:11 impressed-jade.ptr.network python[3363600]: 2026-11-11 23:00:11,425 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpryVRk_VDudG8SHXgWcG0w "HTTP/1.1 200 OK"
Nov 11 23:00:11 impressed-jade.ptr.network python[3363600]: 2026-11-11 23:00:11,458 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCyGa1YEx9ST66rYrJTGIKOw "HTTP/1.1 200 OK"
Nov 11 23:00:11 impressed-jade.ptr.network python[3363600]: 2026-11-11 23:00:11,602 INFO HTTP Request: GET https://22bet.com/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 23:00:11 impressed-jade.ptr.network python[3363600]: 2026-11-11 23:00:11,848 INFO HTTP Request: GET https://22bet.co.ke/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 23:00:11 impressed-jade.ptr.network python[3363600]: 2026-11-11 23:00:11,950 INFO HTTP Request: GET https://22bet.ng/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 23:00:18 impressed-jade.ptr.network python[3363600]: 2026-11-11 23:00:18,258 INFO HTTP Request: GET https://22bet.ug/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 23:00:18 impressed-jade.ptr.network python[3363600]: 2026-11-11 23:00:18,396 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 23:00:18 impressed-jade.ptr.network python[3363600]: 2026-11-11 23:00:18,588 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 23:00:19 impressed-jade.ptr.network python[3363600]: 2026-11-11 23:00:19,080 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
--- api log ---
Nov 11 23:00:03 impressed-jade.ptr.network systemd[1]: Stopped zicer-api.service - Zicer API.
Nov 11 23:00:03 impressed-jade.ptr.network systemd[1]: zicer-api.service: Consumed 2.642s CPU time, 160.7M memory peak, 1.7M memory swap peak.
Nov 11 23:00:03 impressed-jade.ptr.network systemd[1]: Started zicer-api.service - Zicer API.
Nov 11 23:00:03 impressed-jade.ptr.network uvicorn[3363621]: INFO:     Uvicorn running on http://127.0.0.1:8790 (Press CTRL+C to quit)
Nov 11 23:00:03 impressed-jade.ptr.network uvicorn[3363621]: INFO:     Started parent process [3363621]
Nov 11 23:00:06 impressed-jade.ptr.network uvicorn[3363625]: INFO:     Started server process [3363625]
Nov 11 23:00:06 impressed-jade.ptr.network uvicorn[3363625]: INFO:     Waiting for application startup.
Nov 11 23:00:06 impressed-jade.ptr.network uvicorn[3363625]: INFO:     Application startup complete.
Nov 11 23:00:06 impressed-jade.ptr.network uvicorn[3363624]: INFO:     Started server process [3363624]
Nov 11 23:00:06 impressed-jade.ptr.network uvicorn[3363624]: INFO:     Waiting for application startup.
Nov 11 23:00:06 impressed-jade.ptr.network uvicorn[3363624]: INFO:     Application startup complete.
Nov 11 23:00:37 impressed-jade.ptr.network uvicorn[3363625]: INFO:     127.0.0.1:45112 - "GET /api/health HTTP/1.1" 200 OK
Nov 11 23:00:37 impressed-jade.ptr.network uvicorn[3363624]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 23:00:38 impressed-jade.ptr.network uvicorn[3363625]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 23:00:38 impressed-jade.ptr.network uvicorn[3363624]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
