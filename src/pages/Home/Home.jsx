import { useEffect } from "react";
import { Link } from "react-router-dom";
import HeroSlider from "../../components/Slider/HeroSlider";
import { getMovies } from "../../APIRequiest/movieApiRequest";
import { useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../../utils/config";
import { useState } from "react";

const Home = () => {
  const { movies } = useSelector((state) => state.movies);
  const [actionMovie, setActionMovie] = useState([]);
  const [dramaMovie, setDramaMovie] = useState([]);

  const getMovieByActionGenre = async (genId) => {
    try {
      const res = await axios.get(`${BASE_URL}/get_movie_by_genre/${genId}`);
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
      Promise.all(promises).then(() => setActionMovie(movieByGenre));
    } catch (error) {
      console.log(error);
    }
  };
  const getMovieByDramaGenre = async (genId) => {
    try {
      const res = await axios.get(`${BASE_URL}/get_movie_by_genre/${genId}`);
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
      Promise.all(promises).then(() => setDramaMovie(movieByGenre));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getMovies();

    getMovieByActionGenre(1);
    getMovieByDramaGenre(2);
  }, []);

  return (
    <div>
      {/* movies  */}
      <section className="w-full  ">
        <HeroSlider movies={movies} />
      </section>

      <section className="py-4 mt-8">
        <div className="">
          <div className="flex items-center justify-between md:px-[100px] mb-4 ">
            <p className="capitalize font-bold text-lg py-2 border-l-4 border-l-red-500 pl-4 w-full">
              Movie by Genra
            </p>
            <p className="border border-black px-3 rounded-md capitalize">
              Action
            </p>
          </div>
        </div>

        <div className="md:px-[100px] mx-auto grid grid-cols-2 px-2 sm:grid-cols-4 md:grid-col-4 lg:grid-cols-6 xl:grid-cols-8 gap-6">
          {movies &&
            actionMovie.slice(0, 16).map((data) => (
              <>
                <Link
                  to={`/movie-details/${data.id}`}
                  key={data.id}
                  className="w-full   p-2 border rounded-lg shadow-md bg-white"
                >
                  <div className=" mb-3  h-[250px]">
                    <img
                      src={data.poster}
                      alt=""
                      className="w-full h-full object-cover"
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
            <p className="border border-black px-3 rounded-md capitalize">
              Drama
            </p>
          </div>
        </div>
        <div className="md:px-[100px] mx-auto grid grid-cols-2 sm:grid-cols-4 md:grid-col-3 lg:grid-cols-6 xl:grid-cols-8 gap-6">
          {movies &&
            dramaMovie.slice(0, 16).map((data) => (
              <>
                <Link
                  to={`/movie-details/${data.id}`}
                  key={data.id}
                  className="w-full p-2 border rounded-lg shadow-md bg-white"
                >
                  <div className=" w-full h-[250px] mb-3">
                    <img
                      src={data.poster}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h2 className="font-semibold">{data.title}..</h2>
                </Link>
              </>
            ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
