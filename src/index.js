import "simplebar";
import "simplebar/dist/simplebar.min.css";
import "./index.scss";

import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

import { QueryClient, QueryClientProvider } from "react-query";

import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import SimpleBarReact from "simplebar-react";

const queryClient = new QueryClient();

const updateInnerHeight = () =>
  document.documentElement.style.setProperty("--vh", `${window.innerHeight}px`);
updateInnerHeight();
window.addEventListener("resize", updateInnerHeight);

ReactDOM.render(
  <React.StrictMode>
    <SimpleBarReact className="root-scroll">
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </SimpleBarReact>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorkerRegistration.register();
