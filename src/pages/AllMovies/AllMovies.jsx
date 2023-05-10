import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getMovies } from "../../APIRequiest/movieApiRequest";

const AllMovies = () => {
  const { movies, loader } = useSelector((state) => state.movies);
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      {loader && <h2>Loading....</h2>}
      {!loader && (
        <div className="py-8">
          <div className="md:px-[100px] mx-auto grid grid-cols-2 px-2 sm:grid-cols-4 md:grid-col-4 lg:grid-cols-6 gap-6">
            {movies &&
              movies.map((data, index) => (
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
                    <h2 className="font-semibold">
                      {data.title.slice(0, 10)}..
                    </h2>
                  </Link>
                </>
              ))}
          </div>
        </div>
      )}
    </>
  );
};

export default AllMovies;
