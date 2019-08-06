/* Vendor */
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch } from "react-router";
import { Provider } from "react-redux";
import { createStore } from "redux";

/* Internal */
import { rootReducer } from "./reducers";

/* Lazy loaded major sections */
const Dashboard = React.lazy(() => import("./Dashboard/Dashboard"));
const Databases = React.lazy(() => import("./Databases/Databases"));

// Let's get this party started
const store = createStore(rootReducer);

/**
 * Entrypoint for our application. Is the only part which should be aware of
 * the DOM, window object, instansiating stores, etc
 */
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Databases route="/databases" />
        <Dashboard route="*" />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("app")
);
