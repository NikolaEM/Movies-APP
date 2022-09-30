import * as types from "../constants/actionTypes"
import {
    put, 
    call, 
    takeEvery, 
    all, 
    fork, 
    delay,
} from "redux-saga/effects";
import { push } from "connected-react-router"; 
import { 
    loadUsersSuccess, 
    loadUsersError, 
    createUserSuccess, 
    createUserError, 
    loginUserSuccess, 
    loginUserError, 
    logoutUserSuccess
} from "../actions/AuthActions";
import authService from "../../services/AuthAPI/AuthService";

export function* onLoadUsers(){
    try{
        const response = yield call(authService.loadUsersApi);
        if (response.status === 200){
            yield delay(500)
            yield put(loadUsersSuccess(response.data));
        }
    } catch (error) {
        yield put(loadUsersError(error.response.data));
    }
}   

export function* onCreateUser(action){
    try{
        const response = yield call(authService.createUserApi, action.payload);
            yield put(createUserSuccess(response.data));
            yield put(push('/login'));
    } catch (error) {
        yield put(createUserError(error.response.data));
    }
}

export function* onLoginUser(action){
    try{
        const response = yield call(authService.loginUserApi, action.payload);
            yield put(loginUserSuccess(response.data));
            yield put(push('/'));
    } catch (error) {
        yield put(loginUserError(error.response.data));
    }
}

export function* getActiveUser(){
    try{
        const response = yield call(authService.getActiveUser)
        yield put(getActiveUser(response.data))
    }catch (error) {
        console.log("Session expired");
    }
}

export function* onLogoutUser(){
    try{
        yield call(authService.logoutUserApi);
        yield put(logoutUserSuccess())
    }catch {}
}

export function* watchOnLoadUsers(){
     yield takeEvery(types.LOAD_USERS, onLoadUsers);
 }

 export function* watchOnCreateUser(){
    yield takeEvery(types.CREATE_USER, onCreateUser);
}

export function* watchOnLoginUser(){
    yield takeEvery(types.LOGIN_USER, onLoginUser);
}

export function* watchOnLogoutUser(){
    yield takeEvery(types.LOGOUT_USER_SUCCESS, onLogoutUser)
}

export function* watchGetActiveUser(){
    yield takeEvery(types.GET_ACTIVE_USER, getActiveUser)
}

export default function* authSaga(){
    yield all([
       fork(watchOnLoadUsers),
       fork(watchOnCreateUser),
       fork(watchOnLoginUser),
       fork(watchOnLogoutUser),
       fork(watchGetActiveUser),
    ])
}