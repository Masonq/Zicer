# Zicer deploy 2026-11-11 14:20 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: fcfe3aa Разовая проверка: какие виды спорта отдают MaxBet и 22Bet с сервера (в reports/probe.md)

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
2026/11/11 17:19:51 [warn] 2906040#2906040: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/11 17:19:51 [warn] 2906040#2906040: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/11 17:19:51 [warn] 2906040#2906040: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/11 17:19:51 [warn] 2906040#2906040: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/11 17:19:51 [warn] 2906040#2906040: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/11 17:19:51 [warn] 2906040#2906040: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
matches: {'basketball': 707, 'waterpolo': 7, 'tennis': 23, 'hockey': 52, 'volleyball': 33, 'football': 1100}
xfeed | 2026-11-11 14:20:12.668452 | xfeed games 149, linked 0, updated 3 | 
tg_poll | 2026-11-11 14:20:12.671011 | no token | 
social | 2026-11-11 14:17:33.470340 | social nothing due (test) | 
tg_reminders | 2026-11-11 14:18:28.899086 | no token | 
names | 2026-11-11 14:18:29.041980 | names 0 | 
trends | 2026-11-10 23:36:09.974574 | trends 11 | 
finish_stale | 2026-11-11 14:18:52.270566 | finished 0 | 
analysis | 2026-11-10 23:36:10.199323 | analysis 27 | 
live | 2026-11-11 14:19:11.680427 | live updated 3 | 
football_live | 2026-11-11 14:19:20.620029 | live upserted 0 | 
maxbet_results | 2026-11-11 14:19:31.750854 | no pending | 
other_results | 2026-11-11 14:19:36.098480 | other results 3 | 
basketball | 2026-11-11 14:19:46.526820 | basketball upserted 414 | 
basketball_week | 2026-11-11 14:19:47.029109 | nba week upserted 48 | 
other_sports | 2026-11-11 14:19:47.503496 | other sports new 0 | 
backfill | 2026-11-11 14:19:47.507199 | already | 
logos | 2026-11-11 14:19:47.592977 | logos: nothing to do | 
highlights | 2026-11-11 14:19:47.849450 | highlights +0 | 
odds | 2026-11-11 14:19:49.329180 | odds matched 72 | 
settle | 2026-11-11 14:19:49.359383 | settled 0 | 
football | 2026-11-11 14:19:44.613556 | football upserted 96 |  "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
--- worker log ---
Nov 11 17:19:47 impressed-jade.ptr.network python[2905708]: 2026-11-11 17:19:47,678 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC-2Cj6KlR9rCfR28zNLmOTA "HTTP/1.1 200 OK"
Nov 11 17:19:47 impressed-jade.ptr.network python[2905708]: 2026-11-11 17:19:47,688 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCWJ2lWNubArHWmf3FIHbfcQ "HTTP/1.1 200 OK"
Nov 11 17:19:47 impressed-jade.ptr.network python[2905708]: 2026-11-11 17:19:47,702 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCqFMzb-4AUf6WAIbl132QKA "HTTP/1.1 200 OK"
Nov 11 17:19:47 impressed-jade.ptr.network python[2905708]: 2026-11-11 17:19:47,714 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCwJ3S2Ix7aI1BhHexDJlmEg "HTTP/1.1 200 OK"
Nov 11 17:19:47 impressed-jade.ptr.network python[2905708]: 2026-11-11 17:19:47,728 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCTv-XvfzLX3i4IGWAm4sbmA "HTTP/1.1 200 OK"
Nov 11 17:19:47 impressed-jade.ptr.network python[2905708]: 2026-11-11 17:19:47,752 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCxfPjORdISQSn2fV8tcVmgA "HTTP/1.1 200 OK"
Nov 11 17:19:47 impressed-jade.ptr.network python[2905708]: 2026-11-11 17:19:47,765 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCQsH5XtIc9hONE1BQjucM0g "HTTP/1.1 200 OK"
Nov 11 17:19:47 impressed-jade.ptr.network python[2905708]: 2026-11-11 17:19:47,789 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC6UL29enLNe4mqwTfAyeNuw "HTTP/1.1 200 OK"
Nov 11 17:19:47 impressed-jade.ptr.network python[2905708]: 2026-11-11 17:19:47,808 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpryVRk_VDudG8SHXgWcG0w "HTTP/1.1 200 OK"
Nov 11 17:19:47 impressed-jade.ptr.network python[2905708]: 2026-11-11 17:19:47,828 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCyGa1YEx9ST66rYrJTGIKOw "HTTP/1.1 200 OK"
Nov 11 17:19:48 impressed-jade.ptr.network python[2905708]: 2026-11-11 17:19:48,271 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 17:19:48 impressed-jade.ptr.network python[2905708]: 2026-11-11 17:19:48,699 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 17:19:49 impressed-jade.ptr.network python[2905708]: 2026-11-11 17:19:49,171 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 17:19:59 impressed-jade.ptr.network python[2905708]: 2026-11-11 17:19:59,698 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 17:20:00 impressed-jade.ptr.network python[2905708]: 2026-11-11 17:20:00,332 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 17:20:00 impressed-jade.ptr.network python[2905708]: 2026-11-11 17:20:00,962 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 17:20:01 impressed-jade.ptr.network python[2905708]: 2026-11-11 17:20:01,607 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 17:20:02 impressed-jade.ptr.network python[2905708]: 2026-11-11 17:20:02,238 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 17:20:02 impressed-jade.ptr.network python[2905708]: 2026-11-11 17:20:02,858 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 17:20:08 impressed-jade.ptr.network python[2905708]: 2026-11-11 17:20:08,866 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 17:20:09 impressed-jade.ptr.network python[2905708]: 2026-11-11 17:20:09,499 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 17:20:10 impressed-jade.ptr.network python[2905708]: 2026-11-11 17:20:10,142 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 17:20:10 impressed-jade.ptr.network python[2905708]: 2026-11-11 17:20:10,793 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 17:20:11 impressed-jade.ptr.network python[2905708]: 2026-11-11 17:20:11,429 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 17:20:12 impressed-jade.ptr.network python[2905708]: 2026-11-11 17:20:12,056 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
--- api log ---
Nov 11 17:19:42 impressed-jade.ptr.network systemd[1]: Started zicer-api.service - Zicer API.
Nov 11 17:19:42 impressed-jade.ptr.network uvicorn[2905730]: INFO:     Uvicorn running on http://127.0.0.1:8790 (Press CTRL+C to quit)
Nov 11 17:19:42 impressed-jade.ptr.network uvicorn[2905730]: INFO:     Started parent process [2905730]
Nov 11 17:19:43 impressed-jade.ptr.network uvicorn[2905735]: INFO:     Started server process [2905735]
Nov 11 17:19:43 impressed-jade.ptr.network uvicorn[2905735]: INFO:     Waiting for application startup.
Nov 11 17:19:44 impressed-jade.ptr.network uvicorn[2905734]: INFO:     Started server process [2905734]
Nov 11 17:19:44 impressed-jade.ptr.network uvicorn[2905734]: INFO:     Waiting for application startup.
Nov 11 17:19:44 impressed-jade.ptr.network uvicorn[2905735]: INFO:     Application startup complete.
Nov 11 17:19:44 impressed-jade.ptr.network uvicorn[2905734]: INFO:     Application startup complete.
Nov 11 17:19:58 impressed-jade.ptr.network uvicorn[2905734]: INFO:     109.92.227.130:0 - "GET /api/me/watch?ids= HTTP/1.0" 200 OK
Nov 11 17:20:06 impressed-jade.ptr.network uvicorn[2905734]: INFO:     109.92.227.130:0 - "GET /api/home?tz=180&sport=all HTTP/1.0" 200 OK
Nov 11 17:20:15 impressed-jade.ptr.network uvicorn[2905734]: INFO:     127.0.0.1:57186 - "GET /api/health HTTP/1.1" 200 OK
Nov 11 17:20:15 impressed-jade.ptr.network uvicorn[2905734]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 17:20:15 impressed-jade.ptr.network uvicorn[2905734]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 17:20:16 impressed-jade.ptr.network uvicorn[2905734]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
