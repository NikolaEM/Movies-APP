import * as types from "../constants/MovieActionTypes"


const initialState = {
    initialState: {
        movies: [],
        totalPages: 1,
        genres: [],
    }
}

const moviesReducer = (state = initialState, action) => {
    switch (action.type) {

        case types.CREATE_MOVIE:
            return {
                ...state,
                movie: action.payload
            };
        case types.CREATE_MOVIE_SUCCESS:
            return {
                ...state,
            }

        case types.CREATE_MOVIE_ERROR:
            return {
                ...state,
                error: action.payload
            }

        default:
            return state;
    };
}

export default moviesReducer;