import { Link } from 'react-router-dom'
import { Flame, TrendingDown } from 'lucide-react'
import { useT } from '../i18n'
import { Crest, StatusTime, OddsButtons, fmtOdds } from './ui'
import HScroll from './HScroll'
import { SportIcon } from './Sports'

// Big cards of the matches people bet on the most, with the split of picks (community or, until there are enough picks, the odds' chances)
export function HotMatches({ list = [] }) {
  const t = useT()
  if (!list.length) return null
  return (
    <section className="section">
      <div className="section-head"><h2 className="h2"><Flame size={20} style={{ color: 'var(--gold)', marginRight: 6, verticalAlign: '-3px' }} />{t('hotMatches')}</h2></div>
      <HScroll className="hot-strip">
        {list.map(({ match: m, split, picks, src }) => {
          const keys = ['1', 'X', '2'].filter((k) => split[k] != null && !(k === 'X' && (m.sport === 'tennis' || m.sport === 'volleyball')))
          return (
            <Link key={m.id} to={`/mec/${m.id}`} state={{ m }} className={`hot-card sc-${m.sport}`}>
              <div className="hot-top">
                <span className="hot-sport"><SportIcon sport={m.sport} size={14} />{t(m.sport)}</span>
                <StatusTime m={m} />
              </div>
              <div className="hot-league ellip">{t.league(m.league)}</div>
              <div className="hot-teams">
                <span><Crest team={m.home} size={34} /><b className="ellip">{t.team(m.home)}</b></span>
                <span><Crest team={m.away} size={34} /><b className="ellip">{t.team(m.away)}</b></span>
              </div>
              <div className="hot-split">{keys.map((k) => <i key={k} className={`k${k}`} style={{ flex: Math.max(split[k], 4) }} />)}</div>
              <div className="hot-pcts">{keys.map((k) => <span key={k}><em>{k}</em>{split[k]}%</span>)}</div>
              <div className="small hot-src">{src === 'community' ? `${picks} ${t('picksN')}` : t('byOdds')}</div>
              <OddsButtons m={m} />
            </Link>
          )
        })}
      </HScroll>
    </section>
  )
}

function Line({ series = [] }) {
  if (series.length < 2) return <svg className="tr-line" />
  const max = Math.max(...series), min = Math.min(...series), w = 64, h = 26
  const pts = series.map((v, i) => `${(i / Math.max(1, series.length - 1)) * w},${max === min ? h / 2 : 3 + ((v - min) / (max - min)) * (h - 6)}`).join(' ')
  return <svg className="tr-line" viewBox={`0 0 ${w} ${h}`}><polyline points={pts} fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" /></svg>
}

// Numbered list of the biggest line moves of the day, with a small chart of the odds
export function LineTrends({ list = [] }) {
  const t = useT()
  list = list.filter((x) => x && x.match && Array.isArray(x.series))
  if (list.length < 2) return null
  return (
    <section className="section">
      <div className="section-head"><h2 className="h2"><TrendingDown size={20} style={{ color: '#3DD68C', marginRight: 6, verticalAlign: '-3px' }} />{t('lineMoves')}</h2><span className="small">{t('lineHint')}</span></div>
      <div className="card tr-list">
        {list.map((x, i) => {
          const m = x.match
          return (
            <Link key={m.id} to={`/mec/${m.id}`} state={{ m }} className="tr-row">
              <span className="tr-n num">{i + 1}</span>
              <div className="tr-main">
                <b className="ellip">{t.team(m.home)} – {t.team(m.away)}</b>
                <span className="small ellip">{t.league(m.league)} · {x.pick}: {fmtOdds(x.from)} → <strong>{fmtOdds(x.to)}</strong></span>
              </div>
              <Line series={x.series} />
              <span className="tr-ch num">{x.change}%</span>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
