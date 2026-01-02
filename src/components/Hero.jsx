

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 text-center bg-[url('/public/fon3.jpg')]
    bg-cover bg-center bg-no-repeat
    relative">
      <div className="absolute inset-0 bg-white/30 z-0"></div>

  <div className="relative z-10 max-w-3xl mx-auto text-center">
  {/* Заголовок */}
  <h1
    className="text-5xl md:text-6xl font-light leading-tight mb-6 text-gray-900"
    style={{ fontFamily: "'DM Serif Text', serif" }}
  >
    Партнерське об'єднання{" "}
    <span
      className="text-yellow-500 font-semibold gradient-text"
      style={{ fontFamily: "'DM Serif Text', serif" }}
    >
      UNIUM
    </span>
  </h1>

  {/* Підзаголовок */}
  <p
    className="text-gray-700 text-2xl max-w-xl mx-auto"
    style={{ fontFamily: "'DM Serif Text', serif" }}
  >
    Ви не клієнт. Ви —{" "}
    <span className="font-semibold italic gradient-text">
      Партнер
    </span>
    
  </p>
</div>


</section>


  );
}

export default Hero;
