import { createContext, useContext, useEffect, useMemo, useState, useCallback } from 'react'
import { api, getToken, setToken } from './api'

const AuthCtx = createContext(null)
const USER_KEY = 'zicer_user'
const cachedUser = () => { try { return getToken() ? JSON.parse(localStorage.getItem(USER_KEY) || 'null') : null } catch { return null } }
export function AuthProvider({ children }) {
  const [user, setUserState] = useState(cachedUser)
  const [ready, setReady] = useState(() => !!cachedUser() || !getToken())
  const setUser = useCallback((u) => {
    setUserState(u)
    try { u ? localStorage.setItem(USER_KEY, JSON.stringify(u)) : localStorage.removeItem(USER_KEY) } catch {}
  }, [])
  const refresh = useCallback(async () => {
    if (!getToken()) { setUser(null); setReady(true); return null }
    try { const u = await api('/me'); setUser(u); return u } catch (e) { if (e.status === 401) setUser(null); return null } finally { setReady(true) }
  }, [setUser])
  useEffect(() => { refresh() }, [refresh])
  const login = (token, u) => { setToken(token); setUser(u) }
  const logout = () => { setToken(''); setUser(null) }
  return <AuthCtx.Provider value={{ user, setUser, ready, login, logout, refresh }}>{children}</AuthCtx.Provider>
}
export const useAuth = () => useContext(AuthCtx)

const SLIP_KEY = 'zicer_slip'
const SlipCtx = createContext(null)
export function SlipProvider({ children }) {
  const [items, setItems] = useState(() => { try { return JSON.parse(localStorage.getItem(SLIP_KEY) || '[]') } catch { return [] } })
  useEffect(() => { try { localStorage.setItem(SLIP_KEY, JSON.stringify(items)) } catch {} }, [items])
  const value = useMemo(() => ({
    items,
    has: (mid, pick) => items.some((i) => i.match.id === mid && (pick === undefined || i.pick === pick)),
    toggle: (match, pick, odds) => setItems((cur) => {
      const same = cur.find((i) => i.match.id === match.id)
      if (same && same.pick === pick) return cur.filter((i) => i.match.id !== match.id)
      const rest = cur.filter((i) => i.match.id !== match.id)
      return [...rest, { match, pick, odds }].slice(-12)
    }),
    remove: (mid) => setItems((cur) => cur.filter((i) => i.match.id !== mid)),
    clear: () => setItems([]),
    total: items.reduce((a, i) => a * i.odds, 1),
  }), [items])
  return <SlipCtx.Provider value={value}>{children}</SlipCtx.Provider>
}
export const useSlip = () => useContext(SlipCtx)

const POLL_CACHE = new Map()

export function usePoll(fn, deps, every = 0, keep = false) {
  // responses are remembered per page + parameters, so going back to a page shows it instantly (then refreshes)
  const key = fn.toString() + '|' + JSON.stringify(deps)
  const [state, setState] = useState(() => {
    const c = POLL_CACHE.get(key)
    return { data: c ?? null, error: null, loading: true }
  })
  useEffect(() => {
    let alive = true
    let timer
    const cached = POLL_CACHE.get(key)
    if (cached !== undefined) setState({ data: cached, error: null, loading: true })
    else if (!keep) setState({ data: null, error: null, loading: true })
    else setState((s) => ({ ...s, loading: true }))
    const run = async (first) => {
      try {
        const d = await fn()
        POLL_CACHE.set(key, d)
        if (POLL_CACHE.size > 120) POLL_CACHE.delete(POLL_CACHE.keys().next().value)
        if (alive) setState({ data: d, error: null, loading: false })
      } catch (e) { if (alive) setState((s) => ({ data: first && cached === undefined && !keep ? null : s.data, error: e, loading: false })) }
      if (alive && every) timer = setTimeout(() => run(false), every)
    }
    run(true)
    return () => { alive = false; clearTimeout(timer) }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
  return state
}
