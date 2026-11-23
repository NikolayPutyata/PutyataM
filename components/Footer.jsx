import Link from "next/link";
import Logo from "./Logo";
import { CATALOG, CATALOG_EN, CONTACTS, FACTS, FACTS_EN } from "@/lib/site";
import { t } from "@/lib/i18n";

export default function Footer({ locale = "uk" }) {
  const d = t(locale);
  const groups = (locale === "en" ? CATALOG_EN : CATALOG).slice(0, 2);
  const slogan = locale === "en" ? FACTS_EN.slogan : FACTS.slogan;
  return (
    <footer className="bg-graphite text-on-dark">
      <div className="container-site grid gap-10 py-12 md:grid-cols-[1.2fr_2fr]">
        <div className="space-y-4">
          <Logo locale={locale} />
          <p className="max-w-xs text-sm text-on-dark-muted">{slogan}</p>
          <a href={CONTACTS.phoneHref} className="block text-lg font-bold hover:text-amber">
            {CONTACTS.phoneDisplay}
          </a>
          <ul className="flex gap-4 text-sm text-on-dark-muted">
            {CONTACTS.messengers.map((m) => (
              <li key={m.name}>
                <a href={m.href} target="_blank" rel="noreferrer" className="hover:text-amber">
                  {m.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          {groups.map((g) => (
            <div key={g.group}>
              <p className="eyebrow mb-3 text-on-dark-muted">{g.group}</p>
              <ul className="space-y-2 text-sm">
                {g.items.map((i) => (
                  <li key={i.href}>
                    <Link href={i.href} className="text-on-dark hover:text-amber">
                      {i.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-graphite-line">
        <div className="container-site flex flex-wrap justify-between gap-3 py-5 text-xs text-on-dark-muted">
          <span>© {new Date().getFullYear()} Weksar</span>
          <span className="flex gap-5">
            {d.footerLinks.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-on-dark">{l.name}</Link>
            ))}
          </span>
        </div>
      </div>
    </footer>
  );
}
