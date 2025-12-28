import React from "react";
import Contact from "../components/Contact";
import FormForFeedback from "../components/FormForFeedback";

const Contracts = () => {
  const contractCategories = [
    {
      title: "Оренда",
      items: [
        "Договір оренди приміщення",
        "Договір оренди обладнання",
        "Договір оренди транспорту"
      ],
    },
    {
      title: "Комерційна діяльність",
      items: [
        "Договір комерційної концесії (франшиза)",
        "Ліцензійний договір",
        "Договір партнерства",
        "Договір про нерозголошення (NDA)"
      ],
    },
    {
      title: "Угоди та поставки",
      items: [
        "Договір купівлі-продажу",
        "Договір поставки",
        "Договір підряду",
        "Договір на надання послуг",
        "Договір консалтинговий"
      ],
    },
    {
      title: "Фінансові та агентські",
      items: [
        "Договір позики",
        "Договір комісії",
        "Договір агентський"
      ],
    },
    {
      title: "Інші",
      items: ["Інші корпоративні та цивільно-правові договори"]
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Hero Section */}
      <section className="py-15 text-center flex flex-col gap-10 items-center">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Юридичне оформлення договорів
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Професійно готуємо та перевіряємо договори будь-якої складності. 
            Захистіть свої права та бізнес, не ризикуючи через помилки у документах.
          </p>
          
        </div>
        <button className="btn w-80 py-5 btn-neutral text-lg font-semibold" onClick={()=>document.getElementById('my_modal_2').showModal()}>Замовити договір</button>
   
      </section>

      {/* Contracts List */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-gray-800 text-center">
            Види договорів, які ми оформляємо
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contractCategories.map((category, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-gray-700">
                      <span className="text-green-600 font-bold mt-1">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
            Чому обирають нас
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-50 rounded-xl shadow-md text-center">
              <h3 className="text-xl font-semibold mb-2">Юридична безпека</h3>
              <p className="text-gray-600">
                Усі договори відповідають законодавству та захищають ваші права.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl shadow-md text-center">
              <h3 className="text-xl font-semibold mb-2">Швидке оформлення</h3>
              <p className="text-gray-600">
                Ми підготуємо та перевіримо договір у короткі строки.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl shadow-md text-center">
              <h3 className="text-xl font-semibold mb-2">Індивідуальний підхід</h3>
              <p className="text-gray-600">
                Кожен договір адаптуємо під ваш бізнес та конкретну ситуацію.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
            Як ми працюємо
          </h2>
          <ul className="list-decimal list-inside text-gray-700 space-y-3 max-w-3xl mx-auto text-lg">
            <li>Консультація та визначення потреб клієнта</li>
            <li>Підготовка проєкту договору або перевірка вашого документа</li>
            <li>Юридичне опрацювання умов та ризиків</li>
            <li>Фінальне узгодження та підписання</li>
            <li>Забезпечення збереження документів та консультації по виконанню</li>
          </ul>
        </div>
      </section>

      {/* Contact Form */}
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

export default Contracts;
