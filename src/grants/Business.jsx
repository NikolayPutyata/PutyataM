import Contact from "../components/Contact";
import FormForFeedback from "../components/FormForFeedback";

const Business = () => {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* ===== HERO + ЦІНА ===== */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Грант на власну справу
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Допоможемо отримати державний грант на відкриття або розвиток бізнесу — 
            від ідеї до зарахування коштів
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">

            {/* LEFT: Price */}
            <div className="bg-white shadow-xl rounded-2xl p-10 flex flex-col justify-between h-full">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Вартість послуги
                </h2>

                <p className="text-5xl font-semibold text-gray-900 mb-4">
                  10 000 ₴
                </p>

                <p className="text-gray-600 text-lg mb-6">
                  Ціна залежить від типу гранту та складності бізнес-плану.
                  Працюємо під ключ — без шаблонів і формальностей.
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
                  "Аналіз вашої ідеї та відповідності умовам гранту",
                  "Підбір оптимальної грантової програми",
                  "Підготовка бізнес-плану під вимоги комісії",
                  "Заповнення та подача заявки",
                  "Супровід до прийняття рішення",
                  "Консультації після отримання гранту"
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
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-3xl font-bold text-gray-900 mb-4">
      Суми грантів на власну справу
    </h2>
    <p className="text-gray-600 text-lg mb-10 max-w-3xl">
      Розмір гранту залежить від масштабу бізнесу та зобовʼязань підприємця.
      Ми допомагаємо підібрати оптимальну суму та підготувати заявку без ризику відмови.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

      {/* 75 000 */}
      <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 flex flex-col">
        <span className="text-sm text-gray-500 mb-2">Старт</span>
        <h3 className="text-2xl font-bold text-gray-900 mb-1">
          75 000 ₴
        </h3>

        <ul className="space-y-3 text-gray-700 text-base mt-6 flex-1">
          <li className="flex gap-2">
            <span className="text-green-600 font-bold">✓</span>
            Реєстрація ФОП
          </li>
          <li className="flex gap-2">
            <span className="text-green-600 font-bold">✓</span>
            Простий бізнес-план
          </li>
          <li className="flex gap-2">
            <span className="text-green-600 font-bold">✓</span>
            Без найманих працівників
          </li>
        </ul>
      </div>

      {/* 150 000 */}
      <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 flex flex-col">
        <span className="text-sm text-gray-500 mb-2">Малий бізнес</span>
        <h3 className="text-2xl font-bold text-gray-900 mb-1">
          150 000 ₴
        </h3>

        <ul className="space-y-3 text-gray-700 text-base mt-6 flex-1">
          <li className="flex gap-2">
            <span className="text-green-600 font-bold">✓</span>
            ФОП або ТОВ
          </li>
          <li className="flex gap-2">
            <span className="text-green-600 font-bold">✓</span>
            Бізнес-план з фінансовими розрахунками
          </li>
          <li className="flex gap-2">
            <span className="text-green-600 font-bold">✓</span>
            Створення 1 робочого місця 
          </li>
        </ul>
      </div>

      {/* 250 000 */}
      <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 flex flex-col relative">
        <span className="absolute top-4 right-4 bg-green-100 text-green-700 text-sm font-semibold px-3 py-1 rounded-full">
          Найпопулярніший
        </span>

        <span className="text-sm text-gray-500 mb-2">Розвиток</span>
        <h3 className="text-2xl font-bold text-gray-900 mb-1">
          250 000 ₴
        </h3>

        <ul className="space-y-3 text-gray-700 text-base mt-6 flex-1">
          <li className="flex gap-2">
            <span className="text-green-600 font-bold">✓</span>
            Діючий або новий бізнес
          </li>
          <li className="flex gap-2">
            <span className="text-green-600 font-bold">✓</span>
            Повноцінний бізнес-план
          </li>
          <li className="flex gap-2">
            <span className="text-green-600 font-bold">✓</span>
            Від 2 робочих місць
          </li>
        </ul>
      </div>

      {/* 500 000 */}
      <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 flex flex-col">
        <span className="text-sm text-gray-500 mb-2">Масштабування</span>
        <h3 className="text-2xl font-bold text-gray-900 mb-1">
          500 000 ₴
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
            Від 2 робочих місць
          </li>
        </ul>
      </div>

    </div>
  </div>
</section>

{/* ===== ЕТАПИ РОБОТИ ===== */}
<section className="pb-24">
  <div className="max-w-4xl mx-auto px-6">
    <h2 className="text-3xl font-bold text-gray-900 mb-4">
      Етапи отримання гранту
    </h2>
    <p className="text-gray-600 text-lg mb-14 max-w-3xl">
      Ми супроводжуємо вас на кожному етапі — від ідеї до зарахування коштів.
      Ви розумієте, що відбувається, і знаєте, який наступний крок.
    </p>

    <div className="relative">

      {/* Vertical line */}
      <div className="absolute  hidden md:block"></div>

      <div className="space-y-12">

        {/* Step 1 */}
        <div className="flex gap-3 items-start">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center font-semibold">
              1
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 w-full">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Консультація та оцінка ідеї
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Аналізуємо вашу бізнес-ідею, досвід, регіон та відповідність
              умовам грантової програми. Одразу кажемо, на яку суму
              реально можна претендувати.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex gap-3 items-start">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center font-semibold">
              2
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 w-full">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Вибір суми та стратегії
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Підбираємо оптимальну суму гранту, формуємо бізнес-логіку,
              визначаємо кількість робочих місць та фінансову модель,
              яка виглядатиме переконливо для комісії.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex gap-3 items-start">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center font-semibold">
              3
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 w-full">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Підготовка бізнес-плану
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Готуємо бізнес-план відповідно до вимог державної програми:
              розрахунки, витрати, прибутковість, робочі місця.
              Без шаблонів і формальностей.
            </p>
          </div>
        </div>

        {/* Step 4 */}
        <div className="flex gap-3 items-start">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center font-semibold">
              4
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 w-full">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Подача заявки через Дію
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Допомагаємо правильно подати заявку через портал Дія,
              перевіряємо всі дані та супроводжуємо процес,
              щоб уникнути технічних помилок.
            </p>
          </div>
        </div>

        {/* Step 5 */}
        <div className="flex gap-3 items-start">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center font-semibold">
              5
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 w-full">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Розгляд та рішення комісії
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Очікуємо рішення, за потреби готуємо пояснення
              або коригування. Ви постійно на звʼязку та знаєте статус заявки.
            </p>
          </div>
        </div>

        {/* Step 6 */}
        <div className="flex gap-3 items-start">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-semibold">
              ✓
            </div>
          </div>

          <div className="bg-green-50 p-8 rounded-2xl border border-green-200 w-full">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Зарахування коштів
            </h3>
            <p className="text-gray-700 text-base leading-relaxed">
              Після позитивного рішення кошти зараховуються на рахунок.
              За потреби — консультуємо щодо використання гранту
              та звітності.
            </p>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>




      

      {/* ===== ДЛЯ КОГО ===== */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Кому підійде ця послуга
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Тим, хто хоче відкрити власний бізнес з нуля",
              "Підприємцям, які планують масштабування",
              "ФОП та ТОВ, що потребують додаткового фінансування",
              "Людям без досвіду написання бізнес-планів",
              "Тим, хто не хоче ризикувати відмовою",
              "Тим, хто цінує час та результат"
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

      {/* ===== ПЕРЕВАГИ ===== */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Чому обирають нас
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Реальний досвід успішних грантів",
              "Бізнес-плани без шаблонів",
              "Фокус на результат, а не на процес",
              "Знання вимог комісій",
              "Юридична та фінансова логіка",
              "Підтримка після отримання коштів"
            ].map((item, i) => (
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

export default Business;
