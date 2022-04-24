import { useCallback, useEffect, useState } from "react";

import bungieApi from "../functions/bungieApi";

const useBungieApi = (path, method = "GET", headers) => {
  const [data, setData] = useState(
    Array.isArray(path) ? new Array(path.length) : {}
  );
  const [error, setError] = useState(false);
  const [isPending, setIsPending] = useState(true);

  const execute = useCallback(() => {
    return bungieApi(path, method, headers)
      .then((responses) => {
        setData(
          responses.length > 1
            ? responses.map((r) => r.data)
            : responses[0].data
        );
        setIsPending(false);
      })
      .catch((e) => {
        setError(e);
        setIsPending(false);
      });
  }, [path, method, headers]);

  useEffect(() => {
    let cleanup = false;
    if (!cleanup) {
      execute();
    }
    return () => {
      cleanup = true;
    };
  }, [execute]);

  return { data, error, isPending };
};

export default useBungieApi;
