# Zicer deploy 2026-11-11 19:51 UTC

Итог: ЕСТЬ ОШИБКИ

Сайт: https://winly.rs

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: a500645 deploy report 2026-11-11_1950

```
OK: zicer-api работает
OK: zicer-worker работает

=== Автообновление ===
OK: таймер автообновления включён

=== Админ ===
OK: админ есть
домен: winly.rs (winly.rs → 185.119.88.99)

=== nginx ===
2026/11/11 22:50:48 [warn] 3349746#3349746: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/11 22:50:48 [warn] 3349746#3349746: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/11 22:50:48 [warn] 3349746#3349746: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/11 22:50:48 [warn] 3349746#3349746: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/11 22:50:48 [warn] 3349746#3349746: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/11 22:50:48 [warn] 3349746#3349746: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
OK: nginx перезагружен

=== HTTPS ===
Saving debug log to /var/log/letsencrypt/letsencrypt.log
Requesting a certificate for winly.rs

Successfully received certificate.
Certificate is saved at: /etc/letsencrypt/live/winly.rs/fullchain.pem
Key is saved at:         /etc/letsencrypt/live/winly.rs/privkey.pem
This certificate expires on 2027-02-09.
These files will be updated when the certificate renews.
Certbot has set up a scheduled task to automatically renew this certificate in the background.

Deploying certificate
Successfully deployed certificate for winly.rs to /etc/nginx/sites-enabled/zicer.conf
Congratulations! You have successfully enabled HTTPS on https://winly.rs

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
If you like Certbot, please consider supporting our work by:
 * Donating to ISRG / Let's Encrypt:   https://letsencrypt.org/donate
 * Donating to EFF:                    https://eff.org/donate-le
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
OK: сертификат выпущен

=== Проверки ===
api local: {"ok":true,"app":"zicer"}
api https: {"ok":true,"app":"zicer"}
https / -> 000
FAIL: https / 000
https /api/health -> 000
FAIL: https /api/health 000
https /api/home -> 200
https /mecevi -> 200
index cache: cache-control: no-cache
cache-control: no-cache, no-store, must-revalidate
matches: {'esports': 58, 'hockey': 52, 'volleyball': 39, 'tabletennis': 186, 'basketball': 709, 'handball': 45, 'waterpolo': 7, 'tennis': 25, 'football': 1100}
maxbet_results | 2026-11-11 19:45:08.778078 | maxbet results 11 | 
other_results | 2026-11-11 19:45:22.316157 | other results 50 | 
finish_stale | 2026-11-11 19:48:56.449366 | finished 0 | 
social | 2026-11-11 19:46:25.538006 | social nothing due (test) | 
football_live | 2026-11-11 19:50:39.492341 | live upserted 0 | 
basketball | 2026-11-11 19:50:44.360384 | basketball upserted 412 | 
basketball_week | 2026-11-11 19:50:45.531069 | nba week upserted 48 | 
other_sports | 2026-11-11 19:50:46.520303 | other sports new 0 | 
backfill | 2026-11-11 19:50:46.528485 | already | 
logos | 2026-11-11 19:50:46.605317 | logos: nothing to do | 
highlights | 2026-11-11 19:50:46.909687 | highlights +0 | 
x22_line | 2026-11-11 19:50:53.673910 | x22 line new 0, fetched {'futsal': '0'} | 
odds | 2026-11-11 19:50:55.054257 | odds matched 66 | 
settle | 2026-11-11 19:50:55.082696 | settled 0 | 
live | 2026-11-11 19:51:19.302343 | live updated 32 | 
pandascore | 2026-11-11 16:06:16.134963 | pandascore new 0, updated 58, finished 0 | "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/engine/base.py", line 1986, in _exec_single_context
trends | 2026-11-10 23:36:09.974574 | trends 11 | 
xfeed | 2026-11-11 19:51:22.928663 | xfeed empty (22bet.ug http 308) | 
tg_poll | 2026-11-11 19:51:22.941892 | no token | 
analysis | 2026-11-10 23:36:10.199323 | analysis 27 | 
names | 2026-11-11 19:44:53.021898 | names 0 | 
tg_reminders | 2026-11-11 19:44:53.580613 | no token | 
football | 2026-11-11 19:50:42.785503 | football upserted 96 |  "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
--- worker log ---
Nov 11 22:50:45 impressed-jade.ptr.network python[3349451]: 2026-11-11 22:50:45,673 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/H/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 22:50:45 impressed-jade.ptr.network python[3349451]: 2026-11-11 22:50:45,884 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/T/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 22:50:45 impressed-jade.ptr.network python[3349451]: 2026-11-11 22:50:45,980 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/V/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 22:50:46 impressed-jade.ptr.network python[3349451]: 2026-11-11 22:50:46,055 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/W/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 22:50:46 impressed-jade.ptr.network python[3349451]: 2026-11-11 22:50:46,150 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/HB/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 22:50:46 impressed-jade.ptr.network python[3349451]: 2026-11-11 22:50:46,461 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/TT/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 22:50:46 impressed-jade.ptr.network python[3349451]: 2026-11-11 22:50:46,699 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpFqOv5z4WKps64GlQS4ytw "HTTP/1.1 200 OK"
Nov 11 22:50:46 impressed-jade.ptr.network python[3349451]: 2026-11-11 22:50:46,754 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC-2Cj6KlR9rCfR28zNLmOTA "HTTP/1.1 200 OK"
Nov 11 22:50:46 impressed-jade.ptr.network python[3349451]: 2026-11-11 22:50:46,765 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCWJ2lWNubArHWmf3FIHbfcQ "HTTP/1.1 200 OK"
Nov 11 22:50:46 impressed-jade.ptr.network python[3349451]: 2026-11-11 22:50:46,780 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCqFMzb-4AUf6WAIbl132QKA "HTTP/1.1 200 OK"
Nov 11 22:50:46 impressed-jade.ptr.network python[3349451]: 2026-11-11 22:50:46,793 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCwJ3S2Ix7aI1BhHexDJlmEg "HTTP/1.1 200 OK"
Nov 11 22:50:46 impressed-jade.ptr.network python[3349451]: 2026-11-11 22:50:46,805 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCTv-XvfzLX3i4IGWAm4sbmA "HTTP/1.1 200 OK"
Nov 11 22:50:46 impressed-jade.ptr.network python[3349451]: 2026-11-11 22:50:46,822 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCxfPjORdISQSn2fV8tcVmgA "HTTP/1.1 200 OK"
Nov 11 22:50:46 impressed-jade.ptr.network python[3349451]: 2026-11-11 22:50:46,832 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCQsH5XtIc9hONE1BQjucM0g "HTTP/1.1 200 OK"
Nov 11 22:50:46 impressed-jade.ptr.network python[3349451]: 2026-11-11 22:50:46,851 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC6UL29enLNe4mqwTfAyeNuw "HTTP/1.1 200 OK"
Nov 11 22:50:46 impressed-jade.ptr.network python[3349451]: 2026-11-11 22:50:46,870 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpryVRk_VDudG8SHXgWcG0w "HTTP/1.1 200 OK"
Nov 11 22:50:46 impressed-jade.ptr.network python[3349451]: 2026-11-11 22:50:46,892 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCyGa1YEx9ST66rYrJTGIKOw "HTTP/1.1 200 OK"
Nov 11 22:50:47 impressed-jade.ptr.network python[3349451]: 2026-11-11 22:50:47,029 INFO HTTP Request: GET https://22bet.com/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 22:50:47 impressed-jade.ptr.network python[3349451]: 2026-11-11 22:50:47,291 INFO HTTP Request: GET https://22bet.co.ke/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 22:50:47 impressed-jade.ptr.network python[3349451]: 2026-11-11 22:50:47,369 INFO HTTP Request: GET https://22bet.ng/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 22:50:53 impressed-jade.ptr.network python[3349451]: 2026-11-11 22:50:53,671 INFO HTTP Request: GET https://22bet.ug/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 22:50:54 impressed-jade.ptr.network python[3349451]: 2026-11-11 22:50:54,087 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 22:50:54 impressed-jade.ptr.network python[3349451]: 2026-11-11 22:50:54,506 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 22:50:54 impressed-jade.ptr.network python[3349451]: 2026-11-11 22:50:54,982 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 22:51:19 impressed-jade.ptr.network python[3349451]: 2026-11-11 22:51:19,099 INFO HTTP Request: GET https://www.maxbet.rs/live/init/sr "HTTP/1.1 200 OK"
--- api log ---
Nov 11 22:50:40 impressed-jade.ptr.network uvicorn[3349454]: INFO:     Uvicorn running on http://127.0.0.1:8790 (Press CTRL+C to quit)
Nov 11 22:50:40 impressed-jade.ptr.network uvicorn[3349454]: INFO:     Started parent process [3349454]
Nov 11 22:50:42 impressed-jade.ptr.network uvicorn[3349476]: INFO:     Started server process [3349476]
Nov 11 22:50:42 impressed-jade.ptr.network uvicorn[3349476]: INFO:     Waiting for application startup.
Nov 11 22:50:42 impressed-jade.ptr.network uvicorn[3349476]: INFO:     Application startup complete.
Nov 11 22:50:42 impressed-jade.ptr.network uvicorn[3349477]: INFO:     Started server process [3349477]
Nov 11 22:50:42 impressed-jade.ptr.network uvicorn[3349477]: INFO:     Waiting for application startup.
Nov 11 22:50:42 impressed-jade.ptr.network uvicorn[3349477]: INFO:     Application startup complete.
Nov 11 22:51:00 impressed-jade.ptr.network uvicorn[3349477]: INFO:     127.0.0.1:51636 - "GET /robots.txt HTTP/1.0" 200 OK
Nov 11 22:51:06 impressed-jade.ptr.network uvicorn[3349477]: INFO:     81.171.74.60:0 - "GET /api/.env HTTP/1.0" 404 Not Found
Nov 11 22:51:14 impressed-jade.ptr.network uvicorn[3349477]: INFO:     5.78.29.49:0 - "GET /api/sports?tz=0 HTTP/1.0" 200 OK
Nov 11 22:51:15 impressed-jade.ptr.network uvicorn[3349477]: INFO:     5.78.29.49:0 - "GET /api/home?tz=0&sport=all HTTP/1.0" 200 OK
Nov 11 22:51:21 impressed-jade.ptr.network uvicorn[3349476]: INFO:     127.0.0.1:57224 - "GET /api/health HTTP/1.1" 200 OK
Nov 11 22:51:22 impressed-jade.ptr.network uvicorn[3349477]: INFO:     89.208.113.147:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 22:51:22 impressed-jade.ptr.network uvicorn[3349477]: INFO:     89.208.113.147:0 - "GET /api/home HTTP/1.0" 200 OK
```
