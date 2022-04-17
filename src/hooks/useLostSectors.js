import { useCallback, useEffect, useState } from "react";

import bungieApi from "../functions/bungieApi";

const activity_type = "DestinyActivityDefinition";
const api_activity_path = `/Destiny2/Manifest/${activity_type}/`;
const api_search_path = `/Destiny2/Armory/Search/${activity_type}/`;

const useLostSectors = (name) => {
  const [data, setData] = useState(new Array(2));
  const [hashes, setHashes] = useState(false);
  const [error, setError] = useState(false);
  const [isPending, setIsPending] = useState(true);

  const search = useCallback(() => {
    return bungieApi(api_search_path + name)
      .then((response) => {
        setHashes([
          response[0].data.Response.results.results.filter((result) =>
            result.displayProperties.name.endsWith(": Legend")
          )[0].hash,
          response[0].data.Response.results.results.filter((result) =>
            result.displayProperties.name.endsWith(": Master")
          )[0].hash,
        ]);
      })
      .catch((e) => {
        setError(e);
        setIsPending(false);
      });
  }, [name]);

  const execute = useCallback(() => {
    return bungieApi(hashes.map((hash) => api_activity_path + hash))
      .then((responses) => {
        setData(responses.map((r) => r.data));
        setIsPending(false);
      })
      .catch((e) => {
        setError(e);
        setIsPending(false);
      });
  }, [hashes]);

  useEffect(() => {
    search();
  }, [search]);

  useEffect(() => {
    if (hashes) {
      execute();
    }
  }, [execute, hashes]);

  return { data, error, isPending };
};

export default useLostSectors;
