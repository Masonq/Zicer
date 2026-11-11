import { Shield, Flame, Trophy } from 'lucide-react'
import { AreaChart, Ring, Badges } from '../components/Bits'
import { InviteCard } from '../components/Invite'
import { SportIcon } from '../components/Sports'
import { Link, useParams } from 'react-router-dom'
import { api } from '../api'
import { useT } from '../i18n'
import { usePoll, useAuth } from '../store'
import { Avatar, Crest, fmtNum, fmtOdds, pickLabel, Skeleton, Empty } from '../components/ui'

export function ProfileView({ data, editable = false }) {
  const t = useT()
  const { user: me } = useAuth()
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
      {editable && (
        <div style={{ display: 'grid', gridTemplateColumns: me?.is_admin ? '1fr 1fr' : '1fr', gap: 10, marginTop: 14 }}>
          <Link to="/profil/uredi" className="btn btn-ghost btn-block prof-btn" style={{ height: 42 }}>{t('editProfile')}</Link>
          {me?.is_admin && <Link to="/admin" className="btn btn-ghost btn-block prof-btn" style={{ height: 42, gap: 8 }}><Shield size={17} />{t('admin')}</Link>}
        </div>
      )}
      <div className="pbento">
        <div className="pb-tile pb-ring"><Ring p={s.winrate} size={104} /><span>{t('winrate')}</span><small>{s.won} / {s.count}</small></div>
        <div className="pb-tile"><span className="pb-l">{t('profit')}</span><b className={`pb-v num ${s.profit >= 0 ? 'pos' : 'neg'}`}>{s.profit > 0 ? '+' : ''}{fmtNum(s.profit)}</b><small>ROI {s.roi}%</small></div>
        <div className="pb-tile"><span className="pb-l">{t('bank')}</span><b className="pb-v num">{fmtNum(u.bank)}</b><small>{t.n(s.count, 'predictions')}</small></div>
        {data.bento && <>
          <div className="pb-tile"><span className="pb-l"><Flame size={14} />{t('streak')}</span><b className="pb-v num">{data.bento.streak}</b><small>{t('bestStreak')} {data.bento.best_streak}</small></div>
          <div className="pb-tile"><span className="pb-l">{t('favSport')}</span>{data.bento.fav_sport ? <b className="pb-v pb-sport"><SportIcon sport={data.bento.fav_sport} size={22} />{t(data.bento.fav_sport)}</b> : <b className="pb-v">—</b>}</div>
          <div className="pb-tile pb-chart"><span className="pb-l">{t('bankMonth')}</span><AreaChart data={data.bento.curve} /></div>
          {data.bento.best_win && <Link to={`/mec/${data.bento.best_win.match.id}`} className="pb-tile pb-best"><span className="pb-l"><Trophy size={14} />{t('bestWin')}</span>
            <b className="pb-v num pos">+{fmtNum(data.bento.best_win.profit)}</b><small className="ellip">{t.team(data.bento.best_win.match.home)} – {t.team(data.bento.best_win.match.away)}, {fmtOdds(data.bento.best_win.odds)}</small></Link>}
        </>}
      </div>
      {editable && <InviteCard />}
      {data.bento && <section className="section"><div className="section-head"><h2 className="h2">{t('achievements')}</h2></div><Badges list={data.bento.achievements} /></section>}

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
  const { data, loading } = usePoll(() => api(`/users/${encodeURIComponent(username)}`), [username], 0, false, `user:${username}`)
  if (loading && !data) return <Skeleton h={90} n={4} />
  if (!data) return <Empty title={t('error')} />
  return <ProfileView data={data} />
}
