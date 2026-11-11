# Zicer deploy 2026-11-11 23:48 UTC

Итог: УСПЕХ

Сайт: https://winly.rs

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: 79f1b42 Посты: шансы в процентах вместо кэфов (текст и картинка), своя карточка «Vrući mečevi večeras» на 5 матчей, итоги вчерашнего дня с цифрами и лучшими прогнозистами

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
домен: winly.rs (winly.rs по Google DNS → "data":"89.208.113.147", www: нет)

=== nginx ===
2026/11/12 02:48:30 [warn] 36412#36412: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/12 02:48:30 [warn] 36412#36412: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/12 02:48:30 [warn] 36412#36412: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/12 02:48:30 [warn] 36412#36412: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/12 02:48:30 [warn] 36412#36412: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/12 02:48:30 [warn] 36412#36412: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
OK: nginx перезагружен

=== HTTPS ===
Saving debug log to /var/log/letsencrypt/letsencrypt.log
Deploying certificate
Successfully deployed certificate for winly.rs to /etc/nginx/sites-enabled/zicer.conf
OK: HTTPS включён
OK: сертификат уже есть

=== Проверки ===
OK: сборка сайта полная
api local: {"ok":true,"app":"zicer"}
api https: {"ok":true,"app":"zicer"}
https / -> 200
https /api/health -> 200
https /api/home -> 200
https /mecevi -> 200
index cache: cache-control: no-cache
cache-control: no-cache, no-store, must-revalidate
matches: {'esports': 223, 'hockey': 63, 'volleyball': 42, 'tabletennis': 243, 'basketball': 713, 'handball': 47, 'waterpolo': 13, 'tennis': 25, 'football': 1104}
names | 2026-11-11 23:46:20.312486 | names 0 | 
tg_reminders | 2026-11-11 23:46:20.689505 | no token | 
social | 2026-11-11 23:46:29.555368 | social nothing due (live) | 
probe_sports | 2026-11-11 21:19:02.243724 | football/line:err(22bet.ug http 404) football/live:err(cooldown: 22bet.ug http 404) futsal/line:err(cooldown: 22bet.ug http 404) futsal/live:err(cooldown: 22bet.ug http 404) boxing/line:err(cooldown: 22bet.ug http 404) boxing/live:err(cooldown: 22bet.ug http 404) mma/line:err(cooldown: 22bet.ug http 404) mma/live:err(cooldown: 22bet.ug http 404) mma2/line:err(cooldown: 22bet.ug http 404) mma2/live:err(cooldown: 22bet.ug http 404) combat/line:err(cooldown: 22bet.ug http 404) combat/live:err(coold | 
maxbet_results | 2026-11-11 23:47:35.223598 | no pending | 
other_results | 2026-11-11 23:47:39.874234 | other results 10 | 
football_live | 2026-11-11 23:47:54.526789 | live upserted 11 | 
finish_stale | 2026-11-11 23:48:00.815114 | finished 0 | 
trends | 2026-11-10 23:36:09.974574 | trends 11 | 
tg_poll | 2026-11-11 23:48:09.441830 | no token | 
analysis | 2026-11-10 23:36:10.199323 | analysis 27 | 
live | 2026-11-11 23:48:19.649448 | live updated 1 | 
basketball | 2026-11-11 23:48:25.391316 | basketball upserted 414 | 
basketball_week | 2026-11-11 23:48:26.107231 | nba week upserted 43 | 
other_sports | 2026-11-11 23:48:26.612167 | other sports new 0 | 
backfill | 2026-11-11 23:48:26.616239 | already | 
logos | 2026-11-11 23:48:26.691411 | logos: nothing to do | 
highlights | 2026-11-11 23:48:27.132782 | highlights +0 | 
x22_line | 2026-11-11 23:48:34.406542 | x22 line new 0, fetched {'futsal': '0'} | 
odds | 2026-11-11 23:48:35.173210 | odds matched 66 | 
settle | 2026-11-11 23:48:35.238362 | settled 1 | 
xfeed | 2026-11-11 23:48:48.863053 | xfeed empty (22bet.ug http 404) | 
pandascore | 2026-11-11 23:41:10.997670 | pandascore new 130, updated 197, finished 0 | ile "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/engine/base.py", line 1986, in _exec_single_context
football | 2026-11-11 23:48:23.483853 | football upserted 100 |  "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
--- worker log ---
Nov 12 02:48:26 impressed-jade.ptr.network python[36070]: 2026-11-12 02:48:26,450 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/W/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 02:48:26 impressed-jade.ptr.network python[36070]: 2026-11-12 02:48:26,496 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/HB/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 02:48:26 impressed-jade.ptr.network python[36070]: 2026-11-12 02:48:26,548 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/TT/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 02:48:26 impressed-jade.ptr.network python[36070]: 2026-11-12 02:48:26,831 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpFqOv5z4WKps64GlQS4ytw "HTTP/1.1 200 OK"
Nov 12 02:48:26 impressed-jade.ptr.network python[36070]: 2026-11-12 02:48:26,876 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC-2Cj6KlR9rCfR28zNLmOTA "HTTP/1.1 200 OK"
Nov 12 02:48:26 impressed-jade.ptr.network python[36070]: 2026-11-12 02:48:26,888 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCWJ2lWNubArHWmf3FIHbfcQ "HTTP/1.1 200 OK"
Nov 12 02:48:26 impressed-jade.ptr.network python[36070]: 2026-11-12 02:48:26,905 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCqFMzb-4AUf6WAIbl132QKA "HTTP/1.1 200 OK"
Nov 12 02:48:26 impressed-jade.ptr.network python[36070]: 2026-11-12 02:48:26,975 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCwJ3S2Ix7aI1BhHexDJlmEg "HTTP/1.1 200 OK"
Nov 12 02:48:26 impressed-jade.ptr.network python[36070]: 2026-11-12 02:48:26,988 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCTv-XvfzLX3i4IGWAm4sbmA "HTTP/1.1 200 OK"
Nov 12 02:48:27 impressed-jade.ptr.network python[36070]: 2026-11-12 02:48:27,052 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCxfPjORdISQSn2fV8tcVmgA "HTTP/1.1 200 OK"
Nov 12 02:48:27 impressed-jade.ptr.network python[36070]: 2026-11-12 02:48:27,062 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCQsH5XtIc9hONE1BQjucM0g "HTTP/1.1 200 OK"
Nov 12 02:48:27 impressed-jade.ptr.network python[36070]: 2026-11-12 02:48:27,083 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC6UL29enLNe4mqwTfAyeNuw "HTTP/1.1 200 OK"
Nov 12 02:48:27 impressed-jade.ptr.network python[36070]: 2026-11-12 02:48:27,099 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpryVRk_VDudG8SHXgWcG0w "HTTP/1.1 200 OK"
Nov 12 02:48:27 impressed-jade.ptr.network python[36070]: 2026-11-12 02:48:27,117 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCyGa1YEx9ST66rYrJTGIKOw "HTTP/1.1 200 OK"
Nov 12 02:48:27 impressed-jade.ptr.network python[36070]: 2026-11-12 02:48:27,258 INFO HTTP Request: GET https://22bet.com/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 12 02:48:27 impressed-jade.ptr.network python[36070]: 2026-11-12 02:48:27,317 INFO HTTP Request: GET https://22bet.com/linefeed/get1x2_vzip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 404 Not Found"
Nov 12 02:48:27 impressed-jade.ptr.network python[36070]: 2026-11-12 02:48:27,556 INFO HTTP Request: GET https://22bet.co.ke/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 12 02:48:27 impressed-jade.ptr.network python[36070]: 2026-11-12 02:48:27,677 INFO HTTP Request: GET https://22bet.co.ke/linefeed/get1x2_vzip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 404 Not Found"
Nov 12 02:48:27 impressed-jade.ptr.network python[36070]: 2026-11-12 02:48:27,761 INFO HTTP Request: GET https://22bet.ng/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 12 02:48:27 impressed-jade.ptr.network python[36070]: 2026-11-12 02:48:27,971 INFO HTTP Request: GET https://22bet.ng/linefeed/get1x2_vzip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 404 Not Found"
Nov 12 02:48:34 impressed-jade.ptr.network python[36070]: 2026-11-12 02:48:34,267 INFO HTTP Request: GET https://22bet.ug/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 12 02:48:34 impressed-jade.ptr.network python[36070]: 2026-11-12 02:48:34,405 INFO HTTP Request: GET https://22bet.ug/linefeed/get1x2_vzip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 404 Not Found"
Nov 12 02:48:34 impressed-jade.ptr.network python[36070]: 2026-11-12 02:48:34,521 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 02:48:34 impressed-jade.ptr.network python[36070]: 2026-11-12 02:48:34,681 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 02:48:35 impressed-jade.ptr.network python[36070]: 2026-11-12 02:48:35,118 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
--- api log ---
Nov 12 02:48:38 impressed-jade.ptr.network uvicorn[36076]: INFO:     87.116.135.226:0 - "POST /api/t HTTP/1.0" 200 OK
Nov 12 02:48:38 impressed-jade.ptr.network uvicorn[36075]: INFO:     87.116.135.226:0 - "GET /api/me/invites HTTP/1.0" 200 OK
Nov 12 02:48:38 impressed-jade.ptr.network uvicorn[36075]: INFO:     87.116.135.226:0 - "GET /api/users/Anonymous HTTP/1.0" 200 OK
Nov 12 02:48:38 impressed-jade.ptr.network uvicorn[36075]: INFO:     87.116.135.226:0 - "GET /api/sports?tz=60 HTTP/1.0" 200 OK
Nov 12 02:48:38 impressed-jade.ptr.network uvicorn[36076]: INFO:     87.116.135.226:0 - "GET /api/ranking?period=month HTTP/1.0" 200 OK
Nov 12 02:48:38 impressed-jade.ptr.network uvicorn[36076]: INFO:     87.116.135.226:0 - "GET /api/matches?day=live&sport=all&serbian=false&tz=60 HTTP/1.0" 200 OK
Nov 12 02:48:38 impressed-jade.ptr.network uvicorn[36075]: INFO:     87.116.135.226:0 - "GET /api/matches?day=today&sport=all&serbian=false&tz=60 HTTP/1.0" 200 OK
Nov 12 02:48:38 impressed-jade.ptr.network uvicorn[36075]: INFO:     87.116.135.226:0 - "GET /api/home?tz=60&sport=all HTTP/1.0" 200 OK
Nov 12 02:48:51 impressed-jade.ptr.network uvicorn[36075]: INFO:     87.116.135.226:0 - "GET /api/sports?tz=60 HTTP/1.0" 200 OK
Nov 12 02:48:51 impressed-jade.ptr.network uvicorn[36075]: INFO:     87.116.135.226:0 - "POST /api/t HTTP/1.0" 200 OK
Nov 12 02:48:51 impressed-jade.ptr.network uvicorn[36075]: INFO:     87.116.135.226:0 - "GET /api/home?tz=60&sport=all HTTP/1.0" 200 OK
Nov 12 02:48:53 impressed-jade.ptr.network uvicorn[36076]: INFO:     127.0.0.1:33968 - "GET /api/health HTTP/1.1" 200 OK
Nov 12 02:48:53 impressed-jade.ptr.network uvicorn[36075]: INFO:     127.0.0.1:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 12 02:48:53 impressed-jade.ptr.network uvicorn[36075]: INFO:     127.0.0.1:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 12 02:48:54 impressed-jade.ptr.network uvicorn[36075]: INFO:     127.0.0.1:0 - "GET /api/home HTTP/1.0" 200 OK
```
