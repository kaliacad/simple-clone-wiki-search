import SearchBar from "./components/SearchBar";
function App() {
  return (
    <div className="container mx-auto mt-20">
      <SearchBar />
      <div
        id="block-search"
        className="flex flex-col items-center justify-center max-w-3xl px-12 mx-auto mt-10"
      ></div>
    </div>
  );
}

export default App;
