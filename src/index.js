import "simplebar";
import "simplebar/dist/simplebar.min.css";
import "./index.scss";

import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

import { QueryClient, QueryClientProvider } from "react-query";

import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import SimpleBarReact from "simplebar-react";
import { ThemeProvider } from "styled-components/macro";
import { queryBungieApi } from "./functions/bungieApi";
import { theme } from "./theme";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: queryBungieApi,
    },
  },
});

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
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorkerRegistration.register();
