import localFont from "next/font/local";

// Шрифти лежать у самому проєкті (без запитів до Google Fonts).
// Латиниця і кирилиця — окремі файли: браузер бере символ з першого шрифту, де він є.
// Для латиниці вимкнено fallback, щоб кирилиця під час завантаження показувалась
// підлаштованим під метрики Arial, а не стрибала (менше CLS).

export const manropeLatin = localFont({
  src: "./fonts/manrope-latin-wght-normal.woff2",
  weight: "200 800",
  variable: "--font-manrope-latin",
  display: "swap",
  adjustFontFallback: false,
});

export const manropeCyr = localFont({
  src: "./fonts/manrope-cyrillic-wght-normal.woff2",
  weight: "200 800",
  variable: "--font-manrope-cyr",
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

export const unboundedLatin = localFont({
  src: "./fonts/unbounded-latin-wght-normal.woff2",
  weight: "200 900",
  variable: "--font-unbounded-latin",
  display: "swap",
  adjustFontFallback: false,
});

export const unboundedCyr = localFont({
  src: "./fonts/unbounded-cyrillic-wght-normal.woff2",
  weight: "200 900",
  variable: "--font-unbounded-cyr",
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

export const fontVariables = [manropeLatin, manropeCyr, unboundedLatin, unboundedCyr]
  .map((f) => f.variable)
  .join(" ");
