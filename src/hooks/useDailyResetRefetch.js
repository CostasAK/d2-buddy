import { useEffect, useState } from "react";

import { currentDay } from "@d2api/date";
import { useQueryClient } from "react-query";

export const useDailyResetRefetch = () => {
  const [flipFlop, setFlipFlop] = useState(false);

  const queryClient = useQueryClient();

  useEffect(() => {
    const timer = setTimeout(() => {
      setFlipFlop(!flipFlop);
      queryClient.invalidateQueries();
    }, currentDay().end.getTime() - Date.now());

    return () => {
      clearTimeout(timer);
    };
  }, [flipFlop, queryClient]);
};
