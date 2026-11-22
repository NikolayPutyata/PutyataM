import Link from "next/link";
import Logo from "./Logo";
import { CATALOG, CONTACTS, FACTS } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-graphite pb-24 text-on-dark md:pb-0">
      <div className="container-site grid gap-10 py-12 md:grid-cols-[1.2fr_2fr]">
        <div className="space-y-4">
          <Logo />
          <p className="max-w-xs text-sm text-on-dark-muted">{FACTS.slogan}. Працюємо з бізнесом Києва та Київської області.</p>
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
          {CATALOG.slice(0, 2).map((g) => (
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
            <Link href="/blog" className="hover:text-on-dark">Блог</Link>
            <Link href="/tsiny" className="hover:text-on-dark">Ціни</Link>
            <Link href="/pro-nas" className="hover:text-on-dark">Про нас</Link>
            <Link href="/polityka-konfidentsiinosti" className="hover:text-on-dark">Політика конфіденційності</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
