import { Component } from 'react'
import { api, tz } from '../api'
import { useT, translate, LangCtx } from '../i18n'
import { usePoll } from '../store'

const P = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' }
export function SportIcon({ sport, size = 26 }) {
  const s = { width: size, height: size, viewBox: '0 0 24 24' }
  switch (sport) {
    case 'football': return <svg {...s}><circle cx="12" cy="12" r="9.2" {...P} /><path d="M12 7.6l3.7 2.7-1.4 4.4H9.7l-1.4-4.4z" {...P} /><path d="M12 7.6V3.2M15.7 10.3l4.1-1.4M14.3 14.7l2.6 3.6M9.7 14.7l-2.6 3.6M8.3 10.3L4.2 8.9" {...P} /></svg>
    case 'basketball': return <svg {...s}><circle cx="12" cy="12" r="9.2" {...P} /><path d="M2.8 12h18.4M12 2.8v18.4" {...P} /><path d="M5.6 5.4c2.4 2.2 3.4 4.4 3.4 6.6s-1 4.4-3.4 6.6M18.4 5.4C16 7.6 15 9.8 15 12s1 4.4 3.4 6.6" {...P} /></svg>
    case 'tennis': return <svg {...s}><circle cx="12" cy="12" r="9.2" {...P} /><path d="M5.2 5.6c3.1 3.4 3.1 9.4 0 12.8M18.8 5.6c-3.1 3.4-3.1 9.4 0 12.8" {...P} /></svg>
    case 'hockey': return <svg {...s}><path d="M7 3l5.6 12.5c.4.9 1.3 1.5 2.3 1.5H20" {...P} /><path d="M17 3l-3.2 7.2" {...P} /><ellipse cx="7.5" cy="18.5" rx="3.2" ry="1.6" {...P} /><path d="M4.3 18.5v1.2c0 .9 1.4 1.6 3.2 1.6s3.2-.7 3.2-1.6v-1.2" {...P} /></svg>
    case 'volleyball': return <svg {...s}><circle cx="12" cy="12" r="9.2" {...P} /><path d="M12 12c0-4 2-7.2 5-8.6M12 12c-3.5 2-7.3 2.1-9.9.6M12 12c3.5 2 5.4 5.3 5.2 8.5" {...P} /></svg>
    case 'waterpolo': return <svg {...s}><circle cx="12" cy="9.5" r="6.3" {...P} /><path d="M8 5.6c1.6 1.4 2.3 3 2.3 3.9M16 5.6c-1.6 1.4-2.3 3-2.3 3.9M5.8 10h12.4" {...P} /><path d="M2.5 19c1.6 0 1.6-1.2 3.2-1.2s1.6 1.2 3.2 1.2 1.6-1.2 3.1-1.2 1.6 1.2 3.2 1.2 1.6-1.2 3.2-1.2 1.6 1.2 3.1 1.2" {...P} /></svg>
    default: return <svg {...s}><rect x="3.5" y="3.5" width="7" height="7" rx="2" {...P} /><rect x="13.5" y="3.5" width="7" height="7" rx="2" {...P} /><rect x="3.5" y="13.5" width="7" height="7" rx="2" {...P} /><rect x="13.5" y="13.5" width="7" height="7" rx="2" {...P} /></svg>
  }
}

export function SportSwitcher({ value, onChange }) {
  const t = useT()
  const { data } = usePoll(() => api(`/sports?tz=${tz()}`), [], 60000)
  const list = [{ sport: 'all', live: (data || []).reduce((a, x) => a + x.live, 0), soon: (data || []).reduce((a, x) => a + x.soon, 0) }, ...(data || [{ sport: 'football' }, { sport: 'basketball' }])]
  return (
    <div className="sports" role="tablist" aria-label={t('allSports')}>
      {list.map((x) => (
        <button key={x.sport} role="tab" aria-selected={value === x.sport} className={`sport${value === x.sport ? ' on' : ''}`} onClick={() => onChange(x.sport)}>
          <span className="sport-ico"><SportIcon sport={x.sport} /></span>
          <span className="sport-name">{x.sport === 'all' ? t('all') : t(x.sport)}</span>
          <span className="sport-count">{x.live > 0 ? <><span className="live-dot" />{x.live}</> : (x.soon ?? '')}</span>
        </button>
      ))}
    </div>
  )
}

export class ErrorBoundary extends Component {
  static contextType = LangCtx
  constructor(p) { super(p); this.state = { err: null } }
  static getDerivedStateFromError(err) { return { err } }
  componentDidUpdate(prev) { if (prev.resetKey !== this.props.resetKey && this.state.err) this.setState({ err: null }) }
  render() {
    if (!this.state.err) return this.props.children
    const lang = this.context?.lang || 'sr'
    return (
      <div className="empty"><b>{translate(lang, 'crashTitle')}</b>
        <button className="btn btn-gold btn-sm" style={{ marginTop: 14 }} onClick={() => window.location.reload()}>{translate(lang, 'reload')}</button>
      </div>
    )
  }
}
