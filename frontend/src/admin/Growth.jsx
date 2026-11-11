import { useState } from 'react'
import { Copy, ExternalLink, Check, Send, RefreshCw, Trash2, Video, Plus } from 'lucide-react'
import { api } from '../api'
import { usePoll } from '../store'
import { Skeleton, Toast } from '../components/ui'

const nf = (n) => new Intl.NumberFormat('ru-RU').format(n || 0)
const SRC_RU = { direct: 'Напрямую', google: 'Google', bing: 'Bing', facebook: 'Facebook', instagram: 'Instagram', telegram: 'Telegram', viber: 'Viber', fb_group: 'Группы Facebook', winly_social: 'Наши соцсети', invite: 'Приглашения', widget: 'Виджет', youtube: 'YouTube', tiktok: 'TikTok', threads: 'Threads', bluesky: 'Bluesky' }

function Bars({ labels, series, color = 'var(--gold)' }) {
  const max = Math.max(1, ...series)
  return (
    <div className="bars g-bars">
      {labels.map((l, i) => (
        <div key={i} className="bar-col" title={`${l}: ${series[i]}`}>
          <div className="bar-stack">{series[i] > 0 ? <i style={{ height: `${(series[i] / max) * 100}%`, background: color }} /> : <i className="zero" />}</div>
          <span className={i % Math.ceil(labels.length / 7) === 0 ? '' : 'hide'}>{l}</span>
        </div>
      ))}
    </div>
  )
}

function ListTile({ title, rows, fmt = (k) => k }) {
  const max = Math.max(1, ...rows.map((r) => r[1]))
  return (
    <div className="adm-tile">
      <div className="tile-h"><b>{title}</b></div>
      {rows.length === 0 && <div className="small">Пока нет данных.</div>}
      {rows.map(([k, v]) => (
        <div key={k} className="g-row"><span className="ellip">{fmt(k)}</span><b className="num">{nf(v)}</b><i style={{ width: `${(v / max) * 100}%` }} /></div>
      ))}
    </div>
  )
}

export function Traffic() {
  const [days, setDays] = useState(14)
  const { data: d } = usePoll(() => api(`/admin/traffic?days=${days}`), [days], 60000)
  if (!d) return <Skeleton h={120} n={3} />
  const tot = d.visitors.reduce((a, b) => a + b, 0)
  return (
    <div className="g-page">
      <div className="pills" style={{ marginBottom: 14 }}>{[[7, '7 дней'], [14, '14 дней'], [30, '30 дней']].map(([k, l]) => <button key={k} className={days === k ? 'on' : ''} onClick={() => setDays(k)}>{l}</button>)}</div>
      <div className="bento">
        <div className="adm-tile kpi"><span className="kpi-l">Посетители (по дням, сумма)</span><div className="kpi-v num">{nf(tot)}</div></div>
        <div className="adm-tile kpi"><span className="kpi-l">Визиты</span><div className="kpi-v num">{nf(d.sessions)}</div></div>
        <div className="adm-tile kpi"><span className="kpi-l">Регистрации</span><div className="kpi-v num">{nf(d.registrations)}</div></div>
        <div className="adm-tile kpi"><span className="kpi-l">Конверсия в регистрацию</span><div className="kpi-v num">{d.conversion}%</div></div>
        <div className="adm-tile span2"><div className="tile-h"><b>Посетители по дням</b></div><Bars labels={d.labels} series={d.visitors} color="#6AAEF0" /></div>
        <div className="adm-tile span2"><div className="tile-h"><b>Просмотры страниц</b></div><Bars labels={d.labels} series={d.views} /></div>
        <ListTile title="Откуда приходят" rows={d.sources} fmt={(k) => SRC_RU[k] || k} />
        <ListTile title="Страницы входа" rows={d.landing} />
        <ListTile title="Популярные страницы" rows={d.pages} />
        <ListTile title="Кампании (метки ссылок)" rows={d.campaigns} />
      </div>
    </div>
  )
}

