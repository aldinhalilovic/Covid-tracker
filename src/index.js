import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { PersonContextProvider } from "./context/PersonContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <PersonContextProvider>
        <App />
      </PersonContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
