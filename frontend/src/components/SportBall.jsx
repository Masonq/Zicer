import { useId } from 'react'

// Realistic, shaded sport balls (pure SVG, crisp at any size)
export default function SportBall({ sport, size = 120, className = '' }) {
  const id = useId().replace(/[^a-z0-9]/gi, '')
  const common = { width: size, height: size, viewBox: '0 0 100 100', className, 'aria-hidden': true }
  const shade = (
    <>
      <radialGradient id={`${id}l`} cx="35%" cy="30%" r="75%"><stop offset="0" stopColor="#fff" stopOpacity=".55" /><stop offset=".35" stopColor="#fff" stopOpacity=".08" /><stop offset="1" stopColor="#000" stopOpacity=".38" /></radialGradient>
      <clipPath id={`${id}c`}><circle cx="50" cy="50" r="46" /></clipPath>
    </>
  )
  const light = <circle cx="50" cy="50" r="46" fill={`url(#${id}l)`} />
  if (sport === 'hockey') {
    return (
      <svg {...common}>
        <defs>
          <linearGradient id={`${id}s`} x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#2b2f33" /><stop offset="1" stopColor="#060708" /></linearGradient>
          <radialGradient id={`${id}t`} cx="40%" cy="35%" r="70%"><stop offset="0" stopColor="#4a5056" /><stop offset="1" stopColor="#141618" /></radialGradient>
        </defs>
        <ellipse cx="50" cy="66" rx="42" ry="14" fill="rgba(0,0,0,.35)" />
        <path d="M8 46 v14 a42 14 0 0 0 84 0 v-14 z" fill={`url(#${id}s)`} />
        <path d="M8 52 a42 14 0 0 0 84 0" fill="none" stroke="#3a3f44" strokeWidth="1.2" strokeDasharray="2 2.4" />
        <ellipse cx="50" cy="46" rx="42" ry="14" fill={`url(#${id}t)`} />
        <ellipse cx="44" cy="42" rx="18" ry="4.5" fill="#fff" opacity=".08" />
      </svg>
    )
  }
  if (sport === 'basketball') {
    return (
      <svg {...common}>
        <defs>{shade}<radialGradient id={`${id}b`} cx="40%" cy="35%" r="70%"><stop offset="0" stopColor="#F59A4A" /><stop offset="1" stopColor="#B4521C" /></radialGradient>
          <pattern id={`${id}p`} width="2.4" height="2.4" patternUnits="userSpaceOnUse"><circle cx="1.2" cy="1.2" r=".45" fill="#000" opacity=".12" /></pattern></defs>
        <circle cx="50" cy="50" r="46" fill={`url(#${id}b)`} />
        <circle cx="50" cy="50" r="46" fill={`url(#${id}p)`} />
        <g clipPath={`url(#${id}c)`} fill="none" stroke="#2a1508" strokeWidth="2.6" strokeLinecap="round">
          <path d="M4 50 H96" /><path d="M50 4 V96" />
          <path d="M18 14 C34 32 34 68 18 86" /><path d="M82 14 C66 32 66 68 82 86" />
        </g>
        {light}
      </svg>
    )
  }
  if (sport === 'tennis') {
    return (
      <svg {...common}>
        <defs>{shade}<radialGradient id={`${id}b`} cx="40%" cy="35%" r="70%"><stop offset="0" stopColor="#EEFA6A" /><stop offset="1" stopColor="#A9C21E" /></radialGradient>
          <filter id={`${id}f`}><feTurbulence type="fractalNoise" baseFrequency="1.4" numOctaves="2" /><feColorMatrix values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 .8  0 0 0 .22 0" /><feComposite in2="SourceGraphic" operator="in" /></filter></defs>
        <circle cx="50" cy="50" r="46" fill={`url(#${id}b)`} />
        <circle cx="50" cy="50" r="46" fill="#fff" filter={`url(#${id}f)`} />
        <g clipPath={`url(#${id}c)`} fill="none" stroke="#F7F9EE" strokeWidth="4.2" strokeLinecap="round">
          <path d="M14 18 C40 32 40 68 14 82" /><path d="M86 18 C60 32 60 68 86 82" />
        </g>
        {light}
      </svg>
    )
  }
  if (sport === 'volleyball' || sport === 'waterpolo') {
    const [c1, c2, c3] = sport === 'waterpolo' ? ['#F3D23A', '#2F6FD0', '#F3D23A'] : ['#F4F4EF', '#F2C230', '#2F5FB8']
    return (
      <svg {...common}>
        <defs>{shade}</defs>
        <g clipPath={`url(#${id}c)`}>
          <circle cx="50" cy="50" r="46" fill={c1} />
          <path d="M50 50 C30 20 60 4 96 30 L96 -10 L-10 -10 Z" fill={c2} />
          <path d="M50 50 C80 58 84 92 52 104 L110 110 L110 40 Z" fill={c3} />
          <path d="M50 50 C30 64 6 56 -4 34 L-10 110 L20 110 Z" fill={sport === 'waterpolo' ? c2 : c1} opacity={sport === 'waterpolo' ? 1 : 0.92} />
          <g fill="none" stroke="rgba(0,0,0,.28)" strokeWidth="1.6">
            <path d="M50 50 C30 20 60 4 96 30" /><path d="M50 50 C80 58 84 92 52 104" /><path d="M50 50 C30 64 6 56 -4 34" />
            <path d="M38 30 C26 14 46 2 70 10" /><path d="M66 60 C88 66 90 84 74 96" /><path d="M38 60 C24 70 10 64 4 50" />
          </g>
        </g>
        {light}
      </svg>
    )
  }
  // football: classic panels
  const pent = (cx, cy, r, rot = 0) => Array.from({ length: 5 }, (_, i) => {
    const a = ((-90 + rot + i * 72) * Math.PI) / 180
    return `${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`
  }).join(' ')
  return (
    <svg {...common}>
      <defs>{shade}</defs>
      <circle cx="50" cy="50" r="46" fill="#F6F6F3" />
      <g clipPath={`url(#${id}c)`}>
        <polygon points={pent(50, 50, 14)} fill="#16191B" />
        {[0, 72, 144, 216, 288].map((r) => {
          const a = ((-90 + r) * Math.PI) / 180
          const cx = 50 + 36 * Math.cos(a), cy = 50 + 36 * Math.sin(a)
          return <polygon key={r} points={pent(cx, cy, 13, r + 36)} fill="#16191B" />
        })}
        <g stroke="#9BA0A3" strokeWidth="1" fill="none">
          {[0, 72, 144, 216, 288].map((r) => {
            const a = ((-90 + r) * Math.PI) / 180, b = ((-90 + r + 36) * Math.PI) / 180
            return <g key={r}><line x1={50 + 14 * Math.cos(a)} y1={50 + 14 * Math.sin(a)} x2={50 + 23 * Math.cos(a)} y2={50 + 23 * Math.sin(a)} /><line x1={50 + 25 * Math.cos(b)} y1={50 + 25 * Math.sin(b)} x2={50 + 46 * Math.cos(b)} y2={50 + 46 * Math.sin(b)} /></g>
          })}
        </g>
      </g>
      {light}
    </svg>
  )
}
