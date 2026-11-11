# Zicer deploy 2026-11-11 12:15 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: fd8160d Горячие матчи: две кнопки на всю ширину у тенниса; «К лайву» — каждое нажатие ведёт к следующему лайв-матчу по кругу, показывает номер (2/4) и подсвечивает матч

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
2026/11/11 15:15:31 [warn] 2740578#2740578: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/11 15:15:31 [warn] 2740578#2740578: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/11 15:15:31 [warn] 2740578#2740578: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/11 15:15:31 [warn] 2740578#2740578: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/11 15:15:31 [warn] 2740578#2740578: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/11 15:15:31 [warn] 2740578#2740578: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
live | 2026-11-11 12:15:53.635819 | live updated 3 | 
maxbet_results | 2026-11-11 12:14:01.820125 | no pending | 
other_results | 2026-11-11 12:14:04.743830 | other results 2 | 
finish_stale | 2026-11-11 12:14:28.596922 | finished 0 | 
names | 2026-11-11 12:14:57.264686 | names 0 | 
tg_reminders | 2026-11-11 12:14:57.294673 | no token | 
football_live | 2026-11-11 12:15:02.367149 | live upserted 1 | 
trends | 2026-11-10 23:36:09.974574 | trends 11 | 
analysis | 2026-11-10 23:36:10.199323 | analysis 27 | 
tg_poll | 2026-11-11 12:15:15.440323 | no token | 
basketball | 2026-11-11 12:15:26.563112 | basketball upserted 414 | 
basketball_week | 2026-11-11 12:15:27.190741 | nba week upserted 48 | 
other_sports | 2026-11-11 12:15:27.566240 | other sports new 0 | 
backfill | 2026-11-11 12:15:27.573974 | already | 
logos | 2026-11-11 12:15:27.659370 | logos: nothing to do | 
highlights | 2026-11-11 12:15:28.184533 | highlights +0 | 
odds | 2026-11-11 12:15:29.439075 | odds matched 70 | 
settle | 2026-11-11 12:15:29.461544 | settled 0 | 
xfeed | 2026-11-11 12:15:43.333822 | xfeed games 178, linked 0, updated 2 | 
football | 2026-11-11 12:15:24.498667 | football upserted 97 |  "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
--- worker log ---
Nov 11 15:15:27 impressed-jade.ptr.network python[2740249]: 2026-11-11 15:15:27,851 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC-2Cj6KlR9rCfR28zNLmOTA "HTTP/1.1 200 OK"
Nov 11 15:15:27 impressed-jade.ptr.network python[2740249]: 2026-11-11 15:15:27,905 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCWJ2lWNubArHWmf3FIHbfcQ "HTTP/1.1 200 OK"
Nov 11 15:15:27 impressed-jade.ptr.network python[2740249]: 2026-11-11 15:15:27,921 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCqFMzb-4AUf6WAIbl132QKA "HTTP/1.1 200 OK"
Nov 11 15:15:27 impressed-jade.ptr.network python[2740249]: 2026-11-11 15:15:27,986 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCwJ3S2Ix7aI1BhHexDJlmEg "HTTP/1.1 200 OK"
Nov 11 15:15:28 impressed-jade.ptr.network python[2740249]: 2026-11-11 15:15:28,001 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCTv-XvfzLX3i4IGWAm4sbmA "HTTP/1.1 200 OK"
Nov 11 15:15:28 impressed-jade.ptr.network python[2740249]: 2026-11-11 15:15:28,079 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCxfPjORdISQSn2fV8tcVmgA "HTTP/1.1 200 OK"
Nov 11 15:15:28 impressed-jade.ptr.network python[2740249]: 2026-11-11 15:15:28,091 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCQsH5XtIc9hONE1BQjucM0g "HTTP/1.1 200 OK"
Nov 11 15:15:28 impressed-jade.ptr.network python[2740249]: 2026-11-11 15:15:28,117 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC6UL29enLNe4mqwTfAyeNuw "HTTP/1.1 200 OK"
Nov 11 15:15:28 impressed-jade.ptr.network python[2740249]: 2026-11-11 15:15:28,137 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpryVRk_VDudG8SHXgWcG0w "HTTP/1.1 200 OK"
Nov 11 15:15:28 impressed-jade.ptr.network python[2740249]: 2026-11-11 15:15:28,165 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCyGa1YEx9ST66rYrJTGIKOw "HTTP/1.1 200 OK"
Nov 11 15:15:28 impressed-jade.ptr.network python[2740249]: 2026-11-11 15:15:28,329 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 15:15:28 impressed-jade.ptr.network python[2740249]: 2026-11-11 15:15:28,849 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 15:15:29 impressed-jade.ptr.network python[2740249]: 2026-11-11 15:15:29,296 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 15:15:39 impressed-jade.ptr.network python[2740249]: 2026-11-11 15:15:39,574 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 15:15:40 impressed-jade.ptr.network python[2740249]: 2026-11-11 15:15:40,207 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 15:15:40 impressed-jade.ptr.network python[2740249]: 2026-11-11 15:15:40,833 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 15:15:41 impressed-jade.ptr.network python[2740249]: 2026-11-11 15:15:41,461 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 15:15:42 impressed-jade.ptr.network python[2740249]: 2026-11-11 15:15:42,084 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 15:15:42 impressed-jade.ptr.network python[2740249]: 2026-11-11 15:15:42,704 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 15:15:53 impressed-jade.ptr.network python[2740249]: 2026-11-11 15:15:53,496 INFO HTTP Request: GET https://www.maxbet.rs/live/init/sr "HTTP/1.1 200 OK"
Nov 11 15:15:53 impressed-jade.ptr.network python[2740249]: 2026-11-11 15:15:53,768 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 15:15:54 impressed-jade.ptr.network python[2740249]: 2026-11-11 15:15:54,653 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 15:15:55 impressed-jade.ptr.network python[2740249]: 2026-11-11 15:15:55,281 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 15:15:55 impressed-jade.ptr.network python[2740249]: 2026-11-11 15:15:55,911 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 15:15:56 impressed-jade.ptr.network python[2740249]: 2026-11-11 15:15:56,547 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
--- api log ---
Nov 11 15:15:22 impressed-jade.ptr.network uvicorn[2740251]: INFO:     Uvicorn running on http://127.0.0.1:8790 (Press CTRL+C to quit)
Nov 11 15:15:22 impressed-jade.ptr.network uvicorn[2740251]: INFO:     Started parent process [2740251]
Nov 11 15:15:24 impressed-jade.ptr.network uvicorn[2740254]: INFO:     Started server process [2740254]
Nov 11 15:15:24 impressed-jade.ptr.network uvicorn[2740254]: INFO:     Waiting for application startup.
Nov 11 15:15:24 impressed-jade.ptr.network uvicorn[2740255]: INFO:     Started server process [2740255]
Nov 11 15:15:24 impressed-jade.ptr.network uvicorn[2740255]: INFO:     Waiting for application startup.
Nov 11 15:15:25 impressed-jade.ptr.network uvicorn[2740254]: INFO:     Application startup complete.
Nov 11 15:15:25 impressed-jade.ptr.network uvicorn[2740255]: INFO:     Application startup complete.
Nov 11 15:15:30 impressed-jade.ptr.network uvicorn[2740255]: INFO:     109.245.227.4:0 - "GET /api/me/watch?ids= HTTP/1.0" 200 OK
Nov 11 15:15:46 impressed-jade.ptr.network uvicorn[2740254]: INFO:     109.92.227.130:0 - "GET /api/clubs/battle?sport=football HTTP/1.0" 200 OK
Nov 11 15:15:55 impressed-jade.ptr.network uvicorn[2740255]: INFO:     127.0.0.1:53504 - "GET /api/health HTTP/1.1" 200 OK
Nov 11 15:15:55 impressed-jade.ptr.network uvicorn[2740254]: INFO:     109.92.227.130:0 - "GET /api/me/watch?ids= HTTP/1.0" 200 OK
Nov 11 15:15:55 impressed-jade.ptr.network uvicorn[2740255]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 15:15:55 impressed-jade.ptr.network uvicorn[2740255]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 15:15:55 impressed-jade.ptr.network uvicorn[2740255]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
