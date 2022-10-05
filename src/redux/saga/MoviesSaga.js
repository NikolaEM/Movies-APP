import * as types from "../constants/MovieActionTypes";
import { put, call, takeEvery, all, fork } from "redux-saga/effects";
import { push } from "connected-react-router";
import { ROUTE } from "../../views/routes";
import movieService from "../../services/Movies/MovieService";
import {
  createMovieSuccess,
  createMovieError,
  setGenresSuccess,
  getGenresError,
  getMoviesError,
  setMoviesSuccess,
  setMovieSuccess,
  getMovieError,
} from "../actions/MoviesActions";

export function* onCreateMovie(action) {
  try {
    const response = yield call(movieService.createMovie, action.payload);
    yield put(createMovieSuccess(response.data));
    yield put(push(ROUTE.DEFAULT));
  } catch (error) {
    yield put(createMovieError(error.response.data));
  }
}

export function* getGenres() {
  try {
    const response = yield call(movieService.getGenres);
    yield put(setGenresSuccess(response));
  } catch (error) {
    yield put(getGenresError(error.response.data));
  }
}

export function* getMovies() {
  try {
    const response = yield call(movieService.getMovies);
    yield put(setMoviesSuccess(response));
  } catch (error) {
    yield put(getMoviesError(error.response.data));
  }
}
export function* getMovie({ payload }) {
  try {
    const response = yield call(movieService.getMovie, payload);
    yield put(setMovieSuccess(response));
  } catch (error) {
    yield put(getMovieError(error.response.data));
  }
}

export function* watchOnCreateMovie() {
  yield takeEvery(types.CREATE_MOVIE, onCreateMovie);
}

export function* watchGetGenres() {
  yield takeEvery(types.LOAD_GENRES, getGenres);
}

export function* watchGetMovies() {
  yield takeEvery(types.LOAD_MOVIES, getMovies);
}

export function* watchGetMovie() {
  yield takeEvery(types.LOAD_MOVIE, getMovie);
}

export default function* moviesSaga() {
  yield all([
    fork(watchOnCreateMovie),
    fork(watchGetGenres),
    fork(watchGetMovies),
    fork(watchGetMovie),
  ]);
}
