import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Users, Target, Ticket, Radio, TrendingUp, TrendingDown, Activity, Image as ImageIcon, Pin, PlayCircle, Shield } from 'lucide-react'
import { api } from '../api'
import { usePoll } from '../store'
import { Avatar, Crest, fmtNum, Skeleton } from '../components/ui'

const nf = (n) => new Intl.NumberFormat('ru-RU').format(n || 0)

function Spark({ data = [], color = 'var(--gold)', h = 36 }) {
  const max = Math.max(1, ...data)
  const w = 100
  const pts = data.map((v, i) => `${(i / Math.max(1, data.length - 1)) * w},${h - (v / max) * (h - 4) - 2}`).join(' ')
  return (
    <svg viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" className="spark">
      <defs><linearGradient id={`sg${color.length}${h}`} x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor={color} stopOpacity=".35" /><stop offset="1" stopColor={color} stopOpacity="0" /></linearGradient></defs>
      <polygon points={`0,${h} ${pts} ${w},${h}`} fill={`url(#sg${color.length}${h})`} />
      <polyline points={pts} fill="none" stroke={color} strokeWidth="2" vectorEffect="non-scaling-stroke" strokeLinejoin="round" />
    </svg>
  )
}

function Kpi({ icon: I, label, k, total, accent }) {
  const up = (k?.delta || 0) >= 0
  return (
    <div className="adm-tile kpi">
      <div className="kpi-top"><span className="kpi-ico" style={{ color: accent }}><I size={18} /></span><span className="kpi-l">{label}</span></div>
      <div className="kpi-v num">{nf(total ?? k?.value)}</div>
      {k && <div className={`kpi-d ${up ? 'up' : 'down'}`}>{up ? <TrendingUp size={14} /> : <TrendingDown size={14} />}{k.delta > 0 ? '+' : ''}{k.delta}%<span> к прошлому периоду</span></div>}
      {k && <Spark data={k.series} color={accent} />}
    </div>
  )
}

function Activity3({ d }) {
  const s = [['predictions', 'Прогнозы', '#F2C230'], ['tickets', 'Тикеты', '#4CC38A'], ['users', 'Регистрации', '#6AAEF0']]
  const max = Math.max(1, ...s.flatMap(([k]) => d[k].series))
  const n = d.labels.length
  return (
    <div className="adm-tile span2 act">
      <div className="tile-h"><b>Активность</b><div className="legend">{s.map(([k, l, c]) => <span key={k}><i style={{ background: c }} />{l}</span>)}</div></div>
      <div className="bars">
        {d.labels.map((lb, i) => (
          <div key={i} className="bar-col" title={lb}>
            <div className="bar-stack">
              {s.map(([k, , c]) => <i key={k} style={{ height: `${(d[k].series[i] / max) * 100}%`, background: c }} />)}
            </div>
            {(n <= 10 || i % Math.ceil(n / 8) === 0) && <span>{lb}</span>}
          </div>
        ))}
      </div>
    </div>
  )
}

function Ring({ value, total, label, sub }) {
  const p = total ? Math.round((value / total) * 100) : 0
  return (
    <div className="adm-tile ring-tile">
      <div className="tile-h"><b>{label}</b></div>
      <div className="ring" style={{ '--p': p }}><b className="num">{p}%</b></div>
      <div className="small" style={{ textAlign: 'center' }}>{sub}</div>
    </div>
  )
}

