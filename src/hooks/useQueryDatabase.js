import { getGid } from "functions/getGid";
import { gidSheetGid } from "constants/gid";
import { minute } from "constants/time";
import { useQuery } from "@tanstack/react-query";

export const useQueryDatabase = (sheet) => {
  const {
    data: gids,
    isLoading: gidIsLoading,
    error: gidError,
  } = useQuery(["buddyDatabase", gidSheetGid], {
    enabled: isNaN(sheet),
    staleTime: 2.5 * minute,
    refetchInterval: 5 * minute,
  });

  const { data, isLoading, error } = useQuery(
    ["buddyDatabase", isNaN(sheet) ? getGid(gids, sheet) : sheet],
    {
      enabled: !isNaN(sheet) || !!getGid(gids, sheet),
      staleTime: 2.5 * minute,
      refetchInterval: 5 * minute,
    }
  );

  return {
    data: data,
    isLoading: isLoading || gidIsLoading,
    error: error || gidError,
  };
};
