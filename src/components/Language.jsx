import React from "react";

const Language = () => {
  const languages = [
    "Francais",
    "English",
    "Kiswahili",
    "Lingala",
    "Tshiluba",
    "Kongo",
  ];
  return (
    <div className="flex flex-wrap justify-center px-12 mt-3 space-x-12 font-medium">
      <a className="text-blue-800" href="#">
        Wikipedia disponible en :
      </a>
      {languages.map((language, index) => (
        <button key={index} className="text-blue-800" href="#">
          {language}
        </button>
      ))}
    </div>
  );
};

export default Language;
