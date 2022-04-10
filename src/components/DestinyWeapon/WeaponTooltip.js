import "./WeaponTooltip.scss";

import DestinyIcon from "../DestinyIcon";
import ReactTooltip from "react-tooltip";
import Spinner from "react-spinkit";
import getScreenshot from "../../functions/getScreenshot";
import getWeaponElement from "../../functions/getWeaponElement";
import getWeaponType from "../../functions/getWeaponType";
import tierToColor from "../../functions/tierToColor";
import useBungieApi from "../../hooks/useBungieApi";

const api_item_path = "/Destiny2/Manifest/DestinyInventoryItemDefinition/";
const bungie_root_path = "https://bungie.net";

function WeaponTooltip({ id }) {
  const { data, error, isPending } = useBungieApi(`${api_item_path}${id}/`);

  if (isPending) {
    return (
      <ReactTooltip
        id={id}
        place="bottom"
        className="ReactTooltip"
        border={false}
      >
        <Spinner fadeIn="none" />
      </ReactTooltip>
    );
  }

  if (error) {
    console.error(error);
    return null;
  }

  const name = data.Response.displayProperties.name;

  const type = getWeaponType(data);

  const element = getWeaponElement(data);

  const screenshot = getScreenshot(data);

  const tier = data.Response.inventory.tierTypeName;

  return (
    <ReactTooltip
      id={id}
      place="bottom"
      backgroundColor={tierToColor(tier)}
      className="ReactTooltip"
      border={false}
    >
      <article className={"WeaponTooltip " + tier}>
        <img src={screenshot} alt="" className="WeaponScreenshot" />
        <div className="WeaponHeader">
          <img
            src={bungie_root_path + data.Response.displayProperties.icon}
            alt=""
            className="WeaponIcon"
          />
          <div className="WeaponHeaderText">
            <h3>{name}</h3>
            <p>
              {tier} |{" "}
              {<DestinyIcon icon={["elements", element]} color={element} />}{" "}
              {element} | {<DestinyIcon icon={["weapons", type]} />} {type}
            </p>
          </div>
        </div>
      </article>
    </ReactTooltip>
  );
}

export default WeaponTooltip;
