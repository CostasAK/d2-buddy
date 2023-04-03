export const updateApp = () => {
  const updateReady = localStorage.getItem("updateReady") || "true";
  if (updateReady === "true") {
    navigator.serviceWorker.getRegistrations().then((regs) => {
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
            localStorage.setItem("updateReady", false);

            window.location.reload();
          }
          return null;
        });
      }
      navigator.serviceWorker.getRegistration().then((registration) => {
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
          localStorage.setItem("updateReady", false);

          window.location.reload();
        }
      });
    });
  } else {
    navigator.serviceWorker.getRegistrations().then((regs) => {
      console.log(regs);
      if (regs?.length > 0) {
        regs.map((registration) => {
          registration.update();
          return null;
        });
      }
      navigator.serviceWorker.getRegistration().then((registration) => {
        console.log(registration);
        registration.update();
      });
    });
  }
};
