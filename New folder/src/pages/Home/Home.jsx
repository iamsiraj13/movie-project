import { useEffect } from "react";
import { Link } from "react-router-dom";
import HeroSlider from "../../components/Slider/HeroSlider";
import { getMovies } from "../../APIRequiest/movieApiRequest";
import { useSelector } from "react-redux";

const Home = () => {
  const { movies, loader } = useSelector((state) => state.movies);

  useEffect(() => {
    getMovies();
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
            <p className="capitalize font-bold text-lg py-2 border-l-4 border-l-red-500 pl-4 w-full">
              Movie by Genra
            </p>
          </div>
        </div>
        <div className="md:px-[100px] mx-auto grid grid-cols-1 md:grid-col-3 lg:grid-cols-8 gap-6">
          {movies &&
            movies.slice(0, 16).map((data, index) => (
              <>
                <Link
                  to={`/movie-details/${data.id}`}
                  key={index}
                  className="w-full p-2 border rounded-lg shadow-md bg-white"
                >
                  <div className=" mb-3">
                    <img
                      src={data.poster}
                      alt=""
                      className="min-h-[150px] object-cover"
                    />
                  </div>
                  <h2 className="font-semibold">{data.title.slice(0, 10)}..</h2>
                </Link>
              </>
            ))}
        </div>
      </section>
      <section className="py-4 mt-8">
        <div className="">
          <div className="flex items-center justify-between  sm:px-[100px] mb-4">
            <p className="capitalize font-bold text-lg py-2 border-l-4 border-l-red-500 pl-4   w-full">
              Movie by Genra
            </p>
          </div>
        </div>
        <div className="md:px-[100px] mx-auto grid grid-cols-1 md:grid-col-3 lg:grid-cols-8 gap-6">
          {movies &&
            movies.slice(0, 16).map((data, index) => (
              <>
                <Link
                  to={`/movie-details/${data.id}`}
                  key={index}
                  className="w-full p-2 border rounded-lg shadow-md bg-white"
                >
                  <div className=" mb-3">
                    <img
                      src={data.poster}
                      alt=""
                      className="min-h-[150px] object-cover"
                    />
                  </div>
                  <h2 className="font-semibold">{data.title.slice(0, 10)}..</h2>
                </Link>
              </>
            ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
