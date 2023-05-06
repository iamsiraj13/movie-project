import { Link } from "react-router-dom";

const Card = ({ movie }) => {
  return (
    <>
      <Link className=" card-compact w-full bg-base-100   shadow-xl relative">
        <figure className="">
          <img
            src={movie.poster}
            alt="movie"
            className="w-full h-[750px] object-cover"
          />
        </figure>

        <div className="card-body absolute left-[20%] bottom-10 bg-black bg-opacity-40 rounded-lg px-5">
          <h2 className="card-title text-[40px] font-smibold text-white">
            {movie.title}
          </h2>
          <p className="text-lg mt-4 text-white">
            Releas Date: {movie.release_date}
          </p>
          <p className="text-lg w-[80%] text-white mt-4">
            {movie.overview.slice(0, 150)}
          </p>
          <div className="card-actions justify-end"></div>
          <div></div>
        </div>
      </Link>
    </>
  );
};

export default Card;
