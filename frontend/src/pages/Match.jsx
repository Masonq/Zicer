import { useState, useEffect } from 'react'
import { Link, useParams, useNavigate, useLocation } from 'react-router-dom'
import { ChevronLeft, Languages, Sparkles, X } from 'lucide-react'
import { buildMarkets, tt } from '../markets'
import MatchCenter, { periodLabel } from '../components/MatchCenter'
import { SportIcon } from '../components/Sports'
import { MatchHighlights } from '../components/Highlights'
import { api } from '../api'
import { useT } from '../i18n'
import { useAuth, usePoll, useSlip } from '../store'
import { Crest, OddsButtons, FormPills, SplitBar, Avatar, UserName, fmtTime, fmtDay, fmtOdds, fmtNum, Skeleton, Empty, pickLabel, MatchRow, leagueLabel, Toast } from '../components/ui'

function Tablo({ m }) {
  const t = useT()
  if (m.status === 'scheduled' || !m.score) {
    const day = fmtDay(m.start, t.locale)
    return (
      <div className="tablo">
        <div className="big time">{fmtTime(m.start, t.locale)}</div>
        <div className="lbl">{day.diff === 0 ? t('today') : day.diff === 1 ? t('tomorrow') : day.label}</div>
      </div>
    )
  }
  return (
    <div className="tablo">
      <div className="big">{m.score[0]}{m.sport === 'football' ? ':' : '–'}{m.score[1]}</div>
      <div className={`lbl${m.status === 'live' ? ' live' : ''}`}>
        {m.status === 'live' ? <><span className="live-dot" />{m.minute === 'HT' ? t('ht') : /^[A-Z0-9_]+$/.test(m.minute || '') ? periodLabel(m.minute, m.sport, t) : m.minute || t('live')}</> : t('finished')}
      </div>
    </div>
  )
}

// Faint field markings of the sport, drawn across the card background
function FieldArt({ sport }) {
  const L = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.2, vectorEffect: 'non-scaling-stroke' }
  let g
  if (sport === 'basketball') g = (<><circle cx="200" cy="100" r="28" {...L} /><line x1="200" y1="0" x2="200" y2="200" {...L} /><path d="M0 22 H40 A78 78 0 0 1 40 178 H0" {...L} /><path d="M400 22 H360 A78 78 0 0 0 360 178 H400" {...L} /><rect x="0" y="70" width="70" height="60" {...L} /><rect x="330" y="70" width="70" height="60" {...L} /></>)
  else if (sport === 'hockey') g = (<><rect x="2" y="2" width="396" height="196" rx="60" {...L} /><line x1="200" y1="0" x2="200" y2="200" {...L} /><line x1="140" y1="0" x2="140" y2="200" {...L} /><line x1="260" y1="0" x2="260" y2="200" {...L} /><circle cx="200" cy="100" r="26" {...L} /><circle cx="70" cy="55" r="22" {...L} /><circle cx="70" cy="145" r="22" {...L} /><circle cx="330" cy="55" r="22" {...L} /><circle cx="330" cy="145" r="22" {...L} /></>)
  else if (sport === 'tennis') g = (<><rect x="20" y="20" width="360" height="160" {...L} /><line x1="20" y1="40" x2="380" y2="40" {...L} /><line x1="20" y1="160" x2="380" y2="160" {...L} /><line x1="110" y1="40" x2="110" y2="160" {...L} /><line x1="290" y1="40" x2="290" y2="160" {...L} /><line x1="110" y1="100" x2="290" y2="100" {...L} /><line x1="200" y1="10" x2="200" y2="190" {...L} strokeDasharray="3 4" /></>)
  else if (sport === 'volleyball') g = (<><rect x="40" y="30" width="320" height="140" {...L} /><line x1="200" y1="15" x2="200" y2="185" {...L} /><line x1="146" y1="30" x2="146" y2="170" {...L} /><line x1="254" y1="30" x2="254" y2="170" {...L} /></>)
  else if (sport === 'waterpolo') g = (<>{[0, 1, 2, 3, 4, 5, 6].map((i) => <path key={i} d={`M0 ${30 + i * 24} Q 100 ${22 + i * 24} 200 ${30 + i * 24} T 400 ${30 + i * 24}`} {...L} />)}</>)
  else g = (<><rect x="2" y="2" width="396" height="196" {...L} /><line x1="200" y1="0" x2="200" y2="200" {...L} /><circle cx="200" cy="100" r="34" {...L} /><rect x="0" y="50" width="60" height="100" {...L} /><rect x="340" y="50" width="60" height="100" {...L} /><path d="M60 78 A26 26 0 0 1 60 122" {...L} /><path d="M340 78 A26 26 0 0 0 340 122" {...L} /></>)
  return <svg className="field-art" viewBox="0 0 400 200" preserveAspectRatio="none" aria-hidden="true">{g}</svg>
}

