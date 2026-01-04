import React from "react";
import Contact from "../components/Contact";
import FormForFeedback from "../components/FormForFeedback";

const TranslateDoc = () => {
  const benefits = [
    "Офіційна юридична сила перекладів",
    "Швидке та коректне оформлення",
    "Відповідність законодавству України",
    "Прийняття перекладів у державних та приватних установах",
    "Захист від помилок та спірних ситуацій",
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* ===== HERO / SERVICE INFO ===== */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Завірений переклад документів
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Професійний переклад документів із офіційним завіренням для використання в Україні та за кордоном.
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
                  від 400 ₴{" "}
                  <span className="text-lg font-normal text-gray-500">
                    за документ
                  </span>
                </p>

                <p className="text-gray-600 mb-6">
                  Остаточна вартість залежить від кількості сторінок та складності документа.
                </p>

                
                <button
                  className="btn btn-neutral w-full md:w-auto px-8 py-3 text-lg font-semibold"
                  onClick={() =>
                    document.getElementById("my_modal_2").showModal()
                  }
                >
                  Замовити переклад
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
                  "Переклад офіційних документів",
                  "Нотаріальне або апостильне завірення перекладів",
                  "Перевірка точності та відповідності оригіналу",
                  "Легалізація для державних та приватних установ",
                  "Консультації щодо вимог до документів",
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

      {/* ===== WHY TRANSLATION ===== */}
      

      <section className="py-16">
  <div className="max-w-6xl mx-auto px-6">
    <div className="card bg-white shadow-md rounded-2xl overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* LEFT: Image collage */}
        <div className="relative h-64 md:h-[300px] w-full">
          <img
            src="/trans.jpg"
            alt="Відомі бренди"
            className="object-cover w-full h-full md:rounded-l-2xl"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-black/30 to-transparent md:rounded-l-2xl"></div>
        </div>

        {/* RIGHT: Text */}
        <div className="p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
          Навіщо потрібен завірений переклад?
          </h2>

         <p className="text-gray-600 leading-relaxed">
                 Завірений переклад підтверджує точність документа, надає йому офіційну юридичну силу та забезпечує його прийняття в державних та приватних установах як в Україні, так і за кордоном.
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
            Переваги завіреного перекладу
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

export default TranslateDoc;
