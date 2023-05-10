import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();
  const token = localStorage.getItem("token")
    ? localStorage.getItem("token")
    : null;

  const logOut = () => {
    localStorage.clear();
    navigate("/");
  };
  const menuItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/all-movies">Movies</Link>
      </li>
      <li>
        <Link to="/genre">Genre</Link>
      </li>
    </>
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchText}`);
  };

  return (
    <>
      <div className="navbar bg-base-100   shadow-md py-4">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            LOGO
          </Link>
        </div>

        <div className="navbar-start hidden sm:block">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search"
              required
              onChange={(e) => setSearchText(e.target.value)}
              className="w-[280px] py-1 px-3 border rounded-2xl focus:outline-none"
            />
          </form>
        </div>

        <div className="navbar-start hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuItems}</ul>
        </div>

        <div className="navbar-end flex flex-row gap-4 pr-2">
          {token ? (
            <>
              <button onClick={logOut}>
                <Link to="/" className="font-semibold">
                  Logout
                </Link>
              </button>
            </>
          ) : (
            <>
              <button>
                <Link to="/login" className="font-semibold">
                  Login
                </Link>
              </button>
              <button>
                <Link to="/register" className="font-semibold">
                  Sign Up
                </Link>
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
