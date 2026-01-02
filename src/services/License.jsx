import React from "react";
import Contact from "../components/Contact";
import FormForFeedback from "../components/FormForFeedback";

const License = () => {
  const licenses = [
    {
      title: "Роздрібний продаж алкоголю",
      price: "12000 ₴",
      note: "+ держ.збори",
      description: "Дозвіл на легальний роздрібний продаж алкогольних напоїв.",
      services: [
        "Консультація щодо отримання ліцензії",
        "Підготовка та подача документів",
        "Супровід перевірки",
        "Отримання офіційної ліцензії",
        "Реєстрація у державних органах"
      ],
      extension: [
        "Подання документів для продовження ліцензії",
        "Супровід перевірки",
        "Оновлення реєстрації у державних органах"
      ]
    },
    {
      title: "Роздрібний продаж сидру/перрі",
      price: "9000 ₴",
      note: "+ держ.збори",
      description: "Спеціальна ліцензія для продажу сидру та перрі.",
      services: [
        "Консультація щодо типу ліцензії",
        "Підготовка документів",
        "Супровід перевірки",
        "Отримання ліцензії",
        "Реєстрація у державних органах"
      ],
      extension: [
        "Продовження ліцензії на новий термін",
        "Супровід державної перевірки",
        "Оновлення документів"
      ]
    },
    {
      title: "Роздрібний продаж тютюнових виробів",
      price: "10000 ₴",
      note: "+ держ.збори",
      description: "Офіційний дозвіл на продаж тютюнових виробів.",
      services: [
        "Консультація щодо ліцензії",
        "Підготовка та подача документів",
        "Супровід перевірки",
        "Отримання ліцензії",
        "Реєстрація у державних органах"
      ],
      extension: [
        "Подовження ліцензії",
        "Оновлення реєстраційних даних",
        "Супровід перевірки"
      ]
    },
    {
      title: "Будівельна ліцензія С2 та С3",
      price: "15000 ₴",
      note: "+ держ.збори",
      description: "Дозвіл на ведення будівельних робіт категорій С2 та С3.",
      services: [
        "Консультація щодо категорії ліцензії",
        "Підготовка документів",
        "Супровід отримання дозволу",
        "Офіційна реєстрація ліцензії",
        "Повний пакет документів для будівництва"
      ],
      extension: [
        "Продовження ліцензії С2/С3",
        "Оновлення пакету документів",
        "Супровід перевірки"
      ]
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-16">

      {/* ===== Заголовок ===== */}
      <div className="max-w-5xl mx-auto px-6 text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Ліцензії для бізнесу
        </h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Офіційні ліцензії та продовження для алкогольного, тютюнового та будівельного бізнесу.
          Ми допоможемо пройти всі етапи: від підготовки документів до отримання дозволу.
        </p>
      </div>

      {/* ===== КАРТКИ ЛІЦЕНЗІЙ ===== */}
      <div className="max-w-6xl mx-auto px-6 grid gap-12">
        {licenses.map((lic, i) => (
          <div key={i} className="bg-white shadow-xl rounded-2xl p-10 grid md:grid-cols-2 gap-8">

            {/* LEFT: Основна ліцензія */}
            <div className="flex flex-col justify-between">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">{lic.title}</h2>
              <p className="text-5xl font-semibold text-green-800 mb-4 flex items-end gap-2">
                {lic.price} <span className="text-lg font-normal text-gray-500">{lic.note}</span>
              </p>
              <p className="text-gray-600 mb-6">{lic.description}</p>
              <button
                className="btn btn-neutral w-full md:w-auto px-8 py-3 text-lg font-semibold"
                onClick={() =>
                  document.getElementById("my_modal_2").showModal()
                }
              >
                Отримати ліцензію
              </button>
            </div>

            {/* RIGHT: Послуги */}
            <div className="flex flex-col">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Що входить у послугу</h3>
              <ul className="space-y-2 mb-6 text-gray-700 text-lg">
                {lic.services.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-green-600 font-bold text-xl">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">Продовження ліцензії</h3>
              <ul className="space-y-2 text-gray-700 text-lg">
                {lic.extension.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold text-xl">↻</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        ))}
      </div>

      {/* ===== ЩО ТАКЕ ЛІЦЕНЗІЯ ===== */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          <div className="relative h-72 md:h-full w-full">
            <img src="/license_info.jpg" alt="Що таке ліцензія" className="object-cover w-full h-full rounded-l-2xl"/>
            <div className="absolute inset-0 bg-gradient-to-tr from-black/30 to-transparent"></div>
          </div>
          <div className="flex flex-col justify-center p-6">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Що таке ліцензія?</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Ліцензія – це офіційний дозвіл на певну діяльність, що гарантує легальність бізнесу,
              захищає від штрафів і санкцій та підтверджує вашу компетентність.
            </p>
          </div>
        </div>
      </section>

      {/* ===== НАВІЩО ПОТРІБНА ЛІЦЕНЗІЯ ===== */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Навіщо потрібна ліцензія?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Легальний бізнес і дотримання законів",
              "Довіра клієнтів та партнерів",
              "Можливість працювати на маркетплейсах і державних проектах",
              "Захист від штрафів та санкцій",
              "Масштабування бізнесу",
              "Підтвердження професійної компетентності"
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 shadow-md border border-gray-100 rounded-xl">
                <p className="text-gray-700 text-lg font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== КОНТАКТНА ФОРМА ===== */}
      <Contact />

<dialog id="my_modal_2" className="modal">
  <div className="modal-box p-0 md:w-6/8 md:max-w-5xl">
    <FormForFeedback />
    
  </div>
  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
    </div>
  );
};

export default License;
