import LeadForm from "./LeadForm";
import { CONTACTS } from "@/lib/site";
import { t } from "@/lib/i18n";

export default function LeadSection({ title, text, cta = "", locale = "uk" }) {
  const d = t(locale);
  return (
    <section id="zaiavka" className="scroll-mt-4 bg-graphite py-16 text-on-dark sm:py-20">
      <div className="container-site grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="h2">{title || d.leadTitle}</h2>
          <p className="mt-4 max-w-[52ch] text-on-dark-muted">
            {text || d.leadText}
          </p>
          <div className="mt-8 space-y-2">
            <a href={CONTACTS.phoneHref} className="block font-display text-2xl font-semibold text-amber">{CONTACTS.phoneDisplay}</a>
            <p className="text-sm text-on-dark-muted">
              {CONTACTS.messengers.map((m, i) => (
                <span key={m.name}>
                  {i > 0 && " · "}
                  <a href={m.href} target="_blank" rel="noreferrer" className="underline-offset-4 hover:text-on-dark hover:underline">{m.name}</a>
                </span>
              ))}
            </p>
          </div>
        </div>
        <div className="rounded-[var(--radius-card)] bg-paper p-6 text-ink sm:p-8">
          <LeadForm cta={cta} locale={locale} />
        </div>
      </div>
    </section>
  );
}
