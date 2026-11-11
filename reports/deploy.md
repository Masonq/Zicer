# Zicer deploy 2026-11-11 12:58 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: 54e2094 Раздел «Букмекеры» скрыт из меню, пока список пуст; пустая страница раздела ведёт на главную

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
2026/11/11 15:58:21 [warn] 2798014#2798014: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/11 15:58:21 [warn] 2798014#2798014: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/11 15:58:21 [warn] 2798014#2798014: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/11 15:58:21 [warn] 2798014#2798014: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/11 15:58:21 [warn] 2798014#2798014: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/11 15:58:21 [warn] 2798014#2798014: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
maxbet_results | 2026-11-11 12:57:05.681262 | no pending | 
other_results | 2026-11-11 12:57:07.896042 | other results 1 | 
finish_stale | 2026-11-11 12:57:18.037130 | finished 0 | 
tg_reminders | 2026-11-11 12:45:09.590618 | no token | 
football_live | 2026-11-11 12:57:46.162645 | live upserted 1 | 
tg_poll | 2026-11-11 12:58:04.311823 | no token | 
names | 2026-11-11 12:53:53.380995 | names 0 | 
basketball | 2026-11-11 12:58:18.825325 | basketball upserted 414 | 
basketball_week | 2026-11-11 12:58:19.718806 | nba week upserted 48 | 
other_sports | 2026-11-11 12:58:20.093429 | other sports new 0 | 
backfill | 2026-11-11 12:58:20.108355 | already | 
logos | 2026-11-11 12:58:20.211484 | logos: nothing to do | 
highlights | 2026-11-11 12:58:20.764216 | highlights +0 | 
odds | 2026-11-11 12:58:22.429419 | odds matched 70 | 
settle | 2026-11-11 12:58:22.471916 | settled 0 | 
xfeed | 2026-11-11 12:58:36.334996 | xfeed games 176, linked 0, updated 2 | 
live | 2026-11-11 12:58:46.683175 | live updated 3 | 
trends | 2026-11-10 23:36:09.974574 | trends 11 | 
analysis | 2026-11-10 23:36:10.199323 | analysis 27 | 
football | 2026-11-11 12:58:15.555067 | football upserted 97 |  "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
--- worker log ---
Nov 11 15:58:19 impressed-jade.ptr.network python[2797681]: 2026-11-11 15:58:19,938 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/T/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 15:58:20 impressed-jade.ptr.network python[2797681]: 2026-11-11 15:58:20,001 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/V/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 15:58:20 impressed-jade.ptr.network python[2797681]: 2026-11-11 15:58:20,082 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/W/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 15:58:20 impressed-jade.ptr.network python[2797681]: 2026-11-11 15:58:20,341 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpFqOv5z4WKps64GlQS4ytw "HTTP/1.1 200 OK"
Nov 11 15:58:20 impressed-jade.ptr.network python[2797681]: 2026-11-11 15:58:20,397 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC-2Cj6KlR9rCfR28zNLmOTA "HTTP/1.1 200 OK"
Nov 11 15:58:20 impressed-jade.ptr.network python[2797681]: 2026-11-11 15:58:20,413 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCWJ2lWNubArHWmf3FIHbfcQ "HTTP/1.1 200 OK"
Nov 11 15:58:20 impressed-jade.ptr.network python[2797681]: 2026-11-11 15:58:20,428 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCqFMzb-4AUf6WAIbl132QKA "HTTP/1.1 200 OK"
Nov 11 15:58:20 impressed-jade.ptr.network python[2797681]: 2026-11-11 15:58:20,442 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCwJ3S2Ix7aI1BhHexDJlmEg "HTTP/1.1 200 OK"
Nov 11 15:58:20 impressed-jade.ptr.network python[2797681]: 2026-11-11 15:58:20,509 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCTv-XvfzLX3i4IGWAm4sbmA "HTTP/1.1 200 OK"
Nov 11 15:58:20 impressed-jade.ptr.network python[2797681]: 2026-11-11 15:58:20,599 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCxfPjORdISQSn2fV8tcVmgA "HTTP/1.1 200 OK"
Nov 11 15:58:20 impressed-jade.ptr.network python[2797681]: 2026-11-11 15:58:20,618 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCQsH5XtIc9hONE1BQjucM0g "HTTP/1.1 200 OK"
Nov 11 15:58:20 impressed-jade.ptr.network python[2797681]: 2026-11-11 15:58:20,639 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC6UL29enLNe4mqwTfAyeNuw "HTTP/1.1 200 OK"
Nov 11 15:58:20 impressed-jade.ptr.network python[2797681]: 2026-11-11 15:58:20,659 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpryVRk_VDudG8SHXgWcG0w "HTTP/1.1 200 OK"
Nov 11 15:58:20 impressed-jade.ptr.network python[2797681]: 2026-11-11 15:58:20,746 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCyGa1YEx9ST66rYrJTGIKOw "HTTP/1.1 200 OK"
Nov 11 15:58:21 impressed-jade.ptr.network python[2797681]: 2026-11-11 15:58:21,266 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 15:58:21 impressed-jade.ptr.network python[2797681]: 2026-11-11 15:58:21,783 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 15:58:22 impressed-jade.ptr.network python[2797681]: 2026-11-11 15:58:22,232 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 15:58:32 impressed-jade.ptr.network python[2797681]: 2026-11-11 15:58:32,572 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 15:58:33 impressed-jade.ptr.network python[2797681]: 2026-11-11 15:58:33,201 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 15:58:33 impressed-jade.ptr.network python[2797681]: 2026-11-11 15:58:33,825 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 15:58:34 impressed-jade.ptr.network python[2797681]: 2026-11-11 15:58:34,460 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 15:58:35 impressed-jade.ptr.network python[2797681]: 2026-11-11 15:58:35,084 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 15:58:35 impressed-jade.ptr.network python[2797681]: 2026-11-11 15:58:35,704 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 15:58:46 impressed-jade.ptr.network python[2797681]: 2026-11-11 15:58:46,496 INFO HTTP Request: GET https://www.maxbet.rs/live/init/sr "HTTP/1.1 200 OK"
Nov 11 15:58:46 impressed-jade.ptr.network python[2797681]: 2026-11-11 15:58:46,819 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
--- api log ---
Nov 11 15:58:37 impressed-jade.ptr.network uvicorn[2797693]: INFO:     109.92.227.130:0 - "GET /api/me HTTP/1.0" 200 OK
Nov 11 15:58:37 impressed-jade.ptr.network uvicorn[2797693]: INFO:     109.92.227.130:0 - "GET /api/sports?tz=180 HTTP/1.0" 200 OK
Nov 11 15:58:37 impressed-jade.ptr.network uvicorn[2797692]: INFO:     109.92.227.130:0 - "GET /api/bookmakers HTTP/1.0" 200 OK
Nov 11 15:58:37 impressed-jade.ptr.network uvicorn[2797692]: INFO:     109.92.227.130:0 - "GET /api/clubs/battle?sport=football HTTP/1.0" 200 OK
Nov 11 15:58:37 impressed-jade.ptr.network uvicorn[2797692]: INFO:     109.92.227.130:0 - "GET /api/me/watch?ids= HTTP/1.0" 200 OK
Nov 11 15:58:37 impressed-jade.ptr.network uvicorn[2797692]: INFO:     109.92.227.130:0 - "GET /api/home?tz=180&sport=all HTTP/1.0" 200 OK
Nov 11 15:58:38 impressed-jade.ptr.network uvicorn[2797693]: INFO:     109.92.227.130:0 - "GET /api/sports?tz=180 HTTP/1.0" 200 OK
Nov 11 15:58:38 impressed-jade.ptr.network uvicorn[2797693]: INFO:     109.92.227.130:0 - "GET /api/ranking?period=month HTTP/1.0" 200 OK
Nov 11 15:58:38 impressed-jade.ptr.network uvicorn[2797692]: INFO:     109.92.227.130:0 - "GET /api/matches?day=live&sport=all&serbian=false&tz=180 HTTP/1.0" 200 OK
Nov 11 15:58:38 impressed-jade.ptr.network uvicorn[2797692]: INFO:     109.92.227.130:0 - "GET /api/matches?day=today&sport=all&serbian=false&tz=180 HTTP/1.0" 200 OK
Nov 11 15:58:38 impressed-jade.ptr.network uvicorn[2797692]: INFO:     109.92.227.130:0 - "GET /api/home?tz=180&sport=all HTTP/1.0" 200 OK
Nov 11 15:58:45 impressed-jade.ptr.network uvicorn[2797693]: INFO:     127.0.0.1:35048 - "GET /api/health HTTP/1.1" 200 OK
Nov 11 15:58:45 impressed-jade.ptr.network uvicorn[2797693]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 15:58:46 impressed-jade.ptr.network uvicorn[2797692]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 15:58:46 impressed-jade.ptr.network uvicorn[2797692]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
