# Zicer deploy 2026-11-11 19:57 UTC

Итог: ЕСТЬ ОШИБКИ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: 9550e7e Почта через Brevo: 6-значный код подтверждения после регистрации (без ссылок и отслеживания), прогнозы и тикеты только с подтверждённой почтой, «Забыли пароль?» с кодом, полоска «Подтверди почту», письма на языке пользователя в стиле Winly, настройки ключа и тестовое письмо в админке; старые аккаунты считаются подтверждёнными

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
домен: zicer.89-208-113-147.sslip.io (winly.rs → 185.119.88.99)

=== nginx ===
2026/11/11 22:57:01 [warn] 3358269#3358269: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/11 22:57:01 [warn] 3358269#3358269: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/11 22:57:01 [warn] 3358269#3358269: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/11 22:57:01 [warn] 3358269#3358269: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/11 22:57:01 [warn] 3358269#3358269: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/11 22:57:01 [warn] 3358269#3358269: conflicting server name "zicer.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/11 22:57:01 [warn] 3358269#3358269: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
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
live | 2026-11-11 19:56:44.220411 | live updated 31 | 
basketball | 2026-11-11 19:56:57.591604 | basketball upserted 411 | 
basketball_week | 2026-11-11 19:56:58.608216 | nba week upserted 48 | 
other_sports | 2026-11-11 19:56:59.239911 | other sports new 0 | 
backfill | 2026-11-11 19:56:59.245080 | already | 
logos | 2026-11-11 19:56:59.332852 | logos: nothing to do | 
highlights | 2026-11-11 19:56:59.958375 | highlights +0 | 
x22_line | 2026-11-11 19:57:06.701116 | x22 line new 0, fetched {'futsal': '0'} | 
odds | 2026-11-11 19:57:07.780349 | odds matched 66 | 
settle | 2026-11-11 19:57:07.807053 | settled 0 | 
xfeed | 2026-11-11 19:57:21.434843 | xfeed empty (22bet.ug http 308) | 
maxbet_results | 2026-11-11 19:54:05.709603 | maxbet results 10 | 
other_results | 2026-11-11 19:54:17.728630 | other results 50 | 
social | 2026-11-11 19:54:58.056614 | social nothing due (test) | 
pandascore | 2026-11-11 16:06:16.134963 | pandascore new 0, updated 58, finished 0 | "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/engine/base.py", line 1986, in _exec_single_context
trends | 2026-11-10 23:36:09.974574 | trends 11 | 
analysis | 2026-11-10 23:36:10.199323 | analysis 27 | 
names | 2026-11-11 19:56:04.201560 | names 0 | 
tg_reminders | 2026-11-11 19:56:04.756067 | no token | 
football_live | 2026-11-11 19:56:09.826311 | live upserted 0 | 
finish_stale | 2026-11-11 19:56:38.853344 | finished 0 | 
tg_poll | 2026-11-11 19:56:38.863376 | no token | 
football | 2026-11-11 19:56:55.966411 | football upserted 96 |  "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
--- worker log ---
Nov 11 22:56:58 impressed-jade.ptr.network python[3357930]: 2026-11-11 22:56:58,566 INFO HTTP Request: GET https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20261118 "HTTP/1.1 200 OK"
Nov 11 22:56:58 impressed-jade.ptr.network python[3357930]: 2026-11-11 22:56:58,801 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/H/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 22:56:58 impressed-jade.ptr.network python[3357930]: 2026-11-11 22:56:58,892 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/T/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 22:56:58 impressed-jade.ptr.network python[3357930]: 2026-11-11 22:56:58,955 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/V/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 22:56:59 impressed-jade.ptr.network python[3357930]: 2026-11-11 22:56:59,016 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/W/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 22:56:59 impressed-jade.ptr.network python[3357930]: 2026-11-11 22:56:59,107 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/HB/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 22:56:59 impressed-jade.ptr.network python[3357930]: 2026-11-11 22:56:59,174 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/TT/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 22:56:59 impressed-jade.ptr.network python[3357930]: 2026-11-11 22:56:59,460 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpFqOv5z4WKps64GlQS4ytw "HTTP/1.1 200 OK"
Nov 11 22:56:59 impressed-jade.ptr.network python[3357930]: 2026-11-11 22:56:59,559 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC-2Cj6KlR9rCfR28zNLmOTA "HTTP/1.1 200 OK"
Nov 11 22:56:59 impressed-jade.ptr.network python[3357930]: 2026-11-11 22:56:59,568 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCWJ2lWNubArHWmf3FIHbfcQ "HTTP/1.1 200 OK"
Nov 11 22:56:59 impressed-jade.ptr.network python[3357930]: 2026-11-11 22:56:59,587 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCqFMzb-4AUf6WAIbl132QKA "HTTP/1.1 200 OK"
Nov 11 22:56:59 impressed-jade.ptr.network python[3357930]: 2026-11-11 22:56:59,641 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCwJ3S2Ix7aI1BhHexDJlmEg "HTTP/1.1 200 OK"
Nov 11 22:56:59 impressed-jade.ptr.network python[3357930]: 2026-11-11 22:56:59,654 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCTv-XvfzLX3i4IGWAm4sbmA "HTTP/1.1 200 OK"
Nov 11 22:56:59 impressed-jade.ptr.network python[3357930]: 2026-11-11 22:56:59,714 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCxfPjORdISQSn2fV8tcVmgA "HTTP/1.1 200 OK"
Nov 11 22:56:59 impressed-jade.ptr.network python[3357930]: 2026-11-11 22:56:59,737 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCQsH5XtIc9hONE1BQjucM0g "HTTP/1.1 200 OK"
Nov 11 22:56:59 impressed-jade.ptr.network python[3357930]: 2026-11-11 22:56:59,810 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC6UL29enLNe4mqwTfAyeNuw "HTTP/1.1 200 OK"
Nov 11 22:56:59 impressed-jade.ptr.network python[3357930]: 2026-11-11 22:56:59,839 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpryVRk_VDudG8SHXgWcG0w "HTTP/1.1 200 OK"
Nov 11 22:56:59 impressed-jade.ptr.network python[3357930]: 2026-11-11 22:56:59,930 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCyGa1YEx9ST66rYrJTGIKOw "HTTP/1.1 200 OK"
Nov 11 22:57:00 impressed-jade.ptr.network python[3357930]: 2026-11-11 22:57:00,057 INFO HTTP Request: GET https://22bet.com/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 22:57:00 impressed-jade.ptr.network python[3357930]: 2026-11-11 22:57:00,303 INFO HTTP Request: GET https://22bet.co.ke/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 22:57:00 impressed-jade.ptr.network python[3357930]: 2026-11-11 22:57:00,393 INFO HTTP Request: GET https://22bet.ng/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 22:57:06 impressed-jade.ptr.network python[3357930]: 2026-11-11 22:57:06,698 INFO HTTP Request: GET https://22bet.ug/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 22:57:06 impressed-jade.ptr.network python[3357930]: 2026-11-11 22:57:06,856 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 22:57:07 impressed-jade.ptr.network python[3357930]: 2026-11-11 22:57:07,058 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 22:57:07 impressed-jade.ptr.network python[3357930]: 2026-11-11 22:57:07,662 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
--- api log ---
Nov 11 22:56:53 impressed-jade.ptr.network uvicorn[3349454]: INFO:     Waiting for child process [3349477]
Nov 11 22:56:53 impressed-jade.ptr.network uvicorn[3349454]: INFO:     Stopping parent process [3349454]
Nov 11 22:56:53 impressed-jade.ptr.network systemd[1]: zicer-api.service: Deactivated successfully.
Nov 11 22:56:53 impressed-jade.ptr.network systemd[1]: Stopped zicer-api.service - Zicer API.
Nov 11 22:56:53 impressed-jade.ptr.network systemd[1]: zicer-api.service: Consumed 5.592s CPU time, 196.6M memory peak, 0B memory swap peak.
Nov 11 22:56:53 impressed-jade.ptr.network systemd[1]: Started zicer-api.service - Zicer API.
Nov 11 22:56:53 impressed-jade.ptr.network uvicorn[3357932]: INFO:     Uvicorn running on http://127.0.0.1:8790 (Press CTRL+C to quit)
Nov 11 22:56:53 impressed-jade.ptr.network uvicorn[3357932]: INFO:     Started parent process [3357932]
Nov 11 22:56:55 impressed-jade.ptr.network uvicorn[3357936]: INFO:     Started server process [3357936]
Nov 11 22:56:55 impressed-jade.ptr.network uvicorn[3357936]: INFO:     Waiting for application startup.
Nov 11 22:56:55 impressed-jade.ptr.network uvicorn[3357935]: INFO:     Started server process [3357935]
Nov 11 22:56:55 impressed-jade.ptr.network uvicorn[3357935]: INFO:     Waiting for application startup.
Nov 11 22:56:55 impressed-jade.ptr.network uvicorn[3357935]: INFO:     Application startup complete.
Nov 11 22:56:55 impressed-jade.ptr.network uvicorn[3357936]: INFO:     Application startup complete.
Nov 11 22:57:26 impressed-jade.ptr.network uvicorn[3357936]: INFO:     127.0.0.1:49438 - "GET /api/health HTTP/1.1" 200 OK
```
