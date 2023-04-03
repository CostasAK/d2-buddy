export const updateApp = () => {
  const updateReady = localStorage.getItem("updateReady") || true;
  if (updateReady) {
    navigator.serviceWorker.getRegistrations().then((regs) => {
      console.log("Got SW registrations");
      console.log(regs);
      if (regs?.length > 0) {
        regs.map((registration) => {
          if (registration?.waiting) {
            let preventReloadLoop = false;

            navigator.serviceWorker.addEventListener("controllerchange", () => {
              if (preventReloadLoop) {
                return;
              }

              preventReloadLoop = true;

              localStorage.setItem("updateReady", false);

              window.location.reload();
            });

            registration.waiting.postMessage({
              type: "SKIP_WAITING",
            });
          } else {
            console.log("No SW waiting, reloading...");
            localStorage.setItem("updateReady", false);

            window.location.reload();
          }
          return null;
        });
      }
      navigator.serviceWorker.getRegistration().then((registration) => {
        console.log("Got SW registration");
        console.log(registration);
        if (registration?.waiting) {
          let preventReloadLoop = false;

          navigator.serviceWorker.addEventListener("controllerchange", () => {
            if (preventReloadLoop) {
              return;
            }

            preventReloadLoop = true;

            localStorage.setItem("updateReady", false);

            window.location.reload();
          });

          registration.waiting.postMessage({
            type: "SKIP_WAITING",
          });
        } else {
          console.log("No SW waiting, reloading...");
          localStorage.setItem("updateReady", false);

          window.location.reload();
        }
      });
    });
  }
};
