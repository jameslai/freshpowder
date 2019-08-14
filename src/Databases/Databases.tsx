import React, { lazy } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from "react-router-dom";

import { MemoizedDatabasesList } from "./DatabasesList";
const DatabasesCreate = lazy(() => import("../Databases/CreateDatabase"));

/**
 * Primary renderer
 */

export default function() {
  return (
    <>
      <Router>
        <h1>Databases</h1>
        <div className="my-3">
          <NavLink to="/databases/create" className="btn btn-primary">
            Create Database
          </NavLink>
        </div>
        <Route path="/databases/create" component={DatabasesCreate} />
        <MemoizedDatabasesList />
      </Router>
    </>
  );
}

/**
 * Helper renderers
 */

const renderNav = () => {
  return (
    <div>
      <NavLink to="/databases/history">History</NavLink>
      <NavLink to="/databases/history">Queries</NavLink>
    </div>
  );
};
