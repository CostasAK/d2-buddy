import "./Destination.scss";

import DestinyIcon from "../DestinyIcon";
import Loading from "../Loading";
import useBungieApi from "../../hooks/useBungieApi";

const api_path = "/Destiny2/Manifest/DestinyDestinationDefinition/";

export function ActivityDestination({ id }) {
  const { data, error, isPending } = useBungieApi(`${api_path}${id}/`);

  if (isPending) {
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
      {data.Response.displayProperties.name}
    </p>
  );
}
