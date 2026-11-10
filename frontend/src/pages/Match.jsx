import { useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { ChevronLeft, Languages, Sparkles } from 'lucide-react'
import { api } from '../api'
import { useT } from '../i18n'
import { useAuth, usePoll } from '../store'
import { Crest, OddsButtons, FormPills, SplitBar, Avatar, fmtTime, fmtDay, fmtOdds, fmtNum, Skeleton, Empty, pickLabel, MatchRow, leagueLabel, Toast } from '../components/ui'

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
      <div className="big">{m.score[0]}:{m.score[1]}</div>
      <div className={`lbl${m.status === 'live' ? ' live' : ''}`}>
        {m.status === 'live' ? <><span className="live-dot" />{m.minute === 'HT' ? t('ht') : m.minute || t('live')}</> : t('finished')}
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
      {m.status !== 'finished' && <OddsButtons m={m} wide />}
      {linkable && m.split && m.split.total > 0 && <div style={{ marginTop: 14 }}><SplitBar split={m.split} m={m} /></div>}
      {linkable && <Link to={`/mec/${m.id}`} className="btn btn-ghost btn-block" style={{ marginTop: 14 }}>{t('placePrediction')}{m.predictions?.length ? ` (${m.predictions.length})` : ''}</Link>}
    </>
  )
  return <div className="pitch">{inner}</div>
}

function PredictForm({ m, onDone }) {
  const t = useT()
  const { user, refresh } = useAuth()
  const nav = useNavigate()
  const [pick, setPick] = useState(null)
  const [stake, setStake] = useState(100)
  const [comment, setComment] = useState('')
  const [err, setErr] = useState('')
  const [busy, setBusy] = useState(false)
  if (!user) {
    return <div className="card pad" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
      <span>{t('needLogin')}</span><button className="btn btn-gold btn-sm" onClick={() => nav(`/prijava?next=/mec/${m.id}`)}>{t('signIn')}</button>
    </div>
  }
  const picks = m.sport === 'football' || m.best?.X ? ['1', 'X', '2'] : ['1', '2']
  const submit = async () => {
    setErr('')
    setBusy(true)
    try {
      await api(`/matches/${m.id}/predict`, { method: 'POST', body: { pick, stake: Number(stake), comment } })
      refresh(); onDone()
    } catch (e) {
      const map = { bank: 'bankLow', stake_range: 'stakeRange', closed: 'closed', exists: 'exists' }
      setErr(t(map[e.code] || 'error'))
    } finally { setBusy(false) }
  }
  return (
    <div className="card pad stack">
      <h2 className="h2">{t('placePrediction')}</h2>
      <div className="odds wide" style={{ gridTemplateColumns: `repeat(${picks.length}, 1fr)` }}>
        {picks.map((k) => (
          <button key={k} type="button" className={`odd${pick === k ? ' on' : ''}`} onClick={() => setPick(k)} disabled={!m.best?.[k]}>
            <span className="k">{pickLabel(t, m, k)}</span><span className="v">{fmtOdds(m.best?.[k]?.odds)}</span>
          </button>
        ))}
      </div>
      <div className="field">
        <label htmlFor="pstake">{t('stake')}</label>
        <input id="pstake" className="input" type="number" inputMode="numeric" min={10} max={1000} step={10} value={stake} onChange={(e) => setStake(e.target.value)} />
      </div>
      <div className="field">
        <label htmlFor="pcom">{t('comment')}</label>
        <textarea id="pcom" className="textarea" maxLength={1200} placeholder={t('commentPh')} value={comment} onChange={(e) => setComment(e.target.value)} />
      </div>
      {pick && <div className="slip-sum"><span>{t('potentialWin')}</span><b style={{ color: 'var(--gold)' }}>{fmtNum((m.best?.[pick]?.odds || 0) * (Number(stake) || 0))}</b></div>}
      {err && <div className="form-error">{err}</div>}
      <button className="btn btn-gold btn-block" disabled={!pick || busy} onClick={submit}>{t('placePrediction')}</button>
      <p className="note" style={{ margin: 0 }}>{t('virtual')}</p>
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
  const { data: m, loading } = usePoll(() => api(`/matches/${id}`), [id, ver], 30000)
  if (loading && !m) return <Skeleton h={220} n={2} />
  if (!m) return <Empty title={t('error')} />
  const analysis = t.lang === 'ru' ? m.analysis.ru : t.serb(m.analysis.sr)
  return (
    <div>
      <button className="linkbtn" style={{ marginBottom: 12, fontSize: 14 }} onClick={() => (window.history.length > 1 ? nav(-1) : nav('/mecevi'))}><ChevronLeft size={18} />{t('matches')}</button>
      <FeaturedMatch m={m} linkable={false} />

      {m.mine ? (
        <div className="card pad" style={{ marginTop: 16, display: 'flex', alignItems: 'center', gap: 12 }}>
          <div className="grow"><div className="small">{t('yourPrediction')}</div><b>{pickLabel(t, m, m.mine.pick)} {fmtOdds(m.mine.odds)}</b><span className="small">, {t('stake')} {fmtNum(m.mine.stake)}</span></div>
          <span className={`badge ${m.mine.status}`}>{t(`pred_${m.mine.status}`)}</span>
        </div>
      ) : m.open ? (
        <div style={{ marginTop: 16 }}><PredictForm m={m} onDone={() => { setVer((v) => v + 1); setToast(t('yourPrediction')) }} /></div>
      ) : null}

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
                  <Avatar user={p.user} size={32} />
                  <div style={{ minWidth: 0 }}><div className="ellip" style={{ fontWeight: 700 }}>{p.user.username}</div>{p.user.club && <div className="small ellip">{t.team(p.user.club)}</div>}</div>
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
      <Toast text={toast} onDone={() => setToast('')} />
    </div>
  )
}
