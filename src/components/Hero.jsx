

function Hero() {
  return (
    <section
  className="min-h-screen flex items-center justify-center px-6 text-center relative"
  style={{
    backgroundImage: "url('/avt.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Overlay для затемнення */}
  <div className="absolute inset-0 bg-black opacity-70"></div>

  <div className="max-w-3xl mx-auto text-center relative z-10">
    {/* Заголовок */}
    <h1
      className="text-5xl md:text-6xl font-light leading-tight mb-6 text-white"
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
      className="text-white text-xl max-w-xl mx-auto"
      style={{ fontFamily: "'DM Serif Text', serif" }}
    >
      Ви не клієнт. Ви —{" "}
      <span className="font-semibold italic gradient-text">Партнер</span>.
    </p>
  </div>
</section>



  );
}

export default Hero;
