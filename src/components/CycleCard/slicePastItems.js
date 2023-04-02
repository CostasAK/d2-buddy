export const slicePastItems = (items) =>
  items?.slice(
    items?.findIndex(
      (_, index, array) => array?.[index + 1]?.timestamp > Date.now()
    )
  );
