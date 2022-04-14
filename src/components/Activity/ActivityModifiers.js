import "./ActivityModifiers.scss";

import ActivityModifier from "./ActivityModifier";
import PropTypes from "prop-types";

function ActivityModifiers({ data }) {
  return (
    <section className="ActivityModifiers">
      {data.Response.modifiers.map((modifier) => (
        <ActivityModifier id={modifier.activityModifierHash} />
      ))}
    </section>
  );
}

ActivityModifiers.propTypes = {
  data: PropTypes.object.isRequired,
};

ActivityModifiers.defaultProps = {};

export default ActivityModifiers;
