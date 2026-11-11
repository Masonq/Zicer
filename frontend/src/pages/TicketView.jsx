import { useState } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import { Share2, Link2, Download, CheckCircle2, Send, MessageCircle, Phone } from 'lucide-react'
import { api } from '../api'
import { useT } from '../i18n'
import { usePoll } from '../store'
import { Avatar, Crest, fmtOdds, fmtNum, pickLabel, Skeleton, Empty, Toast, StatusTime } from '../components/ui'

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
  const shareUrl = `${window.location.origin}/t/${tk.id}`
  const lang = t.lang === 'ru' ? 'ru' : t.lang === 'sr-cyr' ? 'cyr' : 'sr'
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
      <div className="pitch">
        <div className="pitch-top"><Link to={`/u/${tk.user.username}`} style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--chalk)' }}><Avatar user={tk.user} size={26} />{tk.user.name || tk.user.username}</Link><span>#{tk.id}</span></div>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 12, margin: '18px 0 6px' }}>
          <div className="tablo" style={{ textAlign: 'left' }}><div className="big" style={{ fontSize: 40 }}>{fmtOdds(tk.total_odds)}</div><div className="lbl" style={{ justifyContent: 'flex-start' }}>{t('totalOdds')}</div></div>
          <div className="right"><div className="h1" style={{ color, margin: 0 }}>{t(`status_${tk.status}`)}</div><div className="small">{tk.status === 'won' ? t('win') : t('potentialWin')}: <b className="num" style={{ color: 'var(--chalk)', fontSize: 16 }}>{fmtNum(tk.potential)}</b></div></div>
        </div>
      </div>
      <div className="rows" style={{ marginTop: 14 }}>
        {tk.items.map((i) => (
          <Link key={i.match.id} to={`/mec/${i.match.id}`} className="row" style={{ gridTemplateColumns: '50px minmax(0,1fr) auto' }}>
            <StatusTime m={i.match} />
            <div className="row-teams">
              <div className="row-team"><Crest team={i.match.home} size={20} /><span className="name">{t.team(i.match.home)}</span>{i.match.score && <span className="sc">{i.match.score[0]}</span>}</div>
              <div className="row-team"><Crest team={i.match.away} size={20} /><span className="name">{t.team(i.match.away)}</span>{i.match.score && <span className="sc">{i.match.score[1]}</span>}</div>
            </div>
            <div className="right" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4 }}>
              <span className="badge gold">{pickLabel(t, i.match, i.pick)} {fmtOdds(i.odds)}</span>
              {i.status !== 'open' && <span className={`badge ${i.status}`}>{t(`pred_${i.status}`)}</span>}
            </div>
          </Link>
        ))}
      </div>
      <div className="card pad" style={{ marginTop: 14 }}>
        <div className="slip-sum"><span>{t('stake')}</span><b>{fmtNum(tk.stake)}</b></div>
        <div className="slip-sum"><span>{tk.status === 'won' ? t('win') : t('potentialWin')}</span><b style={{ color: 'var(--gold)' }}>{fmtNum(tk.potential)}</b></div>
      </div>
      <section className="section">
        <div className="section-head"><h2 className="h2">{t('shareTicket')}</h2></div>
        <div className="seg" style={{ marginBottom: 12 }}>
          <button className={fmt === 'wide' ? 'on' : ''} onClick={() => setFmt('wide')}>{t('fmtPost')}</button>
          <button className={fmt === 'story' ? 'on' : ''} onClick={() => setFmt('story')}>{t('fmtStory')}</button>
        </div>
        <div className={`share-prev ${fmt}`}><img src={img} alt="" /></div>
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
