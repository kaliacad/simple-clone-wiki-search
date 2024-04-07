import {
  createContext,
  memo,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

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
  const [url, setUrl] = useState(
    "https://en.wikipedia.org/w/api.php?&origin=*&action=opensearch&search=" +
      search +
      "&limit=15"
  );
  const handleSearch = useCallback(
    (search) => {
      const url = `https://en.wikipedia.org/w/api.php?&origin=*&action=opensearch&search=${search}
        "&limit=15`;

      setSearch(search);
      setUrl(url);
    },
    [search, url]
  );
  const [isLoading, setLoading] = useState(false);
  const [dataSearch, setDataSearch] = useState([]);
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
      url,
      setUrl,
      dataSearch,
      setDataSearch,
      handleSearch,
    }),
    [search]
  );
  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
});
export default SearchUseContext;
