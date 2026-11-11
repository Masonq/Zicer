/* global __BUILD__ */
// After a deploy every open tab (also iPhone tabs restored from memory) picks up the new version by itself
export function installAutoUpdate() {
  if (typeof window === 'undefined' || window.__au) return
  window.__au = true
  let busy = false
  const check = async () => {
    if (busy || document.visibilityState !== 'visible') return
    busy = true
    try {
      const r = await fetch(`/version.json?t=${Date.now()}`, { cache: 'no-store' })
      if (r.ok) {
        const v = await r.json()
        if (v.build && v.build !== __BUILD__ && sessionStorage.getItem('au_to') !== v.build) {
          sessionStorage.setItem('au_to', v.build) // never loop if something is off
          location.reload()
        }
      }
    } catch { /* offline */ } finally { busy = false }
  }
  document.addEventListener('visibilitychange', check)
  window.addEventListener('pageshow', (e) => { if (e.persisted) check() })
  window.addEventListener('focus', check)
  setInterval(check, 120000)
  setTimeout(check, 4000)
}
