import React from "react";
import Contact from "../components/Contact";
import FormForFeedback from "../components/FormForFeedback";

const Power = () => {
  const services = [
    "Консультація щодо реєстрації потужностей",
    "Підготовка та подача документів у державні органи",
    "Супровід перевірки та отримання підтвердження",
    "Реєстрація в Єдиному реєстрі операторів ринку",
    "Повний пакет документів для законної діяльності"
  ];

  const benefits = [
    "Офіційне підтвердження вашого статусу оператора ринку",
    "Законна торгівля та виробництво продуктів",
    "Захист від штрафів та санкцій",
    "Можливість співпраці з державними органами та партнерами",
    "Підвищення довіри клієнтів і партнерів"
  ];

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* ===== Заголовок ===== */}
      <section className="py-16 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Реєстрація потужностей оператора ринку
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Офіційна реєстрація ваших потужностей дозволяє легально вести діяльність, дотримуватися стандартів і контролювати якість продукції.
          </p>
        </div>
      </section>

      {/* ===== Ціна та послуги ===== */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">

          {/* LEFT: Ціна */}
          <div className="bg-white shadow-xl rounded-2xl p-10 flex flex-col justify-between">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Вартість послуги</h2>
            <p className="text-5xl font-semibold text-green-800 mb-4 flex items-end gap-2">
              8000 ₴ <span className="text-lg font-normal text-gray-500">+ держ.збори</span>
            </p>
            <p className="text-gray-600 text-lg mb-6">
              Ціна залежить від розміру та типу потужностей, а також від сфери діяльності.
            </p>
            <a
              href="#contact"
              className="btn btn-neutral w-full md:w-auto px-8 py-3 text-lg font-semibold"
            >
              Зареєструвати потужності
            </a>
          </div>

          {/* RIGHT: Що входить */}
          <div className="bg-white shadow-xl rounded-2xl p-10 flex flex-col">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Що входить у послугу</h2>
            <ul className="space-y-3 text-gray-700 text-lg flex-1">
              {services.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-green-600 font-bold text-xl">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* ===== Що таке реєстрація потужностей ===== */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          <div className="relative h-72 md:h-full w-full">
            <img
              src="/power.jpg" // заміни на своє фото
              alt="Реєстрація потужностей"
              className="object-cover w-full h-full rounded-l-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/30 to-transparent"></div>
          </div>
          <div className="flex flex-col justify-center p-6">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Що таке реєстрація потужностей?</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Реєстрація потужностей оператора ринку — це офіційне підтвердження
              вашої здатності виробляти, зберігати або реалізовувати продукцію
              у відповідності до вимог держави. Це гарантує легальність діяльності
              та контроль якості продукції.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Навіщо потрібна ===== */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Навіщо потрібна реєстрація?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((item, i) => (
              <div key={i} className="bg-white p-6 shadow-md border border-gray-100 rounded-xl">
                <p className="text-gray-700 text-lg font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Контактна форма ===== */}
      <section className="pt-20">
        <Contact />
      </section>
    </div>
  );
};

export default Power;
