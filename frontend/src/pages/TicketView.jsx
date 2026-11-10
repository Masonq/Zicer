import { useState } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import { Share2, Link2, Download, CheckCircle2 } from 'lucide-react'
import { api } from '../api'
import { useT } from '../i18n'
import { usePoll } from '../store'
import { Avatar, Crest, fmtOdds, fmtNum, pickLabel, Skeleton, Empty, Toast, StatusTime } from '../components/ui'

export default function TicketView() {
  const { id } = useParams()
  const [sp] = useSearchParams()
  const t = useT()
  const [toast, setToast] = useState('')
  const { data: tk, loading } = usePoll(() => api(`/tickets/${id}`), [id], 60000)
  if (loading && !tk) return <Skeleton h={120} n={3} />
  if (!tk) return <Empty title={t('error')} />
  const shareUrl = `${window.location.origin}/t/${tk.id}`
  const img = `/api/share/ticket/${tk.id}.png?s=${tk.status}`
  const share = async () => {
    if (navigator.share) { try { await navigator.share({ title: 'Winly tiket', url: shareUrl }); return } catch { return } }
    copy()
  }
  const copy = async () => { try { await navigator.clipboard.writeText(shareUrl); setToast(t('linkCopied')) } catch {} }
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
        <h2 className="h2" style={{ marginBottom: 12 }}>{t('shareTicket')}</h2>
        <img src={img} alt="" style={{ borderRadius: 14, border: '1px solid var(--line-soft)', width: '100%', aspectRatio: '1200 / 630' }} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8, marginTop: 12 }}>
          <button className="btn btn-gold btn-sm" onClick={share}><Share2 size={16} />{t('shareTicket').split(' ')[0]}</button>
          <button className="btn btn-ghost btn-sm" onClick={copy}><Link2 size={16} />{t('copy')}</button>
          <a className="btn btn-ghost btn-sm" href={img} download={`zicer-tiket-${tk.id}.png`}><Download size={16} />PNG</a>
        </div>
      </section>
      <Toast text={toast} onDone={() => setToast('')} />
    </div>
  )
}
