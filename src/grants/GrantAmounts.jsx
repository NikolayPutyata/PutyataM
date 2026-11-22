// Суми державних грантів за програмою «Власна справа 2.0» (діє з вересня 2026 року).
// Джерела: kmu.gov.ua, business.diia.gov.ua, dcz.gov.ua. Перевіряти перед кожним оновленням текстів.

const DIRECTIONS = [
  {
    label: "Старт бізнесу",
    base: "100 000 – 300 000 ₴",
    max: "до 500 000 ₴ з надбавками",
    items: ["Для нового бізнесу", "Реєстрація ФОП або ТОВ — після схвалення заявки", "Створення робочих місць не обовʼязкове"],
  },
  {
    label: "Масштабування бізнесу",
    base: "500 000 – 1 500 000 ₴",
    max: "до 2 500 000 ₴ з надбавками",
    items: ["Для чинних ФОП і ТОВ", "Потрібно створити щонайменше 1 робоче місце", "Детальний бізнес-план з розрахунками"],
  },
];

function GrantAmounts({ veterans = false }) {
  return (
    <section className="pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          {veterans ? "Суми грантів для ветеранів у 2026 році" : "Суми грантів «Власна справа» у 2026 році"}
        </h2>
        <p className="text-gray-600 text-lg mb-10 max-w-3xl">
          З вересня 2026 року державні гранти на бізнес надаються за оновленою програмою «Власна справа 2.0» — за
          єдиним порядком для всіх отримувачів. Є два напрями: старт і масштабування бізнесу.
          {veterans &&
            " Ветерани, ветеранки та члени їхніх сімей подаються за цим самим порядком, а ветеранський бізнес отримує надбавку до базової суми."}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {DIRECTIONS.map((d) => (
            <div key={d.label} className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 flex flex-col">
              <span className="text-sm text-gray-600 mb-2">{d.label}</span>
              <h3 className="text-3xl font-bold text-gray-900 mb-1">{d.base}</h3>
              <p className="text-gray-600">{d.max}</p>
              <ul className="space-y-3 text-gray-700 text-base mt-6 flex-1">
                {d.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-gray-600 text-sm mt-6 max-w-3xl">
          Остаточний розмір гранту залежить від категорії заявника, регіону та галузі. Заявка подається через Дію.
          Умови наведено станом на листопад 2026 року за даними Кабміну, Мінекономіки та порталу «Дія.Бізнес».
        </p>
      </div>
    </section>
  );
}

export default GrantAmounts;
