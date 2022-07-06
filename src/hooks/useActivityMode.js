import { useQueries } from "react-query";

export const useActivityMode = (hash) => {
  const isArray = Array.isArray(hash);

  hash = isArray ? hash : [hash];

  console.log(hash);

  const data = useQueries(
    hash.map((h) => ({ queryKey: ["DestinyActivityModeDefinition", h] })),
    { enabled: hash.every((hash) => !!hash) }
  );

  console.log(data);

  return {
    activityMode: isArray
      ? data.map((d) => d?.data?.displayProperties?.name)
      : data?.[0]?.data?.displayProperties?.name,
    data,
    isLoading: data.map((d) => d.isLoading),
    someIsLoading: data.some((d) => d.isLoading),
  };
};
