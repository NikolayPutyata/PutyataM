import JsonLd from "./JsonLd";
import { t } from "@/lib/i18n";

// FAQ на <details>: без JS, з розміткою FAQPage.
export default function Faq({ items, title, locale = "uk" }) {
  title = title || t(locale).faq;
  return (
    <section className="bg-paper py-16 sm:py-20">
      <div className="container-site grid gap-8 lg:grid-cols-[1fr_2fr]">
        <h2 className="h2">{title}</h2>
        <div className="divide-y divide-line border-y border-line">
          {items.map((q) => (
            <details key={q.q} className="group py-5">
              <summary className="flex items-start justify-between gap-6 text-[1.05rem] font-bold">
                {q.q}
                <span aria-hidden className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-mist text-sm transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 max-w-[65ch] text-muted">{q.a}</p>
            </details>
          ))}
        </div>
      </div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: items.map((q) => ({ "@type": "Question", name: q.q, acceptedAnswer: { "@type": "Answer", text: q.a } })),
        }}
      />
    </section>
  );
}
