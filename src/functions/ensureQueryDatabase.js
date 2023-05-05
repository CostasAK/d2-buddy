import { ensureGidSheet } from "functions/ensureGidSheet";
import { getGid } from "functions/getGid";
import { queryClient } from "queryClient";

export const ensureQueryDatabase = async (sheet) => {
  const gidSheet = await ensureGidSheet();
  return await queryClient.ensureQueryData({
    queryKey: ["buddyDatabase", getGid(gidSheet, sheet)],
  });
};
