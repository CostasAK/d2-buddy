import "./style.scss";

import DestinyIcon from "../DestinyIcon";
import Spinner from "react-spinkit";
import WeaponTooltip from "./WeaponTooltip";
import getWeaponElement from "../../functions/getWeaponElement";
import getWeaponType from "../../functions/getWeaponType";
import useBungieApi from "../../hooks/useBungieApi";

const api_item_path = "/Destiny2/Manifest/DestinyInventoryItemDefinition/";
const light_gg_item_path = "https://www.light.gg/db/items/";

function DestinyWeapon({ id, name }) {
  const { data, error, isPending } = useBungieApi(`${api_item_path}${id}/`);
  if (isPending) {
    return (
      <>
        <Spinner fadeIn="0" /> {name && <span>{name}</span>}
      </>
    );
  }
  if (error) {
    console.error(error);
    return null;
  }

  name ||= data.Response.displayProperties.name;

  const type = getWeaponType(data);

  const element = getWeaponElement(data);

  return (
    <>
      <a
        className="DestinyWeapon"
        href={light_gg_item_path + id}
        target="_blank"
        rel="noreferrer"
        data-tip
        data-for={id}
      >
        <DestinyIcon icon={["weapons", type]} color={element} />{" "}
        <span>{name}</span>
      </a>
      <WeaponTooltip id={id} />
    </>
  );
}

export default DestinyWeapon;
export { WeaponTooltip };
