import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Gift, Megaphone, Newspaper } from 'lucide-react'
import { useT } from '../i18n'
import { FeaturedMatch } from '../pages/Match'

const KIND_ICON = { raffle: Gift, promo: Megaphone, news: Newspaper }
const AUTOPLAY = 6000

function Banner({ b }) {
  const t = useT()
  const ru = t.lang === 'ru'
  const pick = (o) => (ru ? o.ru || o.sr : t.serb(o.sr || o.ru))
  const I = KIND_ICON[b.kind] || Megaphone
  const external = /^https?:\/\//.test(b.link || '')
  const body = (
    <div className={`hero-banner k-${b.kind}`} style={b.image ? { backgroundImage: `linear-gradient(90deg, rgba(10,24,18,0.92) 0%, rgba(10,24,18,0.72) 55%, rgba(10,24,18,0.25) 100%), url(${b.image})` } : undefined}>
      <span className="hb-tag"><I size={15} />{t(`banner_${b.kind}`)}</span>
      <h3 className="hb-title">{pick(b.title)}</h3>
      {pick(b.text) && <p className="hb-text">{pick(b.text)}</p>}
      {pick(b.cta) && <span className="btn btn-gold hb-cta">{pick(b.cta)}</span>}
    </div>
  )
  if (!b.link) return body
  return external ? <a href={b.link} target="_blank" rel="noopener" className="hb-link">{body}</a> : <Link to={b.link} className="hb-link">{body}</Link>
}

// Matches of the day and promo banners, one after another: auto-play, swipe, pause on touch, progress dots
export default function HeroCarousel({ matches = [], banners = [], label }) {
  const slides = []
  matches.forEach((m, i) => {
    slides.push({ k: `m${m.id}`, el: <FeaturedMatch m={m} label={label} /> })
    if (i === 1) banners.forEach((b) => slides.push({ k: `b${b.id}`, el: <Banner b={b} /> }))
  })
  if (matches.length < 2) banners.forEach((b) => slides.push({ k: `b${b.id}`, el: <Banner b={b} /> }))
  const n = slides.length
  const [i, setI] = useState(0)
  const [paused, setPaused] = useState(false)
  const start = useRef(null)
  const idx = n ? i % n : 0
  useEffect(() => {
    if (n < 2 || paused) return
    const id = setTimeout(() => setI((v) => (v + 1) % n), AUTOPLAY)
    return () => clearTimeout(id)
  }, [idx, n, paused])
  if (!n) return null
  const go = (d) => setI((v) => (v + d + n) % n)
  const onDown = (e) => { start.current = { x: e.clientX, y: e.clientY }; setPaused(true) }
  const onUp = (e) => {
    const s = start.current; start.current = null; setPaused(false)
    if (!s) return
    const dx = e.clientX - s.x, dy = e.clientY - s.y
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) go(dx < 0 ? 1 : -1)
  }
  return (
    <div className="hero-carousel" onPointerDown={onDown} onPointerUp={onUp} onPointerCancel={() => { start.current = null; setPaused(false) }}
      onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="hc-stack">
        {slides.map((s, k) => (
          <div key={s.k} className={`hc-slide${k === idx ? ' on' : ''}`} aria-hidden={k !== idx}>{s.el}</div>
        ))}
      </div>
      {n > 1 && (
        <div className="hc-dots" role="tablist">
          {slides.map((s, k) => (
            <button key={s.k} className={`hc-dot${k === idx ? ' on' : ''}`} onClick={() => setI(k)} aria-label={`${k + 1}`}>
              {k === idx && <i style={{ animationDuration: `${AUTOPLAY}ms`, animationPlayState: paused ? 'paused' : 'running' }} key={`${idx}-${paused}`} />}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
