import { Link, useSearchParams } from 'react-router-dom'
import { api } from '../api'
import { useT } from '../i18n'
import { usePoll } from '../store'
import { Crest, Avatar, fmtNum, fmtOdds, Skeleton, Empty } from '../components/ui'
import { MiniLine } from '../components/Bits'
import { ChevronUp, ChevronDown } from 'lucide-react'

export default function Ranking() {
  const t = useT()
  const [sp, setSp] = useSearchParams()
  const tab = sp.get('tab') || 'prognozeri'
  const period = sp.get('period') || 'month'
  const sport = sp.get('sport') || 'football'
  const set = (k, v) => { const n = new URLSearchParams(sp); n.set(k, v); setSp(n, { replace: true }) }
  const url = tab === 'klubovi' ? `/clubs/battle?sport=${sport}&period=${period}` : tab === 'tiketi' ? '/tickets?scope=won' : `/ranking?period=${period}`
  const { data, loading } = usePoll(() => api(url), [url], 60000, false, `rank:${url}`)
  return (
    <div>
      <h1 className="h1">{t('ranking')}</h1>
      <div className="seg" style={{ marginTop: 12 }}>
        {[['prognozeri', t('tipsters')], ['klubovi', t('fanBattle')], ['tiketi', t('tickets')]].map(([k, l]) => <button key={k} className={tab === k ? 'on' : ''} onClick={() => set('tab', k)}>{l}</button>)}
      </div>
      {tab !== 'tiketi' && (
        <div className="chips" style={{ marginTop: 12 }}>
          {[['week', t('week')], ['month', t('month')], ['all', t('allTime')]].map(([k, l]) => <button key={k} className={`chip${period === k ? ' on' : ''}`} onClick={() => set('period', k)}>{l}</button>)}
          {tab === 'klubovi' && <span style={{ width: 8, flex: 'none' }} />}
          {tab === 'klubovi' && [['football', t('football')], ['basketball', t('basketball')]].map(([k, l]) => <button key={k} className={`chip${sport === k ? ' on' : ''}`} onClick={() => set('sport', k)}>{l}</button>)}
        </div>
      )}
      <div style={{ marginTop: 16 }}>
        {loading && !data ? <Skeleton h={56} n={2} /> : !data || !data.length ? <div className="card"><Empty title={tab === 'tiketi' ? t('noTickets') : t('noHistory')} /></div> : (
          <div className={tab === 'prognozeri' ? 'rk-wrap' : 'card'}>
            {tab === 'prognozeri' && data.length >= 3 && (
              <div className="podium">
                {[1, 0, 2].map((i) => { const r = data[i]; return (
                  <Link key={r.user.id} to={`/u/${r.user.username}`} className={`pod p${i + 1}`}>
                    <span className="pod-av"><Avatar user={r.user} size={i === 0 ? 76 : 60} /><em>{i + 1}</em></span>
                    <b className="ellip">{r.user.name || r.user.username}</b>
                    <span className={`num ${r.profit >= 0 ? 'pos' : 'neg'}`}>{r.profit > 0 ? '+' : ''}{fmtNum(r.profit)}</span>
                    <span className="pod-step"><span>{i + 1}</span></span>
                  </Link>) })}
              </div>
            )}
            {tab === 'prognozeri' && data.length > (data.length >= 3 ? 3 : 0) && <div className="card">{data.slice(data.length >= 3 ? 3 : 0).map((r, j) => { const i = j + (data.length >= 3 ? 3 : 0); return (
              <Link key={r.user.id} to={`/u/${r.user.username}`} className="list-row rk-row">
                <span className="rank">{i + 1}</span>
                <span className={`rk-d ${r.delta > 0 ? 'up' : r.delta < 0 ? 'down' : ''}`}>{r.delta > 0 ? <><ChevronUp size={14} />{r.delta}</> : r.delta < 0 ? <><ChevronDown size={14} />{-r.delta}</> : '–'}</span>
                <Avatar user={r.user} size={34} />
                <div className="grow"><div className="ellip" style={{ fontWeight: 700 }}>{r.user.name || r.user.username}</div><div className="small ellip">{t.n(r.count, 'predictions')}, {r.winrate}%</div></div>
                <MiniLine data={r.form || []} />
                <div className="right"><div className={`num ${r.profit >= 0 ? 'pos' : 'neg'}`} style={{ fontSize: 17 }}>{r.profit > 0 ? '+' : ''}{fmtNum(r.profit)}</div><div className="small">ROI {r.roi}%</div></div>
              </Link>) })}</div>}
            {tab === 'klubovi' && data.map((r, i) => (
              <Link to={`/klub/${r.team.id}`} className="list-row" key={r.team.id}>
                <span className={`rank${i < 3 ? ' top' : ''}`}>{i + 1}</span>
                <Crest team={r.team} size={32} />
                <div className="grow"><div className="ellip" style={{ fontWeight: 700 }}>{t.team(r.team)}</div><div className="small">{t.n(r.fans, 'fans')}, {t.n(r.predictions, 'predictions')}</div></div>
                <div className="right"><div className={`num ${r.avg >= 0 ? 'pos' : 'neg'}`} style={{ fontSize: 17 }}>{r.avg > 0 ? '+' : ''}{fmtNum(r.avg, 1)}</div><div className="small">{t('avgPerFan')}</div></div>
              </Link>
            ))}
            {tab === 'tiketi' && data.map((tk) => (
              <Link key={tk.id} to={`/tiket/${tk.id}`} className="list-row">
                <Avatar user={tk.user} size={34} />
                <div className="grow"><div className="ellip" style={{ fontWeight: 700 }}>{tk.user.name || tk.user.username}</div><div className="small">{t('totalOdds')} {fmtOdds(tk.total_odds)}</div></div>
                <span className="num pos" style={{ fontSize: 17 }}>+{fmtNum(tk.profit)}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
