// Market keys produced by the backend (see backend/app/sources/maxbet.py)
const TITLES = {
  sr: {
    main: 'Konačan ishod', mainB: 'Konačan ishod (bez produžetaka)', dc: 'Dupla šansa', dnb: 'Ulog vraćen ako je nerešeno',
    goals: 'Ukupno golova', btts: 'Oba tima daju gol', eh: 'Hendikep', cs: 'Tačan rezultat', ah: 'Hendikep (sa produžecima)',
    tot: 'Ukupno poena (sa produžecima)', more: 'Više', over: 'Više od', under: 'Manje od', draw: 'Nerešeno',
    gg: 'Oba daju gol', ng: 'Bar jedan ne daje gol', goalsShort: 'golova', other: 'Ostali rezultati',
  },
  ru: {
    main: 'Исход матча', mainB: 'Исход (без овертайма)', dc: 'Двойной шанс', dnb: 'Победа с возвратом при ничьей',
    goals: 'Тотал голов', btts: 'Обе забьют', eh: 'Фора (3 исхода)', cs: 'Точный счёт', ah: 'Фора (с овертаймом)',
    tot: 'Тотал очков (с овертаймом)', more: 'Ещё', over: 'Больше', under: 'Меньше', draw: 'Ничья',
    gg: 'Обе забьют — да', ng: 'Обе забьют — нет', goalsShort: 'голов', other: 'Другие счета',
  },
}

const fmtLine = (v) => {
  const n = Number(v)
  return (n > 0 ? '+' : '') + String(n).replace('.', ',')
}

export function tt(t, key) {
  const lang = t.lang === 'ru' ? 'ru' : 'sr'
  const v = TITLES[lang][key]
  return t.lang === 'sr-cyr' ? t.serb(v) : v
}

// Short selection label, e.g. "1X", "3+", "2:1", "Partizan −7,5", "Više 168,5"
export function selLabel(key, m, t) {
  const H = t.team(m.home), A = t.team(m.away)
  if (key === '1') return H
  if (key === '2') return A
  if (key === 'X') return tt(t, 'draw')
  if (['1X', '12', 'X2'].includes(key)) return key
  if (key === 'DNB1') return H
  if (key === 'DNB2') return A
  if (key === 'GG') return 'GG'
  if (key === 'NG') return 'NG'
  if (/^G\d/.test(key)) return key.slice(1)
  if (key.startsWith('CS:')) { const [, h, a] = key.split(':'); return `${h}:${a}` }
  if (key.startsWith('EH')) {
    const [k, v] = key.split(':')
    const homeLine = -Number(v)
    if (k === 'EHX') return `X (${fmtLine(homeLine)})`
    return k === 'EH1' ? `${H} (${fmtLine(homeLine)})` : `${A} (${fmtLine(-homeLine)})`
  }
  if (key.startsWith('AH')) {
    const [k, v] = key.split(':')
    return k === 'AH1' ? `${H} ${fmtLine(-Number(v))}` : `${A} ${fmtLine(Number(v))}`
  }
  if (key.startsWith('O:')) return `${tt(t, 'over')} ${key.slice(2).replace('.', ',')}`
  if (key.startsWith('U:')) return `${tt(t, 'under')} ${key.slice(2).replace('.', ',')}`
  return key
}

export function marketOf(key, sport) {
  if (['1', 'X', '2'].includes(key)) return sport === 'basketball' ? 'mainB' : 'main'
  if (['1X', '12', 'X2'].includes(key)) return 'dc'
  if (key.startsWith('DNB')) return 'dnb'
  if (key === 'GG' || key === 'NG') return 'btts'
  if (/^G\d/.test(key)) return 'goals'
  if (key.startsWith('CS:')) return 'cs'
  if (key.startsWith('EH')) return 'eh'
  if (key.startsWith('AH')) return 'ah'
  if (key.startsWith('O:') || key.startsWith('U:')) return 'tot'
  return 'other'
}

