# Zicer deploy 2026-11-11 14:08 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: 304f93b Матч дня: шкала шанса в кнопках — полная дорожка с заливкой и отступами (у фаворита золотая), а не обрывок линии; все карточки карусели одной высоты (место под «через N мин» сохраняется)

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
2026/11/11 17:08:01 [warn] 2889815#2889815: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/11 17:08:01 [warn] 2889815#2889815: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/11 17:08:01 [warn] 2889815#2889815: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/11 17:08:01 [warn] 2889815#2889815: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/11 17:08:01 [warn] 2889815#2889815: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/11 17:08:01 [warn] 2889815#2889815: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
basketball | 2026-11-11 14:07:56.731065 | basketball upserted 414 | 
basketball_week | 2026-11-11 14:07:57.547366 | nba week upserted 48 | 
other_sports | 2026-11-11 14:07:57.967359 | other sports new 0 | 
backfill | 2026-11-11 14:07:57.972139 | already | 
logos | 2026-11-11 14:07:58.048628 | logos: nothing to do | 
highlights | 2026-11-11 14:07:58.339422 | highlights +0 | 
odds | 2026-11-11 14:07:59.750496 | odds matched 72 | 
settle | 2026-11-11 14:07:59.771924 | settled 0 | 
xfeed | 2026-11-11 14:08:13.652262 | xfeed games 153, linked 0, updated 3 | 
live | 2026-11-11 14:08:23.953266 | live updated 3 | 
maxbet_results | 2026-11-11 14:05:29.516018 | no pending | 
names | 2026-11-11 14:05:29.755261 | names 0 | 
other_results | 2026-11-11 14:05:33.603285 | other results 3 | 
tg_reminders | 2026-11-11 14:05:35.207794 | no token | 
trends | 2026-11-10 23:36:09.974574 | trends 11 | 
analysis | 2026-11-10 23:36:10.199323 | analysis 27 | 
social | 2026-11-11 14:06:40.350177 | social nothing due (test) | 
football_live | 2026-11-11 14:07:08.661908 | live upserted 0 | 
finish_stale | 2026-11-11 14:07:17.538369 | finished 0 | 
tg_poll | 2026-11-11 14:07:40.794836 | no token | 
football | 2026-11-11 14:07:54.827018 | football upserted 96 |  "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
--- worker log ---
Nov 11 17:07:58 impressed-jade.ptr.network python[2889481]: 2026-11-11 17:07:58,143 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC-2Cj6KlR9rCfR28zNLmOTA "HTTP/1.1 200 OK"
Nov 11 17:07:58 impressed-jade.ptr.network python[2889481]: 2026-11-11 17:07:58,154 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCWJ2lWNubArHWmf3FIHbfcQ "HTTP/1.1 200 OK"
Nov 11 17:07:58 impressed-jade.ptr.network python[2889481]: 2026-11-11 17:07:58,174 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCqFMzb-4AUf6WAIbl132QKA "HTTP/1.1 200 OK"
Nov 11 17:07:58 impressed-jade.ptr.network python[2889481]: 2026-11-11 17:07:58,190 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCwJ3S2Ix7aI1BhHexDJlmEg "HTTP/1.1 200 OK"
Nov 11 17:07:58 impressed-jade.ptr.network python[2889481]: 2026-11-11 17:07:58,203 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCTv-XvfzLX3i4IGWAm4sbmA "HTTP/1.1 200 OK"
Nov 11 17:07:58 impressed-jade.ptr.network python[2889481]: 2026-11-11 17:07:58,232 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCxfPjORdISQSn2fV8tcVmgA "HTTP/1.1 200 OK"
Nov 11 17:07:58 impressed-jade.ptr.network python[2889481]: 2026-11-11 17:07:58,246 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCQsH5XtIc9hONE1BQjucM0g "HTTP/1.1 200 OK"
Nov 11 17:07:58 impressed-jade.ptr.network python[2889481]: 2026-11-11 17:07:58,267 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC6UL29enLNe4mqwTfAyeNuw "HTTP/1.1 200 OK"
Nov 11 17:07:58 impressed-jade.ptr.network python[2889481]: 2026-11-11 17:07:58,287 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpryVRk_VDudG8SHXgWcG0w "HTTP/1.1 200 OK"
Nov 11 17:07:58 impressed-jade.ptr.network python[2889481]: 2026-11-11 17:07:58,309 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCyGa1YEx9ST66rYrJTGIKOw "HTTP/1.1 200 OK"
Nov 11 17:07:58 impressed-jade.ptr.network python[2889481]: 2026-11-11 17:07:58,489 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 17:07:59 impressed-jade.ptr.network python[2889481]: 2026-11-11 17:07:59,083 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 17:07:59 impressed-jade.ptr.network python[2889481]: 2026-11-11 17:07:59,606 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 17:08:09 impressed-jade.ptr.network python[2889481]: 2026-11-11 17:08:09,879 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 17:08:10 impressed-jade.ptr.network python[2889481]: 2026-11-11 17:08:10,511 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 17:08:11 impressed-jade.ptr.network python[2889481]: 2026-11-11 17:08:11,134 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 17:08:11 impressed-jade.ptr.network python[2889481]: 2026-11-11 17:08:11,769 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 17:08:12 impressed-jade.ptr.network python[2889481]: 2026-11-11 17:08:12,402 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 17:08:13 impressed-jade.ptr.network python[2889481]: 2026-11-11 17:08:13,030 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 17:08:23 impressed-jade.ptr.network python[2889481]: 2026-11-11 17:08:23,831 INFO HTTP Request: GET https://www.maxbet.rs/live/init/sr "HTTP/1.1 200 OK"
Nov 11 17:08:24 impressed-jade.ptr.network python[2889481]: 2026-11-11 17:08:24,050 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 17:08:24 impressed-jade.ptr.network python[2889481]: 2026-11-11 17:08:24,686 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 17:08:25 impressed-jade.ptr.network python[2889481]: 2026-11-11 17:08:25,307 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 17:08:25 impressed-jade.ptr.network python[2889481]: 2026-11-11 17:08:25,942 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 17:08:26 impressed-jade.ptr.network python[2889481]: 2026-11-11 17:08:26,572 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
--- api log ---
Nov 11 17:07:54 impressed-jade.ptr.network uvicorn[2889486]: INFO:     Application startup complete.
Nov 11 17:07:54 impressed-jade.ptr.network uvicorn[2889487]: INFO:     Started server process [2889487]
Nov 11 17:07:54 impressed-jade.ptr.network uvicorn[2889487]: INFO:     Waiting for application startup.
Nov 11 17:07:54 impressed-jade.ptr.network uvicorn[2889487]: INFO:     Application startup complete.
Nov 11 17:07:57 impressed-jade.ptr.network uvicorn[2889487]: INFO:     109.92.227.130:0 - "GET /api/matches/1856/center HTTP/1.0" 200 OK
Nov 11 17:08:01 impressed-jade.ptr.network uvicorn[2889487]: INFO:     109.92.227.130:0 - "GET /api/me/watch?ids= HTTP/1.0" 200 OK
Nov 11 17:08:09 impressed-jade.ptr.network uvicorn[2889487]: INFO:     109.92.227.130:0 - "GET /api/matches/1856/center HTTP/1.0" 200 OK
Nov 11 17:08:15 impressed-jade.ptr.network uvicorn[2889487]: INFO:     109.92.227.130:0 - "GET /api/matches/1856 HTTP/1.0" 200 OK
Nov 11 17:08:15 impressed-jade.ptr.network uvicorn[2889487]: INFO:     109.92.227.130:0 - "GET /api/matches/1856/center HTTP/1.0" 200 OK
Nov 11 17:08:21 impressed-jade.ptr.network uvicorn[2889487]: INFO:     109.92.227.130:0 - "GET /api/me/watch?ids= HTTP/1.0" 200 OK
Nov 11 17:08:21 impressed-jade.ptr.network uvicorn[2889487]: INFO:     109.92.227.130:0 - "GET /api/matches/1856/center HTTP/1.0" 200 OK
Nov 11 17:08:25 impressed-jade.ptr.network uvicorn[2889487]: INFO:     127.0.0.1:46504 - "GET /api/health HTTP/1.1" 200 OK
Nov 11 17:08:25 impressed-jade.ptr.network uvicorn[2889487]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 17:08:25 impressed-jade.ptr.network uvicorn[2889487]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 17:08:26 impressed-jade.ptr.network uvicorn[2889486]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
