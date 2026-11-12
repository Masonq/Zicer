import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../api'
import { useT } from '../i18n'
import { useAuth } from '../store'
import { Flame } from 'lucide-react'
import { favList } from '../fav'
import { Crest } from './ui'

const GOAL_SPORTS = { football: 'goal', hockey: 'puckGoal', waterpolo: 'goal' }
const SEEN = 'winly_island_seen'

// Dynamic-Island style alerts at the top: goals in matches you follow, your settled picks and tickets
export default function Island() {
  const t = useT()
  const { user, setUser } = useAuth()
  const nav = useNavigate()
  const prev = useRef(null)
  const [q, setQ] = useState([])
  const push = (x) => setQ((cur) => (cur.length > 4 ? cur : [...cur, x]))
  // daily bonus: claimed automatically on the first visit of the day, announced in the island
  useEffect(() => {
    if (!user) return
    const today = new Date(Date.now() + 3600000).toISOString().slice(0, 10)
    if (user.daily_last === today) return
    api('/me/daily', { method: 'POST' }).then((r) => {
      if (r.user) setUser(r.user)
      if (r.granted > 0) push({ id: `daily${today}`, kind: 'daily', title: `${t('dailyBonus')} · ${t('dailyStreak')} ${r.streak}`, sub: `+${r.granted}`, to: '/profil', streak: r.streak, double: r.double })
    }).catch(() => {})
  }, [user?.id]) // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    let alive = true
    const seen = new Set(JSON.parse(localStorage.getItem(SEEN) || '[]'))
    const tick = async () => {
      try {
        const d = await api(`/me/watch?ids=${favList().slice(0, 100).join(',')}`)
        if (!alive) return
        const scores = {}
        for (const m of d.live || []) {
          const sc = m.score ? `${m.score[0]}:${m.score[1]}` : ''
          scores[m.id] = { sc, st: m.status }
          const p = prev.current?.[m.id]
          if (!p || !m.score) continue
          const [a, b] = p.sc.split(':').map(Number)
          if (GOAL_SPORTS[m.sport] && (m.score[0] > a || m.score[1] > b)) {
            const side = m.score[0] > a ? m.home : m.away
            push({ id: `g${m.id}${sc}`, kind: 'goal', title: `${t(GOAL_SPORTS[m.sport])} ${t.team(side)}`, m, sc, to: `/mec/${m.id}` })
          } else if (p.st === 'live' && m.status === 'finished') {
            push({ id: `f${m.id}`, kind: 'end', title: t('finished'), m, sc, to: `/mec/${m.id}` })
          }
        }
        prev.current = scores
        for (const s of d.settled || []) {
          const key = `${s.kind}${s.id}`
          if (seen.has(key)) continue
          seen.add(key)
          if (s.status === 'won') push({ id: key, kind: 'won', title: s.kind === 'ticket' ? t('ticketWon') : t('predWon'), sub: s.profit > 0 ? `+${s.profit}` : '', m: s.match, to: s.kind === 'ticket' ? `/tiket/${s.id}` : `/mec/${s.match.id}` })
          else if (s.kind === 'pred') push({ id: key, kind: 'lost', title: t('predLost'), m: s.match, to: `/mec/${s.match.id}` })
        }
        localStorage.setItem(SEEN, JSON.stringify([...seen].slice(-200)))
      } catch { /* offline */ }
    }
    tick()
    const id = setInterval(tick, 20000)
    return () => { alive = false; clearInterval(id) }
  }, [user?.id]) // eslint-disable-line react-hooks/exhaustive-deps
  const cur = q[0]
  useEffect(() => {
    if (!cur) return
    navigator.vibrate?.(cur.kind === 'won' ? [10, 60, 10] : 15)
    const id = setTimeout(() => setQ((x) => x.slice(1)), 5200)
    return () => clearTimeout(id)
  }, [cur?.id]) // eslint-disable-line react-hooks/exhaustive-deps
  if (!cur) return null
  const m = cur.m
  return (
    <button className={`island ${cur.kind}`} key={cur.id} onClick={() => { setQ((x) => x.slice(1)); nav(cur.to) }}>
      <span className="isl-ico">{cur.kind === 'daily' ? <span className="isl-flame"><Flame size={18} /></span> : m ? <Crest team={cur.kind === 'goal' && m.score ? (cur.title.includes(t.team(m.away)) ? m.away : m.home) : m.home} size={26} /> : null}</span>
      <span className="isl-txt"><b>{cur.title}</b>{cur.kind === 'daily' && <small className="ellip">{cur.double ? t('dailyDouble') : t('dailyHint')}</small>}{m && <small className="ellip">{t.team(m.home)} {cur.sc || (m.score ? `${m.score[0]}:${m.score[1]}` : '–')} {t.team(m.away)}</small>}</span>
      {cur.sub && <span className="isl-sub num">{cur.sub}</span>}
    </button>
  )
}
