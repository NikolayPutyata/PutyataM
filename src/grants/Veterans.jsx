import Contact from "../components/Contact";
import FormForFeedback from "../components/FormForFeedback";

const Veterans = () => {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* ===== HERO + ЦІНА ===== */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Грант для ветеранів та їх сімей
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Супровід отримання державного гранту для ветеранів,
            учасників бойових дій та членів їх сімей —
            від консультації до зарахування коштів
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">

            {/* LEFT: Price */}
            <div className="bg-white shadow-xl rounded-2xl p-10 flex flex-col justify-between h-full">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Вартість отримання
                </h2>

                <p className="text-5xl font-semibold text-gray-900 mb-4">
                  10 000 ₴
                </p>

                <p className="text-gray-600 text-lg mb-6">
                  Остаточна ціна залежить від суми гранту
                  та складності бізнес-проєкту.
                  Працюємо індивідуально, без шаблонів.
                </p>
              </div>

              <button
                className="btn btn-neutral w-full md:w-auto px-8 py-3 text-lg font-semibold"
                onClick={() =>
                  document.getElementById("my_modal_2").showModal()
                }
              >
                Отримати грант
              </button>
            </div>

            {/* RIGHT: Services */}
            <div className="bg-white shadow-xl rounded-2xl p-10 flex flex-col h-full">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Що ми робимо для вас
              </h2>

              <ul className="space-y-4 text-gray-700 text-lg flex-1">
                {[
                  "Перевірка статусу ветерана та відповідності умовам програми",
                  "Аналіз бізнес-ідеї або діючого бізнесу",
                  "Підбір оптимальної суми ветеранського гранту",
                  "Підготовка бізнес-плану під вимоги комісії",
                  "Заповнення та подача заявки через Дію",
                  "Супровід до отримання рішення та коштів",
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

      {/* ===== СУМИ ГРАНТІВ ===== */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Суми грантів для ветеранів
          </h2>
          <p className="text-gray-600 text-lg mb-10 max-w-3xl">
            Держава передбачає окремі програми підтримки
            для ветеранів, УБД та членів їх сімей.
            Ми допомагаємо обрати реальну суму без ризику відмови.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 flex flex-col">
              <span className="text-sm text-gray-500 mb-2">Початок</span>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">
                250 000 ₴
              </h3>

              <ul className="space-y-3 text-gray-700 text-base mt-6 flex-1">
                <li className="flex gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  Бізнес з нуля
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  ФОП
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  2 найманих працівника
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  на 3 або 5 років
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 flex flex-col relative">
              <span className="absolute top-4 right-4 bg-green-100 text-green-700 text-sm font-semibold px-3 py-1 rounded-full">
                Найпопулярніший
              </span>

              <span className="text-sm text-gray-500 mb-2">Розвиток</span>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">
                500 000 ₴
              </h3>

              <ul className="space-y-3 text-gray-700 text-base mt-6 flex-1">
                <li className="flex gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  Новий або діючий бізнес
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  Повний бізнес-план
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  2 найманих працівника
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  на 3 або 5 років
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 flex flex-col">
              <span className="text-sm text-gray-500 mb-2">Масштаб</span>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">
                1 000 000 ₴
              </h3>

              <ul className="space-y-3 text-gray-700 text-base mt-6 flex-1">
                <li className="flex gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  Діючий бізнес
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  Детальний фінансовий план
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  Наймані працівники
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  на 5 та більше років
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ===== ДЛЯ КОГО ===== */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Кому підійде грант
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Ветеранам та учасникам бойових дій",
              "Членам сімей ветеранів",
              "Тим, хто планує відкрити власну справу",
              "Підприємцям-ветеранам для розвитку бізнесу",
              "Тим, хто не має досвіду подачі грантів",
              "Тим, хто хоче мінімізувати ризик відмови",
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

export default Veterans;
