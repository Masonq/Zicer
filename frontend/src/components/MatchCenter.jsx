import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { IconShirtFilled, IconHandStop, IconStopwatch, IconFlag, IconTarget, IconRectangleVerticalFilled, IconArrowsExchange, IconBallBasketball, IconBallFootball, IconBallVolleyball, IconPlayerPause } from '@tabler/icons-react'
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

const TOAST = ['score', 'shot_on', 'shot_off', 'corner', 'penalty', 'red', 'yellow', 'pen2', 'p3', 'break', 'ace']
const EVSPOT = { score: [95, 50], shot_on: [93, 50], shot_off: [93, 30], corner: [97, 6], penalty: [86, 50], p3: [80, 50], ace: [80, 50] }

// Bookmaker-style tracker for football, basketball, hockey, volleyball, water polo:
// possession wedge + "team / with the ball" card, event cards with icons, ball at the place of action.
const EV_ICON = {
  score: { football: IconBallFootball, hockey: IconTarget, waterpolo: IconTarget, basketball: IconBallBasketball, volleyball: IconBallVolleyball },
  shot_on: IconTarget, shot_off: IconTarget, corner: IconFlag, yellow: 'yellow', red: 'red', foul: IconHandStop, pen2: IconStopwatch,
  p2: IconBallBasketball, p3: IconBallBasketball, ft: IconBallBasketball, sub: IconArrowsExchange, penalty: IconTarget, timeout: IconPlayerPause,
}
function EvIconBig({ type, sport }) {
  let I = EV_ICON[type]
  if (I && typeof I === 'object') I = I[sport]
  if (I === 'yellow' || I === 'red') return <IconRectangleVerticalFilled size={30} style={{ color: I === 'yellow' ? '#F5D547' : '#E5544B' }} />
  if (!I) return null
  return <I size={30} stroke={1.6} />
}

// who has the ball in basketball, from the real play-by-play
function bballPossession(plays) {
  for (let i = plays.length - 1; i >= 0; i--) {
    const p = plays[i]
    const own = p.home ? 0 : 1
    if (p.pts > 0) return 1 - own
    if (['D', 'O', 'ST'].includes(p.pt)) return own
    if (p.pt === 'TO') return 1 - own
    if (['2FGA', '3FGA'].includes(p.pt)) return own
  }
  return null
}

