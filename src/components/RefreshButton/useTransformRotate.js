import { animate, useMotionTemplate, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";

import { useCheckFetching } from "components/RefreshButton/useCheckFetching";

export const useTransformRotate = () => {
  const isFetching = useCheckFetching();

  const rotate = useMotionValue(0);

  const [hasToFinish, setHasToFinish] = useState(false);

  useEffect(() => {
    let controls;

    if (hasToFinish && !isFetching) {
      controls = animate(rotate, [rotate.get(), 360], {
        ease: "linear",
        duration: (360 - rotate.get()) / 360,
        onComplete: () => {
          setHasToFinish(false);
        },
      });
    } else if (isFetching) {
      controls = animate(rotate, [0, 360], {
        repeat: Infinity,
        ease: "linear",
        duration: 1,
      });
      setHasToFinish(true);
    }

    return controls?.stop;
  }, [hasToFinish, isFetching, rotate]);

  const transform = useMotionTemplate`rotate(${rotate}deg)`;

  return transform;
};
