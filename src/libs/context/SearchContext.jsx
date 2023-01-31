import { createContext, memo, useContext, useMemo, useState } from "react";

const SearchContext = createContext();
const SearchUseContext = () => useContext(SearchContext);
export const SearchContextProvider = memo(({ children }) => {
  const languages = [
    "Francais",
    "English",
    "Kiswahili",
    "Lingala",
    "Tshiluba",
    "Kongo",
  ];
  const [defaultLang, setLang] = useState(languages[0]);
  const [search, setSearch] = useState("");
  const [isLoading, setLoading] = useState(false);

  const handleLang = (index) => {
    setLang(index.toLowerCase());
  };
  const value = useMemo(
    () => ({
      search,
      setSearch,
      isLoading,
      setLoading,
      defaultLang,
      languages,
      handleLang,
    }),
    [search]
  );
  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
});
export default SearchUseContext;
