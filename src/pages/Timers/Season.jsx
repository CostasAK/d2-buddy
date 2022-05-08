import TimerCard from "../../components/TimerCard";
import { bungieApiNew } from "../../functions/bungieApi";
import { useQuery } from "react-query";

const bungie_root = "https://bungie.net";

export default function Season() {
  const d2settings = useQuery("d2settings", () => bungieApiNew("/Settings/"));

  const current_season_hash =
    d2settings?.data?.data?.Response?.destiny2CoreSettings?.currentSeasonHash;

  const { isLoading, error, data } = useQuery(
    "seasons",
    () =>
      bungieApiNew(
        `/Destiny2/Manifest/DestinySeasonDefinition/${current_season_hash}`
      ),
    { enabled: !!current_season_hash }
  );

  if (d2settings.isLoading || isLoading) {
    return null;
  }

  if (d2settings.error || error) {
    console.error(d2settings.error);
    return null;
  }

  const response = data?.data?.Response;

  return (
    <TimerCard
      name={response.displayProperties.name}
      description={response.displayProperties.description}
      start={response.startDate}
      end={response.endDate}
      icon={`${bungie_root}${response.displayProperties.icon}`}
    />
  );
}
