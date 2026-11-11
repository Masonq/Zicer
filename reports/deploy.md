# Zicer deploy 2026-11-11 02:10 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: f291e0a Логотипы: первый подбор сразу при запуске

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
2026/11/11 05:10:21 [warn] 2007922#2007922: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/11 05:10:21 [warn] 2007922#2007922: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/11 05:10:21 [warn] 2007922#2007922: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/11 05:10:21 [warn] 2007922#2007922: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/11 05:10:21 [warn] 2007922#2007922: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/11 05:10:21 [warn] 2007922#2007922: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
names | 2026-11-11 02:09:07.755238 | names 0 | 
tg_reminders | 2026-11-11 02:09:08.083679 | no token | 
finish_stale | 2026-11-11 02:09:22.051478 | finished 0 | 
live | 2026-11-11 02:09:50.183905 | live updated 10 | 
tg_poll | 2026-11-11 02:09:54.050405 | no token | 
football_live | 2026-11-11 02:10:04.154501 | live upserted 1 | 
maxbet_results | 2026-11-11 02:10:10.752854 | no pending | 
other_results | 2026-11-11 02:10:11.959568 | other results 6 | 
football | 2026-11-11 02:03:53.105699 | football upserted 97 |  "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
basketball | 2026-11-11 02:10:17.663370 | basketball upserted 420 | 
basketball_week | 2026-11-11 02:10:18.489653 | nba week upserted 48 | 
other_sports | 2026-11-11 02:10:18.810764 | other sports new 0 | 
backfill | 2026-11-11 02:10:18.815971 | already | 
logos | 2026-11-11 02:10:29.464724 | logos: checked 25, found 17 | 
odds | 2026-11-11 02:10:30.151924 | odds matched 48 | 
settle | 2026-11-11 02:10:30.191158 | settled 0 | 
xfeed | 2026-11-11 02:10:44.074483 | xfeed games 137, linked 0, updated 6 | 
trends | 2026-11-10 23:36:09.974574 | trends 11 | 
analysis | 2026-11-10 23:36:10.199323 | analysis 27 | 
--- worker log ---
Nov 11 05:10:19 impressed-jade.ptr.network python[2007574]: 2026-11-11 05:10:19,261 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/wnba/teams "HTTP/1.1 200 OK"
Nov 11 05:10:19 impressed-jade.ptr.network python[2007574]: 2026-11-11 05:10:19,357 INFO HTTP Request: GET https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Lukko "HTTP/1.1 200 OK"
Nov 11 05:10:20 impressed-jade.ptr.network python[2007574]: 2026-11-11 05:10:20,057 INFO HTTP Request: GET https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Hapoel+Holon "HTTP/1.1 200 OK"
Nov 11 05:10:20 impressed-jade.ptr.network python[2007574]: 2026-11-11 05:10:20,727 INFO HTTP Request: GET https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Vechta "HTTP/1.1 200 OK"
Nov 11 05:10:21 impressed-jade.ptr.network python[2007574]: 2026-11-11 05:10:21,421 INFO HTTP Request: GET https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Alba+Berlin "HTTP/1.1 200 OK"
Nov 11 05:10:22 impressed-jade.ptr.network python[2007574]: 2026-11-11 05:10:22,118 INFO HTTP Request: GET https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Cholet "HTTP/1.1 200 OK"
Nov 11 05:10:22 impressed-jade.ptr.network python[2007574]: 2026-11-11 05:10:22,828 INFO HTTP Request: GET https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Manchester "HTTP/1.1 200 OK"
Nov 11 05:10:23 impressed-jade.ptr.network python[2007574]: 2026-11-11 05:10:23,560 INFO HTTP Request: GET https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Igokea "HTTP/1.1 200 OK"
Nov 11 05:10:24 impressed-jade.ptr.network python[2007574]: 2026-11-11 05:10:24,352 INFO HTTP Request: GET https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=CSKA+Moscow "HTTP/1.1 200 OK"
Nov 11 05:10:25 impressed-jade.ptr.network python[2007574]: 2026-11-11 05:10:25,020 INFO HTTP Request: GET https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=SKA+St.+Peters. "HTTP/1.1 200 OK"
Nov 11 05:10:25 impressed-jade.ptr.network python[2007574]: 2026-11-11 05:10:25,685 INFO HTTP Request: GET https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Sochi "HTTP/1.1 200 OK"
Nov 11 05:10:26 impressed-jade.ptr.network python[2007574]: 2026-11-11 05:10:26,313 INFO HTTP Request: GET https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Lada "HTTP/1.1 429 Too Many Requests"
Nov 11 05:10:26 impressed-jade.ptr.network python[2007574]: 2026-11-11 05:10:26,947 INFO HTTP Request: GET https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=IFK+Helsinki "HTTP/1.1 429 Too Many Requests"
Nov 11 05:10:27 impressed-jade.ptr.network python[2007574]: 2026-11-11 05:10:27,579 INFO HTTP Request: GET https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Jokerit "HTTP/1.1 429 Too Many Requests"
Nov 11 05:10:28 impressed-jade.ptr.network python[2007574]: 2026-11-11 05:10:28,221 INFO HTTP Request: GET https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Pelicans "HTTP/1.1 429 Too Many Requests"
Nov 11 05:10:28 impressed-jade.ptr.network python[2007574]: 2026-11-11 05:10:28,849 INFO HTTP Request: GET https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=JYP "HTTP/1.1 429 Too Many Requests"
Nov 11 05:10:29 impressed-jade.ptr.network python[2007574]: 2026-11-11 05:10:29,575 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 05:10:29 impressed-jade.ptr.network python[2007574]: 2026-11-11 05:10:29,755 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 05:10:30 impressed-jade.ptr.network python[2007574]: 2026-11-11 05:10:30,105 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 05:10:40 impressed-jade.ptr.network python[2007574]: 2026-11-11 05:10:40,289 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 05:10:40 impressed-jade.ptr.network python[2007574]: 2026-11-11 05:10:40,912 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 05:10:41 impressed-jade.ptr.network python[2007574]: 2026-11-11 05:10:41,543 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 05:10:42 impressed-jade.ptr.network python[2007574]: 2026-11-11 05:10:42,172 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 05:10:42 impressed-jade.ptr.network python[2007574]: 2026-11-11 05:10:42,795 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 05:10:43 impressed-jade.ptr.network python[2007574]: 2026-11-11 05:10:43,412 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
--- api log ---
Nov 11 05:10:30 impressed-jade.ptr.network uvicorn[2007587]: INFO:     87.116.135.226:0 - "GET /api/users/Anonymous HTTP/1.0" 200 OK
Nov 11 05:10:30 impressed-jade.ptr.network uvicorn[2007587]: INFO:     87.116.135.226:0 - "GET /api/sports?tz=60 HTTP/1.0" 200 OK
Nov 11 05:10:31 impressed-jade.ptr.network uvicorn[2007586]: INFO:     87.116.135.226:0 - "GET /api/home?tz=60&sport=all HTTP/1.0" 200 OK
Nov 11 05:10:31 impressed-jade.ptr.network uvicorn[2007586]: INFO:     87.116.135.226:0 - "GET /api/matches?day=live&sport=all&serbian=false&tz=60 HTTP/1.0" 200 OK
Nov 11 05:10:31 impressed-jade.ptr.network uvicorn[2007586]: INFO:     87.116.135.226:0 - "GET /api/ranking?period=month HTTP/1.0" 200 OK
Nov 11 05:10:31 impressed-jade.ptr.network uvicorn[2007587]: INFO:     87.116.135.226:0 - "GET /api/sports?tz=60 HTTP/1.0" 200 OK
Nov 11 05:10:31 impressed-jade.ptr.network uvicorn[2007587]: INFO:     87.116.135.226:0 - "GET /api/matches?day=today&sport=all&serbian=false&tz=60 HTTP/1.0" 200 OK
Nov 11 05:10:31 impressed-jade.ptr.network uvicorn[2007587]: INFO:     87.116.135.226:0 - "GET /api/home?tz=60&sport=all HTTP/1.0" 200 OK
Nov 11 05:10:33 impressed-jade.ptr.network uvicorn[2007587]: INFO:     87.116.135.226:0 - "GET /api/home?tz=60&sport=hockey HTTP/1.0" 200 OK
Nov 11 05:10:39 impressed-jade.ptr.network uvicorn[2007587]: INFO:     87.116.135.226:0 - "GET /api/matches/1767/center HTTP/1.0" 200 OK
Nov 11 05:10:39 impressed-jade.ptr.network uvicorn[2007586]: INFO:     87.116.135.226:0 - "GET /api/matches/1767 HTTP/1.0" 200 OK
Nov 11 05:10:45 impressed-jade.ptr.network uvicorn[2007587]: INFO:     127.0.0.1:54212 - "GET /api/health HTTP/1.1" 200 OK
Nov 11 05:10:45 impressed-jade.ptr.network uvicorn[2007587]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 05:10:46 impressed-jade.ptr.network uvicorn[2007587]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 05:10:46 impressed-jade.ptr.network uvicorn[2007587]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
