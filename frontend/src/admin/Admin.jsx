import { useEffect, useRef, useState } from 'react'
import { Navigate, NavLink, Routes, Route, Link, useLocation } from 'react-router-dom'
import { LayoutDashboard, Users as UsersIcon, MessageSquare, CalendarDays, Image as ImageIcon, Landmark, Cpu, ArrowLeft, Menu } from 'lucide-react'
import Overview from './Overview'
import { LOGO_SRC } from '../logoData'
import { api } from '../api'
import { useAuth, usePoll } from '../store'
import { Crest, Avatar, fmtNum, fmtOdds, Skeleton, Toast } from '../components/ui'

const ago = (iso) => {
  if (!iso) return '—'
  const s = Math.round((Date.now() - new Date(iso)) / 1000)
  if (s < 60) return `${s} с назад`
  if (s < 3600) return `${Math.round(s / 60)} мин назад`
  if (s < 86400) return `${Math.round(s / 3600)} ч назад`
  return new Date(iso).toLocaleString('ru-RU')
}
const JOB_RU = { live: 'Лайв MaxBet', xfeed: 'Лайв 22Bet (события)', finish_stale: 'Закрытие завершённых', other_sports: 'Хоккей, теннис, волейбол', other_results: 'Результаты (другие виды)', logos: 'Эмблемы команд', highlights: 'Обзоры YouTube', football_live: 'Футбол лайв', football: 'Футбол (расписание)', basketball: 'Евролига', odds: 'Кэфы MaxBet', settle: 'Расчёт прогнозов', trends: 'Тренды', analysis: 'Разборы матчей', backfill: 'История за 60 дней', basketball_week: 'NBA на неделю', maxbet_results: 'Результаты баскетбола (MaxBet)', names: 'Перевод названий', tg_poll: 'Telegram: привязка', tg_reminders: 'Telegram: напоминания' }

function Dashboard() {
  const [ver, setVer] = useState(0)
  const [toast, setToast] = useState('')
  const { data } = usePoll(() => api('/admin/stats'), [ver], 20000)
  if (!data) return <Skeleton h={80} n={4} />
  const run = async (n) => { await api(`/admin/jobs/${n}`, { method: 'POST' }); setToast(`Запущено: ${JOB_RU[n] || n}`); setTimeout(() => setVer((v) => v + 1), 4000) }
  return (
    <div>
      <section>
        <div className="card scroll-x">
          <table className="table">
            <thead><tr><th>Задача</th><th>Последний успех</th><th>Итог</th><th>Ошибка</th><th /></tr></thead>
            <tbody>{data.jobs.map((j) => (
              <tr key={j.name}>
                <td style={{ fontWeight: 700, whiteSpace: 'nowrap' }}><i className={`jdot ${j.last_error_at && (!j.last_ok || j.last_error_at > j.last_ok) ? 'err' : 'ok'}`} />{JOB_RU[j.name] || j.name}</td>
                <td style={{ whiteSpace: 'nowrap' }}>{ago(j.last_ok)}</td>
                <td className="small">{j.info}</td>
                <td className="small" style={{ color: j.last_error_at && (!j.last_ok || j.last_error_at > j.last_ok) ? 'var(--loss)' : 'var(--dim)', maxWidth: 260 }}>{j.last_error ? `${ago(j.last_error_at)}: ${j.last_error.split('\n')[0]}` : '—'}</td>
                <td>{['football', 'basketball', 'odds', 'settle', 'logos', 'highlights', 'other_sports'].includes(j.name) && <button className="btn btn-ghost btn-sm" onClick={() => run(j.name)}>Запустить</button>}</td>
              </tr>
            ))}</tbody>
          </table>
        </div>
      </section>
      <Toast text={toast} onDone={() => setToast('')} />
    </div>
  )
}

