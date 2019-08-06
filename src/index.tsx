/* Vendor */
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Layout from "./Layout/Layout";

/* Internal */
import { rootReducer } from "./reducers";

// Let's get this party started
const store = createStore(rootReducer);

/**
 * Entrypoint for our application. Is the only part which should be aware of
 * the DOM, window object, instansiating stores, etc
 */
ReactDOM.render(
  <Provider store={store}>
    <Layout />
  </Provider>,
  document.getElementById("app")
);
