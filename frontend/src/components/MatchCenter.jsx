import { useState } from 'react'
import { api } from '../api'
import { useT } from '../i18n'
import { usePoll } from '../store'

const ORD = { FIRST: 1, SECOND: 2, THIRD: 3, FOURTH: 4, FORTH: 4, FIFTH: 5 }

export function periodLabel(p, sport, t, short = false) {
  if (!p) return ''
  if (/PAUSE|HALF_TIME|BREAK/.test(p)) return short ? (t.lang === 'ru' ? 'Пер.' : t.serb('Pauza')) : t('pause')
  if (/OVERTIME/.test(p)) return short ? 'OT' : t('overtime')
  if (/PENALT/.test(p)) return short ? (t.lang === 'ru' ? 'Пен.' : t.serb('Pen.')) : t('penalties')
  const [w, kind] = p.split('_')
  const n = ORD[w]
  if (!n || !kind) return ''
  if (short) {
    const letter = { QUARTER: 'Q', SET: 'S', HALF: 'H', PERIOD: 'P' }[kind] || ''
    if (kind === 'HALF') return t.lang === 'ru' ? `${n}-й т.` : t.serb(`${n}. pol.`)
    if (kind === 'SET') return t.lang === 'ru' ? `${n}-й сет` : t.serb(`${n}. set`)
    return `${letter}${n}`
  }
  const word = { HALF: t('half'), QUARTER: t('quarter'), SET: t('set'), PERIOD: sport === 'hockey' ? t('period') : t('quarter') }[kind] || ''
  return t.lang === 'ru' ? `${n}-й ${word}` : `${n}. ${word}`
}

function periodIndex(p) {
  const n = ORD[(p || '').split('_')[0]]
  return n || 0
}

function Momentum({ data, colors }) {
  const W = 600, H = 120, mid = H / 2
  const maxMin = Math.max(90, ...data.map((d) => d[0]))
  const bw = W / (maxMin + 1)
  const hc = '#F2C230', ac = '#EEF3EE'
  return (
    <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" className="momentum" aria-hidden="true">
      <line x1="0" x2={W} y1={mid} y2={mid} stroke="rgba(238,243,238,0.25)" strokeWidth="1" />
      <line x1={W * 45 / maxMin} x2={W * 45 / maxMin} y1="6" y2={H - 6} stroke="rgba(238,243,238,0.18)" strokeDasharray="3 4" />
      {data.map(([m, v], i) => {
        const h = Math.max(1, Math.abs(v) / 100 * (mid - 6))
        return <rect key={i} x={m * bw} width={Math.max(1, bw - 1)} y={v > 0 ? mid - h : mid} height={h} fill={v > 0 ? hc : ac} opacity="0.9" rx="1" />
      })}
    </svg>
  )
}

function EvIcon({ e }) {
  if (e.type === 'Goal') return <span className="ev-ico goal">●</span>
  if (e.type === 'Card') return <span className={`ev-card ${e.card === 'Red' || e.card === 'YellowRed' ? 'red' : 'yellow'}`} />
  if (e.type === 'Substitution') return <span className="ev-ico sub">⇄</span>
  return <span className="ev-ico">•</span>
}

function evTitle(e, t) {
  if (e.type === 'Goal') return e.own ? t('ownGoal') : t('goal')
  if (e.type === 'Card') return e.card === 'Red' || e.card === 'YellowRed' ? t('red') : t('yellow')
  if (e.type === 'Substitution') return t('sub')
  if (e.type === 'MissedPenalty') return t('missedPen')
  return ''
}

