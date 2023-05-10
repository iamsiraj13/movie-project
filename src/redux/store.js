import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./stateSlice/movieSlice";
const store = configureStore({
  reducer: {
    movies: movieSlice,
  },
});

export default store;
