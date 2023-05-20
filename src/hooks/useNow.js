import { hour, minute } from "constants/time";
import { useEffect, useState } from "react";

export const useNow = () => {
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const timer = setTimeout(() => {
      setNow(Date.now());
    }, Math.min(minute, hour - (Date.now() % hour)));

    return () => {
      clearTimeout(timer);
    };
  });

  return now;
};
