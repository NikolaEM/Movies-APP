import * as types from "../constants/MovieActionTypes";

const initialState = {
  movies: [],
  movie: null,
  totalPages: 1,
  genres: [],
  errors: false,
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE_MOVIE:
      return {
        ...state,
        movie: action.payload,
      };
    case types.LOAD_GENRES:
    case types.LOAD_MOVIES:
    case types.LOAD_MOVIE:
      return {
        ...state,
      };
    case types.CREATE_MOVIE_SUCCESS:
      return {
        ...state,
      };
    case types.LOAD_GENRES_SUCCESS:
      return {
        ...state,
        genres: action.payload,
      };
    case types.LOAD_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.payload,
      };
    case types.LOAD_MOVIE_SUCCESS:
      return {
        ...state,
        movie: action.payload,
      };
    case types.CREATE_MOVIE_ERROR:
    case types.LOAD_GENRES_ERROR:
    case types.LOAD_MOVIES_ERROR:
    case types.LOAD_MOVIE_ERROR:
      return {
        ...state,
        errors: action.payload,
      };

    default:
      return state;
  }
};

export default moviesReducer;
