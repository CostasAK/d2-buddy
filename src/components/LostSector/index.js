import "./style.scss";

import ActivityHeader from "../Activity/ActivityHeader";
import ActivityModifiers from "../Activity/ActivityModifiers";
import useLostSectors from "../../hooks/useLostSectors";

function LostSector({ name }) {
  const { data, error, isPending } = useLostSectors(name);

  if (isPending) {
    return null;
  }

  if (error) {
    console.error(error);
    return null;
  }

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
        <ActivityModifiers data={data[0]} />
      </section>
      <section className="Master">
        <h2 className="Heading">Master</h2>
        <ActivityModifiers data={data[1]} />
      </section>
    </article>
  );
}

export default LostSector;
