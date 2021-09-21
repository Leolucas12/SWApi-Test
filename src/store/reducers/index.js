import { combineReducers } from "redux";

import { moviesReducer, selectedMovieReducer } from "./movies";

export default combineReducers({
  allMovies: moviesReducer,
  movie: selectedMovieReducer
});