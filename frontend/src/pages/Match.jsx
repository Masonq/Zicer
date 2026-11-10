import { useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { ChevronLeft, Languages, Sparkles, X } from 'lucide-react'
import { buildMarkets, tt } from '../markets'
import MatchCenter, { periodLabel } from '../components/MatchCenter'
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
        {m.status === 'live' ? <><span className="live-dot" />{m.minute === 'HT' ? t('ht') : /^[A-Z_]+$/.test(m.minute || '') ? periodLabel(m.minute, m.sport, t) : m.minute || t('live')}</> : t('finished')}
      </div>
    </div>
  )
}

export function FeaturedMatch({ m, label, linkable = true }) {
  const t = useT()
  const inner = (
    <>
      <div className="pitch-top">
        {label ? <span className="tag"><Sparkles size={15} />{label}</span> : <span className="ellip">{leagueLabel(m, t)}</span>}
        {label && <span className="ellip">{leagueLabel(m, t)}</span>}
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
  return <div className="pitch">{inner}</div>
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
  const { data: m, loading } = usePoll(() => api(`/matches/${id}`), [id, ver], 30000, true)
  if (loading && !m) return <Skeleton h={220} n={2} />
  if (!m) return <Empty title={t('error')} />
  const analysis = t.lang === 'ru' ? m.analysis.ru : t.serb(m.analysis.sr)
  return (
    <div>
      <button className="linkbtn" style={{ marginBottom: 12, fontSize: 14 }} onClick={() => (window.history.length > 1 ? nav(-1) : nav('/mecevi'))}><ChevronLeft size={18} />{t('matches')}</button>
      {m.sport === 'football' && m.ext_fm && (m.status === 'live' || m.status === 'finished') ? <MatchCenter m={m} hero fallback={<FeaturedMatch m={m} linkable={false} />} /> : <FeaturedMatch m={m} linkable={false} />}

      {m.mine ? (
        <div className="card pad" style={{ marginTop: 16, display: 'flex', alignItems: 'center', gap: 12 }}>
          <div className="grow"><div className="small">{t('yourPrediction')}</div><b>{pickLabel(t, m, m.mine.pick)} {fmtOdds(m.mine.odds)}</b><span className="small">, {t('stake')} {fmtNum(m.mine.stake)}</span></div>
          <span className={`badge ${m.mine.status}`}>{t(`pred_${m.mine.status}`)}</span>
        </div>
      ) : null}

      {(m.status === 'live' || m.status === 'finished') && !(m.sport === 'football' && m.ext_fm) && <MatchCenter m={m} />}

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

      {analysis && (
        <section className="section">
          <div className="section-head"><h2 className="h2">{t('analysis')}</h2></div>
          <div className="card pad"><p style={{ margin: 0, lineHeight: 1.6 }}>{analysis}</p></div>
        </section>
      )}

      {m.trends.length > 0 && (
        <section className="section">
          <div className="section-head"><h2 className="h2">{t('trends')}</h2></div>
          <div className="stack">{m.trends.map((tr, i) => (
            <div key={i} className="card pad trend"><div className="trend-text">{t.lang === 'ru' ? tr.ru : t.serb(tr.sr)}</div>
              <div className="trend-foot"><span /><span className="badge gold">{pickLabel(t, m, tr.pick)} {fmtOdds(tr.odds)}</span></div></div>
          ))}</div>
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
      {sel && <div style={{ height: 180 }} />}
      <Toast text={toast} onDone={() => setToast('')} />
    </div>
  )
}
