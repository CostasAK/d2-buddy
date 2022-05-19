import "./ActivityModifiers.scss";

import { ActivityChampions, ActivityModifier, ActivityShields } from ".";

import Loading from "../Loading";
import PropTypes from "prop-types";
import getKnownActivityAmounts from "../../functions/getKnownActivityAmounts";
import { useQueries } from "react-query";

export function ActivityModifiers({ data }) {
  const modifiers = useQueries(
    data.modifiers.map((modifier) => {
      return {
        queryKey: [
          "DestinyActivityModifierDefinition",
          modifier.activityModifierHash,
        ],
      };
    })
  );

  if (!modifiers.every((modifier) => modifier.isSuccess)) {
    if (modifiers.some((modifier) => modifier.isLoading))
      return (
        <section className="activity-modifiers">
          <Loading size="section" />
        </section>
      );

    modifiers
      .filter((modifier) => modifier.error)
      .map((modifier) => console.error(modifier.error));
    return null;
  }

  const { known_shields, known_champions } = getKnownActivityAmounts(
    data?.hash
  );

  const modifier_data = modifiers
    .filter((modifier) => modifier.isSuccess)
    .map((modifier) => modifier.data);

  const shields = modifier_data.filter((modifier) =>
    /shielded foes/i.test(modifier.displayProperties.name)
  );

  const champions = modifier_data.filter((modifier) =>
    /champion foes/i.test(modifier.displayProperties.name)
  );

  const other_modifiers = modifier_data.filter(
    (modifier) =>
      !/(shielded|champion) foes|champions: mob| modifiers$/i.test(
        modifier.displayProperties.name
      )
  );

  return (
    <section className="activity-modifiers">
      {shields.length > 0 && (
        <ActivityShields shields={shields} known_shields={known_shields} />
      )}
      {champions.length > 0 && (
        <ActivityChampions
          champions={champions}
          known_champions={known_champions}
        />
      )}
      {other_modifiers.length > 0 && (
        <section className="other-modifiers">
          <h5 className="heading">Modifiers</h5>
          <div className="modifiers">
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
