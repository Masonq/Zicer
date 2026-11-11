# Zicer deploy 2026-11-11 19:29 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: 96387ab Автообновление: как только winly.rs укажет на сервер, сайт сам переустановится на новый домен (сертификат, перенаправление со старого адреса)

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
2026/11/11 22:29:31 [warn] 3321253#3321253: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/11 22:29:31 [warn] 3321253#3321253: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/11 22:29:31 [warn] 3321253#3321253: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/11 22:29:31 [warn] 3321253#3321253: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/11 22:29:31 [warn] 3321253#3321253: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/11 22:29:31 [warn] 3321253#3321253: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
maxbet_results | 2026-11-11 19:27:25.990362 | maxbet results 9 | 
pandascore | 2026-11-11 16:06:16.134963 | pandascore new 0, updated 58, finished 0 | le "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/engine/base.py", line 1986, in _exec_single_context
other_results | 2026-11-11 19:27:39.283334 | other results 61 | 
social | 2026-11-11 19:28:24.749163 | social nothing due (test) | 
football_live | 2026-11-11 19:28:50.855436 | live upserted 0 | 
finish_stale | 2026-11-11 19:28:55.195694 | finished 0 | 
tg_poll | 2026-11-11 19:29:11.915613 | no token | 
live | 2026-11-11 19:29:17.310384 | live updated 38 | 
names | 2026-11-11 19:29:21.902850 | names 0 | 
tg_reminders | 2026-11-11 19:29:22.577847 | no token | 
basketball | 2026-11-11 19:29:28.108892 | basketball upserted 412 | 
basketball_week | 2026-11-11 19:29:28.774689 | nba week upserted 48 | 
other_sports | 2026-11-11 19:29:29.356791 | other sports new 0 | 
backfill | 2026-11-11 19:29:29.367968 | already | 
logos | 2026-11-11 19:29:29.459772 | logos: nothing to do | 
highlights | 2026-11-11 19:29:29.820775 | highlights +0 | 
trends | 2026-11-10 23:36:09.974574 | trends 11 | 
x22_line | 2026-11-11 19:29:36.638099 | x22 line new 0, fetched {'futsal': '0'} | 
odds | 2026-11-11 19:29:37.724643 | odds matched 68 | 
analysis | 2026-11-10 23:36:10.199323 | analysis 27 | 
settle | 2026-11-11 19:29:37.752825 | settled 0 | 
xfeed | 2026-11-11 19:29:51.388321 | xfeed empty (22bet.ug http 308) | 
football | 2026-11-11 19:29:26.213266 | football upserted 96 |  "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
--- worker log ---
Nov 11 22:29:28 impressed-jade.ptr.network python[3320975]: 2026-11-11 22:29:28,735 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261118 "HTTP/1.1 200 OK"
Nov 11 22:29:28 impressed-jade.ptr.network python[3320975]: 2026-11-11 22:29:28,889 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/H/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 22:29:29 impressed-jade.ptr.network python[3320975]: 2026-11-11 22:29:29,005 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/T/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 22:29:29 impressed-jade.ptr.network python[3320975]: 2026-11-11 22:29:29,088 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/V/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 22:29:29 impressed-jade.ptr.network python[3320975]: 2026-11-11 22:29:29,152 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/W/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 22:29:29 impressed-jade.ptr.network python[3320975]: 2026-11-11 22:29:29,215 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/HB/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 22:29:29 impressed-jade.ptr.network python[3320975]: 2026-11-11 22:29:29,285 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/TT/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 22:29:29 impressed-jade.ptr.network python[3320975]: 2026-11-11 22:29:29,586 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpFqOv5z4WKps64GlQS4ytw "HTTP/1.1 200 OK"
Nov 11 22:29:29 impressed-jade.ptr.network python[3320975]: 2026-11-11 22:29:29,597 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC-2Cj6KlR9rCfR28zNLmOTA "HTTP/1.1 200 OK"
Nov 11 22:29:29 impressed-jade.ptr.network python[3320975]: 2026-11-11 22:29:29,609 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCWJ2lWNubArHWmf3FIHbfcQ "HTTP/1.1 200 OK"
Nov 11 22:29:29 impressed-jade.ptr.network python[3320975]: 2026-11-11 22:29:29,630 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCqFMzb-4AUf6WAIbl132QKA "HTTP/1.1 200 OK"
Nov 11 22:29:29 impressed-jade.ptr.network python[3320975]: 2026-11-11 22:29:29,643 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCwJ3S2Ix7aI1BhHexDJlmEg "HTTP/1.1 200 OK"
Nov 11 22:29:29 impressed-jade.ptr.network python[3320975]: 2026-11-11 22:29:29,659 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCTv-XvfzLX3i4IGWAm4sbmA "HTTP/1.1 200 OK"
Nov 11 22:29:29 impressed-jade.ptr.network python[3320975]: 2026-11-11 22:29:29,679 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCxfPjORdISQSn2fV8tcVmgA "HTTP/1.1 200 OK"
Nov 11 22:29:29 impressed-jade.ptr.network python[3320975]: 2026-11-11 22:29:29,696 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCQsH5XtIc9hONE1BQjucM0g "HTTP/1.1 200 OK"
Nov 11 22:29:29 impressed-jade.ptr.network python[3320975]: 2026-11-11 22:29:29,714 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC6UL29enLNe4mqwTfAyeNuw "HTTP/1.1 200 OK"
Nov 11 22:29:29 impressed-jade.ptr.network python[3320975]: 2026-11-11 22:29:29,731 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpryVRk_VDudG8SHXgWcG0w "HTTP/1.1 200 OK"
Nov 11 22:29:29 impressed-jade.ptr.network python[3320975]: 2026-11-11 22:29:29,802 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCyGa1YEx9ST66rYrJTGIKOw "HTTP/1.1 200 OK"
Nov 11 22:29:29 impressed-jade.ptr.network python[3320975]: 2026-11-11 22:29:29,915 INFO HTTP Request: GET https://22bet.com/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 22:29:30 impressed-jade.ptr.network python[3320975]: 2026-11-11 22:29:30,184 INFO HTTP Request: GET https://22bet.co.ke/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 22:29:30 impressed-jade.ptr.network python[3320975]: 2026-11-11 22:29:30,305 INFO HTTP Request: GET https://22bet.ng/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 22:29:36 impressed-jade.ptr.network python[3320975]: 2026-11-11 22:29:36,636 INFO HTTP Request: GET https://22bet.ug/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 22:29:36 impressed-jade.ptr.network python[3320975]: 2026-11-11 22:29:36,796 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 22:29:36 impressed-jade.ptr.network python[3320975]: 2026-11-11 22:29:36,981 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 22:29:37 impressed-jade.ptr.network python[3320975]: 2026-11-11 22:29:37,640 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
--- api log ---
Nov 11 22:29:22 impressed-jade.ptr.network systemd[1]: Stopped zicer-api.service - Zicer API.
Nov 11 22:29:22 impressed-jade.ptr.network systemd[1]: zicer-api.service: Consumed 3.837s CPU time, 185.2M memory peak, 984.0K memory swap peak.
Nov 11 22:29:22 impressed-jade.ptr.network systemd[1]: Started zicer-api.service - Zicer API.
Nov 11 22:29:23 impressed-jade.ptr.network uvicorn[3320997]: INFO:     Uvicorn running on http://127.0.0.1:8790 (Press CTRL+C to quit)
Nov 11 22:29:23 impressed-jade.ptr.network uvicorn[3320997]: INFO:     Started parent process [3320997]
Nov 11 22:29:25 impressed-jade.ptr.network uvicorn[3321000]: INFO:     Started server process [3321000]
Nov 11 22:29:25 impressed-jade.ptr.network uvicorn[3321000]: INFO:     Waiting for application startup.
Nov 11 22:29:25 impressed-jade.ptr.network uvicorn[3321001]: INFO:     Started server process [3321001]
Nov 11 22:29:25 impressed-jade.ptr.network uvicorn[3321001]: INFO:     Waiting for application startup.
Nov 11 22:29:25 impressed-jade.ptr.network uvicorn[3321001]: INFO:     Application startup complete.
Nov 11 22:29:25 impressed-jade.ptr.network uvicorn[3321000]: INFO:     Application startup complete.
Nov 11 22:29:56 impressed-jade.ptr.network uvicorn[3321000]: INFO:     127.0.0.1:40634 - "GET /api/health HTTP/1.1" 200 OK
Nov 11 22:29:56 impressed-jade.ptr.network uvicorn[3321001]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 22:29:57 impressed-jade.ptr.network uvicorn[3321001]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 22:29:57 impressed-jade.ptr.network uvicorn[3321000]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
