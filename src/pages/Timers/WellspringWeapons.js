import CycleCard from "../../components/CycleCard";

const items = [
  "Tarnation (Grenade Launcher)",
  "Fel Taradiddle (Bow)",
  "Father's Sins (Sniper Rifle)",
  "Come to Pass (Auto Rifle)",
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
      type="weapon"
    />
  );
}
