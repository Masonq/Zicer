# Zicer deploy 2026-11-11 22:04 UTC

Итог: ЕСТЬ ОШИБКИ

Сайт: https://winly.rs

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: 559eda3 Подтверждение Google Search Console: метатег и в обычной странице

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
2026/11/12 01:04:24 [warn] 3515555#3515555: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/12 01:04:24 [warn] 3515555#3515555: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/12 01:04:24 [warn] 3515555#3515555: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/12 01:04:24 [warn] 3515555#3515555: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/12 01:04:24 [warn] 3515555#3515555: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/12 01:04:24 [warn] 3515555#3515555: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
OK: nginx перезагружен

=== HTTPS ===
OK: сертификат уже есть

=== Проверки ===
api local: {"ok":true,"app":"zicer"}
api https: 
FAIL: api https отвечает не Zicer
https / -> 000
FAIL: https / 000
https /api/health -> 000
FAIL: https /api/health 000
https /api/home -> 000
FAIL: https /api/home 000
https /mecevi -> 000
FAIL: https /mecevi 000
index cache: 
matches: {'esports': 85, 'hockey': 63, 'volleyball': 42, 'tabletennis': 216, 'basketball': 713, 'handball': 47, 'waterpolo': 13, 'tennis': 25, 'football': 1104}
social | 2026-11-11 22:03:26.945569 | social nothing due (test) | 
maxbet_results | 2026-11-11 22:03:31.462244 | maxbet results 1 | 
other_results | 2026-11-11 22:04:01.603142 | other results 15 | 
tg_poll | 2026-11-11 22:04:03.851245 | no token | 
football_live | 2026-11-11 22:04:09.101876 | live upserted 11 | 
live | 2026-11-11 22:04:09.518143 | live updated 5 | 
xfeed | 2026-11-11 22:04:13.165444 | xfeed empty (22bet.ug http 404) | 
finish_stale | 2026-11-11 22:04:13.188857 | finished 0 | 
basketball | 2026-11-11 22:04:23.390667 | basketball upserted 415 | 
basketball_week | 2026-11-11 22:04:25.008111 | nba week upserted 43 | 
other_sports | 2026-11-11 22:04:26.105855 | other sports new 0 | 
backfill | 2026-11-11 22:04:26.115726 | already | 
logos | 2026-11-11 22:04:26.379419 | logos: nothing to do | 
highlights | 2026-11-11 22:04:26.731433 | highlights +0 | 
x22_line | 2026-11-11 22:04:34.125595 | x22 line new 0, fetched {'futsal': '0'} | 
odds | 2026-11-11 22:04:36.162007 | odds matched 66 | 
settle | 2026-11-11 22:04:36.216191 | settled 0 | 
probe_sports | 2026-11-11 21:19:02.243724 | football/line:err(22bet.ug http 404) football/live:err(cooldown: 22bet.ug http 404) futsal/line:err(cooldown: 22bet.ug http 404) futsal/live:err(cooldown: 22bet.ug http 404) boxing/line:err(cooldown: 22bet.ug http 404) boxing/live:err(cooldown: 22bet.ug http 404) mma/line:err(cooldown: 22bet.ug http 404) mma/live:err(cooldown: 22bet.ug http 404) mma2/line:err(cooldown: 22bet.ug http 404) mma2/live:err(cooldown: 22bet.ug http 404) combat/line:err(cooldown: 22bet.ug http 404) combat/live:err(coold | 
trends | 2026-11-10 23:36:09.974574 | trends 11 | 
analysis | 2026-11-10 23:36:10.199323 | analysis 27 | 
tg_reminders | 2026-11-11 22:02:19.078283 | no token | 
names | 2026-11-11 22:02:19.158824 | names 0 | 
football | 2026-11-11 22:04:19.609625 | football upserted 100 |  "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
pandascore | 2026-11-11 21:45:40.992173 | pandascore new 27, updated 59, finished 0 | ile "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/engine/base.py", line 1986, in _exec_single_context
--- worker log ---
Nov 12 01:04:25 impressed-jade.ptr.network python[3515202]: 2026-11-12 01:04:25,694 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/W/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 01:04:25 impressed-jade.ptr.network python[3515202]: 2026-11-12 01:04:25,794 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/HB/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 01:04:25 impressed-jade.ptr.network python[3515202]: 2026-11-12 01:04:25,917 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/TT/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 01:04:26 impressed-jade.ptr.network python[3515202]: 2026-11-12 01:04:26,495 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpFqOv5z4WKps64GlQS4ytw "HTTP/1.1 200 OK"
Nov 12 01:04:26 impressed-jade.ptr.network python[3515202]: 2026-11-12 01:04:26,509 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC-2Cj6KlR9rCfR28zNLmOTA "HTTP/1.1 200 OK"
Nov 12 01:04:26 impressed-jade.ptr.network python[3515202]: 2026-11-12 01:04:26,524 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCWJ2lWNubArHWmf3FIHbfcQ "HTTP/1.1 200 OK"
Nov 12 01:04:26 impressed-jade.ptr.network python[3515202]: 2026-11-12 01:04:26,555 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCqFMzb-4AUf6WAIbl132QKA "HTTP/1.1 200 OK"
Nov 12 01:04:26 impressed-jade.ptr.network python[3515202]: 2026-11-12 01:04:26,572 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCwJ3S2Ix7aI1BhHexDJlmEg "HTTP/1.1 200 OK"
Nov 12 01:04:26 impressed-jade.ptr.network python[3515202]: 2026-11-12 01:04:26,591 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCTv-XvfzLX3i4IGWAm4sbmA "HTTP/1.1 200 OK"
Nov 12 01:04:26 impressed-jade.ptr.network python[3515202]: 2026-11-12 01:04:26,611 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCxfPjORdISQSn2fV8tcVmgA "HTTP/1.1 200 OK"
Nov 12 01:04:26 impressed-jade.ptr.network python[3515202]: 2026-11-12 01:04:26,623 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCQsH5XtIc9hONE1BQjucM0g "HTTP/1.1 200 OK"
Nov 12 01:04:26 impressed-jade.ptr.network python[3515202]: 2026-11-12 01:04:26,650 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC6UL29enLNe4mqwTfAyeNuw "HTTP/1.1 200 OK"
Nov 12 01:04:26 impressed-jade.ptr.network python[3515202]: 2026-11-12 01:04:26,673 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpryVRk_VDudG8SHXgWcG0w "HTTP/1.1 200 OK"
Nov 12 01:04:26 impressed-jade.ptr.network python[3515202]: 2026-11-12 01:04:26,701 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCyGa1YEx9ST66rYrJTGIKOw "HTTP/1.1 200 OK"
Nov 12 01:04:26 impressed-jade.ptr.network python[3515202]: 2026-11-12 01:04:26,850 INFO HTTP Request: GET https://22bet.com/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 12 01:04:26 impressed-jade.ptr.network python[3515202]: 2026-11-12 01:04:26,914 INFO HTTP Request: GET https://22bet.com/linefeed/get1x2_vzip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 404 Not Found"
Nov 12 01:04:27 impressed-jade.ptr.network python[3515202]: 2026-11-12 01:04:27,163 INFO HTTP Request: GET https://22bet.co.ke/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 12 01:04:27 impressed-jade.ptr.network python[3515202]: 2026-11-12 01:04:27,298 INFO HTTP Request: GET https://22bet.co.ke/linefeed/get1x2_vzip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 404 Not Found"
Nov 12 01:04:27 impressed-jade.ptr.network python[3515202]: 2026-11-12 01:04:27,397 INFO HTTP Request: GET https://22bet.ng/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 12 01:04:27 impressed-jade.ptr.network python[3515202]: 2026-11-12 01:04:27,451 INFO HTTP Request: GET https://22bet.ng/linefeed/get1x2_vzip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 404 Not Found"
Nov 12 01:04:33 impressed-jade.ptr.network python[3515202]: 2026-11-12 01:04:33,755 INFO HTTP Request: GET https://22bet.ug/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 12 01:04:34 impressed-jade.ptr.network python[3515202]: 2026-11-12 01:04:34,124 INFO HTTP Request: GET https://22bet.ug/linefeed/get1x2_vzip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 404 Not Found"
Nov 12 01:04:34 impressed-jade.ptr.network python[3515202]: 2026-11-12 01:04:34,548 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 01:04:35 impressed-jade.ptr.network python[3515202]: 2026-11-12 01:04:35,320 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 12 01:04:36 impressed-jade.ptr.network python[3515202]: 2026-11-12 01:04:36,042 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
--- api log ---
Nov 12 01:04:14 impressed-jade.ptr.network uvicorn[3505783]: INFO:     Waiting for child process [3505789]
Nov 12 01:04:14 impressed-jade.ptr.network uvicorn[3505783]: INFO:     Stopping parent process [3505783]
Nov 12 01:04:15 impressed-jade.ptr.network systemd[1]: zicer-api.service: Deactivated successfully.
Nov 12 01:04:15 impressed-jade.ptr.network systemd[1]: Stopped zicer-api.service - Zicer API.
Nov 12 01:04:15 impressed-jade.ptr.network systemd[1]: zicer-api.service: Consumed 13.225s CPU time, 617.9M memory peak, 15.4M memory swap peak.
Nov 12 01:04:15 impressed-jade.ptr.network systemd[1]: Started zicer-api.service - Zicer API.
Nov 12 01:04:15 impressed-jade.ptr.network uvicorn[3515207]: INFO:     Uvicorn running on http://127.0.0.1:8790 (Press CTRL+C to quit)
Nov 12 01:04:15 impressed-jade.ptr.network uvicorn[3515207]: INFO:     Started parent process [3515207]
Nov 12 01:04:20 impressed-jade.ptr.network uvicorn[3515210]: INFO:     Started server process [3515210]
Nov 12 01:04:20 impressed-jade.ptr.network uvicorn[3515210]: INFO:     Waiting for application startup.
Nov 12 01:04:20 impressed-jade.ptr.network uvicorn[3515211]: INFO:     Started server process [3515211]
Nov 12 01:04:20 impressed-jade.ptr.network uvicorn[3515211]: INFO:     Waiting for application startup.
Nov 12 01:04:21 impressed-jade.ptr.network uvicorn[3515210]: INFO:     Application startup complete.
Nov 12 01:04:22 impressed-jade.ptr.network uvicorn[3515211]: INFO:     Application startup complete.
Nov 12 01:04:46 impressed-jade.ptr.network uvicorn[3515210]: INFO:     127.0.0.1:34492 - "GET /api/health HTTP/1.1" 200 OK
```
