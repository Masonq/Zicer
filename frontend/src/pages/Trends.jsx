import { api } from '../api'
import { useT } from '../i18n'
import { usePoll } from '../store'
import { Skeleton, Empty } from '../components/ui'
import { TrendCard } from './Home'

export default function Trends() {
  const t = useT()
  const { data, loading } = usePoll(() => api('/trends'), [], 120000, false, 'trends')
  return (
    <div>
      <h1 className="h1">{t('trends')}</h1>
      <p className="sub">{t('trendsHint')}</p>
      <div style={{ marginTop: 16 }}>
        {loading && !data ? <Skeleton h={110} n={4} /> : data && data.length ? <div className="grid-2">{data.map((tr, i) => <TrendCard key={i} tr={tr} />)}</div> : <div className="card"><Empty title={t('noTrends')} /></div>}
      </div>
    </div>
  )
}
