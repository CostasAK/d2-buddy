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
    activityModeIcon: isArray
      ? data.map(
          (d) =>
            d?.data?.displayProperties?.hasIcon &&
            d?.data?.displayProperties?.icon
        )
      : data?.[0]?.data?.displayProperties?.hasIcon &&
        data?.[0]?.data?.displayProperties?.icon,
    activityModeDescription: isArray
      ? data.map((d) => d?.data?.displayProperties?.description)
      : data?.[0]?.data?.displayProperties?.description,
    data,
    isLoading: data.map((d) => d.isLoading),
    someIsLoading: data.some((d) => d.isLoading),
  };
};
