import CycleCard from "../../components/CycleCard";
import { week } from "../../constants/time";

const items = [
  "Shattered Throne",
  "Pit of Heresy",
  "Prophecy",
  "Grasp of Avarice",
].map((item) => <div>{item}</div>);

export default function DungeonRotation() {
  return (
    <CycleCard
      title="Featured Dungeon"
      items={items}
      start={1653411600 * 1000}
      period={week}
      icon="https://www.bungie.net/common/destiny2_content/icons/DestinyActivityModeDefinition_f20ebb76bee675ca429e470cec58cc7b.png"
    />
  );
}
