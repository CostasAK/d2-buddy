import { DestinyAmmunitionType } from "bungie-api-ts/destiny2";

function getWeaponType(data) {
  let type = data.Response.itemTypeDisplayName;
  if (
    type === "Grenade Launcher" &&
    DestinyAmmunitionType.Heavy === data.Response.equippingBlock.ammoType
  ) {
    type = "Heavy " + type;
  }
  return type;
}

export default getWeaponType;
