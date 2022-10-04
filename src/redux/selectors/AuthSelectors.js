import reducers from "../reducers/rootReducer";
import { createSelector } from "reselect";

const selectAuth = (state) => state.auth || reducers;

const makeSelectIsAuthenticated = () =>
  createSelector(selectAuth, (substate) => substate.isAuthenticated);

const makeSelectActiveUser = () =>
  createSelector(selectAuth, (substate) => substate.activeUser);

export { makeSelectIsAuthenticated, makeSelectActiveUser };
