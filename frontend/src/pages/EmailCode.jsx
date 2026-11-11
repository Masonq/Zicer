import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { MailCheck, KeyRound } from 'lucide-react'
import { api } from '../api'
import { useT } from '../i18n'
import { useAuth } from '../store'

const errText = (t, ex) => { const k = `err_${ex.code}`; return t(k) !== k ? t(k) : t('error') }

// six separate boxes, paste of the whole code works, digits only
function CodeInput({ value, onChange, onDone }) {
  const refs = useRef([])
  const set = (i, ch) => {
    const d = value.split('')
    d[i] = ch
    const v = d.join('').slice(0, 6)
    onChange(v)
    if (ch && i < 5) refs.current[i + 1]?.focus()
    if (v.replace(/\D/g, '').length === 6) onDone?.(v)
  }
  return (
    <div className="code-boxes" onPaste={(e) => { const v = (e.clipboardData.getData('text') || '').replace(/\D/g, '').slice(0, 6); if (v) { e.preventDefault(); onChange(v); if (v.length === 6) onDone?.(v); refs.current[Math.min(5, v.length)]?.focus() } }}>
      {Array.from({ length: 6 }, (_, i) => (
        <input key={i} ref={(el) => { refs.current[i] = el }} className="code-box num" inputMode="numeric" autoComplete={i === 0 ? 'one-time-code' : 'off'} maxLength={1}
          value={value[i] || ''} onChange={(e) => set(i, e.target.value.replace(/\D/g, '').slice(-1))}
          onKeyDown={(e) => { if (e.key === 'Backspace' && !value[i] && i > 0) refs.current[i - 1]?.focus() }} aria-label={`${i + 1}`} />
      ))}
    </div>
  )
}

function useCooldown() {
  const [left, setLeft] = useState(0)
  useEffect(() => { if (left <= 0) return; const id = setTimeout(() => setLeft((v) => v - 1), 1000); return () => clearTimeout(id) }, [left])
  return [left, setLeft]
}

export function VerifyEmail() {
  const t = useT()
  const { user, setUser } = useAuth()
  const nav = useNavigate()
  const [sp] = useSearchParams()
  const next = (sp.get('next') || '/').startsWith('/') ? sp.get('next') || '/' : '/'
  const [code, setCode] = useState('')
  const [err, setErr] = useState('')
  const [busy, setBusy] = useState(false)
  const [left, setLeft] = useCooldown()
  useEffect(() => { if (sp.get('sent')) setLeft(60) }, []) // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => { if (user && user.email_verified) nav(next, { replace: true }) }, [user]) // eslint-disable-line react-hooks/exhaustive-deps
  if (!user) return <div className="auth-wrap"><p className="small">{t('loginFirst')} <Link to="/prijava" className="gold">{t('signIn')}</Link></p></div>
  const verify = async (c = code) => {
    if (c.length !== 6 || busy) return
    setErr(''); setBusy(true)
    try { const r = await api('/auth/email/verify', { method: 'POST', body: { code: c } }); setUser(r.user); nav(next, { replace: true }) }
    catch (ex) { setErr(errText(t, ex)); setCode('') } finally { setBusy(false) }
  }
  const resend = async () => {
    setErr('')
    try { await api('/auth/email/send', { method: 'POST', body: { purpose: 'verify' } }); setLeft(60) } catch (ex) { setErr(errText(t, ex)); if (ex.code === 'too_soon') setLeft(60) }
  }
  return (
    <div className="auth-wrap">
      <div className="card pad stack code-card">
        <div className="code-ico"><MailCheck size={26} /></div>
        <h1 className="h2" style={{ textAlign: 'center' }}>{t('verifyTitle')}</h1>
        <p className="small" style={{ textAlign: 'center', margin: 0 }}>{t('verifyLead')} <b className="ellip-email">{user.email}</b></p>
        <CodeInput value={code} onChange={setCode} onDone={verify} />
        {err && <div className="form-error" style={{ textAlign: 'center' }}>{err}</div>}
        <button className="btn btn-gold btn-block" disabled={busy || code.length !== 6} onClick={() => verify()}>{t('confirm')}</button>
        <button className="linkbtn code-resend" disabled={left > 0} onClick={resend}>{left > 0 ? `${t('resendIn')} ${left} s` : t('resendCode')}</button>
        <p className="small" style={{ textAlign: 'center', margin: 0 }}>{t('checkSpam')}</p>
      </div>
    </div>
  )
}

export function ResetPassword() {
  const t = useT()
  const { login } = useAuth()
  const nav = useNavigate()
  const [step, setStep] = useState(1)
  const [email, setEmail] = useState('')
  const [code, setCode] = useState('')
  const [pw, setPw] = useState('')
  const [err, setErr] = useState('')
  const [busy, setBusy] = useState(false)
  const [left, setLeft] = useCooldown()
  const send = async (e) => {
    e?.preventDefault(); setErr(''); setBusy(true)
    try { await api('/auth/email/send', { method: 'POST', body: { purpose: 'reset', email } }); setStep(2); setLeft(60) }
    catch (ex) { setErr(errText(t, ex)); if (ex.code === 'too_soon') { setStep(2); setLeft(60) } } finally { setBusy(false) }
  }
  const save = async (e) => {
    e.preventDefault(); setErr(''); setBusy(true)
    try { const r = await api('/auth/reset', { method: 'POST', body: { email, code, password: pw } }); login(r.token, r.user); nav('/', { replace: true }) }
    catch (ex) { setErr(errText(t, ex)) } finally { setBusy(false) }
  }
  return (
    <div className="auth-wrap">
      <div className="card pad stack code-card">
        <div className="code-ico"><KeyRound size={26} /></div>
        <h1 className="h2" style={{ textAlign: 'center' }}>{t('resetTitle')}</h1>
        {step === 1 ? (
          <form className="stack" onSubmit={send}>
            <p className="small" style={{ textAlign: 'center', margin: 0 }}>{t('resetLead')}</p>
            <div className="field"><label htmlFor="re">Email</label><input id="re" className="input" type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} required /></div>
            {err && <div className="form-error">{err}</div>}
            <button className="btn btn-gold btn-block" disabled={busy}>{t('sendCode')}</button>
          </form>
        ) : (
          <form className="stack" onSubmit={save}>
            <p className="small" style={{ textAlign: 'center', margin: 0 }}>{t('resetSent')} <b className="ellip-email">{email}</b></p>
            <CodeInput value={code} onChange={setCode} />
            <div className="field"><label htmlFor="np">{t('newPassword')}</label><input id="np" className="input" type="password" autoComplete="new-password" minLength={6} value={pw} onChange={(e) => setPw(e.target.value)} required /></div>
            {err && <div className="form-error">{err}</div>}
            <button className="btn btn-gold btn-block" disabled={busy || code.length !== 6 || pw.length < 6}>{t('savePassword')}</button>
            <button type="button" className="linkbtn code-resend" disabled={left > 0} onClick={() => send()}>{left > 0 ? `${t('resendIn')} ${left} s` : t('resendCode')}</button>
          </form>
        )}
        <div className="small" style={{ textAlign: 'center' }}><Link to="/prijava" className="gold">{t('backToLogin')}</Link></div>
      </div>
    </div>
  )
}
