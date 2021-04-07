import movieTrailer from "movie-trailer";

test("Movie trailer library", async () => {
  await movieTrailer("up").then((url) => expect(url).not.toBe(null));
});
