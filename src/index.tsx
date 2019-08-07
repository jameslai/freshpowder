/* Vendor */
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import AppLayout from "./AppLayout/AppLayout";

/* Internal */
import { rootReducer } from "./reducers";

// Let's get this party started
const store = createStore(rootReducer, applyMiddleware(thunk));

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