export function FeaturedMatch({ m, label, linkable = true }) {
  const t = useT()
  const inner = (
    <>
      <div className="pitch-top">
        <span className="sport-chip"><SportIcon sport={m.sport} size={16} />{t(m.sport)}</span>
        {label && <span className="tag"><Sparkles size={15} />{label}</span>}
        <span className="ellip" style={{ marginLeft: 'auto', textAlign: 'right' }}>{leagueLabel(m, t)}</span>
      </div>
      <div className="board">
        <Link to={`/klub/${m.home.id}`} className="board-team"><Crest team={m.home} size={58} /><span className="name">{t.team(m.home)}</span></Link>
        <Tablo m={m} />
        <Link to={`/klub/${m.away.id}`} className="board-team"><Crest team={m.away} size={58} /><span className="name">{t.team(m.away)}</span></Link>
      </div>
      {linkable && m.status !== 'finished' && <OddsButtons m={m} wide />}
      {linkable && m.split && m.split.total > 0 && <div style={{ marginTop: 14 }}><SplitBar split={m.split} m={m} /></div>}
      {linkable && <Link to={`/mec/${m.id}`} className="btn btn-ghost btn-block" style={{ marginTop: 14 }}>{t('placePrediction')}{m.predictions?.length ? ` (${m.predictions.length})` : ''}</Link>}
    </>
  )
  return (
    <div className={`pitch sc-${m.sport}`}>
      <FieldArt sport={m.sport} />
      <span className="pitch-glow" aria-hidden="true" />
      <span className="pitch-ball" aria-hidden="true"><img src={`/balls/${['football', 'basketball', 'tennis', 'hockey', 'volleyball', 'waterpolo'].includes(m.sport) ? m.sport : 'football'}.png`} alt="" width="104" height="104" /></span>
      {inner}
    </div>
  )
}

