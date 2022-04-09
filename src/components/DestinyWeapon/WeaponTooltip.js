import "./WeaponTooltip.scss";

import DestinyIcon from "../DestinyIcon";
import ReactTooltip from "react-tooltip";
import getWeaponElement from "../../functions/getWeaponElement";
import getWeaponType from "../../functions/getWeaponType";
import useBungieApi from "../../hooks/useBungieApi";

const api_item_path = "/Destiny2/Manifest/DestinyInventoryItemDefinition/";
const bungie_root_path = "https://bungie.net";

function WeaponTooltip({ id }) {
  const { data, error, isPending } = useBungieApi(`${api_item_path}${id}/`);

  if (isPending) {
    return null;
  }

  if (error) {
    console.error(error);
    return null;
  }

  const name = data.Response.displayProperties.name;

  const type = getWeaponType(data);

  const element = getWeaponElement(data);

  return (
    <ReactTooltip id={id} place="bottom">
      <article
        className={"WeaponTooltip " + data.Response.inventory.tierTypeName}
      >
        <img
          src={bungie_root_path + data.Response.displayProperties.icon}
          alt=""
        />
        <div>
          <h3>{name}</h3>
          <span>
            {data.Response.inventory.tierTypeName} |{" "}
            {<DestinyIcon icon={["elements", element]} color={element} />}{" "}
            {element} | {<DestinyIcon icon={["weapons", type]} />} {type}
          </span>
        </div>
      </article>
    </ReactTooltip>
  );
}

export default WeaponTooltip;
