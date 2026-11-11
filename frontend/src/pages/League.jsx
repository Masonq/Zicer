import { useParams } from 'react-router-dom'
import { api, tz } from '../api'
import { useT } from '../i18n'
import { usePoll } from '../store'
import { MatchList, Skeleton, Empty } from '../components/ui'
import { SportIcon } from '../components/Sports'
import { useSeo } from '../seo'

// League landing page: the matches of one league for the coming days (search engines love these)
export default function League() {
  const { id: raw } = useParams()
  const id = parseInt(raw, 10)
  const t = useT()
  const { data, loading } = usePoll(() => api(`/matches?league=${id}&tz=${tz()}`), [id], 60000, true, `league:${id}`)
  const lg = data && data[0] ? data[0].league : null
  const name = lg ? t.league(lg) : ''
  useSeo(name ? `${name} — ${t('leaguePredictions')} | Winly` : 'Winly', name ? `${name}: ${t('leagueSeoDesc')}` : '')
  const live = (data || []).filter((m) => m.status === 'live')
  const next = (data || []).filter((m) => m.status === 'scheduled')
  const done = (data || []).filter((m) => m.status === 'finished').reverse()
  return (
    <div>
      <h1 className="h1" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>{data && data[0] && <span className={`league-sport ls-${data[0].sport}`}><SportIcon sport={data[0].sport} size={18} /></span>}{name || ' '}</h1>
      <p className="small" style={{ marginTop: 6 }}>{t('leagueSeoDesc')}</p>
      {loading && !data ? <Skeleton /> : !data || !data.length ? <div className="card" style={{ marginTop: 16 }}><Empty title={t('noMatches')} /></div> : (
        <>
          {live.length > 0 && <section className="section"><div className="section-head"><h2 className="h2">{t('live')}</h2></div><MatchList matches={live} /></section>}
          {next.length > 0 && <section className="section"><div className="section-head"><h2 className="h2">{t('upcoming')}</h2></div><MatchList matches={next} /></section>}
          {done.length > 0 && <section className="section"><div className="section-head"><h2 className="h2">{t('results')}</h2></div><MatchList matches={done} /></section>}
        </>
      )}
    </div>
  )
}
