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
      <div className=" md:px-[200px] py-8 shadow-xl w-full mx-auto bg-blend-darken bg-slate-700 grid grid-cols-5 gap-6">
        <div className="  shadow-xl min-h-[400px] col-span-2 pb-6">
          <img
            src="https://cdn.wallpapersafari.com/53/79/ajwtby.jpg"
            className="w-full h-full object-fit rounded-md"
            alt="Movie"
          />
          <div className="pb-6 flex justify-center gap-4">
            <button className="text-white border capitalize px-4 mt-2 rounded-md">
              like
            </button>
            <button className="text-white border capitalize px-4 mt-2 rounded-md">
              dislike
            </button>
          </div>
        </div>
        <div className="  text-white col-span-3 pt-4">
          <h2 className="card-title text-[55px] font-semibold leading-[1.0]">
            Name of the movie
          </h2>
          <p className=" mt-6   text-[16px] leading-6 text-slate-300">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore,
            alias! Corporis libero obcaecati optio iste eius similique pariatur
            aperiam voluptatem sint illo, qui impedit neque repellat quas
            consequuntur nam ipsa laboriosam tenetur. Architecto ipsum ullam
            esse quod, beatae minus autem suscipit quis numquam quam tempore
            impedit, vero debitis! Beatae, aliquam! esse quod, beatae minus
            autem suscipit quis numquam quam tempore impedit, vero debitis!
            Beatae, aliquam!
          </p>
          <div className="mt-4">
            <p>
              <strong className="capitalize">cast :</strong>
              <span> Sirajul </span>,<span> Jhon Doe </span>,
              <span> Jenifa creez </span>,
            </p>
          </div>
        </div>
      </div>
      {/* comment form */}
      <div className="px-[250px] py-8">
        <div>
          <h2 className="w-full capitalize font-bold border-l-2 border-l-red-700 p-4 border shadow-md rounded-lg mb-4">
            comments
          </h2>
        </div>
        <form>
          <textarea
            className="border  w-full border-black-500 p-4 rounded-lg shadow-lg mb-3"
            name=""
            id=""
            cols="30"
            rows="10"
          >
            Write your comment
          </textarea>
          <button className="bg-blue-500 text-white rounded-lg px-4 py-2">
            Comment
          </button>
        </form>
      </div>

      <div className="px-[250px]">
        <div className="">
          <h2 className="capitalize text-[30px] font-bold">
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
