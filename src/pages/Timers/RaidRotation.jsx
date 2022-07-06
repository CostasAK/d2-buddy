import CycleCard from "../../components/CycleCard";
import { week } from "../../constants/time";

const items = [
  {
    name: "Last Wish",
    id: 2032534090,
  },
  {
    name: "Garden of Salvation",
  },
  {
    name: "Deep Stone Crypt",
  },
  {
    name: "Vault of Glass",
  },
].map((item) => item.name);

export default function RaidRotation() {
  return (
    <CycleCard
      title="Featured Raid"
      items={items}
      start={1653411600 * 1000}
      period={week}
      icon="https://www.bungie.net/common/destiny2_content/icons/8b1bfd1c1ce1cab51d23c78235a6e067.png"
    />
  );
}
