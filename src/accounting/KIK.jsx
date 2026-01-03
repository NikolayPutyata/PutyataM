import Contact from "../components/Contact";
import FormForFeedback from "../components/FormForFeedback";

const KIK = () => {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* ===== HERO ===== */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Контрольовані іноземні компанії (КІК)
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Професійний супровід з подання повідомлень та звітності по КІК
            відповідно до вимог податкового законодавства України
          </p>
          <button
                    className="btn w-80 py-5 btn-neutral text-lg font-semibold mt-10"
                    onClick={() =>
                      document.getElementById("my_modal_2").showModal()
                    }
                  >
                    Замовити послугу
                  </button>
        </div>
      </section>

      {/* ===== ПОСЛУГИ ===== */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Наші послуги з КІК
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            {[
              {
                title: "Подання повідомлення про КІК",
                desc: "Повідомлення подається при набутті або втраті контролю над іноземною компанією",
                price: "2000 ₴"
              },
              {
                title: "Часткова звітність по КІК",
                desc: "Підготовка та подання звітності без фінансової звітності КІК",
                price: "4000 ₴"
              },
              {
                title: "Повна звітність по КІК",
                desc: "Звіт КІК + фінансова звітність + розрахунок податкових зобовʼязань",
                price: "8000 ₴"
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

                <div className="flex flex-col gap-4">
                  <span className="text-3xl font-semibold text-gray-900">
                    {item.price}
                  </span>
                  
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ===== ШТРАФИ ===== */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-6">

          <div className="bg-white shadow-lg border border-gray-200 rounded-2xl p-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Штрафи за порушення вимог по КІК
            </h2>

            <div className="grid md:grid-cols-3 gap-6">

              {[
                {
                  title: "Неподання повідомлення про КІК",
                  text: "Штраф у розмірі до 300 прожиткових мінімумів",
                },
                {
                  title: "Неподання звітності по КІК",
                  text: "Штраф до 1000 прожиткових мінімумів",
                },
                {
                  title: "Несвоєчасне подання",
                  text: "Штраф за кожен день прострочення",
                }
              ].map((item, i) => (
                <div
                  key={i}
                  className=" p-3"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 text-lg">
                    {item.text}
                  </p>
                </div>
              ))}

            </div>

            
          </div>

        </div>
      </section>

      {/* ===== ДЛЯ КОГО ===== */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Кому необхідно подавати КІК?
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Фізичним особам — резидентам України",
              "Власникам іноземних компаній",
              "Осіб з фактичним контролем над бізнесом",
              "Учасникам іноземних юросіб",
              "Бенефіціарам трастів та фондів",
              "Платникам податків з КІК"
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
              "Досвід роботи з КІК",
              "Аналіз структури власності",
              "Робота з іноземною фінзвітністю",
              "Податкове планування",
              "Конфіденційність",
              "Повний юридичний супровід"
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

export default KIK;
