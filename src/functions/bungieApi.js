import axios from "axios";

const bungie_api = axios.create({
  baseURL: "https://www.bungie.net/Platform",
  headers: {
    Accept: "application/json",
    "X-API-KEY": process.env.REACT_APP_BUNGIE_API_KEY,
  },
});

export const bungieApiNew = (path, method = "GET", headers = {}) => {
  return bungie_api({ url: path, method, headers });
};

const bungieApi = (path, method = "GET", headers = {}) => {
  const paths = Array.isArray(path) ? path : [path];

  return Promise.all(paths.map((p) => bungie_api({ url: p, method, headers })));
};

export default bungieApi;
