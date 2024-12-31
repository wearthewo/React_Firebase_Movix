import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaRegHeart, FaHeart } from "react-icons/fa";

const Horror = ({ requests }) => {
  const { requestHorror } = requests;
  const [horrorMovies, setHorrorMovies] = useState([]);
  const [like, setLike] = useState(false);
  useEffect(() => {
    axios.get(requestHorror).then((response) => {
      setHorrorMovies(response.data.results);
    });
  });
  return (
    <>
      <h2 className="text-white font-bold text">Horror Movies</h2>
      <div className="relative flex items-center flex-wrap">
        {horrorMovies.map((movie, id) => (
          <div className="'w-[60px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'">
            <img
              className="w-full h-auto block"
              src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
              alt={movie.title}
            />
            <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white"></div>
            <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center text-amber-600 ">
              {movie?.title}
            </p>
            <p>
              {like ? (
                <FaHeart className="absolute top-4 left-4 text-gray-300" />
              ) : (
                <FaRegHeart />
              )}
            </p>
          </div>
        ))}
      </div>
      ))
    </>
  );
};

export default Horror;