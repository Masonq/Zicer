# Zicer deploy 2026-11-11 16:02 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: 7de815a Киберспорт: без двойных матчей, когда матч одновременно в списках «скоро» и «идёт»; ошибка одной игры не останавливает остальные

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
2026/11/11 19:02:33 [warn] 3045120#3045120: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/11 19:02:33 [warn] 3045120#3045120: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/11 19:02:33 [warn] 3045120#3045120: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/11 19:02:33 [warn] 3045120#3045120: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/11 19:02:33 [warn] 3045120#3045120: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/11 19:02:33 [warn] 3045120#3045120: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
matches: {'esports': 58, 'hockey': 52, 'volleyball': 33, 'tabletennis': 142, 'handball': 44, 'basketball': 707, 'waterpolo': 7, 'tennis': 23, 'football': 1100}
football_live | 2026-11-11 16:01:30.435699 | live upserted 0 | 
finish_stale | 2026-11-11 16:01:39.550070 | finished 0 | 
live | 2026-11-11 16:01:53.688133 | live updated 9 | 
social | 2026-11-11 16:02:09.704266 | social nothing due (test) | 
maxbet_results | 2026-11-11 16:02:15.150078 | maxbet results 1 | 
other_results | 2026-11-11 16:02:21.590248 | other results 16 | 
tg_poll | 2026-11-11 16:02:23.213522 | no token | 
basketball | 2026-11-11 16:02:28.869418 | basketball upserted 414 | 
basketball_week | 2026-11-11 16:02:29.824979 | nba week upserted 48 | 
other_sports | 2026-11-11 16:02:30.539019 | other sports new 0 | 
backfill | 2026-11-11 16:02:30.545009 | already | 
logos | 2026-11-11 16:02:30.625096 | logos: nothing to do | 
highlights | 2026-11-11 16:02:31.087273 | highlights +0 | 
x22_line | 2026-11-11 16:02:38.122801 | x22 line new 0, fetched {'futsal': '0'} | 
odds | 2026-11-11 16:02:39.099482 | odds matched 72 | 
settle | 2026-11-11 16:02:39.123814 | settled 0 | 
xfeed | 2026-11-11 16:02:52.744985 | xfeed empty (22bet.ug http 308) | 
names | 2026-11-11 15:54:47.185881 | names 0 | 
trends | 2026-11-10 23:36:09.974574 | trends 11 | 
analysis | 2026-11-10 23:36:10.199323 | analysis 27 | 
pandascore | None |  |  ^^^^^^^^^^^^^^^^^^^^^^
tg_reminders | 2026-11-11 15:59:52.364975 | no token | 
football | 2026-11-11 16:02:27.179778 | football upserted 96 |  "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
--- worker log ---
Nov 11 19:02:29 impressed-jade.ptr.network python[3044754]: 2026-11-11 19:02:29,787 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261118 "HTTP/1.1 200 OK"
Nov 11 19:02:29 impressed-jade.ptr.network python[3044754]: 2026-11-11 19:02:29,956 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/H/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 19:02:30 impressed-jade.ptr.network python[3044754]: 2026-11-11 19:02:30,072 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/T/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 19:02:30 impressed-jade.ptr.network python[3044754]: 2026-11-11 19:02:30,171 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/V/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 19:02:30 impressed-jade.ptr.network python[3044754]: 2026-11-11 19:02:30,260 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/W/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 19:02:30 impressed-jade.ptr.network python[3044754]: 2026-11-11 19:02:30,359 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/HB/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 19:02:30 impressed-jade.ptr.network python[3044754]: 2026-11-11 19:02:30,458 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/TT/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 19:02:30 impressed-jade.ptr.network python[3044754]: 2026-11-11 19:02:30,794 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpFqOv5z4WKps64GlQS4ytw "HTTP/1.1 200 OK"
Nov 11 19:02:30 impressed-jade.ptr.network python[3044754]: 2026-11-11 19:02:30,857 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC-2Cj6KlR9rCfR28zNLmOTA "HTTP/1.1 200 OK"
Nov 11 19:02:30 impressed-jade.ptr.network python[3044754]: 2026-11-11 19:02:30,870 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCWJ2lWNubArHWmf3FIHbfcQ "HTTP/1.1 200 OK"
Nov 11 19:02:30 impressed-jade.ptr.network python[3044754]: 2026-11-11 19:02:30,895 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCqFMzb-4AUf6WAIbl132QKA "HTTP/1.1 200 OK"
Nov 11 19:02:30 impressed-jade.ptr.network python[3044754]: 2026-11-11 19:02:30,911 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCwJ3S2Ix7aI1BhHexDJlmEg "HTTP/1.1 200 OK"
Nov 11 19:02:30 impressed-jade.ptr.network python[3044754]: 2026-11-11 19:02:30,926 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCTv-XvfzLX3i4IGWAm4sbmA "HTTP/1.1 200 OK"
Nov 11 19:02:30 impressed-jade.ptr.network python[3044754]: 2026-11-11 19:02:30,954 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCxfPjORdISQSn2fV8tcVmgA "HTTP/1.1 200 OK"
Nov 11 19:02:30 impressed-jade.ptr.network python[3044754]: 2026-11-11 19:02:30,967 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCQsH5XtIc9hONE1BQjucM0g "HTTP/1.1 200 OK"
Nov 11 19:02:30 impressed-jade.ptr.network python[3044754]: 2026-11-11 19:02:30,993 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC6UL29enLNe4mqwTfAyeNuw "HTTP/1.1 200 OK"
Nov 11 19:02:31 impressed-jade.ptr.network python[3044754]: 2026-11-11 19:02:31,018 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpryVRk_VDudG8SHXgWcG0w "HTTP/1.1 200 OK"
Nov 11 19:02:31 impressed-jade.ptr.network python[3044754]: 2026-11-11 19:02:31,054 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCyGa1YEx9ST66rYrJTGIKOw "HTTP/1.1 200 OK"
Nov 11 19:02:31 impressed-jade.ptr.network python[3044754]: 2026-11-11 19:02:31,431 INFO HTTP Request: GET https://22bet.com/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 19:02:31 impressed-jade.ptr.network python[3044754]: 2026-11-11 19:02:31,677 INFO HTTP Request: GET https://22bet.co.ke/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 19:02:31 impressed-jade.ptr.network python[3044754]: 2026-11-11 19:02:31,774 INFO HTTP Request: GET https://22bet.ng/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 19:02:38 impressed-jade.ptr.network python[3044754]: 2026-11-11 19:02:38,120 INFO HTTP Request: GET https://22bet.ug/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 19:02:38 impressed-jade.ptr.network python[3044754]: 2026-11-11 19:02:38,262 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 19:02:38 impressed-jade.ptr.network python[3044754]: 2026-11-11 19:02:38,462 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 19:02:38 impressed-jade.ptr.network python[3044754]: 2026-11-11 19:02:38,935 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
--- api log ---
Nov 11 19:02:55 impressed-jade.ptr.network uvicorn[3044785]: INFO:     109.92.227.130:0 - "GET /api/home?tz=180&sport=all HTTP/1.0" 200 OK
Nov 11 19:02:55 impressed-jade.ptr.network uvicorn[3044785]: INFO:     109.92.227.130:0 - "POST /api/t HTTP/1.0" 200 OK
Nov 11 19:02:55 impressed-jade.ptr.network uvicorn[3044784]: INFO:     109.92.227.130:0 - "GET /api/me/invites HTTP/1.0" 200 OK
Nov 11 19:02:55 impressed-jade.ptr.network uvicorn[3044784]: INFO:     109.92.227.130:0 - "GET /api/me/telegram HTTP/1.0" 200 OK
Nov 11 19:02:55 impressed-jade.ptr.network uvicorn[3044784]: INFO:     109.92.227.130:0 - "GET /api/users/Anonymous HTTP/1.0" 200 OK
Nov 11 19:02:56 impressed-jade.ptr.network uvicorn[3044785]: INFO:     109.92.227.130:0 - "GET /api/ranking?period=month HTTP/1.0" 200 OK
Nov 11 19:02:56 impressed-jade.ptr.network uvicorn[3044785]: INFO:     109.92.227.130:0 - "GET /api/sports?tz=180 HTTP/1.0" 200 OK
Nov 11 19:02:56 impressed-jade.ptr.network uvicorn[3044785]: INFO:     109.92.227.130:0 - "GET /api/matches?day=live&sport=all&serbian=false&tz=180 HTTP/1.0" 200 OK
Nov 11 19:02:56 impressed-jade.ptr.network uvicorn[3044785]: INFO:     109.92.227.130:0 - "GET /api/matches?day=today&sport=all&serbian=false&tz=180 HTTP/1.0" 200 OK
Nov 11 19:02:56 impressed-jade.ptr.network uvicorn[3044785]: INFO:     109.92.227.130:0 - "GET /api/matches/1859/center HTTP/1.0" 200 OK
Nov 11 19:02:56 impressed-jade.ptr.network uvicorn[3044784]: INFO:     109.92.227.130:0 - "GET /api/home?tz=180&sport=all HTTP/1.0" 200 OK
Nov 11 19:02:57 impressed-jade.ptr.network uvicorn[3044784]: INFO:     127.0.0.1:48770 - "GET /api/health HTTP/1.1" 200 OK
Nov 11 19:02:57 impressed-jade.ptr.network uvicorn[3044785]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 19:02:57 impressed-jade.ptr.network uvicorn[3044784]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 19:02:57 impressed-jade.ptr.network uvicorn[3044785]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
