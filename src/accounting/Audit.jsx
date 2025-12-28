import Contact from "../components/Contact";
import FormForFeedback from "../components/FormForFeedback";

const Audit = () => {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* ===== HERO ===== */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Бухгалтерський аудит ФОП
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Повна перевірка фінансового та податкового стану ФОП,
            звітності та сплати податків без ризиків і сюрпризів
          </p>
          <button className="btn w-80 py-5 btn-neutral text-lg font-semibold mt-10" onClick={()=>document.getElementById('my_modal_2').showModal()}>Замовити аудит</button>
  
        </div>
      </section>

      {/* ===== ПОСЛУГА ===== */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-6">

          <div className="bg-white shadow-xl border border-gray-100 rounded-2xl p-10">

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Комплексний аудит ФОП
                </h2>

                <p className="text-gray-600 text-lg max-w-3xl">
                  Глибокий аналіз діяльності ФОП з виявленням помилок,
                  ризиків та можливих штрафів ще до перевірок податкової
                </p>
              </div>

              <div className="flex flex-col items-start md:items-end gap-4">
                <span className="text-4xl font-semibold text-gray-900">
                  3000 ₴
                </span>
                
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===== ЩО ПЕРЕВІРЯЄМО ===== */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Що входить в аудит
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Перевірка реєстраційних даних ФОП",
              "Перевірка системи оподаткування",
              "Аналіз податкової звітності",
              "Контроль своєчасності подання звітів",
              "Перевірка сплати податків і ЄСВ",
              "Виявлення переплат або заборгованостей",
              "Перевірка відповідності КВЕДів діяльності",
              "Оцінка ризиків штрафів і перевірок",
              "Рекомендації з виправлення помилок"
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 shadow-sm border border-gray-100 rounded-xl"
              >
                <li key={i} className="flex items-start gap-3">
            <span className="text-green-600 font-bold text-xl">✓</span>
            <span>{item}</span>
          </li>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ===== КОМУ ПОТРІБЕН ===== */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-6">

          <div className="bg-white shadow-lg border border-gray-200 rounded-2xl p-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Кому обовʼязково потрібен аудит
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                "ФОП без бухгалтера або з самостійним веденням",
                "Перед закриттям ФОП",
                "Перед перевіркою податкової",
                "При зміні бухгалтера",
                "При переході на іншу систему оподаткування",
                "Після періоду активної діяльності"
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-gray-50 border border-gray-200 rounded-xl p-6"
                >
                  <p className="text-gray-700 text-lg">{item}</p>
                </div>
              ))}
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

export default Audit;
