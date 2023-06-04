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
import Dashboard from "../pages/Dashboard/Dashboard";
import CreateCast from "../pages/Dashboard/CreateCast";
import CreatePerson from "../pages/Dashboard/CreatePerson";
import CreateGenre from "../pages/Dashboard/CreateGenre";
import AddMoviewithGenre from "../pages/Dashboard/AddMoviewithGenre";

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
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/add-movie",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/add-new-cast",
        element: <CreateCast />,
      },
      {
        path: "/dashboard/add-new-person",
        element: <CreatePerson />,
      },
      {
        path: "/dashboard/add-new-genre",
        element: <CreateGenre />,
      },
      {
        path: "/dashboard/add-movie-with-genre",
        element: <AddMoviewithGenre />,
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
