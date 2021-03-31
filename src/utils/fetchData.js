import axios from "../axios";

/**
 *
 */
export default async function fetchData(movies) {
  const request = await axios.get(movies);
  return request.data.results;
}
