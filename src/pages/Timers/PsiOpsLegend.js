import CycleCard from "../../components/CycleCard";

const items = ["Cosmodrome", "Moon", "EDZ"];

const second = 1000;
const minute = 60 * second;
const hour = 60 * minute;
const day = 24 * hour;
const week = 7 * day;

export default function PsiOpsLegend() {
  return (
    <CycleCard
      name="PsiOps Battleground: Legend"
      items={items}
      start={1648573200 * 1000}
      period={week}
      type="season"
    />
  );
}
