import React, { useEffect, useState } from "react";
import "../Styles/module.banner.css";

import axios, { IMAGE_URL } from "../utils/axios";
import truncateText from "../utils/truncateText";

function Banner({ movieTitles }) {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(movieTitles);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    };
    //
    fetchData();
  }, [movieTitles]);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${IMAGE_URL}${movie.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="header-container">
        <h1 className="header-tittle">
          {movie?.name || movie?.original_name || movie?.title}
        </h1>

        <div className="header-buttons">
          {/* todo: Add funtionality to the buttons */}
          <button className="header-button">Play</button>
          <button className="header-button">Review</button>
        </div>

        <h2 className="header-overview">
          {truncateText(movie?.overview, 160)}
        </h2>
      </div>

      <div className="header-fade" />
    </header>
  );
}

export default Banner;
