import * as types from "../constants/MovieActionTypes";

const initialState = {
  movies: {
    data: [],
    totalPages: 1,
  },
  movie: null,
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
    case types.GET_GENRES:
    case types.GET_MOVIES:
    case types.GET_MOVIE:
      return {
        ...state,
      };
    case types.CREATE_MOVIE_SUCCESS:
      return {
        ...state,
      };
    case types.SET_GENRES_SUCCESS:
      return {
        ...state,
        genres: action.payload,
      };
    case types.SET_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.payload,
      };
    case types.SET_MOVIE_SUCCESS:
      return {
        ...state,
        movie: action.payload,
      };
    case types.SET_TOTAL_PAGES:
      return {
        ...state,
        totalPages: action.payload,
      };
    case types.CREATE_MOVIE_ERROR:
    case types.GET_GENRES_ERROR:
    case types.GET_MOVIES_ERROR:
    case types.GET_MOVIE_ERROR:
      return {
        ...state,
        errors: action.payload,
      };

    default:
      return state;
  }
};

export default moviesReducer;
