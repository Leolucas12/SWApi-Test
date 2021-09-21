const INITAL_STATE = {
    characters: []
};

export function charactersReducer(state = INITAL_STATE, { type, payload }) {
    if (type === "SET_CHARACTERS") {
        return {
            ...state,
            characters: payload
        };
    }
    return state;
}