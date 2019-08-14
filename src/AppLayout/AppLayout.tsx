import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from "react-router-dom";

/* Hard imported loader */
import Loading from "../Loading/Loading";

/* Lazy loaded major sections */
const Dashboard = lazy(() => import("../Dashboard/Dashboard"));
const Databases = lazy(() => import("../Databases/Databases"));

export default function AppLayout() {
  return (
    <div>
      <Router>
        {renderNav()}
        <div>
          <Suspense fallback={<Loading />}>
            <Switch>
              <Route path="/databases" component={Databases} />
              <Route path="*" component={Dashboard} />
            </Switch>
          </Suspense>
        </div>
      </Router>
    </div>
  );
}

const onDatabasesMouseEnter = () => {
  import("../Databases/Databases");
};

const renderNav = () => {
  return (
    <nav className="nav nav-tabs my-3">
      <li className="nav-item">
        <NavLink to="/" exact className="nav-link">
          Dashboard
        </NavLink>
      </li>
      <li className="nav-item" onMouseEnter={onDatabasesMouseEnter}>
        <NavLink className="nav-link" to="/databases">
          Databases
        </NavLink>
      </li>
    </nav>
  );
};
