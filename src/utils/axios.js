import axios from "axios";
export const BASE_URL = "https://api.themoviedb.org/3";
export const IMAGE_URL = "https://image.tmdb.org/t/p/original";
export const API_KEY = "9a5e10c77888f3074ad4bbb47c1d7d21";

/**
 *Setting the base URL for future requests
 */
const instance = axios.create({
  baseURL: BASE_URL,
});

export default instance;
