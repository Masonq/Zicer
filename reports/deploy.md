# Zicer deploy 2026-11-11 11:26 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: d101022 Матчи: «К лайву» — компактная плашка справа в липкой полосе лиги, в пределах списка, не перекрывает кэфы при любой ширине окна; появляется после прокрутки

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
2026/11/11 14:25:36 [warn] 2672691#2672691: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/11 14:25:36 [warn] 2672691#2672691: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/11 14:25:36 [warn] 2672691#2672691: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/11 14:25:36 [warn] 2672691#2672691: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/11 14:25:36 [warn] 2672691#2672691: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/11 14:25:36 [warn] 2672691#2672691: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
matches: {'basketball': 707, 'waterpolo': 4, 'tennis': 23, 'hockey': 52, 'volleyball': 29, 'football': 1100}
finish_stale | 2026-11-11 11:24:32.445854 | finished 0 | 
tg_reminders | 2026-11-11 11:24:32.880966 | no token | 
football_live | 2026-11-11 11:24:47.178387 | live upserted 1 | 
live | 2026-11-11 11:25:01.424466 | live updated 2 | 
names | 2026-11-11 11:25:02.426443 | names 15 | 
tg_poll | 2026-11-11 11:25:05.332381 | no token | 
basketball | 2026-11-11 11:25:32.010363 | basketball upserted 414 | 
basketball_week | 2026-11-11 11:25:32.864621 | nba week upserted 48 | 
other_sports | 2026-11-11 11:25:33.256319 | other sports new 0 | 
backfill | 2026-11-11 11:25:33.260776 | already | 
logos | 2026-11-11 11:25:40.200303 | logos: checked 10, found 4 | 
highlights | 2026-11-11 11:25:40.502460 | highlights +0 | 
odds | 2026-11-11 11:25:41.843735 | odds matched 71 | 
settle | 2026-11-11 11:25:41.864318 | settled 0 | 
xfeed | 2026-11-11 11:25:55.735292 | xfeed games 184, linked 0, updated 2 | 
trends | 2026-11-10 23:36:09.974574 | trends 11 | 
analysis | 2026-11-10 23:36:10.199323 | analysis 27 | 
maxbet_results | 2026-11-11 11:22:33.331117 | no pending | 
other_results | 2026-11-11 11:22:35.661074 | other results 2 | 
football | 2026-11-11 11:25:30.183988 | football upserted 97 |  "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
--- worker log ---
Nov 11 14:25:36 impressed-jade.ptr.network python[2672359]: 2026-11-11 14:25:36,737 INFO HTTP Request: GET https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Geneva "HTTP/1.1 200 OK"
Nov 11 14:25:37 impressed-jade.ptr.network python[2672359]: 2026-11-11 14:25:37,472 INFO HTTP Request: GET https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Oostende "HTTP/1.1 200 OK"
Nov 11 14:25:38 impressed-jade.ptr.network python[2672359]: 2026-11-11 14:25:38,160 INFO HTTP Request: GET https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Levice "HTTP/1.1 200 OK"
Nov 11 14:25:38 impressed-jade.ptr.network python[2672359]: 2026-11-11 14:25:38,875 INFO HTTP Request: GET https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Benfica "HTTP/1.1 200 OK"
Nov 11 14:25:39 impressed-jade.ptr.network python[2672359]: 2026-11-11 14:25:39,587 INFO HTTP Request: GET https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Bakken+B. "HTTP/1.1 200 OK"
Nov 11 14:25:40 impressed-jade.ptr.network python[2672359]: 2026-11-11 14:25:40,301 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpFqOv5z4WKps64GlQS4ytw "HTTP/1.1 200 OK"
Nov 11 14:25:40 impressed-jade.ptr.network python[2672359]: 2026-11-11 14:25:40,315 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC-2Cj6KlR9rCfR28zNLmOTA "HTTP/1.1 200 OK"
Nov 11 14:25:40 impressed-jade.ptr.network python[2672359]: 2026-11-11 14:25:40,325 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCWJ2lWNubArHWmf3FIHbfcQ "HTTP/1.1 200 OK"
Nov 11 14:25:40 impressed-jade.ptr.network python[2672359]: 2026-11-11 14:25:40,341 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCqFMzb-4AUf6WAIbl132QKA "HTTP/1.1 200 OK"
Nov 11 14:25:40 impressed-jade.ptr.network python[2672359]: 2026-11-11 14:25:40,352 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCwJ3S2Ix7aI1BhHexDJlmEg "HTTP/1.1 200 OK"
Nov 11 14:25:40 impressed-jade.ptr.network python[2672359]: 2026-11-11 14:25:40,364 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCTv-XvfzLX3i4IGWAm4sbmA "HTTP/1.1 200 OK"
Nov 11 14:25:40 impressed-jade.ptr.network python[2672359]: 2026-11-11 14:25:40,389 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCxfPjORdISQSn2fV8tcVmgA "HTTP/1.1 200 OK"
Nov 11 14:25:40 impressed-jade.ptr.network python[2672359]: 2026-11-11 14:25:40,406 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCQsH5XtIc9hONE1BQjucM0g "HTTP/1.1 200 OK"
Nov 11 14:25:40 impressed-jade.ptr.network python[2672359]: 2026-11-11 14:25:40,435 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC6UL29enLNe4mqwTfAyeNuw "HTTP/1.1 200 OK"
Nov 11 14:25:40 impressed-jade.ptr.network python[2672359]: 2026-11-11 14:25:40,457 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpryVRk_VDudG8SHXgWcG0w "HTTP/1.1 200 OK"
Nov 11 14:25:40 impressed-jade.ptr.network python[2672359]: 2026-11-11 14:25:40,479 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCyGa1YEx9ST66rYrJTGIKOw "HTTP/1.1 200 OK"
Nov 11 14:25:40 impressed-jade.ptr.network python[2672359]: 2026-11-11 14:25:40,656 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 14:25:41 impressed-jade.ptr.network python[2672359]: 2026-11-11 14:25:41,140 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 14:25:41 impressed-jade.ptr.network python[2672359]: 2026-11-11 14:25:41,628 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 14:25:51 impressed-jade.ptr.network python[2672359]: 2026-11-11 14:25:51,971 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 14:25:52 impressed-jade.ptr.network python[2672359]: 2026-11-11 14:25:52,606 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 14:25:53 impressed-jade.ptr.network python[2672359]: 2026-11-11 14:25:53,233 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 14:25:53 impressed-jade.ptr.network python[2672359]: 2026-11-11 14:25:53,865 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 14:25:54 impressed-jade.ptr.network python[2672359]: 2026-11-11 14:25:54,488 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 14:25:55 impressed-jade.ptr.network python[2672359]: 2026-11-11 14:25:55,108 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
--- api log ---
Nov 11 14:25:27 impressed-jade.ptr.network uvicorn[2672361]: INFO:     Started parent process [2672361]
Nov 11 14:25:29 impressed-jade.ptr.network uvicorn[2672385]: INFO:     Started server process [2672385]
Nov 11 14:25:29 impressed-jade.ptr.network uvicorn[2672385]: INFO:     Waiting for application startup.
Nov 11 14:25:29 impressed-jade.ptr.network uvicorn[2672384]: INFO:     Started server process [2672384]
Nov 11 14:25:29 impressed-jade.ptr.network uvicorn[2672384]: INFO:     Waiting for application startup.
Nov 11 14:25:29 impressed-jade.ptr.network uvicorn[2672385]: INFO:     Application startup complete.
Nov 11 14:25:29 impressed-jade.ptr.network uvicorn[2672384]: INFO:     Application startup complete.
Nov 11 14:25:31 impressed-jade.ptr.network uvicorn[2672384]: INFO:     109.92.227.130:0 - "GET /api/matches?day=today&sport=all&serbian=false&tz=180 HTTP/1.0" 200 OK
Nov 11 14:25:36 impressed-jade.ptr.network uvicorn[2672384]: INFO:     109.92.227.130:0 - "GET /api/me/watch?ids= HTTP/1.0" 200 OK
Nov 11 14:25:56 impressed-jade.ptr.network uvicorn[2672385]: INFO:     109.92.227.130:0 - "GET /api/me/watch?ids= HTTP/1.0" 200 OK
Nov 11 14:25:59 impressed-jade.ptr.network uvicorn[2672384]: INFO:     109.92.227.130:0 - "GET /api/sports?tz=180 HTTP/1.0" 200 OK
Nov 11 14:26:00 impressed-jade.ptr.network uvicorn[2672384]: INFO:     127.0.0.1:46002 - "GET /api/health HTTP/1.1" 200 OK
Nov 11 14:26:00 impressed-jade.ptr.network uvicorn[2672384]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 14:26:00 impressed-jade.ptr.network uvicorn[2672385]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 14:26:00 impressed-jade.ptr.network uvicorn[2672384]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
