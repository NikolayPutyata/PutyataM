import React from "react";
import Contact from "../components/Contact";
import FormForFeedback from "../components/FormForFeedback";

const Consultation = () => {
  

  const benefits = [
    "Індивідуальний підхід до вашого бізнесу",
    "Захист від помилок і штрафів",
    "Економія часу та ресурсів",
    "Можливість отримати письмові рекомендації",
    "Підвищення юридичної грамотності та впевненості"
  ];

  return (
    <div className="bg-gray-50 min-h-screen">

      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
           Індивідуальна консультація юриста
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Отримайте персональні поради щодо вашого бізнесу, реєстрацій, ліцензій та інших юридичних питань.
          </p>
        </div>
  <div className="max-w-6xl mx-auto px-6">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">

    {/* LEFT: Price + Order */}
    <div className="bg-white shadow-xl rounded-2xl p-10 flex flex-col justify-between h-full">
  <div className="flex flex-col gap-3">
    <h2 className="text-3xl font-bold text-gray-800 mb-4">Вартість реєстрації</h2>

    {/* Цена с маленьким текстом для держ.зборів */}
    <p className="text-4xl font-semibold text-gray-900 mb-6">
      2000 ₴ <span className="text-lg font-normal text-gray-500">за 1 годину</span>
      
    </p>

    <p className="text-gray-600 mb-6">
      Можливе погодження індивідуального пакету консультацій залежно від ваших потреб.
    </p>

<button className="btn btn-neutral w-full md:w-auto px-8 py-3 text-lg font-semibold" onClick={()=>document.getElementById('my_modal_2').showModal()}>Замовити консультацію</button>
    
  </div>
</div>


    {/* RIGHT: Included Services */}
    <div className="bg-white shadow-xl rounded-2xl p-10 flex flex-col h-full">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Що входить у послугу</h2>
      <ul className="space-y-4 text-gray-700 text-lg flex-1">
        {[
          "Особиста консультація з юридичних питань бізнесу",
    "Аналіз документів і договорів",
    "Розробка рекомендацій і стратегій",
    "Консультація щодо реєстрації, ліцензій, ТМ та інших процедур",
    
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

      {/* ===== Навіщо потрібна консультація ===== */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          <div className="relative h-72 md:h-full w-full">
            <img
              src="/consultation.jpg" // заміни на своє фото
              alt="Юридична консультація"
              className="object-cover w-full h-full rounded-l-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/30 to-transparent"></div>
          </div>
          <div className="flex flex-col justify-center p-6">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Навіщо потрібна консультація?</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Індивідуальна консультація допомагає уникнути помилок, оптимізувати процеси,
              забезпечити відповідність законодавству та підвищити ефективність вашого бізнесу.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Переваги ===== */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Переваги індивідуальної консультації</h2>
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

export default Consultation;
