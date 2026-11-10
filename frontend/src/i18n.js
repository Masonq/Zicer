import { createContext, useContext } from 'react'

const sr = {
  home: 'Početna', matches: 'Mečevi', ticket: 'Tiket', ranking: 'Rang', profile: 'Profil', derby: 'Derbi',
  trends: 'Trendovi', bookmakers: 'Kladionice', admin: 'Admin',
  login: 'Prijava', register: 'Registracija', logout: 'Odjava', username: 'Korisničko ime', email: 'Email',
  password: 'Lozinka', loginOrEmail: 'Korisničko ime ili email', noAccount: 'Nemaš nalog?', haveAccount: 'Već imaš nalog?',
  createAccount: 'Napravi nalog', signIn: 'Prijavi se',
  live: 'Uživo', today: 'Danas', tomorrow: 'Sutra', yesterday: 'Juče', all: 'Sve', football: 'Fudbal', basketball: 'Košarka',
  serbianOnly: 'Samo srpski klubovi', noMatches: 'Nema mečeva za ovaj izbor.', tryOtherDay: 'Pogledaj drugi dan ili drugi sport.',
  matchOfDay: 'Meč dana', yourClub: 'Tvoj klub', upcoming: 'Predstojeći mečevi', seeAll: 'Sve', fanBattle: 'Bitka navijača',
  topTipsters: 'Najbolji prognozeri', passedTickets: 'Prošli tiketi', predictions: 'prognoza', predictionsCap: 'Prognoze',
  draw: 'Nerešeno', odds: 'Kvota', stake: 'Ulog', comment: 'Obrazloženje (nije obavezno)', commentPh: 'Zašto baš ovaj ishod?',
  placePrediction: 'Postavi prognozu', yourPrediction: 'Tvoja prognoza', addToTicket: 'Dodaj na tiket', onTicket: 'Na tiketu',
  community: 'Šta misli zajednica', analysis: 'Zicer analiza', form: 'Forma', h2h: 'Međusobni dueli', bestOdds: 'Najbolja kvota',
  noPredictions: 'Još nema prognoza. Budi prvi.', translate: 'Prevedi', original: 'Original',
  bank: 'Banka', profit: 'Profit', roi: 'ROI', winrate: 'Pogođeno', count: 'Prognoza', fans: 'navijača', avgPerFan: 'po navijaču',
  week: 'Nedelja', month: 'Mesec', allTime: 'Ukupno', tipsters: 'Prognozeri', clubs: 'Klubovi', tickets: 'Tiketi',
  ticketEmpty: 'Tiket je prazan', ticketEmptyHint: 'Klikni na kvotu kod bilo kog meča da je dodaš na tiket.',
  totalOdds: 'Ukupna kvota', potentialWin: 'Mogući dobitak', win: 'Dobitak', placeTicket: 'Uplati tiket', clear: 'Obriši',
  minTwo: 'Za tiket su potrebna bar 2 para.', shareTicket: 'Podeli tiket', copyLink: 'Kopiraj link', linkCopied: 'Link kopiran',
  downloadImage: 'Preuzmi sliku', status_open: 'U igri', status_won: 'Prošao', status_lost: 'Pao', status_void: 'Vraćen',
  pred_open: 'U igri', pred_won: 'Pogođeno', pred_lost: 'Promašeno', pred_void: 'Vraćeno',
  chooseClub: 'Izaberi svoj klub', chooseClubHint: 'Početna strana će pratiti mečeve tvog kluba, a tvoji poeni idu u bitku navijača.',
  footballClub: 'Fudbalski klub', basketballClub: 'Košarkaški klub', none: 'Bez kluba', save: 'Sačuvaj', continue: 'Nastavi', skip: 'Preskoči',
  language: 'Jezik', telegram: 'Obaveštenja u Telegramu', telegramHint: 'Javićemo ti sat pre meča tvog kluba i kad tiket prođe.',
  connect: 'Poveži', connected: 'Povezano', settings: 'Podešavanja', joined: 'Član od',
  derbyTitle: 'Večiti derbi', derbyNext: 'Sledeći derbi', exactScore: 'Pogodi tačan rezultat', exactHint: 'Tačan rezultat donosi 3 poena, pogođen ishod 1 poen.',
  yourScore: 'Tvoj rezultat', send: 'Pošalji', topScores: 'Najčešći rezultati', record: 'Skor poslednjih derbija', derbyBoard: 'Najbolji na prošlom derbiju',
  noDerby: 'Sledeći derbi još nije na rasporedu.', days: 'd', hours: 'h', minutes: 'min', points: 'poena',
  bonus: 'Bonus', visit: 'Poseti sajt', bmNote: '18+. Igre na sreću mogu izazvati zavisnost. Igraj odgovorno.',
  noTrends: 'Trendovi se pojavljuju kad za meč stignu kvote i statistika.', trendsHint: 'Automatski izdvojeni nizovi i statistika za mečeve u naredna dva dana.',
  error: 'Nešto nije u redu. Pokušaj ponovo.', loading: 'Učitavanje…', needLogin: 'Prijavi se da bi postavio prognozu.',
  bankLow: 'Nemaš dovoljno u banci.', closed: 'Prognoze za ovaj meč su zatvorene.', exists: 'Već imaš prognozu za ovaj meč.',
  stakeRange: 'Ulog mora biti između 10 i 1000.', virtual: 'Banka je virtuelna — igraš za poene i rang, ne za novac.',
  heroTitle: 'Liga prognoza za navijače', heroText: 'Prognoziraj mečeve, sastavi tiket i pokaži da tvoj klub ima najpametnije navijače.',
  join: 'Pridruži se besplatno', users: 'prognozera', today24: 'prognoza za 24h', more: 'Još',
  finished: 'Kraj', ht: 'Poluvreme', vs: 'protiv', usernameRule: '3–24 znaka: slova, brojevi, tačka, donja crta',
  err_username_taken: 'Korisničko ime je zauzeto.', err_email_taken: 'Email je već registrovan.', err_bad_login: 'Pogrešno ime ili lozinka.',
  err_username_invalid: 'Korisničko ime: 3–24 znaka, slova, brojevi, tačka ili donja crta.', err_email_invalid: 'Email nije ispravan.',
  responsible: '18+. Zicer ne prima uplate i ne organizuje igre na sreću.', myTickets: 'Moji tiketi', history: 'Istorija prognoza',
  noHistory: 'Još nema prognoza.', copy: 'Kopiraj', pick1: 'Domaćin', pickX: 'Nerešeno', pick2: 'Gost', goToMatch: 'Otvori meč',
  ticketPlaced: 'Tiket je uplaćen', removeFromTicket: 'Skloni sa tiketa', markets: 'Tržišta', editProfile: 'Uredi profil', displayName: 'Ime', handle: 'Korisničko ime', bio: 'O meni', bioPh: 'Npr. Delije od rođenja, pratim ABA ligu', changePhoto: 'Promeni sliku', removePhoto: 'Ukloni sliku', saved: 'Sačuvano', changePassword: 'Promena lozinke', oldPassword: 'Trenutna lozinka', newPassword: 'Nova lozinka', err_bad_password: 'Trenutna lozinka nije tačna.', err_file_bad: 'Slika nije podržana. Pošalji JPG ili PNG.', err_file_big: 'Slika je veća od 8 MB.', handleHint: 'Po njemu te drugi nalaze: zicer/u/ime', namePh: 'Kako da te zovemo', lastMatches: 'Poslednji mečevi', wonOf: 'pogođeno', vote: 'glasova', yourBank: 'Tvoja banka',
}

