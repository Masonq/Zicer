# Zicer deploy 2026-11-11 11:40 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: ad9af0e Телефон и десктоп: «К лайву» только внутри закреплённой полосы лиги (не перекрывает матчи ни при какой ширине); мячи в WebP с запасным вариантом; админка на телефоне — без дубля заголовка, график активности без точек-заглушек и с редкими подписями; горячие матчи по времени начала; автообновление вкладок после каждого деплоя

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
2026/11/11 14:40:24 [warn] 2692704#2692704: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/11 14:40:24 [warn] 2692704#2692704: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/11 14:40:24 [warn] 2692704#2692704: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/11 14:40:24 [warn] 2692704#2692704: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/11 14:40:24 [warn] 2692704#2692704: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/11 14:40:24 [warn] 2692704#2692704: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
tg_poll | 2026-11-11 11:40:05.141738 | no token | 
football_live | 2026-11-11 11:40:10.265103 | live upserted 1 | 
basketball | 2026-11-11 11:40:21.406385 | basketball upserted 414 | 
basketball_week | 2026-11-11 11:40:22.448410 | nba week upserted 48 | 
other_sports | 2026-11-11 11:40:22.929988 | other sports new 0 | 
backfill | 2026-11-11 11:40:22.945248 | already | 
logos | 2026-11-11 11:40:23.103552 | logos: nothing to do | 
highlights | 2026-11-11 11:40:23.843582 | highlights +0 | 
odds | 2026-11-11 11:40:25.221327 | odds matched 71 | 
settle | 2026-11-11 11:40:25.310064 | settled 0 | 
xfeed | 2026-11-11 11:40:39.200789 | xfeed games 189, linked 0, updated 1 | 
live | 2026-11-11 11:40:49.501308 | live updated 1 | 
tg_reminders | 2026-11-11 11:37:09.580510 | no token | 
names | 2026-11-11 11:37:09.745775 | names 0 | 
maxbet_results | 2026-11-11 11:38:11.898326 | no pending | 
other_results | 2026-11-11 11:38:13.410342 | other results 2 | 
trends | 2026-11-10 23:36:09.974574 | trends 11 | 
analysis | 2026-11-10 23:36:10.199323 | analysis 27 | 
finish_stale | 2026-11-11 11:39:32.716783 | finished 0 | 
football | 2026-11-11 11:40:19.226137 | football upserted 97 |  "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
--- worker log ---
Nov 11 14:40:22 impressed-jade.ptr.network python[2692377]: 2026-11-11 14:40:22,913 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/W/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 14:40:23 impressed-jade.ptr.network python[2692377]: 2026-11-11 14:40:23,264 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpFqOv5z4WKps64GlQS4ytw "HTTP/1.1 200 OK"
Nov 11 14:40:23 impressed-jade.ptr.network python[2692377]: 2026-11-11 14:40:23,323 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC-2Cj6KlR9rCfR28zNLmOTA "HTTP/1.1 200 OK"
Nov 11 14:40:23 impressed-jade.ptr.network python[2692377]: 2026-11-11 14:40:23,405 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCWJ2lWNubArHWmf3FIHbfcQ "HTTP/1.1 200 OK"
Nov 11 14:40:23 impressed-jade.ptr.network python[2692377]: 2026-11-11 14:40:23,424 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCqFMzb-4AUf6WAIbl132QKA "HTTP/1.1 200 OK"
Nov 11 14:40:23 impressed-jade.ptr.network python[2692377]: 2026-11-11 14:40:23,440 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCwJ3S2Ix7aI1BhHexDJlmEg "HTTP/1.1 200 OK"
Nov 11 14:40:23 impressed-jade.ptr.network python[2692377]: 2026-11-11 14:40:23,456 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCTv-XvfzLX3i4IGWAm4sbmA "HTTP/1.1 200 OK"
Nov 11 14:40:23 impressed-jade.ptr.network python[2692377]: 2026-11-11 14:40:23,539 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCxfPjORdISQSn2fV8tcVmgA "HTTP/1.1 200 OK"
Nov 11 14:40:23 impressed-jade.ptr.network python[2692377]: 2026-11-11 14:40:23,557 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCQsH5XtIc9hONE1BQjucM0g "HTTP/1.1 200 OK"
Nov 11 14:40:23 impressed-jade.ptr.network python[2692377]: 2026-11-11 14:40:23,594 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC6UL29enLNe4mqwTfAyeNuw "HTTP/1.1 200 OK"
Nov 11 14:40:23 impressed-jade.ptr.network python[2692377]: 2026-11-11 14:40:23,793 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpryVRk_VDudG8SHXgWcG0w "HTTP/1.1 200 OK"
Nov 11 14:40:23 impressed-jade.ptr.network python[2692377]: 2026-11-11 14:40:23,816 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCyGa1YEx9ST66rYrJTGIKOw "HTTP/1.1 200 OK"
Nov 11 14:40:23 impressed-jade.ptr.network python[2692377]: 2026-11-11 14:40:23,969 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 14:40:24 impressed-jade.ptr.network python[2692377]: 2026-11-11 14:40:24,178 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 14:40:24 impressed-jade.ptr.network python[2692377]: 2026-11-11 14:40:24,951 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 14:40:35 impressed-jade.ptr.network python[2692377]: 2026-11-11 14:40:35,427 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 14:40:36 impressed-jade.ptr.network python[2692377]: 2026-11-11 14:40:36,065 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 14:40:36 impressed-jade.ptr.network python[2692377]: 2026-11-11 14:40:36,693 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 14:40:37 impressed-jade.ptr.network python[2692377]: 2026-11-11 14:40:37,324 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 14:40:37 impressed-jade.ptr.network python[2692377]: 2026-11-11 14:40:37,949 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 14:40:38 impressed-jade.ptr.network python[2692377]: 2026-11-11 14:40:38,571 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 14:40:49 impressed-jade.ptr.network python[2692377]: 2026-11-11 14:40:49,352 INFO HTTP Request: GET https://www.maxbet.rs/live/init/sr "HTTP/1.1 200 OK"
Nov 11 14:40:49 impressed-jade.ptr.network python[2692377]: 2026-11-11 14:40:49,617 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 14:40:50 impressed-jade.ptr.network python[2692377]: 2026-11-11 14:40:50,253 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 14:40:50 impressed-jade.ptr.network python[2692377]: 2026-11-11 14:40:50,880 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
--- api log ---
Nov 11 14:40:15 impressed-jade.ptr.network systemd[1]: zicer-api.service: Consumed 11.292s CPU time, 193.5M memory peak, 13.4M memory swap peak.
Nov 11 14:40:15 impressed-jade.ptr.network systemd[1]: Started zicer-api.service - Zicer API.
Nov 11 14:40:16 impressed-jade.ptr.network uvicorn[2692381]: INFO:     Uvicorn running on http://127.0.0.1:8790 (Press CTRL+C to quit)
Nov 11 14:40:16 impressed-jade.ptr.network uvicorn[2692381]: INFO:     Started parent process [2692381]
Nov 11 14:40:19 impressed-jade.ptr.network uvicorn[2692385]: INFO:     Started server process [2692385]
Nov 11 14:40:19 impressed-jade.ptr.network uvicorn[2692385]: INFO:     Waiting for application startup.
Nov 11 14:40:19 impressed-jade.ptr.network uvicorn[2692384]: INFO:     Started server process [2692384]
Nov 11 14:40:19 impressed-jade.ptr.network uvicorn[2692384]: INFO:     Waiting for application startup.
Nov 11 14:40:20 impressed-jade.ptr.network uvicorn[2692385]: INFO:     Application startup complete.
Nov 11 14:40:20 impressed-jade.ptr.network uvicorn[2692384]: INFO:     Application startup complete.
Nov 11 14:40:29 impressed-jade.ptr.network uvicorn[2692384]: INFO:     109.92.227.130:0 - "GET /api/me/watch?ids= HTTP/1.0" 200 OK
Nov 11 14:40:49 impressed-jade.ptr.network uvicorn[2692384]: INFO:     127.0.0.1:43236 - "GET /api/health HTTP/1.1" 200 OK
Nov 11 14:40:49 impressed-jade.ptr.network uvicorn[2692384]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 14:40:50 impressed-jade.ptr.network uvicorn[2692385]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 14:40:50 impressed-jade.ptr.network uvicorn[2692384]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
