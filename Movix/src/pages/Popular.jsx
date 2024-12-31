import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";
import { db } from "../FireBase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";

const Popular = ({ requests }) => {
  const { requestPopular } = requests;
  const { user } = useAuth();
  const [saved, setSaved] = useState(false);
  const movieID = doc(db, "users", `${user?.email}`);
  const [popularMovies, setPopularMovies] = useState([]);
  const [like, setLike] = useState(false);

  useEffect(() => {
    axios.get(requestPopular).then((response) => {
      setPopularMovies(response.data.results);
    });
  }, [requestPopular]);

  const savedMovies = async (id, title, img) => {
    if (user?.email) {
      //popularMovies.map(async (movie) => {
      setLike(!like);
      setSaved(true);
      await updateDoc(movieID, {
        savedMovies: arrayUnion({
          id: id,
          title: title,
          img: img,
        }),
      });
      //});
    } else {
      alert("You are not logged in. Please Login to save a movie!");
    }
  };

  return (
    <>
      <h2 className="text-white font-bold text">Popular Movies</h2>
      <div className="relative flex items-center flex-wrap">
        {popularMovies.map((movie, id) => (
          <div className="'w-[60px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'">
            <img
              className="w-full h-auto block"
              src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
              alt={movie.title}
            />
            <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white"></div>
            <p className="white-space-normal fond-bold flex justify-center items-center h-full text-center  text-amber-600">
              {movie?.title}
            </p>
            <p
              onClick={() =>
                savedMovies(movie.id, movie.title, movie.backdrop_path)
              }
            >
              {like ? (
                <FaHeart className="absolute top-4 left-4 text-gray-300" />
              ) : (
                <FaRegHeart className="absolute top-4 left-4 text-gray-300" />
              )}
            </p>
          </div>
        ))}
      </div>
      ))
    </>
  );
};

export default Popular;
