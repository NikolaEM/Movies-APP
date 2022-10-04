import * as types from "../constants/MovieActionTypes"
import {
    put, 
    call, 
    takeEvery, 
    all, 
    fork,
    delay 
} from "redux-saga/effects";
import { push } from "connected-react-router";
import { ROUTE } from "../../views/routes";
import movieService from "../../services/Movies/MovieService"; 
import {
    createMovieSuccess,
    createMovieError,
    loadGenresSuccess,
    loadGenresError
} from "../actions/MoviesActions"

export function* onCreateMovie(action){
    try{
        const response = yield call(movieService.createMovie, action.payload);
            yield put(createMovieSuccess(response.data));
            yield put(push(ROUTE.DEFAULT));
    } catch (error) {
        yield put(createMovieError(error.response.data));
    }
}

export function* onLoadGenres(){
    try{
        const response = yield call(movieService.getGenres);
            yield delay(500)
            yield put(loadGenresSuccess(response));
    } catch (error) {
        yield put(loadGenresError(error.response.data));
    }
}  

export function* watchOnCreateMovie(){
    yield takeEvery(types.CREATE_MOVIE, onCreateMovie);
}

export function* watchOnLoadGenres(){
    yield takeEvery(types.LOAD_GENRES, onLoadGenres);
}

export default function* moviesSaga(){
    yield all([
       fork(watchOnCreateMovie),
       fork(watchOnLoadGenres),
    ])
}