import { useFetch } from "react-async";

const api_root_path = "https://www.bungie.net/Platform";
const headers = {
  Accept: "application/json",
  "X-API-KEY": process.env.REACT_APP_BUNGIE_API_KEY,
};

const useBungieApi = (path, method = "GET") => {
  const { data, error, isPending } = useFetch(`${api_root_path}${path}`, {
    method,
    headers,
  });

  return { data, error, isPending };
};

export default useBungieApi;
