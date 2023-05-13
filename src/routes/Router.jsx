import { createBrowserRouter } from "react-router-dom";

import MasterLayout from "../pages/MasterLayout/MasterLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import MovieDetails from "../pages/MovieDetails";
import TermsAndCondition from "../pages/TermAndConfition/TermsAndCondition";
import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy";
import PolicyPage from "../pages/Policy/PolicyPage";
import AllMovies from "../pages/AllMovies/AllMovies";
import SearchPage from "../pages/SearchPage/SearchPage";
import Genre from "../pages/Genre/Genre";
import MovieByGenre from "../pages/MovieByGenre/MovieByGenre";
import AllPerson from "../pages/AllPerson/AllPerson";

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
        path: "/movie-details/:movieId",
        element: <MovieDetails />,
      },
      {
        path: "/all-movies",
        element: <AllMovies />,
      },
      {
        path: "/genre",
        element: <Genre />,
      },
      {
        path: "/genre/:genreId",
        element: <MovieByGenre />,
      },
      {
        path: "/search/:searchtext",
        element: <SearchPage />,
      },
      {
        path: "/terms-and-condition",
        element: <TermsAndCondition />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/cookie-policy",
        element: <PolicyPage />,
      },
      {
        path: "/person",
        element: <AllPerson />,
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
