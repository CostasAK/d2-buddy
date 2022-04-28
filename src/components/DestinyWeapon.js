import "./DestinyWeapon.scss";

import DestinyIcon from "./DestinyIcon";
import Loading from "./Loading";
import { Modal } from "./Modal";
import getScreenshot from "../functions/getScreenshot";
import getWeaponElement from "../functions/getWeaponElement";
import getWeaponType from "../functions/getWeaponType";
import tierToColor from "../functions/tierToColor";
import useBungieApi from "../hooks/useBungieApi";

const api_item_path = "/Destiny2/Manifest/DestinyInventoryItemDefinition/";
const bungie_root_path = "https://bungie.net";

export default function DestinyWeapon({ id, name }) {
  const { data, error, isPending } = useBungieApi(`${api_item_path}${id}/`);
  if (isPending) {
    return (
      <>
        <div className="destiny-weapon">
          <Loading size="inline" /> {name && <span>{name}</span>}
        </div>
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

  const tier = data.Response.inventory.tierTypeName;
  const screenshot = getScreenshot(data);

  return (
    <Modal
      triggerContent={
        <div className="destiny-weapon a-link">
          <DestinyIcon icon={["weapons", type]} color={element} />{" "}
          <span>{name}</span>
        </div>
      }
      tooltip={{
        contents: `${tier} ${element} ${type}`,
        backgroundColor: tierToColor(tier),
      }}
    >
      <article className={"weapon-modal " + tier.toLowerCase()}>
        <img src={screenshot} alt="" className="weapon-screenshot" />
        <div className="weapon-header">
          <img
            src={bungie_root_path + data.Response.displayProperties.icon}
            alt=""
            className="weapon-icon"
          />
          <div className="weapon-header-text">
            <h3>{name}</h3>
            <p>
              {tier} |{" "}
              {<DestinyIcon icon={["elements", element]} color={element} />}{" "}
              {element} | {<DestinyIcon icon={["weapons", type]} />} {type}
            </p>
          </div>
        </div>
      </article>
    </Modal>
  );
}
