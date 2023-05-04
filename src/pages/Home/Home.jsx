import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeroSlider from "../../components/Slider/HeroSlider";

const Home = () => {
  const [movies, setMovies] = useState([]);

  const getMovie = async () => {
    // const data = await axios.get("http://192.168.50.246/mv/get_movie/");
    // setMovies(data.data.data);
  };

  console.log(movies);
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      {/* movies  */}
      <section>
        <HeroSlider movies={movies} />
      </section>

      <section className="py-4 mt-8">
        <div className="">
          <div className="flex items-center justify-between px-[100px] mb-4">
            <p className="capitalize font-bold text-lg py-2 border-l-2 border-l-red-500 pl-4 shadow-md w-full">
              Movie by Genra
            </p>
          </div>
        </div>
        <div className="md:px-[100px] mx-auto grid grid-cols-1 md:grid-col-3 lg:grid-cols-8 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
            (data, index) => (
              <>
                <Link
                  to={`/movie-details`}
                  key={index}
                  className="w-full p-2 border rounded-lg shadow-md bg-white"
                >
                  <div className=" mb-3">
                    <img
                      src="https://dx35vtwkllhj9.cloudfront.net/paramountpictures/smile/images/regions/us/onesheet.jpg"
                      alt=""
                    />
                  </div>
                  <h2 className="font-semibold">Yenthama</h2>
                </Link>
              </>
            )
          )}
        </div>
      </section>
      <section className="py-4 mt-8">
        <div className="">
          <div className="flex items-center justify-between  sm:px-[100px] mb-4">
            <p className="capitalize font-bold text-lg py-2 border-l-2 border-l-red-500 pl-4 shadow-md w-full">
              Movie by Genra
            </p>
          </div>
        </div>
        <div className="sm:px-[100px] mx-auto grid grid-cols-1 md:grid-col-3 lg:grid-cols-6 gap-6">
          {[1, 2, 3, 4, 5, 6].map((data, index) => (
            <>
              <Link
                to={`/movie-details`}
                key={index}
                className="w-full p-2 border rounded-lg shadow-md bg-white"
              >
                <div className=" mb-3">
                  <img
                    src="https://dx35vtwkllhj9.cloudfront.net/paramountpictures/smile/images/regions/us/onesheet.jpg"
                    alt=""
                  />
                </div>
                <h2 className="font-semibold">Yenthama</h2>
              </Link>
            </>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
