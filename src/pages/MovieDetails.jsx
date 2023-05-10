import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  getCastByMovie,
  getCommentsByMovie,
  getMovieDetails,
  getMovies,
  getPerson,
} from "../APIRequiest/movieApiRequest";
import { useSelector } from "react-redux";
import Loader from "../components/Loader/Loader";
import axios from "axios";
import { BASE_URL } from "../utils/config";

const MovieDetails = () => {
  const token = localStorage.getItem("token")
    ? localStorage.getItem("token")
    : null;
  const { movieId } = useParams();
  const [comment, setComment] = useState("");

  const [castPerson, setCastPerson] = useState([]);

  const { movies, persons, cast, loader, comments } = useSelector(
    (state) => state.movies
  );

  const data = useSelector((state) => state.movies.movieDetails);

  useEffect(() => {
    getMovies();
    getMovieDetails(movieId);
    getCastByMovie(movieId);
    getCommentsByMovie(movieId);
    getPerson();
  }, [movieId]);

  // post comment
  const handleComment = async (e) => {
    e.preventDefault();
    const commentData = {
      movie_id: movieId,
      user_id: 3,
      comment: comment,
    };
    const result = await axios.post(
      `${BASE_URL}/post_comment_by_movie/`,
      commentData
    );
    window.location.reload();
  };

  const updateLike = async () => {
    const movieData = {
      id: movieId,
      likes: data.likes + 1,
    };
    await axios.post(`${BASE_URL}/update_movie/`, movieData);
    window.location.reload();
  };
  const updateDisLike = async () => {
    const movieData = {
      id: movieId,
      dislikes: data.dislikes + 1,
    };
    await axios.post(`${BASE_URL}/update_movie/`, movieData);
    window.location.reload();
  };

  useEffect(() => {
    const ids = cast.map((obj) => {
      return obj.person_id;
    });
    // Filter persons based on ids
    const filteredPersons = persons.filter((person) => ids.includes(person.id));

    // Create new array using filtered persons data
    const newPersons = filteredPersons.map((person) => ({
      name: person.name,
      img: person.profile_pic,
    }));

    setCastPerson(newPersons);
  }, [cast]);

  return (
    <>
      <div className="bg-gradient-to-b from-[#0f1010] to-[#264653] w-full ">
        {loader === true ? (
          <Loader />
        ) : (
          <>
            <div className="lg:px-[100px] xl:px-[200px] py-8   w-full mx-auto  px-4  md:grid grid-cols-5 gap-6">
              <div className="  shadow-xl w-full h-[500px]  col-span-2 pb-6">
                <img
                  src={data.poster}
                  className="w-full  h-full object-cover object-left-top rounded-md border"
                  alt="Movie"
                />
                <div className="pb-6 flex justify-center gap-4">
                  <button
                    className="text-black bg-white border capitalize px-4 mt-2 rounded-md"
                    onClick={updateLike}
                  >
                    <span>{data.likes}</span> likes
                  </button>
                  <button
                    className="text-black bg-white border capitalize px-4 mt-2 rounded-md"
                    onClick={updateDisLike}
                  >
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
                <div className="mt-4 flex items-center gap-2">
                  <p>
                    <strong className="capitalize">cast :</strong>
                  </p>

                  <ul className="flex flex-wrap gap-2">
                    {castPerson.map((data) => (
                      <>
                        <li className="flex items-center gap-2 border rounded-full px-1 py-1">
                          <div className="w-[30px] h-[30px] rounded-full">
                            <img
                              src={data?.img}
                              alt=""
                              className="w-full h-full object-cover rounded-full border"
                            />
                          </div>
                          <p className="text-sm">{data.name}</p>
                        </li>
                      </>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </>
        )}

        {/* comments list  */}
        <div className="px-4 lg:px-[100px] xl:px-[200px] py-8">
          <h2 className="capitalize text-white font-bold text-2xl mb-3">
            comments
          </h2>
          <ul>
            {comments &&
              comments.map((comm, index) => (
                <>
                  <li
                    className="text-black border py-1 bg-slate-300 px-4  rounded-lg mb-3"
                    key={index}
                  >
                    {comm.comment && comm.comment}
                  </li>
                </>
              ))}
          </ul>
        </div>
        {/* comment form */}
        <div className="px-4 lg:px-[100px] xl:px-[250px] py-8 ">
          <div>
            <h2 className="w-full capitalize text-white font-bold text-2xl  rounded-lg mb-4">
              Leave your comments
            </h2>
          </div>
          {token !== null ? (
            <>
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
            </>
          ) : (
            <>
              <div className="flex gap-2">
                <p className="text-red-500">Please login to post you comment</p>
                <Link
                  to="/login"
                  className="  border bg-blue-500 text-white border-blue-500 px-4 text-sm rounded-full inline-block"
                >
                  Login
                </Link>
              </div>
            </>
          )}
        </div>

        <div className=" px-4 lg:px-[100px] xl:px-[250px] pb-6">
          <div className="">
            <h2 className="capitalize text-[30px] font-bold text-white mb-3">
              Recommended for you
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-col-3 lg:grid-cols-5 gap-6">
              {movies
                .slice(0, 5)
                .sort((c1, c2) => c2.likes - c1.likes)
                .map((data, index) => (
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
