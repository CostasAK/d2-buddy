import { useQueries, useQuery } from "@tanstack/react-query";

import { dateToTimestamp } from "functions/dateToTimestamp";
import { getGid } from "functions/getGid";
import { gidSheetGid } from "constants/gid";
import { minute } from "constants/time";

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

  const data = results
    ?.map((x) => x.data)
    ?.map((item, index) => {
      item.timestamp ||= dateToTimestamp(item?.date);
      item.startTimestamp ||= dateToTimestamp(item?.start);
      item.endTimestamp ||= dateToTimestamp(item?.end);
      item.id ||= item?.hash || item?.name;
      item.element ||= item?.name;
      return item;
    });

  return {
    data,
    isLoading: gidIsLoading ? [gidIsLoading] : results?.map((x) => x.isLoading),
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