function Users() {
  const [q, setQ] = useState('')
  const [ver, setVer] = useState(0)
  const { data } = usePoll(() => api(`/admin/users?q=${encodeURIComponent(q)}`), [q, ver])
  const ban = async (u) => { await api(`/admin/users/${u.id}/ban`, { method: 'POST', body: { banned: !u.banned } }); setVer((v) => v + 1) }
  return (
    <div>
      <input className="input" placeholder="Поиск по имени или email" value={q} onChange={(e) => setQ(e.target.value)} />
      <div className="card scroll-x" style={{ marginTop: 12 }}>
        {!data ? <Skeleton /> : (
          <table className="table">
            <thead><tr><th>Пользователь</th><th>Email</th><th>Клуб</th><th>Банк</th><th>Прогнозов</th><th>Регистрация</th><th /></tr></thead>
            <tbody>{data.map((u) => (
              <tr key={u.id}>
                <td><Link to={`/u/${u.username}`} style={{ display: 'flex', alignItems: 'center', gap: 8, fontWeight: 700 }}><Avatar user={u} size={26} />{u.username}{u.admin && <span className="badge gold">админ</span>}</Link></td>
                <td className="small">{u.email}</td>
                <td className="small">{u.club ? u.club.short : '—'}</td>
                <td className="num">{fmtNum(u.bank)}</td>
                <td className="num">{u.predictions}</td>
                <td className="small" style={{ whiteSpace: 'nowrap' }}>{ago(u.created)}</td>
                <td>{!u.admin && <button className={`btn btn-sm ${u.banned ? 'btn-gold' : 'btn-line'}`} onClick={() => ban(u)}>{u.banned ? 'Разбанить' : 'Забанить'}</button>}</td>
              </tr>
            ))}</tbody>
          </table>
        )}
      </div>
    </div>
  )
}

function AutoRu({ text }) {
  const { data } = usePoll(() => api('/translate', { method: 'POST', body: { text, target: 'ru' } }), [text])
  return <div className="small" style={{ marginTop: 6, color: 'var(--chalk)' }}>{data ? `RU: ${data.text}` : 'Перевод…'}</div>
}

function Comments() {
  const [ver, setVer] = useState(0)
  const { data } = usePoll(() => api('/admin/predictions'), [ver])
  const del = async (id) => { if (!confirm('Удалить комментарий?')) return; await api(`/admin/predictions/${id}/comment`, { method: 'DELETE' }); setVer((v) => v + 1) }
  if (!data) return <Skeleton />
  if (!data.length) return <div className="card pad">Комментариев пока нет.</div>
  return (
    <div className="card">
      {data.map((p) => (
        <div className="pred" key={p.id}>
          <div className="pred-head">
            <Avatar user={p.user} size={28} /><b>{p.user.username}</b>
            <span className="small ellip">{p.match.home.short} – {p.match.away.short}, {p.pick} @{fmtOdds(p.odds)}</span>
            <button className="btn btn-line btn-sm" style={{ marginLeft: 'auto' }} onClick={() => del(p.id)}>Удалить</button>
          </div>
          <p className="pred-comment">{p.comment}</p>
          <AutoRu text={p.comment} />
        </div>
      ))}
    </div>
  )
}

const EMPTY_BM = { name: '', url: '', bonus_sr: '', bonus_ru: '', rating: 4.5, color: '#F2C230', sort: 0, active: true }
function Bookmakers() {
  const [ver, setVer] = useState(0)
  const [edit, setEdit] = useState(null)
  const { data } = usePoll(() => api('/admin/bookmakers'), [ver])
  const save = async () => {
    const body = { ...edit, rating: Number(edit.rating), sort: Number(edit.sort) }
    if (edit.id) await api(`/admin/bookmakers/${edit.id}`, { method: 'PUT', body }); else await api('/admin/bookmakers', { method: 'POST', body })
    setEdit(null); setVer((v) => v + 1)
  }
  const del = async (b) => { if (!confirm(`Удалить ${b.name}?`)) return; await api(`/admin/bookmakers/${b.id}`, { method: 'DELETE' }); setVer((v) => v + 1) }
  return (
    <div>
      <button className="btn btn-gold btn-sm" onClick={() => setEdit({ ...EMPTY_BM })}>Добавить букмекера</button>
      {edit && (
        <div className="card pad stack" style={{ marginTop: 12 }}>
          {[['name', 'Название'], ['url', 'Ссылка (партнёрская)'], ['bonus_sr', 'Бонус (сербский)'], ['bonus_ru', 'Бонус (русский)'], ['rating', 'Рейтинг (0–5)'], ['color', 'Цвет'], ['sort', 'Порядок']].map(([k, l]) => (
            <div className="field" key={k}><label>{l}</label><input className="input" value={edit[k]} onChange={(e) => setEdit({ ...edit, [k]: e.target.value })} /></div>
          ))}
          <label className="toggle"><input type="checkbox" checked={edit.active} onChange={(e) => setEdit({ ...edit, active: e.target.checked })} />Показывать на сайте</label>
          <div style={{ display: 'flex', gap: 8 }}><button className="btn btn-gold btn-sm" onClick={save}>Сохранить</button><button className="btn btn-line btn-sm" onClick={() => setEdit(null)}>Отмена</button></div>
        </div>
      )}
      <div className="card" style={{ marginTop: 12 }}>
        {(data || []).map((b) => (
          <div className="bm" key={b.id}>
            <span className="bm-logo" style={{ background: b.color }}>{b.name.slice(0, 1)}</span>
            <div style={{ minWidth: 0 }}><b>{b.name}</b>{!b.active && <span className="small"> (скрыт)</span>}<div className="small ellip">{b.url}</div></div>
            <div style={{ display: 'flex', gap: 6 }}><button className="btn btn-ghost btn-sm" onClick={() => setEdit(b)}>Изменить</button><button className="btn btn-line btn-sm" onClick={() => del(b)}>Удалить</button></div>
          </div>
        ))}
      </div>
    </div>
  )
}

