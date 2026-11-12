import { Flame, Ticket, Trophy, TrendingUp, Target, Medal, Zap, Star, Crown, Rocket, Gem, Layers, CalendarCheck, Swords, UserPlus, Award, Sparkles } from 'lucide-react'
import { useT } from '../i18n'

export function MiniLine({ data = [], w = 70, h = 26, color }) {
  if (!data.length) return null
  const max = Math.max(...data), min = Math.min(...data)
  const up = data[data.length - 1] >= data[0]
  const c = color || (up ? '#3DD68C' : '#FF6B6B')
  const pts = data.map((v, i) => `${(i / Math.max(1, data.length - 1)) * w},${max === min ? h / 2 : h - 3 - ((v - min) / (max - min)) * (h - 6)}`).join(' ')
  return <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} className="mini-line"><polyline points={pts} fill="none" stroke={c} strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" /></svg>
}

export function AreaChart({ data = [], h = 120 }) {
  if (!data.length) return null
  const w = 300, max = Math.max(0, ...data), min = Math.min(0, ...data)
  const y = (v) => (max === min ? h / 2 : 6 + (1 - (v - min) / (max - min)) * (h - 12))
  const pts = data.map((v, i) => `${(i / (data.length - 1)) * w},${y(v)}`).join(' ')
  const up = data[data.length - 1] >= 0
  const c = up ? '#3DD68C' : '#FF6B6B'
  return (
    <svg viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" className="area-chart">
      <defs><linearGradient id="acg" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor={c} stopOpacity=".35" /><stop offset="1" stopColor={c} stopOpacity="0" /></linearGradient></defs>
      <line x1="0" x2={w} y1={y(0)} y2={y(0)} stroke="rgba(255,255,255,.12)" strokeDasharray="4 4" vectorEffect="non-scaling-stroke" />
      <polygon points={`0,${y(0)} ${pts} ${w},${y(0)}`} fill="url(#acg)" />
      <polyline points={pts} fill="none" stroke={c} strokeWidth="2.2" vectorEffect="non-scaling-stroke" strokeLinejoin="round" />
    </svg>
  )
}

export function Ring({ p = 0, size = 110, label }) {
  return (
    <div className="pring" style={{ '--p': p, width: size, height: size }}>
      <b className="num">{p}%</b>{label && <small>{label}</small>}
    </div>
  )
}

const ACH = {
  first_pick: [Target, '#6AAEF0'], first_ticket: [Ticket, '#4CC38A'], streak5: [Flame, '#FF8A3D'], streak10: [Zap, '#F2C230'],
  won50: [Trophy, '#F2C230'], underdog: [TrendingUp, '#B48CFF'], ticket_won: [Medal, '#3DD68C'], euroleague: [Star, '#FF8A3D'],
  streak3: [Sparkles, '#6AAEF0'], won10: [Award, '#4CC38A'], won100: [Crown, '#F2C230'], underdog5: [Rocket, '#B48CFF'], tickets5: [Layers, '#3DD68C'],
  ticket10x: [Gem, '#FF6B9A'], sports3: [Target, '#FF8A3D'], daily7: [CalendarCheck, '#FF8A3D'], derby: [Swords, '#FF6B6B'], invite: [UserPlus, '#6AAEF0'], founder: [Star, '#F2C230'],
}

const LEVEL_KEYS = ['lvl0', 'lvl1', 'lvl2', 'lvl3', 'lvl4', 'lvl5', 'lvl6']
// level of the forecaster: name, experience bar to the next level
export function LevelCard({ level }) {
  const t = useT()
  if (!level) return null
  const pct = level.to ? Math.min(100, Math.round(((level.xp - level.from) / (level.to - level.from)) * 100)) : 100
  return (
    <div className="pb-tile lvl-card">
      <span className="pb-l">{t('level')} {level.n + 1}</span>
      <b className="pb-v lvl-name">{t(LEVEL_KEYS[level.n])}</b>
      <span className="lvl-bar"><i style={{ width: `${pct}%` }} /></span>
      <small className="num">{level.to ? `${level.xp} / ${level.to} XP · ${t('lvlNext')} ${t(LEVEL_KEYS[level.n + 1])}` : `${level.xp} XP · ${t('lvlMax')}`}</small>
    </div>
  )
}

// Metallic 3D-looking badges (no emoji): earned ones shine, others are dimmed with progress
export function Badges({ list = [] }) {
  const t = useT()
  return (
    <div className="badges">
      {list.map((a) => {
        const [I, c] = ACH[a.key] || [Star, '#F2C230']
        return (
          <div key={a.key} className={`badge3d${a.got ? ' got' : ''}`} style={{ '--bc': c }}>
            <span className="b3-coin"><I size={24} strokeWidth={2.2} /></span>
            <b>{t(`ach_${a.key}`)}</b>
            {!a.got && a.of ? <span className="b3-prog"><i style={{ width: `${(a.p / a.of) * 100}%` }} /></span> : <small>{a.got ? t('achGot') : t('achLocked')}</small>}
          </div>
        )
      })}
    </div>
  )
}
