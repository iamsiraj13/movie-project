import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  movieDetails: "",
  cast: [],
  comments: [],
  persons: [],
  searchs: [],
  genre: [],
  loader: false,
  error: "",
};

export const movieSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    //=================== get all movies ==================
    getMoviePending: (state) => {
      state.loader = true;
    },
    getMovieSuccess: (state, action) => {
      state.loader = false;
      state.movies = action.payload;
    },
    getMovieReject: (state, action) => {
      state.loader = false;
      state.error = action.payload;
    },

    //=============== get movie detais ==================
    getMovieDetailsPending: (state) => {
      state.loader = true;
    },
    getMovieDetailsSuccess: (state, action) => {
      state.loader = false;
      state.movieDetails = action.payload;
    },
    getMovieDetailsReject: (state, action) => {
      state.loader = false;
      state.error = action.payload;
    },
    //================ get cast by movies ================
    getCastByMoviePending: (state) => {
      state.loader = true;
    },
    getCastByMovieSuccess: (state, action) => {
      state.loader = false;
      state.cast = action.payload;
    },
    getCastByMovieReject: (state, action) => {
      state.loader = false;
      state.error = action.payload;
    },
    //=========== get cast by movies ===============
    getCommentsByMoviePending: (state) => {
      state.loader = true;
    },
    getCommentsByMovieSuccess: (state, action) => {
      state.loader = false;
      state.comments = action.payload;
    },
    getCommentsByMovieReject: (state, action) => {
      state.loader = false;
      state.error = action.payload;
    },
    //=========== get cast by movies ===============
    getPersonsPending: (state) => {
      state.loader = true;
    },
    getPersonsSuccess: (state, action) => {
      state.loader = false;
      state.persons = action.payload;
    },
    getPersonsReject: (state, action) => {
      state.loader = false;
      state.error = action.payload;
    },
    //=========== get cast by movies ===============
    getSearchPending: (state) => {
      state.loader = true;
    },
    getSearchSuccess: (state, action) => {
      state.loader = false;
      state.searchs = action.payload;
    },
    getSearchReject: (state, action) => {
      state.loader = false;
      state.error = action.payload;
    },
    //=========== get genre ===============
    getGenrePending: (state) => {
      state.loader = true;
    },
    getGenreSuccess: (state, action) => {
      state.loader = false;
      state.genre = action.payload;
    },
    getGenreReject: (state, action) => {
      state.loader = false;
      state.error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  getMoviePending,
  getMovieSuccess,
  getMovieReject,
  getMovieDetailsPending,
  getMovieDetailsSuccess,
  getMovieDetailsReject,
  getCastByMoviePending,
  getCastByMovieSuccess,
  getCastByMovieReject,
  getCommentsByMoviePending,
  getCommentsByMovieSuccess,
  getCommentsByMovieReject,
  getPersonsPending,
  getPersonsSuccess,
  getPersonsReject,
  getSearchPending,
  getSearchSuccess,
  getSearchReject,
  getGenrePending,
  getGenreSuccess,
  getGenreReject,
} = movieSlice.actions;

export default movieSlice.reducer;
