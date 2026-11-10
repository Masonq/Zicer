import { NavLink, Link, Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { House, CalendarDays, Trophy, User, Flame, TrendingUp, Landmark, Swords, Wallet, Shield } from 'lucide-react'
import { useT, LangCtx } from '../i18n'
import { useContext } from 'react'
import { useAuth, useSlip, usePoll } from '../store'
import { api } from '../api'
import Slip from './Slip'
import { ErrorBoundary } from './Sports'
import { Crest, fmtNum } from './ui'

function LangSwitch() {
  const { lang, setLang } = useContext(LangCtx)
  const opts = [['sr', 'LAT'], ['sr-cyr', 'ЋИР'], ['ru', 'RU']]
  return (
    <div className="lang-switch" role="group" aria-label="Jezik">
      {opts.map(([k, l]) => <button key={k} className={lang === k ? 'on' : ''} onClick={() => setLang(k)}>{l}</button>)}
    </div>
  )
}

function BattleMini() {
  const t = useT()
  const { data } = usePoll(() => api('/clubs/battle?sport=football'), [], 120000)
  if (!data || !data.length) return null
  return (
    <div className="card">
      <div className="section-head" style={{ padding: '14px 14px 0' }}><h2 className="h2">{t('fanBattle')}</h2><Link to="/rang?tab=klubovi">{t('seeAll')}</Link></div>
      {data.slice(0, 5).map((r, i) => (
        <div className="list-row" key={r.team.id}>
          <span className={`rank${i < 3 ? ' top' : ''}`}>{i + 1}</span>
          <Crest team={r.team} size={26} />
          <div className="grow"><div className="ellip" style={{ fontWeight: 700, fontSize: 14 }}>{t.team(r.team)}</div><div className="small">{t.n(r.fans, 'fans')}</div></div>
          <span className={`num ${r.avg >= 0 ? 'pos' : 'neg'}`}>{r.avg > 0 ? '+' : ''}{fmtNum(r.avg, 1)}</span>
        </div>
      ))}
    </div>
  )
}

export default function Layout() {
  const t = useT()
  const { user } = useAuth()
  const slip = useSlip()
  const loc = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [loc.pathname])
  const nav = [
    ['/', t('home'), House], ['/mecevi', t('matches'), CalendarDays], ['/derbi', t('derby'), Swords],
    ['/trendovi', t('trends'), TrendingUp], ['/rang', t('ranking'), Trophy], ['/kladionice', t('bookmakers'), Landmark],
  ]
  return (
    <div className="shell">
      <aside className="sidebar">
        <Link to="/" className="wordmark">Zicer</Link>
        {nav.map(([to, label, Icon]) => (
          <NavLink key={to} to={to} end={to === '/'} className={({ isActive }) => `side-link${isActive ? ' on' : ''}`}><Icon size={20} />{label}</NavLink>
        ))}
        {user ? (
          <NavLink to="/profil" className={({ isActive }) => `side-link${isActive ? ' on' : ''}`}><User size={20} />{t('profile')}</NavLink>
        ) : (
          <NavLink to="/prijava" className={({ isActive }) => `side-link${isActive ? ' on' : ''}`}><User size={20} />{t('login')}</NavLink>
        )}
        {user?.is_admin && <NavLink to="/admin" className={({ isActive }) => `side-link${isActive ? ' on' : ''}`}><Shield size={20} />{t('admin')}</NavLink>}
        <div className="side-foot">
          {user && <span className="bank-chip" title={t('yourBank')}><Wallet size={16} />{fmtNum(user.bank)}</span>}
          <LangSwitch />
        </div>
      </aside>

      <div style={{ minWidth: 0 }}>
        <header className="topbar">
          <Link to="/" className="wordmark">Zicer</Link>
          <div className="topbar-right">
            {user && <Link to="/profil" className="bank-chip" title={t('yourBank')}><Wallet size={16} />{fmtNum(user.bank)}</Link>}
            <LangSwitch />
          </div>
        </header>
        <main className="main">
          <ErrorBoundary resetKey={loc.pathname + loc.search}><Outlet /></ErrorBoundary>
          <div className="foot">{t('responsible')}</div>
        </main>
      </div>

      <aside className="rail">
        <Slip compact />
        <BattleMini />
      </aside>

      <nav className="tabbar" aria-label="Navigacija">
        <NavLink to="/" end className={({ isActive }) => `tab${isActive ? ' on' : ''}`}><House size={21} />{t('home')}</NavLink>
        <NavLink to="/mecevi" className={({ isActive }) => `tab${isActive ? ' on' : ''}`}><CalendarDays size={21} />{t('matches')}</NavLink>
        <Link to="/tiket" className="tab-ticket" aria-label={t('ticket')}><Flame size={20} />{t('ticket')}{slip.items.length > 0 && <span className="count">{slip.items.length}</span>}</Link>
        <NavLink to="/rang" className={({ isActive }) => `tab${isActive ? ' on' : ''}`}><Trophy size={21} />{t('ranking')}</NavLink>
        <NavLink to={user ? '/profil' : '/prijava'} className={({ isActive }) => `tab${isActive ? ' on' : ''}`}><User size={21} />{user ? t('profile') : t('login')}</NavLink>
      </nav>
    </div>
  )
}
