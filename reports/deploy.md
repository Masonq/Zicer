# Zicer deploy 2026-11-11 10:13 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: 437d049 «Матч дня»: убрана растянутая разметка; фон — крупные полупрозрачные эмблемы обеих команд по краям и диагональный раздел, как на карточках матчей у букмекеров

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
2026/11/11 13:13:17 [warn] 2576414#2576414: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/11 13:13:17 [warn] 2576414#2576414: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/11 13:13:17 [warn] 2576414#2576414: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/11 13:13:17 [warn] 2576414#2576414: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/11 13:13:17 [warn] 2576414#2576414: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/11 13:13:17 [warn] 2576414#2576414: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
matches: {'basketball': 702, 'football': 1100, 'hockey': 46, 'tennis': 23, 'volleyball': 29, 'waterpolo': 4}
names | 2026-11-11 10:12:51.382654 | names 0 | 
tg_reminders | 2026-11-11 10:12:51.478892 | no token | 
tg_poll | 2026-11-11 10:13:00.679780 | no token | 
football_live | 2026-11-11 10:13:05.778626 | live upserted 1 | 
finish_stale | 2026-11-11 10:13:05.793060 | finished 0 | 
football | 2026-11-11 10:13:11.274985 | football upserted 97 |  "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
basketball | 2026-11-11 10:13:13.936086 | basketball upserted 414 | 
basketball_week | 2026-11-11 10:13:14.909055 | nba week upserted 48 | 
other_sports | 2026-11-11 10:13:15.356117 | other sports new 0 | 
backfill | 2026-11-11 10:13:15.362836 | already | 
logos | 2026-11-11 10:13:15.453728 | logos: nothing to do | 
highlights | 2026-11-11 10:13:16.300998 | highlights +0 | 
odds | 2026-11-11 10:13:17.908414 | odds matched 69 | 
settle | 2026-11-11 10:13:17.976017 | settled 0 | 
xfeed | 2026-11-11 10:13:31.907927 | xfeed games 164, linked 0, updated 2 | 
live | 2026-11-11 10:13:42.221746 | live updated 2 | 
maxbet_results | 2026-11-11 10:10:52.566376 | no pending | 
other_results | 2026-11-11 10:10:54.544667 | other results 2 | 
trends | 2026-11-10 23:36:09.974574 | trends 11 | 
analysis | 2026-11-10 23:36:10.199323 | analysis 27 | 
--- worker log ---
Nov 11 13:13:15 impressed-jade.ptr.network python[2576114]: 2026-11-11 13:13:15,586 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpFqOv5z4WKps64GlQS4ytw "HTTP/1.1 200 OK"
Nov 11 13:13:15 impressed-jade.ptr.network python[2576114]: 2026-11-11 13:13:15,709 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC-2Cj6KlR9rCfR28zNLmOTA "HTTP/1.1 200 OK"
Nov 11 13:13:15 impressed-jade.ptr.network python[2576114]: 2026-11-11 13:13:15,788 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCWJ2lWNubArHWmf3FIHbfcQ "HTTP/1.1 200 OK"
Nov 11 13:13:15 impressed-jade.ptr.network python[2576114]: 2026-11-11 13:13:15,812 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCqFMzb-4AUf6WAIbl132QKA "HTTP/1.1 200 OK"
Nov 11 13:13:15 impressed-jade.ptr.network python[2576114]: 2026-11-11 13:13:15,895 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCwJ3S2Ix7aI1BhHexDJlmEg "HTTP/1.1 200 OK"
Nov 11 13:13:15 impressed-jade.ptr.network python[2576114]: 2026-11-11 13:13:15,910 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCTv-XvfzLX3i4IGWAm4sbmA "HTTP/1.1 200 OK"
Nov 11 13:13:16 impressed-jade.ptr.network python[2576114]: 2026-11-11 13:13:16,017 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCxfPjORdISQSn2fV8tcVmgA "HTTP/1.1 200 OK"
Nov 11 13:13:16 impressed-jade.ptr.network python[2576114]: 2026-11-11 13:13:16,076 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCQsH5XtIc9hONE1BQjucM0g "HTTP/1.1 200 OK"
Nov 11 13:13:16 impressed-jade.ptr.network python[2576114]: 2026-11-11 13:13:16,181 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC6UL29enLNe4mqwTfAyeNuw "HTTP/1.1 200 OK"
Nov 11 13:13:16 impressed-jade.ptr.network python[2576114]: 2026-11-11 13:13:16,219 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpryVRk_VDudG8SHXgWcG0w "HTTP/1.1 200 OK"
Nov 11 13:13:16 impressed-jade.ptr.network python[2576114]: 2026-11-11 13:13:16,261 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCyGa1YEx9ST66rYrJTGIKOw "HTTP/1.1 200 OK"
Nov 11 13:13:16 impressed-jade.ptr.network python[2576114]: 2026-11-11 13:13:16,470 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 13:13:16 impressed-jade.ptr.network python[2576114]: 2026-11-11 13:13:16,676 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 13:13:17 impressed-jade.ptr.network python[2576114]: 2026-11-11 13:13:17,660 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 13:13:28 impressed-jade.ptr.network python[2576114]: 2026-11-11 13:13:28,111 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 13:13:28 impressed-jade.ptr.network python[2576114]: 2026-11-11 13:13:28,744 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 13:13:29 impressed-jade.ptr.network python[2576114]: 2026-11-11 13:13:29,374 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 13:13:30 impressed-jade.ptr.network python[2576114]: 2026-11-11 13:13:30,009 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 13:13:30 impressed-jade.ptr.network python[2576114]: 2026-11-11 13:13:30,640 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 13:13:31 impressed-jade.ptr.network python[2576114]: 2026-11-11 13:13:31,265 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 13:13:42 impressed-jade.ptr.network python[2576114]: 2026-11-11 13:13:42,053 INFO HTTP Request: GET https://www.maxbet.rs/live/init/sr "HTTP/1.1 200 OK"
Nov 11 13:13:42 impressed-jade.ptr.network python[2576114]: 2026-11-11 13:13:42,352 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 13:13:42 impressed-jade.ptr.network python[2576114]: 2026-11-11 13:13:42,988 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 13:13:43 impressed-jade.ptr.network python[2576114]: 2026-11-11 13:13:43,617 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 13:13:44 impressed-jade.ptr.network python[2576114]: 2026-11-11 13:13:44,255 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
--- api log ---
Nov 11 13:13:08 impressed-jade.ptr.network systemd[1]: zicer-api.service: Consumed 3.718s CPU time, 171.3M memory peak, 0B memory swap peak.
Nov 11 13:13:08 impressed-jade.ptr.network systemd[1]: Started zicer-api.service - Zicer API.
Nov 11 13:13:08 impressed-jade.ptr.network uvicorn[2576117]: INFO:     Uvicorn running on http://127.0.0.1:8790 (Press CTRL+C to quit)
Nov 11 13:13:08 impressed-jade.ptr.network uvicorn[2576117]: INFO:     Started parent process [2576117]
Nov 11 13:13:11 impressed-jade.ptr.network uvicorn[2576122]: INFO:     Started server process [2576122]
Nov 11 13:13:11 impressed-jade.ptr.network uvicorn[2576122]: INFO:     Waiting for application startup.
Nov 11 13:13:12 impressed-jade.ptr.network uvicorn[2576121]: INFO:     Started server process [2576121]
Nov 11 13:13:12 impressed-jade.ptr.network uvicorn[2576121]: INFO:     Waiting for application startup.
Nov 11 13:13:13 impressed-jade.ptr.network uvicorn[2576122]: INFO:     Application startup complete.
Nov 11 13:13:13 impressed-jade.ptr.network uvicorn[2576121]: INFO:     Application startup complete.
Nov 11 13:13:21 impressed-jade.ptr.network uvicorn[2576121]: INFO:     109.92.227.130:0 - "GET /api/matches/1869 HTTP/1.0" 200 OK
Nov 11 13:13:42 impressed-jade.ptr.network uvicorn[2576122]: INFO:     127.0.0.1:50772 - "GET /api/health HTTP/1.1" 200 OK
Nov 11 13:13:42 impressed-jade.ptr.network uvicorn[2576121]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 13:13:42 impressed-jade.ptr.network uvicorn[2576121]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 13:13:43 impressed-jade.ptr.network uvicorn[2576121]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
