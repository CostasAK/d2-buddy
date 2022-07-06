import { useQueries } from "react-query";

const renameMap = { "Scored Nightfall Strikes": "Nightfall" };

const renameMode = (mode) => renameMap[mode] || mode;

export const useActivityMode = (hash) => {
  const isArray = Array.isArray(hash);

  hash = isArray ? hash : [hash];

  const data = useQueries(
    hash.map((h) => ({ queryKey: ["DestinyActivityModeDefinition", h] })),
    { enabled: hash.every((hash) => !!hash) }
  );

  return {
    activityMode: isArray
      ? data.map((d) => renameMode(d?.data?.displayProperties?.name))
      : renameMode(data?.[0]?.data?.displayProperties?.name),
    data,
    isLoading: data.map((d) => d.isLoading),
    someIsLoading: data.some((d) => d.isLoading),
  };
};
