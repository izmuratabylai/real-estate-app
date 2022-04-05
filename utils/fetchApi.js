
import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "4b7f58c0afmsh138fe7ac93d991bp108b2djsnf1154bd930a7",
    },
  });

  return data;
};