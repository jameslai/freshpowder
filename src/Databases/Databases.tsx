import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchDatabases } from "./databasesActions";

/**
 * Primary renderer
 */

export default function Databases() {
  const dispatch = useDispatch();
  const databases = useSelector(state => state.databases);
  console.log(databases);
  useEffect(() => {
    dispatch(fetchDatabases());
  }, []);

  return (
    <>
      <Router>
        <h1>Databases</h1>
        {renderNav()}
        <Switch>
          <Route path="/databases/history" />
        </Switch>
        {renderDatabases(databases)}
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

const renderDatabases = databases => {
  return databases.map(database => {
    const { title } = database;
    return (
      <div>
        <h4>{title}</h4>
      </div>
    );
  });
};
