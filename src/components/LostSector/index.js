import "./style.scss";

import ActivityHeader from "../Activity/ActivityHeader";
import ActivityModifiers from "../Activity/ActivityModifiers";
import Spinner from "react-spinkit";
import getKnownActivityAmounts from "../../functions/getKnownActivityAmounts";
import useLostSectors from "../../hooks/useLostSectors";

function LostSector({ name }) {
  const { data, error, isPending } = useLostSectors(name);

  if (isPending) {
    return (
      <article className="LostSector">
        <h2 className="loading">
          <Spinner name="cube-grid" fadeIn="none" />
          <span>Loading...</span>
        </h2>
      </article>
    );
  }

  if (error) {
    console.error(error);
    return (
      <article className="LostSector">
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
    <article className="LostSector">
      <ActivityHeader
        data={data[0]}
        name={data[0].Response.displayProperties.name.replace(
          /: (Legend|Master)$/i,
          ""
        )}
      />
      <section className="Legend">
        <h2 className="Heading">Legend</h2>
        <ActivityModifiers
          data={data[0]}
          known_shields={known_shields_legend}
          known_champions={known_champions_legend}
        />
      </section>
      <section className="Master">
        <h2 className="Heading">Master</h2>
        <ActivityModifiers
          data={data[1]}
          known_shields={known_shields_master}
          known_champions={known_champions_master}
        />
      </section>
    </article>
  );
}

export default LostSector;
