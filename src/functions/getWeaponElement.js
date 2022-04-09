import { DamageType } from "bungie-api-ts/destiny2";
import getKeyByValue from "./getKeyByValue";

function getWeaponElement(data) {
  return getKeyByValue(DamageType, data.Response.defaultDamageType).replace(
    /thermal/i,
    "Solar"
  );
}

export default getWeaponElement;
