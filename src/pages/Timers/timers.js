import { dateToTimestamp } from "functions/dateToTimestamp";
import { pascalCase } from "functions/pascalCase";

export const timers = [
  {
    title: "Defiant Battlegrounds: Legend",
    sheet: "defiantRotation",
    dataToItems: (item, index) => {
      item.id = item?.name;
      item.timestamp = dateToTimestamp(item?.date);
      item.element = item?.name;
      return item;
    },
    icon: "https://bungie.net/common/destiny2_content/icons/DestinySeasonDefinition_50d80a655bccddfd26e954dbfc3b9746.png",
  },
].map((timer) => {
  timer.to = pascalCase(timer.title);
  return timer;
});
