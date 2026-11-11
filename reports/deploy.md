# Zicer deploy 2026-11-11 19:06 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: c8c93c6 Матч-центр: игровое время из лайв-ленты — футбол, гандбол, футзал считают вперёд (74:41), хоккей, баскетбол (FIBA 10 мин, NBA 12 мин) и водное поло — обратный отсчёт периода рядом с номером периода; в перерывах время стоит

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
2026/11/11 22:06:02 [warn] 3289872#3289872: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/11 22:06:02 [warn] 3289872#3289872: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/11 22:06:02 [warn] 3289872#3289872: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/11 22:06:02 [warn] 3289872#3289872: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/11 22:06:02 [warn] 3289872#3289872: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/11 22:06:02 [warn] 3289872#3289872: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
social | 2026-11-11 19:04:05.829854 | social nothing due (test) | 
names | 2026-11-11 19:04:19.485103 | names 0 | 
tg_reminders | 2026-11-11 19:04:19.942761 | no token | 
pandascore | 2026-11-11 16:06:16.134963 | pandascore new 0, updated 58, finished 0 | le "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/engine/base.py", line 1986, in _exec_single_context
maxbet_results | 2026-11-11 19:04:42.019838 | maxbet results 14 | 
other_results | 2026-11-11 19:04:53.564990 | other results 71 | 
finish_stale | 2026-11-11 19:05:39.948991 | finished 0 | 
tg_poll | 2026-11-11 19:05:39.954169 | no token | 
football_live | 2026-11-11 19:05:45.029877 | live upserted 0 | 
live | 2026-11-11 19:05:45.411184 | live updated 44 | 
basketball | 2026-11-11 19:05:58.068234 | basketball upserted 412 | 
basketball_week | 2026-11-11 19:05:58.983639 | nba week upserted 48 | 
other_sports | 2026-11-11 19:05:59.501135 | other sports new 0 | 
backfill | 2026-11-11 19:05:59.505865 | already | 
logos | 2026-11-11 19:05:59.583655 | logos: nothing to do | 
highlights | 2026-11-11 19:06:00.200552 | highlights +0 | 
x22_line | 2026-11-11 19:06:06.964235 | x22 line new 0, fetched {'futsal': '0'} | 
odds | 2026-11-11 19:06:08.501317 | odds matched 68 | 
settle | 2026-11-11 19:06:08.524609 | settled 0 | 
xfeed | 2026-11-11 19:06:22.147238 | xfeed empty (22bet.ug http 308) | 
trends | 2026-11-10 23:36:09.974574 | trends 11 | 
analysis | 2026-11-10 23:36:10.199323 | analysis 27 | 
football | 2026-11-11 19:05:55.831373 | football upserted 96 |  "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
--- worker log ---
Nov 11 22:05:58 impressed-jade.ptr.network python[3289556]: 2026-11-11 22:05:58,943 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261118 "HTTP/1.1 200 OK"
Nov 11 22:05:59 impressed-jade.ptr.network python[3289556]: 2026-11-11 22:05:59,093 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/H/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 22:05:59 impressed-jade.ptr.network python[3289556]: 2026-11-11 22:05:59,172 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/T/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 22:05:59 impressed-jade.ptr.network python[3289556]: 2026-11-11 22:05:59,249 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/V/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 22:05:59 impressed-jade.ptr.network python[3289556]: 2026-11-11 22:05:59,318 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/W/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 22:05:59 impressed-jade.ptr.network python[3289556]: 2026-11-11 22:05:59,374 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/HB/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 22:05:59 impressed-jade.ptr.network python[3289556]: 2026-11-11 22:05:59,433 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/TT/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 22:05:59 impressed-jade.ptr.network python[3289556]: 2026-11-11 22:05:59,748 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpFqOv5z4WKps64GlQS4ytw "HTTP/1.1 200 OK"
Nov 11 22:05:59 impressed-jade.ptr.network python[3289556]: 2026-11-11 22:05:59,816 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC-2Cj6KlR9rCfR28zNLmOTA "HTTP/1.1 200 OK"
Nov 11 22:05:59 impressed-jade.ptr.network python[3289556]: 2026-11-11 22:05:59,879 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCWJ2lWNubArHWmf3FIHbfcQ "HTTP/1.1 200 OK"
Nov 11 22:05:59 impressed-jade.ptr.network python[3289556]: 2026-11-11 22:05:59,892 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCqFMzb-4AUf6WAIbl132QKA "HTTP/1.1 200 OK"
Nov 11 22:05:59 impressed-jade.ptr.network python[3289556]: 2026-11-11 22:05:59,906 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCwJ3S2Ix7aI1BhHexDJlmEg "HTTP/1.1 200 OK"
Nov 11 22:05:59 impressed-jade.ptr.network python[3289556]: 2026-11-11 22:05:59,985 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCTv-XvfzLX3i4IGWAm4sbmA "HTTP/1.1 200 OK"
Nov 11 22:06:00 impressed-jade.ptr.network python[3289556]: 2026-11-11 22:06:00,044 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCxfPjORdISQSn2fV8tcVmgA "HTTP/1.1 200 OK"
Nov 11 22:06:00 impressed-jade.ptr.network python[3289556]: 2026-11-11 22:06:00,059 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCQsH5XtIc9hONE1BQjucM0g "HTTP/1.1 200 OK"
Nov 11 22:06:00 impressed-jade.ptr.network python[3289556]: 2026-11-11 22:06:00,141 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC6UL29enLNe4mqwTfAyeNuw "HTTP/1.1 200 OK"
Nov 11 22:06:00 impressed-jade.ptr.network python[3289556]: 2026-11-11 22:06:00,162 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpryVRk_VDudG8SHXgWcG0w "HTTP/1.1 200 OK"
Nov 11 22:06:00 impressed-jade.ptr.network python[3289556]: 2026-11-11 22:06:00,181 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCyGa1YEx9ST66rYrJTGIKOw "HTTP/1.1 200 OK"
Nov 11 22:06:00 impressed-jade.ptr.network python[3289556]: 2026-11-11 22:06:00,302 INFO HTTP Request: GET https://22bet.com/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 22:06:00 impressed-jade.ptr.network python[3289556]: 2026-11-11 22:06:00,558 INFO HTTP Request: GET https://22bet.co.ke/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 22:06:00 impressed-jade.ptr.network python[3289556]: 2026-11-11 22:06:00,650 INFO HTTP Request: GET https://22bet.ng/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 22:06:06 impressed-jade.ptr.network python[3289556]: 2026-11-11 22:06:06,963 INFO HTTP Request: GET https://22bet.ug/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 22:06:07 impressed-jade.ptr.network python[3289556]: 2026-11-11 22:06:07,419 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 22:06:07 impressed-jade.ptr.network python[3289556]: 2026-11-11 22:06:07,933 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 22:06:08 impressed-jade.ptr.network python[3289556]: 2026-11-11 22:06:08,412 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
--- api log ---
Nov 11 22:06:14 impressed-jade.ptr.network uvicorn[3289583]: INFO:     87.116.135.226:0 - "GET /api/me/watch?ids= HTTP/1.0" 200 OK
Nov 11 22:06:15 impressed-jade.ptr.network uvicorn[3289583]: INFO:     87.116.135.226:0 - "GET /api/sports?tz=60 HTTP/1.0" 200 OK
Nov 11 22:06:15 impressed-jade.ptr.network uvicorn[3289583]: INFO:     87.116.135.226:0 - "GET /api/ranking?period=month HTTP/1.0" 200 OK
Nov 11 22:06:15 impressed-jade.ptr.network uvicorn[3289583]: INFO:     87.116.135.226:0 - "GET /api/matches?day=live&sport=all&serbian=false&tz=60 HTTP/1.0" 200 OK
Nov 11 22:06:16 impressed-jade.ptr.network uvicorn[3289583]: INFO:     87.116.135.226:0 - "GET /api/matches?day=today&sport=all&serbian=false&tz=60 HTTP/1.0" 200 OK
Nov 11 22:06:16 impressed-jade.ptr.network uvicorn[3289583]: INFO:     87.116.135.226:0 - "GET /api/home?tz=60&sport=all HTTP/1.0" 200 OK
Nov 11 22:06:20 impressed-jade.ptr.network uvicorn[3289582]: INFO:     87.116.135.226:0 - "POST /api/t HTTP/1.0" 200 OK
Nov 11 22:06:20 impressed-jade.ptr.network uvicorn[3289583]: INFO:     87.116.135.226:0 - "GET /api/matches/1588 HTTP/1.0" 200 OK
Nov 11 22:06:21 impressed-jade.ptr.network uvicorn[3289582]: INFO:httpx:HTTP Request: GET https://live.euroleague.net/api/Boxscore?gamecode=98&seasoncode=U2026 "HTTP/1.1 200 OK"
Nov 11 22:06:21 impressed-jade.ptr.network uvicorn[3289582]: INFO:httpx:HTTP Request: GET https://live.euroleague.net/api/PlayByPlay?gamecode=98&seasoncode=U2026 "HTTP/1.1 200 OK"
Nov 11 22:06:21 impressed-jade.ptr.network uvicorn[3289582]: INFO:     87.116.135.226:0 - "GET /api/matches/1588/center HTTP/1.0" 200 OK
Nov 11 22:06:26 impressed-jade.ptr.network uvicorn[3289583]: INFO:     127.0.0.1:57730 - "GET /api/health HTTP/1.1" 200 OK
Nov 11 22:06:26 impressed-jade.ptr.network uvicorn[3289582]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 22:06:26 impressed-jade.ptr.network uvicorn[3289583]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 22:06:27 impressed-jade.ptr.network uvicorn[3289582]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
