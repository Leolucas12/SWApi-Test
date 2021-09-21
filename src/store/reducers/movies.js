const INITAL_STATE = {
    activeCharacter: {},
    activeMovie: {},
    characters: []
  };
  
  export default function movie(state = INITAL_STATE, action) {
    if (action.type == "TOGGLE_CHARACTER") {
      return {
        ...state,
        activeCharacter: action.character,
        activeMovie: action.movie
      };
    }
    return state;
  }