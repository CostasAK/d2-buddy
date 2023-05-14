import { useQueries, useQuery } from "@tanstack/react-query";

import { getGid } from "functions/getGid";
import { gidSheetGid } from "constants/gid";
import { minute } from "constants/time";
import { processDatabaseSheet } from "functions/processDatabaseSheet";
import { useNow } from "hooks/useNow";

export const useQueriesDatabase = (sheets, includePast = false) => {
  const {
    data: gids,
    isLoading: gidIsLoading,
    error: gidError,
  } = useQuery(["buddyDatabase", gidSheetGid], {
    enabled: sheets.some((sheet) => isNaN(sheet)),
    staleTime: 2.5 * minute,
    refetchInterval: 5 * minute,
  });

  const results = useQueries({
    queries: sheets?.map((sheet) => {
      return {
        queryKey: ["buddyDatabase", isNaN(sheet) ? getGid(gids, sheet) : sheet],
        enabled: !isNaN(sheet) || !!getGid(gids, sheet),
        staleTime: 2.5 * minute,
        refetchInterval: 5 * minute,
      };
    }),
    enabled: !!sheets,
  });

  const now = useNow();

  const data = results
    ?.map((x) => x.data)
    ?.map((sheet) =>
      sheet
        ?.map(processDatabaseSheet)
        ?.filter(
          (item) =>
            includePast ||
            item?.startTimestamp > now ||
            item?.endTimestamp > now ||
            (!item?.startTimestamp && !item?.endTimestamp)
        )
    );
  return {
    data,
    isLoading: results?.map((x) => gidIsLoading || x.isLoading),
    error:
      gidError ||
      results
        ?.filter((x) => x.error)
        ?.map((x) => {
          console.error(x.error);
          return x.error;
        }),
  };
};
