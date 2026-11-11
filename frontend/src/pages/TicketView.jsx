import { useState } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import { Share2, Link2, Download, CheckCircle2, Send, MessageCircle, Phone } from 'lucide-react'
import { api } from '../api'
import { useT } from '../i18n'
import { usePoll } from '../store'
import { Avatar, Crest, fmtOdds, fmtNum, pickLabel, Skeleton, Empty, Toast, StatusTime , matchUrl } from '../components/ui'

export default function TicketView() {
  const { id } = useParams()
  const [sp] = useSearchParams()
  const t = useT()
  const [toast, setToast] = useState('')
  const [fmt, setFmt] = useState('wide')
  const [busy, setBusy] = useState(false)
  const { data: tk, loading } = usePoll(() => api(`/tickets/${id}`), [id], 60000)
  if (loading && !tk) return <Skeleton h={120} n={3} />
  if (!tk) return <Empty title={t('error')} />
  const lang = t.lang === 'ru' ? 'ru' : t.lang === 'sr-cyr' ? 'cyr' : 'sr'
  const shareUrl = `${window.location.origin}/t/${tk.id}?lang=${lang}`
  const img = `/api/share/ticket/${tk.id}.png?s=${tk.status}&lang=${lang}&f=${fmt}`
  const text = `${t('shareText')} ${fmtOdds(tk.total_odds)}`
  // share the picture itself (Telegram, WhatsApp, Instagram stories...) where the phone allows it, otherwise the link
  const share = async () => {
    setBusy(true)
    try {
      const blob = await (await fetch(img)).blob()
      const file = new File([blob], `winly-tiket-${tk.id}.png`, { type: 'image/png' })
      if (navigator.canShare && navigator.canShare({ files: [file] })) { await navigator.share({ files: [file], title: 'Winly', text: `${text} ${shareUrl}` }); return }
      if (navigator.share) { await navigator.share({ title: 'Winly', text, url: shareUrl }); return }
      await copy()
    } catch { /* closed by the user */ } finally { setBusy(false) }
  }
  const copy = async () => { try { await navigator.clipboard.writeText(shareUrl); setToast(t('linkCopied')) } catch {} }
  const enc = encodeURIComponent
  const apps = [
    ['Telegram', `https://t.me/share/url?url=${enc(shareUrl)}&text=${enc(text)}`, Send],
    ['WhatsApp', `https://wa.me/?text=${enc(`${text} ${shareUrl}`)}`, MessageCircle],
    ['Viber', `viber://forward?text=${enc(`${text} ${shareUrl}`)}`, Phone],
  ]
  const color = { won: 'var(--win)', lost: 'var(--loss)' }[tk.status] || 'var(--chalk)'
  return (
    <div>
      {sp.get('novi') && <div className="card pad" style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14, borderColor: 'var(--win)' }}><CheckCircle2 color="var(--win)" /><b>{t('ticketPlaced')}</b></div>}
      {/* the slip itself */}
      <div className={`tslip st-${tk.status}${tk.status === 'open' && tk.items.some((i) => i.match.status === 'live') ? ' is-live' : ''}`}>
        <div className="tslip-head">
          <Link to={`/u/${tk.user.username}`} className="tslip-user"><Avatar user={tk.user} size={30} /><span className="ellip">{tk.user.name || tk.user.username}</span></Link>
          <span className="tslip-id num">#{tk.id}</span>
        </div>
        <div className="tslip-status">
          <span className={`tslip-chip ${tk.status}`}>{t(`status_${tk.status}`)}</span>
          <span className="small">{new Date(tk.created).toLocaleString(t.locale, { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' })}</span>
        </div>
        <div className="tslip-progress" aria-hidden="true">{tk.items.map((i) => <i key={i.match.id} className={i.status} />)}</div>
        <div className="small" style={{ marginTop: 6 }}>{t('itemsProgress').replace('{won}', tk.items.filter((i) => i.status === 'won').length).replace('{all}', tk.items.length)}</div>
        {tk.status === 'open' && (() => {
          // chance to pass by current odds: won legs count as done, open legs by their (live) price, bookmaker margin removed
          let p = 1
          for (const i of tk.items) {
            if (i.status === 'won' || i.status === 'void') continue
            if (i.status === 'lost') { p = 0; break }
            const cur = i.match.best?.[i.pick]?.odds || i.odds
            p *= Math.min(0.99, 0.95 / cur)
          }
          const pc = Math.round(p * 1000) / 10
          return (
            <div className="chance">
              <div className="chance-h"><span>{t('chance')}</span><b className="num">{pc < 1 ? pc.toFixed(1) : Math.round(pc)}%</b></div>
              <div className="chance-bar"><i style={{ width: `${Math.max(2, pc)}%` }} /></div>
              <small>{t('chanceHint')}</small>
            </div>
          )
        })()}
        <div className="tslip-nums">
          <div><span>{t('totalOdds')}</span><b className="num gold">{fmtOdds(tk.total_odds)}</b></div>
          <div><span>{t('stake')}</span><b className="num">{fmtNum(tk.stake)}</b></div>
          <div><span>{tk.status === 'won' ? t('win') : t('potentialWin')}</span><b className="num">{fmtNum(tk.potential)}</b></div>
        </div>
      </div>
      <div className="tsel-list">
        {tk.items.map((i) => {
          const m = i.match
          return (
            <Link key={m.id} to={matchUrl(m)} className={`tsel ${i.status}`}>
              <div className="tsel-top">
                <span className="tsel-lg">
                  <span className="ellip">{t.league(m.league)}</span>
                  {i.status !== 'open' && <span className={`tsel-res ${i.status}`}>{t(`pred_${i.status}`)}</span>}
                </span>
                <StatusTime m={m} />
              </div>
              <div className="tsel-main">
                <div className="tsel-teams">
                  <div className="row-team"><Crest team={m.home} size={20} /><span className="name">{t.team(m.home)}</span>{m.score && <span className="sc">{m.score[0]}</span>}</div>
                  <div className="row-team"><Crest team={m.away} size={20} /><span className="name">{t.team(m.away)}</span>{m.score && <span className="sc">{m.score[1]}</span>}</div>
                </div>
                <div className="tsel-pick">
                  <span className="tsel-label">{pickLabel(t, m, i.pick)}</span>
                  <b className="num">{fmtOdds(i.odds)}</b>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
      <section className="section">
        <div className="section-head"><h2 className="h2">{t('shareTicket')}</h2></div>
        <div className="seg" style={{ marginBottom: 12 }}>
          <button className={fmt === 'wide' ? 'on' : ''} onClick={() => setFmt('wide')}>{t('fmtPost')}</button>
          <button className={fmt === 'story' ? 'on' : ''} onClick={() => setFmt('story')}>{t('fmtStory')}</button>
        </div>
        <div className={`share-prev ${fmt}`}>
          {['wide', 'story'].map((f) => (
            <img key={f} src={`/api/share/ticket/${tk.id}.png?s=${tk.status}&lang=${lang}&f=${f}`} alt="" className={`sp-${f}`} style={{ display: f === fmt ? 'block' : 'none' }} />
          ))}
        </div>
        <button className="btn btn-gold btn-block" style={{ marginTop: 12, height: 48 }} onClick={share} disabled={busy}><Share2 size={18} />{t('shareImage')}</button>
        <div className="share-apps">
          {apps.map(([name, href, I]) => <a key={name} className="btn btn-ghost btn-sm" href={href} target="_blank" rel="noopener"><I size={16} />{name}</a>)}
          <button className="btn btn-ghost btn-sm" onClick={copy}><Link2 size={16} />{t('copy')}</button>
          <a className="btn btn-ghost btn-sm" href={img} download={`winly-tiket-${tk.id}.png`}><Download size={16} />{t('save')}</a>
        </div>
      </section>
      <Toast text={toast} onDone={() => setToast('')} />
    </div>
  )
}
