import logo from "./assets/img/wikipedia.png";
function App() {
  return (
    <div className="container mx-auto mt-20">
      <div className="flex flex-col items-center justify-center bg-white">
        {/*  */}
        <div
          className="h-[89px] w-[273px] mb-10"
          style={{ marginBottom: "10rem" }}
        >
          <img className="" src={logo} alt="Wikipedia Logo" />
        </div>
        {/*  */}
        <div className="md:w-[584px] mx-auto mt-7 flex w-[92%] items-center rounded-full border hover:shadow-md">
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
        {/*  */}
        <div className="flex px-12 mt-3 space-x-12">
          <button
            id="btn-search"
            className="bg-[#f8f9fa] px-3 py-2 rounded text-gray-500"
          >
            Recherche Wipedia
          </button>
          <button className="bg-[#f8f9fa] px-3 py-2 rounded text-gray-500">
            J'ai de la chance
          </button>
        </div>
        <div className="flex flex-wrap justify-center px-12 mt-3 space-x-12">
          <a className="text-blue-800" href="#">
            Wikipedia disponible en :
          </a>
          <a className="text-blue-800" href="#">
            English
          </a>{" "}
          <a className="text-blue-800" href="#">
            Kiswahili
          </a>{" "}
          <a className="text-blue-800" href="#">
            Lingala
          </a>{" "}
          <a href="#">Luo</a>{" "}
          <a className="text-blue-800" href="#">
            Tshiluba
          </a>
          <a className="text-blue-800" href="#">
            Kongo
          </a>
        </div>
        {/*  */}
      </div>
      <div
        id="block-search"
        className="flex flex-col items-center justify-center max-w-3xl px-12 mx-auto mt-10"
      ></div>
    </div>
  );
}

export default App;
