import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  getCastByMovie,
  getCommentsByMovie,
  getMovieDetails,
  getMovies,
} from "../APIRequiest/movieApiRequest";
import { useSelector } from "react-redux";
import Ratings from "react-ratings-declarative";
import Loader from "../components/Loader/Loader";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [comment, setComment] = useState("");
  const { movies, cast, loader, comments } = useSelector(
    (state) => state.movies
  );

  const data = useSelector((state) => state.movies.movieDetails);

  useEffect(() => {
    getMovies();
    getMovieDetails(movieId);
    getCastByMovie(movieId);
    getCommentsByMovie(movieId);
  }, [movieId]);

  const handleComment = (e) => {
    e.preventDefault();
    console.log(comment);
  };

  return (
    <>
      <div className="bg-gradient-to-b from-[#0f1010] to-[#264653] w-full ">
        {loader === true ? (
          <Loader />
        ) : (
          <>
            <div className=" md:px-[200px] py-8   w-full mx-auto    grid grid-cols-5 gap-6">
              <div className="  shadow-xl w-full h-[500px]  col-span-2 pb-6">
                <img
                  src={data.poster}
                  className="w-full  h-full object-cover object-left-top rounded-md border"
                  alt="Movie"
                />
                <div className="pb-6 flex justify-center gap-4">
                  <button className="text-black bg-white border capitalize px-4 mt-2 rounded-md">
                    <span>{data.likes}</span> likes
                  </button>
                  <button className="text-black bg-white border capitalize px-4 mt-2 rounded-md">
                    <span>{data.dislikes}</span> dislikes
                  </button>
                </div>
              </div>
              <div className="  text-white col-span-3 pt-4">
                <h2 className="card-title text-[55px] font-semibold leading-[1.0]">
                  {data.title}
                </h2>
                <p className=" mt-6   text-[16px] leading-6 text-slate-300">
                  {data.overview}
                </p>
                <div className="mt-4 flex gap-2">
                  <p>
                    <strong className="capitalize">cast :</strong>
                  </p>
                  <ul className="flex gap-2  ">
                    {cast.map((char, index) => (
                      <>
                        <li
                          key={index}
                          className="border px-2 rounded-full capitalize text-sm"
                        >
                          {char.charachter_name}
                        </li>
                      </>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 flex items-center gap-4">
                  <p className="capitalize">ratings :</p>
                  <Ratings
                    rating={data.rating}
                    widgetDimensions="20px"
                    widgetSpacings="5px"
                  >
                    <Ratings.Widget widgetRatedColor="yellow" />
                    <Ratings.Widget widgetRatedColor="yellow" />
                    <Ratings.Widget widgetRatedColor="yellow" />
                    <Ratings.Widget widgetRatedColor="yellow" />
                    <Ratings.Widget widgetRatedColor="yellow" />
                  </Ratings>
                  <span>({data.rating})</span>
                </div>
              </div>
            </div>
          </>
        )}

        {/* comments list  */}
        <div className="px-[200px] py-8">
          <h2 className="capitalize text-white font-bold text-2xl mb-3">
            comments
          </h2>
          <ul>
            {comments &&
              comments.map((comm, index) => (
                <>
                  <li
                    className="text-black border py-2 bg-white px-4 rounded-lg mb-3"
                    key={index}
                  >
                    {comm.comment}
                  </li>
                </>
              ))}
          </ul>
        </div>
        {/* comment form */}
        <div className="px-[250px] py-8 ">
          <div>
            <h2 className="w-full capitalize text-white font-bold text-2xl  rounded-lg mb-4">
              Leave your comments
            </h2>
          </div>
          <form onSubmit={handleComment}>
            <textarea
              className="border  w-full border-black-500 p-4 rounded-lg shadow-lg mb-3 bg-[#ddd]"
              name=""
              id=""
              cols="20"
              rows="6"
              onChange={(e) => setComment(e.target.value)}
            >
              Write your comment
            </textarea>
            <button
              type="submit"
              className="bg-blue-500 text-white rounded-lg px-4 py-2"
            >
              Comment
            </button>
          </form>
        </div>

        <div className="px-[250px] pb-6">
          <div className="">
            <h2 className="capitalize text-[30px] font-bold text-white mb-3">
              Recommended for you
            </h2>

            <div className="grid grid-cols-1 md:grid-col-3 lg:grid-cols-6 gap-6">
              {movies.slice(0, 6).map((data, index) => (
                <>
                  <Link
                    to={`/movie-details/${data.id}`}
                    key={index}
                    className="w-full p-2 border bg-white  border-gray-light rounded-lg shadow-md"
                  >
                    <div className=" mb-3">
                      <img
                        src={data?.poster}
                        alt=""
                        className="min-h-[150px]  object-cover"
                      />
                    </div>
                    <h2 className="font-semibold text-black">
                      {data.title.slice(0, 10)}..
                    </h2>
                  </Link>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* comment form */}
    </>
  );
};

export default MovieDetails;