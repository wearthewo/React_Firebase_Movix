import React, { useEffect, useState } from "react";
import requests from "../Requests";
import axios from "axios";

const Api = () => {
  const [movies, setMovies] = useState([]);
  const randomMovie = Math.floor(Math.random() * movies.length);
  useEffect(() => {
    axios.get(requests.requestTopRated).then((res) => {
      setMovies(res.data.results);
    });
  }, []);
  console.log(movies[randomMovie]);

  return (
    <div className="w-full h-[500px] text-white">
      <div className="w-full h-full">
        <img
          className="w-full h-full object-cover bg-gradient-to-r from-black"
          src={`https://image.tmdb.org/t/p/original/${movies[randomMovie]?.backdrop_path}`}
          alt={movies[randomMovie]?.title}
        ></img>
      </div>
      <div className="flex items-center absolute w-full top-20">
        <h1 className="text-amber-600 text-3xl fond-bold">
          {movies[randomMovie]?.title}
        </h1>
        <br />
        <div className="mx-2">
          <button className=" border bg-green-600 text-black border-gray-300 py-2 px-5 cursor-pointer">
            Play{" "}
          </button>
        </div>
        <div>
          <button className="border bg-red-600 text-white border-gray-300 py-2 px-5 cursor-pointer">
            {" "}
            Watch Later
          </button>
        </div>
      </div>
      <p>Realesed Date: {movies[randomMovie]?.release_date}</p>
      <p>{movies[randomMovie]?.overview}</p>
    </div>
  );
};

export default Api;
