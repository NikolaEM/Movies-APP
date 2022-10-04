import * as types from "../constants/MovieActionTypes"

const initialState = {
        movies: [],
        movie: null ,
        totalPages: 1,
        genres: [],
        errors: false,
}

const moviesReducer = (state = initialState, action) => {
    switch (action.type) {

        case types.CREATE_MOVIE:
            return {
                ...state,
                movie: action.payload
            };
        case types.LOAD_GENRES:
            return {
                ...state,
            };
        case types.CREATE_MOVIE_SUCCESS:
            return {
                ...state,
            }
            case types.LOAD_GENRES_SUCCESS:
                return{
                    ...state,
                    genres: action.payload
                };
        case types.CREATE_MOVIE_ERROR:
        case types.LOAD_GENRES_ERROR:
            return {
                ...state,
                errors: action.payload
            }

        default:
            return state;
    };
}

export default moviesReducer;