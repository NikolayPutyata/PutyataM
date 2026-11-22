import Hero from "@/components/Hero";
import Breadcrumbs from "@/components/Breadcrumbs";
import Faq from "@/components/Faq";
import LeadSection from "@/components/LeadSection";
import NeedsData from "@/components/NeedsData";
import JsonLd from "@/components/JsonLd";
import { FACTS, SITE_URL } from "@/lib/site";

export const metadata = {
  title: { absolute: "Тендерний супровід під ключ: участь у Prozorro | Weksar" },
  description:
    "Тендерний супровід для малих і середніх компаній: оцінка можливостей, підготовка пропозиції, участь у Prozorro, супровід договору.",
  alternates: { canonical: "/tendernyi-suprovid" },
};

// Тексти — на перевірку Колі. Терміни — за Законом України «Про публічні закупівлі».
const FOR_WHOM = [
  "У вас є досвід, люди й ресурси, щоб виконувати замовлення",
  "Ви ще не брали участі в тендерах або вже отримували відмови",
  "У компанії немає власного тендерного спеціаліста",
  "Ви — ТОВ або ФОП малого чи середнього бізнесу",
];

const STAGES = [
  {
    t: "Оцінка можливостей",
    d: "Аналізуємо документи, досвід і ресурси компанії. Визначаємо, у яких закупівлях і в яких замовників у вас реальні шанси.",
  },
  {
    t: "Підготовка до участі",
    d: "КЕП, реєстрація на авторизованому електронному майданчику, пакет документів для підтвердження кваліфікаційних критеріїв.",
  },
  {
    t: "Участь у закупівлях",
    d: "Пошук тендерів, аналіз тендерної документації, підготовка і подання тендерної пропозиції, забезпечення тендерної пропозиції.",
  },
  {
    t: "Після перемоги",
    d: "Укладення договору про закупівлю, супровід виконання, зміни до договору, документи для замовника.",
  },
];

const REJECTIONS = [
  "Невідповідність кваліфікаційним критеріям",
  "Відсутні або неправильно оформлені документи",
  "Пропозиція не відповідає технічній специфікації",
  "Помилки з кваліфікованим електронним підписом",
  "Неправильно оформлене забезпечення тендерної пропозиції",
];

const FAQ = [
  { q: "Ми ще не брали участі в тендерах. З чого почати?", a: "З оцінки можливостей компанії: документи, досвід, ресурси. Після неї зрозуміло, які закупівлі вам підходять і що потрібно підготувати до першої участі." },
  { q: "Чи потрібен досвід участі в тендерах?", a: "Ні. Послуга створена саме для компаній, які мають ресурси виконувати замовлення, але ще не працювали з тендерним ринком." },
  { q: "Скільки коштує тендерний супровід?", a: "Залежить від формату співпраці і кількості закупівель. Ціну називаємо після оцінки можливостей компанії." },
  { q: "Ви гарантуєте перемогу в тендері?", a: "Ні, і чесно про це говоримо: переможця визначає замовник за критеріями оцінки. Ми готуємо пропозицію без формальних помилок і підбираємо закупівлі, де у вас реальні шанси." },
  { q: "Що відбувається після перемоги?", a: "Супроводжуємо укладення договору про закупівлю і його виконання: зміни до договору, документи для замовника, спірні ситуації." },
];

export default function TenderPage() {
  return (
    <>
      <Hero
        top={<Breadcrumbs items={[{ name: "Тендерний супровід", href: "/tendernyi-suprovid" }]} />}
        eyebrow="Публічні закупівлі · Prozorro"
        title="Тендерний супровід під ключ"
        lead="Для молодих і середніх компаній, які мають ресурси виконувати замовлення, але ще не працюють з тендерами. Ведемо повний цикл: від оцінки можливостей до виконання договору про закупівлю."
        facts={[
          { value: "4 етапи", label: "від оцінки до договору" },
          { value: FACTS.experience, label: "досвіду команди" },
          { value: "Prozorro", label: "електронні закупівлі" },
        ]}
        cta="Тендерний супровід"
      />

      {/* Для кого */}
      <section className="py-16 sm:py-20">
        <div className="container-site grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="eyebrow text-amber-ink">Для кого</p>
            <h2 className="h2 mt-3">Ви готові працювати з державою, але ще не на тендерному ринку</h2>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {FOR_WHOM.map((x) => (
              <li key={x} className="rounded-[var(--radius-card)] border border-line p-5 font-semibold">
                <span aria-hidden className="mb-3 block h-1 w-8 rounded bg-amber" />
                {x}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Повний цикл */}
      <section className="bg-mist py-16 sm:py-20">
        <div className="container-site">
          <h2 className="h2">Повний цикл — 4 етапи</h2>
          <ol className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
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

      {/* Причини відхилення + формати */}
      <section className="py-16 sm:py-20">
        <div className="container-site grid gap-12 lg:grid-cols-2">
          <div className="rounded-[var(--radius-card)] bg-graphite p-7 text-on-dark sm:p-9">
            <h2 className="font-display text-[1.35rem] leading-tight font-semibold">Чому тендерні пропозиції відхиляють</h2>
            <p className="mt-3 text-on-dark-muted">Пропозицію можуть відхилити не через ціну, а через формальні помилки. Саме їх ми прибираємо до подання:</p>
            <ul className="mt-6 space-y-3">
              {REJECTIONS.map((x) => (
                <li key={x} className="flex gap-3">
                  <span aria-hidden className="text-amber">—</span>
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="h2">Формати співпраці</h2>
            <p className="mt-4 text-muted">Обираємо формат після оцінки можливостей компанії.</p>
            <dl className="mt-8 divide-y divide-line border-y border-line">
              {["Супровід однієї закупівлі", "Постійний супровід (абонемент)", "Оцінка можливостей компанії"].map((f) => (
                <div key={f} className="flex flex-wrap items-center justify-between gap-3 py-4">
                  <dt className="font-semibold">{f}</dt>
                  <dd><NeedsData>чи є такий формат і ціна</NeedsData></dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-sm text-muted">Географія: <NeedsData>уся Україна дистанційно?</NeedsData></p>
          </div>
        </div>
      </section>

      <Faq items={FAQ} title="Питання про тендерний супровід" />
      <LeadSection
        title="Оцінимо можливості вашої компанії"
        text="Залиште телефон — розпитаємо про компанію, досвід і ресурси, і скажемо, з яких закупівель варто почати. Консультація в межах послуги безкоштовна."
        cta="Тендерний супровід"
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Тендерний супровід",
          serviceType: "Супровід участі в публічних закупівлях",
          url: `${SITE_URL}/tendernyi-suprovid`,
          provider: { "@type": "LegalService", name: "Weksar", url: SITE_URL },
        }}
      />
    </>
  );
}
