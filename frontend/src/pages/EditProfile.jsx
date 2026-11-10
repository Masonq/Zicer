import { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { Camera, ChevronLeft } from 'lucide-react'
import { api, getToken } from '../api'
import { useT } from '../i18n'
import { useAuth } from '../store'
import { Avatar, Skeleton, Toast } from '../components/ui'

export default function EditProfile() {
  const t = useT()
  const { user, setUser, ready } = useAuth()
  const nav = useNavigate()
  const [f, setF] = useState(() => ({ display_name: user?.display_name || '', username: user?.username || '', bio: user?.bio || '' }))
  const [pw, setPw] = useState({ old: '', new: '' })
  const [err, setErr] = useState('')
  const [pwErr, setPwErr] = useState('')
  const [busy, setBusy] = useState(false)
  const [toast, setToast] = useState('')
  const [loaded, setLoaded] = useState(!!user)
  useEffect(() => {
    if (user && !loaded) { setF({ display_name: user.display_name || '', username: user.username || '', bio: user.bio || '' }); setLoaded(true) }
  }, [user, loaded])
  if (!ready) return <Skeleton />
  if (!user) return <Navigate to="/prijava" replace />
  const errText = (code) => { const k = `err_${code}`; return t(k) !== k ? t(k) : t('error') }

  const save = async (e) => {
    e.preventDefault(); setErr(''); setBusy(true)
    try { const u = await api('/me', { method: 'PATCH', body: f }); setUser(u); setToast(t('saved')) }
    catch (ex) { setErr(errText(ex.code)) } finally { setBusy(false) }
  }
  const upload = async (file) => {
    if (!file) return
    setErr('')
    const fd = new FormData(); fd.append('file', file)
    const r = await fetch('/api/me/avatar', { method: 'POST', headers: { Authorization: `Bearer ${getToken()}` }, body: fd })
    const d = await r.json().catch(() => null)
    if (!r.ok) { setErr(errText(d?.detail)); return }
    setUser(d); setToast(t('saved'))
  }
  const removePhoto = async () => { const u = await api('/me/avatar', { method: 'DELETE' }); setUser(u) }
  const changePw = async (e) => {
    e.preventDefault(); setPwErr('')
    try { await api('/me/password', { method: 'POST', body: pw }); setPw({ old: '', new: '' }); setToast(t('saved')) }
    catch (ex) { setPwErr(errText(ex.code)) }
  }
  const preview = { ...user, name: f.display_name || f.username }
  return (
    <div className="auth-wrap" style={{ maxWidth: 560 }}>
      <button className="linkbtn" style={{ marginBottom: 12, fontSize: 14 }} onClick={() => nav('/profil')}><ChevronLeft size={18} />{t('profile')}</button>
      <h1 className="h1">{t('editProfile')}</h1>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, margin: '16px 0' }}>
        <div className="avatar-edit">
          <Avatar user={preview} size={84} />
          <label aria-label={t('changePhoto')}><Camera size={16} /><input type="file" accept="image/*" hidden onChange={(e) => upload(e.target.files?.[0])} /></label>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'flex-start' }}>
          <label className="linkbtn" style={{ cursor: 'pointer', marginTop: 0 }}>{t('changePhoto')}<input type="file" accept="image/*" hidden onChange={(e) => upload(e.target.files?.[0])} /></label>
          {user.avatar && <button className="linkbtn" style={{ color: 'var(--loss)', marginTop: 0 }} onClick={removePhoto}>{t('removePhoto')}</button>}
        </div>
      </div>
      <form className="card pad stack" onSubmit={save}>
        <div className="field"><label htmlFor="dn">{t('displayName')}</label>
          <input id="dn" className="input" maxLength={48} placeholder={t('namePh')} value={f.display_name} onChange={(e) => setF({ ...f, display_name: e.target.value })} /></div>
        <div className="field"><label htmlFor="un">{t('handle')}</label>
          <div className="handle-input"><span>@</span><input id="un" className="input" maxLength={24} autoCapitalize="none" autoCorrect="off" spellCheck={false}
            value={f.username} onChange={(e) => setF({ ...f, username: e.target.value.replace(/^@/, '').replace(/[^A-Za-z0-9_.]/g, '') })} /></div>
          <span className="note">{t('usernameRule')}</span></div>
        <div className="field"><label htmlFor="bio">{t('bio')}</label>
          <textarea id="bio" className="textarea" maxLength={160} placeholder={t('bioPh')} value={f.bio} onChange={(e) => setF({ ...f, bio: e.target.value })} />
          <span className="note" style={{ textAlign: 'right' }}>{f.bio.length}/160</span></div>
        {err && <div className="form-error">{err}</div>}
        <button className="btn btn-gold btn-block" disabled={busy}>{t('save')}</button>
      </form>
      <form className="card pad stack" style={{ marginTop: 16 }} onSubmit={changePw}>
        <h2 className="h2">{t('changePassword')}</h2>
        <div className="field"><label htmlFor="op">{t('oldPassword')}</label><input id="op" className="input" type="password" autoComplete="current-password" value={pw.old} onChange={(e) => setPw({ ...pw, old: e.target.value })} required /></div>
        <div className="field"><label htmlFor="np">{t('newPassword')}</label><input id="np" className="input" type="password" autoComplete="new-password" minLength={6} value={pw.new} onChange={(e) => setPw({ ...pw, new: e.target.value })} required /></div>
        {pwErr && <div className="form-error">{pwErr}</div>}
        <button className="btn btn-ghost btn-block">{t('save')}</button>
      </form>
      <Toast text={toast} onDone={() => setToast('')} />
    </div>
  )
}
