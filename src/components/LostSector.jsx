import "./LostSector.scss";

import { useQueries, useQuery } from "react-query";

import Activity from "./Activity";
import Loading from "./Loading";
import { PropTypes } from "prop-types";
import getActivityType from "../functions/getActivityType";

const activity_type = "DestinyActivityDefinition";

export default function LostSector({ name }) {
  const {
    data: search_data,
    error: search_error,
    isLoading: search_isLoading,
  } = useQuery(["Search", activity_type, name]);

  const search_results = search_data?.results?.results || [];

  const lost_sectors = useQueries(
    search_results.map((result) => {
      return { queryKey: [activity_type, result.hash] };
    }),
    { enabled: !!search_results }
  );

  if (search_isLoading || lost_sectors.some((sector) => sector.isLoading)) {
    return (
      <article className="lost-sector">
        <Loading size="page" fadeIn="none" />
      </article>
    );
  }

  if (search_error || lost_sectors.some((sector) => sector.error)) {
    search_error && console.error(search_error);
    lost_sectors.map((sector) => sector.error && console.error(sector.error));

    return (
      <article className="lost-sector">
        <h2 className="error">Can't find Lost Sector info...</h2>
      </article>
    );
  }

  const filtered_sectors = lost_sectors.filter(
    (sector) =>
      getActivityType(sector.data) === "Lost Sector" &&
      sector.data.displayProperties.name.startsWith(name + ": ") &&
      sector.data.index ===
        lost_sectors.reduce(
          (highestIndex, current) =>
            current.data.displayProperties.name ===
            sector.data.displayProperties.name
              ? Math.max(highestIndex, current.data.index)
              : highestIndex,
          0
        )
  );

  if (filtered_sectors.length === 0) {
    return (
      <article className="lost-sector">
        <h2 className="error">Can't find Lost Sector info...</h2>
      </article>
    );
  }

  return <Activity dataArray={filtered_sectors} />;
}

LostSector.propTypes = {
  name: PropTypes.string.isRequired,
};
