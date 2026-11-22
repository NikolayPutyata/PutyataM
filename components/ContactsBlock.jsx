import { CONTACTS } from "@/lib/site";
import { t } from "@/lib/i18n";

export default function ContactsBlock({ title, text, locale = "uk" }) {
  const d = t(locale);
  title = title || d.contactsTitle;
  return (
    <section className="py-16 sm:py-20">
      <div className="container-site">
        <h2 className="h2">{title}</h2>
        {text && <p className="mt-4 max-w-[65ch] text-muted">{text}</p>}
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <li className="rounded-[var(--radius-card)] border border-line p-6">
            <p className="text-sm text-muted">{d.phone}</p>
            <a href={CONTACTS.phoneHref} className="mt-1 block font-display text-lg font-semibold whitespace-nowrap">{CONTACTS.phoneDisplay}</a>
          </li>
          {CONTACTS.messengers.map((m) => (
            <li key={m.name} className="rounded-[var(--radius-card)] border border-line p-6">
              <p className="text-sm text-muted">{d.messenger}</p>
              <a href={m.href} target="_blank" rel="noreferrer" className="mt-1 block font-display text-lg font-semibold">{m.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
