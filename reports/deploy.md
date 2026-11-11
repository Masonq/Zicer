# Zicer deploy 2026-11-11 09:15 UTC

Итог: ЕСТЬ ОШИБКИ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: eb9ef65 Обзоры матчей с официальных YouTube-каналов лиг (Евролига, Еврокубок, NBA, NHL, КХЛ, LaLiga, Serie A, Ligue 1, Bundesliga, Premier League, UEFA): автоподбор к завершённым матчам, плеер на странице матча, лента «Свежие обзоры» на главной

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
FAIL: zicer-worker не запустился

=== Автообновление ===
OK: таймер автообновления включён

=== Админ ===
OK: админ есть

=== nginx ===
2026/11/11 12:14:45 [warn] 2497031#2497031: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/11 12:14:45 [warn] 2497031#2497031: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/11 12:14:45 [warn] 2497031#2497031: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/11 12:14:45 [warn] 2497031#2497031: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/11 12:14:45 [warn] 2497031#2497031: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/11 12:14:45 [warn] 2497031#2497031: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
finish_stale | 2026-11-11 09:13:57.158624 | finished 0 | 
tg_poll | 2026-11-11 09:14:12.956117 | no token | 
live | 2026-11-11 09:14:18.247421 | live updated 0 | 
maxbet_results | 2026-11-11 09:14:22.112663 | no pending | 
other_results | 2026-11-11 09:14:22.117957 | no pending | 
football_live | 2026-11-11 09:14:28.251876 | live upserted 1 | 
football | 2026-11-11 09:14:48.970111 | football upserted 97 |  "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
basketball | 2026-11-11 09:14:50.887553 | basketball upserted 414 | 
basketball_week | 2026-11-11 09:14:52.005879 | nba week upserted 48 | 
other_sports | 2026-11-11 09:14:52.453368 | other sports new 0 | 
backfill | 2026-11-11 09:14:52.461998 | already | 
logos | 2026-11-11 09:14:52.538224 | logos: nothing to do | 
highlights | 2026-11-11 09:14:53.164951 | highlights +23 | 
odds | 2026-11-11 09:14:54.407525 | odds matched 69 | 
settle | 2026-11-11 09:14:54.441463 | settled 0 | 
xfeed | 2026-11-11 09:15:08.555744 | xfeed games 141, linked 0, updated 0 | 
names | 2026-11-11 09:12:01.505529 | names 0 | 
tg_reminders | 2026-11-11 09:12:02.094327 | no token | 
trends | 2026-11-10 23:36:09.974574 | trends 11 | 
analysis | 2026-11-10 23:36:10.199323 | analysis 27 | 
--- worker log ---
Nov 11 12:14:51 impressed-jade.ptr.network python[2497043]: 2026-11-11 12:14:51,893 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261118 "HTTP/1.1 200 OK"
Nov 11 12:14:52 impressed-jade.ptr.network python[2497043]: 2026-11-11 12:14:52,125 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/H/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 12:14:52 impressed-jade.ptr.network python[2497043]: 2026-11-11 12:14:52,278 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/T/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 12:14:52 impressed-jade.ptr.network python[2497043]: 2026-11-11 12:14:52,360 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/V/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 12:14:52 impressed-jade.ptr.network python[2497043]: 2026-11-11 12:14:52,445 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/W/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 12:14:52 impressed-jade.ptr.network python[2497043]: 2026-11-11 12:14:52,663 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpFqOv5z4WKps64GlQS4ytw "HTTP/1.1 200 OK"
Nov 11 12:14:52 impressed-jade.ptr.network python[2497043]: 2026-11-11 12:14:52,755 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC-2Cj6KlR9rCfR28zNLmOTA "HTTP/1.1 200 OK"
Nov 11 12:14:52 impressed-jade.ptr.network python[2497043]: 2026-11-11 12:14:52,765 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCWJ2lWNubArHWmf3FIHbfcQ "HTTP/1.1 200 OK"
Nov 11 12:14:52 impressed-jade.ptr.network python[2497043]: 2026-11-11 12:14:52,781 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCqFMzb-4AUf6WAIbl132QKA "HTTP/1.1 200 OK"
Nov 11 12:14:52 impressed-jade.ptr.network python[2497043]: 2026-11-11 12:14:52,848 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCwJ3S2Ix7aI1BhHexDJlmEg "HTTP/1.1 200 OK"
Nov 11 12:14:52 impressed-jade.ptr.network python[2497043]: 2026-11-11 12:14:52,861 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCTv-XvfzLX3i4IGWAm4sbmA "HTTP/1.1 200 OK"
Nov 11 12:14:52 impressed-jade.ptr.network python[2497043]: 2026-11-11 12:14:52,944 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCxfPjORdISQSn2fV8tcVmgA "HTTP/1.1 200 OK"
Nov 11 12:14:52 impressed-jade.ptr.network python[2497043]: 2026-11-11 12:14:52,963 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCQsH5XtIc9hONE1BQjucM0g "HTTP/1.1 200 OK"
Nov 11 12:14:53 impressed-jade.ptr.network python[2497043]: 2026-11-11 12:14:53,001 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC6UL29enLNe4mqwTfAyeNuw "HTTP/1.1 200 OK"
Nov 11 12:14:53 impressed-jade.ptr.network python[2497043]: 2026-11-11 12:14:53,094 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpryVRk_VDudG8SHXgWcG0w "HTTP/1.1 200 OK"
Nov 11 12:14:53 impressed-jade.ptr.network python[2497043]: 2026-11-11 12:14:53,131 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCyGa1YEx9ST66rYrJTGIKOw "HTTP/1.1 200 OK"
Nov 11 12:14:53 impressed-jade.ptr.network python[2497043]: 2026-11-11 12:14:53,311 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 12:14:53 impressed-jade.ptr.network python[2497043]: 2026-11-11 12:14:53,785 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 12:14:54 impressed-jade.ptr.network python[2497043]: 2026-11-11 12:14:54,244 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 12:15:04 impressed-jade.ptr.network python[2497043]: 2026-11-11 12:15:04,558 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 12:15:05 impressed-jade.ptr.network python[2497043]: 2026-11-11 12:15:05,188 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 12:15:05 impressed-jade.ptr.network python[2497043]: 2026-11-11 12:15:05,815 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 12:15:06 impressed-jade.ptr.network python[2497043]: 2026-11-11 12:15:06,696 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 12:15:07 impressed-jade.ptr.network python[2497043]: 2026-11-11 12:15:07,319 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 12:15:07 impressed-jade.ptr.network python[2497043]: 2026-11-11 12:15:07,936 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
--- api log ---
Nov 11 12:14:36 impressed-jade.ptr.network systemd[1]: Stopped zicer-api.service - Zicer API.
Nov 11 12:14:36 impressed-jade.ptr.network systemd[1]: zicer-api.service: Consumed 2min 33.408s CPU time, 631.9M memory peak, 207.0M memory swap peak.
Nov 11 12:14:36 impressed-jade.ptr.network systemd[1]: Started zicer-api.service - Zicer API.
Nov 11 12:14:37 impressed-jade.ptr.network uvicorn[2496722]: INFO:     Uvicorn running on http://127.0.0.1:8790 (Press CTRL+C to quit)
Nov 11 12:14:37 impressed-jade.ptr.network uvicorn[2496722]: INFO:     Started parent process [2496722]
Nov 11 12:14:38 impressed-jade.ptr.network uvicorn[2496730]: INFO:     Started server process [2496730]
Nov 11 12:14:38 impressed-jade.ptr.network uvicorn[2496730]: INFO:     Waiting for application startup.
Nov 11 12:14:38 impressed-jade.ptr.network uvicorn[2496730]: INFO:     Application startup complete.
Nov 11 12:14:38 impressed-jade.ptr.network uvicorn[2496729]: INFO:     Started server process [2496729]
Nov 11 12:14:38 impressed-jade.ptr.network uvicorn[2496729]: INFO:     Waiting for application startup.
Nov 11 12:14:38 impressed-jade.ptr.network uvicorn[2496729]: INFO:     Application startup complete.
Nov 11 12:15:09 impressed-jade.ptr.network uvicorn[2496729]: INFO:     127.0.0.1:34942 - "GET /api/health HTTP/1.1" 200 OK
Nov 11 12:15:09 impressed-jade.ptr.network uvicorn[2496729]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 12:15:10 impressed-jade.ptr.network uvicorn[2496730]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 12:15:10 impressed-jade.ptr.network uvicorn[2496729]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
