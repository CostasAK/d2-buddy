import axios from "axios";

const bungie_api = axios.create({
  baseURL: "https://www.bungie.net/Platform",
  transformResponse: axios.defaults.transformResponse.concat((data) => {
    return data?.Response;
  }),
  headers: {
    Accept: "application/json",
    "X-API-KEY": process.env.REACT_APP_BUNGIE_API_KEY,
  },
});

export const bungieApi = async (path, method = "GET", headers = {}) => {
  const { data } = await bungie_api({ url: path, method, headers });
  return data;
};

export const queryBungieApi = async ({ queryKey }) => {
  let path_start = "/Destiny2/Manifest";

  if (queryKey[0] === "Search") path_start = "/Destiny2/Armory";

  if (queryKey[0] === "Milestones") path_start = "/Destiny2";

  if (queryKey[0] === "Settings" || queryKey[0] === "Manifest") path_start = "";

  const path = `${path_start}/${queryKey.join("/")}/`;

  return await bungieApi(path);
};
