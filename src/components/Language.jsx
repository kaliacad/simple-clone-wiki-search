import React from "react";
import SearchUseContext from "../libs/context/SearchContext";

const Language = () => {
  const { defaultLang, languages, handleLang } = SearchUseContext();
  return (
    <div className="flex flex-wrap justify-center px-12 mt-3 space-x-12 font-medium">
      <a className="text-blue-800" href="#">
        Wikipedia disponible en :
      </a>
      {languages.map((language, index) => (
        <button
          onClick={() => handleLang(language)}
          key={index}
          className={
            language === defaultLang
              ? "text-blue-800 font-bold up"
              : "text-gray-500 underline"
          }
          href="#"
        >
          {language}
        </button>
      ))}
    </div>
  );
};

export default Language;
