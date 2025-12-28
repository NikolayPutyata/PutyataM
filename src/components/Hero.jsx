

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 text-center bg-white">
  <div className="max-w-3xl mx-auto text-center">
  {/* Заголовок */}
  <h1
    className="text-5xl md:text-6xl font-light leading-tight mb-6 text-gray-900"
    style={{ fontFamily: "'DM Serif Text', serif" }}
  >
    Партнерське об'єднання{" "}
    <span
      className="text-yellow-500 font-semibold"
      style={{ fontFamily: "'DM Serif Text', serif" }}
    >
      Юнітраст
    </span>
  </h1>

  {/* Підзаголовок */}
  <p
    className="text-gray-600 text-xl max-w-xl mx-auto"
    style={{ fontFamily: "'DM Serif Text', serif" }}
  >
    Ви не клієнт. Ви —{" "}
    <span className="font-semibold italic gradient-text">
      Партнер
    </span>
    .
  </p>
</div>


</section>


  );
}

export default Hero;
