import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { IconShirtFilled } from '@tabler/icons-react'
import { api } from '../api'
import { useT } from '../i18n'
import { usePoll } from '../store'

const ORD = { FIRST: 1, SECOND: 2, THIRD: 3, FOURTH: 4, FORTH: 4, FIFTH: 5 }

export function periodLabel(p, sport, t, short = false) {
  if (!p) return ''
  if (/PAUSE|HALF_TIME|BREAK/.test(p)) return short ? (t.lang === 'ru' ? 'Пер.' : t.serb('Pauza')) : t('pause')
  if (/OVERTIME/.test(p)) return short ? 'OT' : t('overtime')
  if (/PENALT/.test(p)) return short ? (t.lang === 'ru' ? 'Пен.' : t.serb('Pen.')) : t('penalties')
  const [w, kind] = p.split('_')
  const n = ORD[w]
  if (!n || !kind) return ''
  if (short) {
    const letter = { QUARTER: 'Q', SET: 'S', HALF: 'H', PERIOD: 'P' }[kind] || ''
    if (kind === 'HALF') return t.lang === 'ru' ? `${n}-й т.` : t.serb(`${n}. pol.`)
    if (kind === 'SET') return t.lang === 'ru' ? `${n}-й сет` : t.serb(`${n}. set`)
    return `${letter}${n}`
  }
  const word = { HALF: t('half'), QUARTER: t('quarter'), SET: t('set'), PERIOD: sport === 'hockey' ? t('period') : t('quarter') }[kind] || ''
  return t.lang === 'ru' ? `${n}-й ${word}` : `${n}. ${word}`
}

function periodIndex(p) {
  const n = ORD[(p || '').split('_')[0]]
  return n || 0
}

function Momentum({ data, colors }) {
  const W = 600, H = 120, mid = H / 2
  const maxMin = Math.max(90, ...data.map((d) => d[0]))
  const bw = W / (maxMin + 1)
  const hc = '#F2C230', ac = '#EEF3EE'
  return (
    <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" className="momentum" aria-hidden="true">
      <line x1="0" x2={W} y1={mid} y2={mid} stroke="rgba(238,243,238,0.25)" strokeWidth="1" />
      <line x1={W * 45 / maxMin} x2={W * 45 / maxMin} y1="6" y2={H - 6} stroke="rgba(238,243,238,0.18)" strokeDasharray="3 4" />
      {data.map(([m, v], i) => {
        const h = Math.max(1, Math.abs(v) / 100 * (mid - 6))
        return <rect key={i} x={m * bw} width={Math.max(1, bw - 1)} y={v > 0 ? mid - h : mid} height={h} fill={v > 0 ? hc : ac} opacity="0.9" rx="1" />
      })}
    </svg>
  )
}

function EvIcon({ e }) {
  if (e.type === 'Goal') return <span className="ev-ico goal">●</span>
  if (e.type === 'Card') return <span className={`ev-card ${e.card === 'Red' || e.card === 'YellowRed' ? 'red' : 'yellow'}`} />
  if (e.type === 'Substitution') return <span className="ev-ico sub">⇄</span>
  return <span className="ev-ico">•</span>
}

function evTitle(e, t) {
  if (e.type === 'Goal') return e.own ? t('ownGoal') : t('goal')
  if (e.type === 'Card') return e.card === 'Red' || e.card === 'YellowRed' ? t('red') : t('yellow')
  if (e.type === 'Substitution') return t('sub')
  if (e.type === 'MissedPenalty') return t('missedPen')
  return ''
}

function Crest({ team, size }) {
  const [bad, setBad] = useState(false)
  if (!team.logo || bad) return <span className="crest fallback" style={{ width: size, height: size, fontSize: size * 0.45 }}>{(team.short || '?')[0]}</span>
  return <span className="crest" style={{ width: size, height: size }}><img src={team.logo} alt="" onError={() => setBad(true)} /></span>
}

