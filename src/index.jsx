import "simplebar";
import "simplebar/dist/simplebar.min.css";

import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

import { CssBaseline, ThemeProvider } from "@mui/material";

import App from "./App";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { StrictMode } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components/macro";
import { createRoot } from "react-dom/client";
import { queryClient } from "./queryClient";
import { theme as styledTheme } from "./style/theme";
import { theme } from "theme";

const updateInnerHeight = () =>
  document.documentElement.style.setProperty("--vh", `${window.innerHeight}px`);
updateInnerHeight();
window.addEventListener("resize", updateInnerHeight);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <QueryClientProvider client={queryClient}>
        <StyledThemeProvider theme={styledTheme}>
          <App />
        </StyledThemeProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ThemeProvider>
  </StrictMode>
);

serviceWorkerRegistration.register();
