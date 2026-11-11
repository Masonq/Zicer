# Zicer deploy 2026-11-11 01:45 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: 7f4245f Главная: карусель матчей дня (до 5, автолистание 6 с, свайп, пауза при касании, индикатор) и баннеры розыгрышей/акций; админка: раздел «Баннеры» (тексты SR/RU, картинка, ссылка, даты показа, порядок), несколько закреплённых матчей дня; картинка тикета: всё выровнено по реальному контуру текста, единый левый край; кнопки «Поделиться» ровными рядами

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

=== Сервисы ===
OK: zicer-api работает
OK: zicer-worker работает

=== Автообновление ===
OK: таймер автообновления включён

=== Админ ===
OK: админ есть

=== nginx ===
2026/11/11 04:44:40 [warn] 1973335#1973335: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/11 04:44:40 [warn] 1973335#1973335: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/11 04:44:40 [warn] 1973335#1973335: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/11 04:44:40 [warn] 1973335#1973335: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/11 04:44:40 [warn] 1973335#1973335: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/11 04:44:40 [warn] 1973335#1973335: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
matches: {'basketball': 688, 'waterpolo': 4, 'tennis': 12, 'hockey': 35, 'volleyball': 5, 'football': 1100}
basketball | 2026-11-11 01:44:36.109914 | basketball upserted 420 | 
basketball_week | 2026-11-11 01:44:36.661943 | nba week upserted 48 | 
other_sports | 2026-11-11 01:44:36.945549 | other sports new 0 | 
backfill | 2026-11-11 01:44:36.948513 | already | 
odds | 2026-11-11 01:44:37.822362 | odds matched 48 | 
settle | 2026-11-11 01:44:37.846675 | settled 0 | 
live | 2026-11-11 01:45:01.998145 | live updated 8 | 
xfeed | 2026-11-11 01:45:05.886286 | xfeed games 138, linked 0, updated 6 | 
tg_poll | 2026-11-11 01:45:05.890769 | no token | 
maxbet_results | 2026-11-11 01:42:12.603344 | no pending | 
other_results | 2026-11-11 01:42:13.624048 | other results 5 | 
names | 2026-11-11 01:43:04.583854 | names 0 | 
tg_reminders | 2026-11-11 01:43:04.908183 | no token | 
finish_stale | 2026-11-11 01:43:36.994345 | finished 0 | 
trends | 2026-11-10 23:36:09.974574 | trends 11 | 
analysis | 2026-11-10 23:36:10.199323 | analysis 27 | 
football_live | 2026-11-11 01:44:05.101863 | live upserted 1 | 
football | 2026-11-11 01:44:34.418785 | football upserted 97 |  "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
--- worker log ---
Nov 11 04:44:36 impressed-jade.ptr.network python[1973027]: 2026-11-11 04:44:36,349 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261114 "HTTP/1.1 200 OK"
Nov 11 04:44:36 impressed-jade.ptr.network python[1973027]: 2026-11-11 04:44:36,394 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261115 "HTTP/1.1 200 OK"
Nov 11 04:44:36 impressed-jade.ptr.network python[1973027]: 2026-11-11 04:44:36,451 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261116 "HTTP/1.1 200 OK"
Nov 11 04:44:36 impressed-jade.ptr.network python[1973027]: 2026-11-11 04:44:36,502 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261117 "HTTP/1.1 200 OK"
Nov 11 04:44:36 impressed-jade.ptr.network python[1973027]: 2026-11-11 04:44:36,628 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261118 "HTTP/1.1 200 OK"
Nov 11 04:44:36 impressed-jade.ptr.network python[1973027]: 2026-11-11 04:44:36,750 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/H/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 04:44:36 impressed-jade.ptr.network python[1973027]: 2026-11-11 04:44:36,824 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/T/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 04:44:36 impressed-jade.ptr.network python[1973027]: 2026-11-11 04:44:36,888 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/V/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 04:44:36 impressed-jade.ptr.network python[1973027]: 2026-11-11 04:44:36,939 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/W/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 04:44:37 impressed-jade.ptr.network python[1973027]: 2026-11-11 04:44:37,065 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 04:44:37 impressed-jade.ptr.network python[1973027]: 2026-11-11 04:44:37,401 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 04:44:37 impressed-jade.ptr.network python[1973027]: 2026-11-11 04:44:37,775 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 04:44:47 impressed-jade.ptr.network python[1973027]: 2026-11-11 04:44:47,941 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 04:44:48 impressed-jade.ptr.network python[1973027]: 2026-11-11 04:44:48,592 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 04:44:49 impressed-jade.ptr.network python[1973027]: 2026-11-11 04:44:49,226 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 04:44:49 impressed-jade.ptr.network python[1973027]: 2026-11-11 04:44:49,861 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 04:44:50 impressed-jade.ptr.network python[1973027]: 2026-11-11 04:44:50,483 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 04:44:51 impressed-jade.ptr.network python[1973027]: 2026-11-11 04:44:51,102 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 04:45:01 impressed-jade.ptr.network python[1973027]: 2026-11-11 04:45:01,886 INFO HTTP Request: GET https://www.maxbet.rs/live/init/sr "HTTP/1.1 200 OK"
Nov 11 04:45:02 impressed-jade.ptr.network python[1973027]: 2026-11-11 04:45:02,113 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 04:45:02 impressed-jade.ptr.network python[1973027]: 2026-11-11 04:45:02,738 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 04:45:03 impressed-jade.ptr.network python[1973027]: 2026-11-11 04:45:03,373 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 04:45:04 impressed-jade.ptr.network python[1973027]: 2026-11-11 04:45:04,004 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 04:45:04 impressed-jade.ptr.network python[1973027]: 2026-11-11 04:45:04,627 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 04:45:05 impressed-jade.ptr.network python[1973027]: 2026-11-11 04:45:05,244 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
--- api log ---
Nov 11 04:45:02 impressed-jade.ptr.network uvicorn[1973052]: INFO:     87.116.135.226:0 - "GET /api/matches?day=today&sport=all&serbian=false&tz=60 HTTP/1.0" 200 OK
Nov 11 04:45:02 impressed-jade.ptr.network uvicorn[1973052]: INFO:     87.116.135.226:0 - "GET /api/home?tz=60&sport=all HTTP/1.0" 200 OK
Nov 11 04:45:03 impressed-jade.ptr.network uvicorn[1973053]: INFO:     87.116.135.226:0 - "GET /api/me/telegram HTTP/1.0" 200 OK
Nov 11 04:45:03 impressed-jade.ptr.network uvicorn[1973052]: INFO:     87.116.135.226:0 - "GET /api/users/Anonymous HTTP/1.0" 200 OK
Nov 11 04:45:04 impressed-jade.ptr.network uvicorn[1973053]: INFO:     87.116.135.226:0 - "GET /api/me HTTP/1.0" 200 OK
Nov 11 04:45:04 impressed-jade.ptr.network uvicorn[1973052]: INFO:     87.116.135.226:0 - "GET /api/clubs/battle?sport=football HTTP/1.0" 200 OK
Nov 11 04:45:04 impressed-jade.ptr.network uvicorn[1973052]: INFO:     87.116.135.226:0 - "GET /api/me/telegram HTTP/1.0" 200 OK
Nov 11 04:45:04 impressed-jade.ptr.network uvicorn[1973052]: INFO:     87.116.135.226:0 - "GET /api/users/Anonymous HTTP/1.0" 200 OK
Nov 11 04:45:04 impressed-jade.ptr.network uvicorn[1973052]: INFO:     127.0.0.1:60348 - "GET /api/health HTTP/1.1" 200 OK
Nov 11 04:45:04 impressed-jade.ptr.network uvicorn[1973053]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 04:45:05 impressed-jade.ptr.network uvicorn[1973052]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 04:45:05 impressed-jade.ptr.network uvicorn[1973052]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
Nov 11 04:45:05 impressed-jade.ptr.network uvicorn[1973052]: INFO:     87.116.135.226:0 - "GET /api/tickets/2 HTTP/1.0" 200 OK
Nov 11 04:45:06 impressed-jade.ptr.network uvicorn[1973053]: INFO:     87.116.135.226:0 - "GET /api/sports?tz=60 HTTP/1.0" 200 OK
Nov 11 04:45:06 impressed-jade.ptr.network uvicorn[1973052]: INFO:     87.116.135.226:0 - "GET /api/matches?day=live&sport=all&serbian=false&tz=60 HTTP/1.0" 200 OK
```
