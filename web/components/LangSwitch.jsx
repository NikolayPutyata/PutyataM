"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { counterpart, localeOf } from "@/lib/alternates";
import { t } from "@/lib/i18n";

// Перемикач мов: веде на ту саму сторінку іншою мовою, а якщо її немає — на головну.
export default function LangSwitch() {
  const path = (usePathname() || "/").replace(/^\/|\/$/g, "");
  const locale = localeOf(path);
  const other = counterpart(path);
  const href = other === null ? (locale === "en" ? "/" : "/en") : `/${other}`;
  const d = t(locale).langSwitch;
  return (
    <Link href={href} hrefLang={locale === "en" ? "uk" : "en"} aria-label={d.label} className="font-semibold text-on-dark hover:text-amber">
      {d.short}
    </Link>
  );
}
