import * as types from "../constants/actionTypes";

export const loadUsers = () => ({
  type: types.LOAD_USERS,
});

export const loadUsersSuccess = (user) => ({
  type: types.LOAD_USERS_SUCCESS,
  payload: user,
});

export const loadUsersError = (error) => ({
  type: types.LOAD_USERS_ERROR,
  payload: error,
});

export const createUser = (user) => ({
  type: types.CREATE_USER,
  payload: user,
});

export const createUserSuccess = () => ({
  type: types.CREATE_USER_SUCCESS,
});

export const createUserError = (error) => ({
  type: types.CREATE_USER_ERROR,
  payload: error,
});

export const loginUser = (user) => {
  return {
    type: types.LOGIN_USER,
    payload: user,
  };
};

export const loginUserSuccess = (user) => ({
  type: types.LOGIN_USER_SUCCESS,
  payload: user,
});

export const loginUserError = (error) => ({
  type: types.LOGIN_USER_ERROR,
  payload: error,
});

export const logoutUserSuccess = () => ({
  type: types.LOGOUT_USER_SUCCESS,
});

export const getActiveUser = (user) => ({
  type: types.GET_ACTIVE_USER,
  payload: user,
});

export const getActiveUserError = (error) => ({
  type: types.GET_ACTIVE_USER_ERROR,
  payload: error,
});
