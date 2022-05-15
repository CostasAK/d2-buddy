import "./ActivityModifiers.scss";

import { ActivityChampions, ActivityModifier, ActivityShields } from ".";

import Loading from "../Loading";
import PropTypes from "prop-types";
import { bungieApiNew } from "../../functions/bungieApi";
import { useQueries } from "react-query";

const api_path = "/Destiny2/Manifest/DestinyActivityModifierDefinition/";

export function ActivityModifiers({ data, known_shields, known_champions }) {
  const modifiers = useQueries(
    data.Response.modifiers.map((modifier) => {
      return {
        queryKey: [
          "DestinyActivityModifierDefinition",
          modifier.activityModifierHash,
        ],
        queryFn: () =>
          bungieApiNew(`${api_path}${modifier.activityModifierHash}/`),
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

  const modifier_data = modifiers
    .filter((modifier) => modifier.isSucces)
    .map((modifier) => modifier.data);

  const shields = modifier_data.filter((modifier) =>
    /shielded foes/i.test(modifier.Response.displayProperties.name)
  );

  const champions = modifier_data.filter((modifier) =>
    /champion foes/i.test(modifier.Response.displayProperties.name)
  );

  const other_modifiers = modifier_data.filter(
    (modifier) =>
      !/(shielded|champion) foes|champions: mob/i.test(
        modifier.Response.displayProperties.name
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
