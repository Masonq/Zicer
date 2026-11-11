import { useEffect, useRef, useState, useId, lazy, Suspense } from 'react'
const Stage3D = lazy(() => import('../three/Stage3D'))
const webgl = (() => { try { const c = document.createElement('canvas'); return !!(c.getContext('webgl2') || c.getContext('webgl')) } catch { return false } })()
import { motion, AnimatePresence } from 'motion/react'
import confetti from 'canvas-confetti'
import { LOGO_SRC } from '../logoData'
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

const BALL_SPORTS = ['football', 'basketball', 'tennis', 'hockey', 'volleyball', 'waterpolo', 'handball', 'tabletennis', 'futsal', 'esports']
export function GoalIcon({ sport = 'football', own = false }) {
  return <span className={`ev-ico ball${own ? ' own' : ''}`}><img src={`/balls/${BALL_SPORTS.includes(sport) ? sport : 'football'}.webp`} alt="" width="22" height="22" /></span>
}

// match clock that keeps ticking between data updates (74' -> 74:41), like bookmakers' trackers
function useTicker(minute, live) {
  const [, force] = useState(0)
  const base = useRef({ min: null, at: 0 })
  const m = parseInt(minute, 10)
  if (!Number.isNaN(m) && base.current.min !== m) base.current = { min: m, at: Date.now() }
  useEffect(() => { if (!live) return; const id = setInterval(() => force((x) => x + 1), 1000); return () => clearInterval(id) }, [live])
  if (!live || Number.isNaN(m) || /\+/.test(String(minute))) return minute
  const sec = Math.min(59, Math.floor((Date.now() - base.current.at) / 1000))
  return `${Math.max(0, m - 1)}:${String(sec).padStart(2, '0')}`
}

// bookmaker-style attack zone: a band from midfield toward the goal ending in a chevron; deeper and warmer when dangerous
function AttackZone({ side, level }) {
  const depth = [70, 82, 93][level]
  const pts = `50,0 ${depth - 6},0 ${depth},50 ${depth - 6},100 50,100`
  const id = `az${side}${level}`
  const col = level === 2 ? ['#FFB547', '#E5544B'] : side === 0 ? ['#3D8EF0', '#3D8EF0'] : ['#8BD12F', '#8BD12F']
  return (
    <svg className={`atk-zone s${side}`} viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="50" x2={depth} y1="0" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor={col[0]} stopOpacity="0" /><stop offset=".55" stopColor={col[0]} stopOpacity={0.14 + level * 0.06} /><stop offset="1" stopColor={col[1]} stopOpacity={0.3 + level * 0.12} />
        </linearGradient>
        <pattern id={`${id}p`} width="6" height="100" patternUnits="userSpaceOnUse"><path d="M0 0 L3 50 L0 100" fill="none" stroke="#fff" strokeOpacity=".09" strokeWidth=".8" vectorEffect="non-scaling-stroke" /></pattern>
      </defs>
      <polygon points={pts} fill={`url(#${id})`} />
      <polygon points={pts} fill={`url(#${id}p)`} className="atk-flow" />
      <polyline points={`${depth - 6},0 ${depth},50 ${depth - 6},100`} fill="none" stroke={col[1]} strokeOpacity={0.55 + level * 0.15} strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
    </svg>
  )
}

// game clock from the live feed (22Bet "TS" = seconds played), ticking locally between updates.
// Shown the way each sport counts it: football / handball / futsal count up, hockey / basketball / water polo count down the period.
const CLOCK = { football: { up: true }, handball: { up: true }, futsal: { up: true, per: 1200 }, hockey: { per: 1200 }, basketball: { per: 600 }, waterpolo: { per: 480 } }
function useGameClock(sport, ts, seen, now, league, running) {
  const [, force] = useState(0)
  const fetched = useRef({ now: null, at: 0 })
  if (now !== fetched.current.now) fetched.current = { now, at: Date.now() / 1000 }
  useEffect(() => { if (!running || ts == null) return; const id = setInterval(() => force((v) => v + 1), 1000); return () => clearInterval(id) }, [running, ts])
  const cfg = CLOCK[sport]
  if (!cfg || ts == null || ts === '' || Number.isNaN(Number(ts))) return null
  const drift = running ? Math.min(120, Math.max(0, (now || 0) - (seen || now || 0)) + (Date.now() / 1000 - fetched.current.at)) : 0
  let e = Math.max(0, Number(ts) + drift)
  const per = sport === 'basketball' && /nba/i.test(league?.name || '') ? 720 : cfg.per
  const mmss = (v) => `${Math.floor(v / 60)}:${String(Math.floor(v % 60)).padStart(2, '0')}`
  if (cfg.up) return mmss(per ? e % per : e)
  const left = per - (e % per)
  return mmss(left >= per ? 0 : left)
}

