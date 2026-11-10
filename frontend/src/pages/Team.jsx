import { useParams } from 'react-router-dom'
import { api } from '../api'
import { useT } from '../i18n'
import { usePoll } from '../store'
import { Crest, FormPills, MatchRow, Skeleton, Empty } from '../components/ui'

export default function TeamPage() {
  const { id } = useParams()
  const t = useT()
  const { data, loading } = usePoll(() => api(`/teams/${id}`), [id], 60000)
  if (loading && !data) return <Skeleton h={80} n={4} />
  if (!data) return <Empty title={t('error')} />
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <Crest team={data.team} size={64} />
        <div style={{ minWidth: 0 }}>
          <h1 className="h1 ellip" style={{ margin: 0 }}>{t.team(data.team)}</h1>
          <div className="small">{t.n(data.fans, 'fans')}</div>
        </div>
      </div>
      <div className="card pad" style={{ marginTop: 16, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}><b>{t('form')}</b><FormPills form={data.form} /></div>
      {data.next.length > 0 && <section className="section"><div className="section-head"><h2 className="h2">{t('upcoming')}</h2></div><div className="rows">{data.next.map((m) => <MatchRow key={m.id} m={m} />)}</div></section>}
      {data.last.length > 0 && <section className="section"><div className="section-head"><h2 className="h2">{t('lastMatches')}</h2></div><div className="rows">{data.last.map((m) => <MatchRow key={m.id} m={m} />)}</div></section>}
    </div>
  )
}
