import { Link } from "react-router-dom";

function DrawerMenu() {
  const menu = [
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
    
  ];

  return (
    <div className="drawer-side z-50">
      <label htmlFor="nav-drawer" className="drawer-overlay"></label>

      <ul className="menu gap-3 p-6 w-64 min-h-full bg-white text-base-content">
        {menu.map((section, index) => (
          <li key={index}>
            <details>
              <summary className="uppercase">{section.label}</summary>

              <ul className="flex flex-col gap-1 mt-2">
                {section.items.map((item, i) => (
                  <li key={i}>
                    <Link to={item.path} onClick={() => {
                    const drawerCheckbox = document.getElementById("nav-drawer");
                    if (drawerCheckbox) drawerCheckbox.checked = false;
                  }}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </details>
          </li>
        ))}

        <li>
          <Link to="/contacts" className="uppercase" onClick={() => {
                    const drawerCheckbox = document.getElementById("nav-drawer");
                    if (drawerCheckbox) drawerCheckbox.checked = false;
                  }}>
            Контакти
          </Link>
        </li>

        <li>
          <Link to="/about" className="uppercase" onClick={() => {
                    const drawerCheckbox = document.getElementById("nav-drawer");
                    if (drawerCheckbox) drawerCheckbox.checked = false;
                  }}>
            Про нас
          </Link>
        </li>

        <li className="uppercase bg-neutral-900 rounded-4xl hover:bg-neutral-800 px-2 py-1 mt-5 text-white">
          <Link to="/feedback" className="flex justify-center">
            Зворотній зв'язок
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default DrawerMenu;
