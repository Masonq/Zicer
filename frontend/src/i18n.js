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
  community: 'Šta misli zajednica', analysis: 'Winly analiza', form: 'Forma', h2h: 'Međusobni dueli', bestOdds: 'Najbolja kvota',
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
  responsible: '18+. Winly ne prima uplate i ne organizuje igre na sreću.', myTickets: 'Moji tiketi', history: 'Istorija prognoza',
  noHistory: 'Još nema prognoza.', copy: 'Kopiraj', pick1: 'Domaćin', pickX: 'Nerešeno', pick2: 'Gost', goToMatch: 'Otvori meč',
  ticketPlaced: 'Tiket je uplaćen', noTickets: 'Još nema prošlih tiketa. Sastavi prvi.', waitingData: 'Podaci uživo stižu za nekoliko sekundi.', dangerAttack: 'Opasan napad', ev_danger: 'Opasan napad', withBall: 'S loptom', streak: 'Serija', bestStreak: 'najbolja', favSport: 'Omiljeni sport', bankMonth: 'Bilans za 30 dana', bestWin: 'Najveći dobitak', achievements: 'Dostignuća', achGot: 'osvojeno', achLocked: 'zaključano', ach_first_pick: 'Prva prognoza', ach_first_ticket: 'Prvi tiket', ach_streak5: '5 zaredom', ach_streak10: '10 zaredom', ach_won50: '50 pogodaka', ach_underdog: 'Autsajder (kvota 3+)', ach_ticket_won: 'Tiket je prošao', ach_euroleague: 'Znalac Evrolige', chance: 'Šansa tiketa', chanceHint: 'po trenutnim kvotama', goal: 'Gol!', puckGoal: 'Gol!', ticketWon: 'Tiket je prošao', predWon: 'Prognoza je prošla', predLost: 'Prognoza nije prošla', experts: 'Najbolji prognozeri o ovom meču', expertsLocked: 'Vidi njihove izbore posle svoje prognoze', last30: 'za 30 dana', favAdded: 'Dodato u omiljene', leaguePredictions: 'prognoze i kvote', leagueSeoDesc: 'raspored, kvote i prognoze navijača za naredne mečeve.', upcoming: 'Predstojeći', results: 'Rezultati', invite: 'Pozovi prijatelje', inviteText: 'Za svakog prijatelja koji se registruje preko tvog linka oboje dobijate', invited: 'Pozvano', copyLink: 'Kopiraj link', share: 'Podeli', contestTitle: 'Takmičenje nedelje', contestPrize: 'Nagrada', seoHome: 'Winly — besplatna liga prognoza za navijače', seoHomeDesc: 'Prognoziraj mečeve, sastavi tiket i dokaži da su navijači tvog kluba najbolji. Besplatno.', seoMatch: 'prognoza i kvote', startsIn: 'za', hShort: 'h', mShort: 'min', inFav: 'U omiljenima', searchLeague: 'Pretraži ligu', showN: 'Prikaži', all: 'Sve', favRemoved: 'Uklonjeno iz omiljenih', addedToTicket: 'Dodato na tiket', undo: 'Poništi', fav: 'Omiljeno', unfav: 'Ukloni', favorites: 'Omiljeni', filters: 'Filteri', onlyLive: 'Samo uživo', leagues: 'Lige', timeOfDay: 'Vreme', morning: 'Jutro', afternoon: 'Dan', evening: 'Veče', night: 'Noć', apply: 'Primeni', reset: 'Poništi', toLive: 'Uživo', hotMatches: 'Vrući mečevi', byOdds: 'šanse po kvotama', picksN: 'prognoza', lineMoves: 'Kretanje kvota', lineHint: 'kvota pada — novac ulazi', noFav: 'Prevuci meč udesno da ga dodaš u omiljene', highlights: 'Pregled meča', officialVideo: 'zvanični snimak lige', latestHighlights: 'Najnoviji pregledi', itemsProgress: 'Prošlo {won} od {all}', banner_raffle: 'Nagradna igra', banner_promo: 'Akcija', banner_news: 'Novo', shareText: 'Moj tiket na Winly, kvota', fmtPost: 'Za objavu', fmtStory: 'Za story', shareImage: 'Podeli sliku tiketa', save: 'Sačuvaj', powerPlay: 'Igrač više', brkHT: 'Poluvreme', brkET: 'Pauza pred produžetke', brkHalf: 'Veliki odmor', brkQuarter: 'Pauza između četvrtina', brkPeriod: 'Pauza između trećina', brkSet: 'Pauza između setova', resumeSoon: 'nastavak uskoro', matchOver: 'Meč je završen', changeover: 'Promena strana', withPuck: 'Napad', setBreak: 'Pauza između setova', rally: 'Poen se igra', shot: 'Šut', ev_vpoint: 'Poen', timeStopped: 'Vreme zaustavljeno', ev_timeout: 'Tajm-aut', ev_game: 'Gem', ev_bp: 'Brejk lopta', serve: 'Servis', ev_attack: 'Napad', ev_shot_on: 'Udarac u okvir', ev_shot_off: 'Udarac pored gola', ev_corner: 'Korner', ev_yellow: 'Žuti karton', ev_red: 'Crveni karton', ev_penalty: 'Penal', ev_sub: 'Izmena', ev_pen2: 'Isključenje 2 min', ev_p2: 'Dvojka', ev_p3: 'Trojka', ev_ft: 'Slobodno bacanje', ev_foul: 'Lična greška', ev_ace: 'As', ev_df: 'Dupla greška', ev_break: 'Brejk', ev_goal: 'Gol!', ev_set: 'Osvojen set', ev_point: 'Poen', noStats: 'Statistika za ovaj meč nije dostupna.', attack: 'Napad', possession: 'Posed lopte', events: 'Događaji', statistics: 'Statistika', goal: 'Gol', ownGoal: 'Autogol', yellow: 'Žuti karton', red: 'Crveni karton', sub: 'Izmena', halfTime: 'Poluvreme', pressure: 'Pritisak na meču', noEvents: 'Još nema događaja.', periods: 'Po periodima', total: 'Ukupno', points: 'Poeni', missedPen: 'Promašen penal', assistBy: 'asist', matchCenter: 'Meč centar', pause: 'Pauza', half: 'poluvreme', quarter: 'četvrtina', set: 'set', period: 'trećina', overtime: 'Produžeci', penalties: 'Penali', tennis: 'Tenis', hockey: 'Hokej', volleyball: 'Odbojka', waterpolo: 'Vaterpolo', allSports: 'Svi sportovi', crashTitle: 'Stranica nije uspela da se učita', reload: 'Osveži', winner: 'Pobednik', liveNow: 'uživo', removeFromTicket: 'Skloni sa tiketa', markets: 'Tržišta', editProfile: 'Uredi profil', displayName: 'Ime', handle: 'Korisničko ime', bio: 'O meni', bioPh: 'Npr. Delije od rođenja, pratim ABA ligu', changePhoto: 'Promeni sliku', removePhoto: 'Ukloni sliku', saved: 'Sačuvano', changePassword: 'Promena lozinke', oldPassword: 'Trenutna lozinka', newPassword: 'Nova lozinka', err_bad_password: 'Trenutna lozinka nije tačna.', err_file_bad: 'Slika nije podržana. Pošalji JPG ili PNG.', err_file_big: 'Slika je veća od 8 MB.', handleHint: 'Po njemu te drugi nalaze: winly/u/ime', namePh: 'Kako da te zovemo', lastMatches: 'Poslednji mečevi', wonOf: 'pogođeno', vote: 'glasova', yourBank: 'Tvoja banka',
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
  community: 'Мнение сообщества', analysis: 'Разбор Winly', form: 'Форма', h2h: 'Личные встречи', bestOdds: 'Лучший кэф',
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
  responsible: '18+. Winly не принимает ставки и не организует азартные игры.', myTickets: 'Мои тикеты', history: 'История прогнозов',
  noHistory: 'Прогнозов пока нет.', copy: 'Копировать', pick1: 'Хозяева', pickX: 'Ничья', pick2: 'Гости', goToMatch: 'Открыть матч',
  ticketPlaced: 'Тикет поставлен', noTickets: 'Зашедших тикетов пока нет. Собери первый.', waitingData: 'Данные лайва появятся через несколько секунд.', dangerAttack: 'Опасная атака', ev_danger: 'Опасная атака', withBall: 'С мячом', streak: 'Серия', bestStreak: 'лучшая', favSport: 'Любимый спорт', bankMonth: 'Баланс за 30 дней', bestWin: 'Лучший выигрыш', achievements: 'Достижения', achGot: 'получено', achLocked: 'закрыто', ach_first_pick: 'Первый прогноз', ach_first_ticket: 'Первый тикет', ach_streak5: '5 подряд', ach_streak10: '10 подряд', ach_won50: '50 угаданных', ach_underdog: 'Андердог (кэф 3+)', ach_ticket_won: 'Тикет зашёл', ach_euroleague: 'Знаток Евролиги', chance: 'Шанс тикета', chanceHint: 'по текущим коэффициентам', goal: 'Гол!', puckGoal: 'Шайба!', ticketWon: 'Тикет зашёл', predWon: 'Прогноз зашёл', predLost: 'Прогноз не зашёл', experts: 'Лучшие прогнозисты на этот матч', expertsLocked: 'Их выбор откроется после твоего прогноза', last30: 'за 30 дней', favAdded: 'Добавлено в избранное', leaguePredictions: 'прогнозы и коэффициенты', leagueSeoDesc: 'расписание, коэффициенты и прогнозы болельщиков на ближайшие матчи.', upcoming: 'Ближайшие', results: 'Результаты', invite: 'Пригласи друзей', inviteText: 'За каждого друга, который зарегистрируется по твоей ссылке, вы оба получаете', invited: 'Приглашено', copyLink: 'Копировать ссылку', share: 'Поделиться', contestTitle: 'Конкурс недели', contestPrize: 'Приз', seoHome: 'Winly — бесплатная лига прогнозов для болельщиков', seoHomeDesc: 'Делай прогнозы на матчи, собирай тикеты и докажи, что болельщики твоего клуба лучшие. Бесплатно.', seoMatch: 'прогноз и коэффициенты', startsIn: 'через', hShort: 'ч', mShort: 'мин', inFav: 'В избранном', searchLeague: 'Найти лигу', showN: 'Показать', all: 'Все', favRemoved: 'Убрано из избранного', addedToTicket: 'Добавлено в тикет', undo: 'Отменить', fav: 'В избранное', unfav: 'Убрать', favorites: 'Избранное', filters: 'Фильтры', onlyLive: 'Только лайв', leagues: 'Лиги', timeOfDay: 'Время', morning: 'Утро', afternoon: 'День', evening: 'Вечер', night: 'Ночь', apply: 'Показать', reset: 'Сбросить', toLive: 'К лайву', hotMatches: 'Горячие матчи', byOdds: 'шансы по кэфам', picksN: 'прогнозов', lineMoves: 'Движение линии', lineHint: 'кэф падает — в исход идут деньги', noFav: 'Смахни матч вправо, чтобы добавить в избранное', highlights: 'Обзор матча', officialVideo: 'официальное видео лиги', latestHighlights: 'Свежие обзоры', itemsProgress: 'Зашло {won} из {all}', banner_raffle: 'Розыгрыш', banner_promo: 'Акция', banner_news: 'Новое', shareText: 'Мой тикет на Winly, коэффициент', fmtPost: 'Для поста', fmtStory: 'Для сторис', shareImage: 'Поделиться картинкой', save: 'Сохранить', powerPlay: 'Большинство', brkHT: 'Перерыв между таймами', brkET: 'Перерыв перед овертаймом', brkHalf: 'Большой перерыв', brkQuarter: 'Перерыв между четвертями', brkPeriod: 'Перерыв между периодами', brkSet: 'Перерыв между партиями', resumeSoon: 'скоро продолжение', matchOver: 'Матч завершён', changeover: 'Смена сторон', withPuck: 'Атака', setBreak: 'Перерыв между сетами', rally: 'Розыгрыш', shot: 'Бросок', ev_vpoint: 'Очко', timeStopped: 'Время остановлено', ev_timeout: 'Тайм-аут', ev_game: 'Гейм', ev_bp: 'Брейк-пойнт', serve: 'Подача', ev_attack: 'Атака', ev_shot_on: 'Удар в створ', ev_shot_off: 'Удар мимо', ev_corner: 'Угловой', ev_yellow: 'Жёлтая карточка', ev_red: 'Красная карточка', ev_penalty: 'Пенальти', ev_sub: 'Замена', ev_pen2: 'Удаление на 2 мин', ev_p2: 'Двухочковый', ev_p3: 'Трёхочковый', ev_ft: 'Штрафной бросок', ev_foul: 'Фол', ev_ace: 'Эйс', ev_df: 'Двойная ошибка', ev_break: 'Брейк', ev_goal: 'Гол!', ev_set: 'Взят сет', ev_point: 'Поинт', noStats: 'Статистика по этому матчу недоступна.', attack: 'Атака', possession: 'Владение мячом', events: 'События', statistics: 'Статистика', goal: 'Гол', ownGoal: 'Автогол', yellow: 'Жёлтая карточка', red: 'Красная карточка', sub: 'Замена', halfTime: 'Перерыв', pressure: 'Давление в матче', noEvents: 'Событий пока нет.', periods: 'По периодам', total: 'Итого', points: 'Очки', missedPen: 'Незабитый пенальти', assistBy: 'пас', matchCenter: 'Матч-центр', pause: 'Перерыв', half: 'тайм', quarter: 'четверть', set: 'сет', period: 'период', overtime: 'Овертайм', penalties: 'Пенальти', tennis: 'Теннис', hockey: 'Хоккей', volleyball: 'Волейбол', waterpolo: 'Водное поло', allSports: 'Все виды', crashTitle: 'Страница не загрузилась', reload: 'Обновить', winner: 'Победитель', liveNow: 'в лайве', removeFromTicket: 'Убрать из тикета', markets: 'Рынки', editProfile: 'Редактировать профиль', displayName: 'Имя', handle: 'Никнейм', bio: 'О себе', bioPh: 'Например: болею за Звезду, слежу за Евролигой', changePhoto: 'Сменить фото', removePhoto: 'Удалить фото', saved: 'Сохранено', changePassword: 'Смена пароля', oldPassword: 'Текущий пароль', newPassword: 'Новый пароль', err_bad_password: 'Текущий пароль неверный.', err_file_bad: 'Формат не поддерживается. Загрузи JPG или PNG.', err_file_big: 'Фото больше 8 МБ.', handleHint: 'По нему тебя находят другие: winly/u/ник', namePh: 'Как к тебе обращаться', lastMatches: 'Последние матчи', wonOf: 'угадано', vote: 'голосов', yourBank: 'Твой банк',
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
    const n = team.names || {}
    if (lang === 'ru') return n.ru || team.short
    if (lang === 'sr-cyr') return n.cyr || ((team.serbian || team.national) ? toCyr(team.short) : team.short)
    return n.sr || team.short
  }
  t.league = (league) => {
    if (!league) return ''
    const n = league.names || {}
    if (lang === 'ru') return n.ru || league.name
    const s = n.sr || league.name
    if (lang !== 'sr-cyr') return s
    // only names that are Serbian (translated or Serbian competitions) go to Cyrillic; "WTA Sopot", "Challenge Cup" stay as written
    const serbianName = !!n.sr && n.sr !== league.name
    const looksSerbian = /[čćžšđ]|liga|kup|superliga|prvenstvo|evroliga|evrokup|reprezentacij/i.test(s) && !/\b(cup|league|open|masters|challenger|wta|atp|itf|nba|nhl|uefa|fifa)\b/i.test(s)
    return serbianName || looksSerbian ? toCyr(s) : s
  }
  t.locale = lang === 'ru' ? 'ru-RU' : 'sr-Latn-RS'
  t.n = (n, key) => {
    const w = plural(n, (lang === 'ru' ? FORMS.ru : FORMS.sr)[key])
    return `${n} ${lang === 'sr-cyr' ? toCyr(w) : w}`
  }
  return t
}
