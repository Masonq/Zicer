import { useState } from 'react'
import { UserPlus, Copy, Share2, Check } from 'lucide-react'
import { api } from '../api'
import { useT } from '../i18n'
import { usePoll } from '../store'
import { fmtNum } from './ui'

// Referral: your personal link; both you and the friend get bonus points on registration
export function InviteCard() {
  const t = useT()
  const { data } = usePoll(() => api('/me/invites'), [], 0, false, 'invites')
  const [ok, setOk] = useState(false)
  if (!data) return null
  const copy = async () => { try { await navigator.clipboard.writeText(data.link); setOk(true); setTimeout(() => setOk(false), 1600) } catch {} }
  const share = async () => { try { await navigator.share({ title: 'Winly', text: t('seoHomeDesc'), url: data.link }) } catch { copy() } }
  return (
    <section className="section">
      <div className="invite">
        <div className="inv-ico"><UserPlus size={22} /></div>
        <div className="inv-body">
          <b>{t('invite')}</b>
          <p>{t('inviteText')} <span className="gold">+{fmtNum(data.bonus)}</span>.</p>
          <div className="inv-link"><span className="ellip">{data.link.replace(/^https?:\/\//, '')}</span>
            <button onClick={copy} aria-label={t('copyLink')}>{ok ? <Check size={16} /> : <Copy size={16} />}</button>
            {navigator.share && <button onClick={share} aria-label={t('share')}><Share2 size={16} /></button>}
          </div>
          <small>{t('invited')}: <b>{data.count}</b></small>
        </div>
      </div>
    </section>
  )
}
