import { QueryClient } from "react-query";
import { queryBungieApi } from "./functions/bungieApi";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: queryBungieApi,
      retry: true,
    },
  },
});
