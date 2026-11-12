import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { api, setToken } from '../api'
import { useT } from '../i18n'
import { trackEvent } from '../seo'
import { useAuth, usePoll } from '../store'
import { FounderBanner } from './Home'

function useNext() {
  const [sp] = useSearchParams()
  const n = sp.get('next') || '/'
  return n.startsWith('/') && !n.startsWith('//') ? n : '/'
}


// "Continue with Google / Facebook": one tap instead of e-mail + password
const IN_APP = typeof navigator !== 'undefined' && /FBAN|FBAV|FB_IAB|Instagram/i.test(navigator.userAgent)

function SocialLogin({ next = '/' }) {
  const t = useT()
  const { login } = useAuth()
  const nav = useNavigate()
  const { data: cfg } = usePoll(() => api('/auth/oauth/config'), [], 0, true, 'oauthcfg')
  const gRef = useRef(null)
  const [err, setErr] = useState('')
  const ref = (() => { try { return localStorage.getItem('winly_ref') || '' } catch { return '' } })()
  useEffect(() => {
    if (!cfg?.google || IN_APP || !gRef.current) return
    const draw = () => {
      if (!window.google?.accounts?.id || !gRef.current) return
      window.google.accounts.id.initialize({
        client_id: cfg.google,
        callback: async ({ credential }) => {
          setErr(''); trackEvent('reg_google')
          try { const r = await api('/auth/google', { method: 'POST', body: { credential, lang: t.lang, ref } }); login(r.token, r.user); nav(r.new ? '/izbor-kluba?novi=1' : next, { replace: true }) }
          catch (ex) { setErr(t('oauthError')); trackEvent(`reg_error/google_${ex.code || 'x'}`) }
        },
      })
      gRef.current.innerHTML = ''
      window.google.accounts.id.renderButton(gRef.current, { theme: 'filled_black', size: 'large', shape: 'pill', text: 'continue_with', width: Math.min(360, gRef.current.offsetWidth || 320), locale: t.lang === 'ru' ? 'ru' : 'sr' })
    }
    if (window.google?.accounts?.id) { draw(); return }
    const sc = document.createElement('script'); sc.src = 'https://accounts.google.com/gsi/client'; sc.async = true; sc.onload = draw
    document.head.appendChild(sc)
  }, [cfg?.google]) // eslint-disable-line react-hooks/exhaustive-deps
  if (!cfg || (!cfg.google && !cfg.facebook)) return null
  const fbHref = `/api/auth/fb/start?next=${encodeURIComponent(next)}&ref=${encodeURIComponent(ref)}&lang=${t.lang}`
  return (
    <div className="social-login">
      {cfg.facebook && <a className="btn-fb" href={fbHref} onClick={() => trackEvent('reg_fb')}><svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path fill="currentColor" d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.88v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z"/></svg>{t('withFacebook')}</a>}
      {cfg.google && !IN_APP && <div className="g-btn" ref={gRef} />}
      {cfg.google && IN_APP && <div className="small" style={{ textAlign: 'center' }}>{t('googleInApp')}</div>}
      {err && <div className="form-error">{err}</div>}
      <div className="or-line"><span>{t('orEmail')}</span></div>
    </div>
  )
}

export function OAuthDone() {
  const { login } = useAuth()
  const nav = useNavigate()
  useEffect(() => {
    const h = new URLSearchParams(window.location.hash.slice(1))
    const token = h.get('token')
    if (!token) { nav('/prijava', { replace: true }); return }
    setToken(token)
    api('/me').then((u) => { login(token, u.user || u); nav(h.get('new') === '1' ? '/izbor-kluba?novi=1' : (h.get('next') || '/'), { replace: true }) })
      .catch(() => nav('/prijava?oauth=error', { replace: true }))
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
  return <div className="auth-wrap"><p className="small" style={{ textAlign: 'center', marginTop: 40 }}>…</p></div>
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
      {new URLSearchParams(window.location.search).get('oauth') && <div className="form-error" style={{ marginTop: 12 }}>{t('oauthError')}</div>}
      <div className="card pad stack" style={{ marginTop: 14 }}><SocialLogin /></div>
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
        <SocialLogin />
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
