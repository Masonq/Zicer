# Zicer deploy 2026-11-11 10:08 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: 14faef0 Админка с нуля: отдельная стеклянная оболочка с сайдбаром (разделы Главное/Люди/Контент/Система), бенто-обзор с периодами Сегодня/Неделя/Месяц — KPI с динамикой и спарклайнами, лайв, график активности, покрытие кэфами, здоровье сбора данных, топ прогнозистов, тикеты, новые пользователи, контент; мобильная версия с выезжающим меню

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
2026/11/11 13:07:51 [warn] 2568933#2568933: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/11 13:07:51 [warn] 2568933#2568933: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/11 13:07:51 [warn] 2568933#2568933: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/11 13:07:51 [warn] 2568933#2568933: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/11 13:07:51 [warn] 2568933#2568933: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/11 13:07:51 [warn] 2568933#2568933: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
basketball | 2026-11-11 10:07:46.791376 | basketball upserted 414 | 
basketball_week | 2026-11-11 10:07:47.636157 | nba week upserted 48 | 
other_sports | 2026-11-11 10:07:47.985841 | other sports new 0 | 
backfill | 2026-11-11 10:07:47.991474 | already | 
logos | 2026-11-11 10:07:48.080834 | logos: nothing to do | 
highlights | 2026-11-11 10:07:48.665439 | highlights +0 | 
odds | 2026-11-11 10:07:49.779496 | odds matched 69 | 
settle | 2026-11-11 10:07:49.807563 | settled 0 | 
xfeed | 2026-11-11 10:08:03.663420 | xfeed games 165, linked 0, updated 2 | 
live | 2026-11-11 10:08:14.026323 | live updated 2 | 
finish_stale | 2026-11-11 10:06:53.429369 | finished 0 | 
trends | 2026-11-10 23:36:09.974574 | trends 11 | 
analysis | 2026-11-10 23:36:10.199323 | analysis 27 | 
maxbet_results | 2026-11-11 10:07:27.628141 | no pending | 
other_results | 2026-11-11 10:07:28.884970 | other results 2 | 
tg_poll | 2026-11-11 10:07:29.820122 | no token | 
football_live | 2026-11-11 10:07:34.892809 | live upserted 1 | 
football | 2026-11-11 10:07:44.910439 | football upserted 97 |  "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
names | 2026-11-11 10:03:20.685329 | names 0 | 
tg_reminders | 2026-11-11 10:03:20.907191 | no token | 
--- worker log ---
Nov 11 13:07:48 impressed-jade.ptr.network python[2568587]: 2026-11-11 13:07:48,298 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC-2Cj6KlR9rCfR28zNLmOTA "HTTP/1.1 200 OK"
Nov 11 13:07:48 impressed-jade.ptr.network python[2568587]: 2026-11-11 13:07:48,308 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCWJ2lWNubArHWmf3FIHbfcQ "HTTP/1.1 200 OK"
Nov 11 13:07:48 impressed-jade.ptr.network python[2568587]: 2026-11-11 13:07:48,327 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCqFMzb-4AUf6WAIbl132QKA "HTTP/1.1 200 OK"
Nov 11 13:07:48 impressed-jade.ptr.network python[2568587]: 2026-11-11 13:07:48,405 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCwJ3S2Ix7aI1BhHexDJlmEg "HTTP/1.1 200 OK"
Nov 11 13:07:48 impressed-jade.ptr.network python[2568587]: 2026-11-11 13:07:48,416 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCTv-XvfzLX3i4IGWAm4sbmA "HTTP/1.1 200 OK"
Nov 11 13:07:48 impressed-jade.ptr.network python[2568587]: 2026-11-11 13:07:48,488 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCxfPjORdISQSn2fV8tcVmgA "HTTP/1.1 200 OK"
Nov 11 13:07:48 impressed-jade.ptr.network python[2568587]: 2026-11-11 13:07:48,498 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCQsH5XtIc9hONE1BQjucM0g "HTTP/1.1 200 OK"
Nov 11 13:07:48 impressed-jade.ptr.network python[2568587]: 2026-11-11 13:07:48,521 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC6UL29enLNe4mqwTfAyeNuw "HTTP/1.1 200 OK"
Nov 11 13:07:48 impressed-jade.ptr.network python[2568587]: 2026-11-11 13:07:48,617 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpryVRk_VDudG8SHXgWcG0w "HTTP/1.1 200 OK"
Nov 11 13:07:48 impressed-jade.ptr.network python[2568587]: 2026-11-11 13:07:48,642 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCyGa1YEx9ST66rYrJTGIKOw "HTTP/1.1 200 OK"
Nov 11 13:07:48 impressed-jade.ptr.network python[2568587]: 2026-11-11 13:07:48,811 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 13:07:49 impressed-jade.ptr.network python[2568587]: 2026-11-11 13:07:49,246 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 13:07:49 impressed-jade.ptr.network python[2568587]: 2026-11-11 13:07:49,628 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 13:07:59 impressed-jade.ptr.network python[2568587]: 2026-11-11 13:07:59,911 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 13:08:00 impressed-jade.ptr.network python[2568587]: 2026-11-11 13:08:00,535 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 13:08:01 impressed-jade.ptr.network python[2568587]: 2026-11-11 13:08:01,164 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 13:08:01 impressed-jade.ptr.network python[2568587]: 2026-11-11 13:08:01,795 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 13:08:02 impressed-jade.ptr.network python[2568587]: 2026-11-11 13:08:02,424 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 13:08:03 impressed-jade.ptr.network python[2568587]: 2026-11-11 13:08:03,043 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 13:08:13 impressed-jade.ptr.network python[2568587]: 2026-11-11 13:08:13,893 INFO HTTP Request: GET https://www.maxbet.rs/live/init/sr "HTTP/1.1 200 OK"
Nov 11 13:08:14 impressed-jade.ptr.network python[2568587]: 2026-11-11 13:08:14,128 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 13:08:14 impressed-jade.ptr.network python[2568587]: 2026-11-11 13:08:14,753 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 13:08:15 impressed-jade.ptr.network python[2568587]: 2026-11-11 13:08:15,382 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 13:08:16 impressed-jade.ptr.network python[2568587]: 2026-11-11 13:08:16,014 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 13:08:16 impressed-jade.ptr.network python[2568587]: 2026-11-11 13:08:16,648 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
--- api log ---
Nov 11 13:07:42 impressed-jade.ptr.network systemd[1]: Started zicer-api.service - Zicer API.
Nov 11 13:07:42 impressed-jade.ptr.network uvicorn[2568610]: INFO:     Uvicorn running on http://127.0.0.1:8790 (Press CTRL+C to quit)
Nov 11 13:07:42 impressed-jade.ptr.network uvicorn[2568610]: INFO:     Started parent process [2568610]
Nov 11 13:07:43 impressed-jade.ptr.network uvicorn[2568613]: INFO:     Started server process [2568613]
Nov 11 13:07:43 impressed-jade.ptr.network uvicorn[2568613]: INFO:     Waiting for application startup.
Nov 11 13:07:44 impressed-jade.ptr.network uvicorn[2568614]: INFO:     Started server process [2568614]
Nov 11 13:07:44 impressed-jade.ptr.network uvicorn[2568614]: INFO:     Waiting for application startup.
Nov 11 13:07:44 impressed-jade.ptr.network uvicorn[2568613]: INFO:     Application startup complete.
Nov 11 13:07:44 impressed-jade.ptr.network uvicorn[2568614]: INFO:     Application startup complete.
Nov 11 13:07:50 impressed-jade.ptr.network uvicorn[2568614]: INFO:     109.92.227.130:0 - "GET /api/matches/1869 HTTP/1.0" 200 OK
Nov 11 13:08:15 impressed-jade.ptr.network uvicorn[2568613]: INFO:     127.0.0.1:37136 - "GET /api/health HTTP/1.1" 200 OK
Nov 11 13:08:15 impressed-jade.ptr.network uvicorn[2568614]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 13:08:15 impressed-jade.ptr.network uvicorn[2568614]: INFO:     109.92.227.130:0 - "GET /api/clubs/battle?sport=football HTTP/1.0" 200 OK
Nov 11 13:08:15 impressed-jade.ptr.network uvicorn[2568614]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 13:08:16 impressed-jade.ptr.network uvicorn[2568614]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