export default function MatchCenter({ m }) {
  const t = useT()
  const [tab, setTab] = useState('events')
  const live = m.status === 'live'
  const { data } = usePoll(() => api(`/matches/${m.id}/center`), [m.id, m.status], live ? 20000 : 0, true)
  if (!data) return null
  const hasFoot = data.events || data.stats
  const lv = data.live || {}
  const H = t.team(m.home), A = t.team(m.away)

  if (m.sport === 'football' && hasFoot) {
    const evs = (data.events || []).filter((e) => e.type !== 'Half')
    const key = [...evs].reverse().find((e) => e.type === 'Goal' || e.type === 'Card')
    return (
      <section className="section">
        <div className="section-head"><h2 className="h2">{t('matchCenter')}</h2>{live && <span className="badge live"><span className="live-dot" style={{ marginRight: 6 }} />{m.minute || t('live')}</span>}</div>
        <div className="center-card">
          <div className="center-pitch">
            {data.momentum?.length > 0 && <Momentum data={data.momentum} colors={data.colors} />}
            {key ? (
              <div className="center-key">
                <div className="center-key-min num">{key.min}{key.add ? `+${key.add}` : ''}'</div>
                <div className="center-key-title">{evTitle(key, t)}</div>
                <div className="center-key-sub">{key.player}{key.score ? ` (${key.score[0]}:${key.score[1]})` : ''}, {key.home ? H : A}</div>
              </div>
            ) : (
              <div className="center-key"><div className="center-key-title">{t('pressure')}</div><div className="center-key-sub">{H} / {A}</div></div>
            )}
          </div>
          <div className="seg" style={{ margin: '12px 12px 0' }}>
            <button className={tab === 'events' ? 'on' : ''} onClick={() => setTab('events')}>{t('events')}</button>
            <button className={tab === 'stats' ? 'on' : ''} onClick={() => setTab('stats')}>{t('statistics')}</button>
          </div>
          {tab === 'events' ? (
            <div className="ev-list">
              {evs.length === 0 ? <div className="empty" style={{ padding: 20 }}>{t('noEvents')}</div> : [...evs].reverse().map((e, i) => (
                <div key={i} className={`ev ${e.home ? 'h' : 'a'}`}>
                  <span className="ev-min num">{e.min}{e.add ? `+${e.add}` : ''}'</span>
                  <EvIcon e={e} />
                  <div className="ev-body">
                    <div className="ev-player ellip">{e.player}{e.type === 'Goal' && e.score ? <b className="num"> {e.score[0]}:{e.score[1]}</b> : null}</div>
                    <div className="small ellip">{e.type === 'Substitution' && e.out ? `↓ ${e.out}` : e.assist ? `${t('assistBy')}: ${e.assist}` : evTitle(e, t)}{', '}{e.home ? H : A}</div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="stat-list">
              {(data.stats || []).map((s) => {
                const a = parseFloat(s.v[0]) || 0, b = parseFloat(s.v[1]) || 0
                const tot = a + b || 1
                return (
                  <div key={s.key} className="stat">
                    <div className="stat-top"><b className="num">{s.v[0]}{s.pct ? '%' : ''}</b><span>{t.lang === 'ru' ? s.ru : t.serb(s.sr)}</span><b className="num">{s.v[1]}{s.pct ? '%' : ''}</b></div>
                    <div className="stat-bars"><div><i style={{ width: `${(a / tot) * 100}%` }} className={a >= b ? 'lead' : ''} /></div><div><i style={{ width: `${(b / tot) * 100}%` }} className={b > a ? 'lead' : ''} /></div></div>
                  </div>
                )
              })}
              {(!data.stats || data.stats.length === 0) && <div className="empty" style={{ padding: 20 }}>{t('noEvents')}</div>}
            </div>
          )}
        </div>
      </section>
    )
  }

  const per = lv.per || []
  const cur = periodIndex(lv.p)
  const shown = per.slice(0, Math.max(cur, per.findLastIndex ? per.findLastIndex((x) => x[0] || x[1]) + 1 : per.length))
  if (!shown.length && !(lv.stats && Object.keys(lv.stats).length)) {
    if (!live) return null
    return (
      <section className="section">
        <div className="section-head"><h2 className="h2">{t('matchCenter')}</h2><span className="badge live"><span className="live-dot" style={{ marginRight: 6 }} />{t('live')}</span></div>
        <div className="center-card"><div className="empty" style={{ padding: 22 }}>{t('waitingData')}</div></div>
      </section>
    )
  }
  const corners = lv.stats?.corners, yc = lv.stats?.yc
  return (
    <section className="section">
      <div className="section-head"><h2 className="h2">{t('matchCenter')}</h2>{live && lv.p && <span className="badge live"><span className="live-dot" style={{ marginRight: 6 }} />{periodLabel(lv.p, m.sport, t)}</span>}</div>
      <div className="center-card" style={{ padding: 14 }}>
        {shown.length > 0 && (
          <div className="scroll-x">
            <table className="per-table">
              <thead><tr><th />{shown.map((_, i) => <th key={i} className={i + 1 === cur && live ? 'cur' : ''}>{i + 1}</th>)}{lv.game && <th>{t.lang === 'ru' ? 'Гейм' : t.serb('Gem')}</th>}<th>{t('total')}</th></tr></thead>
              <tbody>
                {[0, 1].map((side) => (
                  <tr key={side}>
                    <td className="ellip" style={{ maxWidth: 140, fontWeight: 700 }}>{side ? A : H}</td>
                    {shown.map((p, i) => <td key={i} className={`num${i + 1 === cur && live ? ' cur' : ''}`}>{p[side]}</td>)}
                    {lv.game && <td className="num">{lv.game[side]}</td>}
                    <td className="num tot">{m.score ? m.score[side] : '–'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {(corners || yc) && (
          <div className="stat-list" style={{ padding: '12px 0 0' }}>
            {corners && <div className="stat"><div className="stat-top"><b className="num">{corners[0]}</b><span>{t.lang === 'ru' ? 'Угловые' : t.serb('Korneri')}</span><b className="num">{corners[1]}</b></div></div>}
            {yc && <div className="stat"><div className="stat-top"><b className="num">{yc[0]}</b><span>{t('yellow')}</span><b className="num">{yc[1]}</b></div></div>}
          </div>
        )}
      </div>
    </section>
  )
}