const L = { stroke: 'rgba(255,255,255,0.24)', strokeWidth: 2, fill: 'none' }
export function CourtLines({ sport }) {
  if (sport === 'basketball') {
    const W = { stroke: 'rgba(255,255,255,0.85)', strokeWidth: 2.2, fill: 'none' }
    const paint = 'rgba(15,42,34,0.82)'
    return (
      <svg viewBox="0 0 600 300" preserveAspectRatio="none" className="court-svg">
        <path d="M6 22 H72 A128 128 0 0 1 72 278 H6 Z" fill="rgba(15,42,34,0.22)" />
        <path d="M594 22 H528 A128 128 0 0 0 528 278 H594 Z" fill="rgba(15,42,34,0.22)" />
        <rect x="6" y="100" width="118" height="100" fill={paint} /><rect x="476" y="100" width="118" height="100" fill={paint} />
        <circle cx="300" cy="150" r="40" fill={paint} />
        <rect x="6" y="6" width="588" height="288" rx="4" {...W} />
        <line x1="300" y1="6" x2="300" y2="294" {...W} />
        <circle cx="300" cy="150" r="40" {...W} /><circle cx="300" cy="150" r="13" {...W} />
        <rect x="6" y="100" width="118" height="100" {...W} /><rect x="476" y="100" width="118" height="100" {...W} />
        <path d="M124 114 A36 36 0 0 1 124 186" {...W} /><path d="M476 114 A36 36 0 0 0 476 186" {...W} />
        <path d="M6 22 H72 A128 128 0 0 1 72 278 H6" {...W} /><path d="M594 22 H528 A128 128 0 0 0 528 278 H594" {...W} />
        <line x1="26" y1="132" x2="26" y2="168" stroke="rgba(255,255,255,0.9)" strokeWidth="3" /><line x1="574" y1="132" x2="574" y2="168" stroke="rgba(255,255,255,0.9)" strokeWidth="3" />
        <circle cx="38" cy="150" r="7" stroke="#E8833A" strokeWidth="2.5" fill="none" /><circle cx="562" cy="150" r="7" stroke="#E8833A" strokeWidth="2.5" fill="none" />
      </svg>
    )
  }
  if (sport === 'hockey') return (
    <svg viewBox="0 0 600 300" preserveAspectRatio="none" className="court-svg">
      <rect x="6" y="6" width="588" height="288" rx="70" {...L} />
      <line x1="300" y1="6" x2="300" y2="294" stroke="rgba(229,84,75,0.7)" strokeWidth="4" />
      <line x1="210" y1="6" x2="210" y2="294" stroke="rgba(90,150,230,0.7)" strokeWidth="4" /><line x1="390" y1="6" x2="390" y2="294" stroke="rgba(90,150,230,0.7)" strokeWidth="4" />
      <line x1="44" y1="20" x2="44" y2="280" stroke="rgba(229,84,75,0.5)" strokeWidth="2" /><line x1="556" y1="20" x2="556" y2="280" stroke="rgba(229,84,75,0.5)" strokeWidth="2" />
      <circle cx="300" cy="150" r="40" stroke="rgba(90,150,230,0.6)" strokeWidth="2" fill="none" />
      {[[110, 80], [110, 220], [490, 80], [490, 220]].map(([x, y]) => <circle key={x + '-' + y} cx={x} cy={y} r="30" stroke="rgba(229,84,75,0.45)" strokeWidth="2" fill="none" />)}
      <path d="M44 132 A18 18 0 0 1 44 168" stroke="rgba(90,150,230,0.7)" strokeWidth="2" fill="rgba(90,150,230,0.15)" /><path d="M556 132 A18 18 0 0 0 556 168" stroke="rgba(90,150,230,0.7)" strokeWidth="2" fill="rgba(90,150,230,0.15)" />
    </svg>)
  if (sport === 'tennis') return (
    <svg viewBox="0 0 600 300" preserveAspectRatio="none" className="court-svg">
      <rect x="30" y="20" width="540" height="260" {...L} stroke="rgba(255,255,255,0.6)" /><line x1="30" y1="52" x2="570" y2="52" stroke="rgba(255,255,255,0.6)" strokeWidth="2" /><line x1="30" y1="248" x2="570" y2="248" stroke="rgba(255,255,255,0.6)" strokeWidth="2" />
      <line x1="160" y1="52" x2="160" y2="248" stroke="rgba(255,255,255,0.6)" strokeWidth="2" /><line x1="440" y1="52" x2="440" y2="248" stroke="rgba(255,255,255,0.6)" strokeWidth="2" />
      <line x1="160" y1="150" x2="440" y2="150" stroke="rgba(255,255,255,0.6)" strokeWidth="2" />
      <line x1="300" y1="10" x2="300" y2="290" stroke="rgba(255,255,255,0.85)" strokeWidth="4" strokeDasharray="2 3" />
    </svg>)
  if (sport === 'volleyball') return (
    <svg viewBox="0 0 600 300" preserveAspectRatio="none" className="court-svg">
      <rect x="40" y="30" width="520" height="240" stroke="rgba(255,255,255,0.6)" strokeWidth="2" fill="none" />
      <line x1="300" y1="14" x2="300" y2="286" stroke="rgba(255,255,255,0.85)" strokeWidth="4" />
      <line x1="213" y1="30" x2="213" y2="270" stroke="rgba(255,255,255,0.45)" strokeWidth="2" /><line x1="387" y1="30" x2="387" y2="270" stroke="rgba(255,255,255,0.45)" strokeWidth="2" />
    </svg>)
  if (sport === 'waterpolo') return (
    <svg viewBox="0 0 600 300" preserveAspectRatio="none" className="court-svg">
      <rect x="6" y="6" width="588" height="288" {...L} />
      <line x1="40" y1="6" x2="40" y2="294" stroke="rgba(229,84,75,0.7)" strokeWidth="2" /><line x1="560" y1="6" x2="560" y2="294" stroke="rgba(229,84,75,0.7)" strokeWidth="2" />
      <line x1="105" y1="6" x2="105" y2="294" stroke="rgba(242,194,48,0.7)" strokeWidth="2" /><line x1="495" y1="6" x2="495" y2="294" stroke="rgba(242,194,48,0.7)" strokeWidth="2" />
      <line x1="300" y1="6" x2="300" y2="294" stroke="rgba(255,255,255,0.55)" strokeWidth="2" />
      <rect x="0" y="125" width="8" height="50" fill="rgba(255,255,255,0.6)" /><rect x="592" y="125" width="8" height="50" fill="rgba(255,255,255,0.6)" />
    </svg>)
  return (
    <svg viewBox="0 0 600 300" preserveAspectRatio="none" className="court-svg">
      <rect x="6" y="6" width="588" height="288" rx="6" {...L} /><line x1="300" y1="6" x2="300" y2="294" {...L} /><circle cx="300" cy="150" r="40" {...L} /><circle cx="300" cy="150" r="2.5" fill="rgba(255,255,255,0.4)" />
      <rect x="6" y="78" width="74" height="144" {...L} /><rect x="520" y="78" width="74" height="144" {...L} />
      <rect x="6" y="118" width="26" height="64" {...L} /><rect x="568" y="118" width="26" height="64" {...L} />
      <path d="M80 122 A36 36 0 0 1 80 178" {...L} /><path d="M520 122 A36 36 0 0 0 520 178" {...L} />
    </svg>)
}

