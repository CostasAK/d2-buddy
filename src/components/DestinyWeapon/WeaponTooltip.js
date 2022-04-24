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
        className="react-tooltip"
        border={false}
        getContent={() => <Spinner fadeIn="none" />}
      />
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
      className="react-tooltip"
      border={false}
      getContent={() => (
        <article className={"weapon-tooltip " + tier.toLowerCase()}>
          <img src={screenshot} alt="" className="weapon-screenshot" />
          <div className="weapon-header">
            <img
              src={bungie_root_path + data.Response.displayProperties.icon}
              alt=""
              className="weapon-icon"
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
      )}
    />
  );
}

export default WeaponTooltip;
