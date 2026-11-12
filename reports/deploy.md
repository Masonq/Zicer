# Zicer deploy 2026-11-12 11:27 UTC

Итог: УСПЕХ

Сайт: https://winly.rs

Админ: данные входа в /etc/zicer-admin.txt на сервере

Коммит: fe97c15 Отчёт: список всех проектов на сервере (сайты nginx, службы, папки, контейнеры, порты, базы, таймеры) в reports/server-projects.txt

```
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

=== Сторож сервера ===
OK: сторож включён (проверка раз в минуту)
OK: earlyoom включён
OK: swap есть
OK: аппаратный сторож ядра включён (softdog)
OK: снимок здоровья сервера записан

=== Админ ===
OK: админ есть
домен: winly.rs (winly.rs по Google DNS → "data":"89.208.113.147", www: нет)

=== nginx ===
2026/11/12 14:27:13 [warn] 138445#138445: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/12 14:27:13 [warn] 138445#138445: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/12 14:27:13 [warn] 138445#138445: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/12 14:27:13 [warn] 138445#138445: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/12 14:27:13 [warn] 138445#138445: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/12 14:27:13 [warn] 138445#138445: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
matches: {'esports': 235, 'hockey': 90, 'volleyball': 51, 'tabletennis': 400, 'handball': 62, 'basketball': 714, 'waterpolo': 15, 'tennis': 33, 'football': 1107}
names | 2026-11-12 11:25:41.734637 | names 0 | 
tg_reminders | 2026-11-12 11:25:42.240690 | no token | 
finish_stale | 2026-11-12 11:26:25.260701 | finished 0 | 
football_live | 2026-11-12 11:26:30.370432 | live upserted 10 | 
tg_poll | 2026-11-12 11:26:34.375484 | no token | 
basketball | 2026-11-12 11:27:00.238783 | basketball upserted 404 | 
basketball_week | 2026-11-12 11:27:01.537496 | nba week upserted 43 | 
other_sports | 2026-11-12 11:27:02.151070 | other sports new 0 | 
backfill | 2026-11-12 11:27:02.155166 | already | 
logos | 2026-11-12 11:27:02.276874 | logos: nothing to do | 
highlights | 2026-11-12 11:27:03.360624 | highlights +0 | 
x22_line | 2026-11-12 11:27:10.770825 | x22 line new 0, fetched {'futsal': '0'} | 
odds | 2026-11-12 11:27:11.954699 | odds matched 66 | 
settle | 2026-11-12 11:27:11.993208 | settled 0 | 
xfeed | 2026-11-12 11:27:25.618259 | xfeed empty (22bet.ug http 404) | 
live | 2026-11-12 11:27:35.880171 | live updated 4 | 
probe_sports | 2026-11-11 21:19:02.243724 | football/line:err(22bet.ug http 404) football/live:err(cooldown: 22bet.ug http 404) futsal/line:err(cooldown: 22bet.ug http 404) futsal/live:err(cooldown: 22bet.ug http 404) boxing/line:err(cooldown: 22bet.ug http 404) boxing/live:err(cooldown: 22bet.ug http 404) mma/line:err(cooldown: 22bet.ug http 404) mma/live:err(cooldown: 22bet.ug http 404) mma2/line:err(cooldown: 22bet.ug http 404) mma2/live:err(cooldown: 22bet.ug http 404) combat/line:err(cooldown: 22bet.ug http 404) combat/live:err(coold | 
maxbet_results | 2026-11-12 11:24:21.062735 | no pending | 
other_results | 2026-11-12 11:24:23.857105 | other results 11 | 
trends | 2026-11-10 23:36:09.974574 | trends 11 | 
analysis | 2026-11-10 23:36:10.199323 | analysis 27 | 
social | 2026-11-12 11:25:19.479367 | social nothing due (live) | 
football | 2026-11-12 11:26:57.879649 | football upserted 102 |  "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
pandascore | 2026-11-12 01:33:44.105768 | pandascore new 0, updated 206, finished 0, with streams 172, history lookups 40 | s/sqlalchemy/engine/base.py", line 1936, in _exec_single_context
--- worker log ---
Nov 12 14:27:01 impressed-jade.ptr.network python[136836]: 2026-11-12 14:27:01,990 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/HB/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 14:27:02 impressed-jade.ptr.network python[136836]: 2026-11-12 14:27:02,060 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/TT/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 14:27:02 impressed-jade.ptr.network python[136836]: 2026-11-12 14:27:02,469 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpFqOv5z4WKps64GlQS4ytw "HTTP/1.1 200 OK"
Nov 12 14:27:02 impressed-jade.ptr.network python[136836]: 2026-11-12 14:27:02,568 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC-2Cj6KlR9rCfR28zNLmOTA "HTTP/1.1 200 OK"
Nov 12 14:27:02 impressed-jade.ptr.network python[136836]: 2026-11-12 14:27:02,671 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCWJ2lWNubArHWmf3FIHbfcQ "HTTP/1.1 200 OK"
Nov 12 14:27:02 impressed-jade.ptr.network python[136836]: 2026-11-12 14:27:02,764 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCqFMzb-4AUf6WAIbl132QKA "HTTP/1.1 200 OK"
Nov 12 14:27:02 impressed-jade.ptr.network python[136836]: 2026-11-12 14:27:02,861 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCwJ3S2Ix7aI1BhHexDJlmEg "HTTP/1.1 200 OK"
Nov 12 14:27:02 impressed-jade.ptr.network python[136836]: 2026-11-12 14:27:02,876 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCTv-XvfzLX3i4IGWAm4sbmA "HTTP/1.1 200 OK"
Nov 12 14:27:02 impressed-jade.ptr.network python[136836]: 2026-11-12 14:27:02,968 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCxfPjORdISQSn2fV8tcVmgA "HTTP/1.1 200 OK"
Nov 12 14:27:03 impressed-jade.ptr.network python[136836]: 2026-11-12 14:27:03,041 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCQsH5XtIc9hONE1BQjucM0g "HTTP/1.1 200 OK"
Nov 12 14:27:03 impressed-jade.ptr.network python[136836]: 2026-11-12 14:27:03,159 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC6UL29enLNe4mqwTfAyeNuw "HTTP/1.1 200 OK"
Nov 12 14:27:03 impressed-jade.ptr.network python[136836]: 2026-11-12 14:27:03,241 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpryVRk_VDudG8SHXgWcG0w "HTTP/1.1 200 OK"
Nov 12 14:27:03 impressed-jade.ptr.network python[136836]: 2026-11-12 14:27:03,316 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCyGa1YEx9ST66rYrJTGIKOw "HTTP/1.1 200 OK"
Nov 12 14:27:03 impressed-jade.ptr.network python[136836]: 2026-11-12 14:27:03,517 INFO HTTP Request: GET https://22bet.com/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 12 14:27:03 impressed-jade.ptr.network python[136836]: 2026-11-12 14:27:03,584 INFO HTTP Request: GET https://22bet.com/linefeed/get1x2_vzip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 404 Not Found"
Nov 12 14:27:03 impressed-jade.ptr.network python[136836]: 2026-11-12 14:27:03,849 INFO HTTP Request: GET https://22bet.co.ke/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 12 14:27:03 impressed-jade.ptr.network python[136836]: 2026-11-12 14:27:03,976 INFO HTTP Request: GET https://22bet.co.ke/linefeed/get1x2_vzip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 404 Not Found"
Nov 12 14:27:04 impressed-jade.ptr.network python[136836]: 2026-11-12 14:27:04,057 INFO HTTP Request: GET https://22bet.ng/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 12 14:27:04 impressed-jade.ptr.network python[136836]: 2026-11-12 14:27:04,116 INFO HTTP Request: GET https://22bet.ng/linefeed/get1x2_vzip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 404 Not Found"
Nov 12 14:27:10 impressed-jade.ptr.network python[136836]: 2026-11-12 14:27:10,469 INFO HTTP Request: GET https://22bet.ug/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 12 14:27:10 impressed-jade.ptr.network python[136836]: 2026-11-12 14:27:10,768 INFO HTTP Request: GET https://22bet.ug/linefeed/get1x2_vzip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 404 Not Found"
Nov 12 14:27:10 impressed-jade.ptr.network python[136836]: 2026-11-12 14:27:10,918 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 14:27:11 impressed-jade.ptr.network python[136836]: 2026-11-12 14:27:11,113 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 14:27:11 impressed-jade.ptr.network python[136836]: 2026-11-12 14:27:11,881 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 14:27:35 impressed-jade.ptr.network python[136836]: 2026-11-12 14:27:35,779 INFO HTTP Request: GET https://www.maxbet.rs/live/init/sr "HTTP/1.1 200 OK"
--- api log ---
Nov 12 14:27:30 impressed-jade.ptr.network uvicorn[136863]: INFO:     109.92.227.130:0 - "GET /api/sports?tz=180 HTTP/1.0" 200 OK
Nov 12 14:27:30 impressed-jade.ptr.network uvicorn[136863]: INFO:     109.92.227.130:0 - "GET /api/bookmakers HTTP/1.0" 200 OK
Nov 12 14:27:30 impressed-jade.ptr.network uvicorn[136863]: INFO:     109.92.227.130:0 - "GET /api/clubs/battle?sport=football HTTP/1.0" 200 OK
Nov 12 14:27:30 impressed-jade.ptr.network uvicorn[136862]: INFO:     109.92.227.130:0 - "POST /api/t HTTP/1.0" 200 OK
Nov 12 14:27:30 impressed-jade.ptr.network uvicorn[136863]: INFO:     109.92.227.130:0 - "GET /api/me/watch?ids= HTTP/1.0" 200 OK
Nov 12 14:27:30 impressed-jade.ptr.network uvicorn[136862]: INFO:     109.92.227.130:0 - "GET /api/home?tz=180&sport=all HTTP/1.0" 200 OK
Nov 12 14:27:31 impressed-jade.ptr.network uvicorn[136863]: INFO:     109.92.227.130:0 - "GET /api/sports?tz=180 HTTP/1.0" 200 OK
Nov 12 14:27:31 impressed-jade.ptr.network uvicorn[136863]: INFO:     109.92.227.130:0 - "GET /api/ranking?period=month HTTP/1.0" 200 OK
Nov 12 14:27:31 impressed-jade.ptr.network uvicorn[136862]: INFO:     109.92.227.130:0 - "GET /api/matches?day=live&sport=all&serbian=false&tz=180 HTTP/1.0" 200 OK
Nov 12 14:27:31 impressed-jade.ptr.network uvicorn[136862]: INFO:     109.92.227.130:0 - "GET /api/matches?day=today&sport=all&serbian=false&tz=180 HTTP/1.0" 200 OK
Nov 12 14:27:31 impressed-jade.ptr.network uvicorn[136862]: INFO:     109.92.227.130:0 - "GET /api/home?tz=180&sport=all HTTP/1.0" 200 OK
Nov 12 14:27:37 impressed-jade.ptr.network uvicorn[136863]: INFO:     127.0.0.1:38838 - "GET /api/health HTTP/1.1" 200 OK
Nov 12 14:27:37 impressed-jade.ptr.network uvicorn[136863]: INFO:     127.0.0.1:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 12 14:27:37 impressed-jade.ptr.network uvicorn[136863]: INFO:     127.0.0.1:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 12 14:27:37 impressed-jade.ptr.network uvicorn[136863]: INFO:     127.0.0.1:0 - "GET /api/home HTTP/1.0" 200 OK
```
