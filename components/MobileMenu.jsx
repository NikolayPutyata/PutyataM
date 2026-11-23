"use client";

import Link from "@/components/SiteLink";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { CONTACTS, MOBILE_NAV, MOBILE_NAV_EN } from "@/lib/site";
import { t } from "@/lib/i18n";

const Bars = () => (
  <svg aria-hidden width="20" height="14" viewBox="0 0 20 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M1 1h18M1 7h18M1 13h18" />
  </svg>
);
const Cross = () => (
  <svg aria-hidden width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M2 2l12 12M14 2L2 14" />
  </svg>
);

// Бокове меню на телефоні й планшеті: світла шухляда справа (варіант M1, обрав Коля 23.11).
// Нативний <dialog>: Esc і клік поза меню закривають, фокус лишається всередині, фон затемнюється.
export default function MobileMenu({ locale = "uk" }) {
  const d = t(locale);
  const nav = locale === "en" ? MOBILE_NAV_EN : MOBILE_NAV;
  const ref = useRef(null);
  const pathname = usePathname();
  const close = () => ref.current?.close();

  useEffect(() => {
    ref.current?.close();
  }, [pathname]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={d.openMenu}
        aria-haspopup="dialog"
        aria-controls="mobile-menu"
        onClick={() => ref.current?.showModal()}
        className="grid h-10 w-10 place-items-center rounded-[var(--radius-btn)] border border-graphite-line text-on-dark"
      >
        <Bars />
      </button>
      <dialog
        id="mobile-menu"
        ref={ref}
        aria-label={d.mobileMenu}
        className="drawer text-ink"
        onClick={(e) => {
          // клік по затемненню (сам <dialog>, а не його вміст) або по посиланню — закрити
          if (e.target === e.currentTarget || e.target.closest("a")) close();
        }}
      >
        <div className="flex h-full flex-col">
          <div className="flex h-16 shrink-0 items-center justify-between border-b border-line px-5">
            <span className="eyebrow text-muted">{d.menu}</span>
            <button type="button" onClick={close} aria-label={d.closeMenu} className="grid h-10 w-10 place-items-center rounded-[var(--radius-btn)] border-[1.5px] border-graphite text-graphite">
              <Cross />
            </button>
          </div>
          <nav aria-label={d.mainMenu} className="px-5 pt-2">
            <ul>
              {nav.map((item) => {
                const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
                return (
                  <li key={item.href} className="border-b border-line">
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`flex items-center justify-between gap-4 py-4 font-display text-[1.02rem] font-semibold ${active ? "text-amber-ink" : "text-ink"}`}
                    >
                      {item.name}
                      <span aria-hidden className="text-amber-ink">→</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="mt-auto border-t border-line bg-mist px-5 pt-5 pb-[calc(1.25rem+env(safe-area-inset-bottom,0px))]">
            <a href={CONTACTS.phoneHref} className="block text-lg font-bold text-ink">{CONTACTS.phoneDisplay}</a>
            <ul className="mt-1 flex gap-3 text-sm text-muted">
              {CONTACTS.messengers.map((m) => (
                <li key={m.name}>
                  <a href={m.href} target="_blank" rel="noreferrer" className="hover:text-ink">{m.name}</a>
                </li>
              ))}
            </ul>
            <div className="mt-4 grid grid-cols-2 gap-2">
              <a href={CONTACTS.phoneHref} className="btn-primary px-3">{d.call}</a>
              <a href={CONTACTS.messengers[0].href} target="_blank" rel="noreferrer" className="btn-ghost-light px-3">{CONTACTS.messengers[0].name}</a>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
}
