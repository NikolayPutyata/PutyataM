import Link from "next/link";
import JsonLd from "./JsonLd";
import { SITE_URL } from "@/lib/site";

export default function Breadcrumbs({ items }) {
  const all = [{ name: "Головна", href: "/" }, ...items];
  return (
    <nav aria-label="Хлібні крихти" className="text-[0.8rem] text-on-dark-muted">
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
