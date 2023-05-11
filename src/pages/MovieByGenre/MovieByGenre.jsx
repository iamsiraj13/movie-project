import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { BASE_URL } from "../../utils/config";
import { useEffect, useState } from "react";

const MovieByGenre = () => {
  const { genreId } = useParams();
  const [movies, setMovies] = useState([]);

  const getMovieByGenreId = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/get_movie_by_genre/${genreId}`);
      const ids = res.data.map((obj) => {
        return obj.movie;
      });

      let movieByGenre = [];
      let promises = [];
      for (let i = 0; i < ids.length; i++) {
        promises.push(
          axios
            .get(BASE_URL + "/get_movie_by_id/" + ids[i])
            .then((response) => {
              // do something with response
              movieByGenre.push(...response.data);
            })
        );
      }
      Promise.all(promises).then(() => setMovies(movieByGenre));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovieByGenreId();
  }, [genreId]);

  return (
    <div className="p-4 sm:px-[100px] min-h-screen h-full">
      <div className="md:px-[100px] mx-auto grid grid-cols-2 px-2 sm:grid-cols-4 md:grid-col-4 lg:grid-cols-6  gap-6">
        {movies.map((data) => (
          <>
            <Link
              to={`/movie-details/${data.id}`}
              key={data.id}
              className="w-full p-2 border rounded-lg shadow-md bg-white"
            >
              <div className="w-full h-[300px] mb-3">
                <img
                  src={data.poster}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="font-semibold">{data.title.slice(0, 35)}..</h2>
            </Link>
          </>
        ))}
      </div>

      {movies.length <= 0 && <p>No movies found</p>}
    </div>
  );
};

export default MovieByGenre;