function Matches() {
  const [q, setQ] = useState('')
  const [ver, setVer] = useState(0)
  const { data } = usePoll(() => api(`/admin/matches?q=${encodeURIComponent(q)}`), [q, ver])
  const feature = async (id) => { await api(`/admin/matches/${id}/feature`, { method: 'POST' }); setVer((v) => v + 1) }
  const unfeature = async (id) => { await api(`/admin/matches/${id}/unfeature`, { method: 'POST' }); setVer((v) => v + 1) }
  return (
    <div>
      <p className="small" style={{ marginTop: 0 }}>Матчи дня на главной листаются по очереди (до 5). Закреплённые здесь идут первыми, остальные подбираются автоматически.</p>
      <input className="input" placeholder="Поиск: команда или лига" value={q} onChange={(e) => setQ(e.target.value)} />
      <div className="card scroll-x" style={{ marginTop: 12 }}>
        {!data ? <Skeleton /> : (
          <table className="table">
            <thead><tr><th>Время</th><th>Матч</th><th>Лига</th><th>Кэфы</th><th /></tr></thead>
            <tbody>{data.map((m) => (
              <tr key={m.id}>
                <td style={{ whiteSpace: 'nowrap' }}>{new Date(m.start).toLocaleString('ru-RU', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' })}</td>
                <td><Link to={`/mec/${m.id}`} style={{ display: 'flex', alignItems: 'center', gap: 6, fontWeight: 700 }}><Crest team={m.home} size={18} />{m.home.short} – {m.away.short}<Crest team={m.away} size={18} /></Link></td>
                <td className="small">{m.league.name}</td>
                <td className="num small">{m.best['1'] ? `${fmtOdds(m.best['1'].odds)} / ${fmtOdds(m.best.X?.odds)} / ${fmtOdds(m.best['2'].odds)}` : '—'}</td>
                <td style={{ whiteSpace: 'nowrap' }}>{m.featured ? <button className="btn btn-gold btn-sm" onClick={() => unfeature(m.id)}>Матч дня ✓ (убрать)</button> : <button className="btn btn-ghost btn-sm" onClick={() => feature(m.id)}>В матчи дня</button>}</td>
              </tr>
            ))}</tbody>
          </table>
        )}
      </div>
    </div>
  )
}

const EMPTY_BANNER = { kind: 'raffle', title_sr: '', title_ru: '', text_sr: '', text_ru: '', cta_sr: '', cta_ru: '', link: '', starts_at: '', ends_at: '', position: 0, active: true }
const KIND_RU = { raffle: 'Розыгрыш', promo: 'Акция', news: 'Новость' }
function Banners() {
  const [ver, setVer] = useState(0)
  const [edit, setEdit] = useState(null)
  const [file, setFile] = useState(null)
  const [busy, setBusy] = useState(false)
  const { data } = usePoll(() => api('/admin/banners'), [ver])
  const toLocal = (v) => (v ? v.slice(0, 16) : '')
  const save = async () => {
    setBusy(true)
    try {
      const body = { ...edit, position: Number(edit.position) || 0, starts_at: edit.starts_at || null, ends_at: edit.ends_at || null }
      delete body.id; delete body.image
      const b = edit.id ? await api(`/admin/banners/${edit.id}`, { method: 'PUT', body }) : await api('/admin/banners', { method: 'POST', body })
      if (file) { const fd = new FormData(); fd.append('file', file); await api(`/admin/banners/${b.id}/image`, { method: 'POST', body: fd }) }
      setEdit(null); setFile(null); setVer((v) => v + 1)
    } finally { setBusy(false) }
  }
  const del = async (b) => { if (!confirm('Удалить баннер?')) return; await api(`/admin/banners/${b.id}`, { method: 'DELETE' }); setVer((v) => v + 1) }
  const toggle = async (b) => { await api(`/admin/banners/${b.id}`, { method: 'PUT', body: { ...b, active: !b.active, image: undefined, id: undefined } }); setVer((v) => v + 1) }
  const F = ([k, l, ph]) => <div className="field" key={k}><label>{l}</label><input className="input" placeholder={ph || ''} value={edit[k] ?? ''} onChange={(e) => setEdit({ ...edit, [k]: e.target.value })} /></div>
  return (
    <div>
      <p className="small" style={{ marginTop: 0 }}>Баннеры показываются в карусели на главной после второго матча дня. Сами появляются и исчезают по датам показа.</p>
      <button className="btn btn-gold btn-sm" onClick={() => { setEdit({ ...EMPTY_BANNER }); setFile(null) }}>Добавить баннер</button>
      {edit && (
        <div className="card pad stack" style={{ marginTop: 12 }}>
          <div className="field"><label>Тип</label>
            <div className="seg">{Object.entries(KIND_RU).map(([k, l]) => <button key={k} className={edit.kind === k ? 'on' : ''} onClick={() => setEdit({ ...edit, kind: k })}>{l}</button>)}</div>
          </div>
          {[['title_sr', 'Заголовок (сербский)'], ['title_ru', 'Заголовок (русский)'], ['text_sr', 'Текст (сербский)'], ['text_ru', 'Текст (русский)'], ['cta_sr', 'Кнопка (сербский)', 'Učestvuj'], ['cta_ru', 'Кнопка (русский)', 'Участвовать'], ['link', 'Ссылка', '/rang или https://...']].map(F)}
          <div className="field"><label>Картинка (необязательно)</label><input className="input" type="file" accept="image/*" onChange={(e) => setFile(e.target.files[0] || null)} />{edit.image && !file && <img src={edit.image} alt="" style={{ marginTop: 8, maxHeight: 120, borderRadius: 10 }} />}</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            <div className="field"><label>Показывать с</label><input className="input" type="datetime-local" value={toLocal(edit.starts_at)} onChange={(e) => setEdit({ ...edit, starts_at: e.target.value })} /></div>
            <div className="field"><label>Показывать до</label><input className="input" type="datetime-local" value={toLocal(edit.ends_at)} onChange={(e) => setEdit({ ...edit, ends_at: e.target.value })} /></div>
          </div>
          {F(['position', 'Порядок (меньше — раньше)'])}
          <label className="toggle"><input type="checkbox" checked={edit.active} onChange={(e) => setEdit({ ...edit, active: e.target.checked })} />Показывать на сайте</label>
          <div style={{ display: 'flex', gap: 8 }}><button className="btn btn-gold btn-sm" onClick={save} disabled={busy}>Сохранить</button><button className="btn btn-line btn-sm" onClick={() => setEdit(null)}>Отмена</button></div>
        </div>
      )}
      <div className="card" style={{ marginTop: 12 }}>
        {(data || []).length === 0 && <div className="empty" style={{ padding: 20 }}>Баннеров пока нет.</div>}
        {(data || []).map((b) => (
          <div className="bm" key={b.id}>
            <span className="bm-logo" style={{ background: b.image ? `center / cover url(${b.image})` : 'var(--surface-2)' }}>{b.image ? '' : (KIND_RU[b.kind] || '').slice(0, 1)}</span>
            <div style={{ minWidth: 0 }}><b>{b.title_ru || b.title_sr || 'Без заголовка'}</b>{!b.active && <span className="small"> (выключен)</span>}
              <div className="small ellip">{KIND_RU[b.kind]}{b.ends_at ? `, до ${new Date(b.ends_at).toLocaleDateString('ru-RU')}` : ''}{b.link ? `, ${b.link}` : ''}</div></div>
            <div style={{ display: 'flex', gap: 6 }}>
              <button className="btn btn-ghost btn-sm" onClick={() => toggle(b)}>{b.active ? 'Выключить' : 'Включить'}</button>
              <button className="btn btn-ghost btn-sm" onClick={() => { setEdit({ ...b }); setFile(null) }}>Изменить</button>
              <button className="btn btn-line btn-sm" onClick={() => del(b)}>Удалить</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const NAV = [
  ['ГЛАВНОЕ', [['', 'Обзор', LayoutDashboard]]],
  ['ЛЮДИ', [['users', 'Пользователи', UsersIcon], ['comments', 'Комментарии', MessageSquare]]],
  ['КОНТЕНТ', [['matches', 'Матчи', CalendarDays], ['banners', 'Баннеры', ImageIcon], ['bookmakers', 'Букмекеры', Landmark]]],
  ['СИСТЕМА', [['system', 'Сбор данных', Cpu]]],
]
const TITLES = { '': 'Обзор', users: 'Пользователи', comments: 'Комментарии', matches: 'Матчи', banners: 'Баннеры', bookmakers: 'Букмекеры', system: 'Сбор данных' }

export default function Admin() {
  const { user, ready } = useAuth()
  const [open, setOpen] = useState(false)
  const loc = useLocation()
  const panel = useRef(null)
  // phones: tables turn into cards; each cell gets its column name as a label
  useEffect(() => {
    const el = panel.current
    if (!el) return
    const label = () => el.querySelectorAll('table').forEach((tb) => {
      const heads = [...tb.querySelectorAll('thead th')].map((th) => th.textContent.trim())
      tb.querySelectorAll('tbody tr').forEach((tr) => [...tr.children].forEach((td, i) => { if (heads[i] && td.dataset.l !== heads[i]) td.dataset.l = heads[i] }))
    })
    label()
    const mo = new MutationObserver(label); mo.observe(el, { childList: true, subtree: true })
    return () => mo.disconnect()
  })
  if (!ready) return <Skeleton />
  if (!user?.is_admin) return <Navigate to="/" replace />
  const cur = loc.pathname.replace(/^\/admin\/?/, '').split('/')[0]
  return (
    <div className="adm">
      <div className="adm-bg" aria-hidden="true" />
      <aside className={`adm-side${open ? ' open' : ''}`}>
        <Link to="/" className="adm-brand"><img src={LOGO_SRC} alt="" /><b>Winly</b><span>admin</span></Link>
        <div className="adm-me"><Avatar user={user} size={34} /><div><b>{user.name || user.username}</b><small>администратор</small></div></div>
        {NAV.map(([sec, items]) => (
          <div key={sec} className="adm-sec">
            <div className="adm-sec-t">{sec}</div>
            {items.map(([k, l, I]) => (
              <NavLink key={k} end to={`/admin${k ? `/${k}` : ''}`} onClick={() => setOpen(false)} className={({ isActive }) => `adm-link${isActive ? ' on' : ''}`}><I size={18} />{l}</NavLink>
            ))}
          </div>
        ))}
        <Link to="/" className="adm-link back"><ArrowLeft size={18} />На сайт</Link>
      </aside>
      {open && <div className="adm-scrim" onClick={() => setOpen(false)} />}
      <main className="adm-main">
        <div className="adm-top">
          <button className="adm-burger" onClick={() => setOpen(true)} aria-label="Меню"><Menu size={20} /></button>
          <b>{TITLES[cur] ?? 'Админка'}</b>
        </div>
        <div className={cur ? 'adm-panel' : ''} ref={panel}>
          {cur && <h2 className="adm-h2">{TITLES[cur]}</h2>}
          <Routes>
            <Route index element={<Overview />} />
            <Route path="users" element={<Users />} />
            <Route path="comments" element={<Comments />} />
            <Route path="matches" element={<Matches />} />
            <Route path="banners" element={<Banners />} />
            <Route path="bookmakers" element={<Bookmakers />} />
            <Route path="system" element={<Dashboard />} />
          </Routes>
        </div>
      </main>
    </div>
  )
}
