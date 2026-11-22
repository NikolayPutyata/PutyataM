// Єдине джерело даних сайту: контакти, навігація, послуги, ціни.
// Ціни й строки — лише підтверджені Колею (CLAUDE.md, «Факти від Колі»).

export const SITE_URL = "https://weksar.com";

// Збірка за замовчуванням — продакшн (для заливки на weksar.com).
// Для тестової копії, закритої від Google: NEXT_PUBLIC_SITE_ENV=staging.
export const IS_PRODUCTION = process.env.NEXT_PUBLIC_SITE_ENV !== "staging";

// Сервер заявок (можна перевизначити змінною NEXT_PUBLIC_LEAD_ENDPOINT).
export const LEAD_ENDPOINT = process.env.NEXT_PUBLIC_LEAD_ENDPOINT || "https://unium-server-q8g7u.ondigitalocean.app/telegram/send";

export const CONTACTS = {
  phoneDisplay: "+38 096 198 79 61",
  phoneHref: "tel:+380961987961",
  messengers: [
    { name: "Telegram", href: "https://t.me/putyata_lawyer" },
    { name: "Viber", href: "viber://chat?number=%2B380961987961" },
    { name: "WhatsApp", href: "https://wa.me/380961987961" },
  ],
  whatsappNumber: "380961987961",
};

export const FACTS = {
  liquidationFrom: "20 000 грн",
  liquidationTerm: "від 2 днів до 2,5 місяця",
  experience: "10+ років",
  area: "Київ і Київська область",
  slogan: "Ви не клієнт. Ви — Партнер",
};

// Чотири головні напрями (рекламуються нарівні, Коля 22.11.2026) — великі картки
export const PRIMARY_SERVICES = [
  {
    title: "Реєстрація бізнесу",
    href: "/reiestratsiia-tov",
    text: "ТОВ і ФОП під ключ: КВЕД, система оподаткування, статут, реєстрація в ЄДР.",
    facts: ["ТОВ від 2 500 грн", "ФОП 1 000 грн"],
  },
  {
    title: "Ліквідація ТОВ",
    href: "/likvidatsiia-tov",
    text: "Класична, через зміну власника, з боргами, реорганізація. Ціна включає все.",
    facts: ["від 20 000 грн", "від 2 днів"],
  },
  {
    title: "Тендерний супровід",
    href: "/tendernyi-suprovid",
    text: "Для компаній, які готові працювати з державою, але ще не заходили на тендерний ринок.",
    facts: ["вся Україна", "від 3 000 грн"],
  },
  {
    title: "Ліцензії",
    href: "/litsenzii",
    text: "Алкоголь, сидр і перрі, тютюн, будівельна діяльність СС2 і СС3.",
    facts: ["від 9 000 грн", "+ держплата"],
  },
];

// Інші популярні послуги (менші картки)
export const TOP_SERVICES = [
  {
    title: "Зміни до ТОВ",
    href: "/zminy-tov",
    text: "Директор, учасники, адреса, КВЕД, статут, статутний капітал.",
    price: "від 4 000 грн",
  },
  {
    title: "Закриття ФОП",
    href: "/zakryttia-fop",
    text: "Припинення в ЄДР, остання звітність, звірка з податковою. 3 дні.",
    price: "3 500 грн",
  },
  {
    title: "Бухгалтерія",
    href: "/bukhhalteriia",
    text: "Ведення обліку ФОП і ТОВ, звітність, КІК, РРО і ПРРО.",
    price: "від 1 000 грн",
  },
];

// Каталог усіх напрямів (адреси — з docs/seo-structure.md)
export const CATALOG = [
  {
    group: "Бізнес: відкриття і закриття",
    items: [
      { name: "Закриття ФОП", href: "/zakryttia-fop", price: "3 500 грн" },
      { name: "Реєстрація ТОВ", href: "/reiestratsiia-tov", price: "від 2 500 грн" },
      { name: "Реєстрація ФОП", href: "/reiestratsiia-fop", price: "1 000 грн" },
      { name: "Реорганізація ТОВ", href: "/reorhanizatsiia-tov" },
      { name: "Зміни ФОП", href: "/zminy-fop", price: "1 000 грн" },
    ],
  },
  {
    group: "Юридичні послуги",
    items: [
      { name: "Торговельна марка", href: "/reiestratsiia-torhovelnoi-marky", price: "4 000 грн" },
      { name: "Реєстрація потужностей", href: "/reiestratsiia-potuzhnostei", price: "2 000 грн" },
      { name: "Договори", href: "/dohovory", price: "від 2 000 грн" },
      { name: "Консультація юриста", href: "/konsultatsiia-yurysta", price: "2 000 грн/год" },
      { name: "Адвокат у суді", href: "/advokat-u-sudi", price: "від 3 000 грн" },
    ],
  },
  {
    group: "Бухгалтерія",
    items: [
      { name: "Бухгалтер для ФОП", href: "/bukhhalteriia/fop", price: "від 2 500 грн/міс" },
      { name: "Бухгалтерія ТОВ", href: "/bukhhalteriia/tov", price: "від 6 000 грн/міс" },
      { name: "Подання звітності", href: "/bukhhalteriia/zvitnist", price: "від 1 000 грн" },
      { name: "Звітність КІК", href: "/bukhhalteriia/kik", price: "від 2 000 грн" },
      { name: "РРО і ПРРО", href: "/bukhhalteriia/rro-prro", price: "від 2 500 грн" },
    ],
  },
  {
    group: "Гранти, нотаріус, переклади, іноземцям",
    items: [
      { name: "Грант «Власна справа»", href: "/hrant-vlasna-sprava", price: "10 000 грн" },
      { name: "Нотаріальне засвідчення", href: "/notarialne-zasvidchennia-dokumentiv", price: "від 300 грн" },
      { name: "Переклад документів", href: "/pereklad-dokumentiv", price: "від 400 грн" },
      { name: "Посвідка на проживання", href: "/inozemtsiam/posvidka", price: "10 000 грн" },
      { name: "ІПН для іноземця", href: "/inozemtsiam/rnokpp", price: "2 000 грн" },
    ],
  },
];

