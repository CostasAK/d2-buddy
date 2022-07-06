import { getAmmunitionType } from "functions/getAmmunitionType";

function getWeaponType(data) {
  let type = data?.itemTypeDisplayName;

  if (
    type === "Grenade Launcher" &&
    data?.equippingBlock?.ammoType === getAmmunitionType("Heavy")
  ) {
    type = "Heavy " + type;
  }

  return type;
}

export default getWeaponType;
