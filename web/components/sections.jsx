import Link from "next/link";
import NeedsData from "./NeedsData";
import { t } from "@/lib/i18n";

// Блоки сторінок послуг. Кожен блок отримує дані з web/content/*.

const Price = ({ value, locale }) => (value ? <span className="price-chip">{value}</span> : <NeedsData locale={locale}>ціна</NeedsData>);

function SectionHead({ eyebrow, title, intro }) {
  return (
    <>
      {eyebrow && <p className="eyebrow text-amber-ink">{eyebrow}</p>}
      <h2 className={`h2 ${eyebrow ? "mt-3" : ""} max-w-3xl`}>{title}</h2>
      {intro && <p className="mt-4 max-w-[65ch] text-muted">{intro}</p>}
    </>
  );
}

// Картки (способи, варіанти, формати) з необовʼязковими строком, ціною і посиланням
export function Cards({ eyebrow, title, intro, items, columns = 2, locale = "uk" }) {
  const d = t(locale);
  return (
    <section className="py-16 sm:py-20">
      <div className="container-site">
        <SectionHead eyebrow={eyebrow} title={title} intro={intro} />
        <ul className={`mt-10 grid gap-4 md:grid-cols-2 ${columns === 3 ? "lg:grid-cols-3" : ""}`}>
          {items.map((m) => (
            <li key={m.name} className="flex flex-col rounded-[var(--radius-card)] border border-line p-6">
              <h3 className="text-lg font-semibold">{m.name}</h3>
              <p className="mt-3 flex-1 text-muted">{m.text}</p>
              {(m.term !== undefined || m.price !== undefined) && (
                <dl className="mt-5 grid grid-cols-2 gap-3 border-t border-line pt-4 text-sm">
                  {m.term !== undefined && (
                    <div>
                      <dt className="text-muted">{d.term}</dt>
                      <dd className="mt-1 font-bold">{m.term || <NeedsData locale={locale}>строк</NeedsData>}</dd>
                    </div>
                  )}
                  {m.price !== undefined && (
                    <div>
                      <dt className="text-muted">{d.price}</dt>
                      <dd className="mt-1"><Price value={m.price} locale={locale} /></dd>
                    </div>
                  )}
                </dl>
              )}
              {m.href && (
                <Link href={m.href} className="mt-5 font-bold underline decoration-amber decoration-2 underline-offset-4">
                  {d.more}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// Нумеровані етапи (реальна послідовність)
export function Steps({ title, intro, items, tone = "mist" }) {
  return (
    <section className={`${tone === "mist" ? "bg-mist" : ""} py-16 sm:py-20`}>
      <div className="container-site">
        <SectionHead title={title} intro={intro} />
        <ol className={`mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2 ${items.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
          {items.map((s, i) => (
            <li key={s.t} className="border-t-2 border-graphite pt-5">
              <span className="font-display text-sm font-bold text-amber-ink tabular-nums">{String(i + 1).padStart(2, "0")}</span>
              <p className="mt-2 text-lg font-bold">{s.t}</p>
              <p className="mt-2 text-muted">{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

// Два стовпці: світлий список (що входить) + темна картка (складні випадки / ризики)
export function Split({ left, right, locale = "uk" }) {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-site grid gap-12 lg:grid-cols-2">
        <div>
          <h2 className="h2">{left.title}</h2>
          {left.intro && <p className="mt-4 text-muted">{left.intro}</p>}
          <ul className="mt-8 space-y-4">
            {left.items.map((x) => (
              <li key={x} className="flex gap-3">
                <span aria-hidden className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-sm bg-amber" />
                <span>{x}</span>
              </li>
            ))}
          </ul>
          {left.note && <p className="mt-6 rounded-[var(--radius-card)] bg-sand px-5 py-4 font-semibold">{left.note}</p>}
        </div>
        <div className="rounded-[var(--radius-card)] bg-graphite p-7 text-on-dark sm:p-9">
          <h2 className="font-display text-[1.35rem] leading-tight font-semibold">{right.title}</h2>
          {right.intro && <p className="mt-3 text-on-dark-muted">{right.intro}</p>}
          <ul className="mt-6 space-y-3">
            {right.items.map((x) => (
              <li key={x} className="flex gap-3">
                <span aria-hidden className="text-amber">—</span>
                <span>{x}</span>
              </li>
            ))}
          </ul>
          <a href="#zaiavka" className="btn-primary mt-8">{right.cta || t(locale).sortOut}</a>
        </div>
      </div>
    </section>
  );
}

// Таблиця цін / форматів
export function PriceList({ title, intro, items, note, tone = "mist", locale = "uk" }) {
  return (
    <section className={`${tone === "mist" ? "bg-mist" : ""} py-16 sm:py-20`}>
      <div className="container-site grid gap-10 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <SectionHead title={title} intro={intro} />
        </div>
        <div>
          <dl className="divide-y divide-line border-y border-line bg-paper px-5 sm:px-6">
            {items.map((r) => (
              <div key={r.name} className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 py-4">
                <dt>
                  {r.href ? (
                    <Link href={r.href} className="font-semibold underline decoration-line decoration-2 underline-offset-4 hover:decoration-amber">{r.name}</Link>
                  ) : (
                    <span className="font-semibold">{r.name}</span>
                  )}
                  {r.text && <span className="block text-sm text-muted">{r.text}</span>}
                </dt>
                <dd><Price value={r.price} locale={locale} /></dd>
              </div>
            ))}
          </dl>
          {note && <p className="mt-4 text-sm text-muted">{note}</p>}
        </div>
      </div>
    </section>
  );
}

// Список-«для кого» картками
export function Audience({ eyebrow, title, items }) {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-site grid gap-10 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <SectionHead eyebrow={eyebrow} title={title} />
        </div>
        <ul className="grid gap-4 sm:grid-cols-2">
          {items.map((x) => (
            <li key={x} className="rounded-[var(--radius-card)] border border-line p-5 font-semibold">
              <span aria-hidden className="mb-3 block h-1 w-8 rounded bg-amber" />
              {x}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// Текстовий блок для глибини сторінки (пояснення, порівняння)
export function Prose({ title, paragraphs, tone }) {
  return (
    <section className={`${tone === "mist" ? "bg-mist" : ""} py-16 sm:py-20`}>
      <div className="container-site grid gap-8 lg:grid-cols-[1fr_2fr]">
        <h2 className="h2">{title}</h2>
        <div className="max-w-[68ch] space-y-4 text-[1.05rem]">
          {paragraphs.map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

// Кейс / приклад результату
export function Highlight({ label, text }) {
  return (
    <section className="py-6">
      <div className="container-site">
        <div className="rounded-[var(--radius-card)] bg-sand px-6 py-6 sm:px-8">
          <p className="eyebrow text-amber-ink">{label}</p>
          <p className="mt-2 font-display text-xl font-semibold sm:text-2xl">{text}</p>
        </div>
      </div>
    </section>
  );
}

// Суміжні послуги (внутрішня перелінковка)
export function Related({ title, items, locale = "uk" }) {
  title = title || t(locale).related;
  return (
    <section className="border-t border-line py-14">
      <div className="container-site">
        <h2 className="font-display text-xl font-semibold">{title}</h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((r) => (
            <li key={r.href}>
              <Link href={r.href} className="group flex items-center justify-between gap-4 rounded-[var(--radius-card)] border border-line px-5 py-4 hover:border-graphite">
                <span>
                  <span className="block font-semibold">{r.name}</span>
                  {r.price && <span className="text-sm text-muted">{r.price}</span>}
                </span>
                <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// Цифри (статистика) на темному тлі
export function Stats({ items }) {
  return (
    <section className="bg-graphite py-14 text-on-dark">
      <dl className="container-site grid grid-cols-2 gap-8 lg:grid-cols-4">
        {items.map((s) => (
          <div key={s.label}>
            <dt className="sr-only">{s.label}</dt>
            <dd className="font-display text-[2rem] font-bold text-amber tabular-nums sm:text-[2.6rem]">{s.value}</dd>
            <dd className="mt-1 text-on-dark-muted">{s.label}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
