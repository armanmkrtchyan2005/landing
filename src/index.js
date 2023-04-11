import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

const r = document.getElementById("root");

const root = ReactDOM.createRoot(r);
root.render(
  <Router>
    <App />
  </Router>
);
