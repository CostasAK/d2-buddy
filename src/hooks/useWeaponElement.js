import { useQueries } from "react-query";

export const useWeaponElement = (hash) => {
  const isArray = Array.isArray(hash);

  hash = isArray ? hash : [hash];

  const data = useQueries(
    hash.map((h) => ({
      queryKey: ["DestinyDamageTypeDefinition", h],
      enabled: !!h,
    }))
  );

  return {
    weaponElement: isArray
      ? data.map((d) => d?.data?.displayProperties?.name)
      : data?.[0]?.data?.displayProperties?.name,
    weaponElementIcon: isArray
      ? data.map(
          (d) =>
            d?.data?.displayProperties?.hasIcon &&
            d?.data?.displayProperties?.icon
        )
      : data?.[0]?.data?.displayProperties?.hasIcon &&
        data?.[0]?.data?.displayProperties?.icon,
    data,
    isLoading: data.map((d) => d.isLoading),
    someIsLoading: data.some((d) => d.isLoading),
  };
};
