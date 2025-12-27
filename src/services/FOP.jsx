import Contact from "../components/Contact";
import FormForFeedback from "../components/FormForFeedback";


const FOP = () => {


  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-50 py-20">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h1 className="text-4xl md:text-5xl font-bold mb-12 text-gray-800">
      Реєстрація Вашого бізнесу
    </h1>

    <div className="flex flex-col md:flex-row gap-8">
      {/* ФОП */}
      <div className="bg-white shadow-lg rounded-xl p-8 flex-1 flex flex-col items-center md:items-start text-center md:text-left">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">ФОП</h2>
        <p className="text-gray-600 mb-6">
          Швидко та без зайвих клопотів допоможемо зареєструвати ваш ФОП.
        </p>
        <p className="text-3xl font-semibold text-green-600 mb-6">1000 ₴</p>
        <p className="text-gray-500 mb-6">
          Включає всі послуги та консультації для реєстрації ФОП.
        </p>
        <button className="btn btn-neutral" onClick={()=>document.getElementById('my_modal_2').showModal()}>Зареєструвати ФОП</button>
         
        
      </div>

      {/* ТОВ */}
      <div className="bg-white shadow-lg rounded-xl p-8 flex-1 flex flex-col items-center md:items-start text-center md:text-left">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">ТОВ</h2>
        <p className="text-gray-600 mb-6">
          Повний супровід відкриття ТОВ, юридична підтримка та податкові консультації.
        </p>
        <div className="flex gap-2 justify-center"><span>Від</span><p className="text-3xl font-semibold text-green-600">2500 ₴</p></div>
        <p className="text-gray-500 mb-6">
          Включає всі необхідні документи та консультації.
        </p>
        <button className="btn btn-neutral" onClick={()=>document.getElementById('my_modal_2').showModal()}>Зареєструвати ТОВ</button>
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
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Повний супровід процесу реєстрації ФОП</li>
              <li>Швидке оформлення документів</li>
              <li>Консультації з юридичних та податкових питань</li>
              <li>Прозорі тарифи без прихованих платежів</li>
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
