import React, { useState, useEffect, useMemo } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import '@fontsource/oswald/400.css'
import '@fontsource/oswald/500.css'
import '@fontsource/oswald/600.css'
import '@fontsource/oswald/700.css'
import '@fontsource/manrope/400.css'
import '@fontsource/manrope/600.css'
import '@fontsource/manrope/700.css'
import '@fontsource/manrope/800.css'
import './styles.css'
import { LangCtx } from './i18n'
import { AuthProvider, SlipProvider, useAuth } from './store'
import { api } from './api'
import Layout from './components/Layout'
import Home from './pages/Home'
import Matches from './pages/Matches'
import MatchPage from './pages/Match'
import TicketPage from './pages/Ticket'
import TicketView from './pages/TicketView'
import Ranking from './pages/Ranking'
import Derby from './pages/Derby'
import Bookmakers from './pages/Bookmakers'
import Profile from './pages/Profile'
import Me from './pages/Me'
import EditProfile from './pages/EditProfile'
import { Login, Register } from './pages/Auth'
import Onboarding from './pages/Onboarding'
import TeamPage from './pages/Team'
import Admin from './admin/Admin'
import { installHScroll } from './hscroll'
installHScroll()

function LangRoot({ children }) {
  const { user, setUser } = useAuth()
  const [lang, setLangState] = useState(() => { try { return localStorage.getItem('zicer_lang') || 'sr' } catch { return 'sr' } })
  useEffect(() => { if (user?.lang && user.lang !== lang) setLangState(user.lang) // eslint-disable-next-line
  }, [user?.id])
  useEffect(() => { document.documentElement.lang = lang === 'ru' ? 'ru' : 'sr' }, [lang])
  const setLang = (l) => {
    setLangState(l)
    try { localStorage.setItem('zicer_lang', l) } catch {}
    if (user) api('/me', { method: 'PATCH', body: { lang: l } }).then(setUser).catch(() => {})
  }
  const value = useMemo(() => ({ lang, setLang }), [lang, user]) // eslint-disable-line
  return <LangCtx.Provider value={value}>{children}</LangCtx.Provider>
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <LangRoot>
          <SlipProvider>
            <Routes>
              <Route path="/admin/*" element={<Admin />} />
              <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/mecevi" element={<Matches />} />
                <Route path="/mec/:id" element={<MatchPage />} />
                <Route path="/tiket" element={<TicketPage />} />
                <Route path="/tiket/:id" element={<TicketView />} />
                <Route path="/rang" element={<Ranking />} />
                <Route path="/derbi" element={<Derby />} />
                <Route path="/trendovi" element={<Navigate to="/" replace />} />
                <Route path="/kladionice" element={<Bookmakers />} />
                <Route path="/klub/:id" element={<TeamPage />} />
                <Route path="/u/:username" element={<Profile />} />
                <Route path="/profil" element={<Me />} />
                <Route path="/profil/uredi" element={<EditProfile />} />
                <Route path="/prijava" element={<Login />} />
                <Route path="/registracija" element={<Register />} />
                <Route path="/izbor-kluba" element={<Onboarding />} />
                <Route path="*" element={<Home />} />
              </Route>
            </Routes>
          </SlipProvider>
        </LangRoot>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
)