const XPOS = { danger: 84, attack: 66, shot_on: 93, shot_off: 90, corner: 97, penalty: 88, p2: 88, p3: 82, ft: 88, score: 92, ace: 75, break: 70, df: 40 }
export function xevLabel(e, sport, t) {
  if (e.t === 'score') {
    if (sport === 'football' || sport === 'hockey' || sport === 'waterpolo') return t('ev_goal')
    if (sport === 'tennis' || sport === 'volleyball') return t('ev_set')
    return `+${e.n}`
  }
  return t(`ev_${e.t}`)
}

// Where the ball should be and what to say, from real match data
function useScene(m, data, t) {
  const live = m.status === 'live'
  const H = t.team(m.home), A = t.team(m.away)
  const prev = useRef(null)
  const lastSide = useRef(null)
  const sc = m.score || data.score
  if (sc && prev.current && (sc[0] !== prev.current[0] || sc[1] !== prev.current[1])) {
    lastSide.current = sc[0] - prev.current[0] > sc[1] - prev.current[1] ? 'home' : 'away'
  }
  if (sc) prev.current = sc
  if (!live) return { x: 50, title: t('finished'), sub: sc ? `${H} ${sc[0]}${m.sport === 'football' ? ':' : '–'}${sc[1]} ${A}` : '', flash: false }
  if (m.minute === 'HT' || /PAUSE|BREAK|HALF_TIME/.test(m.minute || '')) return { x: 50, title: t('pause'), sub: `${H} – ${A}`, flash: false }
  const xev = (data.xev || []).filter((e) => !['sub', 'foul', 'yellow', 'red', 'pen2'].includes(e.t) || true)
  const lastX = xev[xev.length - 1]
  const age = lastX ? (data.now || Date.now() / 1000) - lastX.at : 999
  if (lastX && age < 50 && !(m.sport === 'basketball' && data.plays && data.plays.length)) {
    const team = lastX.side === 0 ? H : A
    const base = XPOS[lastX.t] ?? 50
    const x = lastX.side === 0 ? base : 100 - base
    const strong = ['score', 'shot_on', 'penalty', 'red', 'p3', 'break', 'ace'].includes(lastX.t)
    return { x, y: lastX.t === 'corner' ? (Math.random() < 0.5 ? 10 : 90) : undefined, title: xevLabel(lastX, m.sport, t), sub: team, flash: strong }
  }
  if (m.sport === 'football') {
    const mom = data.momentum || []
    const recent = mom.slice(-3)
    const v = recent.length ? recent.reduce((a, x) => a + x[1], 0) / recent.length : 0
    const goals = (data.events || []).filter((e) => e.type === 'Goal')
    const g = goals[goals.length - 1]
    const cur = parseInt(m.minute, 10) || 0
    if (g && cur - g.min >= 0 && cur - g.min <= 1) return { x: g.home ? 92 : 8, title: `${t('goal')}!`, sub: `${g.player}, ${g.home ? H : A}`, flash: true }
    const a = Math.abs(v), team = v >= 0 ? H : A
    const x = 50 + Math.max(-1, Math.min(1, v / 100)) * 36
    if (!mom.length) return { x: 50, title: t('live'), sub: m.minute ? `${m.minute}` : '', flash: false }
    return { x, title: a >= 60 ? t('dangerAttack') : a >= 25 ? t('attack') : t('possession'), sub: team, flash: false }
  }
  if (m.sport === 'basketball' && data.plays && data.plays.length) {
    const p = data.plays[data.plays.length - 1]
    const team = p.home ? H : A
    const x = p.home ? 80 : 20
    const label = t.lang === 'ru' ? p.ru : t.serb(p.sr)
    if (p.pts > 0) return { x: p.home ? 90 : 10, title: `+${p.pts} ${team}`, sub: [p.player, label].filter(Boolean).join(', '), flash: true }
    return { x, title: label.length > 28 ? team : label, sub: label.length > 28 ? label : [p.player, team].filter(Boolean).join(', '), flash: false }
  }
  const per = periodLabel((data.live || {}).p, m.sport, t)
  const g = (data.live || {}).game
  if (m.sport === 'tennis' && g) return { x: lastSide.current === 'home' ? 30 : lastSide.current === 'away' ? 70 : 50, title: per || t('live'), sub: `${t.lang === 'ru' ? 'Гейм' : t.serb('Gem')} ${g[0]}:${g[1]}`, flash: false }
  const side = lastSide.current
  return { x: side === 'home' ? 75 : side === 'away' ? 25 : 50, title: per || t('live'), sub: side ? `${t.lang === 'ru' ? 'Последний результат' : t.serb('Poslednji poen')}: ${side === 'home' ? H : A}` : `${H} – ${A}`, flash: false }
}

