import { useState } from "react";
import DashboardSidebar from "../../components/Dashboard/DashboardSidebar";

import axios from "axios";
import { BASE_URL } from "../../utils/config";
import { HashLoader } from "react-spinners";
import { useEffect } from "react";
const CreatePerson = () => {
  const [loader, setLoader] = useState(false);
  const [success, setSuccess] = useState(false);
  const [state, setState] = useState({
    name: "",
    profile_pic: "",
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
      const result = await axios.post(`${BASE_URL}/create_person/`, state);
      setLoader(false);
      alert("Person Added");
      console.log(result);
      setSuccess(true);
      setState({
        name: "",
        profile_pic: "",
      });
    } catch (error) {
      setLoader(false);
      setSuccess(false);

      console.log(error);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      if (success === true) {
        alert("New Person Added");
      }
    }, 500);
  }, []);

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
              Add New Person
            </h2>
            <div className="max-w-xl">
              <form className="w-full" onSubmit={handleSubmit}>
                <div className="flex flex-col mb-2">
                  <label htmlFor="title">Person Name</label>
                  <input
                    type="text"
                    name="name"
                    onChange={handleInput}
                    placeholder="Person Name"
                    className="w-full p-3 bg-white"
                  />
                </div>
                <div className="flex flex-col mb-2">
                  <label htmlFor="title">Person Image</label>
                  <input
                    type="text"
                    name="profile_pic"
                    onChange={handleInput}
                    placeholder="Person Name"
                    className="w-full p-3 bg-white"
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

export default CreatePerson;
