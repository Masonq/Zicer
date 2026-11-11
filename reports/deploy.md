# Zicer deploy 2026-11-11 11:58 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: 6cd7eba Кнопки коэффициентов по-новому: стеклянные плитки, чёткие цифры, золотое выделение выбранного, подсветка при наведении, на крупных кнопках полоса шанса исхода; горячие матчи — цветной значок спорта, полоса цвета спорта сверху, лига отдельной строкой

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
2026/11/11 14:58:31 [warn] 2717642#2717642: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/11 14:58:31 [warn] 2717642#2717642: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/11 14:58:31 [warn] 2717642#2717642: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/11 14:58:31 [warn] 2717642#2717642: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/11 14:58:31 [warn] 2717642#2717642: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/11 14:58:31 [warn] 2717642#2717642: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
tg_reminders | 2026-11-11 11:57:04.261627 | no token | 
names | 2026-11-11 11:57:04.460934 | names 0 | 
finish_stale | 2026-11-11 11:57:18.396453 | finished 0 | 
football_live | 2026-11-11 11:58:04.776571 | live upserted 1 | 
maxbet_results | 2026-11-11 11:58:06.519997 | no pending | 
other_results | 2026-11-11 11:58:08.024231 | other results 1 | 
basketball | 2026-11-11 11:58:26.193101 | basketball upserted 414 | 
basketball_week | 2026-11-11 11:58:26.764716 | nba week upserted 48 | 
other_sports | 2026-11-11 11:58:27.173839 | other sports new 0 | 
backfill | 2026-11-11 11:58:27.180229 | already | 
logos | 2026-11-11 11:58:27.283173 | logos: nothing to do | 
highlights | 2026-11-11 11:58:27.534676 | highlights +0 | 
odds | 2026-11-11 11:58:28.508576 | odds matched 71 | 
trends | 2026-11-10 23:36:09.974574 | trends 11 | 
settle | 2026-11-11 11:58:28.532780 | settled 0 | 
analysis | 2026-11-10 23:36:10.199323 | analysis 27 | 
live | 2026-11-11 11:58:52.717856 | live updated 2 | 
xfeed | 2026-11-11 11:58:56.596120 | xfeed games 189, linked 0, updated 2 | 
tg_poll | 2026-11-11 11:58:56.601104 | no token | 
football | 2026-11-11 11:58:24.355060 | football upserted 97 |  "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
--- worker log ---
Nov 11 14:58:27 impressed-jade.ptr.network python[2717308]: 2026-11-11 14:58:27,377 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCWJ2lWNubArHWmf3FIHbfcQ "HTTP/1.1 200 OK"
Nov 11 14:58:27 impressed-jade.ptr.network python[2717308]: 2026-11-11 14:58:27,392 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCqFMzb-4AUf6WAIbl132QKA "HTTP/1.1 200 OK"
Nov 11 14:58:27 impressed-jade.ptr.network python[2717308]: 2026-11-11 14:58:27,403 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCwJ3S2Ix7aI1BhHexDJlmEg "HTTP/1.1 200 OK"
Nov 11 14:58:27 impressed-jade.ptr.network python[2717308]: 2026-11-11 14:58:27,413 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCTv-XvfzLX3i4IGWAm4sbmA "HTTP/1.1 200 OK"
Nov 11 14:58:27 impressed-jade.ptr.network python[2717308]: 2026-11-11 14:58:27,438 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCxfPjORdISQSn2fV8tcVmgA "HTTP/1.1 200 OK"
Nov 11 14:58:27 impressed-jade.ptr.network python[2717308]: 2026-11-11 14:58:27,451 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCQsH5XtIc9hONE1BQjucM0g "HTTP/1.1 200 OK"
Nov 11 14:58:27 impressed-jade.ptr.network python[2717308]: 2026-11-11 14:58:27,470 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC6UL29enLNe4mqwTfAyeNuw "HTTP/1.1 200 OK"
Nov 11 14:58:27 impressed-jade.ptr.network python[2717308]: 2026-11-11 14:58:27,491 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpryVRk_VDudG8SHXgWcG0w "HTTP/1.1 200 OK"
Nov 11 14:58:27 impressed-jade.ptr.network python[2717308]: 2026-11-11 14:58:27,516 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCyGa1YEx9ST66rYrJTGIKOw "HTTP/1.1 200 OK"
Nov 11 14:58:27 impressed-jade.ptr.network python[2717308]: 2026-11-11 14:58:27,663 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 14:58:27 impressed-jade.ptr.network python[2717308]: 2026-11-11 14:58:27,857 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 14:58:28 impressed-jade.ptr.network python[2717308]: 2026-11-11 14:58:28,361 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 14:58:38 impressed-jade.ptr.network python[2717308]: 2026-11-11 14:58:38,644 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 14:58:39 impressed-jade.ptr.network python[2717308]: 2026-11-11 14:58:39,277 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 14:58:39 impressed-jade.ptr.network python[2717308]: 2026-11-11 14:58:39,920 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 14:58:40 impressed-jade.ptr.network python[2717308]: 2026-11-11 14:58:40,555 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 14:58:41 impressed-jade.ptr.network python[2717308]: 2026-11-11 14:58:41,185 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 14:58:41 impressed-jade.ptr.network python[2717308]: 2026-11-11 14:58:41,810 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 14:58:52 impressed-jade.ptr.network python[2717308]: 2026-11-11 14:58:52,584 INFO HTTP Request: GET https://www.maxbet.rs/live/init/sr "HTTP/1.1 200 OK"
Nov 11 14:58:52 impressed-jade.ptr.network python[2717308]: 2026-11-11 14:58:52,822 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 14:58:53 impressed-jade.ptr.network python[2717308]: 2026-11-11 14:58:53,459 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 14:58:54 impressed-jade.ptr.network python[2717308]: 2026-11-11 14:58:54,086 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 14:58:54 impressed-jade.ptr.network python[2717308]: 2026-11-11 14:58:54,718 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 14:58:55 impressed-jade.ptr.network python[2717308]: 2026-11-11 14:58:55,342 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 14:58:55 impressed-jade.ptr.network python[2717308]: 2026-11-11 14:58:55,961 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
--- api log ---
Nov 11 14:58:22 impressed-jade.ptr.network uvicorn[2717310]: INFO:     Started parent process [2717310]
Nov 11 14:58:24 impressed-jade.ptr.network uvicorn[2717313]: INFO:     Started server process [2717313]
Nov 11 14:58:24 impressed-jade.ptr.network uvicorn[2717313]: INFO:     Waiting for application startup.
Nov 11 14:58:24 impressed-jade.ptr.network uvicorn[2717314]: INFO:     Started server process [2717314]
Nov 11 14:58:24 impressed-jade.ptr.network uvicorn[2717314]: INFO:     Waiting for application startup.
Nov 11 14:58:24 impressed-jade.ptr.network uvicorn[2717313]: INFO:     Application startup complete.
Nov 11 14:58:24 impressed-jade.ptr.network uvicorn[2717314]: INFO:     Application startup complete.
Nov 11 14:58:33 impressed-jade.ptr.network uvicorn[2717314]: INFO:     109.92.227.130:0 - "GET /api/me/watch?ids= HTTP/1.0" 200 OK
Nov 11 14:58:39 impressed-jade.ptr.network uvicorn[2717314]: INFO:     109.92.227.130:0 - "GET /api/home?tz=180&sport=all HTTP/1.0" 200 OK
Nov 11 14:58:53 impressed-jade.ptr.network uvicorn[2717314]: INFO:     109.92.227.130:0 - "GET /api/sports?tz=180 HTTP/1.0" 200 OK
Nov 11 14:58:53 impressed-jade.ptr.network uvicorn[2717313]: INFO:     109.92.227.130:0 - "GET /api/me/watch?ids= HTTP/1.0" 200 OK
Nov 11 14:58:55 impressed-jade.ptr.network uvicorn[2717314]: INFO:     127.0.0.1:34196 - "GET /api/health HTTP/1.1" 200 OK
Nov 11 14:58:55 impressed-jade.ptr.network uvicorn[2717313]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 14:58:55 impressed-jade.ptr.network uvicorn[2717314]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 14:58:56 impressed-jade.ptr.network uvicorn[2717313]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
