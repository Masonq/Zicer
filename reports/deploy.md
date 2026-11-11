# Zicer deploy 2026-11-11 15:31 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: 2ca65d8 Киберспорт из PandaScore (CS2, Dota 2, LoL, Valorant): расписание, логотипы, лайв, официальные результаты, коэффициенты по форме команд; поле для токена в «Сбор данных»; футзал — матчи из лайва 22Bet

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
2026/11/11 18:31:26 [warn] 3001929#3001929: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/11 18:31:26 [warn] 3001929#3001929: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/11 18:31:26 [warn] 3001929#3001929: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/11 18:31:26 [warn] 3001929#3001929: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/11 18:31:26 [warn] 3001929#3001929: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/11 18:31:26 [warn] 3001929#3001929: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
live | 2026-11-11 15:31:02.485157 | live updated 6 | 
tg_poll | 2026-11-11 15:31:09.110567 | no token | 
football_live | 2026-11-11 15:31:14.182486 | live upserted 0 | 
basketball | 2026-11-11 15:31:21.131217 | basketball upserted 414 | 
basketball_week | 2026-11-11 15:31:22.297673 | nba week upserted 48 | 
other_sports | 2026-11-11 15:31:22.996841 | other sports new 0 | 
backfill | 2026-11-11 15:31:23.002934 | already | 
logos | 2026-11-11 15:31:23.099188 | logos: nothing to do | 
highlights | 2026-11-11 15:31:23.792241 | highlights +0 | 
x22_line | 2026-11-11 15:31:31.462309 | x22 line new 0, fetched {'futsal': '0'} | 
odds | 2026-11-11 15:31:32.553547 | odds matched 72 | 
settle | 2026-11-11 15:31:32.576046 | settled 0 | 
xfeed | 2026-11-11 15:31:46.200310 | xfeed empty (22bet.ug http 308) | 
names | 2026-11-11 15:29:06.154286 | names 0 | 
tg_reminders | 2026-11-11 15:29:06.663007 | no token | 
trends | 2026-11-10 23:36:09.974574 | trends 11 | 
analysis | 2026-11-10 23:36:10.199323 | analysis 27 | 
social | 2026-11-11 15:30:02.576365 | social nothing due (test) | 
maxbet_results | 2026-11-11 15:30:13.612260 | no pending | 
other_results | 2026-11-11 15:30:21.224359 | other results 17 | 
finish_stale | 2026-11-11 15:30:33.959269 | finished 0 | 
football | 2026-11-11 15:31:19.301733 | football upserted 96 |  "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
--- worker log ---
Nov 11 18:31:22 impressed-jade.ptr.network python[3001592]: 2026-11-11 18:31:22,258 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261118 "HTTP/1.1 200 OK"
Nov 11 18:31:22 impressed-jade.ptr.network python[3001592]: 2026-11-11 18:31:22,478 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/H/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 18:31:22 impressed-jade.ptr.network python[3001592]: 2026-11-11 18:31:22,575 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/T/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 18:31:22 impressed-jade.ptr.network python[3001592]: 2026-11-11 18:31:22,644 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/V/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 18:31:22 impressed-jade.ptr.network python[3001592]: 2026-11-11 18:31:22,731 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/W/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 18:31:22 impressed-jade.ptr.network python[3001592]: 2026-11-11 18:31:22,788 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/HB/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 18:31:22 impressed-jade.ptr.network python[3001592]: 2026-11-11 18:31:22,883 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/TT/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 18:31:23 impressed-jade.ptr.network python[3001592]: 2026-11-11 18:31:23,283 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpFqOv5z4WKps64GlQS4ytw "HTTP/1.1 200 OK"
Nov 11 18:31:23 impressed-jade.ptr.network python[3001592]: 2026-11-11 18:31:23,338 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC-2Cj6KlR9rCfR28zNLmOTA "HTTP/1.1 200 OK"
Nov 11 18:31:23 impressed-jade.ptr.network python[3001592]: 2026-11-11 18:31:23,349 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCWJ2lWNubArHWmf3FIHbfcQ "HTTP/1.1 200 OK"
Nov 11 18:31:23 impressed-jade.ptr.network python[3001592]: 2026-11-11 18:31:23,367 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCqFMzb-4AUf6WAIbl132QKA "HTTP/1.1 200 OK"
Nov 11 18:31:23 impressed-jade.ptr.network python[3001592]: 2026-11-11 18:31:23,381 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCwJ3S2Ix7aI1BhHexDJlmEg "HTTP/1.1 200 OK"
Nov 11 18:31:23 impressed-jade.ptr.network python[3001592]: 2026-11-11 18:31:23,393 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCTv-XvfzLX3i4IGWAm4sbmA "HTTP/1.1 200 OK"
Nov 11 18:31:23 impressed-jade.ptr.network python[3001592]: 2026-11-11 18:31:23,503 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCxfPjORdISQSn2fV8tcVmgA "HTTP/1.1 200 OK"
Nov 11 18:31:23 impressed-jade.ptr.network python[3001592]: 2026-11-11 18:31:23,572 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCQsH5XtIc9hONE1BQjucM0g "HTTP/1.1 200 OK"
Nov 11 18:31:23 impressed-jade.ptr.network python[3001592]: 2026-11-11 18:31:23,685 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC6UL29enLNe4mqwTfAyeNuw "HTTP/1.1 200 OK"
Nov 11 18:31:23 impressed-jade.ptr.network python[3001592]: 2026-11-11 18:31:23,746 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpryVRk_VDudG8SHXgWcG0w "HTTP/1.1 200 OK"
Nov 11 18:31:23 impressed-jade.ptr.network python[3001592]: 2026-11-11 18:31:23,768 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCyGa1YEx9ST66rYrJTGIKOw "HTTP/1.1 200 OK"
Nov 11 18:31:24 impressed-jade.ptr.network python[3001592]: 2026-11-11 18:31:24,773 INFO HTTP Request: GET https://22bet.com/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 18:31:25 impressed-jade.ptr.network python[3001592]: 2026-11-11 18:31:25,035 INFO HTTP Request: GET https://22bet.co.ke/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 18:31:25 impressed-jade.ptr.network python[3001592]: 2026-11-11 18:31:25,113 INFO HTTP Request: GET https://22bet.ng/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 18:31:31 impressed-jade.ptr.network python[3001592]: 2026-11-11 18:31:31,460 INFO HTTP Request: GET https://22bet.ug/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 18:31:31 impressed-jade.ptr.network python[3001592]: 2026-11-11 18:31:31,630 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 18:31:31 impressed-jade.ptr.network python[3001592]: 2026-11-11 18:31:31,847 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 18:31:32 impressed-jade.ptr.network python[3001592]: 2026-11-11 18:31:32,361 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
--- api log ---
Nov 11 18:31:47 impressed-jade.ptr.network uvicorn[3001598]: INFO:     109.92.227.130:0 - "POST /api/t HTTP/1.0" 200 OK
Nov 11 18:31:47 impressed-jade.ptr.network uvicorn[3001598]: INFO:     109.92.227.130:0 - "GET /api/bookmakers HTTP/1.0" 200 OK
Nov 11 18:31:48 impressed-jade.ptr.network uvicorn[3001597]: INFO:     109.92.227.130:0 - "POST /api/auth/login HTTP/1.0" 400 Bad Request
Nov 11 18:31:49 impressed-jade.ptr.network uvicorn[3001597]: INFO:     109.92.227.130:0 - "POST /api/t HTTP/1.0" 200 OK
Nov 11 18:31:49 impressed-jade.ptr.network uvicorn[3001597]: INFO:     109.92.227.130:0 - "GET /api/home?tz=180&sport=all HTTP/1.0" 200 OK
Nov 11 18:31:49 impressed-jade.ptr.network uvicorn[3001597]: INFO:     109.92.227.130:0 - "GET /api/home?tz=180&sport=all HTTP/1.0" 200 OK
Nov 11 18:31:49 impressed-jade.ptr.network uvicorn[3001598]: INFO:     109.92.227.130:0 - "GET /api/matches?day=live&sport=all&serbian=false&tz=180 HTTP/1.0" 200 OK
Nov 11 18:31:49 impressed-jade.ptr.network uvicorn[3001598]: INFO:     109.92.227.130:0 - "GET /api/sports?tz=180 HTTP/1.0" 200 OK
Nov 11 18:31:49 impressed-jade.ptr.network uvicorn[3001598]: INFO:     109.92.227.130:0 - "GET /api/ranking?period=month HTTP/1.0" 200 OK
Nov 11 18:31:49 impressed-jade.ptr.network uvicorn[3001598]: INFO:     109.92.227.130:0 - "GET /api/matches?day=today&sport=all&serbian=false&tz=180 HTTP/1.0" 200 OK
Nov 11 18:31:49 impressed-jade.ptr.network uvicorn[3001598]: INFO:     109.92.227.130:0 - "GET /api/sports?tz=180 HTTP/1.0" 200 OK
Nov 11 18:31:50 impressed-jade.ptr.network uvicorn[3001597]: INFO:     127.0.0.1:38180 - "GET /api/health HTTP/1.1" 200 OK
Nov 11 18:31:50 impressed-jade.ptr.network uvicorn[3001598]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 18:31:50 impressed-jade.ptr.network uvicorn[3001597]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 18:31:51 impressed-jade.ptr.network uvicorn[3001597]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
