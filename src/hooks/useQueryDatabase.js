import { minute } from "constants/time";
import { useQuery } from "react-query";

export const useQueryDatabase = (sheet) => {
  const {
    data: gids,
    isLoading: gidIsLoading,
    error: gidError,
  } = useQuery(["buddyDatabase", 1676824259], {
    enabled: isNaN(sheet),
    staleTime: 2.5 * minute,
    refetchInterval: 5 * minute,
  });

  const { data, isLoading, error } = useQuery(
    [
      "buddyDatabase",
      isNaN(sheet)
        ? gids?.find((element) => element.name === sheet)?.gid
        : sheet,
    ],
    {
      enabled:
        !isNaN(sheet) || !!gids?.find((element) => element.name === sheet)?.gid,
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
