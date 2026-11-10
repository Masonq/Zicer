import { IconShirtFilled } from '@tabler/icons-react'

// Preview of two scoreboard layouts for tennis (not linked in the menu)
function Ball() { return <i className="pv-ball" aria-hidden="true" /> }

function VariantA() {
  return (
    <div className="tennis-tracker trk pv">
      <div className="tt-bar pv-bar">
        <span className="tt-player l"><IconShirtFilled size={18} className="c0i" /><span className="ellip">Gauff C.</span></span>
        <span className="pv-center">
          <span className="pv-pt l"><Ball /><b>40</b></span>
          <span className="tt-score num"><i className="c0b" />1<span className="colon">:</span>1<i className="c1b" /></span>
          <span className="pv-pt r"><b>30</b></span>
        </span>
        <span className="tt-player r"><span className="ellip">Noskova L.</span><IconShirtFilled size={18} className="c1i" /></span>
      </div>
      <div className="tt-sets num tn-sets"><span>6-3</span><span>3-6</span><span className="cur">4-2</span></div>
    </div>
  )
}

function VariantB() {
  return (
    <div className="tennis-tracker trk pv">
      <div className="tt-bar">
        <span className="tt-player l"><IconShirtFilled size={18} className="c0i" /><span className="ellip">Gauff C.</span></span>
        <span className="tt-score num"><i className="c0b" />1<span className="colon">:</span>1<i className="c1b" /></span>
        <span className="tt-player r"><span className="ellip">Noskova L.</span><IconShirtFilled size={18} className="c1i" /></span>
      </div>
      <div className="tt-sets num tn-sets"><span>6-3</span><span>3-6</span><span className="cur">4-2</span></div>
      <div className="pv-game">
        <span className="pv-g l"><Ball /><b className="num">40</b></span>
        <div className="pv-gbar"><i className="c0b" style={{ width: '60%' }} /><i className="c1b" style={{ width: '40%' }} /></div>
        <span className="pv-glab">Gem</span>
        <span className="pv-g r"><b className="num">30</b></span>
      </div>
    </div>
  )
}

export default function TabloPreview() {
  return (
    <div>
      <h1 className="h1">Tablo za tenis: dva varijanta</h1>
      <section className="section">
        <div className="section-head"><h2 className="h2">A. Gem pored imena</h2></div>
        <div className="center-card hero-center"><VariantA /></div>
        <p className="sub" style={{ marginTop: 10 }}>U sredini krupno rezultat u setovima 1:1. Poeni u gemu (40, 30) su zlatne oznake pored rezultata, žuta loptica pokazuje ko servira. Ispod su gemovi po setovima, tekući set je beo.</p>
      </section>
      <section className="section">
        <div className="section-head"><h2 className="h2">B. Gem u posebnoj traci</h2></div>
        <div className="center-card hero-center"><VariantB /></div>
        <p className="sub" style={{ marginTop: 10 }}>U sredini krupno 1:1, ispod gemovi po setovima, a ispod toga traka „Gem“: levo i desno poeni, traka u bojama igrača pokazuje ko vodi u gemu.</p>
      </section>
    </div>
  )
}
