import { combineReducers } from "redux";
import { charactersReducer } from "./characters";
import { moviesReducer, selectedMovieReducer } from "./movies";

export default combineReducers({
  allMovies: moviesReducer,
  movie: selectedMovieReducer,
  allCharacters: charactersReducer
});