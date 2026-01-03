import React from "react";
import Contact from "../components/Contact";
import FormForFeedback from "../components/FormForFeedback";

const Advokatco = () => {
  const benefits = [
    "Чітке розуміння вашої правової ситуації",
    "Професійні рекомендації адвоката",
    "Запобігання юридичним помилкам",
    "Економія часу та ресурсів",
    "Впевненість у подальших діях",
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* ===== HERO / SERVICE INFO ===== */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Консультація адвоката
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Професійна правова допомога та роз’яснення з урахуванням вашої
            конкретної ситуації.
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
            {/* LEFT: Price */}
            <div className="bg-white shadow-xl rounded-2xl p-10 flex flex-col justify-between h-full">
              <div className="flex flex-col gap-3">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Вартість послуги
                </h2>

                <p className="text-4xl font-semibold text-gray-900 mb-6">
                  від 1000 ₴{" "}
                  <span className="text-lg font-normal text-gray-500">
                    за консультацію
                  </span>
                </p>

                <p className="text-gray-600 mb-6">
                  Тривалість та формат консультації залежать від складності
                  питання та обсягу правової допомоги.
                </p>

                <button
                  className="btn btn-neutral w-full md:w-auto px-8 py-3 text-lg font-semibold"
                  onClick={() =>
                    document.getElementById("my_modal_2").showModal()
                  }
                >
                  Отримати консультацію
                </button>
              </div>
            </div>

            {/* RIGHT: Included Services */}
            <div className="bg-white shadow-xl rounded-2xl p-10 flex flex-col h-full">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Що входить у консультацію
              </h2>
              <ul className="space-y-4 text-gray-700 text-lg flex-1">
                {[
                  "Аналіз вашої правової ситуації",
                  "Вивчення документів та матеріалів",
                  "Усні та письмові правові рекомендації",
                  "Роз’яснення прав та обов’язків",
                  "Визначення подальшої стратегії дій",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-green-600 font-bold text-xl">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY CONSULTATION ===== */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          <div className="relative h-72 md:h-full w-full">
            <img
              src="/consultation-lawyer.jpg" // заміни при потребі
              alt="Консультація адвоката"
              className="object-cover w-full h-full rounded-l-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/30 to-transparent"></div>
          </div>
          <div className="flex flex-col justify-center p-6">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Навіщо потрібна консультація адвоката?
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Консультація адвоката допомагає правильно оцінити ситуацію,
              уникнути помилок та обрати ефективний шлях захисту або вирішення
              правового питання ще на початковому етапі.
            </p>
          </div>
        </div>
      </section>

      {/* ===== BENEFITS ===== */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Переваги консультації адвоката
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 shadow-md border border-gray-100 rounded-xl"
              >
                <p className="text-gray-700 text-lg font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section className="pt-20">
        <Contact />

        <dialog id="my_modal_2" className="modal">
          <div className="modal-box p-0 md:w-6/8 md:max-w-5xl">
            <FormForFeedback />
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </section>
    </div>
  );
};

export default Advokatco;
