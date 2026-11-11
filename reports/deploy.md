# Zicer deploy 2026-11-11 22:52 UTC

Итог: УСПЕХ

Сайт: https://winly.rs

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: 7817f89 Реклама: настоящий телефон (пропорции iPhone, вырез, статус-бар), слайд Сербия–Германия, без наложений текста

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
2026/11/12 01:51:34 [warn] 3578847#3578847: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/12 01:51:34 [warn] 3578847#3578847: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/12 01:51:34 [warn] 3578847#3578847: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/12 01:51:34 [warn] 3578847#3578847: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/12 01:51:34 [warn] 3578847#3578847: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/12 01:51:34 [warn] 3578847#3578847: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
matches: {'esports': 85, 'hockey': 63, 'volleyball': 42, 'tabletennis': 216, 'basketball': 713, 'handball': 47, 'waterpolo': 13, 'tennis': 25, 'football': 1104}
xfeed | 2026-11-11 22:51:55.326588 | xfeed empty (22bet.ug http 404) | 
probe_sports | 2026-11-11 21:19:02.243724 | football/line:err(22bet.ug http 404) football/live:err(cooldown: 22bet.ug http 404) futsal/line:err(cooldown: 22bet.ug http 404) futsal/live:err(cooldown: 22bet.ug http 404) boxing/line:err(cooldown: 22bet.ug http 404) boxing/live:err(cooldown: 22bet.ug http 404) mma/line:err(cooldown: 22bet.ug http 404) mma/live:err(cooldown: 22bet.ug http 404) mma2/line:err(cooldown: 22bet.ug http 404) mma2/live:err(cooldown: 22bet.ug http 404) combat/line:err(cooldown: 22bet.ug http 404) combat/live:err(coold | 
names | 2026-11-11 22:49:26.629501 | names 0 | 
tg_reminders | 2026-11-11 22:49:26.929004 | no token | 
finish_stale | 2026-11-11 22:49:35.701895 | finished 0 | 
trends | 2026-11-10 23:36:09.974574 | trends 11 | 
analysis | 2026-11-10 23:36:10.199323 | analysis 27 | 
football_live | 2026-11-11 22:50:28.936149 | live upserted 11 | 
live | 2026-11-11 22:50:29.162560 | live updated 3 | 
social | 2026-11-11 22:50:35.203922 | social nothing due (test) | 
maxbet_results | 2026-11-11 22:50:37.069336 | no pending | 
other_results | 2026-11-11 22:51:19.418419 | other results 10 | 
tg_poll | 2026-11-11 22:51:22.894067 | no token | 
basketball | 2026-11-11 22:51:30.363401 | basketball upserted 414 | 
basketball_week | 2026-11-11 22:51:31.427198 | nba week upserted 43 | 
other_sports | 2026-11-11 22:51:32.122875 | other sports new 0 | 
backfill | 2026-11-11 22:51:32.129891 | already | 
logos | 2026-11-11 22:51:32.285085 | logos: nothing to do | 
highlights | 2026-11-11 22:51:32.890851 | highlights +0 | 
x22_line | 2026-11-11 22:51:40.121399 | x22 line new 0, fetched {'futsal': '0'} | 
odds | 2026-11-11 22:51:41.597518 | odds matched 66 | 
settle | 2026-11-11 22:51:41.674669 | settled 0 | 
football | 2026-11-11 22:51:26.952084 | football upserted 100 |  "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
pandascore | 2026-11-11 21:45:40.992173 | pandascore new 27, updated 59, finished 0 | ile "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/engine/base.py", line 1986, in _exec_single_context
--- worker log ---
Nov 12 01:51:31 impressed-jade.ptr.network python[3578475]: 2026-11-12 01:51:31,866 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/W/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 01:51:31 impressed-jade.ptr.network python[3578475]: 2026-11-12 01:51:31,947 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/HB/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 01:51:32 impressed-jade.ptr.network python[3578475]: 2026-11-12 01:51:32,017 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/TT/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 01:51:32 impressed-jade.ptr.network python[3578475]: 2026-11-12 01:51:32,455 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpFqOv5z4WKps64GlQS4ytw "HTTP/1.1 200 OK"
Nov 12 01:51:32 impressed-jade.ptr.network python[3578475]: 2026-11-12 01:51:32,516 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC-2Cj6KlR9rCfR28zNLmOTA "HTTP/1.1 200 OK"
Nov 12 01:51:32 impressed-jade.ptr.network python[3578475]: 2026-11-12 01:51:32,529 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCWJ2lWNubArHWmf3FIHbfcQ "HTTP/1.1 200 OK"
Nov 12 01:51:32 impressed-jade.ptr.network python[3578475]: 2026-11-12 01:51:32,594 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCqFMzb-4AUf6WAIbl132QKA "HTTP/1.1 200 OK"
Nov 12 01:51:32 impressed-jade.ptr.network python[3578475]: 2026-11-12 01:51:32,657 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCwJ3S2Ix7aI1BhHexDJlmEg "HTTP/1.1 200 OK"
Nov 12 01:51:32 impressed-jade.ptr.network python[3578475]: 2026-11-12 01:51:32,679 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCTv-XvfzLX3i4IGWAm4sbmA "HTTP/1.1 200 OK"
Nov 12 01:51:32 impressed-jade.ptr.network python[3578475]: 2026-11-12 01:51:32,753 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCxfPjORdISQSn2fV8tcVmgA "HTTP/1.1 200 OK"
Nov 12 01:51:32 impressed-jade.ptr.network python[3578475]: 2026-11-12 01:51:32,771 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCQsH5XtIc9hONE1BQjucM0g "HTTP/1.1 200 OK"
Nov 12 01:51:32 impressed-jade.ptr.network python[3578475]: 2026-11-12 01:51:32,794 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC6UL29enLNe4mqwTfAyeNuw "HTTP/1.1 200 OK"
Nov 12 01:51:32 impressed-jade.ptr.network python[3578475]: 2026-11-12 01:51:32,828 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpryVRk_VDudG8SHXgWcG0w "HTTP/1.1 200 OK"
Nov 12 01:51:32 impressed-jade.ptr.network python[3578475]: 2026-11-12 01:51:32,857 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCyGa1YEx9ST66rYrJTGIKOw "HTTP/1.1 200 OK"
Nov 12 01:51:33 impressed-jade.ptr.network python[3578475]: 2026-11-12 01:51:33,017 INFO HTTP Request: GET https://22bet.com/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 12 01:51:33 impressed-jade.ptr.network python[3578475]: 2026-11-12 01:51:33,073 INFO HTTP Request: GET https://22bet.com/linefeed/get1x2_vzip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 404 Not Found"
Nov 12 01:51:33 impressed-jade.ptr.network python[3578475]: 2026-11-12 01:51:33,352 INFO HTTP Request: GET https://22bet.co.ke/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 12 01:51:33 impressed-jade.ptr.network python[3578475]: 2026-11-12 01:51:33,486 INFO HTTP Request: GET https://22bet.co.ke/linefeed/get1x2_vzip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 404 Not Found"
Nov 12 01:51:33 impressed-jade.ptr.network python[3578475]: 2026-11-12 01:51:33,608 INFO HTTP Request: GET https://22bet.ng/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 12 01:51:33 impressed-jade.ptr.network python[3578475]: 2026-11-12 01:51:33,673 INFO HTTP Request: GET https://22bet.ng/linefeed/get1x2_vzip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 404 Not Found"
Nov 12 01:51:39 impressed-jade.ptr.network python[3578475]: 2026-11-12 01:51:39,994 INFO HTTP Request: GET https://22bet.ug/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 12 01:51:40 impressed-jade.ptr.network python[3578475]: 2026-11-12 01:51:40,117 INFO HTTP Request: GET https://22bet.ug/linefeed/get1x2_vzip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 404 Not Found"
Nov 12 01:51:40 impressed-jade.ptr.network python[3578475]: 2026-11-12 01:51:40,292 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 01:51:40 impressed-jade.ptr.network python[3578475]: 2026-11-12 01:51:40,697 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 01:51:41 impressed-jade.ptr.network python[3578475]: 2026-11-12 01:51:41,505 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
--- api log ---
Nov 12 01:51:25 impressed-jade.ptr.network systemd[1]: Stopped zicer-api.service - Zicer API.
Nov 12 01:51:25 impressed-jade.ptr.network systemd[1]: zicer-api.service: Consumed 12.532s CPU time, 443.3M memory peak, 15.7M memory swap peak.
Nov 12 01:51:25 impressed-jade.ptr.network systemd[1]: Started zicer-api.service - Zicer API.
Nov 12 01:51:25 impressed-jade.ptr.network uvicorn[3578562]: INFO:     Uvicorn running on http://127.0.0.1:8790 (Press CTRL+C to quit)
Nov 12 01:51:25 impressed-jade.ptr.network uvicorn[3578562]: INFO:     Started parent process [3578562]
Nov 12 01:51:29 impressed-jade.ptr.network uvicorn[3578566]: INFO:     Started server process [3578566]
Nov 12 01:51:29 impressed-jade.ptr.network uvicorn[3578566]: INFO:     Waiting for application startup.
Nov 12 01:51:29 impressed-jade.ptr.network uvicorn[3578565]: INFO:     Started server process [3578565]
Nov 12 01:51:29 impressed-jade.ptr.network uvicorn[3578565]: INFO:     Waiting for application startup.
Nov 12 01:51:29 impressed-jade.ptr.network uvicorn[3578566]: INFO:     Application startup complete.
Nov 12 01:51:29 impressed-jade.ptr.network uvicorn[3578565]: INFO:     Application startup complete.
Nov 12 01:51:58 impressed-jade.ptr.network uvicorn[3578566]: INFO:     127.0.0.1:38350 - "GET /api/health HTTP/1.1" 200 OK
Nov 12 01:51:58 impressed-jade.ptr.network uvicorn[3578565]: INFO:     127.0.0.1:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 12 01:51:59 impressed-jade.ptr.network uvicorn[3578566]: INFO:     127.0.0.1:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 12 01:51:59 impressed-jade.ptr.network uvicorn[3578566]: INFO:     127.0.0.1:0 - "GET /api/home HTTP/1.0" 200 OK
```
