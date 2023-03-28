import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { persist, subscribeWithSelector } from "zustand/middleware";

import App from "./App";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { StrictMode } from "react";
import { create } from "zustand";
import { createRoot } from "react-dom/client";
import { queryClient } from "./queryClient";
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
  subscribeWithSelector(
    persist(
      (set) => ({
        updateReady: false,
        registration: undefined,
        clearUpdateReady: () => set(() => ({ updateReady: false })),
      }),
      {
        name: "service-worker-storage",
        partialize: (state) => ({ updateReady: state.updateReady }),
      }
    )
  )
);

serviceWorkerRegistration.register({
  onRegister: (registration) =>
    useServiceWorkerStore.setState({
      registration: registration,
    }),
  onUpdate: (registration) =>
    useServiceWorkerStore.setState({
      updateReady: true,
      registration: registration,
    }),
});
