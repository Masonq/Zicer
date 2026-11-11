import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

// A sideways row with arrow buttons on desktop (shown only when there is more to see on that side)
export default function HScroll({ className, children, ...rest }) {
  const ref = useRef(null)
  const [edge, setEdge] = useState({ l: false, r: false })
  const check = () => {
    const el = ref.current
    if (!el) return
    setEdge({ l: el.scrollLeft > 4, r: el.scrollLeft < el.scrollWidth - el.clientWidth - 4 })
  }
  useEffect(() => {
    check()
    const el = ref.current
    if (!el) return
    el.addEventListener('scroll', check, { passive: true })
    const ro = new ResizeObserver(check); ro.observe(el)
    return () => { el.removeEventListener('scroll', check); ro.disconnect() }
  })
  const go = (dir) => { const el = ref.current; el && el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: 'smooth' }) }
  return (
    <div className="hs-wrap">
      <div ref={ref} className={className} {...rest}>{children}</div>
      {edge.l && <button className="hs-btn l" onClick={() => go(-1)} aria-label="Назад"><ChevronLeft size={20} /></button>}
      {edge.r && <button className="hs-btn r" onClick={() => go(1)} aria-label="Вперёд"><ChevronRight size={20} /></button>}
    </div>
  )
}
