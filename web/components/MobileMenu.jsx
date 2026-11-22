"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { NAV, NAV_EN } from "@/lib/site";
import { t } from "@/lib/i18n";

// Мобільне меню на <details>: працює й без JS; скрипт лише закриває його після переходу.
export default function MobileMenu({ locale = "uk" }) {
  const d = t(locale);
  const nav = locale === "en" ? NAV_EN : NAV;
  const ref = useRef(null);
  const pathname = usePathname();
  useEffect(() => {
    if (ref.current) ref.current.open = false;
  }, [pathname]);

  return (
    <details ref={ref} className="group lg:hidden">
      <summary aria-label={d.menu} className="grid h-10 w-10 place-items-center rounded-[var(--radius-btn)] border border-graphite-line">
        <span className="block h-[2px] w-5 bg-on-dark shadow-[0_6px_0_var(--color-on-dark),0_-6px_0_var(--color-on-dark)] group-open:shadow-none group-open:rotate-45" />
      </summary>
      <nav aria-label={d.mobileMenu} className="absolute inset-x-0 top-full z-40 border-t border-graphite-line bg-graphite pb-6 shadow-2xl">
        <ul className="container-site flex flex-col">
          {nav.map((item) => (
            <li key={item.href} className="border-b border-graphite-line">
              <Link href={item.href} className="block py-4 text-[1.05rem] font-semibold text-on-dark">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </details>
  );
}
