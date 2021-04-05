import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

import "../Styles/module.row.css";
import axios, { IMAGE_URL } from "../utils/axios";

function Row({ title, movieTitles, isNetflixOriginal }) {
  const [movie, setMovie] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(movieTitles);
      setMovie(request.data.results);
      return request;
    };
    //
    fetchData();
  }, [movieTitles]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const launchTrailer = async (movie) => {
    trailerUrl
      ? setTrailerUrl("")
      : await movieTrailer(movie?.name || movie?.original_name || "")
          .then((url) => {
            if (url) {
              const urlParams = new URLSearchParams(new URL(url).search);
              setTrailerUrl(urlParams.get("v"));
            } else {
              setTrailerUrl("");
            }
          })
          .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="subTitle">
        <h2>{title}</h2>
      </div>
      <div className="imageContainer">
        {movie &&
          movie.map((title) => (
            <img
              alt={title.name}
              onClick={() => launchTrailer(title)}
              src={
                isNetflixOriginal
                  ? `${IMAGE_URL}${title.poster_path}`
                  : `${IMAGE_URL}${title.backdrop_path}`
              }
              className={`imageRow ${isNetflixOriginal && "netflixOriginal"}`}
              key={title.id}
            />
          ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
