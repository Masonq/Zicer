import { useState } from 'react'
import { useNavigate, Navigate } from 'react-router-dom'
import { api } from '../api'
import { useT } from '../i18n'
import { useAuth, usePoll } from '../store'
import { Crest, Skeleton } from '../components/ui'

function Picker({ sport, value, onChange }) {
  const t = useT()
  const { data } = usePoll(() => api(`/teams/serbian?sport=${sport}`), [sport])
  if (!data) return <Skeleton h={56} n={2} />
  return (
    <div className="club-grid">
      {data.map((tm) => (
        <button key={tm.id} type="button" className={`club-opt${value === tm.id ? ' on' : ''}`} onClick={() => onChange(value === tm.id ? null : tm.id)} aria-pressed={value === tm.id}>
          <Crest team={tm} size={32} /><span className="ellip">{t.team(tm)}</span>
        </button>
      ))}
    </div>
  )
}

export default function Onboarding() {
  const t = useT()
  const { user, ready, setUser } = useAuth()
  const nav = useNavigate()
  const [fb, setFb] = useState(user?.fav_football?.id || null)
  const [bb, setBb] = useState(user?.fav_basket?.id || null)
  const [busy, setBusy] = useState(false)
  if (!ready) return <Skeleton />
  if (!user) return <Navigate to="/prijava" replace />
  const save = async () => {
    setBusy(true)
    try {
      const u = await api('/me', { method: 'PATCH', body: { fav_football_id: fb || undefined, fav_basket_id: bb || undefined, clear_football: !fb, clear_basket: !bb } })
      setUser(u); nav('/', { replace: true })
    } finally { setBusy(false) }
  }
  return (
    <div>
      <h1 className="h1">{t('chooseClub')}</h1>
      <p className="sub">{t('chooseClubHint')}</p>
      <section className="section"><h2 className="h2" style={{ marginBottom: 12 }}>{t('footballClub')}</h2><Picker sport="football" value={fb} onChange={setFb} /></section>
      <section className="section"><h2 className="h2" style={{ marginBottom: 12 }}>{t('basketballClub')}</h2><Picker sport="basketball" value={bb} onChange={setBb} /></section>
      <div style={{ display: 'flex', gap: 10, marginTop: 24 }}>
        <button className="btn btn-gold" style={{ flex: 1 }} onClick={save} disabled={busy}>{t('save')}</button>
        <button className="btn btn-line" onClick={() => nav('/')}>{t('skip')}</button>
      </div>
    </div>
  )
}
