# Zicer deploy 2026-11-11 13:36 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: 9c46eac Рост: своя аналитика (источники, кампании, конверсия), приглашения с бонусом, SEO (страницы для роботов с разметкой SportsEvent, sitemap, robots, hreflang, понятные адреса, страницы лиг, подтверждение Google/Bing), публикации в Telegram/Facebook-страницу/Instagram/Threads/Bluesky/Viber с тестовым режимом и расписанием, картинки постов и вертикальные видео, полуавтомат для групп Facebook, виджет для фан-сайтов, конкурс недели; разделы Трафик/SEO/Публикации/Группы/Виджет в админке

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
2026/11/11 16:36:11 [warn] 2847347#2847347: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/11 16:36:11 [warn] 2847347#2847347: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/11 16:36:11 [warn] 2847347#2847347: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/11 16:36:11 [warn] 2847347#2847347: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/11 16:36:11 [warn] 2847347#2847347: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/11 16:36:11 [warn] 2847347#2847347: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
finish_stale | 2026-11-11 13:35:52.115812 | finished 0 | 
basketball | 2026-11-11 13:36:06.666071 | basketball upserted 414 | 
basketball_week | 2026-11-11 13:36:07.539104 | nba week upserted 48 | 
other_sports | 2026-11-11 13:36:07.900971 | other sports new 0 | 
backfill | 2026-11-11 13:36:07.906992 | already | 
logos | 2026-11-11 13:36:07.994412 | logos: nothing to do | 
highlights | 2026-11-11 13:36:08.412700 | highlights +0 | 
odds | 2026-11-11 13:36:09.282224 | odds matched 70 | 
settle | 2026-11-11 13:36:09.311841 | settled 0 | 
xfeed | 2026-11-11 13:36:23.202139 | xfeed games 162, linked 0, updated 3 | 
live | 2026-11-11 13:36:33.463852 | live updated 4 | 
tg_reminders | 2026-11-11 13:33:54.180015 | no token | 
maxbet_results | 2026-11-11 13:34:05.356940 | no pending | 
other_results | 2026-11-11 13:34:08.477508 | other results 3 | 
names | 2026-11-11 13:34:29.987711 | names 16 | 
trends | 2026-11-10 23:36:09.974574 | trends 11 | 
analysis | 2026-11-10 23:36:10.199323 | analysis 27 | 
football_live | 2026-11-11 13:35:33.933163 | live upserted 1 | 
tg_poll | 2026-11-11 13:35:42.782920 | no token | 
football | 2026-11-11 13:36:04.893134 | football upserted 97 |  "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
--- worker log ---
Nov 11 16:36:08 impressed-jade.ptr.network python[2847017]: 2026-11-11 16:36:08,172 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCWJ2lWNubArHWmf3FIHbfcQ "HTTP/1.1 200 OK"
Nov 11 16:36:08 impressed-jade.ptr.network python[2847017]: 2026-11-11 16:36:08,189 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCqFMzb-4AUf6WAIbl132QKA "HTTP/1.1 200 OK"
Nov 11 16:36:08 impressed-jade.ptr.network python[2847017]: 2026-11-11 16:36:08,200 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCwJ3S2Ix7aI1BhHexDJlmEg "HTTP/1.1 200 OK"
Nov 11 16:36:08 impressed-jade.ptr.network python[2847017]: 2026-11-11 16:36:08,213 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCTv-XvfzLX3i4IGWAm4sbmA "HTTP/1.1 200 OK"
Nov 11 16:36:08 impressed-jade.ptr.network python[2847017]: 2026-11-11 16:36:08,322 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCxfPjORdISQSn2fV8tcVmgA "HTTP/1.1 200 OK"
Nov 11 16:36:08 impressed-jade.ptr.network python[2847017]: 2026-11-11 16:36:08,333 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCQsH5XtIc9hONE1BQjucM0g "HTTP/1.1 200 OK"
Nov 11 16:36:08 impressed-jade.ptr.network python[2847017]: 2026-11-11 16:36:08,356 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC6UL29enLNe4mqwTfAyeNuw "HTTP/1.1 200 OK"
Nov 11 16:36:08 impressed-jade.ptr.network python[2847017]: 2026-11-11 16:36:08,376 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpryVRk_VDudG8SHXgWcG0w "HTTP/1.1 200 OK"
Nov 11 16:36:08 impressed-jade.ptr.network python[2847017]: 2026-11-11 16:36:08,395 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCyGa1YEx9ST66rYrJTGIKOw "HTTP/1.1 200 OK"
Nov 11 16:36:08 impressed-jade.ptr.network python[2847017]: 2026-11-11 16:36:08,537 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 16:36:08 impressed-jade.ptr.network python[2847017]: 2026-11-11 16:36:08,723 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 16:36:09 impressed-jade.ptr.network python[2847017]: 2026-11-11 16:36:09,159 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 16:36:19 impressed-jade.ptr.network python[2847017]: 2026-11-11 16:36:19,403 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 16:36:20 impressed-jade.ptr.network python[2847017]: 2026-11-11 16:36:20,030 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 16:36:20 impressed-jade.ptr.network python[2847017]: 2026-11-11 16:36:20,683 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 16:36:21 impressed-jade.ptr.network python[2847017]: 2026-11-11 16:36:21,315 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 16:36:21 impressed-jade.ptr.network python[2847017]: 2026-11-11 16:36:21,946 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 16:36:22 impressed-jade.ptr.network python[2847017]: 2026-11-11 16:36:22,571 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 16:36:33 impressed-jade.ptr.network python[2847017]: 2026-11-11 16:36:33,354 INFO HTTP Request: GET https://www.maxbet.rs/live/init/sr "HTTP/1.1 200 OK"
Nov 11 16:36:33 impressed-jade.ptr.network python[2847017]: 2026-11-11 16:36:33,794 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 16:36:34 impressed-jade.ptr.network python[2847017]: 2026-11-11 16:36:34,425 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 16:36:35 impressed-jade.ptr.network python[2847017]: 2026-11-11 16:36:35,062 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 16:36:35 impressed-jade.ptr.network python[2847017]: 2026-11-11 16:36:35,708 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 16:36:36 impressed-jade.ptr.network python[2847017]: 2026-11-11 16:36:36,337 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 16:36:36 impressed-jade.ptr.network python[2847017]: 2026-11-11 16:36:36,963 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
--- api log ---
Nov 11 16:36:19 impressed-jade.ptr.network uvicorn[2847026]: INFO:     109.92.227.130:0 - "GET /api/sports?tz=180 HTTP/1.0" 200 OK
Nov 11 16:36:19 impressed-jade.ptr.network uvicorn[2847025]: INFO:     109.92.227.130:0 - "GET /api/me HTTP/1.0" 200 OK
Nov 11 16:36:19 impressed-jade.ptr.network uvicorn[2847025]: INFO:     109.92.227.130:0 - "GET /api/bookmakers HTTP/1.0" 200 OK
Nov 11 16:36:19 impressed-jade.ptr.network uvicorn[2847025]: INFO:     109.92.227.130:0 - "POST /api/t HTTP/1.0" 200 OK
Nov 11 16:36:19 impressed-jade.ptr.network uvicorn[2847025]: INFO:     109.92.227.130:0 - "GET /api/me/watch?ids= HTTP/1.0" 200 OK
Nov 11 16:36:19 impressed-jade.ptr.network uvicorn[2847025]: INFO:     109.92.227.130:0 - "GET /api/home?tz=180&sport=all HTTP/1.0" 200 OK
Nov 11 16:36:20 impressed-jade.ptr.network uvicorn[2847025]: INFO:     109.92.227.130:0 - "GET /api/sports?tz=180 HTTP/1.0" 200 OK
Nov 11 16:36:20 impressed-jade.ptr.network uvicorn[2847026]: INFO:     109.92.227.130:0 - "GET /api/matches?day=live&sport=all&serbian=false&tz=180 HTTP/1.0" 200 OK
Nov 11 16:36:20 impressed-jade.ptr.network uvicorn[2847026]: INFO:     109.92.227.130:0 - "GET /api/ranking?period=month HTTP/1.0" 200 OK
Nov 11 16:36:20 impressed-jade.ptr.network uvicorn[2847025]: INFO:     109.92.227.130:0 - "GET /api/matches?day=today&sport=all&serbian=false&tz=180 HTTP/1.0" 200 OK
Nov 11 16:36:21 impressed-jade.ptr.network uvicorn[2847025]: INFO:     109.92.227.130:0 - "GET /api/home?tz=180&sport=all HTTP/1.0" 200 OK
Nov 11 16:36:35 impressed-jade.ptr.network uvicorn[2847026]: INFO:     127.0.0.1:52748 - "GET /api/health HTTP/1.1" 200 OK
Nov 11 16:36:36 impressed-jade.ptr.network uvicorn[2847025]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 16:36:36 impressed-jade.ptr.network uvicorn[2847025]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 16:36:36 impressed-jade.ptr.network uvicorn[2847025]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
