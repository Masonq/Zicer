#!/usr/bin/env bash
# Автообновление: раз в минуту проверяет GitHub и, если есть новый код, переустанавливает Zicer.
exec 9>/run/zicer-autoupdate.lock
flock -n 9 || exit 0
cd /opt/zicer || exit 0
git fetch -q origin main || exit 0
# pause switch: while deploy/PAUSE exists in the repository, nothing is installed automatically
git cat-file -e origin/main:deploy/PAUSE 2>/dev/null && exit 0
# the real domain started pointing at this server but the site still runs on the temporary address: reinstall once to switch
if ! grep -q "server_name winly.rs" /etc/nginx/sites-available/zicer.conf 2>/dev/null && { [ -d /etc/letsencrypt/live/winly.rs ] || curl -s -m 8 "https://dns.google/resolve?name=winly.rs&type=A" | grep -q 89.208.113.147; }; then
  git reset -q --hard origin/main; bash /opt/zicer/deploy/install.sh; exit 0
fi
[ "$(git rev-parse HEAD)" = "$(git rev-parse origin/main)" ] && exit 0
git reset -q --hard origin/main
bash /opt/zicer/deploy/install.sh
