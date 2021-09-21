const INITAL_STATE = {
  movies: []
};

export function moviesReducer(state = INITAL_STATE, { type, payload }) {
  if (type === "SET_MOVIES") {
    return {
      ...state,
      movies: payload
    };
  }
  return state;
}

export function selectedMovieReducer(state = {}, { type, payload }) {
  if (type === "TOGGLE_MOVIE") {
    return {
      ...state,
      activeMovie: payload
    };
  }
  return state;
}