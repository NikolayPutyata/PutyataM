// import "./index.css";

// function App() {
//   return (
//     <div className="font-sans text-black bg-white">
//       {/* Drawer wrapper */}
//       <div className="drawer drawer-end">
//         <input id="nav-drawer" type="checkbox" className="drawer-toggle" />

//         {/* Page content */}
//         <div className="drawer-content">
//           {/* Navbar */}
//           <header className="top-0 left-0 w-full bg-white/90 backdrop-blur border-b border-gray-300">
//             <div className="mx-3 p-1 md:mx-10 md:p-2 flex justify-between items-center">
//               <div className="flex justify-center items-center gap-2">
//                 <div>
//                   <img src="/miniLogo.png" alt="" className="w-18 md:w-22" />
//                 </div>
//                 <p className="text-xl md:text-2xl font-semibold tracking-tight">
//                   Путята <br />& Партнери
//                 </p>
//               </div>

//               {/* Desktop nav */}
//               <nav className="hidden md:flex space-x-6 text-md tracking-wider items-center">
//                 {/* Dropdown тільки для "Послуги" */}
//                 <div className="relative group">
//                   <div className="hover:underline uppercase flex items-center gap-1 cursor-pointer">
//                     Юридичні послуги
//                     <svg
//                       className="w-3 h-3"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M19 9l-7 7-7-7"
//                       />
//                     </svg>
//                   </div>

//                   {/* First level dropdown */}
//                   <ul className="absolute left-0 top-full mt-2 w-56 bg-white border border-gray-200 rounded shadow-md invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 z-50">
//                     <li>
//                       <a
//                         href="#legal"
//                         className="block px-4 py-2 hover:bg-gray-100"
//                       >
//                         Реєстрація ФОП/ТОВ
//                       </a>
//                     </li>
//                     <li>
//                       <a
//                         href="#accounting"
//                         className="block px-4 py-2 hover:bg-gray-100"
//                       >
//                         Зміни ФОП/ТОВ
//                       </a>
//                     </li>
//                     <li>
//                       <a
//                         href="#accounting"
//                         className="block px-4 py-2 hover:bg-gray-100"
//                       >
//                         Ліквідація ФОП/ТОВ
//                       </a>
//                     </li>
//                     <li>
//                       <a
//                         href="#legal"
//                         className="block px-4 py-2 hover:bg-gray-100"
//                       >
//                         Реєстрація ТМ
//                       </a>
//                     </li>

//                     <li>
//                       <a
//                         href="#accounting"
//                         className="block px-4 py-2 hover:bg-gray-100"
//                       >
//                         Реєстрація потужностей
//                       </a>
//                     </li>
//                     <li>
//                       <a
//                         href="#accounting"
//                         className="block px-4 py-2 hover:bg-gray-100"
//                       >
//                         Отримання/продовження ліцензій
//                       </a>
//                     </li>
//                     <li>
//                       <a
//                         href="#accounting"
//                         className="block px-4 py-2 hover:bg-gray-100"
//                       >
//                         Індивідуальна консультація
//                       </a>
//                     </li>
//                     <li>
//                       <a
//                         href="#accounting"
//                         className="block px-4 py-2 hover:bg-gray-100"
//                       >
//                         Договори
//                       </a>
//                     </li>
//                   </ul>
//                 </div>
//                 <div className="relative group">
//                   <div className="hover:underline uppercase flex items-center gap-1 cursor-pointer">
//                     Бухгалтерія
//                     <svg
//                       className="w-3 h-3"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M19 9l-7 7-7-7"
//                       />
//                     </svg>
//                   </div>

//                   {/* First level dropdown */}
//                   <ul className="absolute left-0 top-full mt-2 w-56 bg-white border border-gray-200 rounded shadow-md invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 z-50">
//                     <li>
//                       <a
//                         href="#legal"
//                         className="block px-4 py-2 hover:bg-gray-100"
//                       >
//                         Введення ФОП
//                       </a>
//                     </li>
//                     <li>
//                       <a
//                         href="#accounting"
//                         className="block px-4 py-2 hover:bg-gray-100"
//                       >
//                         Реєстрація РРО/ПРРО
//                       </a>
//                     </li>
//                     <li>
//                       <a
//                         href="#accounting"
//                         className="block px-4 py-2 hover:bg-gray-100"
//                       >
//                         Аудит
//                       </a>
//                     </li>
//                   </ul>
//                 </div>

//                 <div className="relative group">
//                   <div className="hover:underline uppercase flex items-center gap-1 cursor-pointer">
//                     Гранти
//                     <svg
//                       className="w-3 h-3"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M19 9l-7 7-7-7"
//                       />
//                     </svg>
//                   </div>