// Full label used in tickets, history, predictions: "Ukupno golova: 3+"
export function pickText(key, m, t) {
  const mk = marketOf(key, m.sport)
  const s = selLabel(key, m, t)
  if (mk === 'main' || mk === 'mainB') return s
  if (mk === 'dc') return `${tt(t, 'dc')}: ${s}`
  if (mk === 'eh') return `${tt(t, 'eh')}: ${s}`
  if (mk === 'dnb') return `${s} (${t.lang === 'ru' ? 'возврат при ничьей' : t.serb('vraćen ulog')})`
  if (mk === 'btts') return key === 'GG' ? tt(t, 'gg') : tt(t, 'ng')
  if (mk === 'goals') return `${tt(t, 'goals')}: ${s}`
  if (mk === 'cs') return `${tt(t, 'cs')} ${s}`
  if (mk === 'tot' || mk === 'ah') return s
  return s
}

const GOAL_ORDER = ['G0-1', 'G0-2', 'G2-3', 'G2+', 'G3+', 'G4+', 'G5+']

// Returns [{id, title, cols, items:[{key, label, odds}]}]
export function buildMarkets(m, t) {
  const best = m.best || {}
  const keys = Object.keys(best)
  const item = (k) => ({ key: k, label: selLabel(k, m, t), odds: best[k].odds })
  const has = (k) => best[k] && best[k].odds
  const out = []
  if (m.sport === 'football') {
    const main = ['1', 'X', '2'].filter(has)
    if (main.length) out.push({ id: 'main', title: tt(t, 'main'), cols: 3, items: main.map(item) })
    const dc = ['1X', '12', 'X2'].filter(has)
    if (dc.length) out.push({ id: 'dc', title: tt(t, 'dc'), cols: 3, items: dc.map(item) })
    const goals = GOAL_ORDER.filter(has)
    if (goals.length) out.push({ id: 'goals', title: tt(t, 'goals'), cols: 4, items: goals.map(item) })
    const btts = ['GG', 'NG'].filter(has)
    if (btts.length) out.push({ id: 'btts', title: tt(t, 'btts'), cols: 2, items: btts.map((k) => ({ ...item(k), label: k === 'GG' ? (t.lang === 'ru' ? 'Да' : t.serb('Da')) : (t.lang === 'ru' ? 'Нет' : t.serb('Ne')) })) })
    const dnb = ['DNB1', 'DNB2'].filter(has)
    if (dnb.length) out.push({ id: 'dnb', title: tt(t, 'dnb'), cols: 2, items: dnb.map(item) })
    const eh = keys.filter((k) => k.startsWith('EH')).sort((a, b) => ({ EH1: 0, EHX: 1, EH2: 2 })[a.split(':')[0]] - ({ EH1: 0, EHX: 1, EH2: 2 })[b.split(':')[0]])
    if (eh.length) out.push({ id: 'eh', title: tt(t, 'eh'), cols: 3, items: eh.map(item) })
    const cs = keys.filter((k) => k.startsWith('CS:')).map((k) => { const [, h, a] = k.split(':'); return { k, h: +h, a: +a } })
    if (cs.length) {
      const col = (f) => cs.filter(f).sort((x, y) => x.h + x.a - (y.h + y.a) || y.h - x.h).map((x) => item(x.k))
      out.push({ id: 'cs', title: tt(t, 'cs'), cols: 3, columns: [col((x) => x.h > x.a), col((x) => x.h === x.a), col((x) => x.h < x.a)], items: cs.map((x) => item(x.k)) })
    }
  } else {
    const main = ['1', 'X', '2'].filter(has)
    if (main.length) out.push({ id: 'main', title: tt(t, 'mainB'), cols: main.length, items: main.map(item) })
    const lines = (prefixA, prefixB) => {
      const vals = [...new Set(keys.filter((k) => k.startsWith(prefixA) || k.startsWith(prefixB)).map((k) => k.split(':')[1]))].sort((a, b) => Number(a) - Number(b))
      return vals.flatMap((v) => [`${prefixA}${v}`, `${prefixB}${v}`].filter(has).map(item))
    }
    const ah = lines('AH1:', 'AH2:')
    if (ah.length) out.push({ id: 'ah', title: tt(t, 'ah'), cols: 2, items: ah })
    const tot = lines('U:', 'O:')
    if (tot.length) out.push({ id: 'tot', title: tt(t, 'tot'), cols: 2, items: tot })
  }
  return out
}
