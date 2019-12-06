import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./view/App/App";
import { HashRouter } from "react-router-dom";

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("root")
);
