import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/css/loader.css";
import "./index.css";
import { SearchContextProvider } from "./libs/context/SearchContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SearchContextProvider>
      <App />
    </SearchContextProvider>
  </React.StrictMode>
);
