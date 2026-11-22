import { CONTACTS } from "@/lib/site";

// Закріплені кнопки на телефоні: дзвінок і месенджер завжди під пальцем.
export default function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-line bg-paper px-3 pt-2.5 pb-[calc(0.75rem+env(safe-area-inset-bottom,0px))] md:hidden">
      <a href={CONTACTS.phoneHref} className="btn-primary py-3">
        Подзвонити
      </a>
      <a href={CONTACTS.messengers[0].href} target="_blank" rel="noreferrer" className="btn-ghost-light py-3">
        Написати
      </a>
    </div>
  );
}
