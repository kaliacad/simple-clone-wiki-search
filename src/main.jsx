import React from "react";
import ReactDOM from "react-dom/client";
import { SearchContextProvider } from "../libs/context/SearchContext";
import App from "./App";
import "./assets/css/loader.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SearchContextProvider>
      <App />
    </SearchContextProvider>
  </React.StrictMode>
);
