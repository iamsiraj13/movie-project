import { createBrowserRouter } from "react-router-dom";

import MasterLayout from "../pages/MasterLayout/MasterLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import MovieDetails from "../pages/MovieDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MasterLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/movie-details/",
        element: <MovieDetails />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
