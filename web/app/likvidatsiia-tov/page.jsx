import Link from "next/link";
import Hero from "@/components/Hero";
import Breadcrumbs from "@/components/Breadcrumbs";
import Faq from "@/components/Faq";
import LeadSection from "@/components/LeadSection";
import NeedsData from "@/components/NeedsData";
import JsonLd from "@/components/JsonLd";
import { FACTS, SITE_URL } from "@/lib/site";

export const metadata = {
  title: { absolute: "Ліквідація ТОВ у Києві під ключ — від 12 000 ₴ | Weksar" },
  description:
    "Ліквідація і закриття ТОВ у Києві та області: класична, через зміну власника, з боргами. Строк від 2 днів до 2,5 місяця. Понад 10 років досвіду.",
  alternates: { canonical: "/likvidatsiia-tov" },
};

// Тексти етапів і способів — на юридичну перевірку Колі.
const METHODS = [
  {
    name: "Класична ліквідація",
    text: "Добровільна ліквідація за рішенням учасників через ліквідаційну комісію: розрахунки з кредиторами, перевірка ДПС, ліквідаційний баланс.",
    term: "від 2 місяців",
    price: null,
    href: null,
  },
  {
    name: "Альтернативна ліквідація",
    text: "Зміна учасників і директора: частка переходить новому власнику. Найшвидший спосіб, але юридично ТОВ продовжує існувати.",
    term: "від 2 днів",
    price: null,
    href: "/likvidatsiia-tov/alternatyvna",
  },
  {
    name: "З боргами і банкрутство",
    text: "Коли компанія має борги перед ДПС, банками чи контрагентами: аналіз ситуації і процедура за Кодексом з процедур банкрутства.",
    term: null,
    price: null,
    href: "/likvidatsiia-tov/z-borhamy",
  },
  {
    name: "Реорганізація",
    text: "Припинення ТОВ шляхом приєднання до іншої компанії або злиття з нею, з передачею прав і обовʼязків правонаступнику.",
    term: null,
    price: null,
    href: "/reorhanizatsiia-tov",
  },
];

const STAGES = [
  { t: "Рішення учасників", d: "Учасники ухвалюють рішення про ліквідацію і призначають ліквідаційну комісію." },
  { t: "Повідомлення реєстратора", d: "Рішення подається державному реєстратору, в ЄДР зʼявляється відмітка про припинення." },
  { t: "Вимоги кредиторів", d: "Строк для заявлення вимог кредиторами — не менше 2 місяців." },
  { t: "Перевірка ДПС і рахунки", d: "Податкова перевірка, розрахунки з бюджетом і контрагентами, закриття рахунків." },
  { t: "Ліквідаційний баланс", d: "Складання і затвердження ліквідаційного балансу, подання документів." },
  { t: "Запис про припинення", d: "Державний реєстратор вносить до ЄДР запис про припинення. Ви отримуєте виписку." },
];

const INCLUDED = [
  "Консультація і вибір способу — безкоштовно в межах послуги",
  "Підготовка рішень, протоколів і заяв",
  "Ліквідаційна звітність",
  "Подання документів державному реєстратору",
  "Контроль процедури до запису про припинення в ЄДР",
];

const HARD_CASES = [
  "Борги перед податковою, банками чи контрагентами",
  "ТОВ — платник ПДВ",
  "У компанії є працівники",
  "Є майно, відкриті рахунки або незавершені договори",
  "Кілька учасників, з якими важко домовитися",
  "Відкриті судові або виконавчі провадження",
];

const FAQ = [
  { q: "Скільки коштує ліквідація ТОВ?", a: `Від ${FACTS.liquidationFrom}. Ціна залежить від способу ліквідації і стану компанії: боргів, майна, працівників. Точну суму називаємо після короткого аналізу — у межах послуги він безкоштовний.` },
  { q: "Скільки триває ліквідація?", a: "Від 2 днів, якщо компанія переходить до нового власника, до 2,5 місяця для класичної ліквідації. Закон дає кредиторам щонайменше 2 місяці на заявлення вимог." },
  { q: "Чи можна ліквідувати ТОВ з боргами?", a: "Можна, але процедура залежить від того, кому і скільки винна компанія. Інколи потрібне банкрутство. Підберемо спосіб після аналізу ситуації." },
  { q: "Чи можна закрити ТОВ самостійно через Дію?", a: "Подати рішення про припинення через Дію можна. Але борги, ПДВ, працівники чи майно роблять процедуру складнішою, і помилки затягують її на місяці." },
  { q: "Ви працюєте лише з Києвом?", a: "Ми працюємо з компаніями з Києва і Київської області. Команда працює дистанційно." },
];

