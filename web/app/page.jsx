import Link from "next/link";
import Hero from "@/components/Hero";
import Faq from "@/components/Faq";
import LeadSection from "@/components/LeadSection";
import JsonLd from "@/components/JsonLd";
import { CATALOG, CONTACTS, FACTS, PRIMARY_SERVICES, SITE_URL, STATS, TOP_SERVICES } from "@/lib/site";

export const metadata = {
  title: { absolute: "Weksar — реєстрація і ліквідація ТОВ, тендери, ліцензії" },
  description:
    "Реєстрація ТОВ і ФОП, ліквідація ТОВ від 20 000 грн, тендерний супровід у Prozorro, ліцензії. Понад 10 років досвіду. Ціни на сайті.",
  alternates: { canonical: "/" },
};

const STEPS = [
  { t: "Заявка або дзвінок", d: "Залишаєте телефон на сайті або пишете в месенджер." },
  { t: "Аналіз ситуації", d: "Ставимо кілька питань, пропонуємо спосіб вирішення, називаємо ціну і строк. У межах послуги — безкоштовно." },
  { t: "Договір і документи", d: "Укладаємо договір, готуємо всі рішення, заяви і звітність." },
  { t: "Результат у реєстрі", d: "Подаємо документи і доводимо справу до запису в державному реєстрі." },
];

const WHY = [
  { t: "Понад 10 років досвіду", d: "Кожен у команді має великий практичний досвід у своїй сфері." },
  { t: "Київ і Київська область", d: "Працюємо з бізнесом столиці та області." },
  { t: "Особисті зустрічі", d: "Зустрічаємося з клієнтами особисто і супроводжуємо у нотаріуса. Тендерний супровід — по всій Україні." },
  { t: "Відкриті ціни", d: "Ціна «від» на кожну послугу — прямо на сайті, без «розрахуйте вартість»." },
];

const FAQ = [
  { q: "Скільки коштує ліквідація ТОВ?", a: `Від ${FACTS.liquidationFrom}. Остаточна ціна залежить від способу ліквідації і стану компанії. Її називаємо після короткого аналізу, який у межах послуги безкоштовний.` },
  { q: "Скільки часу займає ліквідація?", a: "Від 2 днів, якщо ТОВ переходить до нового власника, до 2,5 місяця для класичної ліквідації через ліквідаційну комісію." },
  { q: "Ми ще не брали участь у тендерах. З чого почати?", a: "З оцінки можливостей: дивимося на документи, досвід і ресурси компанії, підбираємо замовників і тендери, які вам реально підходять, і супроводжуємо до укладення та виконання договору." },
  { q: "Консультація безкоштовна?", a: "Так, якщо ви замовляєте послугу: консультація входить у неї. Окрема консультація юриста коштує 2 000 грн за годину." },
  { q: "Де ви працюєте?", a: "Ліквідація, зміни, ліцензії та інші послуги — для бізнесу Києва і Київської області, з особистими зустрічами і супроводом у нотаріуса. Тендерний супровід — по всій Україні." },
];

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow="Понад 10 років досвіду"
        title="Реєстрація і ліквідація бізнесу, тендери та ліцензії"
        slogan={FACTS.slogan}
        offers={PRIMARY_SERVICES}
      />

      {/* Головні послуги */}
      <section className="py-16 sm:py-20">
        <div className="container-site">
          <p className="eyebrow text-amber-ink">Головні послуги</p>
          <h2 className="h2 mt-3 max-w-2xl">Відкриваємо, закриваємо, ліцензуємо і виводимо на тендери</h2>
          <ul className="mt-10 grid gap-4 md:grid-cols-2">
            {PRIMARY_SERVICES.map((s) => (
              <li key={s.href}>
                <Link href={s.href} className="group flex h-full flex-col rounded-[var(--radius-card)] bg-graphite p-7 text-on-dark sm:p-8">
                  <span className="font-display text-2xl font-semibold">{s.title}</span>
                  <span className="mt-3 flex-1 text-on-dark-muted">{s.text}</span>
                  <span className="mt-6 flex items-center justify-between gap-4">
                    <span className="flex flex-wrap gap-2">
                      {s.facts.map((f) => <span key={f} className="rounded-[var(--radius-chip)] bg-amber px-2.5 py-1 text-sm font-bold text-graphite">{f}</span>)}
                    </span>
                    <span aria-hidden className="text-2xl text-amber transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <ul className="mt-4 grid gap-4 md:grid-cols-3">
            {TOP_SERVICES.map((s) => (
              <li key={s.href}>
                <Link href={s.href} className="group flex h-full flex-col rounded-[var(--radius-card)] border border-line bg-paper p-6 transition-shadow hover:shadow-[0_10px_30px_-12px_rgba(20,22,26,0.25)]">
                  <span className="font-display text-xl font-semibold">{s.title}</span>
                  <span className="mt-3 flex-1 text-muted">{s.text}</span>
                  <span className="mt-6 flex items-center justify-between">
                    <span className="price-chip">{s.price}</span>
                    <span aria-hidden className="text-xl transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Усі послуги */}
      <section id="poslugy" className="scroll-mt-4 bg-mist py-16 sm:py-20">
        <div className="container-site">
          <h2 className="h2">Усі послуги</h2>
          <div className="mt-10 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {CATALOG.map((g) => (
              <div key={g.group}>
                <p className="eyebrow text-muted">{g.group}</p>
                <ul className="mt-4 divide-y divide-line border-y border-line">
                  {g.items.map((i) => (
                    <li key={i.href}>
                      <Link href={i.href} className="flex items-baseline justify-between gap-3 py-3 hover:text-amber-ink">
                        <span className="font-semibold">{i.name}</span>
                        {i.price && <span className="shrink-0 text-sm text-muted tabular-nums">{i.price}</span>}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <Link href="/tsiny" className="btn-ghost-light mt-10">Усі ціни</Link>
        </div>
      </section>

      {/* Як ми працюємо */}
      <section className="py-16 sm:py-20">
        <div className="container-site">
          <h2 className="h2">Як ми працюємо</h2>
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <li key={s.t} className="border-t-2 border-graphite pt-5">
                <span className="font-display text-sm font-bold text-amber-ink tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                <p className="mt-2 text-lg font-bold">{s.t}</p>
                <p className="mt-2 text-muted">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Цифри */}
      <section className="bg-graphite py-14 text-on-dark">
        <dl className="container-site grid grid-cols-2 gap-8 lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label}>
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-display text-[2rem] font-bold text-amber tabular-nums sm:text-[2.6rem]">{s.value}</dd>
              <dd className="mt-1 text-on-dark-muted">{s.label}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Чому Weksar */}
      <section className="py-16 sm:py-20">
        <div className="container-site grid gap-10 lg:grid-cols-[1fr_2fr]">
          <div>
            <h2 className="h2">Чому Weksar</h2>
            <p className="mt-4 font-display text-lg text-amber-ink">{FACTS.slogan}</p>
          </div>
          <ul className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {WHY.map((w) => (
              <li key={w.t}>
                <p className="text-lg font-bold">{w.t}</p>
                <p className="mt-2 text-muted">{w.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Faq items={FAQ} />
      <LeadSection />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "LegalService",
          name: "Weksar",
          url: SITE_URL,
          telephone: CONTACTS.phoneHref.replace("tel:", ""),
          slogan: FACTS.slogan,
          areaServed: [
            { "@type": "City", name: "Київ" },
            { "@type": "AdministrativeArea", name: "Київська область" },
          ],
        }}
      />
    </>
  );
}
