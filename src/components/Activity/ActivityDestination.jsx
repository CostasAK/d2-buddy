import "./Destination.scss";

import DestinyIcon from "../DestinyIcon";
import Loading from "../Loading";
import { useQuery } from "react-query";

export function ActivityDestination({ id }) {
  const { data, error, isLoading } = useQuery([
    "DestinyDestinationDefinition",
    id,
  ]);

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
      {data?.displayProperties?.name}
    </p>
  );
}
