import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import "simplebar";
import SimpleBarReact from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import App from "./App";
import "./index.scss";

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
