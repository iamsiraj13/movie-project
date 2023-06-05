import { useEffect, useState } from "react";
import DashboardSidebar from "../../components/Dashboard/DashboardSidebar";

import axios from "axios";
import { BASE_URL } from "../../utils/config";
import { HashLoader } from "react-spinners";
import { getMovies, getPerson } from "../../APIRequiest/movieApiRequest";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
const CreateCast = () => {
  const [loader, setLoader] = useState(false);
  const { persons } = useSelector((state) => state.movies);
  const movies = useSelector((state) => state.movies.movies);
  // console.log(movies);
  // console.log(persons);

  const [state, setState] = useState({
    movie_id: "",
    person_id: "",
    charachter_name: "",
  });

  useEffect(() => {
    getMovies();
    getPerson();
  }, []);

  const handleInput = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoader(true);

    try {
      const result = await axios.post(`${BASE_URL}/create_cast/`, state);
      setLoader(false);
      setState(null);
      alert("Cast Added");
    } catch (error) {
      setLoader(false);
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
              Add New Cast
            </h2>
            <div className="max-w-xl">
              <form className="w-full" onSubmit={handleSubmit}>
                <div className="flex flex-col mb-2">
                  <label htmlFor="title">Movie Id</label>
                  <select
                    name="movie_id"
                    className="px-3 py-2"
                    onChange={handleInput}
                  >
                    {movies.map((item, id) => (
                      <option key={id} value={item.id}>
                        {item.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col mb-2">
                  <label htmlFor="title">Person</label>
                  <select
                    name="person_id"
                    className="px-3 py-2"
                    onChange={handleInput}
                  >
                    {persons.map((item, id) => (
                      <option key={id} value={item.id}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col mb-2">
                  <label htmlFor="title">Character Name</label>
                  <input
                    type="text"
                    name="charachter_name"
                    onChange={handleInput}
                    placeholder="charachter name"
                    className="w-full p-3"
                  />
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

export default CreateCast;
