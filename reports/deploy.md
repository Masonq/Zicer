# Zicer deploy 2026-11-11 09:44 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: acc9b54 «Матч дня»: фотореалистичные мячи и шайба (рендер с текстурой, швами, бликами и тенью) для всех видов спорта; мяч не наезжает на название лиги на десктопе и телефоне

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
2026/11/11 12:44:22 [warn] 2537247#2537247: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/11 12:44:22 [warn] 2537247#2537247: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/11 12:44:22 [warn] 2537247#2537247: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/11 12:44:22 [warn] 2537247#2537247: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/11 12:44:22 [warn] 2537247#2537247: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/11 12:44:22 [warn] 2537247#2537247: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
basketball_week | 2026-11-11 09:44:18.546802 | nba week upserted 48 | 
other_sports | 2026-11-11 09:44:18.915843 | other sports new 0 | 
backfill | 2026-11-11 09:44:18.919939 | already | 
logos | 2026-11-11 09:44:18.994733 | logos: nothing to do | 
highlights | 2026-11-11 09:44:19.268682 | highlights +0 | 
odds | 2026-11-11 09:44:20.839620 | odds matched 69 | 
settle | 2026-11-11 09:44:20.873581 | settled 0 | 
xfeed | 2026-11-11 09:44:34.723101 | xfeed games 130, linked 0, updated 0 | 
live | 2026-11-11 09:44:44.940954 | live updated 0 | 
maxbet_results | 2026-11-11 09:42:02.019096 | no pending | 
other_results | 2026-11-11 09:42:02.025268 | no pending | 
names | 2026-11-11 09:42:49.093381 | names 0 | 
tg_reminders | 2026-11-11 09:42:49.506156 | no token | 
finish_stale | 2026-11-11 09:43:35.506992 | finished 0 | 
trends | 2026-11-10 23:36:09.974574 | trends 11 | 
football_live | 2026-11-11 09:43:40.574581 | live upserted 1 | 
analysis | 2026-11-10 23:36:10.199323 | analysis 27 | 
tg_poll | 2026-11-11 09:43:58.502691 | no token | 
football | 2026-11-11 09:44:15.584648 | football upserted 97 |  "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
basketball | 2026-11-11 09:44:17.726216 | basketball upserted 414 | 
--- worker log ---
Nov 11 12:44:19 impressed-jade.ptr.network python[2536921]: 2026-11-11 12:44:19,069 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpFqOv5z4WKps64GlQS4ytw "HTTP/1.1 200 OK"
Nov 11 12:44:19 impressed-jade.ptr.network python[2536921]: 2026-11-11 12:44:19,081 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC-2Cj6KlR9rCfR28zNLmOTA "HTTP/1.1 200 OK"
Nov 11 12:44:19 impressed-jade.ptr.network python[2536921]: 2026-11-11 12:44:19,090 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCWJ2lWNubArHWmf3FIHbfcQ "HTTP/1.1 200 OK"
Nov 11 12:44:19 impressed-jade.ptr.network python[2536921]: 2026-11-11 12:44:19,106 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCqFMzb-4AUf6WAIbl132QKA "HTTP/1.1 200 OK"
Nov 11 12:44:19 impressed-jade.ptr.network python[2536921]: 2026-11-11 12:44:19,120 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCwJ3S2Ix7aI1BhHexDJlmEg "HTTP/1.1 200 OK"
Nov 11 12:44:19 impressed-jade.ptr.network python[2536921]: 2026-11-11 12:44:19,131 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCTv-XvfzLX3i4IGWAm4sbmA "HTTP/1.1 200 OK"
Nov 11 12:44:19 impressed-jade.ptr.network python[2536921]: 2026-11-11 12:44:19,153 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCxfPjORdISQSn2fV8tcVmgA "HTTP/1.1 200 OK"
Nov 11 12:44:19 impressed-jade.ptr.network python[2536921]: 2026-11-11 12:44:19,165 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCQsH5XtIc9hONE1BQjucM0g "HTTP/1.1 200 OK"
Nov 11 12:44:19 impressed-jade.ptr.network python[2536921]: 2026-11-11 12:44:19,188 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC6UL29enLNe4mqwTfAyeNuw "HTTP/1.1 200 OK"
Nov 11 12:44:19 impressed-jade.ptr.network python[2536921]: 2026-11-11 12:44:19,207 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpryVRk_VDudG8SHXgWcG0w "HTTP/1.1 200 OK"
Nov 11 12:44:19 impressed-jade.ptr.network python[2536921]: 2026-11-11 12:44:19,238 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCyGa1YEx9ST66rYrJTGIKOw "HTTP/1.1 200 OK"
Nov 11 12:44:19 impressed-jade.ptr.network python[2536921]: 2026-11-11 12:44:19,755 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 12:44:20 impressed-jade.ptr.network python[2536921]: 2026-11-11 12:44:20,183 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 12:44:20 impressed-jade.ptr.network python[2536921]: 2026-11-11 12:44:20,719 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 12:44:30 impressed-jade.ptr.network python[2536921]: 2026-11-11 12:44:30,982 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 12:44:31 impressed-jade.ptr.network python[2536921]: 2026-11-11 12:44:31,606 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 12:44:32 impressed-jade.ptr.network python[2536921]: 2026-11-11 12:44:32,233 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 12:44:32 impressed-jade.ptr.network python[2536921]: 2026-11-11 12:44:32,864 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 12:44:33 impressed-jade.ptr.network python[2536921]: 2026-11-11 12:44:33,489 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 12:44:34 impressed-jade.ptr.network python[2536921]: 2026-11-11 12:44:34,108 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 12:44:44 impressed-jade.ptr.network python[2536921]: 2026-11-11 12:44:44,849 INFO HTTP Request: GET https://www.maxbet.rs/live/init/sr "HTTP/1.1 200 OK"
Nov 11 12:44:45 impressed-jade.ptr.network python[2536921]: 2026-11-11 12:44:45,047 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 12:44:45 impressed-jade.ptr.network python[2536921]: 2026-11-11 12:44:45,672 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 12:44:46 impressed-jade.ptr.network python[2536921]: 2026-11-11 12:44:46,299 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 12:44:46 impressed-jade.ptr.network python[2536921]: 2026-11-11 12:44:46,930 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
--- api log ---
Nov 11 12:44:13 impressed-jade.ptr.network systemd[1]: Started zicer-api.service - Zicer API.
Nov 11 12:44:13 impressed-jade.ptr.network uvicorn[2536943]: INFO:     Uvicorn running on http://127.0.0.1:8790 (Press CTRL+C to quit)
Nov 11 12:44:13 impressed-jade.ptr.network uvicorn[2536943]: INFO:     Started parent process [2536943]
Nov 11 12:44:14 impressed-jade.ptr.network uvicorn[2536948]: INFO:     Started server process [2536948]
Nov 11 12:44:14 impressed-jade.ptr.network uvicorn[2536948]: INFO:     Waiting for application startup.
Nov 11 12:44:15 impressed-jade.ptr.network uvicorn[2536947]: INFO:     Started server process [2536947]
Nov 11 12:44:15 impressed-jade.ptr.network uvicorn[2536947]: INFO:     Waiting for application startup.
Nov 11 12:44:15 impressed-jade.ptr.network uvicorn[2536948]: INFO:     Application startup complete.
Nov 11 12:44:15 impressed-jade.ptr.network uvicorn[2536947]: INFO:     Application startup complete.
Nov 11 12:44:22 impressed-jade.ptr.network uvicorn[2536947]: INFO:     109.92.227.130:0 - "GET /api/home?tz=180&sport=basketball HTTP/1.0" 200 OK
Nov 11 12:44:39 impressed-jade.ptr.network uvicorn[2536947]: INFO:     109.92.227.130:0 - "GET /api/sports?tz=180 HTTP/1.0" 200 OK
Nov 11 12:44:46 impressed-jade.ptr.network uvicorn[2536947]: INFO:     127.0.0.1:39754 - "GET /api/health HTTP/1.1" 200 OK
Nov 11 12:44:46 impressed-jade.ptr.network uvicorn[2536947]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 12:44:46 impressed-jade.ptr.network uvicorn[2536947]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 12:44:46 impressed-jade.ptr.network uvicorn[2536947]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
