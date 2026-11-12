import { useT } from '../i18n'
import { useSeo } from '../seo'

const PRIVACY = {
  sr: ['Politika privatnosti', [
    ['Ko smo', 'Winly (winly.rs) je besplatna liga sportskih prognoza bez novca. Kontakt: podrska@winly.rs.'],
    ['Koje podatke čuvamo', 'Email, korisničko ime i ime koje izabereš, lozinku (šifrovanu), omiljene klubove, tvoje prognoze, tikete i komentare. Ako se prijaviš preko Google ili Facebook naloga, dobijamo samo ime, email i ID naloga — nikad lozinku.'],
    ['Zašto', 'Da bi nalog radio, da bi se računali rang i dostignuća i da bismo ti slali kodove za potvrdu i promenu lozinke.'],
    ['Kome ih dajemo', 'Nikome ih ne prodajemo. Email pisma šalje servis Brevo, a sajt radi na našem serveru u EU.'],
    ['Kolačići', 'Koristimo samo lokalno skladište pregledača za prijavu i podešavanja (jezik). Bez reklamnih kolačića trećih strana.'],
    ['Tvoja prava', 'Možeš da zatražiš kopiju ili brisanje svojih podataka — vidi stranicu „Brisanje podataka“ ili piši na podrska@winly.rs.'],
  ]],
  ru: ['Политика конфиденциальности', [
    ['Кто мы', 'Winly (winly.rs) — бесплатная лига спортивных прогнозов без денег. Контакт: podrska@winly.rs.'],
    ['Какие данные храним', 'Email, логин и выбранное имя, пароль (в зашифрованном виде), любимые клубы, прогнозы, тикеты и комментарии. При входе через Google или Facebook получаем только имя, email и ID аккаунта — никогда пароль.'],
    ['Зачем', 'Чтобы работал аккаунт, считались рейтинг и достижения и чтобы присылать коды подтверждения и смены пароля.'],
    ['Кому передаём', 'Никому не продаём. Письма отправляет сервис Brevo, сайт работает на нашем сервере в ЕС.'],
    ['Cookies', 'Используем только локальное хранилище браузера для входа и настроек (язык). Без рекламных cookies третьих сторон.'],
    ['Твои права', 'Можно запросить копию или удаление данных — см. страницу «Удаление данных» или пиши на podrska@winly.rs.'],
  ]],
}
const DELETE = {
  sr: ['Brisanje podataka', [
    ['Kako da obrišeš nalog', 'Pošalji email na podrska@winly.rs sa adrese naloga (ili navedi korisničko ime) uz naslov „Brisanje naloga“. Nalog i svi podaci (prognoze, tiketi, komentari) brišu se u roku od 7 dana i dobićeš potvrdu.'],
    ['Prijava preko Facebook-a', 'Možeš i da ukloniš Winly u Facebook-u: Podešavanja → Aplikacije i sajtovi → Winly → Ukloni. Zatim nam piši da obrišemo i nalog na sajtu.'],
  ]],
  ru: ['Удаление данных', [
    ['Как удалить аккаунт', 'Напиши на podrska@winly.rs с почты аккаунта (или укажи логин) с темой «Удаление аккаунта». Аккаунт и все данные (прогнозы, тикеты, комментарии) удаляются в течение 7 дней, придёт подтверждение.'],
    ['Вход через Facebook', 'Можно также убрать Winly в Facebook: Настройки → Приложения и сайты → Winly → Удалить. Потом напиши нам, чтобы удалить и аккаунт на сайте.'],
  ]],
}

function Doc({ src }) {
  const t = useT()
  const [title, items] = t.lang === 'ru' ? src.ru : src.sr
  const tx = (s) => (t.lang === 'sr-cyr' ? t.serb(s) : s)
  useSeo(`${tx(title)} — Winly`, tx(items[0][1]))
  return (
    <div className="how">
      <h1 className="h1">{tx(title)}</h1>
      <div className="card pad stack" style={{ marginTop: 16 }}>
        {items.map(([h, p]) => <div key={h}><b style={{ display: 'block', marginBottom: 4 }}>{tx(h)}</b><p className="small" style={{ margin: 0, lineHeight: 1.6 }}>{tx(p)}</p></div>)}
      </div>
      <p className="small" style={{ marginTop: 12 }}>12.11.2026</p>
    </div>
  )
}
export const Privacy = () => <Doc src={PRIVACY} />
export const DataDeletion = () => <Doc src={DELETE} />
