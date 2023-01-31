import { createContext, memo, useContext, useMemo, useState } from "react";

const SearchContext = createContext();
const SearchUseContext = () => useContext(SearchContext);
export const SearchContextProvider = memo(({ children }) => {
  const [search, setSearch] = useState("");
  const [isLoading, setLoading] = useState(false);
  const value = useMemo(
    () => ({
      search,
      setSearch,
      isLoading,
      setLoading,
    }),
    [search]
  );
  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
});
export default SearchUseContext;
