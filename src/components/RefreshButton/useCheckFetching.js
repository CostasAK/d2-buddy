import { useIsFetching } from "react-query";

export const useCheckFetching = () => {
  return useIsFetching() > 0;
};