const TICK = { tennis: 1150, volleyball: 1250, basketball: 1300, hockey: 850, waterpolo: 1400, football: 1600 }
const rnd = (a, b) => a + Math.random() * (b - a)

// Next ball position for a simple, sport-specific rally/attack pattern.
function nextPos(sport, st) {
  const att = st.att // 0 = home attacks to the right, 1 = away attacks to the left
  const dir = (x) => (att === 0 ? x : 100 - x)
  st.n += 1
  if (sport === 'tennis' || sport === 'volleyball') {
    // ball crosses the net every tick; after a few shots the rally restarts from a baseline
    st.side = st.side === 0 ? 1 : 0
    if (st.n % rnd(5, 9) < 1) { st.side = att ?? st.side }
    const lo = sport === 'tennis' ? [11, 34] : [12, 40]
    const x = st.side === 0 ? rnd(lo[0], lo[1]) : rnd(100 - lo[1], 100 - lo[0])
    return { x, y: rnd(20, 80), hop: true }
  }
  const goal = { basketball: [93.5, 50], hockey: [92.5, 50], waterpolo: [95, 50], football: [96, 50] }[sport] || [92, 50]
  const zone = { basketball: [58, 86], hockey: [56, 88], waterpolo: [60, 88], football: st.strong ? [70, 92] : [52, 76] }[sport] || [55, 85]
  if (st.shot) {
    // after a shot possession changes (basketball / hockey / water polo), football keeps pressure from data
    st.shot = false
    if (sport !== 'football' && st.dataAtt == null) st.att = st.att === 0 ? 1 : 0
    return { x: dir(rnd(zone[0], zone[0] + 10)), y: rnd(30, 70), hop: false }
  }
  if (st.n % (sport === 'hockey' ? 5 : 4) === 0) { st.shot = true; return { x: dir(goal[0]), y: goal[1] + rnd(-6, 6), hop: sport === 'basketball' } }
  return { x: dir(rnd(zone[0], zone[1])), y: rnd(18, 82), hop: sport === 'basketball' || sport === 'volleyball' }
}

