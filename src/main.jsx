import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
// bootstrap import
import "bootswatch/dist/slate/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import GlobalContext from "./context/globalContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalContext>
      <App />
    </GlobalContext>
  </StrictMode>
);
