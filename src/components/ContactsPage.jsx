import Contact from "./Contact";
import { MESSENGERS, PHONE_DISPLAY, PHONE_TEL } from "../lib/contacts";

// Сторінка /contacts: заголовок, способи звʼязку і форма заявки.
function ContactsPage() {
  return (
    <main className="bg-gray-50">
      <section className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Контакти</h1>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <li className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <p className="text-sm text-gray-600 mb-1">Телефон</p>
            <a href={PHONE_TEL} className="text-xl font-semibold text-gray-900 hover:underline whitespace-nowrap">
              {PHONE_DISPLAY}
            </a>
          </li>
          {MESSENGERS.map((m) => (
            <li key={m.name} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <a
                href={m.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-xl font-semibold text-gray-900 hover:underline"
              >
                <img src={m.icon} alt="" width={32} height={32} />
                {m.name}
              </a>
            </li>
          ))}
        </ul>
      </section>
      <Contact />
    </main>
  );
}

export default ContactsPage;
