// get task by status

import axios from "axios";

import { BASE_URL } from "../utils/config";
import store from "../redux/store";
import {
  getCastByMoviePending,
  getCastByMovieReject,
  getCastByMovieSuccess,
  getCommentsByMoviePending,
  getCommentsByMovieReject,
  getCommentsByMovieSuccess,
  getMovieDetailsPending,
  getMovieDetailsReject,
  getMovieDetailsSuccess,
  getMoviePending,
  getMovieReject,
  getMovieSuccess,
} from "../redux/stateSlice/movieSlice";

/*=========================================== 
*  get all movies
 ============================================*/
export const getMovies = () => {
  store.dispatch(getMoviePending());
  let url = `${BASE_URL}/get_movie/`;

  return axios
    .get(url)
    .then((res) => {
      store.dispatch(getMovieSuccess(res.data.data));
    })
    .catch((error) => {
      store.dispatch(getMovieReject(error.message));
      console.log(error);
      return false;
    });
};

/*=========================================== 
*  get movie details
 ============================================*/

export const getMovieDetails = (id) => {
  store.dispatch(getMovieDetailsPending());
  let url = `${BASE_URL}/get_movie_by_id/${id}`;

  return axios
    .get(url)
    .then((res) => {
      store.dispatch(getMovieDetailsSuccess(res.data[0]));
    })
    .catch((error) => {
      store.dispatch(getMovieDetailsReject(error.message));
      return false;
    });
};

/*=========================================== 
*  get cast by movie
 ============================================*/

export const getCastByMovie = (id) => {
  store.dispatch(getCastByMoviePending());
  let url = `${BASE_URL}/get_cast_by_movie/${id}/`;

  return axios
    .get(url)
    .then((res) => {
      console.log(res.data);
      store.dispatch(getCastByMovieSuccess(res.data));
    })
    .catch((error) => {
      store.dispatch(getCastByMovieReject(error.message));
      console.log(error);
      return false;
    });
};
/*=========================================== 
*  get comments by movie
 ============================================*/

export const getCommentsByMovie = (id) => {
  store.dispatch(getCommentsByMoviePending());
  let url = `${BASE_URL}/get_comment_by_movie/${id}/`;

  return axios
    .get(url)
    .then((res) => {
      store.dispatch(getCommentsByMovieSuccess(res.data));
    })
    .catch((error) => {
      store.dispatch(getCommentsByMovieReject(error.message));
      console.log(error);
      return false;
    });
};
