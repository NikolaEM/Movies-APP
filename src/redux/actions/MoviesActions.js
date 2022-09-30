import * as types from "../constants/MovieActionTypes"

export const createMovie= (user) => ({
    type: types.CREATE_MOVIE,
    payload: user
});

export const createMovieSuccess = () => ({
    type: types.CREATE_MOVIE_SUCCESS,
});

export const createMovieError = (error) => ({
    type: types.CREATE_MOVIE_ERROR,
    payload: error
});