function EvIcon({ e }) {
  if (e.type === 'Goal') return <GoalIcon own={e.own} />
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
  basketball: { w: 32, h: 19, fx: 2, fy: 2, fw: 28, fh: 15 },
  hockey: { w: 63, h: 35, fx: 1.5, fy: 2.5, fw: 60, fh: 30 },
  tennis: { w: 29.5, h: 14.4, fx: 2.865, fy: 1.715, fw: 23.77, fh: 10.97 },
  volleyball: { w: 22, h: 12, fx: 2, fy: 1.5, fw: 18, fh: 9 },
  waterpolo: { w: 30, h: 24, fx: 2.5, fy: 2, fw: 25, fh: 20 },
  handball: { w: 44, h: 24, fx: 2, fy: 2, fw: 40, fh: 20 },   // IHF court 40 x 20 m
  futsal: { w: 44, h: 24, fx: 2, fy: 2, fw: 40, fh: 20 },     // FIFA futsal 40 x 20 m
  tabletennis: { w: 3.54, h: 2.125, fx: 0.4, fy: 0.3, fw: 2.74, fh: 1.525 }, // ITTF table 2.74 x 1.525 m
}
export const fieldStyle = (sport) => { const c = COURT[sport] || COURT.football; const l = (c.fx / c.w) * 100, t = (c.fy / c.h) * 100, w = (c.fw / c.w) * 100, h = (c.fh / c.h) * 100; return { left: `${l}%`, top: `${t}%`, width: `${w}%`, height: `${h}%`, transformOrigin: `${((50 - l) / w) * 100}% ${((100 - t) / h) * 100}%` } }
export const courtAspect = (sport) => { const c = COURT[sport] || COURT.football; return `${c.w} / ${c.h}` }
const WL = { stroke: '#fff', strokeOpacity: 0.72, fill: 'none', vectorEffect: 'non-scaling-stroke', strokeWidth: 1.6 }
export const fmtClock = (c) => { const v = String(c || '').trim(); if (/^\d+(\.\d+)?$/.test(v)) { const sec = Math.floor(parseFloat(v)); return `0:${String(sec).padStart(2, '0')}` } return v }
export function CourtLines({ sport }) {
  const uid = useId().replace(/[^a-z0-9]/gi, '')
  const c = COURT[sport] || COURT.football
  const { fx: X, fy: Y, fw: W, fh: H } = c
  const vb = `0 0 ${c.w} ${c.h}`
  if (sport === 'football') {
    const cy = Y + H / 2
    const stripes = Array.from({ length: 12 }, (_, i) => <rect key={i} x={X + (W / 12) * i} y={Y} width={W / 12} height={H} fill={i % 2 ? '#2C5E43' : '#29583F'} />)
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
        <rect width={c.w} height={c.h} fill="#24503A" />
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
    // FIBA court 28 x 15 m on maple planks, apron, benches, scorer's table, baseline boards, centre logo
    const cy = Y + H / 2, cx = X + W / 2
    const paint = '#3F5272'
    const planks = Array.from({ length: 46 }, (_, i) => i)
    const W2 = { ...WL, strokeWidth: 1.4 }
    const half = (dir) => {
      const bx = dir === 1 ? X : X + W
      const s = dir
      const hoop = bx + s * 1.575
      const ft = bx + s * 5.8
      const sweep = dir === 1 ? 1 : 0
      // lane space marks (FIBA): block at 1.75 m, then neutral zone and marks every 0.85 m, outward 0.1 m
      const marks = [1.75, 2.85, 3.7, 4.55]
      return (
        <g key={dir}>
          <rect x={dir === 1 ? bx : bx - 5.8} y={cy - 2.45} width={5.8} height={4.9} fill={paint} fillOpacity="0.92" />
          <rect x={dir === 1 ? bx : bx - 5.8} y={cy - 2.45} width={5.8} height={4.9} {...W2} />
          {marks.map((d, i) => [-1, 1].map((sy) => (
            <rect key={`${d}${sy}`} x={bx + s * d - (i === 0 ? 0.05 : 0.025)} y={sy < 0 ? cy - 2.45 - 0.22 : cy + 2.45} width={i === 0 ? 0.14 : 0.08} height={0.22} fill="#F2F2F0" fillOpacity="0.85" />
          )))}
          {/* free-throw circle: solid outside the lane, dashed inside */}
          <path d={`M ${ft} ${cy - 1.8} A 1.8 1.8 0 0 ${sweep} ${ft} ${cy + 1.8}`} {...W2} />
          <path d={`M ${ft} ${cy - 1.8} A 1.8 1.8 0 0 ${1 - sweep} ${ft} ${cy + 1.8}`} {...W2} strokeDasharray="4 4" />
          {/* three-point line with corner straights */}
          <path d={`M ${bx} ${cy - 6.6} H ${bx + s * 2.99} A 6.75 6.75 0 0 ${sweep} ${bx + s * 2.99} ${cy + 6.6} H ${bx}`} {...W2} />
          {/* no-charge semi-circle */}
          <path d={`M ${bx + s * 1.2} ${cy - 1.25} H ${hoop} A 1.25 1.25 0 0 ${sweep} ${hoop} ${cy + 1.25} H ${bx + s * 1.2}`} {...W2} />
          {/* backboard, support, ring and net */}
          <rect x={dir === 1 ? bx + 1.2 - 0.07 : bx - 1.2 - 0.07} y={cy - 0.9} width={0.14} height={1.8} fill="#EEF1F3" />
          <rect x={dir === 1 ? bx - 0.9 : bx - 1.2} y={cy - 0.12} width={2.1} height={0.24} fill="#3A4249" />
          <circle cx={hoop} cy={cy} r={0.3} fill="rgba(255,255,255,0.18)" stroke="#E0E3E5" strokeWidth="0.03" strokeDasharray="0.06 0.05" />
          <circle cx={hoop} cy={cy} r={0.225} fill="none" stroke="#C8592A" strokeWidth="0.07" />
          {/* throw-in marks on the sidelines */}
          <line x1={bx + s * 8.325} y1={Y} x2={bx + s * 8.325} y2={Y - 0.35} stroke="#F2F2F0" strokeOpacity="0.8" strokeWidth="0.06" />
        </g>
      )
    }
    return (
      <svg viewBox={vb} className="court-svg" aria-hidden="true">
        <defs>
          <filter id={`${uid}grain`} x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="0.03 1.6" numOctaves="2" seed="7" /><feColorMatrix values="0 0 0 0 0.35  0 0 0 0 0.2  0 0 0 0 0.08  0 0 0 0.16 0" /></filter>
          <linearGradient id={`${uid}light`} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#fff" stopOpacity="0.06" /><stop offset="0.5" stopColor="#fff" stopOpacity="0" /><stop offset="1" stopColor="#000" stopOpacity="0.08" /></linearGradient>
        </defs>
        <rect width={c.w} height={c.h} fill="#1A1F24" />
        <rect x={X - 1.2} y={Y - 1.2} width={W + 2.4} height={H + 2.4} fill="#2E4A40" />
        {/* scorer's table and benches */}
        <rect x={cx - 3} y={Y - 1.9} width={6} height={0.6} rx="0.1" fill="#232B33" />
        <rect x={cx - 11} y={Y + H + 1.35} width={7} height={0.5} rx="0.1" fill="#232B33" />
        <rect x={cx + 4} y={Y + H + 1.35} width={7} height={0.5} rx="0.1" fill="#232B33" />
        {/* maple planks with grain */}
        {planks.map((i) => <rect key={i} x={X} y={Y + (H / planks.length) * i} width={W} height={H / planks.length + 0.01} fill={['#C9A079', '#C29872', '#CDA57E', '#BF946E'][(i * 7) % 4]} />)}
        <rect x={X} y={Y} width={W} height={H} filter={`url(#${uid}grain)`} />
        <rect x={X} y={Y} width={W} height={H} fill={`url(#${uid}light)`} />
        <rect x={X} y={Y} width={W} height={H} {...WL} />
        <line x1={cx} y1={Y} x2={cx} y2={Y + H} {...WL} />
        <circle cx={cx} cy={cy} r={1.8} fill={paint} fillOpacity="0.85" /><circle cx={cx} cy={cy} r={1.8} {...WL} strokeWidth={1.4} />
        <image href={LOGO_SRC} x={cx - 1.3} y={cy - 0.65} width={2.6} height={1.3} opacity="0.55" preserveAspectRatio="xMidYMid meet" />
        {[1, -1].map(half)}
      </svg>
    )
  }
  if (sport === 'hockey') {
    // IIHF / NHL rink 60 x 30 m with arena around it: boards with ad panels, benches, penalty boxes, centre-ice logo
    const cy = Y + H / 2, R = 8.5, cx = X + W / 2
    const red = '#B23A40', blue = '#2D57A3'
    const clip = `rk${uid}`
    const endSpot = [[X + 10, cy - 7], [X + 10, cy + 7], [X + W - 10, cy - 7], [X + W - 10, cy + 7]]
    const midSpot = [[X + 24.36, cy - 7], [X + 24.36, cy + 7], [X + W - 24.36, cy - 7], [X + W - 24.36, cy + 7]]
    const goal = (dir) => {
      const gx = dir === 1 ? X + 4 : X + W - 4
      const s = dir
      return (
        <g key={dir}>
          <path d={`M ${gx} ${cy - 1.8} A 1.8 1.8 0 0 ${dir === 1 ? 1 : 0} ${gx} ${cy + 1.8} Z`} fill="#9DB6D3" fillOpacity="0.55" stroke={red} strokeWidth="0.1" />
          <rect x={dir === 1 ? gx - 1.12 : gx} y={cy - 0.915} width={1.12} height={1.83} rx="0.3" fill={`url(#${uid}net)`} stroke={red} strokeWidth="0.14" />
          <path d={`M ${gx} ${cy - 3.35} L ${gx - s * 4} ${cy - 4.25} M ${gx} ${cy + 3.35} L ${gx - s * 4} ${cy + 4.25}`} stroke={red} strokeWidth="0.08" fill="none" />
        </g>
      )
    }
    const ads = Array.from({ length: 10 }, (_, i) => i)
    return (
      <svg viewBox={vb} className="court-svg" aria-hidden="true">
        <defs>
          <clipPath id={clip}><rect x={X} y={Y} width={W} height={H} rx={R} /></clipPath>
          <radialGradient id={`${uid}ice`} cx="50%" cy="40%" r="75%"><stop offset="0" stopColor="#F1F4F6" /><stop offset="0.7" stopColor="#E4E9ED" /><stop offset="1" stopColor="#D6DDE3" /></radialGradient>
          <pattern id={`${uid}net`} width="0.22" height="0.22" patternUnits="userSpaceOnUse"><rect width="0.22" height="0.22" fill="#E9EDF0" /><path d="M0 0 L0.22 0.22 M0.22 0 L0 0.22" stroke="#9AA4AC" strokeWidth="0.02" /></pattern>
          <filter id={`${uid}scr`} x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="0.9 0.06" numOctaves="2" seed="4" /><feColorMatrix values="0 0 0 0 0.55  0 0 0 0 0.6  0 0 0 0 0.65  0 0 0 0.10 0" /></filter>
        </defs>
        <rect width={c.w} height={c.h} fill="#161B20" />
        {/* benches and penalty boxes */}
        <rect x={cx - 11} y={Y + H + 0.6} width={8} height={1.2} rx="0.2" fill="#232B33" stroke="#39434C" strokeWidth="0.06" />
        <rect x={cx + 3} y={Y + H + 0.6} width={8} height={1.2} rx="0.2" fill="#232B33" stroke="#39434C" strokeWidth="0.06" />
        <rect x={cx - 5} y={Y - 1.8} width={3.6} height={1.2} rx="0.2" fill="#232B33" stroke="#39434C" strokeWidth="0.06" />
        <rect x={cx + 1.4} y={Y - 1.8} width={3.6} height={1.2} rx="0.2" fill="#232B33" stroke="#39434C" strokeWidth="0.06" />
        {/* dasher boards with ad panels */}
        <rect x={X - 0.4} y={Y - 0.4} width={W + 0.8} height={H + 0.8} rx={R + 0.4} fill="#2B333A" />
        {ads.map((i) => <g key={i}><rect x={X + 9 + i * 4.3} y={Y - 0.36} width={3.9} height={0.32} fill={i % 2 ? '#3A444D' : '#323B43'} /><rect x={X + 9 + i * 4.3} y={Y + H + 0.04} width={3.9} height={0.32} fill={i % 2 ? '#323B43' : '#3A444D'} /></g>)}
        <rect x={X} y={Y} width={W} height={H} rx={R} fill={`url(#${uid}ice)`} />
        <g clipPath={`url(#${clip})`}>
          <rect x={X} y={Y} width={W} height={H} filter={`url(#${uid}scr)`} />
          <rect x={X + 4 - 0.05} y={Y} width={0.1} height={H} fill={red} />
          <rect x={X + W - 4 - 0.05} y={Y} width={0.1} height={H} fill={red} />
          <rect x={X + 22.86 - 0.3} y={Y} width={0.6} height={H} fill={blue} />
          <rect x={X + W - 22.86 - 0.3} y={Y} width={0.6} height={H} fill={blue} />
          <rect x={cx - 0.3} y={Y} width={0.6} height={H} fill={red} />
          <image href={LOGO_SRC} x={cx - 3.2} y={cy - 1.6} width={6.4} height={3.2} opacity="0.22" preserveAspectRatio="xMidYMid meet" />
          <circle cx={cx} cy={cy} r={4.5} fill="none" stroke={blue} strokeWidth="0.1" />
          <circle cx={cx} cy={cy} r={0.3} fill={blue} />
          <path d={`M ${cx - 3} ${Y + H} A 3 3 0 0 1 ${cx + 3} ${Y + H}`} fill="none" stroke={red} strokeWidth="0.1" />
          {endSpot.map(([x0, y0]) => (
            <g key={`e${x0}-${y0}`}>
              <circle cx={x0} cy={y0} r={4.5} fill="none" stroke={red} strokeWidth="0.1" />
              <circle cx={x0} cy={y0} r={0.3} fill={red} />
              {[-1, 1].map((sy) => [-0.9, 0.9].map((dx) => <line key={`${sy}${dx}`} x1={x0 + dx} y1={y0 + sy * 4.5} x2={x0 + dx} y2={y0 + sy * 5.1} stroke={red} strokeWidth="0.1" />))}
              {[-1, 1].map((sx) => [-1, 1].map((sy) => <path key={`${sx}${sy}`} d={`M ${x0 + sx * 0.6} ${y0 + sy * 0.45} h ${sx * 1.2} M ${x0 + sx * 0.6} ${y0 + sy * 0.45} v ${sy * 0.9}`} stroke={red} strokeWidth="0.08" fill="none" />))}
            </g>
          ))}
          {midSpot.map(([x0, y0]) => <circle key={`m${x0}-${y0}`} cx={x0} cy={y0} r={0.3} fill={red} />)}
          {goal(1)}{goal(-1)}
        </g>
        <rect x={X} y={Y} width={W} height={H} rx={R} fill="none" stroke="#151A1F" strokeWidth="0.12" />
      </svg>
    )
  }
  if (sport === 'tennis') {
    const al = 1.37
    return (
      <svg viewBox={vb} className="court-svg" aria-hidden="true">
        <rect width={c.w} height={c.h} fill="#3B5E50" />
        <rect x={X} y={Y} width={W} height={H} fill="#30577E" />
        <rect x={X} y={Y} width={W} height={H} {...WL} />
        <line x1={X} y1={Y + al} x2={X + W} y2={Y + al} {...WL} /><line x1={X} y1={Y + H - al} x2={X + W} y2={Y + H - al} {...WL} />
        <line x1={X + W / 2 - 6.4} y1={Y + al} x2={X + W / 2 - 6.4} y2={Y + H - al} {...WL} /><line x1={X + W / 2 + 6.4} y1={Y + al} x2={X + W / 2 + 6.4} y2={Y + H - al} {...WL} />
        <line x1={X + W / 2 - 6.4} y1={Y + H / 2} x2={X + W / 2 + 6.4} y2={Y + H / 2} {...WL} />
        <line x1={X} y1={Y + H / 2} x2={X + 0.3} y2={Y + H / 2} {...WL} /><line x1={X + W - 0.3} y1={Y + H / 2} x2={X + W} y2={Y + H / 2} {...WL} />
        <line x1={X + W / 2} y1={Y - 0.9} x2={X + W / 2} y2={Y + H + 0.9} stroke="#fff" strokeWidth="2.6" strokeDasharray="1 1.4" vectorEffect="non-scaling-stroke" />
      </svg>
    )
  }
  if (sport === 'handball') {
    // IHF: 6 m goal-area line (quarter circles + straight 3 m), 9 m free-throw line dashed, 7 m line, 4 m goalkeeper line
    const cy = Y + H / 2
    const area = (dir, r, dash) => {
      const gx = dir === 1 ? X : X + W, s = dir
      return <path d={`M ${gx} ${cy - 1.5 - r} A ${r} ${r} 0 0 ${dir === 1 ? 1 : 0} ${gx + s * r} ${cy - 1.5} L ${gx + s * r} ${cy + 1.5} A ${r} ${r} 0 0 ${dir === 1 ? 1 : 0} ${gx} ${cy + 1.5 + r}`} {...WL} strokeDasharray={dash} />
    }
    const side = (dir) => {
      const gx = dir === 1 ? X : X + W, s = dir
      return (
        <g key={dir}>
          <path d={`M ${gx} ${cy - 7.5} A 6 6 0 0 ${dir === 1 ? 1 : 0} ${gx + s * 6} ${cy - 1.5} L ${gx + s * 6} ${cy + 1.5} A 6 6 0 0 ${dir === 1 ? 1 : 0} ${gx} ${cy + 7.5} Z`} fill="#2F6FB5" fillOpacity="0.85" />
          {area(dir, 6)}{area(dir, 9, '5 5')}
          <line x1={gx + s * 7} y1={cy - 0.5} x2={gx + s * 7} y2={cy + 0.5} {...WL} /><line x1={gx + s * 4} y1={cy - 0.075} x2={gx + s * 4} y2={cy + 0.075} {...WL} />
          <rect x={dir === 1 ? gx - 1 : gx} y={cy - 1.5} width={1} height={3} fill="rgba(255,255,255,.18)" stroke="#E5544B" strokeWidth="0.12" />
        </g>
      )
    }
    return (
      <svg viewBox={vb} className="court-svg" aria-hidden="true">
        <rect width={c.w} height={c.h} fill="#1F4A7A" />
        <rect x={X} y={Y} width={W} height={H} fill="#C9884E" />
        {Array.from({ length: 20 }, (_, i) => <rect key={i} x={X} y={Y + i} width={W} height={0.5} fill="#000" opacity="0.035" />)}
        <rect x={X} y={Y} width={W} height={H} {...WL} />
        <line x1={X + W / 2} y1={Y} x2={X + W / 2} y2={Y + H} {...WL} />
        {side(1)}{side(-1)}
      </svg>
    )
  }
  if (sport === 'futsal') {
    // FIFA futsal: penalty area = 6 m quarter circles joined by 3.16 m, penalty marks at 6 m and 10 m, centre circle r 3 m
    const cy = Y + H / 2
    const side = (dir) => {
      const gx = dir === 1 ? X : X + W, s = dir
      return (
        <g key={dir}>
          <path d={`M ${gx} ${cy - 7.58} A 6 6 0 0 ${dir === 1 ? 1 : 0} ${gx + s * 6} ${cy - 1.58} L ${gx + s * 6} ${cy + 1.58} A 6 6 0 0 ${dir === 1 ? 1 : 0} ${gx} ${cy + 7.58}`} {...WL} />
          <circle cx={gx + s * 6} cy={cy} r={0.12} fill="#fff" /><circle cx={gx + s * 10} cy={cy} r={0.12} fill="#fff" />
          <rect x={dir === 1 ? gx - 1 : gx} y={cy - 1.5} width={1} height={3} fill="rgba(255,255,255,.2)" stroke="#fff" strokeWidth="0.1" />
        </g>
      )
    }
    return (
      <svg viewBox={vb} className="court-svg" aria-hidden="true">
        <rect width={c.w} height={c.h} fill="#1C3F5E" />
        <rect x={X} y={Y} width={W} height={H} fill="#2F7D58" />
        {Array.from({ length: 8 }, (_, i) => <rect key={i} x={X + i * 5} y={Y} width={2.5} height={H} fill="#fff" opacity="0.03" />)}
        <rect x={X} y={Y} width={W} height={H} {...WL} />
        <line x1={X + W / 2} y1={Y} x2={X + W / 2} y2={Y + H} {...WL} /><circle cx={X + W / 2} cy={cy} r={3} {...WL} />
        {side(1)}{side(-1)}
      </svg>
    )
  }
  if (sport === 'tabletennis') {
    return (
      <svg viewBox={vb} className="court-svg" aria-hidden="true">
        <rect width={c.w} height={c.h} fill="#7A2E2E" />
        <rect x={X + 0.03} y={Y + 0.04} width={W} height={H} fill="#000" opacity="0.25" />
        <rect x={X} y={Y} width={W} height={H} fill="#1F5FA8" />
        <rect x={X} y={Y} width={W} height={H} fill="none" stroke="#fff" strokeWidth="0.02" />
        <line x1={X} y1={Y + H / 2} x2={X + W} y2={Y + H / 2} stroke="#fff" strokeWidth="0.006" />
        <line x1={X + W / 2} y1={Y - 0.15} x2={X + W / 2} y2={Y + H + 0.15} stroke="#F4F4F2" strokeWidth="0.03" />
        <rect x={X + W / 2 - 0.02} y={Y - 0.18} width={0.04} height={0.06} fill="#222" /><rect x={X + W / 2 - 0.02} y={Y + H + 0.12} width={0.04} height={0.06} fill="#222" />
      </svg>
    )
  }
  if (sport === 'volleyball') {
    return (
      <svg viewBox={vb} className="court-svg" aria-hidden="true">
        <rect width={c.w} height={c.h} fill="#2E5878" />
        <rect x={X} y={Y} width={W} height={H} fill="#B9784A" />
        <rect x={X} y={Y} width={W} height={H} {...WL} />
        <line x1={X + 6} y1={Y} x2={X + 6} y2={Y + H} {...WL} /><line x1={X + 12} y1={Y} x2={X + 12} y2={Y + H} {...WL} />
        <line x1={X + W / 2} y1={Y - 1} x2={X + W / 2} y2={Y + H + 1} stroke="#fff" strokeWidth="3" vectorEffect="non-scaling-stroke" />
        <circle cx={X + W / 2} cy={Y - 1} r={0.22} fill="#fff" /><circle cx={X + W / 2} cy={Y + H + 1} r={0.22} fill="#fff" />
      </svg>
    )
  }
  if (sport === 'waterpolo') {
    // flat bookmaker-style pool (World Aquatics 25 x 20 m): lane stripes, white goal & half lines, red 2 m, yellow 5 m, goals with nets
    const cy = Y + H / 2, cx = X + W / 2
    const across = (x, col, dash) => <line key={`${x}${col}`} x1={x} y1={Y} x2={x} y2={Y + H} stroke={col} strokeWidth="1.6" vectorEffect="non-scaling-stroke" strokeDasharray={dash} opacity="0.85" />
    const goal = (dir) => {
      const gx = dir === 1 ? X : X + W
      return (
        <g key={dir}>
          <rect x={dir === 1 ? gx - 0.9 : gx} y={cy - 1.5} width={0.9} height={3} fill={`url(#${uid}wpnet)`} stroke="#fff" strokeWidth="0.1" />
        </g>
      )
    }
    return (
      <svg viewBox={vb} className="court-svg" aria-hidden="true">
        <defs>
          <pattern id={`${uid}wpnet`} width="0.3" height="0.3" patternUnits="userSpaceOnUse"><path d="M0 0 L0.3 0.3 M0.3 0 L0 0.3" stroke="#fff" strokeWidth="0.03" opacity="0.7" /></pattern>
        </defs>
        <rect width={c.w} height={c.h} fill="#123c5c" />
        <rect x={X} y={Y} width={W} height={H} fill="#1f6fa8" />
        {Array.from({ length: 8 }, (_, i) => <rect key={i} x={X} y={Y + i * 2.5} width={W} height={1.25} fill="#ffffff" opacity="0.045" />)}
        <rect x={X} y={Y} width={W} height={H} fill="none" stroke="#fff" strokeWidth="1.6" vectorEffect="non-scaling-stroke" opacity="0.9" />
        {across(cx, '#ffffff')}
        {[X + 2, X + W - 2].map((x) => across(x, '#E5544B'))}
        {[X + 5, X + W - 5].map((x) => across(x, '#F2C230', '6 4'))}
        <circle cx={cx} cy={cy} r={0.25} fill="#fff" />
        {[X + 5, X + W - 5].map((x) => <circle key={x} cx={x} cy={cy} r={0.2} fill="#F2C230" />)}
        {goal(1)}{goal(-1)}
      </svg>
    )
  }
  return null
}

