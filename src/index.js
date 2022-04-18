import "overlayscrollbars/css/OverlayScrollbars.css";
import "./index.scss";

import App from "./App";
import OverlayScrollbars from "overlayscrollbars";
import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

OverlayScrollbars(document.body, {
  className: "os-theme-light",
  nativeScrollbarsOverlaid: {
    initialize: false,
  },
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
