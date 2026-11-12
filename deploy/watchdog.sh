#!/usr/bin/env bash
# Zicer watchdog (every minute): heals what it can, reboots only as the last resort.
# 1) API, nginx, PostgreSQL not answering -> restart that service
# 2) still dead after 5 checks in a row, or the machine is out of memory and swap -> reboot (at most once per 30 min)
LOG=/var/log/zicer-watchdog.log
ST=/var/lib/zicer-watchdog; mkdir -p $ST
PORT=$(grep -oP '^ZICER_PORT=\K\d+' /etc/zicer.env 2>/dev/null || echo 8790)
log() { echo "$(date '+%F %T') $*" >> $LOG; }
fails=$(cat $ST/fails 2>/dev/null || echo 0)
problem=""

systemctl is-active --quiet postgresql || { log "postgresql down -> restart"; systemctl restart postgresql; problem="db"; }
systemctl is-active --quiet nginx || { log "nginx down -> restart"; systemctl restart nginx; problem="nginx"; }
systemctl is-active --quiet zicer-worker || { log "worker down -> restart"; systemctl restart zicer-worker; }
if ! curl -s -m 8 "http://127.0.0.1:$PORT/api/health" | grep -q '"ok":true'; then
  log "api not answering -> restart (fail #$((fails+1)))"; systemctl restart zicer-api; problem="api"
fi
if ! curl -s -m 8 -o /dev/null -w '%{http_code}' -H 'Host: winly.rs' http://127.0.0.1/ | grep -qE '^(200|301|302)$'; then
  log "nginx not serving -> restart"; systemctl restart nginx; problem="${problem:-web}"
fi

# memory: less than 3% RAM available and swap almost full = the box is about to freeze
avail=$(awk '/MemAvailable/{a=$2}/MemTotal/{t=$2}END{print int(a*100/t)}' /proc/meminfo)
swapfree=$(awk '/SwapFree/{f=$2}/SwapTotal/{t=$2}END{print (t>0)?int(f*100/t):100}' /proc/meminfo)
if [ "$avail" -lt 3 ] && [ "$swapfree" -lt 5 ]; then
  log "memory exhausted (avail ${avail}%, swap free ${swapfree}%) -> killing headless browsers"
  pkill -9 -f 'chrome|chromium|headless_shell' 2>/dev/null; problem="${problem:-mem}"
fi

if [ -n "$problem" ]; then fails=$((fails+1)); else fails=0; fi
echo $fails > $ST/fails
last=$(cat $ST/last_reboot 2>/dev/null || echo 0)
if [ "$fails" -ge 5 ] && [ $(( $(date +%s) - last )) -gt 1800 ]; then
  log "still broken after 5 checks ($problem) -> REBOOT"
  date +%s > $ST/last_reboot; echo 0 > $ST/fails; sync; systemctl reboot
fi
# keep the log small
[ "$(wc -l < $LOG 2>/dev/null || echo 0)" -gt 2000 ] && tail -n 1000 $LOG > $LOG.tmp && mv $LOG.tmp $LOG
exit 0
