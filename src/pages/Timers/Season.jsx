import TimerCard from "../../components/TimerCard";
import { useQuery } from "react-query";

const bungie_root = "https://bungie.net";

export default function Season() {
  const d2settings = useQuery("Settings");

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
    <TimerCard
      name={`Season ${data.seasonNumber}: ${data.displayProperties.name}`}
      description={data.displayProperties.description}
      start={data.startDate}
      end={data.endDate}
      icon={`${bungie_root}${data.displayProperties.icon}`}
    />
  );
}
