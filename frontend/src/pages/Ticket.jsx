import Slip from '../components/Slip'
import { useT } from '../i18n'
export default function TicketPage() {
  const t = useT()
  return <div><h1 className="h1" style={{ marginBottom: 14 }}>{t('ticket')}</h1><Slip /></div>
}
