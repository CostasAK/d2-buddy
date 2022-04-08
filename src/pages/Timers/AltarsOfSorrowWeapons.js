import CycleCard from "../../components/CycleCard";
import DestinyWeapon from "../../components/DestinyWeapon";

const items = [
  <DestinyWeapon id="2782847179" name="Blasphemer" />,
  <DestinyWeapon id="2164448701" name="Apostate" />,
  <DestinyWeapon id="3067821200" name="Heretic" />,
];

const second = 1000;
const minute = 60 * second;
const hour = 60 * minute;
const day = 24 * hour;

export default function AltarsOfSorrowWeapons() {
  return (
    <CycleCard
      name="Altars of Sorrow Weapon"
      items={items}
      start={1648832400 * 1000}
      period={day}
    />
  );
}
