import ReactDOM from "react-dom/client";
import "./style/index.css";
import App from "./App";
import { useEffect, useState } from "react";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("rotah"));

root.render(
  <App />
);

reportWebVitals(console.log);
