import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";

function setClientWidth() {
  document.documentElement.style.setProperty(
    "--client-width",
    document.documentElement.clientWidth + "px"
  );
}
window.addEventListener("resize", setClientWidth, false);
document.addEventListener("DOMContentLoaded", setClientWidth, false);
window.addEventListener("load", setClientWidth);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
