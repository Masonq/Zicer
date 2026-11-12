# Zicer deploy 2026-11-12 09:47 UTC

Итог: УСПЕХ

Сайт: https://winly.rs

Админ: данные входа в /etc/zicer-admin.txt на сервере

Коммит: b90338a Вход и регистрация через Facebook (переход на Facebook и обратно — работает во встроенном браузере Facebook/Instagram) и Google (кнопка Google, проверка токена на сервере); привязка к существующему аккаунту по почте, бонус «Первые 100» и рефералы как при обычной регистрации; страницы «Политика конфиденциальности» и «Удаление данных»; ключи в админке

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
2026/11/12 12:47:16 [warn] 5601#5601: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/12 12:47:16 [warn] 5601#5601: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/12 12:47:16 [warn] 5601#5601: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/12 12:47:16 [warn] 5601#5601: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/12 12:47:16 [warn] 5601#5601: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/12 12:47:16 [warn] 5601#5601: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
matches: {'esports': 235, 'hockey': 90, 'volleyball': 51, 'tabletennis': 400, 'handball': 62, 'basketball': 714, 'waterpolo': 15, 'tennis': 33, 'football': 1104}
finish_stale | 2026-11-12 09:46:55.968707 | finished 0 | 
live | 2026-11-12 09:47:01.243660 | live updated 0 | 
basketball | 2026-11-12 09:47:11.457254 | basketball upserted 404 | 
basketball_week | 2026-11-12 09:47:12.070517 | nba week upserted 43 | 
other_sports | 2026-11-12 09:47:12.771127 | other sports new 0 | 
backfill | 2026-11-12 09:47:12.776369 | already | 
logos | 2026-11-12 09:47:12.874432 | logos: nothing to do | 
highlights | 2026-11-12 09:47:13.332975 | highlights +0 | 
x22_line | 2026-11-12 09:47:20.790952 | x22 line new 0, fetched {'futsal': '0'} | 
odds | 2026-11-12 09:47:21.792262 | odds matched 66 | 
settle | 2026-11-12 09:47:21.822501 | settled 0 | 
xfeed | 2026-11-12 09:47:35.446222 | xfeed empty (22bet.ug http 404) | 
probe_sports | 2026-11-11 21:19:02.243724 | football/line:err(22bet.ug http 404) football/live:err(cooldown: 22bet.ug http 404) futsal/line:err(cooldown: 22bet.ug http 404) futsal/live:err(cooldown: 22bet.ug http 404) boxing/line:err(cooldown: 22bet.ug http 404) boxing/live:err(cooldown: 22bet.ug http 404) mma/line:err(cooldown: 22bet.ug http 404) mma/live:err(cooldown: 22bet.ug http 404) mma2/line:err(cooldown: 22bet.ug http 404) mma2/live:err(cooldown: 22bet.ug http 404) combat/line:err(cooldown: 22bet.ug http 404) combat/live:err(coold | 
maxbet_results | 2026-11-12 09:32:43.858758 | no pending | 
other_results | 2026-11-12 09:32:45.562076 | other results 13 | 
names | 2026-11-12 09:32:55.397950 | names 0 | 
tg_reminders | 2026-11-12 09:32:56.075994 | no token | 
trends | 2026-11-10 23:36:09.974574 | trends 11 | 
social | 2026-11-12 09:37:45.855303 | social nothing due (live) | 
analysis | 2026-11-10 23:36:10.199323 | analysis 27 | 
football_live | 2026-11-12 09:46:38.443848 | live upserted 10 | 
tg_poll | 2026-11-12 09:46:42.312973 | no token | 
pandascore | 2026-11-12 01:33:44.105768 | pandascore new 0, updated 206, finished 0, with streams 172, history lookups 40 | es/sqlalchemy/engine/base.py", line 1936, in _exec_single_context
football | 2026-11-12 09:47:09.426168 | football upserted 99 |  "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
--- worker log ---
Nov 12 12:47:12 impressed-jade.ptr.network python[5262]: 2026-11-12 12:47:12,507 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/W/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 12:47:12 impressed-jade.ptr.network python[5262]: 2026-11-12 12:47:12,585 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/HB/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 12:47:12 impressed-jade.ptr.network python[5262]: 2026-11-12 12:47:12,667 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/TT/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 12:47:13 impressed-jade.ptr.network python[5262]: 2026-11-12 12:47:13,019 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpFqOv5z4WKps64GlQS4ytw "HTTP/1.1 200 OK"
Nov 12 12:47:13 impressed-jade.ptr.network python[5262]: 2026-11-12 12:47:13,074 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC-2Cj6KlR9rCfR28zNLmOTA "HTTP/1.1 200 OK"
Nov 12 12:47:13 impressed-jade.ptr.network python[5262]: 2026-11-12 12:47:13,086 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCWJ2lWNubArHWmf3FIHbfcQ "HTTP/1.1 200 OK"
Nov 12 12:47:13 impressed-jade.ptr.network python[5262]: 2026-11-12 12:47:13,108 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCqFMzb-4AUf6WAIbl132QKA "HTTP/1.1 200 OK"
Nov 12 12:47:13 impressed-jade.ptr.network python[5262]: 2026-11-12 12:47:13,126 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCwJ3S2Ix7aI1BhHexDJlmEg "HTTP/1.1 200 OK"
Nov 12 12:47:13 impressed-jade.ptr.network python[5262]: 2026-11-12 12:47:13,141 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCTv-XvfzLX3i4IGWAm4sbmA "HTTP/1.1 200 OK"
Nov 12 12:47:13 impressed-jade.ptr.network python[5262]: 2026-11-12 12:47:13,209 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCxfPjORdISQSn2fV8tcVmgA "HTTP/1.1 200 OK"
Nov 12 12:47:13 impressed-jade.ptr.network python[5262]: 2026-11-12 12:47:13,220 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCQsH5XtIc9hONE1BQjucM0g "HTTP/1.1 200 OK"
Nov 12 12:47:13 impressed-jade.ptr.network python[5262]: 2026-11-12 12:47:13,237 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC6UL29enLNe4mqwTfAyeNuw "HTTP/1.1 200 OK"
Nov 12 12:47:13 impressed-jade.ptr.network python[5262]: 2026-11-12 12:47:13,294 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpryVRk_VDudG8SHXgWcG0w "HTTP/1.1 200 OK"
Nov 12 12:47:13 impressed-jade.ptr.network python[5262]: 2026-11-12 12:47:13,314 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCyGa1YEx9ST66rYrJTGIKOw "HTTP/1.1 200 OK"
Nov 12 12:47:13 impressed-jade.ptr.network python[5262]: 2026-11-12 12:47:13,442 INFO HTTP Request: GET https://22bet.com/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 12 12:47:13 impressed-jade.ptr.network python[5262]: 2026-11-12 12:47:13,529 INFO HTTP Request: GET https://22bet.com/linefeed/get1x2_vzip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 404 Not Found"
Nov 12 12:47:13 impressed-jade.ptr.network python[5262]: 2026-11-12 12:47:13,775 INFO HTTP Request: GET https://22bet.co.ke/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 12 12:47:13 impressed-jade.ptr.network python[5262]: 2026-11-12 12:47:13,918 INFO HTTP Request: GET https://22bet.co.ke/linefeed/get1x2_vzip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 404 Not Found"
Nov 12 12:47:14 impressed-jade.ptr.network python[5262]: 2026-11-12 12:47:14,007 INFO HTTP Request: GET https://22bet.ng/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 12 12:47:14 impressed-jade.ptr.network python[5262]: 2026-11-12 12:47:14,075 INFO HTTP Request: GET https://22bet.ng/linefeed/get1x2_vzip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 404 Not Found"
Nov 12 12:47:20 impressed-jade.ptr.network python[5262]: 2026-11-12 12:47:20,658 INFO HTTP Request: GET https://22bet.ug/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 12 12:47:20 impressed-jade.ptr.network python[5262]: 2026-11-12 12:47:20,787 INFO HTTP Request: GET https://22bet.ug/linefeed/get1x2_vzip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 404 Not Found"
Nov 12 12:47:20 impressed-jade.ptr.network python[5262]: 2026-11-12 12:47:20,915 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 12:47:21 impressed-jade.ptr.network python[5262]: 2026-11-12 12:47:21,101 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 12:47:21 impressed-jade.ptr.network python[5262]: 2026-11-12 12:47:21,748 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
--- api log ---
Nov 12 12:47:07 impressed-jade.ptr.network systemd[1]: zicer-api.service: Consumed 4.226s CPU time, 166.8M memory peak, 90.0M memory swap peak.
Nov 12 12:47:07 impressed-jade.ptr.network systemd[1]: Started zicer-api.service - Zicer API.
Nov 12 12:47:07 impressed-jade.ptr.network uvicorn[5310]: INFO:     Uvicorn running on http://127.0.0.1:8790 (Press CTRL+C to quit)
Nov 12 12:47:07 impressed-jade.ptr.network uvicorn[5310]: INFO:     Started parent process [5310]
Nov 12 12:47:09 impressed-jade.ptr.network uvicorn[5313]: INFO:     Started server process [5313]
Nov 12 12:47:09 impressed-jade.ptr.network uvicorn[5313]: INFO:     Waiting for application startup.
Nov 12 12:47:09 impressed-jade.ptr.network uvicorn[5314]: INFO:     Started server process [5314]
Nov 12 12:47:09 impressed-jade.ptr.network uvicorn[5314]: INFO:     Waiting for application startup.
Nov 12 12:47:10 impressed-jade.ptr.network uvicorn[5313]: INFO:     Application startup complete.
Nov 12 12:47:10 impressed-jade.ptr.network uvicorn[5314]: INFO:     Application startup complete.
Nov 12 12:47:38 impressed-jade.ptr.network uvicorn[5314]: INFO:     109.92.227.130:0 - "GET /api/me/watch?ids= HTTP/1.0" 200 OK
Nov 12 12:47:40 impressed-jade.ptr.network uvicorn[5314]: INFO:     127.0.0.1:55156 - "GET /api/health HTTP/1.1" 200 OK
Nov 12 12:47:40 impressed-jade.ptr.network uvicorn[5314]: INFO:     127.0.0.1:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 12 12:47:40 impressed-jade.ptr.network uvicorn[5314]: INFO:     127.0.0.1:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 12 12:47:40 impressed-jade.ptr.network uvicorn[5314]: INFO:     127.0.0.1:0 - "GET /api/home HTTP/1.0" 200 OK
```
