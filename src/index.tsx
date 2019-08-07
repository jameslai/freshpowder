/* Vendor */
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import AppLayout from "./AppLayout/AppLayout";

/* Internal */
import { rootReducer } from "./reducers";

// Let's get this party started
const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

/**
 * Entrypoint for our application. Is the only part which should be aware of
 * the DOM, window object, instansiating stores, etc
 */
ReactDOM.render(
  <Provider store={store}>
    <AppLayout />
  </Provider>,
  document.getElementById("app")
);
