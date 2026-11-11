# Zicer deploy 2026-11-11 18:33 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: f767ff0 Матч-центр: мяч/шайба ходят по трём точкам на центральной линии (центр — без атаки, точка атакующей команды — атака и опасная атака), быстро; в видах с сеткой удар за ударом между точками сторон, при очке мяч улетает за спину пропустившего; исправлено зависание у настольного тенниса, гандбола и футзала (не было минимального времени полёта); убрана CSS-задержка мяча

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
2026/11/11 21:33:07 [warn] 3246379#3246379: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/11 21:33:07 [warn] 3246379#3246379: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/11 21:33:07 [warn] 3246379#3246379: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/11 21:33:07 [warn] 3246379#3246379: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/11 21:33:07 [warn] 3246379#3246379: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/11 21:33:07 [warn] 3246379#3246379: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
matches: {'basketball': 707, 'esports': 58, 'football': 1100, 'handball': 44, 'hockey': 52, 'tabletennis': 186, 'tennis': 23, 'volleyball': 39, 'waterpolo': 7}
football_live | 2026-11-11 18:32:21.177167 | live upserted 0 | 
social | 2026-11-11 18:32:21.181888 | social nothing due (test) | 
tg_poll | 2026-11-11 18:32:29.805821 | no token | 
live | 2026-11-11 18:32:35.242138 | live updated 59 | 
finish_stale | 2026-11-11 18:32:50.386158 | finished 0 | 
maxbet_results | 2026-11-11 18:32:53.780358 | maxbet results 16 | 
basketball | 2026-11-11 18:33:03.023712 | basketball upserted 412 | 
basketball_week | 2026-11-11 18:33:04.032809 | nba week upserted 48 | 
other_sports | 2026-11-11 18:33:04.779834 | other sports new 0 | 
backfill | 2026-11-11 18:33:04.783794 | already | 
logos | 2026-11-11 18:33:04.865128 | logos: nothing to do | 
highlights | 2026-11-11 18:33:05.447667 | highlights +0 | 
x22_line | 2026-11-11 18:33:12.172217 | x22 line new 0, fetched {'futsal': '0'} | 
odds | 2026-11-11 18:33:13.025875 | odds matched 69 | 
settle | 2026-11-11 18:33:13.056693 | settled 0 | 
xfeed | 2026-11-11 18:33:26.704488 | xfeed empty (22bet.ug http 308) | 
other_results | 2026-11-11 18:30:00.493221 | other results 71 | 
trends | 2026-11-10 23:36:09.974574 | trends 11 | 
analysis | 2026-11-10 23:36:10.199323 | analysis 27 | 
names | 2026-11-11 18:30:47.285634 | names 0 | 
pandascore | 2026-11-11 16:06:16.134963 | pandascore new 0, updated 58, finished 0 | /lib/python3.12/site-packages/sqlalchemy/engine/base.py", line 1986, in _exec_single_context
tg_reminders | 2026-11-11 18:30:59.028112 | no token | 
football | 2026-11-11 18:33:01.288999 | football upserted 96 |  "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
--- worker log ---
Nov 11 21:33:03 impressed-jade.ptr.network python[3246046]: 2026-11-11 21:33:03,993 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261118 "HTTP/1.1 200 OK"
Nov 11 21:33:04 impressed-jade.ptr.network python[3246046]: 2026-11-11 21:33:04,167 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/H/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 21:33:04 impressed-jade.ptr.network python[3246046]: 2026-11-11 21:33:04,290 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/T/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 21:33:04 impressed-jade.ptr.network python[3246046]: 2026-11-11 21:33:04,405 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/V/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 21:33:04 impressed-jade.ptr.network python[3246046]: 2026-11-11 21:33:04,497 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/W/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 21:33:04 impressed-jade.ptr.network python[3246046]: 2026-11-11 21:33:04,579 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/HB/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 21:33:04 impressed-jade.ptr.network python[3246046]: 2026-11-11 21:33:04,680 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/TT/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 21:33:05 impressed-jade.ptr.network python[3246046]: 2026-11-11 21:33:05,019 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpFqOv5z4WKps64GlQS4ytw "HTTP/1.1 200 OK"
Nov 11 21:33:05 impressed-jade.ptr.network python[3246046]: 2026-11-11 21:33:05,161 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC-2Cj6KlR9rCfR28zNLmOTA "HTTP/1.1 200 OK"
Nov 11 21:33:05 impressed-jade.ptr.network python[3246046]: 2026-11-11 21:33:05,172 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCWJ2lWNubArHWmf3FIHbfcQ "HTTP/1.1 200 OK"
Nov 11 21:33:05 impressed-jade.ptr.network python[3246046]: 2026-11-11 21:33:05,191 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCqFMzb-4AUf6WAIbl132QKA "HTTP/1.1 200 OK"
Nov 11 21:33:05 impressed-jade.ptr.network python[3246046]: 2026-11-11 21:33:05,266 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCwJ3S2Ix7aI1BhHexDJlmEg "HTTP/1.1 200 OK"
Nov 11 21:33:05 impressed-jade.ptr.network python[3246046]: 2026-11-11 21:33:05,276 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCTv-XvfzLX3i4IGWAm4sbmA "HTTP/1.1 200 OK"
Nov 11 21:33:05 impressed-jade.ptr.network python[3246046]: 2026-11-11 21:33:05,345 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCxfPjORdISQSn2fV8tcVmgA "HTTP/1.1 200 OK"
Nov 11 21:33:05 impressed-jade.ptr.network python[3246046]: 2026-11-11 21:33:05,365 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCQsH5XtIc9hONE1BQjucM0g "HTTP/1.1 200 OK"
Nov 11 21:33:05 impressed-jade.ptr.network python[3246046]: 2026-11-11 21:33:05,383 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC6UL29enLNe4mqwTfAyeNuw "HTTP/1.1 200 OK"
Nov 11 21:33:05 impressed-jade.ptr.network python[3246046]: 2026-11-11 21:33:05,405 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpryVRk_VDudG8SHXgWcG0w "HTTP/1.1 200 OK"
Nov 11 21:33:05 impressed-jade.ptr.network python[3246046]: 2026-11-11 21:33:05,428 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCyGa1YEx9ST66rYrJTGIKOw "HTTP/1.1 200 OK"
Nov 11 21:33:05 impressed-jade.ptr.network python[3246046]: 2026-11-11 21:33:05,535 INFO HTTP Request: GET https://22bet.com/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 21:33:05 impressed-jade.ptr.network python[3246046]: 2026-11-11 21:33:05,789 INFO HTTP Request: GET https://22bet.co.ke/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 21:33:05 impressed-jade.ptr.network python[3246046]: 2026-11-11 21:33:05,878 INFO HTTP Request: GET https://22bet.ng/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 21:33:12 impressed-jade.ptr.network python[3246046]: 2026-11-11 21:33:12,170 INFO HTTP Request: GET https://22bet.ug/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 21:33:12 impressed-jade.ptr.network python[3246046]: 2026-11-11 21:33:12,321 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 21:33:12 impressed-jade.ptr.network python[3246046]: 2026-11-11 21:33:12,511 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 21:33:12 impressed-jade.ptr.network python[3246046]: 2026-11-11 21:33:12,947 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
--- api log ---
Nov 11 21:32:58 impressed-jade.ptr.network systemd[1]: Stopped zicer-api.service - Zicer API.
Nov 11 21:32:58 impressed-jade.ptr.network systemd[1]: zicer-api.service: Consumed 10.363s CPU time, 191.8M memory peak, 90.9M memory swap peak.
Nov 11 21:32:58 impressed-jade.ptr.network systemd[1]: Started zicer-api.service - Zicer API.
Nov 11 21:32:59 impressed-jade.ptr.network uvicorn[3246067]: INFO:     Uvicorn running on http://127.0.0.1:8790 (Press CTRL+C to quit)
Nov 11 21:32:59 impressed-jade.ptr.network uvicorn[3246067]: INFO:     Started parent process [3246067]
Nov 11 21:33:01 impressed-jade.ptr.network uvicorn[3246074]: INFO:     Started server process [3246074]
Nov 11 21:33:01 impressed-jade.ptr.network uvicorn[3246074]: INFO:     Waiting for application startup.
Nov 11 21:33:01 impressed-jade.ptr.network uvicorn[3246074]: INFO:     Application startup complete.
Nov 11 21:33:01 impressed-jade.ptr.network uvicorn[3246073]: INFO:     Started server process [3246073]
Nov 11 21:33:01 impressed-jade.ptr.network uvicorn[3246073]: INFO:     Waiting for application startup.
Nov 11 21:33:02 impressed-jade.ptr.network uvicorn[3246073]: INFO:     Application startup complete.
Nov 11 21:33:31 impressed-jade.ptr.network uvicorn[3246073]: INFO:     127.0.0.1:45242 - "GET /api/health HTTP/1.1" 200 OK
Nov 11 21:33:31 impressed-jade.ptr.network uvicorn[3246073]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 21:33:31 impressed-jade.ptr.network uvicorn[3246074]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 21:33:32 impressed-jade.ptr.network uvicorn[3246073]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
