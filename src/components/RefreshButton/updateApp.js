export const updateApp = (registration, updateReady, clearUpdateReady) => {
  if (updateReady) {
    if (registration?.waiting) {
      let preventReloadLoop = false;

      navigator.serviceWorker.addEventListener("controllerchange", () => {
        if (preventReloadLoop) {
          return;
        }

        preventReloadLoop = true;

        clearUpdateReady();

        global.location.reload();
      });

      registration.waiting.postMessage({
        type: "SKIP_WAITING",
      });
    } else {
      clearUpdateReady();

      global.location.reload();
    }
  }
};
