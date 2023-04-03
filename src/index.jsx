import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

import { CssBaseline, ThemeProvider } from "@mui/material";

import App from "./App";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { queryClient } from "./queryClient";
import { second } from "constants/time";
import { theme } from "theme";

queryClient.prefetchQuery({ queryKey: ["buddyDatabase", 1676824259] });

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

serviceWorkerRegistration.register({
  onRegister: (registration) => {
    registration.update();
    setInterval(() => registration.update(), 15 * second);
  },
  onUpdate: (registration) => {
    localStorage.setItem("updateReady", true);
  },
});
