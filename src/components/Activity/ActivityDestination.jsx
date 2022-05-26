import "./Destination.scss";

import DestinyIcon from "../DestinyIcon";
import Loading from "../Loading";
import { PropTypes } from "prop-types";
import { forwardRef } from "react";
import { useQuery } from "react-query";

export const ActivityDestination = forwardRef(({ id }, ref) => {
  const { data, error, isLoading } = useQuery([
    "DestinyDestinationDefinition",
    id,
  ]);

  if (isLoading) {
    return (
      <p ref={ref} className="destination">
        <DestinyIcon icon={["activities", "Destination"]} />
        <Loading size="inline" />
      </p>
    );
  }

  if (error) {
    console.error(error);
    return null;
  }

  return (
    <p ref={ref} className="destination">
      <DestinyIcon icon={["activities", "Destination"]} />
      {data?.displayProperties?.name}
    </p>
  );
});

ActivityDestination.propTypes = {
  id: PropTypes.number,
};

ActivityDestination.defaultProps = {};
