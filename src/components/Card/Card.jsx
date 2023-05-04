import { Link } from "react-router-dom";

const Card = ({ movie }) => {
  return (
    <>
      <Link className=" card-compact w-full bg-base-100   shadow-xl relative">
        <figure className="">
          <img
            src="https://cdn.wallpapersafari.com/53/79/ajwtby.jpg"
            alt="movie"
            className="w-full h-[750px] object-cover"
          />
        </figure>

        <div className="card-body absolute left-[20%] bottom-10 bg-black bg-opacity-40 rounded-lg px-5">
          <h2 className="card-title text-[40px] font-smibold text-white">
            Watch A Million Little Things
          </h2>
          <p className="text-lg mt-4 text-white">Releas Date: 23-06-23</p>
          <p className="text-lg w-[80%] text-white mt-4">
            A Million Little Things is a heart-wrenching drama series that
            premiered on ABC in 2018 and ran for five seasons,
          </p>
          <div className="card-actions justify-end"></div>
          <div></div>
        </div>
      </Link>
    </>
  );
};

export default Card;
