import { useEffect, useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { api } from '../api'
import { useT } from '../i18n'
import { trackEvent } from '../seo'
import { useAuth, usePoll } from '../store'
import { FounderBanner } from './Home'

function useNext() {
  const [sp] = useSearchParams()
  const n = sp.get('next') || '/'
  return n.startsWith('/') && !n.startsWith('//') ? n : '/'
}

export function Login() {
  const t = useT()
  const { login } = useAuth()
  const nav = useNavigate()
  const next = useNext()
  const [f, setF] = useState({ login: '', password: '' })
  const [err, setErr] = useState('')
  const [busy, setBusy] = useState(false)
  const submit = async (e) => {
    e.preventDefault(); setErr(''); setBusy(true)
    try { const r = await api('/auth/login', { method: 'POST', body: f }); login(r.token, r.user); nav(next, { replace: true }) }
    catch (ex) { setErr(t(`err_${ex.code}`) !== `err_${ex.code}` ? t(`err_${ex.code}`) : t('error')) } finally { setBusy(false) }
  }
  return (
    <div className="auth-wrap">
      <h1 className="h1">{t('login')}</h1>
      <form className="card pad stack" style={{ marginTop: 14 }} onSubmit={submit}>
        <div className="field"><label htmlFor="l">{t('loginOrEmail')}</label><input id="l" className="input" autoComplete="username" value={f.login} onChange={(e) => setF({ ...f, login: e.target.value })} required /></div>
        <div className="field"><label htmlFor="p">{t('password')}</label><input id="p" className="input" type="password" autoComplete="current-password" value={f.password} onChange={(e) => setF({ ...f, password: e.target.value })} required /></div>
        <div style={{ textAlign: 'right', marginTop: -4 }}><Link to="/zaboravljena-lozinka" className="small" style={{ color: 'var(--gold)', fontWeight: 700 }}>{t('forgotPassword')}</Link></div>
        {err && <div className="form-error">{err}</div>}
        <button className="btn btn-gold btn-block" disabled={busy}>{t('signIn')}</button>
        <Link to="/prijava-kod" className="btn btn-line btn-block">{t('codeLoginBtn')}</Link>
        <div className="small" style={{ textAlign: 'center' }}>{t('noAccount')} <Link to={`/registracija${next !== '/' ? `?next=${encodeURIComponent(next)}` : ''}`} style={{ color: 'var(--gold)', fontWeight: 700 }}>{t('createAccount')}</Link></div>
      </form>
    </div>
  )
}

function RegFounder() {
  const { data } = usePoll(() => api('/home?tz=0&sport=all'), [], 0, true, 'home:all:0')
  const st = data?.stats
  return st?.founders_left > 0 ? <div style={{ margin: '12px 0 14px' }}><FounderBanner left={st.founders_left} bonus={st.founder_bonus} /></div> : null
}

export function Register() {
  const t = useT()
  const { login } = useAuth()
  const nav = useNavigate()
  const [f, setF] = useState({ username: '', email: '', password: '' })
  const [err, setErr] = useState('')
  const [busy, setBusy] = useState(false)
  useEffect(() => { trackEvent('reg_view') }, [])
  const submit = async (e) => {
    e.preventDefault(); setErr('')
    // our own checks with clear messages (no silent browser tooltips that in-app browsers hide)
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(f.email.trim())) { setErr(t('err_email_invalid')); trackEvent('reg_error/email_invalid'); return }
    if (f.password.length < 6) { setErr(t('err_password_short')); trackEvent('reg_error/password_short'); return }
    setBusy(true); trackEvent('reg_submit')
    try { const r = await api('/auth/register', { method: 'POST', body: { ...f, lang: t.lang, ref: (() => { try { return localStorage.getItem('winly_ref') || '' } catch { return '' } })() } }); login(r.token, r.user); nav(r.verify ? `/potvrda?sent=1&next=${encodeURIComponent('/izbor-kluba?novi=1')}` : '/izbor-kluba?novi=1', { replace: true }) }
    catch (ex) { const k = `err_${ex.code}`; setErr(t(k) !== k ? t(k) : t('error')); trackEvent(`reg_error/${ex.code || ex.status || 'net'}`) } finally { setBusy(false) }
  }
  return (
    <div className="auth-wrap">
      <h1 className="h1">{t('register')}</h1>
      <RegFounder />
      <p className="sub">{t('virtual')}</p>
      <form className="card pad stack" style={{ marginTop: 14 }} onSubmit={submit} noValidate>
        <div className="field"><label htmlFor="u">{t('regName')}</label><input id="u" className="input" autoComplete="nickname" maxLength={40} placeholder={t('regNamePh')} value={f.username} onChange={(e) => setF({ ...f, username: e.target.value })} /><span className="note">{t('regNameNote')}</span></div>
        <div className="field"><label htmlFor="e">{t('email')}</label><input id="e" className="input" type="email" inputMode="email" autoCapitalize="off" autoComplete="email" value={f.email} onChange={(e) => setF({ ...f, email: e.target.value })} /></div>
        <div className="field"><label htmlFor="p">{t('password')}</label><input id="p" className="input" type="password" autoComplete="new-password" value={f.password} onChange={(e) => setF({ ...f, password: e.target.value })} /><span className="note">{t('regPassNote')}</span></div>
        {err && <div className="form-error">{err}</div>}
        <button className="btn btn-gold btn-block" disabled={busy}>{t('createAccount')}</button>
        <div className="small" style={{ textAlign: 'center' }}>{t('haveAccount')} <Link to="/prijava" style={{ color: 'var(--gold)', fontWeight: 700 }}>{t('signIn')}</Link></div>
      </form>
    </div>
  )
}
