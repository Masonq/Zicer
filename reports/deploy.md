# Zicer deploy 2026-11-11 09:50 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: e30b251 НБА и НХЛ: полные официальные названия команд (Нью-Йорк Никс, Вашингтон Уизардс, Монреаль Канадиенс) и правильные русские названия вместо дословного перевода

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
2026/11/11 12:49:46 [warn] 2544729#2544729: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/11 12:49:46 [warn] 2544729#2544729: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/11 12:49:46 [warn] 2544729#2544729: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/11 12:49:46 [warn] 2544729#2544729: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/11 12:49:46 [warn] 2544729#2544729: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/11 12:49:46 [warn] 2544729#2544729: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
finish_stale | 2026-11-11 09:48:37.232203 | finished 0 | 
football_live | 2026-11-11 09:48:56.162800 | live upserted 1 | 
names | 2026-11-11 09:49:23.484233 | names 0 | 
tg_reminders | 2026-11-11 09:49:23.960847 | no token | 
tg_poll | 2026-11-11 09:49:32.816624 | no token | 
football | 2026-11-11 09:49:39.987289 | football upserted 97 |  "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
basketball | 2026-11-11 09:49:41.977095 | basketball upserted 414 | 
basketball_week | 2026-11-11 09:49:42.736539 | nba week upserted 48 | 
other_sports | 2026-11-11 09:49:43.113489 | other sports new 0 | 
backfill | 2026-11-11 09:49:43.120339 | already | 
logos | 2026-11-11 09:49:43.210392 | logos: nothing to do | 
highlights | 2026-11-11 09:49:43.664908 | highlights +0 | 
odds | 2026-11-11 09:49:44.698567 | odds matched 69 | 
settle | 2026-11-11 09:49:44.720926 | settled 0 | 
xfeed | 2026-11-11 09:49:58.572925 | xfeed games 134, linked 0, updated 0 | 
live | 2026-11-11 09:50:10.071872 | live updated 0 | 
trends | 2026-11-10 23:36:09.974574 | trends 11 | 
analysis | 2026-11-10 23:36:10.199323 | analysis 27 | 
maxbet_results | 2026-11-11 09:47:31.989628 | no pending | 
other_results | 2026-11-11 09:47:31.995962 | no pending | 
--- worker log ---
Nov 11 12:49:43 impressed-jade.ptr.network python[2544401]: 2026-11-11 12:49:43,023 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/V/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 12:49:43 impressed-jade.ptr.network python[2544401]: 2026-11-11 12:49:43,104 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/W/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 12:49:43 impressed-jade.ptr.network python[2544401]: 2026-11-11 12:49:43,342 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpFqOv5z4WKps64GlQS4ytw "HTTP/1.1 200 OK"
Nov 11 12:49:43 impressed-jade.ptr.network python[2544401]: 2026-11-11 12:49:43,401 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC-2Cj6KlR9rCfR28zNLmOTA "HTTP/1.1 200 OK"
Nov 11 12:49:43 impressed-jade.ptr.network python[2544401]: 2026-11-11 12:49:43,412 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCWJ2lWNubArHWmf3FIHbfcQ "HTTP/1.1 200 OK"
Nov 11 12:49:43 impressed-jade.ptr.network python[2544401]: 2026-11-11 12:49:43,425 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCqFMzb-4AUf6WAIbl132QKA "HTTP/1.1 200 OK"
Nov 11 12:49:43 impressed-jade.ptr.network python[2544401]: 2026-11-11 12:49:43,438 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCwJ3S2Ix7aI1BhHexDJlmEg "HTTP/1.1 200 OK"
Nov 11 12:49:43 impressed-jade.ptr.network python[2544401]: 2026-11-11 12:49:43,449 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCTv-XvfzLX3i4IGWAm4sbmA "HTTP/1.1 200 OK"
Nov 11 12:49:43 impressed-jade.ptr.network python[2544401]: 2026-11-11 12:49:43,518 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCxfPjORdISQSn2fV8tcVmgA "HTTP/1.1 200 OK"
Nov 11 12:49:43 impressed-jade.ptr.network python[2544401]: 2026-11-11 12:49:43,580 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCQsH5XtIc9hONE1BQjucM0g "HTTP/1.1 200 OK"
Nov 11 12:49:43 impressed-jade.ptr.network python[2544401]: 2026-11-11 12:49:43,603 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC6UL29enLNe4mqwTfAyeNuw "HTTP/1.1 200 OK"
Nov 11 12:49:43 impressed-jade.ptr.network python[2544401]: 2026-11-11 12:49:43,624 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpryVRk_VDudG8SHXgWcG0w "HTTP/1.1 200 OK"
Nov 11 12:49:43 impressed-jade.ptr.network python[2544401]: 2026-11-11 12:49:43,644 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCyGa1YEx9ST66rYrJTGIKOw "HTTP/1.1 200 OK"
Nov 11 12:49:43 impressed-jade.ptr.network python[2544401]: 2026-11-11 12:49:43,797 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 12:49:44 impressed-jade.ptr.network python[2544401]: 2026-11-11 12:49:44,218 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 12:49:44 impressed-jade.ptr.network python[2544401]: 2026-11-11 12:49:44,584 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 12:49:54 impressed-jade.ptr.network python[2544401]: 2026-11-11 12:49:54,825 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 12:49:55 impressed-jade.ptr.network python[2544401]: 2026-11-11 12:49:55,449 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 12:49:56 impressed-jade.ptr.network python[2544401]: 2026-11-11 12:49:56,075 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 12:49:56 impressed-jade.ptr.network python[2544401]: 2026-11-11 12:49:56,707 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 12:49:57 impressed-jade.ptr.network python[2544401]: 2026-11-11 12:49:57,332 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 12:49:57 impressed-jade.ptr.network python[2544401]: 2026-11-11 12:49:57,950 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 12:50:09 impressed-jade.ptr.network python[2544401]: 2026-11-11 12:50:09,742 INFO HTTP Request: GET https://www.maxbet.rs/live/init/sr "HTTP/1.1 200 OK"
Nov 11 12:50:10 impressed-jade.ptr.network python[2544401]: 2026-11-11 12:50:10,180 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 12:50:10 impressed-jade.ptr.network python[2544401]: 2026-11-11 12:50:10,811 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
--- api log ---
Nov 11 12:49:50 impressed-jade.ptr.network uvicorn[2544407]: INFO:     109.92.227.130:0 - "GET /api/sports?tz=180 HTTP/1.0" 200 OK
Nov 11 12:49:50 impressed-jade.ptr.network uvicorn[2544407]: INFO:     109.92.227.130:0 - "GET /api/sports?tz=180 HTTP/1.0" 200 OK
Nov 11 12:49:50 impressed-jade.ptr.network uvicorn[2544407]: INFO:     109.92.227.130:0 - "GET /api/me HTTP/1.0" 200 OK
Nov 11 12:49:50 impressed-jade.ptr.network uvicorn[2544406]: INFO:     109.92.227.130:0 - "GET /api/clubs/battle?sport=football HTTP/1.0" 200 OK
Nov 11 12:49:50 impressed-jade.ptr.network uvicorn[2544406]: INFO:     109.92.227.130:0 - "GET /api/home?tz=180&sport=all HTTP/1.0" 200 OK
Nov 11 12:49:52 impressed-jade.ptr.network uvicorn[2544407]: INFO:     109.92.227.130:0 - "GET /api/sports?tz=180 HTTP/1.0" 200 OK
Nov 11 12:49:52 impressed-jade.ptr.network uvicorn[2544406]: INFO:     109.92.227.130:0 - "GET /api/ranking?period=month HTTP/1.0" 200 OK
Nov 11 12:49:52 impressed-jade.ptr.network uvicorn[2544406]: INFO:     109.92.227.130:0 - "GET /api/matches?day=live&sport=all&serbian=false&tz=180 HTTP/1.0" 200 OK
Nov 11 12:49:52 impressed-jade.ptr.network uvicorn[2544406]: INFO:     109.92.227.130:0 - "GET /api/matches?day=today&sport=all&serbian=false&tz=180 HTTP/1.0" 200 OK
Nov 11 12:49:52 impressed-jade.ptr.network uvicorn[2544407]: INFO:     109.92.227.130:0 - "GET /api/home?tz=180&sport=all HTTP/1.0" 200 OK
Nov 11 12:50:07 impressed-jade.ptr.network uvicorn[2544407]: INFO:     109.92.227.130:0 - "GET /api/sports?tz=180 HTTP/1.0" 200 OK
Nov 11 12:50:09 impressed-jade.ptr.network uvicorn[2544407]: INFO:     127.0.0.1:35036 - "GET /api/health HTTP/1.1" 200 OK
Nov 11 12:50:10 impressed-jade.ptr.network uvicorn[2544407]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 12:50:10 impressed-jade.ptr.network uvicorn[2544407]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 12:50:10 impressed-jade.ptr.network uvicorn[2544407]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
