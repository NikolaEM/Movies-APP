import { combineReducers } from "redux";
import authReducer from "./AuthReducers";
import moviesReducer from "./MoviesReducers";

const rootReducer = combineReducers({
  auth: authReducer,
  movies: moviesReducer,
});
export default rootReducer;
