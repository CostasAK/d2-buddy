import CycleCard from "../../components/CycleCard";

const items = ["EDZ", "Cosmodrome", "Moon"].map((item) => <div>{item}</div>);

const second = 1000;
const minute = 60 * second;
const hour = 60 * minute;
const day = 24 * hour;

export default function PsiOpsLegend() {
  return (
    <CycleCard
      name="PsiOps Battleground: Legend"
      items={items}
      start={1652115600 * 1000}
      period={day}
      icon="https://www.bungie.net/common/destiny2_content/icons/b5ca23093632aa939e8209a2ee558106.png"
    />
  );
}