function Court({ m, data, t }) {
  const live = m.status === 'live'
  const scene = useScene(m, data, t)
  const tick = TICK[m.sport] || 1500
  const st = useRef({ n: 0, side: 0, att: 0, shot: false, strong: false, dataAtt: null })
  const [pos, setPos] = useState({ x: 50, y: 50, hop: false, k: 0 })
  // data tells us who is attacking: keep the simulated play on that side
  useEffect(() => {
    const att = scene.x > 55 ? 0 : scene.x < 45 ? 1 : null
    st.current.dataAtt = att
    if (att != null) st.current.att = att
    st.current.strong = Math.abs(scene.x - 50) > 28
    if (scene.flash && live) setPos((p) => ({ x: scene.x, y: 50, hop: false, k: p.k + 1 }))
  }, [scene.x, scene.title, scene.flash, live])
  useEffect(() => {
    if (!live) { setPos({ x: 50, y: 50, hop: false, k: 0 }); return }
    const i = setInterval(() => {
      const p = nextPos(m.sport, st.current)
      setPos((old) => ({ ...p, k: old.k + 1 }))
    }, tick)
    return () => clearInterval(i)
  }, [live, m.sport, tick])
  const mom = m.sport === 'football' ? data.momentum || [] : []
  return (
    <div className={`court court-${m.sport}`} style={{ '--tick': `${tick}ms` }}>
      <CourtLines sport={m.sport} />
      {mom.length > 0 && <div className="bp-mom"><Momentum data={mom} /></div>}
      <span className="bp-shadow" style={{ left: `${pos.x}%`, top: `${pos.y}%` }} />
      <span className="bp-wrap" style={{ left: `${pos.x}%`, top: `${pos.y}%` }}>
        <span key={pos.k} className={`bp-ball ball-${m.sport}${scene.flash ? ' flash' : ''}${pos.hop ? ' hop' : ''}`} />
      </span>
      <div className="bp-text">
        <div className="bp-title">{scene.title}</div>
        {scene.sub && <div className="bp-sub ellip">{scene.sub}</div>}
      </div>
    </div>
  )
}


