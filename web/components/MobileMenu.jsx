"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { NAV } from "@/lib/site";

// Мобільне меню на <details>: працює й без JS; скрипт лише закриває його після переходу.
export default function MobileMenu() {
  const ref = useRef(null);
  const pathname = usePathname();
  useEffect(() => {
    if (ref.current) ref.current.open = false;
  }, [pathname]);

  return (
    <details ref={ref} className="group lg:hidden">
      <summary aria-label="Меню" className="grid h-10 w-10 place-items-center rounded-[var(--radius-btn)] border border-graphite-line">
        <span className="block h-[2px] w-5 bg-on-dark shadow-[0_6px_0_var(--color-on-dark),0_-6px_0_var(--color-on-dark)] group-open:shadow-none group-open:rotate-45" />
      </summary>
      <nav aria-label="Мобільне меню" className="absolute inset-x-0 top-full z-40 border-t border-graphite-line bg-graphite pb-6 shadow-2xl">
        <ul className="container-site flex flex-col">
          {NAV.map((item) => (
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
