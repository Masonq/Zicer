# Zicer deploy 2026-11-11 12:49 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: 0f7a1fd Букмекеры: стандартный список заполняется только один раз, удалённые в админке больше не появляются после обновлений сервера

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
2026/11/11 15:48:45 [warn] 2784605#2784605: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/11 15:48:45 [warn] 2784605#2784605: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/11 15:48:45 [warn] 2784605#2784605: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/11 15:48:45 [warn] 2784605#2784605: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/11 15:48:45 [warn] 2784605#2784605: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/11 15:48:45 [warn] 2784605#2784605: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
tg_poll | 2026-11-11 12:48:05.843342 | no token | 
basketball | 2026-11-11 12:48:41.153185 | basketball upserted 414 | 
basketball_week | 2026-11-11 12:48:42.291007 | nba week upserted 48 | 
other_sports | 2026-11-11 12:48:42.722811 | other sports new 0 | 
backfill | 2026-11-11 12:48:42.726866 | already | 
logos | 2026-11-11 12:48:42.817489 | logos: nothing to do | 
highlights | 2026-11-11 12:48:43.568177 | highlights +0 | 
odds | 2026-11-11 12:48:44.471080 | odds matched 70 | 
settle | 2026-11-11 12:48:44.493641 | settled 0 | 
xfeed | 2026-11-11 12:48:58.407157 | xfeed games 180, linked 0, updated 1 | 
live | 2026-11-11 12:49:08.712261 | live updated 2 | 
names | 2026-11-11 12:45:09.330823 | names 0 | 
tg_reminders | 2026-11-11 12:45:09.590618 | no token | 
maxbet_results | 2026-11-11 12:46:12.100874 | no pending | 
other_results | 2026-11-11 12:46:14.368459 | other results 1 | 
trends | 2026-11-10 23:36:09.974574 | trends 11 | 
analysis | 2026-11-10 23:36:10.199323 | analysis 27 | 
finish_stale | 2026-11-11 12:47:24.655406 | finished 0 | 
football_live | 2026-11-11 12:47:47.784727 | live upserted 1 | 
football | 2026-11-11 12:48:39.328809 | football upserted 97 |  "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
--- worker log ---
Nov 11 15:48:42 impressed-jade.ptr.network python[2784274]: 2026-11-11 15:48:42,952 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpFqOv5z4WKps64GlQS4ytw "HTTP/1.1 200 OK"
Nov 11 15:48:43 impressed-jade.ptr.network python[2784274]: 2026-11-11 15:48:43,009 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC-2Cj6KlR9rCfR28zNLmOTA "HTTP/1.1 200 OK"
Nov 11 15:48:43 impressed-jade.ptr.network python[2784274]: 2026-11-11 15:48:43,018 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCWJ2lWNubArHWmf3FIHbfcQ "HTTP/1.1 200 OK"
Nov 11 15:48:43 impressed-jade.ptr.network python[2784274]: 2026-11-11 15:48:43,137 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCqFMzb-4AUf6WAIbl132QKA "HTTP/1.1 200 OK"
Nov 11 15:48:43 impressed-jade.ptr.network python[2784274]: 2026-11-11 15:48:43,217 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCwJ3S2Ix7aI1BhHexDJlmEg "HTTP/1.1 200 OK"
Nov 11 15:48:43 impressed-jade.ptr.network python[2784274]: 2026-11-11 15:48:43,279 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCTv-XvfzLX3i4IGWAm4sbmA "HTTP/1.1 200 OK"
Nov 11 15:48:43 impressed-jade.ptr.network python[2784274]: 2026-11-11 15:48:43,383 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCxfPjORdISQSn2fV8tcVmgA "HTTP/1.1 200 OK"
Nov 11 15:48:43 impressed-jade.ptr.network python[2784274]: 2026-11-11 15:48:43,439 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCQsH5XtIc9hONE1BQjucM0g "HTTP/1.1 200 OK"
Nov 11 15:48:43 impressed-jade.ptr.network python[2784274]: 2026-11-11 15:48:43,460 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC6UL29enLNe4mqwTfAyeNuw "HTTP/1.1 200 OK"
Nov 11 15:48:43 impressed-jade.ptr.network python[2784274]: 2026-11-11 15:48:43,526 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpryVRk_VDudG8SHXgWcG0w "HTTP/1.1 200 OK"
Nov 11 15:48:43 impressed-jade.ptr.network python[2784274]: 2026-11-11 15:48:43,547 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCyGa1YEx9ST66rYrJTGIKOw "HTTP/1.1 200 OK"
Nov 11 15:48:43 impressed-jade.ptr.network python[2784274]: 2026-11-11 15:48:43,705 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 15:48:43 impressed-jade.ptr.network python[2784274]: 2026-11-11 15:48:43,932 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 15:48:44 impressed-jade.ptr.network python[2784274]: 2026-11-11 15:48:44,365 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 15:48:54 impressed-jade.ptr.network python[2784274]: 2026-11-11 15:48:54,602 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 15:48:55 impressed-jade.ptr.network python[2784274]: 2026-11-11 15:48:55,232 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 15:48:55 impressed-jade.ptr.network python[2784274]: 2026-11-11 15:48:55,876 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 15:48:56 impressed-jade.ptr.network python[2784274]: 2026-11-11 15:48:56,509 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 15:48:57 impressed-jade.ptr.network python[2784274]: 2026-11-11 15:48:57,139 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 15:48:57 impressed-jade.ptr.network python[2784274]: 2026-11-11 15:48:57,764 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 15:49:08 impressed-jade.ptr.network python[2784274]: 2026-11-11 15:49:08,556 INFO HTTP Request: GET https://www.maxbet.rs/live/init/sr "HTTP/1.1 200 OK"
Nov 11 15:49:08 impressed-jade.ptr.network python[2784274]: 2026-11-11 15:49:08,813 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 15:49:09 impressed-jade.ptr.network python[2784274]: 2026-11-11 15:49:09,447 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 15:49:10 impressed-jade.ptr.network python[2784274]: 2026-11-11 15:49:10,076 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 15:49:10 impressed-jade.ptr.network python[2784274]: 2026-11-11 15:49:10,710 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
--- api log ---
Nov 11 15:48:36 impressed-jade.ptr.network systemd[1]: Started zicer-api.service - Zicer API.
Nov 11 15:48:37 impressed-jade.ptr.network uvicorn[2784276]: INFO:     Uvicorn running on http://127.0.0.1:8790 (Press CTRL+C to quit)
Nov 11 15:48:37 impressed-jade.ptr.network uvicorn[2784276]: INFO:     Started parent process [2784276]
Nov 11 15:48:38 impressed-jade.ptr.network uvicorn[2784299]: INFO:     Started server process [2784299]
Nov 11 15:48:38 impressed-jade.ptr.network uvicorn[2784299]: INFO:     Waiting for application startup.
Nov 11 15:48:39 impressed-jade.ptr.network uvicorn[2784298]: INFO:     Started server process [2784298]
Nov 11 15:48:39 impressed-jade.ptr.network uvicorn[2784298]: INFO:     Waiting for application startup.
Nov 11 15:48:39 impressed-jade.ptr.network uvicorn[2784299]: INFO:     Application startup complete.
Nov 11 15:48:39 impressed-jade.ptr.network uvicorn[2784298]: INFO:     Application startup complete.
Nov 11 15:48:45 impressed-jade.ptr.network uvicorn[2784299]: INFO:     109.92.227.130:0 - "GET /api/me/watch?ids= HTTP/1.0" 200 OK
Nov 11 15:49:05 impressed-jade.ptr.network uvicorn[2784298]: INFO:     109.92.227.130:0 - "GET /api/me/watch?ids= HTTP/1.0" 200 OK
Nov 11 15:49:09 impressed-jade.ptr.network uvicorn[2784298]: INFO:     127.0.0.1:41838 - "GET /api/health HTTP/1.1" 200 OK
Nov 11 15:49:09 impressed-jade.ptr.network uvicorn[2784298]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 15:49:09 impressed-jade.ptr.network uvicorn[2784298]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 15:49:09 impressed-jade.ptr.network uvicorn[2784298]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
