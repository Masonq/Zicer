import { toggleFav, useFav, showUndo } from '../fav'
import { useEffect, useRef, useState } from 'react'
import { Star, Plus } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useT } from '../i18n'
import { useSlip } from '../store'
import { pickText } from '../markets'
import { periodLabel } from './MatchCenter'
import { SportIcon } from './Sports'

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
    const lbl = m.minute === 'HT' ? t('ht') : /^[A-Z0-9_]+$/.test(m.minute || '') ? periodLabel(m.minute, m.sport, t, true) : m.minute
    return <div className="row-time live"><span style={{ fontSize: lbl && lbl.length > 4 ? 12 : 15 }}>{lbl || <span className="live-dot" />}</span><small style={{ color: 'var(--live)' }}>{t('live')}</small></div>
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
  // chance of each outcome (margin removed): a thin bar at the bottom of every price
  const inv = ['1', 'X', '2'].map((k) => (m.best?.[k]?.odds ? 1 / m.best[k].odds : 0))
  const tot = inv.reduce((a, b) => a + b, 0) || 1
  const fav = inv.indexOf(Math.max(...inv))
  return (
    <div className={`odds${wide ? ' wide' : ''}`}>
      {['1', 'X', '2'].map((k) => {
        const b = m.best?.[k]
        const on = slip.has(m.id, k)
        if (k === 'X' && (m.sport === 'tennis' || m.sport === 'volleyball')) return <span key={k} aria-hidden="true" />
        return (
          <button key={k} type="button" className={`odd${on ? ' on' : ''}${['1', 'X', '2'][fav] === k && b ? ' fav' : ''}`} disabled={!b || !open}
            style={{ '--p': `${Math.round((inv[['1', 'X', '2'].indexOf(k)] / tot) * 100)}%` }}
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

// Odometer-style number: every digit rolls to its new value
export function RollNum({ value, className = '' }) {
  const str = String(value ?? '')
  return (
    <span className={`roll ${className}`} aria-label={str}>
      {str.split('').map((ch, i) => (/\d/.test(ch)
        ? <span key={`${str.length - i}`} className="roll-d" aria-hidden="true"><span style={{ transform: `translateY(${-Number(ch) * 10}%)` }}>{'0123456789'.split('').map((d) => <i key={d}>{d}</i>)}</span></span>
        : <span key={`s${str.length - i}`} className="roll-s" aria-hidden="true">{ch}</span>))}
    </span>
  )
}

export function MatchRow({ m }) {
  const t = useT()
  const slip = useSlip()
  const favs = useFav()
  const fav = favs.includes(m.id)
  const sc = m.score
  const hw = sc && sc[0] > sc[1], aw = sc && sc[1] > sc[0]
  const fin = m.status === 'finished'
  const [dx, setDx] = useState(0)
  const st = useRef(null)
  const open = m.status === 'scheduled' && new Date(m.start) > new Date()
  // phone swipe: left adds the favourite outcome to the ticket, right stars the match; both can be undone
  const onStart = (e) => { const p = e.touches[0]; st.current = { x: p.clientX, y: p.clientY, lock: null } }
  const onMove = (e) => {
    const s0 = st.current; if (!s0) return
    const p = e.touches[0]; const ddx = p.clientX - s0.x, ddy = p.clientY - s0.y
    if (s0.lock === null && (Math.abs(ddx) > 8 || Math.abs(ddy) > 8)) s0.lock = Math.abs(ddx) > Math.abs(ddy) ? 'x' : 'y'
    if (s0.lock === 'x') setDx(Math.max(-110, Math.min(110, ddx)))
  }
  const onEnd = () => {
    const s0 = st.current; st.current = null
    if (s0?.lock === 'x') {
      if (dx > 70) {
        const on = toggleFav(m.id); navigator.vibrate?.(12)
        showUndo(on ? t('favAdded') : t('favRemoved'), () => toggleFav(m.id))
      } else if (dx < -70 && open) {
        const opts = ['1', 'X', '2'].filter((k) => m.best?.[k]?.odds).sort((a, b) => m.best[a].odds - m.best[b].odds)
        const k = opts[0]
        if (k && !slip.has(m.id, k)) {
          slip.toggle(m, k, m.best[k].odds); navigator.vibrate?.(12)
          showUndo(`${t('addedToTicket')}: ${k} · ${fmtOdds(m.best[k].odds)}`, () => slip.toggle(m, k, m.best[k].odds))
        }
      }
    }
    setDx(0)
  }
  return (
    <div className="row-swipe">
      <div className={`row-under${dx > 0 ? ' r' : dx < 0 ? ' l' : ''}`} aria-hidden="true">
        <span className={`ru-fav${dx > 70 ? ' go' : ''}`}><Star size={18} fill={fav ? 'currentColor' : 'none'} />{fav ? t('unfav') : t('fav')}</span>
        <span className={`ru-add${dx < -70 ? ' go' : ''}`}><Plus size={18} />{t('ticket')}</span>
      </div>
      <Link to={`/mec/${m.id}`} state={{ m }} className={`row${fav ? ' is-fav' : ''}`} style={dx ? { transform: `translateX(${dx}px)`, transition: 'none' } : undefined}
        onTouchStart={onStart} onTouchMove={onMove} onTouchEnd={onEnd} onClick={(e) => { if (Math.abs(dx) > 6) e.preventDefault() }}>
        <StatusTime m={m} />
        <div className="row-teams">
          <div className={`row-team${fin && aw ? ' lose' : ''}`}><Crest team={m.home} size={20} /><span className="name">{t.team(m.home)}</span>{sc && <span className="sc"><RollNum value={sc[0]} /></span>}</div>
          <div className={`row-team${fin && hw ? ' lose' : ''}`}><Crest team={m.away} size={20} /><span className="name">{t.team(m.away)}</span>{sc && <span className="sc"><RollNum value={sc[1]} /></span>}</div>
        </div>
        <button type="button" className={`row-fav${fav ? ' on' : ''}`} aria-label={fav ? t('unfav') : t('fav')} title={fav ? t('unfav') : t('fav')}
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); const on = toggleFav(m.id); showUndo(on ? t('favAdded') : t('favRemoved'), () => toggleFav(m.id)) }}>
          <Star size={15} fill={fav ? 'currentColor' : 'none'} />
        </button>
        {m.status !== 'finished' ? <OddsButtons m={m} /> : <span />}
      </Link>
    </div>
  )
}

export function leagueLabel(m, t) {
  return t.league(m.league)
}

// marks the sticky league header that is currently pinned at the top (.stuck): only that one shows extra controls
const stuckSet = new Set()
let stuckBound = false
function updateStuck() {
  let pinned = null
  for (const el of stuckSet) {
    if (!el.isConnected) { stuckSet.delete(el); continue }
    const top = parseFloat(getComputedStyle(el).top) || 0
    const r = el.getBoundingClientRect()
    const box = el.parentElement.getBoundingClientRect()
    if (r.top <= top + 1 && box.bottom > top + r.height) pinned = el
  }
  for (const el of stuckSet) el.classList.toggle('stuck', el === pinned)
}
function stickRef(el) {
  if (!el || stuckSet.has(el)) return
  stuckSet.add(el)
  if (!stuckBound) {
    stuckBound = true
    let raf = 0
    window.addEventListener('scroll', () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(updateStuck) }, { passive: true })
    window.addEventListener('resize', updateStuck)
  }
  requestAnimationFrame(updateStuck)
}

export function MatchList({ matches, headExtra = null }) {
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
      <div className="league-head" ref={stickRef}><span className={`league-sport ls-${g.sample.sport}`} title={t(g.sample.sport)}><SportIcon sport={g.sample.sport} size={14} /></span>{g.league.country && g.league.country !== 'INT' && <span className="flag">{g.league.country === 'EU' ? 'EU' : g.league.country}</span>}<span className="ellip">{leagueLabel(g.sample, t)}</span>{headExtra}</div>
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
