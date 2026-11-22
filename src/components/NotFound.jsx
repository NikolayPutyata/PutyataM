import { Link } from "react-router-dom";

const LINKS = [
  { name: "Ліквідація ТОВ / закриття ФОП", path: "/services/liquidation" },
  { name: "Зміни ФОП / ТОВ", path: "/services/changes" },
  { name: "Ліцензії", path: "/services/license" },
  { name: "Реєстрація ФОП / ТОВ", path: "/services/registration" },
  { name: "Контакти", path: "/contacts" },
];

// Сторінка 404. Сервер віддає її зі статусом 404 (див. public/.htaccess).
function NotFound() {
  return (
    <main className="bg-gray-50 min-h-[60vh] px-6 py-16">
      <meta name="robots" content="noindex" />
      <div className="max-w-3xl mx-auto">
        <p className="text-gray-600 mb-2">Помилка 404</p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Сторінку не знайдено</h1>
        <p className="text-gray-700 text-lg mb-8">
          Можливо, адреса змінилася або в ній помилка. Ось розділи, які шукають найчастіше:
        </p>
        <ul className="grid gap-3 sm:grid-cols-2 mb-10">
          {LINKS.map((l) => (
            <li key={l.path}>
              <Link to={l.path} className="block bg-white rounded-xl border border-gray-200 px-5 py-4 hover:shadow-md transition">
                {l.name}
              </Link>
            </li>
          ))}
        </ul>
        <Link to="/" className="btn btn-neutral">
          На головну
        </Link>
      </div>
    </main>
  );
}

export default NotFound;
