#!/usr/bin/env bash
# Автообновление: раз в минуту проверяет GitHub и, если есть новый код, переустанавливает Zicer.
exec 9>/run/zicer-autoupdate.lock
flock -n 9 || exit 0
cd /opt/zicer || exit 0
git fetch -q origin main || exit 0
# the real domain started pointing at this server but the site still runs on the temporary address: reinstall once to switch
if ! grep -q "server_name winly.rs" /etc/nginx/sites-available/zicer.conf 2>/dev/null && { getent ahostsv4 winly.rs | grep -q 89.208.113.147 || curl -s -m 8 http://winly.rs/api/health | grep -q '"app":"zicer"'; }; then
  git reset -q --hard origin/main; bash /opt/zicer/deploy/install.sh; exit 0
fi
[ "$(git rev-parse HEAD)" = "$(git rev-parse origin/main)" ] && exit 0
git reset -q --hard origin/main
bash /opt/zicer/deploy/install.sh
