import "simplebar";
import "simplebar/dist/simplebar.min.css";
import "./index.scss";

import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

import App from "./App";
import { QueryClientProvider } from "react-query";
import React from "react";
import ReactDOM from "react-dom";
import { ReactQueryDevtools } from "react-query/devtools";
import SimpleBarReact from "simplebar-react";
import { ThemeProvider } from "styled-components/macro";
import { queryClient } from "./queryClient";
import { theme } from "./style/theme";

const updateInnerHeight = () =>
  document.documentElement.style.setProperty("--vh", `${window.innerHeight}px`);
updateInnerHeight();
window.addEventListener("resize", updateInnerHeight);

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <SimpleBarReact className="root-scroll">
          <App />
        </SimpleBarReact>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorkerRegistration.register();
