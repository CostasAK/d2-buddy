import "./Destination.scss";

import DestinyIcon from "../DestinyIcon";
import Loading from "../Loading";
import { bungieApiNew } from "../../functions/bungieApi";
import { useQuery } from "react-query";

const api_path = "/Destiny2/Manifest/DestinyDestinationDefinition/";

export function ActivityDestination({ id }) {
  const { data, error, isLoading } = useQuery(
    ["DestinyDestinationDefinition", id],
    () => bungieApiNew(`${api_path}${id}/`)
  );

  if (isLoading) {
    return (
      <div className="destination">
        <DestinyIcon icon={["activities", "Destination"]} />
        <Loading size="inline" />
      </div>
    );
  }

  if (error) {
    console.error(error);
    return null;
  }

  return (
    <p className="destination">
      <DestinyIcon icon={["activities", "Destination"]} />
      {data.data.Response.displayProperties.name}
    </p>
  );
}