const PV = { 0: 0, 15: 1, 30: 2, 40: 3, A: 4 }
// Tennis tracker in the style of bookmaker live trackers: server, point score, point / game / break toasts
function TennisCourt({ m, data, t }) {
  const live = m.status === 'live'
  const x = (data.live || {}).x || {}
  const ss = x.ss || ((data.live || {}).game ? (data.live || {}).game.map(String) : ['0', '0'])
  const server = x.server ? x.server - 1 : ((data.live || {}).spl === 'AWAY' ? 1 : 0)
  const per = x.periods && x.periods.length ? x.periods : ((data.live || {}).per || []).filter((p) => p[0] || p[1])
  const H = t.team(m.home), A = t.team(m.away)
  const names = [H, A]
  const evs = (data.xev || []).filter((e) => ['point', 'game', 'bp'].includes(e.t))
  const last = evs[evs.length - 1]
  const [phase, setPhase] = useState({ kind: 'idle', ev: null })
  const seen = useRef(null)
  useEffect(() => {
    if (!data.now) return // placeholder data, wait for real data
    if (seen.current === null) { seen.current = last ? last.at : 0; return } // events that already happened are not replayed
    if (!last || last.at <= seen.current || !live) return
    seen.current = last.at
    setPhase({ kind: 'toast', ev: last })
    const a = setTimeout(() => setPhase({ kind: 'big', ev: last }), 1500)
    const b = setTimeout(() => setPhase({ kind: 'idle', ev: null }), 4200)
    return () => { clearTimeout(a); clearTimeout(b) }
  }, [last?.at, live, data.now]) // eslint-disable-line react-hooks/exhaustive-deps
  // serving side alternates deuce / advantage court with every point
  const totalPts = (PV[ss[0]] ?? 0) + (PV[ss[1]] ?? 0)
  const deuce = totalPts % 2 === 0
  const sy = (side) => (side === 0 ? (deuce ? 68 : 32) : (deuce ? 32 : 68))
  const srvY = sy(server)
  const rcvY = server === 0 ? (deuce ? 32 : 68) : (deuce ? 68 : 32)
  const [ball, setBall] = useState({ x: server === 0 ? 17 : 83, y: srvY, k: 0 })
  const shots = useRef(0)
  useEffect(() => {
    if (!live) return
    setBall({ x: server === 0 ? 17 : 83, y: srvY, k: Date.now() })
    shots.current = 0
    const i = setInterval(() => {
      shots.current += 1
      const toRight = (shots.current + server) % 2 === 1
      const xx = toRight ? 70 + Math.random() * 14 : 16 + Math.random() * 14
      const yy = shots.current === 1 ? (server === 0 ? (deuce ? 32 : 68) : (deuce ? 68 : 32)) : 22 + Math.random() * 56
      setBall({ x: xx, y: yy, k: Date.now() })
    }, 1150)
    return () => clearInterval(i)
  }, [live, server, totalPts, phase.kind === 'idle']) // eslint-disable-line react-hooks/exhaustive-deps
  const setsTxt = per.map((p) => `${p[0]}-${p[1]}`).join(', ')
  const ev = phase.ev
  const winner = ev ? ev.side : null
  const evTitle = ev ? (ev.t === 'game' ? (ev.brk ? t('ev_break') : t('ev_game')) : ev.t === 'bp' ? t('ev_bp') : t('ev_point')) : ''
  const tag = (side) => {
    const isSrv = side === server
    const label = phase.kind === 'big' && winner === side ? evTitle : isSrv && live ? t('serve') : ''
    return (
      <div className={`tt-tag ${side === 0 ? 'l' : 'r'} c${side}`} style={{ top: `${side === server ? srvY : rcvY}%` }}>
        <span className="ellip">{names[side]}</span>
        {label && <b>{label}</b>}
      </div>
    )
  }
  return (
    <div className="tennis-tracker">
      <div className="tt-bar">
        <span className="tt-player l"><IconShirtFilled size={18} className="c0i" /><span className="ellip">{H}</span></span>
        <span className="tt-score num"><i className="c0b" />{live ? `${ss[0]}:${ss[1]}` : (m.score ? `${m.score[0]}:${m.score[1]}` : '–')}<i className="c1b" /></span>
        <span className="tt-player r"><span className="ellip">{A}</span><IconShirtFilled size={18} className="c1i" /></span>
      </div>
      {setsTxt && <div className="tt-sets num">{setsTxt}</div>}
      <div className="court court-tennis tt-court" style={{ '--tick': '1150ms' }}>
        <CourtLines sport="tennis" />
        {live && phase.kind !== 'big' && (
          <>
            <span className="bp-shadow" style={{ left: `${ball.x}%`, top: `${ball.y}%` }} />
            <span className="bp-wrap" style={{ left: `${ball.x}%`, top: `${ball.y}%` }}><span key={ball.k} className="bp-ball ball-tennis hop" /></span>
          </>
        )}
        {tag(0)}{tag(1)}
        {phase.kind === 'toast' && <div className="tt-toast">{evTitle}</div>}
        {phase.kind === 'big' && ev && (
          <div className="tt-big num">
            <div><span>{ev.t === 'game' ? per.length ? per[per.length - 1][0] : '' : (ev.ss || ss)[0]}</span><i className="c0b" /></div>
            <div><span>{ev.t === 'game' ? per.length ? per[per.length - 1][1] : '' : (ev.ss || ss)[1]}</span><i className="c1b" /></div>
          </div>
        )}
        {!live && <div className="tt-toast">{t('finished')}</div>}
      </div>
    </div>
  )
}

