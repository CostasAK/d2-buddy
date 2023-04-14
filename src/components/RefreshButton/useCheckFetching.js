import { useIsFetching } from "@tanstack/react-query";

export const useCheckFetching = () => {
  return useIsFetching() > 0;
};
