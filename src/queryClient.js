import { QueryClient } from "react-query";
import { defaultQueryFn } from "./functions/query";
import { minute } from "constants/time";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 30 * minute,
      queryFn: defaultQueryFn,
      retry: true,
      retryDelay: (attemptIndex) =>
        attemptIndex < 6
          ? Math.min(
              Math.ceil(1000 * (2 ** attemptIndex + Math.random())),
              64000
            )
          : 64000,
      refetchInterval: 30 * 1000,
    },
  },
});
