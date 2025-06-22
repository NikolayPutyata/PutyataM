function DrawerMenu() {
  return (
    <div className="drawer-side z-50">
      <label htmlFor="nav-drawer" className="drawer-overlay"></label>
      <ul className="menu gap-3 p-6 w-64 min-h-full bg-white text-base-content">
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
            items: ["Ведення ФОП", "Реєстрація РРО/ПРРО", "Аудит"],
          },
          {
            label: "Гранти",
            items: ["На власну справу", "Для ветеранів"],
          },
          {
            label: "Нотаріус",
            items: ["Довіреність", "Завірення документів", "Реєстраційні дії"],
          },
        ].map((section, index) => (
          <li key={index}>
            <details>
              <summary className="uppercase">{section.label}</summary>
              <ul className="flex flex-col gap-1 mt-2">
                {section.items.map((item, i) => (
                  <li key={i}>
                    <a href="#services">{item}</a>
                  </li>
                ))}
              </ul>
            </details>
          </li>
        ))}

        <li>
          <a href="#contact" className="uppercase">
            Контакти
          </a>
        </li>
        <li>
          <a href="#about" className="uppercase">
            Про нас
          </a>
        </li>
        <li className="uppercase bg-neutral-900 rounded-4xl hover:bg-neutral-800 px-2 py-1 mt-5 text-white">
          <a href="#about" className="flex justify-center">
            Зворотній зв'язок
          </a>
        </li>
      </ul>
    </div>
  );
}

export default DrawerMenu;
