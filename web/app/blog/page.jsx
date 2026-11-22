import Breadcrumbs from "@/components/Breadcrumbs";
import ArticleCard from "@/components/ArticleCard";
import LeadSection from "@/components/LeadSection";
import { ARTICLES } from "@/content/blog";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Блог Weksar: ліквідація ТОВ, тендери, реєстрація",
  description: "Практичні статті про ліквідацію і зміни ТОВ, тендери в Prozorro, реєстрацію бізнесу, ліцензії, гранти і бухгалтерію.",
  path: "blog",
});

export default function BlogIndex() {
  const sorted = [...ARTICLES].sort((a, b) => b.date.localeCompare(a.date));
  return (
    <>
      <section className="bg-graphite text-on-dark">
        <div className="container-site pt-7 pb-10 sm:pt-12">
          <Breadcrumbs items={[{ name: "Блог", href: "/blog" }]} />
          <h1 className="mt-5 text-[1.85rem] leading-[1.12] font-bold sm:text-[2.6rem]">Блог</h1>
          <p className="mt-4 max-w-[58ch] text-on-dark-muted">Практично про ліквідацію і зміни ТОВ, тендери, реєстрацію бізнесу і ліцензії.</p>
        </div>
      </section>
      <section className="py-14">
        <ul className="container-site grid gap-4 md:grid-cols-2">
          {sorted.map((a) => <li key={a.slug}><ArticleCard a={a} /></li>)}
        </ul>
      </section>
      <LeadSection />
    </>
  );
}
