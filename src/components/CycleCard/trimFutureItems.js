export const trimFutureItems = (items) =>
  items?.slice(
    0,
    items?.[0]?.id &&
      items?.slice(1)?.findIndex((item) => item?.id === items?.[0]?.id) > 1
      ? items?.slice(1)?.findIndex((item) => item?.id === items?.[0]?.id) + 2
      : Math.min(15, items?.length)
  );
