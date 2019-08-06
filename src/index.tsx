/* Vendor */
import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

/* Internal */
import { rootReducer } from "./reducers";

/* Hard imported loader */
import Loading from "./Loading/Loading";

/* Lazy loaded major sections */
const Dashboard = lazy(() => import("./Dashboard/Dashboard"));
const Databases = lazy(() => import("./Databases/Databases"));

// Let's get this party started
const store = createStore(rootReducer);

/**
 * Entrypoint for our application. Is the only part which should be aware of
 * the DOM, window object, instansiating stores, etc
 */
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Databases route="/databases" />
          <Dashboard route="*" />
        </Switch>
      </Suspense>
    </Router>
  </Provider>,
  document.getElementById("app")
);
