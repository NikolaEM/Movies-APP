import * as types from "../constants/actionTypes"
import {
    put, 
    call, 
    takeEvery, 
    all, 
    fork, 
    delay,
} from "redux-saga/effects";
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

export function* onLoadUsersStart(){
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

export function* onCreateUserStart(action){
    try{
        const response = yield call(authService.createUserApi, action.payload);
        if (response.status === 200){
            yield put(createUserSuccess(response.data));
        }
    } catch (error) {
        yield put(createUserError(error.response.data));
    }
}

export function* onLoginUserStart(action){
    try{
        const response = yield call(authService.loginUserApi, action.payload); 
        if (response.status === 200){
            yield put(loginUserSuccess(response.data));
        }
    } catch (error) {
        yield put(loginUserError(error.response.data));
    }
}

export function* onLogoutUserStart(){
    try{
        const response = yield call(authService.logoutUserApi);
        if (response.status === 200){
            yield put(logoutUserSuccess())
        }
    }catch {}
}

export function* onLoadUsers(){
     yield takeEvery(types.LOAD_USERS_START, onLoadUsersStart);
 }

 export function* onCreateUser(){
    yield takeEvery(types.CREATE_USER_START, onCreateUserStart);
}

export function* onLoginUser(){
    yield takeEvery(types.LOGIN_USER_START, onLoginUserStart);
}

export function* onLogoutUser(){
    yield takeEvery(types.LOGOUT_USER_SUCCESS, onLogoutUserStart)
}

export default function* authSaga(){
    yield all([
       fork(onLoadUsers),
       fork(onCreateUser),
       fork(onLoginUser),
       fork(onLogoutUser),
    ])
}