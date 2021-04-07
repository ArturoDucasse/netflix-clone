import requests from "../utils/requests";
import axios from "../utils/axios";

test("Fetching movies", async () => {
  const request = await axios.get(requests.fetchNetflixOriginals);
  expect(request).not.toBe([]);
});
