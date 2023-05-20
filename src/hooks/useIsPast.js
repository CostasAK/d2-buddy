import { useNow } from "hooks/useNow";

export const useIsPast = (time) => {
  const now = useNow();
  return time && time <= now;
};
