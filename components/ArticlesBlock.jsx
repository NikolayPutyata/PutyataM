import ArticleCard from "./ArticleCard";
import { blogFor } from "@/lib/blog";
import { t } from "@/lib/i18n";

// «Корисно прочитати» на сторінці послуги: статті, що ведуть на цю послугу.
export default function ArticlesBlock({ path, locale = "uk" }) {
  const items = blogFor(locale).articles.filter((a) => a.service.href === `/${path}`);
  if (!items.length) return null;
  return (
    <section className="border-t border-line py-14">
      <div className="container-site">
        <h2 className="font-display text-xl font-semibold">{t(locale).readMore}</h2>
        <ul className="mt-6 grid gap-4 md:grid-cols-2">
          {items.map((a) => <li key={a.slug}><ArticleCard a={a} locale={locale} /></li>)}
        </ul>
      </div>
    </section>
  );
}
