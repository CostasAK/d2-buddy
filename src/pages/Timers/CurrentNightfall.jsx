import { useQueries, useQuery } from "react-query";

import Activity from "../../components/Activity/index";
import Card from "../../components/Card";

export default function CurrentNightfall() {
  const milestone = useQuery("Milestones");

  const activities = milestone?.data?.[1942283261]?.activities || [];

  const nightfalls = useQueries(
    activities.map((activity) => {
      return {
        queryKey: ["DestinyActivityDefinition", activity.activityHash],
      };
    }),
    { enabled: !!activities }
  );

  if (
    !(
      milestone.isSuccess &&
      nightfalls.every((nightfall) => nightfall.isSuccess)
    )
  ) {
    return null;
  }

  return (
    <Card
      title="Nightfall"
      icon="https://www.bungie.net/common/destiny2_content/icons/48dda413d9f412ca2b10fd56a35a2665.png"
      customModal
      modalContent={<Activity dataArray={nightfalls} />}
    >
      {nightfalls[0].data.displayProperties.description}
    </Card>
  );
}
