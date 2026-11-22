import Link from "next/link";
import JsonLd from "./JsonLd";
import { SITE_URL } from "@/lib/site";
import { t } from "@/lib/i18n";

export default function Breadcrumbs({ items, locale = "uk" }) {
  const d = t(locale);
  const all = [{ name: d.homeLabel, href: d.home }, ...items];
  return (
    <nav aria-label={d.breadcrumbs} className="text-[0.8rem] text-on-dark-muted">
      <ol className="flex flex-wrap gap-1.5">
        {all.map((c, i) => (
          <li key={c.href} className="flex items-center gap-1.5">
            {i < all.length - 1 ? (
              <>
                <Link href={c.href} className="hover:text-on-dark">{c.name}</Link>
                <span aria-hidden>/</span>
              </>
            ) : (
              <span aria-current="page" className="text-on-dark">{c.name}</span>
            )}
          </li>
        ))}
      </ol>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: all.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.name, item: SITE_URL + (c.href === "/" ? "" : c.href) })),
        }}
      />
    </nav>
  );
}
