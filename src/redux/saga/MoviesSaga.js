import * as types from "../constants/MovieActionTypes"
import {
    put, 
    call, 
    takeEvery, 
    all, 
    fork, 
    // delay,
} from "redux-saga/effects";
import { push } from "connected-react-router";
import movieService from "../../services/Movies/MovieService"; 
import {
    createMovieSuccess,
    createMovieError
} from "../actions/MoviesActions"

export function* onCreateMovie(action){
    try{
        const response = yield call(movieService.createMovie, action.payload);
            yield put(createMovieSuccess(response.data));
            yield put(push('/'));
    } catch (error) {
        yield put(createMovieError(error.response.data));
    }
}

export function* watchOnCreateMovie(){
    yield takeEvery(types.CREATE_MOVIE, onCreateMovie);
}

export default function* moviesSaga(){
    yield all([
       fork(watchOnCreateMovie),

    ])
}