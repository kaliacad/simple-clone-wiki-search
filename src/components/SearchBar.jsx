import React, { useState } from "react";
import logo from "../assets/img/wikipedia.png";
import SearchUseContext from "../libs/context/SearchContext";
import Language from "./Language";
const SearchBar = () => {
  const { setSearch } = SearchUseContext();
  const [searchInput, setSearchInput] = useState("");
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setSearchInput(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(searchInput);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center bg-white"
    >
      {/*  */}
      <div
        className="h-[89px] w-[273px] mb-10"
        style={{ marginBottom: "10rem" }}
      >
        <img className="" src={logo} alt="Wikipedia Logo" />
      </div>
      {/*  */}
      <div className="md:w-[584px] mx-auto mt-7 flex w-[92%] items-center rounded-full border hover:shadow-md transition-shadow">
        <div className="pl-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-gray-400 cursor-pointer"
            fill="none"
            id="svg-search"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <input
          onChange={handleChange}
          value={searchInput}
          type="text"
          id="search-input"
          className="w-full bg-transparent rounded-full py-[14px] pl-4 outline-none"
          placeholder="Entrer votre recherche"
        />
        <div className="pr-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
            />
          </svg>
        </div>
      </div>
      <div className="flex px-12 mt-3 space-x-12">
        <button
          type="submit"
          id="btn-search"
          className="bg-[#f8f9fa] border border-transparent  hover:text-gray-600 hover:shadow-lg px-3 py-2 border-gray-300 transition-shadow rounded text-gray-500"
        >
          Recherche Wikipedia
        </button>
      </div>
      <Language />
      {/*  */}
    </form>
  );
};

export default SearchBar;
