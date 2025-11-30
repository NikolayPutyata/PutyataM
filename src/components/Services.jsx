function Services() {
  const services = [
    {
      title: "Юридичний супровід",
      items: ["Контракти", "Суди", "Захист"],
      image: "suprovid.jpg",
    },
    {
      title: "Бухгалтерія",
      items: ["Звітність", "Облік", "Введення"],
      image: "buh1.jpg",
    },
    {
      title: "Реєстрація бізнесу",
      items: ["ФОП", "ТОВ"],
      image: "reg1.jpg",
    },
    {
      title: "Отримання грантів",
      items: ["Для ветеранів", "На бізнес"],
      image: "grant1.jpg",
    },
    {
      title: "Договори",
      items: ["Підготовка", "Аналіз", "Консультація"],
      image: "dogovvir.jpg",
    },
    {
      title: "Отримання ліцензій",
      items: ["Отримання", "Продовження"],
      image: "lic1.jpg",
    },
  ];

  return (
    <section
      id="services"
      className="py-10 px-6 md:py-10"
    >
      <div className="max-w-6xl mx-auto  rounded-xl">
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="relative h-64 rounded-xl overflow-hidden shadow-md bg-cover bg-center group"
              style={{ backgroundImage: `url(${service.image})` }}
            >
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all duration-300" />
              <div className="relative z-10 p-6 text-white h-full flex flex-col justify-between">
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <ul className="space-y-1 flex flex-col items-end text-sm mt-2">
                  {service.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="rounded-4xl w-28 bg-white text-black text-center py-1"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
