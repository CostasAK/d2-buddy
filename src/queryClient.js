import { QueryClient } from "react-query";
import { minute } from "constants/time";
import { queryBungieApi } from "./functions/bungieApi";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 30 * minute,
      queryFn: queryBungieApi,
      retry: true,
    },
  },
});
