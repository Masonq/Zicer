import { useEffect, useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X, Radio, Star } from 'lucide-react'
import { api, tz } from '../api'
import { useT } from '../i18n'
import { usePoll } from '../store'
import { MatchList, Skeleton, Empty } from '../components/ui'
import { SportSwitcher, SportIcon } from '../components/Sports'
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
  const fbtn = useRef(null)
  const liveIdx = useRef(null)
  const [ptop, setPtop] = useState(0)
  const [f, setF] = useState({ leagues: [], live: false, times: [] })
  const [draft, setDraft] = useState(f)
  const leagues = useMemo(() => {
    const m = new Map()
    for (const x of data || []) { const k = `${x.league.name}|${x.league.country}`; if (!m.has(k)) m.set(k, { k, league: x.league, sport: x.sport, n: 0 }); m.get(k).n++ }
    return [...m.values()]
  }, [data])
  const [lq, setLq] = useState('')
  const pass = (m, ff) => {
    if (ff.live && m.status !== 'live') return false
    if (ff.leagues.length && !ff.leagues.includes(`${m.league.name}|${m.league.country}`)) return false
    if (ff.times.length) {
      let h = new Date(m.start).getHours(); if (h < 5) h += 24
      if (!ff.times.some((p) => { const r = PERIODS.find((x) => x[0] === p); return h >= r[1] && h < r[2] })) return false
    }
    return true
  }
  const list = useMemo(() => (data || []).filter((m) => pass(m, f)), [data, f]) // eslint-disable-line react-hooks/exhaustive-deps
  const count = (ff) => (data || []).filter((m) => pass(m, ff)).length
  const groups = useMemo(() => {
    const q = lq.trim().toLowerCase()
    const g = new Map()
    for (const l of leagues) {
      if (q && !t.league(l.league).toLowerCase().includes(q)) continue
      if (!g.has(l.sport)) g.set(l.sport, [])
      g.get(l.sport).push(l)
    }
    return [...g.entries()]
  }, [leagues, lq]) // eslint-disable-line react-hooks/exhaustive-deps
  const nF = f.leagues.length + (f.live ? 1 : 0) + f.times.length + (serb ? 1 : 0)
  const liveN = (data || []).filter((m) => m.status === 'live').length
  const days = [['live', t('live')], ['yesterday', t('yesterday')], ['today', t('today')], ['tomorrow', t('tomorrow')], ['fav', t('favorites')]]
  // each tap goes to the NEXT live match below the screen top (then wraps to the first), placed just under the top bars
  const toLive = () => {
    const rows = [...document.querySelectorAll('.row .row-time.live')].map((el) => el.closest('.row-swipe') || el.closest('.row'))
    if (!rows.length) return
    const top = document.querySelector('.topbar')
    const topH = top && getComputedStyle(top).display !== 'none' ? top.getBoundingClientRect().height : 0
    const headH = document.querySelector('.league-head')?.getBoundingClientRect().height || 0
    const line = topH + headH + 16
    // continue from the match we jumped to last time; the first tap starts from what is below the screen top
    let i = liveIdx.current != null && liveIdx.current < rows.length ? (liveIdx.current + 1) % rows.length : rows.findIndex((r) => r.getBoundingClientRect().top > line + 8)
    if (i < 0) i = 0
    liveIdx.current = i
    const row = rows[i]
    window.scrollTo({ top: row.getBoundingClientRect().top + window.scrollY - topH - headH - 12, behavior: 'smooth' })
    row.classList.remove('flash'); void row.offsetWidth; row.classList.add('flash')
  }

  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 60)
    on(); window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  const tog = (arr, v) => (arr.includes(v) ? arr.filter((x) => x !== v) : [...arr, v])
  return (
    <div className="mx-page">
      <h1 className="h1">{t('matches')}</h1>
      <div style={{ marginTop: 12 }}><SportSwitcher value={sport} onChange={(v) => set('sport', v)} /></div>
      <div className="mx-bar">
        <div className="chips">
          {days.map(([k, l]) => <button key={k} className={`chip${day === k ? ' on' : ''}`} onClick={() => set('dan', k)}>{k === 'live' && <span className="dot" />}{k === 'fav' && <Star size={13} />}{l}</button>)}
        </div>
        <button className={`flt-btn${nF ? ' on' : ''}`} ref={fbtn} onClick={() => { setDraft(f); setPtop(fbtn.current ? fbtn.current.getBoundingClientRect().bottom - fbtn.current.closest('.mx-page').getBoundingClientRect().top + 8 : 0); setSheet(true) }} aria-label={t('filters')}><SlidersHorizontal size={18} />{nF > 0 && <b>{nF}</b>}</button>
      </div>
      <div style={{ marginTop: 16 }} className={stale ? 'is-loading' : ''}>
        {loading && !data ? <Skeleton /> : list.length ? <MatchList matches={list} headExtra={day === 'today' && liveN > 0 && scrolled ? <button className="to-live" onClick={(e) => { e.stopPropagation(); toLive() }}><Radio size={14} />{t('toLive')}<b>{liveIdx.current != null ? `${liveIdx.current + 1}/${liveN}` : liveN}</b></button> : null} />
          : <div className="card"><Empty title={day === 'fav' ? t('favorites') : t('noMatches')} text={day === 'fav' ? t('noFav') : t('tryOtherDay')} /></div>}
      </div>
      {sheet && (
        <div className="flt-wrap" onClick={() => setSheet(false)}>
          <div className="flt-panel" style={{ '--ptop': `${ptop}px` }} onClick={(e) => e.stopPropagation()} role="dialog" aria-label={t('filters')}>
            <div className="sheet-grip" />
            <div className="flt-head"><b>{t('filters')}</b><button onClick={() => setSheet(false)} aria-label="close"><X size={20} /></button></div>
            <div className="flt-body">
              <div className="flt-col">
                <button className="sw-row" onClick={() => setDraft({ ...draft, live: !draft.live })}><span><Radio size={16} />{t('onlyLive')}</span><i className={`sw${draft.live ? ' on' : ''}`} /></button>
                <button className="sw-row" onClick={() => set('srb', serb ? '0' : '1')}><span>{t('serbianOnly')}</span><i className={`sw${serb ? ' on' : ''}`} /></button>
                <div className="sheet-t">{t('timeOfDay')}</div>
                <div className="seg4">{PERIODS.map(([k]) => <button key={k} className={draft.times.includes(k) ? 'on' : ''} onClick={() => setDraft({ ...draft, times: tog(draft.times, k) })}>{t(k)}</button>)}</div>
              </div>
              {leagues.length > 1 && (
                <div className="flt-col flt-leagues">
                  <div className="sheet-t">{t('leagues')}{draft.leagues.length > 0 && <button className="flt-clear" onClick={() => setDraft({ ...draft, leagues: [] })}>{t('all')}</button>}</div>
                  <input className="input flt-search" placeholder={t('searchLeague')} value={lq} onChange={(e) => setLq(e.target.value)} />
                  <div className="lg-list">
                    {groups.map(([sp, items]) => (
                      <div key={sp} className="lg-group">
                        <div className="lg-sport"><SportIcon sport={sp} size={14} />{t(sp)}</div>
                        {items.map((l) => (
                          <button key={l.k} className={`lg-row${draft.leagues.includes(l.k) ? ' on' : ''}`} onClick={() => setDraft({ ...draft, leagues: tog(draft.leagues, l.k) })}>
                            <i className="cbx" /><span className="ellip">{t.league(l.league)}</span><em>{l.n}</em>
                          </button>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="flt-foot">
              <button className="btn btn-line" onClick={() => { const z = { leagues: [], live: false, times: [] }; setDraft(z); setF(z); set('srb', '0') }}>{t('reset')}</button>
              <button className="btn btn-gold" onClick={() => { setF(draft); setSheet(false) }}>{t('showN')} {count(draft)}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
