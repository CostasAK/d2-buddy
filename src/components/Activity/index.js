import "./style.scss";

import ActivityHeader from "./ActivityHeader";
import PropTypes from "prop-types";
import Spinner from "react-spinkit";
import useBungieApi from "../../hooks/useBungieApi";

const api_activity_path = "/Destiny2/Manifest/DestinyActivityDefinition/";

function Activity({ id, name }) {
  const { data, error, isPending } = useBungieApi(`${api_activity_path}${id}/`);

  if (isPending) {
    return (
      <>
        <Spinner fadeIn="none" /> {name && <span>{name}</span>}
      </>
    );
  }

  if (error) {
    console.error(error);
    return null;
  }

  return (
    <article className="Activity">
      <ActivityHeader data={data} name={name} />
    </article>
  );
}

Activity.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string,
};

Activity.defaultProps = {};

export default Activity;
