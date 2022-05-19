import { DestinyActivityModeType } from "bungie-api-ts/destiny2";
import getKeyByValue from "./getKeyByValue";

const known_types = { LostSector: "Lost Sector" };

function getActivityType(data) {
  const type = getKeyByValue(
    DestinyActivityModeType,
    data?.directActivityModeType
  );
  return known_types[type] || type;
}

export default getActivityType;
