import { DamageType, DestinyAmmunitionType } from "bungie-api-ts/destiny2";

import DestinyIcon from "../DestinyIcon";
import { PulseLoader } from "react-spinners";
import getKeyByValue from "../../functions/getKeyByValue";
import useBungieApi from "../../hooks/useBungieApi";

const api_item_path = "/Destiny2/Manifest/DestinyInventoryItemDefinition/";
const light_gg_item_path = "https://www.light.gg/db/items/";

function DestinyWeapon({ id, name }) {
  const { data, error, isPending } = useBungieApi(`${api_item_path}${id}/`);
  if (isPending) {
    return (
      <>
        <PulseLoader color="#f5f5f588" size="0.5em" speedMultiplier={0.5} />{" "}
        {name && <span>{name}</span>}
      </>
    );
  }
  if (error) {
    console.error(error);
    return null;
  }

  name ||= data.Response.displayProperties.name;

  let type = data.Response.itemTypeDisplayName;
  if (
    type === "Grenade Launcher" &&
    DestinyAmmunitionType.Heavy === data.Response.equippingBlock.ammoType
  ) {
    type = "Heavy " + type;
  }

  const element = getKeyByValue(
    DamageType,
    data.Response.defaultDamageType
  ).replace(/thermal/i, "Solar");

  return (
    <a
      className="DestinyWeapon"
      href={light_gg_item_path + id}
      target="_blank"
      rel="noreferrer"
    >
      <DestinyIcon icon={["weapons", type]} color={element} />{" "}
      <span>{name}</span>
    </a>
  );
}

export default DestinyWeapon;
