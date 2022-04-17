import { useCallback, useEffect, useState } from "react";

import axios from "axios";

const bungie_api = axios.create({
  baseURL: "https://www.bungie.net/Platform",
  headers: {
    Accept: "application/json",
    "X-API-KEY": process.env.REACT_APP_BUNGIE_API_KEY,
  },
  // responseType: "json",
});

const useBungieApi = (path, method = "GET", headers) => {
  const [data, setData] = useState(
    Array.isArray(path) ? new Array(path.length) : {}
  );
  const [error, setError] = useState(false);
  const [isPending, setIsPending] = useState(true);

  const execute = useCallback(() => {
    const fetchData = () => {
      const paths = Array.isArray(path) ? path : [path];

      return Promise.all(
        paths.map((p) => bungie_api({ url: p, method, headers }))
      );
    };

    return fetchData()
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
    execute();
  }, [execute]);

  return { data, error, isPending };
};

export default useBungieApi;