function Court({ m, data, t }) {
  const live = m.status === 'live'
  const scene = useScene(m, data, t)
  const lv = data.live || {}
  const x = lv.x || {}
  const H = t.team(m.home), A = t.team(m.away)
  const names = [H, A]
  const per = (x.periods && x.periods.length ? x.periods : (lv.per || [])).filter((p) => p[0] || p[1])
  const periodTxt = !live ? t('finished') : m.sport === 'football' ? (m.minute === 'HT' ? t('ht') : m.minute || '') : periodLabel(lv.p, m.sport, t) || (/^[A-Z0-9_]+$/.test(m.minute || '') ? periodLabel(m.minute, m.sport, t) : m.minute)
  const scoresTxt = per.map((p) => `${p[0] ?? 0}-${p[1] ?? 0}`).join(', ')
  const server = m.sport === 'volleyball' && x.server ? x.server - 1 : null
  const plays = data.plays || []
  // ---- events (real): basketball play-by-play or the live stats feed
  const evList = m.sport === 'basketball' && plays.length
    ? plays.map((p, i) => ({ k: `${p.q}-${p.clock}-${i}`, t: p.pts ? 'score' : p.pt === 'CM' || p.pt === 'CMU' || p.pt === 'CMT' ? 'foul' : p.pt === 'TOUT' ? 'timeout' : null, side: p.home ? 0 : 1, title: t.lang === 'ru' ? p.ru : t.serb(p.sr), sub: p.player, pts: p.pts })).filter((e) => e.t)
    : (data.xev || []).filter((e) => TOAST.includes(e.t) || e.t === 'foul').map((e) => ({ k: `${e.at}-${e.t}-${e.side}`, t: e.t, side: e.side, title: xevLabel(e, m.sport, t), sub: '', at: e.at }))
  const last = evList[evList.length - 1]
  const [phase, setPhase] = useState({ kind: 'idle', ev: null })
  const seen = useRef(null)
  useEffect(() => {
    if (!data.now) return
    if (seen.current === null) { seen.current = last ? last.k : ''; return }
    if (!last || last.k === seen.current || !live) return
    seen.current = last.k
    const bigScore = last.t === 'score' && m.sport !== 'basketball'
    setPhase({ kind: 'event', ev: last })
    const a = setTimeout(() => setPhase(bigScore ? { kind: 'big', ev: last } : { kind: 'idle', ev: null }), 2600)
    const b = setTimeout(() => setPhase({ kind: 'idle', ev: null }), bigScore ? 5200 : 2700)
    return () => { clearTimeout(a); clearTimeout(b) }
  }, [last?.k, live, data.now]) // eslint-disable-line react-hooks/exhaustive-deps
  // ---- possession
  let att = null
  if (m.sport === 'basketball' && plays.length) att = bballPossession(plays)
  else if (server !== null) att = server
  else att = scene.x > 55 ? 0 : scene.x < 45 ? 1 : null
  const ev = phase.ev
  // ---- ball position
  let ball
  if (phase.kind === 'event' && ev && EVSPOT[ev.t === 'score' && m.sport === 'basketball' ? 'p2' : ev.t]) {
    const sp = EVSPOT[ev.t === 'score' && m.sport === 'basketball' ? 'p2' : ev.t]
    ball = { x: ev.side === 0 ? sp[0] : 100 - sp[0], y: ev.t === 'corner' ? (String(ev.k).length % 2 ? sp[1] : 100 - sp[1]) : sp[1] }
  } else if (server !== null) ball = { x: server === 0 ? 6 : 94, y: 50 }
  else if (m.sport === 'basketball' && att !== null) ball = { x: att === 0 ? 70 : 30, y: 62 }
  else if (att !== null) ball = { x: Math.max(8, Math.min(92, scene.x)), y: 55 }
  else ball = { x: 50, y: 50 }
  // ---- card
  let card = null
  if (live && phase.kind === 'event' && ev) card = { side: ev.side, title: ev.title, sub: ev.sub, icon: ev.t }
  else if (live && phase.kind === 'idle' && att !== null) {
    const label = server !== null ? t('serve') : m.sport === 'basketball' ? t('withBall') : (scene.title && ![t('live'), t('finished'), t('pause')].includes(scene.title) ? (scene.title.startsWith('+') ? t('withBall') : scene.title) : t('withBall'))
    card = { side: att, title: label, sub: '', icon: null, arrow: true }
  } else if (live && /PAUSE|BREAK|HALF_TIME/.test(lv.p || m.minute || '')) card = { side: null, title: t('timeStopped'), icon: 'timeout' }
  const fouls = data.fouls
  const clock = data.clock
  const bonusDots = (n) => <span className="bonus"><b>BONUS</b>{[0, 1, 2, 3, 4].map((i) => <i key={i} className={i < Math.min(5, n) ? 'on' : ''} />)}</span>
  const sc = m.score
  return (
    <div className="tennis-tracker trk">
      <div className="tt-bar">
        <span className="tt-player l"><IconShirtFilled size={18} className="c0i" /><span className="ellip">{H}</span></span>
        <span className="tt-score num"><i className="c0b" />{sc ? `${sc[0]}:${sc[1]}` : '–'}<i className="c1b" /></span>
        <span className="tt-player r"><span className="ellip">{A}</span><IconShirtFilled size={18} className="c1i" /></span>
      </div>
      {m.sport === 'basketball' && fouls && live ? (
        <div className="tt-sets num bb-sub">{bonusDots(fouls[0])}<span>{clock ? `Q${clock.q} ${clock.t}` : periodTxt}</span>{bonusDots(fouls[1])}</div>
      ) : (
        <div className="tt-sets num">{[periodTxt, m.sport === 'football' ? '' : scoresTxt].filter(Boolean).join('   ') || '\u00a0'}</div>
      )}
      <div className={`court court-${m.sport} tt-court`}>
        <CourtLines sport={m.sport} />
        {live && att !== null && phase.kind === 'idle' && server === null && (
          <svg className="poss" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <defs><linearGradient id={`pg${att}`} x1={att === 0 ? '0' : '1'} x2={att === 0 ? '1' : '0'} y1="0" y2="0"><stop offset="0" stopColor="#fff" stopOpacity="0.02" /><stop offset="1" stopColor="#fff" stopOpacity="0.22" /></linearGradient></defs>
            <polygon fill={`url(#pg${att})`} points={att === 0 ? '18,0 50,0 64,50 50,100 18,100 32,50' : '82,0 50,0 36,50 50,100 82,100 68,50'} />
          </svg>
        )}
        {live && phase.kind !== 'big' && (
          <>
            <span className="bp-shadow" style={{ left: `${ball.x}%`, top: `${ball.y}%` }} />
            <span className="bp-wrap" style={{ left: `${ball.x}%`, top: `${ball.y}%` }}><span className={`bp-ball ball-${m.sport} live`} /></span>
          </>
        )}
        {card && (
          <div key={(card.title || '') + card.side} className={`trk-card${card.side === 1 ? ' s1' : card.side === 0 ? ' s0' : ''}`}
            style={{ top: ball.y >= 50 ? '30%' : '70%', left: `${Math.max(32, Math.min(68, ball.x))}%` }}>
            {card.side !== null && card.arrow && <span className={`trk-arrow ${card.side === 0 ? 'r' : 'l'}`} />}
            <div className="trk-txt">
              {card.side !== null && <b>{names[card.side]}</b>}
              <span>{card.title}</span>
              {card.sub && <small>{card.sub}</small>}
            </div>
            {card.icon && <span className="trk-ico"><EvIconBig type={card.icon} sport={m.sport} /></span>}
          </div>
        )}
        {phase.kind === 'big' && sc && (
          <div className="tt-big num">
            <div><span>{sc[0]}</span><i className="c0b" /></div>
            <div><span>{sc[1]}</span><i className="c1b" /></div>
          </div>
        )}
        {!live && <div className="tt-toast">{t('finished')}</div>}
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
  // serve + rally loop: serve goes diagonally into the receiver's service box, then every shot crosses the net
  const [ball, setBall] = useState({ x: server === 0 ? 4 : 96, y: srvY, k: 0, fly: false })
  const loop = useRef(null)
  useEffect(() => {
    clearTimeout(loop.current)
    if (!live || phase.kind !== 'idle') { setBall({ x: server === 0 ? 4 : 96, y: srvY, k: Date.now(), fly: false }); return }
    let side = server // side where the ball is now
    let shots = 0
    let total = 3 + Math.floor(Math.random() * 6)
    const step = () => {
      if (shots === 0) {
        setBall({ x: server === 0 ? 4 : 96, y: srvY, k: Date.now(), fly: false }) // toss
        shots = 1
        loop.current = setTimeout(step, 1300)
        return
      }
      if (shots > total) { // rally over: short pause, next serve
        shots = 0; side = server; total = 3 + Math.floor(Math.random() * 6)
        loop.current = setTimeout(step, 1500)
        return
      }
      side = 1 - side
      let xx, yy
      if (shots === 1) { // serve into the diagonal service box
        xx = side === 1 ? 58 + Math.random() * 10 : 32 + Math.random() * 10
        yy = rcvY > 50 ? 55 + Math.random() * 12 : 33 + Math.random() * 12
      } else {
        xx = side === 1 ? 66 + Math.random() * 20 : 14 + Math.random() * 20
        yy = 20 + Math.random() * 60
      }
      setBall({ x: xx, y: yy, k: Date.now(), fly: true })
      shots += 1
      loop.current = setTimeout(step, 1150)
    }
    loop.current = setTimeout(step, 400)
    return () => clearTimeout(loop.current)
  }, [live, server, totalPts, phase.kind]) // eslint-disable-line react-hooks/exhaustive-deps
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
      <div className="tt-sets num">{setsTxt || '\u00a0'}</div>
      <div className="court court-tennis tt-court" style={{ '--tick': '1400ms' }}>
        <CourtLines sport="tennis" />
        {live && phase.kind !== 'big' && (
          <>
            <span className="bp-shadow tn" style={{ left: `${ball.x}%`, top: `${ball.y}%` }} />
            <span className="bp-wrap tn" style={{ left: `${ball.x}%`, top: `${ball.y}%` }}><span key={ball.k} className={`bp-ball ball-tennis${ball.fly ? ' arc' : ' toss'}`} /></span>
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
      {m.sport === 'tennis' ? <TennisCourt m={m} data={data} t={t} /> : <Court m={m} data={data} t={t} />}
      <div className="seg" style={{ margin: '12px 12px 0' }}>{tabs.map(([k, l]) => <button key={k} className={active === k ? 'on' : ''} onClick={() => setTab(k)}>{l}</button>)}</div>
      <div className={`center-body${active === 'periods' ? '' : ' fixed'}`}>
        {!loaded ? <div className="skeleton" style={{ height: active === 'periods' ? 150 : 272, margin: 14, borderRadius: 12 }} /> : (
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
