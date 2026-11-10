import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useT } from '../i18n'
import { useSlip } from '../store'
import { pickText } from '../markets'

export function Crest({ team, size = 22 }) {
  const [bad, setBad] = useState(false)
  if (!team) return null
  if (!team.logo || bad) {
    return <span className="crest fallback" style={{ width: size, height: size, fontSize: size * 0.45 }}>{(team.short || '?').slice(0, 1)}</span>
  }
  return <span className="crest" style={{ width: size, height: size }}><img src={team.logo} alt="" loading="lazy" onError={() => setBad(true)} /></span>
}

export function Avatar({ user, size = 32 }) {
  if (!user) return null
  if (user.avatar) return <img className="avatar" src={user.avatar} alt="" width={size} height={size} style={{ width: size, height: size, objectFit: 'cover' }} loading="lazy" />
  const n = (user.name || user.username || '?').trim()
  return <span className="avatar" style={{ width: size, height: size, background: user.color || '#2E7D5B', fontSize: size * 0.42 }}>{n.slice(0, 1).toUpperCase()}</span>
}

export function UserName({ user, sub }) {
  return (
    <div style={{ minWidth: 0 }}>
      <div className="ellip" style={{ fontWeight: 700 }}>{user.name || user.username}</div>
      <div className="small ellip">@{user.username}{sub ? <>, {sub}</> : null}</div>
    </div>
  )
}

export function fmtTime(iso, locale) {
  return new Date(iso).toLocaleTimeString(locale, { hour: '2-digit', minute: '2-digit', hour12: false })
}
export function fmtDay(iso, locale) {
  const d = new Date(iso)
  const now = new Date()
  const diff = Math.round((new Date(d.getFullYear(), d.getMonth(), d.getDate()) - new Date(now.getFullYear(), now.getMonth(), now.getDate())) / 86400000)
  return { diff, label: d.toLocaleDateString(locale, { day: 'numeric', month: 'numeric' }) }
}
export function fmtNum(n, digits = 0) {
  if (n === null || n === undefined) return '—'
  return Number(n).toLocaleString('sr-Latn-RS', { minimumFractionDigits: digits, maximumFractionDigits: digits })
}
export const fmtOdds = (o) => (o ? Number(o).toFixed(2) : '—')
export const signed = (n) => (n > 0 ? '+' : '') + fmtNum(n)

export function StatusTime({ m }) {
  const t = useT()
  if (m.status === 'live') {
    return <div className="row-time live"><span>{m.minute === 'HT' ? t('ht') : (m.minute || <span className="live-dot" />)}</span><small style={{ color: 'var(--live)' }}>{t('live')}</small></div>
  }
  if (m.status === 'finished') return <div className="row-time"><span style={{ fontSize: 13 }}>{t('finished')}</span></div>
  const day = fmtDay(m.start, t.locale)
  return (
    <div className="row-time">
      <span>{fmtTime(m.start, t.locale)}</span>
      {day.diff !== 0 && <small>{day.diff === 1 ? t('tomorrow') : day.diff === -1 ? t('yesterday') : day.label}</small>}
    </div>
  )
}

export function OddsButtons({ m, wide = false }) {
  const slip = useSlip()
  const open = m.status === 'scheduled' && new Date(m.start) > new Date()
  return (
    <div className={`odds${wide ? ' wide' : ''}`}>
      {['1', 'X', '2'].map((k) => {
        const b = m.best?.[k]
        const on = slip.has(m.id, k)
        return (
          <button key={k} type="button" className={`odd${on ? ' on' : ''}`} disabled={!b || !open}
            aria-pressed={on} aria-label={`${k} ${b ? fmtOdds(b.odds) : ''}`}
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); if (b && open) slip.toggle(m, k, b.odds) }}>
            <span className="k">{k}</span>
            <span className="v">{b ? fmtOdds(b.odds) : '—'}</span>
          </button>
        )
      })}
    </div>
  )
}

