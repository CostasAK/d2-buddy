import { useQueries, useQuery } from "react-query";

import Card from "../../components/Card";
import { bungieApiNew } from "../../functions/bungieApi";

export default function CurrentNightfall() {
  const milestone = useQuery("nightfall-milestone", () =>
    bungieApiNew("/Destiny2/Milestones")
  );

  const activities =
    milestone?.data?.data?.Response[1942283261]?.activities || [];

  const nightfalls = useQueries(
    activities.map((activity) => {
      return {
        queryKey: activity.activityHash,
        queryFn: () =>
          bungieApiNew(
            `/Destiny2/Manifest/DestinyActivityDefinition/${activity.activityHash}`
          ),
      };
    }),
    { enabled: !!activities }
  );

  console.log(nightfalls);

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
      cardContent={
        nightfalls[0].data.data.Response.displayProperties.description
      }
      icon="https://www.bungie.net/common/destiny2_content/icons/48dda413d9f412ca2b10fd56a35a2665.png"
    />
  );
}
