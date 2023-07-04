import React, { useEffect, useState } from "react";
import axios from "../../axios";
import "./banner.css";
import { API_KEY, imgUrl } from "../../constants/constants";
function Banner() {
  const [movie, setMovie] = useState();
  useEffect(() => {
    axios
      .get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        console.log(response.data);
        setMovie(response.data.results[0]);
      });
  }, []);
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${movie ? imgUrl + movie.backdrop_path : ""}`,
      }}
    >
      <div className="content">
        <h1 className="title">{movie?.title}</h1>
        <div className="banner_buttons">
          <button className="button">Play</button>
          <button className="button">My list</button>
        </div>
        <h1 className="description">{movie?.overview}</h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
}

export default Banner;
