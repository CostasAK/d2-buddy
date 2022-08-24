import CycleCard from "../../components/CycleCard";
import { useQuery } from "react-query";

const useBuddyData = () => {
  const { data } = useQuery(["buddyData", "featuredRaid"]);

  const schedule = data?.schedule;

  const period = schedule?.[0]?.period;

  if (!(schedule?.[0]?.end > Date.now()))
    return { period, start: undefined, items: undefined };

  let items = [];
  let start = Date.now();
  let complete = false;

  for (const item of schedule) {
    if (items.includes(item?.name)) {
      complete = true;
      break;
    }

    items.unshift(item?.name);
    start = item.start;
  }

  return {
    period,
    start,
    items: complete ? items : [items?.[items?.length - 1]],
  };
};

export default function RaidRotation() {
  const { period, start, items } = useBuddyData();

  if (items === undefined) return null;

  return (
    <CycleCard
      title="Featured Raid"
      items={items}
      start={start}
      period={period}
      icon="https://www.bungie.net/common/destiny2_content/icons/8b1bfd1c1ce1cab51d23c78235a6e067.png"
    />
  );
}
