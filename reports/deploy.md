# Zicer deploy 2026-11-10 20:26 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: 89b095d Трекер в стиле букмекеров для всех видов спорта; мяч всегда перелетает сетку (теннис, волейбол); события двигают мяч; кэш страниц между перезагрузками и прогрев; убраны оставшиеся прыжки

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
2026/11/10 23:25:58 [warn] 1546703#1546703: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/10 23:25:58 [warn] 1546703#1546703: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/10 23:25:58 [warn] 1546703#1546703: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/10 23:25:58 [warn] 1546703#1546703: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/10 23:25:58 [warn] 1546703#1546703: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/10 23:25:58 [warn] 1546703#1546703: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
matches: {'basketball': 676, 'football': 1090, 'hockey': 35, 'tennis': 12, 'volleyball': 5, 'waterpolo': 4}
maxbet_results | 2026-11-10 20:25:28.513714 | maxbet results 3 | 
other_results | 2026-11-10 20:25:33.210106 | other results 5 | 
tg_poll | 2026-11-10 20:25:34.399261 | no token | 
football_live | 2026-11-10 20:25:39.487226 | live upserted 4 | 
football | 2026-11-10 20:25:52.069983 | football upserted 91 | 
basketball | 2026-11-10 20:25:55.859966 | basketball upserted 421 | 
basketball_week | 2026-11-10 20:25:56.783236 | nba week upserted 40 | 
other_sports | 2026-11-10 20:25:57.081453 | other sports new 0 | 
backfill | 2026-11-10 20:25:57.087850 | already | 
odds | 2026-11-10 20:25:58.147146 | odds matched 50 | 
settle | 2026-11-10 20:25:58.223189 | settled 0 | 
trends | 2026-11-10 20:25:58.797442 | trends 11 | 
analysis | 2026-11-10 20:25:58.866322 | analysis 4 | 
xfeed | 2026-11-10 20:26:12.850868 | xfeed games 211, linked 0, updated 10 | 
live | 2026-11-10 20:26:23.180306 | live updated 13 | 
tg_reminders | 2026-11-10 20:23:20.028503 | no token | 
names | 2026-11-10 20:23:23.385238 | names 2 | 
--- worker log ---
Nov 10 23:25:55 impressed-jade.ptr.network python[1546389]: 2026-11-10 23:25:55,809 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261111 "HTTP/1.1 200 OK"
Nov 10 23:25:55 impressed-jade.ptr.network python[1546389]: 2026-11-10 23:25:55,990 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261112 "HTTP/1.1 200 OK"
Nov 10 23:25:56 impressed-jade.ptr.network python[1546389]: 2026-11-10 23:25:56,102 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261113 "HTTP/1.1 200 OK"
Nov 10 23:25:56 impressed-jade.ptr.network python[1546389]: 2026-11-10 23:25:56,265 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261114 "HTTP/1.1 200 OK"
Nov 10 23:25:56 impressed-jade.ptr.network python[1546389]: 2026-11-10 23:25:56,420 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261115 "HTTP/1.1 200 OK"
Nov 10 23:25:56 impressed-jade.ptr.network python[1546389]: 2026-11-10 23:25:56,586 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261116 "HTTP/1.1 200 OK"
Nov 10 23:25:56 impressed-jade.ptr.network python[1546389]: 2026-11-10 23:25:56,762 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261117 "HTTP/1.1 200 OK"
Nov 10 23:25:56 impressed-jade.ptr.network python[1546389]: 2026-11-10 23:25:56,886 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/H/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 23:25:56 impressed-jade.ptr.network python[1546389]: 2026-11-10 23:25:56,962 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/T/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 23:25:57 impressed-jade.ptr.network python[1546389]: 2026-11-10 23:25:57,020 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/V/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 23:25:57 impressed-jade.ptr.network python[1546389]: 2026-11-10 23:25:57,071 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/W/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 23:25:57 impressed-jade.ptr.network python[1546389]: 2026-11-10 23:25:57,219 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 23:25:57 impressed-jade.ptr.network python[1546389]: 2026-11-10 23:25:57,399 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 23:25:58 impressed-jade.ptr.network python[1546389]: 2026-11-10 23:25:58,016 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 23:26:09 impressed-jade.ptr.network python[1546389]: 2026-11-10 23:26:09,004 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 10 23:26:09 impressed-jade.ptr.network python[1546389]: 2026-11-10 23:26:09,657 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 10 23:26:10 impressed-jade.ptr.network python[1546389]: 2026-11-10 23:26:10,286 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 10 23:26:10 impressed-jade.ptr.network python[1546389]: 2026-11-10 23:26:10,915 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 10 23:26:11 impressed-jade.ptr.network python[1546389]: 2026-11-10 23:26:11,539 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=6&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 10 23:26:12 impressed-jade.ptr.network python[1546389]: 2026-11-10 23:26:12,160 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=17&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 10 23:26:22 impressed-jade.ptr.network python[1546389]: 2026-11-10 23:26:22,993 INFO HTTP Request: GET https://www.maxbet.rs/live/init/sr "HTTP/1.1 200 OK"
Nov 10 23:26:23 impressed-jade.ptr.network python[1546389]: 2026-11-10 23:26:23,298 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=1&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 10 23:26:23 impressed-jade.ptr.network python[1546389]: 2026-11-10 23:26:23,942 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=2&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 10 23:26:24 impressed-jade.ptr.network python[1546389]: 2026-11-10 23:26:24,575 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=3&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
Nov 10 23:26:25 impressed-jade.ptr.network python[1546389]: 2026-11-10 23:26:25,208 INFO HTTP Request: GET https://22bet.com/LiveFeed/Get1x2_VZip?sports=4&count=300&lng=en&mode=4&country=1&getEmpty=true "HTTP/1.1 200 OK"
--- api log ---
Nov 10 23:25:49 impressed-jade.ptr.network systemd[1]: Stopped zicer-api.service - Zicer API.
Nov 10 23:25:49 impressed-jade.ptr.network systemd[1]: zicer-api.service: Consumed 5.719s CPU time, 170.1M memory peak, 99.4M memory swap peak.
Nov 10 23:25:49 impressed-jade.ptr.network systemd[1]: Started zicer-api.service - Zicer API.
Nov 10 23:25:49 impressed-jade.ptr.network uvicorn[1546451]: INFO:     Uvicorn running on http://127.0.0.1:8790 (Press CTRL+C to quit)
Nov 10 23:25:49 impressed-jade.ptr.network uvicorn[1546451]: INFO:     Started parent process [1546451]
Nov 10 23:25:54 impressed-jade.ptr.network uvicorn[1546455]: INFO:     Started server process [1546455]
Nov 10 23:25:54 impressed-jade.ptr.network uvicorn[1546455]: INFO:     Waiting for application startup.
Nov 10 23:25:54 impressed-jade.ptr.network uvicorn[1546454]: INFO:     Started server process [1546454]
Nov 10 23:25:54 impressed-jade.ptr.network uvicorn[1546454]: INFO:     Waiting for application startup.
Nov 10 23:25:54 impressed-jade.ptr.network uvicorn[1546454]: INFO:     Application startup complete.
Nov 10 23:25:54 impressed-jade.ptr.network uvicorn[1546455]: INFO:     Application startup complete.
Nov 10 23:26:24 impressed-jade.ptr.network uvicorn[1546455]: INFO:     127.0.0.1:46614 - "GET /api/health HTTP/1.1" 200 OK
Nov 10 23:26:24 impressed-jade.ptr.network uvicorn[1546455]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 10 23:26:24 impressed-jade.ptr.network uvicorn[1546455]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 10 23:26:25 impressed-jade.ptr.network uvicorn[1546455]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
