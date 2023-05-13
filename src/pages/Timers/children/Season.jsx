import TimerCard from "../../components/TimerCard";
import { useQuery } from "@tanstack/react-query";

export default function Season() {
  const d2settings = useQuery(["Settings"]);

  const current_season_hash =
    d2settings?.data?.destiny2CoreSettings?.currentSeasonHash;

  const { isLoading, error, data } = useQuery(
    ["DestinySeasonDefinition", current_season_hash],
    { enabled: !!current_season_hash }
  );

  if (d2settings.isLoading || isLoading) {
    return null;
  }

  if (d2settings.error || error) {
    console.error(d2settings.error);
    return null;
  }

  return (
    <>
      <TimerCard
        title={`Season ${data.seasonNumber}: ${data.displayProperties.name}`}
        description={data.displayProperties.description}
        start={data.startDate}
        end={data.endDate}
        icon={`${data.displayProperties.icon}`}
      />
    </>
  );
}
