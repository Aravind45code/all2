import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { StudentContextProvider } from "./context/Usercontext";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(

  <React.StrictMode>
    <BrowserRouter>
    <StudentContextProvider>
    <App />
    </StudentContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
