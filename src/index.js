import "simplebar";
import "simplebar/dist/simplebar.min.css";
import "./index.scss";

import { App } from "./App";
import React from "react";
import ReactDOM from "react-dom";
import SimpleBarReact from "simplebar-react";
import reportWebVitals from "./reportWebVitals";

const updateInnerHeight = () =>
  document.documentElement.style.setProperty("--vh", `${window.innerHeight}px`);
updateInnerHeight();
window.addEventListener("resize", updateInnerHeight);

ReactDOM.render(
  <React.StrictMode>
    <SimpleBarReact className="root-scroll">
      <App />
    </SimpleBarReact>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
