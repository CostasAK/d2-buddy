import { dateToTimestamp } from "functions/dateToTimestamp";

export const processDatabaseSheet = (item, index, arr) => {
  item.startTimestamp ||=
    dateToTimestamp(item?.start) || dateToTimestamp(item?.date);
  item.endTimestamp ||=
    dateToTimestamp(item?.end) ||
    dateToTimestamp(arr?.[index + 1]?.date) ||
    2 * dateToTimestamp(item?.date) - dateToTimestamp(arr?.[index - 1]?.date);
  item.id ||= item?.hash || item?.name;
  item.element ||= item?.name?.split(";")?.join(" & ");
  return item;
};
