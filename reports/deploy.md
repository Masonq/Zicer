# Zicer deploy 2026-11-10 23:16 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: 0d15d3e Теннис/волейбол: счёт по сетам считается по сыгранным сетам, матч закрывается только если это подтверждают сеты (защита от сбоя фида); страница превью табло /pregled-tablo

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
2026/11/11 02:15:57 [warn] 1774957#1774957: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/11 02:15:57 [warn] 1774957#1774957: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/11 02:15:57 [warn] 1774957#1774957: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/11 02:15:57 [warn] 1774957#1774957: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/11 02:15:57 [warn] 1774957#1774957: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/11 02:15:57 [warn] 1774957#1774957: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
names | 2026-11-10 23:13:41.755712 | names 0 | 
tg_reminders | 2026-11-10 23:13:42.117659 | no token | 
maxbet_results | 2026-11-10 23:14:53.111954 | no pending | 
other_results | 2026-11-10 23:14:54.967863 | other results 2 | 
finish_stale | 2026-11-10 23:15:13.817889 | finished 0 | 
football_live | 2026-11-10 23:15:18.879455 | live upserted 1 | 
tg_poll | 2026-11-10 23:15:27.929551 | no token | 
football | 2026-11-10 23:15:50.390027 | football upserted 97 | 
basketball | 2026-11-10 23:15:52.233857 | basketball upserted 420 | 
basketball_week | 2026-11-10 23:15:53.391449 | nba week upserted 48 | 
other_sports | 2026-11-10 23:15:53.655027 | other sports new 0 | 
backfill | 2026-11-10 23:15:53.659923 | already | 
odds | 2026-11-10 23:15:54.318126 | odds matched 50 | 
settle | 2026-11-10 23:15:54.343259 | settled 0 | 
trends | 2026-11-10 23:15:54.672580 | trends 11 | 
analysis | 2026-11-10 23:15:54.683019 | analysis 0 | 
xfeed | 2026-11-10 23:16:08.533362 | xfeed games 86, linked 0, updated 2 | 
live | 2026-11-10 23:16:18.745041 | live updated 2 | 
--- worker log ---
Nov 11 02:15:52 impressed-jade.ptr.network python[1774626]: 2026-11-11 02:15:52,480 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261114 "HTTP/1.1 200 OK"
Nov 11 02:15:52 impressed-jade.ptr.network python[1774626]: 2026-11-11 02:15:52,610 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261115 "HTTP/1.1 200 OK"
Nov 11 02:15:52 impressed-jade.ptr.network python[1774626]: 2026-11-11 02:15:52,748 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261116 "HTTP/1.1 200 OK"
Nov 11 02:15:53 impressed-jade.ptr.network python[1774626]: 2026-11-11 02:15:53,149 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261117 "HTTP/1.1 200 OK"
Nov 11 02:15:53 impressed-jade.ptr.network python[1774626]: 2026-11-11 02:15:53,280 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261118 "HTTP/1.1 200 OK"
Nov 11 02:15:53 impressed-jade.ptr.network python[1774626]: 2026-11-11 02:15:53,475 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/H/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 02:15:53 impressed-jade.ptr.network python[1774626]: 2026-11-11 02:15:53,550 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/T/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 02:15:53 impressed-jade.ptr.network python[1774626]: 2026-11-11 02:15:53,596 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/V/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 02:15:53 impressed-jade.ptr.network python[1774626]: 2026-11-11 02:15:53,646 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/W/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 02:15:53 impressed-jade.ptr.network python[1774626]: 2026-11-11 02:15:53,766 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 02:15:53 impressed-jade.ptr.network python[1774626]: 2026-11-11 02:15:53,945 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 02:15:54 impressed-jade.ptr.network python[1774626]: 2026-11-11 02:15:54,268 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 02:16:04 impressed-jade.ptr.network python[1774626]: 2026-11-11 02:16:04,784 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 02:16:05 impressed-jade.ptr.network python[1774626]: 2026-11-11 02:16:05,405 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 02:16:06 impressed-jade.ptr.network python[1774626]: 2026-11-11 02:16:06,028 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 02:16:06 impressed-jade.ptr.network python[1774626]: 2026-11-11 02:16:06,655 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 02:16:07 impressed-jade.ptr.network python[1774626]: 2026-11-11 02:16:07,280 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 02:16:07 impressed-jade.ptr.network python[1774626]: 2026-11-11 02:16:07,899 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 02:16:18 impressed-jade.ptr.network python[1774626]: 2026-11-11 02:16:18,662 INFO HTTP Request: GET https://www.maxbet.rs/live/init/sr "HTTP/1.1 200 OK"
Nov 11 02:16:18 impressed-jade.ptr.network python[1774626]: 2026-11-11 02:16:18,839 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 02:16:19 impressed-jade.ptr.network python[1774626]: 2026-11-11 02:16:19,460 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 02:16:20 impressed-jade.ptr.network python[1774626]: 2026-11-11 02:16:20,082 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 02:16:20 impressed-jade.ptr.network python[1774626]: 2026-11-11 02:16:20,708 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 02:16:21 impressed-jade.ptr.network python[1774626]: 2026-11-11 02:16:21,330 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 11 02:16:21 impressed-jade.ptr.network python[1774626]: 2026-11-11 02:16:21,948 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
--- api log ---
Nov 11 02:15:49 impressed-jade.ptr.network uvicorn[1774651]: INFO:     Application startup complete.
Nov 11 02:15:49 impressed-jade.ptr.network uvicorn[1774650]: INFO:     Started server process [1774650]
Nov 11 02:15:49 impressed-jade.ptr.network uvicorn[1774650]: INFO:     Waiting for application startup.
Nov 11 02:15:49 impressed-jade.ptr.network uvicorn[1774650]: INFO:     Application startup complete.
Nov 11 02:15:51 impressed-jade.ptr.network uvicorn[1774650]: INFO:     87.116.135.226:0 - "GET /api/matches/1804/center HTTP/1.0" 200 OK
Nov 11 02:15:57 impressed-jade.ptr.network uvicorn[1774650]: INFO:     87.116.135.226:0 - "GET /api/matches/1804/center HTTP/1.0" 200 OK
Nov 11 02:16:03 impressed-jade.ptr.network uvicorn[1774650]: INFO:     87.116.135.226:0 - "GET /api/matches/1804/center HTTP/1.0" 200 OK
Nov 11 02:16:09 impressed-jade.ptr.network uvicorn[1774650]: INFO:     87.116.135.226:0 - "GET /api/matches/1804/center HTTP/1.0" 200 OK
Nov 11 02:16:14 impressed-jade.ptr.network uvicorn[1774650]: INFO:     87.116.135.226:0 - "GET /api/matches/1804 HTTP/1.0" 200 OK
Nov 11 02:16:15 impressed-jade.ptr.network uvicorn[1774650]: INFO:     87.116.135.226:0 - "GET /api/matches/1804/center HTTP/1.0" 200 OK
Nov 11 02:16:21 impressed-jade.ptr.network uvicorn[1774650]: INFO:     127.0.0.1:52188 - "GET /api/health HTTP/1.1" 200 OK
Nov 11 02:16:21 impressed-jade.ptr.network uvicorn[1774650]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 02:16:21 impressed-jade.ptr.network uvicorn[1774650]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 02:16:21 impressed-jade.ptr.network uvicorn[1774650]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
Nov 11 02:16:21 impressed-jade.ptr.network uvicorn[1774650]: INFO:     87.116.135.226:0 - "GET /api/matches/1804/center HTTP/1.0" 200 OK
```
