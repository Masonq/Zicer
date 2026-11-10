import { Component } from 'react'
import { api, tz } from '../api'
import { useT, translate, LangCtx } from '../i18n'
import { usePoll } from '../store'

import { IconBallFootball, IconBallBasketball, IconBallTennis, IconBallVolleyball, IconWaterpolo, IconLayoutGrid } from '@tabler/icons-react'

function HockeyIcon({ size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={size > 60 ? 1.1 : 2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 3l6.2 13.2a2 2 0 0 0 1.8 1.1H20" /><path d="M19 3l-4.6 9.4" />
      <ellipse cx="6.5" cy="18" rx="3" ry="1.3" /><path d="M3.5 18v1.3c0 .7 1.3 1.3 3 1.3s3-.6 3-1.3V18" />
    </svg>
  )
}

const ICONS = { football: IconBallFootball, basketball: IconBallBasketball, tennis: IconBallTennis, volleyball: IconBallVolleyball, waterpolo: IconWaterpolo, all: IconLayoutGrid }
export function SportIcon({ sport, size = 24 }) {
  if (sport === 'hockey') return <HockeyIcon size={size} />
  const I = ICONS[sport] || IconLayoutGrid
  return <I size={size} stroke={size > 60 ? 1.1 : 1.9} />
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
