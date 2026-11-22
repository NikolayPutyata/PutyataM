import Breadcrumbs from "@/components/Breadcrumbs";
import ArticleCard from "@/components/ArticleCard";
import LeadSection from "@/components/LeadSection";
import { blogFor } from "@/lib/blog";
import { t } from "@/lib/i18n";

// Список статей блогу (uk або en).
export default function BlogIndex({ locale = "uk" }) {
  const { articles, base } = blogFor(locale);
  const b = t(locale).blog;
  const sorted = [...articles].sort((x, y) => y.date.localeCompare(x.date));
  return (
    <>
      <section className="bg-graphite text-on-dark">
        <div className="container-site pt-7 pb-10 sm:pt-12">
          <Breadcrumbs items={[{ name: b.title, href: base }]} locale={locale} />
          <h1 className="mt-5 text-[1.85rem] leading-[1.12] font-bold sm:text-[2.6rem]">{b.title}</h1>
          <p className="mt-4 max-w-[58ch] text-on-dark-muted">{b.lead}</p>
        </div>
      </section>
      <section className="py-14">
        <ul className="container-site grid gap-4 md:grid-cols-2">
          {sorted.map((a) => <li key={a.slug}><ArticleCard a={a} locale={locale} /></li>)}
        </ul>
      </section>
      <LeadSection locale={locale} cta={locale === "en" ? "EN: Blog" : undefined} />
    </>
  );
}
