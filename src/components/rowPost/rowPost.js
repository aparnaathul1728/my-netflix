import React, { useEffect, useState } from "react";
import "./rowPost.css";
import axios from "../../axios";
import { API_KEY, imgUrl } from "../../constants/constants";
import YouTube from "react-youtube";

function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState("");
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  useEffect(() => {
    axios
      .get(props.url)
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch((err) => {
        alert("Network error");
      });
  }, []);
  const handleMovie = (id) => {
    axios
      .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((res) => {
        res.data.results.length != 0
          ? setUrlId(res.data.results[0])
          : console.log("array empty");
      });
  };
  return (
    <div>
      <h2>{props.title}</h2>
      <div className="posters">
        {movies?.map((obj) => {
          return (
            <img
              className={props.isSmall ? "smallPoster" : "poster"}
              src={`${imgUrl + obj.backdrop_path}`}
              alt="poster"
              onClick={() => handleMovie(obj.id)}
            />
          );
        })}
      </div>
      {urlId && <YouTube videoId={urlId.key} opts={opts} />}
    </div>
  );
}

export default RowPost;
