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
};

// Сторінка послуги, зібрана з даних (web/content/*).
export default function ServicePage({ page }) {
  const crumbs = page.breadcrumbs;
  return (
    <>
      <Hero top={<Breadcrumbs items={crumbs} />} cta={page.cta} {...page.hero} />
      {page.sections.map((s, i) => {
        const Block = BLOCKS[s.type];
        return <Block key={i} {...s} />;
      })}
      <ArticlesBlock path={page.path} />
      {page.faq && <Faq items={page.faq} title={page.faqTitle} />}
      <LeadSection title={page.lead?.title} text={page.lead?.text} cta={page.cta} />
      {page.schema && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Service",
            name: page.schema.name,
            serviceType: page.schema.serviceType,
            url: `${SITE_URL}/${page.path}`,
            areaServed: AREAS[page.schema.area || "kyiv"],
            provider: { "@type": "LegalService", name: "Weksar", url: SITE_URL },
            ...(page.schema.price && { offers: { "@type": "Offer", priceCurrency: "UAH", price: page.schema.price } }),
          }}
        />
      )}
    </>
  );
}