export function Seo() {
  const [ver, setVer] = useState(0)
  const { data: d } = usePoll(() => api('/admin/seo'), [ver], 60000)
  const [v, setV] = useState(null)
  const [toast, setToast] = useState('')
  if (!d) return <Skeleton h={120} n={3} />
  const form = v || { google: d.verify_meta.google || '', bing: d.verify_meta.bing || '', file_name: '', file_body: '' }
  const save = async () => { await api('/admin/seo/verify', { method: 'POST', body: form }); setToast('Сохранено'); setV(null); setVer((x) => x + 1) }
  const checks = [
    ['Страницы для поисковых роботов (готовый HTML)', true], ['sitemap.xml обновляется сам', true], ['robots.txt', true],
    ['Разметка «спортивное событие» (schema.org)', true], ['Превью ссылок для каждой страницы', true], ['Связка языков (hreflang)', true],
    ['Понятные адреса матчей и лиг', true], ['Свой домен', d.domain], ['Google Search Console подтверждён', !!d.verify_meta.google || d.verify_files.length > 0],
  ]
  return (
    <div className="g-page">
      {!d.domain && <div className="g-note">Сайт на временном адресе {d.public_url}. Всё уже работает, но в поиск лучше отдавать сайт на своём домене: после покупки домена отправим sitemap в Google и Bing.</div>}
      <div className="bento">
        <div className="adm-tile kpi"><span className="kpi-l">Страниц в sitemap</span><div className="kpi-v num">{nf(d.sitemap.total)}</div><small className="small">{d.sitemap.matches} матчей, {d.sitemap.leagues} лиг</small></div>
        <div className="adm-tile kpi"><span className="kpi-l">Заходы роботов (14 дней)</span><div className="kpi-v num">{nf(d.bot_hits.reduce((a, b) => a + b, 0))}</div></div>
        <div className="adm-tile span2"><div className="tile-h"><b>Роботы по дням</b><a className="small" href="/sitemap.xml" target="_blank" rel="noopener">sitemap.xml</a></div><Bars labels={d.labels} series={d.bot_hits} color="#4CC38A" /></div>
        <div className="adm-tile span2"><div className="tile-h"><b>Готовность SEO</b></div>
          {checks.map(([l, ok]) => <div key={l} className="g-check"><i className={ok ? 'ok' : ''}>{ok ? <Check size={13} /> : ''}</i>{l}</div>)}
        </div>
        <ListTile title="Какие роботы" rows={d.bots} />
        <ListTile title="Что смотрят роботы" rows={d.bot_paths} />
        <ListTile title="Входы из поиска" rows={d.search_landing} />
        <div className="adm-tile span2">
          <div className="tile-h"><b>Подтверждение в Google и Bing</b></div>
          <div className="g-form">
            <label>Google: код из метатега google-site-verification<input className="input" value={form.google} onChange={(e) => setV({ ...form, google: e.target.value })} placeholder="например abc123…" /></label>
            <label>Bing: код из метатега msvalidate.01<input className="input" value={form.bing} onChange={(e) => setV({ ...form, bing: e.target.value })} /></label>
            <label>Или файл подтверждения: имя (googleXXXX.html)<input className="input" value={form.file_name} onChange={(e) => setV({ ...form, file_name: e.target.value })} /></label>
            <label>Содержимое файла<input className="input" value={form.file_body} onChange={(e) => setV({ ...form, file_body: e.target.value })} /></label>
            <button className="btn btn-gold btn-sm" onClick={save}>Сохранить</button>
          </div>
        </div>
      </div>
      <Toast text={toast} onDone={() => setToast('')} />
    </div>
  )
}

const KIND_RU = { motd: 'Матч дня', hot: 'Горячие матчи', results: 'Итоги и топ', weekly: 'Битва фанатов (неделя)' }
const CH = [['telegram', 'Telegram', [['token', 'Токен бота'], ['chat', 'Канал (@winly или id)'], ['test_chat', 'Тестовый канал / чат']]],
  ['facebook', 'Facebook-страница', [['page_id', 'ID страницы'], ['token', 'Токен страницы']]],
  ['instagram', 'Instagram (бизнес)', [['ig_id', 'ID аккаунта Instagram'], ['token', 'Токен']]],
  ['threads', 'Threads', [['user_id', 'ID пользователя'], ['token', 'Токен']]],
  ['bluesky', 'Bluesky', [['handle', 'Ник (name.bsky.social)'], ['app_password', 'Пароль приложения']]],
  ['viber', 'Viber-канал', [['token', 'Токен канала'], ['from', 'ID администратора']]]]

