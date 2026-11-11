# Zicer deploy 2026-11-11 15:14 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: e31a244 Линия футзала и киберспорта: варианты запроса к 22Bet, число полученных матчей в статусе, ручной запуск из админки

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
2026/11/11 18:14:16 [warn] 2978907#2978907: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/11 18:14:16 [warn] 2978907#2978907: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/11 18:14:16 [warn] 2978907#2978907: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/11 18:14:16 [warn] 2978907#2978907: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/11 18:14:16 [warn] 2978907#2978907: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/11 18:14:16 [warn] 2978907#2978907: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
maxbet_results | 2026-11-11 15:11:34.467011 | no pending | 
other_results | 2026-11-11 15:11:39.668805 | other results 14 | 
names | 2026-11-11 15:09:07.633006 | names 0 | 
finish_stale | 2026-11-11 15:13:06.746021 | finished 0 | 
tg_reminders | 2026-11-11 15:09:08.032588 | no token | 
social | 2026-11-11 15:13:25.114354 | social nothing due (test) | 
trends | 2026-11-10 23:36:09.974574 | trends 11 | 
analysis | 2026-11-10 23:36:10.199323 | analysis 27 | 
tg_poll | 2026-11-11 15:13:59.908052 | no token | 
football_live | 2026-11-11 15:14:04.991605 | live upserted 0 | 
live | 2026-11-11 15:14:05.258991 | live updated 7 | 
basketball | 2026-11-11 15:14:11.499364 | basketball upserted 414 | 
basketball_week | 2026-11-11 15:14:12.665767 | nba week upserted 48 | 
other_sports | 2026-11-11 15:14:13.375520 | other sports new 0 | 
backfill | 2026-11-11 15:14:13.379193 | already | 
logos | 2026-11-11 15:14:13.455154 | logos: nothing to do | 
highlights | 2026-11-11 15:14:13.970331 | highlights +0 | 
x22_line | 2026-11-11 15:14:20.948354 | x22 line new 0, fetched {'futsal': 0, 'esports': 0} | 
odds | 2026-11-11 15:14:22.225516 | odds matched 72 | 
settle | 2026-11-11 15:14:22.254570 | settled 0 | 
xfeed | 2026-11-11 15:14:35.879446 | xfeed empty (22bet.ug http 308) | 
football | 2026-11-11 15:14:09.624351 | football upserted 96 |  "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
--- worker log ---
Nov 11 18:14:12 impressed-jade.ptr.network python[2978587]: 2026-11-11 18:14:12,613 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261118 "HTTP/1.1 200 OK"
Nov 11 18:14:12 impressed-jade.ptr.network python[2978587]: 2026-11-11 18:14:12,812 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/H/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 18:14:12 impressed-jade.ptr.network python[2978587]: 2026-11-11 18:14:12,926 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/T/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 18:14:13 impressed-jade.ptr.network python[2978587]: 2026-11-11 18:14:13,021 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/V/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 18:14:13 impressed-jade.ptr.network python[2978587]: 2026-11-11 18:14:13,120 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/W/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 18:14:13 impressed-jade.ptr.network python[2978587]: 2026-11-11 18:14:13,183 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/HB/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 18:14:13 impressed-jade.ptr.network python[2978587]: 2026-11-11 18:14:13,278 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/TT/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 18:14:13 impressed-jade.ptr.network python[2978587]: 2026-11-11 18:14:13,608 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpFqOv5z4WKps64GlQS4ytw "HTTP/1.1 200 OK"
Nov 11 18:14:13 impressed-jade.ptr.network python[2978587]: 2026-11-11 18:14:13,801 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC-2Cj6KlR9rCfR28zNLmOTA "HTTP/1.1 200 OK"
Nov 11 18:14:13 impressed-jade.ptr.network python[2978587]: 2026-11-11 18:14:13,813 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCWJ2lWNubArHWmf3FIHbfcQ "HTTP/1.1 200 OK"
Nov 11 18:14:13 impressed-jade.ptr.network python[2978587]: 2026-11-11 18:14:13,828 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCqFMzb-4AUf6WAIbl132QKA "HTTP/1.1 200 OK"
Nov 11 18:14:13 impressed-jade.ptr.network python[2978587]: 2026-11-11 18:14:13,840 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCwJ3S2Ix7aI1BhHexDJlmEg "HTTP/1.1 200 OK"
Nov 11 18:14:13 impressed-jade.ptr.network python[2978587]: 2026-11-11 18:14:13,851 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCTv-XvfzLX3i4IGWAm4sbmA "HTTP/1.1 200 OK"
Nov 11 18:14:13 impressed-jade.ptr.network python[2978587]: 2026-11-11 18:14:13,876 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCxfPjORdISQSn2fV8tcVmgA "HTTP/1.1 200 OK"
Nov 11 18:14:13 impressed-jade.ptr.network python[2978587]: 2026-11-11 18:14:13,888 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCQsH5XtIc9hONE1BQjucM0g "HTTP/1.1 200 OK"
Nov 11 18:14:13 impressed-jade.ptr.network python[2978587]: 2026-11-11 18:14:13,910 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC6UL29enLNe4mqwTfAyeNuw "HTTP/1.1 200 OK"
Nov 11 18:14:13 impressed-jade.ptr.network python[2978587]: 2026-11-11 18:14:13,926 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpryVRk_VDudG8SHXgWcG0w "HTTP/1.1 200 OK"
Nov 11 18:14:13 impressed-jade.ptr.network python[2978587]: 2026-11-11 18:14:13,950 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCyGa1YEx9ST66rYrJTGIKOw "HTTP/1.1 200 OK"
Nov 11 18:14:14 impressed-jade.ptr.network python[2978587]: 2026-11-11 18:14:14,302 INFO HTTP Request: GET https://22bet.com/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 18:14:14 impressed-jade.ptr.network python[2978587]: 2026-11-11 18:14:14,567 INFO HTTP Request: GET https://22bet.co.ke/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 18:14:14 impressed-jade.ptr.network python[2978587]: 2026-11-11 18:14:14,640 INFO HTTP Request: GET https://22bet.ng/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 18:14:20 impressed-jade.ptr.network python[2978587]: 2026-11-11 18:14:20,946 INFO HTTP Request: GET https://22bet.ug/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 18:14:21 impressed-jade.ptr.network python[2978587]: 2026-11-11 18:14:21,110 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 18:14:21 impressed-jade.ptr.network python[2978587]: 2026-11-11 18:14:21,544 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 18:14:22 impressed-jade.ptr.network python[2978587]: 2026-11-11 18:14:22,080 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
--- api log ---
Nov 11 18:14:07 impressed-jade.ptr.network uvicorn[2978632]: INFO:     Uvicorn running on http://127.0.0.1:8790 (Press CTRL+C to quit)
Nov 11 18:14:07 impressed-jade.ptr.network uvicorn[2978632]: INFO:     Started parent process [2978632]
Nov 11 18:14:09 impressed-jade.ptr.network uvicorn[2978635]: INFO:     Started server process [2978635]
Nov 11 18:14:09 impressed-jade.ptr.network uvicorn[2978635]: INFO:     Waiting for application startup.
Nov 11 18:14:09 impressed-jade.ptr.network uvicorn[2978635]: INFO:     Application startup complete.
Nov 11 18:14:09 impressed-jade.ptr.network uvicorn[2978636]: INFO:     Started server process [2978636]
Nov 11 18:14:09 impressed-jade.ptr.network uvicorn[2978636]: INFO:     Waiting for application startup.
Nov 11 18:14:09 impressed-jade.ptr.network uvicorn[2978636]: INFO:     Application startup complete.
Nov 11 18:14:36 impressed-jade.ptr.network uvicorn[2978635]: INFO:     109.92.227.130:0 - "GET /api/sports?tz=180 HTTP/1.0" 200 OK
Nov 11 18:14:37 impressed-jade.ptr.network uvicorn[2978636]: INFO:     109.92.227.130:0 - "GET /api/matches?day=today&sport=all&serbian=false&tz=180 HTTP/1.0" 200 OK
Nov 11 18:14:37 impressed-jade.ptr.network uvicorn[2978636]: INFO:     109.92.227.130:0 - "GET /api/me/watch?ids= HTTP/1.0" 200 OK
Nov 11 18:14:40 impressed-jade.ptr.network uvicorn[2978635]: INFO:     127.0.0.1:50726 - "GET /api/health HTTP/1.1" 200 OK
Nov 11 18:14:40 impressed-jade.ptr.network uvicorn[2978636]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 18:14:40 impressed-jade.ptr.network uvicorn[2978635]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 18:14:41 impressed-jade.ptr.network uvicorn[2978636]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
