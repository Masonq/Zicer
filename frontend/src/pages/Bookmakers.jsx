import { ExternalLink, Star } from 'lucide-react'
import { api } from '../api'
import { useT } from '../i18n'
import { usePoll } from '../store'
import { Skeleton } from '../components/ui'

export default function Bookmakers() {
  const t = useT()
  const { data } = usePoll(() => api('/bookmakers'), [], 0, false, 'bookmakers')
  return (
    <div>
      <h1 className="h1">{t('bookmakers')}</h1>
      <div style={{ marginTop: 16 }}>
        {!data ? <Skeleton h={72} n={5} /> : (
          <div className="card">
            {data.map((b, i) => (
              <div key={b.id} className="bm" style={{ gridTemplateColumns: '44px minmax(0,1fr) auto' }}>
                <span className="bm-logo" style={{ background: b.color }}>{b.name.slice(0, 1)}</span>
                <div style={{ minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}><b>{i + 1}. {b.name}</b><span className="small" style={{ display: 'inline-flex', alignItems: 'center', gap: 3 }}><Star size={13} color="var(--gold)" fill="var(--gold)" />{b.rating.toFixed(1)}</span></div>
                  <div className="small">{t.lang === 'ru' ? b.bonus_ru : t.serb(b.bonus_sr)}</div>
                </div>
                <a className="btn btn-gold btn-sm" href={b.url} target="_blank" rel="noopener sponsored"><ExternalLink size={15} />{t('visit')}</a>
              </div>
            ))}
          </div>
        )}
      </div>
      <p className="note" style={{ marginTop: 12 }}>{t('bmNote')}</p>
    </div>
  )
}
