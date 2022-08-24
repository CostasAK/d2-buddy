import axios from "axios";

const buddy_data = axios.create({
  baseURL:
    "https://raw.githubusercontent.com/CostasAK/d2-buddy-database/main/data",
  headers: {
    Accept: "application/json",
  },
});

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

export const buddyData = async (path, method = "GET", headers = {}) => {
  const { data } = await buddy_data({ url: path, method, headers });
  return data;
};

export const bungieApi = async (path, method = "GET", headers = {}) => {
  const { data } = await bungie_api({ url: path, method, headers });
  return data;
};

export const defaultQueryFn = async ({ queryKey }) => {
  if (queryKey[0] === "buddyData")
    return await buddyData(`/${queryKey.slice(1).join("/")}.json`);

  let path_start = "/Destiny2/Manifest";

  if (queryKey[0] === "Search") path_start = "/Destiny2/Armory";

  if (queryKey[0] === "Milestones") path_start = "/Destiny2";

  if (queryKey[0] === "Settings" || queryKey[0] === "Manifest") path_start = "";

  const path = `${path_start}/${queryKey.join("/")}/`;

  return await bungieApi(path);
};
