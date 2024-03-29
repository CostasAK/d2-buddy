import { useEffect, useState } from "react";

import { dailyReset } from "constants/resets";
import { day } from "constants/time";
import { nextTime } from "functions/nextTime";
import { useQueryClient } from "@tanstack/react-query";

export const useDailyResetRefetch = () => {
  const [flipFlop, setFlipFlop] = useState(false);

  const queryClient = useQueryClient();

  useEffect(() => {
    const timer = setTimeout(() => {
      setFlipFlop(!flipFlop);
      queryClient.invalidateQueries();
    }, nextTime(day, dailyReset) - Date.now());

    return () => {
      clearTimeout(timer);
    };
  }, [flipFlop, queryClient]);
};
