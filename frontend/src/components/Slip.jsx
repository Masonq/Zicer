import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { X, Trash2 } from 'lucide-react'
import { useT } from '../i18n'
import { useSlip, useAuth } from '../store'
import { api } from '../api'
import { fmtOdds, fmtNum, pickLabel, Empty } from './ui'

export default function Slip({ compact = false }) {
  const t = useT()
  const slip = useSlip()
  const { user, refresh } = useAuth()
  const nav = useNavigate()
  const [stake, setStake] = useState(100)
  const [err, setErr] = useState('')
  const [busy, setBusy] = useState(false)
  const n = slip.items.length
  const total = slip.total

  const submit = async () => {
    setErr('')
    if (!user) { nav('/prijava?next=/tiket'); return }
    if (n < 2) { setErr(t('minTwo')); return }
    setBusy(true)
    try {
      const r = await api('/tickets', { method: 'POST', body: { stake: Number(stake), items: slip.items.map((i) => ({ match_id: i.match.id, pick: i.pick })) } })
      slip.clear()
      refresh()
      nav(`/tiket/${r.id}?novi=1`)
    } catch (e) {
      const map = { bank: 'bankLow', stake_range: 'stakeRange', closed: 'closed', ticket_size: 'minTwo' }
      setErr(t(map[e.code] || 'error'))
    } finally { setBusy(false) }
  }

  return (
    <div className="card">
      <div className="section-head" style={{ padding: '14px 14px 0', marginBottom: 6 }}>
        <h2 className="h2">{t('ticket')}{n > 0 && <span className="small" style={{ marginLeft: 8 }}>{n}</span>}</h2>
        {n > 0 && <button className="iconbtn" onClick={slip.clear} aria-label={t('clear')}><Trash2 size={18} /></button>}
      </div>
      {n === 0 ? (
        <Empty title={t('ticketEmpty')} text={t('ticketEmptyHint')} />
      ) : (
        <>
          <div>
            {slip.items.map((i) => (
              <div className="slip-item" key={i.match.id}>
                <Link to={`/mec/${i.match.id}`} style={{ minWidth: 0 }}>
                  <div className="ellip" style={{ fontWeight: 700, fontSize: 14 }}>{pickLabel(t, i.match, i.pick)}</div>
                  <div className="small ellip">{t.team(i.match.home)} – {t.team(i.match.away)}</div>
                </Link>
                <span className="num" style={{ fontSize: 17 }}>{fmtOdds(i.odds)}</span>
                <button className="iconbtn" onClick={() => slip.remove(i.match.id)} aria-label={t('clear')}><X size={18} /></button>
              </div>
            ))}
          </div>
          <div style={{ padding: 14, borderTop: '1px solid var(--line-soft)' }} className="stack">
            <div className="slip-sum"><span>{t('totalOdds')}</span><b>{fmtOdds(total)}</b></div>
            <div className="field">
              <label htmlFor="stake">{t('stake')}</label>
              <input id="stake" className="input" type="number" inputMode="numeric" min={10} max={1000} step={10} value={stake}
                onChange={(e) => setStake(e.target.value)} />
            </div>
            <div className="slip-sum"><span>{t('potentialWin')}</span><b style={{ color: 'var(--gold)' }}>{fmtNum(total * (Number(stake) || 0))}</b></div>
            {err && <div className="form-error">{err}</div>}
            <button className="btn btn-gold btn-block" onClick={submit} disabled={busy}>{user ? t('placeTicket') : t('signIn')}</button>
            {!compact && <p className="note" style={{ margin: 0 }}>{t('virtual')}</p>}
          </div>
        </>
      )}
    </div>
  )
}
