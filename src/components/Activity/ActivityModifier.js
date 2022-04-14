import "./ActivityModifier.scss";

import { PropTypes } from "prop-types";
import Spinner from "react-spinkit";
import useBungieApi from "../../hooks/useBungieApi";

const api_path = "/Destiny2/Manifest/DestinyActivityModifierDefinition/";
const bungie_root = "https://bungie.net";

function ActivityModifier({ id }) {
  const { data, error, isPending } = useBungieApi(`${api_path}${id}/`);

  if (isPending) {
    return (
      <section className="ActivityModifier">
        <Spinner name="cube-grid" className="icon" fadeIn="none" />
        <div className="description">
          <h6>Loading modifier...</h6>
        </div>
      </section>
    );
  }

  if (error) {
    console.error(error);
    return null;
  }

  if (
    !(
      data.Response.displayProperties.icon &&
      data.Response.displayProperties.name
    )
  ) {
    return null;
  }

  return (
    <section className="ActivityModifier">
      <img
        className="icon"
        src={bungie_root + data.Response.displayProperties.icon}
        alt=""
        title={data.Response.displayProperties.name}
      />
      <div className="description">
        <h6>{data.Response.displayProperties.name}</h6>
        {data.Response.displayProperties.description && (
          <p>
            {data.Response.displayProperties.description.replace(
              /(?:[\s.,]*\n+[\s.,]*)+/g,
              "; "
            )}
          </p>
        )}
      </div>
    </section>
  );
}

ActivityModifier.propTypes = {
  id: PropTypes.number.isRequired,
};

ActivityModifier.defaultProps = {};

export default ActivityModifier;
