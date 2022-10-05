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
  type: types.GET_GENRES,
});

export const setGenresSuccess = (data) => ({
  type: types.SET_GENRES_SUCCESS,
  payload: data,
});

export const getGenresError = (error) => ({
  type: types.GET_GENRES_ERROR,
  payload: error,
});

export const getMovies = () => ({
  type: types.GET_MOVIES,
});

export const setMoviesSuccess = (data) => ({
  type: types.SET_MOVIES_SUCCESS,
  payload: data,
});

export const getMoviesError = (error) => ({
  type: types.GET_MOVIES_ERROR,
  payload: error,
});

export const getMovie = (payload) => ({
  type: types.GET_MOVIE,
  payload,
});

export const setMovieSuccess = (data) => ({
  type: types.SET_MOVIE_SUCCESS,
  payload: data,
});

export const getMovieError = (error) => ({
  type: types.GET_MOVIE_ERROR,
  payload: error,
});
