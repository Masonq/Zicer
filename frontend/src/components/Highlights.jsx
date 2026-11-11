import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Play } from 'lucide-react'
import { useT } from '../i18n'
import { Crest } from './ui'

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

export function MatchHighlights({ list = [] }) {
  const t = useT()
  const [cur, setCur] = useState(0)
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

export function HighlightsStrip({ list = [] }) {
  const t = useT()
  if (!list.length) return null
  return (
    <section className="section">
      <div className="section-head"><h2 className="h2">{t('latestHighlights')}</h2></div>
      <div className="hl-strip">
        {list.map((v) => {
          const m = v.match
          return (
            <Link key={v.video_id} to={`/mec/${m.id}#highlights`} className="hl-card">
              <span className="hl-thumb"><img src={`https://i.ytimg.com/vi/${v.video_id}/mqdefault.jpg`} alt="" loading="lazy" /><span className="yt-play sm"><Play size={16} fill="currentColor" /></span></span>
              <span className="hl-teams"><Crest team={m.home} size={18} /><span className="ellip">{t.team(m.home)}</span>{m.score && <b className="num">{m.score[0]}</b>}</span>
              <span className="hl-teams"><Crest team={m.away} size={18} /><span className="ellip">{t.team(m.away)}</span>{m.score && <b className="num">{m.score[1]}</b>}</span>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
