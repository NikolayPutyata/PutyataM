import React from "react";
import Contact from "../components/Contact";
import FormForFeedback from "../components/FormForFeedback";

const Registration = () => {
  const benefits = [
    "Офіційне внесення даних до державних реєстрів",
    "Юридична безпека реєстраційних дій",
    "Швидке та коректне оформлення",
    "Мінімізація ризиків відмови",
    "Відповідність вимогам законодавства України",
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* ===== HERO / SERVICE INFO ===== */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Нотаріальні реєстраційні дії
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Проведення державної реєстрації юридичних та майнових прав з повним
            юридичним супроводом.
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
                  від 1500 ₴{" "}
                  <span className="text-lg font-normal text-gray-500">
                    за реєстраційну дію
                  </span>
                </p>

                <p className="text-gray-600 mb-6">
                  Остаточна вартість залежить від виду реєстрації та складності
                  процедури.
                </p>

                <button
                  className="btn btn-neutral w-full md:w-auto px-8 py-3 text-lg font-semibold"
                  onClick={() =>
                    document.getElementById("my_modal_2").showModal()
                  }
                >
                  Записатися до нотаріуса
                </button>
              </div>
            </div>

            {/* RIGHT: Included Services */}
            <div className="bg-white shadow-xl rounded-2xl p-10 flex flex-col h-full">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Що входить у послугу
              </h2>
              <ul className="space-y-4 text-gray-700 text-lg flex-1">
                {[
                  "Державна реєстрація юридичних осіб та ФОП",
                  "Внесення змін до установчих документів",
                  "Реєстрація прав власності на нерухоме майно",
                  "Реєстрація обтяжень та іпотек",
                  "Консультація та перевірка документів",
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

      {/* ===== WHY REGISTRATION ===== */}
     

      <section className="py-16">
  <div className="max-w-6xl mx-auto px-6">
    <div className="card bg-white shadow-md rounded-2xl overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* LEFT: Image collage */}
        <div className="relative h-64 md:h-[300px] w-full">
          <img
            src="/regi.jpg"
            alt="Відомі бренди"
            className="object-cover w-full h-full md:rounded-l-2xl"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-black/30 to-transparent md:rounded-l-2xl"></div>
        </div>

        {/* RIGHT: Text */}
        <div className="p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
           Навіщо потрібні реєстраційні дії?
          </h2>

         <p className="text-gray-600 leading-relaxed">
                 Реєстраційні дії забезпечують офіційне визнання прав власності,
              бізнесу та змін у державних реєстрах, що є обовʼязковою умовою для
              законної діяльності.
                </p>
        </div>

      </div>
    </div>
  </div>
</section>

      {/* ===== BENEFITS ===== */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Переваги нотаріальних реєстраційних дій
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

export default Registration;
