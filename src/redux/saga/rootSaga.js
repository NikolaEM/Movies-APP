
import { all } from "redux-saga/effects";
import authSaga from "./AuthSaga";

export default function* rootSaga() {
  yield all([
    authSaga(),
]);
}