const XPOS = { danger: 84, attack: 66, shot_on: 93, shot_off: 90, corner: 97, penalty: 88, p2: 88, p3: 82, ft: 88, score: 92, ace: 75, break: 70, df: 40 }
export function xevLabel(e, sport, t) {
  if (e.t === 'point' && sport !== 'tennis') return t('ev_vpoint')
  if (e.t === 'score') {
    if (['football', 'hockey', 'waterpolo', 'handball', 'futsal'].includes(sport)) return t('ev_goal')
    if (sport === 'tennis' || sport === 'volleyball' || sport === 'tabletennis') return t('ev_set')
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
    if (!mom.length) {
      // no momentum curve (smaller matches): keep showing the side that attacks, from the live feed of the last minutes
      const nowS = data.now || Date.now() / 1000
      const recentX = [...xev].reverse().find((e) => ['danger', 'attack', 'shot_on', 'shot_off', 'corner'].includes(e.t) && nowS - e.at < 240)
      if (recentX) {
        const ageX = nowS - recentX.at
        const lvl = recentX.t === 'attack' ? (ageX < 120 ? 1 : 0) : ageX < 120 ? 2 : 1
        const base = [62, 72, 84][lvl]
        return { x: recentX.side === 0 ? base : 100 - base, title: [t('possession'), t('attack'), t('dangerAttack')][lvl], sub: recentX.side === 0 ? H : A, flash: false }
      }
      return { x: 50, title: t('live'), sub: m.minute ? `${m.minute}` : '', flash: false }
    }
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
  const goal = { basketball: [93.5, 50], hockey: [92.5, 50], waterpolo: [95, 50], football: [96, 50], handball: [97, 50], futsal: [97, 50] }[sport] || [92, 50]
  const zone = { basketball: [58, 86], hockey: [56, 88], waterpolo: [60, 88], handball: [62, 84], futsal: st.strong ? [68, 90] : [55, 80], football: st.strong ? [70, 92] : [52, 76] }[sport] || [55, 85]
  if (st.shot) {
    // after a shot possession changes (basketball / hockey / water polo), football keeps pressure from data
    st.shot = false
    if (sport !== 'football' && st.dataAtt == null) st.att = st.att === 0 ? 1 : 0
    return { x: dir(rnd(zone[0], zone[0] + 10)), y: rnd(30, 70), hop: false }
  }
  if (st.n % (sport === 'hockey' ? 5 : 4) === 0) { st.shot = true; return { x: dir(goal[0]), y: goal[1] + rnd(-6, 6), hop: sport === 'basketball' } }
  return { x: dir(rnd(zone[0], zone[1])), y: rnd(18, 82), hop: sport === 'basketball' || sport === 'volleyball' }
}

const TOAST = ['score', 'point', 'shot_on', 'shot_off', 'corner', 'penalty', 'red', 'yellow', 'pen2', 'p3', 'break', 'ace']
const EVSPOT = { point: [76, 50], score: [95, 50], shot_on: [93, 50], shot_off: [93, 30], corner: [97, 6], penalty: [86, 50], p3: [80, 50], ace: [80, 50] }

// Bookmaker-style tracker for football, basketball, hockey, volleyball, water polo:
// possession wedge + "team / with the ball" card, event cards with icons, ball at the place of action.
const SCORE_ICON = { football: IconBallFootball, hockey: IconTarget, waterpolo: IconTarget, basketball: IconBallBasketball, volleyball: IconBallVolleyball, tennis: IconBallTennis }
const EV_ICON = {
  break: IconBallTennis, ace: IconBallTennis, timeout: IconPlayerPause, point: IconBallVolleyball,
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
      {live && tot > 0 && (
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
  if (e.when) return e.when
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
const SEG = { football: [1300, 2000], hockey: [520, 820], basketball: [650, 1000], waterpolo: [1000, 1500], volleyball: [1050, 1250], handball: [700, 1100], futsal: [800, 1300], tabletennis: [380, 520] }
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
      if (ballEl.current) { ballEl.current.style.left = `${p.x}%`; ballEl.current.style.top = '50%'; ballEl.current.style.transform = `translate(-50%, -50%)` }
      if (shadowEl.current) { shadowEl.current.style.left = `${p.x}%`; shadowEl.current.style.top = '50%'; shadowEl.current.style.opacity = '0.45' }
    }
    const next = () => {
      const { att: a, intensity: k, sport: sp, server: srv } = cfg.current
      const [d0, d1] = SEG[sp] || [900, 1400]
      if (sp === 'volleyball' || sp === 'tabletennis') { // rally over the net, arcs, until the real point arrives
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
    if ((cfg.current.sport === 'volleyball' || cfg.current.sport === 'tabletennis') && cfg.current.server !== null) { e.pos = { x: cfg.current.server === 0 ? 6 : 94, y: 50 }; e.side = cfg.current.server }
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
        if (trailEl.current) trailEl.current.setAttribute('points', e.trail.map((q) => `${q.x.toFixed(2)},50`).join(' '))
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
      rippleEl.current.style.left = `${eventSpot.x}%`; rippleEl.current.style.top = '50%'
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
  // volleyball: the team that won the last rally serves (feed value if present, otherwise from the last point)
  const lastPt = (m.sport === 'volleyball' || m.sport === 'tabletennis') ? [...(data.xev || [])].reverse().find((e) => e.t === 'point' || e.t === 'score') : null
  const server = (m.sport === 'volleyball' || m.sport === 'tabletennis') ? (x.server ? x.server - 1 : lastPt ? lastPt.side : null) : null
  const plays = data.plays || []
  // ---- events (real): basketball play-by-play or the live stats feed
  const evList = m.sport === 'basketball' && plays.length
    ? plays.map((p, i) => ({ k: `${p.q}-${p.clock}-${i}`, t: p.pts ? 'score' : p.pt === 'CM' || p.pt === 'CMU' || p.pt === 'CMT' ? 'foul' : p.pt === 'TOUT' ? 'timeout' : null, side: p.home ? 0 : 1, title: t.lang === 'ru' ? p.ru : t.serb(p.sr), sub: p.player, pts: p.pts, clock: p.clock ? `Q${p.q} ${p.clock}` : '' })).filter((e) => e.t)
    : (data.xev || []).filter((e) => TOAST.includes(e.t) || e.t === 'foul').map((e) => ({ k: `${e.at}-${e.t}-${e.side}`, t: e.t, side: e.side, title: xevLabel(e, m.sport, t), sub: e.ps ? `${e.ps[0]}:${e.ps[1]}` : '', at: e.at, ts: e.ts, when: e.ps ? `${e.ps[0]}:${e.ps[1]}` : '' }))
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
        <div className="tt-sets num bb-sub">{bonusDots(fouls[0])}<span>{clock && /^\d{1,2}:\d{2}$/.test(String(clock.t).trim()) ? `Q${clock.q} ${String(clock.t).trim()}` : periodTxt}</span>{bonusDots(fouls[1])}</div>
      ) : (
        <div className="tt-sets num">{[periodTxt, m.sport === 'football' ? '' : scoresTxt].filter(Boolean).join('   ') || '\u00a0'}</div>
      )}
      <div className="trk-status">
        <AnimatePresence mode="wait" initial={false}>
          {card ? (
            <motion.div key={(card.title || '') + card.side} className={`trk-st s${card.side ?? 'n'}`} initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }} transition={{ duration: 0.18 }}>
              {card.icon ? <span className="trk-st-ico"><EvIconBig type={card.icon} sport={m.sport} /></span> : null}
              <span className="trk-st-txt ellip">{card.side !== null && <b>{names[card.side]}</b>}{card.title}{card.sub ? <small>{card.sub}</small> : null}</span>
              {card.arrow && card.side !== null && <span className={`trk-st-arrow ${card.side === 0 ? 'r' : 'l'}`} />}
            </motion.div>
          ) : <motion.div key="none" className="trk-st muted-st" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>{live ? t('live') : t('finished')}</motion.div>}
        </AnimatePresence>
      </div>
      <div ref={courtRef} className={`court court-${m.sport} tt-court`} style={{ aspectRatio: courtAspect(m.sport) }}>
        <CourtLines sport={m.sport} />
        <span className={`court-tex tex-${m.sport}`} aria-hidden="true" /><span className="court-light" aria-hidden="true" /><span className="court-depth" aria-hidden="true"><i className="cd-boards" /><i className="cd-front" /></span>
        <div className="arena-field" style={fieldStyle(m.sport)}>
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
    let pts = [], shot = 0, t0 = 0, marks = [], side = server
    const dur = (i) => (i === 0 ? 820 : 960)
    const nextShot = () => { // every shot crosses the net; the rally goes on until the real point arrives
      side = 1 - side
      return { x: side === 1 ? 70 + Math.random() * 26 : 4 + Math.random() * 26, y: 14 + Math.random() * 72 }
    }
    const build = () => { // one serve per point: toss, serve into the diagonal service box
      side = 1 - server
      pts = [start, { x: side === 1 ? 54 + Math.random() * 18 : 28 + Math.random() * 18, y: rcvY > 50 ? 54 + Math.random() * 30 : 16 + Math.random() * 30 }]
      shot = 0; marks = []; t0 = performance.now() + 900
      if (marksEl.current) marksEl.current.innerHTML = ''
    }
    const draw = (now) => {
      const el = ballEl.current, sh = shadowEl.current, tr = trailEl.current
      if (!el || !sh || !tr) return
      if (now < t0) { // toss
        const k = 1 - Math.abs((now - (t0 - 900)) / 450 - 1)
        el.style.left = `${start.x}%`; el.style.top = '50%'; el.style.transform = `translate(-50%, -50%)`
        sh.style.left = `${start.x}%`; sh.style.top = '50%'
        tr.setAttribute('points', '')
        raf.current = requestAnimationFrame(draw); return
      }
      const p0 = pts[shot], p1 = pts[shot + 1]
      const tt = Math.min(1, (now - t0) / dur(shot))
      const x = p0.x + (p1.x - p0.x) * tt, y = p0.y + (p1.y - p0.y) * tt
      const h = 4 * tt * (1 - tt)
      el.style.left = `${x}%`; el.style.top = '50%'; el.style.transform = `translate(-50%, -50%)`
      sh.style.left = `${x}%`; sh.style.top = '50%'; sh.style.opacity = '0.45'
      tr.setAttribute('points', [...pts.slice(Math.max(0, shot - 2), shot + 1), { x, y }].map((p) => `${p.x},50`).join(' '))
      if (tt >= 1) {
        marks.push(p1); if (marks.length > 3) marks.shift()
        if (marksEl.current) marksEl.current.innerHTML = marks.map((m) => `<circle cx="${m.x}" cy="${m.y}" r="0.9" />`).join('')
        pts.push(nextShot()); if (pts.length > 8) { pts.shift(); shot -= 1 }
        shot += 1; t0 = now
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
        <span className="court-tex tex-tennis" aria-hidden="true" /><span className="court-light" aria-hidden="true" /><span className="court-depth" aria-hidden="true"><i className="cd-boards" /><i className="cd-front" /></span>
        <div className="arena-field" style={fieldStyle('tennis')}>
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

// =====================================================================================
// Live arena: the court is "directed" like a broadcast. Play loops until a real scoring
// event arrives; then the play is finished on the court (final shot into the court / net /
// hoop), a short whistle pause, a banner slides in and only then the scoreboard changes.
// Several events in one update are played one after another.
// =====================================================================================
const SCORING = new Set(['score', 'point', 'game'])
const HOOP_X = (1.575 / 28) * 100

// Travel time from real distance (metres) and a speed per sport that reads well on a small screen:
// passes / rally shots / shots on goal. Long passes take longer, short ones shorter.
const SPEED = { football: [9, 16], hockey: [8, 14], basketball: [5.5, 8], waterpolo: [4.5, 8], tennis: [17, 24], volleyball: [8, 12], handball: [7, 12], futsal: [8, 14], tabletennis: [6, 11] }
const MIN_MS = { football: 1100, hockey: 800, basketball: 800, waterpolo: 1200, tennis: 1000, volleyball: 1200 }
function travelMs(sport, a, b, kind = 'pass') {
  const c = COURT[sport] || COURT.football
  const dx = ((b.x - a.x) / 100) * c.fw, dy = ((b.y - a.y) / 100) * c.fh
  const d = Math.hypot(dx, dy)
  const [pass, shot] = SPEED[sport] || [9, 14]
  const min = MIN_MS[sport] ?? 300 // sports added later (table tennis, handball, futsal) had no minimum: NaN froze the ball
  return Math.max(kind === 'shot' ? min * 0.7 : min, (d / (kind === 'shot' ? shot : pass)) * 1000)
}
function useArenaEngine(cfgNow) {
  const ballEl = useRef(null), shadowEl = useRef(null), trailEl = useRef(null), rippleEl = useRef(null), marksEl = useRef(null)
  const cfg = useRef(cfgNow); cfg.current = cfgNow
  const api = useRef(null)
  const e = useRef({ pos: { x: 50, y: 50 }, from: { x: 50, y: 50 }, to: { x: 50, y: 50 }, t0: 0, dur: 1, hop: 0, side: 0, toss: 0, stopped: false, strike: null, trail: [], lastTrail: 0, marks: [], shot: 0 })
  useEffect(() => {
    const s = e.current
    let raf = 0
    const net = () => ['tennis', 'volleyball', 'tabletennis'].includes(cfg.current.sport)
    const diag = () => ['tennis', 'tabletennis'].includes(cfg.current.sport) // cross-court play: shots go along the diagonals
    const place = (p, h = 0) => {
      const b = ballEl.current, sh = shadowEl.current
      if (b) { b.style.left = `${p.x}%`; b.style.top = `${diag() ? p.y : 50}%`; b.style.transform = `translate(-50%, -50%)` }
      if (sh) { sh.style.left = `${p.x}%`; sh.style.top = `${diag() ? p.y : 50}%`; sh.style.opacity = '0.45' }
    }
    const mark = (p) => {
      if (!net()) return
      s.marks.push(p); if (s.marks.length > 3) s.marks.shift()
      if (marksEl.current) marksEl.current.innerHTML = s.marks.map((m) => `<circle cx="${m.x}" cy="${m.y}" r="0.9" />`).join('')
    }
    const ripple = (p) => {
      const r = rippleEl.current; if (!r) return
      r.style.left = `${p.x}%`; r.style.top = `${diag() ? p.y : 50}%`; r.classList.remove('go'); void r.offsetWidth; r.classList.add('go')
    }
    const seg = (to, dur, hop) => { s.from = { ...s.pos }; s.to = to; s.t0 = performance.now(); s.dur = dur; s.hop = hop }
    // three spots on the centre line (left attack, centre, right attack), like bookmaker trackers
    const SPOT = [20, 50, 80]
    const SHOT_MS = { tennis: 1150, volleyball: 800, tabletennis: 750 }
    const next = () => {
      const c = cfg.current
      if (net()) { // rally by the rules: every shot crosses the net, from one side's spot to the other's
        s.side = s.side === 0 ? 1 : 0
        s.shot += 1
        // tennis / table tennis: cross-court — every shot goes to the opposite corner of the other half
        const y = diag() ? (s.pos && s.pos.y < 50 ? 70 : 30) : 50
        return { to: { x: s.side === 1 ? SPOT[2] : SPOT[0], y }, dur: SHOT_MS[c.sport] || 700, hop: 0 }
      }
      // field sports: centre while nobody presses, the attacking side's spot during an attack / dangerous attack
      const a = c.att, k = c.intensity || 0
      // court sports: having the ball is attacking; football/hockey: only a real attack moves it off the centre
      const possAttacks = ['basketball', 'handball', 'futsal', 'waterpolo'].includes(c.sport)
      const x = a === null || a === undefined || (k < 0.6 && !possAttacks) ? SPOT[1] : a === 0 ? SPOT[2] : SPOT[0]
      return { to: { x, y: 50 }, dur: Math.max(380, Math.abs(x - (s.pos?.x ?? 50)) * 14), hop: 0 }
    }
    const serveFrom = (side) => { // the ball rolls back to the server along the line, then the serve (no teleport)
      const c = cfg.current
      const now = performance.now()
      if (s.lastServe && now - s.lastServe < 4000 && s.side === side && !s.stopped) return // same serve asked again by a re-render
      s.lastServe = now
      s.side = side; s.shot = 0
      const to = { x: side === 0 ? 20 : 80, y: diag() ? (side === 0 ? 70 : 30) : 50 }
      s.trail = []; s.marks = []; if (marksEl.current) marksEl.current.innerHTML = ''
      s.toss = 0; s.toServe = true; seg(to, Math.max(350, Math.abs((s.pos?.x ?? 50) - to.x) * 9), 0)
    }
    const frame = (now) => {
      raf = requestAnimationFrame(frame)
      if (!cfg.current.live) return
      if (s.stopped) {
        // safety net: if no new point arrives to restart play (and it is not a break), serve again after 6 s instead of freezing
        if (!s.brk) { s.stoppedAt = s.stoppedAt || now; if (now - s.stoppedAt > (net() ? 6000 : 12000)) { s.stopped = false; s.stoppedAt = 0; if (net()) serveFrom(1 - (s.side ?? 0)); else { const n = next(); seg(n.to, n.dur, n.hop) } } }
        return
      }
      if (s.toss) {
        if (now < s.toss) {
          const k = 1 - Math.abs((now - (s.toss - 900)) / 450 - 1)
          place(s.pos, k * 0.9); if (trailEl.current) trailEl.current.setAttribute('points', ''); return
        }
        s.toss = 0; const n = next(); seg(n.to, n.dur, n.hop)
      }
      const tt = Math.min(1, (now - s.t0) / s.dur)
      // a puck slides: fast off the stick, slowing on the ice; balls ease in and out
      const ease = s.hop ? tt : cfg.current.sport === 'hockey' ? 1 - Math.pow(1 - tt, 3) : (tt < 0.5 ? 2 * tt * tt : 1 - Math.pow(-2 * tt + 2, 2) / 2)
      const p = { x: s.from.x + (s.to.x - s.from.x) * ease, y: s.from.y + (s.to.y - s.from.y) * ease }
      const h = s.hop ? 4 * tt * (1 - tt) * s.hop : 0
      s.pos = p; place(p, h)
      if (now - s.lastTrail > 60) {
        s.lastTrail = now; s.trail.push(p); if (s.trail.length > (net() ? 40 : 22)) s.trail.shift()
        if (trailEl.current) trailEl.current.setAttribute('points', s.trail.map((q) => `${q.x.toFixed(2)},${diag() ? q.y.toFixed(2) : 50}`).join(' '))
      }
      if (tt < 1) return
      if (s.toServe) { s.toServe = false; s.toss = performance.now() + 700; return } // arrived at the server: short pause, then serve
      mark(s.to)
      const st = s.strike
      if (st && st.launched) { // the deciding ball has landed
        s.strike = null; s.stopped = true; ripple(s.to); st.cb && st.cb(); return
      }
      if (st) { st.launched = true; seg(st.spot, st.dur, st.hop); return }
      if (s.poke) { const pk = s.poke; s.poke = null; seg(pk, travelMs(cfg.current.sport, s.pos, pk, 'shot'), cfg.current.sport === 'hockey' ? 0 : 0.2); return }
      const n = next(); seg(n.to, n.dur, n.hop)
    }
    api.current = {
      // finish the play with a deciding ball to `spot`; field sports cut in right away, net sports finish the current shot first
      strike(spot, hop, cb) {
        s.strike = { spot, hop, dur: travelMs(cfg.current.sport, s.pos, spot, 'shot'), cb, launched: false }
        if (!net()) { s.strike.launched = true; seg(spot, s.strike.dur, hop) }
      },
      poke(spot) { if (!s.strike) s.poke = spot },
      resume({ serveSide = null, reset = null } = {}) {
        s.stopped = false; s.brk = false; s.stoppedAt = 0
        if (net()) { serveFrom(serveSide ?? 0); return }
        if (reset) { s.pos = { ...reset }; s.trail = [] }
        const n = next(); seg(n.to, n.dur, n.hop)
      },
      serve(side) { if (net()) { s.stopped = false; s.brk = false; s.stoppedAt = 0; s.strike = null; serveFrom(side) } },
      pause(realBreak = true) { // breaks: ball rests in the middle, no play
        s.stopped = true; s.brk = realBreak; s.strike = null; s.pos = { x: 50, y: 50 }; place(s.pos); s.trail = []; s.marks = []
        if (trailEl.current) trailEl.current.setAttribute('points', ''); if (marksEl.current) marksEl.current.innerHTML = ''
      },
    }
    if (net()) serveFrom(cfg.current.server ?? 0)
    else { const n = next(); seg(n.to, n.dur, n.hop) }
    raf = requestAnimationFrame(frame)
    return () => cancelAnimationFrame(raf)
  }, [cfgNow.sport]) // eslint-disable-line react-hooks/exhaustive-deps
  return { ballEl, shadowEl, trailEl, rippleEl, marksEl, api }
}

function scoreEvents(m, data, t) {
  if (m.sport === 'basketball' && (data.plays || []).length) {
    return data.plays.filter((p) => p.pts > 0).map((p) => ({ k: `b-${p.q}-${p.clock}-${p.player}-${p.pts}-${p.home ? 0 : 1}`, t: 'score', side: p.home ? 0 : 1, n: p.pts, title: `+${p.pts}`, sub: [p.player, t.lang === 'ru' ? p.ru : t.serb(p.sr)].filter(Boolean).join(', ') }))
  }
  return (data.xev || []).filter((e) => SCORING.has(e.t) && (m.sport === 'tennis' ? e.t !== 'score' : e.t !== 'game'))
    .map((e) => ({ k: `x-${e.at}-${e.t}-${e.side}-${(e.ss || e.ps || []).join(':')}`, t: e.t, side: e.side, n: e.n || 1, ss: e.ss, ps: e.ps, brk: e.brk }))
}

function bannerTitle(ev, sport, t) {
  if (sport === 'tennis') return ev.t === 'game' ? (ev.brk ? t('ev_break') : t('ev_game')) : t('ev_point')
  if (sport === 'volleyball' || sport === 'tabletennis') return ev.t === 'score' ? t('ev_set') : t('ev_vpoint')
  if (sport === 'basketball') return `+${ev.n}`
  return t('ev_goal')
}

function strikeSpot(ev, sport) {
  const s = ev.side
  if (sport === 'tennis' || sport === 'tabletennis') return { x: s === 0 ? 108 : -8, y: s === 0 ? 82 : 18, diag: true } // past the player who missed, along the diagonal
  if (sport === 'volleyball') return { x: s === 0 ? 108 : -8, y: 50 }
  if (sport === 'basketball') return { x: s === 0 ? 100 - HOOP_X : HOOP_X, y: 50 }
  return { x: s === 0 ? 100.6 : -0.6, y: rnd(46, 54) }
}

// Momentum strip attached under the court (like broadcast trackers): bars per minute in team colours,
// up = home pressure, down = away pressure. Football uses the real momentum curve, other sports weigh live events.
const MW = { danger: 3, attack: 1, shot_on: 4, shot_off: 2, corner: 2, score: 5, point: 1, p2: 2, p3: 3, ft: 1, ace: 2, break: 4, pen2: 2 }
function MomentumStrip({ m, data, t }) {
  let bars = []
  if (m.sport === 'football' && (data.momentum || []).length) bars = data.momentum.map(([, v]) => v / 100)
  else {
    const now = data.now || Date.now() / 1000
    const bins = 24, span = 60
    const acc = Array.from({ length: bins }, () => 0)
    for (const e of data.xev || []) {
      const i = bins - 1 - Math.floor((now - e.at) / span)
      if (i < 0 || i >= bins) continue
      acc[i] += (MW[e.t] || 0) * (e.side === 0 ? 1 : -1)
    }
    const mx = Math.max(1, ...acc.map(Math.abs))
    if (acc.some((v) => v)) bars = acc.map((v) => v / mx)
  }
  if (!bars.length || m.status !== 'live') return null
  const n = bars.length, w = 100 / n
  return (
    <div className="mstrip" aria-label={t('pressure')}>
      <svg viewBox="0 0 100 40" preserveAspectRatio="none">
        <line x1="0" y1="20" x2="100" y2="20" stroke="rgba(255,255,255,0.18)" strokeWidth="0.4" vectorEffect="non-scaling-stroke" />
        {bars.map((v, i) => {
          const h = Math.max(0.6, Math.abs(v) * 18)
          return <rect key={i} x={i * w + w * 0.15} width={w * 0.7} y={v >= 0 ? 20 - h : 20} height={h} rx="0.4" fill={v >= 0 ? 'var(--c0)' : 'var(--c1)'} opacity={0.35 + 0.65 * ((i + 1) / n)} />
        })}
      </svg>
      <span className="mstrip-l">{t('pressure')}</span>
    </div>
  )
}

function setsWon(per, sport) {
  const won = [0, 0]
  ;(per || []).forEach((p, i) => {
    const a = +p[0] || 0, b = +p[1] || 0, hi = Math.max(a, b), lo = Math.min(a, b)
    const done = sport === 'tennis' ? (hi >= 6 && hi - lo >= 2) || hi === 7 : sport === 'tabletennis' ? hi >= 11 && hi - lo >= 2 : hi >= (i === 4 ? 15 : 25) && hi - lo >= 2
    if (done) won[a > b ? 0 : 1] += 1
  })
  return won
}
// over only when the score AND the finished set scores both say so (one feed can glitch)
export function isDecided(m, score, per) {
  if (m.sport !== 'tennis' && m.sport !== 'volleyball' && m.sport !== 'tabletennis') return false
  const lg = ((m.league && m.league.name) || '').toLowerCase()
  const need = m.sport === 'volleyball' || m.sport === 'tabletennis' ? 3 : /australian open|roland garros|wimbledon|us open/.test(lg) && !/wta|women/.test(lg) ? 3 : 2
  if (Math.max((score || [0, 0])[0] || 0, (score || [0, 0])[1] || 0) < need) return false
  return Math.max(...setsWon(per, m.sport)) >= need
}
const BOARD_KEYS = {
  tennis: ['x:Aces', 'x:Double faults', 'x:1st Serve %', 'x:Win % 1st Serve', 'x:Break point %', 'x:Breaks'],
  volleyball: ['x:Points on own serve', "x:Points on opponent's serve", 'x:Max pts in a row'],
  football: ['x:Shots on target', 'ShotsOnTarget', 'x:Corner', 'corners', 'x:Possession %', 'BallPossesion', 'x:Dangerous attacks', 'x:Yellow cards'],
  basketball: ['x:2-pointers', 'x:3-pointers', 'x:Free throws', 'FG2', 'FG3', 'TotalRebounds', 'x:Fouls'],
  hockey: ['x:Attacks', 'x:Possession %', 'x:2-min penalties', 'x:Goals during powerplay'],
  waterpolo: ['x:Attacks', 'x:Possession %'],
}
// Stats board shown on the court in pauses (changeover after a game, breaks) and at the end of the match
function StatsBoard({ sport, data, t, title, sub, names, winner }) {
  const stats = (data.stats || []).map((st) => (sport === 'hockey' && /Possession/.test(st.key) ? { ...st, ru: 'Владение шайбой', sr: 'Posed paka' } : st))
  const picked = []
  for (const k of BOARD_KEYS[sport] || []) { const st = stats.find((x) => x.key === k); if (st && !picked.find((p) => p.ru === st.ru)) picked.push(st); if (picked.length === (['football', 'waterpolo'].includes(sport) ? 4 : 3)) break }
  return (
    <motion.div className="sboard" initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
      <div className="sboard-head"><b className="sb-title">{title}</b>{sub && <span className="sb-time num">{sub}</span>}{winner != null && <span className={`sb-win s${winner}`}>{names[winner]}</span>}</div>
      {picked.map((st) => {
        const a = parseFloat(st.v[0]) || 0, b = parseFloat(st.v[1]) || 0, sum = a + b || 1
        return (
          <div key={st.key} className="sb-row">
            <b className="num">{st.v[0]}{st.pct ? '%' : ''}</b>
            <div className="sb-mid"><span className="ellip">{t.lang === 'ru' ? st.ru : t.serb(st.sr)}</span><div className="sb-bar"><i className="c0b" style={{ width: `${(a / sum) * 100}%` }} /><i className="c1b" style={{ width: `${(b / sum) * 100}%` }} /></div></div>
            <b className="num">{st.v[1]}{st.pct ? '%' : ''}</b>
          </div>
        )
      })}
    </motion.div>
  )
}

// Regulation pauses per sport (seconds): FIFA, FIBA/NBA, IIHF/NHL, FIVB, World Aquatics
function breakRule(sport, code, league) {
  const c = (code || '').toUpperCase()
  const lg = `${(league && league.name) || ''} ${(league && league.names && league.names.sr) || ''}`.toLowerCase()
  const nba = /\bnba\b|national basketball/.test(lg), nhl = /\bnhl\b|national hockey/.test(lg)
  if (sport === 'football') return /EXTRA|ET/.test(c) && !/HALF_TIME|^HT$/.test(c) ? { sec: 300, k: 'brkET' } : { sec: 900, k: 'brkHT' }
  if (sport === 'basketball') {
    if (/HALF|Q2_Q3/.test(c)) return { sec: 900, k: 'brkHalf' }
    if (/OT|OVERTIME/.test(c) || /Q4_OT|OT_OT/.test(c)) return { sec: nba ? 130 : 120, k: 'brkQuarter' }
    return { sec: nba ? 130 : 120, k: 'brkQuarter' }
  }
  if (sport === 'hockey') return { sec: nhl ? 1080 : 1020, k: 'brkPeriod' }
  if (sport === 'volleyball') return { sec: 180, k: 'brkSet' }
  if (sport === 'tabletennis') return { sec: 60, k: 'brkSet' } // ITTF: up to 1 minute between games
  if (sport === 'waterpolo') return /HALF|Q2_Q3/.test(c) ? { sec: 180, k: 'brkHalf' } : { sec: 120, k: 'brkQuarter' }
  return { sec: 120, k: 'pause' }
}
// Play stops after these events (seconds of stoppage before play resumes), per sport
const STOPS = {
  football: { yellow: 15, red: 30, sub: 15, corner: 12, penalty: 35 },
  hockey: { pen2: 25, penalty: 40 },
  basketball: { foul: 8 },
  waterpolo: { foul: 6 },
  handball: { foul: 8, yellow: 10, pen2: 20 },
  futsal: { foul: 8, yellow: 15, red: 30, corner: 8 },
  volleyball: {},
  tennis: {},
}
const TIMEOUT_SEC = { basketball: 60, volleyball: 30, waterpolo: 60, hockey: 30, football: 0 }
const fmtLeft = (until) => { const s = Math.max(0, Math.round((until - Date.now()) / 1000)); return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}` }

// basketball tank-top jersey
const Jersey = ({ cls }) => (
  <svg className={cls} width="16" height="18" viewBox="0 0 16 18" aria-hidden="true"><path d="M4 0 h2.2 a1.8 2.4 0 0 0 3.6 0 H12 l0.6 3.2 c0.4 1.6 1.4 2.4 2.4 2.8 V18 H1 V6 c1-0.4 2-1.2 2.4-2.8 Z" fill="currentColor" /></svg>
)

function Arena({ m, data, t }) {
  const sport = m.sport
  const statusNow = data.status || m.status
  const scoreNow = data.score || m.score || [0, 0]
  // tennis / volleyball are over the moment a side has the sets it needs; don't keep "playing" until the feed says so
  const decided = isDecided(m, scoreNow, ((data.live || {}).x || {}).periods || (data.live || {}).per)
  const live = statusNow === 'live' && !decided
  const finished = statusNow === 'finished' || decided
  const net = sport === 'tennis' || sport === 'volleyball' || sport === 'tabletennis'
  const scene = useScene(m, data, t)
  const lv = data.live || {}
  const x = lv.x || {}
  const H = t.team(m.home), A = t.team(m.away)
  const names = [H, A]
  const dataSS = x.ss || (lv.game ? lv.game.map(String) : ['0', '0'])
  const rawPer = x.periods && x.periods.length ? x.periods : (lv.per || [])
  // keep the current (still 0-0) set/period too, so the row shows where the match is
  const dataPer = rawPer.filter((p, i) => p[0] || p[1] || i === rawPer.length - 1)
  const dataScore = data.score || m.score || [0, 0] // centre data is fresher than the page data
  // ---------- displayed (directed) state ----------
  const [shown, setShown] = useState(() => ({ score: dataScore, ss: dataSS, per: dataPer }))
  const shownRef = useRef(shown)
  shownRef.current = shown
  const [phase, setPhase] = useState({ kind: 'idle', ev: null })
  const queue = useRef([])
  const seen = useRef(null)
  const [, force] = useState(0)
  const evs = scoreEvents(m, data, t)
  useEffect(() => {
    if (!data.now) return
    if (seen.current === null) { seen.current = new Set(evs.map((e) => e.k)); setShown({ score: dataScore, ss: dataSS, per: dataPer }); return }
    const fresh = evs.filter((e) => !seen.current.has(e.k))
    fresh.forEach((e) => seen.current.add(e.k))
    if (live && fresh.length) {
      queue.current.push(...fresh)
      // too far behind: settle the oldest ones silently so the court stays close to real time
      while (queue.current.length > 3) commit(queue.current.shift())
      force((v) => v + 1)
    }
    if (!queue.current.length && phase.kind === 'idle') setShown({ score: dataScore, ss: dataSS, per: dataPer })
  }, [data]) // eslint-disable-line react-hooks/exhaustive-deps
  function commit(ev) {
    setShown((sh) => {
      const n = { ...sh, score: [...sh.score], per: sh.per.map((p) => [...p]) }
      if (sport === 'tennis') {
        if (ev.t === 'game') { n.ss = ['0', '0']; const cur = n.per[n.per.length - 1]; if (cur) cur[ev.side] = (cur[ev.side] || 0) + 1 } else if (ev.ss) n.ss = ev.ss
      } else if (sport === 'volleyball') {
        if (ev.t === 'score') { n.score[ev.side] += 1; n.per.push([0, 0]) } else if (ev.ps) { if (!n.per.length) n.per.push([0, 0]); n.per[n.per.length - 1] = [...ev.ps] }
      } else { n.score[ev.side] += ev.n || 1; const cur = n.per[n.per.length - 1]; if (cur && sport !== 'football') cur[ev.side] = (cur[ev.side] || 0) + (ev.n || 1) }
      return n
    })
  }
  // ---------- possession / serve ----------
  const plays = data.plays || []
  const lastPt = (sport === 'volleyball' || sport === 'tabletennis') ? [...(data.xev || [])].reverse().find((e) => e.t === 'point' || e.t === 'score') : null
  const PVs = { 0: 0, 15: 1, 30: 2, 40: 3, A: 4 }
  const totalPts = (PVs[shown.ss[0]] ?? 0) + (PVs[shown.ss[1]] ?? 0)
  const deuce = totalPts % 2 === 0
  const feedServer = x.server ? x.server - 1 : (lv.spl === 'AWAY' ? 1 : 0)
  // after a game the serve changes hands at once on the court, even if the feed reports it a bit later
  const [srvOverride, setSrvOverride] = useState(null)
  const tServer = srvOverride && srvOverride.base === feedServer ? srvOverride.val : feedServer
  const tServerRef = useRef(tServer)
  tServerRef.current = tServer
  const server = sport === 'tennis' ? tServer : (sport === 'volleyball' || sport === 'tabletennis') ? (x.server ? x.server - 1 : lv.spl ? (lv.spl === 'AWAY' ? 1 : 0) : lastPt ? lastPt.side : 0) : null
  const srvY = server === 0 ? (deuce ? 68 : 32) : (deuce ? 32 : 68)
  const rcvY = 100 - srvY
  let att = null
  if (sport === 'basketball' && plays.length) att = bballPossession(plays)
  else if (net) att = server
  else att = scene.x > 55 ? 0 : scene.x < 45 ? 1 : null
  const ttl = scene.title || ''
  const intensity = ttl === t('dangerAttack') || ttl === t('ev_danger') ? 0.95 : ttl === t('attack') || ttl === t('ev_attack') ? 0.6 : 0.3
  // breaks between periods / sets: no play on the court; countdown from the regulation pause
  const lastGame = sport === 'tennis' ? [...(data.xev || [])].reverse().find((e) => e.t === 'game') : null
  const curSet = dataPer[dataPer.length - 1] || [0, 0]
  const nowS = data.now || Date.now() / 1000
  const isBreak = live && (/PAUSE|BREAK|HALF_TIME|INTERVAL/.test(`${lv.p || ''} ${m.minute || ''}`) || /break|pause|half-time|interval/i.test(x.period || '')
    || (sport === 'tennis' && dataPer.length > 1 && !curSet[0] && !curSet[1] && dataSS[0] === '0' && dataSS[1] === '0' && lastGame && nowS - lastGame.at < 130))
  const brk = lv.brk || null
  const rule = breakRule(sport, (brk && brk.k) || lv.p || m.minute, m.league)
  const brkUntil = brk ? (brk.at + rule.sec) * 1000 + (Date.now() - nowS * 1000) : null
  const brkTitle = t('pause') // one simple word for every kind of break
  const brkLabel = brkUntil ? (brkUntil > Date.now() ? `${brkTitle} ${fmtLeft(brkUntil)}` : `${brkTitle}, ${t('resumeSoon')}`) : brkTitle
  const eng = useArenaEngine({ live, sport, att, intensity, server, srvY, rcvY })
  // 3D broadcast view (LMT-style) where it is ready; everything else stays 2D. ?2d in the address forces the flat view
  const use3d = false && webgl // flat bookmaker-style view everywhere (3D kept in code, switched off)
  const [, tick] = useState(0)
  const [pp, setPp] = useState(null) // hockey power play: { side, until }
  useEffect(() => { if (!pp) return; const id = setInterval(() => { tick((v) => v + 1); if (Date.now() > pp.until) setPp(null) }, 1000); return () => clearInterval(id) }, [pp])
  useEffect(() => { if (!isBreak) return; const id = setInterval(() => tick((v) => v + 1), 1000); return () => clearInterval(id) }, [isBreak])
  useEffect(() => {
    if (phase.kind !== 'stats' && phase.kind !== 'stop') return
    eng.api.current && eng.api.current.pause(false)
    const id = setInterval(() => {
      tick((v) => v + 1)
      if (Date.now() >= phase.until || queue.current.length) {
        clearInterval(id)
        setPhase({ kind: 'idle', ev: null })
        if (eng.api.current) { if (net) eng.api.current.resume({ serveSide: sport === 'tennis' ? tServerRef.current : server }); else eng.api.current.resume({}) }
      }
    }, 1000)
    return () => clearInterval(id)
  }, [phase.kind]) // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (!eng.api.current) return
    if (!live) { eng.api.current.pause(); return }
    if (isBreak) eng.api.current.pause()
    else if (phase.kind === 'idle') { if (net) eng.api.current.serve(server); else eng.api.current.resume({ reset: { x: 50, y: 50 } }) }
  }, [isBreak, live]) // eslint-disable-line react-hooks/exhaustive-deps
  // ---------- the director ----------
  useEffect(() => {
    if (phase.kind !== 'idle' || !queue.current.length || !live || !eng.api.current) return
    const ev = queue.current[0]
    setPhase({ kind: 'finish', ev })
    let done = false
    const land = () => {
      if (done) return; done = true
      setPhase({ kind: 'pause', ev })
      setTimeout(() => {
        commit(ev)
        if (sport === 'tennis' && ev.t === 'game') setSrvOverride({ base: feedServer, val: 1 - tServer })
        setPhase({ kind: 'banner', ev })
        setTimeout(() => {
          queue.current.shift()
          if (sport === 'tennis' && ev.t === 'game') {
            // ITF/ATP/WTA rules: players change ends after odd games; 90 s rest, no rest after the 1st game of a set;
            // 120 s between sets. The real next point (if it arrives earlier, the feed lags) ends the pause.
            const cur = (shownRef.current.per[shownRef.current.per.length - 1]) || [0, 0]
            const g = (cur[0] || 0) + (cur[1] || 0)
            const hi = Math.max(cur[0] || 0, cur[1] || 0), lo = Math.min(cur[0] || 0, cur[1] || 0)
            const setOver = (hi >= 6 && hi - lo >= 2) || hi === 7
            const rest = setOver ? 120 : g % 2 === 1 && g > 1 ? 90 : 0
            if (rest) {
              setPhase({ kind: 'stats', ev, until: Date.now() + rest * 1000, setBreak: setOver })
              return
            }
          }
          setPhase({ kind: 'idle', ev: null })
          const nextServer = (sport === 'volleyball' || sport === 'tabletennis') ? ev.side : sport === 'tennis' ? (ev.t === 'game' ? 1 - tServer : tServer) : null
          if (net) eng.api.current.resume({ serveSide: nextServer })
          else eng.api.current.resume({ reset: { x: sport === 'basketball' ? (ev.side === 0 ? 8 : 92) : 50, y: 50 } })
        }, 2300)
      }, 450)
    }
    eng.api.current.strike(strikeSpot(ev, sport), sport === 'basketball' ? 1 : net ? 1 : sport === 'hockey' ? 0 : 0.15, land)
    const guard = setTimeout(land, 4500) // never get stuck (e.g. hidden tab)
    return () => clearTimeout(guard)
  }, [phase.kind, queue.current.length, live]) // eslint-disable-line react-hooks/exhaustive-deps
  // non-scoring events: short info in the status row, ball goes to the spot (shot, corner...)
  const info = (data.xev || []).filter((e) => !SCORING.has(e.t) && ['shot_on', 'shot_off', 'corner', 'yellow', 'red', 'penalty', 'pen2', 'foul', 'bp', 'ace', 'df', 'timeout', 'sub'].includes(e.t))
  const lastInfo = info[info.length - 1]
  const [infoShown, setInfoShown] = useState(null)
  const infoSeen = useRef(null)
  useEffect(() => {
    if (!data.now) return
    if (infoSeen.current === null) { infoSeen.current = lastInfo ? lastInfo.at + lastInfo.t : ''; return }
    if (!lastInfo || lastInfo.at + lastInfo.t === infoSeen.current || !live) return
    infoSeen.current = lastInfo.at + lastInfo.t
    setInfoShown(lastInfo)
    const stopSec = (STOPS[sport] || {})[lastInfo.t]
    if (stopSec && phase.kind === 'idle') {
      setPhase({ kind: 'stop', ev: lastInfo, until: Date.now() + stopSec * 1000 })
      if (sport === 'hockey' && lastInfo.t === 'pen2') setPp({ side: 1 - lastInfo.side, until: Date.now() + (stopSec + 120) * 1000 })
    }
    if (lastInfo.t === 'timeout' && TIMEOUT_SEC[sport] && phase.kind === 'idle') {
      setPhase({ kind: 'stats', ev: null, until: Date.now() + TIMEOUT_SEC[sport] * 1000, title: `${t('ev_timeout')} ${names[lastInfo.side] || ''}`.trim() })
    }
    const sp = EVSPOT[lastInfo.t]
    if (sp && eng.api.current) eng.api.current.poke({ x: lastInfo.side === 0 ? sp[0] : 100 - sp[0], y: lastInfo.t === 'corner' ? (lastInfo.at % 2 ? sp[1] : 100 - sp[1]) : sp[1] })
    const id = setTimeout(() => setInfoShown(null), 4000)
    return () => clearTimeout(id)
  }, [lastInfo?.at, lastInfo?.t, data.now]) // eslint-disable-line react-hooks/exhaustive-deps
  // basketball play-by-play fouls stop the play (whistle, clock stops)
  const lastFoul = sport === 'basketball' ? [...plays].reverse().find((p) => ['CM', 'CMU', 'CMT'].includes(p.pt)) : null
  const foulKey = lastFoul ? `${lastFoul.q}-${lastFoul.clock}-${lastFoul.player}` : ''
  const foulSeen = useRef(null)
  useEffect(() => {
    if (!data.now) return
    if (foulSeen.current === null) { foulSeen.current = foulKey; return }
    if (!foulKey || foulKey === foulSeen.current || !live) return
    foulSeen.current = foulKey
    if (phase.kind === 'idle') setPhase({ kind: 'stop', ev: { t: 'foul', side: lastFoul.home ? 0 : 1, at: Date.now() }, until: Date.now() + 8000 })
  }, [foulKey, data.now]) // eslint-disable-line react-hooks/exhaustive-deps
  // basketball play-by-play timeouts (EuroLeague / NBA feeds)
  const lastTout = sport === 'basketball' ? [...plays].reverse().find((p) => p.pt === 'TOUT') : null
  const toutKey = lastTout ? `${lastTout.q}-${lastTout.clock}-${lastTout.home}` : ''
  const toutSeen = useRef(null)
  useEffect(() => {
    if (!data.now) return
    if (toutSeen.current === null) { toutSeen.current = toutKey; return }
    if (!toutKey || toutKey === toutSeen.current || !live) return
    toutSeen.current = toutKey
    if (phase.kind === 'idle') setPhase({ kind: 'stats', ev: null, until: Date.now() + (/nba/i.test((m.league && m.league.name) || '') ? 75 : 60) * 1000, title: `${t('ev_timeout')} ${names[lastTout.home ? 0 : 1]}` })
  }, [toutKey, data.now]) // eslint-disable-line react-hooks/exhaustive-deps
  // ---------- texts ----------
  const gClock = useGameClock(sport, x.ts, lv.x_seen, data.now, m.league, live && !/PAUSE|BREAK|HALF_TIME|HT/.test(`${lv.p || ''} ${m.minute || ''}`))
  const fbTick = useTicker(m.minute, live && sport === 'football' && m.minute !== 'HT')
  const fbClock = sport === 'football' && gClock ? gClock : fbTick
  const periodTxt = !live ? t('finished') : sport === 'football' ? (m.minute === 'HT' ? t('ht') : fbClock || '') : periodLabel(lv.p, sport, t) || (/^[A-Z0-9_]+$/.test(m.minute || '') ? periodLabel(m.minute, sport, t) : m.minute)
  const periodClock = live && gClock && sport !== 'football' && !/PAUSE|BREAK/.test(`${lv.p || ''} ${m.minute || ''}`) ? `${periodTxt ? `${periodTxt} · ` : ''}${gClock}` : periodTxt
  const perTxt = shown.per.map((p) => `${p[0] ?? 0}-${p[1] ?? 0}`).join(', ')
  const fouls = data.fouls, clock = data.clock
  const bonusDots = (n) => <span className="bonus"><b>BONUS</b>{[0, 1, 2, 3, 4].map((i) => <i key={i} className={i < Math.min(5, n) ? 'on' : ''} />)}</span>
  const boardL = sport === 'tennis' ? (live ? shown.ss[0] : scoreNow[0]) : finished ? scoreNow[0] : shown.score[0]
  const boardR = sport === 'tennis' ? (live ? shown.ss[1] : scoreNow[1]) : finished ? scoreNow[1] : shown.score[1]
  let status = null
  if (finished) status = null
  else if (phase.kind === 'stop' && phase.ev) status = { side: phase.ev.side, title: xevLabel(phase.ev, sport, t), icon: phase.ev.t, time: fmtLeft(phase.until) }
  else if (phase.kind === 'stats') status = { side: null, title: phase.title || (phase.setBreak ? t('pause') : t('changeover')), icon: 'timeout', time: fmtLeft(phase.until) }
  else if (isBreak && phase.kind === 'idle') status = { side: null, title: brkTitle, icon: 'timeout', time: brkUntil && brkUntil > Date.now() ? fmtLeft(brkUntil) : null }
  else if (phase.kind !== 'idle' && phase.ev) status = { side: phase.ev.side, title: phase.kind === 'finish' ? (net ? t('rally') : sport === 'basketball' ? t('shot') : t('ev_shot_on')) : bannerTitle(phase.ev, sport, t), icon: phase.kind === 'finish' ? null : (sport === 'tennis' ? 'ace' : 'score') }
  else if (infoShown) status = { side: infoShown.side, title: infoShown.t === 'bp' ? t('ev_bp') : xevLabel(infoShown, sport, t), icon: infoShown.t === 'bp' ? 'break' : infoShown.t }
  else if (pp && live) status = { side: pp.side, title: t('powerPlay'), icon: 'pen2', time: fmtLeft(pp.until) }
  else if (live && att !== null) status = { side: att, title: net ? t('serve') : sport === 'basketball' ? t('withBall') : sport === 'hockey' ? t('withPuck') : (ttl && ![t('live'), t('finished'), t('pause'), t('ev_goal'), t('ev_set'), t('ev_vpoint'), `${t('goal')}!`].includes(ttl) && !ttl.startsWith('+') ? ttl : (sport === 'hockey' ? t('withPuck') : t('withBall'))), arrow: !net }
  const ev = phase.ev
  const bannerScore = sport === 'tennis' ? (ev && ev.t === 'game' ? (shown.per[shown.per.length - 1] || [0, 0]) : shown.ss) : sport === 'volleyball' && ev && ev.t === 'point' ? (shown.per[shown.per.length - 1] || [0, 0]) : shown.score
  const mom = sport === 'football' ? data.momentum || [] : []
  // event feed under the court: scoring events appear only after they were played on the court
  const pending = new Set([...queue.current.map((q) => q.k), ...(phase.kind === 'finish' || phase.kind === 'pause' ? [phase.ev?.k] : [])])
  const feed = (sport === 'basketball' && plays.length
    ? plays.map((p) => ({ k: `b-${p.q}-${p.clock}-${p.player}-${p.pts}-${p.home ? 0 : 1}`, t: p.pts ? 'score' : ['CM', 'CMU', 'CMT'].includes(p.pt) ? 'foul' : p.pt === 'TOUT' ? 'timeout' : null, side: p.home ? 0 : 1, title: t.lang === 'ru' ? p.ru : t.serb(p.sr), when: p.clock ? `Q${p.q} ${fmtClock(p.clock)}` : '' })).filter((e) => e.t)
    : (data.xev || []).filter((e) => [...TOAST, 'foul', 'game', 'bp'].includes(e.t) && (sport !== 'tennis' || e.t !== 'score')).map((e) => ({
      k: SCORING.has(e.t) ? `x-${e.at}-${e.t}-${e.side}-${(e.ss || e.ps || []).join(':')}` : `i-${e.at}-${e.t}-${e.side}`,
      t: sport === 'tennis' ? (e.t === 'game' ? 'score' : e.t === 'bp' ? 'break' : 'ace') : e.t, side: e.side,
      title: sport === 'tennis' ? (e.t === 'game' ? (e.brk ? t('ev_break') : t('ev_game')) : e.t === 'bp' ? t('ev_bp') : t('ev_point')) : xevLabel(e, sport, t),
      when: e.ss ? e.ss.join(':') : e.ps ? `${e.ps[0]}:${e.ps[1]}` : e.ts ? (sport === 'football' ? `${Math.floor(e.ts / 60) + 1}'` : '') : '' })))
    .filter((e) => !pending.has(e.k))
  return (
    <div className="tennis-tracker trk">
      {sport === 'tennis' ? (
        <div className="tt-bar tn-bar">
          <span className="tt-player l"><span className="ellip">{H}</span></span>
          <span className="tn-center">
            <span className="tn-pt l">{live && !isBreak && server === 0 && <i className="tn-srv" />}{live && <b className="num"><span className="flip"><AnimatePresence mode="popLayout" initial={false}><motion.span key={`a${shown.ss[0]}`} initial={{ y: -14, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 14, opacity: 0 }} transition={{ duration: 0.26 }}>{shown.ss[0]}</motion.span></AnimatePresence></span></b>}</span>
            <span className="tt-score num"><i className="c0b" />
              <span className="flip"><AnimatePresence mode="popLayout" initial={false}><motion.span key={`s${scoreNow[0]}`} initial={{ y: -16, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 16, opacity: 0 }} transition={{ duration: 0.28 }}>{scoreNow[0]}</motion.span></AnimatePresence></span>
              <span className="colon">:</span>
              <span className="flip"><AnimatePresence mode="popLayout" initial={false}><motion.span key={`s${scoreNow[1]}`} initial={{ y: -16, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 16, opacity: 0 }} transition={{ duration: 0.28 }}>{scoreNow[1]}</motion.span></AnimatePresence></span>
              <i className="c1b" /></span>
            <span className="tn-pt r">{live && <b className="num"><span className="flip"><AnimatePresence mode="popLayout" initial={false}><motion.span key={`b${shown.ss[1]}`} initial={{ y: -14, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 14, opacity: 0 }} transition={{ duration: 0.26 }}>{shown.ss[1]}</motion.span></AnimatePresence></span></b>}{live && !isBreak && server === 1 && <i className="tn-srv" />}</span>
          </span>
          <span className="tt-player r"><span className="ellip">{A}</span></span>
        </div>
      ) : (
        <div className="tt-bar">
        <span className="tt-player l">{sport === 'basketball' ? <Jersey cls="c0i" /> : <IconShirtFilled size={18} className="c0i" />}<span className="ellip">{H}</span></span>
        <span className="tt-score num"><i className="c0b" />
          <span className="flip"><AnimatePresence mode="popLayout" initial={false}><motion.span key={`l${boardL}`} initial={{ y: -16, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 16, opacity: 0 }} transition={{ duration: 0.28 }}>{boardL}</motion.span></AnimatePresence></span>
          <span className="colon">:</span>
          <span className="flip"><AnimatePresence mode="popLayout" initial={false}><motion.span key={`r${boardR}`} initial={{ y: -16, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 16, opacity: 0 }} transition={{ duration: 0.28 }}>{boardR}</motion.span></AnimatePresence></span>
          <i className="c1b" /></span>
        <span className="tt-player r"><span className="ellip">{A}</span>{sport === 'basketball' ? <Jersey cls="c1i" /> : <IconShirtFilled size={18} className="c1i" />}</span>
      </div>
      )}
      {sport === 'basketball' && fouls && live ? (
        <div className="tt-sets num bb-sub">{bonusDots(fouls[0])}<span>{gClock && live && !/PAUSE|BREAK/.test(`${lv.p || ''} ${m.minute || ''}`) ? `Q${Math.min(4, Math.floor(Number(x.ts) / (/nba/i.test(m.league?.name || '') ? 720 : 600)) + 1)} ${gClock}` : clock && /^\d{1,2}:\d{2}$/.test(String(clock.t).trim()) ? `Q${clock.q} ${String(clock.t).trim()}` : periodClock}</span>{bonusDots(fouls[1])}</div>
      ) : (
        sport === 'tennis' ? (
          <div className="tt-sets num tn-sets">
            {shown.per.map((p, i) => <span key={i} className={i === shown.per.length - 1 && live ? 'cur' : ''}>{p[0] ?? 0}-{p[1] ?? 0}</span>)}
          </div>
        ) : <div className="tt-sets num">{[periodClock, sport === 'football' ? '' : perTxt].filter(Boolean).join('   ') || '\u00a0'}</div>
      )}
      <div className="trk-status">
        <AnimatePresence mode="wait" initial={false}>
          {status ? (
            <motion.div key={(status.title || '') + status.side + phase.kind} className={`trk-st s${status.side ?? 'n'}`} initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }} transition={{ duration: 0.18 }}>
              {status.icon ? <span className="trk-st-ico"><EvIconBig type={status.icon} sport={sport} /></span> : null}
              <span className="trk-st-txt ellip">{status.side !== null && status.side !== undefined && <b>{names[status.side]}</b>}{status.title}</span>
              {status.time && <span className="trk-st-time num">{status.time}</span>}
              {status.arrow && <span className={`trk-st-arrow ${status.side === 0 ? 'r' : 'l'}`} />}
            </motion.div>
          ) : <motion.div key="none" className="trk-st muted-st" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>{live ? t('live') : t('finished')}</motion.div>}
        </AnimatePresence>
      </div>
      <div className={`court court-${sport} tt-court${use3d ? ' is3d' : ''}`} style={{ aspectRatio: use3d ? (sport === 'tennis' ? '16 / 9' : '16 / 9') : courtAspect(sport) }}>
        {use3d && <Suspense fallback={null}><Stage3D sport={sport} eng={eng} att={live && !isBreak && !net ? att : null} level={intensity >= 0.9 ? 2 : intensity >= 0.6 ? 1 : 0} /></Suspense>}
        {use3d && live && !isBreak && att !== null && !net && intensity >= 0.6 && phase.kind === 'idle' && (
          <div className={`lmt-card s${att}`}><i /><div><b>{intensity >= 0.9 ? t('dangerAttack') : t('attack')}</b><span className="ellip">{names[att]}</span></div><em /></div>
        )}
        {use3d && net && (
          <>
            <div className="lmt-name near"><span className="ellip">{names[0]}</span>{live && server === 0 && <b>{t('serve')}</b>}</div>
            <div className="lmt-name far"><span className="ellip">{names[1]}</span>{live && server === 1 && <b>{t('serve')}</b>}</div>
          </>
        )}
        <CourtLines sport={sport} />
        <span className={`court-tex tex-${sport}`} aria-hidden="true" /><span className="court-light" aria-hidden="true" /><span className="court-depth" aria-hidden="true"><i className="cd-boards" /><i className="cd-front" /></span>
        <div className="arena-field" style={fieldStyle(sport)}>
          {live && att !== null && !net && !isBreak && <AttackZone side={att} level={intensity >= 0.9 ? 2 : intensity >= 0.6 ? 1 : 0} />}
          {live && att !== null && !net && !isBreak && phase.kind === 'idle' && sport !== 'basketball' && intensity >= 0.6 && (
            <div className={`atk-call s${att}`} key={`${att}${intensity}`}><span className="ellip">{names[att]}</span><b className={intensity >= 0.9 ? 'hot' : ''}>{intensity >= 0.9 ? t('dangerAttack') : t('attack')}</b></div>
          )}
          <svg className="arena-fx" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <polyline ref={eng.trailEl} points="" fill="none" stroke={sport === 'tennis' ? 'rgba(215,242,90,0.55)' : 'rgba(255,255,255,0.4)'} strokeWidth="1.4" strokeDasharray="3 4" vectorEffect="non-scaling-stroke" strokeLinejoin="round" />
            <g ref={eng.marksEl} fill="none" stroke="rgba(255,255,255,0.75)" strokeWidth="1.2" vectorEffect="non-scaling-stroke" />
          </svg>
          <span ref={eng.rippleEl} className="ripple" />
          <span ref={eng.shadowEl} className="eng-shadow" style={{ opacity: live ? 0.5 : 0 }} />
          <span ref={eng.ballEl} className={`eng-ball ball-${sport}`} style={{ opacity: live ? 1 : 0 }} />
          {sport === 'tennis' && [0, 1].map((side) => (
            <div key={side} className={`tt-tag ${side === 0 ? 'l' : 'r'}`} style={{ top: `${side === server ? srvY : rcvY}%` }}>
              <span className="ellip">{names[side]}</span>{live && !isBreak && side === server && phase.kind === 'idle' && <b>{t('serve')}</b>}
            </div>
          ))}
        </div>
        <AnimatePresence>
          {phase.kind === 'banner' && ev && (
            <motion.div key={'b' + ev.k} className={`arena-banner s${ev.side}`} initial={{ opacity: 0, y: 18, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -10 }} transition={{ type: 'spring', stiffness: 260, damping: 24 }}>
              <span className="ab-bar" />
              <div className="ab-main">
                <motion.b initial={{ letterSpacing: '0.12em', opacity: 0 }} animate={{ letterSpacing: '0.02em', opacity: 1 }} transition={{ duration: 0.4 }}>{bannerTitle(ev, sport, t)}</motion.b>
                <span className="ellip">{names[ev.side]}{ev.sub ? `, ${ev.sub}` : ''}</span>
              </div>
              <div className="ab-score num"><span className={ev.side === 0 ? 'hl' : ''}>{bannerScore[0]}</span><i>:</i><span className={ev.side === 1 ? 'hl' : ''}>{bannerScore[1]}</span></div>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {phase.kind === 'stop' && phase.ev && (
            <motion.div key={'stop' + phase.ev.at + phase.ev.t} className={`stop-card s${phase.ev.side}`} initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
              <span className="sc-ico"><EvIconBig type={phase.ev.t} sport={sport} /></span>
              <span className="sc-txt"><b>{xevLabel(phase.ev, sport, t)}</b><span className="ellip">{names[phase.ev.side]}</span></span>
              <span className="sc-time num">{fmtLeft(phase.until)}</span>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {(finished || (isBreak && phase.kind === 'idle') || phase.kind === 'stats') && (
            <motion.div key={finished ? 'fin' : 'brk'} className="arena-break" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
              <StatsBoard sport={sport} data={data} t={t} names={names}
                title={finished ? t('matchOver') : phase.kind === 'stats' ? (phase.title || (phase.setBreak ? t('pause') : t('changeover'))) : brkTitle}
                sub={finished ? null : phase.kind === 'stats' ? fmtLeft(phase.until) : brkUntil && brkUntil > Date.now() ? fmtLeft(brkUntil) : null}
                winner={finished && scoreNow[0] !== scoreNow[1] ? (scoreNow[0] > scoreNow[1] ? 0 : 1) : null} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <MomentumStrip m={m} data={data} t={t} />
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
        {e.t === 'score' ? <GoalIcon sport={m.sport} /> : <span className={`ev-ico${['shot_on', 'p3'].includes(e.t) ? ' goal' : ''}`}>{e.t === 'corner' ? '⚑' : e.t === 'yellow' ? '▮' : '•'}</span>}
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
        <span className="ev-min num" style={{ fontSize: 13, whiteSpace: 'nowrap' }}>Q{p.q} {fmtClock(p.clock)}</span>
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
  const { data: loaded } = usePoll(() => api(`/matches/${m.id}/center`), [m.id, m.status], live ? (m.sport === 'tennis' || m.sport === 'volleyball' ? 6000 : 10000) : 0, true)
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
        {(data.status || m.status) === 'live' && !isDecided(m, data.score || m.score, (lv.x || {}).periods || lv.per) ? <span className="badge live"><span className="live-dot" style={{ marginRight: 6 }} />{(m.minute === 'HT' ? t('ht') : /^[A-Z0-9_]+$/.test(m.minute || '') ? periodLabel(m.minute, m.sport, t) : m.minute) || periodLabel((lv || {}).p, m.sport, t) || t('live')}</span> : <span className="badge">{t('finished')}</span>}
      </div>
      {m.sport !== 'esports' && <Arena m={m} data={data} t={t} />}
      <div className="seg" style={{ margin: '12px 12px 0' }}>{tabs.map(([k, l]) => <button key={k} className={active === k ? 'on' : ''} onClick={() => setTab(k)}>{l}</button>)}</div>
      <div className={`center-body${active === 'periods' ? '' : ' fixed'}`}>
        {!loaded ? <div className="skeleton" style={{ height: active === 'periods' ? 150 : 272, margin: 14, borderRadius: 12 }} /> : (
          <>
            {active === 'events' && <Events m={m} data={data} t={t} />}
            {active === 'periods' && <Periods m={m} lv={lv} t={t} />}
            {active === 'stats' && <Stats stats={(data.stats || []).map((st) => (m.sport === 'hockey' && /Possession|possession/.test(st.key || '') ? { ...st, ru: 'Владение шайбой', sr: 'Posed paka' } : st))} t={t} />}
          </>
        )}
      </div>
    </div>
  )
}