export default function LiquidationPage() {
  return (
    <>
      <Hero
        top={<Breadcrumbs items={[{ name: "Ліквідація ТОВ", href: "/likvidatsiia-tov" }]} />}
        eyebrow={FACTS.area}
        title="Ліквідація ТОВ у Києві"
        lead="Ліквідуємо ТОВ усіма законними способами: класична ліквідація, через зміну власника, з боргами або через банкрутство, реорганізація. Підбираємо спосіб під вашу ситуацію."
        facts={[
          { value: FACTS.liquidationFrom, label: "ціна, від" },
          { value: "від 2 днів", label: "до 2,5 місяця" },
          { value: FACTS.experience, label: "досвіду команди" },
        ]}
        cta="Ліквідація ТОВ"
      />

      {/* Способи */}
      <section className="py-16 sm:py-20">
        <div className="container-site">
          <p className="eyebrow text-amber-ink">4 способи</p>
          <h2 className="h2 mt-3">Способи ліквідації ТОВ</h2>
          <ul className="mt-10 grid gap-4 md:grid-cols-2">
            {METHODS.map((m) => (
              <li key={m.name} className="flex flex-col rounded-[var(--radius-card)] border border-line p-6">
                <h3 className="text-lg font-semibold">{m.name}</h3>
                <p className="mt-3 flex-1 text-muted">{m.text}</p>
                <dl className="mt-5 grid grid-cols-2 gap-3 border-t border-line pt-4 text-sm">
                  <div>
                    <dt className="text-muted">Строк</dt>
                    <dd className="mt-1 font-bold">{m.term || <NeedsData>строк</NeedsData>}</dd>
                  </div>
                  <div>
                    <dt className="text-muted">Ціна</dt>
                    <dd className="mt-1">{m.price ? <span className="price-chip">{m.price}</span> : <NeedsData>ціна</NeedsData>}</dd>
                  </div>
                </dl>
                {m.href && (
                  <Link href={m.href} className="mt-5 font-bold underline decoration-amber decoration-2 underline-offset-4">
                    Докладніше
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Етапи */}
      <section className="bg-mist py-16 sm:py-20">
        <div className="container-site">
          <h2 className="h2">Етапи класичної ліквідації</h2>
          <ol className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {STAGES.map((s, i) => (
              <li key={s.t} className="border-t-2 border-graphite pt-5">
                <span className="font-display text-sm font-bold text-amber-ink tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                <p className="mt-2 text-lg font-bold">{s.t}</p>
                <p className="mt-2 text-muted">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Що входить + коли не через Дію */}
      <section className="py-16 sm:py-20">
        <div className="container-site grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="h2">Що входить у послугу</h2>
            <ul className="mt-8 space-y-4">
              {INCLUDED.map((x) => (
                <li key={x} className="flex gap-3">
                  <span aria-hidden className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-sm bg-amber" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[var(--radius-card)] bg-graphite p-7 text-on-dark sm:p-9">
            <h2 className="font-display text-[1.35rem] leading-tight font-semibold">Коли самостійно через Дію не вийде</h2>
            <p className="mt-3 text-on-dark-muted">Ці обставини роблять ліквідацію складнішою, і помилка може затягнути її на місяці:</p>
            <ul className="mt-6 space-y-3">
              {HARD_CASES.map((x) => (
                <li key={x} className="flex gap-3">
                  <span aria-hidden className="text-amber">—</span>
                  <span>{x}</span>
                </li>
              ))}
            </ul>
            <a href="#zaiavka" className="btn-primary mt-8">Розібрати мою ситуацію</a>
          </div>
        </div>
      </section>

      <Faq items={FAQ} title="Питання про ліквідацію ТОВ" />
      <LeadSection title="Розкажіть про ваше ТОВ" cta="Ліквідація ТОВ" />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Ліквідація ТОВ",
          serviceType: "Ліквідація товариства з обмеженою відповідальністю",
          url: `${SITE_URL}/likvidatsiia-tov`,
          areaServed: [
            { "@type": "City", name: "Київ" },
            { "@type": "AdministrativeArea", name: "Київська область" },
          ],
          provider: { "@type": "LegalService", name: "Weksar", url: SITE_URL },
          offers: { "@type": "Offer", priceCurrency: "UAH", price: "12000", description: "Ціна від 12 000 грн" },
        }}
      />
    </>
  );
}
