import "./Destination.scss";

import DestinyIcon from "../DestinyIcon";
import Spinner from "react-spinkit";
import useBungieApi from "../../hooks/useBungieApi";

const api_path = "/Destiny2/Manifest/DestinyDestinationDefinition/";

function Destination({ id }) {
  const { data, error, isPending } = useBungieApi(`${api_path}${id}/`);

  if (isPending) {
    return (
      <div className="destination">
        <DestinyIcon icon={["activities", "Destination"]} />
        <Spinner fadeIn="none" color="inherit" />
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

export default Destination;
