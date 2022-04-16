import { useAsync } from "react-async";

const api_root_path = "https://www.bungie.net/Platform";
const headers = {
  Accept: "application/json",
  "X-API-KEY": process.env.REACT_APP_BUNGIE_API_KEY,
};

const fetchJson = async ({ path, options }) => {
  const data = await fetch(path, options);

  if (!data.ok) {
    throw new Error(data.statusText);
  }

  return await data.json();
};

const useBungieApi = (path, method = "GET") => {
  const { data, error, isPending } = useAsync({
    promiseFn: fetchJson,
    path: `${api_root_path}${path}`,
    options: { method, headers },
  });

  return { data, error, isPending };
};

export default useBungieApi;