const ru = {
  home: 'Главная', matches: 'Матчи', ticket: 'Тикет', ranking: 'Рейтинг', profile: 'Профиль', derby: 'Дерби',
  trends: 'Тренды', bookmakers: 'Букмекеры', admin: 'Админка',
  login: 'Вход', register: 'Регистрация', logout: 'Выйти', username: 'Имя пользователя', email: 'Email',
  password: 'Пароль', loginOrEmail: 'Имя пользователя или email', noAccount: 'Нет аккаунта?', haveAccount: 'Уже есть аккаунт?',
  createAccount: 'Создать аккаунт', signIn: 'Войти',
  live: 'Лайв', today: 'Сегодня', tomorrow: 'Завтра', yesterday: 'Вчера', all: 'Все', football: 'Футбол', basketball: 'Баскетбол',
  serbianOnly: 'Только сербские клубы', noMatches: 'Нет матчей по этому фильтру.', tryOtherDay: 'Посмотри другой день или вид спорта.',
  matchOfDay: 'Матч дня', yourClub: 'Твой клуб', upcoming: 'Ближайшие матчи', seeAll: 'Все', fanBattle: 'Битва фанатов',
  topTipsters: 'Лучшие прогнозисты', passedTickets: 'Зашедшие тикеты', predictions: 'прогнозов', predictionsCap: 'Прогнозы',
  draw: 'Ничья', odds: 'Кэф', stake: 'Ставка', comment: 'Обоснование (необязательно)', commentPh: 'Почему именно этот исход?',
  placePrediction: 'Сделать прогноз', yourPrediction: 'Твой прогноз', addToTicket: 'Добавить в тикет', onTicket: 'В тикете',
  community: 'Мнение сообщества', analysis: 'Разбор Zicer', form: 'Форма', h2h: 'Личные встречи', bestOdds: 'Лучший кэф',
  noPredictions: 'Прогнозов пока нет. Будь первым.', translate: 'Перевести', original: 'Оригинал',
  bank: 'Банк', profit: 'Профит', roi: 'ROI', winrate: 'Угадано', count: 'Прогнозов', fans: 'фанатов', avgPerFan: 'на фаната',
  week: 'Неделя', month: 'Месяц', allTime: 'Всё время', tipsters: 'Прогнозисты', clubs: 'Клубы', tickets: 'Тикеты',
  ticketEmpty: 'Тикет пуст', ticketEmptyHint: 'Нажми на кэф любого матча, чтобы добавить его в тикет.',
  totalOdds: 'Общий кэф', potentialWin: 'Возможный выигрыш', win: 'Выигрыш', placeTicket: 'Поставить тикет', clear: 'Очистить',
  minTwo: 'В тикете должно быть минимум 2 события.', shareTicket: 'Поделиться тикетом', copyLink: 'Скопировать ссылку', linkCopied: 'Ссылка скопирована',
  downloadImage: 'Скачать картинку', status_open: 'В игре', status_won: 'Зашёл', status_lost: 'Не зашёл', status_void: 'Возврат',
  pred_open: 'В игре', pred_won: 'Угадан', pred_lost: 'Не угадан', pred_void: 'Возврат',
  chooseClub: 'Выбери свой клуб', chooseClubHint: 'Главная будет следить за матчами твоего клуба, а твои очки пойдут в битву фанатов.',
  footballClub: 'Футбольный клуб', basketballClub: 'Баскетбольный клуб', none: 'Без клуба', save: 'Сохранить', continue: 'Продолжить', skip: 'Пропустить',
  language: 'Язык', telegram: 'Уведомления в Telegram', telegramHint: 'Напомним за час до матча твоего клуба и сообщим, когда тикет зайдёт.',
  connect: 'Подключить', connected: 'Подключено', settings: 'Настройки', joined: 'С нами с',
  derbyTitle: 'Вечное дерби', derbyNext: 'Следующее дерби', exactScore: 'Угадай точный счёт', exactHint: 'Точный счёт — 3 очка, угаданный исход — 1 очко.',
  yourScore: 'Твой счёт', send: 'Отправить', topScores: 'Популярные счета', record: 'Счёт последних дерби', derbyBoard: 'Лучшие на прошлом дерби',
  noDerby: 'Следующее дерби ещё не в расписании.', days: 'д', hours: 'ч', minutes: 'мин', points: 'очков',
  bonus: 'Бонус', visit: 'Перейти на сайт', bmNote: '18+. Азартные игры могут вызывать зависимость. Играй ответственно.',
  noTrends: 'Тренды появляются, когда у матча есть кэфы и статистика.', trendsHint: 'Автоматически найденные серии и статистика по матчам на ближайшие два дня.',
  error: 'Что-то пошло не так. Попробуй ещё раз.', loading: 'Загрузка…', needLogin: 'Войди, чтобы сделать прогноз.',
  bankLow: 'Недостаточно средств в банке.', closed: 'Прогнозы на этот матч закрыты.', exists: 'У тебя уже есть прогноз на этот матч.',
  stakeRange: 'Ставка должна быть от 10 до 1000.', virtual: 'Банк виртуальный — играешь за очки и рейтинг, не на деньги.',
  heroTitle: 'Лига прогнозов для болельщиков', heroText: 'Прогнозируй матчи, собирай тикет и докажи, что у твоего клуба самые умные фанаты.',
  join: 'Присоединиться бесплатно', users: 'прогнозистов', today24: 'прогнозов за 24 ч', more: 'Ещё',
  finished: 'Завершён', ht: 'Перерыв', vs: 'против', usernameRule: '3–24 символа: буквы, цифры, точка, нижнее подчёркивание',
  err_username_taken: 'Имя пользователя занято.', err_email_taken: 'Email уже зарегистрирован.', err_bad_login: 'Неверное имя или пароль.',
  err_username_invalid: 'Имя: 3–24 символа, буквы, цифры, точка или подчёркивание.', err_email_invalid: 'Некорректный email.',
  responsible: '18+. Zicer не принимает ставки и не организует азартные игры.', myTickets: 'Мои тикеты', history: 'История прогнозов',
  noHistory: 'Прогнозов пока нет.', copy: 'Копировать', pick1: 'Хозяева', pickX: 'Ничья', pick2: 'Гости', goToMatch: 'Открыть матч',
  ticketPlaced: 'Тикет поставлен', removeFromTicket: 'Убрать из тикета', markets: 'Рынки', editProfile: 'Редактировать профиль', displayName: 'Имя', handle: 'Никнейм', bio: 'О себе', bioPh: 'Например: болею за Звезду, слежу за Евролигой', changePhoto: 'Сменить фото', removePhoto: 'Удалить фото', saved: 'Сохранено', changePassword: 'Смена пароля', oldPassword: 'Текущий пароль', newPassword: 'Новый пароль', err_bad_password: 'Текущий пароль неверный.', err_file_bad: 'Формат не поддерживается. Загрузи JPG или PNG.', err_file_big: 'Фото больше 8 МБ.', handleHint: 'По нему тебя находят другие: zicer/u/ник', namePh: 'Как к тебе обращаться', lastMatches: 'Последние матчи', wonOf: 'угадано', vote: 'голосов', yourBank: 'Твой банк',
}

