// Desktop horizontal scrolling for every swipe row (chips, sport switcher, highlights, wide tables):
// mouse wheel scrolls sideways, and rows can be dragged with the mouse. Touch screens keep their native swipe.
const SEL = '.chips, .sports, .hl-strip, .scroll-x, .hscroll, .yt-more'
const canX = (el) => el && el.scrollWidth > el.clientWidth + 2

export function installHScroll() {
  if (typeof window === 'undefined' || window.__hscroll) return
  window.__hscroll = true
  window.addEventListener('wheel', (e) => {
    if (e.ctrlKey || Math.abs(e.deltaX) > Math.abs(e.deltaY)) return // pinch or a real sideways gesture
    const el = e.target.closest && e.target.closest(SEL)
    if (!canX(el)) return
    const max = el.scrollWidth - el.clientWidth
    const atEdge = (e.deltaY < 0 && el.scrollLeft <= 0) || (e.deltaY > 0 && el.scrollLeft >= max - 1)
    if (atEdge) return // let the page scroll on
    e.preventDefault()
    el.scrollBy({ left: e.deltaY * 1.2, behavior: 'auto' })
  }, { passive: false })

  let drag = null
  window.addEventListener('pointerdown', (e) => {
    if (e.pointerType !== 'mouse' || e.button !== 0) return
    const el = e.target.closest && e.target.closest(SEL)
    if (!canX(el)) return
    drag = { el, x: e.clientX, left: el.scrollLeft, moved: false }
  })
  window.addEventListener('pointermove', (e) => {
    if (!drag) return
    const dx = e.clientX - drag.x
    if (!drag.moved && Math.abs(dx) < 6) return
    drag.moved = true
    drag.el.classList.add('dragging')
    drag.el.scrollLeft = drag.left - dx
  })
  const end = () => {
    if (!drag) return
    const d = drag
    drag = null
    d.el.classList.remove('dragging')
    if (d.moved) {
      // swallow the click that ends a drag, so a card isn't opened by accident
      const stop = (ev) => { ev.stopPropagation(); ev.preventDefault() }
      window.addEventListener('click', stop, { capture: true, once: true })
      setTimeout(() => window.removeEventListener('click', stop, { capture: true }), 50)
    }
  }
  window.addEventListener('pointerup', end)
  window.addEventListener('pointercancel', end)
}
