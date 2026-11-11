# Zicer deploy 2026-11-11 22:33 UTC

Итог: УСПЕХ

Сайт: https://winly.rs

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: 44b80dd Сборка: обложка v2 в dist

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
2026/11/12 01:32:41 [warn] 3554004#3554004: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/12 01:32:41 [warn] 3554004#3554004: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/12 01:32:41 [warn] 3554004#3554004: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/12 01:32:41 [warn] 3554004#3554004: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/12 01:32:41 [warn] 3554004#3554004: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/12 01:32:41 [warn] 3554004#3554004: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
api local: {"ok":true,"app":"zicer"}
api https: {"ok":true,"app":"zicer"}
https / -> 200
https /api/health -> 200
https /api/home -> 200
https /mecevi -> 200
index cache: cache-control: no-cache
cache-control: no-cache, no-store, must-revalidate
matches: {'esports': 85, 'hockey': 63, 'volleyball': 42, 'tabletennis': 216, 'basketball': 713, 'handball': 47, 'waterpolo': 13, 'tennis': 25, 'football': 1104}
maxbet_results | 2026-11-11 22:32:01.002388 | no pending | 
names | 2026-11-11 22:27:55.109801 | names 0 | 
other_results | 2026-11-11 22:32:08.345854 | other results 10 | 
tg_reminders | 2026-11-11 22:27:55.471302 | no token | 
tg_poll | 2026-11-11 22:32:09.599467 | no token | 
football_live | 2026-11-11 22:32:14.773818 | live upserted 11 | 
live | 2026-11-11 22:32:15.034938 | live updated 3 | 
finish_stale | 2026-11-11 22:32:18.923806 | finished 0 | 
basketball | 2026-11-11 22:32:37.644287 | basketball upserted 414 | 
basketball_week | 2026-11-11 22:32:39.104024 | nba week upserted 43 | 
other_sports | 2026-11-11 22:32:39.866443 | other sports new 0 | 
backfill | 2026-11-11 22:32:39.874654 | already | 
logos | 2026-11-11 22:32:39.965815 | logos: nothing to do | 
highlights | 2026-11-11 22:32:40.442725 | highlights +0 | 
x22_line | 2026-11-11 22:32:47.638232 | x22 line new 0, fetched {'futsal': '0'} | 
odds | 2026-11-11 22:32:48.527109 | odds matched 66 | 
settle | 2026-11-11 22:32:48.566973 | settled 0 | 
xfeed | 2026-11-11 22:33:02.201360 | xfeed empty (22bet.ug http 404) | 
probe_sports | 2026-11-11 21:19:02.243724 | football/line:err(22bet.ug http 404) football/live:err(cooldown: 22bet.ug http 404) futsal/line:err(cooldown: 22bet.ug http 404) futsal/live:err(cooldown: 22bet.ug http 404) boxing/line:err(cooldown: 22bet.ug http 404) boxing/live:err(cooldown: 22bet.ug http 404) mma/line:err(cooldown: 22bet.ug http 404) mma/live:err(cooldown: 22bet.ug http 404) mma2/line:err(cooldown: 22bet.ug http 404) mma2/live:err(cooldown: 22bet.ug http 404) combat/line:err(cooldown: 22bet.ug http 404) combat/live:err(coold | 
trends | 2026-11-10 23:36:09.974574 | trends 11 | 
analysis | 2026-11-10 23:36:10.199323 | analysis 27 | 
social | 2026-11-11 22:30:59.271192 | social nothing due (test) | 
football | 2026-11-11 22:32:35.157624 | football upserted 100 |  "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
pandascore | 2026-11-11 21:45:40.992173 | pandascore new 27, updated 59, finished 0 | ile "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/engine/base.py", line 1986, in _exec_single_context
--- worker log ---
Nov 12 01:32:39 impressed-jade.ptr.network python[3553620]: 2026-11-12 01:32:39,599 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/W/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 01:32:39 impressed-jade.ptr.network python[3553620]: 2026-11-12 01:32:39,681 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/HB/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 01:32:39 impressed-jade.ptr.network python[3553620]: 2026-11-12 01:32:39,786 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/TT/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 01:32:40 impressed-jade.ptr.network python[3553620]: 2026-11-12 01:32:40,116 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpFqOv5z4WKps64GlQS4ytw "HTTP/1.1 200 OK"
Nov 12 01:32:40 impressed-jade.ptr.network python[3553620]: 2026-11-12 01:32:40,175 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC-2Cj6KlR9rCfR28zNLmOTA "HTTP/1.1 200 OK"
Nov 12 01:32:40 impressed-jade.ptr.network python[3553620]: 2026-11-12 01:32:40,188 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCWJ2lWNubArHWmf3FIHbfcQ "HTTP/1.1 200 OK"
Nov 12 01:32:40 impressed-jade.ptr.network python[3553620]: 2026-11-12 01:32:40,218 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCqFMzb-4AUf6WAIbl132QKA "HTTP/1.1 200 OK"
Nov 12 01:32:40 impressed-jade.ptr.network python[3553620]: 2026-11-12 01:32:40,241 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCwJ3S2Ix7aI1BhHexDJlmEg "HTTP/1.1 200 OK"
Nov 12 01:32:40 impressed-jade.ptr.network python[3553620]: 2026-11-12 01:32:40,265 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCTv-XvfzLX3i4IGWAm4sbmA "HTTP/1.1 200 OK"
Nov 12 01:32:40 impressed-jade.ptr.network python[3553620]: 2026-11-12 01:32:40,327 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCxfPjORdISQSn2fV8tcVmgA "HTTP/1.1 200 OK"
Nov 12 01:32:40 impressed-jade.ptr.network python[3553620]: 2026-11-12 01:32:40,340 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCQsH5XtIc9hONE1BQjucM0g "HTTP/1.1 200 OK"
Nov 12 01:32:40 impressed-jade.ptr.network python[3553620]: 2026-11-12 01:32:40,359 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC6UL29enLNe4mqwTfAyeNuw "HTTP/1.1 200 OK"
Nov 12 01:32:40 impressed-jade.ptr.network python[3553620]: 2026-11-12 01:32:40,382 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpryVRk_VDudG8SHXgWcG0w "HTTP/1.1 200 OK"
Nov 12 01:32:40 impressed-jade.ptr.network python[3553620]: 2026-11-12 01:32:40,416 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCyGa1YEx9ST66rYrJTGIKOw "HTTP/1.1 200 OK"
Nov 12 01:32:40 impressed-jade.ptr.network python[3553620]: 2026-11-12 01:32:40,579 INFO HTTP Request: GET https://22bet.com/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 12 01:32:40 impressed-jade.ptr.network python[3553620]: 2026-11-12 01:32:40,650 INFO HTTP Request: GET https://22bet.com/linefeed/get1x2_vzip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 404 Not Found"
Nov 12 01:32:40 impressed-jade.ptr.network python[3553620]: 2026-11-12 01:32:40,916 INFO HTTP Request: GET https://22bet.co.ke/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 12 01:32:41 impressed-jade.ptr.network python[3553620]: 2026-11-12 01:32:41,045 INFO HTTP Request: GET https://22bet.co.ke/linefeed/get1x2_vzip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 404 Not Found"
Nov 12 01:32:41 impressed-jade.ptr.network python[3553620]: 2026-11-12 01:32:41,155 INFO HTTP Request: GET https://22bet.ng/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 12 01:32:41 impressed-jade.ptr.network python[3553620]: 2026-11-12 01:32:41,209 INFO HTTP Request: GET https://22bet.ng/linefeed/get1x2_vzip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 404 Not Found"
Nov 12 01:32:47 impressed-jade.ptr.network python[3553620]: 2026-11-12 01:32:47,506 INFO HTTP Request: GET https://22bet.ug/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 12 01:32:47 impressed-jade.ptr.network python[3553620]: 2026-11-12 01:32:47,629 INFO HTTP Request: GET https://22bet.ug/linefeed/get1x2_vzip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 404 Not Found"
Nov 12 01:32:47 impressed-jade.ptr.network python[3553620]: 2026-11-12 01:32:47,777 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 01:32:47 impressed-jade.ptr.network python[3553620]: 2026-11-12 01:32:47,961 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 01:32:48 impressed-jade.ptr.network python[3553620]: 2026-11-12 01:32:48,468 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
--- api log ---
Nov 12 01:32:32 impressed-jade.ptr.network systemd[1]: Stopped zicer-api.service - Zicer API.
Nov 12 01:32:32 impressed-jade.ptr.network systemd[1]: zicer-api.service: Consumed 7.368s CPU time, 208.2M memory peak, 4.5M memory swap peak.
Nov 12 01:32:32 impressed-jade.ptr.network systemd[1]: Started zicer-api.service - Zicer API.
Nov 12 01:32:32 impressed-jade.ptr.network uvicorn[3553639]: INFO:     Uvicorn running on http://127.0.0.1:8790 (Press CTRL+C to quit)
Nov 12 01:32:32 impressed-jade.ptr.network uvicorn[3553639]: INFO:     Started parent process [3553639]
Nov 12 01:32:36 impressed-jade.ptr.network uvicorn[3553644]: INFO:     Started server process [3553644]
Nov 12 01:32:36 impressed-jade.ptr.network uvicorn[3553644]: INFO:     Waiting for application startup.
Nov 12 01:32:36 impressed-jade.ptr.network uvicorn[3553645]: INFO:     Started server process [3553645]
Nov 12 01:32:36 impressed-jade.ptr.network uvicorn[3553645]: INFO:     Waiting for application startup.
Nov 12 01:32:36 impressed-jade.ptr.network uvicorn[3553644]: INFO:     Application startup complete.
Nov 12 01:32:36 impressed-jade.ptr.network uvicorn[3553645]: INFO:     Application startup complete.
Nov 12 01:33:05 impressed-jade.ptr.network uvicorn[3553644]: INFO:     127.0.0.1:57208 - "GET /api/health HTTP/1.1" 200 OK
Nov 12 01:33:05 impressed-jade.ptr.network uvicorn[3553645]: INFO:     127.0.0.1:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 12 01:33:05 impressed-jade.ptr.network uvicorn[3553645]: INFO:     127.0.0.1:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 12 01:33:05 impressed-jade.ptr.network uvicorn[3553644]: INFO:     127.0.0.1:0 - "GET /api/home HTTP/1.0" 200 OK
```
