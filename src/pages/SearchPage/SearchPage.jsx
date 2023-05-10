import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getSearch } from "../../APIRequiest/movieApiRequest";
import { useSelector } from "react-redux";

const SearchPage = () => {
  const { searchtext } = useParams();
  const movies = useSelector((state) => state.movies.searchs);

  useEffect(() => {
    getSearch(searchtext);
  }, [searchtext]);

  return (
    <div className="py-8">
      <div className="md:px-[100px] mx-auto grid grid-cols-2 px-2 sm:grid-cols-4 md:grid-col-4 lg:grid-cols-6 xl:grid-cols-8 gap-6">
        {movies &&
          movies.map((data) => (
            <>
              <Link
                to={`/movie-details/${data.id}`}
                key={data.id}
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
    </div>
  );
};

export default SearchPage;
