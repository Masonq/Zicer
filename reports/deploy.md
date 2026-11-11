# Zicer deploy 2026-11-11 19:58 UTC

Итог: ЕСТЬ ОШИБКИ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: cecefc8 deploy report 2026-11-11_1957

```
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
домен: zicer.89-208-113-147.sslip.io (winly.rs → 89.208.113.147)

=== nginx ===
2026/11/11 22:58:06 [warn] 3360253#3360253: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/11 22:58:06 [warn] 3360253#3360253: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/11 22:58:06 [warn] 3360253#3360253: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/11 22:58:06 [warn] 3360253#3360253: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/11 22:58:06 [warn] 3360253#3360253: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/11 22:58:06 [warn] 3360253#3360253: conflicting server name "zicer.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/11 22:58:06 [warn] 3360253#3360253: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
OK: nginx перезагружен

=== HTTPS ===
OK: сертификат уже есть

=== Проверки ===
api local: {"ok":true,"app":"zicer"}
api https: <html>
<head><title>301 Moved Permanently</title></head>
<body>
<center><h1>301 Moved Permanently</h1></center>
<hr><center>nginx/1.24.0 (Ubuntu)</center>
</body>
</html>
FAIL: api https отвечает не Zicer
https / -> 301
FAIL: https / 301
https /api/health -> 301
FAIL: https /api/health 301
https /api/home -> 301
FAIL: https /api/home 301
https /mecevi -> 301
FAIL: https /mecevi 301
index cache: 
matches: {'esports': 58, 'hockey': 52, 'volleyball': 39, 'tabletennis': 186, 'basketball': 709, 'handball': 45, 'waterpolo': 7, 'tennis': 25, 'football': 1100}
tg_poll | 2026-11-11 19:57:35.409047 | no token | 
football_live | 2026-11-11 19:57:56.540335 | live upserted 0 | 
live | 2026-11-11 19:57:56.909527 | live updated 31 | 
basketball | 2026-11-11 19:58:02.501702 | basketball upserted 411 | 
basketball_week | 2026-11-11 19:58:03.727353 | nba week upserted 48 | 
other_sports | 2026-11-11 19:58:04.298376 | other sports new 0 | 
backfill | 2026-11-11 19:58:04.305793 | already | 
maxbet_results | 2026-11-11 19:54:05.709603 | maxbet results 10 | 
other_results | 2026-11-11 19:54:17.728630 | other results 50 | 
logos | 2026-11-11 19:58:04.453678 | logos: nothing to do | 
highlights | 2026-11-11 19:58:05.195668 | highlights +0 | 
x22_line | 2026-11-11 19:58:12.027935 | x22 line new 0, fetched {'futsal': '0'} | 
odds | 2026-11-11 19:58:14.044203 | odds matched 66 | 
settle | 2026-11-11 19:58:14.106365 | settled 0 | 
xfeed | 2026-11-11 19:58:27.744517 | xfeed empty (22bet.ug http 308) | 
social | 2026-11-11 19:54:58.056614 | social nothing due (test) | 
pandascore | 2026-11-11 16:06:16.134963 | pandascore new 0, updated 58, finished 0 | "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/engine/base.py", line 1986, in _exec_single_context
trends | 2026-11-10 23:36:09.974574 | trends 11 | 
analysis | 2026-11-10 23:36:10.199323 | analysis 27 | 
names | 2026-11-11 19:56:04.201560 | names 0 | 
tg_reminders | 2026-11-11 19:56:04.756067 | no token | 
finish_stale | 2026-11-11 19:56:38.853344 | finished 0 | 
football | 2026-11-11 19:58:00.357779 | football upserted 96 |  "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
--- worker log ---
Nov 11 22:58:03 impressed-jade.ptr.network python[3359846]: 2026-11-11 22:58:03,673 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261118 "HTTP/1.1 200 OK"
Nov 11 22:58:03 impressed-jade.ptr.network python[3359846]: 2026-11-11 22:58:03,840 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/H/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 22:58:03 impressed-jade.ptr.network python[3359846]: 2026-11-11 22:58:03,952 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/T/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 22:58:04 impressed-jade.ptr.network python[3359846]: 2026-11-11 22:58:04,015 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/V/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 22:58:04 impressed-jade.ptr.network python[3359846]: 2026-11-11 22:58:04,090 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/W/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 22:58:04 impressed-jade.ptr.network python[3359846]: 2026-11-11 22:58:04,167 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/HB/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 22:58:04 impressed-jade.ptr.network python[3359846]: 2026-11-11 22:58:04,240 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/TT/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 22:58:04 impressed-jade.ptr.network python[3359846]: 2026-11-11 22:58:04,651 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpFqOv5z4WKps64GlQS4ytw "HTTP/1.1 200 OK"
Nov 11 22:58:04 impressed-jade.ptr.network python[3359846]: 2026-11-11 22:58:04,665 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC-2Cj6KlR9rCfR28zNLmOTA "HTTP/1.1 200 OK"
Nov 11 22:58:04 impressed-jade.ptr.network python[3359846]: 2026-11-11 22:58:04,680 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCWJ2lWNubArHWmf3FIHbfcQ "HTTP/1.1 200 OK"
Nov 11 22:58:04 impressed-jade.ptr.network python[3359846]: 2026-11-11 22:58:04,699 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCqFMzb-4AUf6WAIbl132QKA "HTTP/1.1 200 OK"
Nov 11 22:58:04 impressed-jade.ptr.network python[3359846]: 2026-11-11 22:58:04,711 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCwJ3S2Ix7aI1BhHexDJlmEg "HTTP/1.1 200 OK"
Nov 11 22:58:04 impressed-jade.ptr.network python[3359846]: 2026-11-11 22:58:04,728 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCTv-XvfzLX3i4IGWAm4sbmA "HTTP/1.1 200 OK"
Nov 11 22:58:04 impressed-jade.ptr.network python[3359846]: 2026-11-11 22:58:04,938 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCxfPjORdISQSn2fV8tcVmgA "HTTP/1.1 200 OK"
Nov 11 22:58:04 impressed-jade.ptr.network python[3359846]: 2026-11-11 22:58:04,952 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCQsH5XtIc9hONE1BQjucM0g "HTTP/1.1 200 OK"
Nov 11 22:58:05 impressed-jade.ptr.network python[3359846]: 2026-11-11 22:58:05,034 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC6UL29enLNe4mqwTfAyeNuw "HTTP/1.1 200 OK"
Nov 11 22:58:05 impressed-jade.ptr.network python[3359846]: 2026-11-11 22:58:05,061 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpryVRk_VDudG8SHXgWcG0w "HTTP/1.1 200 OK"
Nov 11 22:58:05 impressed-jade.ptr.network python[3359846]: 2026-11-11 22:58:05,153 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCyGa1YEx9ST66rYrJTGIKOw "HTTP/1.1 200 OK"
Nov 11 22:58:05 impressed-jade.ptr.network python[3359846]: 2026-11-11 22:58:05,326 INFO HTTP Request: GET https://22bet.com/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 22:58:05 impressed-jade.ptr.network python[3359846]: 2026-11-11 22:58:05,561 INFO HTTP Request: GET https://22bet.co.ke/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 22:58:05 impressed-jade.ptr.network python[3359846]: 2026-11-11 22:58:05,668 INFO HTTP Request: GET https://22bet.ng/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 22:58:12 impressed-jade.ptr.network python[3359846]: 2026-11-11 22:58:12,019 INFO HTTP Request: GET https://22bet.ug/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 22:58:12 impressed-jade.ptr.network python[3359846]: 2026-11-11 22:58:12,474 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 22:58:12 impressed-jade.ptr.network python[3359846]: 2026-11-11 22:58:12,901 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 22:58:13 impressed-jade.ptr.network python[3359846]: 2026-11-11 22:58:13,916 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
--- api log ---
Nov 11 22:57:57 impressed-jade.ptr.network uvicorn[3357932]: INFO:     Waiting for child process [3357936]
Nov 11 22:57:57 impressed-jade.ptr.network uvicorn[3357932]: INFO:     Stopping parent process [3357932]
Nov 11 22:57:57 impressed-jade.ptr.network systemd[1]: zicer-api.service: Deactivated successfully.
Nov 11 22:57:57 impressed-jade.ptr.network systemd[1]: Stopped zicer-api.service - Zicer API.
Nov 11 22:57:57 impressed-jade.ptr.network systemd[1]: zicer-api.service: Consumed 2.364s CPU time, 163.1M memory peak, 0B memory swap peak.
Nov 11 22:57:57 impressed-jade.ptr.network systemd[1]: Started zicer-api.service - Zicer API.
Nov 11 22:57:57 impressed-jade.ptr.network uvicorn[3359886]: INFO:     Uvicorn running on http://127.0.0.1:8790 (Press CTRL+C to quit)
Nov 11 22:57:57 impressed-jade.ptr.network uvicorn[3359886]: INFO:     Started parent process [3359886]
Nov 11 22:58:00 impressed-jade.ptr.network uvicorn[3359890]: INFO:     Started server process [3359890]
Nov 11 22:58:00 impressed-jade.ptr.network uvicorn[3359890]: INFO:     Waiting for application startup.
Nov 11 22:58:00 impressed-jade.ptr.network uvicorn[3359891]: INFO:     Started server process [3359891]
Nov 11 22:58:00 impressed-jade.ptr.network uvicorn[3359891]: INFO:     Waiting for application startup.
Nov 11 22:58:01 impressed-jade.ptr.network uvicorn[3359890]: INFO:     Application startup complete.
Nov 11 22:58:01 impressed-jade.ptr.network uvicorn[3359891]: INFO:     Application startup complete.
Nov 11 22:58:31 impressed-jade.ptr.network uvicorn[3359891]: INFO:     127.0.0.1:53118 - "GET /api/health HTTP/1.1" 200 OK
```
