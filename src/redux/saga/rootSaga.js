
import { all } from "redux-saga/effects";
import authSaga from "./AuthSaga";
import moviesSaga from "./MoviesSaga";

export default function* rootSaga() {
  yield all([
    authSaga(),
    moviesSaga(),
]);
}