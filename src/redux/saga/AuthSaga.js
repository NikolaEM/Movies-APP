import * as types from "../constants/actionTypes";
import { put, call, takeEvery, all, fork } from "redux-saga/effects";
import { push } from "connected-react-router";
import {
  loadUsersSuccess,
  loadUsersError,
  createUserSuccess,
  createUserError,
  loginUserSuccess,
  loginUserError,
  logoutUserSuccess,
  getActiveUserError,
} from "../actions/AuthActions";
import authService from "../../services/AuthAPI/AuthService";
import { ROUTE } from "../../views/routes";

export function* onLoadUsers() {
  try {
    const response = yield call(authService.loadUsersApi);
    if (response.status === 200) {
      yield put(loadUsersSuccess(response.data));
    }
  } catch (error) {
    yield put(loadUsersError(error.response.data));
  }
}

export function* onCreateUser(action) {
  try {
    const response = yield call(authService.createUserApi, action.payload);
    yield put(createUserSuccess(response.data));
    yield put(push(ROUTE.LOGIN));
  } catch (error) {
    yield put(createUserError(error.response.data));
  }
}

export function* onLoginUser(action) {
  try {
    const response = yield call(authService.loginUserApi, action.payload);
    yield put(loginUserSuccess(response.data));
    if (response.status === 200) {
      yield put(push(ROUTE.DEFAULT));
    }
  } catch (error) {
    yield put(loginUserError(error.response.data));
  }
}

export function* setActiveUser() {
  try {
    const response = yield call(authService.getActiveUser);
    yield put(setActiveUser(response.data));
  } catch (error) {
    yield put(getActiveUserError(error.response.data));
  }
}

export function* onLogoutUser() {
  try {
    yield call(authService.logoutUserApi);
    yield put(logoutUserSuccess());
  } catch {}
}

export function* watchOnLoadUsers() {
  yield takeEvery(types.LOAD_USERS, onLoadUsers);
}

export function* watchOnCreateUser() {
  yield takeEvery(types.CREATE_USER, onCreateUser);
}

export function* watchOnLoginUser() {
  yield takeEvery(types.LOGIN_USER, onLoginUser);
}

export function* watchOnLogoutUser() {
  yield takeEvery(types.LOGOUT_USER_SUCCESS, onLogoutUser);
}

export function* getActiveUser() {
  yield takeEvery(types.GET_ACTIVE_USER, setActiveUser);
}

export default function* authSaga() {
  yield all([
    fork(watchOnLoadUsers),
    fork(watchOnCreateUser),
    fork(watchOnLoginUser),
    fork(watchOnLogoutUser),
    fork(getActiveUser),
  ]);
}
