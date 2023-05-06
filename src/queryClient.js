import { compress, decompress } from "lz-string";
import { second, week } from "constants/time";

import { QueryClient } from "@tanstack/react-query";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import { defaultQueryFn } from "./functions/query";
import { removeOldestQuery } from "@tanstack/react-query-persist-client";

const CACHE_MAX_AGE = 3 * week;

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: CACHE_MAX_AGE,
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

const persister = createSyncStoragePersister({
  storage: window.localStorage,
  retry: removeOldestQuery,
  key: "D2_BUDDY_TANSTACK_QUERY_OFFLINE_CACHE",
  serialize: (data) => compress(JSON.stringify(data)),
  deserialize: (data) => JSON.parse(decompress(data)),
});

export const persistOptions = { persister, maxAge: CACHE_MAX_AGE };
