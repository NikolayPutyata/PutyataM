function Services() {
  const services = [
    {
      title: "Юридичний супровід",
      items: ["Контракти", "Суди", "Захист"],
      image: "/images/legal.jpg",
    },
    {
      title: "Бухгалтерія",
      items: ["Звітність", "Облік"],
      image: "/images/accounting.jpg",
    },
    {
      title: "Реєстрація бізнесу",
      items: ["ФОП", "ТОВ"],
      image: "/images/business.jpg",
    },
  ];

  return (
    <section
      id="services"
      className="py-28 px-6 border-t border-gray-200 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto bg-white p-12 rounded-xl shadow-md">
        <h2 className="text-3xl font-light text-center mb-16 text-gray-800">
          Послуги
        </h2>
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