//                   {/* First level dropdown */}
//                   <ul className="absolute left-0 top-full mt-2 w-56 bg-white border border-gray-200 rounded shadow-md invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 z-50">
//                     <li>
//                       <a
//                         href="#grant-sprava"
//                         className="block px-4 py-2 hover:bg-gray-100"
//                       >
//                         На власну справу
//                       </a>
//                     </li>
//                     <li>
//                       <a
//                         href="#grant-veteran"
//                         className="block px-4 py-2 hover:bg-gray-100"
//                       >
//                         Для ветеранів
//                       </a>
//                     </li>
//                   </ul>
//                 </div>

//                 <div className="relative group">
//                   <div className="hover:underline uppercase flex items-center gap-1 cursor-pointer">
//                     Нотаріус
//                     <svg
//                       className="w-3 h-3"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M19 9l-7 7-7-7"
//                       />
//                     </svg>
//                   </div>

//                   {/* First level dropdown */}
//                   <ul className="absolute left-0 top-full mt-2 w-56 bg-white border border-gray-200 rounded shadow-md invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 z-50">
//                     <li>
//                       <a
//                         href="#legal"
//                         className="block px-4 py-2 hover:bg-gray-100"
//                       >
//                         Довіреність
//                       </a>
//                     </li>
//                     <li>
//                       <a
//                         href="#accounting"
//                         className="block px-4 py-2 hover:bg-gray-100"
//                       >
//                         Завірення документів
//                       </a>
//                     </li>
//                     <li>
//                       <a
//                         href="#accounting"
//                         className="block px-4 py-2 hover:bg-gray-100"
//                       >
//                         Реєстраційні дії
//                       </a>
//                     </li>
//                   </ul>
//                 </div>

//                 <a href="#contact" className="uppercase hover:underline">
//                   Контакти
//                 </a>
//                 <a href="#about" className="uppercase hover:underline">
//                   Про нас
//                 </a>
//               </nav>
//               <div className="text-sm lg:text-md">
//                 <a href="tel:+380441234567">+38(044)123-45-67</a>
//               </div>

//               {/* Mobile menu button */}
//               <div className="md:hidden">
//                 <label htmlFor="nav-drawer" className="btn btn-ghost btn-sm">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-5 w-5"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M4 6h16M4 12h16M4 18h16"
//                     />
//                   </svg>
//                 </label>
//               </div>
//             </div>
//           </header>

//           {/* Main content */}
//           <main className="">
//             <section className="min-h-screen flex items-center justify-center px-6 text-center">
//               <div className="max-w-3xl">
//                 <h1 className="text-5xl md:text-6xl font-light leading-tight mb-6">
//                   Бухгалтерсько-юридична компанія нового покоління
//                 </h1>
//                 <p className="text-gray-600 text-lg max-w-xl mx-auto">
//                   Ми працюємо на перетині права, фінансів та технологій.
//                 </p>
//               </div>
//             </section>

//             {/* About */}
//             <section id="about" className="py-28 px-6 border-t border-gray-200">
//               <div className="max-w-4xl mx-auto text-center">
//                 <h2 className="text-3xl font-light mb-4">Хто ми</h2>
//                 <p className="text-gray-700 text-lg leading-relaxed">
//                   Команда юристів і бухгалтерів, яка поєднує класичну експертизу
//                   з цифровими інструментами. Ми допомагаємо бізнесу бути
//                   впевненим у кожному рішенні.
//                 </p>
//               </div>
//             </section>

//             {/* Services */}
//             <section
//               id="services"
//               className="py-28 px-6 border-t border-gray-200"
//             >
//               <div className="max-w-6xl mx-auto">
//                 <h2 className="text-3xl font-light text-center mb-16">
//                   Послуги
//                 </h2>

//                 <div className="grid md:grid-cols-3 gap-8">
//                   {[
//                     {
//                       title: "Юридичний супровід",
//                       items: ["Контракти", "Суди", "Захист"],
//                       image: "/images/legal.jpg", // приклади шляхів до зображень
//                     },
//                     {
//                       title: "Бухгалтерія",
//                       items: ["Звітність", "Облік"],
//                       image: "/images/accounting.jpg",
//                     },
//                     {
//                       title: "Реєстрація бізнесу",
//                       items: ["ФОП", "ТОВ"],
//                       image: "/images/business.jpg",
//                     },
//                   ].map((service, i) => (
//                     <div
//                       key={i}
//                       className="relative h-64 rounded-xl overflow-hidden shadow-md bg-cover bg-center group"
//                       style={{ backgroundImage: `url(${service.image})` }}
//                     >
//                       <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all duration-300"></div>
//                       <div className="relative z-10 p-6 text-white h-full flex flex-col justify-between">
//                         <h3 className="text-xl font-semibold">
//                           {service.title}
//                         </h3>
//                         <ul className="space-y-1 flex flex-col text-sm mt-2">
//                           {service.items.map((item, idx) => (
//                             <li
//                               key={idx}
//                               className="rounded-4xl w-20 bg-white text-black text-center py-1"
//                             >
//                               {item}
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </section>

