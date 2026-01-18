

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 text-center bg-[url('/fon3.jpg')]
    bg-cover bg-center bg-no-repeat
    relative">
      <div className="absolute inset-0 bg-white/10 z-0"></div>

  <div className="relative z-10 max-w-3xl mx-auto text-start lg:text-center
  mt-[-140px] md:mt-0">
  {/* Заголовок */}
  <h1
    className="text-[50px] min-[400px]:text-6xl lg:text-7xl font-light leading-tight mb-6 text-gray-900"

    style={{ fontFamily: "'Montserrat', serif" }}
  >
    Партнерське об'єднання{" "}
    <span
      className="text-yellow-500 font-semibold gradient-text"
      style={{ fontFamily: "'Playfair Display', serif" }}
    >
      WEKSAR
    </span>
  </h1>

  {/* Підзаголовок */}
  <p
    className="text-gray-700 text-xl lg:text-2xl max-w-4xl mx-auto"
    style={{ fontFamily: "'Montserrat', serif" }}
  >
    Ви не клієнт. Ви —{" "}
    <span className=" italic pr-2">
      Партнер
    </span>
    
  </p>
</div>


</section>


  );
}

export default Hero;
