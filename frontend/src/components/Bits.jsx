import { Flame, Ticket, Trophy, TrendingUp, Target, Medal, Zap, Star } from 'lucide-react'
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
