// Logo variants for Winly (preview page, not linked in the menu)
const G = '#F2C230', D = '#0F2A22', C = '#EEF3EE'

function MarkA({ size = 48, bg = D, fg = G }) {
  // "Rising W": a W drawn as a winning streak that breaks upward into an arrow
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      <rect width="64" height="64" rx="16" fill={bg} />
      <path d="M11 20 L20 45 L29 27 L38 45 L51 15" fill="none" stroke={fg} strokeWidth="6.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M43 14 L52 13 L52 22" fill="none" stroke={fg} strokeWidth="6.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
function MarkB({ size = 48, bg = G, fg = D }) {
  // "Ticket W": a betting ticket with side notches, W cut out of it
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      <path d="M12 8 H52 a6 6 0 0 1 6 6 V25 a7 7 0 0 0 0 14 V50 a6 6 0 0 1 -6 6 H12 a6 6 0 0 1 -6 -6 V39 a7 7 0 0 0 0 -14 V14 a6 6 0 0 1 6 -6 Z" fill={bg} />
      <path d="M17 22 L24 43 L32 29 L40 43 L47 22" fill="none" stroke={fg} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 15 H50" stroke={fg} strokeOpacity="0.25" strokeWidth="2" strokeDasharray="2 3" />
    </svg>
  )
}
function MarkC({ size = 48, bg = D, fg = G }) {
  // "Ball W": round badge, W with a ball as its centre peak
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      <circle cx="32" cy="32" r="30" fill={bg} />
      <circle cx="32" cy="32" r="27.5" fill="none" stroke={fg} strokeOpacity="0.35" strokeWidth="1.5" />
      <path d="M14 22 L22 44 L29 30 M35 30 L42 44 L50 22" fill="none" stroke={fg} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="32" cy="22" r="6" fill={fg} />
      <path d="M22 18 h4 M20 22 h5" stroke={fg} strokeWidth="2.4" strokeLinecap="round" opacity="0.7" />
    </svg>
  )
}
function MarkD({ size = 48, bg = G, fg = D }) {
  // "Club crest": supporters' shield with a star, W inside
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      <path d="M32 4 L54 11 V30 C54 44 44 54 32 60 C20 54 10 44 10 30 V11 Z" fill={bg} />
      <path d="M32 9.5 l2.2 4.5 4.9 .7 -3.6 3.4 .9 4.9 -4.4 -2.3 -4.4 2.3 .9 -4.9 -3.6 -3.4 4.9 -.7 Z" fill={fg} />
      <path d="M18 27 L24 45 L32 33 L40 45 L46 27" fill="none" stroke={fg} strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const VARIANTS = [
  { id: 'A', name: 'Rastuća serija', ru: 'Растущая серия', Mark: MarkA, note: 'W как график серии побед, последний штрих уходит вверх стрелкой. Читается как «выигрыш», «рост», «тренд».' },
  { id: 'B', name: 'Tiket', ru: 'Тикет', Mark: MarkB, note: 'Золотой купон с вырезами по бокам, внутри W. Прямая связь с тикетами — главной фишкой сервиса.' },
  { id: 'C', name: 'Lopta', ru: 'Мяч', Mark: MarkC, note: 'Круглый значок: W, где вершину заменяет мяч в движении. Спортивно и универсально для всех видов спорта.' },
  { id: 'D', name: 'Grb', ru: 'Герб', Mark: MarkD, note: 'Щит со звездой, как герб клуба. Про фанатов и битву болельщиков, близко сербской футбольной культуре.' },
]

function Word({ color = C, size = 34 }) {
  return <span style={{ fontFamily: 'var(--display)', fontWeight: 700, fontSize: size, letterSpacing: '0.01em', color, lineHeight: 1 }}>Winly</span>
}

export default function Brand() {
  return (
    <div>
      <h1 className="h1">Winly — варианты логотипа</h1>
      <p className="sub">Каждый вариант: иконка приложения, логотип на тёмном и светлом фоне, маленький размер (как вкладка браузера) и шапка сайта.</p>
      {VARIANTS.map(({ id, name, ru, Mark, note }) => (
        <section key={id} className="section">
          <div className="section-head"><h2 className="h2">{id}. {ru} <span className="small">({name})</span></h2></div>
          <div className="card pad stack">
            <p className="sub" style={{ margin: 0 }}>{note}</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 18, flexWrap: 'wrap' }}>
              <div style={{ borderRadius: 22, overflow: 'hidden', boxShadow: '0 8px 24px rgba(0,0,0,.35)', lineHeight: 0 }}><Mark size={96} /></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}><Mark size={44} /><Word /></div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, background: '#F4F6F2', borderRadius: 14, padding: '14px 16px' }}>
              <Mark size={40} bg={id === 'B' || id === 'D' ? G : D} fg={id === 'B' || id === 'D' ? D : G} /><Word color={D} size={30} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <span className="small">Мелко:</span><Mark size={32} /><Mark size={20} /><Mark size={16} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(15,42,34,.9)', border: '1px solid var(--line-soft)', borderRadius: 14, padding: '10px 14px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}><Mark size={30} /><Word size={24} color={G} /></div>
              <span className="bank-chip">9.000</span>
            </div>
          </div>
        </section>
      ))}
    </div>
  )
}
