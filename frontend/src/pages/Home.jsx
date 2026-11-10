import { Link } from 'react-router-dom'
import { ChevronRight, Star } from 'lucide-react'
import { api, tz } from '../api'
import { useT } from '../i18n'
import { useAuth, usePoll } from '../store'
import { MatchList, SectionHead, Skeleton, Crest, Avatar, fmtNum, fmtOdds, Countdown, pickLabel, Empty } from '../components/ui'
import { FeaturedMatch } from './Match'

export function TrendCard({ tr }) {
  const t = useT()
  const m = tr.match
  return (
    <Link to={`/mec/${m.id}`} className="card pad trend">
      <div className="trend-text">{t.lang === 'ru' ? tr.ru : t.serb(tr.sr)}</div>
      <div className="trend-foot">
        <span className="trend-match">{t.team(m.home)} – {t.team(m.away)}</span>
        <span className="badge gold">{pickLabel(t, m, tr.pick)} {fmtOdds(tr.odds)}</span>
      </div>
    </Link>
  )
}

export function TipsterRow({ r, i }) {
  const t = useT()
  return (
    <Link to={`/u/${r.user.username}`} className="list-row">
      <span className={`rank${i < 3 ? ' top' : ''}`}>{i + 1}</span>
      <Avatar user={r.user} size={34} />
      <div className="grow">
        <div className="ellip" style={{ fontWeight: 700 }}>{r.user.username}</div>
        <div className="small ellip">{t.n(r.count, 'predictions')}, {r.winrate}% {t('wonOf')}</div>
      </div>
      <div className="right"><div className={`num ${r.profit >= 0 ? 'pos' : 'neg'}`} style={{ fontSize: 17 }}>{r.profit > 0 ? '+' : ''}{fmtNum(r.profit)}</div><div className="small">ROI {r.roi}%</div></div>
    </Link>
  )
}

