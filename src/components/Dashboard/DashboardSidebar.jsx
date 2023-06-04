import { Link } from "react-router-dom";

const DashboardSidebar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link
            to="/dashboard/add-movie"
            className="py-2 border-l-2 px-4 mb-2  border-slate-500 w-full block "
          >
            Create Movie
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/add-new-person"
            className="py-2 border-l-2 px-4 mb-2  border-slate-500 w-full block "
          >
            Create Person
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/add-new-cast"
            className="py-2 border-l-2 px-4 mb-2  border-slate-500 w-full block "
          >
            Create Cast
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/add-new-genre"
            className="py-2 border-l-2 px-4 mb-2  border-slate-500 w-full block "
          >
            Create Genre
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/add-movie-with-genre"
            className="py-2 border-l-2 px-4 mb-2  border-slate-500 w-full block "
          >
            Add movie with genre
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default DashboardSidebar;
