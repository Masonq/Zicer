# Zicer deploy 2026-11-11 11:06 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: a39b7e9 Главная: каждый блок изолирован — ошибка в одном блоке не ломает страницу

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
2026/11/11 14:06:17 [warn] 2646231#2646231: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/11 14:06:17 [warn] 2646231#2646231: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/11 14:06:17 [warn] 2646231#2646231: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/11 14:06:17 [warn] 2646231#2646231: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/11 14:06:17 [warn] 2646231#2646231: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/11 14:06:17 [warn] 2646231#2646231: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
basketball | 2026-11-11 11:06:12.706870 | basketball upserted 414 | 
basketball_week | 2026-11-11 11:06:13.424250 | nba week upserted 48 | 
other_sports | 2026-11-11 11:06:13.800713 | other sports new 0 | 
backfill | 2026-11-11 11:06:13.812566 | already | 
logos | 2026-11-11 11:06:13.918077 | logos: nothing to do | 
highlights | 2026-11-11 11:06:14.453869 | highlights +0 | 
odds | 2026-11-11 11:06:15.379579 | odds matched 71 | 
settle | 2026-11-11 11:06:15.400399 | settled 0 | 
xfeed | 2026-11-11 11:06:29.288115 | xfeed games 188, linked 0, updated 2 | 
live | 2026-11-11 11:06:39.605944 | live updated 2 | 
names | 2026-11-11 11:04:22.429871 | names 0 | 
tg_reminders | 2026-11-11 11:04:22.736085 | no token | 
maxbet_results | 2026-11-11 11:04:33.638221 | no pending | 
other_results | 2026-11-11 11:04:35.252096 | other results 2 | 
football_live | 2026-11-11 11:05:22.477107 | live upserted 1 | 
trends | 2026-11-10 23:36:09.974574 | trends 11 | 
analysis | 2026-11-10 23:36:10.199323 | analysis 27 | 
finish_stale | 2026-11-11 11:05:54.421219 | finished 0 | 
tg_poll | 2026-11-11 11:05:54.438893 | no token | 
football | 2026-11-11 11:06:10.855577 | football upserted 97 |  "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
--- worker log ---
Nov 11 14:06:14 impressed-jade.ptr.network python[2645906]: 2026-11-11 14:06:14,163 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCWJ2lWNubArHWmf3FIHbfcQ "HTTP/1.1 200 OK"
Nov 11 14:06:14 impressed-jade.ptr.network python[2645906]: 2026-11-11 14:06:14,188 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCqFMzb-4AUf6WAIbl132QKA "HTTP/1.1 200 OK"
Nov 11 14:06:14 impressed-jade.ptr.network python[2645906]: 2026-11-11 14:06:14,201 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCwJ3S2Ix7aI1BhHexDJlmEg "HTTP/1.1 200 OK"
Nov 11 14:06:14 impressed-jade.ptr.network python[2645906]: 2026-11-11 14:06:14,220 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCTv-XvfzLX3i4IGWAm4sbmA "HTTP/1.1 200 OK"
Nov 11 14:06:14 impressed-jade.ptr.network python[2645906]: 2026-11-11 14:06:14,303 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCxfPjORdISQSn2fV8tcVmgA "HTTP/1.1 200 OK"
Nov 11 14:06:14 impressed-jade.ptr.network python[2645906]: 2026-11-11 14:06:14,322 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCQsH5XtIc9hONE1BQjucM0g "HTTP/1.1 200 OK"
Nov 11 14:06:14 impressed-jade.ptr.network python[2645906]: 2026-11-11 14:06:14,353 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC6UL29enLNe4mqwTfAyeNuw "HTTP/1.1 200 OK"
Nov 11 14:06:14 impressed-jade.ptr.network python[2645906]: 2026-11-11 14:06:14,386 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpryVRk_VDudG8SHXgWcG0w "HTTP/1.1 200 OK"
Nov 11 14:06:14 impressed-jade.ptr.network python[2645906]: 2026-11-11 14:06:14,433 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCyGa1YEx9ST66rYrJTGIKOw "HTTP/1.1 200 OK"
Nov 11 14:06:14 impressed-jade.ptr.network python[2645906]: 2026-11-11 14:06:14,584 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 14:06:14 impressed-jade.ptr.network python[2645906]: 2026-11-11 14:06:14,780 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 14:06:15 impressed-jade.ptr.network python[2645906]: 2026-11-11 14:06:15,199 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 14:06:25 impressed-jade.ptr.network python[2645906]: 2026-11-11 14:06:25,507 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 14:06:26 impressed-jade.ptr.network python[2645906]: 2026-11-11 14:06:26,141 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 14:06:26 impressed-jade.ptr.network python[2645906]: 2026-11-11 14:06:26,787 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 14:06:27 impressed-jade.ptr.network python[2645906]: 2026-11-11 14:06:27,419 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 14:06:28 impressed-jade.ptr.network python[2645906]: 2026-11-11 14:06:28,048 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 14:06:28 impressed-jade.ptr.network python[2645906]: 2026-11-11 14:06:28,665 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 14:06:39 impressed-jade.ptr.network python[2645906]: 2026-11-11 14:06:39,474 INFO HTTP Request: GET https://www.maxbet.rs/live/init/sr "HTTP/1.1 200 OK"
Nov 11 14:06:39 impressed-jade.ptr.network python[2645906]: 2026-11-11 14:06:39,713 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 14:06:40 impressed-jade.ptr.network python[2645906]: 2026-11-11 14:06:40,345 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 14:06:40 impressed-jade.ptr.network python[2645906]: 2026-11-11 14:06:40,974 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 14:06:41 impressed-jade.ptr.network python[2645906]: 2026-11-11 14:06:41,603 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 14:06:42 impressed-jade.ptr.network python[2645906]: 2026-11-11 14:06:42,230 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 14:06:42 impressed-jade.ptr.network python[2645906]: 2026-11-11 14:06:42,856 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
--- api log ---
Nov 11 14:06:32 impressed-jade.ptr.network uvicorn[2645933]: INFO:     109.92.227.130:0 - "GET /api/me/watch?ids= HTTP/1.0" 200 OK
Nov 11 14:06:33 impressed-jade.ptr.network uvicorn[2645932]: INFO:     109.92.227.130:0 - "GET /api/home?tz=180&sport=all HTTP/1.0" 200 OK
Nov 11 14:06:34 impressed-jade.ptr.network uvicorn[2645932]: INFO:     109.92.227.130:0 - "GET /api/sports?tz=180 HTTP/1.0" 200 OK
Nov 11 14:06:34 impressed-jade.ptr.network uvicorn[2645933]: INFO:     109.92.227.130:0 - "GET /api/matches?day=live&sport=all&serbian=false&tz=180 HTTP/1.0" 200 OK
Nov 11 14:06:34 impressed-jade.ptr.network uvicorn[2645933]: INFO:     109.92.227.130:0 - "GET /api/ranking?period=month HTTP/1.0" 200 OK
Nov 11 14:06:34 impressed-jade.ptr.network uvicorn[2645932]: INFO:     109.92.227.130:0 - "GET /api/matches?day=today&sport=all&serbian=false&tz=180 HTTP/1.0" 200 OK
Nov 11 14:06:34 impressed-jade.ptr.network uvicorn[2645932]: INFO:     109.92.227.130:0 - "GET /api/home?tz=180&sport=all HTTP/1.0" 200 OK
Nov 11 14:06:41 impressed-jade.ptr.network uvicorn[2645933]: INFO:     127.0.0.1:40950 - "GET /api/health HTTP/1.1" 200 OK
Nov 11 14:06:41 impressed-jade.ptr.network uvicorn[2645932]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 14:06:41 impressed-jade.ptr.network uvicorn[2645932]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 14:06:42 impressed-jade.ptr.network uvicorn[2645932]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
Nov 11 14:06:42 impressed-jade.ptr.network uvicorn[2645932]: INFO:     109.92.227.130:0 - "GET /api/sports?tz=180 HTTP/1.0" 200 OK
Nov 11 14:06:43 impressed-jade.ptr.network uvicorn[2645933]: INFO:     109.92.227.130:0 - "GET /api/clubs/battle?sport=football HTTP/1.0" 200 OK
Nov 11 14:06:43 impressed-jade.ptr.network uvicorn[2645933]: INFO:     109.92.227.130:0 - "GET /api/me HTTP/1.0" 200 OK
Nov 11 14:06:43 impressed-jade.ptr.network uvicorn[2645933]: INFO:     109.92.227.130:0 - "GET /api/me/watch?ids= HTTP/1.0" 200 OK
```