export default function Overview() {
  const [period, setPeriod] = useState('week')
  const { data: d } = usePoll(() => api(`/admin/dashboard?period=${period}`), [period], 30000, true, `adm-dash:${period}`)
  const h = new Date().getHours()
  const hello = h < 5 ? 'Доброй ночи' : h < 12 ? 'Доброе утро' : h < 18 ? 'Добрый день' : 'Добрый вечер'
  if (!d) return <Skeleton h={140} n={4} />
  const bad = d.health.filter((j) => !j.ok)
  return (
    <div className="adm-dash">
      <div className="adm-head">
        <div>
          <h1>{hello}</h1>
          <p>{new Date().toLocaleDateString('ru-RU', { weekday: 'long', day: 'numeric', month: 'long' })} · {bad.length ? `проблем в сборе данных: ${bad.length}` : 'все системы работают'}</p>
        </div>
        <div className="pills">{[['day', 'Сегодня'], ['week', 'Неделя'], ['month', 'Месяц']].map(([k, l]) => <button key={k} className={period === k ? 'on' : ''} onClick={() => setPeriod(k)}>{l}</button>)}</div>
      </div>
      <div className="bento">
        <Kpi icon={Users} label="Пользователи" k={d.users} total={d.users_total} accent="#6AAEF0" />
        <Kpi icon={Target} label="Прогнозы" k={d.predictions} accent="#F2C230" />
        <Kpi icon={Ticket} label="Тикеты" k={d.tickets} accent="#4CC38A" />
        <div className="adm-tile kpi live-tile">
          <div className="kpi-top"><span className="kpi-ico live"><Radio size={18} /></span><span className="kpi-l">Сейчас в лайве</span></div>
          <div className="kpi-v num">{d.live_count}</div>
          <div className="mini-list">{d.live.slice(0, 3).map((m) => <div key={m.id}><span className="ellip">{m.home.short} – {m.away.short}</span><b className="num">{m.score ? `${m.score[0]}:${m.score[1]}` : ''}</b></div>)}</div>
        </div>
        <Activity3 d={d} />
        <Ring value={d.odds_cover.with} total={d.odds_cover.total} label="Покрытие кэфами" sub={`${d.odds_cover.with} из ${d.odds_cover.total} матчей на 48 ч`} />
        <div className="adm-tile health">
          <div className="tile-h"><b>Сбор данных</b><Link to="/admin/system" className="small">все</Link></div>
          <div className={`health-big ${bad.length ? 'warn' : 'ok'}`}><Activity size={18} />{bad.length ? `Нужна проверка: ${bad.length}` : 'Всё работает'}</div>
          <div className="dots">{d.health.map((j) => <i key={j.name} className={j.ok ? 'ok' : j.err ? 'err' : 'late'} title={`${j.name}: ${j.info}`} />)}</div>
          {bad.slice(0, 3).map((j) => <div key={j.name} className="small ellip">{j.name}: {j.err ? 'ошибка' : 'давно не обновлялось'}</div>)}
        </div>
        <div className="adm-tile">
          <div className="tile-h"><b>Лучшие прогнозисты</b><span className="small">за период</span></div>
          {d.top_users.length === 0 && <div className="small">Пока нет прогнозов.</div>}
          {d.top_users.map((u, i) => (
            <Link key={u.id} to={`/u/${u.username}`} className="lrow"><span className="pos num">{i + 1}</span><Avatar user={u} size={28} /><span className="ellip">{u.name || u.username}</span><b className="num">{u.count}</b>{u.hit != null && <em>{u.hit}%</em>}</Link>
          ))}
        </div>
        <div className="adm-tile">
          <div className="tile-h"><b>Последние тикеты</b></div>
          {d.tickets_recent.length === 0 && <div className="small">Тикетов пока нет.</div>}
          {d.tickets_recent.map((t) => (
            <Link key={t.id} to={`/tiket/${t.id}`} className="lrow"><Avatar user={t.user} size={28} /><span className="ellip">@{t.user.username}<small> {t.items} соб.</small></span><b className="num gold">{t.odds.toFixed(2)}</b><em className={t.status}>{{ won: 'зашёл', lost: 'мимо', void: 'возврат' }[t.status] || 'в игре'}</em></Link>
          ))}
        </div>
        <div className="adm-tile">
          <div className="tile-h"><b>Новые пользователи</b><Link to="/admin/users" className="small">все</Link></div>
          {(d.new_users || []).map((u) => (
            <Link key={u.id} to={`/u/${u.username}`} className="lrow nu"><Avatar user={u} size={28} /><span className="ellip">{u.name || u.username}{u.club ? <small> {u.club}</small> : null}</span><small>{new Date(u.created).toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit' })}</small></Link>
          ))}
        </div>
        <div className="adm-tile content">
          <div className="tile-h"><b>Контент</b></div>
          <Link to="/admin/banners" className="crow"><ImageIcon size={16} />Активные баннеры<b className="num">{d.content.banners}</b></Link>
          <Link to="/admin/matches" className="crow"><Pin size={16} />Закреплённые матчи дня<b className="num">{d.content.pinned}</b></Link>
          <div className="crow"><PlayCircle size={16} />Обзоры матчей<b className="num">{d.content.highlights}</b>{d.content.highlights_blocked > 0 && <small>скрыто {d.content.highlights_blocked}</small>}</div>
          <div className="crow"><Shield size={16} />Эмблемы команд<b className="num">{d.content.logos}%</b></div>
          <div className="crow"><Crest team={{ short: 'M' }} size={16} />Матчей в базе<b className="num">{fmtNum(d.content.matches)}</b></div>
        </div>
      </div>
    </div>
  )
}
