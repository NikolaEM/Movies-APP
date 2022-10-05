import * as types from "../constants/MovieActionTypes";

export const createMovie = (movie) => ({
  type: types.CREATE_MOVIE,
  payload: movie,
});

export const createMovieSuccess = () => ({
  type: types.CREATE_MOVIE_SUCCESS,
});

export const createMovieError = (error) => ({
  type: types.CREATE_MOVIE_ERROR,
  payload: error,
});

export const getGenres = () => ({
  type: types.LOAD_GENRES,
});

export const setGenresSuccess = (data) => ({
  type: types.LOAD_GENRES_SUCCESS,
  payload: data,
});

export const getGenresError = (error) => ({
  type: types.LOAD_GENRES_ERROR,
  payload: error,
});

export const getMovies = () => ({
  type: types.LOAD_MOVIES,
});

export const setMoviesSuccess = (data) => ({
  type: types.LOAD_MOVIES_SUCCESS,
  payload: data,
});

export const getMoviesError = (error) => ({
  type: types.LOAD_MOVIES_ERROR,
  payload: error,
});

export const getMovie = (payload) => ({
  type: types.LOAD_MOVIE,
  payload,
});

export const setMovieSuccess = (data) => ({
  type: types.LOAD_MOVIE_SUCCESS,
  payload: data,
});

export const getMovieError = (error) => ({
  type: types.LOAD_MOVIE_ERROR,
  payload: error,
});
