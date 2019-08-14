import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from "react-router-dom";

import { MemoizedDatabasesList } from './DatabasesList'

/**
 * Primary renderer
 */

export default function() {

  return (
    <>
      <Router>
        <h1>Databases</h1>
        {renderNav()}
        <Switch>
          <Route path="/databases/history" />
        </Switch>
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
