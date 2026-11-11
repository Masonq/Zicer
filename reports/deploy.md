# Zicer deploy 2026-11-11 14:59 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: 710d24e Лайв-лента 22Bet: короткий таймаут и пауза 2 минуты, если все зеркала отказывают (задача больше не зависает)

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
2026/11/11 17:58:35 [warn] 2958403#2958403: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/11 17:58:35 [warn] 2958403#2958403: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/11 17:58:35 [warn] 2958403#2958403: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/11 17:58:35 [warn] 2958403#2958403: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/11 17:58:35 [warn] 2958403#2958403: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/11 17:58:35 [warn] 2958403#2958403: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
matches: {'basketball': 707, 'football': 1100, 'handball': 44, 'hockey': 52, 'tabletennis': 142, 'tennis': 23, 'volleyball': 33, 'waterpolo': 7}
basketball | 2026-11-11 14:58:31.888916 | basketball upserted 414 | 
basketball_week | 2026-11-11 14:58:33.004436 | nba week upserted 48 | 
other_sports | 2026-11-11 14:58:33.743570 | other sports new 0 | 
backfill | 2026-11-11 14:58:33.749862 | already | 
logos | 2026-11-11 14:58:33.843930 | logos: nothing to do | 
highlights | 2026-11-11 14:58:34.903774 | highlights +0 | 
tg_reminders | 2026-11-11 14:34:20.899458 | no token | 
xfeed | 2026-11-11 14:49:54.621146 | xfeed empty | 
finish_stale | 2026-11-11 14:49:54.628700 | finished 0 | 
social | 2026-11-11 14:49:54.633631 | social nothing due (test) | 
maxbet_results | 2026-11-11 14:49:56.599342 | no pending | 
other_results | 2026-11-11 14:50:01.542398 | other results 4 | 
tg_poll | 2026-11-11 14:50:03.165294 | no token | 
football_live | 2026-11-11 14:50:08.268896 | live upserted 0 | 
live | 2026-11-11 14:50:08.578221 | live updated 2 | 
trends | 2026-11-10 23:36:09.974574 | trends 11 | 
names | 2026-11-11 14:37:26.184503 | names 103 | 
analysis | 2026-11-10 23:36:10.199323 | analysis 27 | 
x22_line | 2026-11-11 14:54:37.037594 | x22 line new 0 | 
odds | 2026-11-11 14:54:38.333135 | odds matched 72 | 
settle | 2026-11-11 14:54:38.361178 | settled 0 | 
football | 2026-11-11 14:58:30.177046 | football upserted 96 |  "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
--- worker log ---
Nov 11 17:58:31 impressed-jade.ptr.network python[2958072]: 2026-11-11 17:58:31,812 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261111 "HTTP/1.1 200 OK"
Nov 11 17:58:31 impressed-jade.ptr.network python[2958072]: 2026-11-11 17:58:31,875 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261112 "HTTP/1.1 200 OK"
Nov 11 17:58:31 impressed-jade.ptr.network python[2958072]: 2026-11-11 17:58:31,991 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261113 "HTTP/1.1 200 OK"
Nov 11 17:58:32 impressed-jade.ptr.network python[2958072]: 2026-11-11 17:58:32,375 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261114 "HTTP/1.1 200 OK"
Nov 11 17:58:32 impressed-jade.ptr.network python[2958072]: 2026-11-11 17:58:32,520 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261115 "HTTP/1.1 200 OK"
Nov 11 17:58:32 impressed-jade.ptr.network python[2958072]: 2026-11-11 17:58:32,688 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261116 "HTTP/1.1 200 OK"
Nov 11 17:58:32 impressed-jade.ptr.network python[2958072]: 2026-11-11 17:58:32,845 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261117 "HTTP/1.1 200 OK"
Nov 11 17:58:32 impressed-jade.ptr.network python[2958072]: 2026-11-11 17:58:32,974 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261118 "HTTP/1.1 200 OK"
Nov 11 17:58:33 impressed-jade.ptr.network python[2958072]: 2026-11-11 17:58:33,120 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/H/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 17:58:33 impressed-jade.ptr.network python[2958072]: 2026-11-11 17:58:33,225 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/T/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 17:58:33 impressed-jade.ptr.network python[2958072]: 2026-11-11 17:58:33,302 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/V/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 17:58:33 impressed-jade.ptr.network python[2958072]: 2026-11-11 17:58:33,390 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/W/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 17:58:33 impressed-jade.ptr.network python[2958072]: 2026-11-11 17:58:33,477 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/HB/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 17:58:33 impressed-jade.ptr.network python[2958072]: 2026-11-11 17:58:33,612 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/TT/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 17:58:34 impressed-jade.ptr.network python[2958072]: 2026-11-11 17:58:34,212 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpFqOv5z4WKps64GlQS4ytw "HTTP/1.1 200 OK"
Nov 11 17:58:34 impressed-jade.ptr.network python[2958072]: 2026-11-11 17:58:34,274 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC-2Cj6KlR9rCfR28zNLmOTA "HTTP/1.1 200 OK"
Nov 11 17:58:34 impressed-jade.ptr.network python[2958072]: 2026-11-11 17:58:34,645 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCWJ2lWNubArHWmf3FIHbfcQ "HTTP/1.1 200 OK"
Nov 11 17:58:34 impressed-jade.ptr.network python[2958072]: 2026-11-11 17:58:34,664 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCqFMzb-4AUf6WAIbl132QKA "HTTP/1.1 200 OK"
Nov 11 17:58:34 impressed-jade.ptr.network python[2958072]: 2026-11-11 17:58:34,677 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCwJ3S2Ix7aI1BhHexDJlmEg "HTTP/1.1 200 OK"
Nov 11 17:58:34 impressed-jade.ptr.network python[2958072]: 2026-11-11 17:58:34,688 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCTv-XvfzLX3i4IGWAm4sbmA "HTTP/1.1 200 OK"
Nov 11 17:58:34 impressed-jade.ptr.network python[2958072]: 2026-11-11 17:58:34,759 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCxfPjORdISQSn2fV8tcVmgA "HTTP/1.1 200 OK"
Nov 11 17:58:34 impressed-jade.ptr.network python[2958072]: 2026-11-11 17:58:34,771 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCQsH5XtIc9hONE1BQjucM0g "HTTP/1.1 200 OK"
Nov 11 17:58:34 impressed-jade.ptr.network python[2958072]: 2026-11-11 17:58:34,795 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC6UL29enLNe4mqwTfAyeNuw "HTTP/1.1 200 OK"
Nov 11 17:58:34 impressed-jade.ptr.network python[2958072]: 2026-11-11 17:58:34,815 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpryVRk_VDudG8SHXgWcG0w "HTTP/1.1 200 OK"
Nov 11 17:58:34 impressed-jade.ptr.network python[2958072]: 2026-11-11 17:58:34,847 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCyGa1YEx9ST66rYrJTGIKOw "HTTP/1.1 200 OK"
--- api log ---
Nov 11 17:58:27 impressed-jade.ptr.network uvicorn[2958074]: INFO:     Uvicorn running on http://127.0.0.1:8790 (Press CTRL+C to quit)
Nov 11 17:58:27 impressed-jade.ptr.network uvicorn[2958074]: INFO:     Started parent process [2958074]
Nov 11 17:58:30 impressed-jade.ptr.network uvicorn[2958077]: INFO:     Started server process [2958077]
Nov 11 17:58:30 impressed-jade.ptr.network uvicorn[2958077]: INFO:     Waiting for application startup.
Nov 11 17:58:30 impressed-jade.ptr.network uvicorn[2958078]: INFO:     Started server process [2958078]
Nov 11 17:58:30 impressed-jade.ptr.network uvicorn[2958078]: INFO:     Waiting for application startup.
Nov 11 17:58:31 impressed-jade.ptr.network uvicorn[2958077]: INFO:     Application startup complete.
Nov 11 17:58:31 impressed-jade.ptr.network uvicorn[2958078]: INFO:     Application startup complete.
Nov 11 17:58:45 impressed-jade.ptr.network uvicorn[2958078]: INFO:     109.92.227.130:0 - "GET /api/me/watch?ids= HTTP/1.0" 200 OK
Nov 11 17:58:51 impressed-jade.ptr.network uvicorn[2958078]: INFO:     109.92.227.130:0 - "GET /api/sports?tz=180 HTTP/1.0" 200 OK
Nov 11 17:58:52 impressed-jade.ptr.network uvicorn[2958078]: INFO:     109.92.227.130:0 - "GET /api/home?tz=180&sport=all HTTP/1.0" 200 OK
Nov 11 17:58:59 impressed-jade.ptr.network uvicorn[2958078]: INFO:     127.0.0.1:48328 - "GET /api/health HTTP/1.1" 200 OK
Nov 11 17:58:59 impressed-jade.ptr.network uvicorn[2958078]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 17:58:59 impressed-jade.ptr.network uvicorn[2958078]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 17:59:00 impressed-jade.ptr.network uvicorn[2958078]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
