import Contact from "../components/Contact";

const TM = () => {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* ===== ЦІНА ===== */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Реєстрація торгової марки
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Захистіть власний бренд від копіювання та користуйтеся всіма юридичними перевагами офіційної ТМ
          </p>
        </div>
  <div className="max-w-6xl mx-auto px-6">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">

    {/* LEFT: Price + Order */}
    <div className="bg-white shadow-xl rounded-2xl p-10 flex flex-col justify-between h-full">
  <div className="flex flex-col gap-3">
    <h2 className="text-3xl font-bold text-gray-800 mb-4">Вартість реєстрації</h2>

    {/* Цена с маленьким текстом для держ.зборів */}
    <p className="text-5xl font-semibold text-green-800 mb-4 flex items-end gap-2">
      4000 ₴
      <span className="text-lg font-normal text-gray-500">+ держ.збори</span>
    </p>

    <p className="text-gray-600 text-lg mb-6">
      Ціна залежить від кількості класів МКТП та формату подачі заявки.
      Ми підберемо найкращий пакет саме для вашого бізнесу.
    </p>

    <a
      href="#contact"
      className="btn btn-neutral w-full md:w-auto px-8 py-3 text-lg font-semibold"
    >
      Зареєструвати торгову марку
    </a>
  </div>
</div>


    {/* RIGHT: Included Services */}
    <div className="bg-white shadow-xl rounded-2xl p-10 flex flex-col h-full">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Що входить у послугу</h2>
      <ul className="space-y-4 text-gray-700 text-lg flex-1">
        {[
          "Консультація з вибору класів МКТП",
          "Підготовка та подача заявки до УКРНОІВІ",
          "Супровід під час розгляду заявки",
          "Отримання свідоцтва на ТМ",
          "Реєстрація онлайн та у базі МКТП",
          "Повний пакет документів для використання ТМ"
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


      {/* ===== ОПИС ===== */}
      <section className="pb-16">
  <div className="max-w-6xl mx-auto px-6">
    <div className="card bg-white shadow-md rounded-2xl overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* LEFT: Image collage */}
        <div className="relative h-72 md:h-full w-full">
          <img
            src="/tm2.jpg" // замени на свой коллаж
            alt="Відомі бренди"
            className="object-cover w-full h-full rounded-l-2xl"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-black/30 to-transparent"></div>
        </div>

        {/* RIGHT: Text */}
        <div className="p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            Що таке торговельна марка?
          </h2>

          <p className="text-gray-600 leading-relaxed text-lg">
            Торговельна марка (ТМ) — це унікальне позначення, яке дозволяє
            ідентифікувати ваш продукт або послугу серед конкурентів.
            Після реєстрації ви отримуєте повні юридичні права на використання
            бренду та можливість захистити його від порушень.
          </p>
        </div>

      </div>
    </div>
  </div>
</section>


      {/* ===== НАВІЩО ПОТРІБНА ТМ ===== */}
      <section className="pb-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Навіщо потрібна реєстрація торгової марки?
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Юридичний захист бренду",
              "Заборона конкурентам копіювати назву чи логотип",
              "Захист бізнес-репутації",
              "Підвищення довіри клієнтів",
              "Вихід на маркетплейси (Rozetka, Amazon, Etsy)",
              "Можливість офіційно передавати права на бренд"
            ].map((item, i) => (
              <div key={i} className="card bg-white p-6 shadow-sm border border-gray-100 rounded-xl">
                <p className="text-gray-700 text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* ===== ПЕРЕВАГИ ===== */}
      <section className="pb-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Переваги реєстрації ТМ
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Правовий захист назви/логотипу",
              "Можливість отримати домен .UA",
              "Захист інтелектуальної власності",
              "Офіційна заборона копіювання",
              "Підвищення вартості бренду",
              "Переваги при співпраці з партнерами"
            ].map((item, i) => (
              <div key={i} className="card bg-white p-6 shadow-md border border-gray-100 rounded-xl">
                <p className="text-gray-700 text-lg font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ФРАНЧАЙЗИНГ ===== */}
      <section className="pb-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="card bg-white shadow-md p-8 rounded-2xl">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Франчайзинг через торговельну марку
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              Зареєстрована ТМ дозволяє офіційно продавати або передавати право 
              використання бренду іншим підприємцям. Це відкриває можливості 
              для масштабування бізнесу через франшизу, збільшення прибутку та 
              розширення географії компанії.  
              ТМ — це ключовий актив, без якого франчайзинг неможливий.
            </p>
          </div>
        </div>
      </section>

      {/* ===== КОНТАКТНА ФОРМА ===== */}
      <Contact />
    </div>
  );
};

export default TM;
