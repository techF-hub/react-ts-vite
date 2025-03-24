import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "reset.css";
import "@/styles/global.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
