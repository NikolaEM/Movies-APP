import rootReducer from "../reducers/rootReducer";
import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
import rootSaga from "../saga/rootSaga";
import createSagaMiddleware from "redux-saga";
import { routerMiddleware } from "react-router-redux";
import History from "../../history/History";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware, routerMiddleware(History)];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = [applyMiddleware(...middlewares)];
let store = createStore(rootReducer, {}, composeEnhancers(...enhancers));
sagaMiddleware.run(rootSaga);

export default store;