export function MatchRow({ m }) {
  const t = useT()
  const sc = m.score
  const hw = sc && sc[0] > sc[1], aw = sc && sc[1] > sc[0]
  const fin = m.status === 'finished'
  return (
    <Link to={`/mec/${m.id}`} className="row">
      <StatusTime m={m} />
      <div className="row-teams">
        <div className={`row-team${fin && aw ? ' lose' : ''}`}><Crest team={m.home} size={20} /><span className="name">{t.team(m.home)}</span>{sc && <span className="sc">{sc[0]}</span>}</div>
        <div className={`row-team${fin && hw ? ' lose' : ''}`}><Crest team={m.away} size={20} /><span className="name">{t.team(m.away)}</span>{sc && <span className="sc">{sc[1]}</span>}</div>
      </div>
      {m.status !== 'finished' ? <OddsButtons m={m} /> : <span />}
    </Link>
  )
}

export function leagueLabel(m, t) {
  const n = m.league.name
  return t.lang === 'sr-cyr' && m.league.country === 'SRB' ? t.serb(n) : n
}

export function MatchList({ matches }) {
  const t = useT()
  const groups = []
  const idx = {}
  for (const m of matches) {
    const key = m.league.name + '|' + m.league.country
    if (!(key in idx)) { idx[key] = groups.length; groups.push({ key, league: m.league, sample: m, items: [] }) }
    groups[idx[key]].items.push(m)
  }
  return groups.map((g) => (
    <div className="league" key={g.key}>
      <div className="league-head">{g.league.country && g.league.country !== 'INT' && <span className="flag">{g.league.country}</span>}<span className="ellip">{leagueLabel(g.sample, t)}</span></div>
      <div className="rows">{g.items.map((m) => <MatchRow key={m.id} m={m} />)}</div>
    </div>
  ))
}

export function FormPills({ form }) {
  const t = useT()
  const map = t.lang === 'ru' ? { W: 'В', D: 'Н', L: 'П' } : { W: t.serb('P'), D: t.serb('N'), L: t.serb('I') }
  if (!form || !form.length) return <span className="small">—</span>
  return <span className="form-pills">{form.map((f, i) => <span key={i} className={`pill ${f}`}>{map[f]}</span>)}</span>
}

export function SplitBar({ split, m }) {
  const t = useT()
  const v = { 1: split['1'] || 0, X: split.X || 0, 2: split['2'] || 0 }
  return (
    <div>
      <div className="split">
        <div style={{ width: `${v[1]}%`, background: 'var(--gold)' }} />
        {m.sport === 'football' && <div style={{ width: `${v.X}%`, background: 'var(--muted)' }} />}
        <div style={{ width: `${v[2]}%`, background: 'var(--chalk)' }} />
      </div>
      <div className="split-legend">
        <div><b>{v[1]}%</b>{t.team(m.home)}</div>
        <div>{m.sport === 'football' ? <><b>{v.X}%</b>{t('draw')}</> : null}</div>
        <div><b>{v[2]}%</b>{t.team(m.away)}</div>
      </div>
    </div>
  )
}

export function Countdown({ to }) {
  const t = useT()
  const [now, setNow] = useState(Date.now())
  useEffect(() => { const i = setInterval(() => setNow(Date.now()), 30000); return () => clearInterval(i) }, [])
  const ms = Math.max(0, new Date(to) - now)
  const d = Math.floor(ms / 86400000), h = Math.floor(ms / 3600000) % 24, mi = Math.floor(ms / 60000) % 60
  return <div className="countdown"><div><b>{d}</b><span>{t('days')}</span></div><div><b>{h}</b><span>{t('hours')}</span></div><div><b>{mi}</b><span>{t('minutes')}</span></div></div>
}

export function Empty({ title, text, children }) {
  return <div className="empty"><b>{title}</b>{text}{children}</div>
}

export function Skeleton({ h = 66, n = 3 }) {
  return <div className="stack">{Array.from({ length: n }).map((_, i) => <div key={i} className="skeleton" style={{ height: h }} />)}</div>
}

export function SectionHead({ title, to, link }) {
  return <div className="section-head"><h2 className="h2">{title}</h2>{to && <Link to={to}>{link}</Link>}</div>
}

export function Toast({ text, onDone }) {
  useEffect(() => { if (!text) return; const i = setTimeout(onDone, 2400); return () => clearTimeout(i) }, [text, onDone])
  if (!text) return null
  return <div className="toast" role="status">{text}</div>
}

export function pickLabel(t, m, pick) {
  return pickText(pick, m, t)
}
