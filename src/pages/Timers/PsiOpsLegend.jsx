import CycleCard from "../../components/CycleCard";
import { day } from "../../constants/time";

const items = ["EDZ", "Cosmodrome", "Moon"].map((item) => <div>{item}</div>);

export default function PsiOpsLegend() {
  return (
    <CycleCard
      title="PsiOps Battleground: Legend"
      items={items}
      start={1652115600 * 1000}
      period={day}
      icon="https://www.bungie.net/common/destiny2_content/icons/b5ca23093632aa939e8209a2ee558106.png"
    />
  );
}
