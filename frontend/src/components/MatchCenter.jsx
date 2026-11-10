import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import confetti from 'canvas-confetti'
import { Link } from 'react-router-dom'
import { IconShirtFilled, IconHandStop, IconStopwatch, IconFlag, IconTarget, IconRectangleVerticalFilled, IconArrowsExchange, IconBallBasketball, IconBallFootball, IconBallVolleyball, IconPlayerPause, IconBallTennis } from '@tabler/icons-react'
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
// Courts drawn to real regulation proportions (units = metres, incl. run-off).
// The SVG is the whole court area; ball positions (0..100%) map to the playing field inside it.
export const COURT = {
  football: { w: 113, h: 76, fx: 4, fy: 4, fw: 105, fh: 68 },
  basketball: { w: 31, h: 17, fx: 1.5, fy: 1, fw: 28, fh: 15 },
  hockey: { w: 62, h: 31, fx: 1, fy: 0.5, fw: 60, fh: 30 },
  tennis: { w: 29.5, h: 14.4, fx: 2.865, fy: 1.715, fw: 23.77, fh: 10.97 },
  volleyball: { w: 22, h: 12, fx: 2, fy: 1.5, fw: 18, fh: 9 },
  waterpolo: { w: 29, h: 21, fx: 2, fy: 0.5, fw: 25, fh: 20 },
}
export const fieldStyle = (sport) => { const c = COURT[sport] || COURT.football; return { left: `${(c.fx / c.w) * 100}%`, top: `${(c.fy / c.h) * 100}%`, width: `${(c.fw / c.w) * 100}%`, height: `${(c.fh / c.h) * 100}%` } }
export const courtAspect = (sport) => { const c = COURT[sport] || COURT.football; return `${c.w} / ${c.h}` }
const WL = { stroke: '#fff', strokeOpacity: 0.85, fill: 'none', vectorEffect: 'non-scaling-stroke', strokeWidth: 1.6 }
export function CourtLines({ sport }) {
  const c = COURT[sport] || COURT.football
  const { fx: X, fy: Y, fw: W, fh: H } = c
  const vb = `0 0 ${c.w} ${c.h}`
  if (sport === 'football') {
    const cy = Y + H / 2
    const stripes = Array.from({ length: 12 }, (_, i) => <rect key={i} x={X + (W / 12) * i} y={Y} width={W / 12} height={H} fill={i % 2 ? '#2F8152' : '#2B774B'} />)
    const side = (dir) => {
      const gx = dir === 1 ? X : X + W
      const s = dir
      return (
        <g key={dir}>
          <rect x={dir === 1 ? gx : gx - 16.5} y={cy - 20.16} width={16.5} height={40.32} {...WL} />
          <rect x={dir === 1 ? gx : gx - 5.5} y={cy - 9.16} width={5.5} height={18.32} {...WL} />
          <circle cx={gx + s * 11} cy={cy} r={0.25} fill="#fff" fillOpacity="0.85" />
          <path d={`M ${gx + s * 16.5} ${cy - 7.31} A 9.15 9.15 0 0 ${dir === 1 ? 1 : 0} ${gx + s * 16.5} ${cy + 7.31}`} {...WL} />
          <rect x={dir === 1 ? gx - 1.6 : gx} y={cy - 3.66} width={1.6} height={7.32} fill="rgba(255,255,255,0.18)" stroke="#fff" strokeOpacity="0.85" vectorEffect="non-scaling-stroke" strokeWidth="1.2" />
        </g>
      )
    }
    return (
      <svg viewBox={vb} className="court-svg" aria-hidden="true">
        <rect width={c.w} height={c.h} fill="#256B42" />
        {stripes}
        <rect x={X} y={Y} width={W} height={H} {...WL} />
        <line x1={X + W / 2} y1={Y} x2={X + W / 2} y2={Y + H} {...WL} />
        <circle cx={X + W / 2} cy={cy} r={9.15} {...WL} /><circle cx={X + W / 2} cy={cy} r={0.3} fill="#fff" fillOpacity="0.85" />
        {[1, -1].map(side)}
        {[[X, Y, 0], [X + W, Y, 90], [X + W, Y + H, 180], [X, Y + H, 270]].map(([x, y, r]) => <path key={r} d={`M ${x + Math.cos((r * Math.PI) / 180)} ${y + Math.sin((r * Math.PI) / 180)} A 1 1 0 0 1 ${x + Math.cos(((r + 90) * Math.PI) / 180)} ${y + Math.sin(((r + 90) * Math.PI) / 180)}`} {...WL} />)}
      </svg>
    )
  }
  if (sport === 'basketball') {
    const cy = Y + H / 2
    const half = (dir) => {
      const bx = dir === 1 ? X : X + W
      const s = dir
      const hoop = bx + s * 1.575
      return (
        <g key={dir}>
          <rect x={dir === 1 ? bx : bx - 5.8} y={cy - 2.45} width={5.8} height={4.9} fill="#1F5E48" fillOpacity="0.92" />
          <rect x={dir === 1 ? bx : bx - 5.8} y={cy - 2.45} width={5.8} height={4.9} {...WL} />
          <path d={`M ${bx + s * 5.8} ${cy - 1.8} A 1.8 1.8 0 0 ${dir === 1 ? 1 : 0} ${bx + s * 5.8} ${cy + 1.8}`} {...WL} />
          <path d={`M ${bx} ${cy - 6.6} H ${bx + s * 2.99} A 6.75 6.75 0 0 ${dir === 1 ? 1 : 0} ${bx + s * 2.99} ${cy + 6.6} H ${bx}`} {...WL} />
          <path d={`M ${hoop} ${cy - 1.25} A 1.25 1.25 0 0 ${dir === 1 ? 1 : 0} ${hoop} ${cy + 1.25}`} {...WL} />
          <line x1={bx + s * 1.2} y1={cy - 0.9} x2={bx + s * 1.2} y2={cy + 0.9} stroke="#fff" strokeWidth="2.2" vectorEffect="non-scaling-stroke" />
          <circle cx={hoop} cy={cy} r={0.23} fill="none" stroke="#E8833A" strokeWidth="2" vectorEffect="non-scaling-stroke" />
        </g>
      )
    }
    return (
      <svg viewBox={vb} className="court-svg" aria-hidden="true">
        <defs><pattern id="planks" width="0.6" height="2.4" patternUnits="userSpaceOnUse"><rect width="0.6" height="2.4" fill="#D6A26C" /><rect x="0.59" width="0.01" height="2.4" fill="rgba(90,50,20,0.25)" /></pattern></defs>
        <rect width={c.w} height={c.h} fill="#1F5E48" />
        <rect x={X} y={Y} width={W} height={H} fill="url(#planks)" />
        <rect x={X} y={Y} width={W} height={H} {...WL} />
        <line x1={X + W / 2} y1={Y} x2={X + W / 2} y2={Y + H} {...WL} />
        <circle cx={X + W / 2} cy={cy} r={1.8} fill="#1F5E48" fillOpacity="0.92" /><circle cx={X + W / 2} cy={cy} r={1.8} {...WL} />
        {[1, -1].map(half)}
      </svg>
    )
  }
  if (sport === 'hockey') {
    const cy = Y + H / 2
    const r = 8.5
    const red = { stroke: '#D64545', fill: 'none', vectorEffect: 'non-scaling-stroke', strokeWidth: 1.6 }
    const blue = { stroke: '#2F6FD0', fill: 'none', vectorEffect: 'non-scaling-stroke', strokeWidth: 3 }
    return (
      <svg viewBox={vb} className="court-svg" aria-hidden="true">
        <rect width={c.w} height={c.h} fill="#1A2730" />
        <rect x={X} y={Y} width={W} height={H} rx={r} fill="#F1F6F9" stroke="#9FB3C2" strokeWidth="2" vectorEffect="non-scaling-stroke" />
        <line x1={X + 4} y1={Y + 0.6} x2={X + 4} y2={Y + H - 0.6} {...red} /><line x1={X + W - 4} y1={Y + 0.6} x2={X + W - 4} y2={Y + H - 0.6} {...red} />
        <line x1={X + 21.5} y1={Y} x2={X + 21.5} y2={Y + H} {...blue} /><line x1={X + W - 21.5} y1={Y} x2={X + W - 21.5} y2={Y + H} {...blue} />
        <line x1={X + W / 2} y1={Y} x2={X + W / 2} y2={Y + H} stroke="#D64545" strokeWidth="3" vectorEffect="non-scaling-stroke" />
        <circle cx={X + W / 2} cy={cy} r={4.5} {...{ ...blue, strokeWidth: 1.6 }} />
        {[[X + 10, cy - 7], [X + 10, cy + 7], [X + W - 10, cy - 7], [X + W - 10, cy + 7]].map(([x, y]) => <g key={x + '-' + y}><circle cx={x} cy={y} r={4.5} {...red} /><circle cx={x} cy={y} r={0.3} fill="#D64545" /></g>)}
        <path d={`M ${X + 4} ${cy - 1.8} A 1.8 1.8 0 0 1 ${X + 4} ${cy + 1.8} Z`} fill="rgba(47,111,208,0.35)" stroke="#D64545" strokeWidth="1.2" vectorEffect="non-scaling-stroke" />
        <path d={`M ${X + W - 4} ${cy - 1.8} A 1.8 1.8 0 0 0 ${X + W - 4} ${cy + 1.8} Z`} fill="rgba(47,111,208,0.35)" stroke="#D64545" strokeWidth="1.2" vectorEffect="non-scaling-stroke" />
        <rect x={X + 2.9} y={cy - 0.92} width={1.1} height={1.83} fill="none" stroke="#D64545" strokeWidth="1.6" vectorEffect="non-scaling-stroke" />
        <rect x={X + W - 4} y={cy - 0.92} width={1.1} height={1.83} fill="none" stroke="#D64545" strokeWidth="1.6" vectorEffect="non-scaling-stroke" />
      </svg>
    )
  }
  if (sport === 'tennis') {
    const al = 1.37
    return (
      <svg viewBox={vb} className="court-svg" aria-hidden="true">
        <rect width={c.w} height={c.h} fill="#3C7A5A" />
        <rect x={X} y={Y} width={W} height={H} fill="#2D5F95" />
        <rect x={X} y={Y} width={W} height={H} {...WL} />
        <line x1={X} y1={Y + al} x2={X + W} y2={Y + al} {...WL} /><line x1={X} y1={Y + H - al} x2={X + W} y2={Y + H - al} {...WL} />
        <line x1={X + W / 2 - 6.4} y1={Y + al} x2={X + W / 2 - 6.4} y2={Y + H - al} {...WL} /><line x1={X + W / 2 + 6.4} y1={Y + al} x2={X + W / 2 + 6.4} y2={Y + H - al} {...WL} />
        <line x1={X + W / 2 - 6.4} y1={Y + H / 2} x2={X + W / 2 + 6.4} y2={Y + H / 2} {...WL} />
        <line x1={X} y1={Y + H / 2} x2={X + 0.3} y2={Y + H / 2} {...WL} /><line x1={X + W - 0.3} y1={Y + H / 2} x2={X + W} y2={Y + H / 2} {...WL} />
        <line x1={X + W / 2} y1={Y - 0.9} x2={X + W / 2} y2={Y + H + 0.9} stroke="#fff" strokeWidth="2.6" strokeDasharray="1 1.4" vectorEffect="non-scaling-stroke" />
      </svg>
    )
  }
  if (sport === 'volleyball') {
    return (
      <svg viewBox={vb} className="court-svg" aria-hidden="true">
        <rect width={c.w} height={c.h} fill="#2A6FA8" />
        <rect x={X} y={Y} width={W} height={H} fill="#E08A3C" />
        <rect x={X} y={Y} width={W} height={H} {...WL} />
        <line x1={X + 6} y1={Y} x2={X + 6} y2={Y + H} {...WL} /><line x1={X + 12} y1={Y} x2={X + 12} y2={Y + H} {...WL} />
        <line x1={X + W / 2} y1={Y - 1} x2={X + W / 2} y2={Y + H + 1} stroke="#fff" strokeWidth="3" vectorEffect="non-scaling-stroke" />
        <circle cx={X + W / 2} cy={Y - 1} r={0.22} fill="#fff" /><circle cx={X + W / 2} cy={Y + H + 1} r={0.22} fill="#fff" />
      </svg>
    )
  }
  if (sport === 'waterpolo') {
    const cy = Y + H / 2
    const ln = (x, col) => <line key={x + col} x1={x} y1={Y} x2={x} y2={Y + H} stroke={col} strokeWidth="1.8" vectorEffect="non-scaling-stroke" />
    return (
      <svg viewBox={vb} className="court-svg" aria-hidden="true">
        <rect width={c.w} height={c.h} fill="#0F5E86" />
        <rect x={X} y={Y} width={W} height={H} fill="#1C8CC0" />
        {[2, 5, 6].map((d) => [ln(X + d, d === 2 ? '#E04848' : d === 5 ? '#F2C230' : '#4CC38A'), ln(X + W - d, d === 2 ? '#E04848' : d === 5 ? '#F2C230' : '#4CC38A')])}
        {ln(X + W / 2, '#ffffff')}
        <rect x={X} y={Y} width={W} height={H} stroke="#fff" strokeOpacity="0.85" fill="none" strokeWidth="1.6" vectorEffect="non-scaling-stroke" />
        <rect x={X - 0.6} y={cy - 1.5} width={0.6} height={3} fill="#fff" /><rect x={X + W} y={cy - 1.5} width={0.6} height={3} fill="#fff" />
      </svg>
    )
  }
  return null
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
const SCORE_ICON = { football: IconBallFootball, hockey: IconTarget, waterpolo: IconTarget, basketball: IconBallBasketball, volleyball: IconBallVolleyball, tennis: IconBallTennis }
const EV_ICON = {
  break: IconBallTennis, ace: IconBallTennis, timeout: IconPlayerPause,
  shot_on: IconTarget, shot_off: IconTarget, corner: IconFlag, yellow: 'yellow', red: 'red', foul: IconHandStop, pen2: IconStopwatch,
  p2: IconBallBasketball, p3: IconBallBasketball, ft: IconBallBasketball, sub: IconArrowsExchange, penalty: IconTarget, timeout: IconPlayerPause,
}
function EvIconBig({ type, sport }) {
  let I = type === 'score' ? SCORE_ICON[sport] : EV_ICON[type]
  if (I === 'yellow' || I === 'red') return <IconRectangleVerticalFilled size={30} style={{ color: I === 'yellow' ? '#F5D547' : '#E5544B' }} />
  if (!I) return null
  return <I size={30} stroke={1.6} />
}

// ---------- modern extras shared by all trackers ----------
const KEY_STATS = {
  football: ['x:Dangerous attacks', 'ShotsOnTarget', 'x:Shots on target', 'BallPossesion', 'x:Possession %', 'corners', 'x:Corner'],
  basketball: ['FG2', 'FG3', 'TotalRebounds', 'x:2-pointers', 'x:3-pointers', 'x:Free throws', 'Turnovers', 'x:Fouls'],
  hockey: ['x:Attacks', 'x:Possession %', 'x:2-min penalties'],
  tennis: ['x:Aces', 'x:Double faults', 'x:1st Serve %', 'x:Breaks'],
  volleyball: ['x:Points on own serve', 'x:Max pts in a row'],
  waterpolo: ['x:Attacks', 'x:Possession %'],
}
const W8 = { danger: 3, attack: 1, shot_on: 4, shot_off: 2, corner: 2, score: 5, p2: 2, p3: 3, ft: 1, ace: 2, break: 4 }

function use3D() {
  const [on, setOn] = useState(() => { try { return localStorage.getItem('winly_3d') !== '0' } catch { return true } })
  const toggle = () => setOn((v) => { try { localStorage.setItem('winly_3d', v ? '0' : '1') } catch {} return !v })
  return [on, toggle]
}

function celebrate(el, side) {
  if (!el) return
  try {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const r = el.getBoundingClientRect()
    const x = (r.left + r.width * (side === 0 ? 0.8 : 0.2)) / window.innerWidth
    const y = (r.top + r.height * 0.5) / window.innerHeight
    confetti({ particleCount: 70, spread: 70, startVelocity: 32, ticks: 140, scalar: 0.8, origin: { x, y }, colors: side === 0 ? ['#3D8EF0', '#F2C230', '#ffffff'] : ['#8BD12F', '#F2C230', '#ffffff'], disableForReducedMotion: true })
    if (navigator.vibrate) navigator.vibrate([40, 30, 40])
  } catch {}
}

function Extras({ m, data, t, items }) {
  const live = m.status === 'live'
  const H = t.team(m.home), A = t.team(m.away)
  // pressure: football momentum or weighted live events of the last ~8 minutes
  let ph = 0, pa = 0
  const mom = m.sport === 'football' ? (data.momentum || []).slice(-6) : []
  if (mom.length) { for (const [, v] of mom) { if (v > 0) ph += v; else pa -= v } }
  else {
    const now = data.now || Date.now() / 1000
    for (const e of data.xev || []) { if (now - e.at > 480) continue; const w = W8[e.t] || 0; if (e.side === 0) ph += w; else pa += w }
  }
  const tot = ph + pa
  const hp = tot ? Math.round((ph / tot) * 100) : 50
  const stats = (data.stats || [])
  const want = KEY_STATS[m.sport] || []
  const picked = []
  for (const k of want) { const st = stats.find((x) => x.key === k); if (st && !picked.find((p) => p.ru === st.ru)) picked.push(st); if (picked.length === 3) break }
  return (
    <div className="trk-extras">
      {live && (
        <div className="trk-press">
          <div className="trk-press-head"><span>{t('pressure')}</span><b className="num">{hp}% – {100 - hp}%</b></div>
          <div className="trk-press-bar"><motion.i className="c0b" animate={{ width: `${hp}%` }} transition={{ type: 'spring', stiffness: 120, damping: 20 }} /><motion.i className="c1b" animate={{ width: `${100 - hp}%` }} transition={{ type: 'spring', stiffness: 120, damping: 20 }} /></div>
        </div>
      )}
      {items.length > 0 && (
        <div className="trk-line">
          <AnimatePresence initial={false}>
            {items.slice(-4).reverse().map((e) => (
              <motion.div key={e.k} layout initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }} className={`trk-chip s${e.side}`}>
                <span className="trk-chip-ico"><EvIconBig type={e.t} sport={m.sport} /></span>
                <span className="trk-chip-txt ellip"><b>{e.title}</b>{e.side === 0 ? H : A}</span>
                {e.when && <span className="trk-chip-min num">{e.when}</span>}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}
      {picked.length > 0 && (
        <div className="trk-keys">
          {picked.map((st) => {
            const raw = st.w || st.v
            const a = parseFloat(raw[0]) || 0, b = parseFloat(raw[1]) || 0
            const sum = a + b || 1
            return (
              <div key={st.key} className="trk-key">
                <div className="trk-key-label ellip">{t.lang === 'ru' ? st.ru : t.serb(st.sr)}</div>
                <div className="trk-key-top"><b className="num">{st.v[0]}{st.pct ? '%' : ''}</b><b className="num">{st.v[1]}{st.pct ? '%' : ''}</b></div>
                <div className="trk-key-bar"><i className="c0b" style={{ width: `${(a / sum) * 100}%` }} /><i className="c1b" style={{ width: `${(b / sum) * 100}%` }} /></div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

function evWhen(e, sport) {
  if (e.clock) return e.clock
  if (e.ts) return sport === 'football' ? `${Math.floor(e.ts / 60) + 1}'` : ''
  return ''
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

// ---------- play engine: the ball/puck is always moving along continuous paths ----------
// It keeps circulating in the zone of the team in possession (deeper when the attack is dangerous),
// and when a real event arrives it travels to the event spot (shot, corner, goal...), holds, then play resumes.
const SEG = { football: [1300, 2000], hockey: [520, 820], basketball: [650, 1000], waterpolo: [1000, 1500], volleyball: [1050, 1250] }
function usePlayEngine({ live, sport, att, intensity, eventSpot, eventKey, isScore, server }) {
  const ballEl = useRef(null), shadowEl = useRef(null), trailEl = useRef(null), rippleEl = useRef(null)
  const st = useRef({ pos: { x: 50, y: 50 }, from: { x: 50, y: 50 }, to: { x: 50, y: 50 }, t0: 0, dur: 1, hop: 0, hold: 0, trail: [], lastTrail: 0, side: 0, after: null })
  const cfg = useRef({ att, intensity, sport, server })
  cfg.current = { att, intensity, sport, server }
  useEffect(() => {
    const e = st.current
    let raf = 0
    const rnd = (a, b) => a + Math.random() * (b - a)
    const place = (p, h = 0) => {
      if (ballEl.current) { ballEl.current.style.left = `${p.x}%`; ballEl.current.style.top = `${p.y}%`; ballEl.current.style.transform = `translate(-50%, calc(-50% - ${h * 24}px)) scale(${1 + h * 0.3})` }
      if (shadowEl.current) { shadowEl.current.style.left = `${p.x}%`; shadowEl.current.style.top = `${p.y}%`; shadowEl.current.style.opacity = String(0.5 - h * 0.25) }
    }
    const next = () => {
      const { att: a, intensity: k, sport: sp, server: srv } = cfg.current
      const [d0, d1] = SEG[sp] || [900, 1400]
      if (sp === 'volleyball') { // rally over the net, arcs, until the real point arrives
        e.side = e.side === 0 ? 1 : 0
        return { to: { x: e.side === 1 ? rnd(60, 86) : rnd(14, 40), y: rnd(22, 78) }, dur: rnd(d0, d1), hop: 1 }
      }
      if (a === null || a === undefined) return { to: { x: rnd(36, 64), y: Math.max(18, Math.min(82, e.pos.y + rnd(-30, 30))) }, dur: rnd(d0, d1), hop: 0 }
      const depth = sp === 'basketball' ? [62, 90] : [52 + 12 * k, 66 + 26 * k]
      let x = rnd(depth[0], depth[1])
      if (a === 1) x = 100 - x
      const dy = sp === 'hockey' ? 46 : 34
      const y = Math.max(18, Math.min(82, e.pos.y + rnd(-dy, dy)))
      return { to: { x, y }, dur: rnd(d0, d1) * (sp === 'football' ? 1 - 0.25 * k : 1), hop: sp === 'basketball' ? 0.25 : 0 }
    }
    const seg = (to, dur, hop) => { e.from = { ...e.pos }; e.to = to; e.t0 = performance.now(); e.dur = dur; e.hop = hop }
    if (!live) { e.pos = { x: 50, y: 50 }; place(e.pos); if (trailEl.current) trailEl.current.setAttribute('points', ''); return }
    if (cfg.current.sport === 'volleyball' && cfg.current.server !== null) { e.pos = { x: cfg.current.server === 0 ? 6 : 94, y: 50 }; e.side = cfg.current.server }
    const n = next(); seg(n.to, n.dur, n.hop)
    const frame = (now) => {
      if (e.hold && now < e.hold) { raf = requestAnimationFrame(frame); return }
      if (e.hold) { e.hold = 0; if (e.after) { e.pos = { ...e.after }; e.after = null; e.trail = [] } const n2 = next(); seg(n2.to, n2.dur, n2.hop) }
      const tt = Math.min(1, (now - e.t0) / e.dur)
      const ease = tt < 0.5 ? 2 * tt * tt : 1 - Math.pow(-2 * tt + 2, 2) / 2
      const p = { x: e.from.x + (e.to.x - e.from.x) * ease, y: e.from.y + (e.to.y - e.from.y) * ease }
      const h = e.hop ? 4 * tt * (1 - tt) * e.hop : 0
      e.pos = p
      place(p, h)
      if (now - e.lastTrail > 60) {
        e.lastTrail = now; e.trail.push(p); if (e.trail.length > 22) e.trail.shift()
        if (trailEl.current) trailEl.current.setAttribute('points', e.trail.map((q) => `${q.x.toFixed(2)},${q.y.toFixed(2)}`).join(' '))
      }
      if (tt >= 1) {
        if (e.event) { e.event = false; e.hold = now + 1500 } else { const n3 = next(); seg(n3.to, n3.dur, n3.hop) }
      }
      raf = requestAnimationFrame(frame)
    }
    raf = requestAnimationFrame(frame)
    return () => cancelAnimationFrame(raf)
  }, [live, sport]) // eslint-disable-line react-hooks/exhaustive-deps
  // a real event: travel to its spot, ripple, hold; after a goal play restarts from the centre
  useEffect(() => {
    if (!eventKey || !eventSpot || !live) return
    const e = st.current
    e.from = { ...e.pos }; e.to = eventSpot; e.t0 = performance.now(); e.dur = 520; e.hop = sport === 'basketball' ? 0.8 : 0.15; e.event = true
    e.after = isScore ? (sport === 'basketball' ? { x: eventSpot.x > 50 ? 92 : 8, y: 50 } : { x: 50, y: 50 }) : null
    if (rippleEl.current) {
      rippleEl.current.style.left = `${eventSpot.x}%`; rippleEl.current.style.top = `${eventSpot.y}%`
      rippleEl.current.classList.remove('go'); void rippleEl.current.offsetWidth; rippleEl.current.classList.add('go')
    }
  }, [eventKey]) // eslint-disable-line react-hooks/exhaustive-deps
  return { ballEl, shadowEl, trailEl, rippleEl }
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
    ? plays.map((p, i) => ({ k: `${p.q}-${p.clock}-${i}`, t: p.pts ? 'score' : p.pt === 'CM' || p.pt === 'CMU' || p.pt === 'CMT' ? 'foul' : p.pt === 'TOUT' ? 'timeout' : null, side: p.home ? 0 : 1, title: t.lang === 'ru' ? p.ru : t.serb(p.sr), sub: p.player, pts: p.pts, clock: p.clock ? `Q${p.q} ${p.clock}` : '' })).filter((e) => e.t)
    : (data.xev || []).filter((e) => TOAST.includes(e.t) || e.t === 'foul').map((e) => ({ k: `${e.at}-${e.t}-${e.side}`, t: e.t, side: e.side, title: xevLabel(e, m.sport, t), sub: '', at: e.at, ts: e.ts }))
  const last = evList[evList.length - 1]
  const [phase, setPhase] = useState({ kind: 'idle', ev: null })
  const seen = useRef(null)
  const courtRef = useRef(null)
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
  // ---- engine inputs
  const ttl = scene.title || ''
  const intensity = ttl === t('dangerAttack') || ttl === t('ev_danger') ? 0.95 : ttl === t('attack') || ttl === t('ev_attack') ? 0.6 : 0.3
  const evSpotKey = phase.kind === 'event' && ev ? ev.k : null
  const evSpot = phase.kind === 'event' && ev && EVSPOT[ev.t === 'score' && m.sport === 'basketball' ? 'p2' : ev.t]
    ? (() => { const sp = EVSPOT[ev.t === 'score' && m.sport === 'basketball' ? 'p2' : ev.t]; return { x: ev.side === 0 ? sp[0] : 100 - sp[0], y: ev.t === 'corner' ? (String(ev.k).length % 2 ? sp[1] : 100 - sp[1]) : sp[1] } })()
    : null
  const engine = usePlayEngine({ live, sport: m.sport, att, intensity, eventSpot: evSpot, eventKey: evSpotKey, isScore: ev && ev.t === 'score', server })
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
      <div ref={courtRef} className={`court court-${m.sport} tt-court`} style={{ aspectRatio: courtAspect(m.sport) }}>
        <CourtLines sport={m.sport} />
        <div className="field" style={fieldStyle(m.sport)}>
        {live && att !== null && phase.kind === 'idle' && server === null && (
          <svg className="poss" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <defs><linearGradient id={`pg${att}`} x1={att === 0 ? '0' : '1'} x2={att === 0 ? '1' : '0'} y1="0" y2="0"><stop offset="0" stopColor="#fff" stopOpacity="0.02" /><stop offset="1" stopColor="#fff" stopOpacity="0.22" /></linearGradient></defs>
            <polygon fill={`url(#pg${att})`} points={att === 0 ? '18,0 50,0 64,50 50,100 18,100 32,50' : '82,0 50,0 36,50 50,100 82,100 68,50'} />
          </svg>
        )}
        {live && att !== null && server === null && (
          <div className={`terr t${att}`} aria-hidden="true" />
        )}
        <svg className="arena-fx" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <defs><linearGradient id={`tg${m.id}`} x1="0" x2="1"><stop offset="0" stopColor="#fff" stopOpacity="0" /><stop offset="1" stopColor="#fff" stopOpacity="0.55" /></linearGradient></defs>
          <polyline ref={engine.trailEl} points="" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="1.4" strokeDasharray="3 4" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" className="trail" />
        </svg>
        <span ref={engine.rippleEl} className="ripple" />
        <span ref={engine.shadowEl} className="eng-shadow" style={{ opacity: live ? 0.5 : 0 }} />
        <span ref={engine.ballEl} className={`eng-ball ball-${m.sport}`} style={{ opacity: live && phase.kind !== 'big' ? 1 : 0 }} />
        </div>
        <AnimatePresence>
        {card && (
          <motion.div key={(card.title || '') + card.side} className={`trk-card${card.side === 1 ? ' s1' : card.side === 0 ? ' s0' : ''}`}
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.22 }}
            style={{ top: ball.y >= 50 ? '30%' : '70%', left: `${Math.max(32, Math.min(68, ball.x))}%`, x: '-50%', y: '-50%' }}>
            {card.side !== null && card.arrow && <span className={`trk-arrow ${card.side === 0 ? 'r' : 'l'}`} />}
            <div className="trk-txt">
              {card.side !== null && <b>{names[card.side]}</b>}
              <span>{card.title}</span>
              {card.sub && <small>{card.sub}</small>}
            </div>
            {card.icon && <span className="trk-ico"><EvIconBig type={card.icon} sport={m.sport} /></span>}
          </motion.div>
        )}
        </AnimatePresence>
        {phase.kind === 'big' && sc && (
          <div className="tt-big num">
            <div><span>{sc[0]}</span><i className="c0b" /></div>
            <div><span>{sc[1]}</span><i className="c1b" /></div>
          </div>
        )}
        {!live && <div className="tt-toast">{t('finished')}</div>}
      </div>
      <Extras m={m} data={data} t={t} items={evList.map((e) => ({ ...e, when: evWhen(e, m.sport) }))} />
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
  const tcRef = useRef(null)
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
  // One continuous trajectory per point (like broadcast/LMT trackers):
  // serve -> diagonal service box -> rally, every shot crosses the net, ball flies in a straight line in the
  // top-down view with height shown by size and shadow; the path stays drawn and the ball waits at the last
  // bounce until the real point result arrives. Then a new point starts from the server.
  const ballEl = useRef(null), shadowEl = useRef(null), trailEl = useRef(null), marksEl = useRef(null)
  const raf = useRef(0)
  const pointKey = `${ss[0]}:${ss[1]}:${server}:${phase.kind}`
  useEffect(() => {
    cancelAnimationFrame(raf.current)
    if (!live || phase.kind !== 'idle' || !ballEl.current) return
    const start = { x: server === 0 ? -3 : 103, y: srvY }
    let pts = [], shot = 0, t0 = 0, marks = [], restartT = 0
    const dur = (i) => (i === 0 ? 820 : 960)
    const build = () => { // serve into the diagonal service box, then the rally; every shot crosses the net
      pts = [start]; let side = server
      const n = 4 + Math.floor(Math.random() * 5)
      for (let i = 0; i < n; i++) {
        side = 1 - side
        if (i === 0) pts.push({ x: side === 1 ? 54 + Math.random() * 18 : 28 + Math.random() * 18, y: rcvY > 50 ? 54 + Math.random() * 30 : 16 + Math.random() * 30 })
        else pts.push({ x: side === 1 ? 72 + Math.random() * 24 : 4 + Math.random() * 24, y: 16 + Math.random() * 68 })
      }
      // the last ball runs past the player (winner) and leaves the court, so play never "freezes"
      const lp = pts[pts.length - 1]
      pts.push({ x: lp.x > 50 ? 112 : -12, y: Math.max(4, Math.min(96, lp.y + (Math.random() - 0.5) * 30)) })
      shot = 0; marks = []; t0 = performance.now() + 900
      if (marksEl.current) marksEl.current.innerHTML = ''
    }
    const draw = (now) => {
      const el = ballEl.current, sh = shadowEl.current, tr = trailEl.current
      if (!el || !sh || !tr) return
      if (restartT) { if (now < restartT) { raf.current = requestAnimationFrame(draw); return } restartT = 0; build() }
      if (now < t0) { // toss
        const k = 1 - Math.abs((now - (t0 - 900)) / 450 - 1)
        el.style.left = `${start.x}%`; el.style.top = `${start.y}%`; el.style.transform = `translate(-50%, calc(-50% - ${k * 22}px)) scale(${1 + k * 0.25})`
        sh.style.left = `${start.x}%`; sh.style.top = `${start.y}%`
        tr.setAttribute('points', '')
        raf.current = requestAnimationFrame(draw); return
      }
      const p0 = pts[shot], p1 = pts[shot + 1]
      const tt = Math.min(1, (now - t0) / dur(shot))
      const x = p0.x + (p1.x - p0.x) * tt, y = p0.y + (p1.y - p0.y) * tt
      const h = 4 * tt * (1 - tt)
      el.style.left = `${x}%`; el.style.top = `${y}%`; el.style.transform = `translate(-50%, calc(-50% - ${h * 24}px)) scale(${1 + h * 0.3})`
      sh.style.left = `${x}%`; sh.style.top = `${y}%`; sh.style.opacity = String(0.55 - h * 0.3)
      tr.setAttribute('points', [...pts.slice(Math.max(0, shot - 2), shot + 1), { x, y }].map((p) => `${p.x},${p.y}`).join(' '))
      if (tt >= 1) {
        marks.push(p1)
        if (marksEl.current) marksEl.current.innerHTML = marks.slice(-3).map((m) => `<circle cx="${m.x}" cy="${m.y}" r="0.9" />`).join('')
        shot += 1; t0 = now
        if (shot >= pts.length - 1) restartT = now + 700 // next rally right away: play continues until the real point arrives
      }
      raf.current = requestAnimationFrame(draw)
    }
    build()
    raf.current = requestAnimationFrame(draw)
    return () => cancelAnimationFrame(raf.current)
  }, [pointKey, live]) // eslint-disable-line react-hooks/exhaustive-deps
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
      <div ref={tcRef} className="court court-tennis tt-court" style={{ aspectRatio: courtAspect('tennis') }}>
        <CourtLines sport="tennis" />
        <div className="field" style={fieldStyle('tennis')}>
        {live && phase.kind !== 'big' && (
          <>
            <svg className="tn-trail" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              <polyline ref={trailEl} points="" fill="none" stroke="rgba(215,242,90,0.55)" strokeWidth="1.6" strokeDasharray="4 4" vectorEffect="non-scaling-stroke" strokeLinejoin="round" />
              <g ref={marksEl} fill="none" stroke="rgba(255,255,255,0.75)" strokeWidth="1.2" vectorEffect="non-scaling-stroke" />
            </svg>
            <span ref={shadowEl} className="tn-shadow" style={{ left: `${server === 0 ? -3 : 103}%`, top: `${srvY}%` }} />
            <span ref={ballEl} className="tn-ball" style={{ left: `${server === 0 ? -3 : 103}%`, top: `${srvY}%` }} />
          </>
        )}
        {tag(0)}{tag(1)}
        </div>
        {phase.kind === 'toast' && <div className="tt-toast">{evTitle}</div>}
        {phase.kind === 'big' && ev && (
          <div className="tt-big num">
            <div><span>{ev.t === 'game' ? per.length ? per[per.length - 1][0] : '' : (ev.ss || ss)[0]}</span><i className="c0b" /></div>
            <div><span>{ev.t === 'game' ? per.length ? per[per.length - 1][1] : '' : (ev.ss || ss)[1]}</span><i className="c1b" /></div>
          </div>
        )}
        {!live && <div className="tt-toast">{t('finished')}</div>}
      </div>
      <Extras m={m} data={data} t={t} items={evs.map((e) => ({ k: `${e.at}-${e.t}`, t: e.t === 'game' ? 'score' : e.t === 'bp' ? 'break' : 'ace', side: e.side, title: e.t === 'game' ? (e.brk ? t('ev_break') : t('ev_game')) : e.t === 'bp' ? t('ev_bp') : t('ev_point'), when: (e.ss || []).join(':') }))} />
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
