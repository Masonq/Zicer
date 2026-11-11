import { useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { api } from '../api'
import { useT } from '../i18n'
import { useAuth } from '../store'

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
        {err && <div className="form-error">{err}</div>}
        <button className="btn btn-gold btn-block" disabled={busy}>{t('signIn')}</button>
        <div className="small" style={{ textAlign: 'center' }}>{t('noAccount')} <Link to={`/registracija${next !== '/' ? `?next=${encodeURIComponent(next)}` : ''}`} style={{ color: 'var(--gold)', fontWeight: 700 }}>{t('createAccount')}</Link></div>
      </form>
    </div>
  )
}

export function Register() {
  const t = useT()
  const { login } = useAuth()
  const nav = useNavigate()
  const [f, setF] = useState({ username: '', email: '', password: '' })
  const [err, setErr] = useState('')
  const [busy, setBusy] = useState(false)
  const submit = async (e) => {
    e.preventDefault(); setErr(''); setBusy(true)
    try { const r = await api('/auth/register', { method: 'POST', body: { ...f, lang: t.lang, ref: (() => { try { return localStorage.getItem('winly_ref') || '' } catch { return '' } })() } }); login(r.token, r.user); nav('/izbor-kluba?novi=1', { replace: true }) }
    catch (ex) { const k = `err_${ex.code}`; setErr(t(k) !== k ? t(k) : t('error')) } finally { setBusy(false) }
  }
  return (
    <div className="auth-wrap">
      <h1 className="h1">{t('register')}</h1>
      <p className="sub">{t('virtual')}</p>
      <form className="card pad stack" style={{ marginTop: 14 }} onSubmit={submit}>
        <div className="field"><label htmlFor="u">{t('username')}</label><input id="u" className="input" autoComplete="username" minLength={3} maxLength={24} pattern="[A-Za-z0-9_.]{3,24}" value={f.username} onChange={(e) => setF({ ...f, username: e.target.value })} required /><span className="note">{t('usernameRule')}</span></div>
        <div className="field"><label htmlFor="e">{t('email')}</label><input id="e" className="input" type="email" autoComplete="email" value={f.email} onChange={(e) => setF({ ...f, email: e.target.value })} required /></div>
        <div className="field"><label htmlFor="p">{t('password')}</label><input id="p" className="input" type="password" autoComplete="new-password" minLength={6} value={f.password} onChange={(e) => setF({ ...f, password: e.target.value })} required /></div>
        {err && <div className="form-error">{err}</div>}
        <button className="btn btn-gold btn-block" disabled={busy}>{t('createAccount')}</button>
        <div className="small" style={{ textAlign: 'center' }}>{t('haveAccount')} <Link to="/prijava" style={{ color: 'var(--gold)', fontWeight: 700 }}>{t('signIn')}</Link></div>
      </form>
    </div>
  )
}
