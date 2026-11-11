import { useEffect, useState } from 'react'
import { api } from '../api'
import { Link } from 'react-router-dom'
import { Play } from 'lucide-react'
import { useT } from '../i18n'
import { Crest , matchUrl } from './ui'
import HScroll from './HScroll'

// ---- availability check: leagues block some videos in some countries (e.g. NBA in Serbia).
// A hidden YouTube player tries each unchecked video once; the result is stored on the server for everyone.
const verdict = {}
let ytReady = null
function loadYT() {
  if (ytReady) return ytReady
  ytReady = new Promise((res) => {
    if (window.YT && window.YT.Player) return res(window.YT)
    const prev = window.onYouTubeIframeAPIReady
    window.onYouTubeIframeAPIReady = () => { prev && prev(); res(window.YT) }
    const s = document.createElement('script'); s.src = 'https://www.youtube.com/iframe_api'; s.async = true; document.head.appendChild(s)
  })
  return ytReady
}
function probe(videoId) {
  if (verdict[videoId] !== undefined) return Promise.resolve(verdict[videoId])
  return loadYT().then((YT) => new Promise((res) => {
    const host = document.createElement('div')
    host.style.cssText = 'position:fixed;left:-9999px;top:0;width:200px;height:120px;opacity:0;pointer-events:none'
    const inner = document.createElement('div'); host.appendChild(inner); document.body.appendChild(host)
    let done = false
    const finish = (ok) => {
      if (done) return; done = true
      verdict[videoId] = ok
      api(`/highlights/${videoId}/check`, { method: 'POST', body: { ok } }).catch(() => {})
      try { player.destroy() } catch {}
      host.remove(); res(ok)
    }
    const player = new YT.Player(inner, {
      videoId, host: 'https://www.youtube-nocookie.com', playerVars: { playsinline: 1, mute: 1 },
      events: {
        onReady: () => { try { player.mute(); player.playVideo() } catch {} },
        onStateChange: (e) => { if (e.data === 1 || e.data === 3) finish(true) }, // playing / buffering = allowed here
        onError: () => finish(false), // 100 removed, 101/150 blocked here or embedding disabled
      },
    })
    setTimeout(() => finish(true), 9000) // no answer: don't hide the video
  }))
}
// Keeps only videos that play in the visitor's country; unchecked ones are checked first
export function usePlayable(list) {
  const [, force] = useState(0)
  const key = list.map((v) => v.video_id).join(',')
  useEffect(() => {
    let alive = true
    list.filter((v) => !v.status && verdict[v.video_id] === undefined).slice(0, 6).forEach((v) => probe(v.video_id).then(() => alive && force((n) => n + 1)))
    return () => { alive = false }
  }, [key]) // eslint-disable-line react-hooks/exhaustive-deps
  return list.filter((v) => (v.status === 'ok' && verdict[v.video_id] !== false) || verdict[v.video_id] === true)
}

// Lightweight YouTube embed: a thumbnail until the user presses play (fast pages, no tracking before play)
export function VideoPlayer({ v, autoplay = false }) {
  const [on, setOn] = useState(autoplay)
  return (
    <div className="yt">
      {on ? (
        <iframe src={`https://www.youtube-nocookie.com/embed/${v.video_id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`} title={v.title}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowFullScreen />
      ) : (
        <button className="yt-poster" onClick={() => setOn(true)} aria-label="Play">
          <img src={`https://i.ytimg.com/vi/${v.video_id}/hqdefault.jpg`} alt="" loading="lazy" />
          <span className="yt-play"><Play size={26} fill="currentColor" /></span>
          <span className="yt-ch">{v.channel}</span>
        </button>
      )}
    </div>
  )
}

export function MatchHighlights({ list: all = [] }) {
  const t = useT()
  const list = usePlayable(all)
  const [cur0, setCur] = useState(0)
  const cur = Math.min(cur0, Math.max(0, list.length - 1))
  if (!list.length) return null
  return (
    <section className="section" id="highlights">
      <div className="section-head"><h2 className="h2">{t('highlights')}</h2><span className="small">{t('officialVideo')}</span></div>
      <VideoPlayer key={list[cur].video_id} v={list[cur]} />
      <div className="yt-title">{list[cur].title}</div>
      {list.length > 1 && (
        <div className="yt-more">
          {list.map((v, i) => (
            <button key={v.video_id} className={`yt-chip${i === cur ? ' on' : ''}`} onClick={() => setCur(i)}>
              <img src={`https://i.ytimg.com/vi/${v.video_id}/mqdefault.jpg`} alt="" loading="lazy" /><span className="ellip">{v.title}</span>
            </button>
          ))}
        </div>
      )}
    </section>
  )
}

export function HighlightsStrip({ list: all = [] }) {
  const t = useT()
  const list = usePlayable(all)
  if (!list.length) return null
  return (
    <section className="section">
      <div className="section-head"><h2 className="h2">{t('latestHighlights')}</h2></div>
      <HScroll className="hl-strip">
        {list.map((v) => {
          const m = v.match
          return (
            <Link key={v.video_id} to={`${matchUrl(m)}#highlights`} className="hl-card">
              <span className="hl-thumb"><img src={`https://i.ytimg.com/vi/${v.video_id}/mqdefault.jpg`} alt="" loading="lazy" /><span className="yt-play sm"><Play size={16} fill="currentColor" /></span></span>
              <span className="hl-teams"><Crest team={m.home} size={18} /><span className="ellip">{t.team(m.home)}</span>{m.score && <b className="num">{m.score[0]}</b>}</span>
              <span className="hl-teams"><Crest team={m.away} size={18} /><span className="ellip">{t.team(m.away)}</span>{m.score && <b className="num">{m.score[1]}</b>}</span>
            </Link>
          )
        })}
      </HScroll>
    </section>
  )
}
