import CycleCard from "../../components/CycleCard";
import { week } from "../../constants/time";

const items = [
  {
    name: "Shattered Throne",
    id: 2032534090,
  },
  {
    name: "Pit of Heresy",
  },
  {
    name: "Prophecy",
  },
  {
    name: "Grasp of Avarice",
  },
].map((item) => item.name);

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
