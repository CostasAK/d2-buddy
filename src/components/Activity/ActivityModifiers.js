import "./ActivityModifiers.scss";

import ActivityChampions from "./ActivityChampions";
import ActivityModifier from "./ActivityModifier";
import ActivityShields from "./ActivityShields";
import PropTypes from "prop-types";
import useBungieApi from "../../hooks/useBungieApi";

const api_path = "/Destiny2/Manifest/DestinyActivityModifierDefinition/";

function ActivityModifiers({ data }) {
  const {
    data: modifier_data,
    error,
    isPending,
  } = useBungieApi(
    data.Response.modifiers.map(
      (modifier) => `${api_path}${modifier.activityModifierHash}/`
    )
  );

  if (isPending) {
    return null;
  }

  if (error) {
    console.error(error);
    return null;
  }

  const shields = modifier_data.filter((modifier) =>
    /shielded foes/i.test(modifier.Response.displayProperties.name)
  );

  const champions = modifier_data.filter((modifier) =>
    /champion foes/i.test(modifier.Response.displayProperties.name)
  );

  const other_modifiers = modifier_data.filter(
    (modifier) =>
      !/(shielded|champion) foes/i.test(
        modifier.Response.displayProperties.name
      )
  );

  return (
    <section className="ActivityModifiers">
      {shields.length > 0 && <ActivityShields shields={shields} />}
      {champions.length > 0 && <ActivityChampions champions={champions} />}
      {other_modifiers.length > 0 && (
        <section className="OtherModifiers">
          <h5 className="Heading">Modifiers</h5>
          <div className="Modifiers">
            {other_modifiers.map((modifier, index) => (
              <ActivityModifier key={index} data={modifier} />
            ))}
          </div>
        </section>
      )}
    </section>
  );
}

ActivityModifiers.propTypes = {
  data: PropTypes.object.isRequired,
};

ActivityModifiers.defaultProps = {};

export default ActivityModifiers;