const L2C = [['dž', 'џ'], ['Dž', 'Џ'], ['DŽ', 'Џ'], ['lj', 'љ'], ['Lj', 'Љ'], ['LJ', 'Љ'], ['nj', 'њ'], ['Nj', 'Њ'], ['NJ', 'Њ']]
const LAT = 'abvgdđežzijklmnoprstćufhcčšABVGDĐEŽZIJKLMNOPRSTĆUFHCČŠ'
const CYR = 'абвгдђежзијклмнопрстћуфхцчшАБВГДЂЕЖЗИЈКЛМНОПРСТЋУФХЦЧШ'
export function toCyr(s) {
  if (!s) return s
  for (const [a, b] of L2C) s = s.split(a).join(b)
  let out = ''
  for (const ch of s) { const i = LAT.indexOf(ch); out += i >= 0 ? CYR[i] : ch }
  return out
}

export function translate(lang, key) {
  if (lang === 'ru') return ru[key] ?? sr[key] ?? key
  const v = sr[key] ?? key
  return lang === 'sr-cyr' ? toCyr(v) : v
}

const FORMS = {
  sr: { predictions: ['prognoza', 'prognoze', 'prognoza'], fans: ['navijač', 'navijača', 'navijača'], vote: ['glas', 'glasa', 'glasova'], pairs: ['par', 'para', 'parova'] },
  ru: { predictions: ['прогноз', 'прогноза', 'прогнозов'], fans: ['фанат', 'фаната', 'фанатов'], vote: ['голос', 'голоса', 'голосов'], pairs: ['событие', 'события', 'событий'] },
}
function plural(n, f) {
  const a = Math.abs(n) % 100, b = a % 10
  if (b === 1 && a !== 11) return f[0]
  if (b >= 2 && b <= 4 && (a < 12 || a > 14)) return f[1]
  return f[2]
}

export const LangCtx = createContext({ lang: 'sr', setLang: () => {} })
export function useT() {
  const { lang } = useContext(LangCtx)
  const t = (k) => translate(lang, k)
  t.lang = lang
  t.serb = (s) => (lang === 'sr-cyr' ? toCyr(s) : s)
  t.team = (team) => {
    if (!team) return ''
    return lang === 'sr-cyr' && (team.serbian || team.national) ? toCyr(team.short) : team.short
  }
  t.locale = lang === 'ru' ? 'ru-RU' : 'sr-Latn-RS'
  t.n = (n, key) => {
    const w = plural(n, (lang === 'ru' ? FORMS.ru : FORMS.sr)[key])
    return `${n} ${lang === 'sr-cyr' ? toCyr(w) : w}`
  }
  return t
}
