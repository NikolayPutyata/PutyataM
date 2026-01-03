import React, { useState } from "react";

const LanguageSelector = () => {
  const [currentLang, setCurrentLang] = useState("/ukr.svg"); 

  const languages = [
    "/ukr.svg",
    "/unit.svg",
    "/azer.svg",
    "/arm.svg",
    "/isr.svg",
    "/tur.svg",
    "/uzbe.svg",
  ];

  return (
    <div>
      <details className="dropdown">
        <summary className="btn btn-ghost flex items-center gap-2">
          <img src={currentLang} alt="current lang" width={20} />
          <svg
            className="w-3 h-3"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            aria-hidden
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </summary>

        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 p-2 shadow-sm">
          {languages.map((lang, i) => (
            <li key={i}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentLang(lang); // змінюємо стан
                }}
              >
                <img src={lang} alt="" width={22} />
              </a>
            </li>
          ))}
        </ul>
      </details>
    </div>
  );
};

export default LanguageSelector;
