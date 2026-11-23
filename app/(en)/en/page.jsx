import Link from "@/components/SiteLink";
import Hero from "@/components/Hero";
import Faq from "@/components/Faq";
import LeadSection from "@/components/LeadSection";
import JsonLd from "@/components/JsonLd";
import { Stats } from "@/components/sections";
import { CATALOG_EN, CONTACTS, FACTS_EN, SITE_URL, STATS_EN } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Weksar — company registration and liquidation in Ukraine",
  description: "Company registration, tender support, licenses and accounting across Ukraine; LLC changes and liquidation in Kyiv. 10+ years of experience.",
  path: "en",
});

const OFFERS = [
  { title: "Company registration", href: "/en/company-registration-ukraine", facts: ["LLC from UAH 2,500", "sole proprietor UAH 1,000"], price: "from UAH 1,000" },
  { title: "LLC liquidation", href: "/en/llc-liquidation-ukraine", facts: ["from UAH 20,000", "from 2 days"], price: "from UAH 20,000" },
  { title: "Tender support", href: "/en/tender-support-ukraine", facts: ["all of Ukraine", "from UAH 3,000"], price: "from UAH 3,000" },
  { title: "Licenses", href: "/en/business-licenses-ukraine", facts: ["from UAH 9,000", "+ state fee"], price: "from UAH 9,000" },
];

const WHY = [
  { t: "10+ years of experience", d: "Every member of the team has extensive hands-on experience." },
  { t: "All of Ukraine", d: "Most services — across Ukraine. In Kyiv and the Kyiv region we meet clients in person and accompany them to the notary for LLC changes and liquidation." },
  { t: "Open prices", d: "A “from” price for every service, right on the website." },
  { t: "One team", d: "Lawyers, accountants and translators; a notary and an attorney as partners." },
];

const FAQ = [
  { q: "Do you work with foreigners?", a: "Yes. We help foreign founders with company registration, tax numbers, residence and work permits, translations and notarization." },
  { q: "Is the consultation free?", a: "Yes, if you order a service — the consultation is included. A separate legal consultation costs UAH 2,000 per hour." },
  { q: "Where do you work?", a: "Most services — registration, licenses, tender support, accounting, contracts — across Ukraine. LLC changes and liquidation and notary services — in Kyiv and the Kyiv region, where an in-person visit to the notary is required." },
];

export default function HomeEn() {
  return (
    <>
      <Hero locale="en" eyebrow="10+ years of experience" title="Company registration and liquidation, tenders and licenses in Ukraine" slogan={FACTS_EN.slogan} offers={OFFERS} />
      <section className="py-16 sm:py-20">
        <div className="container-site grid gap-10 lg:grid-cols-[1fr_2fr]">
          <h2 className="h2">Why Weksar</h2>
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
      <Stats items={STATS_EN} />
      <section id="services" className="scroll-mt-4 bg-mist py-16 sm:py-20">
        <div className="container-site">
          <h2 className="h2">All services</h2>
          <div className="mt-10 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {CATALOG_EN.map((g) => (
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
          <Link href="/en/prices" className="btn-ghost-light mt-10 w-full sm:w-auto">All prices</Link>
        </div>
      </section>
      <Faq items={FAQ} locale="en" />
      <LeadSection locale="en" cta="EN: Home" />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "LegalService", name: "Weksar", url: `${SITE_URL}/en`, telephone: CONTACTS.phoneHref.replace("tel:", ""), areaServed: [{ "@type": "City", name: "Kyiv" }, { "@type": "Country", name: "Ukraine" }] }} />
    </>
  );
}
