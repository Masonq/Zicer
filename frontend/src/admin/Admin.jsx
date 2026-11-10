import { useState } from 'react'
import { Navigate, NavLink, Routes, Route, Link } from 'react-router-dom'
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
const JOB_RU = { football_live: 'Футбол лайв', football: 'Футбол (расписание)', basketball: 'Евролига', odds: 'Кэфы MaxBet', settle: 'Расчёт прогнозов', trends: 'Тренды', analysis: 'Разборы матчей', backfill: 'История за 60 дней', basketball_week: 'NBA на неделю', maxbet_results: 'Результаты баскетбола (MaxBet)', names: 'Перевод названий', tg_poll: 'Telegram: привязка', tg_reminders: 'Telegram: напоминания' }

function Dashboard() {
  const [ver, setVer] = useState(0)
  const [toast, setToast] = useState('')
  const { data } = usePoll(() => api('/admin/stats'), [ver], 20000)
  if (!data) return <Skeleton h={80} n={4} />
  const run = async (n) => { await api(`/admin/jobs/${n}`, { method: 'POST' }); setToast(`Запущено: ${JOB_RU[n] || n}`); setTimeout(() => setVer((v) => v + 1), 4000) }
  const cards = [['Пользователи', data.users], ['Новые за 24 ч', data.users_24h], ['Новые за 7 дней', data.users_7d], ['Прогнозы', data.predictions], ['Прогнозы за 24 ч', data.predictions_24h], ['Тикеты', data.tickets], ['Матчи в базе', data.matches_total], ['Матчи 48 ч / с кэфами', `${data.matches_48h} / ${data.matches_with_odds_48h}`], ['Сейчас лайв', data.live]]
  return (
    <div>
      <div className="grid-2" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))' }}>
        {cards.map(([l, v]) => <div key={l} className="card pad"><div className="small">{l}</div><div className="num" style={{ fontSize: 26 }}>{typeof v === 'number' ? fmtNum(v) : v}</div></div>)}
      </div>
      <section className="section">
        <div className="section-head"><h2 className="h2">Сбор данных</h2></div>
        <div className="card scroll-x">
          <table className="table">
            <thead><tr><th>Задача</th><th>Последний успех</th><th>Итог</th><th>Ошибка</th><th /></tr></thead>
            <tbody>{data.jobs.map((j) => (
              <tr key={j.name}>
                <td style={{ fontWeight: 700, whiteSpace: 'nowrap' }}>{JOB_RU[j.name] || j.name}</td>
                <td style={{ whiteSpace: 'nowrap' }}>{ago(j.last_ok)}</td>
                <td className="small">{j.info}</td>
                <td className="small" style={{ color: j.last_error_at && (!j.last_ok || j.last_error_at > j.last_ok) ? 'var(--loss)' : 'var(--dim)', maxWidth: 260 }}>{j.last_error ? `${ago(j.last_error_at)}: ${j.last_error.split('\n')[0]}` : '—'}</td>
                <td>{['football', 'basketball', 'odds', 'settle', 'trends', 'analysis'].includes(j.name) && <button className="btn btn-ghost btn-sm" onClick={() => run(j.name)}>Запустить</button>}</td>
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
  return (
    <div>
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
                <td>{m.featured ? <span className="badge gold">Матч дня</span> : <button className="btn btn-ghost btn-sm" onClick={() => feature(m.id)}>Сделать матчем дня</button>}</td>
              </tr>
            ))}</tbody>
          </table>
        )}
      </div>
    </div>
  )
}

export default function Admin() {
  const { user, ready } = useAuth()
  if (!ready) return <Skeleton />
  if (!user?.is_admin) return <Navigate to="/" replace />
  const tabs = [['', 'Обзор'], ['users', 'Пользователи'], ['comments', 'Комментарии'], ['matches', 'Матчи'], ['bookmakers', 'Букмекеры']]
  return (
    <div>
      <h1 className="h1">Админка</h1>
      <div className="chips" style={{ margin: '12px 0 16px' }}>
        {tabs.map(([k, l]) => <NavLink key={k} end to={`/admin${k ? `/${k}` : ''}`} className={({ isActive }) => `chip${isActive ? ' on' : ''}`}>{l}</NavLink>)}
      </div>
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="users" element={<Users />} />
        <Route path="comments" element={<Comments />} />
        <Route path="matches" element={<Matches />} />
        <Route path="bookmakers" element={<Bookmakers />} />
      </Routes>
    </div>
  )
}
