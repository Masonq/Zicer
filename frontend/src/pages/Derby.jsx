import { Link } from 'react-router-dom'
import { api } from '../api'
import { useT } from '../i18n'
import { useAuth, usePoll } from '../store'
import { Countdown, Avatar, MatchRow, Skeleton, Empty, fmtNum } from '../components/ui'
import { FeaturedMatch } from './Match'

export default function Derby() {
  const t = useT()
  const { user } = useAuth()
  const { data, loading } = usePoll(() => api('/derby'), [user?.id], 60000, true)
  if (loading && !data) return <Skeleton h={200} n={2} />
  if (!data) return <Empty title={t('error')} />
  const next = data.next[0]
  const rec = data.record || {}
  return (
    <div>
      <h1 className="h1">{t('derbyTitle')}</h1>
      {next ? (
        <>
          {next.status === 'scheduled' && (
            <div className="derby-banner" style={{ margin: '12px 0 16px', gridTemplateColumns: 'minmax(0,1fr) auto' }}>
              <div><div className="t">{t('derbyNext')}</div><div className="s">{t.league(next.league)}</div></div>
              <Countdown to={next.start} />
            </div>
          )}
          <FeaturedMatch m={next} />
        </>
      ) : <div className="card" style={{ marginTop: 12 }}><Empty title={t('noDerby')} /></div>}

      {data.past.length > 0 && (
        <section className="section">
          <div className="section-head"><h2 className="h2">{t('record')}</h2></div>
          <div className="kv">
            <div><b>{rec.zvezda || 0}</b><span>{t.serb('Crvena zvezda')}</span></div>
            <div><b>{rec.draw || 0}</b><span>{t('draw')}</span></div>
            <div><b>{rec.partizan || 0}</b><span>{t.serb('Partizan')}</span></div>
          </div>
          <div className="rows" style={{ marginTop: 12 }}>{data.past.map((m) => <MatchRow key={m.id} m={m} />)}</div>
        </section>
      )}

      {data.board.length > 0 && (
        <section className="section">
          <div className="section-head"><h2 className="h2">{t('derbyBoard')}</h2></div>
          <div className="card">
            {data.board.map((r, i) => (
              <Link key={r.user.id} to={`/u/${r.user.username}`} className="list-row">
                <span className={`rank${i < 3 ? ' top' : ''}`}>{i + 1}</span>
                <Avatar user={r.user} size={32} />
                <span className="grow ellip" style={{ fontWeight: 700 }}>{r.user.name || r.user.username}</span>
                <span className="num" style={{ color: 'var(--muted)' }}>{r.score[0]}:{r.score[1]}</span>
                <span className="badge gold" style={{ minWidth: 64 }}>{fmtNum(r.points)} {t('points')}</span>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
