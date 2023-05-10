import { useEffect } from "react";
import { getGenre } from "../../APIRequiest/movieApiRequest";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Genre = () => {
  const genres = useSelector((state) => state.movies.genre);

  useEffect(() => {
    getGenre();
  }, []);

  return (
    <div className="py-9 px-4 sm:px-[100px]">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {genres.map((data) => (
          <>
            <div className="w-full h-full text-center rounded-xl">
              <Link
                to={`/genre/${data.id}`}
                className=" border-2 border-black w-full h-full text-center rounded-xl font-semibold   text-xl inline-block py-4"
              >
                {data.genre_name}
              </Link>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Genre;