function MarketBoard({ m, sel, onSelect }) {
  const t = useT()
  const slip = useSlip()
  const [openCs, setOpenCs] = useState(false)
  const markets = buildMarkets(m, t)
  if (!markets.length) return null
  const Btn = ({ it }) => (
    <button type="button" className={`sel${sel === it.key ? ' on' : ''}${slip.has(m.id, it.key) && sel !== it.key ? ' slip' : ''}`} onClick={() => onSelect(it.key === sel ? null : it.key)} aria-pressed={sel === it.key}>
      <span className="l">{it.label}</span><span className="v">{fmtOdds(it.odds)}</span>
    </button>
  )
  return (
    <div>
      {markets.map((mk) => (
        <div className="market" key={mk.id}>
          <div className="market-title"><span>{mk.title}</span>
            {mk.id === 'cs' && <button onClick={() => setOpenCs((v) => !v)}>{openCs ? '−' : tt(t, 'more')}</button>}
          </div>
          {mk.id === 'cs' ? (
            <div className="cs-cols">
              {mk.columns.map((col, i) => (
                <div key={i}>
                  <div className="cs-head">{i === 0 ? '1' : i === 1 ? 'X' : '2'}</div>
                  {(openCs ? col : col.slice(0, 3)).map((it) => <Btn key={it.key} it={it} />)}
                </div>
              ))}
            </div>
          ) : (
            <div className="sel-grid" style={{ gridTemplateColumns: `repeat(${Math.min(mk.cols, mk.items.length)}, minmax(0, 1fr))` }}>
              {mk.items.map((it) => <Btn key={it.key} it={it} />)}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

function SelectionSheet({ m, sel, onClose, onPredicted }) {
  const t = useT()
  const { user, refresh } = useAuth()
  const slip = useSlip()
  const nav = useNavigate()
  const [mode, setMode] = useState('pick')
  const [stake, setStake] = useState(100)
  const [comment, setComment] = useState('')
  const [err, setErr] = useState('')
  const [busy, setBusy] = useState(false)
  if (!sel) return null
  const odds = m.best?.[sel]?.odds
  const onSlip = slip.has(m.id, sel)
  const submit = async () => {
    setErr(''); setBusy(true)
    try {
      await api(`/matches/${m.id}/predict`, { method: 'POST', body: { pick: sel, stake: Number(stake), comment } })
      refresh(); onPredicted()
    } catch (e) {
      const map = { bank: 'bankLow', stake_range: 'stakeRange', closed: 'closed', exists: 'exists', no_odds: 'closed' }
      setErr(t(map[e.code] || 'error'))
    } finally { setBusy(false) }
  }
  return (
    <div className="sheet" role="dialog" aria-label={t('placePrediction')}>
      <div className="sheet-head">
        <div className="grow" style={{ minWidth: 0 }}>
          <div className="small ellip">{t.team(m.home)} – {t.team(m.away)}</div>
          <div className="ellip" style={{ fontWeight: 800, fontSize: 16 }}>{pickLabel(t, m, sel)}</div>
        </div>
        <span className="num" style={{ fontSize: 24, color: 'var(--gold)' }}>{fmtOdds(odds)}</span>
        <button className="iconbtn" onClick={onClose} aria-label="Zatvori"><X size={20} /></button>
      </div>
      {mode === 'pick' ? (
        <div className="sheet-actions" style={m.mine ? { gridTemplateColumns: '1fr' } : undefined}>
          <button className="btn btn-ghost btn-sm" style={{ height: 44 }} onClick={() => { slip.toggle(m, sel, odds); onClose() }}>{onSlip ? t('removeFromTicket') : t('addToTicket')}</button>
          {!m.mine && <button className="btn btn-gold btn-sm" style={{ height: 44 }} onClick={() => (user ? setMode('predict') : nav(`/prijava?next=/mec/${m.id}`))}>{t('placePrediction')}</button>}
        </div>
      ) : (
        <div className="stack" style={{ marginTop: 12 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 10, alignItems: 'end' }}>
            <div className="field"><label htmlFor="pstake">{t('stake')}</label>
              <input id="pstake" className="input" type="number" inputMode="numeric" min={10} max={1000} step={10} value={stake} onChange={(e) => setStake(e.target.value)} /></div>
            <div className="right" style={{ paddingBottom: 6 }}><div className="small">{t('potentialWin')}</div><b className="num" style={{ fontSize: 20, color: 'var(--gold)' }}>{fmtNum((odds || 0) * (Number(stake) || 0))}</b></div>
          </div>
          <div className="chips">{[50, 100, 250, 500, 1000].map((v) => <button key={v} className={`chip${Number(stake) === v ? ' on' : ''}`} onClick={() => setStake(v)}>{v}</button>)}</div>
          <div className="field"><label htmlFor="pcom">{t('comment')}</label>
            <textarea id="pcom" className="textarea" style={{ minHeight: 70 }} maxLength={1200} placeholder={t('commentPh')} value={comment} onChange={(e) => setComment(e.target.value)} /></div>
          {err && <div className="form-error">{err}</div>}
          <button className="btn btn-gold btn-block" disabled={busy} onClick={submit}>{t('placePrediction')}</button>
          <p className="note" style={{ margin: 0 }}>{t('virtual')}</p>
        </div>
      )}
    </div>
  )
}

export function Comment({ text }) {
  const t = useT()
  const [tr, setTr] = useState(null)
  const [busy, setBusy] = useState(false)
  if (!text) return null
  const target = t.lang === 'ru' ? 'ru' : 'sr'
  const go = async () => {
    if (tr) { setTr(null); return }
    setBusy(true)
    try { const r = await api('/translate', { method: 'POST', body: { text, target } }); setTr(r.text) } catch {} finally { setBusy(false) }
  }
  return (
    <>
      <p className="pred-comment">{tr || text}</p>
      <button className="linkbtn" onClick={go} disabled={busy}><Languages size={14} />{tr ? t('original') : t('translate')}</button>
    </>
  )
}

function ScorePicker({ m, sp, onSaved }) {
  const t = useT()
  const { user } = useAuth()
  const [h, setH] = useState(sp?.mine?.[0] ?? 1)
  const [a, setA] = useState(sp?.mine?.[1] ?? 1)
  const [msg, setMsg] = useState('')
  const open = m.status === 'scheduled' && new Date(m.start) > new Date()
  const send = async () => {
    try { await api(`/matches/${m.id}/score`, { method: 'POST', body: { home: Number(h), away: Number(a) } }); setMsg(t('save')); onSaved() } catch { setMsg(t('error')) }
  }
  return (
    <div className="card pad stack">
      <h2 className="h2">{t('exactScore')}</h2>
      <p className="sub">{t('exactHint')}</p>
      {open && user && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr auto', gap: 10, alignItems: 'end' }}>
          <div className="field"><label>{t.team(m.home)}</label><input className="input num" type="number" min={0} max={200} value={h} onChange={(e) => setH(e.target.value)} style={{ textAlign: 'center', fontSize: 22 }} /></div>
          <span className="num" style={{ fontSize: 24, paddingBottom: 8 }}>:</span>
          <div className="field"><label>{t.team(m.away)}</label><input className="input num" type="number" min={0} max={200} value={a} onChange={(e) => setA(e.target.value)} style={{ textAlign: 'center', fontSize: 22 }} /></div>
          <button className="btn btn-gold" onClick={send}>{t('send')}</button>
        </div>
      )}
      {sp?.mine && <div className="small">{t('yourScore')}: <b className="num" style={{ color: 'var(--chalk)', fontSize: 16 }}>{sp.mine[0]}:{sp.mine[1]}</b></div>}
      {msg && <div className="small">{msg}</div>}
      {sp?.top?.length > 0 && (
        <div>
          <div className="small" style={{ marginBottom: 8 }}>{t('topScores')} ({t.n(sp.total, 'vote')})</div>
          <div className="chips">{sp.top.map((s, i) => <span key={i} className="chip"><b className="num" style={{ color: 'var(--chalk)' }}>{s.score[0]}:{s.score[1]}</b><span>{Math.round(100 * s.count / sp.total)}%</span></span>)}</div>
        </div>
      )}
    </div>
  )
}

export default function MatchPage() {
  const { id } = useParams()
  const t = useT()
  const nav = useNavigate()
  const [ver, setVer] = useState(0)
  const [toast, setToast] = useState('')
  const [sel, setSel] = useState(null)
  const loc = useLocation()
  const { data: full, loading } = usePoll(() => api(`/matches/${id}`), [id, ver], 30000, true, `match:${id}`)
  const placeholder = loc.state?.m && String(loc.state.m.id) === String(id) ? loc.state.m : null
  const m = full || placeholder
  useEffect(() => {
    if (full && loc.hash === '#highlights') setTimeout(() => document.getElementById('highlights')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 150)
  }, [!!full, loc.hash]) // eslint-disable-line react-hooks/exhaustive-deps
  if (loading && !m) return <div><div className="skeleton" style={{ height: 22, width: 90, borderRadius: 8, marginBottom: 12 }} /><div className="skeleton" style={{ height: 300, borderRadius: 22 }} /><Skeleton h={120} n={2} /></div>
  if (!m) return <Empty title={t('error')} />
  return (
    <div>
      <button className="linkbtn" style={{ marginBottom: 12, fontSize: 14 }} onClick={() => (window.history.length > 1 ? nav(-1) : nav('/mecevi'))}><ChevronLeft size={18} />{t('matches')}</button>
      {m.status === 'live' || m.status === 'finished' ? <MatchCenter m={m} fallback={<FeaturedMatch m={m} linkable={false} />} /> : <FeaturedMatch m={m} linkable={false} />}
      {!full && <div style={{ marginTop: 16 }}><Skeleton h={120} n={3} /></div>}
      {full && (
        <>
          <MatchHighlights list={m.highlights || []} />

      {m.mine ? (
        <div className="card pad" style={{ marginTop: 16, display: 'flex', alignItems: 'center', gap: 12 }}>
          <div className="grow"><div className="small">{t('yourPrediction')}</div><b>{pickLabel(t, m, m.mine.pick)} {fmtOdds(m.mine.odds)}</b><span className="small">, {t('stake')} {fmtNum(m.mine.stake)}</span></div>
          <span className={`badge ${m.mine.status}`}>{t(`pred_${m.mine.status}`)}</span>
        </div>
      ) : null}


      {m.open && (
        <section className="section" style={{ marginTop: 16 }}>
          <MarketBoard m={m} sel={sel} onSelect={setSel} />
        </section>
      )}
      <SelectionSheet key={sel || 'none'} m={m} sel={m.open ? sel : null} onClose={() => setSel(null)} onPredicted={() => { setSel(null); setVer((v) => v + 1); setToast(t('yourPrediction')) }} />

      {m.derby && m.score_picks && <div style={{ marginTop: 16 }}><ScorePicker m={m} sp={m.score_picks} onSaved={() => setVer((v) => v + 1)} /></div>}

      {m.split.total > 0 && (
        <section className="section">
          <div className="section-head"><h2 className="h2">{t('community')}</h2><span className="small">{t.n(m.split.total, 'predictions')}</span></div>
          <div className="card pad"><SplitBar split={m.split} m={m} /></div>
        </section>
      )}


      <section className="section">
        <div className="section-head"><h2 className="h2">{t('form')}</h2></div>
        <div className="card">
          <div className="list-row"><Crest team={m.home} size={26} /><span className="grow ellip" style={{ fontWeight: 700 }}>{t.team(m.home)}</span><FormPills form={m.form.home} /></div>
          <div className="list-row"><Crest team={m.away} size={26} /><span className="grow ellip" style={{ fontWeight: 700 }}>{t.team(m.away)}</span><FormPills form={m.form.away} /></div>
        </div>
      </section>

      {m.h2h.length > 0 && (
        <section className="section">
          <div className="section-head"><h2 className="h2">{t('h2h')}</h2></div>
          <div className="rows">{m.h2h.map((x) => <MatchRow key={x.id} m={x} />)}</div>
        </section>
      )}

      <section className="section">
        <div className="section-head"><h2 className="h2">{t('predictionsCap')}</h2><span className="small">{m.predictions.length}</span></div>
        <div className="card">
          {m.predictions.length === 0 ? <Empty title={t('noPredictions')} /> : m.predictions.map((p) => (
            <div className="pred" key={p.id}>
              <div className="pred-head">
                <Link to={`/u/${p.user.username}`} style={{ display: 'flex', alignItems: 'center', gap: 10, minWidth: 0 }}>
                  <Avatar user={p.user} size={34} />
                  <UserName user={p.user} sub={p.user.club ? t.team(p.user.club) : null} />
                </Link>
                <div className="pred-pick">
                  <span className="badge gold">{pickLabel(t, m, p.pick)} {fmtOdds(p.odds)}</span>
                  {p.status !== 'open' && <span className={`badge ${p.status}`}>{t(`pred_${p.status}`)}</span>}
                </div>
              </div>
              <Comment text={p.comment} />
            </div>
          ))}
        </div>
      </section>
        </>
      )}
      {sel && <div style={{ height: 180 }} />}
      <Toast text={toast} onDone={() => setToast('')} />
    </div>
  )
}
