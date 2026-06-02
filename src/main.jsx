import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import ThemeProvider from "./context/ThemeContext";

import { Analytics } from "@vercel/analytics/react";

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
      <Analytics />
    </ThemeProvider>
  </BrowserRouter>
);