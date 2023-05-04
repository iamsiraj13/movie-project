import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const MovieDetails = ({ movie }) => {
  const { movieId } = useParams();

  const [movies, setMovies] = useState([]);
  // const [movieDetails, setMovieDetails] = useState();
  const getMovie = async () => {
    // const data = await axios.get("http://192.168.50.246/mv/get_movie/");
    // console.log(data.data.data);
    // setMovies(data.data.data);
  };
  const getMovieDetails = async () => {
    // const detail = await axios.get(
    //   `http://192.168.50.246/mv/get_movie_by_id/1`
    // );
    // console.log(detail);
    // setMovieDetails(data.data.data);
  };

  console.log(movies);
  useEffect(() => {
    getMovieDetails();
    getMovie();
  }, []);
  return (
    <>
      <div className="card card-side bg-base-100 shadow-xl w-4/5 mx-auto m-8 p-8 ">
        <figure>
          <img src={movies.poster} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-[25px] font-semibold">T</h2>
          <p className=" mt-4 w-[3/4]">{movies.overview}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Back</button>
          </div>
        </div>
      </div>
      {/* comment form */}
      <div className="px-[250px] ">
        <form>
          <textarea
            className="border  w-full border-black-500 p-4"
            name=""
            id=""
            cols="30"
            rows="10"
          >
            write your comment
          </textarea>
          <button className="bg-blue-500 text-white rounded-lg px-4 py-2">
            Comment
          </button>
        </form>
      </div>

      <div className="px-[250px]">
        <div className="">
          <h2 className="capitalize text-[50px] font-bold">
            Recommended for you
          </h2>

          <div className="  mx-auto grid grid-cols-1 md:grid-col-3 lg:grid-cols-4 gap-6">
            {movies.map((data, index) => (
              <>
                <Link
                  to={`/movie-details/${data.id}`}
                  key={index}
                  className="w-full p-4 border rounded-lg shadow-md"
                >
                  <div className=" mb-3">
                    <img src={data?.poster} alt="" />
                  </div>
                  <h2 className="font-semibold">{data.title}</h2>
                </Link>
              </>
            ))}
          </div>
        </div>
      </div>

      {/* comment form */}
    </>
  );
};

export default MovieDetails;
