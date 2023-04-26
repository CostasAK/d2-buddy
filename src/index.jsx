import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { persistOptions, queryClient } from "./queryClient";

import App from "./App";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { second } from "constants/time";
import { theme } from "theme";

if (
  process.env.NODE_ENV === "production" &&
  !window.location.href.startsWith("https://d2buddy.net")
) {
  console.log("No Match!");
  console.log(
    window.location.href.replace(/https?:\/\/.*?\//i, "https://d2buddy.net/")
  );
  window.location.replace(
    window.location.href.replace(/https?:\/\/.*?\//i, "https://d2buddy.net/")
  );
}

queryClient.prefetchQuery({ queryKey: ["buddyDatabase", 1676824259] });

const updateInnerHeight = () =>
  document.documentElement.style.setProperty("--vh", `${window.innerHeight}px`);
updateInnerHeight();
window.addEventListener("resize", updateInnerHeight);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <PersistQueryClientProvider
        client={queryClient}
        persistOptions={persistOptions}
      >
        <App />
        <ReactQueryDevtools initialIsOpen={false} />
      </PersistQueryClientProvider>
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
