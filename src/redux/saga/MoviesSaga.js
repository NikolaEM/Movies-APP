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
  setTotalPages,
} from "../actions/MoviesActions";

function* onCreateMovie(action) {
  try {
    const response = yield call(movieService.createMovie, action.payload);
    yield put(createMovieSuccess(response.data));
    yield put(push(ROUTE.DEFAULT));
  } catch (error) {
    yield put(createMovieError(error.response.data));
  }
}

function* getGenres() {
  try {
    const response = yield call(movieService.getGenres);
    yield put(setGenresSuccess(response.results));
  } catch (error) {
    yield put(getGenresError(error.response.data));
  }
}

function* getMovies(page, search, genre) {
  try {
    const response = yield call(movieService.getMovies, page, search, genre);
    yield put(setMoviesSuccess(response));
  } catch (error) {
    yield put(getMoviesError(error.response.data));
  }
}
function* getMovie({ payload }) {
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
  yield takeEvery(types.GET_GENRES, getGenres);
}

export function* watchGetMovies() {
  yield takeEvery(types.GET_MOVIES, getMovies);
}

export function* watchGetMovie() {
  yield takeEvery(types.GET_MOVIE, getMovie);
}

export default function* moviesSaga() {
  yield all([
    fork(watchOnCreateMovie),
    fork(watchGetGenres),
    fork(watchGetMovies),
    fork(watchGetMovie),
  ]);
}
