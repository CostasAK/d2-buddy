import { queryClient } from "queryClient";

export const loader = async ({ params }) =>
  queryClient.ensureQueryData(["DestinyInventoryItemDefinition", params.hash]);
