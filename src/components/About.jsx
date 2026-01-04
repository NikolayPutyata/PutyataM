function About() {
  const spheres = [
    {
      title: "Оптова та роздрібна торгівля",
      icon: "/trade.svg",
    },
    {
      title: "Готелі та ресторани",
      icon: "/hotel.svg",
    },
    {
      title: "Виробництво та промисловість",
      icon: "/zav.svg",
    },
    {
      title: "Послуги",
      icon: "/pos.svg",
    },
    {
      title: "Медицина",
      icon: "/med.svg",
    },
    {
      title: "Кінематограф, ЗМІ, шоу-бізнес",
      icon: "/kino.svg",
    },
    {
      title: "Транспорт і логістика",
      icon: "/trans.svg",
    },
    {
      title: "Будівництво та нерухомість",
      icon: "/bud.svg",
    },
    {
      title: "Сільське господарство",
      icon: "/trac.svg",
    },
    {
      title: "Туризм",
      icon: "/turis.svg",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 px-6 bg-gray-100 border-t border-gray-200"
    >
      <div className="max-w-7xl mx-auto">
        {/* Заголовок */}
        <div className="text-center mb-15 ">
          <h2 className="text-3xl md:text-5xl font-light text-gray-900 mb-4">
            Сфери діяльності
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl md:hidden mx-auto">
            Ми супроводжуємо бізнес у різних галузях, враховуючи особливості
            кожної сфери та вимоги законодавства.
          </p>
        </div>

        {/* Сфери */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 ">
          {spheres.map(({ title, icon }, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl p-8 shadow-md hover:shadow-lg hover:scale-102 transition text-center"
            >
              {/* SVG */}
              <div className="flex justify-center mb-6">
                <img
                  src={icon}
                  alt={title}
                  className="w-12 h-12"
                />
              </div>

              {/* Назва */}
              <h3 className="text-lg font-medium text-gray-900 leading-snug">
                {title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
