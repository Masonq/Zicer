import { useEffect } from 'react'
import { api } from './api'

// page title + description for people and for search engines that run JS
export function useSeo(title, desc) {
  useEffect(() => {
    if (!title) return
    document.title = title
    let m = document.querySelector('meta[name="description"]')
    if (!m) { m = document.createElement('meta'); m.name = 'description'; document.head.appendChild(m) }
    if (desc) m.content = desc
  }, [title, desc])
}

// own analytics: one hit per page; sources from referrer / utm; invite code kept until registration
const sid = (() => {
  try { let s = localStorage.getItem('winly_sid'); if (!s) { s = Math.random().toString(36).slice(2) + Date.now().toString(36); localStorage.setItem('winly_sid', s) } return s } catch { return '' }
})()
export function trackPage(pathname, search) {
  try {
    const q = new URLSearchParams(search)
    if (q.get('ref')) localStorage.setItem('winly_ref', q.get('ref'))
    const first = !sessionStorage.getItem('winly_sess')
    if (first) {
      sessionStorage.setItem('winly_sess', '1')
      sessionStorage.setItem('winly_src', JSON.stringify({ ref: document.referrer || '', utm_source: q.get('utm_source') || '', utm_campaign: q.get('utm_campaign') || '' }))
    }
    const src = JSON.parse(sessionStorage.getItem('winly_src') || '{}')
    api('/t', { method: 'POST', body: { path: pathname, sid, first, ...src } }).catch(() => {})
  } catch { /* private mode */ }
}

// funnel events (registration form): stored like page views under /__ev/…, visible in admin → Traffic
export function trackEvent(name) {
  try {
    const src = JSON.parse(sessionStorage.getItem('winly_src') || '{}')
    api('/t', { method: 'POST', body: { path: `/__ev/${name}`, sid, first: false, ...src } }).catch(() => {})
  } catch { /* private mode */ }
}
