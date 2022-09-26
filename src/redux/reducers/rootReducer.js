import { combineReducers } from "redux";
import authReducer from "./AuthReducers";

const rootReducer = combineReducers({
  auth: authReducer,

});
export default rootReducer;