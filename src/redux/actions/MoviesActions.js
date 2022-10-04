import * as types from "../constants/MovieActionTypes"

export const createMovie= (movie) => ({
    type: types.CREATE_MOVIE,
    payload: movie
});

export const createMovieSuccess = () => ({
    type: types.CREATE_MOVIE_SUCCESS,
});

export const createMovieError = (error) => ({
    type: types.CREATE_MOVIE_ERROR,
    payload: error
});

export const loadGenres = () => ({
    type: types.LOAD_GENRES,
});

export const loadGenresSuccess = (data) => ({
    type: types.LOAD_GENRES_SUCCESS,
    payload: data
});

export const loadGenresError = (error) => ({
    type: types.LOAD_GENRES_ERROR,
    payload: error
});