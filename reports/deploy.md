# Zicer deploy 2026-11-10 16:42 UTC

Итог: ЕСТЬ ОШИБКИ

Сайт: https://zicer.89-208-113-147.sslip.io

Админ: ADMIN maxsim CZJXiYjPs500

Коммит: aa8b98c Zicer v1: прогнозы, тикеты, битва фанатов, дерби, тренды, админка

```

=== Пакеты ===
OK: всё уже стоит

=== Настройки /etc/zicer.env ===
OK: создан

=== PostgreSQL ===
OK: база zicer готова

=== Python ===
OK: зависимости

=== Сервисы ===
FAIL: zicer-api не запустился
OK: zicer-worker работает

=== Админ ===
OK: админ есть

=== nginx ===
2026/11/10 19:41:32 [warn] 1250365#1250365: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plonk:93
2026/11/10 19:41:32 [warn] 1250365#1250365: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/plunkly:6
2026/11/10 19:41:32 [warn] 1250365#1250365: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/puskica.conf:4
2026/11/10 19:41:32 [warn] 1250365#1250365: protocol options redefined for 0.0.0.0:443 in /etc/nginx/sites-enabled/severny-kubok:12
2026/11/10 19:41:32 [warn] 1250365#1250365: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:80, ignored
2026/11/10 19:41:32 [warn] 1250365#1250365: conflicting server name "bookstats.89-208-113-147.sslip.io" on 0.0.0.0:443, ignored
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
OK: nginx перезагружен

=== HTTPS ===
Saving debug log to /var/log/letsencrypt/letsencrypt.log
Requesting a certificate for zicer.89-208-113-147.sslip.io

Successfully received certificate.
Certificate is saved at: /etc/letsencrypt/live/zicer.89-208-113-147.sslip.io/fullchain.pem
Key is saved at:         /etc/letsencrypt/live/zicer.89-208-113-147.sslip.io/privkey.pem
This certificate expires on 2027-02-08.
These files will be updated when the certificate renews.
Certbot has set up a scheduled task to automatically renew this certificate in the background.

Deploying certificate
Successfully deployed certificate for zicer.89-208-113-147.sslip.io to /etc/nginx/sites-enabled/zicer.conf
Congratulations! You have successfully enabled HTTPS on https://zicer.89-208-113-147.sslip.io

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
If you like Certbot, please consider supporting our work by:
 * Donating to ISRG / Let's Encrypt:   https://letsencrypt.org/donate
 * Donating to EFF:                    https://eff.org/donate-le
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
OK: сертификат выпущен

=== Проверки ===
api local: {"ok":true,"subjects":643}
https / -> 200
https /api/health -> 200
https /api/home -> 200
https /mecevi -> 200
index cache: cache-control: no-cache
cache-control: no-cache, no-store, must-revalidate
matches: {'basketball': 380, 'football': 971}
football | 2026-11-10 16:41:28.007147 | football upserted 33 | 
basketball | 2026-11-10 16:41:29.292099 | basketball upserted 380 | 
backfill | None |  | 
--- worker log ---
Nov 10 19:41:50 impressed-jade.ptr.network python[1250240]: 2026-11-10 19:41:50,015 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261014 "HTTP/1.1 200 OK"
Nov 10 19:41:50 impressed-jade.ptr.network python[1250240]: 2026-11-10 19:41:50,567 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261015 "HTTP/1.1 200 OK"
Nov 10 19:41:51 impressed-jade.ptr.network python[1250240]: 2026-11-10 19:41:51,246 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261016 "HTTP/1.1 200 OK"
Nov 10 19:41:52 impressed-jade.ptr.network python[1250240]: 2026-11-10 19:41:52,153 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261017 "HTTP/1.1 200 OK"
Nov 10 19:41:53 impressed-jade.ptr.network python[1250240]: 2026-11-10 19:41:53,166 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261018 "HTTP/1.1 200 OK"
Nov 10 19:41:53 impressed-jade.ptr.network python[1250240]: 2026-11-10 19:41:53,805 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261019 "HTTP/1.1 200 OK"
Nov 10 19:41:54 impressed-jade.ptr.network python[1250240]: 2026-11-10 19:41:54,346 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261020 "HTTP/1.1 200 OK"
Nov 10 19:41:54 impressed-jade.ptr.network python[1250240]: 2026-11-10 19:41:54,881 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261021 "HTTP/1.1 200 OK"
Nov 10 19:41:55 impressed-jade.ptr.network python[1250240]: 2026-11-10 19:41:55,410 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261022 "HTTP/1.1 200 OK"
Nov 10 19:41:56 impressed-jade.ptr.network python[1250240]: 2026-11-10 19:41:56,140 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261023 "HTTP/1.1 200 OK"
Nov 10 19:41:56 impressed-jade.ptr.network python[1250240]: 2026-11-10 19:41:56,989 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261024 "HTTP/1.1 200 OK"
Nov 10 19:41:57 impressed-jade.ptr.network python[1250240]: 2026-11-10 19:41:57,857 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261025 "HTTP/1.1 200 OK"
Nov 10 19:41:58 impressed-jade.ptr.network python[1250240]: 2026-11-10 19:41:58,496 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261026 "HTTP/1.1 200 OK"
Nov 10 19:41:59 impressed-jade.ptr.network python[1250240]: 2026-11-10 19:41:59,102 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261027 "HTTP/1.1 200 OK"
Nov 10 19:41:59 impressed-jade.ptr.network python[1250240]: 2026-11-10 19:41:59,697 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261028 "HTTP/1.1 200 OK"
Nov 10 19:42:00 impressed-jade.ptr.network python[1250240]: 2026-11-10 19:42:00,239 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261029 "HTTP/1.1 200 OK"
Nov 10 19:42:00 impressed-jade.ptr.network python[1250240]: 2026-11-10 19:42:00,772 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261030 "HTTP/1.1 200 OK"
Nov 10 19:42:01 impressed-jade.ptr.network python[1250240]: 2026-11-10 19:42:01,622 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261031 "HTTP/1.1 200 OK"
Nov 10 19:42:02 impressed-jade.ptr.network python[1250240]: 2026-11-10 19:42:02,432 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261101 "HTTP/1.1 200 OK"
Nov 10 19:42:03 impressed-jade.ptr.network python[1250240]: 2026-11-10 19:42:03,069 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261102 "HTTP/1.1 200 OK"
Nov 10 19:42:03 impressed-jade.ptr.network python[1250240]: 2026-11-10 19:42:03,664 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261103 "HTTP/1.1 200 OK"
Nov 10 19:42:04 impressed-jade.ptr.network python[1250240]: 2026-11-10 19:42:04,214 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261104 "HTTP/1.1 200 OK"
Nov 10 19:42:04 impressed-jade.ptr.network python[1250240]: 2026-11-10 19:42:04,738 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261105 "HTTP/1.1 200 OK"
Nov 10 19:42:05 impressed-jade.ptr.network python[1250240]: 2026-11-10 19:42:05,370 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261106 "HTTP/1.1 200 OK"
Nov 10 19:42:06 impressed-jade.ptr.network python[1250240]: 2026-11-10 19:42:06,294 INFO HTTP Request: GET https://www.fotmob.com/api/data/matches?date=20261107 "HTTP/1.1 200 OK"
--- api log ---
Nov 10 19:41:58 impressed-jade.ptr.network systemd[1]: zicer-api.service: Scheduled restart job, restart counter is at 10.
Nov 10 19:41:58 impressed-jade.ptr.network systemd[1]: Started zicer-api.service - Zicer API.
Nov 10 19:41:58 impressed-jade.ptr.network uvicorn[1250996]: ERROR:    [Errno 98] Address already in use
Nov 10 19:41:58 impressed-jade.ptr.network systemd[1]: zicer-api.service: Main process exited, code=exited, status=1/FAILURE
Nov 10 19:41:58 impressed-jade.ptr.network systemd[1]: zicer-api.service: Failed with result 'exit-code'.
Nov 10 19:42:02 impressed-jade.ptr.network systemd[1]: zicer-api.service: Scheduled restart job, restart counter is at 11.
Nov 10 19:42:02 impressed-jade.ptr.network systemd[1]: Started zicer-api.service - Zicer API.
Nov 10 19:42:02 impressed-jade.ptr.network uvicorn[1251071]: ERROR:    [Errno 98] Address already in use
Nov 10 19:42:02 impressed-jade.ptr.network systemd[1]: zicer-api.service: Main process exited, code=exited, status=1/FAILURE
Nov 10 19:42:02 impressed-jade.ptr.network systemd[1]: zicer-api.service: Failed with result 'exit-code'.
Nov 10 19:42:05 impressed-jade.ptr.network systemd[1]: zicer-api.service: Scheduled restart job, restart counter is at 12.
Nov 10 19:42:05 impressed-jade.ptr.network systemd[1]: Started zicer-api.service - Zicer API.
Nov 10 19:42:05 impressed-jade.ptr.network uvicorn[1251160]: ERROR:    [Errno 98] Address already in use
Nov 10 19:42:05 impressed-jade.ptr.network systemd[1]: zicer-api.service: Main process exited, code=exited, status=1/FAILURE
Nov 10 19:42:05 impressed-jade.ptr.network systemd[1]: zicer-api.service: Failed with result 'exit-code'.
```
