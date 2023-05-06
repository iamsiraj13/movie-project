import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./stateSlice/movieSlice";
// import productReducer from "../feature/productSlice";
// import setttingReducer from "../feature/settingsSlice";
const store = configureStore({
  reducer: {
    movies: movieSlice,
  },
});

export default store;
