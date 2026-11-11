import { useEffect, useState } from 'react'
// Favourite matches, kept on this device
const KEY = 'winly_fav'
const read = () => { try { return JSON.parse(localStorage.getItem(KEY) || '[]') } catch { return [] } }
const subs = new Set()
export const favList = () => read()
export function toggleFav(id) {
  const cur = read()
  const next = cur.includes(id) ? cur.filter((x) => x !== id) : [id, ...cur].slice(0, 200)
  try { localStorage.setItem(KEY, JSON.stringify(next)) } catch {}
  subs.forEach((f) => f(next))
  return next.includes(id)
}
export function useFav() {
  const [list, setList] = useState(read)
  useEffect(() => { subs.add(setList); return () => subs.delete(setList) }, [])
  return list
}
// small global "undo" toast for swipe actions
const toastSubs = new Set()
export const showUndo = (text, undo) => toastSubs.forEach((f) => f({ text, undo, id: Date.now() }))
export function useUndoToast() {
  const [t, setT] = useState(null)
  useEffect(() => { toastSubs.add(setT); return () => toastSubs.delete(setT) }, [])
  useEffect(() => { if (!t) return; const id = setTimeout(() => setT(null), 4000); return () => clearTimeout(id) }, [t])
  return [t, () => setT(null)]
}
