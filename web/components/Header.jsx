import Link from "next/link";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import { NAV } from "@/lib/site";

export default function Header() {
  return (
    <header className="relative z-30 bg-graphite text-on-dark">
      <div className="container-site flex h-16 items-center justify-between gap-6">
        <Logo />
        <nav aria-label="Головне меню" className="hidden lg:block">
          <ul className="flex items-center gap-7 text-[0.92rem] font-semibold">
            {NAV.map((item) => (
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
            Консультація
          </a>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
