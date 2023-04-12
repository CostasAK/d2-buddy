import Papa from "papaparse";
import axios from "axios";

const buddy_data = axios.create({
  baseURL: "https://cdn.jsdelivr.net/gh/CostasAK/d2-buddy-database@main/data",
  headers: {
    Accept: "application/json",
  },
});

const buddy_database = axios.create({
  baseURL:
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vTYGH7Py5g05fXRRj_wsUtZ3me3m68Qb1RxNKiDgxwMoKL15Zc13uh0rz8VJ-3NJSvtJv33LLpeKNPD",
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

export const buddyDatabase = async (path, method = "GET", headers = {}) => {
  const { data } = await buddy_database({ url: path, method, headers });
  const { data: json } = Papa.parse(data, { header: true });
  return json;
};

export const bungieApi = async (path, method = "GET", headers = {}) => {
  const { data } = await bungie_api({ url: path, method, headers });
  return data;
};

export const defaultQueryFn = async ({ queryKey }) => {
  if (queryKey[0] === "buddyData")
    return await buddyData(`/${queryKey.slice(1).join("/")}.json`);

  if (queryKey[0] === "buddyDatabase")
    return await buddyDatabase(`pub?single=true&output=csv&gid=${queryKey[1]}`);

  let path_start = "/Destiny2/Manifest";

  if (queryKey[0] === "Search") path_start = "/Destiny2/Armory";

  if (queryKey[0] === "Milestones") path_start = "/Destiny2";

  if (queryKey[0] === "Settings" || queryKey[0] === "Manifest") path_start = "";

  const path = `${path_start}/${queryKey.join("/")}/`;

  return await bungieApi(path);
};
