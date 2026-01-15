import { Link } from "react-router-dom";
import LanguageSelector from "./LanguageSelector";

function Header() {
  return (
    <header className="relative top-0 left-0 w-full bg-white/90 backdrop-blur border-b border-gray-300 z-50">
      <div className="mx-3 p-1 md:mx-10 md:p-2 flex justify-between items-center">
        <div className="flex justify-center items-center gap-2">
          
          <a href="/">
          <p className="text-3xl md:text-4xl font-semibold tracking-tight py-2 px-4"
          style={{ fontFamily: "'Playfair Display', serif" }}>
           WEKSAR
          </p></a>
        </div>

        {/* Desktop nav */}
        <nav className="hidden lg:flex space-x-6 text-md tracking-wider items-center">
  {[
    {
      label: "Юридичні послуги",
      items: [
        { name: "Реєстрація ФОП/ТОВ", path: "/services/registration" },
        { name: "Зміни ФОП/ТОВ", path: "/services/changes" },
        { name: "Ліквідація ФОП/ТОВ", path: "/services/liquidation" },
        { name: "Реєстрація ТМ", path: "/services/tm" },
        { name: "Реєстрація потужностей", path: "/services/power" },
        { name: "Отримання/продовження ліцензій", path: "/services/license" },
        { name: "Індивідуальна консультація", path: "/services/consultation" },
        { name: "Договори", path: "/services/contracts" },
      ],
    },
    {
      label: "Бухгалтерія",
      items: [
        { name: "Ведення ФОП", path: "/accounting/fop" },
        { name: "Ведення ТОВ", path: "/accounting/tov" },
        { name: "Подання звітності", path: "/accounting/paper" },
        { name: "КІК", path: "/accounting/kik" },
        { name: "Реєстрація РРО/ПРРО", path: "/accounting/rro" },
        { name: "Аудит", path: "/accounting/audit" },
      ],
    },
    {
      label: "Гранти",
      items: [
        { name: "На власну справу", path: "/grants/business" },
        { name: "Для ветеранів", path: "/grants/veterans" },
      ],
    },
    {
      label: "Нотаріус",
      items: [
        { name: "Завірення документів", path: "/notary/certification" },
        { name: "Реєстраційні дії", path: "/notary/registration" },
      ],
    },
    {
      label: "Адвокат",
      items: [
        { name: "Захист інтересів у суді", path: "/advokat/sud" },
        { name: "Консультації адвоката", path: "/advokat/cons" },
        
      ],
    },
    {
      label: "Бюро перекладів",
      items: [
        { name: "Завірений переклад документів", path: "/translate/doc" },
        { name: "Послуги перекладача", path: "/translate/per" },
        
      ],
    },
    {
      label: "Іноземцям",
      items: [
        { name: "Отримання ІПН", path: "/ino/ipn" },
        { name: "Тимчасова посвідка", path: "/ino/pos" },
        { name: "Дозвіл на працевлаштування", path: "/ino/work" },
      ],
    },
    
  ].map((menu, index) => (
    <div className="relative group" key={index}>
      <div className="hover:underline uppercase flex items-center gap-1 cursor-pointer">
        {menu.label}
        <svg
          className="w-3 h-3"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          aria-hidden
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      <ul className="absolute left-0 top-full mt-2 w-56 bg-white border border-gray-200 rounded shadow-md invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 z-50">
        {menu.items.map((item, i) => (
          <li key={i}>
            <Link to={item.path} className="block px-4 py-2 hover:bg-gray-100">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  ))}

  
</nav>

        <div className="hidden lg:flex">
          <LanguageSelector />
        </div>

        
        

        {/* Mobile burger */}
        <div className="lg:hidden">
          <label htmlFor="nav-drawer" className="btn btn-ghost btn-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
        </div>
      </div>
    </header>
  );
}

export default Header;
