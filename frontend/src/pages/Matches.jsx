import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X, Radio, Star } from 'lucide-react'
import { api, tz } from '../api'
import { useT } from '../i18n'
import { usePoll } from '../store'
import { MatchList, Skeleton, Empty } from '../components/ui'
import { SportSwitcher } from '../components/Sports'
import { useFav } from '../fav'

const PERIODS = [['morning', 5, 12], ['afternoon', 12, 17], ['evening', 17, 23], ['night', 23, 29]]

export default function Matches() {
  const t = useT()
  const [sp, setSp] = useSearchParams()
  const day = sp.get('dan') || 'today'
  const sport = sp.get('sport') || 'all'
  const serb = sp.get('srb') === '1'
  const favs = useFav()
  const set = (k, v) => { const n = new URLSearchParams(sp); n.set(k, v); setSp(n, { replace: true }) }
  const favKey = day === 'fav' ? favs.join(',') : ''
  const { data, loading, stale } = usePoll(() => api(`/matches?day=${day}&sport=${sport}&serbian=${serb}&tz=${tz()}${day === 'fav' ? `&ids=${favKey}` : ''}`),
    [day, sport, serb, favKey], day === 'live' || day === 'today' || day === 'fav' ? 30000 : 0, true, `matches:${day}:${sport}:${serb}:${favKey}`)
  const [sheet, setSheet] = useState(false)
  const [f, setF] = useState({ leagues: [], live: false, times: [] })
  const [draft, setDraft] = useState(f)
  const leagues = useMemo(() => {
    const m = new Map()
    for (const x of data || []) { const k = `${x.league.name}|${x.league.country}`; if (!m.has(k)) m.set(k, { k, league: x.league, n: 0 }); m.get(k).n++ }
    return [...m.values()]
  }, [data])
  const list = useMemo(() => (data || []).filter((m) => {
    if (f.live && m.status !== 'live') return false
    if (f.leagues.length && !f.leagues.includes(`${m.league.name}|${m.league.country}`)) return false
    if (f.times.length) {
      let h = new Date(m.start).getHours(); if (h < 5) h += 24
      if (!f.times.some((p) => { const r = PERIODS.find((x) => x[0] === p); return h >= r[1] && h < r[2] })) return false
    }
    return true
  }), [data, f])
  const nF = f.leagues.length + (f.live ? 1 : 0) + f.times.length + (serb ? 1 : 0)
  const liveN = (data || []).filter((m) => m.status === 'live').length
  const days = [['live', t('live')], ['yesterday', t('yesterday')], ['today', t('today')], ['tomorrow', t('tomorrow')], ['fav', t('favorites')]]
  const toLive = () => { const el = document.querySelector('.row .row-time.live'); el?.closest('.league')?.scrollIntoView({ behavior: 'smooth', block: 'start' }) }
  const tog = (arr, v) => (arr.includes(v) ? arr.filter((x) => x !== v) : [...arr, v])
  return (
    <div>
      <h1 className="h1">{t('matches')}</h1>
      <div style={{ marginTop: 12 }}><SportSwitcher value={sport} onChange={(v) => set('sport', v)} /></div>
      <div className="mx-bar">
        <div className="chips">
          {days.map(([k, l]) => <button key={k} className={`chip${day === k ? ' on' : ''}`} onClick={() => set('dan', k)}>{k === 'live' && <span className="dot" />}{k === 'fav' && <Star size={13} />}{l}</button>)}
        </div>
        <button className={`flt-btn${nF ? ' on' : ''}`} onClick={() => { setDraft(f); setSheet(true) }} aria-label={t('filters')}><SlidersHorizontal size={18} />{nF > 0 && <b>{nF}</b>}</button>
      </div>
      <div style={{ marginTop: 16 }} className={stale ? 'is-loading' : ''}>
        {loading && !data ? <Skeleton /> : list.length ? <MatchList matches={list} />
          : <div className="card"><Empty title={day === 'fav' ? t('favorites') : t('noMatches')} text={day === 'fav' ? t('noFav') : t('tryOtherDay')} /></div>}
      </div>
      {day === 'today' && liveN > 0 && <button className="to-live" onClick={toLive}><Radio size={16} />{t('toLive')} <b>{liveN}</b></button>}
      {sheet && (
        <div className="sheet-wrap" onClick={() => setSheet(false)}>
          <div className="sheet" onClick={(e) => e.stopPropagation()}>
            <div className="sheet-grip" />
            <div className="sheet-h"><b>{t('filters')}</b><button onClick={() => setSheet(false)} aria-label="close"><X size={20} /></button></div>
            <label className="sheet-row"><span><Radio size={16} />{t('onlyLive')}</span><input type="checkbox" checked={draft.live} onChange={(e) => setDraft({ ...draft, live: e.target.checked })} /></label>
            <label className="sheet-row"><span>{t('serbianOnly')}</span><input type="checkbox" checked={serb} onChange={(e) => set('srb', e.target.checked ? '1' : '0')} /></label>
            <div className="sheet-t">{t('timeOfDay')}</div>
            <div className="chips wrap">{PERIODS.map(([k]) => <button key={k} className={`chip${draft.times.includes(k) ? ' on' : ''}`} onClick={() => setDraft({ ...draft, times: tog(draft.times, k) })}>{t(k)}</button>)}</div>
            {leagues.length > 1 && <>
              <div className="sheet-t">{t('leagues')}</div>
              <div className="chips wrap">{leagues.map((l) => <button key={l.k} className={`chip${draft.leagues.includes(l.k) ? ' on' : ''}`} onClick={() => setDraft({ ...draft, leagues: tog(draft.leagues, l.k) })}>{t.league(l.league)}<span className="small" style={{ marginLeft: 6 }}>{l.n}</span></button>)}</div>
            </>}
            <div className="sheet-actions">
              <button className="btn btn-line" onClick={() => { const z = { leagues: [], live: false, times: [] }; setDraft(z); setF(z); set('srb', '0') }}>{t('reset')}</button>
              <button className="btn btn-gold" onClick={() => { setF(draft); setSheet(false) }}>{t('apply')}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
