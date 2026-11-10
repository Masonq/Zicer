import { useEffect, useState } from 'react'
import { Navigate, Link } from 'react-router-dom'
import { Send, ChevronRight, LogOut } from 'lucide-react'
import { api } from '../api'
import { useT } from '../i18n'
import { useAuth, usePoll } from '../store'
import { Crest, Skeleton } from '../components/ui'
import { ProfileView } from './Profile'

export default function Me() {
  const t = useT()
  const { user, ready, logout } = useAuth()
  const { data } = usePoll(() => (user ? api(`/users/${user.username}`) : Promise.resolve(null)), [user?.id, user?.bank, user?.username, user?.avatar, user?.display_name, user?.bio], 0, true)
  const [tg, setTg] = useState(null)
  useEffect(() => { if (user) api('/me/telegram').then(setTg).catch(() => {}) }, [user?.id]) // eslint-disable-line
  if (!ready) return <Skeleton />
  if (!user) return <Navigate to="/prijava" replace />
  return (
    <div>
      {data ? <ProfileView data={data} editable /> : <Skeleton h={90} n={2} />}
      <section className="section">
        <div className="section-head"><h2 className="h2">{t('settings')}</h2></div>
        <div className="card">
          <Link to="/izbor-kluba" className="list-row">
            <div className="grow"><div style={{ fontWeight: 700 }}>{t('chooseClub')}</div>
              <div className="small" style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 2 }}>
                {user.fav_football ? <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><Crest team={user.fav_football} size={16} />{t.team(user.fav_football)}</span> : null}
                {user.fav_basket ? <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><Crest team={user.fav_basket} size={16} />{t.team(user.fav_basket)}</span> : null}
                {!user.fav_football && !user.fav_basket && t('none')}
              </div>
            </div>
            <ChevronRight size={18} color="var(--muted)" />
          </Link>
          {tg?.enabled && (
            <div className="list-row">
              <Send size={20} color="var(--gold)" />
              <div className="grow"><div style={{ fontWeight: 700 }}>{t('telegram')}</div><div className="small">{t('telegramHint')}</div></div>
              {user.tg_linked ? <span className="badge won">{t('connected')}</span> : <a className="btn btn-gold btn-sm" href={tg.url} target="_blank" rel="noopener">{t('connect')}</a>}
            </div>
          )}
          <button className="list-row" style={{ width: '100%', textAlign: 'left' }} onClick={logout}>
            <LogOut size={20} color="var(--loss)" /><span className="grow" style={{ fontWeight: 700, color: 'var(--loss)' }}>{t('logout')}</span>
          </button>
        </div>
      </section>
    </div>
  )
}
