import * as types from "../constants/actionTypes";

const initialState = {
  users: [],
  activeUser: null,
  isAuthenticated: !!localStorage.getItem("token"),
  errors: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_USERS:
    case types.CREATE_USER:
      return {
        ...state,
      };
    case types.LOGIN_USER:
      return {
        ...state,
        users: action.payload,
      };
    case types.LOAD_USERS_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case types.CREATE_USER_SUCCESS:
      return {
        ...state,
      };
    case types.LOGIN_USER_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        users: action.payload,
      };
    case types.LOAD_USERS_ERROR:
    case types.CREATE_USER_ERROR:
    case types.LOGIN_USER_ERROR:
    case types.GET_ACTIVE_USER_ERROR:
      return {
        ...state,
        errors: action.payload,
      };
    case types.GET_ACTIVE_USER:
      return {
        ...state,
        isAuthenticated: true,
        user: action.user,
      };
    case types.LOGOUT_USER_SUCCESS:
      return {
        activeUser: null,
        isAuthenticated: false,
      };

    default:
      return state;
  }
};

export default authReducer;
