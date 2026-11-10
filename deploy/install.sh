#!/usr/bin/env bash
# Zicer: установка/обновление на сервере. Запуск: bash /opt/zicer/deploy/install.sh
set -uo pipefail
APP=/opt/zicer
DOMAIN=zicer.89-208-113-147.sslip.io
EMAIL=maxsim_kolesnikov@icloud.com
REPORT=$APP/reports/deploy.md
mkdir -p $APP/reports
exec > >(tee $APP/reports/deploy.log) 2>&1
step() { echo; echo "=== $* ==="; }
fail=0
ok() { echo "OK: $*"; }
bad() { echo "FAIL: $*"; fail=1; }

step "Пакеты"
export DEBIAN_FRONTEND=noninteractive
need=""
for p in python3-venv postgresql nginx certbot python3-certbot-nginx; do dpkg -s $p >/dev/null 2>&1 || need="$need $p"; done
if [ -n "$need" ]; then apt-get update -qq && apt-get install -y -qq $need && ok "установлено:$need" || bad "apt"; else ok "всё уже стоит"; fi
systemctl enable --now postgresql >/dev/null 2>&1

step "Настройки /etc/zicer.env"
if [ ! -f /etc/zicer.env ]; then
  DBPASS=$(openssl rand -hex 16); SECRET=$(openssl rand -hex 32)
  cat > /etc/zicer.env <<ENV
DATABASE_URL=postgresql+psycopg://zicer:$DBPASS@127.0.0.1:5432/zicer
ZICER_SECRET=$SECRET
PUBLIC_URL=https://$DOMAIN
TG_BOT_TOKEN=
TG_BOT_NAME=
LLM_API_KEY=
LLM_BASE_URL=https://api.openai.com/v1
LLM_MODEL=gpt-4o-mini
ENV
  chmod 600 /etc/zicer.env
  ok "создан"
else ok "уже есть, не трогаю"; fi
DBPASS=$(grep DATABASE_URL /etc/zicer.env | sed -E 's#.*zicer:([^@]+)@.*#\1#')

step "PostgreSQL"
sudo -u postgres psql -tAc "SELECT 1 FROM pg_roles WHERE rolname='zicer'" | grep -q 1 || sudo -u postgres psql -qc "CREATE ROLE zicer LOGIN PASSWORD '$DBPASS'"
sudo -u postgres psql -qc "ALTER ROLE zicer PASSWORD '$DBPASS'" >/dev/null
sudo -u postgres psql -tAc "SELECT 1 FROM pg_database WHERE datname='zicer'" | grep -q 1 || sudo -u postgres createdb -O zicer zicer
ok "база zicer готова"

step "Python"
[ -d $APP/venv ] || python3 -m venv $APP/venv
$APP/venv/bin/pip install -q --upgrade pip >/dev/null
$APP/venv/bin/pip install -q -r $APP/backend/requirements.txt && ok "зависимости" || bad "pip"

step "Сервисы"
cat > /etc/systemd/system/zicer-api.service <<UNIT
[Unit]
Description=Zicer API
After=network.target postgresql.service
[Service]
WorkingDirectory=$APP/backend
EnvironmentFile=/etc/zicer.env
ExecStart=$APP/venv/bin/uvicorn app.main:app --host 127.0.0.1 --port 8710 --workers 2 --proxy-headers
Restart=always
RestartSec=3
[Install]
WantedBy=multi-user.target
UNIT
cat > /etc/systemd/system/zicer-worker.service <<UNIT
[Unit]
Description=Zicer data worker
After=network.target postgresql.service
[Service]
WorkingDirectory=$APP/backend
EnvironmentFile=/etc/zicer.env
ExecStart=$APP/venv/bin/python -m app.worker
Restart=always
RestartSec=10
[Install]
WantedBy=multi-user.target
UNIT
systemctl daemon-reload
systemctl enable zicer-api zicer-worker >/dev/null 2>&1
systemctl restart zicer-api zicer-worker
sleep 5
systemctl is-active zicer-api >/dev/null && ok "zicer-api работает" || bad "zicer-api не запустился"
systemctl is-active zicer-worker >/dev/null && ok "zicer-worker работает" || bad "zicer-worker не запустился"

step "Админ"
ADMIN_INFO=""
if [ ! -f /etc/zicer-admin.txt ]; then
  out=$(cd $APP/backend && set -a && . /etc/zicer.env && set +a && $APP/venv/bin/python -m app.cli create-admin maxsim $EMAIL)
  echo "$out" | grep -q '^ADMIN' && echo "$out" > /etc/zicer-admin.txt && chmod 600 /etc/zicer-admin.txt
