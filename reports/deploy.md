# Zicer deploy 2026-11-11 09:26 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: 3fc5cbd Иконки сайта на тёмно-зелёной плашке: логотип виден на белой вкладке браузера, в превью ссылок и на экране телефона; favicon.ico; сброс кэша иконок

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
2026/11/11 12:26:26 [warn] 2513245#2513245: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/11 12:26:26 [warn] 2513245#2513245: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/11 12:26:26 [warn] 2513245#2513245: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/11 12:26:26 [warn] 2513245#2513245: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/11 12:26:26 [warn] 2513245#2513245: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/11 12:26:26 [warn] 2513245#2513245: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
maxbet_results | 2026-11-11 09:25:08.964669 | no pending | 
other_results | 2026-11-11 09:25:08.974169 | no pending | 
finish_stale | 2026-11-11 09:25:19.336387 | finished 0 | 
football_live | 2026-11-11 09:25:38.262497 | live upserted 1 | 
tg_poll | 2026-11-11 09:25:56.257606 | no token | 
football | 2026-11-11 09:26:19.988960 | football upserted 97 |  "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
basketball | 2026-11-11 09:26:21.778952 | basketball upserted 414 | 
basketball_week | 2026-11-11 09:26:22.195275 | nba week upserted 48 | 
other_sports | 2026-11-11 09:26:22.559651 | other sports new 0 | 
backfill | 2026-11-11 09:26:22.565365 | already | 
logos | 2026-11-11 09:26:22.643026 | logos: nothing to do | 
highlights | 2026-11-11 09:26:23.115575 | highlights +0 | 
odds | 2026-11-11 09:26:24.516941 | odds matched 69 | 
settle | 2026-11-11 09:26:24.548394 | settled 0 | 
xfeed | 2026-11-11 09:26:38.399375 | xfeed games 129, linked 0, updated 0 | 
live | 2026-11-11 09:26:48.666774 | live updated 0 | 
trends | 2026-11-10 23:36:09.974574 | trends 11 | 
analysis | 2026-11-10 23:36:10.199323 | analysis 27 | 
names | 2026-11-11 09:23:57.603003 | names 0 | 
tg_reminders | 2026-11-11 09:23:58.026628 | no token | 
--- worker log ---
Nov 11 12:26:22 impressed-jade.ptr.network python[2512918]: 2026-11-11 12:26:22,849 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC-2Cj6KlR9rCfR28zNLmOTA "HTTP/1.1 200 OK"
Nov 11 12:26:22 impressed-jade.ptr.network python[2512918]: 2026-11-11 12:26:22,915 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCWJ2lWNubArHWmf3FIHbfcQ "HTTP/1.1 200 OK"
Nov 11 12:26:22 impressed-jade.ptr.network python[2512918]: 2026-11-11 12:26:22,929 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCqFMzb-4AUf6WAIbl132QKA "HTTP/1.1 200 OK"
Nov 11 12:26:22 impressed-jade.ptr.network python[2512918]: 2026-11-11 12:26:22,942 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCwJ3S2Ix7aI1BhHexDJlmEg "HTTP/1.1 200 OK"
Nov 11 12:26:22 impressed-jade.ptr.network python[2512918]: 2026-11-11 12:26:22,952 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCTv-XvfzLX3i4IGWAm4sbmA "HTTP/1.1 200 OK"
Nov 11 12:26:23 impressed-jade.ptr.network python[2512918]: 2026-11-11 12:26:23,016 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCxfPjORdISQSn2fV8tcVmgA "HTTP/1.1 200 OK"
Nov 11 12:26:23 impressed-jade.ptr.network python[2512918]: 2026-11-11 12:26:23,028 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCQsH5XtIc9hONE1BQjucM0g "HTTP/1.1 200 OK"
Nov 11 12:26:23 impressed-jade.ptr.network python[2512918]: 2026-11-11 12:26:23,050 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC6UL29enLNe4mqwTfAyeNuw "HTTP/1.1 200 OK"
Nov 11 12:26:23 impressed-jade.ptr.network python[2512918]: 2026-11-11 12:26:23,074 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpryVRk_VDudG8SHXgWcG0w "HTTP/1.1 200 OK"
Nov 11 12:26:23 impressed-jade.ptr.network python[2512918]: 2026-11-11 12:26:23,096 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCyGa1YEx9ST66rYrJTGIKOw "HTTP/1.1 200 OK"
Nov 11 12:26:23 impressed-jade.ptr.network python[2512918]: 2026-11-11 12:26:23,513 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 12:26:23 impressed-jade.ptr.network python[2512918]: 2026-11-11 12:26:23,923 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 12:26:24 impressed-jade.ptr.network python[2512918]: 2026-11-11 12:26:24,394 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 12:26:34 impressed-jade.ptr.network python[2512918]: 2026-11-11 12:26:34,654 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 12:26:35 impressed-jade.ptr.network python[2512918]: 2026-11-11 12:26:35,279 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 12:26:35 impressed-jade.ptr.network python[2512918]: 2026-11-11 12:26:35,907 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 12:26:36 impressed-jade.ptr.network python[2512918]: 2026-11-11 12:26:36,539 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 12:26:37 impressed-jade.ptr.network python[2512918]: 2026-11-11 12:26:37,164 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 12:26:37 impressed-jade.ptr.network python[2512918]: 2026-11-11 12:26:37,782 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 12:26:48 impressed-jade.ptr.network python[2512918]: 2026-11-11 12:26:48,552 INFO HTTP Request: GET https://www.maxbet.rs/live/init/sr "HTTP/1.1 200 OK"
Nov 11 12:26:48 impressed-jade.ptr.network python[2512918]: 2026-11-11 12:26:48,769 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 12:26:49 impressed-jade.ptr.network python[2512918]: 2026-11-11 12:26:49,393 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 12:26:50 impressed-jade.ptr.network python[2512918]: 2026-11-11 12:26:50,018 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 12:26:50 impressed-jade.ptr.network python[2512918]: 2026-11-11 12:26:50,650 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 12:26:51 impressed-jade.ptr.network python[2512918]: 2026-11-11 12:26:51,278 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
--- api log ---
Nov 11 12:26:17 impressed-jade.ptr.network systemd[1]: Started zicer-api.service - Zicer API.
Nov 11 12:26:17 impressed-jade.ptr.network uvicorn[2512920]: INFO:     Uvicorn running on http://127.0.0.1:8790 (Press CTRL+C to quit)
Nov 11 12:26:17 impressed-jade.ptr.network uvicorn[2512920]: INFO:     Started parent process [2512920]
Nov 11 12:26:19 impressed-jade.ptr.network uvicorn[2512924]: INFO:     Started server process [2512924]
Nov 11 12:26:19 impressed-jade.ptr.network uvicorn[2512924]: INFO:     Waiting for application startup.
Nov 11 12:26:19 impressed-jade.ptr.network uvicorn[2512923]: INFO:     Started server process [2512923]
Nov 11 12:26:19 impressed-jade.ptr.network uvicorn[2512923]: INFO:     Waiting for application startup.
Nov 11 12:26:19 impressed-jade.ptr.network uvicorn[2512924]: INFO:     Application startup complete.
Nov 11 12:26:19 impressed-jade.ptr.network uvicorn[2512923]: INFO:     Application startup complete.
Nov 11 12:26:22 impressed-jade.ptr.network uvicorn[2512923]: INFO:     109.92.227.130:0 - "GET /api/matches/1706 HTTP/1.0" 200 OK
Nov 11 12:26:43 impressed-jade.ptr.network uvicorn[2512923]: INFO:     109.92.227.130:0 - "GET /api/clubs/battle?sport=football HTTP/1.0" 200 OK
Nov 11 12:26:49 impressed-jade.ptr.network uvicorn[2512924]: INFO:     127.0.0.1:55256 - "GET /api/health HTTP/1.1" 200 OK
Nov 11 12:26:50 impressed-jade.ptr.network uvicorn[2512923]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 12:26:50 impressed-jade.ptr.network uvicorn[2512923]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 12:26:50 impressed-jade.ptr.network uvicorn[2512924]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