function FbConnect({ onDone }) {
  const [f, setF] = useState({ app_id: '', app_secret: '', user_token: '' })
  const [msg, setMsg] = useState('')
  const [busy, setBusy] = useState(false)
  const connect = async () => {
    setBusy(true); setMsg('')
    try { const r = await api('/admin/social/fb-connect', { method: 'POST', body: f }); setMsg(`Подключено: страница «${r.page}»${r.instagram ? ' + Instagram' : ''}. Ключ бессрочный.`); setF({ app_id: '', app_secret: '', user_token: '' }); onDone() }
    catch (e) { setMsg(`Не получилось: ${e.message || e.code}`) } finally { setBusy(false) }
  }
  const test = async () => {
    setBusy(true); setMsg('')
    try { const r = await api('/admin/social/fb-test', { method: 'POST' }); setMsg(r.facebook === 'ok' ? 'Пост опубликован на странице — проверь Facebook.' : `Facebook ответил: ${r.facebook || 'нет ответа'}`) }
    catch (e) { setMsg(`Не получилось: ${e.message || e.code}`) } finally { setBusy(false) }
  }
  return (
    <div className="adm-tile span2">
      <div className="tile-h"><b>Подключить страницу Facebook</b></div>
      <p className="small" style={{ marginTop: 0 }}>ID и секрет приложения — developers.facebook.com → твоё приложение → Настройки → Основное. Ключ пользователя — Graph API Explorer с разрешениями pages_show_list, pages_read_engagement, pages_manage_posts. Сервер сам сделает бессрочный ключ страницы.</p>
      <div className="g-form">
        <label>App ID<input className="input" value={f.app_id} onChange={(e) => setF({ ...f, app_id: e.target.value.trim() })} /></label>
        <label>App Secret<input className="input" value={f.app_secret} onChange={(e) => setF({ ...f, app_secret: e.target.value.trim() })} /></label>
        <label>Ключ пользователя (User Access Token)<input className="input" value={f.user_token} onChange={(e) => setF({ ...f, user_token: e.target.value.trim() })} /></label>
        <div className="g-act"><button className="btn btn-gold btn-sm" disabled={busy || !f.app_id || !f.app_secret || !f.user_token} onClick={connect}>Подключить</button><button className="btn btn-ghost btn-sm" disabled={busy} onClick={test}>Тестовый пост на страницу</button></div>
      </div>
      {msg && <div className="small" style={{ marginTop: 8, color: msg.startsWith('Не') ? '#FF6B6B' : '#3DD68C' }}>{msg}</div>}
    </div>
  )
}

