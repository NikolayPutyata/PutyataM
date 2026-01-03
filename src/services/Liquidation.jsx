import React from "react";
import Contact from "../components/Contact";
import FormForFeedback from "../components/FormForFeedback";

const Liquidation = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
<section className="py-16">
        <div className="max-w-6xl mx-auto px-6 text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Ліквідація ФОП та ТОВ
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Допомагаємо швидко та без помилок закрити ваш бізнес або провести повну ліквідацію ТОВ. 
            Забезпечуємо повний юридичний супровід та подачу всіх необхідних документів
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">

            {/* ФОП */}
            <div className="bg-white shadow-xl border border-gray-100 rounded-2xl p-10 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  ФОП
                </h2>
                <p className="text-gray-600 mb-6">
                  Ліквідація ФОП без штрафів та затримок. Повний супровід, подача документів до державних органів.
                </p>

                <p className="text-4xl font-semibold text-gray-900 mb-6">
                  3500 ₴
                </p>

                <p className="text-gray-500 mb-6">
                  Включає припинення в реєстрі, подання ліквідаційної звітності, звіряння податків.
                </p>
              </div>

              <button
                className="btn btn-neutral w-full md:w-auto px-8 py-3 text-lg font-semibold"
                onClick={() =>
                  document.getElementById("my_modal_2").showModal()
                }
              >
                Ліквідувати ФОП
              </button>
            </div>

            {/* ТОВ */}
            <div className="bg-white shadow-xl border border-gray-100 rounded-2xl p-10 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  ТОВ
                </h2>
                <p className="text-gray-600 mb-6">
                  Повний супровід ліквідації ТОВ: статутні зміни, звіти, подання документів у держреєстр.
                </p>

                <p className="text-4xl font-semibold text-gray-900 mb-6">
                  від 12 000 ₴
                </p>

                <p className="text-gray-500 mb-6">
                  Включає підготовку документів, подання їх до державного реєстратора, контроль за ліквідацією.
                </p>
              </div>

              <button
                className="btn btn-neutral w-full md:w-auto px-8 py-3 text-lg font-semibold"
                onClick={() =>
                  document.getElementById("my_modal_2").showModal()
                }
              >
                Ліквідувати ТОВ
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Як відбувається ліквідація
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h3 className="text-2xl  font-semibold text-gray-800">ФОП</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Підготовка та подача заяви на ліквідацію</li>
                <li>Закриття рахунків та бухгалтерські звіти</li>
                <li>Погашення зобов’язань та виплата податків</li>
                <li>Отримання підтвердження про закриття ФОП</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-800">ТОВ</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Прийняття рішення про ліквідацію та оформлення протоколу</li>
                <li>Підготовка документів для держреєстру та податкової</li>
                <li>Закриття рахунків та розрахунки з кредиторами</li>
                <li>Отримання свідоцтва про ліквідацію</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Common Mistakes Section */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
            Найпоширеніші помилки при самостійному закритті
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="card bg-white shadow-lg p-6 rounded-lg transform transition">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Неправильна подача документів</h3>
              <p className="text-gray-600">
                Помилки у формах можуть призвести до відмови або затримки ліквідації.
              </p>
            </div>
            <div className="card bg-white shadow-lg p-6 rounded-lg transform transition">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Пропущені строки</h3>
              <p className="text-gray-600">
                Несвоєчасне подання документів затримує закриття бізнесу та може спричинити штрафи.
              </p>
            </div>
            <div className="card bg-white shadow-lg p-6 rounded-lg transform transition">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Невраховані зобов'язання</h3>
              <p className="text-gray-600">
                Неоплачені податки чи борги можуть ускладнити процес ліквідації або привести до відповідальності.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
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

export default Liquidation;
