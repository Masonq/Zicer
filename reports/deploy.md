# Zicer deploy 2026-11-11 00:39 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: 642ca35 Остановки игры по событиям: хоккей — удаление (остановка + большинство 2:00 с отсчётом), футбол — карточки, замены, угловые, пенальти, баскетбол — фолы, водное поло — фолы; главная не затемняется (только при смене спорта и не дольше 2,5 с)

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
2026/11/11 03:38:38 [warn] 1885271#1885271: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/11 03:38:38 [warn] 1885271#1885271: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/11 03:38:38 [warn] 1885271#1885271: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/11 03:38:38 [warn] 1885271#1885271: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/11 03:38:38 [warn] 1885271#1885271: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/11 03:38:38 [warn] 1885271#1885271: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
matches: {'basketball': 688, 'football': 1100, 'hockey': 35, 'tennis': 12, 'volleyball': 5, 'waterpolo': 4}
other_results | 2026-11-11 00:37:54.945463 | other results 4 | 
football_live | 2026-11-11 00:38:10.363801 | live upserted 1 | 
finish_stale | 2026-11-11 00:38:28.315555 | finished 0 | 
football | 2026-11-11 00:38:31.024093 | football upserted 97 |  "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
basketball | 2026-11-11 00:38:32.880767 | basketball upserted 420 | 
basketball_week | 2026-11-11 00:38:33.433931 | nba week upserted 48 | 
other_sports | 2026-11-11 00:38:33.717350 | other sports new 0 | 
backfill | 2026-11-11 00:38:33.722683 | already | 
tg_reminders | 2026-11-11 00:35:09.766107 | no token | 
odds | 2026-11-11 00:38:34.402032 | odds matched 50 | 
settle | 2026-11-11 00:38:34.426797 | settled 0 | 
live | 2026-11-11 00:38:58.511663 | live updated 5 | 
names | 2026-11-11 00:35:19.010525 | names 0 | 
xfeed | 2026-11-11 00:39:02.354326 | xfeed games 127, linked 0, updated 5 | 
tg_poll | 2026-11-11 00:39:02.357175 | no token | 
trends | 2026-11-10 23:36:09.974574 | trends 11 | 
analysis | 2026-11-10 23:36:10.199323 | analysis 27 | 
maxbet_results | 2026-11-11 00:37:21.196380 | no pending | 
--- worker log ---
Nov 11 03:38:33 impressed-jade.ptr.network python[1884951]: 2026-11-11 03:38:33,127 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261114 "HTTP/1.1 200 OK"
Nov 11 03:38:33 impressed-jade.ptr.network python[1884951]: 2026-11-11 03:38:33,168 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261115 "HTTP/1.1 200 OK"
Nov 11 03:38:33 impressed-jade.ptr.network python[1884951]: 2026-11-11 03:38:33,220 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261116 "HTTP/1.1 200 OK"
Nov 11 03:38:33 impressed-jade.ptr.network python[1884951]: 2026-11-11 03:38:33,268 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261117 "HTTP/1.1 200 OK"
Nov 11 03:38:33 impressed-jade.ptr.network python[1884951]: 2026-11-11 03:38:33,397 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261118 "HTTP/1.1 200 OK"
Nov 11 03:38:33 impressed-jade.ptr.network python[1884951]: 2026-11-11 03:38:33,530 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/H/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 03:38:33 impressed-jade.ptr.network python[1884951]: 2026-11-11 03:38:33,593 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/T/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 03:38:33 impressed-jade.ptr.network python[1884951]: 2026-11-11 03:38:33,645 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/V/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 03:38:33 impressed-jade.ptr.network python[1884951]: 2026-11-11 03:38:33,710 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/W/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 03:38:33 impressed-jade.ptr.network python[1884951]: 2026-11-11 03:38:33,817 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 03:38:34 impressed-jade.ptr.network python[1884951]: 2026-11-11 03:38:34,009 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 03:38:34 impressed-jade.ptr.network python[1884951]: 2026-11-11 03:38:34,355 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 03:38:44 impressed-jade.ptr.network python[1884951]: 2026-11-11 03:38:44,526 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 03:38:45 impressed-jade.ptr.network python[1884951]: 2026-11-11 03:38:45,149 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 03:38:45 impressed-jade.ptr.network python[1884951]: 2026-11-11 03:38:45,780 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 03:38:46 impressed-jade.ptr.network python[1884951]: 2026-11-11 03:38:46,407 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 03:38:47 impressed-jade.ptr.network python[1884951]: 2026-11-11 03:38:47,031 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 03:38:47 impressed-jade.ptr.network python[1884951]: 2026-11-11 03:38:47,653 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 03:38:58 impressed-jade.ptr.network python[1884951]: 2026-11-11 03:38:58,414 INFO HTTP Request: GET https://www.maxbet.rs/live/init/sr "HTTP/1.1 200 OK"
Nov 11 03:38:58 impressed-jade.ptr.network python[1884951]: 2026-11-11 03:38:58,603 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 03:38:59 impressed-jade.ptr.network python[1884951]: 2026-11-11 03:38:59,231 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 03:38:59 impressed-jade.ptr.network python[1884951]: 2026-11-11 03:38:59,862 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 03:39:00 impressed-jade.ptr.network python[1884951]: 2026-11-11 03:39:00,490 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 03:39:01 impressed-jade.ptr.network python[1884951]: 2026-11-11 03:39:01,115 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 03:39:01 impressed-jade.ptr.network python[1884951]: 2026-11-11 03:39:01,733 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
--- api log ---
Nov 11 03:38:29 impressed-jade.ptr.network systemd[1]: zicer-api.service: Consumed 17.008s CPU time, 216.8M memory peak, 62.2M memory swap peak.
Nov 11 03:38:29 impressed-jade.ptr.network systemd[1]: Started zicer-api.service - Zicer API.
Nov 11 03:38:29 impressed-jade.ptr.network uvicorn[1884953]: INFO:     Uvicorn running on http://127.0.0.1:8790 (Press CTRL+C to quit)
Nov 11 03:38:29 impressed-jade.ptr.network uvicorn[1884953]: INFO:     Started parent process [1884953]
Nov 11 03:38:30 impressed-jade.ptr.network uvicorn[1884979]: INFO:     Started server process [1884979]
Nov 11 03:38:30 impressed-jade.ptr.network uvicorn[1884979]: INFO:     Waiting for application startup.
Nov 11 03:38:30 impressed-jade.ptr.network uvicorn[1884979]: INFO:     Application startup complete.
Nov 11 03:38:30 impressed-jade.ptr.network uvicorn[1884978]: INFO:     Started server process [1884978]
Nov 11 03:38:30 impressed-jade.ptr.network uvicorn[1884978]: INFO:     Waiting for application startup.
Nov 11 03:38:30 impressed-jade.ptr.network uvicorn[1884978]: INFO:     Application startup complete.
Nov 11 03:38:57 impressed-jade.ptr.network uvicorn[1884978]: INFO:     87.116.135.226:0 - "GET /api/home?tz=60&sport=all HTTP/1.0" 200 OK
Nov 11 03:39:01 impressed-jade.ptr.network uvicorn[1884978]: INFO:     127.0.0.1:33122 - "GET /api/health HTTP/1.1" 200 OK
Nov 11 03:39:02 impressed-jade.ptr.network uvicorn[1884978]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 03:39:02 impressed-jade.ptr.network uvicorn[1884978]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 03:39:02 impressed-jade.ptr.network uvicorn[1884978]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
