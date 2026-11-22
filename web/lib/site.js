// Єдине джерело даних сайту: контакти, навігація, послуги, ціни.
// Ціни й строки — лише підтверджені Колею (CLAUDE.md, «Факти від Колі»).

export const SITE_URL = "https://weksar.com";

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
  liquidationFrom: "12 000 грн",
  liquidationTerm: "від 2 днів до 2,5 місяця",
  experience: "10+ років",
  area: "Київ і Київська область",
  slogan: "Ви не клієнт. Ви — Партнер",
};

// Два головні напрями (рекламуються нарівні) — великі картки
export const PRIMARY_SERVICES = [
  {
    title: "Ліквідація ТОВ",
    href: "/likvidatsiia-tov",
    text: "Класична, через зміну власника, з боргами, реорганізація.",
    facts: ["від 12 000 грн", "від 2 днів"],
  },
  {
    title: "Тендерний супровід",
    href: "/tendernyi-suprovid",
    text: "Для компаній, які готові працювати з державою, але ще не заходили на тендерний ринок.",
    facts: ["повний цикл", "від оцінки до договору"],
  },
];

// Інші головні послуги (менші картки)
export const TOP_SERVICES = [
  {
    title: "Зміни до ТОВ",
    href: "/zminy-tov",
    text: "Директор, учасники, адреса, КВЕД, статут, статутний капітал.",
    price: "від 2 500 грн",
  },
  {
    title: "Ліцензії",
    href: "/litsenzii",
    text: "Алкоголь, сидр і перрі, тютюн, будівельна діяльність СС2 і СС3.",
    price: "від 9 000 грн",
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
      { name: "Договори", href: "/dohovory" },
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
  { name: "Ліквідація ТОВ", href: "/likvidatsiia-tov" },
  { name: "Тендери", href: "/tendernyi-suprovid" },
  { name: "Зміни ТОВ", href: "/zminy-tov" },
  { name: "Ліцензії", href: "/litsenzii" },
  { name: "Усі послуги", href: "/#poslugy" },
  { name: "Ціни", href: "/tsiny" },
  { name: "Контакти", href: "/kontakty" },
];

export const STATS = [
  { value: "1000+", label: "зареєстрованих ФОП" },
  { value: "100+", label: "відкритих підприємств" },
  { value: "3000+", label: "задоволених клієнтів" },
  { value: "100+", label: "звернень щомісяця" },
];
