import Contact from "../components/Contact";
import FormForFeedback from "../components/FormForFeedback";

const RRO = () => {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* ===== HERO ===== */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Реєстрація РРО / ПРРО
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Офіційна реєстрація касового апарату або програмного РРО
            з дотриманням усіх вимог податкового законодавства
          </p>
          <button
                    className="btn w-80 py-5 btn-neutral text-lg font-semibold mt-10"
                    onClick={() =>
                      document.getElementById("my_modal_2").showModal()
                    }
                  >
                    Замовити реєстрацію
                  </button>
        </div>
      </section>

      {/* ===== ПОСЛУГИ ===== */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Наші послуги
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            {[
              {
                title: "Реєстрація РРО / ПРРО",
                desc: "Підготовка документів, реєстрація в податковій та введення в експлуатацію",
                price: "2500 ₴"
              },
              {
                title: "РРО / ПРРО з інтеграцією Нової Пошти",
                desc: "Реєстрація каси + інтеграція з сервісом Нової Пошти для автоматичної фіскалізації",
                price: "3500 ₴"
              }
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white shadow-xl border border-gray-100 rounded-2xl p-8 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-lg mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <span className="text-3xl font-semibold text-gray-900">
                    {item.price}
                  </span>
                  
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ===== КОМУ ПОТРІБЕН РРО ===== */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Кому обовʼязково потрібен РРО / ПРРО
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "ФОП, що приймають готівку або карткові платежі",
              "Інтернет-магазини",
              "Продаж товарів через маркетплейси",
              "Курʼєрська доставка з оплатою при отриманні",
              "ТОВ з розрахунками з фізичними особами",
              "Продаж підакцизних товарів"
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 shadow-sm border border-gray-100 rounded-xl"
              >
                <p className="text-gray-700 text-lg">{item}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ===== КОМУ НЕ ПОТРІБЕН ===== */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Кому РРО не потрібен
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "ФОП без готівкових розрахунків",
              "Оплата виключно на IBAN",
              "Без приймання карток",
              "Без післяплати",
              "Без фізичної точки продажу",
              "Окремі винятки за КВЕД"
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 shadow-sm border border-gray-100 rounded-xl"
              >
                <p className="text-gray-700 text-lg">{item}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ===== ІНТЕГРАЦІЯ НП ===== */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Кому потрібна інтеграція з Новою Поштою?
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Інтернет-магазинам",
              "Продажам з оплатою при отриманні",
              "Бізнесу з великою кількістю відправлень",
              "Автоматичній фіскалізації чеків",
              "Зменшенню ручної роботи",
              "Мінімізації помилок персоналу"
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 shadow-sm border border-gray-100 rounded-xl"
              >
                <p className="text-gray-700 text-lg">{item}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ===== ШТРАФИ ===== */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-6">

          <div className="bg-white shadow-lg border border-gray-200 rounded-2xl p-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Штраф за нефіскалізацію
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Перше порушення
                </h3>
                <p className="text-gray-700 text-lg">
                  Штраф у розмірі <strong>100% вартості товару</strong>,
                  проданого без фіскального чека
                </p>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Повторне порушення
                </h3>
                <p className="text-gray-700 text-lg">
                  Штраф у розмірі <strong>150% вартості товару</strong>
                </p>
              </div>
            </div>

            
          </div>

        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <Contact />

      {/* ===== MODAL ===== */}
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

export default RRO;
