import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { persistOptions, queryClient } from "./queryClient";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { gidSheetGid } from "constants/gid";
import { second } from "constants/time";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { theme } from "theme";
import Router from "./Router";

if (
  process.env.NODE_ENV === "production" &&
  !window.location.href.startsWith("https://d2buddy.net")
) {
  window.location.replace(
    window.location.href.replace(
      /https?:\/\/.*?(?:\/|$)/i,
      "https://d2buddy.net/"
    )
  );
}

queryClient.prefetchQuery({ queryKey: ["buddyDatabase", gidSheetGid] });

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
        <Router />
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