fi
[ -f /etc/zicer-admin.txt ] && ADMIN_INFO=$(cat /etc/zicer-admin.txt) && ok "админ есть"

step "nginx"
cat > /etc/nginx/sites-available/zicer.conf <<NG
server {
    listen 80;
    server_name $DOMAIN;
    root $APP/frontend/dist;
    index index.html;
    client_max_body_size 2m;
    gzip on;
    gzip_types text/css application/javascript application/json image/svg+xml;
    location /api/ { proxy_pass http://127.0.0.1:8710; proxy_set_header Host \$host; proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for; proxy_set_header X-Forwarded-Proto \$scheme; proxy_read_timeout 60s; }
    location /t/ { proxy_pass http://127.0.0.1:8710; proxy_set_header Host \$host; }
    location /assets/ { expires 1y; add_header Cache-Control "public, max-age=31536000, immutable"; try_files \$uri =404; }
    location = /index.html { add_header Cache-Control "no-cache, no-store, must-revalidate"; expires -1; }
    location / { add_header Cache-Control "no-cache, no-store, must-revalidate"; try_files \$uri \$uri/ /index.html; }
}
NG
ln -sf /etc/nginx/sites-available/zicer.conf /etc/nginx/sites-enabled/zicer.conf
if nginx -t 2>&1; then systemctl reload nginx; ok "nginx перезагружен"; else bad "nginx -t"; fi

step "HTTPS"
if [ ! -d /etc/letsencrypt/live/$DOMAIN ]; then
  certbot --nginx -d $DOMAIN --non-interactive --agree-tos -m $EMAIL --redirect && ok "сертификат выпущен" || bad "certbot"
else
  grep -q "listen 443" /etc/nginx/sites-available/zicer.conf || certbot --nginx -d $DOMAIN --non-interactive --reinstall --redirect >/dev/null 2>&1
  ok "сертификат уже есть"
fi
systemctl reload nginx

step "Проверки"
sleep 20
H=$(curl -s -m 10 http://127.0.0.1:8710/api/health); echo "api local: $H"; echo "$H" | grep -q true || bad "api local"
for path in / /api/health /api/home /mecevi; do
  code=$(curl -s -m 15 -o /dev/null -w '%{http_code}' https://$DOMAIN$path); echo "https $path -> $code"; [ "$code" = "200" ] || bad "https $path $code"
done
cc=$(curl -sI -m 10 https://$DOMAIN/ | grep -i cache-control); echo "index cache: $cc"
JOBS=$(cd $APP/backend && set -a && . /etc/zicer.env && set +a && $APP/venv/bin/python -c "
from app.db import SessionLocal
from app.models import JobStatus, Match
from sqlalchemy import select, func
db=SessionLocal()
print('matches:', dict(db.execute(select(Match.sport, func.count()).group_by(Match.sport)).all()))
for j in db.scalars(select(JobStatus)).all(): print(j.name, '|', j.last_ok, '|', j.info, '|', (j.last_error or '').splitlines()[0] if j.last_error else '')
" 2>&1)
echo "$JOBS"
echo "--- worker log ---"; journalctl -u zicer-worker -n 25 --no-pager 2>&1 | tail -25
echo "--- api log ---"; journalctl -u zicer-api -n 15 --no-pager 2>&1 | tail -15

{
  echo "# Zicer deploy $(date -u '+%Y-%m-%d %H:%M UTC')"
  echo; echo "Итог: $([ $fail = 0 ] && echo УСПЕХ || echo ЕСТЬ ОШИБКИ)"
  echo; echo "Сайт: https://$DOMAIN"
  echo; echo "Админ: $ADMIN_INFO"
  echo; echo "Коммит: $(git -C $APP log -1 --format='%h %s')"
  echo; echo '```'; cat $APP/reports/deploy.log | tail -120; echo '```'
} > $REPORT

step "Отчёт в git"
cd $APP
git config user.email "deploy@zicer" ; git config user.name "zicer-deploy"
git add reports/ && git commit -qm "deploy report $(date -u +%F_%H%M)" && git pull -q --rebase && git push -q && echo "отчёт отправлен" || echo "отчёт не отправлен"
echo; [ $fail = 0 ] && echo "ГОТОВО: https://$DOMAIN" || echo "ЕСТЬ ОШИБКИ — отчёт в reports/deploy.md"
