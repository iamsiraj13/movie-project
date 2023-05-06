import { Link } from "react-router-dom";

const Navbar = () => {
  const menuItems = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/">Movies</Link>
      </li>
      <li>
        <Link href="/">Genre</Link>
      </li>
      <li>
        <Link href="/">Country</Link>
      </li>
      <li>
        <Link href="/">Gallery</Link>
      </li>
    </>
  );

  return (
    <>
      <div className="navbar bg-base-100 px-20 shadow-md py-4">
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

        <div className="navbar-start">
          <input
            type="text"
            placeholder="Search"
            className="w-[280px] py-1 px-3 border rounded-2xl focus:outline-none"
          />
        </div>

        <div className="navbar-start hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuItems}</ul>
        </div>

        <div className="navbar-end flex flex-row gap-4">
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
        </div>
      </div>
    </>
  );
};

export default Navbar;
