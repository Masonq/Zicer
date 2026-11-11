# Zicer deploy 2026-11-11 09:19 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: 58426b0 Деплой: проверка воркера ждёт его запуска до 30 с

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
2026/11/11 12:18:56 [warn] 2503152#2503152: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/11 12:18:56 [warn] 2503152#2503152: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/11 12:18:56 [warn] 2503152#2503152: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/11 12:18:56 [warn] 2503152#2503152: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/11 12:18:56 [warn] 2503152#2503152: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/11 12:18:56 [warn] 2503152#2503152: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
finish_stale | 2026-11-11 09:17:58.386557 | finished 0 | 
maxbet_results | 2026-11-11 09:18:00.143676 | no pending | 
other_results | 2026-11-11 09:18:00.151269 | no pending | 
football_live | 2026-11-11 09:18:29.592594 | live upserted 1 | 
live | 2026-11-11 09:18:30.073152 | live updated 0 | 
football | 2026-11-11 09:18:50.340623 | football upserted 97 |  "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
basketball | 2026-11-11 09:18:52.280520 | basketball upserted 414 | 
basketball_week | 2026-11-11 09:18:53.146470 | nba week upserted 48 | 
other_sports | 2026-11-11 09:18:53.814236 | other sports new 0 | 
backfill | 2026-11-11 09:18:53.822007 | already | 
logos | 2026-11-11 09:18:53.911295 | logos: nothing to do | 
highlights | 2026-11-11 09:18:54.668358 | highlights +0 | 
odds | 2026-11-11 09:18:55.633263 | odds matched 69 | 
settle | 2026-11-11 09:18:55.685909 | settled 0 | 
xfeed | 2026-11-11 09:19:18.616735 | xfeed games 139, linked 0, updated 0 | 
tg_poll | 2026-11-11 09:19:18.622211 | no token | 
names | 2026-11-11 09:12:01.505529 | names 0 | 
tg_reminders | 2026-11-11 09:12:02.094327 | no token | 
trends | 2026-11-10 23:36:09.974574 | trends 11 | 
analysis | 2026-11-10 23:36:10.199323 | analysis 27 | 
--- worker log ---
Nov 11 12:18:54 impressed-jade.ptr.network python[2502816]: 2026-11-11 12:18:54,307 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC-2Cj6KlR9rCfR28zNLmOTA "HTTP/1.1 200 OK"
Nov 11 12:18:54 impressed-jade.ptr.network python[2502816]: 2026-11-11 12:18:54,318 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCWJ2lWNubArHWmf3FIHbfcQ "HTTP/1.1 200 OK"
Nov 11 12:18:54 impressed-jade.ptr.network python[2502816]: 2026-11-11 12:18:54,334 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCqFMzb-4AUf6WAIbl132QKA "HTTP/1.1 200 OK"
Nov 11 12:18:54 impressed-jade.ptr.network python[2502816]: 2026-11-11 12:18:54,437 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCwJ3S2Ix7aI1BhHexDJlmEg "HTTP/1.1 200 OK"
Nov 11 12:18:54 impressed-jade.ptr.network python[2502816]: 2026-11-11 12:18:54,448 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCTv-XvfzLX3i4IGWAm4sbmA "HTTP/1.1 200 OK"
Nov 11 12:18:54 impressed-jade.ptr.network python[2502816]: 2026-11-11 12:18:54,514 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCxfPjORdISQSn2fV8tcVmgA "HTTP/1.1 200 OK"
Nov 11 12:18:54 impressed-jade.ptr.network python[2502816]: 2026-11-11 12:18:54,528 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCQsH5XtIc9hONE1BQjucM0g "HTTP/1.1 200 OK"
Nov 11 12:18:54 impressed-jade.ptr.network python[2502816]: 2026-11-11 12:18:54,553 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC6UL29enLNe4mqwTfAyeNuw "HTTP/1.1 200 OK"
Nov 11 12:18:54 impressed-jade.ptr.network python[2502816]: 2026-11-11 12:18:54,618 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpryVRk_VDudG8SHXgWcG0w "HTTP/1.1 200 OK"
Nov 11 12:18:54 impressed-jade.ptr.network python[2502816]: 2026-11-11 12:18:54,640 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCyGa1YEx9ST66rYrJTGIKOw "HTTP/1.1 200 OK"
Nov 11 12:18:54 impressed-jade.ptr.network python[2502816]: 2026-11-11 12:18:54,860 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 12:18:55 impressed-jade.ptr.network python[2502816]: 2026-11-11 12:18:55,021 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 12:18:55 impressed-jade.ptr.network python[2502816]: 2026-11-11 12:18:55,475 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 12:19:05 impressed-jade.ptr.network python[2502816]: 2026-11-11 12:19:05,795 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 12:19:06 impressed-jade.ptr.network python[2502816]: 2026-11-11 12:19:06,423 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 12:19:07 impressed-jade.ptr.network python[2502816]: 2026-11-11 12:19:07,265 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 12:19:07 impressed-jade.ptr.network python[2502816]: 2026-11-11 12:19:07,898 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 12:19:08 impressed-jade.ptr.network python[2502816]: 2026-11-11 12:19:08,523 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 12:19:09 impressed-jade.ptr.network python[2502816]: 2026-11-11 12:19:09,142 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 12:19:14 impressed-jade.ptr.network python[2502816]: 2026-11-11 12:19:14,864 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 12:19:15 impressed-jade.ptr.network python[2502816]: 2026-11-11 12:19:15,499 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 12:19:16 impressed-jade.ptr.network python[2502816]: 2026-11-11 12:19:16,124 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 12:19:16 impressed-jade.ptr.network python[2502816]: 2026-11-11 12:19:16,758 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 12:19:17 impressed-jade.ptr.network python[2502816]: 2026-11-11 12:19:17,387 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 12:19:18 impressed-jade.ptr.network python[2502816]: 2026-11-11 12:19:18,007 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
--- api log ---
Nov 11 12:18:47 impressed-jade.ptr.network systemd[1]: Stopped zicer-api.service - Zicer API.
Nov 11 12:18:47 impressed-jade.ptr.network systemd[1]: zicer-api.service: Consumed 3.915s CPU time, 166.7M memory peak, 0B memory swap peak.
Nov 11 12:18:47 impressed-jade.ptr.network systemd[1]: Started zicer-api.service - Zicer API.
Nov 11 12:18:48 impressed-jade.ptr.network uvicorn[2502818]: INFO:     Uvicorn running on http://127.0.0.1:8790 (Press CTRL+C to quit)
Nov 11 12:18:48 impressed-jade.ptr.network uvicorn[2502818]: INFO:     Started parent process [2502818]
Nov 11 12:18:49 impressed-jade.ptr.network uvicorn[2502861]: INFO:     Started server process [2502861]
Nov 11 12:18:49 impressed-jade.ptr.network uvicorn[2502861]: INFO:     Waiting for application startup.
Nov 11 12:18:49 impressed-jade.ptr.network uvicorn[2502860]: INFO:     Started server process [2502860]
Nov 11 12:18:49 impressed-jade.ptr.network uvicorn[2502860]: INFO:     Waiting for application startup.
Nov 11 12:18:49 impressed-jade.ptr.network uvicorn[2502861]: INFO:     Application startup complete.
Nov 11 12:18:50 impressed-jade.ptr.network uvicorn[2502860]: INFO:     Application startup complete.
Nov 11 12:19:20 impressed-jade.ptr.network uvicorn[2502860]: INFO:     127.0.0.1:47172 - "GET /api/health HTTP/1.1" 200 OK
Nov 11 12:19:20 impressed-jade.ptr.network uvicorn[2502860]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 12:19:20 impressed-jade.ptr.network uvicorn[2502860]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 12:19:21 impressed-jade.ptr.network uvicorn[2502861]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