export default function Home() {
  const t = useT()
  const { user } = useAuth()
  const { data, loading } = usePoll(() => api(`/home?tz=${tz()}`), [user?.id], 45000)
  if (loading && !data) return <Skeleton h={180} n={3} />
  if (!data) return <Empty title={t('error')} />
  const d = data
  return (
    <div>
      {!user && (
        <div className="hero" style={{ marginBottom: 16 }}>
          <h1 className="hero-title">{t('heroTitle')}</h1>
          <p className="sub">{t('heroText')}</p>
          <div style={{ display: 'flex', gap: 10, marginTop: 16, flexWrap: 'wrap' }}>
            <Link to="/registracija" className="btn btn-gold">{t('join')}</Link>
            <Link to="/prijava" className="btn btn-line">{t('login')}</Link>
          </div>
          <div className="hero-stats">
            <div><b>{fmtNum(d.stats.users)}</b><span>{t('users')}</span></div>
            <div><b>{fmtNum(d.stats.predictions_today)}</b><span>{t('today24')}</span></div>
          </div>
        </div>
      )}

      {d.derby && new Date(d.derby.start) - new Date() < 21 * 86400000 && (
        <Link to="/derbi" className="derby-banner" style={{ marginBottom: 16 }}>
          <div style={{ display: 'flex' }}><Crest team={d.derby.home} size={34} /><span style={{ marginLeft: -8 }}><Crest team={d.derby.away} size={34} /></span></div>
          <div style={{ minWidth: 0 }}><div className="t">{t('derbyTitle')}</div><div className="s ellip">{t.team(d.derby.home)} – {t.team(d.derby.away)}</div></div>
          {d.derby.status === 'scheduled' ? <Countdown to={d.derby.start} /> : <ChevronRight />}
        </Link>
      )}

      {d.featured && <FeaturedMatch m={d.featured} label={t('matchOfDay')} />}

      {user && d.my_club.length > 0 && (
        <section className="section">
          <SectionHead title={<span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}><Star size={18} color="var(--gold)" />{t('yourClub')}</span>} />
          <MatchList matches={d.my_club} />
        </section>
      )}
      {user && !user.fav_football && !user.fav_basket && (
        <Link to="/izbor-kluba" className="card pad" style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 16 }}>
          <Star size={22} color="var(--gold)" /><div className="grow"><b>{t('chooseClub')}</b><div className="small">{t('chooseClubHint')}</div></div><ChevronRight />
        </Link>
      )}

      {d.live.length > 0 && (
        <section className="section">
          <SectionHead title={<span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}><span className="live-dot" />{t('live')}</span>} to="/mecevi?dan=live" link={t('seeAll')} />
          <MatchList matches={d.live.slice(0, 6)} />
        </section>
      )}

      <section className="section">
        <SectionHead title={t('upcoming')} to="/mecevi" link={t('seeAll')} />
        {d.upcoming.length ? <MatchList matches={d.upcoming.slice(0, 12)} /> : <div className="card"><Empty title={t('noMatches')} text={t('tryOtherDay')} /></div>}
      </section>

      {d.trends.length > 0 && (
        <section className="section">
          <SectionHead title={t('trends')} to="/trendovi" link={t('seeAll')} />
          <div className="grid-2">{d.trends.slice(0, 4).map((tr, i) => <TrendCard key={i} tr={tr} />)}</div>
        </section>
      )}

      {d.battle.length > 0 && (
        <section className="section">
          <SectionHead title={t('fanBattle')} to="/rang?tab=klubovi" link={t('seeAll')} />
          <div className="card">
            {d.battle.map((r, i) => (
              <Link to={`/klub/${r.team.id}`} className="list-row" key={r.team.id}>
                <span className={`rank${i < 3 ? ' top' : ''}`}>{i + 1}</span>
                <Crest team={r.team} size={32} />
                <div className="grow"><div className="ellip" style={{ fontWeight: 700 }}>{t.team(r.team)}</div><div className="small">{t.n(r.fans, 'fans')}, {r.winrate}% {t('wonOf')}</div></div>
                <div className="right"><div className={`num ${r.avg >= 0 ? 'pos' : 'neg'}`} style={{ fontSize: 17 }}>{r.avg > 0 ? '+' : ''}{fmtNum(r.avg, 1)}</div><div className="small">{t('avgPerFan')}</div></div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {d.top.length > 0 && (
        <section className="section">
          <SectionHead title={t('topTipsters')} to="/rang" link={t('seeAll')} />
          <div className="card">{d.top.slice(0, 5).map((r, i) => <TipsterRow key={r.user.id} r={r} i={i} />)}</div>
        </section>
      )}

      {d.tickets.length > 0 && (
        <section className="section">
          <SectionHead title={t('passedTickets')} to="/rang?tab=tiketi" link={t('seeAll')} />
          <div className="grid-2">
            {d.tickets.map((tk) => (
              <Link key={tk.id} to={`/tiket/${tk.id}`} className="card pad" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <Avatar user={tk.user} size={34} />
                <div className="grow"><div style={{ fontWeight: 700 }} className="ellip">@{tk.user.username}</div><div className="small">{t('totalOdds')} {fmtOdds(tk.total_odds)}</div></div>
                <span className="num pos" style={{ fontSize: 18 }}>+{fmtNum(tk.profit)}</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {d.bookmakers.length > 0 && (
        <section className="section">
          <SectionHead title={t('bookmakers')} to="/kladionice" link={t('seeAll')} />
          <div className="card">
            {d.bookmakers.map((b) => (
              <a key={b.id} href={b.url} target="_blank" rel="noopener sponsored" className="bm">
                <span className="bm-logo" style={{ background: b.color }}>{b.name.slice(0, 1)}</span>
                <div style={{ minWidth: 0 }}><div style={{ fontWeight: 700 }}>{b.name}</div><div className="small ellip">{t.lang === 'ru' ? b.bonus_ru : t.serb(b.bonus_sr)}</div></div>
                <ChevronRight size={18} color="var(--muted)" />
              </a>
            ))}
          </div>
          <p className="note" style={{ marginTop: 8 }}>{t('bmNote')}</p>
        </section>
      )}
    </div>
  )
}
