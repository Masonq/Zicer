#!/usr/bin/env bash
# Автообновление: раз в минуту проверяет GitHub и, если есть новый код, переустанавливает Zicer.
exec 9>/run/zicer-autoupdate.lock
flock -n 9 || exit 0
cd /opt/zicer || exit 0
git fetch -q origin main || exit 0
[ "$(git rev-parse HEAD)" = "$(git rev-parse origin/main)" ] && exit 0
git reset -q --hard origin/main
bash /opt/zicer/deploy/install.sh
