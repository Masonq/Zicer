# Zicer deploy 2026-11-11 20:07 UTC

Итог: УСПЕХ

Сайт: https://winly.rs

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: d686758 HTTPS для www.winly.rs: сертификат расширяется на www, оба имени в одном серверном блоке

```
OK: zicer-api работает
OK: zicer-worker работает

=== Автообновление ===
OK: таймер автообновления включён

=== Админ ===
OK: админ есть
домен: winly.rs (winly.rs по Google DNS → "data":"89.208.113.147", www: www.winly.rs)

=== nginx ===
2026/11/11 23:06:35 [warn] 3373178#3373178: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/11 23:06:35 [warn] 3373178#3373178: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/11 23:06:35 [warn] 3373178#3373178: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/11 23:06:35 [warn] 3373178#3373178: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/11 23:06:35 [warn] 3373178#3373178: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/11 23:06:35 [warn] 3373178#3373178: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
OK: nginx перезагружен

=== HTTPS ===
Saving debug log to /var/log/letsencrypt/letsencrypt.log
Renewing an existing certificate for winly.rs and www.winly.rs

Successfully received certificate.
Certificate is saved at: /etc/letsencrypt/live/winly.rs/fullchain.pem
Key is saved at:         /etc/letsencrypt/live/winly.rs/privkey.pem
This certificate expires on 2027-02-09.
These files will be updated when the certificate renews.
Certbot has set up a scheduled task to automatically renew this certificate in the background.

Deploying certificate
Successfully deployed certificate for winly.rs to /etc/nginx/sites-enabled/zicer.conf
Successfully deployed certificate for www.winly.rs to /etc/nginx/sites-enabled/zicer.conf
Your existing certificate has been successfully renewed, and the new certificate has been installed.

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
If you like Certbot, please consider supporting our work by:
 * Donating to ISRG / Let's Encrypt:   https://letsencrypt.org/donate
 * Donating to EFF:                    https://eff.org/donate-le
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
OK: сертификат расширен на www.winly.rs
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
matches: {'esports': 58, 'hockey': 52, 'volleyball': 39, 'tabletennis': 186, 'basketball': 709, 'handball': 45, 'waterpolo': 7, 'tennis': 25, 'football': 1100}
maxbet_results | 2026-11-11 20:05:42.319634 | maxbet results 10 | 
other_results | 2026-11-11 20:05:58.770931 | other results 51 | 
finish_stale | 2026-11-11 20:06:09.502044 | finished 0 | 
football_live | 2026-11-11 20:06:14.588905 | live upserted 0 | 
basketball | 2026-11-11 20:06:31.768059 | basketball upserted 411 | 
basketball_week | 2026-11-11 20:06:33.165054 | nba week upserted 48 | 
other_sports | 2026-11-11 20:06:33.871924 | other sports new 0 | 
backfill | 2026-11-11 20:06:33.876541 | already | 
logos | 2026-11-11 20:06:33.983528 | logos: nothing to do | 
highlights | 2026-11-11 20:06:35.162880 | highlights +0 | 
x22_line | 2026-11-11 20:06:41.903191 | x22 line new 0, fetched {'futsal': '0'} | 
odds | 2026-11-11 20:06:43.388493 | odds matched 66 | 
settle | 2026-11-11 20:06:43.462116 | settled 0 | 
live | 2026-11-11 20:07:07.573288 | live updated 28 | 
xfeed | 2026-11-11 20:07:11.217354 | xfeed empty (22bet.ug http 308) | 
tg_poll | 2026-11-11 20:07:11.221852 | no token | 
social | 2026-11-11 20:04:29.259480 | social nothing due (test) | 
pandascore | 2026-11-11 16:06:16.134963 | pandascore new 0, updated 58, finished 0 | "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/engine/base.py", line 1986, in _exec_single_context
trends | 2026-11-10 23:36:09.974574 | trends 11 | 
analysis | 2026-11-10 23:36:10.199323 | analysis 27 | 
names | 2026-11-11 19:56:04.201560 | names 0 | 
tg_reminders | 2026-11-11 19:56:04.756067 | no token | 
football | 2026-11-11 20:06:29.271331 | football upserted 96 |  "/opt/zicer/venv/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 515, in _execute_on_connection
--- worker log ---
Nov 11 23:06:33 impressed-jade.ptr.network python[3372830]: 2026-11-11 23:06:33,297 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/H/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 23:06:33 impressed-jade.ptr.network python[3372830]: 2026-11-11 23:06:33,424 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/T/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 23:06:33 impressed-jade.ptr.network python[3372830]: 2026-11-11 23:06:33,511 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/V/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 23:06:33 impressed-jade.ptr.network python[3372830]: 2026-11-11 23:06:33,611 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/W/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 23:06:33 impressed-jade.ptr.network python[3372830]: 2026-11-11 23:06:33,691 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/HB/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 23:06:33 impressed-jade.ptr.network python[3372830]: 2026-11-11 23:06:33,801 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/TT/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 23:06:34 impressed-jade.ptr.network python[3372830]: 2026-11-11 23:06:34,080 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpFqOv5z4WKps64GlQS4ytw "HTTP/1.1 200 OK"
Nov 11 23:06:34 impressed-jade.ptr.network python[3372830]: 2026-11-11 23:06:34,092 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC-2Cj6KlR9rCfR28zNLmOTA "HTTP/1.1 200 OK"
Nov 11 23:06:34 impressed-jade.ptr.network python[3372830]: 2026-11-11 23:06:34,105 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCWJ2lWNubArHWmf3FIHbfcQ "HTTP/1.1 200 OK"
Nov 11 23:06:34 impressed-jade.ptr.network python[3372830]: 2026-11-11 23:06:34,440 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCqFMzb-4AUf6WAIbl132QKA "HTTP/1.1 200 OK"
Nov 11 23:06:34 impressed-jade.ptr.network python[3372830]: 2026-11-11 23:06:34,456 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCwJ3S2Ix7aI1BhHexDJlmEg "HTTP/1.1 200 OK"
Nov 11 23:06:34 impressed-jade.ptr.network python[3372830]: 2026-11-11 23:06:34,475 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCTv-XvfzLX3i4IGWAm4sbmA "HTTP/1.1 200 OK"
Nov 11 23:06:34 impressed-jade.ptr.network python[3372830]: 2026-11-11 23:06:34,506 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCxfPjORdISQSn2fV8tcVmgA "HTTP/1.1 200 OK"
Nov 11 23:06:34 impressed-jade.ptr.network python[3372830]: 2026-11-11 23:06:34,525 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCQsH5XtIc9hONE1BQjucM0g "HTTP/1.1 200 OK"
Nov 11 23:06:34 impressed-jade.ptr.network python[3372830]: 2026-11-11 23:06:34,558 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UC6UL29enLNe4mqwTfAyeNuw "HTTP/1.1 200 OK"
Nov 11 23:06:35 impressed-jade.ptr.network python[3372830]: 2026-11-11 23:06:35,117 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCpryVRk_VDudG8SHXgWcG0w "HTTP/1.1 200 OK"
Nov 11 23:06:35 impressed-jade.ptr.network python[3372830]: 2026-11-11 23:06:35,141 INFO HTTP Request: GET https://www.youtube.com/feeds/videos.xml?channel_id=UCyGa1YEx9ST66rYrJTGIKOw "HTTP/1.1 200 OK"
Nov 11 23:06:35 impressed-jade.ptr.network python[3372830]: 2026-11-11 23:06:35,277 INFO HTTP Request: GET https://22bet.com/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 23:06:35 impressed-jade.ptr.network python[3372830]: 2026-11-11 23:06:35,525 INFO HTTP Request: GET https://22bet.co.ke/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 23:06:35 impressed-jade.ptr.network python[3372830]: 2026-11-11 23:06:35,605 INFO HTTP Request: GET https://22bet.ng/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 23:06:41 impressed-jade.ptr.network python[3372830]: 2026-11-11 23:06:41,900 INFO HTTP Request: GET https://22bet.ug/LineFeed/Get1x2_VZip?sports=14&count=200&lng=en&tf=2200000&mode=4&country=1&getEmpty=true&partner=151 "HTTP/1.1 308 Permanent Redirect"
Nov 11 23:06:42 impressed-jade.ptr.network python[3372830]: 2026-11-11 23:06:42,053 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/S/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 23:06:42 impressed-jade.ptr.network python[3372830]: 2026-11-11 23:06:42,506 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/ttg_lang?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 23:06:43 impressed-jade.ptr.network python[3372830]: 2026-11-11 23:06:43,248 INFO HTTP Request: GET https://www.maxbet.rs/restapi/offer/sr/sport/B/mob?annex=3&desktopVersion=2.36.3.9&locale=sr "HTTP/1.1 200 OK"
Nov 11 23:07:07 impressed-jade.ptr.network python[3372830]: 2026-11-11 23:07:07,273 INFO HTTP Request: GET https://www.maxbet.rs/live/init/sr "HTTP/1.1 200 OK"
--- api log ---
Nov 11 23:06:26 impressed-jade.ptr.network systemd[1]: Stopped zicer-api.service - Zicer API.
Nov 11 23:06:26 impressed-jade.ptr.network systemd[1]: zicer-api.service: Consumed 3.962s CPU time, 176.1M memory peak, 46.1M memory swap peak.
Nov 11 23:06:26 impressed-jade.ptr.network systemd[1]: Started zicer-api.service - Zicer API.
Nov 11 23:06:26 impressed-jade.ptr.network uvicorn[3372836]: INFO:     Uvicorn running on http://127.0.0.1:8790 (Press CTRL+C to quit)
Nov 11 23:06:26 impressed-jade.ptr.network uvicorn[3372836]: INFO:     Started parent process [3372836]
Nov 11 23:06:30 impressed-jade.ptr.network uvicorn[3372840]: INFO:     Started server process [3372840]
Nov 11 23:06:30 impressed-jade.ptr.network uvicorn[3372840]: INFO:     Waiting for application startup.
Nov 11 23:06:30 impressed-jade.ptr.network uvicorn[3372839]: INFO:     Started server process [3372839]
Nov 11 23:06:30 impressed-jade.ptr.network uvicorn[3372839]: INFO:     Waiting for application startup.
Nov 11 23:06:31 impressed-jade.ptr.network uvicorn[3372839]: INFO:     Application startup complete.
Nov 11 23:06:31 impressed-jade.ptr.network uvicorn[3372840]: INFO:     Application startup complete.
Nov 11 23:07:10 impressed-jade.ptr.network uvicorn[3372840]: INFO:     127.0.0.1:45986 - "GET /api/health HTTP/1.1" 200 OK
Nov 11 23:07:10 impressed-jade.ptr.network uvicorn[3372840]: INFO:     127.0.0.1:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 23:07:11 impressed-jade.ptr.network uvicorn[3372839]: INFO:     127.0.0.1:0 - "GET /api/health HTTP/1.0" 200 OK
Nov 11 23:07:11 impressed-jade.ptr.network uvicorn[3372840]: INFO:     127.0.0.1:0 - "GET /api/home HTTP/1.0" 200 OK
```