export function Social() {
  const [ver, setVer] = useState(0)
  const { data } = usePoll(() => api('/admin/social'), [ver], 30000)
  const [cfg, setCfg] = useState(null)
  const [extra, setExtra] = useState(null)
  const [toast, setToast] = useState('')
  const [busy, setBusy] = useState('')
  const [vid, setVid] = useState({ id: '', url: '' })
  if (!data) return <Skeleton h={120} n={3} />
  const c = cfg || data.cfg
  const ex = extra || { ref_bonus: data.ref_bonus, contest: data.contest }
  const setCh = (name, k, val) => setCfg({ ...c, channels: { ...c.channels, [name]: { ...c.channels[name], [k]: val } } })
  const save = async () => { await api('/admin/social', { method: 'POST', body: { cfg: c, ref_bonus: Number(ex.ref_bonus) || 0, contest: ex.contest } }); setCfg(null); setExtra(null); setToast('Сохранено'); setVer((x) => x + 1) }
  const gen = async (k) => { setBusy(k); try { await api(`/admin/social/generate/${k}`, { method: 'POST' }); setVer((x) => x + 1) } catch { setToast('Сейчас нечего публиковать') } finally { setBusy('') } }
  const send = async (id) => { setBusy(`s${id}`); try { await api(`/admin/social/send/${id}`, { method: 'POST' }); setToast('Отправлено'); setVer((x) => x + 1) } finally { setBusy('') } }
  const del = async (id) => { await api(`/admin/social/${id}`, { method: 'DELETE' }); setVer((x) => x + 1) }
  const mkVideo = async () => { if (!vid.id) return; setBusy('v'); try { const r = await api(`/admin/social/video/${vid.id}`, { method: 'POST' }); setVid({ ...vid, url: r.url }) } finally { setBusy('') } }
  return (
    <div className="g-page">
      <div className="bento">
        <FbConnect onDone={() => setVer((x) => x + 1)} />
        <div className="adm-tile span2">
          <div className="tile-h"><b>Режим</b></div>
          <div className="seg4" style={{ gridTemplateColumns: '1fr 1fr' }}>
            <button className={c.mode !== 'live' ? 'on' : ''} onClick={() => setCfg({ ...c, mode: 'test' })}>Тест (только тестовый канал)</button>
            <button className={c.mode === 'live' ? 'on' : ''} onClick={() => setCfg({ ...c, mode: 'live' })}>Боевой (все каналы)</button>
          </div>
          <button className="sw-row" onClick={() => setCfg({ ...c, auto: !c.auto })}><span>Отправлять автоматически по расписанию</span><i className={`sw${c.auto ? ' on' : ''}`} /></button>
          <div className="g-times">{Object.entries(c.times).map(([k, val]) => (
            <label key={k}>{KIND_RU[k]}<input className="input" value={val} onChange={(e) => setCfg({ ...c, times: { ...c.times, [k]: e.target.value } })} /></label>
          ))}</div>
          <small className="small">Время по Белграду. «Mon 12:00» — по понедельникам.</small>
        </div>
        <div className="adm-tile span2">
          <div className="tile-h"><b>Создать пост сейчас</b></div>
          <div className="g-gen">{Object.entries(KIND_RU).map(([k, l]) => <button key={k} className="btn btn-ghost btn-sm" disabled={busy === k} onClick={() => gen(k)}><Plus size={15} />{l}</button>)}</div>
          <div className="tile-h" style={{ marginTop: 14 }}><b>Видео для Reels / TikTok / Shorts</b></div>
          <div className="g-vid"><input className="input" placeholder="ID матча (из адреса /mec/123-…)" value={vid.id} onChange={(e) => setVid({ id: e.target.value.replace(/\D/g, ''), url: '' })} />
            <button className="btn btn-gold btn-sm" disabled={busy === 'v' || !vid.id} onClick={mkVideo}><Video size={15} />{busy === 'v' ? 'Готовлю…' : 'Сделать видео'}</button></div>
          {vid.url && <video src={vid.url} controls playsInline style={{ width: 180, borderRadius: 12, marginTop: 10 }} />}
          {vid.url && <a className="btn btn-line btn-sm" href={vid.url} download style={{ marginTop: 8 }}>Скачать MP4</a>}
        </div>
        {CH.map(([name, title, fields]) => (
          <div key={name} className="adm-tile">
            <div className="tile-h"><b>{title}</b>{Object.values(c.channels[name] || {}).some((x) => x) ? <span className="g-on">подключено</span> : <span className="small">не подключено</span>}</div>
            {fields.map(([k, l]) => <label key={k} className="g-lbl">{l}<input className="input" value={c.channels[name]?.[k] || ''} onChange={(e) => setCh(name, k, e.target.value)} /></label>)}
          </div>
        ))}
        <div className="adm-tile span2">
          <div className="tile-h"><b>Приглашения и конкурс</b></div>
          <label className="g-lbl">Бонус за приглашённого друга (обоим)<input className="input" value={ex.ref_bonus} onChange={(e) => setExtra({ ...ex, ref_bonus: e.target.value.replace(/\D/g, '') })} /></label>
          <button className="sw-row" onClick={() => setExtra({ ...ex, contest: { ...ex.contest, active: !ex.contest?.active } })}><span>Конкурс недели на странице рейтинга</span><i className={`sw${ex.contest?.active ? ' on' : ''}`} /></button>
          <label className="g-lbl">Название конкурса<input className="input" value={ex.contest?.title || ''} onChange={(e) => setExtra({ ...ex, contest: { ...ex.contest, title: e.target.value } })} /></label>
          <label className="g-lbl">Приз<input className="input" value={ex.contest?.prize || ''} onChange={(e) => setExtra({ ...ex, contest: { ...ex.contest, prize: e.target.value } })} /></label>
          <label className="g-lbl">Срок (текст)<input className="input" value={ex.contest?.until || ''} onChange={(e) => setExtra({ ...ex, contest: { ...ex.contest, until: e.target.value } })} placeholder="до воскресенья 23:59" /></label>
        </div>
      </div>
      <div className="g-save"><button className="btn btn-gold" onClick={save} disabled={!cfg && !extra}>Сохранить настройки</button></div>
      <h3 className="g-h3">Посты</h3>
      <div className="g-posts">
        {data.posts.length === 0 && <div className="small">Постов ещё нет — создай пост кнопками выше или дождись расписания.</div>}
        {data.posts.map((p) => (
          <div key={p.id} className="g-post">
            <img src={p.image} alt="" loading="lazy" />
            <div className="g-post-b">
              <div className="g-post-h"><b>{KIND_RU[p.kind] || p.kind}</b>{p.test && <span className="g-test">тест</span>}<small>{new Date(p.created).toLocaleString('ru-RU')}</small></div>
              <pre>{p.text}</pre>
              <a className="small" href={p.link} target="_blank" rel="noopener">{p.link}</a>
              <div className="g-sent">{Object.entries(p.sent).map(([k, v]) => <span key={k} className={v === 'ok' ? 'ok' : 'err'} title={v}>{k}: {v === 'ok' ? 'отправлено' : 'ошибка'}</span>)}</div>
              <div className="g-act">
                <button className="btn btn-gold btn-sm" disabled={busy === `s${p.id}`} onClick={() => send(p.id)}><Send size={14} />Отправить</button>
                <button className="btn btn-ghost btn-sm" onClick={() => navigator.clipboard.writeText(`${p.text}\n${p.link}`)}><Copy size={14} />Текст</button>
                <a className="btn btn-ghost btn-sm" href={p.image} target="_blank" rel="noopener"><ExternalLink size={14} />Картинка</a>
                <button className="btn btn-line btn-sm" onClick={() => del(p.id)}><Trash2 size={14} /></button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Toast text={toast} onDone={() => setToast('')} />
    </div>
  )
}

const TOPIC_RU = { general: 'Общая', football: 'Футбол', basketball: 'Баскетбол', partizan: 'Партизан', zvezda: 'Црвена Звезда', betting: 'Прогнозы' }
export function Groups() {
  const [ver, setVer] = useState(0)
  const { data } = usePoll(() => api('/admin/groups'), [ver], 0)
  const [f, setF] = useState({ name: '', url: '', topic: 'general', every_days: 3, note: '' })
  const [copied, setCopied] = useState(0)
  const add = async () => { if (!f.name) return; await api('/admin/groups', { method: 'POST', body: { ...f, every_days: Number(f.every_days) || 3 } }); setF({ name: '', url: '', topic: 'general', every_days: 3, note: '' }); setVer((x) => x + 1) }
  const posted = async (g) => { await api(`/admin/groups/${g.id}/posted`, { method: 'POST' }); setVer((x) => x + 1) }
  const del = async (g) => { if (!confirm('Удалить группу?')) return; await api(`/admin/groups/${g.id}`, { method: 'DELETE' }); setVer((x) => x + 1) }
  const copy = async (g) => { await navigator.clipboard.writeText(g.text); setCopied(g.id); setTimeout(() => setCopied(0), 1500) }
  return (
    <div className="g-page">
      <div className="g-note">Facebook с 2024 года не даёт программам публиковать в группы — за автоматический постинг блокируют аккаунт. Поэтому здесь полуавтомат: готовый пост под тему группы с меткой ссылки → «Копировать» → «Открыть группу» → вставить → «Опубликовал». Видно, сколько людей пришло из каждой группы.</div>
      <div className="adm-tile" style={{ marginBottom: 14 }}>
        <div className="tile-h"><b>Добавить группу</b></div>
        <div className="g-addg">
          <input className="input" placeholder="Название группы" value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} />
          <input className="input" placeholder="Ссылка на группу" value={f.url} onChange={(e) => setF({ ...f, url: e.target.value })} />
          <select className="input" value={f.topic} onChange={(e) => setF({ ...f, topic: e.target.value })}>{Object.entries(TOPIC_RU).map(([k, l]) => <option key={k} value={k}>{l}</option>)}</select>
          <input className="input" placeholder="Раз в N дней" value={f.every_days} onChange={(e) => setF({ ...f, every_days: e.target.value.replace(/\D/g, '') })} />
          <button className="btn btn-gold btn-sm" onClick={add}><Plus size={15} />Добавить</button>
        </div>
      </div>
      {!data ? <Skeleton /> : data.length === 0 ? <div className="small">Групп пока нет.</div> : (
        <div className="g-posts">
          {data.map((g) => (
            <div key={g.id} className={`g-post${g.due ? ' due' : ''}`}>
              <img src={g.image} alt="" loading="lazy" />
              <div className="g-post-b">
                <div className="g-post-h"><b>{g.name}</b><span className="g-test">{TOPIC_RU[g.topic]}</span>{g.due ? <span className="g-on">можно публиковать</span> : <small>следующий раз: {new Date(g.next).toLocaleDateString('ru-RU')}</small>}</div>
                <pre>{g.text}</pre>
                <div className="small">Публикаций: {g.posts} · пришло людей: {g.visits}{g.last_posted ? ` · последний раз ${new Date(g.last_posted).toLocaleDateString('ru-RU')}` : ''}</div>
                <div className="g-act">
                  <button className="btn btn-gold btn-sm" onClick={() => copy(g)}>{copied === g.id ? <Check size={14} /> : <Copy size={14} />}Копировать</button>
                  {g.url && <a className="btn btn-ghost btn-sm" href={g.url} target="_blank" rel="noopener"><ExternalLink size={14} />Открыть группу</a>}
                  <a className="btn btn-ghost btn-sm" href={g.image} target="_blank" rel="noopener">Картинка</a>
                  <button className="btn btn-ghost btn-sm" onClick={() => posted(g)}><Check size={14} />Опубликовал</button>
                  <button className="btn btn-line btn-sm" onClick={() => del(g)}><Trash2 size={14} /></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export function Widget() {
  const [id, setId] = useState('')
  const origin = window.location.origin
  const code = id ? `<iframe src="${origin}/w/${id}" width="100%" height="260" style="border:0;border-radius:14px;max-width:420px" loading="lazy"></iframe>` : ''
  return (
    <div className="g-page">
      <div className="g-note">Виджет «Прогноз сообщества» для фан-сайтов и блогов: голосование болельщиков, коэффициенты и кнопка «Дай прогноз». Каждая вставка — ссылка на Winly (помогает SEO) и новые посетители с меткой «widget».</div>
      <div className="adm-tile">
        <label className="g-lbl">ID матча<input className="input" value={id} onChange={(e) => setId(e.target.value.replace(/\D/g, ''))} placeholder="например 598" /></label>
        {code && <>
          <pre className="g-code">{code}</pre>
          <button className="btn btn-gold btn-sm" onClick={() => navigator.clipboard.writeText(code)}><Copy size={14} />Копировать код</button>
          <div style={{ marginTop: 14 }} dangerouslySetInnerHTML={{ __html: code }} />
        </>}
      </div>
    </div>
  )
}
