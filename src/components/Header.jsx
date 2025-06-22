function Header() {
  return (
    <header className="top-0 left-0 w-full bg-white/90 backdrop-blur border-b border-gray-300 z-40">
      <div className="mx-3 p-1 md:mx-10 md:p-2 flex justify-between items-center">
        <div className="flex justify-center items-center gap-2">
          <img src="/miniLogo.png" alt="" className="w-18 md:w-22" />
          <p className="text-xl md:text-2xl font-semibold tracking-tight">
            Путята <br />& Партнери
          </p>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-6 text-md tracking-wider items-center">
          {/* Dropdowns */}
          {[
            {
              label: "Юридичні послуги",
              items: [
                "Реєстрація ФОП/ТОВ",
                "Зміни ФОП/ТОВ",
                "Ліквідація ФОП/ТОВ",
                "Реєстрація ТМ",
                "Реєстрація потужностей",
                "Отримання/продовження ліцензій",
                "Індивідуальна консультація",
                "Договори",
              ],
            },
            {
              label: "Бухгалтерія",
              items: ["Введення ФОП", "Реєстрація РРО/ПРРО", "Аудит"],
            },
            {
              label: "Гранти",
              items: ["На власну справу", "Для ветеранів"],
            },
            {
              label: "Нотаріус",
              items: [
                "Довіреність",
                "Завірення документів",
                "Реєстраційні дії",
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
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              <ul className="absolute left-0 top-full mt-2 w-56 bg-white border border-gray-200 rounded shadow-md invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 z-50">
                {menu.items.map((item, i) => (
                  <li key={i}>
                    <a
                      href="#services"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <a href="#contact" className="uppercase hover:underline">
            Контакти
          </a>
          <a href="#about" className="uppercase hover:underline">
            Про нас
          </a>
        </nav>

        <div className="text-sm lg:text-md">
          <a href="tel:+380441234567">+38(044)123-45-67</a>
        </div>

        {/* Mobile burger */}
        <div className="md:hidden">
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
