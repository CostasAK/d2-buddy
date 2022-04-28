import "./style.scss";

import ActivityHeader from "./ActivityHeader";
import ActivityModifier from "./ActivityModifier";
import ActivityModifiers from "./ActivityModifiers";
import Destination from "./Destination";
import Loading from "../Loading";
import PropTypes from "prop-types";
import useBungieApi from "../../hooks/useBungieApi";

const api_activity_path = "/Destiny2/Manifest/DestinyActivityDefinition/";

function Activity({ id, name }) {
  const { data, error, isPending } = useBungieApi(`${api_activity_path}${id}/`);

  if (isPending) {
    return (
      <>
        <article className="activity">
          <Loading size="page" fadeIn="none" />
        </article>
      </>
    );
  }

  if (error) {
    console.error(error);
    return null;
  }

  return (
    <article className="activity">
      <ActivityHeader data={data} name={name} />
      <ActivityModifiers data={data} />
    </article>
  );
}

Activity.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string,
};

Activity.defaultProps = {};

export default Activity;

export { Destination, ActivityHeader, ActivityModifiers, ActivityModifier };
