import { useState } from "react";
import DashboardSidebar from "../../components/Dashboard/DashboardSidebar";

import axios from "axios";
import { BASE_URL } from "../../utils/config";
import { HashLoader } from "react-spinners";
import { useEffect } from "react";
import { getGenre, getMovies } from "../../APIRequiest/movieApiRequest";
import { useSelector } from "react-redux";
const AddMoviewithGenre = () => {
  const [loader, setLoader] = useState(false);
  const [success, setSuccess] = useState(false);

  const { movies, genre } = useSelector((state) => state.movies);

  const [state, setState] = useState({
    movie: "",
    genre: "",
  });

  const handleInput = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    getGenre();
    getMovies();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);

    try {
      const result = await axios.post(
        `${BASE_URL}/addmovie_with_genre/`,
        state
      );
      setLoader(false);
      alert("Successfull");
      setSuccess(true);
    } catch (error) {
      setLoader(false);
      setSuccess(false);
    }
  };

  return (
    <div>
      <div className="flex">
        {/* dashboard sidebar  */}
        <div className="w-[260px] min-h-screen   p-4 border-r-2">
          <DashboardSidebar />
        </div>

        {/* dashboard content  */}
        <div className="w-full min-h-screen  p-4">
          <div>
            <h2 className="bg-white py-4 px-4 text-3xl font-semibold mb-3">
              Add Movie with Genre
            </h2>
            <div className="max-w-xl">
              <form className="w-full" onSubmit={handleSubmit}>
                <div className="flex flex-col mb-2">
                  <label htmlFor="title">Select Movie</label>
                  <select name="movie" onChange={handleInput} className="p-4">
                    {movies.map((item, id) => (
                      <option key={id} value={item.id}>
                        {item.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col mb-2">
                  <label htmlFor="title">Select Genre</label>
                  <select name="genre" onChange={handleInput} className="p-4">
                    {genre.map((item, id) => (
                      <option key={id} value={item.id}>
                        {item.genre_name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="w-full flex justify-end">
                  {loader === true ? (
                    <button
                      type="submit"
                      className="capitalize bg-indigo-500 text-white px-8 py-2 mt-3 rounded"
                    >
                      <HashLoader color="#36d7b7" size="20px" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="capitalize bg-indigo-500 text-white px-8 py-2 mt-3 rounded"
                    >
                      create Movie
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMoviewithGenre;
