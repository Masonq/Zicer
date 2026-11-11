# Zicer deploy 2026-11-11 14:52 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: 6f6ce2b Лайв-лента 22Bet: запасные зеркала домена при отказе основного, причина пустой ленты пишется в статус задачи

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
2026/11/11 17:52:18 [warn] 2949805#2949805: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/11 17:52:18 [warn] 2949805#2949805: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/11 17:52:18 [warn] 2949805#2949805: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/11 17:52:18 [warn] 2949805#2949805: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/11 17:52:18 [warn] 2949805#2949805: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/11 17:52:18 [warn] 2949805#2949805: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
x22_line | 2026-11-11 14:46:30.701698 | x22 line new 0 | 
tg_reminders | 2026-11-11 14:34:20.899458 | no token | 
xfeed | 2026-11-11 14:49:54.621146 | xfeed empty | 
finish_stale | 2026-11-11 14:49:54.628700 | finished 0 | 
social | 2026-11-11 14:49:54.633631 | social nothing due (test) | 
maxbet_results | 2026-11-11 14:49:56.599342 | no pending | 
other_results | 2026-11-11 14:50:01.542398 | other results 4 | 
odds | 2026-11-11 14:50:02.928095 | odds matched 72 | 
settle | 2026-11-11 14:50:03.155417 | settled 0 | 
tg_poll | 2026-11-11 14:50:03.165294 | no token | 
football_live | 2026-11-11 14:50:08.268896 | live upserted 0 | 
live | 2026-11-11 14:50:08.578221 | live updated 2 | 
trends | 2026-11-10 23:36:09.974574 | trends 11 | 
names | 2026-11-11 14:37:26.184503 | names 103 | 
basketball | 2026-11-11 14:52:13.963110 | basketball upserted 414 | 
analysis | 2026-11-10 23:36:10.199323 | analysis 27 | 
basketball_week | 2026-11-11 14:52:14.952627 | nba week upserted 48 | 
other_sports | 2026-11-11 14:52:15.726509 | other sports new 0 | 
backfill | 2026-11-11 14:52:15.733319 | already | 
logos | 2026-11-11 14:52:15.848000 | logos: nothing to do | 
highlights | 2026-11-11 14:52:16.658905 | highlights +0 | 
football | 2026-11-11 14:52:12.183689 | football upserted 96 |  "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
--- worker log ---
Nov 11 17:52:13 impressed-jade.ptr.network python[2949462]: 2026-11-11 17:52:13,890 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261111 "HTTP/1.1 200 OK"
Nov 11 17:52:13 impressed-jade.ptr.network python[2949462]: 2026-11-11 17:52:13,949 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261112 "HTTP/1.1 200 OK"
Nov 11 17:52:14 impressed-jade.ptr.network python[2949462]: 2026-11-11 17:52:14,148 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261113 "HTTP/1.1 200 OK"
Nov 11 17:52:14 impressed-jade.ptr.network python[2949462]: 2026-11-11 17:52:14,204 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261114 "HTTP/1.1 200 OK"
Nov 11 17:52:14 impressed-jade.ptr.network python[2949462]: 2026-11-11 17:52:14,242 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261115 "HTTP/1.1 200 OK"
Nov 11 17:52:14 impressed-jade.ptr.network python[2949462]: 2026-11-11 17:52:14,639 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261116 "HTTP/1.1 200 OK"
Nov 11 17:52:14 impressed-jade.ptr.network python[2949462]: 2026-11-11 17:52:14,786 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261117 "HTTP/1.1 200 OK"
Nov 11 17:52:14 impressed-jade.ptr.network python[2949462]: 2026-11-11 17:52:14,915 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261118 "HTTP/1.1 200 OK"
Nov 11 17:52:15 impressed-jade.ptr.network python[2949462]: 2026-11-11 17:52:15,077 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/H/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 17:52:15 impressed-jade.ptr.network python[2949462]: 2026-11-11 17:52:15,215 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/T/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 17:52:15 impressed-jade.ptr.network python[2949462]: 2026-11-11 17:52:15,292 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/V/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 17:52:15 impressed-jade.ptr.network python[2949462]: 2026-11-11 17:52:15,376 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/W/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 17:52:15 impressed-jade.ptr.network python[2949462]: 2026-11-11 17:52:15,459 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/HB/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 17:52:15 impressed-jade.ptr.network python[2949462]: 2026-11-11 17:52:15,603 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/TT/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 17:52:15 impressed-jade.ptr.network python[2949462]: 2026-11-11 17:52:15,991 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpFqOv5z4WKps64GlQS4ytw "HTTP/1.1 200 OK"
Nov 11 17:52:16 impressed-jade.ptr.network python[2949462]: 2026-11-11 17:52:16,039 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC-2Cj6KlR9rCfR28zNLmOTA "HTTP/1.1 200 OK"
Nov 11 17:52:16 impressed-jade.ptr.network python[2949462]: 2026-11-11 17:52:16,070 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCWJ2lWNubArHWmf3FIHbfcQ "HTTP/1.1 200 OK"
Nov 11 17:52:16 impressed-jade.ptr.network python[2949462]: 2026-11-11 17:52:16,094 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCqFMzb-4AUf6WAIbl132QKA "HTTP/1.1 200 OK"
Nov 11 17:52:16 impressed-jade.ptr.network python[2949462]: 2026-11-11 17:52:16,171 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCwJ3S2Ix7aI1BhHexDJlmEg "HTTP/1.1 200 OK"
Nov 11 17:52:16 impressed-jade.ptr.network python[2949462]: 2026-11-11 17:52:16,455 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCTv-XvfzLX3i4IGWAm4sbmA "HTTP/1.1 200 OK"
Nov 11 17:52:16 impressed-jade.ptr.network python[2949462]: 2026-11-11 17:52:16,478 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCxfPjORdISQSn2fV8tcVmgA "HTTP/1.1 200 OK"
Nov 11 17:52:16 impressed-jade.ptr.network python[2949462]: 2026-11-11 17:52:16,491 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCQsH5XtIc9hONE1BQjucM0g "HTTP/1.1 200 OK"
Nov 11 17:52:16 impressed-jade.ptr.network python[2949462]: 2026-11-11 17:52:16,512 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC6UL29enLNe4mqwTfAyeNuw "HTTP/1.1 200 OK"
Nov 11 17:52:16 impressed-jade.ptr.network python[2949462]: 2026-11-11 17:52:16,541 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpryVRk_VDudG8SHXgWcG0w "HTTP/1.1 200 OK"
Nov 11 17:52:16 impressed-jade.ptr.network python[2949462]: 2026-11-11 17:52:16,640 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCyGa1YEx9ST66rYrJTGIKOw "HTTP/1.1 200 OK"
--- api log ---
Nov 11 17:52:25 impressed-jade.ptr.network uvicorn[2949524]: INFO:     109.92.227.130:0 - "POST /api/t HTTP/1.0" 200 OK
Nov 11 17:52:25 impressed-jade.ptr.network uvicorn[2949524]: INFO:     109.92.227.130:0 - "GET /api/home?tz=180&sport=all HTTP/1.0" 200 OK
Nov 11 17:52:26 impressed-jade.ptr.network uvicorn[2949524]: INFO:     109.92.227.130:0 - "GET /api/me/watch?ids= HTTP/1.0" 200 OK
Nov 11 17:52:27 impressed-jade.ptr.network uvicorn[2949524]: INFO:     109.92.227.130:0 - "GET /api/home?tz=180&sport=tabletennis HTTP/1.0" 200 OK
Nov 11 17:52:28 impressed-jade.ptr.network uvicorn[2949525]: INFO:     109.92.227.130:0 - "POST /api/t HTTP/1.0" 200 OK
Nov 11 17:52:28 impressed-jade.ptr.network uvicorn[2949524]: INFO:     109.92.227.130:0 - "GET /api/matches?league=79&tz=180 HTTP/1.0" 200 OK
Nov 11 17:52:33 impressed-jade.ptr.network uvicorn[2949525]: INFO:     109.92.227.130:0 - "POST /api/t HTTP/1.0" 200 OK
Nov 11 17:52:33 impressed-jade.ptr.network uvicorn[2949524]: INFO:     109.92.227.130:0 - "GET /api/matches/1968/center HTTP/1.0" 200 OK
Nov 11 17:52:33 impressed-jade.ptr.network uvicorn[2949524]: INFO:     109.92.227.130:0 - "GET /api/matches/1968 HTTP/1.0" 200 OK
Nov 11 17:52:35 impressed-jade.ptr.network uvicorn[2949524]: INFO:     109.92.227.130:0 - "POST /api/t HTTP/1.0" 200 OK
Nov 11 17:52:35 impressed-jade.ptr.network uvicorn[2949524]: INFO:     109.92.227.130:0 - "GET /api/matches?league=79&tz=180 HTTP/1.0" 200 OK
Nov 11 17:52:42 impressed-jade.ptr.network uvicorn[2949524]: INFO:     127.0.0.1:56746 - "GET /api/health HTTP/1.1" 200 OK
Nov 11 17:52:42 impressed-jade.ptr.network uvicorn[2949525]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 17:52:42 impressed-jade.ptr.network uvicorn[2949524]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 17:52:42 impressed-jade.ptr.network uvicorn[2949524]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
