import Contact from "../components/Contact";
import FormForFeedback from "../components/FormForFeedback";

const Paper = () => {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* ===== HERO ===== */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Подання бухгалтерської та податкової звітності
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Разове або регулярне подання звітності для ФОП та ТОВ —
            точно в строк і без ризиків
          </p>
          <button
                    className="btn w-80 py-5 btn-neutral text-lg font-semibold mt-10"
                    onClick={() =>
                      document.getElementById("my_modal_2").showModal()
                    }
                  >
                    Замовити звіт
                  </button>
        </div>
      </section>

      {/* ===== СПИСОК ЗВІТНОСТІ ===== */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Яку звітність ми подаємо
          </h2>

          <div className="grid gap-6">

            {[
              {
                title: "Єдиний податок (декларація ФОП)",
                desc: "Квартальна або річна декларація для ФОП 1–3 групи",
                price: "2000 ₴"
              },
              {
                title: "ЄСВ (Д5)",
                desc: "Звіт з єдиного соціального внеску",
                price: "1000 ₴"
              },
              {
                title: "Обʼєднаний звіт (ПДФО + ЄСВ)",
                desc: "Зарплатна звітність по працівниках",
                price: "3000 ₴"
              },
              {
                title: "Декларація з ПДВ",
                desc: "Щомісячна звітність для платників ПДВ",
                price: "2000 ₴"
              },
              {
                title: "Фінансова звітність ТОВ",
                desc: "Баланс та звіт про фінансові результати",
                price: "4000 ₴"
              },
              {
                title: "Нульова звітність",
                desc: "Для ФОП або ТОВ без діяльності",
                price: "1000 ₴"
              }
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white shadow-md border border-gray-100 rounded-2xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
              >
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-base">
                    {item.desc}
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-2xl font-bold text-gray-900 whitespace-nowrap">
                    {item.price}
                  </span>
                  
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ===== ДЛЯ КОГО ===== */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Кому підходить послуга
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "ФОП без бухгалтера",
              "ТОВ з разовою потребою у звітності",
              "Підприємці після зміни бухгалтера",
              "Бізнес без діяльності",
              "Компанії перед перевіркою",
              "Новостворені ФОП та ТОВ"
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
            Чому варто звернутись до нас
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Подання точно в строк",
              "Перевірка перед відправкою",
              "Актуальність законодавства",
              "Без штрафів та помилок",
              "Електронне подання",
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

export default Paper;
