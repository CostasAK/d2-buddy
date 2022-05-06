import "./LostSector.scss";

import ActivityHeader from "./Activity/ActivityHeader";
import ActivityModifiers from "./Activity/ActivityModifiers";
import Loading from "./Loading";
import { PropTypes } from "prop-types";
import getKnownActivityAmounts from "../functions/getKnownActivityAmounts";
import useLostSectors from "../hooks/useLostSectors";

export default function LostSector({ name }) {
  const { data, error, isPending } = useLostSectors(name);

  if (isPending) {
    return (
      <article className="lost-sector">
        <Loading size="page" fadeIn="none" />
      </article>
    );
  }

  if (error) {
    console.error(error);
    return (
      <article className="lost-sector">
        <h2 className="error">Can't find Lost Sector info...</h2>
      </article>
    );
  }

  const {
    known_shields: known_shields_legend,
    known_champions: known_champions_legend,
  } = getKnownActivityAmounts(data[0].Response.hash);

  const {
    known_shields: known_shields_master,
    known_champions: known_champions_master,
  } = getKnownActivityAmounts(data[1].Response.hash);

  return (
    <article className="lost-sector success">
      <ActivityHeader
        data={data[0]}
        name={data[0].Response.displayProperties.name.replace(
          /: (Legend|Master)$/i,
          ""
        )}
      />
      <section className="legend-difficulty">
        <h2 className="heading">Legend</h2>
        <ActivityModifiers
          data={data[0]}
          known_shields={known_shields_legend}
          known_champions={known_champions_legend}
        />
      </section>
      <section className="master-difficulty">
        <h2 className="heading">Master</h2>
        <ActivityModifiers
          data={data[1]}
          known_shields={known_shields_master}
          known_champions={known_champions_master}
        />
      </section>
    </article>
  );
}

LostSector.propTypes = {
  name: PropTypes.string.isRequired,
};
