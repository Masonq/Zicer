import { useSearchParams } from 'react-router-dom'
import { api, tz } from '../api'
import { useT } from '../i18n'
import { usePoll } from '../store'
import { MatchList, Skeleton, Empty } from '../components/ui'
import { SportSwitcher } from '../components/Sports'

export default function Matches() {
  const t = useT()
  const [sp, setSp] = useSearchParams()
  const day = sp.get('dan') || 'today'
  const sport = sp.get('sport') || 'all'
  const serb = sp.get('srb') === '1'
  const set = (k, v) => { const n = new URLSearchParams(sp); n.set(k, v); setSp(n, { replace: true }) }
  const { data, loading } = usePoll(() => api(`/matches?day=${day}&sport=${sport}&serbian=${serb}&tz=${tz()}`), [day, sport, serb], day === 'live' || day === 'today' ? 30000 : 0, true)
  const days = [['live', t('live')], ['yesterday', t('yesterday')], ['today', t('today')], ['tomorrow', t('tomorrow')]]
  return (
    <div>
      <h1 className="h1">{t('matches')}</h1>
      <div style={{ marginTop: 12 }}><SportSwitcher value={sport} onChange={(v) => set('sport', v)} /></div>
      <div className="chips" style={{ marginTop: 12 }}>
        {days.map(([k, l]) => <button key={k} className={`chip${day === k ? ' on' : ''}`} onClick={() => set('dan', k)}>{k === 'live' && <span className="dot" />}{l}</button>)}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap', marginTop: 12 }}>
        <label className="toggle"><input type="checkbox" checked={serb} onChange={(e) => set('srb', e.target.checked ? '1' : '0')} />{t('serbianOnly')}</label>
      </div>
      <div style={{ marginTop: 18 }} className={loading && data ? 'is-loading' : ''}>
        {loading && !data ? <Skeleton /> : data && data.length ? <MatchList matches={data} /> : <div className="card"><Empty title={t('noMatches')} text={t('tryOtherDay')} /></div>}
      </div>
    </div>
  )
}
