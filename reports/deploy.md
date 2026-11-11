# Zicer deploy 2026-11-11 10:49 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: 1ca4535 Большой пакет улучшений: барабан цифр, мерцающие заглушки, стеклянная нижняя панель, пружинное нажатие, затухание лент; карусель чередует виды спорта и не вылезает за экран; горячие матчи с раскладом, движение линии с графиком; Матчи — избранное, шторка фильтров, липкие шапки лиг, кнопка «К лайву», свайп в тикет/избранное с отменой; страница матча — голосование под счётом, лучшие прогнозисты на матч; уведомления Dynamic Island; тикет — живая рамка, вспышка выигрыша, шанс прохода; рейтинг — пьедестал, форма за 7 дней, изменение места; профиль — бенто и 3D-достижения; разделы админки — стеклянные таблицы и карточки на телефоне

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
2026/11/11 13:49:16 [warn] 2623854#2623854: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/11 13:49:16 [warn] 2623854#2623854: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/11 13:49:16 [warn] 2623854#2623854: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/11 13:49:16 [warn] 2623854#2623854: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/11 13:49:16 [warn] 2623854#2623854: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/11 13:49:16 [warn] 2623854#2623854: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
tg_reminders | 2026-11-11 10:48:29.287025 | no token | 
names | 2026-11-11 10:48:29.410220 | names 0 | 
football_live | 2026-11-11 10:48:57.369311 | live upserted 1 | 
finish_stale | 2026-11-11 10:48:57.373327 | finished 0 | 
tg_poll | 2026-11-11 10:49:06.253471 | no token | 
football | 2026-11-11 10:49:09.745710 | football upserted 97 |  "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
basketball | 2026-11-11 10:49:11.483426 | basketball upserted 414 | 
basketball_week | 2026-11-11 10:49:12.144128 | nba week upserted 48 | 
other_sports | 2026-11-11 10:49:12.629516 | other sports new 0 | 
backfill | 2026-11-11 10:49:12.636812 | already | 
logos | 2026-11-11 10:49:12.711595 | logos: nothing to do | 
highlights | 2026-11-11 10:49:13.219657 | highlights +0 | 
odds | 2026-11-11 10:49:14.743249 | odds matched 71 | 
settle | 2026-11-11 10:49:14.764914 | settled 0 | 
xfeed | 2026-11-11 10:49:28.625555 | xfeed games 163, linked 0, updated 2 | 
live | 2026-11-11 10:49:38.885141 | live updated 2 | 
trends | 2026-11-10 23:36:09.974574 | trends 11 | 
analysis | 2026-11-10 23:36:10.199323 | analysis 27 | 
maxbet_results | 2026-11-11 10:46:36.415043 | no pending | 
other_results | 2026-11-11 10:46:37.842680 | other results 2 | 
--- worker log ---
Nov 11 13:49:12 impressed-jade.ptr.network python[2623527]: 2026-11-11 13:49:12,960 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC-2Cj6KlR9rCfR28zNLmOTA "HTTP/1.1 200 OK"
Nov 11 13:49:12 impressed-jade.ptr.network python[2623527]: 2026-11-11 13:49:12,969 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCWJ2lWNubArHWmf3FIHbfcQ "HTTP/1.1 200 OK"
Nov 11 13:49:12 impressed-jade.ptr.network python[2623527]: 2026-11-11 13:49:12,985 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCqFMzb-4AUf6WAIbl132QKA "HTTP/1.1 200 OK"
Nov 11 13:49:13 impressed-jade.ptr.network python[2623527]: 2026-11-11 13:49:13,000 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCwJ3S2Ix7aI1BhHexDJlmEg "HTTP/1.1 200 OK"
Nov 11 13:49:13 impressed-jade.ptr.network python[2623527]: 2026-11-11 13:49:13,013 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCTv-XvfzLX3i4IGWAm4sbmA "HTTP/1.1 200 OK"
Nov 11 13:49:13 impressed-jade.ptr.network python[2623527]: 2026-11-11 13:49:13,121 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCxfPjORdISQSn2fV8tcVmgA "HTTP/1.1 200 OK"
Nov 11 13:49:13 impressed-jade.ptr.network python[2623527]: 2026-11-11 13:49:13,133 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCQsH5XtIc9hONE1BQjucM0g "HTTP/1.1 200 OK"
Nov 11 13:49:13 impressed-jade.ptr.network python[2623527]: 2026-11-11 13:49:13,156 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC6UL29enLNe4mqwTfAyeNuw "HTTP/1.1 200 OK"
Nov 11 13:49:13 impressed-jade.ptr.network python[2623527]: 2026-11-11 13:49:13,176 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpryVRk_VDudG8SHXgWcG0w "HTTP/1.1 200 OK"
Nov 11 13:49:13 impressed-jade.ptr.network python[2623527]: 2026-11-11 13:49:13,199 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCyGa1YEx9ST66rYrJTGIKOw "HTTP/1.1 200 OK"
Nov 11 13:49:13 impressed-jade.ptr.network python[2623527]: 2026-11-11 13:49:13,685 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 13:49:14 impressed-jade.ptr.network python[2623527]: 2026-11-11 13:49:14,178 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 13:49:14 impressed-jade.ptr.network python[2623527]: 2026-11-11 13:49:14,593 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 13:49:24 impressed-jade.ptr.network python[2623527]: 2026-11-11 13:49:24,871 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 13:49:25 impressed-jade.ptr.network python[2623527]: 2026-11-11 13:49:25,500 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 13:49:26 impressed-jade.ptr.network python[2623527]: 2026-11-11 13:49:26,125 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 13:49:26 impressed-jade.ptr.network python[2623527]: 2026-11-11 13:49:26,756 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 13:49:27 impressed-jade.ptr.network python[2623527]: 2026-11-11 13:49:27,386 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 13:49:28 impressed-jade.ptr.network python[2623527]: 2026-11-11 13:49:28,006 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 13:49:38 impressed-jade.ptr.network python[2623527]: 2026-11-11 13:49:38,760 INFO HTTP Request: GET https://www.maxbet.rs/live/init/sr "HTTP/1.1 200 OK"
Nov 11 13:49:38 impressed-jade.ptr.network python[2623527]: 2026-11-11 13:49:38,989 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 13:49:39 impressed-jade.ptr.network python[2623527]: 2026-11-11 13:49:39,620 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 13:49:40 impressed-jade.ptr.network python[2623527]: 2026-11-11 13:49:40,248 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 13:49:40 impressed-jade.ptr.network python[2623527]: 2026-11-11 13:49:40,877 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 13:49:41 impressed-jade.ptr.network python[2623527]: 2026-11-11 13:49:41,502 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
--- api log ---
Nov 11 13:49:07 impressed-jade.ptr.network systemd[1]: zicer-api.service: Consumed 16.837s CPU time, 188.4M memory peak, 2.1M memory swap peak.
Nov 11 13:49:07 impressed-jade.ptr.network systemd[1]: Started zicer-api.service - Zicer API.
Nov 11 13:49:07 impressed-jade.ptr.network uvicorn[2623567]: INFO:     Uvicorn running on http://127.0.0.1:8790 (Press CTRL+C to quit)
Nov 11 13:49:07 impressed-jade.ptr.network uvicorn[2623567]: INFO:     Started parent process [2623567]
Nov 11 13:49:09 impressed-jade.ptr.network uvicorn[2623571]: INFO:     Started server process [2623571]
Nov 11 13:49:09 impressed-jade.ptr.network uvicorn[2623571]: INFO:     Waiting for application startup.
Nov 11 13:49:09 impressed-jade.ptr.network uvicorn[2623572]: INFO:     Started server process [2623572]
Nov 11 13:49:09 impressed-jade.ptr.network uvicorn[2623572]: INFO:     Waiting for application startup.
Nov 11 13:49:09 impressed-jade.ptr.network uvicorn[2623571]: INFO:     Application startup complete.
Nov 11 13:49:09 impressed-jade.ptr.network uvicorn[2623572]: INFO:     Application startup complete.
Nov 11 13:49:32 impressed-jade.ptr.network uvicorn[2623572]: INFO:     109.92.227.130:0 - "GET /api/clubs/battle?sport=football HTTP/1.0" 200 OK
Nov 11 13:49:40 impressed-jade.ptr.network uvicorn[2623572]: INFO:     127.0.0.1:34498 - "GET /api/health HTTP/1.1" 200 OK
Nov 11 13:49:40 impressed-jade.ptr.network uvicorn[2623572]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 13:49:40 impressed-jade.ptr.network uvicorn[2623572]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 13:49:40 impressed-jade.ptr.network uvicorn[2623572]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
