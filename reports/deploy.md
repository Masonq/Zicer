# Zicer deploy 2026-11-10 20:05 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: d37be8a Без прыжков: подложки по размеру настоящих блоков, матч открывается сразу с данными из списка, фиксированные вкладки матч-центра, кэш страниц при возврате, футер не прыгает (замер CLS по всем страницам ~0)

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
2026/11/10 23:04:43 [warn] 1518546#1518546: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/10 23:04:43 [warn] 1518546#1518546: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/10 23:04:43 [warn] 1518546#1518546: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/10 23:04:43 [warn] 1518546#1518546: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/10 23:04:43 [warn] 1518546#1518546: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/10 23:04:43 [warn] 1518546#1518546: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
matches: {'basketball': 673, 'waterpolo': 4, 'tennis': 11, 'hockey': 35, 'volleyball': 5, 'football': 1090}
maxbet_results | 2026-11-10 20:03:27.173040 | maxbet results 3 | 
names | 2026-11-10 20:03:27.277392 | names 0 | 
other_results | 2026-11-10 20:03:51.076847 | other results 5 | 
tg_reminders | 2026-11-10 20:03:52.499840 | no token | 
football_live | 2026-11-10 20:03:59.725358 | live upserted 4 | 
football | 2026-11-10 20:04:37.196896 | football upserted 91 | 
basketball | 2026-11-10 20:04:39.834847 | basketball upserted 421 | 
basketball_week | 2026-11-10 20:04:40.559775 | nba week upserted 40 | 
other_sports | 2026-11-10 20:04:40.954895 | other sports new 0 | 
backfill | 2026-11-10 20:04:40.962879 | already | 
odds | 2026-11-10 20:04:41.752976 | odds matched 50 | 
settle | 2026-11-10 20:04:41.778148 | settled 0 | 
trends | 2026-11-10 20:04:42.030632 | trends 11 | 
analysis | 2026-11-10 20:04:42.055323 | analysis 1 | 
xfeed | 2026-11-10 20:05:01.253900 | xfeed games 234, linked 0, updated 12 | 
live | 2026-11-10 20:05:06.768349 | live updated 14 | 
tg_poll | 2026-11-10 20:05:06.779744 | no token | 
--- worker log ---
Nov 10 23:04:37 impressed-jade.ptr.network python[1518217]: 2026-11-10 23:04:37,327 INFO HTTP Request: GET https://api-live.euroleague.net/v2/competitions/E/seasons/E2026/games "HTTP/1.1 200 OK"
Nov 10 23:04:39 impressed-jade.ptr.network python[1518217]: 2026-11-10 23:04:39,140 INFO HTTP Request: GET https://api-live.euroleague.net/v2/competitions/U/seasons/U2026/games "HTTP/1.1 200 OK"
Nov 10 23:04:39 impressed-jade.ptr.network python[1518217]: 2026-11-10 23:04:39,671 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261109 "HTTP/1.1 200 OK"
Nov 10 23:04:39 impressed-jade.ptr.network python[1518217]: 2026-11-10 23:04:39,747 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261110 "HTTP/1.1 200 OK"
Nov 10 23:04:39 impressed-jade.ptr.network python[1518217]: 2026-11-10 23:04:39,804 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261111 "HTTP/1.1 200 OK"
Nov 10 23:04:39 impressed-jade.ptr.network python[1518217]: 2026-11-10 23:04:39,948 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261112 "HTTP/1.1 200 OK"
Nov 10 23:04:40 impressed-jade.ptr.network python[1518217]: 2026-11-10 23:04:40,099 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261113 "HTTP/1.1 200 OK"
Nov 10 23:04:40 impressed-jade.ptr.network python[1518217]: 2026-11-10 23:04:40,164 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261114 "HTTP/1.1 200 OK"
Nov 10 23:04:40 impressed-jade.ptr.network python[1518217]: 2026-11-10 23:04:40,304 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261115 "HTTP/1.1 200 OK"
Nov 10 23:04:40 impressed-jade.ptr.network python[1518217]: 2026-11-10 23:04:40,390 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261116 "HTTP/1.1 200 OK"
Nov 10 23:04:40 impressed-jade.ptr.network python[1518217]: 2026-11-10 23:04:40,534 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261117 "HTTP/1.1 200 OK"
Nov 10 23:04:40 impressed-jade.ptr.network python[1518217]: 2026-11-10 23:04:40,675 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/H/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 23:04:40 impressed-jade.ptr.network python[1518217]: 2026-11-10 23:04:40,790 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/T/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 23:04:40 impressed-jade.ptr.network python[1518217]: 2026-11-10 23:04:40,868 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/V/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 23:04:40 impressed-jade.ptr.network python[1518217]: 2026-11-10 23:04:40,947 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/W/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 23:04:41 impressed-jade.ptr.network python[1518217]: 2026-11-10 23:04:41,116 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 23:04:41 impressed-jade.ptr.network python[1518217]: 2026-11-10 23:04:41,301 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 23:04:41 impressed-jade.ptr.network python[1518217]: 2026-11-10 23:04:41,707 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 23:04:57 impressed-jade.ptr.network python[1518217]: 2026-11-10 23:04:57,175 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 10 23:04:57 impressed-jade.ptr.network python[1518217]: 2026-11-10 23:04:57,823 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 10 23:04:58 impressed-jade.ptr.network python[1518217]: 2026-11-10 23:04:58,452 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 10 23:04:59 impressed-jade.ptr.network python[1518217]: 2026-11-10 23:04:59,083 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 10 23:04:59 impressed-jade.ptr.network python[1518217]: 2026-11-10 23:04:59,927 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 10 23:05:00 impressed-jade.ptr.network python[1518217]: 2026-11-10 23:05:00,550 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 10 23:05:06 impressed-jade.ptr.network python[1518217]: 2026-11-10 23:05:06,435 INFO HTTP Request: GET https://www.maxbet.rs/live/init/sr "HTTP/1.1 200 OK"
--- api log ---
Nov 10 23:04:34 impressed-jade.ptr.network systemd[1]: Stopped zicer-api.service - Zicer API.
Nov 10 23:04:34 impressed-jade.ptr.network systemd[1]: zicer-api.service: Consumed 10.518s CPU time, 169.6M memory peak, 116.0M memory swap peak.
Nov 10 23:04:34 impressed-jade.ptr.network systemd[1]: Started zicer-api.service - Zicer API.
Nov 10 23:04:34 impressed-jade.ptr.network uvicorn[1518222]: INFO:     Uvicorn running on http://127.0.0.1:8790 (Press CTRL+C to quit)
Nov 10 23:04:34 impressed-jade.ptr.network uvicorn[1518222]: INFO:     Started parent process [1518222]
Nov 10 23:04:38 impressed-jade.ptr.network uvicorn[1518228]: INFO:     Started server process [1518228]
Nov 10 23:04:38 impressed-jade.ptr.network uvicorn[1518228]: INFO:     Waiting for application startup.
Nov 10 23:04:38 impressed-jade.ptr.network uvicorn[1518229]: INFO:     Started server process [1518229]
Nov 10 23:04:38 impressed-jade.ptr.network uvicorn[1518229]: INFO:     Waiting for application startup.
Nov 10 23:04:39 impressed-jade.ptr.network uvicorn[1518228]: INFO:     Application startup complete.
Nov 10 23:04:39 impressed-jade.ptr.network uvicorn[1518229]: INFO:     Application startup complete.
Nov 10 23:05:08 impressed-jade.ptr.network uvicorn[1518229]: INFO:     127.0.0.1:34090 - "GET /api/health HTTP/1.1" 200 OK
Nov 10 23:05:08 impressed-jade.ptr.network uvicorn[1518229]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 10 23:05:08 impressed-jade.ptr.network uvicorn[1518229]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 10 23:05:08 impressed-jade.ptr.network uvicorn[1518229]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