//             {/* Contact */}
//             <section
//               id="contact"
//               className="py-28 px-6 border-t border-gray-200 text-center"
//             >
//               <div className="max-w-xl mx-auto">
//                 <h2 className="text-3xl font-light mb-6">Контакти</h2>
//                 <p className="text-gray-700 text-lg mb-4">
//                   Email: info@balanspravo.com
//                 </p>
//                 <p className="text-gray-700 text-lg">
//                   Телефон: +38 (044) 123-45-67
//                 </p>
//               </div>
//             </section>
//           </main>

//           {/* Footer */}
//           <footer className="py-12 text-center text-gray-400 text-sm border-t border-gray-100">
//             © 2025 Путята & Партнери. Всі права захищено.
//           </footer>
//         </div>

//         {/* Drawer panel */}
//         <div className="drawer-side z-50">
//           <label htmlFor="nav-drawer" className="drawer-overlay"></label>
//           <ul className="menu gap-3 p-6 w-64 min-h-full bg-white text-base-content">
//             {/* Юридичні послуги */}
//             <li>
//               <details>
//                 <summary className="uppercase">Юридичні послуги</summary>
//                 <ul className="flex flex-col gap-1">
//                   <li className="mt-2">
//                     <a href="#legal">Реєстрація ФОП/ТОВ</a>
//                   </li>
//                   <li>
//                     <a href="#fop-changes">Зміни ФОП/ТОВ</a>
//                   </li>
//                   <li>
//                     <a href="#fop-close">Ліквідація ФОП/ТОВ</a>
//                   </li>

//                   <li>
//                     <a href="#tov-close">Реєстрація ТМ</a>
//                   </li>
//                   <li>
//                     <a href="#facilities">Реєстрація потужностей</a>
//                   </li>
//                   <li>
//                     <a href="#licenses">Отримання/продовження ліцензій</a>
//                   </li>
//                   <li>
//                     <a href="#licenses">Індивідуальна консультація</a>
//                   </li>
//                   <li>
//                     <a href="#licenses">Договори</a>
//                   </li>
//                 </ul>
//               </details>
//             </li>

//             {/* Бухгалтерія */}
//             <li>
//               <details>
//                 <summary className="uppercase">Бухгалтерія</summary>
//                 <ul className="flex flex-col gap-1">
//                   <li className="mt-2">
//                     <a href="#fop-bookkeeping">Ведення ФОП</a>
//                   </li>
//                   <li>
//                     <a href="#rro">Реєстрація РРО/ПРРО</a>
//                   </li>
//                   <li>
//                     <a href="#accounting-other">Аудит</a>
//                   </li>
//                 </ul>
//               </details>
//             </li>

//             {/* Гранти */}
//             <li>
//               <details>
//                 <summary className="uppercase">Гранти</summary>
//                 <ul className="flex flex-col gap-1">
//                   <li className="mt-2">
//                     <a href="#grant-sprava">На власну справу</a>
//                   </li>
//                   <li>
//                     <a href="#grant-veteran">Для ветеранів</a>
//                   </li>
//                 </ul>
//               </details>
//             </li>

//             <li>
//               <details>
//                 <summary className="uppercase">Нотаріус</summary>
//                 <ul className="flex flex-col gap-1">
//                   <li className="mt-2">
//                     <a href="#grant-sprava">Довіреність</a>
//                   </li>
//                   <li>
//                     <a href="#grant-veteran">Завірення документів</a>
//                   </li>
//                 </ul>
//               </details>
//             </li>

//             {/* Звичайні пункти */}
//             <li>
//               <a href="#contact" className="uppercase ">
//                 Контакти
//               </a>
//             </li>
//             <li>
//               <a href="#about" className="uppercase">
//                 Про нас
//               </a>
//             </li>
//             <li className="uppercase bg-neutral-900 rounded-4xl hover:bg-neutral-800 px-2 py-1 mt-5 text-white">
//               <a href="#about" className="flex justify-center">
//                 Зворотній зв'язок
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";
import DrawerMenu from "./components/DrawerMenu.jsx";
import "./index.css";

function App() {
  return (
    <div className="font-sans text-black bg-white">
      <div className="drawer drawer-end">
        <input id="nav-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Header />
          <Main />
          <Footer />
        </div>
        <DrawerMenu />
      </div>
    </div>
  );
}

export default App;
