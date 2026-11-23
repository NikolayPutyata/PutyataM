import Link from "@/components/SiteLink";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import { NAV, NAV_EN } from "@/lib/site";
import { t } from "@/lib/i18n";

export default function Header({ locale = "uk" }) {
  const d = t(locale);
  const nav = locale === "en" ? NAV_EN : NAV;
  return (
    <header className="relative z-30 bg-graphite text-on-dark">
      <div className="container-site flex h-16 items-center justify-between gap-6">
        <Logo locale={locale} />
        <nav aria-label={d.mainMenu} className="hidden lg:block">
          <ul className="flex items-center gap-7 text-[0.92rem] font-semibold">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-on-dark-muted transition-colors hover:text-on-dark">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#zaiavka" className="btn-primary hidden py-2.5 sm:inline-flex">
            {d.consult}
          </a>
          <MobileMenu locale={locale} />
        </div>
      </div>
    </header>
  );
}
