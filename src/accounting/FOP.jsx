import Contact from "../components/Contact";
import FormForFeedback from "../components/FormForFeedback";

const FOP = () => {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* ===== HERO + ЦІНА ===== */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Ведення бухгалтерії ФОП
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Повний бухгалтерський супровід ФОП без штрафів, ризиків та зайвих витрат
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">

            {/* LEFT: Price */}
            <div className="bg-white shadow-xl rounded-2xl p-10 flex flex-col justify-between h-full">
              <div className="flex flex-col gap-3">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Вартість обслуговування
                </h2>

                <p className="text-5xl font-semibold text-gray-900 mb-4">
                  від 2500 ₴
                  <span className="text-lg font-normal text-gray-500 ml-2">
                    / місяць
                  </span>
                </p>

                <p className="text-gray-600 text-lg mb-6">
                  Вартість залежить від групи ФОП, кількості операцій та
                  працівників. Ми підберемо оптимальний тариф саме для вас.
                </p>

                <button
                  className="btn btn-neutral w-full md:w-auto px-8 py-3 text-lg font-semibold"
                  onClick={() =>
                    document.getElementById("my_modal_2").showModal()
                  }
                >
                  Замовити консультацію
                </button>
              </div>
            </div>

            {/* RIGHT: Services */}
            <div className="bg-white shadow-xl rounded-2xl p-10 flex flex-col h-full">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Що входить у послугу
              </h2>

              <ul className="space-y-4 text-gray-700 text-lg flex-1">
                {[
                  "Повне ведення бухгалтерського обліку",
                  "Подання податкової звітності",
                  "Розрахунок та сплата податків",
                  "Контроль строків та звітних періодів",
                  "Консультації з податкових питань",
                  "Комунікація з податковими органами"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="font-bold text-xl">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ===== ОПИС ===== */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white shadow-md rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              {/* LEFT IMAGE */}
              <div className="relative h-72 md:h-full w-full">
                <img
                  src="/fop.jpg"
                  alt="Бухгалтерія ФОП"
                  className="object-cover w-full h-full rounded-l-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent"></div>
              </div>

              {/* RIGHT TEXT */}
              <div className="p-8 flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">
                  Що таке бухгалтерський супровід ФОП?
                </h2>

                <p className="text-gray-600 leading-relaxed text-lg">
                  Ведення бухгалтерії ФОП — це системний контроль фінансової
                  діяльності підприємця: облік доходів і витрат, податки,
                  звітність та взаємодія з податковими органами.
                  Професійний супровід дозволяє вам зосередитись на бізнесі,
                  не переймаючись паперовою роботою та штрафами.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ===== НАВІЩО ===== */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Навіщо ФОПу професійний бухгалтер?
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Відсутність штрафів та помилок",
              "Своєчасна подача звітності",
              "Оптимізація податкового навантаження",
              "Спокій під час перевірок",
              "Економія часу підприємця",
              "Постійний контроль фінансів"
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
            Наші переваги
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Досвід роботи з ФОП",
              "Фіксована щомісячна вартість",
              "Персональний бухгалтер",
              "Контроль усіх дедлайнів",
              "Актуальність відповідно до законодавства",
              "Конфіденційність даних"
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

export default FOP;
