import { Link, useSearchParams } from 'react-router-dom'
import { SportSwitcher } from '../components/Sports'
import { ChevronRight, Star } from 'lucide-react'
import { api, tz } from '../api'
import { useT } from '../i18n'
import { useAuth, usePoll } from '../store'
import { MatchList, SectionHead, Skeleton, Crest, Avatar, fmtNum, fmtOdds, Countdown, pickLabel, Empty } from '../components/ui'
import HeroCarousel from '../components/HeroCarousel'
import { HighlightsStrip } from '../components/Highlights'
import { FeaturedMatch } from './Match'


export function TipsterRow({ r, i }) {
  const t = useT()
  return (
    <Link to={`/u/${r.user.username}`} className="list-row">
      <span className={`rank${i < 3 ? ' top' : ''}`}>{i + 1}</span>
      <Avatar user={r.user} size={34} />
      <div className="grow">
        <div className="ellip" style={{ fontWeight: 700 }}>{r.user.name || r.user.username}</div>
        <div className="small ellip">@{r.user.username}, {t.n(r.count, 'predictions')}, {r.winrate}% {t('wonOf')}</div>
      </div>
      <div className="right"><div className={`num ${r.profit >= 0 ? 'pos' : 'neg'}`} style={{ fontSize: 17 }}>{r.profit > 0 ? '+' : ''}{fmtNum(r.profit)}</div><div className="small">ROI {r.roi}%</div></div>
    </Link>
  )
}

export default function Home() {
  const t = useT()
  const { user } = useAuth()
  const [sp, setSp] = useSearchParams()
  const sport = sp.get('sport') || 'all'
  const setSport = (v) => { const n = new URLSearchParams(sp); if (v === 'all') n.delete('sport'); else n.set('sport', v); setSp(n, { replace: true }) }
  const { data, loading, stale } = usePoll(() => api(`/home?tz=${tz()}&sport=${sport}`), [user?.id, sport], 45000, true, `home:${sport}:${user?.id || 0}`)
  const switcher = <div style={{ margin: '20px 0 4px' }}><SportSwitcher value={sport} onChange={setSport} /></div>
  const st = data?.stats || { users: 0, predictions_today: 0 }
  const guestHero = (
        <div className="hero" style={{ marginBottom: 16 }}>
          <h1 className="hero-title">{t('heroTitle')}</h1>
          <p className="sub">{t('heroText')}</p>
          <div style={{ display: 'flex', gap: 10, marginTop: 16, flexWrap: 'wrap' }}>
            <Link to="/registracija" className="btn btn-gold">{t('join')}</Link>
            <Link to="/prijava" className="btn btn-line">{t('login')}</Link>
          </div>
          <div className="hero-stats">
            <div><b>{fmtNum(st.users)}</b><span>{t('users')}</span></div>
            <div><b>{fmtNum(st.predictions_today)}</b><span>{t('today24')}</span></div>
          </div>
        </div>
  )
  if (loading && !data) return (
    <div>
      {!user && guestHero}
      <div className="skeleton" style={{ height: 306, borderRadius: 22, marginBottom: 17 }} />
      {switcher}
      <div className="section"><div className="skeleton" style={{ height: 26, width: 160, borderRadius: 8, marginBottom: 12 }} /><Skeleton h={66} n={4} /></div>
    </div>
  )
  if (!data) return <div>{switcher}<Empty title={t('error')} /></div>
  const d = data
  const allSports = sport === 'all'
  return (
    <div className={stale ? 'is-loading' : ''}>
      {!user && guestHero}

      {allSports && d.derby && new Date(d.derby.start) - new Date() < 21 * 86400000 && (
        <Link to="/derbi" className="derby-banner" style={{ marginBottom: 16 }}>
          <div style={{ display: 'flex' }}><Crest team={d.derby.home} size={34} /><span style={{ marginLeft: -8 }}><Crest team={d.derby.away} size={34} /></span></div>
          <div style={{ minWidth: 0 }}><div className="t">{t('derbyTitle')}</div><div className="s ellip">{t.team(d.derby.home)} – {t.team(d.derby.away)}</div></div>
          {d.derby.status === 'scheduled' ? <Countdown to={d.derby.start} /> : <ChevronRight />}
        </Link>
      )}

      {(d.featured_list || []).length || (d.banners || []).length
        ? <HeroCarousel matches={d.featured_list && d.featured_list.length ? d.featured_list : d.featured ? [d.featured] : []} banners={d.banners || []} label={t('matchOfDay')} />
        : d.featured && <FeaturedMatch m={d.featured} label={t('matchOfDay')} />}
      {switcher}
      <HighlightsStrip list={d.highlights || []} />

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
          <SectionHead title={<span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}><span className="live-dot" />{t('live')}</span>} to={`/mecevi?dan=live${allSports ? '' : `&sport=${sport}`}`} link={t('seeAll')} />
          <MatchList matches={d.live.slice(0, 6)} />
        </section>
      )}

      <section className="section">
        <SectionHead title={t('upcoming')} to={`/mecevi${allSports ? '' : `?sport=${sport}`}`} link={t('seeAll')} />
        {d.upcoming.length ? <MatchList matches={d.upcoming.slice(0, 12)} /> : <div className="card"><Empty title={t('noMatches')} text={t('tryOtherDay')} /></div>}
      </section>


      {(sport === 'all' || sport === 'football' || sport === 'basketball') && d.battle.length > 0 && (
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

      {allSports && d.top.length > 0 && (
        <section className="section">
          <SectionHead title={t('topTipsters')} to="/rang" link={t('seeAll')} />
          <div className="card">{d.top.slice(0, 5).map((r, i) => <TipsterRow key={r.user.id} r={r} i={i} />)}</div>
        </section>
      )}

      {allSports && d.tickets.length > 0 && (
        <section className="section">
          <SectionHead title={t('passedTickets')} to="/rang?tab=tiketi" link={t('seeAll')} />
          <div className="grid-2">
            {d.tickets.map((tk) => (
              <Link key={tk.id} to={`/tiket/${tk.id}`} className="card pad" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <Avatar user={tk.user} size={34} />
                <div className="grow"><div style={{ fontWeight: 700 }} className="ellip">{tk.user.name || tk.user.username}</div><div className="small">{t('totalOdds')} {fmtOdds(tk.total_odds)}</div></div>
                <span className="num pos" style={{ fontSize: 18 }}>+{fmtNum(tk.profit)}</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {allSports && d.bookmakers.length > 0 && (
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
