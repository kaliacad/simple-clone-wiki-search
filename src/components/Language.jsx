import React, { useState } from "react";

const Language = () => {
  const [defaultIndex, setIndex] = useState(0);
  const languages = [
    "Francais",
    "English",
    "Kiswahili",
    "Lingala",
    "Tshiluba",
    "Kongo",
  ];
  const handleIndex = (index) => {
    setIndex(index);
  };
  return (
    <div className="flex flex-wrap justify-center px-12 mt-3 space-x-12 font-medium">
      <a className="text-blue-800" href="#">
        Wikipedia disponible en :
      </a>
      {languages.map((language, index) => (
        <button
          onClick={() => handleIndex(index)}
          key={index}
          className={
            index === defaultIndex
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
