// «Ціни» і «Про нас». Факти — від Колі: 10+ років; нотаріус і адвокат — партнери, інші фахівці — члени обʼєднання;
// особисті зустрічі з клієнтами; цифри на головній реальні.
import { FACTS, STATS } from "@/lib/site";
import { TENDER_PRICES } from "./tenders";

const row = (name, href, price, text) => ({ name, href, price, text });

export const companyPages = {
  tsiny: {
    meta: {
      title: "Ціни на юридичні та бухгалтерські послуги | Weksar",
      description: "Актуальні ціни Weksar: реєстрація і ліквідація ТОВ, тендерний супровід, ліцензії, зміни, бухгалтерія, адвокат, нотаріус, переклади.",
    },
    breadcrumbs: [{ name: "Ціни", href: "/tsiny" }],
    cta: "Ціни",
    hero: {
      eyebrow: FACTS.area,
      title: "Ціни на послуги",
      lead: "Ціни «від» — стартові: точну суму називаємо після короткої консультації, яка в межах послуги безкоштовна. Для ліквідації ТОВ названа ціна включає все.",
      facts: [{ value: "1 000 грн", label: "ціна, від" }, { value: "без доплат", label: "для ліквідації ТОВ" }, { value: FACTS.experience, label: "досвіду команди" }],
    },
    sections: [
      { type: "prices", tone: "plain", title: "Реєстрація і зміни", items: [row("Реєстрація ТОВ", "/reiestratsiia-tov", "від 2 500 грн"), row("Реєстрація ФОП", "/reiestratsiia-fop", "1 000 грн"), row("Зміни до ТОВ", "/zminy-tov", "від 4 000 грн", "директор, учасники, адреса, КВЕД, статут, капітал"), row("Зміни ФОП", "/zminy-fop", "1 000 грн")] },
      { type: "prices", title: "Ліквідація і закриття", items: [row("Класична ліквідація ТОВ", "/likvidatsiia-tov", "від 20 000 грн", "2,5 місяця"), row("Альтернативна ліквідація", "/likvidatsiia-tov/alternatyvna", "від 20 000 грн", "від 2 днів"), row("Ліквідація з боргами і банкрутство", "/likvidatsiia-tov/z-borhamy", "від 25 000 грн"), row("Реорганізація ТОВ", "/reorhanizatsiia-tov", "від 25 000 грн"), row("Закриття ФОП", "/zakryttia-fop", "3 500 грн", "3 дні")] },
      { type: "prices", tone: "plain", title: "Тендерний супровід", items: [row("Оцінка можливостей компанії", "/tendernyi-suprovid", TENDER_PRICES.assessment), row("Підготовка тендерної пропозиції", "/tendernyi-suprovid/pidhotovka-tendernoi-propozytsii", TENDER_PRICES.proposal), row("Супровід однієї закупівлі", "/tendernyi-suprovid", TENDER_PRICES.oneProcurement), row("Абонемент", "/tendernyi-suprovid", TENDER_PRICES.subscription), row("Винагорода за перемогу", "/tendernyi-suprovid", TENDER_PRICES.successFee), row("Документація для замовників", "/tendernyi-suprovid/dlia-zamovnykiv", TENDER_PRICES.customerDocsSimplified)] },
      { type: "prices", title: "Ліцензії", items: [row("Алкоголь", "/litsenzii/alkohol", "12 000 грн", "+ держплата"), row("Сидр і перрі", "/litsenzii/alkohol", "9 000 грн", "+ держплата"), row("Тютюнові вироби", "/litsenzii/tiutiun", "10 000 грн", "+ держплата"), row("Продовження ліцензії", "/litsenzii", "2 000 грн", "за ліцензію"), row("Будівельна СС2 і СС3", "/litsenzii/budivelna", "15 000 грн", "+ держплата"), row("Зміни до будівельної ліцензії", "/litsenzii/budivelna", "4 000 грн")] },
      { type: "prices", tone: "plain", title: "Бухгалтерія", items: [row("Бухгалтер для ФОП", "/bukhhalteriia/fop", "від 2 500 грн/міс"), row("Бухгалтерський супровід ТОВ", "/bukhhalteriia/tov", "від 6 000 грн/міс"), row("Подання звітності", "/bukhhalteriia/zvitnist", "від 1 000 грн"), row("Звітність КІК", "/bukhhalteriia/kik", "від 2 000 грн"), row("Реєстрація РРО і ПРРО", "/bukhhalteriia/rro-prro", "від 2 500 грн"), row("Аудит ФОП", "/bukhhalteriia/audyt-fop", "3 000 грн")] },
      { type: "prices", title: "Інші послуги", items: [row("Консультація юриста", "/konsultatsiia-yurysta", "2 000 грн/год"), row("Договори", "/dohovory", "від 2 000 грн"), row("Торговельна марка", "/reiestratsiia-torhovelnoi-marky", "4 000 грн", "+ державні збори"), row("Реєстрація потужностей", "/reiestratsiia-potuzhnostei", "2 000 грн"), row("Адвокат у суді", "/advokat-u-sudi", "від 3 000 грн"), row("Консультація адвоката", "/konsultatsiia-advokata", "від 1 000 грн"), row("Нотаріальне засвідчення", "/notarialne-zasvidchennia-dokumentiv", "від 300 грн"), row("Нотаріальні реєстраційні дії", "/notarialni-reiestratsiini-dii", "від 1 500 грн"), row("Переклад документів", "/pereklad-dokumentiv", "від 400 грн"), row("Послуги перекладача", "/posluhy-perekladacha", "від 500 грн"), row("Гранти «Власна справа»", "/hrant-vlasna-sprava", "10 000 грн"), row("ІПН для іноземця", "/inozemtsiam/rnokpp", "2 000 грн"), row("Посвідка на проживання", "/inozemtsiam/posvidka", "10 000 грн"), row("Дозвіл на працевлаштування", "/inozemtsiam/dozvil-na-pratsevlashtuvannia", "10 000 грн")] },
    ],
    lead: { title: "Порахуємо точну ціну для вас" },
  },

  "pro-nas": {
    meta: {
      title: "Про Weksar — партнерське об'єднання юристів",
      description: "Weksar — партнерське об'єднання юристів, бухгалтерів і перекладачів з понад 10-річним досвідом; нотаріус і адвокат — партнери. Київ і вся Україна.",
    },
    breadcrumbs: [{ name: "Про нас", href: "/pro-nas" }],
    cta: "Про нас",
    hero: {
      eyebrow: "Партнерське обʼєднання",
      title: "Про Weksar",
      lead: `${FACTS.slogan}. Ми — обʼєднання фахівців, які разом закривають юридичні й бухгалтерські питання бізнесу: від реєстрації компанії до тендерів, ліцензій і ліквідації.`,
      facts: [{ value: FACTS.experience, label: "досвіду команди" }, { value: "3000+", label: "задоволених клієнтів" }, { value: "вся Україна", label: "тендерний супровід" }],
    },
    sections: [
      {
        type: "cards",
        title: "Хто в обʼєднанні",
        columns: 3,
        items: [
          { name: "Юристи", text: "Реєстрація, зміни і ліквідація компаній, ліцензії, тендерний супровід, договори." },
          { name: "Бухгалтери", text: "Облік ФОП і ТОВ, звітність, КІК, РРО і ПРРО." },
          { name: "Перекладачі", text: "Письмові й усні переклади, документи для іноземців." },
          { name: "Нотаріус — партнер", text: "Засвідчення документів і реєстраційні дії." },
          { name: "Адвокат — партнер", text: "Представництво в судах і консультації." },
        ],
      },
      { type: "stats", items: STATS },
      {
        type: "prose",
        title: "Як ми працюємо",
        paragraphs: [
          "Зустрічаємося з клієнтами особисто і супроводжуємо у нотаріуса. Ціни показуємо відкрито, а для ліквідації ТОВ названа ціна включає все.",
          "Працюємо з бізнесом Києва і Київської області, а тендерний супровід і гранти — по всій Україні.",
        ],
      },
    ],
    lead: { title: "Розкажіть про вашу задачу" },
  },
};
