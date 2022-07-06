import "./DestinyWeapon.scss";

import A from "./A";
import DestinyIcon from "./DestinyIcon";
import Img from "./Img";
import Loading from "./Loading";
import Modal from "./Modal";
import { getScreenshot } from "../functions/getScreenshot";
import getWeaponType from "../functions/getWeaponType";
import tierToColor from "../functions/tierToColor";
import { useQuery } from "react-query";
import { useWeaponElement } from "hooks/useWeaponElement";

const sites = [
  {
    name: "DestinyTracker",
    url: "https://destinytracker.com/destiny-2/db/items/",
    icon: "https://cod.tracker.gg/public/icons/icon192.png",
  },
  {
    name: "Gunsmith",
    url: "https://d2gunsmith.com/w/",
    icon: "https://d2gunsmith.com/favicon.ico",
  },
  {
    name: "Light.gg",
    url: "https://www.light.gg/db/en/items/",
    icon: "https://www.light.gg/Content/Images/new-icon.png",
  },
];

function WeaponLinks({ id }) {
  return (
    <ul className="weapon-links">
      {sites.map((site) => (
        <li key={site.name}>
          <A className="site-link" href={site.url + id}>
            {site.icon && <Img src={site.icon} className="site-icon" />}
            {site.name}
          </A>
        </li>
      ))}
    </ul>
  );
}

export default function DestinyWeapon({ id, name }) {
  let { data, error, isLoading } = useQuery([
    "DestinyInventoryItemDefinition",
    id,
  ]);

  const { weaponElement: element, someIsLoading: elementIsLoading } =
    useWeaponElement(data?.defaultDamageTypeHash);

  if (isLoading || elementIsLoading) {
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

  name ||= data?.displayProperties?.name;

  const type = getWeaponType(data);

  const tier = data?.inventory?.tierTypeName;
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
      <article className={"weapon-modal " + tier?.toLowerCase()}>
        <div
          className="weapon-screenshot"
          style={{ backgroundImage: `url(${screenshot})` }}
        >
          <WeaponLinks id={id} />
        </div>
        <div className="weapon-header">
          <Img src={data.displayProperties.icon} className="weapon-icon" />
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
