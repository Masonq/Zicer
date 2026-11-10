# Zicer deploy 2026-11-10 17:55 UTC

Итог: УСПЕХ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: 5b5ccb7 Ложный лайв у хоккея/тенниса исправлен; медленные задачи воркера в отдельных потоках, лайв больше не зависает; переводчик пропускает недоступный сервис

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
2026/11/10 20:54:41 [warn] 1350336#1350336: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/10 20:54:41 [warn] 1350336#1350336: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/10 20:54:41 [warn] 1350336#1350336: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/10 20:54:41 [warn] 1350336#1350336: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/10 20:54:41 [warn] 1350336#1350336: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/10 20:54:41 [warn] 1350336#1350336: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
football | 2026-11-10 17:54:35.976566 | football upserted 93 | 
basketball | 2026-11-10 17:54:37.872902 | basketball upserted 424 | 
basketball_week | 2026-11-10 17:54:38.497548 | nba week upserted 40 | 
other_sports | 2026-11-10 17:54:38.850488 | other sports new 0 | 
backfill | 2026-11-10 17:54:38.856243 | already | 
odds | 2026-11-10 17:54:39.652965 | odds matched 58 | 
settle | 2026-11-10 17:54:39.678798 | settled 0 | 
trends | 2026-11-10 17:54:39.988943 | trends 12 | 
analysis | 2026-11-10 17:54:40.092702 | analysis 18 | 
live | 2026-11-10 17:55:00.424159 | live updated 5 | 
tg_poll | 2026-11-10 17:55:00.428039 | no token | 
names | 2026-11-10 17:53:53.201863 | names 134 | 
other_results | 2026-11-10 17:53:55.240896 | other results 1 | 
tg_reminders | 2026-11-10 17:53:56.460970 | no token | 
football_live | 2026-11-10 17:54:01.564078 | live upserted 6 | 
maxbet_results | 2026-11-10 17:54:05.681169 | maxbet results 1 | 
--- worker log ---
Nov 10 20:54:34 impressed-jade.ptr.network python[1350023]: 2026-11-10 20:54:34,344 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261112 "HTTP/1.1 200 OK"
Nov 10 20:54:34 impressed-jade.ptr.network python[1350023]: 2026-11-10 20:54:34,498 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261113 "HTTP/1.1 200 OK"
Nov 10 20:54:35 impressed-jade.ptr.network python[1350023]: 2026-11-10 20:54:35,374 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261114 "HTTP/1.1 200 OK"
Nov 10 20:54:35 impressed-jade.ptr.network python[1350023]: 2026-11-10 20:54:35,660 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261115 "HTTP/1.1 200 OK"
Nov 10 20:54:35 impressed-jade.ptr.network python[1350023]: 2026-11-10 20:54:35,759 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261116 "HTTP/1.1 200 OK"
Nov 10 20:54:35 impressed-jade.ptr.network python[1350023]: 2026-11-10 20:54:35,902 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261117 "HTTP/1.1 200 OK"
Nov 10 20:54:36 impressed-jade.ptr.network python[1350023]: 2026-11-10 20:54:36,105 INFO HTTP Request: GET https://api-live.euroleague.net/v2/competitions/E/seasons/E2026/games "HTTP/1.1 200 OK"
Nov 10 20:54:37 impressed-jade.ptr.network python[1350023]: 2026-11-10 20:54:37,126 INFO HTTP Request: GET https://api-live.euroleague.net/v2/competitions/U/seasons/U2026/games "HTTP/1.1 200 OK"
Nov 10 20:54:37 impressed-jade.ptr.network python[1350023]: 2026-11-10 20:54:37,748 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261109 "HTTP/1.1 200 OK"
Nov 10 20:54:37 impressed-jade.ptr.network python[1350023]: 2026-11-10 20:54:37,795 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261110 "HTTP/1.1 200 OK"
Nov 10 20:54:37 impressed-jade.ptr.network python[1350023]: 2026-11-10 20:54:37,844 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261111 "HTTP/1.1 200 OK"
Nov 10 20:54:37 impressed-jade.ptr.network python[1350023]: 2026-11-10 20:54:37,989 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261112 "HTTP/1.1 200 OK"
Nov 10 20:54:38 impressed-jade.ptr.network python[1350023]: 2026-11-10 20:54:38,041 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261113 "HTTP/1.1 200 OK"
Nov 10 20:54:38 impressed-jade.ptr.network python[1350023]: 2026-11-10 20:54:38,196 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261114 "HTTP/1.1 200 OK"
Nov 10 20:54:38 impressed-jade.ptr.network python[1350023]: 2026-11-10 20:54:38,248 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261115 "HTTP/1.1 200 OK"
Nov 10 20:54:38 impressed-jade.ptr.network python[1350023]: 2026-11-10 20:54:38,419 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261116 "HTTP/1.1 200 OK"
Nov 10 20:54:38 impressed-jade.ptr.network python[1350023]: 2026-11-10 20:54:38,480 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261117 "HTTP/1.1 200 OK"
Nov 10 20:54:38 impressed-jade.ptr.network python[1350023]: 2026-11-10 20:54:38,614 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/H/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 20:54:38 impressed-jade.ptr.network python[1350023]: 2026-11-10 20:54:38,699 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/T/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 20:54:38 impressed-jade.ptr.network python[1350023]: 2026-11-10 20:54:38,764 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/V/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 20:54:38 impressed-jade.ptr.network python[1350023]: 2026-11-10 20:54:38,839 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/W/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 20:54:38 impressed-jade.ptr.network python[1350023]: 2026-11-10 20:54:38,992 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 20:54:39 impressed-jade.ptr.network python[1350023]: 2026-11-10 20:54:39,173 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 20:54:39 impressed-jade.ptr.network python[1350023]: 2026-11-10 20:54:39,584 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 10 20:55:00 impressed-jade.ptr.network python[1350023]: 2026-11-10 20:55:00,261 INFO HTTP Request: GET https://www.maxbet.rs/live/init/sr "HTTP/1.1 200 OK"
--- api log ---
Nov 10 20:54:33 impressed-jade.ptr.network systemd[1]: Stopped zicer-api.service - Zicer API.
Nov 10 20:54:33 impressed-jade.ptr.network systemd[1]: zicer-api.service: Consumed 7.663s CPU time, 186.1M memory peak, 6.1M memory swap peak.
Nov 10 20:54:33 impressed-jade.ptr.network systemd[1]: Started zicer-api.service - Zicer API.
Nov 10 20:54:33 impressed-jade.ptr.network uvicorn[1350025]: INFO:     Uvicorn running on http://127.0.0.1:8790 (Press CTRL+C to quit)
Nov 10 20:54:33 impressed-jade.ptr.network uvicorn[1350025]: INFO:     Started parent process [1350025]
Nov 10 20:54:34 impressed-jade.ptr.network uvicorn[1350029]: INFO:     Started server process [1350029]
Nov 10 20:54:34 impressed-jade.ptr.network uvicorn[1350029]: INFO:     Waiting for application startup.
Nov 10 20:54:35 impressed-jade.ptr.network uvicorn[1350029]: INFO:     Application startup complete.
Nov 10 20:54:35 impressed-jade.ptr.network uvicorn[1350028]: INFO:     Started server process [1350028]
Nov 10 20:54:35 impressed-jade.ptr.network uvicorn[1350028]: INFO:     Waiting for application startup.
Nov 10 20:54:35 impressed-jade.ptr.network uvicorn[1350028]: INFO:     Application startup complete.
Nov 10 20:55:05 impressed-jade.ptr.network uvicorn[1350028]: INFO:     127.0.0.1:38278 - "GET /api/health HTTP/1.1" 200 OK
Nov 10 20:55:05 impressed-jade.ptr.network uvicorn[1350028]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 10 20:55:06 impressed-jade.ptr.network uvicorn[1350028]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 10 20:55:06 impressed-jade.ptr.network uvicorn[1350028]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
