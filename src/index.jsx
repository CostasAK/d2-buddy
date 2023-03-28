import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

import { CssBaseline, ThemeProvider } from "@mui/material";

import App from "./App";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { StrictMode } from "react";
import { create } from "zustand";
import { createRoot } from "react-dom/client";
import { queryClient } from "./queryClient";
import { subscribeWithSelector } from "zustand/middleware";
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
        <App />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ThemeProvider>
  </StrictMode>
);

export const useServiceWorkerStore = create(
  subscribeWithSelector((set) => ({
    updateReady: false,
    registration: undefined,
    resetUpdateReady: () => set(() => ({ updateReady: false })),
  }))
);

serviceWorkerRegistration.register({
  onUpdate: (registration) =>
    useServiceWorkerStore.setState({ updateReady: registration }),
});
