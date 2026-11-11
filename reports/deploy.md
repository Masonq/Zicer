# Zicer deploy 2026-11-11 19:24 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: 007b970 Матч-центр: перед голом сначала атака забившей команды (мяч на её точке атаки), потом удар в ворота — без перелёта через всё поле; спокойнее смена владения в баскетболе/гандболе/футзале/водном поло; пунктир 9 м в гандболе не выходит за площадку; профиль: карточка приглашения не шире экрана; деплой сам переключится на winly.rs (и www), когда DNS укажет на сервер, старый адрес будет перенаправлять на новый

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
домен: zicer.89-208-113-147.sslip.io (winly.rs → )

=== nginx ===
2026/11/11 22:24:09 [warn] 3313937#3313937: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/11 22:24:09 [warn] 3313937#3313937: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/11 22:24:09 [warn] 3313937#3313937: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/11 22:24:09 [warn] 3313937#3313937: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/11 22:24:09 [warn] 3313937#3313937: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/11 22:24:09 [warn] 3313937#3313937: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
matches: {'esports': 58, 'hockey': 52, 'volleyball': 39, 'tabletennis': 186, 'basketball': 709, 'handball': 45, 'waterpolo': 7, 'tennis': 25, 'football': 1100}
tg_reminders | 2026-11-11 19:22:44.980050 | no token | 
social | 2026-11-11 19:23:10.349158 | social nothing due (test) | 
pandascore | 2026-11-11 16:06:16.134963 | pandascore new 0, updated 58, finished 0 | le "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/engine/base.py", line 1986, in _exec_single_context
tg_poll | 2026-11-11 19:23:44.243457 | no token | 
football_live | 2026-11-11 19:23:58.354621 | live upserted 0 | 
finish_stale | 2026-11-11 19:23:58.384096 | finished 0 | 
basketball | 2026-11-11 19:24:05.799640 | basketball upserted 412 | 
basketball_week | 2026-11-11 19:24:06.841948 | nba week upserted 48 | 
other_sports | 2026-11-11 19:24:07.510372 | other sports new 0 | 
backfill | 2026-11-11 19:24:07.520195 | already | 
logos | 2026-11-11 19:24:07.771616 | logos: nothing to do | 
highlights | 2026-11-11 19:24:08.270322 | highlights +1 | 
x22_line | 2026-11-11 19:24:15.077192 | x22 line new 0, fetched {'futsal': '0'} | 
odds | 2026-11-11 19:24:16.087912 | odds matched 68 | 
settle | 2026-11-11 19:24:16.138179 | settled 0 | 
xfeed | 2026-11-11 19:24:29.771121 | xfeed empty (22bet.ug http 308) | 
live | 2026-11-11 19:24:40.210557 | live updated 37 | 
trends | 2026-11-10 23:36:09.974574 | trends 11 | 
analysis | 2026-11-10 23:36:10.199323 | analysis 27 | 
maxbet_results | 2026-11-11 19:22:00.156055 | maxbet results 9 | 
other_results | 2026-11-11 19:22:11.851914 | other results 62 | 
names | 2026-11-11 19:22:44.388961 | names 0 | 
football | 2026-11-11 19:24:03.400791 | football upserted 96 |  "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
--- worker log ---
Nov 11 22:24:06 impressed-jade.ptr.network python[3313582]: 2026-11-11 22:24:06,965 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/H/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 22:24:07 impressed-jade.ptr.network python[3313582]: 2026-11-11 22:24:07,057 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/T/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 22:24:07 impressed-jade.ptr.network python[3313582]: 2026-11-11 22:24:07,129 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/V/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 22:24:07 impressed-jade.ptr.network python[3313582]: 2026-11-11 22:24:07,222 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/W/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 22:24:07 impressed-jade.ptr.network python[3313582]: 2026-11-11 22:24:07,281 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/HB/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 22:24:07 impressed-jade.ptr.network python[3313582]: 2026-11-11 22:24:07,354 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/TT/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 22:24:07 impressed-jade.ptr.network python[3313582]: 2026-11-11 22:24:07,895 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpFqOv5z4WKps64GlQS4ytw "HTTP/1.1 200 OK"
Nov 11 22:24:07 impressed-jade.ptr.network python[3313582]: 2026-11-11 22:24:07,991 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC-2Cj6KlR9rCfR28zNLmOTA "HTTP/1.1 200 OK"
Nov 11 22:24:08 impressed-jade.ptr.network python[3313582]: 2026-11-11 22:24:08,002 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCWJ2lWNubArHWmf3FIHbfcQ "HTTP/1.1 200 OK"
Nov 11 22:24:08 impressed-jade.ptr.network python[3313582]: 2026-11-11 22:24:08,019 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCqFMzb-4AUf6WAIbl132QKA "HTTP/1.1 200 OK"
Nov 11 22:24:08 impressed-jade.ptr.network python[3313582]: 2026-11-11 22:24:08,034 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCwJ3S2Ix7aI1BhHexDJlmEg "HTTP/1.1 200 OK"
Nov 11 22:24:08 impressed-jade.ptr.network python[3313582]: 2026-11-11 22:24:08,049 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCTv-XvfzLX3i4IGWAm4sbmA "HTTP/1.1 200 OK"
Nov 11 22:24:08 impressed-jade.ptr.network python[3313582]: 2026-11-11 22:24:08,140 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCxfPjORdISQSn2fV8tcVmgA "HTTP/1.1 200 OK"
Nov 11 22:24:08 impressed-jade.ptr.network python[3313582]: 2026-11-11 22:24:08,151 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCQsH5XtIc9hONE1BQjucM0g "HTTP/1.1 200 OK"
Nov 11 22:24:08 impressed-jade.ptr.network python[3313582]: 2026-11-11 22:24:08,170 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC6UL29enLNe4mqwTfAyeNuw "HTTP/1.1 200 OK"
Nov 11 22:24:08 impressed-jade.ptr.network python[3313582]: 2026-11-11 22:24:08,203 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpryVRk_VDudG8SHXgWcG0w "HTTP/1.1 200 OK"
Nov 11 22:24:08 impressed-jade.ptr.network python[3313582]: 2026-11-11 22:24:08,239 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCyGa1YEx9ST66rYrJTGIKOw "HTTP/1.1 200 OK"
Nov 11 22:24:08 impressed-jade.ptr.network python[3313582]: 2026-11-11 22:24:08,395 INFO HTTP Request: GET https://22bet.com/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 22:24:08 impressed-jade.ptr.network python[3313582]: 2026-11-11 22:24:08,649 INFO HTTP Request: GET https://22bet.co.ke/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 22:24:08 impressed-jade.ptr.network python[3313582]: 2026-11-11 22:24:08,749 INFO HTTP Request: GET https://22bet.ng/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 22:24:15 impressed-jade.ptr.network python[3313582]: 2026-11-11 22:24:15,073 INFO HTTP Request: GET https://22bet.ug/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 22:24:15 impressed-jade.ptr.network python[3313582]: 2026-11-11 22:24:15,236 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 22:24:15 impressed-jade.ptr.network python[3313582]: 2026-11-11 22:24:15,437 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 22:24:15 impressed-jade.ptr.network python[3313582]: 2026-11-11 22:24:15,969 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 22:24:39 impressed-jade.ptr.network python[3313582]: 2026-11-11 22:24:39,964 INFO HTTP Request: GET https://www.maxbet.rs/live/init/sr "HTTP/1.1 200 OK"
--- api log ---
Nov 11 22:24:05 impressed-jade.ptr.network uvicorn[3313593]: INFO:     109.245.39.254:0 - "GET /api/clubs/battle?sport=football HTTP/1.0" 200 OK
Nov 11 22:24:05 impressed-jade.ptr.network uvicorn[3313592]: INFO:     109.245.39.254:0 - "GET /api/me HTTP/1.0" 200 OK
Nov 11 22:24:05 impressed-jade.ptr.network uvicorn[3313592]: INFO:     109.245.39.254:0 - "GET /api/bookmakers HTTP/1.0" 200 OK
Nov 11 22:24:05 impressed-jade.ptr.network uvicorn[3313592]: INFO:     109.245.39.254:0 - "POST /api/t HTTP/1.0" 200 OK
Nov 11 22:24:05 impressed-jade.ptr.network uvicorn[3313593]: INFO:     109.245.39.254:0 - "GET /api/me/watch?ids= HTTP/1.0" 200 OK
Nov 11 22:24:06 impressed-jade.ptr.network uvicorn[3313592]: INFO:     109.245.39.254:0 - "GET /api/matches/1822 HTTP/1.0" 200 OK
Nov 11 22:24:07 impressed-jade.ptr.network uvicorn[3313592]: INFO:     109.245.39.254:0 - "GET /api/ranking?period=month HTTP/1.0" 200 OK
Nov 11 22:24:07 impressed-jade.ptr.network uvicorn[3313593]: INFO:     109.245.39.254:0 - "GET /api/sports?tz=60 HTTP/1.0" 200 OK
Nov 11 22:24:07 impressed-jade.ptr.network uvicorn[3313592]: INFO:     109.245.39.254:0 - "GET /api/matches?day=live&sport=all&serbian=false&tz=60 HTTP/1.0" 200 OK
Nov 11 22:24:07 impressed-jade.ptr.network uvicorn[3313593]: INFO:     109.245.39.254:0 - "GET /api/matches?day=today&sport=all&serbian=false&tz=60 HTTP/1.0" 200 OK
Nov 11 22:24:07 impressed-jade.ptr.network uvicorn[3313593]: INFO:     109.245.39.254:0 - "GET /api/home?tz=60&sport=all HTTP/1.0" 200 OK
Nov 11 22:24:39 impressed-jade.ptr.network uvicorn[3313592]: INFO:     127.0.0.1:34440 - "GET /api/health HTTP/1.1" 200 OK
Nov 11 22:24:39 impressed-jade.ptr.network uvicorn[3313592]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 22:24:39 impressed-jade.ptr.network uvicorn[3313592]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 22:24:39 impressed-jade.ptr.network uvicorn[3313592]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