function Stats({ stats, t }) {
  if (!stats || !stats.length) return <div className="empty" style={{ padding: 20 }}>{t('noStats')}</div>
  return (
    <div className="stat-list">
      {stats.map((s) => {
        const raw = s.w || s.v
        const a = parseFloat(raw[0]) || 0, b = parseFloat(raw[1]) || 0
        const tot = a + b || 1
        return (
          <div key={s.key} className="stat">
            <div className="stat-top"><b className="num">{s.v[0]}{s.pct ? '%' : ''}</b><span>{t.lang === 'ru' ? s.ru : t.serb(s.sr)}</span><b className="num">{s.v[1]}{s.pct ? '%' : ''}</b></div>
            <div className="stat-bars"><div><i style={{ width: `${(a / tot) * 100}%` }} className={a >= b ? 'lead' : ''} /></div><div><i style={{ width: `${(b / tot) * 100}%` }} className={b > a ? 'lead' : ''} /></div></div>
          </div>
        )
      })}
    </div>
  )
}

function Periods({ m, lv, t }) {
  const per = lv.per || []
  const cur = periodIndex(lv.p)
  const lastNZ = per.reduce((acc, x, i) => (x[0] || x[1] ? i + 1 : acc), 0)
  const shown = per.slice(0, Math.max(cur, lastNZ))
  if (!shown.length) return <div className="empty" style={{ padding: 20 }}>{t('noStats')}</div>
  const live = m.status === 'live'
  return (
    <div className="scroll-x" style={{ padding: 14 }}>
      <table className="per-table">
        <thead><tr><th />{shown.map((_, i) => <th key={i} className={i + 1 === cur && live ? 'cur' : ''}>{i + 1}</th>)}{lv.game && <th>{t.lang === 'ru' ? 'Гейм' : t.serb('Gem')}</th>}<th>{t('total')}</th></tr></thead>
        <tbody>{[0, 1].map((side) => (
          <tr key={side}>
            <td className="ellip" style={{ maxWidth: 140, fontWeight: 700 }}>{t.team(side ? m.away : m.home)}</td>
            {shown.map((p, i) => <td key={i} className={`num${i + 1 === cur && live ? ' cur' : ''}`}>{p[side]}</td>)}
            {lv.game && <td className="num">{lv.game[side]}</td>}
            <td className="num tot">{m.score ? m.score[side] : '–'}</td>
          </tr>))}
        </tbody>
      </table>
    </div>
  )
}

