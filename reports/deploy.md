# Zicer deploy 2026-11-11 22:18 UTC

Итог: УСПЕХ

Сайт: https://winly.rs

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: bf78f0a deploy report 2026-11-11_2216

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
домен: winly.rs (winly.rs по Google DNS → "data":"185.119.88.99", www: нет)

=== nginx ===
2026/11/12 01:17:34 [warn] 3533833#3533833: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/12 01:17:34 [warn] 3533833#3533833: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/12 01:17:34 [warn] 3533833#3533833: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/12 01:17:34 [warn] 3533833#3533833: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/12 01:17:34 [warn] 3533833#3533833: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/12 01:17:34 [warn] 3533833#3533833: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
football_live | 2026-11-11 22:16:58.760775 | live upserted 11 | 
tg_poll | 2026-11-11 22:17:02.610854 | no token | 
finish_stale | 2026-11-11 22:17:16.266770 | finished 0 | 
live | 2026-11-11 22:17:21.538270 | live updated 2 | 
basketball | 2026-11-11 22:17:32.511859 | basketball upserted 414 | 
basketball_week | 2026-11-11 22:17:33.484858 | nba week upserted 43 | 
other_sports | 2026-11-11 22:17:34.060347 | other sports new 0 | 
backfill | 2026-11-11 22:17:34.069991 | already | 
logos | 2026-11-11 22:17:34.275296 | logos: nothing to do | 
highlights | 2026-11-11 22:17:35.068614 | highlights +0 | 
x22_line | 2026-11-11 22:17:42.275033 | x22 line new 0, fetched {'futsal': '0'} | 
probe_sports | 2026-11-11 21:19:02.243724 | football/line:err(22bet.ug http 404) football/live:err(cooldown: 22bet.ug http 404) futsal/line:err(cooldown: 22bet.ug http 404) futsal/live:err(cooldown: 22bet.ug http 404) boxing/line:err(cooldown: 22bet.ug http 404) boxing/live:err(cooldown: 22bet.ug http 404) mma/line:err(cooldown: 22bet.ug http 404) mma/live:err(cooldown: 22bet.ug http 404) mma2/line:err(cooldown: 22bet.ug http 404) mma2/live:err(cooldown: 22bet.ug http 404) combat/line:err(cooldown: 22bet.ug http 404) combat/live:err(coold | 
odds | 2026-11-11 22:17:43.243666 | odds matched 66 | 
settle | 2026-11-11 22:17:43.286208 | settled 0 | 
xfeed | 2026-11-11 22:17:56.941731 | xfeed empty (22bet.ug http 404) | 
names | 2026-11-11 22:13:42.984582 | names 0 | 
tg_reminders | 2026-11-11 22:13:43.068501 | no token | 
trends | 2026-11-10 23:36:09.974574 | trends 11 | 
analysis | 2026-11-10 23:36:10.199323 | analysis 27 | 
social | 2026-11-11 22:14:52.040536 | social nothing due (test) | 
maxbet_results | 2026-11-11 22:14:54.022030 | no pending | 
other_results | 2026-11-11 22:15:00.251086 | other results 9 | 
football | 2026-11-11 22:17:29.830291 | football upserted 100 |  "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
pandascore | 2026-11-11 21:45:40.992173 | pandascore new 27, updated 59, finished 0 | ile "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/engine/base.py", line 1986, in _exec_single_context
--- worker log ---
Nov 12 01:17:33 impressed-jade.ptr.network python[3533503]: 2026-11-12 01:17:33,823 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/W/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 01:17:33 impressed-jade.ptr.network python[3533503]: 2026-11-12 01:17:33,900 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/HB/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 01:17:33 impressed-jade.ptr.network python[3533503]: 2026-11-12 01:17:33,958 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/TT/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 01:17:34 impressed-jade.ptr.network python[3533503]: 2026-11-12 01:17:34,487 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpFqOv5z4WKps64GlQS4ytw "HTTP/1.1 200 OK"
Nov 12 01:17:34 impressed-jade.ptr.network python[3533503]: 2026-11-12 01:17:34,541 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC-2Cj6KlR9rCfR28zNLmOTA "HTTP/1.1 200 OK"
Nov 12 01:17:34 impressed-jade.ptr.network python[3533503]: 2026-11-12 01:17:34,562 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCWJ2lWNubArHWmf3FIHbfcQ "HTTP/1.1 200 OK"
Nov 12 01:17:34 impressed-jade.ptr.network python[3533503]: 2026-11-12 01:17:34,594 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCqFMzb-4AUf6WAIbl132QKA "HTTP/1.1 200 OK"
Nov 12 01:17:34 impressed-jade.ptr.network python[3533503]: 2026-11-12 01:17:34,694 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCwJ3S2Ix7aI1BhHexDJlmEg "HTTP/1.1 200 OK"
Nov 12 01:17:34 impressed-jade.ptr.network python[3533503]: 2026-11-12 01:17:34,717 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCTv-XvfzLX3i4IGWAm4sbmA "HTTP/1.1 200 OK"
Nov 12 01:17:34 impressed-jade.ptr.network python[3533503]: 2026-11-12 01:17:34,790 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCxfPjORdISQSn2fV8tcVmgA "HTTP/1.1 200 OK"
Nov 12 01:17:34 impressed-jade.ptr.network python[3533503]: 2026-11-12 01:17:34,849 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCQsH5XtIc9hONE1BQjucM0g "HTTP/1.1 200 OK"
Nov 12 01:17:34 impressed-jade.ptr.network python[3533503]: 2026-11-12 01:17:34,942 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC6UL29enLNe4mqwTfAyeNuw "HTTP/1.1 200 OK"
Nov 12 01:17:34 impressed-jade.ptr.network python[3533503]: 2026-11-12 01:17:34,967 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpryVRk_VDudG8SHXgWcG0w "HTTP/1.1 200 OK"
Nov 12 01:17:35 impressed-jade.ptr.network python[3533503]: 2026-11-12 01:17:35,015 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCyGa1YEx9ST66rYrJTGIKOw "HTTP/1.1 200 OK"
Nov 12 01:17:35 impressed-jade.ptr.network python[3533503]: 2026-11-12 01:17:35,204 INFO HTTP Request: GET https://22bet.com/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 12 01:17:35 impressed-jade.ptr.network python[3533503]: 2026-11-12 01:17:35,262 INFO HTTP Request: GET https://22bet.com/linefeed/get1x2_vzip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 404 Not Found"
Nov 12 01:17:35 impressed-jade.ptr.network python[3533503]: 2026-11-12 01:17:35,515 INFO HTTP Request: GET https://22bet.co.ke/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 12 01:17:35 impressed-jade.ptr.network python[3533503]: 2026-11-12 01:17:35,649 INFO HTTP Request: GET https://22bet.co.ke/linefeed/get1x2_vzip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 404 Not Found"
Nov 12 01:17:35 impressed-jade.ptr.network python[3533503]: 2026-11-12 01:17:35,762 INFO HTTP Request: GET https://22bet.ng/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 12 01:17:35 impressed-jade.ptr.network python[3533503]: 2026-11-12 01:17:35,823 INFO HTTP Request: GET https://22bet.ng/linefeed/get1x2_vzip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 404 Not Found"
Nov 12 01:17:42 impressed-jade.ptr.network python[3533503]: 2026-11-12 01:17:42,127 INFO HTTP Request: GET https://22bet.ug/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 12 01:17:42 impressed-jade.ptr.network python[3533503]: 2026-11-12 01:17:42,273 INFO HTTP Request: GET https://22bet.ug/linefeed/get1x2_vzip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 404 Not Found"
Nov 12 01:17:42 impressed-jade.ptr.network python[3533503]: 2026-11-12 01:17:42,409 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 01:17:42 impressed-jade.ptr.network python[3533503]: 2026-11-12 01:17:42,586 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 01:17:43 impressed-jade.ptr.network python[3533503]: 2026-11-12 01:17:43,169 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
--- api log ---
Nov 12 01:17:26 impressed-jade.ptr.network systemd[1]: Stopped zicer-api.service - Zicer API.
Nov 12 01:17:26 impressed-jade.ptr.network systemd[1]: zicer-api.service: Consumed 2.680s CPU time, 172.0M memory peak, 0B memory swap peak.
Nov 12 01:17:26 impressed-jade.ptr.network systemd[1]: Started zicer-api.service - Zicer API.
Nov 12 01:17:26 impressed-jade.ptr.network uvicorn[3533538]: INFO:     Uvicorn running on http://127.0.0.1:8790 (Press CTRL+C to quit)
Nov 12 01:17:26 impressed-jade.ptr.network uvicorn[3533538]: INFO:     Started parent process [3533538]
Nov 12 01:17:29 impressed-jade.ptr.network uvicorn[3533555]: INFO:     Started server process [3533555]
Nov 12 01:17:29 impressed-jade.ptr.network uvicorn[3533555]: INFO:     Waiting for application startup.
Nov 12 01:17:29 impressed-jade.ptr.network uvicorn[3533555]: INFO:     Application startup complete.
Nov 12 01:17:30 impressed-jade.ptr.network uvicorn[3533556]: INFO:     Started server process [3533556]
Nov 12 01:17:30 impressed-jade.ptr.network uvicorn[3533556]: INFO:     Waiting for application startup.
Nov 12 01:17:31 impressed-jade.ptr.network uvicorn[3533556]: INFO:     Application startup complete.
Nov 12 01:17:58 impressed-jade.ptr.network uvicorn[3533556]: INFO:     127.0.0.1:38790 - "GET /api/health HTTP/1.1" 200 OK
Nov 12 01:17:58 impressed-jade.ptr.network uvicorn[3533555]: INFO:     127.0.0.1:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 12 01:17:58 impressed-jade.ptr.network uvicorn[3533556]: INFO:     127.0.0.1:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 12 01:17:59 impressed-jade.ptr.network uvicorn[3533556]: INFO:     127.0.0.1:0 - "GET /api/home HTTP/1.0" 200 OK
```
