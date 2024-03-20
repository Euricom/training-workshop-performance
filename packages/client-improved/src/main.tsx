import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Geiger } from "react-geiger";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Geiger>
      <App />
    </Geiger>
  </React.StrictMode>,
);
