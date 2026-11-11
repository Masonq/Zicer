# Zicer deploy 2026-11-11 09:33 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: f5b5e71 Обзоры: перед показом видео проверяется скрытым плеером YouTube, заблокированные в стране (например NBA в Сербии) не показываются; результат запоминается на сервере для всех

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
2026/11/11 12:32:47 [warn] 2521906#2521906: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/11 12:32:47 [warn] 2521906#2521906: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/11 12:32:47 [warn] 2521906#2521906: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/11 12:32:47 [warn] 2521906#2521906: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/11 12:32:47 [warn] 2521906#2521906: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/11 12:32:47 [warn] 2521906#2521906: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
basketball | 2026-11-11 09:32:43.648533 | basketball upserted 414 | 
basketball_week | 2026-11-11 09:32:44.404258 | nba week upserted 48 | 
other_sports | 2026-11-11 09:32:44.821216 | other sports new 0 | 
backfill | 2026-11-11 09:32:44.825327 | already | 
logos | 2026-11-11 09:32:44.920815 | logos: nothing to do | 
highlights | 2026-11-11 09:32:45.401775 | highlights +0 | 
odds | 2026-11-11 09:32:46.260770 | odds matched 69 | 
settle | 2026-11-11 09:32:46.298018 | settled 0 | 
xfeed | 2026-11-11 09:33:00.162152 | xfeed games 128, linked 0, updated 0 | 
live | 2026-11-11 09:33:10.419473 | live updated 0 | 
maxbet_results | 2026-11-11 09:29:35.400008 | no pending | 
other_results | 2026-11-11 09:29:35.407102 | no pending | 
names | 2026-11-11 09:31:26.380442 | names 0 | 
trends | 2026-11-10 23:36:09.974574 | trends 11 | 
tg_reminders | 2026-11-11 09:31:26.801899 | no token | 
analysis | 2026-11-10 23:36:10.199323 | analysis 27 | 
finish_stale | 2026-11-11 09:31:40.728074 | finished 0 | 
football_live | 2026-11-11 09:32:22.974284 | live upserted 1 | 
tg_poll | 2026-11-11 09:32:26.862661 | no token | 
football | 2026-11-11 09:32:41.626070 | football upserted 97 |  "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
--- worker log ---
Nov 11 12:32:45 impressed-jade.ptr.network python[2521569]: 2026-11-11 12:32:45,060 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpFqOv5z4WKps64GlQS4ytw "HTTP/1.1 200 OK"
Nov 11 12:32:45 impressed-jade.ptr.network python[2521569]: 2026-11-11 12:32:45,160 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC-2Cj6KlR9rCfR28zNLmOTA "HTTP/1.1 200 OK"
Nov 11 12:32:45 impressed-jade.ptr.network python[2521569]: 2026-11-11 12:32:45,169 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCWJ2lWNubArHWmf3FIHbfcQ "HTTP/1.1 200 OK"
Nov 11 12:32:45 impressed-jade.ptr.network python[2521569]: 2026-11-11 12:32:45,184 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCqFMzb-4AUf6WAIbl132QKA "HTTP/1.1 200 OK"
Nov 11 12:32:45 impressed-jade.ptr.network python[2521569]: 2026-11-11 12:32:45,200 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCwJ3S2Ix7aI1BhHexDJlmEg "HTTP/1.1 200 OK"
Nov 11 12:32:45 impressed-jade.ptr.network python[2521569]: 2026-11-11 12:32:45,212 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCTv-XvfzLX3i4IGWAm4sbmA "HTTP/1.1 200 OK"
Nov 11 12:32:45 impressed-jade.ptr.network python[2521569]: 2026-11-11 12:32:45,297 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCxfPjORdISQSn2fV8tcVmgA "HTTP/1.1 200 OK"
Nov 11 12:32:45 impressed-jade.ptr.network python[2521569]: 2026-11-11 12:32:45,309 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCQsH5XtIc9hONE1BQjucM0g "HTTP/1.1 200 OK"
Nov 11 12:32:45 impressed-jade.ptr.network python[2521569]: 2026-11-11 12:32:45,335 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC6UL29enLNe4mqwTfAyeNuw "HTTP/1.1 200 OK"
Nov 11 12:32:45 impressed-jade.ptr.network python[2521569]: 2026-11-11 12:32:45,360 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpryVRk_VDudG8SHXgWcG0w "HTTP/1.1 200 OK"
Nov 11 12:32:45 impressed-jade.ptr.network python[2521569]: 2026-11-11 12:32:45,380 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCyGa1YEx9ST66rYrJTGIKOw "HTTP/1.1 200 OK"
Nov 11 12:32:45 impressed-jade.ptr.network python[2521569]: 2026-11-11 12:32:45,566 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 12:32:45 impressed-jade.ptr.network python[2521569]: 2026-11-11 12:32:45,713 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 12:32:46 impressed-jade.ptr.network python[2521569]: 2026-11-11 12:32:46,127 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 12:32:56 impressed-jade.ptr.network python[2521569]: 2026-11-11 12:32:56,406 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 12:32:57 impressed-jade.ptr.network python[2521569]: 2026-11-11 12:32:57,028 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 12:32:57 impressed-jade.ptr.network python[2521569]: 2026-11-11 12:32:57,655 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 12:32:58 impressed-jade.ptr.network python[2521569]: 2026-11-11 12:32:58,286 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 12:32:58 impressed-jade.ptr.network python[2521569]: 2026-11-11 12:32:58,910 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 12:32:59 impressed-jade.ptr.network python[2521569]: 2026-11-11 12:32:59,545 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 12:33:10 impressed-jade.ptr.network python[2521569]: 2026-11-11 12:33:10,312 INFO HTTP Request: GET https://www.maxbet.rs/live/init/sr "HTTP/1.1 200 OK"
Nov 11 12:33:10 impressed-jade.ptr.network python[2521569]: 2026-11-11 12:33:10,558 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 12:33:11 impressed-jade.ptr.network python[2521569]: 2026-11-11 12:33:11,182 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 12:33:11 impressed-jade.ptr.network python[2521569]: 2026-11-11 12:33:11,807 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 12:33:12 impressed-jade.ptr.network python[2521569]: 2026-11-11 12:33:12,438 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
--- api log ---
Nov 11 12:32:41 impressed-jade.ptr.network uvicorn[2521577]: INFO:     Waiting for application startup.
Nov 11 12:32:41 impressed-jade.ptr.network uvicorn[2521578]: INFO:     Started server process [2521578]
Nov 11 12:32:41 impressed-jade.ptr.network uvicorn[2521578]: INFO:     Waiting for application startup.
Nov 11 12:32:41 impressed-jade.ptr.network uvicorn[2521577]: INFO:     Application startup complete.
Nov 11 12:32:41 impressed-jade.ptr.network uvicorn[2521578]: INFO:     Application startup complete.
Nov 11 12:32:42 impressed-jade.ptr.network uvicorn[2521577]: INFO:     109.92.227.130:0 - "GET /api/ranking?period=month HTTP/1.0" 200 OK
Nov 11 12:32:42 impressed-jade.ptr.network uvicorn[2521578]: INFO:     109.92.227.130:0 - "GET /api/matches?day=live&sport=all&serbian=false&tz=180 HTTP/1.0" 200 OK
Nov 11 12:32:42 impressed-jade.ptr.network uvicorn[2521577]: INFO:     109.92.227.130:0 - "GET /api/sports?tz=180 HTTP/1.0" 200 OK
Nov 11 12:32:42 impressed-jade.ptr.network uvicorn[2521577]: INFO:     109.92.227.130:0 - "GET /api/matches?day=today&sport=all&serbian=false&tz=180 HTTP/1.0" 200 OK
Nov 11 12:32:42 impressed-jade.ptr.network uvicorn[2521578]: INFO:     109.92.227.130:0 - "GET /api/home?tz=180&sport=all HTTP/1.0" 200 OK
Nov 11 12:33:11 impressed-jade.ptr.network uvicorn[2521578]: INFO:     109.92.227.130:0 - "GET /api/matches/1314 HTTP/1.0" 200 OK
Nov 11 12:33:11 impressed-jade.ptr.network uvicorn[2521578]: INFO:     127.0.0.1:55568 - "GET /api/health HTTP/1.1" 200 OK
Nov 11 12:33:11 impressed-jade.ptr.network uvicorn[2521578]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 12:33:11 impressed-jade.ptr.network uvicorn[2521578]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 12:33:12 impressed-jade.ptr.network uvicorn[2521578]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
