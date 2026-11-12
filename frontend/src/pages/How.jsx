import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserPlus, Wallet, Target, Layers, Trophy, Shield, Flame, ChevronDown } from 'lucide-react'
import { useT } from '../i18n'
import { useSeo } from '../seo'

const C = {
  sr: {
    title: 'Kako funkcioniše Winly',
    lead: 'Besplatna liga prognoza za navijače. Bez novca i bez uplata — igraš virtuelnim bankom za poene, rang i značke.',
    steps: [
      [UserPlus, 'Napravi nalog', 'Registracija traje 30 sekundi. Dobijaš početni bank od 10.000 poena, a prvih 100 prognozera još +2.000 i značku Osnivač.'],
      [Target, 'Daj prognozu', 'Izaberi meč i ishod (pobeda domaćina, nerešeno, gosti…) i koliko poena ulažeš. Što je kvota veća, veći je mogući dobitak.'],
      [Layers, 'Sastavi tiket', 'Spoji 2 do 12 mečeva na jedan tiket — kvote se množe. Tiket prolazi samo ako su pogođeni svi mečevi.'],
      [Wallet, 'Obračun je automatski', 'Posle kraja meča prognoza se obračunava sama: pogodak donosi ulog × kvota, promašaj uzima ulog. Rezultat vidiš u profilu.'],
      [Trophy, 'Penji se na rang listi', 'Rang se računa po profitu za nedelju i mesec. Navijači tvog kluba skupljaju poene u Bici navijača.'],
      [Flame, 'Bonusi i nivoi', 'Svaki dan dobijaš +100 za ulazak, 7. dan zaredom duplo. Iskustvo te vodi od Početnika do Legende, a za uspehe dobijaš značke.'],
    ],
    faqTitle: 'Česta pitanja',
    faq: [
      ['Da li je Winly besplatan?', 'Da, potpuno. Nema uplata, isplata ni pretplate.'],
      ['Da li mogu da izgubim pravi novac?', 'Ne. Bank je virtuelan i služi samo za takmičenje. Winly nije kladionica.'],
      ['Odakle su kvote?', 'Kvote su prosečne tržišne kvote za meč i služe kao mera šanse — što je ishod manje verovatan, veća je kvota.'],
      ['Kada se obračunava prognoza?', 'Automatski, kada se meč završi i rezultat bude potvrđen — obično nekoliko minuta posle kraja.'],
      ['Mogu li da promenim prognozu?', 'Prognozu ne možeš menjati posle potvrde, a novu možeš dati samo pre početka meča.'],
      ['Kako da kontaktiram podršku?', 'Piši na podrska@winly.rs — odgovaramo u toku dana.'],
    ],
    cta: 'Pridruži se besplatno',
  },
  ru: {
    title: 'Как работает Winly',
    lead: 'Бесплатная лига прогнозов для болельщиков. Без денег и пополнений — играешь виртуальным банком за очки, рейтинг и значки.',
    steps: [
      [UserPlus, 'Создай аккаунт', 'Регистрация занимает 30 секунд. Стартовый банк — 10 000 очков, а первым 100 прогнозистам ещё +2 000 и значок «Основатель».'],
      [Target, 'Сделай прогноз', 'Выбери матч и исход (победа хозяев, ничья, гости…) и сколько очков ставишь. Чем выше коэффициент, тем больше возможный выигрыш.'],
      [Layers, 'Собери тикет', 'Объедини от 2 до 12 матчей в один тикет — коэффициенты перемножаются. Тикет заходит, только если угаданы все матчи.'],
      [Wallet, 'Расчёт автоматический', 'После матча прогноз рассчитывается сам: угадал — получаешь ставку × коэффициент, не угадал — ставка сгорает. Итоги видны в профиле.'],
      [Trophy, 'Поднимайся в рейтинге', 'Рейтинг считается по прибыли за неделю и месяц. Болельщики твоего клуба набирают очки в «Битве фанатов».'],
      [Flame, 'Бонусы и уровни', 'Каждый день +100 за вход, 7-й день подряд — вдвойне. Опыт ведёт от Новичка до Легенды, за успехи дают значки.'],
    ],
    faqTitle: 'Частые вопросы',
    faq: [
      ['Winly бесплатный?', 'Да, полностью. Никаких пополнений, выплат и подписок.'],
      ['Можно ли потерять настоящие деньги?', 'Нет. Банк виртуальный и нужен только для соревнования. Winly — не букмекер.'],
      ['Откуда коэффициенты?', 'Это средние рыночные коэффициенты на матч, они показывают шанс исхода: чем он менее вероятен, тем выше коэффициент.'],
      ['Когда рассчитывается прогноз?', 'Автоматически, когда матч закончится и результат подтвердится — обычно через несколько минут.'],
      ['Можно изменить прогноз?', 'После подтверждения прогноз не меняется, а новый можно сделать только до начала матча.'],
      ['Как связаться с поддержкой?', 'Пиши на podrska@winly.rs — отвечаем в течение дня.'],
    ],
    cta: 'Присоединиться бесплатно',
  },
}

export default function How() {
  const t = useT()
  const c = t.lang === 'ru' ? C.ru : C.sr
  const tx = (s) => (t.lang === 'sr-cyr' ? t.serb(s) : s)
  const [open, setOpen] = useState(0)
  useSeo(`${tx(c.title)} — Winly`, tx(c.lead))
  useEffect(() => {
    // FAQ rich results for search engines
    const el = document.createElement('script')
    el.type = 'application/ld+json'
    el.text = JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: c.faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) })
    document.head.appendChild(el)
    return () => el.remove()
  }, [t.lang]) // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div className="how">
      <h1 className="h1">{tx(c.title)}</h1>
      <p className="sub" style={{ marginTop: 8 }}>{tx(c.lead)}</p>
      <div className="how-steps">
        {c.steps.map(([I, h, d], i) => (
          <div key={i} className="how-step card">
            <span className="how-n num">{i + 1}</span>
            <span className="how-ico"><I size={22} /></span>
            <div><b>{tx(h)}</b><p>{tx(d)}</p></div>
          </div>
        ))}
      </div>
      <div className="how-safe card"><Shield size={20} /><span>{tx(t.lang === 'ru' ? 'Winly не принимает ставки на деньги и не связан с букмекерами.' : 'Winly ne prima uplate i ne nudi klađenje za novac.')}</span></div>
      <h2 className="h2" style={{ margin: '26px 0 12px' }}>{tx(c.faqTitle)}</h2>
      <div className="card how-faq">
        {c.faq.map(([q, a], i) => (
          <div key={i} className={`faq-item${open === i ? ' on' : ''}`}>
            <button type="button" onClick={() => setOpen(open === i ? -1 : i)}><span>{tx(q)}</span><ChevronDown size={18} /></button>
            {open === i && <p>{tx(a)}</p>}
          </div>
        ))}
      </div>
      <Link to="/registracija" className="btn btn-gold btn-block" style={{ marginTop: 20 }}>{tx(c.cta)}</Link>
    </div>
  )
}
