import { useState } from "react";
import DashboardSidebar from "../../components/Dashboard/DashboardSidebar";
import moment from "moment/moment";
import axios from "axios";
import { BASE_URL } from "../../utils/config";
import { HashLoader } from "react-spinners";
const Dashboard = () => {
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);
  const [state, setState] = useState({
    title: "",
    release_date: "",
    poster: "",
    overview: "",
    likes: "",
    dislikes: "",
  });

  const handleInput = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    console.log(state);

    try {
      const result = await axios.post(`${BASE_URL}/create_movie/`, state);
      setLoader(false);
      setError(null);
      setState(null);
      console.log(result);
    } catch (error) {
      setLoader(false);
      console.log(error);
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
              Add New Movie
            </h2>
            <div className="max-w-xl">
              <form className="w-full" onSubmit={handleSubmit}>
                <div className="flex flex-col mb-2">
                  <label htmlFor="title">Title</label>
                  <input
                    type="text"
                    name="title"
                    onChange={handleInput}
                    placeholder="Movie title"
                    className="w-full p-3 bg-white"
                  />
                </div>
                <div className="flex flex-col mb-2">
                  <label htmlFor="title">Release Date</label>
                  <input
                    type="date"
                    // value={moment(state.release_date).format("YYYY-MM-DD")}
                    name="release_date"
                    onChange={handleInput}
                    className="w-full p-3 bg-white"
                  />
                </div>
                <div className="flex flex-col mb-2">
                  <label htmlFor="title">Overview</label>
                  <textarea
                    rows="10"
                    name="overview"
                    onChange={handleInput}
                    className="bg-white p-2"
                  >
                    Write Your Overview
                  </textarea>
                </div>
                <div className="flex flex-col mb-2">
                  <label htmlFor="title">Upload Poster</label>
                  <input
                    type="text"
                    name="poster"
                    onChange={handleInput}
                    placeholder="Movie title"
                    className="w-full p-3 bg-white"
                  />
                </div>
                <div className="flex gap-4 w-full">
                  <div className="flex flex-col mb-2 w-1/2">
                    <label htmlFor="title">Likes</label>
                    <input
                      type="number"
                      name="likes"
                      onChange={handleInput}
                      placeholder="Likes"
                      className="w-full p-3 bg-white"
                    />
                  </div>
                  <div className="flex flex-col mb-2 w-1/2">
                    <label htmlFor="title">Dislikes</label>
                    <input
                      type="number"
                      name="dislikes"
                      onChange={handleInput}
                      placeholder="Dislikes"
                      className="w-full p-3 bg-white"
                    />
                  </div>
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

export default Dashboard;
