import { Link, useParams } from 'react-router-dom'
import { api } from '../api'
import { useT } from '../i18n'
import { usePoll } from '../store'
import { Avatar, Crest, fmtNum, fmtOdds, pickLabel, Skeleton, Empty } from '../components/ui'

export function ProfileView({ data, editable = false }) {
  const t = useT()
  const u = data.user, s = data.stats
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <Avatar user={u} size={72} />
        <div style={{ minWidth: 0 }}>
          <h1 className="h1 ellip" style={{ margin: 0 }}>{u.name || u.username}</h1>
          <div className="small">@{u.username}</div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 4 }}>
            {u.fav_football && <Link to={`/klub/${u.fav_football.id}`} className="small" style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><Crest team={u.fav_football} size={18} />{t.team(u.fav_football)}</Link>}
            {u.fav_basket && <Link to={`/klub/${u.fav_basket.id}`} className="small" style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><Crest team={u.fav_basket} size={18} />{t.team(u.fav_basket)}</Link>}
          </div>
        </div>
      </div>
      {u.bio && <p style={{ margin: '12px 0 0', lineHeight: 1.5 }}>{u.bio}</p>}
      {editable && <Link to="/profil/uredi" className="btn btn-ghost btn-block" style={{ marginTop: 14, height: 42 }}>{t('editProfile')}</Link>}
      <div className="kv" style={{ marginTop: 16 }}>
        <div><b className={s.profit >= 0 ? 'pos' : 'neg'}>{s.profit > 0 ? '+' : ''}{fmtNum(s.profit)}</b><span>{t('profit')}</span></div>
        <div><b>{s.roi}%</b><span>{t('roi')}</span></div>
        <div><b>{s.winrate}%</b><span>{t('winrate')}</span></div>
      </div>
      <div className="kv" style={{ marginTop: 8, gridTemplateColumns: '1fr 1fr' }}>
        <div><b>{fmtNum(u.bank)}</b><span>{t('bank')}</span></div>
        <div><b>{s.count}</b><span>{t('count')}</span></div>
      </div>

      {data.tickets.length > 0 && (
        <section className="section">
          <div className="section-head"><h2 className="h2">{t('tickets')}</h2></div>
          <div className="card">
            {data.tickets.map((tk) => (
              <Link key={tk.id} to={`/tiket/${tk.id}`} className="list-row">
                <div className="grow"><div style={{ fontWeight: 700 }}>{t.n(tk.items.length, 'pairs')}</div><div className="small">{t('totalOdds')} {fmtOdds(tk.total_odds)}</div></div>
                <span className={`badge ${tk.status}`}>{t(`status_${tk.status}`)}</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="section">
        <div className="section-head"><h2 className="h2">{t('history')}</h2></div>
        <div className="card">
          {data.predictions.length === 0 ? <Empty title={t('noHistory')} /> : data.predictions.map((p) => (
            <Link key={p.id} to={`/mec/${p.match.id}`} className="list-row">
              <div className="grow">
                <div className="ellip" style={{ fontWeight: 700 }}>{t.team(p.match.home)} – {t.team(p.match.away)}</div>
                <div className="small ellip">{pickLabel(t, p.match, p.pick)} {fmtOdds(p.odds)}, {t('stake')} {fmtNum(p.stake)}</div>
              </div>
              <div className="right" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4 }}>
                <span className={`badge ${p.status}`}>{t(`pred_${p.status}`)}</span>
                {p.status !== 'open' && <span className={`num ${p.profit >= 0 ? 'pos' : 'neg'}`}>{p.profit > 0 ? '+' : ''}{fmtNum(p.profit)}</span>}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

export default function Profile() {
  const { username } = useParams()
  const t = useT()
  const { data, loading } = usePoll(() => api(`/users/${encodeURIComponent(username)}`), [username])
  if (loading && !data) return <Skeleton h={90} n={4} />
  if (!data) return <Empty title={t('error')} />
  return <ProfileView data={data} />
}
