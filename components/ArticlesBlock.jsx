import ArticleCard from "./ArticleCard";
import { ARTICLES } from "@/content/blog";

// «Корисно прочитати» на сторінці послуги: статті, що ведуть на цю послугу.
export default function ArticlesBlock({ path }) {
  const items = ARTICLES.filter((a) => a.service.href === `/${path}`);
  if (!items.length) return null;
  return (
    <section className="border-t border-line py-14">
      <div className="container-site">
        <h2 className="font-display text-xl font-semibold">Корисно прочитати</h2>
        <ul className="mt-6 grid gap-4 md:grid-cols-2">
          {items.map((a) => <li key={a.slug}><ArticleCard a={a} /></li>)}
        </ul>
      </div>
    </section>
  );
}
