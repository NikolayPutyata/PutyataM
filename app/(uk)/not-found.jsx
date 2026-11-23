import Link from "@/components/SiteLink";

export const metadata = { title: { absolute: "Сторінку не знайдено | Weksar" }, robots: { index: false } };

const LINKS = [
  { name: "Ліквідація ТОВ", href: "/likvidatsiia-tov" },
  { name: "Тендерний супровід", href: "/tendernyi-suprovid" },
  { name: "Закриття ФОП", href: "/zakryttia-fop" },
  { name: "Контакти", href: "/kontakty" },
];

export default function NotFound() {
  return (
    <section className="bg-graphite text-on-dark">
      <div className="container-site py-16 sm:py-24">
        <p className="eyebrow text-amber">Помилка 404</p>
        <h1 className="mt-4 text-[1.85rem] leading-[1.12] font-bold sm:text-[2.6rem]">Сторінку не знайдено</h1>
        <p className="mt-4 max-w-[55ch] text-on-dark-muted">Можливо, адреса змінилася або в ній помилка. Ось розділи, які шукають найчастіше:</p>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {LINKS.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="block rounded-[var(--radius-card)] border border-graphite-line bg-graphite-2 px-5 py-4 font-semibold hover:border-amber">{l.name}</Link>
            </li>
          ))}
        </ul>
        <Link href="/" className="btn-primary mt-10 w-full sm:w-auto">На головну</Link>
      </div>
    </section>
  );
}
