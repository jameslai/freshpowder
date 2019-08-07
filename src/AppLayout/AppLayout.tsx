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

const renderNav = () => {
  return (
    <nav>
      <NavLink to="/">Dashboard</NavLink>
      <NavLink to="/databases">Databases</NavLink>
    </nav>
  );
};
