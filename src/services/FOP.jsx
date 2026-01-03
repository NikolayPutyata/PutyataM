import Contact from "../components/Contact";
import FormForFeedback from "../components/FormForFeedback";


const FOP = () => {


  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Реєстрація Вашого бізнесу
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Швидка та безпечна реєстрація ФОП або ТОВ з повним юридичним супроводом
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">

            {/* ФОП */}
            <div className="bg-white shadow-xl border border-gray-100 rounded-2xl p-10 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Реєстрація ФОП
                </h2>
                <p className="text-gray-600 mb-6">
                  Реєструємо ФОП під ключ без помилок, відмов та зайвої бюрократії.
                </p>

                <p className="text-4xl font-semibold text-gray-900 mb-6">
                  1000 ₴
                </p>

                <p className="text-gray-500 mb-6">
                  Включає підбір КВЕДів, систему оподаткування та консультацію.
                </p>
              </div>

              <button
                className="btn btn-neutral w-full md:w-auto px-8 py-3 text-lg font-semibold"
                onClick={() =>
                  document.getElementById("my_modal_2").showModal()
                }
              >
                Зареєструвати ФОП
              </button>
            </div>

            {/* ТОВ */}
            <div className="bg-white shadow-xl border border-gray-100 rounded-2xl p-10 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Реєстрація ТОВ
                </h2>
                <p className="text-gray-600 mb-6">
                  Повний юридичний супровід створення ТОВ з урахуванням податків.
                </p>

                <p className="text-4xl font-semibold text-gray-900 mb-6">
                  від 2500 ₴
                </p>

                <p className="text-gray-500 mb-6">
                  Підготовка документів, статут, консультації та податкові налаштування.
                </p>
              </div>

              <button
                className="btn btn-neutral w-full md:w-auto px-8 py-3 text-lg font-semibold"
                onClick={() =>
                  document.getElementById("my_modal_2").showModal()
                }
              >
                Зареєструвати ТОВ
              </button>
            </div>

          </div>
        </div>
      </section>





      {/* Info Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/business-registration.png"
              alt="Регистрация бизнеса"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-gray-900">
              Чому обирають нас
            </h2>
            <ul className=" text-gray-600 space-y-2">
              <li className="flex items-start gap-3"><span className="text-green-600 font-bold text-xl">✓</span> <span>Повний супровід процесу реєстрації ФОП</span></li>
              <li className="flex items-start gap-3"><span className="text-green-600 font-bold text-xl">✓</span> <span>Швидке оформлення документів</span></li>
              <li className="flex items-start gap-3"><span className="text-green-600 font-bold text-xl">✓</span> <span>Консультації з юридичних та податкових питань</span></li>
              <li className="flex items-start gap-3"><span className="text-green-600 font-bold text-xl">✓</span> <span>Прозорі тарифи без прихованих платежів</span></li>
            </ul>
          </div>
        </div>
      </section>
<section className="bg-white py-20">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">
      Найпоширеніші помилки при самостійній реєстрації
    </h2>

    <div className="grid gap-8 md:grid-cols-3">
      {/* Ошибка 1 */}
      <div className="card bg-white shadow-lg p-6 rounded-lg transform transition">
        <div className="flex items-center mb-4">
          <div className="w-12 h-9 flex justify-center items-center bg-red-100 rounded-full text-red-600 text-xl font-bold">
            1
          </div>
          <h3 className="ml-4 text-xl font-semibold text-gray-800">
            Неправильно заповнені документи
          </h3>
        </div>
        <p className="text-gray-600">
          Помилки в формах можуть призвести до відмови у реєстрації або в реєстрації на неправильній системі оподаткування.
        </p>
      </div>

      {/* Ошибка 2 */}
      <div className="card bg-white shadow-lg p-6 rounded-lg transform transition">
        <div className="flex items-center mb-4">
          <div className="w-12 h-9 flex justify-center items-center bg-red-100 rounded-full text-red-600 text-xl font-bold">
            2
          </div>
          <h3 className="ml-4 text-xl font-semibold text-gray-800">
            Вибір неправильного коду діяльності
          </h3>
        </div>
        <p className="text-gray-600">
          Некоректний вид діяльності може ускладнити діяльність податковий облік, та призвести до штрафу.
        </p>
      </div>

      {/* Ошибка 3 */}
      <div className="card bg-white shadow-lg p-6 rounded-lg transform transition">
        <div className="flex items-center mb-4">
          <div className="w-12 h-9 flex justify-center items-center bg-red-100 rounded-full text-red-600 text-xl font-bold">
            3
          </div>
          <h3 className="ml-4 text-xl font-semibold text-gray-800">
            Пропущені строки подачі документів
          </h3>
        </div>
        <p className="text-gray-600">
          Невчасна подача може затримати відкриття бізнесу і спровокувати штрафи.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* Form Section */}
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

export default FOP;
