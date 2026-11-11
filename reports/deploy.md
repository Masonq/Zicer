# Zicer deploy 2026-11-11 11:14 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: 240dfe3 Горячие матчи: исправлена заглушка эмблемы (буква уезжала из круга у команд и игроков без логотипа)

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
2026/11/11 14:13:50 [warn] 2656484#2656484: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/11 14:13:50 [warn] 2656484#2656484: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/11 14:13:50 [warn] 2656484#2656484: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/11 14:13:50 [warn] 2656484#2656484: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/11 14:13:50 [warn] 2656484#2656484: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/11 14:13:50 [warn] 2656484#2656484: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
matches: {'basketball': 702, 'waterpolo': 4, 'tennis': 23, 'hockey': 46, 'volleyball': 29, 'football': 1100}
xfeed | 2026-11-11 11:14:03.458408 | xfeed games 185, linked 0, updated 2 | 
live | 2026-11-11 11:14:13.744795 | live updated 2 | 
names | 2026-11-11 11:11:16.568731 | names 0 | 
tg_reminders | 2026-11-11 11:11:16.890878 | no token | 
maxbet_results | 2026-11-11 11:12:19.024638 | no pending | 
other_results | 2026-11-11 11:12:20.407613 | other results 2 | 
trends | 2026-11-10 23:36:09.974574 | trends 11 | 
analysis | 2026-11-10 23:36:10.199323 | analysis 27 | 
football_live | 2026-11-11 11:13:08.113886 | live upserted 1 | 
tg_poll | 2026-11-11 11:13:26.153456 | no token | 
finish_stale | 2026-11-11 11:13:40.040671 | finished 0 | 
basketball | 2026-11-11 11:13:46.785347 | basketball upserted 414 | 
basketball_week | 2026-11-11 11:13:47.572995 | nba week upserted 48 | 
other_sports | 2026-11-11 11:13:47.968456 | other sports new 0 | 
backfill | 2026-11-11 11:13:47.975048 | already | 
logos | 2026-11-11 11:13:48.073095 | logos: nothing to do | 
highlights | 2026-11-11 11:13:48.606647 | highlights +0 | 
odds | 2026-11-11 11:13:49.552126 | odds matched 71 | 
settle | 2026-11-11 11:13:49.579924 | settled 0 | 
football | 2026-11-11 11:13:44.858043 | football upserted 97 |  "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
--- worker log ---
Nov 11 14:13:47 impressed-jade.ptr.network python[2656200]: 2026-11-11 14:13:47,959 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/W/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 14:13:48 impressed-jade.ptr.network python[2656200]: 2026-11-11 14:13:48,195 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpFqOv5z4WKps64GlQS4ytw "HTTP/1.1 200 OK"
Nov 11 14:13:48 impressed-jade.ptr.network python[2656200]: 2026-11-11 14:13:48,253 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC-2Cj6KlR9rCfR28zNLmOTA "HTTP/1.1 200 OK"
Nov 11 14:13:48 impressed-jade.ptr.network python[2656200]: 2026-11-11 14:13:48,263 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCWJ2lWNubArHWmf3FIHbfcQ "HTTP/1.1 200 OK"
Nov 11 14:13:48 impressed-jade.ptr.network python[2656200]: 2026-11-11 14:13:48,331 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCqFMzb-4AUf6WAIbl132QKA "HTTP/1.1 200 OK"
Nov 11 14:13:48 impressed-jade.ptr.network python[2656200]: 2026-11-11 14:13:48,343 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCwJ3S2Ix7aI1BhHexDJlmEg "HTTP/1.1 200 OK"
Nov 11 14:13:48 impressed-jade.ptr.network python[2656200]: 2026-11-11 14:13:48,356 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCTv-XvfzLX3i4IGWAm4sbmA "HTTP/1.1 200 OK"
Nov 11 14:13:48 impressed-jade.ptr.network python[2656200]: 2026-11-11 14:13:48,437 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCxfPjORdISQSn2fV8tcVmgA "HTTP/1.1 200 OK"
Nov 11 14:13:48 impressed-jade.ptr.network python[2656200]: 2026-11-11 14:13:48,450 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCQsH5XtIc9hONE1BQjucM0g "HTTP/1.1 200 OK"
Nov 11 14:13:48 impressed-jade.ptr.network python[2656200]: 2026-11-11 14:13:48,474 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC6UL29enLNe4mqwTfAyeNuw "HTTP/1.1 200 OK"
Nov 11 14:13:48 impressed-jade.ptr.network python[2656200]: 2026-11-11 14:13:48,498 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpryVRk_VDudG8SHXgWcG0w "HTTP/1.1 200 OK"
Nov 11 14:13:48 impressed-jade.ptr.network python[2656200]: 2026-11-11 14:13:48,586 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCyGa1YEx9ST66rYrJTGIKOw "HTTP/1.1 200 OK"
Nov 11 14:13:48 impressed-jade.ptr.network python[2656200]: 2026-11-11 14:13:48,742 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 14:13:48 impressed-jade.ptr.network python[2656200]: 2026-11-11 14:13:48,936 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 14:13:49 impressed-jade.ptr.network python[2656200]: 2026-11-11 14:13:49,418 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 14:13:59 impressed-jade.ptr.network python[2656200]: 2026-11-11 14:13:59,693 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 14:14:00 impressed-jade.ptr.network python[2656200]: 2026-11-11 14:14:00,328 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 14:14:00 impressed-jade.ptr.network python[2656200]: 2026-11-11 14:14:00,954 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 14:14:01 impressed-jade.ptr.network python[2656200]: 2026-11-11 14:14:01,582 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 14:14:02 impressed-jade.ptr.network python[2656200]: 2026-11-11 14:14:02,216 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 14:14:02 impressed-jade.ptr.network python[2656200]: 2026-11-11 14:14:02,836 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 14:14:13 impressed-jade.ptr.network python[2656200]: 2026-11-11 14:14:13,606 INFO HTTP Request: GET https://www.maxbet.rs/live/init/sr "HTTP/1.1 200 OK"
Nov 11 14:14:13 impressed-jade.ptr.network python[2656200]: 2026-11-11 14:14:13,850 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 14:14:14 impressed-jade.ptr.network python[2656200]: 2026-11-11 14:14:14,485 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 14:14:15 impressed-jade.ptr.network python[2656200]: 2026-11-11 14:14:15,114 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
--- api log ---
Nov 11 14:13:43 impressed-jade.ptr.network uvicorn[2656205]: INFO:     Started server process [2656205]
Nov 11 14:13:43 impressed-jade.ptr.network uvicorn[2656205]: INFO:     Waiting for application startup.
Nov 11 14:13:44 impressed-jade.ptr.network uvicorn[2656206]: INFO:     Started server process [2656206]
Nov 11 14:13:44 impressed-jade.ptr.network uvicorn[2656206]: INFO:     Waiting for application startup.
Nov 11 14:13:44 impressed-jade.ptr.network uvicorn[2656206]: INFO:     Application startup complete.
Nov 11 14:13:44 impressed-jade.ptr.network uvicorn[2656205]: INFO:     Application startup complete.
Nov 11 14:13:44 impressed-jade.ptr.network uvicorn[2656206]: INFO:     109.92.227.130:0 - "GET /api/matches/1814/center HTTP/1.0" 200 OK
Nov 11 14:13:44 impressed-jade.ptr.network uvicorn[2656205]: INFO:     109.92.227.130:0 - "GET /api/matches/1814 HTTP/1.0" 200 OK
Nov 11 14:13:48 impressed-jade.ptr.network uvicorn[2656205]: INFO:     109.92.227.130:0 - "GET /api/sports?tz=180 HTTP/1.0" 200 OK
Nov 11 14:13:48 impressed-jade.ptr.network uvicorn[2656205]: INFO:     109.92.227.130:0 - "GET /api/matches?day=today&sport=all&serbian=false&tz=180 HTTP/1.0" 200 OK
Nov 11 14:13:57 impressed-jade.ptr.network uvicorn[2656205]: INFO:     109.92.227.130:0 - "GET /api/me/watch?ids= HTTP/1.0" 200 OK
Nov 11 14:14:14 impressed-jade.ptr.network uvicorn[2656205]: INFO:     127.0.0.1:52268 - "GET /api/health HTTP/1.1" 200 OK
Nov 11 14:14:14 impressed-jade.ptr.network uvicorn[2656205]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 14:14:14 impressed-jade.ptr.network uvicorn[2656205]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 14:14:14 impressed-jade.ptr.network uvicorn[2656205]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
