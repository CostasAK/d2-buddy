import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

import { CssBaseline, ThemeProvider } from "@mui/material";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { theme } from "theme";
import App from "./App";
import { queryClient } from "./queryClient";

const updateInnerHeight = () =>
  document.documentElement.style.setProperty("--vh", `${window.innerHeight}px`);
updateInnerHeight();
window.addEventListener("resize", updateInnerHeight);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ThemeProvider>
  </StrictMode>
);

serviceWorkerRegistration.register();
