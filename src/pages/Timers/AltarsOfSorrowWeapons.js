import CycleCard from "../../components/CycleCard";

const items = [
  "Blasphemer (Shotgun)",
  "Apostate (Sniper Rifle)",
  "Heretic (Rocket Launcher)",
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
      type="weapon"
    />
  );
}