export const NAV = [
  { name: "Реєстрація", href: "/reiestratsiia-tov" },
  { name: "Ліквідація ТОВ", href: "/likvidatsiia-tov" },
  { name: "Тендери", href: "/tendernyi-suprovid" },
  { name: "Ліцензії", href: "/litsenzii" },
  { name: "Усі послуги", href: "/#poslugy" },
  { name: "Ціни", href: "/tsiny" },
  { name: "Контакти", href: "/kontakty" },
];


// Англійська версія: навігація і факти
export const NAV_EN = [
  { name: "Company registration", href: "/en/company-registration-ukraine" },
  { name: "LLC liquidation", href: "/en/llc-liquidation-ukraine" },
  { name: "Tenders", href: "/en/tender-support-ukraine" },
  { name: "Licenses", href: "/en/business-licenses-ukraine" },
  { name: "All services", href: "/en#services" },
  { name: "Prices", href: "/en/prices" },
  { name: "Contacts", href: "/en/contacts" },
];

export const CATALOG_EN = [
  {
    group: "Start, change, close",
    items: [
      { name: "LLC registration", href: "/en/company-registration-ukraine", price: "from UAH 2,500" },
      { name: "Sole proprietor registration", href: "/en/sole-proprietor-registration-ukraine", price: "UAH 1,000" },
      { name: "Changes to an LLC", href: "/en/llc-changes-ukraine", price: "from UAH 4,000" },
      { name: "Sole proprietor changes", href: "/en/sole-proprietor-changes-ukraine", price: "UAH 1,000" },
      { name: "Closing a sole proprietorship", href: "/en/close-sole-proprietorship-ukraine", price: "UAH 3,500" },
      { name: "LLC reorganization", href: "/en/llc-reorganization-ukraine", price: "from UAH 25,000" },
    ],
  },
  {
    group: "For foreigners",
    items: [
      { name: "Tax number (RNOKPP)", href: "/en/services-for-foreigners/tax-number", price: "UAH 2,000" },
      { name: "Residence permit", href: "/en/services-for-foreigners/temporary-residence-permit", price: "UAH 10,000" },
      { name: "Work permit", href: "/en/services-for-foreigners/work-permit", price: "UAH 10,000" },
      { name: "Certified translation", href: "/en/certified-translation-kyiv", price: "from UAH 400" },
      { name: "Interpreter", href: "/en/interpreter-kyiv", price: "from UAH 500" },
      { name: "Notarization", href: "/en/notarization-kyiv", price: "from UAH 300" },
    ],
  },
  {
    group: "Legal services",
    items: [
      { name: "Contracts", href: "/en/contracts", price: "from UAH 2,000" },
      { name: "Legal consultation", href: "/en/legal-consultation", price: "UAH 2,000/hour" },
      { name: "Attorney consultation", href: "/en/attorney-consultation", price: "from UAH 1,000" },
      { name: "Attorney in court", href: "/en/litigation-attorney-kyiv", price: "from UAH 3,000" },
      { name: "Trademark registration", href: "/en/trademark-registration-ukraine", price: "UAH 4,000" },
      { name: "Food facility registration", href: "/en/food-facility-registration-ukraine", price: "UAH 2,000" },
    ],
  },
  {
    group: "Accounting and grants",
    items: [
      { name: "Accounting for a sole proprietor", href: "/en/accounting-services-ukraine/sole-proprietor", price: "from UAH 2,500/month" },
      { name: "Accounting for an LLC", href: "/en/accounting-services-ukraine/llc", price: "from UAH 6,000/month" },
      { name: "Tax reporting", href: "/en/accounting-services-ukraine/tax-reporting", price: "from UAH 1,000" },
      { name: "CFC reporting", href: "/en/accounting-services-ukraine/cfc-reporting", price: "from UAH 2,000" },
      { name: "Cash registers (RRO/PRRO)", href: "/en/accounting-services-ukraine/cash-registers", price: "from UAH 2,500" },
      { name: "“Own Business” grant", href: "/en/business-grants-ukraine", price: "UAH 10,000" },
    ],
  },
];

export const FACTS_EN = {
  experience: "10+ years",
  area: "Kyiv and the Kyiv region",
  slogan: "You are not a client. You are a Partner",
};

export const STATS = [
  { value: "1000+", label: "зареєстрованих ФОП" },
  { value: "100+", label: "відкритих підприємств" },
  { value: "3000+", label: "задоволених клієнтів" },
  { value: "100+", label: "звернень щомісяця" },
];

export const STATS_EN = [
  { value: "1000+", label: "sole proprietors registered" },
  { value: "100+", label: "companies set up" },
  { value: "3000+", label: "satisfied clients" },
  { value: "100+", label: "requests every month" },
];
