import { gidSheetGid } from "constants/gid";
import { queryClient } from "queryClient";

export const ensureGidSheet = async () =>
  await queryClient.ensureQueryData({
    queryKey: ["buddyDatabase", gidSheetGid],
  });
