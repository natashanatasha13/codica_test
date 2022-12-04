import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";

import rootReducer from "./reducers";
import rootSaga from "./sagas";

const configureStore = () => {
  const saga = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk, saga))
  );

  saga.run(rootSaga);
  return store;
};

const store = configureStore();

export default store;
