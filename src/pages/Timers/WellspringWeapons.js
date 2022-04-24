import CycleCard from "../../components/CycleCard";
import DestinyWeapon from "../../components/DestinyWeapon";

const items = [
  <DestinyWeapon id="2721157927" name="Tarnation" />,
  <DestinyWeapon id="1399109800" name="Fel Taradiddle" />,
  <DestinyWeapon id="3865728990" name="Father's Sins" />,
  <DestinyWeapon id="927567426" name="Come to Pass" />,
];

const second = 1000;
const minute = 60 * second;
const hour = 60 * minute;
const day = 24 * hour;

export default function WellspringWeapons() {
  return (
    <CycleCard
      name="Wellspring Weapon"
      items={items}
      start={1648746000 * 1000}
      period={day}
      icon="https://www.bungie.net/common/destiny2_content/icons/DestinyMilestoneDefinition_feb5aecca544ab023ecf3b74ac8f509b.png"
    />
  );
}
