import { minute, second } from "constants/time";

import { QueryClient } from "react-query";
import { defaultQueryFn } from "./functions/query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 30 * minute,
      staleTime: 5 * second,
      queryFn: defaultQueryFn,
      retry: true,
      retryDelay: (attemptIndex) =>
        attemptIndex < 6
          ? Math.min(
              Math.ceil(1000 * (2 ** attemptIndex + Math.random())),
              64000
            )
          : 64000,
      refetchInterval: 30 * second,
    },
  },
});