function Events({ m, data, t }) {
  const H = t.team(m.home), A = t.team(m.away)
  const xev = (data.xev || []).filter((e) => e.t !== 'attack')
  const XList = () => (
    <div className="ev-list">{[...xev].reverse().slice(0, 30).map((e, i) => (
      <div key={i} className="ev">
        <span className="ev-min num">{e.ts ? `${Math.floor(e.ts / 60) + 1}'` : ''}</span>
        <span className={`ev-ico${['score', 'shot_on', 'p3'].includes(e.t) ? ' goal' : ''}`}>{e.t === 'score' ? '●' : e.t === 'corner' ? '⚑' : e.t === 'yellow' ? '▮' : '•'}</span>
        <div className="ev-body"><div className="ev-player ellip">{xevLabel(e, m.sport, t)}</div><div className="small ellip">{e.side === 0 ? H : A}</div></div>
      </div>))}
    </div>
  )
  if (m.sport === 'football') {
    const evs = (data.events || []).filter((e) => e.type !== 'Half')
    if (!evs.length) return xev.length ? <XList /> : <div className="empty" style={{ padding: 20 }}>{t('noEvents')}</div>
    return (
      <div className="ev-list">{[...evs].reverse().map((e, i) => (
        <div key={i} className="ev">
          <span className="ev-min num">{e.min}{e.add ? `+${e.add}` : ''}'</span>
          <EvIcon e={e} />
          <div className="ev-body">
            <div className="ev-player ellip">{e.player}{e.type === 'Goal' && e.score ? <b className="num"> {e.score[0]}:{e.score[1]}</b> : null}</div>
            <div className="small ellip">{e.type === 'Substitution' && e.out ? `↓ ${e.out}` : e.assist ? `${t('assistBy')}: ${e.assist}` : evTitle(e, t)}, {e.home ? H : A}</div>
          </div>
        </div>))}
      </div>
    )
  }
  const plays = data.plays || []
  if (!plays.length) return xev.length ? <XList /> : <div className="empty" style={{ padding: 20 }}>{t('noEvents')}</div>
  return (
    <div className="ev-list">{[...plays].reverse().slice(0, 40).map((p, i) => (
      <div key={i} className="ev ev-wide">
        <span className="ev-min num" style={{ fontSize: 13, whiteSpace: 'nowrap' }}>Q{p.q} {p.clock}</span>
        <span className={`ev-ico${p.pts ? ' goal' : ''}`}>{p.pts ? `+${p.pts}` : '•'}</span>
        <div className="ev-body">
          <div className="ev-player ellip">{p.player || (t.lang === 'ru' ? p.ru : t.serb(p.sr))}{p.score && p.pts ? <b className="num"> {p.score[0]}–{p.score[1]}</b> : null}</div>
          <div className="small ellip">{p.player ? `${t.lang === 'ru' ? p.ru : t.serb(p.sr)}, ` : ''}{p.home ? H : A}</div>
        </div>
      </div>))}
    </div>
  )
}

export default function MatchCenter({ m, fallback = null }) {
  const t = useT()
  const live = m.status === 'live'
  const { data: loaded } = usePoll(() => api(`/matches/${m.id}/center`), [m.id, m.status], live ? (m.sport === 'tennis' ? 6000 : 15000) : 0, true)
  const [tab, setTab] = useState(null)
  const data = loaded || { live: m.live || {} }
  const lv = data.live || {}
  // fixed set of tabs per sport, so the card never changes height when data arrives
  const tabs = m.sport === 'football' ? [['events', t('events')], ['stats', t('statistics')]]
    : m.sport === 'basketball' ? [['events', t('events')], ['periods', t('periods')], ['stats', t('statistics')]]
      : [['periods', t('periods')], ['stats', t('statistics')]]
  const active = tab && tabs.find((x) => x[0] === tab) ? tab : tabs[0][0]
  const sep = m.sport === 'football' ? ':' : '–'
  return (
    <div className="center-card hero-center">
      <div className="hc-top">
        <span className="ellip">{t.league(m.league)}</span>
        {live ? <span className="badge live"><span className="live-dot" style={{ marginRight: 6 }} />{m.minute === 'HT' ? t('ht') : /^[A-Z0-9_]+$/.test(m.minute || '') ? periodLabel(m.minute, m.sport, t) : m.minute || t('live')}</span> : <span className="badge">{t('finished')}</span>}
      </div>
      <div className="hc-board">
        <Link to={`/klub/${m.home.id}`} className="hc-team"><Crest team={m.home} size={44} /><span className="hc-name">{t.team(m.home)}</span></Link>
        <div className="tablo"><div className="big">{m.score ? `${m.score[0]}${sep}${m.score[1]}` : '–'}</div></div>
        <Link to={`/klub/${m.away.id}`} className="hc-team r"><Crest team={m.away} size={44} /><span className="hc-name">{t.team(m.away)}</span></Link>
      </div>
      {m.sport === 'tennis' ? <TennisCourt m={m} data={data} t={t} /> : <Court m={m} data={data} t={t} />}
      <div className="seg" style={{ margin: '12px 12px 0' }}>{tabs.map(([k, l]) => <button key={k} className={active === k ? 'on' : ''} onClick={() => setTab(k)}>{l}</button>)}</div>
      <div className="center-body">
        {!loaded ? <div className="skeleton" style={{ height: 140, margin: 14, borderRadius: 12 }} /> : (
          <>
            {active === 'events' && <Events m={m} data={data} t={t} />}
            {active === 'periods' && <Periods m={m} lv={lv} t={t} />}
            {active === 'stats' && <Stats stats={data.stats} t={t} />}
          </>
        )}
      </div>
    </div>
  )
}
