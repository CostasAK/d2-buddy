import { animate, useMotionTemplate, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";

import { useCheckFetching } from "components/RefreshButton/useCheckFetching";
import { useNavigation } from "react-router-dom";

export const useTransformRotate = () => {
  const navigation = useNavigation();

  const isLoading = navigation?.state === "loading";

  const isFetching = useCheckFetching() || isLoading;

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
