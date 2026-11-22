import Hero from "./Hero";
import Breadcrumbs from "./Breadcrumbs";
import Faq from "./Faq";
import LeadSection from "./LeadSection";
import JsonLd from "./JsonLd";
import ContactsBlock from "./ContactsBlock";
import ArticlesBlock from "./ArticlesBlock";
import { Audience, Cards, Highlight, PriceList, Prose, Related, Split, Stats, Steps } from "./sections";
import { SITE_URL } from "@/lib/site";

const BLOCKS = { cards: Cards, steps: Steps, split: Split, prices: PriceList, audience: Audience, prose: Prose, highlight: Highlight, related: Related, contacts: ContactsBlock, stats: Stats };

const AREAS = {
  kyiv: [
    { "@type": "City", name: "Київ" },
    { "@type": "AdministrativeArea", name: "Київська область" },
  ],
  ukraine: [{ "@type": "Country", name: "Україна" }],
  kyiv_en: [
    { "@type": "City", name: "Kyiv" },
    { "@type": "AdministrativeArea", name: "Kyiv Oblast" },
  ],
  ukraine_en: [{ "@type": "Country", name: "Ukraine" }],
};

// Сторінка послуги, зібрана з даних (web/content/*).
export default function ServicePage({ page }) {
  const crumbs = page.breadcrumbs;
  const locale = page.locale || "uk";
  return (
    <>
      <Hero top={<Breadcrumbs items={crumbs} locale={locale} />} cta={page.cta} locale={locale} {...page.hero} />
      {page.sections.map((s, i) => {
        const Block = BLOCKS[s.type];
        return <Block key={i} locale={locale} {...s} />;
      })}
      {locale === "uk" && <ArticlesBlock path={page.path} />}
      {page.faq && <Faq items={page.faq} title={page.faqTitle} locale={locale} />}
      <LeadSection title={page.lead?.title} text={page.lead?.text} cta={page.cta} locale={locale} />
      {page.schema && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Service",
            name: page.schema.name,
            serviceType: page.schema.serviceType,
            url: `${SITE_URL}/${page.path}`,
            areaServed: AREAS[`${page.schema.area || "kyiv"}${locale === "en" ? "_en" : ""}`],
            provider: { "@type": "LegalService", name: "Weksar", url: SITE_URL },
            ...(page.schema.price && { offers: { "@type": "Offer", priceCurrency: "UAH", price: page.schema.price } }),
          }}
        />
      )}
    </>
  );
}
