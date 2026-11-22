import Link from "next/link";
import LeadForm from "./LeadForm";
import { CONTACTS } from "@/lib/site";
import { t } from "@/lib/i18n";

// Темний перший екран: заголовок, факти або дві головні пропозиції, кнопки; на десктопі — форма праворуч.
export default function Hero({ eyebrow, title, lead, slogan, facts = null, offers = null, note = "", top = null, cta = "", locale = "uk" }) {
  const d = t(locale);
  return (
    <section className="bg-graphite text-on-dark">
      <div className="container-site grid gap-10 pt-7 pb-12 sm:pt-12 lg:grid-cols-[1.25fr_1fr] lg:items-start lg:gap-14 lg:pb-20">
        <div>
          {top}
          <p className={`eyebrow text-amber ${top ? "mt-5" : ""}`}>{eyebrow}</p>
          <h1 className="mt-4 text-[1.85rem] leading-[1.12] font-bold sm:text-[2.6rem] lg:text-[3.1rem]">{title}</h1>
          {slogan && <p className="mt-4 text-on-dark-muted">{slogan}</p>}
          {lead && <p className="mt-4 max-w-[58ch] text-[1.05rem] text-on-dark-muted">{lead}</p>}
          {offers && (
            <ul className="mt-7 grid grid-cols-2 gap-2 sm:gap-3">
              {offers.map((o) => (
                <li key={o.href}>
                  <Link href={o.href} className="group flex h-full flex-col rounded-[var(--radius-card)] border border-graphite-line bg-graphite-2 p-3 transition-colors hover:border-amber sm:p-5">
                    <span className="flex items-start justify-between gap-2 font-display text-[0.88rem] leading-snug font-semibold sm:text-[1.1rem]">
                      {o.title}
                      <span aria-hidden className="text-amber transition-transform group-hover:translate-x-1">→</span>
                    </span>
                    <span className="mt-2 flex flex-col gap-0.5 text-[0.78rem] font-bold text-amber sm:flex-row sm:flex-wrap sm:gap-x-3 sm:text-sm">
                      {o.facts.map((f) => <span key={f}>{f}</span>)}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
          {note && <p className="mt-4 text-sm text-on-dark-muted">{note}</p>}
          {facts && (
          <dl className="mt-7 grid grid-cols-3 gap-2 sm:gap-3">
            {facts.map((f) => (
              <div key={f.label} className="rounded-[var(--radius-card)] border border-graphite-line bg-graphite-2 px-2.5 py-3 sm:px-4">
                <dt className="sr-only">{f.label}</dt>
                <dd className="font-display text-[0.8rem] font-semibold whitespace-nowrap text-amber tabular-nums min-[400px]:text-[0.88rem] sm:text-[1.25rem]">{f.value}</dd>
                <dd className="mt-1 text-[0.72rem] leading-tight text-on-dark-muted sm:text-[0.8rem]">{f.label}</dd>
              </div>
            ))}
          </dl>
          )}
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#zaiavka" className="btn-primary">{d.getConsult}</a>
            <a href={CONTACTS.messengers[0].href} target="_blank" rel="noreferrer" className="btn-ghost-dark">{d.writeTelegram}</a>
          </div>
        </div>
        <div className="hidden rounded-[var(--radius-card)] border border-graphite-line bg-graphite-2 p-7 lg:block">
          <p className="font-display text-lg font-semibold">{d.heroFormTitle}</p>
          <p className="mt-2 mb-5 text-sm text-on-dark-muted">{d.heroFormText}</p>
          <LeadForm dark withMessage={false} cta={cta} locale={locale} />
        </div>
      </div>
    </section>
  );
}
